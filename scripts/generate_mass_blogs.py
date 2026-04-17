import json
import re

competitor_keywords = [
    {
        "slug": "taxi-from-jeddah-airport-to-makkah-hotel",
        "title": "Taxi From Jeddah Airport to Makkah Hotel: Direct Booking",
        "category": "Airport Transfers"
    },
    {
        "slug": "makkah-to-jeddah-airport-taxi-fare",
        "title": "Makkah to Jeddah Airport Taxi Fare: No Hidden Costs",
        "category": "Pricing & Fares"
    },
    {
        "slug": "makkah-to-taif-taxi",
        "title": "Makkah to Taif Taxi: Safe Mountain Travel",
        "category": "Intercity Travel"
    },
    {
        "slug": "cheap-taxi-makkah-to-madinah",
        "title": "Cheap Taxi Makkah to Madinah vs Premium VIP Transport",
        "category": "Comparison"
    },
    {
        "slug": "vip-taxi-jeddah-to-makkah",
        "title": "VIP Taxi Jeddah to Makkah: Executive Umrah Transport",
        "category": "VIP Transport"
    },
    {
        "slug": "umrah-taxi-jeddah-2026",
        "title": "Umrah Taxi Jeddah 2026: Fast Airport Pickups",
        "category": "Airport Transfers"
    },
    {
        "slug": "makkah-ziyarat-places-taxi",
        "title": "Makkah Ziyarat Places Transport: Jabal Al-Nour & More",
        "category": "Ziyarat"
    },
    {
        "slug": "madinah-ziyarat-taxi-tour",
        "title": "Madinah Ziyarat Taxi Tour: Quba & Uhud",
        "category": "Ziyarat"
    },
    {
        "slug": "taxi-madinah-to-makkah-price",
        "title": "Taxi Madinah to Makkah Price & Route Guide",
        "category": "Intercity Travel"
    },
    {
        "slug": "jeddah-to-makkah-taxi-booking",
        "title": "Jeddah to Makkah Taxi Booking: WhatsApp Reservation",
        "category": "Online Booking"
    }
]

def generate_blog_append():
    blocks = []
    for item in competitor_keywords:
        block = f"""    {{
        slug: "{item['slug']}",
        title: "{item['title']}",
        excerpt: "Searching for {item['title']}? Avoid the wait and surge pricing. Pre-book your reliable Umrah transport via WhatsApp and pay the driver directly upon arrival.",
        content: `
<h2>Why Search for {item['title']}?</h2>
<p>When pilgrims arrive in Saudi Arabia, finding reliable transport is critical. The search for <strong>{item['slug'].replace('-', ' ')}</strong> reflects the exact need for transparent, safe, and direct ground transportation.</p>

<h3>The Problem with Apps and E-Commerce Carts</h3>
<p>Many competitors want you to pay upfront using clunky online shopping carts. Others rely on ride-hailing apps where drivers frequently cancel if they deem the trip unprofitable. You deserve certainty on your spiritual journey.</p>

<div class="cta-box">
    <h4>Book Your Ride Instantly</h4>
    <p>Skip the hassle. Secure your {item['category']} vehicle today.</p>
    <ul>
        <li><strong>Pay After Journey</strong>: No upfront credit card payments.</li>
        <li><strong>Fixed Prices</strong>: The quote you get on WhatsApp is final.</li>
    </ul>
    <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer">Message Us on WhatsApp Now</a>
</div>
`,
        date: "2026-04-08",
        author: "Haram Premium Operations",
        category: "{item['category']}",
        image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?auto=format&fit=crop&q=80",
        faqs: [
            {{
                question: "Do you provide airport meet and greet?",
                answer: "Yes, our drivers wait for you at the arrivals hall with a name sign, regardless of flight delays."
            }},
            {{
                question: "Is there any advance payment required?",
                answer: "No! We operate on a 'Pay After Journey' policy. You only pay your driver locally after reaching your destination."
            }}
        ]
    }},"""
        blocks.append(block)

    # Join the newly generated blocks
    new_content_string = "\\n".join(blocks)
    
    # Read the original file
    blog_file_path = "lib/blogData.ts"
    with open(blog_file_path, "r", encoding="utf-8") as f:
        file_data = f.read()
        
    # Replace the end array bracket with the new blocks + end array bracket
    if "}\n];" in file_data:
        file_data = file_data.replace("}\n];", "},\n" + new_content_string[:-1] + "\n];")
    elif "}\r\n];" in file_data:
        file_data = file_data.replace("}\r\n];", "},\r\n" + new_content_string[:-1] + "\r\n];")
        
    # Write back
    with open(blog_file_path, "w", encoding="utf-8") as f:
        f.write(file_data)
        
    print(f"Successfully automated and appended {len(competitor_keywords)} high-intent SEO pages into lib/blogData.ts!")

if __name__ == "__main__":
    print("Initiating Python Automation for SEO Scaling...")
    generate_blog_append()
