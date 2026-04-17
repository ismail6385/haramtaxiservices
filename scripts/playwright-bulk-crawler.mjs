import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// Haram Taxi - 5-Hour Continuous Auto-Crawler 🤖🔥
// Scrapes the entire TripAdvisor Forum automatically.
// Usage: node scripts/playwright-bulk-crawler.mjs
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure output directory exists
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Master Output File that accumulates 5 hours of data
const masterFile = path.join(outputDir, `tripadvisor_5hours_dump_${Date.now()}.md`);
fs.writeFileSync(masterFile, `# 🤖 HARAM TAXI MASSIVE 5-HOUR DATA DUMP\n\n`);

// The Main Forums to start crawling from
const SAUDI_FORUMS = [
    "https://www.tripadvisor.com/ShowForum-g293993-i10419-Makkah_Makkah_Province.html",
    "https://www.tripadvisor.com/ShowForum-g293991-i9352-Jeddah_Makkah_Province.html",
    "https://www.tripadvisor.com/ShowForum-g293992-i9406-Medina_Al_Madinah_Province.html"
];

async function runBulkCrawler() {
    console.log(`\n🚀 Ultimate 5-Hour Saudi TripAdvisor Crawler Initiated!`);
    console.log(`📲 Booting up Headless Chrome Engine...`);

    let playwright;
    try {
        playwright = await import('playwright');
    } catch (e) {
        console.error('❌ Please run: npm install playwright');
        process.exit(1);
    }

    // Launch Real Chrome Window (Required to bypass generic bot checks)
    const browser = await playwright.chromium.launch({ 
        headless: false, 
        args: ['--disable-blink-features=AutomationControlled', '--start-maximized'] 
    });
    
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });

    const page = await context.newPage();

    // Auto-Captcha check function
    async function checkCaptcha(page) {
        if (page.isClosed()) return;
        let title = await page.title();
        if (title.includes("tripadvisor.com") || title.includes("Just a moment") || title.includes("Security")) {
            console.log(`\n🛑 CAPTCHA DETECTED! Bot Paused.`);
            console.log(`👉 Please click "Press and Hold" in the Chrome window.`);
            await page.waitForFunction(() => {
                return document.title !== "tripadvisor.com" && !document.title.includes("Just a moment");
            }, { timeout: 0 }); // Wait infinitely for you to solve it
            console.log(`\n🔓 CAPTCHA CLEARED! Crawler resuming automatically...`);
            await page.waitForTimeout(3000);
        }
    }

    try {
        let currentForumIndex = 0;
        
        // Endless loop for 5 hours
        while (true) { 
            const currentForum = SAUDI_FORUMS[currentForumIndex];
            console.log(`\n⏳ Navigating to Forum: ${currentForum}`);
            
            await page.goto(currentForum, { waitUntil: 'domcontentloaded', timeout: 50000 });
            await checkCaptcha(page);

            console.log(`\n🔎 Scanning Current Forum for Transport, Border, and Hajj Topics...`);
            
            // Extract all thread links on the current forum page
            const topicLinks = await page.evaluate(() => {
                const arr = [];
                document.querySelectorAll('a[href*="/ShowTopic-"]').forEach(a => {
                    const href = a.href;
                    if (!arr.includes(href)) arr.push(href);
                });
                return arr;
            });

            console.log(`🎯 Found ${topicLinks.length} discussions on this page!`);

            // Visit each thread one by one
            for (let i = 0; i < topicLinks.length; i++) {
                if (page.isClosed()) break;
                
                const link = topicLinks[i];
                console.log(`\n➡️ Drilling into Topic ${i+1}/${topicLinks.length}...`);
                
                try {
                    await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 40000 });
                    await checkCaptcha(page);

                    await page.mouse.wheel(0, 1000);
                    await page.waitForTimeout(1500); 

                    const title = await page.title();
                    console.log(`✅ Loaded: ${title}`);

                    // Extract text chunks
                    const fullText = await page.evaluate(() => document.body.innerText);
                    const rawChunks = fullText.split('\n');
                    
                    const posts = [];
                    rawChunks.forEach(text => {
                        const t = text.trim();
                        if (t.length > 80 && !t.includes('Tripadvisor') && !t.includes('Privacy')) {
                            posts.push(t);
                        }
                    });

                    // Match all the advanced keywords the user wanted
                    const routes = [];
                    posts.forEach((p) => {
                        if (/(taxi|train|sar|riyal|jeddah|makkah|madinah|cost|price|border|bahrain|uae|hajj|umrah|guide|crossing|tourist)/i.test(p)) {
                            routes.push(p);
                        }
                    });

                    // Append to Master Database File immediately
                    if (routes.length > 0) {
                        const chunkData = `\n\n## 📝 THREAD: ${title}\n**URL:** ${link}\n---\n**Key Target Data (Border/Hajj/Transport):**\n${routes.map(r => `> 🚕 ${r.substring(0,300)}...`).join('\n')}\n\n`;
                        fs.appendFileSync(masterFile, chunkData);
                        console.log(`💾 Saved ${routes.length} key intel blocks into database.`);
                    }

                } catch (err) {
                    console.log(`⚠️ Skipped a link due to error: ${err.message}`);
                }

                // Random rest
                const waitTime = Math.floor(Math.random() * 3000) + 2000;
                await page.waitForTimeout(waitTime);
            }

            console.log(`\n⏭️ Forum Page Complete! Moving to next Saudi location...`);
            
            // Cycle to the next Saudi Forum
            currentForumIndex = (currentForumIndex + 1) % SAUDI_FORUMS.length;
            await page.waitForTimeout(5000);
        }

    } catch (e) {
        console.error(`\n❌ Crawler Crashed: ${e.message}`);
    } finally {
        await browser.close();
        console.log(`🛑 CRAWLER STOPPED. Check ${masterFile}`);
    }
}

runBulkCrawler();
