import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// Haram Taxi - TripAdvisor TAXI COMPANIES Scraper v4 🚖🏢
// FIXED: Correct category c59 (Transportation), not c61.
// FIXED: TripAdvisor serves POISON data to bots. Solution:
//   - Navigate to general page first, then click "Transportation"
//   - Use cookie-based session from captcha solve
//   - Extract from visible DOM, not href attributes (which are poisoned)
// Usage: node scripts/tripadvisor-companies-scraper.mjs
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const masterFile = path.join(outputDir, `TAXI_COMPANIES_DUMP_${Date.now()}.md`);
fs.writeFileSync(masterFile, `# 🚖 TRIPADVISOR REGISTERED TAXI/TRANSPORT COMPANIES - SAUDI ARABIA\n**Scraped:** ${new Date().toISOString()}\n\n`);

// CORRECT Transportation category = c59 (NOT c61 which was Outdoor Activities!)
const CITIES = [
    { city: "Makkah",  url: "https://www.tripadvisor.com/Attractions-g293993-Activities-c59-Mecca_Makkah_Province.html" },
    { city: "Jeddah",  url: "https://www.tripadvisor.com/Attractions-g293991-Activities-c59-Jeddah_Makkah_Province.html" },
    { city: "Madinah", url: "https://www.tripadvisor.com/Attractions-g293992-Activities-c59-Medina_Al_Madinah_Province.html" },
    { city: "Riyadh",  url: "https://www.tripadvisor.com/Attractions-g293995-Activities-c59-Riyadh_Riyadh_Province.html" },
    { city: "Dammam",  url: "https://www.tripadvisor.com/Attractions-g298544-Activities-c59-Dammam_Eastern_Province.html" },
    { city: "Taif",    url: "https://www.tripadvisor.com/Attractions-g676498-Activities-c59-Taif_Makkah_Province.html" },
];

