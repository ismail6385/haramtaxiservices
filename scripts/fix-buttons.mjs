import fs from 'fs';
import path from 'path';

const locationsDir = path.join(process.cwd(), 'app', 'locations');
const servicesDir = path.join(process.cwd(), 'app', 'services');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let changed = false;
    
    // Fix WhatsApp Booking outline buttons in locations
    const outlineRegex = /<Button size="lg" variant="outline" className="border-([a-z]+)-(\d+) text-white hover:bg-([a-z]+)-(\d+) px-(\d+) py-(\d+) text-lg">/g;
    content = content.replace(outlineRegex, (match, borderC, borderN, hoverC, hoverN, px, py) => {
        changed = true;
        return `<Button size="lg" variant="outline" className="bg-transparent border-${borderC}-${borderN} text-white hover:bg-${hoverC}-${hoverN} hover:text-white active:bg-${hoverC}-${parseInt(hoverN)+100} active:text-white px-${px} py-${py} text-lg transition-colors">`;
    });

    const outlineRegex2 = /<Button size="lg" variant="outline" className="([\s\S]*?)">/g;
    content = content.replace(outlineRegex2, (match, classNames) => {
        if (!classNames.includes('bg-transparent') && classNames.includes('text-white') && classNames.includes('border-')) {
            changed = true;
            return `<Button size="lg" variant="outline" className="bg-transparent ${classNames} transition-colors">`;
        }
        return match;
    });

    // Let's also enforce transition-colors and active states on primary buttons
    const primaryRegex = /<Button size="lg" className="bg-([a-z]+)-(\d+) hover:bg-([a-z]+)-(\d+) text-white(.*?)">/g;
    content = content.replace(primaryRegex, (match, bgC, bgN, hoverC, hoverN, rest) => {
        if (!rest.includes('active:bg-')) {
            changed = true;
            const activeWeight = parseInt(hoverN) < 900 ? parseInt(hoverN) + 100 : 900;
            return `<Button size="lg" className="bg-${bgC}-${bgN} hover:bg-${hoverC}-${hoverN} active:bg-${hoverC}-${activeWeight} text-white${rest} transition-colors">`;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${filePath}`);
    }
}

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('page.tsx')) {
            replaceInFile(fullPath);
        }
    }
}

processDir(locationsDir);
console.log('Location pages updated.');
