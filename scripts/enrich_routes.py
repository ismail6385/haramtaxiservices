import re

enrichments = {
    "jeddah-to-madinah": {
        "content": "Travel seamlessly from Jeddah to the Prophet's City of Madinah with our private door-to-door taxi. Whether departing from a Jeddah hotel, the Corniche, or King Abdulaziz International Airport (KAIA), we deliver you directly to any Madinah hotel near Masjid Nabawi via the fast Hijrah Highway in approximately 4 hours. No shared rides, no detours — just you, your family, and a professional driver.",
        "faqs": [
            ("How long is the drive from Jeddah to Madinah?", "The drive is approximately 400 km via the Hijrah Highway and takes around 4 hours by private taxi."),
            ("Can I book a Jeddah to Madinah taxi from KAIA Airport?", "Yes, we offer full meet and greet airport pickup from all KAIA terminals and drive you directly to any Madinah hotel."),
        ]
    },
    "madinah-hotel-to-madinah-airport": {
        "content": "Don't miss your flight after a blessed stay in Madinah. Our hotel-to-airport taxi picks you up directly from your hotel lobby — near Masjid Nabawi or anywhere in Madinah — and delivers you to Prince Mohammad Bin Abdulaziz Airport (MED) with time to spare. We operate 24/7 and recommend booking the night before during busy Umrah seasons.",
        "faqs": [
            ("How far is it from Madinah hotels to Madinah Airport?", "The distance from central Madinah hotels near Masjid Nabawi to Prince Mohammad Bin Abdulaziz Airport (MED) is approximately 15–20 km, taking around 20–25 minutes."),
            ("Do you offer early morning airport pickups in Madinah?", "Yes, we operate 24/7 including very early morning and late-night pickups. Book via WhatsApp the evening before for guaranteed availability."),
        ]
    },
    "dammam-to-makkah": {
        "content": "Embark on your Umrah journey directly from the Eastern Province. Our long-distance taxi from Dammam, Al Khobar, or Dhahran travels the full 1,250 km to your Makkah hotel in a single private journey — ideal for those who want to avoid airport hassle and travel at their own pace, with stops for prayer, meals, and rest built in. Our GMC Yukon XL seats up to 7 passengers with generous luggage space.",
        "faqs": [
            ("How long is the drive from Dammam to Makkah?", "The journey is approximately 1,250 km and takes 12–13 hours by private taxi, including stops for prayer and meals."),
            ("Do you pick up from Khobar and Dhahran for Makkah transfers?", "Yes, we pick up from any address in Dammam, Al Khobar, or Dhahran for direct Makkah transfers."),
        ]
    },
    "riyadh-to-makkah": {
        "content": "Traveling from Riyadh to Makkah for Umrah? Our private 8–9 hour intercity taxi is the most comfortable and convenient option — no airports, no layovers, just a direct private journey from your Riyadh residence or King Khalid Airport (RUH) straight to your Makkah hotel. Our long-distance specialist drivers plan rest stops strategically. Available 24/7 with full luggage assistance.",
        "faqs": [
            ("How much is a taxi from Riyadh to Makkah?", "Fares depend on vehicle type and exact pickup location. WhatsApp us for an instant, no-obligation quote."),
            ("Can I book a Riyadh to Makkah taxi for a large group?", "Yes, we have the Toyota Hiace (11 pax) and Toyota Coaster (17 pax) for large Umrah groups traveling from Riyadh to Makkah."),
        ]
    },
    "tabuk-to-jordan-border": {
        "content": "Heading to Jordan from the Tabuk region? We provide reliable taxi transfers from Tabuk city or Prince Sultan Airport (TUU) to either the Halat Ammar border crossing or the Al Durra / Haql crossing. Our drivers are familiar with border crossing procedures and will help ensure your documents are ready. This is a popular route for travelers connecting to Aqaba, Jordan.",
        "faqs": [
            ("Which border crossing does the Tabuk to Jordan taxi use?", "We serve both the Halat Ammar crossing and the Al Durra / Haql crossing depending on your destination in Jordan."),
            ("Can you pick me up from Tabuk Airport for the Jordan border?", "Yes, we offer airport pickup from Prince Sultan Airport (TUU) in Tabuk for all Jordan border transfers."),
        ]
    },
    "alula-to-madinah": {
        "content": "Many visitors to AlUla's stunning Nabataean heritage combine their trip with a spiritual journey to the Prophet's Mosque in Madinah. Our private taxi departs from any AlUla resort — Habitas, Banyan Tree, or Shaden — and arrives at your Madinah hotel in approximately 3.5 hours. Luggage assistance included. No shared passengers.",
        "faqs": [
            ("Can I combine an AlUla trip with Madinah Ziyarat?", "Absolutely. Many tourists do exactly this. We provide a direct private taxi from your AlUla resort straight to your Madinah hotel near Masjid Nabawi."),
            ("How long is the drive from AlUla to Madinah?", "The journey is approximately 330 km and takes around 3.5 hours via the main highway connecting AlUla to Madinah."),
        ]
    },
    "najran-to-yemen-border": {
        "content": "We provide specialized private taxi transfers from Najran city to the Al Wadeeah border crossing on the Saudi-Yemen border. This route serves residents, commercial travelers, and humanitarian workers who need reliable, safe private transport. Our drivers are experienced with this specific route and border crossing, ensuring you arrive with minimal delay. The 350 km journey takes approximately 4 hours via the main Najran-Wadeeah highway.",
        "faqs": [
            ("How far is Al Wadeeah border from Najran?", "Al Wadeeah border crossing is approximately 350 km from Najran city and the drive takes around 4 hours."),
            ("Do you serve humanitarian workers on this route?", "Yes, our service is available for all travelers including NGO staff, residents, and commercial travelers going to the Al Wadeeah border."),
        ]
    },
    "hafr-to-kuwait-border": {
        "content": "Quick and convenient private taxi from Hafr Al Batin to the Al Raqi border crossing into Kuwait. This is the primary land crossing between northern Saudi Arabia and Kuwait, used by residents, truck drivers, and travelers. Our vehicles are clean and comfortable for the short 1-hour journey. Available 24/7 with advance booking via WhatsApp.",
        "faqs": [
            ("Which border crossing is used for Hafr Al Batin to Kuwait?", "We use the Al Raqi border crossing, which is the main land crossing between Hafr Al Batin and Kuwait."),
            ("How long is the drive from Hafr Al Batin to the Kuwait border?", "The Al Raqi crossing is approximately 100 km from Hafr Al Batin and the drive takes about 1 hour."),
        ]
    },
    "al-ahsa-to-uae": {
        "content": "Traveling from Al Ahsa or Hofuf to the UAE via the Al Batha border crossing? Our private taxi covers the 300 km journey in approximately 3 hours on a well-maintained highway. Ideal for Eastern Province residents heading to Abu Dhabi, Dubai, or Al Ain. Our drivers are experienced with the Al Batha border crossing procedures, ensuring a smooth and fast crossing.",
        "faqs": [
            ("Which border crossing is used for Al Ahsa to UAE?", "We use the Al Batha border crossing, the primary land crossing between Saudi Arabia's Eastern Province and the UAE."),
            ("How long is the drive from Hofuf to Al Batha UAE border?", "The drive from Hofuf / Al Ahsa to Al Batha border is approximately 300 km and takes around 3 hours."),
        ]
    },
    "hail-to-riyadh": {
        "content": "Our Hail to Riyadh private taxi covers the 640 km journey in approximately 6 hours via the main highway. Popular for families visiting the capital for medical appointments or shopping, and business travelers commuting to Riyadh's corporate districts. We pick up from Hail International Airport, any hotel, or residential area and deliver you directly to your Riyadh destination — KAFD, King Fahd Medical City, or RUH Airport.",
        "faqs": [
            ("How long is the drive from Hail to Riyadh?", "The journey from Hail to Riyadh is approximately 640 km and takes around 6 hours via Highway 65."),
            ("Can I book a Hail to Riyadh taxi from Hail Airport?", "Yes, we provide airport pickups from Hail International Airport for direct Riyadh transfers — available 24/7."),
        ]
    },
    "jazan-to-abha": {
        "content": "Escape the tropical heat of Jazan and head to the cool, misty mountains of Abha. Our private taxi covers the 200 km journey in approximately 2.5 hours through the stunning Asir National Park highway — one of Saudi's most scenic drives, winding through mountain passes and green valleys. Perfect for weekend getaways, family visits to Abha, or connecting to Khamis Mushait and Soudah Peak.",
        "faqs": [
            ("Is the mountain road from Jazan to Abha safe?", "Yes, our drivers are fully experienced with the Asir mountain highway. The road is well-maintained and our vehicles are regularly inspected."),
            ("How long does it take from Jazan to Abha by car?", "The journey covers approximately 200 km and takes around 2.5 hours depending on traffic."),
        ]
    },
    "hafr-to-riyadh": {
        "content": "Connect the northern city of Hafr Al Batin directly to Riyadh with our private 5-hour taxi service. Trusted by military personnel, civil workers, and families who need reliable transport without the inconvenience of regional buses. We pick up from any address in Hafr Al Batin and deliver you anywhere in Riyadh — KAFD, King Fahd Medical City, or King Khalid International Airport (RUH). Comfortable vehicles, professional drivers, 24/7 availability.",
        "faqs": [
            ("How long is the drive from Hafr Al Batin to Riyadh?", "The journey is approximately 500 km and takes around 5 hours via the main highway."),
            ("Do you serve military personnel traveling from Hafr Al Batin to Riyadh?", "Yes, our service is trusted by military and civil staff in Hafr Al Batin for transfers to Riyadh and other major cities."),
        ]
    },
    "al-ahsa-to-qatar": {
        "content": "A popular short-haul route for Eastern Province residents crossing to Qatar via the Salwa (Abu Samra) border. The 150 km journey from Al Ahsa or Hofuf to the Qatar border takes approximately 1.5 hours on the well-maintained highway. Our drivers know the Salwa crossing well, ensuring a smooth and fast border experience — ideal for commuters, business travelers, and families visiting Doha.",
        "faqs": [
            ("Which border crossing is used for Al Ahsa to Qatar?", "We use the Salwa (Abu Samra) border crossing, the main land crossing between Saudi Arabia and Qatar."),
            ("How long is the drive from Al Ahsa to the Qatar border?", "From Hofuf / Al Ahsa to the Salwa crossing is approximately 150 km and takes around 1.5 hours."),
        ]
    },
    "buraidah-to-unayzah": {
        "content": "Quick and comfortable connecting taxi between the twin cities of Buraidah (capital of Al Qassim) and Unayzah — two of Saudi Arabia's most important agricultural and commercial cities. Whether you're heading to Unayzah's famous Dates Festival, a business appointment in Buraidah, or visiting family, our drivers are ready 24/7 for door-to-door service.",
        "faqs": [
            ("How far is Unayzah from Buraidah?", "Unayzah is approximately 30 km from Buraidah and the drive takes about 30 minutes via the direct highway."),
            ("Is there a direct taxi between Buraidah and Unayzah?", "Yes, we provide direct private taxi transfers between Buraidah and Unayzah at all hours of the day."),
        ]
    },
    "yanbu-to-madinah": {
        "content": "Travel seamlessly from Yanbu Industrial City or Prince Abdul Mohsin Bin Abdulaziz Airport (YNB) to the Prophet's City of Madinah. Whether you are a maritime professional finishing a work rotation or a pilgrim visiting Masjid Nabawi, our private 2.5-hour taxi provides a clean, direct, and hassle-free journey via the coastal highway. Door-to-door drop-off at any Madinah hotel.",
        "faqs": [
            ("Do you pick up from Yanbu Airport for Madinah transfers?", "Yes, we provide airport pickups from YNB (Prince Abdul Mohsin Bin Abdulaziz Airport) and drop off directly at your Madinah hotel."),
            ("How long is the drive from Yanbu to Madinah?", "The drive is approximately 230 km and takes around 2.5 hours via the coastal-inland highway."),
        ]
    },
    "qassim-to-riyadh": {
        "content": "Our Qassim to Riyadh taxi connects families, business travelers, and medical patients from Buraidah or Unayzah directly to the capital. With a 350 km smooth highway drive taking approximately 3.5 hours, it's a faster and more comfortable alternative to regional flights. We pick up from anywhere in Qassim and drop off at any Riyadh address — King Khalid Airport (RUH), King Fahd Medical City, or KAFD.",
        "faqs": [
            ("Do you pick up from Buraidah for Riyadh transfers?", "Yes, we pick up from any location in Buraidah and Unayzah. Just share your address and we'll be there."),
            ("How long is the drive from Qassim to Riyadh?", "The drive is approximately 350 km and takes around 3.5 hours via Highway 65."),
        ]
    },
    "abha-to-khamis": {
        "content": "Fast and convenient private taxi between Abha and Khamis Mushait — two connected cities in the stunning Asir highlands. Whether you're heading to Prince Sultan Air Base, Khamis Mushait Mall, or any residential area, our drivers are ready 24/7. The short 30-minute drive offers cool mountain air and an easy connection between the two sister cities.",
        "faqs": [
            ("How far is Khamis Mushait from Abha?", "Khamis Mushait is approximately 30 km from Abha and the drive takes about 30 minutes via the main highway."),
            ("Do you serve the military areas in Khamis Mushait?", "Yes, we serve all areas in Khamis Mushait including residential zones near Prince Sultan Air Base."),
        ]
    },
    "arar-to-iraq-border": {
        "content": "We provide specialized private taxi transfers from Arar city directly to the Arar-Ar Ar border crossing into Iraq. This route is used by commercial traders, truck convoy support, and residents with family connections across the border. Our drivers are experienced with northern border procedures and documentation requirements. The 60 km journey takes approximately 1 hour on the main highway.",
        "faqs": [
            ("How far is the Iraq border from Arar?", "The Arar-Ar Ar Iraq border crossing is approximately 60 km from Arar city and the drive takes about 1 hour."),
            ("Do you assist with border crossing documentation in Arar?", "Our drivers are experienced with the border crossing process and will help ensure your documents are in order before arrival."),
        ]
    },
    "train-station-transfers-makkah": {
        "content": "Fast and reliable taxi connections between Makkah Haramain High Speed Railway Station and any hotel in the Haram area, Clock Tower, Aziziyah, or Misfalah. Never wait for public transport after a long journey — our driver will meet you curbside at the station and take you directly to your destination in minutes. Available 24/7 including peak Umrah and Hajj seasons.",
        "faqs": [
            ("Where is the Haramain train station in Makkah?", "The Makkah Haramain Station is located approximately 5 km from Masjid Al Haram. Our taxi connects it to all major Makkah hotel areas."),
            ("Do you pick up from Makkah train station at any time?", "Yes, we operate 24/7. Simply WhatsApp us your arrival time and we'll have a driver ready at the station."),
        ]
    },
    "train-station-transfers-madinah": {
        "content": "Seamless taxi connections between Madinah Haramain High Speed Railway Station and your hotel near Masjid Nabawi. Our driver meets you at the station exit and gets you to your hotel quickly and comfortably — essential during busy Umrah seasons when public transport is overwhelmed. Available 24/7 with no surge pricing.",
        "faqs": [
            ("Where is the Haramain train station in Madinah?", "Madinah Haramain Station is located approximately 10 km from Masjid Nabawi. Our taxi connects it to all major Madinah hotel areas."),
            ("How long does it take from Madinah train station to hotels near Masjid Nabawi?", "The drive from Madinah Haramain Station to hotels near Masjid Nabawi takes approximately 15–20 minutes."),
        ]
    },
    "hotel-to-haram-transport": {
        "content": "Our on-demand hotel-to-Haram transport service connects any hotel in Makkah or Madinah directly to the Grand Mosque or Prophet's Mosque. Whether you're heading for Fajr Salah, Taraweeh, or any prayer time, our drivers are ready around the clock. Clean, air-conditioned vehicles with experienced Muslim drivers who understand the importance of your journey.",
        "faqs": [
            ("Do you offer transport from hotel to Masjid Al Haram in Makkah?", "Yes, we provide on-demand hotel pickup from any Makkah hotel to Masjid Al Haram, available 24/7 including prayer times."),
            ("Can I book a recurring daily Haram transport from my hotel?", "Yes, we offer daily scheduled hotel-to-Haram transport. WhatsApp us your hotel name and prayer schedule and we will arrange accordingly."),
        ]
    },
    "khafji-to-kuwait": {
        "content": "Convenient private taxi from Al Khafji in Saudi Arabia's northern Eastern Province directly to Kuwait. The 110 km journey follows coastal and desert highways to the Al Raqi border. Popular with oil industry workers, residents, and commercial travelers. Our drivers handle the Saudi-Kuwait border crossing smoothly, ensuring minimal wait times.",
        "faqs": [
            ("How long is the drive from Khafji to Kuwait?", "The distance from Khafji to the Kuwait border is approximately 110 km and takes around 1.5 hours by private taxi."),
            ("Do your drivers handle the Kuwait border crossing?", "Yes, our drivers are experienced with the Al Raqi Saudi-Kuwait border crossing and will guide you through all required procedures."),
        ]
    },
}

