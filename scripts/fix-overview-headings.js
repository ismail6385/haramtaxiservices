const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../app/locations');

function toQuestion(h2Text) {
    // Already a question
    if (h2Text.endsWith('?')) return null;

    // "Taxi Fares in X" / "Taxi Prices in X" / "Taxi Rates in X"
    let m = h2Text.match(/^Taxi (?:Fares|Prices|Rates) in (.+)$/);
    if (m) return `How much does a taxi cost in ${m[1]}?`;

    // "Taxi Fares from X"
    m = h2Text.match(/^Taxi Fares from (.+)$/);
    if (m) return `How much does a taxi from ${m[1]} cost?`;

    // "Taxi Fares to X"
    m = h2Text.match(/^Taxi Fares to (.+)$/);
    if (m) return `How much does a taxi to ${m[1]} cost?`;

    // "X Taxi Rates" (e.g. "Yanbu Taxi Rates")
    m = h2Text.match(/^(.+) Taxi Rates$/);
    if (m) return `How much does a taxi cost in ${m[1]}?`;

    // "Taxi Booking in X"
    m = h2Text.match(/^Taxi Booking in (.+)$/);
    if (m) return `How do I book a taxi in ${m[1]}?`;

    // "Getting Around X"
    m = h2Text.match(/^Getting Around (.+)$/);
    if (m) return `How do I get around ${m[1]}?`;

    // "Border Taxi Rates"
    if (h2Text === 'Border Taxi Rates') return 'How much does a taxi to the border cost?';

    return null;
}

const dirs = fs.readdirSync(locationsDir);
let updated = 0;

for (const dir of dirs) {
    const filePath = path.join(locationsDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('AI Overview Block')) continue;

    // Match H2 inside AI Overview Block section (within 20 lines after comment)
    const replaced = content.replace(
        /(\{\/\* AI Overview Block \*\/\}[\s\S]{0,600}?<h2[^>]*>)([^<]+)(<\/h2>)/,
        (full, before, h2Text, after) => {
            const question = toQuestion(h2Text.trim());
            if (!question) return full;
            console.log(`  "${h2Text.trim()}" → "${question}"`);
            return before + question + after;
        }
    );

    if (replaced !== content) {
        fs.writeFileSync(filePath, replaced, 'utf8');
        console.log(`UPDATED: ${dir}`);
        updated++;
    }
}

console.log(`\nDone. Updated: ${updated} files.`);
