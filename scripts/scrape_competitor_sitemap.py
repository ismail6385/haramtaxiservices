import urllib.request
import xml.etree.ElementTree as ET
import json
import re

def scrape_sitemap():
    print("Fetching competitor sitemap (harmaintransport.com)...")
    try:
        # Many wordpress sites use post-sitemap.xml, page-sitemap.xml or product-sitemap.xml
        urls_to_check = [
            "https://harmaintransport.com/post-sitemap.xml",
            "https://harmaintransport.com/page-sitemap.xml",
            "https://harmaintransport.com/product-sitemap.xml"
        ]
        
        all_urls = []
        for sitemap_url in urls_to_check:
            try:
                req = urllib.request.Request(sitemap_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response:
                    xml_data = response.read()
                    root = ET.fromstring(xml_data)
                    # XML namespaces
                    namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
                    for loc in root.findall('.//ns:loc', namespace):
                        url = loc.text
                        if url:
                            all_urls.append(url)
            except Exception as e:
                print(f"Could not fetch {sitemap_url}: {e}")
        
        # Clean and extract slugs
        extracted_slugs = []
        for url in all_urls:
            # remove trailing slash
            if url.endswith('/'):
                url = url[:-1]
            slug = url.split('/')[-1]
            if slug and slug not in ['harmaintransport.com', 'cart', 'checkout', 'my-account', 'contact-us', 'about-us']:
                title = slug.replace('-', ' ').title()
                extracted_slugs.append({"slug": slug, "title": title})
        
        print(f"Found {len(extracted_slugs)} high-intent competitor routes/products.")
        
        # Filter for taxi / routes
        taxi_routes = [item for item in extracted_slugs if 'taxi' in item['slug'] or 'to' in item['slug']]
        print(f"Filtered {len(taxi_routes)} specific taxi/route keywords.\n")
        
        # Output top 15 for generation
        for i, route in enumerate(taxi_routes[:15]):
            print(f"- {route['slug']}")
            
        # We can then generate typescript code automatically here
        with open("d:\\Taxi KSA\\haramtaxiservice\\scripts\\scraped_competitor_routes.json", "w") as f:
            json.dump(taxi_routes, f, indent=4)
            
        print("\nSaved dumped routes to scraped_competitor_routes.json")

    except Exception as e:
        print(f"Error scraping: {e}")

if __name__ == "__main__":
    scrape_sitemap()
