const fs = require('fs');
const path = require('path');

const locationsDir = path.join(process.cwd(), 'app', 'locations');

console.log(`Processing directory: ${locationsDir}`);

if (!fs.existsSync(locationsDir)) {
    console.error(`Error: Directory not found: ${locationsDir}`);
    process.exit(1);
}

const folders = fs.readdirSync(locationsDir).filter(f => fs.statSync(path.join(locationsDir, f)).isDirectory());

console.log(`Found ${folders.length} location folders.`);

folders.forEach(folder => {
    const filePath = path.join(locationsDir, folder, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Update imports
    // Handle adding WhatsAppIcon and removing MessageCircle
    if (content.includes('MessageCircle')) {
        // Remove MessageCircle from lucide-react import
        content = content.replace(/import {([^}]*)} from 'lucide-react';/, (match, p1) => {
            const icons = p1.split(',').map(i => i.trim()).filter(i => i !== 'MessageCircle' && i !== '');
            if (icons.length === 0) return '';
            return `import { ${icons.join(', ')} } from 'lucide-react';`;
        });
        
        // Add WhatsAppIcon import if not present
        if (!content.includes('import WhatsAppIcon')) {
            const lastImportIndex = content.lastIndexOf('import');
            const endOfLastImport = content.indexOf(';', lastImportIndex) + 1;
            content = content.slice(0, endOfLastImport) + `\nimport WhatsAppIcon from '@/components/icons/WhatsAppIcon';` + content.slice(endOfLastImport);
        }
    }

    // 2. Update JSX usages
    content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');

    // 3. Update Button colors for WhatsApp green
    // Replace bg-green-500 or bg-green-600 with official WhatsApp green #25D366
    content = content.replace(/bg-green-500/g, 'bg-[#25D366]');
    content = content.replace(/bg-green-600/g, 'bg-[#1ebd5b]');
    
    // 4. Update Footer Button (outline case)
    // Some buttons use hover:bg-white and text-slate-500
    content = content.replace(/hover:bg-white hover:text-slate-500/g, 'hover:bg-[#25D366] hover:text-white');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${folder}`);
    }
});
