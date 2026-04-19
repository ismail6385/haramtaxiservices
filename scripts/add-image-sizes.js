const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../app/locations');
const dirs = fs.readdirSync(locationsDir);

let updated = 0;

for (const dir of dirs) {
    const filePath = path.join(locationsDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Add sizes="100vw" to full-width hero images that have priority and w-full
    // Match Image tags with priority and w-full class but no sizes attribute
    const before = content;

    content = content.replace(
        /(<Image\b(?:(?!sizes=)[^>])*?)(className="w-full h-full object-cover(?:[^"]*)")((?:(?!sizes=)[^>])*?)(priority\s*\/>)/g,
        (match, before1, className, between, end) => {
            return `${before1}${className}${between}sizes="100vw"\n                        ${end}`;
        }
    );

    // Also handle the variant with priority before className
    content = content.replace(
        /(<Image\b(?:(?!sizes=)[^>])*?)(priority\s*\n\s*)(className="w-full h-full object-cover(?:[^"]*)")((?:(?!sizes=)[^>])*?)(\/>)/g,
        (match, before1, priorityAttr, className, between, end) => {
            return `${before1}${priorityAttr}${className}${between}sizes="100vw"\n                        ${end}`;
        }
    );

    if (content !== before) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`UPDATED: ${dir}`);
        updated++;
    }
}

console.log(`\nDone. Updated: ${updated} files.`);
