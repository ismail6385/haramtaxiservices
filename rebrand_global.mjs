import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDirs = [
    path.join(__dirname, 'app', 'locations'),
    path.join(__dirname, 'app', 'services'),
    path.join(__dirname, 'app', 'routes'),
    path.join(__dirname, 'components')
];

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file === 'page.tsx' || file.endsWith('.tsx') || file.endsWith('.ts')) {
            rebrandFile(filePath);
        }
    }
}

function rebrandFile(filePath) {
    // Skip already rebranded files or system files
    if (filePath.includes('node_modules')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Text Replacements (Brand Name & Terminology)
    // Haram Taxi Service -> Haram Chauffeur Service
    content = content.replace(/Haram Taxi Service/g, 'Haram Chauffeur Service');
    content = content.replace(/Haram Taxi/g, 'Haram Chauffeur');
    
    // Taxi Service -> Chauffeur Service (Case sensitive)
    content = content.replace(/Taxi Service/g, 'Chauffeur Service');
    content = content.replace(/taxi service/g, 'chauffeur service');
    content = content.replace(/Taxi fare/g, 'Chauffeur fare');
    content = content.replace(/taxi fare/g, 'chauffeur fare');
    content = content.replace(/taxi drivers/g, 'professional chauffeurs');
    content = content.replace(/Taxi drivers/g, 'Professional Chauffeurs');
    content = content.replace(/private taxi/g, 'private chauffeur');
    content = content.replace(/Private taxi/g, 'Private Chauffeur');
    content = content.replace(/Taxi for/g, 'Chauffeur for');
    content = content.replace(/taxi for/g, 'chauffeur for');
    
    // 2. Color Replacements (Tailwind classes)
    content = content.replace(/bg-slate-500/g, 'bg-brand-navy');
    content = content.replace(/text-slate-500/g, 'text-brand-navy');
    content = content.replace(/hover:text-slate-500/g, 'hover:text-brand-navy');
    content = content.replace(/border-slate-500/g, 'border-brand-navy');
    
    content = content.replace(/bg-slate-600/g, 'bg-brand-navy-dark');
    content = content.replace(/text-slate-600/g, 'text-brand-navy-dark');
    
    content = content.replace(/bg-slate-800/g, 'bg-brand-navy-dark');
    content = content.replace(/bg-slate-900/g, 'bg-brand-navy-dark');

    // Handle Indigo (Abha and others)
    content = content.replace(/bg-indigo-50/g, 'bg-brand-navy-pale/10');
    content = content.replace(/bg-indigo-100/g, 'bg-brand-navy-pale');
    content = content.replace(/bg-indigo-200/g, 'bg-brand-navy-pale');
    content = content.replace(/bg-indigo-600/g, 'bg-brand-navy');
    content = content.replace(/bg-indigo-700/g, 'bg-brand-navy-dark');
    content = content.replace(/bg-indigo-900/g, 'bg-brand-navy-dark');
    content = content.replace(/text-indigo-600/g, 'text-brand-navy');
    content = content.replace(/text-indigo-700/g, 'text-brand-navy-dark');
    content = content.replace(/text-indigo-900/g, 'text-brand-navy-dark');
    content = content.replace(/border-indigo-100/g, 'border-brand-navy-pale');
    content = content.replace(/border-indigo-200/g, 'border-brand-navy-pale');

    content = content.replace(/text-slate-400/g, 'text-brand-gold');
    content = content.replace(/bg-slate-100/g, 'bg-brand-navy-pale');
    content = content.replace(/text-slate-100/g, 'text-brand-navy-pale');
    content = content.replace(/bg-slate-50/g, 'bg-brand-navy-pale/10');

    // More Terminology
    content = content.replace(/book your ride/gi, 'Reserve Your Chauffeur');
    content = content.replace(/book a ride/gi, 'Reserve VIP Transport');
    content = content.replace(/reliable taxi/gi, 'elite chauffeur service');
    content = content.replace(/prompt pickups/gi, 'dignified arrivals');
    content = content.replace(/professional drivers/gi, 'professional chauffeurs');
    content = content.replace(/Competitive Quotes/g, 'Premium VIP Service');
    content = content.replace(/Taxi Fares/g, 'VIP Transport Quotes');
    content = content.replace(/taxi fare/gi, 'chauffeur service quote');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filePath}`);
    }
}

console.log('Starting global rebranding...');
targetDirs.forEach(dir => {
    console.log(`Scanning: ${dir}`);
    walkDir(dir);
});
console.log('Rebranding complete.');
