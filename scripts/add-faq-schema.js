const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../app/locations');

const dirs = fs.readdirSync(locationsDir);

let updated = 0;
let skipped = 0;

for (const dir of dirs) {
    const filePath = path.join(locationsDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has FAQPage
    if (content.includes('FAQPage')) {
        skipped++;
        continue;
    }

    // Skip if no faqs array
    if (!content.includes('const faqs')) {
        skipped++;
        continue;
    }

    // 1. Add faqSchema after localBusinessSchema closing };
    //    Find the last }; before `return (` that belongs to localBusinessSchema
    const schemaInsertMarker = /("priceRange":\s*"\$\$"\s*\n\s*\};)/;
    if (!schemaInsertMarker.test(content)) {
        console.log(`SKIP (no priceRange marker): ${dir}`);
        skipped++;
        continue;
    }

    const faqSchemaCode = `\n\n    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };`;

    content = content.replace(schemaInsertMarker, (match) => match + faqSchemaCode);

    // 2. Add faqSchema script tag after localBusinessSchema script tag
    const scriptMarker = `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />`;
    const faqScriptTag = `\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />`;

    if (!content.includes(scriptMarker)) {
        console.log(`SKIP (no script marker): ${dir}`);
        skipped++;
        continue;
    }

    content = content.replace(scriptMarker, scriptMarker + faqScriptTag);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED: ${dir}`);
    updated++;
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