def build_faqs_block(faqs):
    lines = ["        faqs: ["]
    for i, (q, a) in enumerate(faqs):
        comma = "," if i < len(faqs) - 1 else ""
        lines.append(f'            {{ question: "{q}", answer: "{a}" }}{comma}')
    lines.append("        ]")
    return "\n".join(lines)

# Read file as-is preserving line endings
with open(r"lib\routesData.ts", "r", encoding="utf-8") as f:
    content = f.read()

modified = 0

for slug, data in enrichments.items():
    # Find the slug and then the faqs: [] within that route block
    slug_pattern = f'slug: "{slug}"'
    slug_pos = content.find(slug_pattern)
    if slug_pos == -1:
        print(f"  SKIP (not found): {slug}")
        continue

    # Find faqs: [] after this slug (within reasonable range)
    search_start = slug_pos
    search_end = slug_pos + 2000  # search within next 2000 chars

    segment = content[search_start:search_end]

    # Replace thin content if content is short (< 200 chars)
    content_match = re.search(r'content: "([^"]*)"', segment)
    if content_match:
        existing_content = content_match.group(1)
        if len(existing_content) < 200:
            new_content_str = data["content"].replace('"', '\\"')
            old_str = f'content: "{existing_content}"'
            new_str = f'content: "{new_content_str}"'
            content = content[:search_start] + segment.replace(old_str, new_str, 1) + content[search_start + search_end - search_start:]
            segment = content[search_start:search_start + 2000]

    # Replace faqs: [] with full FAQs
    faqs_block = build_faqs_block(data["faqs"])
    # Match faqs: [] with optional whitespace variants and CRLF
    if "        faqs: []\r\n" in segment:
        new_segment = segment.replace("        faqs: []\r\n", faqs_block + "\r\n", 1)
        content = content[:search_start] + new_segment + content[search_start + len(segment):]
        print(f"  OK (CRLF): {slug}")
        modified += 1
    elif "        faqs: []\n" in segment:
        new_segment = segment.replace("        faqs: []\n", faqs_block + "\n", 1)
        content = content[:search_start] + new_segment + content[search_start + len(segment):]
        print(f"  OK (LF): {slug}")
        modified += 1
    else:
        print(f"  SKIP (faqs not thin or already enriched): {slug}")

with open(r"lib\routesData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone. {modified} routes enriched.")
