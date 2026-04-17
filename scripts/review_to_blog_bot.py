import sys
import os
import requests
from bs4 import BeautifulSoup
import datetime
import urllib.parse

# ---------------------------------------------------------
# Haram Taxi - Review Snipper & Auto-Blog Generator 🤖
# ---------------------------------------------------------
# Usage: python scripts/review_to_blog_bot.py "Competitor Name" "https://www.trustpilot.com/review/competitor.com"
# Example: python scripts/review_to_blog_bot.py "Harmain Transport" "https://www.trustpilot.com/review/www.harmaintransport.com?stars=1&stars=2"

def scrape_reviews(url):
    print(f"📡 Infiltrating Reviews at: {url}")
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Referer": "https://www.google.com/"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to reach the review site: {e}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    reviews = []
    
    if "tripadvisor.com" in url:
        print("🦉 Detected TripAdvisor URL. Switching to TripAdvisor Scraper Mode...")
        # TripAdvisor reviews usually use `<q>` or `<span>` elements inside specific testing targets
        # Or forum posts use `.postBody` or similar. Let's cast a wide net for text blocks.
        spans = soup.find_all('span', {'class': lambda x: x and 'QWeEX' in x}) # Common review class
        quotes = soup.find_all('q')
        divs = soup.find_all('div', {'data-test-target': 'HR_CC_CARD'})
        
        for q in quotes:
            text = q.get_text(strip=True)
            if len(text) > 30:
                reviews.append(text)
                
        for div in divs:
            text = div.get_text(strip=True)
            if len(text) > 40:
                reviews.append(text)
                
        # If specific classes fail (TripAdvisor changes them often), fallback to large text blocks
        if not reviews:
            for p in soup.find_all(['p', 'span']):
                text = p.get_text(strip=True)
                if len(text) > 100 and "Tripadvisor" not in text and "Cookie" not in text:
                    reviews.append(text)

    else:
        print("⭐ Detected Trustpilot or Generic URL. Switching to Trustpilot Scraper Mode...")
        articles = soup.find_all('article')
        if not articles:
            paragraphs = soup.find_all('p')
            for p in paragraphs:
                text = p.get_text(strip=True)
                if len(text) > 40 and "Cookie" not in text and "Trustpilot" not in text:
                    reviews.append(text)
        else:
            for article in articles:
                p_tags = article.find_all('p')
                for p in p_tags:
                    text = p.get_text(strip=True)
                    if len(text) > 20:
                        reviews.append(text)
                    
    # Clean and filter duplicates
    unique_reviews = list(set(reviews))
    return unique_reviews

def classify_problem(review_text):
    text = review_text.lower()
    if any(word in text for word in ["money", "price", "extra", "scam", "hidden"]):
        return "Hidden Fees / Scam"
    elif any(word in text for word in ["late", "wait", "delay", "never showed", "did not arrive"]):
        return "Late / No Show"
    elif any(word in text for word in ["rude", "driver", "behavior", "english", "call", "yelled"]):
        return "Bad Driver Behavior / Language"
    elif any(word in text for word in ["ac", "dirty", "old", "smell", "car", "van"]):
        return "Poor Vehicle Condition"
    else:
        return "General Bad Service"

