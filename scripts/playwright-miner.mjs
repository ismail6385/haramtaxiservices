import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// Haram Taxi - Ultimate Playwright Miner 🤖
// Bypasses JavaScript/Bot protections by using a real Headless Chrome Browser
// Usage: node scripts/playwright-miner.mjs "URL"
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runPlaywrightMiner(targetUrl) {
    console.log(`\n🚀 Ultimate Playwright Miner Initiated...`);
    console.log(`📡 Launching Real Browser to Target: ${targetUrl}`);

    let playwright;
    try {
        playwright = await import('playwright');
    } catch (e) {
        console.error('\n❌ ERROR: Playwright is not installed.');
        console.error('👉 Please run in terminal: npm install playwright');
        console.error('👉 Then run: npx playwright install chromium');
        process.exit(1);
    }

    // Launch Real Visible Chrome (Bypasses Headless Bot Detections)
    const browser = await playwright.chromium.launch({ 
        headless: false, // <-- Crucial: Runs a visible browser window
        args: [
            '--disable-blink-features=AutomationControlled',
            '--start-maximized'
        ] 
    });
    
    // Create a context simulating a real user (hide automation flags)
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        viewport: null
    });

    const page = await context.newPage();

    // Mask webdriver
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    });

    try {
        console.log(`⏳ Navigating and waiting for JavaScript to render (Visible Window)...`);
        
        // Navigate and wait
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
        
        // Check if we hit a Captcha / Security Challenge
        let threadTitle = await page.title();
        if (threadTitle.includes("tripadvisor.com") || threadTitle.includes("Just a moment")) {
            console.log(`\n🛑 SECURITY CHALLENGE DETECTED!`);
            console.log(`👉 Please look at the Chrome window and solve the "Press and Hold" Captcha.`);
            console.log(`👉 Waiting up to 60 seconds... (The bot will automatically resume once solved)`);
            
            // Wait for the title to change away from the generic security lock
            await page.waitForFunction(() => {
                return document.title !== "tripadvisor.com" && 
                       !document.title.includes("Just a moment");
            }, { timeout: 80000 });
            
            console.log(`\n🔓 CAPTCHA PASSED! Loading the actual thread...`);
            await page.waitForTimeout(3000); // give it a moment to render the posts
            threadTitle = await page.title();
        }

        // Human-like scrolling to trigger lazy loading and fool DataDome
        console.log(`🧍‍♂️ Simulating human reading behavior...`);
        for (let i = 0; i < 5; i++) {
            await page.mouse.wheel(0, 800);
            await page.waitForTimeout(1000);
        }

        console.log(`✅ Page loaded! Thread: ${threadTitle}`);

        // Extract raw inner text from the whole body (Foolproof extraction)
        console.log(`🧲 Extracting all readable text blocks...`);
        const posts = [];
        
        // Grab the entire body text and split by newlines (TripAdvisor structures posts this way)
        const fullText = await page.evaluate(() => document.body.innerText);
        
        // Split into reasonable chunks (simulate posts)
        const rawChunks = fullText.split('\n');
        
        rawChunks.forEach(text => {
            const cleanText = text.trim();
            if (cleanText.length > 80 && 
                !posts.includes(cleanText) && 
                !cleanText.includes('Tripadvisor') && 
                !cleanText.includes('privacy policy')) {
                posts.push(cleanText);
            }
        });

        // 3. Extract Route Intelligence & Fares (Looking for Makkah, Madinah, SAR)
        const routesAndPrices = [];
        const keywordRegex = /(makkah|madinah|jeddah|sar|riyal|price|cost|taxi|train|haramain|bus)/i;
        
        posts.forEach(post => {
            if (keywordRegex.test(post)) {
                routesAndPrices.push(post);
            }
        });

        // 4. Generate the Massive Report
        const dateStr = new Date().toISOString().split('T')[0];
        const report = `
# 🚀 Playwright Saudi Miner Report
**Thread:** ${threadTitle}
**URL:** ${targetUrl}
**Scraped On:** ${dateStr}

## 🛣️ Valuable Route & Pricing Intelligence
(Mentions of Makkah, Madinah, Jeddah, Taxi, SAR, Train)
${routesAndPrices.length > 0 ? routesAndPrices.map(r => `> 🚕 *"...${r.substring(0, 300)}..."*`).join('\n\n') : '*No specific route or pricing data found in this thread.*'}

---

## 📝 Full Extracted Text Chunks
(Raw data from tourists discussing Saudi travel)
${posts.map((p, i) => `**Chunk ${i+1}:**\n${p}\n`).join('\n')}

---
*Report generated by Haram Taxi Ultimate Playwright Miner.*
`;

        // 5. Save to file
        const outputDir = path.join(__dirname, 'output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        const safeFilename = `playwright_saudi_data_${Date.now()}.md`;
        const outputPath = path.join(outputDir, safeFilename);
        
        fs.writeFileSync(outputPath, report.trim());

        console.log(`\n🎉 MASSIVE DATA EXTRACTION COMPLETE AND JAVASCRIPT BYPASSED!`);
        console.log(`📊 Extracted ${posts.length} text chunks and route details.`);
        console.log(`📄 Check the file: ${outputPath}`);

    } catch (error) {
        console.error(`\n❌ Failed to scrape with Playwright: ${error.message}`);
    } finally {
        await browser.close();
    }
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log(`
🚀 Haram Taxi Playwright Miner
Usage: node playwright-miner.mjs "TripAdvisor URL"
Example: node playwright-miner.mjs "https://www.tripadvisor.com/ShowTopic-g293993-i10419-k14316260-Jeddah_airport_to_makkah_hotel-Makkah_Makkah_Province.html"
`);
    process.exit(1);
}

runPlaywrightMiner(args[0]);