async function run() {
    console.log(`\n🚀 TripAdvisor Taxi Companies Scraper v4 (FIXED)`);
    console.log(`🏙️  Targeting ${CITIES.length} Saudi cities (Transportation c59)`);
    console.log(`📄 Output: ${masterFile}\n`);

    let playwright;
    try {
        playwright = await import('playwright');
    } catch (e) {
        console.error('❌ npm install playwright first');
        process.exit(1);
    }

    const browser = await playwright.chromium.launch({
        headless: false,
        args: [
            '--disable-blink-features=AutomationControlled',
            '--start-maximized',
        ]
    });

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        viewport: { width: 1366, height: 768 },
        locale: 'en-US',
    });

    // Remove webdriver flag so TripAdvisor can't detect automation
    await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
        // Remove Playwright-specific properties
        delete window.__playwright;
        delete window.__pw_manual;
    });

    const page = await context.newPage();

    // --- Captcha Handler ---
    async function solveCaptchaIfNeeded() {
        if (page.isClosed()) return;
        await page.waitForTimeout(2000);
        const title = await page.title();
        const url = page.url();
        if (
            title.includes('tripadvisor.com') ||
            title.includes('Just a moment') ||
            title.includes('Security') ||
            title.includes('Attention') ||
            url.includes('challenge')
        ) {
            console.log(`\n🛑 CAPTCHA! Solve it in the Chrome window...`);
            await page.waitForFunction(() => {
                const t = document.title;
                return (
                    t !== 'tripadvisor.com' &&
                    !t.includes('Just a moment') &&
                    !t.includes('Security') &&
                    !t.includes('Attention')
                );
            }, { timeout: 0 });
            console.log(`🔓 CAPTCHA CLEARED!\n`);
            await page.waitForTimeout(4000);
        }
    }

    // --- Scroll to load all lazy content ---
    async function scrollPage() {
        for (let i = 0; i < 10; i++) {
            await page.mouse.wheel(0, 500);
            await page.waitForTimeout(500);
        }
        // Scroll back up
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(1000);
    }

    let totalCompanies = 0;

    try {
        // STEP 1: First visit TripAdvisor homepage to establish a clean session
        console.log(`🌐 Establishing session on TripAdvisor...`);
        await page.goto('https://www.tripadvisor.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
        await solveCaptchaIfNeeded();
        await page.waitForTimeout(3000);
        console.log(`✅ Session established.\n`);

        for (const { city, url } of CITIES) {
            console.log(`${'='.repeat(55)}`);
            console.log(`🏙️  SCANNING: ${city} (Transportation)`);
            console.log(`${'='.repeat(55)}`);

            fs.appendFileSync(masterFile, `\n\n# 🏙️ ${city.toUpperCase()}\n---\n`);

            // Navigate to the city's Transportation page
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
            await solveCaptchaIfNeeded();
            await page.waitForTimeout(3000);
            await scrollPage();

            // Verify we're on the right page
            const pageTitle = await page.title();
            const currentUrl = page.url();
            console.log(`📍 Page: ${pageTitle}`);
            console.log(`📍 URL:  ${currentUrl}`);

            // --- EXTRACTION STRATEGY ---
            // Instead of trusting href attributes (which TripAdvisor poisons),
            // we extract the VISIBLE TEXT from the page which is always real.
            const companies = await page.evaluate(() => {
                const results = [];

                // Strategy 1: Get all visible card-like elements with company names
                // TripAdvisor uses numbered lists like "1. Company Name"
                const allText = document.body.innerText;
                const lines = allText.split('\n').map(l => l.trim()).filter(Boolean);

                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    // Match patterns like "1. Company Name" or "2. Some Taxi Service"
                    const match = line.match(/^(\d+)\.\s+(.+)$/);
                    if (match) {
                        const name = match[2].trim();
                        // Look ahead for rating, reviews, description
                        let rating = '';
                        let reviews = '';
                        let description = '';
                        let price = '';

                        for (let j = i + 1; j < Math.min(i + 15, lines.length); j++) {
                            const next = lines[j];
                            if (/^\d+\.\d+$/.test(next)) rating = next;
                            if (/^\(\d+/.test(next)) reviews = next;
                            if (next.startsWith('from') || next.startsWith('$') || next.includes('per group') || next.includes('per adult')) {
                                price += next + ' ';
                            }
                            if (next.length > 60 && !next.startsWith('from')) {
                                description = next;
                            }
                            // Stop if we hit the next numbered item
                            if (/^\d+\.\s+/.test(next) && j > i + 1) break;
                        }

                        results.push({
                            name,
                            rating: rating || 'N/A',
                            reviews: reviews || 'N/A',
                            description: description.substring(0, 500) || 'N/A',
                            price: price.trim() || 'N/A',
                        });
                    }
                }

                // Strategy 2: Also grab any visible profile links
                const profileLinks = [];
                document.querySelectorAll('a[href*="Attraction_Review"]').forEach(a => {
                    // Only trust links that contain our city's geo code
                    const href = a.href;
                    const text = a.innerText?.trim();
                    if (text && text.length > 3) {
                        profileLinks.push({ text, href });
                    }
                });

                return { results, profileLinks, totalText: allText.substring(0, 3000) };
            });

            console.log(`🎯 Found ${companies.results.length} companies via text extraction`);
            console.log(`🔗 Found ${companies.profileLinks.length} profile links`);

            if (companies.results.length > 0) {
                for (const co of companies.results) {
                    totalCompanies++;
                    console.log(`  ✅ ${co.name} | Rating: ${co.rating} | ${co.reviews}`);

                    const chunk = `\n## 🏢 ${totalCompanies}. ${co.name}\n` +
                        `**City:** ${city}\n` +
                        `**Rating:** ${co.rating}\n` +
                        `**Reviews:** ${co.reviews}\n` +
                        `**Price:** ${co.price}\n` +
                        `**Description/Keywords:**\n> ${co.description}\n\n---\n`;

                    fs.appendFileSync(masterFile, chunk);
                }
            } else {
                // Fallback: save raw page text for analysis
                console.log(`⚠️ No numbered companies found. Saving raw text...`);
                fs.appendFileSync(masterFile, `\n### Raw Page Text\n\`\`\`\n${companies.totalText}\n\`\`\`\n\n`);
            }

            // Now visit each company's PROFILE page for deeper keyword extraction
            // Only visit links that contain the city's geo code (to avoid poison links)
            const cityGeo = url.match(/g(\d+)/)?.[1] || '';
            const realLinks = companies.profileLinks.filter(l => l.href.includes(cityGeo));

            if (realLinks.length > 0) {
                console.log(`\n🔍 Deep-diving into ${realLinks.length} verified company profiles...`);

                for (let i = 0; i < realLinks.length; i++) {
                    const { text, href } = realLinks[i];
                    console.log(`  ➡️ [${i+1}/${realLinks.length}] ${text}`);

                    try {
                        await page.goto(href, { waitUntil: 'domcontentloaded', timeout: 40000 });
                        await solveCaptchaIfNeeded();
                        await page.waitForTimeout(2000);
                        await page.mouse.wheel(0, 600);
                        await page.waitForTimeout(1500);

                        const profileData = await page.evaluate(() => {
                            const name = document.querySelector('h1')?.innerText?.trim() || 'Unknown';

                            // Grab ALL visible text from "About" sections
                            let about = '';
                            document.querySelectorAll('div, section, p').forEach(el => {
                                const text = el.innerText?.trim();
                                if (text && text.length > 80 && text.length < 2000 &&
                                    !text.includes('Sign in') && !text.includes('Privacy')) {
                                    about += text + '\n';
                                }
                            });

                            // Deduplicate text
                            const seen = new Set();
                            about = about.split('\n').filter(line => {
                                if (seen.has(line)) return false;
                                seen.add(line);
                                return true;
                            }).join('\n');

                            return {
                                name,
                                about: about.substring(0, 1500).trim(),
                            };
                        });

                        console.log(`  ✅ Profile scraped: ${profileData.name}`);

                        fs.appendFileSync(masterFile, `\n### 📋 DEEP PROFILE: ${profileData.name}\n**URL:** ${href}\n**Full Description & Keywords:**\n> ${profileData.about.substring(0, 800)}\n\n`);

                    } catch (err) {
                        console.log(`  ⚠️ Skip: ${err.message}`);
                    }

                    await page.waitForTimeout(Math.floor(Math.random() * 2000) + 2500);
                }
            }

            console.log(`\n✅ ${city} done! (${totalCompanies} total)\n`);
            await page.waitForTimeout(4000);
        }

    } catch (e) {
        console.error(`\n❌ Error: ${e.message}`);
    } finally {
        await browser.close();
        console.log(`\n🎉 ALL DONE! ${totalCompanies} companies scraped.`);
        console.log(`📄 Report: ${masterFile}`);
    }
}

run();
