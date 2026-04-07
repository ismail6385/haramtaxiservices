const fs = require('fs');

const titlesStr = fs.readFileSync('BLOG_TEMPLATES_AND_TITLES.md', 'utf8');
const titlesRegex = /^\d+\.\s+(.*)$/gm;
let match;
const titles = [];
while ((match = titlesRegex.exec(titlesStr)) !== null) {
    titles.push(match[1].trim());
}

let output = '';
// First 3 are done manually in our arrays (Sedan vs SUV, GMC Yukon, Hyundai Staria), so we skip a few that already exist
const existingSlugs = [
    "best-cars-for-umrah-travel-sedan-vs-suv",
    "top-5-reasons-to-choose-gmc-yukon-for-family-umrah",
    "hyundai-staria-ultimate-choice-for-large-groups",
    "toyota-camry-reliable-airport-transfer-jeddah",
    "how-to-book-chauffeur-jeddah-airport-to-makkah"
];

let addedCount = 0;

titles.forEach((title, index) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    if (existingSlugs.includes(slug)) return;

    const categories = ['Fleet Guides', 'Travel Guides', 'Travel Tips', 'Company Focus'];
    const category = categories[index % categories.length];
    
    const content = `
<h2>Introduction to ${title.replace(/'/g, "'")}</h2>
<p>Plan your journey in Saudi Arabia with maximum comfort. This guide covers everything you need to know about ${title.replace(/'/g, "'")}. Whether you are arriving for Umrah or a business trip, having the right information is key to a smooth and spiritually fulfilling experience.</p>

<div class="soft-cta">
    <span>Need quick premium transport?</span>
    <a href="https://wa.me/996575806733">WhatsApp Us Now →</a>
</div>

<h3>1. Understanding the Options</h3>
<p>When looking at this topic, it is important to consider your group size, luggage, and timing. The <a href="/fleet" class="inline-cta">right vehicle choice →</a> makes all the difference when traveling between holy cities.</p>

<div class="tip-box">
    <strong>💡 Pro Tip</strong>
    Always pre-book your transport at least 48 hours before your flight lands at King Abdulaziz Airport to avoid surge pricing and secure VIP meet & greet.
</div>

<h3>2. Key Benefits and Considerations</h3>
<div class="pros-cons">
    <div class="pros-card">
        <strong>✅ Best Practices</strong>
        <ul>
            <li>Pre-booking with fixed pricing</li>
            <li>Using licensed VIP chauffeurs</li>
            <li>Tracking flights for precise pickup</li>
        </ul>
    </div>
    <div class="cons-card">
        <strong>❌ What to Avoid</strong>
        <ul>
            <li>Unlicensed street taxis near Haram</li>
            <li>Haggling over prices late at night</li>
        </ul>
    </div>
</div>

<div class="urgency-box">
    <strong>⏱️ Flash Bookings:</strong> VIP vehicles are currently in extremely high demand due to Umrah season. <a href="https://wa.me/996575806733" class="inline-cta">Check live availability →</a>
</div>

<div class="key-takeaway">
    <strong>🔑 Key Takeaway</strong>
    <p>For true peace of mind during your spiritual journey, always rely on established chauffeur services that provide flight tracking, clear communication, and guaranteed luxury vehicles.</p>
</div>

<div class="cta-box">
    <h4>Ready to Secure Your VIP Transport?</h4>
    <p>Get a fixed-price quote in seconds. No haggling. No hidden fees.</p>
    <a href="/booking">Reserve Your Ride Now →</a>
</div>
`;

    output += `
    {
        slug: "${slug}",
        title: "${title.replace(/"/g, '\\"')}",
        excerpt: "An essential guide covering ${title.replace(/"/g, '\\"')}. Learn the best travel hacks, VIP vehicle options, and expert chauffeur tips for your Umrah journey.",
        content: \`${content}\`,
        date: "2024-04-${String((index%28)+1).padStart(2, '0')}",
        author: "Haram Chauffeur Team",
        category: "${category}",
        image: "/jeddah-airport-taxi-service.webp",
        relatedServiceSlug: "jeddah-airport-transfer",
        faqs: [
            {
                question: "Why is pre-booking transport in KSA important?",
                answer: "Pre-booking guarantees a fixed rate, a professional driver waiting for you at arrivals, and eliminates the stress of negotiating with local taxis after a long flight."
            },
            {
                question: "Do you offer flight tracking for airport pickups?",
                answer: "Yes, our dispatch team actively monitors your flight status. If your flight is delayed, we automatically adjust your driver's arrival time at no extra cost."
            }
        ]
    },`;
    
    addedCount++;
});

let blogDataTs = fs.readFileSync('lib/blogData.ts', 'utf8');

// Find the last index of `];` to avoid matching the one in the interface definition
const lastBracketIndex = blogDataTs.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    blogDataTs = blogDataTs.substring(0, lastBracketIndex) + 
                 ',' + output + '\n];\n' + 
                 blogDataTs.substring(lastBracketIndex + 2);
}

fs.writeFileSync('lib/blogData.ts', blogDataTs, 'utf8');
console.log('Successfully generated and appended ' + addedCount + ' SEO-optimized blog posts.');
