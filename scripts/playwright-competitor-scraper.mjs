import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// Haram Taxi - Playwright Competitor SEO & Keyword Scraper 🕵️‍♂️🔥
// Scrapes competitor websites, extracts their keywords, 
// H1/H2 structures, and blog posts to steal their SEO strategy!
// Usage: node scripts/playwright-competitor-scraper.mjs "https://competitor.com/blog"
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function scrapeCompetitor(targetUrl) {
    console.log(`\n🕵️‍♂️ Competitor SEO Scanner Initiated...`);
    console.log(`📡 Infiltrating: ${targetUrl}`);

    let playwright;
    try {
        playwright = await import('playwright');
    } catch (e) {
        console.error('❌ Please run: npm install playwright');
        process.exit(1);
    }

    // Launch Real Chrome Window (Required to bypass Cloudflare on competitor sites)
    const browser = await playwright.chromium.launch({ 
        headless: false, 
        args: ['--disable-blink-features=AutomationControlled', '--start-maximized'] 
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });

    const page = await context.newPage();

    try {
        console.log(`⏳ Loading Competitor Website and checking for Cloudflare...`);
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });

        // Auto-pause if Cloudflare is blocking
        let pageTitle = await page.title();
        if (pageTitle.includes("Just a moment") || pageTitle.includes("Security")) {
            console.log(`\n🛑 CLOUDFLARE BLOCK DETECTED!`);
            console.log(`👉 Please solve the Captcha manually in the Chrome window.`);
            await page.waitForFunction(() => {
                return !document.title.includes("Just a moment");
            }, { timeout: 0 }); 
            console.log(`\n🔓 BYPASSED! Analyzing Competitor Structure...`);
            await page.waitForTimeout(3000);
        }

        // Scroll to load all dynamic content
        for (let i = 0; i < 4; i++) {
            await page.mouse.wheel(0, 1000);
            await page.waitForTimeout(1000);
        }

        console.log(`🧲 Extracting Keywords, Meta Tags, and Headings...`);
        
        // --- 1. Extract SEO Meta Data ---
        const seoData = await page.evaluate(() => {
            const title = document.title;
            const desc = document.querySelector('meta[name="description"]')?.content || 'No Description';
            const keywords = document.querySelector('meta[name="keywords"]')?.content || 'No Keywords';
            return { title, desc, keywords };
        });

        // --- 2. Extract Headings (The Competitor's Content Structure) ---
        const headings = await page.evaluate(() => {
            const h1 = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim()).filter(Boolean);
            const h2 = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim()).filter(Boolean);
            const h3 = Array.from(document.querySelectorAll('h3')).map(h => h.innerText.trim()).filter(Boolean);
            return { h1, h2, h3 };
        });

        // --- 3. Extract Internal Blog Content Links ---
        const links = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a'))
                .map(a => ({ text: a.innerText.trim(), href: a.href }))
                .filter(l => l.text.length > 5 && (l.href.includes('blog') || l.href.includes('guide') || l.href.includes('taxi') || l.href.includes('umrah') || l.href.includes('border') || l.href.includes('transportation') || l.href.includes('hajj')));
        });

        // --- 4. Extract Main Article Paragraphs ---
        const paragraphs = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('p, article, .content, .post-body'))
                .map(p => p.innerText.trim())
                .filter(p => p.length > 100);
        });

        // Search for high-value targets (Border, Hajj, Umrah) inside their paragraphs
        const highValueTopics = paragraphs.filter(p => /(border|crossing|hajj|umrah|visa|bahrain|riyadh|makkah|madinah)/i.test(p));

        // Format Report
        const reportTitle = seoData.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20);
        const reportData = `
# 🕵️‍♂️ Competitor SEO Scrape Report
**Target:** ${targetUrl}
**Scraped On:** ${new Date().toISOString().split('T')[0]}

## 1. Core SEO Profile
* **Target Title:** ${seoData.title}
* **Meta Description:** ${seoData.desc}
* **Hidden Keywords:** ${seoData.keywords}

## 2. Content Framework (H1/H2/H3)
*What exact topics are they writing about?*
**H1 (Main Subject):**
${headings.h1.map(h => `- ${h}`).join('\n')}

**H2 (Sub Topics - Steal These!):**
${headings.h2.map(h => `- ${h}`).join('\n')}

**H3 (Details):**
${headings.h3.map(h => `- ${h}`).join('\n')}

## 3. Discovered Blog/Guide Links
*Copy these URLs and scrape them deeper!*
${links.map(l => `- [${l.text}](${l.href})`).join('\n')}

## 4. High-Value Text Extracted
*Sentences mentioning Hajj, Umrah, Border Crossing, Visas*
${highValueTopics.map(p => `> 📄 *"...${p.substring(0,250)}..."*`).join('\n\n')}

---
*Report generated by Haram Taxi Competitor Intel Bot.*
`;

        const outputDir = path.join(__dirname, 'output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        const outputPath = path.join(outputDir, `competitor_${reportTitle}_${Date.now()}.md`);
        fs.writeFileSync(outputPath, reportData.trim());

        console.log(`\n🎉 COMPETITOR STRIPPED BARE!`);
        console.log(`📊 Found ${headings.h2.length} Sub-headings, ${links.length} internal guide links.`);
        console.log(`📄 Complete Keyword Report Check File: ${outputPath}`);

    } catch (e) {
        console.error(`\n❌ Scraper Crashed: ${e.message}`);
    } finally {
        await browser.close();
    }
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log(`
🕵️‍♂️ Playwright Competitor Scraper
Usage: node playwright-competitor-scraper.mjs "Competitor URL"
Example: node playwright-competitor-scraper.mjs "https://competitor.com/umrah-taxi-guide"
`);
    process.exit(1);
}

scrapeCompetitor(args[0]);
