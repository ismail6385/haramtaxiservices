export interface RoutePricing {
    vehicle: string;
    price: string;
    capacity: string;
    luggage: string;
}

export interface RouteData {
    slug: string;
    title: string;
    description: string;
    h1: string;
    distance: string;
    duration: string;
    content: string;
    image?: string;
    pricing: RoutePricing[];
    faqs: { question: string; answer: string }[];
}

export const routesData: RouteData[] = [
    {
        slug: "jeddah-airport-to-makkah",
        title: "Taxi Jeddah Airport to Makkah | competitive quotes",
        description: "Book reliable taxi from Jeddah Airport (KAIA) to Makkah Hotel. 24/7 service, meet & greet. Camry Available, GMC Available. No hidden fees.",
        h1: "Trusted Taxi from Jeddah Airport to Makkah",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Start your Umrah journey with peace of mind. Our driver will wait for you at the Jeddah Airport arrivals hall with a name sign. We service all terminals including Terminal 1, North Terminal, and Hajj Terminal. Direct transfer to your hotel in Makkah (Clock Tower, Aziziyah, etc).",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How much is a taxi from Jeddah Airport to Makkah?", answer: "Prices start from Get Quote for a Camry and Get Quote for a GMC Yukon." },
            { question: "Do you pick up from the New Terminal 1?", answer: "Yes, we provide pickups from all Jeddah Airport terminals." }
        ]
    },
    {
        slug: "jeddah-to-madinah",
        title: "Taxi Jeddah to Madinah | 2026 Rates",
        description: "Book a taxi from Jeddah City/Airport to Madinah. Direct transfer, comfortable vehicles. competitive quotes competitive quotes - WhatsApp for Quote.",
        h1: "Jeddah to Madinah Taxi Service",
        distance: "400 km",
        duration: "4 hours",
        content: "Travel seamlessly from Jeddah to the Prophet's City of Madinah with our private door-to-door taxi. Whether departing from a Jeddah hotel or King Abdulaziz International Airport (KAIA), we deliver you directly to any Madinah hotel near Masjid Nabawi via the fast Hijrah Highway in approximately 4 hours. No shared rides, no detours — just you, your family, and a professional driver.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "makkah-to-madinah",
        title: "Makkah to Madinah Taxi Service | VIP Transport",
        description: "Comfortable private taxi from Makkah Hotel to Madinah. Stop at Badr Ziyarat included. GMC, Staria, and Camry available. Book now for a spiritual journey.",
        h1: "Makkah to Madinah Taxi Transfer",
        distance: "450 km",
        duration: "4 hours 30 minutes",
        content: "Travel between the Holy Cities via the Hijrah Highway. Our service includes optional stops at Meeqat or Badr Ziyarat upon request. Enjoy a smooth ride in our modern, air-conditioned vehicles.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Madinah?", answer: "It typically takes around a competitive rate.5 hours by private taxi." },
            { question: "Can we stop at Meeqat?", answer: "Yes, our drivers are happy to stop at Meeqat for Ihram." }
        ]
    },
    {
        slug: "makkah-to-jeddah-airport",
        title: "Taxi Makkah Hotel to Jeddah Airport | 24/7 Drop-off",
        description: "Reliable transfer from your Makkah hotel to King Abdulaziz Airport (Jeddah). Arrive on time for your flight. competitive rates starting Get Quote",
        h1: "Makkah Hotel to Jeddah Airport Taxi",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "End your Umrah trip with a hassle-free ride to the airport. We pick you up from your hotel lobby in Makkah (Clock Tower, Aziziyah, etc) and drop you off at your departure terminal in Jeddah (Terminal 1, North Terminal, or Hajj Terminal). Ensure you arrive on time for your flight with our reliable taxi service.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "When should I leave Makkah for my flight?", answer: "We recommend leaving at least 4 hours before your international flight departure." }
        ]
    },
    {
        slug: "madinah-hotel-to-jeddah-airport",
        title: "Madinah to Jeddah Airport Taxi | Direct Transfer",
        description: "Book a direct taxi from Madinah Hotel to Jeddah Airport. Fast and comfortable via Hijrah Highway. Prices start from Get Quote",
        h1: "Madinah Hotel to Jeddah Airport Transfer",
        distance: "415 km",
        duration: "4 hours",
        content: "Direct transfer from your hotel in Madinah to Jeddah Airport. Avoid the hassle of buses and travel in privacy.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Is it a direct ride?", answer: "Yes, this is a private non-stop transfer to Jeddah Airport." }
        ]
    },
    {
        slug: "madinah-hotel-to-madinah-airport",
        title: "Madinah Hotel to Airport Taxi | Prince Mohammad Airport",
        description: "Quick transfer from your Madinah hotel to Prince Mohammad Bin Abdulaziz Airport. 24/7 Service.",
        h1: "Madinah Hotel to Madinah Airport Taxi",
        distance: "20 km",
        duration: "25 minutes",
        content: "Fast and convenient drop-off to Madinah Airport. Ensure you arrive on time for your departure.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "dammam-to-makkah",
        title: "Dammam to Makkah Taxi | Long Distance Transfer",
        description: "Private taxi from Dammam/Khobar/Dhahran to Makkah. Comfortable long-distance travel.",
        h1: "Dammam to Makkah Taxi Transfer",
        distance: "1,250 km",
        duration: "12-13 hours",
        content: "A premium long-distance service for those who prefer road travel over flying. We provide spacious vehicles like GMC Yukon for this long journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-makkah",
        title: "Riyadh to Makkah Taxi | Intercity Transfer",
        description: "Travel from Riyadh to Makkah by private taxi. Door-to-door service for individuals and families.",
        h1: "Riyadh to Makkah Taxi Service",
        distance: "870 km",
        duration: "8-9 hours",
        content: "Comfortable intercity transfer from Riyadh to Makkah. Drivers experienced in long-distance travel ensure a safe journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "tabuk-to-jordan-border",
        title: "Tabuk to Jordan Border Taxi Transfer",
        description: "Taxi service from Tabuk to Halat Ammar or Haql border crossings. Reliable border transfer.",
        h1: "Tabuk to Jordan Border Transfer",
        distance: "150 km",
        duration: "1 hour 45 minutes",
        content: "Crossing into Jordan? We provide transfers from Tabuk city/airport to the Halat Ammar border or Al Durra border (Haql).",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "alula-to-madinah",
        title: "AlUla to Madinah Taxi Transfer",
        description: "Scenic drive from AlUla to Madinah. Visit the Prophet's Mosque after your tour of Hegra.",
        h1: "AlUla to Madinah Taxi Service",
        distance: "330 km",
        duration: "3.5 hours",
        content: "Private transfer from AlUla's resorts to Madinah. Enjoy the desert landscapes in comfort.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "najran-to-yemen-border",
        title: "Najran to Yemen Border (Wadeeah) Taxi",
        description: "Transport from Najran to Al Wadeeah border crossing.",
        h1: "Najran to Yemen Border Taxi",
        distance: "350 km",
        duration: "4 hours",
        content: "Specialized transfer service to the Al Wadeeah border crossing into Yemen.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Myundi Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hafr-to-kuwait-border",
        title: "Hafr Al Batin to Kuwait Border Taxi",
        description: "Taxi from Hafr Al Batin to Al Raqi (Kuwait border).",
        h1: "Hafr Al Batin to Kuwait Border Transfer",
        distance: "100 km",
        duration: "1 hour",
        content: "Short and convenient ride to the Kuwait border crossing.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "al-ahsa-to-uae",
        title: "Al Ahsa to UAE Border (Batha) Taxi",
        description: "Taxi from Al Ahsa / Hofuf to Al Batha border (UAE).",
        h1: "Al Ahsa to UAE Border Transfer",
        distance: "300 km",
        duration: "3 hours",
        content: "Transfer service to the UAE border at Batha.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hail-to-riyadh",
        title: "Hail to Riyadh Taxi Service",
        description: "Travel from Hail to Riyadh by road.",
        h1: "Hail to Riyadh Taxi Transfer",
        distance: "640 km",
        duration: "6 hours",
        content: "Long-distance taxi from Hail to Riyadh.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "jazan-to-abha",
        title: "Jazan to Abha Taxi Transfer",
        description: "Scenic drive from Jazan to Abha.",
        h1: "Jazan to Abha Taxi Service",
        distance: "200 km",
        duration: "2.5 hours",
        content: "Travel from the coast of Jazan to the mountains of Abha.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hafr-to-riyadh",
        title: "Hafr Al Batin to Riyadh Taxi",
        description: "Taxi from Hafr Al Batin to Riyadh.",
        h1: "Hafr Al Batin to Riyadh Transfer",
        distance: "500 km",
        duration: "5 hours",
        content: "Connect from the Northern region to the capital.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "al-ahsa-to-qatar",
        title: "Al Ahsa to Qatar Border (Salwa) Taxi",
        description: "Taxi from Al Ahsa to Salwa border (Qatar).",
        h1: "Al Ahsa to Qatar Border Transfer",
        distance: "150 km",
        duration: "1.5 hours",
        content: "Quick transfer to the Qatar border.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "buraidah-to-unayzah",
        title: "Buraidah to Unayzah Taxi",
        description: "Local transfer between Qassim cities.",
        h1: "Buraidah to Unayzah Transfer",
        distance: "30 km",
        duration: "30 minutes",
        content: "Local taxi service in Al Qassim.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "yanbu-to-madinah",
        title: "Yanbu to Madinah Taxi Service",
        description: "Transfer from Yanbu industrial city or airport to Madinah.",
        h1: "Yanbu to Madinah Taxi Transfer",
        distance: "230 km",
        duration: "2.5 hours",
        content: "Travel from the Red Sea coast to the Holy City of Madinah.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "abha-to-khamis",
        title: "Abha to Khamis Mushait Taxi",
        description: "Local taxi between Abha and Khamis Mushait.",
        h1: "Abha to Khamis Mushait Transfer",
        distance: "30 km",
        duration: "30 minutes",
        content: "Quick local transfer.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "arar-to-iraq-border",
        title: "Arar to Iraq Border (Jadidah) Taxi",
        description: "Transfer from Arar to the Iraq border (Jadidah Arar).",
        h1: "Arar to Iraq Border Transfer",
        distance: "60 km",
        duration: "45 minutes",
        content: "Reliable transfer to the border crossing.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "qassim-to-riyadh",
        title: "Qassim to Riyadh Taxi Transfer",
        description: "Travel from Buraidah/Qassim to Riyadh.",
        h1: "Qassim to Riyadh Taxi Service",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Intercity transfer from Qassim region to Riyadh.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-makkah",
        title: "Makkah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Makkah hotels to Haramain High Speed Railway Station. competitive rates.",
        h1: "Makkah Hotel to Train Station Transfer",
        distance: "10 km",
        duration: "20 minutes",
        content: "Catch your train on time. reliable transfer from Clock Tower or Aziziyah to the Makkah Train Station.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-madinah",
        title: "Madinah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Madinah hotels to Haramain High Speed Railway Station. competitive rates.",
        h1: "Madinah Hotel to Train Station Transfer",
        distance: "12 km",
        duration: "25 minutes",
        content: "Seamless transfer to Madinah Train Station. We ensure you reach the platform relaxed and on time.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat-tour",
        title: "Makkah Ziyarat Taxi Tour | Historical Sites",
        description: "Visit Cave Hira, Cave Thawr, Mina, and Arafat with our guided Makkah Ziyarat taxi service.",
        h1: "Makkah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "4 Hours",
        content: "Explore the sacred history of Makkah. Our knowledgeable drivers will take you to Jabal Al-Nour, Jabal Thawr, Masjid Al-Jinn, and the Hajj sites (Mina, Muzdalifah, Arafat).",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "N/A" },
        ],
        faqs: []
    },
    {
        slug: "madinah-ziyarat-tour",
        title: "Madinah Ziyarat Taxi Tour | Holy Sites",
        description: "Visit Masjid Quba, Mount Uhud, and Qiblatain with our Madinah Ziyarat taxi service.",
        h1: "Madinah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "4 Hours",
        content: "Complete your pilgrimage with a tour of Madinah's holy sites. Visit the first mosque of Islam (Quba), the site of the Battle of Uhud, and more.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "N/A" },
        ],
        faqs: []
    },
    {
        slug: "umrah-travel-agency",
        title: "Umrah Travel Agency Transport | Reliable Pilgrim Transfers",
        description: "Looking for an Umrah travel agency for transport? We provide comprehensive ground transportation for pilgrims. Groups, families, and individuals.",
        h1: "Umrah Travel Agency Transport Services",
        distance: "All Cities",
        duration: "Flexible",
        content: "If you are searching for a reliable partner for your Umrah travel agency needs, look no further. We specialize in providing seamless ground transportation for pilgrims. Whether you are a travel agent looking for a trusted local transporter or a pilgrim organizing your own group, we offer the professional service expected from a top-tier Umrah travel agency.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hajj-travel-agency",
        title: "Hajj Travel Agency Transport | Hajj 2026/1447",
        description: "Expert Hajj travel agency transport services. We manage logistics for Hajj pilgrims between Mina, Arafat, and Muzdalifah.",
        h1: "Hajj Travel Agency Transport Solutions",
        distance: "Mashaer",
        duration: "Hajj Days",
        content: "Hajj requires precise logistics and timing. As a specialized Hajj travel agency transport provider, we understand the critical nature of these days. We offer dedicated transport services for Hajj groups, ensuring you move between Mina, Arafat, and Muzdalifah comfortably and on time.",
        pricing: [
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "Limited" },
            { vehicle: "Luxury Bus", price: "Get Quote", capacity: "49 Pax", luggage: "Large" },
        ],
        faqs: []
    },
    {
        slug: "umrah-transport",
        title: "Umrah Transport Services | Makkah & Madinah Taxi",
        description: "Best Umrah transport service in Saudi Arabia. Reliable taxi transfers between Jeddah, Makkah, and Madinah for Umrah pilgrims.",
        h1: "Premium Umrah Transport Services",
        distance: "KSA Wide",
        duration: "24/7 Service",
        content: "Reliable Umrah transport is the key to a stress-free pilgrimage. We provide dedicated transport for Umrah, connecting you from Jeddah Airport to Makkah, and onwards to Madinah. Our drivers are trained to serve pilgrims with respect and patience.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "luxury-umrah-transport",
        title: "Luxury Umrah Transport | VIP GMC Yukon Taxi",
        description: "Experience luxury transport for Umrah. VIP GMC Yukon XL and luxury vans for discerning pilgrims. Privacy and comfort guaranteed.",
        h1: "Luxury Umrah Transport & VIP Taxi",
        distance: "VIP Service",
        duration: "Custom",
        content: "For those seeking the highest level of comfort, our luxury transport services offer late-model GMC Yukon XL and luxury vans. Enjoy privacy glass, premium leather seating, and experienced chauffeurs who understand the needs of VIP guests.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "madinah-to-makkah",
        title: "Madinah to Makkah Taxi | Private Transfer 2026",
        description: "Book a private taxi from Madinah to Makkah. Comfortable ride via Hijrah Highway. competitive quotes competitive quotes - WhatsApp for Quote. Stop at Meeqat included.",
        h1: "Madinah to Makkah Taxi Service",
        distance: "450 km",
        duration: "4 hours 30 minutes",
        content: "Travel from the Prophet's City to the Holy City of Makkah. Our experienced drivers take you via the fast Hijrah Highway with an optional stop at Meeqat Dhul Hulayfah for those who wish to enter Ihram. Comfortable, air-conditioned vehicles ensure a smooth journey between the two holiest cities.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Can we stop at Meeqat on the way?", answer: "Yes, our drivers will stop at Meeqat Dhul Hulayfah for you to enter Ihram before proceeding to Makkah." },
            { question: "How long does it take from Madinah to Makkah?", answer: "The drive takes approximately 4.5 hours via the Hijrah Highway." }
        ]
    },
    {
        slug: "hotel-to-haram-transport",
        title: "Hotel to Haram Transport | Daily Shuttle Makkah",
        description: "Convenient hotel to Haram transport in Makkah. Private transfers from Aziziyah or distant hotels to the Clock Tower.",
        h1: "Hotel to Haram Transport Services",
        distance: "Local",
        duration: "15 min",
        content: "Staying in Aziziyah or Exotels? Our hotel to Haram transport service ensures you never miss a prayer. Booking a private daily transfer allows you to move between your hotel and the Haram with ease, avoiding the crowded public buses.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "None" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "None" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-kuwait-city",
        title: "Riyadh, Saudi Arabia to Kuwait City, Kuwait Taxi Transfer",
        description: "Cross-border private taxi from Riyadh, Saudi Arabia (e.g. 11564) to Kuwait City, Kuwait (e.g. 13001). Direct, safe inter-country transport.",
        h1: "Riyadh, Saudi Arabia to Kuwait City, Kuwait Transfer",
        distance: "650 km",
        duration: "7 hours",
        content: "Travel safely across borders from Riyadh, Saudi Arabia (postal codes 11564, 12211, etc.) directly to Kuwait City, Kuwait (postal code 13001). Our experienced drivers handle the long-distance route expertly, ensuring a comfortable cross-border journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Do you provide cross-border taxi from Saudi to Kuwait?", answer: "Yes, we provide direct private taxis from Riyadh to Kuwait City." },
            { question: "What are the postal codes covered?", answer: "We pick up from all major Riyadh districts (e.g., 11564, 12211) and drop off anywhere in Kuwait City (e.g., 13001)." },
            { question: "Do you pick up from Riyadh Airport (RUH)?", answer: "Yes, we provide 24/7 pickups from King Khalid International Airport (RUH) in Riyadh for direct transfer to Kuwait." }
        ]
    },
    {
        slug: "dammam-to-kuwait",
        title: "Dammam to Kuwait Taxi | City & Airport Transfer",
        description: "Reliable taxi from Dammam City or King Fahd Airport (DMM) to Kuwait. Comfortable private rides for individuals and families.",
        h1: "Dammam to Kuwait Taxi Service",
        distance: "400 km",
        duration: "4 hours 30 minutes",
        content: "Book a direct private transfer from Dammam to Kuwait. Whether you need a pickup from Dammam City Center, Khobar, or King Fahd International Airport (DMM), we offer safe and reliable cross-border taxi services. Our drivers are experienced in border crossing procedures at Al Raqi.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Dammam Airport (DMM)?", answer: "Yes, we provide airport-to-door service from DMM to any location in Kuwait." },
            { question: "Is this a private ride?", answer: "Yes, all our interstate transfers are 100% private door-to-door services." }
        ]
    },
    {
        slug: "kuwait-to-dammam",
        title: "Kuwait to Dammam Taxi | Airport & City Drop-off",
        description: "Travel from Kuwait City to Dammam, Khobar, or DMM Airport by private taxi. Professional cross-border drivers.",
        h1: "Kuwait to Dammam Taxi Transfer",
        distance: "400 km",
        duration: "4 hours 30 minutes",
        content: "Safe and comfortable taxi from Kuwait City directly to Dammam, Saudi Arabia. We serve all areas of Kuwait and drop you off at your home, hotel, or Dammam Airport (DMM). Door-to-door service with simplified border crossing.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Kuwait to Dammam?", answer: "The journey typically takes 4.5 hours depending on border traffic." }
        ]
    },
    {
        slug: "kuwait-to-riyadh",
        title: "Kuwait to Riyadh Taxi | Direct Cross-Border Service",
        description: "Book a private taxi from Kuwait to Riyadh, Saudi Arabia. Inter-city and Airport transfers available 24/7.",
        h1: "Kuwait to Riyadh Taxi Transfer",
        distance: "650 km",
        duration: "7 hours",
        content: "Long-distance private taxi from Kuwait City to Riyadh. We pick you up from your location in Kuwait and drop you off at your destination in Riyadh, including King Khalid Airport (RUH) or any Riyadh district (11564, etc.).",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Do you provide return trips from Kuwait to Riyadh?", answer: "Yes, we handle daily transfers between Kuwait and Riyadh for both families and business travelers." }
        ]
    },
    {
        slug: "khobar-to-kuwait",
        title: "Taxi Khobar to Kuwait | King Fahd Causeway & Border Transfer",
        description: "Private taxi from Al Khobar or Dhahran to Kuwait City. Safe border crossing via Khafji. Door-to-door VIP service for families.",
        h1: "Khobar to Kuwait Taxi Service",
        distance: "420 km",
        duration: "4 hours 45 minutes",
        content: "Travel from Al Khobar or Dhahran directly to Kuwait. Our professional drivers pick you up from any Khobar district or hotel and handle the border crossing at Al Raqi/Khafji. We also provide direct transfers from the King Fahd Causeway area.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Dhahran?", answer: "Yes, we serve all areas of Dhahran and Khobar for direct Kuwait transfers." }
        ]
    },
    {
        slug: "kuwait-to-khobar",
        title: "Taxi Kuwait to Khobar | Direct Cross-Border Transfer",
        description: "Private taxi from Kuwait City to Al Khobar, Dhahran, or Saudi Aramco. Professional drivers and comfortable rides.",
        h1: "Kuwait to Khobar Taxi Service",
        distance: "420 km",
        duration: "4 hours 45 minutes",
        content: "Direct private taxi from Kuwait City to Al Khobar and Dhahran. We provide door-to-door service, picking you up from your location in Kuwait and dropping you off anywhere in Khobar, including the Corniche, hotels, or Saudi Aramco areas.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "jubail-to-kuwait",
        title: "Taxi Jubail to Kuwait | Industrial City Cross-Border Transfer",
        description: "Professional taxi service from Jubail Industrial City to Kuwait. Safe, direct, and reliable transport for professionals.",
        h1: "Jubail to Kuwait Taxi Service",
        distance: "320 km",
        duration: "3 hours 45 minutes",
        content: "We offer specialized cross-border transport from Jubail Industrial City directly to Kuwait. Ideal for business specialists and families, our private cars provide a comfortable 3.5-hour journey through the Al Raqi border.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "kuwait-to-jubail",
        title: "Taxi Kuwait to Jubail | Direct Private Transfer",
        description: "Private taxi from Kuwait City to Jubail Industrial City. Door-to-door service for business and residents.",
        h1: "Kuwait to Jubail Taxi Service",
        distance: "320 km",
        duration: "3 hours 45 minutes",
        content: "Travel from Kuwait City to Jubail Industrial City in comfort. Our private taxi service ensures a direct, safe, and efficient journey across the border to the Eastern Province's industrial hub.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "khafji-to-kuwait",
        title: "Taxi Khafji to Kuwait | Border Crossing Service",
        description: "Quick taxi from Khafji border town to anywhere in Kuwait City. Reliable 24/7 service.",
        h1: "Khafji to Kuwait Taxi Service",
        distance: "110 km",
        duration: "1 hour 30 minutes",
        content: "Located right at the border? We provide quick and easy transfers from Khafji city or the border zone directly into Kuwait City. Perfect for those needing a reliable local border crossing partner.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-dammam",
        title: "Riyadh to Dammam Taxi | Corporate & Private Transfer",
        description: "Book a private taxi from Riyadh to Dammam or Al Khobar. 4-hour direct transfer for executives and families in VIP GMC SUVs.",
        h1: "Riyadh to Dammam Taxi Service",
        distance: "400 km",
        duration: "4 hours",
        content: "Travel across Saudi Arabia's major corporate corridor. Our Riyadh to Dammam taxi service provides a direct, uninterrupted 4-hour transfer. Avoid crowded airports and travel door-to-door in our spacious GMC Yukons or Toyota Camrys, arriving directly at your hotel or business meeting in Khobar or Dammam.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do you drop off in Al Khobar as well?", answer: "Yes, we drop off anywhere in the Eastern Province including Dammam, Dhahran, and Al Khobar." }
        ]
    },
    {
        slug: "jeddah-airport-to-yanbu",
        title: "Jeddah Airport to Yanbu Taxi | Direct Industrial City Transfer",
        description: "Reliable transfer from Jeddah King Abdulaziz Airport to Yanbu Industrial City & Royal Commission. Private taxi service.",
        h1: "Jeddah Airport to Yanbu Taxi",
        distance: "330 km",
        duration: "3.5 hours",
        content: "Landing at Jeddah Airport and heading to the Royal Commission? We offer specialized private taxi transfers from Jeddah (KAIA) directly to Yanbu. Ideal for maritime, oil, and gas executives looking for a safe, discreet, and fast transfer via the coastal highway.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-airport-to-qassim",
        title: "Riyadh Airport to Qassim Taxi | Buraidah & Unaizah Transfers",
        description: "Private taxi from King Khalid Airport (RUH) in Riyadh to Qassim (Buraidah). Comfortable 3.5-hour intercity drive.",
        h1: "Riyadh to Qassim Taxi Transfer",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Direct intercity transfer from Riyadh to the Al Qassim region. Whether you're heading to Buraidah or Unaizah for family visits or agricultural business, our chauffeurs provide a highly comfortable 350km ride directly from the Riyadh airport or city center.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "madinah-airport-to-yanbu",
        title: "Madinah Airport to Yanbu Taxi | Direct Port City Transfer",
        description: "Fast and secure taxi from Prince Mohammad Bin Abdulaziz Airport (Madinah) to Yanbu. Book your premium ride today.",
        h1: "Madinah to Yanbu Taxi Service",
        distance: "230 km",
        duration: "2.5 hours",
        content: "Connecting the Holy City with the Red Sea industrial hub. We provide 24/7 direct pick-ups from Madinah Airport or Madinah hotels straight to Yanbu. Enjoy a smooth 2.5-hour highway drive in premium, air-conditioned vehicles.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-al-ahsa",
        title: "Riyadh to Al Ahsa Taxi | Premium Intercity Transfer",
        description: "Travel from Riyadh to Hofuf and Al Ahsa by private taxi. Safe, reliable, and comfortable 330km journey.",
        h1: "Riyadh to Al Ahsa Taxi Service",
        distance: "330 km",
        duration: "3 hours 15 minutes",
        content: "Connecting Riyadh with the historic Al Ahsa Oasis. Our drivers know the Riyadh-Hofuf corridor perfectly, ensuring a swift and safe journey. Perfect for weekend getaways, business trips to the Eastern Province, or family visits.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },

    {
        slug: "riyadh-to-bahrain",
        title: "Riyadh to Bahrain Taxi | Private Cross-Border Transfer",
        description: "Private VIP taxi from Riyadh to Manama, Bahrain. Cross the King Fahd Causeway safely and comfortably.",
        h1: "Riyadh to Bahrain Taxi Service",
        distance: "430 km",
        duration: "4.5 hours",
        content: "Experience a seamless, long-distance ride from the capital to the island of Bahrain. Our experienced cross-border drivers will pick you up anywhere in Riyadh and drop you off directly at your hotel or residence in Manama, handling the King Fahd Causeway border crossing efficiently. Popular for business travelers, weekend family trips, and corporate delegations between the two Gulf capitals.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Riyadh to Bahrain?", answer: "The journey from Riyadh to Manama, Bahrain is approximately 430 km and takes around 4.5 hours including the King Fahd Causeway crossing." },
            { question: "Do I need a visa to cross from Saudi Arabia to Bahrain?", answer: "GCC nationals do not require a visa. Other nationalities should arrange their Bahrain visa in advance. Our driver will guide you through the crossing process." }
        ]
    },
    {
        slug: "jubail-to-riyadh",
        title: "Jubail to Riyadh Taxi | Corporate Long-Distance Transfer",
        description: "Direct taxi from Jubail Industrial City to Riyadh. Premium business transfers via secure private cars and SUVs.",
        h1: "Jubail to Riyadh Taxi Service",
        distance: "460 km",
        duration: "4.5 - 5 hours",
        content: "We provide specialized private transfers connecting Jubail Industrial City with Riyadh. Ideal for corporate delegates, engineers, and medical travelers requiring a direct, uninterrupted journey to King Khalid Airport (RUH) or Riyadh's business districts like KAFD or King Fahd Medical City. Our vehicles are premium, air-conditioned, and routinely maintained for long-haul reliability.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Jubail Royal Commission compounds?", answer: "Yes, we pick up from all Jubail Royal Commission areas, residential compounds, and the industrial city entrance points." },
            { question: "How far is Jubail from Riyadh by car?", answer: "Jubail to Riyadh is approximately 460 km and takes 4.5-5 hours by private taxi." }
        ]
    },
    {
        slug: "madinah-to-tabuk",
        title: "Madinah to Tabuk Taxi Service | Intercity Transfer",
        description: "Long-distance taxi from Madinah to Tabuk. Reliable booking for families and individuals traveling the northern route.",
        h1: "Madinah to Tabuk Taxi Transfer",
        distance: "620 km",
        duration: "6 hours",
        content: "Travel safely along the western route from the Holy City of Madinah straight to Tabuk. Our drivers are trained for ultra-long-haul intercity journeys, ensuring the highest standards of safety, vehicle maintenance, and passenger comfort. This route passes through the stunning Hejaz and Tabuk highland landscapes, making it an impressive journey as well as a practical one. We serve those heading to Tabuk city, NEOM projects, or connections to the northwest.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Tabuk?", answer: "The journey is approximately 620 km and takes around 6 hours via the Hejaz highway." },
            { question: "Can I book a Madinah to Tabuk taxi for a group?", answer: "Yes, we have the Hyundai Staria (7 passengers) and GMC Yukon XL (7 passengers) available for group transfers." }
        ]
    },
    {
        slug: "tabuk-to-alula",
        title: "Tabuk to AlUla Taxi | Premium Tourist Transfer",
        description: "Private taxi connecting Tabuk Airport or City with the ancient sites of AlUla. Luxury transfer.",
        h1: "Tabuk to AlUla Taxi Service",
        distance: "280 km",
        duration: "3 hours",
        content: "The easiest way to reach the stunning landscapes and ancient heritage of AlUla from the Tabuk region. Our premium SUVs, such as the GMC Yukon, are perfect for the desert highway, offering maximum comfort and luggage capacity for tourists and VIPs. We pick up from Tabuk City, Prince Sultan Airport (TUU), or any NEOM-area accommodation and drive you directly to AlUla's resorts and heritage sites in approximately 3 hours.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Tabuk Airport for AlUla?", answer: "Yes, we provide meet and greet from Prince Sultan Airport in Tabuk and drive you directly to any AlUla resort or tour destination." },
            { question: "How long is the drive from Tabuk to AlUla?", answer: "The journey is approximately 280 km and takes around 3 hours via the Hejaz highway." }
        ]
    },
    {
        slug: "taif-to-madinah",
        title: "Taif to Madinah Taxi | Direct Intercity Travel",
        description: "Avoid Makkah traffic with a direct private taxi from Taif to Madinah. Fast and comfortable.",
        h1: "Taif to Madinah Taxi Transfer",
        distance: "430 km",
        duration: "4.5 hours",
        content: "A highly requested route for residents and pilgrims wanting to travel from the high-altitude city of Taif straight to the Prophet's City, bypassing central Makkah traffic. We offer safe, air-conditioned transfers for individuals and large families.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: []
    },
    {
        slug: "jeddah-to-al-baha",
        title: "Jeddah to Al Baha Taxi | Mountain Region Transfer",
        description: "Private transfer from Jeddah Airport to the cooler climates of Al Baha. Secure mountain driving experts.",
        h1: "Jeddah to Al Baha Taxi Service",
        distance: "390 km",
        duration: "4.5 hours",
        content: "Whether arriving at King Abdulaziz Airport (JED) or leaving from central Jeddah, our experienced mountain drivers provide a safe ascent to the scenic city of Al Baha. Trust our well-maintained vehicles for the challenging terrain and long highway stretch.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "jeddah-to-riyadh",
        title: "Jeddah to Riyadh Taxi | VIP Intercity Transfer",
        description: "Private VIP taxi from Jeddah to Riyadh. Skip the airport and travel in luxury across Saudi Arabia.",
        h1: "Jeddah to Riyadh Taxi Service",
        distance: "950 km",
        duration: "9 - 10 hours",
        content: "Travel across the Kingdom between the commercial hub of Jeddah and the capital, Riyadh. Our ultra-long-distance taxi service utilizes premium GMC Yukons to ensure pure comfort over the 950km journey. Perfect for families moving between cities or executives taking the scenic route.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-abha",
        title: "Riyadh to Abha Taxi | Premium Mountain Transfer",
        description: "Book a direct taxi from Riyadh to the beautiful mountains of Abha. Safe and reliable chauffeurs.",
        h1: "Riyadh to Abha Taxi Service",
        distance: "1,050 km",
        duration: "10 - 11 hours",
        content: "Escape the heat of the capital and travel to the cool mountain heights of Abha. Our drivers are highly experienced in long-haul driving and mountain terrain, making your 1000+ kilometer journey safe, smooth, and incredibly relaxing.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "dammam-to-madinah",
        title: "Dammam to Madinah Taxi | VIP Pilgrim Transport",
        description: "Direct taxi from Dammam and Al Khobar to Madinah. Comfortable travel for Ziyarat directly from the Eastern Province.",
        h1: "Dammam to Madinah Taxi Transfer",
        distance: "1,200 km",
        duration: "12 hours",
        content: "A direct long-distance route connecting the Eastern Province to the Prophet's City. Skip the hassle of connecting flights; enjoy door-to-door service from Dammam or Khobar straight to your Madinah hotel with extensive luggage space available.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "qassim-to-makkah",
        title: "Qassim to Makkah Taxi | Umrah Transfer Service",
        description: "Private taxi from Qassim (Buraidah/Unaizah) to Makkah. Premium Umrah vehicle bookings.",
        h1: "Qassim to Makkah Taxi Service",
        distance: "850 km",
        duration: "8 hours",
        content: "Traveling from Al-Qassim for Umrah? We provide seamless direct transfers from Buraidah and Unaizah straight to your hotel in Makkah via the fast Makkah highway. Comfortable vehicles for families aiming for peace-of-mind travel.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "dammam-to-riyadh",
        title: "Dammam to Riyadh Taxi | Direct Corporate Transfer",
        description: "Private taxi from Dammam or King Fahd Airport directly to Riyadh. Comfortable high-speed highway transfers.",
        h1: "Dammam to Riyadh Taxi Service",
        distance: "400 km",
        duration: "4 hours",
        content: "The reverse route of one of Saudi Arabia's busiest business corridors. Whether returning from a business trip in Dammam to Riyadh, or traveling from Eastern Province to King Khalid Airport, we offer premium door-to-door chauffeured cars.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-neom-city",
        title: "Riyadh to Neom City Taxi | Mega Project Corporate Transfer",
        description: "Book a long-distance private taxi from Riyadh to Neom City. VIP transport for executives and engineers.",
        h1: "Riyadh to Neom City Taxi Service",
        distance: "1,500 km",
        duration: "14 - 15 hours",
        content: "Our most exclusive ultra-long-haul service. We transport VIP guests, engineers, and corporate teams directly from Riyadh to the heart of the Neom City mega-project. Experience business-class road travel in our GMC Yukon XL.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "dammam-airport-to-makkah",
        title: "Dammam Airport (DMM) to Makkah Taxi | Direct Long-Distance Transfer",
        description: "Private taxi from King Fahd International Airport (DMM), Dammam to Makkah. Comfortable door-to-door service for Umrah pilgrims and families.",
        h1: "Dammam Airport to Makkah Taxi Transfer",
        distance: "1,250 km",
        duration: "12 - 13 hours",
        content: "Arriving at King Fahd International Airport (DMM) and heading directly to Makkah for Umrah? We provide dedicated private taxi transfers from Dammam Airport all the way to your hotel in Makkah — whether that's the Clock Tower, Ajyad, or Aziziyah area. Our experienced long-haul drivers ensure maximum comfort throughout the 12+ hour journey with modern, spacious vehicles. Avoid connecting flights and go straight to the Holy City from the moment you land. Stops for prayer, meals, and rest are accommodated at your request.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Dammam Airport to Makkah?", answer: "The journey is approximately 1,250 km and takes around 12-13 hours. Our drivers are experienced in long-haul driving and ensure rest stops along the way." },
            { question: "Do you provide pickup from King Fahd Airport (DMM) arrivals?", answer: "Yes, our driver will meet you at the arrivals hall with a name sign. We track your flight to adjust for any delays at no extra charge." },
            { question: "Can we stop for prayer and meals?", answer: "Absolutely. Your driver will accommodate breaks for Salah, meals, and rest at convenient stops along the route." }
        ]
    },
    {
        slug: "dammam-airport-to-madinah",
        title: "Dammam Airport to Madinah Taxi | VIP Pilgrim Transfer",
        description: "Direct private taxi from King Fahd International Airport (DMM) Dammam to Madinah. Comfortable transfer for Umrah groups and families.",
        h1: "Dammam Airport to Madinah Taxi Service",
        distance: "1,200 km",
        duration: "11 - 12 hours",
        content: "Starting your Umrah or Ziyarat journey from Dammam Airport and heading to the City of the Prophet? We offer a premium direct taxi service from King Fahd International Airport (DMM) straight to your hotel in Madinah, near Masjid Nabawi. Our long-distance fleet consists of spacious, well-maintained vehicles that ensure a comfortable overnight or daytime journey. No transfers, no waiting — just direct, private, door-to-door service.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Is this a direct route from Dammam to Madinah?", answer: "Yes, this is a fully private, non-stop transfer. There are no shared passengers or detours — only prayer and meal breaks you request." },
            { question: "How do I book a taxi from Dammam Airport to Madinah?", answer: "Simply WhatsApp us your flight details and hotel address in Madinah. We confirm your booking and have your driver ready at arrivals." }
        ]
    },
    {
        slug: "makkah-to-dammam",
        title: "Makkah to Dammam Taxi | Long-Distance Intercity Transfer",
        description: "Book a private taxi from Makkah hotel to Dammam or Khobar. Direct 12-hour intercity service for families after Umrah.",
        h1: "Makkah to Dammam Taxi Service",
        distance: "1,250 km",
        duration: "12 - 13 hours",
        content: "Completing your Umrah and heading home to the Eastern Province? We offer a reliable direct taxi from your Makkah hotel (Clock Tower, Aziziyah, or any other area) all the way to Dammam, Khobar, or Dhahran. Our spacious long-haul vehicles are equipped for maximum comfort over this 1,250km journey. Your driver will plan the route with appropriate rest stops.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Get Quote", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Do you drop off anywhere in Dammam and Khobar?", answer: "Yes, we provide door-to-door service to any address in Dammam, Al Khobar, or Dhahran." },
            { question: "How much does a taxi from Makkah to Dammam cost?", answer: "Prices vary by vehicle type. WhatsApp us for a competitive and transparent quote before you commit." }
        ]
    },
    {
        slug: "madinah-to-dammam",
        title: "Madinah to Dammam Taxi | Eastern Province Direct Transfer",
        description: "Private taxi from Madinah hotel to Dammam and Al Khobar. Comfortable 11-hour long-distance service after Ziyarat.",
        h1: "Madinah to Dammam Taxi Service",
        distance: "1,200 km",
        duration: "11 - 12 hours",
        content: "Returning to the Eastern Province after visiting Madinah? Our private taxi service covers the full 1,200km from your Madinah hotel directly to your home or office in Dammam, Khobar, or Dhahran. Our vehicles are prepared for long-haul comfort with ample luggage space and experienced drivers who know the route well.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Can you pick me up from my Madinah hotel?", answer: "Yes, we pick up directly from your hotel lobby in Madinah — including hotels near Masjid Nabawi — at your schedule time." },
            { question: "Do you serve Dhahran and Jubail as well?", answer: "Yes, our Eastern Province drop-off covers Dammam, Al Khobar, Dhahran, Jubail, and surrounding areas." }
        ]
    },
    {
        slug: "jeddah-airport-to-taif",
        title: "Jeddah Airport to Taif Taxi | Direct Mountain Transfer",
        description: "Private taxi from King Abdulaziz Airport (KAIA) Jeddah to Taif. Experienced mountain-road drivers for a safe scenic transfer.",
        h1: "Jeddah Airport to Taif Taxi Service",
        distance: "250 km",
        duration: "2.5 hours",
        content: "Arriving at Jeddah Airport and heading to the Rose City of Taif? Our drivers are specifically experienced in the mountain passes and highways connecting KAIA to Taif. Enjoy a scenic 2.5-hour journey that takes you from the coastal heat of Jeddah to the cool mountain air of Taif. We provide meet and greet service at arrivals with full luggage assistance.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Jeddah Airport to Taif?", answer: "The drive takes approximately 2.5 hours via the Al-Hada mountain road or the Taif expressway." },
            { question: "Is the mountain drive to Taif safe?", answer: "Yes. Our drivers are fully experienced with the Al-Hada and Al-Shafa mountain routes and drive these roads regularly." }
        ]
    },
    {
        slug: "taif-to-jeddah-airport",
        title: "Taif to Jeddah Airport Taxi | Reliable Departure Transfer",
        description: "Book a timely taxi from Taif to King Abdulaziz International Airport (KAIA). Professional mountain-route drivers.",
        h1: "Taif to Jeddah Airport Taxi Transfer",
        distance: "250 km",
        duration: "2.5 hours",
        content: "Don't miss your flight from Jeddah! Book our reliable taxi from anywhere in Taif — including Al-Hawiya, Al-Shafa, or central Taif — directly to King Abdulaziz International Airport. We recommend departing at least 4-5 hours before your flight to account for mountain traffic. Our vehicles are punctual, clean, and equipped for family-sized luggage.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How early should I leave Taif for Jeddah Airport?", answer: "We recommend booking a pickup at least 4-5 hours before your flight. Mountain traffic can occasionally add time to the journey." },
            { question: "Do you serve Al-Shafa and Al-Hawiya areas in Taif?", answer: "Yes, we pick up from all residential and resort areas in and around Taif including Al-Shafa, Al-Hawiya, Al-Hada, and central Taif." }
        ]
    },
    {
        slug: "riyadh-to-taif",
        title: "Riyadh to Taif Taxi | Direct Intercity Transfer",
        description: "Private taxi from Riyadh to the mountain city of Taif. Comfortable 8-hour intercity road trip.",
        h1: "Riyadh to Taif Taxi Service",
        distance: "850 km",
        duration: "8 - 9 hours",
        content: "Escape the Riyadh heat and travel to the cooler mountain resort city of Taif. Our private taxis provide a comfortable 8-9 hour journey from any point in Riyadh (including King Khalid Airport) directly to your hotel or residence in Taif, Al-Hawiya, or the Al-Shafa highlands. Our drivers are experienced in both the open highway and mountain road approaches.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "What is the best vehicle for a Riyadh to Taif long trip?", answer: "We recommend the GMC Yukon XL or Hyundai Staria for 4+ passengers to ensure maximum comfort, luggage space, and a smooth highway experience." },
            { question: "Can I book a Riyadh to Taif taxi for a round trip?", answer: "Yes, we offer round-trip bookings with a discount. WhatsApp us to arrange a custom round-trip schedule." }
        ]
    },
    {
        slug: "riyadh-to-hail",
        title: "Riyadh to Hail Taxi | Northern Region Intercity Transfer",
        description: "Private taxi from Riyadh to Hail. Reliable and comfortable 6-7 hour road transfer for residents and business travelers.",
        h1: "Riyadh to Hail Taxi Service",
        distance: "650 km",
        duration: "6 - 7 hours",
        content: "Connecting the capital with the historic northern city of Hail. Our private taxi provides a direct, comfortable transfer for families, medical travelers, and business visitors heading to Hail. We pick you up from any Riyadh district or King Khalid Airport (RUH) and drop you off at any address in Hail.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Is there a direct highway from Riyadh to Hail?", answer: "Yes, the route uses Highway 65 which is a well-maintained, fast highway. The drive takes approximately 6-7 hours." },
            { question: "Do you offer airport pickup in Riyadh for Hail transfers?", answer: "Yes, we offer 24/7 meet and greet at King Khalid International Airport (RUH) for direct Hail transfers." }
        ]
    },
    {
        slug: "jeddah-to-tabuk",
        title: "Jeddah to Tabuk Taxi | Northern Saudi Intercity Transfer",
        description: "Long-distance private taxi from Jeddah to Tabuk. Comfortable and safe 14-hour road transfer.",
        h1: "Jeddah to Tabuk Taxi Service",
        distance: "1,300 km",
        duration: "13 - 14 hours",
        content: "Traveling from the coastal city of Jeddah to the northern city of Tabuk for business or tourism? Our ultra-long-distance taxi service covers the full 1,300km with experienced drivers who plan the journey with appropriate rest stops. This is an ideal option for those who prefer to avoid multiple flights and transfers, particularly for large families with significant luggage.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "How many hours is Jeddah to Tabuk by car?", answer: "The drive from Jeddah to Tabuk is approximately 1,300 km and takes 13-14 hours depending on traffic and rest stops." },
            { question: "Do your drivers handle ultra-long haul journeys like this?", answer: "Absolutely. All our drivers for long-haul routes are specifically screened for endurance, experience on the route, and medical fitness." }
        ]
    },
    {
        slug: "alula-to-jeddah",
        title: "AlUla to Jeddah Taxi | Airport & City Transfer",
        description: "Private taxi from AlUla resorts and airport to Jeddah. Direct long-distance transfer for tourists and business travelers.",
        h1: "AlUla to Jeddah Taxi Service",
        distance: "680 km",
        duration: "7 hours",
        content: "Finished your heritage tour in AlUla and heading to Jeddah? We provide convenient direct private taxis from AlUla's resorts, city center, or AlUla Regional Airport all the way to Jeddah. Whether you need a drop-off at KAIA (Jeddah Airport), a hotel in Al-Balad, or anywhere else in the city, our service is fully door-to-door.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Can you pick me up from an AlUla resort for a Jeddah transfer?", answer: "Yes, we pick up from all AlUla hotels and resorts including Shaden, Habitas, and Banyan Tree, and provide direct transfers to Jeddah." },
            { question: "How long is the drive from AlUla to Jeddah?", answer: "The journey is approximately 680 km and takes around 7 hours via the main highway." }
        ]
    },
    {
        slug: "jeddah-to-alula",
        title: "Jeddah to AlUla Taxi | Heritage Tourism Transfer",
        description: "Private taxi from Jeddah or KAIA Airport to AlUla resorts. Premium tourism transfer for Hegra and Dadan visitors.",
        h1: "Jeddah to AlUla Taxi Service",
        distance: "680 km",
        duration: "7 hours",
        content: "Planning a heritage trip to AlUla straight from Jeddah? We provide a premium private taxi transfer from anywhere in Jeddah or KAIA Airport directly to your AlUla resort or the AlUla city center. Perfect for tourists, photography enthusiasts, and business travelers attending events at the ancient Nabataean sites.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Is there a direct road from Jeddah to AlUla?", answer: "Yes, the route uses well-maintained Saudi highways. The 7-hour drive is smooth and comfortable in our premium vehicles." },
            { question: "Do you meet guests at Jeddah Airport for AlUla trips?", answer: "Yes, we provide a full meet and greet at KAIA (Jeddah Airport) for all AlUla-bound transfers." }
        ]
    },
    {
        slug: "makkah-to-riyadh",
        title: "Makkah to Riyadh Taxi | Post-Umrah Capital Transfer",
        description: "Book a direct taxi from Makkah to Riyadh after your Umrah. Premium private intercity service.",
        h1: "Makkah to Riyadh Taxi Service",
        distance: "870 km",
        duration: "8 - 9 hours",
        content: "Completed your Umrah in Makkah and ready to return to Riyadh? Our private 8-9 hour taxi transfer takes you directly from your Makkah hotel to any address in Riyadh, including King Khalid Airport (RUH), KAFD, or residential districts. Our spacious vehicles make the long journey comfortable for all family sizes.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How much does a Makkah to Riyadh taxi cost?", answer: "Fares vary based on vehicle type. Contact us on WhatsApp for an instant competitive quote." },
            { question: "Do you drop off at Riyadh Airport (RUH) from Makkah?", answer: "Yes, we provide direct airport drop-offs at King Khalid International Airport from Makkah." }
        ]
    },
    {
        slug: "madinah-to-riyadh",
        title: "Madinah to Riyadh Taxi | Direct Long-Haul Transfer",
        description: "Private taxi from Madinah to Riyadh. Comfortable door-to-door 8-hour intercity service for families and business travelers.",
        h1: "Madinah to Riyadh Taxi Service",
        distance: "870 km",
        duration: "8 - 9 hours",
        content: "Returning to Riyadh from the Prophet's City of Madinah? We provide a seamless direct private taxi covering the 870km route. Your driver will pick you up from any Madinah hotel — from those near Masjid Nabawi to those in the Al-Wurood district — and drop you off at any Riyadh destination, including KAFD, Olaya, or RUH Airport.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Riyadh?", answer: "The journey is approximately 870 km and takes 8-9 hours via the main highway." },
            { question: "Can I book a Madinah to Riyadh taxi for an overnight trip?", answer: "Yes, we have experienced drivers for overnight long-haul runs. The vehicle will be comfortable for sleeping passengers." }
        ]
    },
    {
        slug: "riyadh-to-jubail",
        title: "Riyadh to Jubail Taxi | Corporate Industrial Transfer",
        description: "Private taxi from Riyadh to Jubail Industrial City. Reliable executive transport for business travelers and engineers.",
        h1: "Riyadh to Jubail Taxi Service",
        distance: "460 km",
        duration: "4.5 - 5 hours",
        content: "Connecting Riyadh's business districts with the industrial heart of the Eastern Province. Our Riyadh to Jubail executive taxi service is trusted by engineers, contractors, and corporate teams needing reliable, private transport to Jubail Industrial City. We pick up from King Khalid Airport (RUH) or any Riyadh address and deliver you directly to Jubail's Royal Commission or residential compounds.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do you serve the Jubail Royal Commission area?", answer: "Yes, we drop off at all areas of Jubail Industrial City including the Royal Commission compounds and residential areas." },
            { question: "Can I get a pickup from Riyadh Airport for a Jubail transfer?", answer: "Yes, we offer 24/7 meet and greet service from King Khalid Airport (RUH) for direct Jubail transfers." }
        ]
    },
    {
        slug: "makkah-to-bahrain",
        title: "Makkah to Bahrain Taxi | Cross-Border VIP Transfer",
        description: "Private taxi from Makkah to Manama, Bahrain. Long-distance cross-border transfer via King Fahd Causeway.",
        h1: "Makkah to Bahrain Taxi Service",
        distance: "1,350 km",
        duration: "13 hours",
        content: "Need to travel from Makkah all the way to Bahrain after your Umrah or Hajj? Our ultra-long-haul private taxi service covers the entire 1,350km journey from Makkah directly to Manama, Bahrain, via the King Fahd Causeway. Our drivers are experienced in cross-border procedures. Leave directly from your Makkah hotel and arrive at your Bahrain destination without any hassle.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Is a Makkah to Bahrain taxi journey possible?", answer: "Yes, we handle this ultra-long route regularly for families traveling between the Holy Cities and Bahrain." },
            { question: "How long does it take from Makkah to Bahrain by car?", answer: "The journey is approximately 1,350 km and takes around 13 hours with planned stops." }
        ]
    },
    {
        slug: "madinah-to-bahrain",
        title: "Madinah to Bahrain Taxi | Cross-Border Direct Transfer",
        description: "Private taxi from Madinah to Manama, Bahrain via King Fahd Causeway. Long-distance safe transfer after Ziyarat.",
        h1: "Madinah to Bahrain Taxi Service",
        distance: "1,200 km",
        duration: "12 hours",
        content: "Returning to Bahrain after your Ziyarat in Madinah? We offer a complete door-to-door private taxi from your Madinah hotel directly to any address in Manama or anywhere in Bahrain. Our long-haul drivers handle the 12-hour journey professionally, crossing the King Fahd Causeway border efficiently.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Do your drivers handle the King Fahd Causeway border?", answer: "Yes, our drivers are fully experienced with the Saudi-Bahrain King Fahd Causeway border crossing and all its requirements." },
            { question: "Can I book a return Madinah to Bahrain trip?", answer: "Yes, we offer both one-way and round-trip bookings. WhatsApp us for a round-trip package quote." }
        ]
    },
    {
        slug: "bahrain-to-makkah",
        title: "Bahrain to Makkah Taxi | Cross-Border Umrah Transfer",
        description: "Private taxi from Manama, Bahrain to Makkah. Cross the King Fahd Causeway and arrive at the Holy City directly.",
        h1: "Bahrain to Makkah Taxi Service",
        distance: "1,350 km",
        duration: "13 hours",
        content: "Embarking on Umrah from Bahrain? We offer the most convenient travel option — a private door-to-door taxi from anywhere in Bahrain, crossing the King Fahd Causeway, straight to your Makkah hotel. No airline connections, no airport queues. Our experienced cross-border drivers make the journey safe and spiritually focused.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Can I book an Umrah taxi from Bahrain to Makkah?", answer: "Yes. We provide 24/7 private taxi from Bahrain to Makkah, including hotel pickup and hotel drop-off." },
            { question: "What documents do I need for the King Fahd Causeway crossing?", answer: "You will need a valid passport and Saudi visa. Our driver will guide you through the border process." }
        ]
    },
    {
        slug: "bahrain-to-madinah",
        title: "Bahrain to Madinah Taxi | Ziyarat Direct Transfer",
        description: "Private taxi from Manama, Bahrain to Madinah. Long-distance Umrah transfer via Saudi border.",
        h1: "Bahrain to Madinah Taxi Service",
        distance: "1,200 km",
        duration: "12 hours",
        content: "Travel from Bahrain directly to the Prophet's Mosque in Madinah for Ziyarat. Our private cross-border taxi picks you up from any location in Bahrain and delivers you to your Madinah hotel near Masjid Nabawi. The King Fahd Causeway crossing is handled smoothly by our experienced drivers, ensuring no disruption to your pilgrimage plans.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "How far is it from Bahrain to Madinah by car?", answer: "The distance is approximately 1,200 km including the crossing via the King Fahd Causeway. The journey takes around 12 hours." },
            { question: "Do you provide a pickup from Bahrain airport for Madinah transfers?", answer: "Yes, we provide pickups from Bahrain International Airport for direct Madinah transfers." }
        ]
    },
    {
        slug: "jeddah-to-makkah",
        title: "Jeddah City to Makkah Taxi | Private Hotel Transfer",
        description: "Private taxi from Jeddah hotels or city to Makkah. Fast and hassle-free transfer for Umrah pilgrims.",
        h1: "Jeddah to Makkah Taxi Service",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Staying in Jeddah and heading to Makkah for Umrah? We provide private taxi transfers from any Jeddah hotel, residence, or the corniche directly to your Makkah hotel. All our drivers are highly familiar with the KAIA highway and avoid congested city roads for the fastest possible journey. 24/7 availability, no hidden fees.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take from Jeddah to Makkah?", answer: "The drive from central Jeddah to Makkah takes approximately 1 hour 15 minutes via the KAIA highway." },
            { question: "Can non-Muslims join the ride?", answer: "For Makkah transfers, only Muslim passengers are allowed as per Saudi regulations. All our drivers confirm passenger eligibility." }
        ]
    },
    {
        slug: "makkah-to-jeddah",
        title: "Makkah to Jeddah City Taxi | Hotel Transfer After Umrah",
        description: "Private taxi from Makkah hotel to Jeddah city hotels, corniche, or shopping districts. Fast post-Umrah transfer.",
        h1: "Makkah to Jeddah City Taxi Service",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Completed your Umrah and heading to Jeddah for sightseeing, shopping, or to catch a flight? Our private taxi takes you from your Makkah hotel directly to any Jeddah destination including the Corniche, Al-Balad (Old Town), malls, or hotels. Comfortable, air-conditioned vehicles available 24/7.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
            { question: "Can I go from Makkah to Jeddah Corniche after Umrah?", answer: "Yes, we provide drop-offs anywhere in Jeddah including the Corniche, Al-Balad, malls, and all hotel districts." }
        ]
    },
    {
        slug: "makkah-to-taif",
        title: "Makkah to Taif Taxi | Mountain Resort Transfer",
        description: "Private taxi from Makkah hotel to Taif. Scenic mountain transfer after Umrah for families visiting the Rose City.",
        h1: "Makkah to Taif Taxi Service",
        distance: "90 km",
        duration: "1.5 hours",
        content: "After completing Umrah in Makkah, many pilgrims take a short trip to the beautiful mountain city of Taif. We provide comfortable and reliable private taxis from your Makkah hotel to Taif, Al-Hawiya, or Al-Shafa highlands. Enjoy the scenic drive through the mountains as temperatures drop and the scenery transforms.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "How far is Taif from Makkah?", answer: "Taif is approximately 90 km from Makkah and the drive takes around 1.5 hours via the mountain highway." },
            { question: "Can we stop at cable car or any Taif attraction?", answer: "Yes, your driver can plan stops along the way including Al-Hada cable car and any Taif attraction you wish to visit." }
        ]
    },
    {
        slug: "taif-to-makkah",
        title: "Taif to Makkah Taxi | Direct Umrah Transfer",
        description: "Book a private taxi from Taif to Makkah. Smooth mountain-to-city transfer for pilgrims and residents.",
        h1: "Taif to Makkah Taxi Service",
        distance: "90 km",
        duration: "1.5 hours",
        content: "Heading from the cool heights of Taif to Makkah for Umrah or Hajj? Our experienced mountain-route drivers provide a safe and smooth 1.5-hour transfer from any location in Taif — including Al-Shafa, Al-Hawiya, or central Taif — directly to your Makkah hotel. 24/7 availability for your Miqat-timing needs.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Can I book a Taif to Makkah taxi at midnight?", answer: "Yes, we operate 24/7 and can accommodate late-night or early-morning pickups from Taif to Makkah for Fajr Umrah." },
            { question: "Is Taif a Miqat point?", answer: "Yes, Al-Sa'adiyah (near Taif) is one of the designated Miqat points for pilgrims entering Ihram from the eastern direction." }
        ]
    }
];
