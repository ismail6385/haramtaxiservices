import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// Haram Taxi - Ultimate Competitor Spider Bot 🕷️🕸️
// Crawls an ENTIRE competitor website while you sleep.
// Extracts Keywords, H1, H2, and Text from EVERY page (Umrah, Border, Tours).
// Usage: node scripts/ultimate-competitor-spider.mjs "https://competitor.com"
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSpider(startUrl) {
    console.log(`\n🕷️ Ultimate Competitor Spider Initiated!`);
    console.log(`📡 Infiltrating Root Domain: ${startUrl}`);
    console.log(`🛌 You can go sleep now. I will rip out their entire infrastructure.\n`);

    let playwright;
    try {
        playwright = await import('playwright');
    } catch (e) {
        console.error('❌ Please run: npm install playwright');
        process.exit(1);
    }

    const browser = await playwright.chromium.launch({ 
        headless: false, 
        args: ['--disable-blink-features=AutomationControlled'] 
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });

    const page = await context.newPage();

    // Setup Domain Filtering and Queues
    const rootDomain = new URL(startUrl).hostname;
    const toVisit = [startUrl];
    const visited = new Set();
    
    // Create the massive output file
    const outputDir = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
    
    const safeDomain = rootDomain.replace(/[^a-zA-Z0-9]/g, '_');
    const masterFile = path.join(outputDir, `SPIDER_DUMP_${safeDomain}_${Date.now()}.md`);
    
    fs.writeFileSync(masterFile, `# 🕷️ MASSIVE COMPETITOR DUMP: ${rootDomain}\n*Scraped over an extended period. Contains all services, borders, and Umrah guides.*\n\n`);

    // Auto-Captcha check function
    async function checkCaptcha(page) {
        let title = await page.title();
        if (title.includes("Just a moment") || title.includes("Security")) {
            console.log(`\n🛑 CLOUDFLARE DETECTED! Waiting for manual bypass...`);
            await page.waitForFunction(() => !document.title.includes("Just a moment"), { timeout: 0 }); 
            console.log(`\n🔓 BYPASSED! Resuming...`);
            await page.waitForTimeout(2000);
        }
    }

    while (toVisit.length > 0) {
        const currentUrl = toVisit.pop();
        
        if (visited.has(currentUrl)) continue;
        visited.add(currentUrl);

        console.log(`\n➡️ Drilling into: ${currentUrl}`);
        console.log(`⏳ Queue remaining: ${toVisit.length} pages...`);

        try {
            await page.goto(currentUrl, { waitUntil: 'domcontentloaded', timeout: 50000 });
            await checkCaptcha(page);

            // Random scroll to load lazy content
            await page.mouse.wheel(0, 1000);
            await page.waitForTimeout(1000);

            // 1. Extract SEO Data
            const seoData = await page.evaluate(() => {
                return {
                    title: document.title,
                    desc: document.querySelector('meta[name="description"]')?.content || 'None',
                    keywords: document.querySelector('meta[name="keywords"]')?.content || 'None'
                };
            });

            // 2. Extract Headings (Services, Rules, etc)
            const headings = await page.evaluate(() => {
                const h1 = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim()).filter(Boolean);
                const h2 = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim()).filter(Boolean);
                return { h1, h2 };
            });

            // 3. Extract High Value Text (Border, Hajj, Makkah, Saudi rules)
            const textContent = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('p, div'))
                    .map(p => p.innerText.trim())
                    .filter(p => p.length > 100 && /(border|hajj|umrah|visa|bahrain|riyadh|makkah|madinah|jeddah|taxi|chauffeur)/i.test(p));
            });
            const uniqueText = [...new Set(textContent)]; // remove duplicates

            // 4. Save to Master File
            let reportChunk = `\n\n## 🔗 Page: ${currentUrl}\n`;
            reportChunk += `**Title:** ${seoData.title}\n`;
            reportChunk += `**Keywords:** ${seoData.keywords}\n`;
            if (headings.h1.length) reportChunk += `**H1:** ${headings.h1.join(', ')}\n`;
            if (headings.h2.length) reportChunk += `**H2 (Subtopics):**\n${headings.h2.map(h=>`- ${h}`).join('\n')}\n`;
            if (uniqueText.length) reportChunk += `**Critical Extracted Text:**\n${uniqueText.map(t=>`> 📄 ${t.substring(0,300)}...`).join('\n\n')}\n`;
            reportChunk += `---\n`;

            fs.appendFileSync(masterFile, reportChunk);
            console.log(`💾 Data stripped and saved to database.`);

            // 5. Find NEW links on this page to crawl
            const newLinks = await page.evaluate((domain) => {
                return Array.from(document.querySelectorAll('a'))
                    .map(a => a.href)
                    .filter(href => href.includes(domain) && !href.includes('#') && !href.includes('.jpg') && !href.includes('.pdf') && !href.includes('mailto:'));
            }, rootDomain);

            let added = 0;
            newLinks.forEach(link => {
                // Ignore duplicates and already visited
                if (!visited.has(link) && !toVisit.includes(link)) {
                    toVisit.push(link);
                    added++;
                }
            });
            console.log(`🕷️ Found ${added} new internal pages to crawl.`);

        } catch (e) {
            console.log(`⚠️ Skipped page due to error: ${e.message}`);
        }

        // Wait to avoid getting IP Banned (Human simulation)
        const delay = Math.floor(Math.random() * 3000) + 2000;
        await page.waitForTimeout(delay);
    }

    await browser.close();
    console.log(`\n🎉 MASSIVE OPERATION COMPLETE! ENTIRE SITE SCRAPED.`);
    console.log(`📊 Total Pages Ripped: ${visited.size}`);
    console.log(`📄 Check your Ultimate Database File: ${masterFile}`);
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log(`
🕷️ Ultimate Competitor Spider 
Usage: node ultimate-competitor-spider.mjs "https://competitor.com"
`);
    process.exit(1);
}

runSpider(args[0]);
