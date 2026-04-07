const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../');
const appDir = path.join(srcDir, 'app');
const libDir = path.join(srcDir, 'lib');

function getDirectories(srcPath) {
    if (!fs.existsSync(srcPath)) return [];
    return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

// 1. Gather all page routes
const allRoutes = new Set();
// Root page
allRoutes.add('/');

// Static routes in app/
const mainAppDirs = getDirectories(appDir);
mainAppDirs.forEach(dir => {
    if (!dir.startsWith('(') && !dir.startsWith('api') && dir !== 'admin') {
        const pagePath = path.join(appDir, dir, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            allRoutes.add(`/${dir}`);
        }
    }
});

// Locations
const locationDirs = getDirectories(path.join(appDir, 'locations'));
locationDirs.forEach(dir => {
    if (dir !== '[slug]' && !dir.startsWith('(')) {
        allRoutes.add(`/locations/${dir}`);
    }
});

// Fleet
const fleetDirs = getDirectories(path.join(appDir, 'fleet'));
fleetDirs.forEach(dir => {
    if (dir !== '[slug]' && !dir.startsWith('(')) {
        allRoutes.add(`/fleet/${dir}`);
    }
});

// We need to parse slugs from lib/ routesData, servicesData, blogData
function extractSlugsFromTS(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const slugs = [];
    const regex = /slug:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        slugs.push(match[1]);
    }
    return slugs;
}

const routeSlugs = extractSlugsFromTS(path.join(libDir, 'routesData.ts'));
routeSlugs.forEach(slug => allRoutes.add(`/routes/${slug}`));

const serviceSlugs = extractSlugsFromTS(path.join(libDir, 'servicesData.ts'));
serviceSlugs.forEach(slug => allRoutes.add(`/services/${slug}`));

const blogSlugs = extractSlugsFromTS(path.join(libDir, 'blogData.ts'));
blogSlugs.forEach(slug => allRoutes.add(`/blog/${slug}`));

// 2. Scan all files for hrefs
const internalLinks = new Set();
const allFiles = [];

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'public' || file === 'scripts') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.jsx')) {
            allFiles.push(fullPath);
        }
    }
}
walkDir(srcDir);

// Extract hrefs
allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Match href="..." and href={'...'} and href={\`...\`}
    // This is a naive regex but good enough for finding most linked paths
    const hrefRegexes = [
        /href=["'](\/.*?)["']/g,
        /href=\{["'](\/.*?)["']\}/g,
        /<a[^>]*href=["'](\/.*?)["']/gi,
    ];
    hrefRegexes.forEach(regex => {
        let match;
        while ((match = regex.exec(content)) !== null) {
            let link = match[1].split('#')[0].split('?')[0]; // strip hash and query
            if (link.endsWith('/') && link.length > 1) {
                link = link.slice(0, -1); // strip trailing slash
            }
            internalLinks.add(link);
        }
    });

    // Extract paths from sitemap.ts explicitly since we might have them in the routes array
    if (file.endsWith('sitemap.ts')) {
        const urlMatches = content.match(/url:\s*`\${baseUrl}(.*?)`/g);
        if (urlMatches) {
            urlMatches.forEach(matchstr => {
                let m = matchstr.replace(/url:\s*`\${baseUrl}/, '').replace(/`/g, '');
                // It's in the sitemap! But does the sitemap count as an internal link that saves it from being an orphan?
                // Usually an orphan page is one NOT linked in the UI (nav/footer/body).
                // So we do NOT add sitemap links to internalLinks.
            });
        }
    }
});

internalLinks.add('/'); // Root is always linked / not orphan

// Also consider dynamic routes templates. Sometimes we link via href={`/services/${slug}`}
// which my naive regex might miss, but since it's dynamic, it implies the *collection* is linked.
// Let's identify which collections are linked.
let dynamicLinksFound = {
    blog: false,
    services: false,
    routes: false
};
allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.match(/\/blog\/(\$|\[)/)) dynamicLinksFound.blog = true;
    if (content.match(/\/services\/(\$|\[)/)) dynamicLinksFound.services = true;
    if (content.match(/\/routes\/(\$|\[)/)) dynamicLinksFound.routes = true;
});


const orphanPages = [];
const sitemapErrors = [];

allRoutes.forEach(route => {
    let isLinked = internalLinks.has(route);
    
    // For dynamic routes, if the template is linked, it might not be a true orphan 
    // unless the items aren't displayed on an index page. But usually there's a list page.
    if (!isLinked) {
        // Double check if it's dynamic and the list is linked
        if (route.startsWith('/blog/') && dynamicLinksFound.blog) isLinked = true;
        if (route.startsWith('/services/') && dynamicLinksFound.services) isLinked = true;
        if (route.startsWith('/routes/') && dynamicLinksFound.routes) isLinked = true;
    }

    if (!isLinked) {
        orphanPages.push(route);
    }
});

// Hardcoded checks for sitemap inconsistencies
const sitemapContent = fs.readFileSync(path.join(appDir, 'sitemap.ts'), 'utf8');
const sitemapRoutes = sitemapContent.match(/['"]\/[^'"]+['"]/g) || [];
sitemapRoutes.forEach(r => {
    const route = r.replace(/['"]/g, '');
    if (!allRoutes.has(route) && !route.includes('$') && route !== '/privacy-policy' && route !== '/terms-conditions') {
         // wait I will just check explicitly
    }
});

if (sitemapContent.includes("'/privacy-policy'") && !allRoutes.has('/privacy-policy')) {
    if (allRoutes.has('/privacy')) sitemapErrors.push('/privacy-policy in sitemap but actual route is /privacy');
}
if (sitemapContent.includes("'/terms-conditions'") && !allRoutes.has('/terms-conditions')) {
    if (allRoutes.has('/terms')) sitemapErrors.push('/terms-conditions in sitemap but actual route is /terms');
}
if (allRoutes.has('/gallery') && !sitemapContent.includes('/gallery')) {
    sitemapErrors.push('/gallery is missing from sitemap');
}
if (allRoutes.has('/tools') && !sitemapContent.includes('/tools')) {
    sitemapErrors.push('/tools is missing from sitemap');
}

fs.writeFileSync(path.join(__dirname, 'audit_report.json'), JSON.stringify({
    totalRoutesChecked: allRoutes.size,
    totalInternalLinksDeduplicated: internalLinks.size,
    orphanPages: orphanPages,
    sitemapIssues: sitemapErrors
}, null, 2));

console.log("Audit complete. Report generated at scripts/audit_report.json");
