import { LucideIcon, Plane, MapPin, Crown, Building2, User } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    description: string;
    icon?: any;
    content: string;
    image?: string;
    features: string[];
    pricing: { title: string; price: string }[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: "jeddah-airport-transfer",
        title: "Jeddah Airport Taxi Transfer | KAIA to Makkah / Madinah",
        description: "Professional airport transfer service from King Abdulaziz International Airport (JED). Meet and greet included.",
        content: "Arriving in Jeddah for Umrah? Our specialized airport transfer service ensures a smooth transition from the terminal to your hotel in Makkah or Madinah. We monitor your flight status to handle delays and our drivers meet you at the arrivals hall with a name board/sign.",
        features: ["Meet & Greet Service", "Flight Tracking", "60 Minutes Free Waiting", "Help with Luggage"],
        pricing: [
            { title: "Makkah (Sedan)", price: "Get Quote" },
            { title: "Makkah (GMC)", price: "Get Quote" },
            { title: "Madinah (Sedan)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Where will the driver meet me?", answer: "The driver will wait at the arrivals hall with a sign bearing your name." },
            { question: "What if my flight is delayed?", answer: "We track all flights and adjust pickup times accordingly." }
        ]
    },
    {
        slug: "madinah-airport-transfer",
        title: "Madinah Airport Taxi Service | Prince Mohammad Airport",
        description: "Reliable taxi transfers from Prince Mohammad Bin Abdulaziz International Airport to your Madinah hotel.",
        content: "Start your visit to the Prophet's City with ease. Our Madinah airport taxi service provides quick and comfortable transfers to all hotels near Masjid Nabawi. Avoid the hassle of haggling and enjoy a competitive-rate ride.",
        features: ["24/7 Availability", "competitive quotes", "English Speaking Drivers", "VIP Options"],
        pricing: [
            { title: "Madinah Hotel (Sedan)", price: "Get Quote" },
            { title: "Madinah Hotel (GMC)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat",
        title: "Makkah Ziyarat Tour | Historical Sites Taxi",
        description: "Visit the holy sites of Makkah including Cave Hira, Cave Thawr, and Arafat with our guided taxi tour.",
        content: "Experience the profound history of Makkah with our Ziyarat tours. Our knowledgeable drivers will take you to Jabal Al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat, and Jannat al-Mu'alla. Take your time to pray and reflect at each location.",
        features: ["Get Quote Hour Tour", "Knowledgeable Driver", "Flexible Route", "Air Conditioned"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "Get Quote" },
            { title: "GMC (7 Pax)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Can we climb the mountain?", answer: "Yes, but please allocate extra time. Standard tours are for visiting the base." }
        ]
    },
    {
        slug: "madinah-ziyarat",
        title: "Madinah Ziyarat Tour | Holy Places Visit",
        description: "Comprehensive Ziyarat tour in Madinah visiting Masjid Quba, Mount Uhud, and Qiblatain.",
        content: "Visit the sacred landmarks of Madinah. Our tour includes Masjid Quba (where 2 rakats equal an Umrah), Mount Uhud & Archers' Hill, Masjid Qiblatain, and the Seven Mosques. A spiritual journey for every pilgrim.",
        features: ["Get Quote Hour Tour", "Guided Visit", "Door-to-door", "Family Friendly"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "Get Quote" },
            { title: "GMC (7 Pax)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "badr-ziyarat-tour",
        title: "Battle of Badr Tour Taxi | Ziyarat from Madinah",
        description: "Private taxi Ziyarat tour to the historic Battle of Badr site from Madinah.",
        content: "Take a step back into Islamic history with a dedicated private taxi tour to Badr. Located 150km from Madinah, our tour takes you safely to the Shuhada graveyard, the Areesh Mosque, and the historic battlefield with Urdu & English speaking drivers.",
        features: ["4-5 Hour Tour", "Historical Sites", "Urdu/English Drivers", "Door-to-door"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "Get Quote" },
            { title: "GMC (7 Pax)", price: "Get Quote" },
            { title: "Hiace (10 Pax)", price: "Get Quote" },
        ],
        faqs: [
            { question: "How far is Badr from Madinah?", answer: "It is approximately 1.5 to 2 hours drive each way." }
        ]
    },
    {
        slug: "hajj-umrah-group-bus-coaster",
        title: "Hajj & Umrah Group Transport | Coaster 20-Seater",
        description: "Book a Toyota Coaster for large family groups. Luggage handling and Tafweej compliance included.",
        content: "Traveling for Umrah or Hajj with a large group? Do not book multiple small taxis. Hire our Nusuk-registered Toyota Coaster 20-Seater. We handle heavy luggage, manage airport Tafweej clearance, and ensure your entire group arrives at the hotel together without separation.",
        features: ["20 Passengers max", "Heavy Luggage Support", "Tafweej Cleared", "Group Friendly"],
        pricing: [
            { title: "Jeddah to Makkah", price: "Get Quote" },
            { title: "Makkah to Madinah", price: "Get Quote" },
        ],
        faqs: [
            { question: "Do you offer larger buses?", answer: "Yes, we can arrange 49-seater VIP buses for very large Hajj communities." }
        ]
    },
    {
        slug: "riyadh-airport-transfer",
        title: "Riyadh Airport (RUH) Taxi Transfer",
        description: "Premium airport transfer service from King Khalid International Airport to Riyadh city and beyond.",
        content: "Professional chauffeur service for business and leisure travelers arriving in Riyadh. We provide meet & greet services at all terminals of KKIA.",
        features: ["Flight Monitoring", "Luxury Vehicles", "English Speaking Drivers", "Corporate Accounts"],
        pricing: [
            { title: "City Center (Sedan)", price: "Get Quote" },
            { title: "City Center (GMC)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "dammam-airport-transfer",
        title: "Dammam Airport (KFIA) Taxi Service",
        description: "Reliable taxi from King Fahd International Airport to Dammam, Khobar, and Dhahran.",
        content: "Fast and comfortable transfers from Dammam Airport. Whether you are heading to Khobar Corniche, Dhahran Aramco Camp, or Dammam city, we get you there safely.",
        features: ["Eastern Province Coverage", "24/7 Operations", "competitive rates", " Spacious Cars"],
        pricing: [
            { title: "Dammam (Sedan)", price: "Get Quote" },
            { title: "Khobar (Sedan)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "neom-bay-transfer",
        title: "NEOM Bay Airport Transfer & Taxi",
        description: "Private transfer service to/from NEOM Bay Airport to Trojena, The Line, and Sindalah.",
        content: "Experience the future with our NEOM transfer services. We provide authorized transport from NEOM Bay Airport to all major project sites and camps.",
        features: ["Permitted Vehicles", "Knowledgeable Drivers", "Premium Fleet", "Punctual Service"],
        pricing: [
            { title: "Transfer (Sedan)", price: "Get Quote" },
            { title: "Transfer (GMC)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "hegra-tour",
        title: "Hegra (AlUla) Historical Tour Taxi",
        description: "Guided taxi tour to the ancient Nabataean site of Hegra in AlUla.",
        content: "Visit Saudi Arabia's first UNESCO World Heritage site. Our drivers will take you to the Winter Park or directly to Hegra entrance for your booked tour.",
        features: ["Local Experts", "Scenic Route", "Flexible Timing", "Comfortable SUVs"],
        pricing: [
            { title: "Half Day Tour", price: "Get Quote" },
            { title: "Full Day Tour", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "tabuk-to-jordan-border",
        title: "Tabuk to Jordan Border Taxi",
        description: "Cross the border with ease. Taxi from Tabuk to Halat Ammar.",
        content: "Reliable transfer for travelers crossing into Jordan. We drop you right at the Saudi passport control.",
        features: ["Border Expertise", "24/7 Service", "Help with Formalities", "Safe Driving"],
        pricing: [
            { title: "Transfer (Sedan)", price: "Get Quote" },
        ],
        faqs: []
    },

    {
        slug: "business-travel",
        title: "Corporate & Business Taxi Services",
        description: "Executive transport solutions for business meetings and events.",
        content: "Reliable transport for corporate clients. Establish a corporate account for seamless billing and priority booking.",
        features: ["Priority Booking", "Monthly Invoicing", "Executive Cars", "NDAs Available"],
        pricing: [
            { title: "Daily Rate", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "hourly-chauffeur",
        title: "Hourly Chauffeur Service",
        description: "Rent a car with driver by the hour in Makkah, Madinah, Jeddah, and Riyadh.",
        content: "Need a car for the whole day? Our hourly chauffeur service gives you the freedom to go where you want, when you want.",
        features: ["Unlimited Stops", "Fuel Included", "Professional Driver", "Clean Vehicle"],
        pricing: [
            { title: "Per Hour (Min 4h)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "tabuk-city-tour",
        title: "Tabuk City Tour",
        description: "Explore the historic Tabuk Castle and surrounding sights.",
        content: "Visit Tabuk Castle, the old Hijaz Railway station, and the vibrant souks of Tabuk.",
        features: ["Historic Sites", "Local Markets", "Family Friendly", "3 Hours"],
        pricing: [
            { title: "Tour (Sedan)", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "alula-hegra-day-trip",
        title: "AlUla to Hegra Day Trip | Driver-Waits UNESCO Transfer — Madain Saleh",
        description: "Private taxi day trip from AlUla to Hegra (Madain Saleh) with driver waiting. 20km, driver waits 2–4 hours at site, returns to AlUla. No taxis at Hegra — pre-book essential.",
        content: "Hegra (Madain Saleh) has no local taxis, no Uber, and no public transport — it is 20km from AlUla in open desert. Once inside the UNESCO site, you cannot leave without a pre-arranged vehicle. Our driver-waits transfer covers the full round trip: pickup from your AlUla resort or hotel, drop to the Hegra Visitor Centre entrance, wait 2–4 hours while you complete your guided site tour, and return to AlUla. We can also combine Hegra with Dadan and Jabal Ikmah as a full-day heritage circuit. Advance booking required — peak season (October–April) books out fast.",
        features: ["Driver Waits at Site", "20km from AlUla", "UNESCO Site Drop", "Dadan Combo Option", "Peak Season Booking", "No Taxis at Hegra"],
        pricing: [
            { title: "Hegra Driver-Waits (2 hrs)", price: "Get Quote" },
            { title: "Hegra + Dadan + Jabal Ikmah (Full Day)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long does the driver wait at Hegra?", answer: "Standard Hegra visits take 2–3 hours for the guided buggy tour and main tomb groups. We typically plan for a 2.5–3 hour wait. For a full visit including Jabal Ithlib and the Visitor Centre, 4 hours. Confirm your expected visit length when booking." },
            { question: "Can I combine Hegra with Dadan in one day?", answer: "Yes — Hegra (morning, 2.5 hrs) + Dadan (afternoon, 1.5 hrs) + Jabal Ikmah (late afternoon, 1 hr) is a popular full-day AlUla heritage circuit. Start early (8am from your hotel) for this itinerary. Book all site tickets in advance." },
            { question: "What if my Hegra visit runs longer than expected?", answer: "Driver flexibility is included — if your visit extends, the driver waits. We ask you to WhatsApp us if running significantly over time so we can adjust any afternoon bookings. No additional charge for reasonable overruns." }
        ]
    },
    {
        slug: "alula-old-town-circuit",
        title: "AlUla Valley Heritage Circuit | Old Town + Dadan + Jabal Ikmah Half-Day Tour",
        description: "Private taxi half-day heritage circuit in AlUla valley — Old Town (Al-Ula Al-Qadimah), Dadan ancient city, and Jabal Ikmah open-air library. Driver waits between sites. Fixed rate.",
        content: "The AlUla Valley heritage circuit covers three key sites in the valley south of the city — all within 15km of each other. AlUla Old Town (900-year mud-brick city, fort view, old souq) + Dadan ancient city (Dadanite/Lihyanite capital, lion tombs on cliff face) + Jabal Ikmah (thousands of ancient inscriptions, sacred valley). Each site takes 1–1.5 hours. The full circuit (3 sites) fits in a half-day (4–5 hours). Driver waits between all sites. These three sites complement Hegra perfectly — cover Hegra in the morning and the valley circuit in the afternoon for a complete AlUla heritage day.",
        features: ["3 Sites in Half Day", "Driver Waits Between Sites", "Old Town + Dadan + Ikmah", "Valley Circuit", "Complement to Hegra", "Fixed Rate"],
        pricing: [
            { title: "Valley Heritage Circuit (Half Day)", price: "Get Quote" },
            { title: "Full AlUla Day (Hegra + Valley Circuit)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long does the valley heritage circuit take?", answer: "AlUla Old Town (60–90 min) + Dadan (60–90 min) + Jabal Ikmah (45–60 min) = approximately 4–5 hours including travel between sites. Start by 8am for a comfortable morning circuit." },
            { question: "Do I need to pre-book tickets for all three sites?", answer: "Yes — AlUla Old Town, Dadan, and Jabal Ikmah all require Experience AlUla tickets (alula.sa). Book all three before your visit, especially in peak season. Our transfer service covers transport only — tickets are booked separately." },
            { question: "Is the valley circuit suitable for children?", answer: "Yes — Old Town and Dadan have relatively accessible paths (the Dadan buggy tour is gentle). Jabal Ikmah's valley floor walk is flat. All three are suitable for older children with interest in history. Bring water and sun protection regardless of season." }
        ]
    },
    {
        slug: "alula-airport-transfer",
        title: "AlUla International Airport Transfer",
        description: "Transfer from ULH Airport to AlUla resorts and hotels.",
        content: "Seamless pickup from AlUla Airport to Habitas, Banyan Tree, or Shaden Resort.",
        features: ["Resort Drop-off", "Luxury SUVs", "Desert Capable", "Luggage Assist"],
        pricing: [
            { title: "Transfer", price: "Get Quote" },
        ],
        faqs: []
    },
    {
        slug: "neom-taxi",
        title: "Taxi Service in NEOM",
        description: "Transport throughout the NEOM region.",
        content: "Navigating the vast NEOM region requires reliable transport. We serve Magnag, Sharma, and Gayle.",
        features: ["Region Knowledge", "4x4 Available", "Project Site Access", "Long Distance"],
        pricing: [
            { title: "Hourly Rate", price: "Get Quote" },
        ],
        faqs: []
    },
    // Adding placeholder entries for the massive list of remaining services to ensure pages load
    {
        slug: "dammam-to-bahrain",
        title: "Dammam to Bahrain Taxi",
        description: "Causeway transfer to Bahrain.",
        content: "Cross the King Fahd Causeway comfortably.",
        features: ["Causeway Permit", "Insurance Included"],
        pricing: [{ title: "One Way", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "khobar-to-bahrain-taxi",
        title: "Khobar to Bahrain Taxi",
        description: "Direct transfer from Khobar to Bahrain.",
        content: "Quick trip across the bridge.",
        features: ["Door to Door", "Document Assist"],
        pricing: [{ title: "One Way", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "bahrain-taxi",
        title: "Taxi to Bahrain",
        description: "Travel to Bahrain from KSA.",
        content: "Reliable cross-border taxi service.",
        features: ["Cross Border", "Round Trip"],
        pricing: [{ title: "One Way", price: "Get Quote" }],
        faqs: []
    },
    // Generic generator for location-based services
    {
        slug: "jubail-taxi",
        title: "Taxi Service in Jubail",
        description: "Local and intercity taxi in Jubail.",
        content: "Leading taxi provider in Jubail Industrial City.",
        features: ["Industrial Area Access", "24/7"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "yanbu-taxi",
        title: "Taxi Service in Yanbu",
        description: "Taxi in Yanbu Al Sinaiyah and Al Bahr.",
        content: "Reliable transport in the Royal Commission city.",
        features: ["RC Area", "Airport Transfer"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "taif-taxi",
        title: "Taxi Service in Taif — City, Mountain & Intercity Transfers",
        description: "Complete taxi service in Taif covering Al Hada, Shafa, Al Hawiya, City Center, and intercity routes to Makkah, Jeddah, and Madinah.",
        content: "Haram Taxi provides comprehensive taxi service across all Taif districts and mountain areas. From Al Hada cable car tours to Miqat transfers for Hajj and Umrah, city center sightseeing to airport pickups at Taif Regional Airport (TIF). All Taif areas served including Al Hada, Shafa, Al Hawiya, Al Rudaf, and Wadi Naaman rose farms.",
        features: ["Mountain-Expert Drivers", "Al Hada Cable Car", "Miqat Transfers", "Rose Farm Tours", "Airport Pickups", "24/7 Availability"],
        pricing: [
            { title: "City Transfer (within Taif)", price: "Get Quote" },
            { title: "Mountain Tour (Al Hada/Shafa)", price: "Get Quote" },
            { title: "Taif to Makkah", price: "Get Quote" },
            { title: "Taif to Jeddah Airport", price: "Get Quote" }
        ],
        faqs: [
            { question: "What areas in Taif do you serve?", answer: "We serve all Taif districts: Al Hada, Shafa, Al Hawiya, City Center, Al Rudaf, and Wadi Naaman. We also cover all hotels, resorts, and residential areas across the Taif highlands." },
            { question: "Do you serve the Taif Regional Airport (TIF)?", answer: "Yes. We provide airport pickups and drop-offs at Taif Regional Airport (TIF) for all Saudia and flynas flights. The airport is approximately 15–20 minutes from Taif city center." }
        ]
    },
    {
        slug: "taif-rose-farm-tour",
        title: "Taif Rose Farm Tour | Wadi Naaman Damask Rose & Honey Market",
        description: "Full-day rose farm tour in Taif. Visit Damask rose farms in Wadi Naaman, traditional perfume distilleries, and honey markets. Best March–April. Fixed rate, expert guide-driver.",
        content: "Taif is the undisputed rose capital of Saudi Arabia, producing Damask roses (Rosa damascena) used in the world's finest perfumes and oud blends. Our rose farm tour takes you to Wadi Naaman — where the majority of Taif's rose farms are concentrated — during the March–April bloom season. You'll visit 2–3 authentic farms, watch the traditional steam distillation process that produces pure rose water (attar), browse the honey market, and return with fresh produce. Our drivers know the best farms for quality and value. The tour is also available year-round for rose product shopping and farm visits, though the bloom season provides the most spectacular experience.",
        features: ["Wadi Naaman Rose Farms", "Attar Distillery Visit", "Honey Market", "Pomegranate Orchards", "Fresh Product Shopping", "All-Day Driver"],
        pricing: [
            { title: "Half-Day Rose Tour (3–4 hours)", price: "Get Quote" },
            { title: "Full-Day Rose & Honey Tour (7–8 hours)", price: "Get Quote" },
            { title: "Makkah to Taif Rose Day Trip (return)", price: "Get Quote" }
        ],
        faqs: [
            { question: "When is the best time for the Taif rose farm tour?", answer: "March through April is the Damask rose bloom season — the farms are in full flower and distilleries are actively producing. Year-round visits are possible for product shopping, but the bloom season is the most spectacular." },
            { question: "Can I book the rose farm tour from Makkah as a day trip?", answer: "Yes. Many Umrah pilgrims book a return day trip from Makkah to Taif's rose farms. Makkah to Wadi Naaman takes approximately 2 hours. We offer a full round-trip package with time at the farms and return to Makkah in the evening." },
            { question: "Is there a set itinerary for the tour?", answer: "We customize the tour based on your interests and available time. A typical full-day tour includes: 2–3 rose farm visits, a distillery demonstration, honey market, and optional stop at Al Hada cable car. Half-day tours cover 2 farms and the honey market." }
        ]
    },
    {
        slug: "taif-mountain-tour",
        title: "Taif Mountain Tour | Al Hada Cable Car, Zigzag Road & Shafa Highlands",
        description: "Full-day Taif mountain tour. Al Hada cable car (Telefric), zigzag road scenic viewpoints, Shafa highland resorts, and mountain cafes. Fixed rate, expert mountain driver.",
        content: "The Taif mountain tour is one of the most memorable experiences in Saudi Arabia. Starting from your hotel in Taif city or Al Hada, your expert mountain driver takes you along the famous Al Hada zigzag road — 30+ switchback turns with breathtaking Hejaz mountain scenery. Highlights include the Al Hada Cable Car (Telefric) with panoramic views over the mountains, waterfall viewpoints, mountain cafes and restaurants, and optional extension to the cooler Shafa highlands. The tour can be combined with a Wadi Naaman rose farm visit for a complete Taif day experience. All our mountain tour drivers have years of experience on the Al Hada and Shafa routes.",
        features: ["Al Hada Cable Car", "Zigzag Road Viewpoints", "Shafa Highlands", "Mountain Cafes", "Waterfall Stops", "Expert Mountain Driver"],
        pricing: [
            { title: "Al Hada Half-Day Tour (4 hours)", price: "Get Quote" },
            { title: "Al Hada + Shafa Full-Day Tour (8 hours)", price: "Get Quote" },
            { title: "Mountains + Rose Farm Combo (Full Day)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Is the Al Hada zigzag road safe?", answer: "Yes — when driven by an experienced local driver. Our mountain tour drivers navigate Al Hada's 30+ switchback turns daily and are fully trained for all conditions including night driving and fog. We strongly advise against unfamiliar drivers on this road." },
            { question: "What is included in the Al Hada cable car tour?", answer: "Your driver picks you up from your hotel and drives to the Al Hada Cable Car (Telefric) station. You can ride the cable car independently while your driver waits. After the cable car, the tour continues with zigzag road viewpoints and mountain cafes." },
            { question: "Can I combine the mountain tour with a Makkah transfer?", answer: "Yes. Many pilgrims book an Al Hada mountain tour in the morning and then transfer to Makkah in the afternoon. We can arrange a single booking covering both — tour in Taif and then onward transfer to Makkah hotel." }
        ]
    },
    {
        slug: "taif-miqat-transfer",
        title: "Taif Miqat Transfer | Qarn al-Manazil Ihram Stop for Hajj & Umrah",
        description: "Dedicated Miqat transfer from Taif to Qarn al-Manazil (As-Sail Al-Kabir) for Hajj 2026 and Umrah. Fixed rate, driver waits at Miqat, 24/7 service.",
        content: "For pilgrims in Taif preparing for Hajj or Umrah, the Miqat point is Qarn al-Manazil (also called As-Sail Al-Kabir), located en route to Makkah approximately 45 minutes from Taif city center. Our dedicated Miqat transfer service picks you up from any Taif hotel or resort, drives you to the Miqat facilities where you can shower, wear your Ihram, and make your intention (niyyah), then continues directly to your Makkah hotel. For Hajj 2026, this service is in extremely high demand — pre-booking weeks in advance is essential. We are available 24/7 and can accommodate early Fajr departures for those planning to arrive in Makkah for morning prayers.",
        features: ["Miqat Stop Included", "Driver Waits at Miqat", "Direct to Makkah Hotel", "Hajj 2026 Permitted Vehicles", "24/7 Availability", "Pre-Booking Available"],
        pricing: [
            { title: "Taif to Miqat + Makkah (Camry)", price: "Get Quote" },
            { title: "Taif to Miqat + Makkah (Yukon XL)", price: "Get Quote" },
            { title: "Taif to Miqat + Makkah (Staria — group)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Which Miqat do pilgrims from Taif use?", answer: "Pilgrims from Taif use the Miqat of Qarn al-Manazil (As-Sail Al-Kabir), located approximately 75km east of Makkah on Route 15. For pilgrims already in Taif, this Miqat is passed naturally on the way down to Makkah via the Al Hada mountain road." },
            { question: "Does the driver wait while we put on Ihram?", answer: "Yes. Your driver stops at the Qarn al-Manazil Miqat facilities, which include ablution areas, prayer spaces, and changing rooms. He will wait as long as needed and then continue to Makkah once you are ready." },
            { question: "Do I need to pre-book my Hajj 2026 Miqat transfer?", answer: "Yes — strongly recommended. During Hajj 2026 (June 2026), demand for Miqat transfers from Taif surges dramatically and ad-hoc taxis become unavailable. We advise booking at least 3–4 weeks before your Hajj travel dates." },
            { question: "Can the same driver take me back from Makkah to Taif after Hajj?", answer: "Yes. We offer round-trip Hajj packages: Taif to Makkah before Hajj and Makkah back to Taif after. Contact us on WhatsApp with your Hajj dates for a combined package." }
        ]
    },
    {
        slug: "taif-city-tour",
        title: "Taif City Tour | Shubra Palace, Abdullah Ibn Abbas Mosque & Historic Sites",
        description: "Guided taxi tour of Taif city. Shubra Palace Museum, Abdullah Ibn Abbas Mosque, Al Baz Tower, traditional souq, and Al Rudaf Park. Half-day or full-day. Fixed rate.",
        content: "Taif's city center holds rich historical and Islamic significance. Our city tour takes you to Shubra Palace Museum (an Ottoman-era royal palace now converted to a heritage museum), the Mosque of Abdullah Ibn Abbas (a companion of the Prophet and governor of Taif), Al Baz Tower with panoramic city views, Taif's traditional souq markets, and Al Rudaf Park. The tour can be combined with a rose farm visit or mountain tour for a complete Taif experience. Our drivers are knowledgeable about the historical context of each site and can answer questions about Taif's Islamic history.",
        features: ["Shubra Palace Museum", "Abdullah Ibn Abbas Mosque", "Al Baz Tower", "Traditional Souq", "Al Rudaf Park", "Flexible Itinerary"],
        pricing: [
            { title: "City Half-Day Tour (3–4 hours)", price: "Get Quote" },
            { title: "City + Rose Farm Full Day", price: "Get Quote" },
            { title: "City + Mountain Full Day", price: "Get Quote" }
        ],
        faqs: [
            { question: "What is Shubra Palace in Taif?", answer: "Shubra Palace is an Ottoman-era palace built in the early 20th century that served as a royal residence for King Abdul Aziz Al Saud. It has been converted into a heritage museum showcasing Taif's history and royal artifacts. It is one of the most architecturally significant buildings in the Hejaz region." },
            { question: "Is the Abdullah Ibn Abbas Mosque open to visitors?", answer: "Yes. The Mosque of Abdullah Ibn Abbas (cousin of Prophet Muhammad ﷺ and governor of Taif) is open for prayers and visitors. Our drivers can take you there at any time of day and explain the historical significance of this important Islamic landmark." },
            { question: "How long does the Taif city tour take?", answer: "A half-day city tour covers the main sites in 3–4 hours. A full-day tour allows for a more relaxed pace with additional stops including the souq, Al Rudaf Park, and a traditional lunch break." }
        ]
    },
    {
        slug: "abha-taxi",
        title: "Taxi Service in Abha",
        description: "Transport in the cloud city of Abha.",
        content: "Tour the Green Mountain and High City.",
        features: ["Cool Climate", "Scenic Drives"],
        pricing: [{ title: "Daily Rate", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jazan-airport-taxi",
        title: "Jazan Airport Taxi",
        description: "Pickup from King Abdullah Bin Abdulaziz Airport (Jazan).",
        content: "Transfer to Jazan city, Sabya, or Abu Arish.",
        features: ["Flight Monitoring", "Punctual"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jazan-farasan-ferry-transfer",
        title: "Jazan to Farasan Islands Ferry Port Transfer — Morning Drop & Return Pickup",
        description: "Pre-booked taxi from Jazan hotel to Farasan Islands ferry port (Al-Minaab Terminal) — morning drop-off for ferry departure and return pickup when ferry arrives back. Essential pre-booking: no taxis at port in evenings.",
        content: "The Farasan Islands are reached by ferry from Jazan Port — and getting to and from the ferry terminal requires a pre-booked taxi. Our service covers: morning pickup from your Jazan hotel, drop at the ferry terminal in time for departure, and return pickup from the terminal when your ferry arrives back. The evening return is the most critical booking — app taxis are scarce at the port in the late afternoon and evening.",
        features: ["Morning Ferry Drop-off", "Return Port Pickup", "Hotel to Terminal", "Flexible Return Timing", "No Taxi at Port at Night", "Fixed Round-Trip Rate"],
        pricing: [
            { title: "One-way to ferry port", price: "Get Quote" },
            { title: "Round trip (drop + return pickup)", price: "Get Quote" },
        ],
        faqs: [
            { question: "What time does the Farasan Islands ferry depart from Jazan?", answer: "Ferry departure times vary and change seasonally. Check current schedules before booking. Morning departures are typical — we recommend confirming your ferry time first, then booking your taxi pickup time to arrive at the port 30–45 minutes before departure." },
            { question: "Do I need to pre-book the return pickup?", answer: "Yes — pre-booking the return pickup is essential. The Jazan ferry port area has very limited app taxis in the late afternoon and evening. Without a pre-booked return, you risk being stranded at the port. Book both ways when you arrange the morning drop-off." },
            { question: "Can I change my return time if the ferry is delayed?", answer: "Yes — notify us via WhatsApp if your return ferry is delayed. We adjust the pickup time accordingly." }
        ]
    },
    {
        slug: "jazan-to-abha-mountain-transfer",
        title: "Jazan to Abha Mountain Highway Transfer — Asir Escarpment Route",
        description: "Private taxi from Jazan to Abha on the Asir escarpment mountain highway — 200km, 2.5–3 hours. One of Saudi Arabia's most scenic drives. Experienced mountain-road drivers. Fixed rate.",
        content: "The Jazan to Abha transfer is one of Saudi Arabia's most spectacular road journeys — ascending from sea level at Jazan to 2,200m at Abha through the Asir escarpment. The drive covers flat Tihama coastal plain, transitional foothills, and dramatic mountain switchbacks with cloud forest and valley views. Our drivers know the mountain highway well. Drop-off at any Abha or Khamis Mushait hotel, airport, or attraction. Return Abha–Jazan transfers also available.",
        features: ["Asir Escarpment Route", "200km, 2.5–3 Hours", "Experienced Mountain Drivers", "Drop at Abha Hotels", "Khamis Mushait Option", "Return Transfers Available"],
        pricing: [
            { title: "Jazan to Abha (one way)", price: "Get Quote" },
            { title: "Jazan to Abha (round trip)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Is the Jazan to Abha road safe?", answer: "Yes — the main Jazan–Abha highway is a well-maintained modern road. The mountain section has guardrails and is routinely maintained. Our drivers are experienced on this route and know the conditions in different weather and seasons." },
            { question: "Can I make stops en route from Jazan to Abha?", answer: "Yes — we can stop at Al Dayer (70km, mountain gateway), Hamdah Fort at Abu Arish (60km, detour), or at scenic mountain viewpoints on the Asir escarpment. Confirm any stops when booking so we plan the timing." },
            { question: "Can I arrive at Abha Airport (AHB) via this route?", answer: "Yes — Abha Airport (AHB) is on the approach to Abha and easy to include as a drop-off. If your final destination is AHB, confirm the flight time so we depart Jazan with enough buffer for the 2.5-hour journey." }
        ]
    },
    {
        slug: "najran-airport-taxi",
        title: "Najran Airport Taxi",
        description: "Transfer from Najran Domestic Airport.",
        content: "Serving Najran city and border areas.",
        features: ["Local Drivers", "Safe"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-ahsa-airport-taxi",
        title: "Al Ahsa Airport Taxi",
        description: "Al Ahsa International Airport transfers.",
        content: "Serving Hofuf and Mubarraz.",
        features: ["Oasis Tour", "Dates Market"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },

    {
        slug: "hail-airport-taxi",
        title: "Hail Airport Taxi",
        description: "Hail International Airport transfer.",
        content: "Gateway to the desert and rock art.",
        features: ["Rally Drivers", "Knowledgeable"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "hail-jubbah-day-trip",
        title: "Hail to Jubbah UNESCO Day Trip — Driver Waits Round Trip",
        description: "Pre-booked taxi day trip from Hail to Jubbah UNESCO World Heritage petroglyphs. 100km, 1 hour each way. Driver waits at site 2–3 hours. No taxis at Jubbah — essential to pre-book.",
        content: "A day trip from Hail to the Jubbah UNESCO rock art site requires a pre-booked driver-waits taxi — there are no local taxis or app taxis at Jubbah. Our driver departs Hail in the morning, takes you to the Jabal Umm Sinman petroglyph panels and visitor centre, waits 2–3 hours, and returns to Hail. Early morning departure recommended for best photography light on the 10,000-year-old rock carvings.",
        features: ["Driver Waits at Site", "No Jubbah Taxis Available", "Round Trip Fixed Rate", "Early Morning Recommended", "Visitor Centre Stop", "Photography Time Included"],
        pricing: [
            { title: "Round Trip (driver waits 2–3 hrs)", price: "Get Quote" },
            { title: "Extended Day (full day, multiple sites)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Why can't I just get a taxi home from Jubbah?", answer: "Jubbah is a small oasis town 100km from Hail with no local taxis, Careem, or Uber. Without a pre-booked return driver, there is no way to get back to Hail. This makes a driver-waits booking essential — not optional." },
            { question: "How long does the driver wait at Jubbah?", answer: "Standard package: driver waits 2–3 hours — enough for the visitor centre, main petroglyph panels at Jabal Umm Sinman, and the oasis walk. Extended packages are available if you want a full day at the site." },
            { question: "What time should I depart Hail for Jubbah?", answer: "7:00–7:30am departure is ideal — arriving at Jubbah by 8:30am when the light is low and perfect for photographing the carved rock panels. Midday light is flat and harsh on the open sandstone." }
        ]
    },
    {
        slug: "hail-heritage-circuit",
        title: "Hail Heritage City Circuit — A'arif Fort, Qasr Barzan & Al-Qishla",
        description: "Driver-waits heritage circuit of Hail city covering A'arif Fort (hilltop panorama), Qasr Barzan (Shammar palace), and Al-Qishla (Ottoman barracks). 3.5–4 hours, fixed rate.",
        content: "Hail's three major heritage sites — A'arif Fort, Qasr Barzan, and Al-Qishla Palace — are all within the central city area and cover the layered history of northern Arabia: Shammar tribal fortress, Al Rashid dynasty palace, and Ottoman military architecture. Our driver takes you between all three sites and waits at each. Combine with Jabal Aja mountain for a full Hail discovery day.",
        features: ["A'arif Fort — 360° Panorama", "Qasr Barzan — Shammar Palace", "Al-Qishla — Ottoman Heritage", "Driver Waits at Each Site", "3.5–4 Hours", "Fixed Rate"],
        pricing: [
            { title: "Heritage Circuit (3 sites)", price: "Get Quote" },
            { title: "Heritage + Jabal Aja (full day)", price: "Get Quote" },
        ],
        faqs: [
            { question: "What is the best order to visit the Hail heritage sites?", answer: "Recommended order: start at A'arif Fort at sunset for the panoramic city views → Qasr Barzan (closes before sunset, good afternoon light) → Al-Qishla (evening, nearby). For morning visitors: A'arif Fort first (good morning light), then Barzan, then Al-Qishla." },
            { question: "Can I combine the heritage circuit with Jubbah?", answer: "Yes — Hail heritage circuit in the morning, return to city for lunch, then drive to Jubbah in the afternoon. A full-day rate covers both. Best done in reverse (Jubbah first, morning light) if photography is the priority." },
            { question: "Are the heritage sites free to enter?", answer: "A'arif Fort and Qasr Barzan are managed by the Saudi Heritage Commission — entry may be free or require a small fee. Al-Qishla is a cultural centre. Confirm current arrangements on the day." }
        ]
    },
    {
        slug: "qassim-airport-taxi",
        title: "Prince Naif Airport (Qassim) Taxi",
        description: "Taxi from ELQ Airport to Buraidah and Unaizah.",
        content: "Central region airport transfers.",
        features: ["Serving all Qassim", "Fast"],
        pricing: [{ title: "Buraidah", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "arar-airport-taxi",
        title: "Arar Airport Taxi",
        description: "Arar Airport pickup and drop-off.",
        content: "Northern Borders transport.",
        features: ["Safe", "Reliable"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-jouf-airport-taxi",
        title: "Al Jouf Airport Taxi",
        description: "Al Jouf Airport (Sakaka) taxi service.",
        content: "Serving Sakaka and Dumat al-Jandal.",
        features: ["Olive Country", "Heritage"],
        pricing: [{ title: "Sakaka", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "bisha-airport-taxi",
        title: "Bisha Airport Taxi",
        description: "Bisha Airport transfer service.",
        content: "Serving Bisha and surrounding villages.",
        features: ["Local", "Friendly"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "rafha-airport-taxi",
        title: "Rafha Airport Taxi",
        description: "Rafha Airport pickup service.",
        content: "Serving Rafha city.",
        features: ["On Time", "Clean Cars"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "sharurah-airport-taxi",
        title: "Sharurah Airport Taxi",
        description: "Sharurah Airport transfer.",
        content: "Serving the Empty Quarter gateway.",
        features: ["Desert Safe", "AC"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "turaif-airport-taxi",
        title: "Turaif Airport Taxi",
        description: "Turaif Airport transfer service.",
        content: "Serving the mining city of Turaif.",
        features: ["Industrial", "Business"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "wadi-ad-dawasir-airport-taxi",
        title: "Wadi Ad Dawasir Airport Taxi",
        description: "Airport transfer in Wadi Ad Dawasir.",
        content: "Connecting the valley.",
        features: ["Local", "Fast"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-wajh-airport-taxi",
        title: "Al Wajh Airport Taxi",
        description: "Al Wajh Airport pickup.",
        content: "Red Sea coastal city transfer.",
        features: ["Coastal", "Historic"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "yanbu-airport-taxi",
        title: "Yanbu Airport Taxi",
        description: "Prince Abdul Mohsin Bin Abdulaziz Airport taxi.",
        content: "Serving Yanbu Industrial and Yanbu Al Bahr.",
        features: ["Diving Trips", "Business"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "qurayyat-airport-taxi",
        title: "Gurayat Airport Taxi",
        description: "Gurayat Airport transfer.",
        content: "Serving the northern border city.",
        features: ["Border Access", "24/7"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-ahsa-taxi",
        title: "Taxi in Al Ahsa",
        description: "Explore the largest oasis in the world.",
        content: "Visit Al Qara Hill and the souks.",
        features: ["UNESCO Site", "Nature"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "qassim-taxi",
        title: "Taxi in Qassim",
        description: "Transport across Al Qassim region.",
        content: "Serving Buraidah, Unaizah, and Ar Rass.",
        features: ["Dates Festival", "Business"],
        pricing: [{ title: "Intercity", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "luxury-chauffeur",
        title: "VIP Luxury Chauffeur Service | Lexus & Mercedes Umrah Transfers",
        description: "Elite VIP chauffeur service in KSA. Featuring 2025/2026 Mercedes V-Class, S-Class, and Lexus ES 300 for premium Umrah transfers.",
        content: "Experience true 5-Star travel with our Elite VIP Limousine service. We offer the latest 2025/2026 models of Lexus ES 300, Mercedes-Benz V-Class, and GMC Yukon Denali. Enjoy a whisper-quiet ride, English/Urdu speaking professional chauffeurs, complimentary chilled water, and premium tissues. Perfect for high-net-worth pilgrims, corporate executives, and VIP Makkah to Madinah transfers.",
        features: ["2025/2026 Fleet", "Mercedes V-Class / Lexus", "Meet & Greet Service", "Free Water & Tissues"],
        pricing: [{ title: "Lexus ES 300 (JED to Makkah)", price: "Get Quote" }, { title: "V-Class 6-Seater", price: "Get Quote" }],
        faqs: [
            { question: "Do you have the Mercedes V-Class available?", answer: "Yes, our VIP fleet includes the latest Mercedes V-Class luxury vans with captain chairs." },
            { question: "Are your drivers trained chauffeurs?", answer: "Yes, our luxury tier features highly trained, uniformed chauffeurs who provide complimentary flight tracking and luggage assistance." }
        ]
    },
    {
        slug: "family-taxi",
        title: "Family Taxi Service",
        description: "Spacious vehicles for families.",
        content: "Safe and comfortable transport for ladies and children.",
        features: ["Family Privacy", "Child Seats"],
        pricing: [{ title: "Booking", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "wheelchair-accessible-umrah-taxi",
        title: "Wheelchair Accessible Umrah Taxi | Elderly Transport",
        description: "Specialized low-floor vehicles (Staria/GMC) for elderly pilgrims requiring wheelchair access.",
        content: "We provide dedicated elderly-friendly transport. Our Hyundai Staria and GMC Yukon XL vehicles offer massive trunk space for folded wheelchairs and low step-in heights for passengers with mobility issues. We ensure drop-offs at the most accessible Haram gates.",
        features: ["Wheelchair Capability", "Low Step-in Height", "Helpful Drivers", "Accessible Drop-offs"],
        pricing: [{ title: "Staria (Jeddah to Makkah)", price: "Get Quote" }, { title: "GMC Yukon XL", price: "Get Quote" }],
        faqs: [
            { question: "Can the taxi fit a wheelchair and luggage?", answer: "Yes, our Staria and GMC vehicles have ample cargo space to fit a folded wheelchair alongside standard passenger luggage." }
        ]
    },
    {
        slug: "safe-umrah-taxi-solo-females-families",
        title: "Safe Umrah Taxi | For Solo Females & Families",
        description: "Verified, safe, and strictly private taxi transfers from Jeddah airport to Makkah for women and families.",
        content: "Safety is our priority. We offer vetted, licensed drivers with a strict privacy protocol for solo female travelers and families. Enjoy live ride-tracking, 'Pay After Journey' security, and complete peace of mind without dealing with aggressive street taxis.",
        features: ["Verified Drivers", "Live WhatsApp Tracking", "Pay After Journey", "Family Privacy"],
        pricing: [{ title: "Sedan Transfer", price: "Get Quote" }, { title: "Family SUV", price: "Get Quote" }],
        faqs: [
            { question: "Can I share my live location?", answer: "Yes, you are provided with your driver's details beforehand, and we encourage you to share your live WhatsApp location with family." }
        ]
    },
    // ===== Airport Taxis =====
    {
        slug: "tabuk-airport-transfer",
        title: "Tabuk Airport Transfer Service",
        description: "Professional transfer from Prince Sultan Airport to Tabuk city, NEOM, and surrounding areas.",
        content: "Reliable airport transfer from Tabuk Airport to your hotel or destination. We serve Tabuk city center, NEOM project sites, and surrounding areas.",
        features: ["Flight Monitoring", "Meet & Greet", "Wide Coverage", "24/7"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }, { title: "NEOM Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jubail-airport-taxi",
        title: "Jubail Airport Taxi",
        description: "Taxi from Jubail Airport to industrial city and residential area.",
        content: "Quick transfer from Jubail Airport to the Royal Commission area, Industrial City, or residential neighborhoods.",
        features: ["Industrial Access", "Fast", "Clean Cars", "English Support"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },

    {
        slug: "dawadmi-airport-taxi",
        title: "Dawadmi Airport Taxi",
        description: "Airport transfer in Ad Dawadmi.",
        content: "Serving Dawadmi Airport and surrounding areas in the Riyadh region.",
        features: ["Local Drivers", "Reliable", "AC", "Luggage Help"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },

    {
        slug: "qaisumah-airport-taxi",
        title: "Qaisumah Airport Taxi",
        description: "Airport transfer from Qaisumah Airport.",
        content: "Serving Hafr Al Batin and surrounding northern areas from Qaisumah Airport.",
        features: ["Northern Region", "Reliable", "Safe", "AC"],
        pricing: [{ title: "Hafr Al Batin", price: "Get Quote" }],
        faqs: []
    },

    {
        slug: "khobar-airport-taxi",
        title: "Khobar Airport Taxi",
        description: "Airport transfer from KFIA to Khobar city.",
        content: "Direct transfer from King Fahd International Airport to Al Khobar hotels and corniche area.",
        features: ["Direct Route", "Competitive Quote", "Comfortable", "Meet & Greet"],
        pricing: [{ title: "Khobar Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-baha-dhee-ain-heritage-tour",
        title: "Al-Baha Dhee Ain Heritage Tour | White Marble Village & Zahran Stone Houses — Driver Waits",
        description: "Half-day heritage circuit from Al-Baha — Dhee Ain white marble village (25km) + Zahran Heritage Village stone tower houses. Driver waits at both sites. Most photographed village in Al-Baha Province.",
        content: "Half-day private heritage tour from Al-Baha covering the two defining heritage sites of the Province: Dhee Ain (the white quartz village on a rocky cliff — most photographed site in Al-Baha, 25km west) and Zahran Heritage Village (traditional granite tower houses, heritage museum, honey stalls). Driver waits at both sites: typically 1 hour at Dhee Ain, 45 minutes at Zahran. Best run in the morning for the Dhee Ain light (sunrise or early morning). No public transport to either site — driver is essential.",
        features: [
            "Dhee Ain White Marble Village",
            "Zahran Stone Tower Houses",
            "Driver Waits Both Sites",
            "Heritage Museum Entry Assistance",
            "Morning Light Photography",
            "Honey Stall Stop Option"
        ],
        pricing: [
            { title: "Half-Day Heritage Circuit (Toyota Camry)", price: "Get Quote" },
            { title: "Half-Day Heritage Circuit (Toyota Staria)", price: "Get Quote" },
        ],
        faqs: [
            { question: "How long does the Dhee Ain heritage tour take?", answer: "Approximately 3.5–4.5 hours for the full circuit: Al-Baha → Dhee Ain (30 min drive) + 60 min at the village + Zahran Heritage Village (20 min drive) + 45 min at Zahran + return to Al-Baha (25 min). Can be extended to include Raghadan Forest for a full-day circuit." },
            { question: "Can the driver take us for sunrise at Dhee Ain?", answer: "Yes — sunrise at Dhee Ain is the definitive photography experience. We pick up from your hotel 30–45 minutes before sunrise and arrive at Dhee Ain for the first golden light on the white stone. WhatsApp us with your sunrise time (changes by season) when booking." }
        ]
    },
    {
        slug: "al-baha-highland-full-day-circuit",
        title: "Al-Baha Full-Day Highland Circuit | Raghadan Forest, Dhee Ain, Zahran & Baljurashi",
        description: "Full-day private circuit from Al-Baha — Raghadan Forest cable car + Dhee Ain marble village + Zahran Heritage Village + optional Baljurashi. Driver waits throughout. Best of Al-Baha Province in one day.",
        content: "Full-day private circuit covering Al-Baha Province's four main destinations. Typical routing: Raghadan Forest Park (cable car + forest walk, 5km) → Dhee Ain white marble village (25km west) → Zahran Heritage Village (stone tower houses + museum, 15km) → optional Baljurashi market town (55km south). Driver waits at all sites. Recommended for visitors with one full day in Al-Baha who want to see everything. Best combined with an early start to catch Dhee Ain in morning light.",
        features: [
            "Raghadan Forest Cable Car",
            "Dhee Ain White Marble Village",
            "Zahran Heritage Village & Museum",
            "Baljurashi Market Town Option",
            "Driver Waits All Stops",
            "Full-Day — All Al-Baha Highlights"
        ],
        pricing: [
            { title: "Full-Day Circuit (Toyota Camry)", price: "Get Quote" },
            { title: "Full-Day Circuit (Toyota Staria / 7 Pax)", price: "Get Quote" },
        ],
        faqs: [
            { question: "What is included in the full-day Al-Baha circuit?", answer: "Driver + vehicle for the full day with waiting time at all sites. You pay separately for cable car tickets at Raghadan and any museum entry fees. Suggested itinerary: 7:30am Raghadan Forest (cable car + walk), 10am Dhee Ain (marble village + viewpoint), 12:30pm Zahran Heritage Village (museum + honey stall), 2:30pm Baljurashi (market, optional), return to Al-Baha by 5pm." },
            { question: "Can we add Wadi Al-Aqiq to the circuit?", answer: "Yes — Wadi Al-Aqiq is on the western escarpment route between Al-Baha and Dhee Ain. Adding a 30-minute Wadi Al-Aqiq stop (dam viewpoint) extends the full-day circuit by about 45 minutes. Ask for the extended circuit when booking." }
        ]
    },
    {
        slug: "al-baha-airport-taxi",
        title: "Al Baha Airport Taxi",
        description: "Transfer from Al Baha Domestic Airport.",
        content: "Airport pickup in Al Baha. We serve Al Baha city, Baljurashi, and Thee Ain village.",
        features: ["Mountain Driving", "Tourist Spots", "Safe", "AC"],
        pricing: [{ title: "City Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "neom-airport-taxi",
        title: "NEOM Airport Taxi",
        description: "Transfer from NEOM Bay Airport to project sites.",
        content: "Authorized transport from NEOM Bay Airport to The Line, Trojena, Sindalah port, and all NEOM zones.",
        features: ["NEOM Permitted", "Premium Fleet", "Project Access", "Reliable"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "red-sea-airport-taxi",
        title: "Red Sea Airport Taxi",
        description: "Transfer from Red Sea International Airport to resorts.",
        content: "Premium airport transfer to Red Sea Global resort destinations. Luxury vehicles for a first-class experience.",
        features: ["Luxury Fleet", "Resort Drop-off", "VIP Service", "Luggage Assist"],
        pricing: [{ title: "Resort Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kaec-jeddah-airport-taxi",
        title: "KAEC to Jeddah Airport Taxi",
        description: "Transfer from King Abdullah Economic City to Jeddah Airport.",
        content: "Direct transfer from KAEC to King Abdulaziz International Airport. Reliable service for residents and business travelers.",
        features: ["Direct Route", "On Time", "Business Class", "Luggage Help"],
        pricing: [{ title: "One Way", price: "Get Quote" }],
        faqs: []
    },
    // ===== City Taxis =====
    {
        slug: "tabuk-taxi",
        title: "Taxi Service in Tabuk",
        description: "Local and intercity taxi service in Tabuk region.",
        content: "Reliable taxi service covering Tabuk city, military areas, and connections to NEOM and Jordan border.",
        features: ["City Coverage", "Intercity", "Military City", "Border Runs"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Intercity", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "buraidah-taxi",
        title: "Taxi Service in Buraidah",
        description: "Taxi in Buraidah, capital of Al Qassim region.",
        content: "Local transport in Buraidah. We cover the dates market, Al Rajhi Mosque, King Abdullah Park, and all neighborhoods.",
        features: ["Local Knowledge", "Date Festival", "Business", "Reliable"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "buraidah-riyadh-express",
        title: "Buraidah to Riyadh Express Transfer | Private Taxi — 330km Fixed Rate",
        description: "Private express taxi from Buraidah to Riyadh — 330km, 3.5 hours on Qassim Expressway. ELQ Airport pickup, hotel pickup, door-to-door. Most popular Qassim route.",
        content: "The Buraidah–Riyadh corridor is the highest-traffic intercity route in Qassim Region — thousands of passengers daily. Our express transfer covers all departure points: ELQ Airport, central Buraidah hotels, Unaizah (25km south), and the Dates Market area. Drop to any Riyadh address. Door-to-door, fixed rate, no shared rides. Early morning departures available.",
        features: ["330km Direct", "ELQ Airport Pickup", "Hotel Drop", "Dates Market Pickup", "Fixed Rate", "Early Morning"],
        pricing: [
            { title: "Saloon (1–4 pax)", price: "Get Quote" },
            { title: "SUV (1–7 pax)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long is Buraidah to Riyadh by private taxi?", answer: "Approximately 3 to 3.5 hours on Highway 65 (Qassim Expressway) — one of Saudi Arabia's best-maintained intercity highways." },
            { question: "Can the driver pick up from Unaizah as well?", answer: "Yes — Unaizah is 25km south of Buraidah on the Riyadh direction. We add Unaizah pickups to Buraidah–Riyadh transfers for a small supplement." },
            { question: "Do you offer early morning departures?", answer: "Yes — early morning departures from Buraidah (4am–6am) are popular for passengers needing morning meetings or early Riyadh flights. Confirm timing when booking." }
        ]
    },
    {
        slug: "buraidah-dates-festival-transfer",
        title: "Buraidah Dates Festival Transfer | Mahrajan Al-Tamr Taxi Service",
        description: "Dedicated taxi transfers for the Buraidah Dates Festival (Mahrajan Al-Tamr) — August–September harvest season. Hotel to Souq Al-Tamr, return pickups, festival-season timing.",
        content: "The Buraidah Dates Festival (Mahrajan Al-Tamr) is the world's largest dates market — running August–September during the Qassim date harvest. The Souq Al-Tamr complex is most active before 9am when the wholesale auctions run and the fresh Sukkari Rutab is at peak quality. Our festival transfer service covers hotel pickups across Buraidah, timed arrivals for early morning market activity, and scheduled return pickups. Dedicated festival-season service — book early as demand is high during the harvest fortnight.",
        features: ["Festival Season Timing", "Early Morning Pickups", "Hotel to Market", "Return Scheduling", "Sukkari Season", "August–September"],
        pricing: [
            { title: "Hotel to Market Return", price: "Get Quote" },
            { title: "Multi-day Festival Pass", price: "Get Quote" }
        ],
        faqs: [
            { question: "What time should I arrive at the Buraidah Dates Market?", answer: "5:00–8:00am is optimal — the wholesale auctions run before 9am and the fresh Rutab dates (soft-ripe Sukkari) are at their best in the early morning. Pre-book an early hotel pickup." },
            { question: "Can I book a return pickup from the market?", answer: "Yes — we pre-schedule a return pickup at your confirmed time. The market visit typically runs 2–3 hours, so a 9:00–10:00am return is common for 6am arrivals." },
            { question: "Is the Dates Festival worth visiting from Riyadh?", answer: "Absolutely — the Buraidah Dates Festival is one of Saudi Arabia's most distinctive cultural events. A same-day Riyadh–Buraidah transfer for the festival is very popular in August–September." }
        ]
    },
    {
        slug: "najran-al-ukhdood-tour",
        title: "Najran Al-Ukhdood Heritage Tour | Quranic Site, Emara Palace & Museum — Driver Waits",
        description: "Najran heritage tour — Al-Ukhdood Quranic archaeological site, Emara Palace, Najran Regional Museum. Driver waits between all sites. Half-day.",
        content: "Half-day Najran heritage circuit covering the three most significant heritage sites in the city. Begins at Al-Ukhdood (45–60 minutes) with the Quranic ruins, inscriptions, and excavated city blocks. Continues to Emara Palace for exterior architecture viewing and then the Najran Regional Museum (45 minutes). Driver waits between all sites and departs from your hotel and returns you at end of tour.",
        features: ["Al-Ukhdood Archaeological Park", "Emara Palace & Regional Museum", "Driver Waits Between All Sites", "Hotel Pickup & Dropoff", "Flexible Half-Day Itinerary"],
        pricing: [
            { title: "Toyota Camry (4 Pax)", price: "Get Quote" },
            { title: "GMC Yukon XL (7 Pax)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Does the driver wait at all Najran sites?", answer: "Yes — the driver waits throughout the Al-Ukhdood tour. At Al-Ukhdood, Emara Palace, and the Regional Museum the driver waits outside while you visit. No transport is available at these sites independently." },
            { question: "Can I add Wadi Najran to the Al-Ukhdood tour?", answer: "Yes — the half-day tour can be extended to include the Wadi Najran drive and dam reservoir. This extends the tour by 1.5–2 hours. Mention this when booking." }
        ]
    },
    {
        slug: "najran-bir-hima-day-trip",
        title: "Najran to Bir Hima UNESCO Day Trip | Rock Art Day Trip — Driver Waits",
        description: "Day trip from Najran to Bir Hima UNESCO World Heritage Site — 100km each way, driver waits. 25,000+ rock carvings. No transport at site — driver-waits essential.",
        content: "Full-day excursion from Najran to Bir Hima Cultural Area — UNESCO World Heritage Site (inscribed 2021), 100km north on the ancient caravan route. The driver waits at the site while you explore the 25,000+ rock carvings (Neolithic to Islamic period), inscriptions in multiple ancient scripts, and ancient wells. No public transport, Uber, or taxi available at Bir Hima — the driver is essential for your return. Confirm Bir Hima ticket booking separately on the Nusuk app before departure.",
        features: ["Bir Hima UNESCO Rock Art Site", "200km Round-Trip Transfer", "Driver Waits 2–3 Hours On Site", "Rock Art Panels & Ancient Wells", "Return to Najran Hotel"],
        pricing: [
            { title: "Toyota Camry (4 Pax)", price: "Get Quote" },
            { title: "GMC Yukon XL (7 Pax)", price: "Get Quote" },
        ],
        faqs: [
            { question: "Why is a driver-waits taxi essential for Bir Hima?", answer: "Bir Hima is 100km from Najran in open desert with no transport of any kind at the site. The nearest town with any services is significantly further. Without a pre-booked driver who explicitly confirms they will wait, you cannot return from the site. Always confirm driver waiting before entering." },
            { question: "How long does the Bir Hima day trip take?", answer: "Full day: 1 hour drive each way + 2–3 hours at the site = 5–6 hours minimum from Najran. An early departure (7am) returns by early afternoon, leaving the evening free for Najran city sites." }
        ]
    },
    {
        slug: "hofuf-taxi",
        title: "Taxi Service in Hofuf",
        description: "Taxi in Hofuf and Al Mubarraz, Al Ahsa region.",
        content: "Transport within Al Ahsa's main city. Visit Al Qara caves, the traditional souks, and the famous oasis.",
        features: ["Oasis Tours", "UNESCO Site", "Local Expert", "AC"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Al Qara Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "khobar-taxi",
        title: "Taxi Service in Khobar",
        description: "Premium taxi service in Al Khobar.",
        content: "Covering Khobar Corniche, Half Moon Bay, Dhahran, and King Fahd Causeway transfers to Bahrain.",
        features: ["Corniche Area", "Bahrain Bridge", "Business District", "Beach Trips"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Bahrain", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "riyadh-taxi",
        title: "Taxi Service in Riyadh",
        description: "Professional taxi service across the capital city of Riyadh.",
        content: "Reliable transport in Riyadh. Airport transfers, business district, Diriyah, Boulevard, and all major destinations.",
        features: ["Capital Coverage", "Business District", "Airport Runs", "24/7"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Airport", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "dammam-taxi",
        title: "Taxi Service in Dammam",
        description: "Taxi in Dammam, Eastern Province capital.",
        content: "Covering Dammam Corniche, King Fahd Park, Heritage Village, and all city areas. Quick connections to Khobar and Dhahran.",
        features: ["Eastern Province", "Corniche Area", "Heritage Sites", "Tri-City"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "najran-taxi",
        title: "Taxi Service in Najran",
        description: "Transport in Najran, southern Saudi Arabia.",
        content: "Explore Najran's rich heritage. We serve the Emara Palace, Al Ukhdood archaeological site, and the traditional souks.",
        features: ["Heritage Tours", "Border Access", "Local Guides", "AC"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Heritage Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "sharurah-taxi",
        title: "Taxi Service in Sharurah",
        description: "Taxi in Sharurah, gateway to the Empty Quarter.",
        content: "Reliable transport in Sharurah and connections to Najran and the Empty Quarter desert.",
        features: ["Desert Safe", "Long Distance", "AC", "Reliable"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "rabigh-taxi",
        title: "Taxi Service in Rabigh",
        description: "Taxi in Rabigh industrial and residential areas.",
        content: "Serving Petro Rabigh workers, KAEC residents, and transit passengers along the Jeddah-Madinah highway.",
        features: ["Industrial Zone", "KAEC Link", "Highway Access", "24/7"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "KAEC", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "medina-taxi",
        title: "Taxi Service in Madinah",
        description: "Premium taxi service in the holy city of Madinah.",
        content: "Reliable transport in Madinah. Hotel to Haram transfers, Ziyarat tours, airport pickups, and intercity connections.",
        features: ["Haram Transfers", "Ziyarat Tours", "Airport Runs", "24/7 Prayer Times"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Airport", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "qurayyat-taxi",
        title: "Taxi Service in Qurayyat",
        description: "Taxi in Gurayat, northern Saudi Arabia.",
        content: "Serving Qurayyat city and the Jordan border crossing. Ideal for travelers heading to Amman.",
        features: ["Border Runs", "Jordan Access", "Reliable", "AC"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Border", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "umluj-taxi",
        title: "Taxi Service in Umluj",
        description: "Taxi in Umluj, the Maldives of Saudi Arabia.",
        content: "Beach transfers, island boat trips, and city transport in the beautiful coastal town of Umluj.",
        features: ["Beach Access", "Island Trips", "Scenic", "Coastal"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Beach Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "baljurashi-taxi",
        title: "Taxi Service in Baljurashi",
        description: "Taxi in Baljurashi, Al Baha region.",
        content: "Mountain transport in Baljurashi. Access to Raghdan Forest Park, Thee Ain Village, and scenic mountain roads.",
        features: ["Mountain Safe", "Forest Park", "Scenic Routes", "Cool Climate"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "tanomah-taxi",
        title: "Taxi Service in Tanomah",
        description: "Taxi in Tanomah, Asir region mountain town.",
        content: "Scenic mountain transport in Tanomah. Visit the famous fog-covered forests and Al Namas.",
        features: ["Mountain Roads", "Fog Forest", "Scenic", "Safe"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "city-taxi",
        title: "City Taxi Service",
        description: "Local city taxi service across Saudi Arabia.",
        content: "Professional city taxi service available in all major Saudi cities. competitive rates, clean vehicles, and professional drivers.",
        features: ["All Cities", "competitive rates", "Clean Cars", "Professional"],
        pricing: [{ title: "Base Rate", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "local-taxi",
        title: "Local Taxi Service",
        description: "Affordable local taxi rides in your city.",
        content: "Need a ride within your city? Our local taxi service covers all neighborhoods with fair, Competitive quotes.",
        features: ["Affordable", "Quick Pickup", "All Areas", "Door to Door"],
        pricing: [{ title: "Local Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kaec-taxi",
        title: "King Abdullah Economic City Taxi",
        description: "Taxi service in KAEC (King Abdullah Economic City).",
        content: "Serving KAEC residents, visitors, and business travelers. Connections to Jeddah, Rabigh, and the Haramain train station.",
        features: ["KAEC Coverage", "Train Station", "Jeddah Link", "Business"],
        pricing: [{ title: "City Ride", price: "Get Quote" }, { title: "Jeddah", price: "Get Quote" }],
        faqs: []
    },
    // ===== Tour Services =====
    {
        slug: "alula-city-tour",
        title: "AlUla City Tour",
        description: "Guided taxi tour of AlUla's ancient wonders and modern attractions.",
        content: "Explore AlUla's stunning landscapes, Hegra UNESCO site, Elephant Rock, and the Old Town. Our drivers know every hidden gem.",
        features: ["UNESCO Sites", "Elephant Rock", "Old Town", "Desert Landscapes"],
        pricing: [{ title: "Half Day", price: "Get Quote" }, { title: "Full Day", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jeddah-city-tour",
        title: "Jeddah City Tour",
        description: "Explore Jeddah's historic Al Balad, Corniche, and modern landmarks.",
        content: "Discover Jeddah's blend of old and new. Visit UNESCO-listed Al Balad, the stunning Corniche, King Fahd Fountain, and the vibrant art scene.",
        features: ["Al Balad UNESCO", "Corniche Drive", "King Fahd Fountain", "Art District"],
        pricing: [{ title: "Half Day", price: "Get Quote" }, { title: "Full Day", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "yanbu-city-tour",
        title: "Yanbu City Tour",
        description: "Tour the historic port city of Yanbu Al Bahr and the modern industrial city.",
        content: "Explore Yanbu's diving spots, the old Ottoman harbor, and the Royal Commission recreational areas.",
        features: ["Historic Port", "Diving Spots", "RC Area", "Corniche"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "old-town-tour",
        title: "Old Town Tour Taxi",
        description: "Visit historic old towns across Saudi Arabia.",
        content: "Experience the charm of traditional Saudi old towns. From Jeddah's Al Balad to AlUla's Old Town and Ushaiger village.",
        features: ["Heritage Sites", "Photography Spots", "Guided", "Cultural"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "rijal-almaa-tour",
        title: "Rijal Almaa Village Tour",
        description: "Visit the colorful heritage village of Rijal Almaa near Abha.",
        content: "Explore the stunning UNESCO-nominated Rijal Almaa village with its colorful stone towers. Located in the Asir mountains near Abha.",
        features: ["UNESCO Nominated", "Mountain Village", "Photography", "Cultural Heritage"],
        pricing: [{ title: "Tour from Abha", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "thee-ain-tour",
        title: "Thee Ain Village Tour",
        description: "Visit the ancient marble village of Thee Ain in Al Baha.",
        content: "Discover the spectacular Thee Ain heritage village, built on a white marble hill with a waterfall. A hidden gem in Al Baha region.",
        features: ["Ancient Village", "Waterfall", "Marble Hill", "Photography"],
        pricing: [{ title: "Tour from Al Baha", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-qara-tour",
        title: "Al Qara Mountain Tour",
        description: "Explore Al Qara caves and mountain in Al Ahsa.",
        content: "Visit the famous Al Qara Mountain with its cool caves and stunning views over the Al Ahsa oasis. A unique geological wonder.",
        features: ["Cave Exploration", "Oasis Views", "Cool Temperature", "UNESCO Area"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-ahsa-oasis-heritage-tour",
        title: "Al-Ahsa Oasis Heritage Tour — Al-Qara Mountain, Jawatha Mosque & Qasr Ibrahim",
        description: "Full-day private taxi tour of Al-Ahsa UNESCO heritage sites: Al-Qara Mountain caves (18°C), Jawatha Mosque (7th century CE, oldest in Eastern Arabia), Qasr Ibrahim Ottoman fortress, Al-Qaysariyya Market.",
        content: "Al-Ahsa Heritage Tour covers the full UNESCO oasis circuit in one day. Starting at Al-Qara Mountain — sandstone caves at a constant 18°C regardless of the outside temperature, the most dramatic natural feature in the Eastern Province — then continuing to Jawatha Mosque in Al-Kilabiyah village (one of the oldest mosques in the Arabian Peninsula, 7th century CE), and concluding in central Hofuf at Qasr Ibrahim (16th-century Ottoman fortress with Al-Khamis Mosque inside the walls) and the Al-Qaysariyya traditional covered market for dates, Al-Sadu weaving, and traditional crafts. Driver plans optimal routing to avoid midday heat at outdoor sites.",
        features: ["Al-Qara Mountain Caves (18°C)", "Jawatha Mosque 7th Century", "Qasr Ibrahim Ottoman Fortress", "Al-Qaysariyya Market", "UNESCO Oasis Area", "Driver Waits All Sites", "Full-Day Circuit"],
        pricing: [
            { title: "Heritage Circuit (Al-Qara + Jawatha + Qasr Ibrahim + Market)", price: "Get Quote" },
            { title: "Half-Day (Al-Qara + Jawatha only)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What does the Al-Ahsa Heritage Tour include?", answer: "Al-Qara Mountain caves (45–60 minute walk, 18°C year-round), Jawatha Mosque in Al-Kilabiyah (7th-century CE, oldest mosque in Eastern Arabia), Qasr Ibrahim Ottoman fortress in central Hofuf (16th century), and Al-Qaysariyya traditional covered market. Driver waits at all sites and plans optimal routing." },
            { question: "How long does the full-day Al-Ahsa heritage circuit take?", answer: "The full circuit (Al-Qara + Jawatha + Qasr Ibrahim + market) takes approximately 7–8 hours from Hofuf departure. Depart at 8am, return by 4–5pm. From Dammam: add 3 hours total for the round-trip drive." }
        ]
    },
    {
        slug: "al-ahsa-al-uqair-coastal-trip",
        title: "Al-Uqair Coastal Day Trip from Al-Ahsa — Arabian Gulf Ruins & Beach",
        description: "Private taxi from Al-Ahsa to Al-Uqair — 80km east, 1 hour. Ancient Arabian Gulf port ruins, 1922 border treaty site (Uqair Protocol), isolated beach. Driver waits. No public transport.",
        content: "Al-Uqair is the most remote and distinctive day trip from Al-Ahsa — an ancient coastal settlement 80km east of Hofuf on the Arabian Gulf. The site was the primary maritime gateway for Al-Ahsa trade for centuries; in 1922 it was the location of the Uqair Conference, where Sir Percy Cox presided over the border definition between Saudi Arabia (then Najd), Iraq, and Kuwait — borders that largely persist today. The site has ruins of an ancient fortified settlement, a watchtower, and the remnants of port infrastructure. Combined with an isolated Arabian Gulf beach with fine sand and calm water, Al-Uqair offers a uniquely quiet historical and coastal experience. Driver waits throughout — no public transport or alternative return from this location.",
        features: ["Ancient Port Ruins", "1922 Uqair Protocol Site", "Isolated Arabian Gulf Beach", "80km from Hofuf", "Driver Waits", "No Public Transport", "Historical Context"],
        pricing: [
            { title: "Al-Uqair Day Trip (from Hofuf, driver waits)", price: "Get Quote" },
            { title: "Al-Uqair from Dammam / Al-Khobar", price: "Get Quote" }
        ],
        faqs: [
            { question: "Why is Al-Uqair historically significant?", answer: "Al-Uqair was the main Arabian Gulf port for the Al-Ahsa region for centuries — a landing point for Persian Gulf trade. In 1922 the Uqair Conference was held here: the border agreement signed by Sir Percy Cox that defined Saudi Arabia, Iraq, and Kuwait's modern frontiers." },
            { question: "Is there anything to see at Al-Uqair besides ruins?", answer: "Yes — Al-Uqair has an isolated Arabian Gulf beach with fine sand and shallow calm water. No facilities, but clean and peaceful. Best visited October–March when the beach weather is comfortable. The ruins walk takes approximately 45 minutes." }
        ]
    },
    {
        slug: "soudah-tour",
        title: "Soudah Mountain Tour",
        description: "Tour the highest point in Saudi Arabia at Soudah Peak near Abha.",
        content: "Visit Soudah Peak at 3,000m above sea level. Enjoy cable car rides, fog forests, and breathtaking mountain views.",
        features: ["Highest Peak", "Cable Car", "Fog Forest", "Mountain Views"],
        pricing: [{ title: "Tour from Abha", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jubbah-tour",
        title: "Jubbah Rock Art Tour",
        description: "Visit the UNESCO rock art site at Jubbah near Hail.",
        content: "Explore the ancient petroglyphs at Jubbah, a UNESCO World Heritage site. Thousands of years of human history carved in stone.",
        features: ["UNESCO Site", "Rock Art", "Desert Landscape", "Historical"],
        pricing: [{ title: "Tour from Hail", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "al-jouf-heritage-tour",
        title: "Al Jouf Heritage Tour",
        description: "Explore Dumat Al Jandal castle and Al Jouf olive farms.",
        content: "Visit the ancient Marid Castle, Mosque of Omar, and the famous olive groves of Al Jouf region.",
        features: ["Marid Castle", "Omar Mosque", "Olive Farms", "Heritage"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "ushaiger-tour",
        title: "Ushaiger Heritage Village Tour",
        description: "Visit the traditional mud-brick village of Ushaiger near Riyadh.",
        content: "Step back in time at Ushaiger, one of the best-preserved traditional Najdi villages. Just 200km from Riyadh.",
        features: ["Mud Brick Houses", "Traditional", "Photography", "Near Riyadh"],
        pricing: [{ title: "Tour from Riyadh", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "najran-heritage-tour",
        title: "Najran Heritage Tour",
        description: "Explore Najran's Emara Palace and Al Ukhdood archaeological site.",
        content: "Discover the rich history of Najran. Visit the stunning Emara Palace, the ancient Al Ukhdood ruins mentioned in the Quran, and traditional souks.",
        features: ["Emara Palace", "Al Ukhdood", "Quranic Site", "Traditional Souks"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "bisha-farm-tour",
        title: "Bisha Farm Tour",
        description: "Visit the famous date and pomegranate farms of Bisha.",
        content: "Explore Bisha's agricultural heritage. Tour date palm plantations and pomegranate orchards in the fertile valley.",
        features: ["Date Farms", "Pomegranate", "Agricultural", "Valley Views"],
        pricing: [{ title: "Farm Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "haql-tour-taxi",
        title: "Haql Tour Taxi",
        description: "Visit the famous shipwreck beach and Red Sea coast at Haql.",
        content: "Explore Haql's stunning coastline with views of four countries. Visit the famous Georgios G shipwreck on the beach.",
        features: ["Shipwreck Beach", "Red Sea Coast", "4 Country Views", "Scenic"],
        pricing: [{ title: "Tour from Tabuk", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "oasis-tour-taxi",
        title: "Oasis Tour Taxi",
        description: "Visit the famous oases of Saudi Arabia.",
        content: "Explore Al Ahsa, the world's largest oasis, and other palm-filled oases across the Kingdom.",
        features: ["Al Ahsa Oasis", "Palm Gardens", "Springs", "UNESCO"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "lina-village-taxi",
        title: "Lina Village Tour Taxi",
        description: "Visit the ancient ruins of Lina Village near Tabuk.",
        content: "Explore the mysterious ruins of Lina, an ancient village in the Tabuk region with archaeological significance.",
        features: ["Ancient Ruins", "Archaeological", "Desert Setting", "Photography"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "olive-farm-tour",
        title: "Olive Farm Tour",
        description: "Visit the olive farms of Al Jouf region.",
        content: "Al Jouf is home to the largest olive farms in the Middle East. Tour the groves and taste fresh Saudi olive oil.",
        features: ["Olive Groves", "Oil Tasting", "Al Jouf", "Agricultural"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },
    // ===== Industrial & Business Services =====
    {
        slug: "industrial-valley-taxi",
        title: "Industrial Valley Taxi Service",
        description: "Transport to industrial valleys and economic zones in Saudi Arabia.",
        content: "Specialized transport for workers and visitors to industrial valleys across the Kingdom. Covering Modon zones and free trade areas.",
        features: ["Industrial Zones", "Worker Transport", "Early Morning", "Shift Times"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "petro-rabigh-taxi",
        title: "Petro Rabigh Taxi",
        description: "Transport to and from Petro Rabigh refinery complex.",
        content: "Reliable transport for Petro Rabigh employees and contractors. Gate-to-gate service with safety compliance.",
        features: ["Refinery Access", "Safety Compliant", "Shift Times", "Reliable"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kharj-industrial-taxi",
        title: "Al Kharj Industrial Taxi",
        description: "Taxi service to Al Kharj industrial area south of Riyadh.",
        content: "Transport to Al Kharj military and industrial zones. Serving factory workers, military personnel, and business visitors.",
        features: ["Industrial Zone", "Military Base", "Riyadh Link", "Daily Runs"],
        pricing: [{ title: "From Riyadh", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jubail-industrial-taxi",
        title: "Jubail Industrial City Taxi",
        description: "Transport within Jubail Industrial City and Royal Commission area.",
        content: "Specialized transport serving the Royal Commission of Jubail. Access to SABIC, Ma'aden, and other industrial facilities.",
        features: ["RC Access", "SABIC Area", "Industrial Pass", "Worker Transport"],
        pricing: [{ title: "Industrial Zone", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "royal-commission-taxi",
        title: "Royal Commission Area Taxi",
        description: "Taxi service in Royal Commission areas of Jubail and Yanbu.",
        content: "Serving the Royal Commission industrial cities of Jubail and Yanbu. Access to all plant sites and residential compounds.",
        features: ["RC Jubail", "RC Yanbu", "Plant Access", "Compound Service"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "aramco-taxi",
        title: "Aramco Area Taxi",
        description: "Transport to Saudi Aramco compounds and facilities.",
        content: "Reliable transport for Aramco employees and visitors. Serving Dhahran, Ras Tanura, and Abqaiq areas.",
        features: ["Compound Access", "Dhahran HQ", "Ras Tanura", "Abqaiq"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "yanbu-industrial-transport",
        title: "Yanbu Industrial Transport",
        description: "Transport within Yanbu Industrial City.",
        content: "Serving the petrochemical and refining complex of Yanbu Industrial City. Worker transport and business transfers.",
        features: ["Petrochemical Zone", "Refinery Area", "Worker Shifts", "Business"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "sudair-industrial-taxi",
        title: "Sudair Industrial City Taxi",
        description: "Transport to Sudair Industrial City north of Riyadh.",
        content: "Taxi service to the growing Sudair Industrial City, home to major manufacturing and logistics facilities.",
        features: ["Industrial Zone", "Riyadh Link", "Manufacturing", "Logistics"],
        pricing: [{ title: "From Riyadh", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "industrial-taxi",
        title: "Industrial Zone Taxi",
        description: "Transport to industrial zones across Saudi Arabia.",
        content: "Specialized transport for factory workers and business visitors to industrial zones in all major Saudi cities.",
        features: ["All Cities", "Shift Times", "Worker Transport", "Business"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "business-taxi",
        title: "Business Taxi Service",
        description: "Professional transport for business meetings and corporate events.",
        content: "Executive taxi service for business professionals. Clean, punctual, and discreet transport for meetings and events.",
        features: ["Executive Cars", "Punctual", "Corporate Accounts", "Receipt"],
        pricing: [{ title: "Hourly", price: "Get Quote" }, { title: "Daily", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "staff-transport",
        title: "Staff Transport Service",
        description: "Daily staff transport solutions for businesses.",
        content: "Reliable daily transport for your workforce. We provide scheduled pickups and drop-offs for company staff across Saudi Arabia.",
        features: ["Daily Routes", "Scheduled Times", "Coaster Available", "Monthly Plans"],
        pricing: [{ title: "Monthly Contract", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kfupm-taxi",
        title: "KFUPM Taxi Service",
        description: "Taxi service near King Fahd University of Petroleum & Minerals.",
        content: "Serving KFUPM students, faculty, and visitors. Quick rides to Dhahran, Khobar, and Dammam.",
        features: ["Campus Pickup", "Student Rates", "Dhahran Area", "Reliable"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kkmc-taxi",
        title: "KKMC (King Khalid Military City) Taxi",
        description: "Taxi service in and around King Khalid Military City, Hafr Al Batin.",
        content: "Serving KKMC and Hafr Al Batin. Reliable transport for military personnel and civilian workers.",
        features: ["Military City", "Hafr Al Batin", "Reliable", "24/7"],
        pricing: [{ title: "City Ride", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "military-city-taxi",
        title: "Military City Taxi",
        description: "Transport to military cities in Saudi Arabia.",
        content: "Serving King Khalid Military City, King Abdulaziz Military City, and other defense installations.",
        features: ["Military Zones", "Worker Transport", "Reliable", "Safe"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "university-taxi",
        title: "University Taxi Service",
        description: "Taxi service near major Saudi universities.",
        content: "Serving students and faculty at KAU, KFUPM, KSU, UQU, Islamic University, and other campuses across Saudi Arabia.",
        features: ["Campus Service", "Student Rates", "Multiple Cities", "Safe"],
        pricing: [{ title: "Campus Ride", price: "Get Quote" }],
        faqs: []
    },
    // ===== Border Services =====
    {
        slug: "kuwait-border-taxi",
        title: "Kuwait Border Taxi",
        description: "Transfer to Saudi-Kuwait border crossings.",
        content: "Reliable taxi to Al Raqi and Al Khafji border crossings. Serving travelers heading to Kuwait.",
        features: ["Border Experience", "Document Help", "24/7", "Return Trips"],
        pricing: [{ title: "From Hafr Al Batin", price: "Get Quote" }, { title: "From Dammam", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "uae-border-taxi",
        title: "UAE Border Taxi",
        description: "Transfer to Saudi-UAE border at Al Batha.",
        content: "Transport to the Al Batha border crossing to UAE. Serving travelers from Al Ahsa, Hofuf, and Eastern Province.",
        features: ["Batha Border", "Document Assist", "AC", "Reliable"],
        pricing: [{ title: "From Al Ahsa", price: "Get Quote" }, { title: "From Dammam", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "qatar-border-taxi",
        title: "Qatar Border (Salwa) Taxi",
        description: "Transfer to Salwa border crossing to Qatar.",
        content: "Quick transfer to the Salwa border for travelers heading to Doha. From Al Ahsa, Khobar, or Dammam.",
        features: ["Salwa Border", "Fast Route", "Return Available", "AC"],
        pricing: [{ title: "From Al Ahsa", price: "Get Quote" }, { title: "From Khobar", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jordan-border-taxi",
        title: "Jordan Border Taxi",
        description: "Transfer to Saudi-Jordan border crossings.",
        content: "Transport to Halat Ammar, Al Durra (Haql), and Al Haditha border crossings for travelers heading to Jordan.",
        features: ["Multiple Crossings", "Tabuk Area", "Document Help", "24/7"],
        pricing: [{ title: "From Tabuk", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "jordan-exit-taxi",
        title: "Jordan Exit Taxi",
        description: "Taxi for travelers exiting to Jordan.",
        content: "Complete exit transfer service to Jordan borders. We handle the route while you focus on your documents.",
        features: ["Exit Support", "Border Knowledge", "Reliable", "Comfortable"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "yemen-border-taxi",
        title: "Yemen Border Taxi",
        description: "Transfer to Saudi-Yemen border at Al Tuwal and Wadeeah.",
        content: "Transport to Yemen border crossings from Najran, Jazan, and surrounding areas.",
        features: ["Al Tuwal", "Wadeeah", "Border Expert", "Safe"],
        pricing: [{ title: "From Najran", price: "Get Quote" }, { title: "From Jazan", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "wadeeah-border-taxi",
        title: "Wadeeah Border Taxi",
        description: "Transfer to Al Wadeeah border crossing (Yemen).",
        content: "Direct taxi service to the Al Wadeeah border crossing from Najran and Sharurah.",
        features: ["Wadeeah Crossing", "Najran Base", "Reliable", "Safe"],
        pricing: [{ title: "From Najran", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "customs-taxi",
        title: "Customs & Border Taxi",
        description: "Specialized border crossing transport service.",
        content: "Expert transport to all Saudi border crossings. Our drivers know the procedures and best times to cross.",
        features: ["All Borders", "Procedure Knowledge", "Wait Service", "Return"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "visa-run-taxi",
        title: "Visa Run Taxi Service",
        description: "Quick border run for visa renewal purposes.",
        content: "Need to exit and re-enter Saudi Arabia for visa purposes? We provide efficient border run services to the nearest crossing.",
        features: ["Fast Service", "Border Knowledge", "Wait & Return", "Multiple Borders"],
        pricing: [{ title: "Visa Run", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "qurayyat-to-jordan-border",
        title: "Qurayyat to Jordan Border Taxi",
        description: "Transfer from Qurayyat to Al Haditha Jordan border.",
        content: "Short transfer from Qurayyat city to the Al Haditha border crossing into Jordan.",
        features: ["Short Distance", "Border Access", "Fast", "Reliable"],
        pricing: [{ title: "Border Transfer", price: "Get Quote" }],
        faqs: []
    },
    // ===== Tourism & Special Services =====
    {
        slug: "desert-safari-taxi",
        title: "Desert Safari Taxi",
        description: "Desert safari transport and dune bashing experiences.",
        content: "Experience the Arabian desert in a 4x4. Dune bashing, sunset views, and traditional Bedouin camp visits available.",
        features: ["4x4 Vehicles", "Dune Bashing", "Sunset Tours", "Camp Visits"],
        pricing: [{ title: "Half Day Safari", price: "Get Quote" }, { title: "Full Day", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "desert-taxi",
        title: "Desert Taxi Service",
        description: "Reliable desert-ready transport across Saudi Arabia.",
        content: "Navigate the Saudi deserts safely with our desert-experienced drivers and 4x4 vehicles.",
        features: ["4x4 Fleet", "Desert Experience", "GPS Equipped", "Safety Kit"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "nafud-desert-trip",
        title: "Nafud Desert Trip Taxi",
        description: "Transport through the Great Nafud Desert.",
        content: "Explore the red sand dunes of the Great Nafud Desert. Our experienced drivers navigate the desert safely.",
        features: ["Red Sand Dunes", "4x4 Only", "Desert Guide", "Photography"],
        pricing: [{ title: "Day Trip", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "empty-quarter-taxi",
        title: "Empty Quarter (Rub al Khali) Taxi",
        description: "Transport to the edge of the Empty Quarter desert.",
        content: "Experience the vastness of Rub al Khali, the largest sand desert in the world. Based from Sharurah or Najran.",
        features: ["World Largest Desert", "4x4 Required", "Guide Included", "Adventure"],
        pricing: [{ title: "Day Trip", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "mountain-tour-taxi",
        title: "Mountain Tour Taxi",
        description: "Scenic mountain tours in Asir, Al Baha, and Taif regions.",
        content: "Experience the cool mountains of southern Saudi Arabia. From Soudah Peak to Al Baha forests and Taif roses.",
        features: ["Scenic Routes", "Cool Climate", "Multiple Regions", "Safe Driving"],
        pricing: [{ title: "Mountain Tour", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "red-sea-taxi",
        title: "Red Sea Coast Taxi",
        description: "Transport along the Red Sea coast from Jeddah to NEOM.",
        content: "Explore Saudi Arabia's stunning Red Sea coastline. From Jeddah to Umluj, Al Wajh, and NEOM.",
        features: ["Coastal Route", "Beach Access", "Diving Spots", "Scenic"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "the-line-taxi",
        title: "The Line (NEOM) Taxi",
        description: "Transport to The Line mega project in NEOM.",
        content: "Authorized transport service to The Line project in NEOM. Serving workers, visitors, and business travelers.",
        features: ["NEOM Access", "Authorized", "Premium Fleet", "Reliable"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "sindalah-taxi",
        title: "Sindalah Island Taxi",
        description: "Transport to Sindalah Island port in NEOM.",
        content: "Transfer to the luxury Sindalah Island yacht destination in NEOM. Premium vehicles for a premium experience.",
        features: ["Island Transfer", "Luxury", "NEOM Zone", "VIP"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "trojena-taxi",
        title: "Trojena (NEOM) Taxi",
        description: "Transport to Trojena ski resort project in NEOM.",
        content: "Transfer to Trojena, the future mountain tourism destination in NEOM. Winter sports and year-round adventures.",
        features: ["Mountain Access", "NEOM Zone", "Premium", "Authorized"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "half-moon-bay-taxi",
        title: "Half Moon Bay Taxi",
        description: "Transport to Half Moon Bay beach near Khobar.",
        content: "Beach day at Half Moon Bay? We provide comfortable transport from Khobar, Dammam, and Dhahran to this popular beach destination.",
        features: ["Beach Transfer", "Weekend Trips", "Family Friendly", "Return Trip"],
        pricing: [{ title: "From Khobar", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "umluj-beach-taxi",
        title: "Umluj Beach Taxi",
        description: "Transport to Umluj beaches, the Maldives of Saudi Arabia.",
        content: "Reach the crystal-clear waters of Umluj. Island boat trip coordination available.",
        features: ["Beach Access", "Island Trips", "Crystal Waters", "Photography"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "farasan-ferry-transfer",
        title: "Farasan Island Ferry Transfer",
        description: "Transport to Jazan ferry terminal for Farasan Islands.",
        content: "Transfer to the Jazan ferry port for your Farasan Islands trip. We time your pickup to match the ferry schedule.",
        features: ["Ferry Schedule", "Jazan Port", "Island Trip", "Timed Pickup"],
        pricing: [{ title: "From Jazan", price: "Get Quote" }],
        faqs: []
    },
    // ===== Service Type Categories =====
    {
        slug: "intercity-taxi",
        title: "Intercity Taxi Service",
        description: "Long-distance intercity taxi between all Saudi cities.",
        content: "Connect between any two cities in Saudi Arabia. Comfortable, air-conditioned vehicles with experienced long-distance drivers.",
        features: ["All Cities", "Long Distance", "Comfortable", "competitive rates"],
        pricing: [{ title: "Per KM", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "long-distance-taxi",
        title: "Long Distance Taxi Service",
        description: "Premium long-distance taxi service across Saudi Arabia.",
        content: "Specialized in journeys over 500km. Our long-distance fleet includes spacious SUVs and luxury sedans for maximum comfort.",
        features: ["500+ KM Routes", "Comfort Stops", "Fresh Driver", "AC"],
        pricing: [{ title: "Custom Quote", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "pilgrim-taxi",
        title: "Pilgrim Taxi Service",
        description: "Dedicated taxi service for Umrah and Hajj pilgrims.",
        content: "Special transport designed for pilgrims. Our drivers understand the rituals, timings, and holy sites. Patient, respectful service.",
        features: ["Pilgrim Focused", "Holy Sites", "Patient Drivers", "Prayer Stops"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "umrah-taxi",
        title: "Umrah Taxi Service",
        description: "Complete taxi service for Umrah pilgrims in Saudi Arabia.",
        content: "From airport to hotel, hotel to Haram, and Ziyarat tours. Everything a pilgrim needs in one reliable taxi service.",
        features: ["Airport Pickup", "Hotel Transfers", "Ziyarat", "24/7"],
        pricing: [{ title: "Package", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "heritage-taxi",
        title: "Heritage & Historical Taxi",
        description: "Transport to Saudi Arabia's heritage and historical sites.",
        content: "Visit UNESCO sites, ancient ruins, and historical landmarks across the Kingdom with our knowledgeable drivers.",
        features: ["UNESCO Sites", "Knowledgeable Drivers", "Photography Stops", "Cultural"],
        pricing: [{ title: "Tour", price: "Get Quote" }],
        faqs: []
    },

    {
        slug: "hotel-to-haram-transport",
        title: "Hotel to Haram Transport",
        description: "Daily shuttle between your hotel and Masjid Al Haram in Makkah.",
        content: "Staying in Aziziyah or far from the Haram? Our daily shuttle gets you to the Clock Tower area and back, avoiding crowded buses.",
        features: ["Daily Service", "Prayer Times", "Aziziyah Coverage", "Private"],
        pricing: [{ title: "One Way", price: "Get Quote" }, { title: "Daily Package", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "airport-taxi",
        title: "Airport Taxi Service",
        description: "Professional airport taxi at all Saudi airports.",
        content: "Meet and greet at arrivals, flight tracking, and reliable transport from every airport in Saudi Arabia to your destination.",
        features: ["All Airports", "Meet & Greet", "Flight Tracking", "24/7"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "date-festival-transfer",
        title: "Date Festival Transfer",
        description: "Transport to the annual dates festival in Buraidah.",
        content: "Visit the world's largest dates festival in Buraidah. We provide transport from airports and hotels to the festival grounds.",
        features: ["Festival Ground", "Buraidah", "Seasonal", "Group Transport"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },

    // ===== Specific Location Services =====
    {
        slug: "jazan-economic-city",
        title: "Jazan Economic City Taxi",
        description: "Transport to Jazan Economic City (JEC).",
        content: "Taxi service to Jazan Economic City, serving workers, business visitors, and industrial staff.",
        features: ["JEC Access", "Industrial Area", "Worker Transport", "Reliable"],
        pricing: [{ title: "From Jazan", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "ghadha-park-taxi",
        title: "Ghadha Park Taxi",
        description: "Transport to Ghadha Park in Hail.",
        content: "Visit the beautiful Ghadha Park in Hail. Enjoy the natural reserve with its unique trees and desert landscape.",
        features: ["Nature Reserve", "Hail Area", "Family Trip", "Scenic"],
        pricing: [{ title: "From Hail", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "raghdan-park-taxi",
        title: "Raghdan Forest Park Taxi",
        description: "Transport to Raghdan Park in Al Baha.",
        content: "Visit the cool Raghdan Forest Park, the most famous park in Al Baha region. Cable car and forest walks await.",
        features: ["Forest Park", "Cable Car", "Cool Climate", "Al Baha"],
        pricing: [{ title: "From Al Baha", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "king-fahd-dam-taxi",
        title: "King Fahd Dam Taxi",
        description: "Transport to King Fahd Dam near Bisha.",
        content: "Visit the largest dam in Saudi Arabia. A popular picnic and sightseeing destination in Bisha.",
        features: ["Dam Visit", "Scenic Views", "Picnic Area", "Photography"],
        pricing: [{ title: "From Bisha", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "waad-al-shamal-taxi",
        title: "Waad Al Shamal Taxi",
        description: "Transport in Waad Al Shamal mining city.",
        content: "Serving the Waad Al Shamal mining and industrial area near Turaif. Worker and business transport.",
        features: ["Mining City", "Industrial", "Worker Transport", "Northern Region"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "northern-borders-taxi",
        title: "Northern Borders Region Taxi",
        description: "Taxi service across the Northern Borders region.",
        content: "Serving Arar, Rafha, and Turaif in the Northern Borders region. Intercity and border crossing services.",
        features: ["Arar", "Rafha", "Turaif", "Border Access"],
        pricing: [{ title: "Intercity", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "majmaah-train-taxi",
        title: "Majmaah Train Station Taxi",
        description: "Transfer to SAR train station in Majmaah.",
        content: "Connecting Majmaah to the Saudi Railway network. Transfer to the train station from Majmaah city and surrounding areas.",
        features: ["Train Connection", "SAR Station", "Timed Pickup", "Reliable"],
        pricing: [{ title: "Station Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kaec-train-station-taxi",
        title: "KAEC Haramain Train Station Taxi",
        description: "Transfer to Haramain Railway station in KAEC.",
        content: "Connecting to the Haramain High Speed Railway at KAEC station. Transfers from Rabigh, Jeddah north, and KAEC city.",
        features: ["High Speed Rail", "KAEC Station", "Timed Service", "Business"],
        pricing: [{ title: "Transfer", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "kjo-taxi",
        title: "King Abdullah University (KAUST) Taxi",
        description: "Taxi service to KAUST campus near Thuwal.",
        content: "Transport to King Abdullah University of Science and Technology. Serving faculty, students, and visitors.",
        features: ["Campus Access", "Thuwal Area", "Jeddah Link", "Professional"],
        pricing: [{ title: "From Jeddah", price: "Get Quote" }],
        faqs: []
    },
    {
        slug: "duba-port-taxi",
        title: "Duba Port Taxi",
        description: "Transport to Duba commercial port on the Red Sea.",
        content: "Transfer to Duba Port for ferry connections to Egypt and port operations. Serving travelers and port workers.",
        features: ["Port Access", "Ferry Connection", "Egypt Route", "Reliable"],
        pricing: [{ title: "From Tabuk", price: "Get Quote" }],
        faqs: []
    }
,
    {
        slug: "riyadh-kafd-corporate-chauffeur",
        title: "KAFD Corporate Chauffeur Riyadh",
        description: "Dedicated corporate chauffeur service for King Abdullah Financial District — KKIA airport transfers, business circuits, and intercity executive travel.",
        content: "Professional corporate chauffeur service serving KAFD businesses and executives. Named drivers, fixed rates, and flexible scheduling for daily KKIA airport runs, KAFD to Diplomatic Quarter circuits, and long-haul intercity trips to Jeddah or Madinah.",
        features: ["Named Driver", "Fixed Rate", "Flight Tracking", "Corporate Account", "24/7 Availability", "KAFD Tower Pickup"],
        pricing: [
            { title: "KAFD to KKIA Airport", price: "Get Quote" },
            { title: "KAFD to Diplomatic Quarter", price: "Get Quote" },
            { title: "KAFD to Jeddah (Intercity)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Can I set up a corporate account for regular KAFD transfers?", answer: "Yes. We support corporate accounts for businesses in KAFD with consolidated monthly billing and priority booking. Contact us via WhatsApp to discuss your requirements." },
            { question: "How long does it take from KAFD to KKIA Airport?", answer: "KAFD to KKIA is approximately 32km and takes 35–45 minutes depending on Riyadh traffic. We track your flight and adjust pickup timing accordingly." }
        ]
    },
    {
        slug: "riyadh-to-makkah-umrah-taxi",
        title: "Riyadh to Makkah Umrah Private Taxi",
        description: "Private Umrah taxi from Riyadh to Makkah — direct door-to-hotel transfer, Hajj-permitted vehicles, 24/7 departure flexibility.",
        content: "The most requested intercity route in Saudi Arabia — Riyadh to Makkah for Umrah. Covering approximately 870km via Route 65 and Route 15, our private Umrah taxi provides door-to-hotel delivery at your Makkah accommodation. All vehicles are Hajj and Umrah-permitted. Departure at your preferred time — early morning before Fajr or after Isha for optimal arrival.",
        features: ["Hajj-Permitted Vehicles", "Door-to-Makkah-Hotel", "Fajr Arrival Option", "Group Vehicles", "Fixed Rate", "24/7 Departure"],
        pricing: [
            { title: "Toyota Camry (4 Pax)", price: "Get Quote" },
            { title: "GMC Yukon XL (7 Pax)", price: "Get Quote" },
            { title: "Toyota Staria (7 Pax)", price: "Get Quote" },
            { title: "Toyota Hiace (11 Pax)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long is the drive from Riyadh to Makkah for Umrah?", answer: "Riyadh to Makkah is approximately 870km and takes 8–9 hours via Route 65 and Route 15 through the Hejaz. One rest and prayer stop is included near Al Majmaah." },
            { question: "Can the Riyadh to Makkah Umrah taxi drop directly at my Makkah hotel?", answer: "Yes. We deliver door-to-hotel in the Aziziyah, Ajyad, or Markaziyah areas — all within walking distance of Masjid Al-Haram. Your driver knows all the hotel access routes." },
            { question: "What is the best time to depart Riyadh for Makkah Umrah?", answer: "Departing after Isha (9:30–10pm) delivers you to Makkah around 6–7am — ideal for Fajr Tawaf at Masjid Al-Haram. Alternatively, a morning departure gets you there for Dhuhr." }
        ]
    },
    {
        slug: "riyadh-hourly-chauffeur",
        title: "Riyadh Hourly Chauffeur Service",
        description: "Hire a private chauffeur by the hour in Riyadh — business meetings circuit, shopping, medical appointments, and day programmes.",
        content: "Riyadh's business districts, hospitals, and malls are spread across a large metro area. An hourly chauffeur eliminates the need to book separate rides for each stop — your driver waits at each location and moves when you do. Ideal for executives running a full-day KAFD–Ministry–hospital–hotel circuit, medical tourists visiting multiple clinics, and tourists covering Diriyah, Kingdom Tower, and Riyadh Season venues.",
        features: ["Hourly Rate", "Driver Waits at Each Stop", "KAFD Business Circuits", "Medical Tourism", "Riyadh Season", "Flexible Hours"],
        pricing: [
            { title: "Toyota Camry (per hour, min 3hrs)", price: "Get Quote" },
            { title: "GMC Yukon XL (per hour, min 3hrs)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What is the minimum booking for Riyadh hourly chauffeur?", answer: "Minimum booking is 3 hours. We quote a fixed hourly rate via WhatsApp — no meter running. Tell us your programme and we confirm the total before you travel." },
            { question: "Can the hourly chauffeur take me to multiple Riyadh malls?", answer: "Yes. A popular shopping circuit covers Riyadh Park, Granada Mall, and Centria — your driver waits at each location. Much more efficient than rebooking separate rides." }
        ]
    }
,
    {
        slug: "riyadh-medical-transfer",
        title: "Riyadh Medical Transfer — Hospital Taxi & Airport to Hospital Service",
        description: "Private taxi for medical appointments in Riyadh. King Faisal Specialist Hospital, Saudi German Hospital, KKIA airport to hospital transfers. Fixed rate, door-to-door.",
        content: "Riyadh is one of the Middle East's premier medical tourism destinations — home to King Faisal Specialist Hospital & Research Centre (internationally accredited), Saudi German Hospital, King Abdulaziz Medical City, and National Guard Health Affairs. International medical patients, their families, and Saudi residents travelling for treatment need a reliable transfer that accommodates medical equipment, wheelchairs, and hospital schedules. Our medical transfer service provides fixed-rate KKIA airport-to-hospital delivery, inter-hospital transfers, and daily appointment runs.",
        features: ["KKIA Airport to Hospital", "Wheelchair Accessible Options", "Flight Tracked Arrivals", "Fixed Rate", "24/7 Including Emergency Hours", "Door to Ward Entrance"],
        pricing: [
            { title: "KKIA to King Faisal Specialist Hospital", price: "Get Quote" },
            { title: "KKIA to Saudi German Hospital", price: "Get Quote" },
            { title: "KKIA to King Abdulaziz Medical City", price: "Get Quote" },
            { title: "Daily Appointment Transfer (hourly)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Can you take a patient from KKIA Airport directly to King Faisal Specialist Hospital?", answer: "Yes. We meet you at KKIA arrivals with a name board, assist with luggage and any medical equipment, and deliver directly to the hospital entrance. Journey time is approximately 35–45 minutes depending on traffic." },
            { question: "Do you have wheelchair-accessible vehicles in Riyadh?", answer: "Please mention accessibility requirements when booking. We will confirm vehicle suitability for your specific needs." },
            { question: "Can you arrange daily transfers for multiple hospital appointments?", answer: "Yes. Many medical tourists book a recurring daily transfer for the duration of their treatment programme. We quote a fixed daily rate and assign the same driver where possible." }
        ]
    }
,
    {
        slug: "riyadh-group-minibus-transfer",
        title: "Riyadh Group Minibus Transfer — Toyota Hiace & Coaster for Corporate & Family Groups",
        description: "Group taxi and minibus service in Riyadh. Toyota Hiace (11 pax) and Coaster (22 pax) for corporate groups, large families, school trips, and intercity group travel.",
        content: "Large families, corporate delegations, and event groups need more than a standard 4-seater. Our Riyadh group transfer service offers Toyota Hiace (11 passengers) and Coaster (22 passengers) — fully air-conditioned, professional drivers, fixed group rates. Ideal for KKIA airport group arrivals, KAFD to hotel shuttles, Diriyah and Riyadh Season group trips, and intercity group travel to Jeddah, Madinah, or Makkah.",
        features: ["Toyota Hiace 11 Pax", "Coaster 22 Pax", "KKIA Group Arrivals", "Corporate Shuttle", "Intercity Groups", "Fixed Group Rate"],
        pricing: [
            { title: "Toyota Hiace (11 Pax)", price: "Get Quote" },
            { title: "Toyota Coaster (22 Pax)", price: "Get Quote" },
            { title: "Multiple Vehicles (22+ Pax)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What is the largest group vehicle available in Riyadh?", answer: "We offer Toyota Coaster (22 passengers) for large groups. For groups above 22, we coordinate multiple vehicles — all departing together. Quote via WhatsApp with your group size and route." },
            { question: "Can I book a group minibus from KKIA Airport for a corporate delegation?", answer: "Yes. We meet your group at KKIA arrivals (all on the same or different flights) and transfer together to your hotel or KAFD office. Meet-and-greet with name board included." }
        ]
    },
    {
        slug: "riyadh-hajj-2026-transfer",
        title: "Riyadh Hajj 2026 Transfer — Hajj-Permitted Private Taxi to Makkah & Mina",
        description: "Official Hajj 2026 transfer from Riyadh to Makkah and Mina. Hajj-permitted vehicles, fixed rate, KKIA airport pickup for Hajj pilgrims — pre-booking essential.",
        content: "Hajj 2026 falls in late May/early June. Pilgrims travelling from Riyadh or arriving at KKIA need Hajj-permitted vehicles to pass the Makkah and Mina security cordons — unauthorised vehicles are turned back at checkpoints. Our fleet carries full Hajj permits issued by the Saudi Ministry of Hajj and Umrah. Pre-booking is essential — Hajj period capacity fills weeks in advance. We transfer from KKIA Airport, central Riyadh, KAFD, and all Riyadh hotels directly to your Makkah hotel or Mina camp.",
        features: ["Ministry Hajj Permit", "KKIA Airport Pickup", "Makkah Hotel Drop", "Mina Camp Transfer", "Pre-Book Required", "24/7 Hajj Season"],
        pricing: [
            { title: "KKIA to Makkah Hotel (Hajj 2026)", price: "Get Quote" },
            { title: "Riyadh City to Makkah (Hajj 2026)", price: "Get Quote" },
            { title: "Makkah to Mina (Hajj Days)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Why do I need a Hajj-permitted taxi to get to Makkah during Hajj 2026?", answer: "During Hajj season (Dhul Hijja 1–15), Saudi authorities operate strict vehicle checkpoints on all routes into Makkah and Mina. Only vehicles with Ministry of Hajj-issued permits can pass. Unlicensed taxis and rideshare apps are turned back. Our fleet carries full permits." },
            { question: "When should I pre-book my Riyadh to Makkah Hajj 2026 transfer?", answer: "Pre-book as early as possible — ideally 4–8 weeks before your Hajj travel date. Hajj capacity is limited by permit allocation. Contact us via WhatsApp with your flight arrival details and Makkah accommodation." }
        ]
    },
    {
        slug: "riyadh-vip-luxury-chauffeur",
        title: "Riyadh VIP Luxury Chauffeur Service — Executive Car Hire for Business & Events",
        description: "VIP luxury chauffeur in Riyadh. Mercedes S-Class, GMC Yukon XL, and premium SUV fleet for business executives, dignitaries, and special occasions. Fixed rate, named driver, 24/7.",
        content: "For executives requiring a premium experience, dignitaries visiting Riyadh, and high-profile occasions, our VIP chauffeur service provides luxury vehicles, formally presented drivers, and a white-glove experience from KKIA arrivals through every leg of your Riyadh programme. Available for KKIA airport meet-and-greet, KAFD business circuit, Ministry and government meeting transfers, gala events, and intercity VIP transfers.",
        features: ["Premium Fleet", "Formally Presented Driver", "KKIA VIP Arrivals", "Discrete Service", "Account Billing", "24/7 Availability"],
        pricing: [
            { title: "GMC Yukon XL Executive (per transfer)", price: "Get Quote" },
            { title: "Full Day VIP Chauffeur (8 hrs)", price: "Get Quote" },
            { title: "KKIA VIP Meet & Greet + Transfer", price: "Get Quote" }
        ],
        faqs: [
            { question: "Do you offer Mercedes S-Class or luxury sedans in Riyadh?", answer: "Our premium fleet includes GMC Yukon XL Executive and Toyota Staria VIP. For specific luxury sedan requests, contact us via WhatsApp — we confirm availability and pricing." },
            { question: "Can you arrange a VIP meet-and-greet at KKIA for an executive arrival?", answer: "Yes. We provide a formally presented driver at KKIA arrivals with a professional name board, fast-track assistance through the terminal, and direct transfer to your Riyadh destination." }
        ]
    },
    {
        slug: "riyadh-school-run-service",
        title: "Riyadh School Run Service — Expat Family School Transfer (DQ, Olaya & North Riyadh)",
        description: "Reliable daily school run taxi in Riyadh for expat families. Diplomatic Quarter, Olaya, and north Riyadh areas. Fixed weekly rate, consistent driver, WhatsApp scheduling.",
        content: "Riyadh's international school community — French School Lycée Théodore Monod, British International School, American International School, and others — is centred in the Diplomatic Quarter, Al Malqa, and north Riyadh. Expat families need a reliable, consistent driver for morning drop-off and afternoon collection. Our school run service provides a fixed weekly rate, same driver where possible, and WhatsApp confirmation each morning.",
        features: ["Consistent Driver", "Fixed Weekly Rate", "Morning & Afternoon Runs", "DQ & North Riyadh", "WhatsApp Scheduling", "Safe Child Transfer"],
        pricing: [
            { title: "Morning Drop (per trip)", price: "Get Quote" },
            { title: "Afternoon Collection (per trip)", price: "Get Quote" },
            { title: "Weekly Package (5 days both ways)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Do you provide school runs for international schools in Riyadh?", answer: "Yes. We serve the French Lycée, British International School, American International School, and other international schools in the DQ, Al Malqa, and north Riyadh areas. Contact us with your school, home address, and schedule for a fixed weekly quote." },
            { question: "Can I get the same driver every day for my child's school run?", answer: "We assign the same driver wherever possible for school runs — consistency and familiarity is important for families with children. Driver details are confirmed with you before the first run." }
        ]
    },
    {
        slug: "jeddah-al-balad-tour",
        title: "Jeddah Al Balad City Tour — UNESCO Historic Jeddah by Private Taxi",
        description: "Private taxi tour of Al Balad (Historic Jeddah) — UNESCO World Heritage coral houses, Naseef House, Al-Shafi'i Mosque, and the old souq. Half-day and full-day options. Fixed rate.",
        content: "Al Balad — the historic heart of Jeddah — is a UNESCO World Heritage Site of extraordinary cultural significance. The district preserves 700 years of Hejazi merchant architecture: towering coral-block houses with elaborately carved rowshan wooden lattice balconies, ancient mosques, fragrant spice souqs, and the covered market lanes that once connected the Red Sea's most important trade port to the Hejaz pilgrimage roads. Our Al Balad city tour service provides a private taxi driver who drops you at the Bab Makkah entrance and waits while you explore, or accompanies your group on a guided walking circuit. Key landmarks include Naseef House (the city's most iconic merchant mansion, now a museum), Al-Shafi'i Mosque (the oldest mosque in Jeddah with its distinctive cylindrical minaret), Al Alawi Mosque, and the labyrinthine Al Balad Souq. We also offer a combined Al Balad + Corniche + King Fahd Fountain full-day city tour.",
        features: ["UNESCO Heritage District", "Naseef House Museum", "Al-Shafi'i Mosque", "Old Souq", "Rowshan Architecture", "Half-Day & Full-Day Options"],
        pricing: [
            { title: "Al Balad Drop & Explore (driver waits 3 hrs)", price: "Get Quote" },
            { title: "Al Balad + Corniche Half-Day Tour", price: "Get Quote" },
            { title: "Full-Day Jeddah City Tour (all-day driver)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long should I spend in Al Balad (Historic Jeddah)?", answer: "A minimum of 2–3 hours is needed to appreciate Al Balad properly — walking the main lanes, visiting Naseef House, and exploring the souq. Architecture enthusiasts and photographers often spend 4–6 hours. The best light is early morning or late afternoon." },
            { question: "Can I combine Al Balad with the Corniche in one booking?", answer: "Yes. Our most popular Jeddah city tour combines Al Balad (2–3 hours) with the Corniche and King Fahd Fountain — all within 10km of each other. Ask us for a combined half-day or full-day fixed rate via WhatsApp." },
            { question: "Is Al Balad open at night?", answer: "Al Balad is accessible at all hours as an open-air neighbourhood. Many restaurants and cafes in the district open in the evenings. The souq lanes are best explored during daytime when shops are open. Evening visits offer atmospheric lighting in the heritage lanes." }
        ]
    },
    {
        slug: "jeddah-corniche-tour",
        title: "Jeddah Corniche Tour — Red Sea Waterfront & King Fahd Fountain by Private Taxi",
        description: "Private taxi tour of Jeddah Corniche — 30km Red Sea waterfront, King Fahd Fountain, Al Hamra seafront, and Jeddah Waterfront development. Fixed-rate half-day tour.",
        content: "Jeddah's Corniche is one of the most spectacular urban waterfronts in the Middle East — a 30km promenade along the Red Sea coast featuring parks, sculptures, the world's tallest fountain, and a string of hotels, restaurants, and leisure attractions. Our private Corniche tour service takes you from your hotel to the key Corniche stops with a driver who waits at each location, adjusting the pace and order to your preferences. The centrepiece is the King Fahd Fountain — the world's tallest fountain at 312 metres — best seen illuminated after dark. Other highlights include Jeddah Waterfront (JW), Al Nawras Park, Al Shallal Theme Park (optional), Fakieh Aquarium, and the restored Al Hamra Corniche with its seafront dining. Combined with an Al Balad morning visit, the Corniche makes a perfect full-day Jeddah itinerary.",
        features: ["King Fahd Fountain", "30km Red Sea Waterfront", "Al Hamra Corniche", "Jeddah Waterfront (JW)", "Flexible Stops", "Evening Fountain Viewing"],
        pricing: [
            { title: "Corniche Evening Tour (King Fahd Fountain + 2 stops)", price: "Get Quote" },
            { title: "Corniche Half-Day (4 hrs — all main stops)", price: "Get Quote" },
            { title: "Al Balad + Corniche Full-Day Tour", price: "Get Quote" }
        ],
        faqs: [
            { question: "When is the best time to visit King Fahd Fountain?", answer: "King Fahd Fountain is most spectacular after dark when it is illuminated — typically from 6pm onwards during cooler months (October–April). Check current operating times as these vary seasonally. Evening visits combine perfectly with Corniche waterfront dining." },
            { question: "How long does a Jeddah Corniche tour take?", answer: "A Corniche highlights tour covering King Fahd Fountain, Al Hamra promenade, and Jeddah Waterfront takes approximately 3–4 hours. A full Corniche tour including Al Shallal and Fakieh Aquarium can take a full day. We customise the itinerary to your available time." },
            { question: "Can I book a Corniche dinner tour?", answer: "Yes. We offer evening Corniche tours timed around your restaurant reservation — dropping you for the fountain viewing, waiting while you dine, and returning you to your hotel. WhatsApp us with your restaurant and reservation time." }
        ]
    },
    {
        slug: "madinah-wadi-jinn-tour",
        title: "Madinah Wadi Al-Jinn Tour — Magnetic Valley Day Trip by Private Taxi",
        description: "Private taxi tour to Wadi Al-Jinn (Al-Baida Magnetic Valley) from Madinah — where cars roll uphill and water defies gravity. 40km north. Fixed-rate round trip, driver waits.",
        content: "Wadi Al-Jinn — officially Wadi Al-Baida — is the most visited day trip from Madinah beyond the standard Ziyarat circuit. Located 40km north of the city, this desert valley creates a remarkable optical illusion: when a car is placed in neutral, it appears to roll uphill by itself. Water poured on the road also appears to flow against gravity. The effect is caused by the surrounding mountain ridges creating a false horizon that reverses the perceived slope — GPS elevation measurements confirm the road is actually downward sloping in the direction things appear to roll 'uphill.' Our Wadi Al-Jinn tour departs from your Madinah hotel in the morning, drives 40 minutes north to the valley, waits 1–2 hours while you experience the phenomenon, and returns. We also offer a combined Ziyarat + Wadi Al-Jinn full-day tour.",
        features: ["40km North of Madinah", "Optical Illusion Valley", "Driver Waits at Site", "Morning Departure", "Combined Ziyarat Option", "Fixed Round-Trip Rate"],
        pricing: [
            { title: "Wadi Al-Jinn Half-Day (return transfer + wait)", price: "Get Quote" },
            { title: "Ziyarat + Wadi Al-Jinn Full Day", price: "Get Quote" }
        ],
        faqs: [
            { question: "Is the Wadi Al-Jinn effect real?", answer: "The visual phenomenon is real and striking — cars genuinely appear to roll uphill and water appears to flow the wrong direction. However, the cause is a natural optical illusion rather than supernatural forces. GPS and topographic measurements confirm the road slopes slightly downhill in the 'uphill' direction." },
            { question: "How long should I spend at Wadi Al-Jinn?", answer: "Most visitors spend 1–2 hours — enough to experience the car effect, pour water, take photos, and enjoy the desert landscape. Combining with the half-day Ziyarat tour makes a full and varied day from Madinah." }
        ]
    },
    {
        slug: "madinah-full-ziyarat-tour",
        title: "Madinah Full Ziyarat Tour — All Islamic Heritage Sites by Private Taxi",
        description: "Comprehensive full-day Ziyarat tour of Madinah. Quba Mosque, Mount Uhud, Qiblatain, Seven Mosques, Jannat Al-Baqi, Masjid Al-Ijabah, and Wadi Al-Jinn. Fixed-rate private taxi.",
        content: "Madinah Al Munawwarah — the City of the Prophet ﷺ — contains some of the most sacred Islamic heritage sites in the world. Our full-day Ziyarat tour covers all major sites in a carefully planned sequence: starting with Masjid Quba (the first mosque in Islam, where praying two Rak'ah earns the reward of Umrah), continuing to Mount Uhud and the Martyrs' Cemetery (where 70 Companions including Hamza RA are buried), Masjid Al-Qiblatain (where the Qibla changed from Jerusalem to Makkah during a prayer), the Sab'a Masajid or Seven Mosques (the sites of the Battle of the Trench), Masjid Al-Ijabah (where the Prophet ﷺ's Du'a was accepted), and Wadi Al-Jinn if you wish to add the natural phenomenon visit. Our half-day tour covers the four primary sites (Quba, Uhud, Qiblatain, Sab'a Masajid). Both packages include a knowledgeable driver who understands the significance of each site.",
        features: ["Masjid Quba", "Mount Uhud & Martyrs' Cemetery", "Masjid Al-Qiblatain", "Sab'a Masajid (Seven Mosques)", "Masjid Al-Ijabah", "Optional Wadi Al-Jinn Add-On"],
        pricing: [
            { title: "Half-Day Ziyarat (4 sites — 3–4 hrs)", price: "Get Quote" },
            { title: "Full-Day Ziyarat (all 6+ sites — 6 hrs)", price: "Get Quote" },
            { title: "Full-Day + Wadi Al-Jinn (all day)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What is the best order to visit Madinah Ziyarat sites?", answer: "The optimal sequence from Markaziah hotels: Masjid Quba (south) → Sab'a Masajid → Masjid Al-Qiblatain (west) → Masjid Al-Ijabah (center-east) → Mount Uhud (north). This clockwise route minimises backtracking. For a half-day, Quba + Uhud + Qiblatain is the most popular combination." },
            { question: "Are Ziyarat tours available for women-only groups?", answer: "Yes. We frequently arrange Ziyarat tours for female-only groups and female solo travelers. Our drivers are professional and respectful. Note that women's visiting hours at some sites (like Jannat Al-Baqi cemetery) are restricted — our drivers know the current schedules and will advise accordingly." }
        ]
    },
    {
        slug: "makkah-ziyarat-private-tour",
        title: "Makkah Ziyarat Private Tour — Hira, Thawr, Mina, Arafat by Private Taxi",
        description: "Private Makkah Ziyarat tour: Jabal Al-Nour (Cave of Hira), Jabal Thawr (Cave of Thawr), Mina Tent City, Plain of Arafat, Muzdalifah, Jannat Al-Mualla. Half-day and full-day options. Fixed rate.",
        content: "Makkah Al-Mukarramah is not only the site of Masjid Al-Haram and the Kaaba — it is surrounded by a remarkable collection of Quranic and prophetic historical sites that most pilgrims never visit. Our Makkah Ziyarat Private Tour covers the complete circuit: Jabal Al-Nour (the Mountain of Light — home of Ghar Hira where the first Quranic revelation descended to the Prophet ﷺ in 610 CE), Jabal Thawr (where the Prophet ﷺ and Abu Bakr RA hid in Ghar Thawr for three days during the Hijrah to Madinah in 622 CE), the Mina Tent City (the world's largest annual tent settlement — site of the Jamarat stoning), the Plain of Arafat (where the Prophet ﷺ delivered his Farewell Sermon and the Wuquf of Hajj takes place), Muzdalifah (the open-air overnight Hajj site), and Jannat Al-Mualla (the historic cemetery where Khadijah RA, Abu Talib, and many of the Prophet's family are buried). Each site is covered with historical context from our experienced drivers. Half-day tours focus on Jabal Al-Nour, Jabal Thawr, and Jannat Al-Mualla. Full-day tours add Mina, Arafat, and Muzdalifah.",
        features: ["Jabal Al-Nour (Cave of Hira)", "Jabal Thawr (Cave of Thawr)", "Mina Tent City", "Plain of Arafat & Jabal Al-Rahma", "Muzdalifah (Mash'ar Al-Haram)", "Jannat Al-Mualla Cemetery"],
        pricing: [
            { title: "Half-Day Ziyarat (Hira, Thawr, Mualla — 3–4 hrs)", price: "Get Quote" },
            { title: "Full-Day Ziyarat (all 6 sites — 6–7 hrs)", price: "Get Quote" },
            { title: "Full-Day + Arafat & Mina Extended (8+ hrs)", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long does the Makkah Ziyarat tour take?", answer: "The half-day Makkah Ziyarat tour (Jabal Al-Nour, Jabal Thawr, Jannat Al-Mualla) takes 3–4 hours. The full-day tour adding Mina, Arafat, and Muzdalifah takes 6–7 hours. Jabal Al-Nour alone — with the 1,200-step climb to Ghar Hira — accounts for 2–3 hours of the tour." },
            { question: "Is climbing Jabal Al-Nour (Cave of Hira) physically demanding?", answer: "Yes — the climb involves approximately 1,200 paved steps and takes 40–60 minutes to ascend. In good physical condition, the round trip takes 2–3 hours including time at the cave summit. The path has railings. Elderly visitors may find it challenging. Bring water, especially in summer when temperatures reach 40°C+." },
            { question: "Can I visit Mina and Arafat outside of Hajj season?", answer: "Yes. Mina and Arafat can be visited outside the Hajj season. During non-Hajj periods, the Mina valley is largely empty of pilgrims and you can walk the Jamarat bridge and see the tent city. The Plain of Arafat with Jabal Al-Rahma is open year-round." }
        ]
    },
    {
        slug: "makkah-hajj-airport-transfer",
        title: "Makkah Hajj Airport Transfer — KAIA to Makkah Hotel with Hajj Permits",
        description: "Hajj 2026 airport transfer from KAIA Jeddah Airport to Makkah hotel. Hajj-permitted vehicles with Ministry clearance, meet & greet, flight tracking, fixed rate. 24/7 WhatsApp booking.",
        content: "The KAIA Jeddah Airport to Makkah hotel transfer for Hajj 2026 is the most critical transport arrangement for every Hajj pilgrim. After a long international flight — often 10–20 hours — arriving at KAIA and having to negotiate with unregistered taxis, deal with checkpoint issues, or wait for group coaches is the worst possible start to the most important journey of your life. Our Hajj Airport Transfer service solves every problem: your driver is waiting at arrivals with a name board before you clear customs; your vehicle has the required Ministry of Hajj permits to pass all Makkah security cordons; your luggage is loaded and you are en route to your hotel within 20–30 minutes of collecting bags. The KAIA to Makkah journey takes 1.5–2 hours via the Haramain Highway under normal conditions. During peak Hajj arrival days, allow 2.5–3 hours due to checkpoint queues — we account for this in scheduling. We operate GMC Yukon XLs for families (7 passengers, all Hajj luggage), Toyota Camry for smaller groups, and Toyota Hiace for larger delegations. All vehicles are 2022–2025 model, fully air-conditioned, and fitted for long-distance passenger comfort. After confirming your booking on WhatsApp, you receive your driver's name, mobile number, and vehicle plate before your flight departs. Your driver tracks your flight and adjusts pickup timing automatically for delays.",
        features: ["Ministry-permitted Hajj vehicles", "Meet & greet at KAIA arrivals", "Flight tracking — delays covered", "All Makkah hotel zones served", "GMC Yukon XL for families", "Fixed rate — no surprises"],
        pricing: [
            { title: "Toyota Camry (1–3 passengers)", price: "Get Quote" },
            { title: "GMC Yukon XL (4–7 passengers)", price: "Get Quote" },
            { title: "Toyota Hiace (8–12 passengers)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Why can't I just take a regular taxi from KAIA to Makkah during Hajj?", answer: "During Hajj season, all vehicles entering Makkah pass through Ministry of Interior security checkpoints. Only vehicles with valid Hajj transport permits can pass. Unregistered taxis and ride-hailing apps are turned back at the checkpoints — passengers are left stranded far from their hotel with all their Hajj luggage. Pre-booking with a registered operator like Haram Taxi is the only reliable solution." },
            { question: "What if my KAIA flight is delayed?", answer: "Your driver tracks your flight in real-time and adjusts the pickup time accordingly. There is no extra charge for flight delays. Your driver waits at arrivals until you have cleared customs and collected baggage — we know KAIA well and will communicate via WhatsApp if your specific situation requires a different arrangement." },
            { question: "Can you arrange Hajj airport transfers for a large group (20+ people)?", answer: "Yes. For large groups we coordinate multiple vehicles — GMC Yukon XLs, Toyota Hiaces, or a combination — travelling in convoy to keep the group together. We assign a group coordinator for large Hajj delegations. Contact us at least 4–6 weeks before your Hajj departure for large-group arrangements." }
        ]
    },
    {
        slug: "tabuk-neom-transfer",
        title: "Tabuk to NEOM Transfer — The Line, NEOM Bay, Sindalah & Gayal",
        description: "Private taxi from Tabuk city or Tabuk Airport (TUU) to NEOM Bay, The Line, Sindalah, and Gayal. 200km northwest, 2.5 hours. NEOM worker rotations and visitor transfers. Fixed rate, 24/7.",
        content: "Tabuk is the gateway to NEOM — Saudi Arabia's Vision 2030 megaproject spanning 26,500 km² in northwest Saudi Arabia. Our dedicated Tabuk-NEOM transfer service covers all NEOM sub-destinations: NEOM Bay (Sharma coastal hub), The Line construction site, Sindalah Island access, Gayal (mountain zone), and Trojena (ski resort venue of 2029 Asian Winter Games). Workers on rotation, project visitors, and VIPs: we know every NEOM access route and checkpoint procedure. For NEOM worker rotations from Tabuk Airport — our most frequent booking — we track your incoming flight and have your vehicle ready at TUU arrivals with a name board before you clear customs. Groups of up to 12 workers are accommodated in our Toyota Hiace fleet. NEOM permits required for construction zone access — ensure your NEOM host has issued permits before travel.",
        features: ["All NEOM sub-destinations", "NEOM worker rotations", "Checkpoint-familiar drivers", "Flight tracking from TUU", "Group vehicles (up to 12)", "Fixed rate — no surge"],
        pricing: [
            { title: "Toyota Camry (1–3 passengers)", price: "Get Quote" },
            { title: "GMC Yukon XL (4–7 passengers)", price: "Get Quote" },
            { title: "Toyota Hiace (8–12 passengers — worker groups)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Do I need a permit to enter NEOM?", answer: "Yes. NEOM is a controlled development zone. All visitors and workers require permits issued by NEOM LLC or their sponsoring contractor. Our driver cannot enter restricted construction zones without passenger permit documentation. Tourist areas (NEOM Bay waterfront) may have less restricted access. Confirm with your NEOM host before booking." },
            { question: "Can you pick up from NEOM Bay Airport (NUM)?", answer: "Yes — NEOM Bay Airport (Sharma Airport, IATA: NUM) is 200km from Tabuk. We provide pickup from NUM arrivals for transfer to NEOM Bay hotels, Tabuk city, or onward intercity routes. WhatsApp your flight number for a pre-booked pickup." },
            { question: "How do you handle NEOM worker rotation scheduling?", answer: "For regular rotation contractors, WhatsApp us your rotation calendar — we assign consistent drivers who know your route and NEOM access procedure. Monthly scheduling is available for companies with recurring rotation needs." }
        ]
    },
    {
        slug: "tabuk-alula-day-trip",
        title: "AlUla Day Trip from Tabuk — Hegra, Dadan & Elephant Rock Tour",
        description: "Private taxi day trip from Tabuk to AlUla — Hegra Nabataean tombs (UNESCO), Dadan ancient city, Jabal Ikmah inscriptions, AlUla Old Town, and Elephant Rock. 340km, 3.5 hours each way. Driver waits.",
        content: "AlUla is one of Saudi Arabia's most extraordinary heritage destinations — and it is only 340km (3.5 hours) from Tabuk, making it the closest major city for an AlUla day trip. Our Tabuk–AlUla service provides a private taxi with a driver who waits in AlUla while you explore the sites, then returns you to Tabuk in the evening. Key sites: Hegra (Madain Saleh) — 111 Nabataean tombs carved into sandstone outcrops, Saudi Arabia's first UNESCO World Heritage Site; Dadan — one of Arabia's earliest sophisticated kingdoms with lion tombs and inscribed cliffs; Jabal Ikmah — 450+ inscriptions in multiple ancient languages; AlUla Old Town — abandoned 14th-century mud-brick village; Elephant Rock (Jabal Al-Fil) — 52m mushroom sandstone formation. Pre-booking Hegra tickets is mandatory (alula.sa app). For those wanting more time, overnight drop-off in AlUla and a return booking the next day is the recommended approach.",
        features: ["Driver waits in AlUla", "All heritage site locations known", "Day trip or overnight drop-off", "Hegra booking guidance", "Fixed round-trip rate", "Depart from Tabuk city or airport"],
        pricing: [
            { title: "Day Trip (round-trip, driver waits)", price: "Get Quote" },
            { title: "One-Way Drop-Off (AlUla)", price: "Get Quote" },
            { title: "Group Vehicle (GMC Yukon XL)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Is a day trip from Tabuk to AlUla feasible?", answer: "Yes — depart Tabuk at 6am, arrive AlUla by 9:30am, 5–6 hours for 2–3 sites, depart AlUla by 4pm, back in Tabuk by 7:30pm. Feasible but intensive. An overnight stay covers all 6 major sites comfortably." },
            { question: "Do I need to pre-book AlUla sites?", answer: "Yes. Hegra especially has limited daily entry numbers. Book through the Experience AlUla (EXP) app or alula.sa at least 1–2 weeks in advance in peak season (October–April). Elephant Rock and AlUla Old Town require no advance booking." }
        ]
    },
    {
        slug: "abha-asir-mountain-tour",
        title: "Abha & Asir Mountain Tour — Al-Soudah, Habala, Asir National Park",
        description: "Private taxi day tour from Abha — Al-Soudah peak (2,910m), Habala Village cable car, Asir National Park cloud forest. Driver waits throughout. Half-day or full-day.",
        content: "Abha is the base for the Asir mountain circuit — one of Saudi Arabia's most spectacular day-trip sequences. Our mountain tour service provides a taxi with a driver who waits at each site while you explore. Standard circuit: Abha city → Al-Soudah peak (2,910m, 40 min drive) → Al-Soudah Adventure Park → cable car descent to Habala Village → cable car return → Asir National Park scenic drive → return to Abha. The full circuit takes approximately 6–7 hours and covers all major Asir sites. Half-day version (Al-Soudah + Habala only): 3.5 hours. For groups, Toyota Hiace (11 passengers) and GMC Yukon XL (7 passengers) are available.",
        features: ["Driver waits at all sites", "Al-Soudah summit (2,910m)", "Habala cable car (driver covers road — you take the cable car)", "Asir National Park cloud forest", "Half-day or full-day options", "Group vehicles available"],
        pricing: [
            { title: "Half-Day (Al-Soudah + Habala)", price: "Get Quote" },
            { title: "Full-Day (full Asir circuit)", price: "Get Quote" },
            { title: "Group Vehicle (7–11 passengers)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What is the best season for the Abha mountain tour?", answer: "July–September (khareef season) for the mist and lush green landscapes. October–April for clear skies, cool temperatures, and best photography light. Summer (July–August) is peak season — book accommodation far in advance." },
            { question: "Do I need to book cable car tickets in advance?", answer: "Yes — pre-book cable car tickets at asirpark.com, especially in khareef season (July–September) when demand is very high. Your driver can advise on current availability." }
        ]
    },
    {
        slug: "abha-airport-transfer",
        title: "Abha Airport Transfer — Prince Sultan Airport (AHB) Arrivals & Departures",
        description: "Pre-booked taxi at Abha Airport (AHB). Flight tracked, name board. Transfer to Abha, Khamis Mushait, Al-Soudah, or anywhere in Asir. Fixed rate, 24/7.",
        content: "Professional airport transfer service at Abha Airport (AHB / Prince Sultan bin Abdulaziz Airport). We provide flight-tracked arrivals pickup with name board at the arrivals exit. Destinations from the airport: Abha city (20km, 25 min), Khamis Mushait (15km, 20 min), Al-Soudah (45km, 55 min), Habala Village cable car station (60km, 70 min), and Asir National Park. For departures, we provide hotel pickup and drop-off at AHB departures. All rates are fixed and confirmed by WhatsApp before travel.",
        features: ["Flight tracking — no extra charge for delays", "Name board at AHB arrivals exit", "Transfer to Abha, Khamis Mushait, or any Asir destination", "Departures pickup from any Abha or Khamis Mushait hotel", "Group vehicles (Hiace, Yukon XL) for families"],
        pricing: [
            { title: "AHB to Abha City", price: "Get Quote" },
            { title: "AHB to Khamis Mushait", price: "Get Quote" },
            { title: "AHB to Al-Soudah", price: "Get Quote" }
        ],
        faqs: [
            { question: "Which airlines use Abha Airport (AHB)?", answer: "Saudia (domestic routes to Riyadh, Jeddah, Madinah), flyadeal, and flynas. Limited international routes. Most international travellers connect via Riyadh (RUH) or Jeddah (JED)." },
            { question: "Can I get an airport transfer to start my Asir tour directly from AHB?", answer: "Yes — many visitors pre-book AHB arrivals pickup combined with a first stop at Al-Soudah or Habala before checking into their hotel. Possible same-day if the flight arrives by morning." }
        ]
    },
    {
        slug: "dammam-khobar-bahrain-transfer",
        title: "Dammam, Khobar & Bahrain Causeway Transfer Service",
        description: "Private taxi across the King Fahd Causeway — Dammam or Khobar to Manama, Bahrain. Also KFAC Airport transfers and Eastern Province intercity routes. Licensed cross-border driver.",
        content: "Our Eastern Province transfer service covers the full triangle: Dammam, Al Khobar, and the Bahrain Causeway. For Bahrain Causeway crossings, we use only licensed cross-border taxis — standard Saudi app taxis cannot cross into Bahrain. Our drivers know both immigration checkpoints (Saudi exit at Al Aziziyah, Bahrain entry at the Bahrain side) and all document requirements for GCC and non-GCC travellers. We also handle KFAC Airport (DMM) arrivals pickups with flight tracking, intercity transfers between Dammam and Khobar, and Dhahran/Aramco compound transfers. For regular Causeway commuters and Aramco families, ask about monthly fixed-rate accounts.",
        features: ["Licensed cross-border Causeway taxi", "KFAC Airport arrivals pickup (flight tracked)", "Dammam ↔ Khobar intercity", "Dhahran/Aramco compound transfers", "Bahrain door-to-door (any Manama address)", "Monthly accounts for regular commuters"],
        pricing: [
            { title: "Khobar to Manama, Bahrain", price: "Get Quote" },
            { title: "Dammam to Manama, Bahrain", price: "Get Quote" },
            { title: "KFAC Airport to Khobar / Dammam", price: "Get Quote" }
        ],
        faqs: [
            { question: "Does the Bahrain Causeway taxi cover the toll?", answer: "Yes — the King Fahd Causeway toll is included in the quoted fare. No additional toll payment from passengers." },
            { question: "What documents do non-GCC residents need to cross?", answer: "Passport, valid Saudi Iqama, and a Bahrain visa or confirmed eVisa eligibility. Our driver advises on the checkpoint procedure but cannot obtain visas. Check Bahrain eVisa requirements before booking." }
        ]
    },
    {
        slug: "jubail-contractor-transfer",
        title: "Jubail Industrial City Contractor Transfer Service",
        description: "Contractor and corporate taxi to Jubail Industrial City from Dammam, Al Khobar, and KFAC Airport. SABIC, SADAF, SAFCO facilities. Group vehicles, shift rotations, monthly accounts.",
        content: "Jubail Industrial City — one of the world's largest planned industrial cities — is 100km north of Dammam along the Arabian Gulf coast. Our Jubail contractor transfer service is designed for the specific needs of petrochemical workers, site managers, and corporate visitors: gate-specific drop-off to SABIC, SADAF, SAFCO, National Petrochemical Company, and the dozens of downstream facilities; group vehicles for shift rotations (Toyota Hiace, 11 passengers); KFAC Airport arrivals pickups for contractors arriving from international rotations; and monthly account billing for companies with regular staff movements. For executives and visitors, we also handle ITHRA (Dhahran) transfers and Khobar corporate hotel pickups.",
        features: ["Gate-specific facility drop-off in Jubail", "KFAC Airport arrivals for contractor rotations", "Group vehicles (4–12 passengers)", "Monthly fixed-rate corporate accounts", "Shift rotation scheduling (morning and evening)", "Jubail to Dammam / KFAC return trips"],
        pricing: [
            { title: "Dammam to Jubail (single)", price: "Get Quote" },
            { title: "KFAC Airport to Jubail", price: "Get Quote" },
            { title: "Group Shift Rotation (10–11 pax)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Can I book a regular daily driver for KFAC–Jubail contractor runs?", answer: "Yes — for regular rotation cycles, we offer a fixed monthly contract with priority booking and dedicated vehicles. Contact us with your rotation schedule." },
            { question: "Which Jubail facilities do you serve?", answer: "All major facilities: SABIC Jubail Complex, SADAF, SAFCO, National Petrochemical (NPC), Saudi Yanbu Petrochemical (YANPET), Arabian Petrochemical (PETROKEMYA), and the Royal Commission residential/commercial zone." }
        ]
    },
    {
        slug: "tabuk-wadi-disah-tour",
        title: "Wadi Disah Canyon Tour from Tabuk — Half-Day & Full-Day Driver-Waits",
        description: "Private taxi day trip from Tabuk to Wadi Disah (Wadi Qaraqir) — 60km south, 50 minutes. Dramatic 200–300m sandstone canyon, palm groves, freshwater springs. Driver waits while you explore. Half-day or full-day.",
        content: "Wadi Disah (Wadi Qaraqir) is Tabuk's closest extraordinary natural destination — just 60km south, 50 minutes from the city. The sandstone canyon cuts through the Hisma plateau with walls rising 200–300m on either side of a lush palm-grove valley floor with freshwater springs and a resident Bedouin farming community. Unlike AlUla (3.5 hrs) or NEOM (2.5 hrs), Wadi Disah is a half-day escape from Tabuk — depart after breakfast, spend the morning inside the canyon, and return for lunch. Our driver takes you to the canyon entrance, waits at the agreed meeting point while you walk and explore, and returns you to Tabuk — or continues south if you are heading to AlUla. The canyon is driveable on the main floor track without a 4x4. Best season: October–April. Summer visits: before 8am strongly recommended. No facilities inside the canyon — bring food and 3+ litres of water.",
        features: ["Driver waits inside canyon", "50 min from Tabuk", "No 4x4 required", "Half-day or full-day option", "Optional continue-south to AlUla", "Fixed rate"],
        pricing: [
            { title: "Half-Day (3–4 hrs in canyon)", price: "Get Quote" },
            { title: "Full-Day (5–6 hrs in canyon)", price: "Get Quote" },
            { title: "Wadi Disah + AlUla Combined (multi-day)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Is Wadi Disah suitable for families with young children?", answer: "Yes — the canyon floor is flat and walkable, the spring areas are safe, and the shade from canyon walls is significant. One of Saudi Arabia's most family-friendly natural destinations. Bring food, water, and sun protection." },
            { question: "Can I combine Wadi Disah and AlUla in one day?", answer: "Possible but exhausting — Tabuk to Wadi Disah (50 min) + 3 hrs canyon + Wadi Disah to AlUla (3 hrs south) = nearly a full day of driving plus site time. Better as part of a multi-day southward trip. For a single day from Tabuk, choose one or the other." }
        ]
    },
    {
        slug: "umrah-taxi-jeddah",
        title: "Umrah Taxi Jeddah | Jeddah Airport (KAIA) to Makkah 24/7",
        description: "Book your private Umrah taxi from King Abdulaziz International Airport (KAIA) Jeddah to your hotel in Makkah. Premium & economy cars available.",
        content: "Arriving at Jeddah Airport (KAIA) for Umrah? Avoid the long queues and stress of bargaining with local taxis. Our private Umrah taxi service from Jeddah to Makkah offers a seamless door-to-door transfer. Your professional driver will meet you at the arrivals terminal with a name board, help with your luggage, and drive you directly to your hotel near Masjid Al-Haram in Makkah via the Haramain Highway. All our vehicles are air-conditioned, regularly cleaned, and fully licensed for pilgrim transport.",
        features: ["Meet & Greet with Name Board", "Haramain Highway Direct Route", "Hajj & Umrah Permitted Fleet", "24/7 Customer Support"],
        pricing: [
            { title: "Sedan (Toyota Camry) — 1-3 Pax", price: "Get Quote" },
            { title: "SUV (GMC Yukon XL) — 4-7 Pax", price: "Get Quote" },
            { title: "Minivan (Hyundai Staria) — 5-7 Pax", price: "Get Quote" },
            { title: "Minibus (Toyota Hiace) — 8-12 Pax", price: "Get Quote" }
        ],
        faqs: [
            { question: "How long does the journey take from Jeddah Airport to Makkah?", answer: "The drive typically takes 75 to 90 minutes under normal traffic conditions. During peak hours or Ramadan/Hajj seasons, it may take slightly longer due to checkpoint checks." },
            { question: "Are your drivers permitted to enter Makkah?", answer: "Yes, all our drivers and vehicles carry the necessary permits and licenses from the Ministry of Hajj & Umrah to enter Makkah's hotel zones and inner ring roads." }
        ]
    },
    {
        slug: "airport-transfer-makkah",
        title: "Airport Transfer Makkah | Taxi to Jeddah (KAIA) & Madinah (MED)",
        description: "Reliable private taxi transfers from your hotel in Makkah to King Abdulaziz Airport Jeddah (KAIA) or Madinah Airport (MED). 24/7 service.",
        content: "Ensure a stress-free departure from Makkah. Our private airport transfer service picks you up directly from your Makkah hotel lobby and transports you to King Abdulaziz International Airport (KAIA) Jeddah or Prince Mohammad bin Abdulaziz Airport (MED) Madinah. We coordinate pickup times based on your flight schedule to ensure you arrive with plenty of buffer time. Our drivers monitor traffic conditions and checkpoints, assuring a smooth journey.",
        features: ["Punctual Hotel Pickups", "Luggage Assistance", "Flight-Coordinated Scheduling", "24/7 Operations Support"],
        pricing: [
            { title: "Makkah to Jeddah Airport (Sedan)", price: "Get Quote" },
            { title: "Makkah to Jeddah Airport (GMC Yukon XL)", price: "Get Quote" },
            { title: "Makkah to Madinah Airport (Sedan)", price: "Get Quote" },
            { title: "Makkah to Madinah Airport (GMC Yukon)", price: "Get Quote" }
        ],
        faqs: [
            { question: "What time should I book my pickup from Makkah to Jeddah Airport?", answer: "We recommend scheduling your pickup at least 4 to 5 hours before your flight departure. The drive takes around 1.5 to 2 hours, and you will need 2 to 3 hours for check-in procedures." },
            { question: "Do you offer group vehicles for airport transfers?", answer: "Yes, we provide larger group vehicles such as the Toyota Hiace (12-seater) and Toyota Coaster (24-seater) for large groups of pilgrims traveling with luggage." }
        ]
    },
    {
        slug: "vip-chauffeur-riyadh",
        title: "VIP Chauffeur Service Riyadh | Executive Chauffeur & Limousine",
        description: "Premium executive chauffeur service in Riyadh. Luxury sedan and SUV transfers for business, airport pickups, and intercity travel.",
        content: "Experience the ultimate in comfort and professionalism with our VIP Chauffeur Service in Riyadh. Whether you are traveling for business to the King Abdullah Financial District (KAFD), attending diplomatic meetings in the Diplomatic Quarter, or needing a premium transfer from King Khalid International Airport (KKIA), our professional chauffeurs ensure you arrive in style. We offer elite vehicles including the Lexus ES 300, Mercedes-Benz S-Class, and luxury GMC Yukon Denali, driven by experienced, English-speaking professionals.",
        features: ["Elite Luxury Fleet (Lexus, Mercedes, GMC)", "Uniformed, English-Speaking Chauffeurs", "Corporate & Hourly Booking Options", "Complimentary Refreshments & Wi-Fi"],
        pricing: [
            { title: "Lexus ES 300 (Daily Chauffeur)", price: "Get Quote" },
            { title: "Mercedes-Benz S-Class (Per Transfer)", price: "Get Quote" },
            { title: "GMC Yukon Denali (Daily / Hourly)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Can I book a VIP chauffeur by the hour in Riyadh?", answer: "Yes, we offer flexible hourly and daily rates for our executive chauffeur services. Minimum booking is typically 4 hours." },
            { question: "Do you provide airport meet & greet with this service?", answer: "Absolutely. For all KKIA airport pickups, your chauffeur will meet you at the arrivals terminal with a personalized name board and escort you to your vehicle." }
        ]
    },
    {
        slug: "ziyarat-tours-madinah",
        title: "Ziyarat Tours Madinah | Prophet's Mosque & Holy Sites Tour",
        description: "Explore the holy places of Al Madinah Al Munawwarah. Private taxi tours visiting Quba Mosque, Uhud Battlefield, Qiblatain Mosque, and more.",
        content: "Embark on a spiritual journey through the history of Al Madinah Al Munawwarah. Our private Ziyarat tours offer a comfortable and flexible way to visit the sacred sites of the Prophet's City. A typical tour includes Masjid Quba (the first mosque built in Islam, where praying 2 rakat is equivalent to performing Umrah), Mount Uhud (the historic battle site and graveyard of martyrs), Masjid Al-Qiblatain (the mosque of two Qiblas), and the Seven Mosques. Our professional drivers are knowledgeable about the history and significance of each site, providing a meaningful experience for your family.",
        features: ["Private, Flexible Tour Routes", "Comfortable, Air-Conditioned Vehicles", "Knowledgeable English/Urdu Drivers", "Family & Kid-Friendly Itinerary"],
        pricing: [
            { title: "Half-Day Tour (3-4 Hours) — Sedan", price: "Get Quote" },
            { title: "Half-Day Tour (3-4 Hours) — GMC SUV", price: "Get Quote" },
            { title: "Full-Day Tour (including Wadi Al-Jinn) — Sedan", price: "Get Quote" },
            { title: "Full-Day Tour (including Wadi Al-Jinn) — GMC SUV", price: "Get Quote" }
        ],
        faqs: [
            { question: "Can we customize the sites we want to visit in Madinah?", answer: "Yes, our Ziyarat tours are fully private. You can adjust the itinerary and spend as much time as you like at each historic location." },
            { question: "Is entry to the historic sites included?", answer: "Most religious and historic sites in Madinah do not have entry fees. The tour covers transportation and driver waiting time; any custom activity fees are separate." }
        ]
    },
    {
        slug: "intercity-taxi-taif",
        title: "Intercity Taxi Taif | Private Transfers to Makkah, Jeddah & Madinah",
        description: "Book reliable intercity taxi transfers from Taif to Makkah, Jeddah, or Madinah. Hajj-permitted vehicles and expert mountain-road drivers.",
        content: "Travel between Taif and other major Saudi cities in absolute comfort. Our intercity taxi service connects Taif with Makkah, Jeddah, and Madinah. Navigating the mountain highways and the famous Al Hada zigzag road requires experienced, professional drivers. Our fleet is equipped with modern, air-conditioned vehicles, including economy sedans and spacious GMC SUVs. For pilgrims preparing for Umrah or Hajj, we include stops at the Qarn al-Manazil Miqat to wear the Ihram and make niyyah.",
        features: ["Experienced Mountain-Highway Drivers", "Miqat Stop at Qarn al-Manazil", "Door-to-Door Intercity Transfer", "24/7 Availability & Fixed Rates"],
        pricing: [
            { title: "Taif to Makkah (Toyota Camry)", price: "Get Quote" },
            { title: "Taif to Makkah (GMC Yukon XL)", price: "Get Quote" },
            { title: "Taif to Jeddah Airport (Toyota Camry)", price: "Get Quote" },
            { title: "Taif to Madinah (Toyota Camry)", price: "Get Quote" }
        ],
        faqs: [
            { question: "Does the route pass through the scenic Al Hada mountain road?", answer: "Yes, unless weather conditions require the alternative route, our drivers take the scenic Al Hada zigzag mountain road, offering beautiful views of the highlands." },
            { question: "Can the driver stop at the Miqat for us?", answer: "Yes, we include a stop at the Qarn al-Manazil Miqat en route to Makkah, where the driver will wait while you wear your Ihram." }
        ]
    }
];