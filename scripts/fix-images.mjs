import fs from 'fs';
import path from 'path';

const filePaths = [
    path.join(process.cwd(), 'lib/blogData.ts'),
    path.join(process.cwd(), 'components/BlogPreview.tsx'),
    path.join(process.cwd(), 'components/SEOContent.tsx'),
    path.join(process.cwd(), 'components/PopularRoutes.tsx'),
    path.join(process.cwd(), 'components/VideoTour.tsx')
];

let globalReplacedCount = 0;

for (const filePath of filePaths) {
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        continue;
    }

    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Default replacement image for unsplash
    const fallbackImage = "/makkah-clock-tower-new.webp";

    // 1. Replace unsplash URLs
    const unsplashRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9.\-?=&]+/g;
    const previousContent = fileContent;

    fileContent = fileContent.replace(unsplashRegex, fallbackImage);

    // 2. Replace specific broken .webp links reported in log
    fileContent = fileContent.replace(/\/hyundai-staria-taxi-makkah\.webp/g, '/hyundai-staria-family-taxi.webp');
    fileContent = fileContent.replace(/\/toyota-camry-taxi\.webp/g, '/toyota-camry-taxi-sedan.webp');

    if (fileContent !== previousContent) {
        fs.writeFileSync(filePath, fileContent, 'utf-8');
        const countMatches = (previousContent.match(unsplashRegex) || []).length;
        globalReplacedCount += countMatches;
        console.log(`✅ Fixed images in ${path.basename(filePath)} (${countMatches} Unsplash URLs replaced).`);
    } else {
        console.log(`No Unsplash/broken images found in ${path.basename(filePath)}.`);
    }
}

console.log(`\n🎉 Image fix completed! Replaced ${globalReplacedCount} broken links globally.`);
