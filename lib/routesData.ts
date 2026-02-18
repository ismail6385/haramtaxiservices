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
    pricing: RoutePricing[];
    faqs: { question: string; answer: string }[];
}

export const routesData: RouteData[] = [
    {
        slug: "jeddah-airport-to-makkah",
        title: "Taxi Jeddah Airport to Makkah | Fixed Price 200 SAR",
        description: "Book reliable taxi from Jeddah Airport (KAIA) to Makkah Hotel. 24/7 service, meet & greet. Camry 250 SAR, GMC 450 SAR. No hidden fees.",
        h1: "Trusted Taxi from Jeddah Airport to Makkah",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Start your Umrah journey with peace of mind. Our driver will wait for you at the Jeddah Airport arrivals hall with a name sign. We service all terminals including Terminal 1, North Terminal, and Hajj Terminal. Direct transfer to your hotel in Makkah (Clock Tower, Aziziyah, etc).",
        pricing: [
            { vehicle: "Toyota Camry", price: "250 SAR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "300 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "350 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "450 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "500 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How much is a taxi from Jeddah Airport to Makkah?", answer: "Prices start from 250 SAR for a Camry and 450 SAR for a GMC Yukon." },
            { question: "Do you pick up from the New Terminal 1?", answer: "Yes, we provide pickups from all Jeddah Airport terminals." }
        ]
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
            { vehicle: "Toyota Camry", price: "600 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "700 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "750 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "950 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "1300 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Madinah?", answer: "It typically takes around 4.5 hours by private taxi." },
            { question: "Can we stop at Meeqat?", answer: "Yes, our drivers are happy to stop at Meeqat for Ihram." }
        ]
    },
    {
        slug: "makkah-hotel-to-jeddah-airport",
        title: "Taxi Makkah Hotel to Jeddah Airport | 24/7 Drop-off",
        description: "Reliable transfer from your Makkah hotel to King Abdulaziz Airport (Jeddah). Arrive on time for your flight. Fixed rates starting 200 SAR.",
        h1: "Makkah Hotel to Jeddah Airport Taxi",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "End your Umrah trip with a hassle-free ride to the airport. We pick you up from your hotel lobby in Makkah and drop you off at your departure terminal in Jeddah.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "300 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "450 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "When should I leave Makkah for my flight?", answer: "We recommend leaving at least 4-5 hours before your international flight departure." }
        ]
    },
    {
        slug: "madinah-hotel-to-jeddah-airport",
        title: "Madinah to Jeddah Airport Taxi | Direct Transfer",
        description: "Book a direct taxi from Madinah Hotel to Jeddah Airport. Fast and comfortable via Hijrah Highway. Prices start from 450 SAR.",
        h1: "Madinah Hotel to Jeddah Airport Transfer",
        distance: "415 km",
        duration: "4 hours",
        content: "Direct transfer from your hotel in Madinah to Jeddah Airport. Avoid the hassle of buses and travel in privacy.",
        pricing: [
            { vehicle: "Toyota Camry", price: "450 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "600 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "650 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "850 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "1200 SR", capacity: "17 Pax", luggage: "15 Bags" },
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
            { vehicle: "Toyota Camry", price: "150 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "200 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "200 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "250 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "350 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-makkah",
        title: "Makkah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Makkah hotels to Haramain High Speed Railway Station. Fixed rates.",
        h1: "Makkah Hotel to Train Station Transfer",
        distance: "10-15 km",
        duration: "20 minutes",
        content: "Catch your train on time. reliable transfer from Clock Tower or Aziziyah to the Makkah Train Station.",
        pricing: [
            { vehicle: "Toyota Camry", price: "120 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "150 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "200 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "250 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "300 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-madinah",
        title: "Madinah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Madinah hotels to Haramain High Speed Railway Station. Fixed rates.",
        h1: "Madinah Hotel to Train Station Transfer",
        distance: "15-20 km",
        duration: "25 minutes",
        content: "Seamless transfer to Madinah Train Station. We ensure you reach the platform relaxed and on time.",
        pricing: [
            { vehicle: "Toyota Camry", price: "120 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "150 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "200 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "250 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "300 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat-tour",
        title: "Makkah Ziyarat Taxi Tour | Historical Sites",
        description: "Visit Cave Hira, Cave Thawr, Mina, and Arafat with our guided Makkah Ziyarat taxi service.",
        h1: "Makkah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "3-4 Hours",
        content: "Explore the sacred history of Makkah. Our knowledgeable drivers will take you to Jabal Al-Nour, Jabal Thawr, Masjid Al-Jinn, and the Hajj sites (Mina, Muzdalifah, Arafat).",
        pricing: [
            { vehicle: "Toyota Camry", price: "250 SR", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "300 SR", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "Toyota Hiace", price: "350 SR", capacity: "11 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "Toyota Coaster", price: "500 SR", capacity: "17 Pax", luggage: "N/A" },
        ],
        faqs: [
            { question: "Does the driver speak English?", answer: "Yes, most of our drivers speak English and Urdu/Hindi." }
        ]
    },
    {
        slug: "madinah-ziyarat-tour",
        title: "Madinah Ziyarat Taxi Tour | Holy Sites",
        description: "Visit Masjid Quba, Mount Uhud, and Qiblatain with our Madinah Ziyarat taxi service.",
        h1: "Madinah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "3-4 Hours",
        content: "Complete your pilgrimage with a tour of Madinah's holy sites. Visit the first mosque of Islam (Quba), the site of the Battle of Uhud, and more.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "Toyota Hiace", price: "300 SR", capacity: "11 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "300 SR", capacity: "7 Pax", luggage: "N/A" },
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
            { vehicle: "Toyota Camry", price: "Contact Us", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Contact Us", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "Contact Us", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "Contact Us", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "Contact Us", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Do you work with travel agencies?", answer: "Yes, we partner with Umrah travel agencies worldwide to provide ground transport." },
            { question: "Can I book transport for a large group?", answer: "Absolutely. We have a fleet of Coasters and buses for large Umrah groups." }
        ]
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
            { vehicle: "GMC Yukon", price: "Seasonal", capacity: "7 Pax", luggage: "Limited" },
            { vehicle: "Toyota Coaster", price: "Seasonal", capacity: "17 Pax", luggage: "Limited" },
            { vehicle: "Luxury Bus", price: "Seasonal", capacity: "49 Pax", luggage: "Large" },
        ],
        faqs: [
            { question: "Do you offer transport during Hajj days?", answer: "Yes, but Hajj transport must be booked months in advance due to permits." }
        ]
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
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "300 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "450 SR", capacity: "17 Pax", luggage: "15 Bags" },
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
            { vehicle: "GMC Yukon XL", price: "450 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Chevrolet Suburban", price: "450 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Ford Expedition", price: "400 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Lexus ES", price: "Contact Us", capacity: "3 Pax", luggage: "2 Bags" },
        ],
        faqs: [
            { question: "Are your VIP cars tinted?", answer: "Yes, all our luxury transport vehicles have privacy tinting." }
        ]
    },
    {
        slug: "hotel-to-haram-transport",
        title: "Hotel to Haram Transport | Daily Shuttle Makkah",
        description: "Convenient hotel to Haram transport in Makkah. Private transfers from Aziziyah or distant hotels to the Clock Tower.",
        h1: "Hotel to Haram Transport Services",
        distance: "Local",
        duration: "15-20 min",
        content: "Staying in Aziziyah or Exotels? Our hotel to Haram transport service ensures you never miss a prayer. Booking a private daily transfer allows you to move between your hotel and the Haram with ease, avoiding the crowded public buses.",
        pricing: [
            { vehicle: "Toyota Camry", price: "50 SR", capacity: "4 Pax", luggage: "None" },
            { vehicle: "Hyundai Staria", price: "80 SR", capacity: "7 Pax", luggage: "None" },
            { vehicle: "Toyota Hiace", price: "100 SR", capacity: "11 Pax", luggage: "None" },
            { vehicle: "GMC Yukon", price: "150 SR", capacity: "7 Pax", luggage: "None" },
        ],
        faqs: []
    }
];
