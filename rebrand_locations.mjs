import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locationsDir = path.join(__dirname, 'app', 'locations');

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file === 'page.tsx') {
            rebrandFile(filePath);
        }
    }
}

function rebrandFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Text Replacements (Brand Name & Terminology)
    // Haram Taxi Service -> Haram Chauffeur Service
    content = content.replace(/Haram Taxi Service/g, 'Haram Chauffeur Service');
    content = content.replace(/Haram Taxi/g, 'Haram Chauffeur');
    
    // Taxi Service -> Chauffeur Service
    content = content.replace(/Taxi Service/g, 'Chauffeur Service');
    content = content.replace(/taxi service/g, 'chauffeur service');
    content = content.replace(/Taxi fare/g, 'Chauffeur fare');
    content = content.replace(/taxi drivers/g, 'professional chauffeurs');
    content = content.replace(/Jeddah taxi/g, 'Jeddah chauffeur');
    content = content.replace(/private taxi/g, 'private chauffeur');
    
    // 2. Color Replacements (Tailwind classes)
    content = content.replace(/bg-slate-500/g, 'bg-brand-navy');
    content = content.replace(/text-slate-500/g, 'text-brand-navy');
    content = content.replace(/hover:text-slate-500/g, 'hover:text-brand-navy');
    content = content.replace(/border-slate-500/g, 'border-brand-navy');
    content = content.replace(/decoration-slate-500/g, 'decoration-brand-navy');
    
    content = content.replace(/bg-slate-600/g, 'bg-brand-navy-dark');
    content = content.replace(/text-slate-600/g, 'text-brand-navy-dark');
    content = content.replace(/hover:bg-slate-600/g, 'hover:bg-brand-navy-dark');
    
    content = content.replace(/text-slate-400/g, 'text-brand-gold'); // Accent color
    content = content.replace(/bg-slate-100/g, 'bg-brand-navy-pale');
    content = content.replace(/text-slate-100/g, 'text-brand-navy-pale');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Rebranded: ${filePath}`);
    }
}

console.log(`Starting rebranding for locations in: ${locationsDir}`);
walkDir(locationsDir);
console.log('Rebranding complete.');
