import { LucideIcon, Plane, MapPin, Crown, Building2, User } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    description: string;
    icon?: any; // strict typing with LucideIcon can be tricky in data files depending on setup
    content: string;
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
            { title: "Makkah (Sedan)", price: "200 SAR" },
            { title: "Makkah (GMC)", price: "400 SAR" },
            { title: "Madinah (Sedan)", price: "450 SAR" },
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
        content: "Start your visit to the Prophet's City with ease. Our Madinah airport taxi service provides quick and comfortable transfers to all hotels near Masjid Nabawi. Avoid the hassle of haggling and enjoy a fixed-price ride.",
        features: ["24/7 Availability", "Fixed Prices", "English Speaking Drivers", "VIP Options"],
        pricing: [
            { title: "Madinah Hotel (Sedan)", price: "80 SAR" },
            { title: "Madinah Hotel (GMC)", price: "150 SAR" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat",
        title: "Makkah Ziyarat Tour | Historical Sites Taxi",
        description: "Visit the holy sites of Makkah including Cave Hira, Cave Thawr, and Arafat with our guided taxi tour.",
        content: "Experience the profound history of Makkah with our Ziyarat tours. Our knowledgeable drivers will take you to Jabal Al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat, and Jannat al-Mu'alla. Take your time to pray and reflect at each location.",
        features: ["3-4 Hour Tour", "Knowledgeable Driver", "Flexible Route", "Air Conditioned"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "200 SAR" },
            { title: "GMC (7 Pax)", price: "350 SAR" },
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
        features: ["3-4 Hour Tour", "Guided Visit", "Door-to-door", "Family Friendly"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "150 SAR" },
            { title: "GMC (7 Pax)", price: "250 SAR" },
        ],
        faqs: []
    },
    {
        slug: "umrah-travel-agency",
        title: "Umrah Travel Agency Transport Partner",
        description: "B2B Transport solutions for Umrah Travel Agencies. Reliable bus and car fleets for groups.",
        content: "We partner with Umrah operators worldwide to provide seamless ground transportation. From meet & greet to intercity transfers and Ziyarat, we act as your reliable logistics arm in Saudi Arabia.",
        features: ["B2B Rates", "Fleet Management", "White Label Service", "Dedicated Account Manager"],
        pricing: [
            { title: "Contact for B2B Rates", price: "Custom" }
        ],
        faqs: []
    },
    {
        slug: "luxury-umrah-transport",
        title: "Luxury & VIP Umrah Transport",
        description: "Premium GMC Yukon XL and Mercedes options for VIP pilgrims.",
        content: "Travel in ultimate comfort and privacy. Our VIP fleet includes the latest model GMC Yukon XL, Chevrolet Suburban, and luxury vans. Features include privacy glass, leather seats, and premium amenities.",
        features: ["Latest Models (2024)", "Privacy Tint", "VIP Chauffeurs", "Refreshments"],
        pricing: [
            { title: "Jeddah to Makkah (GMC)", price: "450 SAR" },
            { title: "Makkah to Madinah (GMC)", price: "950 SAR" }
        ],
        faqs: []
    }
];
