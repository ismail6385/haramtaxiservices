const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname);
const importLine = `import WhatsAppIcon from '@/components/icons/WhatsAppIcon';`;

function getAllTSXFiles(dir, files = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && !['node_modules', '.next', '.git'].includes(entry.name)) {
            getAllTSXFiles(fullPath, files);
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
            files.push(fullPath);
        }
    }
    return files;
}

const files = getAllTSXFiles(projectRoot);
let updatedCount = 0;

for (const filePath of files) {
    // Skip the icon file itself and our script
    if (filePath.includes('WhatsAppIcon') || filePath.includes('fix-whatsapp')) continue;

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only process files that have both MessageCircle and wa.me/WhatsApp
    const hasMessageCircle = content.includes('MessageCircle');
    const hasWhatsApp = content.includes('wa.me') || content.includes('WhatsApp') || content.includes('whatsapp');
    
    if (!hasMessageCircle || !hasWhatsApp) continue;
    if (content.includes('WhatsAppIcon')) continue; // Already updated

    // Add import after the lucide-react import
    content = content.replace(
        /(import \{[^}]*MessageCircle[^}]*\} from ['"]lucide-react['"];)/,
        `$1\n${importLine}`
    );
    
    // Replace all MessageCircle JSX usages in WhatsApp button contexts
    // Pattern: <MessageCircle className="w-X h-X ..." />
    content = content.replace(
        /<MessageCircle className="(w-\d+ h-\d+[^"]*)"/g,
        (match, classes) => `<WhatsAppIcon className="${classes}"`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`✅ Updated: ${path.relative(projectRoot, filePath)}`);
}

console.log(`\n🎉 Total files updated: ${updatedCount}`);