def generate_killer_blog(competitor_name, classified_problems, raw_reviews):
    today_date = datetime.datetime.now().strftime("%Y-%m-%d")
    slug = f"why-choose-haram-taxi-over-{competitor_name.lower().replace(' ', '-')}"
    
    # Count problems to see what the main issue is
    problem_counts = {}
    for p in classified_problems:
        problem_counts[p] = problem_counts.get(p, 0) + 1
        
    main_problem = max(problem_counts, key=problem_counts.get) if problem_counts else "Hidden Scams"
    
    blog_content = f"""
    {{
        slug: "{slug}",
        title: "Umrah Taxi Warnings: Don't Fall for {main_problem} in Saudi Arabia",
        excerpt: "Many pilgrims face terrible experiences with untrusted taxi companies. From {main_problem.lower()} to poor vehicle conditions, learn how Haram Taxi guarantees a flawless Umrah journey.",
        content: `
<h2>The Sad Reality of Some Umrah Taxi Providers</h2>
<p>While performing Umrah should be a peaceful and spiritual journey, thousands of pilgrims face severe stress the moment they land at Jeddah Airport. A quick look at online reviews for companies like {competitor_name} reveals exactly what you need to avoid.</p>

<h3>What Real Pilgrims Are Complaining About</h3>
<p>Recent data from stranded pilgrims highlights these major red flags:</p>
<ul>
"""
    # Inject actual review snippets (anonymized) to build trust
    for count, review in enumerate(raw_reviews[:4]):
        # Trim very long reviews
        snippet = review[:120] + "..." if len(review) > 120 else review
        problem_type = classified_problems[count]
        blog_content += f"    <li><strong>The '{problem_type}' Issue:</strong> <em>\"{snippet}\"</em></li>\n"

    blog_content += f"""</ul>

<h2>How Haram Taxi Service Solves The \'{main_problem}\' Problem</h2>
<p>We built our Chauffeur Driven Taxi service exactly to combat these industry scams. Here is our <strong>Zero-Risk Guarantee</strong>:</p>

<ol>
    <li><strong>Pay AFTER Arrival:</strong> Most fake companies demand payment upfront and then disappear. With Haram Taxi, you only pay exactly what was agreed upon AFTER you and your luggage are safely at your Makkah or Madinah hotel.</li>
    <li><strong>Live Flight Tracking (No Late Fees):</strong> We know Saudi immigration can take 2-3 hours during Ramadan. Our drivers wait at Jeddah Airport with your name board, absolutely free of charge.</li>
    <li><strong>Strictly Verified Drivers:</strong> Every driver speaks English/Urdu, drives a 2024-2025 model vehicle, and follows a strict no-smoking, high-hygiene protocol.</li>
</ol>

<div class="cta-box">
    <h4>Don't Risk Your Umrah Journey</h4>
    <p>Book with the absolute most trusted Car Rental With Driver service in Saudi Arabia.</p>
    <ul>
        <li><strong>Fixed Prices</strong>: Zero hidden tolls.</li>
        <li><strong>Premium Fleet</strong>: GMC, Staria, Camry.</li>
    </ul>
    <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer">Message our Support Team via WhatsApp</a>
</div>
`,
        date: "{today_date}",
        author: "Haram Premium Operations",
        category: "Consumer Guide",
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cb466?auto=format&fit=crop&q=80",
        faqs: [
            {{
                question: "Do you charge extra if my flight to Jeddah is delayed?",
                answer: "No. Our operations team tracks your precise flight number live via radar. We will adjust the driver's arrival time so you are never charged waiting fees."
            }},
            {{
                question: "Can I pay the driver in cash after reaching my hotel in Makkah?",
                answer: "Absolutely. We encourage 'Pay After Journey' to give our guests 100% peace of mind."
            }}
        ]
    }},
"""
    return blog_content

def main():
    if len(sys.argv) < 3:
        print("\n🚕 Haram Taxi Review-to-Blog Bot 🤖")
        print("Usage: python scripts/review_to_blog_bot.py \"Competitor Name\" \"Review URL\"")
        print("Example: python scripts/review_to_blog_bot.py \"Umrah Taxi\" \"https://www.trustpilot.com/review/umrahtaxi.net?stars=1\"")
        sys.exit(1)

    competitor_name = sys.argv[1]
    url = sys.argv[2]
    
    reviews = scrape_reviews(url)
    
    if not reviews:
        print("⚠️ No reviews extracted. Try a different URL or check if the site uses Heavy Captcha.")
        sys.exit(1)
        
    print(f"\n📊 Extracted {len(reviews)} bad reviews. Analyzing problems...")
    
    classified_problems = [classify_problem(r) for r in reviews]
    
    print("✍️  Generating Anti-Competitor SEO Blog Post...")
    
    blog_data_js = generate_killer_blog(competitor_name, classified_problems, reviews)
    
    # Save the blog code
    output_dir = os.path.join(os.path.dirname(__file__), "output")
    os.makedirs(output_dir, exist_ok=True)
    
    safe_name = competitor_name.lower().replace(" ", "_")
    output_path = os.path.join(output_dir, f"{safe_name}_auto_blog.ts")
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(blog_data_js)
        
    print(f"\n🎉 SUCCESS! A full SEO Blog post attacking {competitor_name}'s weaknesses has been written.")
    print(f"📄 You can copy the code from here: {output_path}")
    print("👉 Just copy/paste that block directly into your lib/blogData.ts!")

if __name__ == "__main__":
    main()
