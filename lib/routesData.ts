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
        content: "Travel seamlessly from Jeddah to the Prophet's City of Madinah with our private door-to-door taxi. Whether departing from a Jeddah hotel or King Abdulaziz International Airport (KAIA), we deliver you directly to any Madinah hotel near Masjid Nabawi via the fast Hijrah Highway in approximately 4 hours. No shared rides, no detours â€” just you, your family, and a professional driver.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
                  {
                            "question": "How long does the Jeddah to Madinah taxi take?",
                            "answer": "The journey is approximately 400 km and takes around 4 hours via the Hijrah Highway."
                  },
                  {
                            "question": "Is the Jeddah to Madinah taxi a private ride?",
                            "answer": "Yes, all our transfers are 100% private door-to-door with no shared passengers."
                  },
                  {
                            "question": "Can I be picked up from a Jeddah hotel instead of the airport?",
                            "answer": "Absolutely. We pick up from any Jeddah hotel, residence, or King Abdulaziz Airport (KAIA)."
                  }
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
        faqs: [
                  {
                            "question": "How far is Madinah city from Madinah Airport?",
                            "answer": "Most Madinah hotels are 20â€“30 km from Prince Mohammad Bin Abdulaziz Airport, approximately 25 minutes by taxi."
                  },
                  {
                            "question": "How early should I leave my hotel for my flight?",
                            "answer": "We recommend booking your taxi at least 3 hours before your flight for domestic and 4 hours for international departures."
                  },
                  {
                            "question": "Do you track my flight in case of delays?",
                            "answer": "Yes, we monitor flight schedules so your driver is always on time."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Dammam to Makkah?",
                            "answer": "The journey is approximately 1,250 km and takes 12â€“13 hours by private taxi."
                  },
                  {
                            "question": "Is a rest stop included on this long journey?",
                            "answer": "Yes, our driver will make comfort stops along the route so passengers can rest, pray, and refresh."
                  },
                  {
                            "question": "Which vehicle is best for Dammam to Makkah?",
                            "answer": "We recommend the GMC Yukon for maximum comfort on this long-haul journey."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Riyadh to Makkah?",
                            "answer": "The journey is approximately 870 km and takes 8â€“9 hours by private taxi via the Makkahâ€“Madinah highway."
                  },
                  {
                            "question": "Can I book a Riyadh to Makkah taxi for Umrah?",
                            "answer": "Yes, this is one of our most popular Umrah routes. We offer vehicle options from Camry to GMC Yukon."
                  },
                  {
                            "question": "Is there a rest stop along the way?",
                            "answer": "Yes, our drivers make scheduled rest and prayer stops on this long-haul route."
                  }
        ]
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
        faqs: [
                  {
                            "question": "Which border crossing is used for Tabuk to Jordan?",
                            "answer": "We typically use the Halat Ammar border crossing, which is approximately 150 km from Tabuk city."
                  },
                  {
                            "question": "Do I need a visa for Jordan?",
                            "answer": "Most nationalities can get a Jordan visa on arrival. We recommend confirming your visa requirements before travel."
                  },
                  {
                            "question": "How long does the border crossing take?",
                            "answer": "Border processing usually takes 30â€“60 minutes depending on traffic. We account for this in our quoted journey time."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from AlUla to Madinah?",
                            "answer": "The journey is approximately 330 km and takes around 3.5 hours via the Hejaz highway."
                  },
                  {
                            "question": "Can I be picked up from an AlUla resort?",
                            "answer": "Yes, we pick up from all major AlUla resorts including Habitas, Banyan Tree, and Shaden."
                  },
                  {
                            "question": "Is this a private taxi or shared?",
                            "answer": "This is a 100% private transfer. No other passengers will be in your vehicle."
                  }
        ]
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
        faqs: [
                  {
                            "question": "Which border crossing is used for Najran to Yemen?",
                            "answer": "We transfer to the Al Wadeeah border crossing, which is the main crossing point between Najran and Yemen."
                  },
                  {
                            "question": "How long is the drive to Al Wadeeah from Najran?",
                            "answer": "The drive is approximately 350 km and takes around 4 hours."
                  },
                  {
                            "question": "Is the road to the Yemen border safe?",
                            "answer": "Yes, we only operate on the approved, secure highway routes and monitor conditions before every trip."
                  }
        ]
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
        faqs: [
                  {
                            "question": "Which border crossing is used for Hafr Al Batin to Kuwait?",
                            "answer": "We use the Al Raqi border crossing, which is the main Saudi-Kuwait crossing point."
                  },
                  {
                            "question": "How long does the drive from Hafr Al Batin to the Kuwait border take?",
                            "answer": "It is approximately 100 km and takes about 1 hour by private taxi."
                  },
                  {
                            "question": "Do I need specific documents for crossing into Kuwait?",
                            "answer": "GCC nationals need their ID card. Other nationalities should have a valid passport and Kuwait entry visa."
                  }
        ]
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
        faqs: [
                  {
                            "question": "Which border is used for Al Ahsa to UAE?",
                            "answer": "We use the Al Batha border crossing into the UAE, which is approximately 300 km from Al Ahsa."
                  },
                  {
                            "question": "How long does the Al Ahsa to UAE transfer take?",
                            "answer": "The drive takes approximately 3 hours, plus border processing time which varies."
                  },
                  {
                            "question": "Is this a private taxi to the UAE border?",
                            "answer": "Yes, it is a completely private door-to-door service from Al Ahsa to the UAE border crossing."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Hail to Riyadh?",
                            "answer": "The journey is approximately 640 km and takes around 6 hours by private taxi."
                  },
                  {
                            "question": "Can I be dropped off at Riyadh Airport?",
                            "answer": "Yes, we can drop you off at King Khalid International Airport (RUH) or any Riyadh destination."
                  },
                  {
                            "question": "Is the Hail to Riyadh taxi private?",
                            "answer": "Yes, all our intercity transfers are 100% private with no shared passengers."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Jazan to Abha?",
                            "answer": "The journey is approximately 200 km and takes around 2.5 hours, ascending into the Asir mountains."
                  },
                  {
                            "question": "Is the road from Jazan to Abha safe?",
                            "answer": "Yes, our drivers are experienced on the mountain highways of Asir and take the route safely."
                  },
                  {
                            "question": "Can I book a return trip from Abha back to Jazan?",
                            "answer": "Yes, we offer both one-way and round-trip bookings on this route."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Hafr Al Batin to Riyadh?",
                            "answer": "The journey is approximately 500 km and takes about 5 hours by private taxi."
                  },
                  {
                            "question": "Can I be picked up from Hafr Al Batin city center?",
                            "answer": "Yes, we pick up from any location within Hafr Al Batin city."
                  },
                  {
                            "question": "Is this a direct non-stop transfer?",
                            "answer": "Yes, it is a direct private transfer. We stop only for prayers and comfort breaks upon request."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Al Ahsa to Qatar border?",
                            "answer": "The Al Ahsa to Salwa border crossing is approximately 150 km and takes around 1.5 hours."
                  },
                  {
                            "question": "Which border crossing is used for Al Ahsa to Qatar?",
                            "answer": "We use the Salwa border crossing, which is the main entry point into Qatar from Saudi Arabia."
                  },
                  {
                            "question": "Do I need a visa for Qatar from Saudi Arabia?",
                            "answer": "GCC nationals can enter Qatar without a visa. Other nationalities should check Qatar's entry requirements in advance."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How far is Buraidah from Unayzah?",
                            "answer": "Buraidah and Unayzah are only 30 km apart, making the taxi ride approximately 30 minutes."
                  },
                  {
                            "question": "Is a taxi from Buraidah to Unayzah expensive?",
                            "answer": "It is a short local transfer. Contact us on WhatsApp for an instant quote."
                  },
                  {
                            "question": "Can I book a return trip?",
                            "answer": "Yes, we offer flexible return trip bookings for the Buraidahâ€“Unayzah route."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Yanbu to Madinah?",
                            "answer": "The journey is approximately 230 km and takes around 2.5 hours by private taxi."
                  },
                  {
                            "question": "Can I be picked up from Yanbu Airport?",
                            "answer": "Yes, we provide pickups from Yanbu Airport (YNB) as well as Yanbu city and industrial areas."
                  },
                  {
                            "question": "Is this a popular route for pilgrims?",
                            "answer": "Yes, many pilgrims arriving at Yanbu Airport use this service to reach Masjid Nabawi in Madinah."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How far is Abha from Khamis Mushait?",
                            "answer": "Abha and Khamis Mushait are only about 30 km apart, making the taxi ride approximately 30 minutes."
                  },
                  {
                            "question": "Is a taxi the best way to travel between Abha and Khamis Mushait?",
                            "answer": "Yes, a private taxi is the most convenient option for direct door-to-door travel between the two cities."
                  },
                  {
                            "question": "Can I book this taxi for Abha Airport pickups?",
                            "answer": "Yes, we offer pickups from Abha Regional Airport (AHB) for onward transfers to Khamis Mushait."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How far is Arar from the Iraq border?",
                            "answer": "The Jadidah Arar border crossing is approximately 60 km from Arar city, about 45 minutes by taxi."
                  },
                  {
                            "question": "Which border crossing is used for Arar to Iraq?",
                            "answer": "The Jadidah Arar crossing is the main Saudi-Iraq border point used for our transfers."
                  },
                  {
                            "question": "Do I need a visa to enter Iraq from Saudi Arabia?",
                            "answer": "Most nationalities require a visa to enter Iraq. Confirm your visa status before booking the transfer."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Qassim to Riyadh?",
                            "answer": "The journey is approximately 350 km and takes around 3.5 hours by private taxi."
                  },
                  {
                            "question": "Do you pick up from Qassim Airport?",
                            "answer": "Yes, we pick up from Prince Nayef Airport in Qassim (ELQ) as well as Buraidah and Unaizah city centers."
                  },
                  {
                            "question": "Can I be dropped off at Riyadh Airport?",
                            "answer": "Yes, we drop off anywhere in Riyadh including King Khalid International Airport (RUH)."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the taxi from Makkah hotels to the train station?",
                            "answer": "From central Makkah hotels like Clock Tower, the drive is approximately 10 km and takes 20 minutes."
                  },
                  {
                            "question": "How early should I book the taxi to catch my Haramain train?",
                            "answer": "We recommend arriving at the station at least 45 minutes before departure. Book your taxi accordingly."
                  },
                  {
                            "question": "Do you offer meet and greet at Makkah Train Station?",
                            "answer": "Yes, we can arrange hotel pickup and driver assistance to the correct departure platform."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the taxi from Madinah hotels to the train station?",
                            "answer": "Most Madinah hotels near Masjid Nabawi are approximately 12 km from the Haramain station, about 25 minutes."
                  },
                  {
                            "question": "How early should I leave my hotel for the Haramain train?",
                            "answer": "We recommend being at Madinah train station at least 45 minutes before departure."
                  },
                  {
                            "question": "Can I pre-book a Madinah train station transfer?",
                            "answer": "Yes, WhatsApp us your train departure time and hotel address to arrange a pre-scheduled pickup."
                  }
        ]
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
        faqs: [
                  {
                            "question": "What historical sites are included in the Makkah Ziyarat tour?",
                            "answer": "Our tour covers Jabal Al-Nour (Cave Hira), Jabal Thawr, Masjid Al-Jinn, Masjid Aisha, and the Hajj sites: Mina, Muzdalifah, and Arafat."
                  },
                  {
                            "question": "How long does the Makkah Ziyarat tour take?",
                            "answer": "The full tour takes approximately 4 hours. We can customize the duration based on your needs."
                  },
                  {
                            "question": "Is the Makkah Ziyarat tour a private service?",
                            "answer": "Yes, the tour is 100% private â€” just you and your family with your dedicated driver and vehicle."
                  }
        ]
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
        faqs: [
                  {
                            "question": "What sites are included in the Madinah Ziyarat tour?",
                            "answer": "The tour covers Masjid Quba, Al-Baqi Cemetery, Mount Uhud, Masjid Al-Qiblatain, and other important Islamic sites."
                  },
                  {
                            "question": "How long does the Madinah Ziyarat tour take?",
                            "answer": "The full Madinah historical tour takes approximately 4 hours depending on your stops."
                  },
                  {
                            "question": "Is the driver knowledgeable about Islamic history?",
                            "answer": "Yes, our Madinah drivers are trained guides who can explain the significance of each site."
                  }
        ]
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
        faqs: [
                  {
                            "question": "Can you provide transport for an Umrah group?",
                            "answer": "Yes, we specialize in group Umrah transport with vehicles ranging from GMC Yukons to Toyota Coasters for large groups."
                  },
                  {
                            "question": "Do you coordinate with Umrah travel agents?",
                            "answer": "Yes, we partner with travel agencies to provide seamless ground transportation for their pilgrims."
                  },
                  {
                            "question": "What routes do you cover for Umrah transport?",
                            "answer": "We cover all Umrah routes including Jeddah Airport to Makkah, Makkah to Madinah, and Madinah back to Jeddah Airport."
                  }
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
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "Limited" },
            { vehicle: "Luxury Bus", price: "Get Quote", capacity: "49 Pax", luggage: "Large" },
        ],
        faqs: [
                  {
                            "question": "Do you provide Hajj transport between Mina, Arafat, and Muzdalifah?",
                            "answer": "Yes, we offer dedicated Hajj transport for the Mashaer (sacred sites) days with experienced drivers who know the timings."
                  },
                  {
                            "question": "What vehicles are available for Hajj groups?",
                            "answer": "We have GMC Yukons for small groups and luxury buses for large Hajj delegations."
                  },
                  {
                            "question": "How far in advance should I book Hajj transport?",
                            "answer": "We strongly recommend booking Hajj transport at least 3â€“4 months in advance as demand is very high during Hajj season."
                  }
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
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: [
                  {
                            "question": "What does your Umrah transport service include?",
                            "answer": "Our service includes airport pickup, hotel drop-off, and all intercity transfers between Jeddah, Makkah, and Madinah."
                  },
                  {
                            "question": "Is your Umrah transport available 24/7?",
                            "answer": "Yes, we operate 24/7 to accommodate all flight arrivals and departures throughout Umrah season."
                  },
                  {
                            "question": "Can I book Umrah transport for a large family group?",
                            "answer": "Yes, we have vehicles for groups of all sizes, from 4-passenger Camrys to 17-passenger Coasters."
                  }
        ]
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
        faqs: [
                  {
                            "question": "What makes your luxury Umrah transport different?",
                            "answer": "We offer late-model GMC Yukon XL with premium leather seating, privacy glass, and experienced chauffeurs dedicated to VIP pilgrim comfort."
                  },
                  {
                            "question": "Is the luxury Umrah vehicle air-conditioned?",
                            "answer": "Yes, all our luxury vehicles feature powerful air conditioning essential for the Saudi climate."
                  },
                  {
                            "question": "Can I request a specific vehicle for my Umrah trip?",
                            "answer": "Yes, you can request our GMC Yukon XL or luxury van when booking via WhatsApp."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long does it take from Aziziyah to the Haram by taxi?",
                            "answer": "From Aziziyah, the drive to the Clock Tower area near Masjid Al-Haram takes approximately 15â€“20 minutes."
                  },
                  {
                            "question": "Can I book daily hotel to Haram transfers?",
                            "answer": "Yes, we offer flexible daily booking packages so you can arrange your Haram visits in advance."
                  },
                  {
                            "question": "Do you serve all Makkah hotels for Haram transfers?",
                            "answer": "Yes, we pick up from all Makkah hotels including Aziziyah, Al Shisha, and distant properties."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Kuwait to Al Khobar?",
                            "answer": "The journey is approximately 420 km and takes around 4 hours 45 minutes by private taxi."
                  },
                  {
                            "question": "Do you drop off at Saudi Aramco in Dhahran?",
                            "answer": "Yes, we drop off anywhere in Khobar, Dhahran, and the Saudi Aramco residential areas."
                  },
                  {
                            "question": "Is this a private taxi from Kuwait to Saudi Arabia?",
                            "answer": "Yes, it is a 100% private cross-border transfer with no shared passengers."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Jubail to Kuwait?",
                            "answer": "The journey is approximately 320 km and takes around 3 hours 45 minutes."
                  },
                  {
                            "question": "Do you pick up from Jubail Royal Commission?",
                            "answer": "Yes, we pick up from all Jubail Royal Commission areas and industrial city zones."
                  },
                  {
                            "question": "Is this a private taxi or shared?",
                            "answer": "This is a completely private transfer â€” no other passengers."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Kuwait to Jubail?",
                            "answer": "The journey is approximately 320 km and takes around 3 hours 45 minutes by private taxi."
                  },
                  {
                            "question": "Do you drop off at Jubail Industrial City?",
                            "answer": "Yes, we drop off at Jubail Industrial City, Royal Commission compounds, and residential areas."
                  },
                  {
                            "question": "Is this a private cross-border taxi?",
                            "answer": "Yes, all our Kuwaitâ€“Saudi transfers are 100% private door-to-door services."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Khafji to Kuwait City?",
                            "answer": "Khafji is very close to the Kuwait border. The journey to Kuwait City takes approximately 1 hour 30 minutes."
                  },
                  {
                            "question": "Do you operate 24/7 for Khafji to Kuwait transfers?",
                            "answer": "Yes, our Khafji to Kuwait service operates around the clock."
                  },
                  {
                            "question": "Can I be picked up from the Khafji border zone?",
                            "answer": "Yes, we pick up from Khafji city, the refinery area, and the border zone."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Jeddah Airport to Yanbu?",
                            "answer": "The journey is approximately 330 km and takes around 3.5 hours via the coastal highway."
                  },
                  {
                            "question": "Do you serve the Yanbu Royal Commission?",
                            "answer": "Yes, we drop off at all Yanbu Royal Commission zones including the industrial city and residential compounds."
                  },
                  {
                            "question": "Can I book this for late-night or early-morning flights?",
                            "answer": "Yes, we operate 24/7. Your driver will meet you at the arrivals hall regardless of flight time."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Riyadh Airport to Qassim?",
                            "answer": "The journey is approximately 350 km and takes around 3.5 hours from King Khalid Airport to Buraidah."
                  },
                  {
                            "question": "Do you drop off in Unaizah as well?",
                            "answer": "Yes, we serve all Qassim cities including Buraidah, Unaizah, and smaller surrounding towns."
                  },
                  {
                            "question": "Can I pre-book this transfer for my flight arrival?",
                            "answer": "Yes, WhatsApp us your flight number and we will have a driver waiting at the arrivals hall."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Madinah Airport to Yanbu?",
                            "answer": "The journey is approximately 230 km and takes around 2.5 hours by private taxi."
                  },
                  {
                            "question": "Do you pick up from Prince Mohammad Bin Abdulaziz Airport?",
                            "answer": "Yes, we provide meet and greet pickup from Madinah Airport (MED) for direct transfer to Yanbu."
                  },
                  {
                            "question": "Is this service available for industry workers?",
                            "answer": "Yes, many oil, gas, and maritime professionals use this route. We offer executive vehicles for business travelers."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Riyadh to Al Ahsa?",
                            "answer": "The journey is approximately 330 km and takes around 3 hours 15 minutes by private taxi."
                  },
                  {
                            "question": "Do you serve Al Ahsa Oasis and Hofuf city?",
                            "answer": "Yes, we drop off at any location within Al Ahsa including Hofuf city center and the UNESCO Al Ahsa Oasis."
                  },
                  {
                            "question": "Can I book a return trip from Al Ahsa to Riyadh?",
                            "answer": "Yes, we offer both one-way and round-trip transfers on the Riyadhâ€“Al Ahsa route."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Taif to Madinah?",
                            "answer": "The journey is approximately 430 km and takes around 4.5 hours by private taxi, bypassing central Makkah."
                  },
                  {
                            "question": "Does the Taif to Madinah taxi avoid Makkah?",
                            "answer": "Yes, our route avoids central Makkah traffic, making it faster for non-pilgrims and those without Makkah permits."
                  },
                  {
                            "question": "What vehicles are available for the Taif to Madinah route?",
                            "answer": "We offer Toyota Camry for individuals and Toyota Hiace or GMC Yukon for families and groups."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Jeddah to Al Baha?",
                            "answer": "The journey is approximately 390 km and takes around 4.5 hours, including the mountain ascent into Al Baha."
                  },
                  {
                            "question": "Is the mountain road to Al Baha safe?",
                            "answer": "Yes, our drivers are experienced on the Al Baha mountain highway and prioritize safety on all winding roads."
                  },
                  {
                            "question": "Do you pick up from Jeddah Airport for Al Baha?",
                            "answer": "Yes, we provide meet and greet from King Abdulaziz Airport for direct transfer to Al Baha."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Jeddah to Riyadh?",
                            "answer": "The journey is approximately 950 km and takes 9â€“10 hours by private taxi."
                  },
                  {
                            "question": "Why choose a taxi over flying from Jeddah to Riyadh?",
                            "answer": "A private taxi offers door-to-door convenience without airport queues, perfect for families with heavy luggage."
                  },
                  {
                            "question": "Is a rest stop included on the Jeddah to Riyadh journey?",
                            "answer": "Yes, our driver will make scheduled rest, prayer, and refreshment stops during the journey."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Riyadh to Abha?",
                            "answer": "The journey is approximately 1,050 km and takes 10â€“11 hours, including the scenic mountain ascent to Abha."
                  },
                  {
                            "question": "What is the best vehicle for Riyadh to Abha?",
                            "answer": "We recommend the GMC Yukon XL for this long-haul mountain route â€” maximum comfort and space."
                  },
                  {
                            "question": "Does the Riyadh to Abha taxi make stops along the way?",
                            "answer": "Yes, our driver will make prayer, comfort, and meal stops during this long-haul journey."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Dammam to Madinah?",
                            "answer": "The journey is approximately 1,200 km and takes around 12 hours by private taxi."
                  },
                  {
                            "question": "Is the Dammam to Madinah taxi good for Umrah?",
                            "answer": "Yes, this is a popular pilgrim route. We offer door-to-door service from your Dammam home to your Madinah hotel."
                  },
                  {
                            "question": "What vehicles can handle Dammam to Madinah luggage?",
                            "answer": "We recommend the GMC Yukon XL or Hyundai Staria for their large boot space on this long-distance route."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Qassim to Makkah?",
                            "answer": "The journey is approximately 850 km and takes around 8 hours by private taxi via the Makkah highway."
                  },
                  {
                            "question": "Is this taxi suitable for Umrah from Qassim?",
                            "answer": "Yes, this is one of our most popular Umrah departure routes from the Qassim region."
                  },
                  {
                            "question": "Can I stop at Meeqat on the way to Makkah?",
                            "answer": "Yes, we can stop at the appropriate Meeqat point for Ihram before entering Makkah."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Dammam to Riyadh?",
                            "answer": "The journey is approximately 400 km and takes around 4 hours by private taxi."
                  },
                  {
                            "question": "Do you pick up from King Fahd International Airport in Dammam?",
                            "answer": "Yes, we provide 24/7 pickups from DMM Airport for direct transfer to Riyadh."
                  },
                  {
                            "question": "Can I be dropped at Riyadh Airport?",
                            "answer": "Yes, we drop off at King Khalid International Airport (RUH) and all Riyadh destinations."
                  }
        ]
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
        faqs: [
                  {
                            "question": "How long is the drive from Riyadh to NEOM?",
                            "answer": "The journey is approximately 1,500 km and takes 14â€“15 hours. We recommend an overnight rest stop for VIP passengers."
                  },
                  {
                            "question": "What vehicle is used for the Riyadh to NEOM transfer?",
                            "answer": "We exclusively use the GMC Yukon XL for this ultra-long-haul executive route."
                  },
                  {
                            "question": "Can I book a Riyadh to NEOM transfer for a corporate team?",
                            "answer": "Yes, we specialize in corporate and executive transfers to NEOM and can accommodate multiple vehicles for delegations."
                  }
        ]
    },
    {
        slug: "dammam-airport-to-makkah",
        title: "Dammam Airport (DMM) to Makkah Taxi | Direct Long-Distance Transfer",
        description: "Private taxi from King Fahd International Airport (DMM), Dammam to Makkah. Comfortable door-to-door service for Umrah pilgrims and families.",
        h1: "Dammam Airport to Makkah Taxi Transfer",
        distance: "1,250 km",
        duration: "12 - 13 hours",
        content: "Arriving at King Fahd International Airport (DMM) and heading directly to Makkah for Umrah? We provide dedicated private taxi transfers from Dammam Airport all the way to your hotel in Makkah â€” whether that's the Clock Tower, Ajyad, or Aziziyah area. Our experienced long-haul drivers ensure maximum comfort throughout the 12+ hour journey with modern, spacious vehicles. Avoid connecting flights and go straight to the Holy City from the moment you land. Stops for prayer, meals, and rest are accommodated at your request.",
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
        content: "Starting your Umrah or Ziyarat journey from Dammam Airport and heading to the City of the Prophet? We offer a premium direct taxi service from King Fahd International Airport (DMM) straight to your hotel in Madinah, near Masjid Nabawi. Our long-distance fleet consists of spacious, well-maintained vehicles that ensure a comfortable overnight or daytime journey. No transfers, no waiting â€” just direct, private, door-to-door service.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Hyundai Staria", price: "Get Quote", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: [
            { question: "Is this a direct route from Dammam to Madinah?", answer: "Yes, this is a fully private, non-stop transfer. There are no shared passengers or detours â€” only prayer and meal breaks you request." },
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
            { question: "Can you pick me up from my Madinah hotel?", answer: "Yes, we pick up directly from your hotel lobby in Madinah â€” including hotels near Masjid Nabawi â€” at your schedule time." },
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
        content: "Don't miss your flight from Jeddah! Book our reliable taxi from anywhere in Taif â€” including Al-Hawiya, Al-Shafa, or central Taif â€” directly to King Abdulaziz International Airport. We recommend departing at least 4-5 hours before your flight to account for mountain traffic. Our vehicles are punctual, clean, and equipped for family-sized luggage.",
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
        content: "Returning to Riyadh from the Prophet's City of Madinah? We provide a seamless direct private taxi covering the 870km route. Your driver will pick you up from any Madinah hotel â€” from those near Masjid Nabawi to those in the Al-Wurood district â€” and drop you off at any Riyadh destination, including KAFD, Olaya, or RUH Airport.",
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
        content: "Embarking on Umrah from Bahrain? We offer the most convenient travel option â€” a private door-to-door taxi from anywhere in Bahrain, crossing the King Fahd Causeway, straight to your Makkah hotel. No airline connections, no airport queues. Our experienced cross-border drivers make the journey safe and spiritually focused.",
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
        content: "Heading from the cool heights of Taif to Makkah for Umrah or Hajj? Our experienced mountain-route drivers provide a safe and smooth 1.5-hour transfer from any location in Taif â€” including Al-Shafa, Al-Hawiya, or central Taif â€” directly to your Makkah hotel. 24/7 availability for your Miqat-timing needs.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Can I book a Taif to Makkah taxi at midnight?", answer: "Yes, we operate 24/7 and can accommodate late-night or early-morning pickups from Taif to Makkah for Fajr Umrah." },
            { question: "Is Taif a Miqat point?", answer: "Yes, Al-Sa'adiyah (near Taif) is one of the designated Miqat points for pilgrims entering Ihram from the eastern direction." }
        ]
    },
    {
        slug: "riyadh-to-jeddah",
        title: "Riyadh to Jeddah Taxi | Private Car Service â€” 950km Direct Transfer",
        description: "Book a private taxi from Riyadh to Jeddah. 950km direct transfer via King Abdulaziz Highway â€” fixed rate, no stops, door-to-door. Ideal for business travel and families. 24/7 WhatsApp booking.",
        h1: "Riyadh to Jeddah Private Taxi â€” 950km Direct Transfer",
        distance: "950 km",
        duration: "9â€“10 hours",
        content: "The Riyadh to Jeddah corridor is one of Saudi Arabia's most-travelled intercity routes, connecting the Kingdom's capital to its commercial and cultural gateway on the Red Sea. Our private taxi covers the full 950km via King Abdulaziz Highway (Route 40), passing through the Taif highlands, with a comfortable rest and prayer stop at a well-lit service station mid-route. Whether you are travelling for business to Jeddah's Al-Hamdaniyah district, catching a flight from King Abdulaziz International Airport (KAIA), or visiting family in North Jeddah, we offer a door-to-door, fixed-rate service that eliminates the hassle of stopovers and schedule uncertainty. Choose from a premium Camry for solo or couple travel, a GMC Yukon XL for families with heavy luggage, or a Toyota Staria for groups. All vehicles are 2022â€“2025 model year, fully air-conditioned, and equipped for long-distance comfort. Departure from anywhere in Riyadh â€” King Abdullah Financial District (KAFD), Olaya, Diplomatic Quarter, or directly from King Khalid International Airport (KKIA/RUH) for connecting passengers.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does the Riyadh to Jeddah drive take by private taxi?", answer: "The Riyadh to Jeddah journey is approximately 950km and takes 9â€“10 hours via King Abdulaziz Highway (Route 40). We include one scheduled rest and prayer stop. Departure time and traffic conditions can affect the arrival window by 30â€“60 minutes." },
            { question: "What is the price of a taxi from Riyadh to Jeddah?", answer: "We provide fixed-rate quotes agreed in full before you travel â€” the price on WhatsApp is the exact amount you pay. Fares depend on the vehicle type (Camry, Yukon XL, or Hiace) and your specific pickup and drop-off addresses. Message us on WhatsApp for an instant quote." },
            { question: "Can I book a taxi from Riyadh Airport (KKIA) to Jeddah Airport (KAIA)?", answer: "Yes. We provide airport-to-airport transfers from King Khalid International Airport in Riyadh directly to King Abdulaziz International Airport in Jeddah. This is popular for passengers with connecting journeys or whose schedules don't align with flight times. Provide both flight numbers and we coordinate both pickups." },
            { question: "Which highway connects Riyadh to Jeddah?", answer: "The primary route is King Abdulaziz Highway (Route 40), which runs west from Riyadh to Jeddah via the Taif bypass. The total distance is approximately 950km. Our drivers are experienced on this long-haul corridor and know the best rest stop locations." },
            { question: "Is the Riyadh to Jeddah road safe at night?", answer: "Yes. Route 40 is a modern dual carriageway with lighting and petrol station facilities throughout. Our drivers are specifically selected for long-distance intercity routes and are not permitted to drive more than their regulated hours without a rest stop." },
            { question: "Can I book a Riyadh to Jeddah taxi for a large group?", answer: "Yes. For groups of 8 or more, we can arrange multiple vehicles or a Toyota Hiace (11 seats). We can coordinate convoy-style travel so the group arrives together. Contact us on WhatsApp for multi-vehicle group quotes." },
            { question: "Is there a faster way from Riyadh to Jeddah than a taxi?", answer: "Riyadh to Jeddah flights take approximately 1.5 hours, but when you add airport check-in (2hrs early), baggage claim, and transfers to/from both airports, the total door-to-door time for short-notice travel is often comparable to a private taxi â€” especially for families. A taxi also offers no luggage restrictions and no schedule dependency." }
        ]
    },
    {
        slug: "riyadh-to-madinah",
        title: "Riyadh to Madinah Taxi | Private Umrah & Ziyarat Transfer â€” 840km",
        description: "Book a trusted private taxi from Riyadh to Madinah (Al Madinah Al Munawwarah). 840km door-to-door transfer for Umrah pilgrims and Ziyarat visits â€” fixed rate, 24/7, WhatsApp booking. No pre-payment.",
        h1: "Riyadh to Madinah Private Taxi â€” Umrah & Ziyarat Transfer",
        distance: "840 km",
        duration: "8â€“9 hours",
        content: "Travelling from Riyadh to the Prophet's City â€” Al Madinah Al Munawwarah â€” is a journey of faith and intention. Our private taxi covers the 840km route via the Riyadhâ€“Madinah Expressway (Route 60/65), passing through the central Najd plateau and into the Hejaz region. This is the preferred mode of travel for families and Umrah groups from Riyadh who want to arrive directly at their Madinah hotel â€” whether in the Central Area (Al Markaziyah), near Masjid Al-Nabawi, or in the outer residential zones â€” without transfers or shared schedules. We include scheduled prayer and rest stops on this long-distance route, and all drivers are trained for overnight intercity travel. Departures available from any Riyadh district: King Abdullah Financial District (KAFD), Olaya, Diplomatic Quarter, King Khalid International Airport (RUH), or any hotel. Drop-off at all Madinah hotels, Prince Mohammad Bin Abdulaziz Airport (MED), or the Haramain High Speed Railway Station.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Riyadh to Madinah by private taxi?", answer: "The Riyadh to Madinah journey is approximately 840km and takes 8â€“9 hours via Route 65. We include scheduled prayer and rest stops. For overnight travel (recommended to avoid daytime heat), we recommend departing after Isha prayer and arriving in Madinah before Fajr." },
            { question: "Can I book a Riyadh to Madinah taxi for Umrah?", answer: "Yes â€” this is one of our most requested routes for Riyadh-based pilgrims performing Umrah. We provide direct, door-to-door transfer from your Riyadh address to your Madinah hotel. Families with children, elderly pilgrims, and those with heavy luggage find a private taxi far more comfortable than the bus or train alternatives." },
            { question: "What is the cheapest way to travel from Riyadh to Madinah?", answer: "The SAPTCO bus is the cheapest option at approximately SAR 100â€“150 per person. The Haramain Train from Riyadh's King Abdulaziz Station connects via Qassim but is not a direct Riyadhâ€“Madinah service. A private taxi is priced per vehicle, making it cost-effective for families of 4â€“7 when split per head." },
            { question: "Can I be dropped off directly at Masjid Al-Nabawi in Madinah?", answer: "Our drivers drop you at the closest permitted vehicle access point to your specific hotel in Madinah. If your hotel is within the Markaziyah zone near the Prophet's Mosque, you will be within a very short walk of the mosque entrance." },
            { question: "Is there a Riyadh to Madinah train?", answer: "There is no direct train from Riyadh to Madinah currently. The Haramain High Speed Rail connects Madinah to Makkah, Jeddah, and KAEC â€” but not directly to Riyadh. A private taxi remains the most direct, flexible door-to-door option from Riyadh." },
            { question: "Can you pick me up from King Khalid Airport (KKIA) and drop me at Madinah Airport (MED)?", answer: "Yes. We provide airport-to-airport transfers between KKIA (RUH) in Riyadh and Prince Mohammad Bin Abdulaziz Airport (MED) in Madinah. We track both flights and coordinate departure timing accordingly." },
            { question: "What time should I depart Riyadh to reach Madinah before Fajr?", answer: "For Fajr timing in Madinah, we recommend departing Riyadh no later than 10pm. A 9-hour drive with one rest stop brings you to Madinah around 7am. For overnight Umrah departures, many pilgrims choose to leave after Isha prayer (approx. 9:30â€“10pm) to arrive fresh for morning prayers at Masjid Al-Nabawi." }
        ]
    },
    {
        slug: "riyadh-to-khobar",
        title: "Riyadh to Al Khobar Taxi | Private Transfer to Eastern Province â€” 400km",
        description: "Book a private taxi from Riyadh to Al Khobar, Saudi Arabia. 400km direct transfer via Route 40 â€” Aramco HQ, Al Khobar Corniche, King Fahad Causeway access. Fixed rate, 24/7, WhatsApp booking.",
        h1: "Riyadh to Al Khobar Private Taxi â€” Eastern Province Transfer",
        distance: "400 km",
        duration: "4â€“4.5 hours",
        content: "The Riyadh to Al Khobar route is one of the Kingdom's primary business corridors, connecting the capital to the heart of the Eastern Province â€” home to Saudi Aramco, the King Fahad Causeway gateway to Bahrain, the Al Khobar Corniche, and the twin city of Dammam. Our private taxi covers the full 400km via King Abdulaziz Highway (Route 40), with no stops required. This route is popular among business travellers commuting between Riyadh's KAFD or King Fahad Road and Al Khobar's Aramco compound, Half Moon Bay, Prince Turki Road, and Thuqbah district. For families, the Al Khobar area is the Eastern Province's most vibrant commercial hub â€” and a private taxi with no luggage limits is far more comfortable than the SAPTCO bus. We can also extend any Al Khobar transfer to Dammam, Dhahran, Bahrain (King Fahad Causeway), Jubail, or Ras Tanura at no extra coordination cost â€” simply message us your final destination.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Riyadh to Al Khobar?", answer: "The Riyadh to Al Khobar drive is approximately 400km and takes 4â€“4.5 hours via King Abdulaziz Highway (Route 40) under normal traffic conditions. No rest stop is required on this route, though we can make a brief fuel stop if needed." },
            { question: "What is the price of a Riyadh to Al Khobar taxi?", answer: "We provide fixed-rate quotes via WhatsApp before you travel. The fare depends on your vehicle choice (Camry or Yukon XL) and exact pickup/drop-off addresses in Riyadh and Al Khobar. Message us for an instant quote â€” the number you receive is the exact amount you pay." },
            { question: "Can I book a Riyadh to Al Khobar taxi for Aramco business travel?", answer: "Yes. We have significant experience serving corporate clients travelling between Riyadh and the Saudi Aramco compound in Dhahran/Al Khobar. We provide meet & greet at KKIA, professional drivers, and can arrange corporate account billing for regular routes." },
            { question: "Is Al Khobar the same as Dammam?", answer: "Al Khobar and Dammam are separate cities located approximately 20km apart in the Eastern Province. We serve both â€” if your final destination is Dammam, Dhahran, or anywhere in the Eastern Province including Jubail, we can route your transfer accordingly. Simply mention your exact address when booking." },
            { question: "Can the Riyadh to Al Khobar taxi continue to Bahrain?", answer: "Yes. Many passengers request a Riyadhâ€“Al Khobarâ€“Bahrain transfer in a single booking. We can take you across the King Fahad Causeway to Manama, Bahrain. Cross-border passengers need a valid Saudi exit permit and Bahraini entry visa. We handle the crossing paperwork coordination." },
            { question: "Is there an alternative to a taxi for Riyadh to Al Khobar?", answer: "Saudi Railways (SAR) operates a Riyadhâ€“Dammam train that stops near Al Khobar (Hadiqa Station). The journey takes 3.5 hours but requires transit to/from both stations. A private taxi provides door-to-door service with no station transfers, no luggage restrictions, and 24/7 departure flexibility â€” making it the preferred option for business travel and families." }
        ]
    }
,
    {
        slug: "khobar-to-riyadh",
        title: "Al Khobar to Riyadh Taxi | Private Transfer Eastern Province to Capital — 400km",
        description: "Book a private Al Khobar to Riyadh taxi. Fixed rate, door-to-door, 4–4.5 hours via Route 40. Corporate Aramco transfers, families and groups.",
        h1: "Al Khobar to Riyadh Private Taxi — 400km Direct Transfer",
        distance: "400 km",
        duration: "4–4.5 hours",
        content: "The Al Khobar to Riyadh route is the Eastern Province's primary business corridor. Covering 400km via King Abdulaziz Highway (Route 40), this is one of Saudi Arabia's most-travelled intercity roads — used daily by Aramco executives, government officials, and families commuting between the Eastern Province and the capital. Our private taxi offers fixed-rate, door-to-door service with no surge pricing and no station transfers. Vehicle options range from Toyota Camry for business solo travel to GMC Yukon XL for families and groups.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Al Khobar to Riyadh?", answer: "The Al Khobar to Riyadh drive is approximately 400km and takes 4–4.5 hours via Route 40 under normal conditions. No rest stop is required, though we can stop for fuel or prayers on request." },
            { question: "What is the taxi fare from Al Khobar to Riyadh?", answer: "We provide a fixed fare via WhatsApp before you travel — no surprises. The rate depends on your vehicle type and exact pickup/drop-off addresses. Message us for an instant quote." },
            { question: "Can I get a taxi from Al Khobar to KKIA Airport in Riyadh?", answer: "Yes. We regularly transfer passengers from Al Khobar and Dhahran directly to King Khalid International Airport (KKIA). We track your flight and ensure you arrive with ample check-in time." },
            { question: "Does the Al Khobar to Riyadh taxi go through Dammam?", answer: "Depending on your exact pickup address, the route may pass near Dammam on Route 40. We can make a pickup stop in Dammam if needed — just mention it when booking." },
            { question: "Can I book a return trip Al Khobar–Riyadh–Al Khobar?", answer: "Yes. Many clients book a round trip. We can schedule the return leg for the same day or a different date — both are confirmed with a fixed rate at booking time." }
        ]
    },
    {
        slug: "taif-to-riyadh",
        title: "Taif to Riyadh Taxi | Private Transfer from City of Roses — 900km",
        description: "Book a private Taif to Riyadh taxi. Fixed rate, door-to-door, approximately 8.5–9 hours via Route 15 and Route 65 through Makkah bypass.",
        h1: "Taif to Riyadh Private Taxi — 900km Direct Transfer",
        distance: "900 km",
        duration: "8.5–9 hours",
        content: "The Taif to Riyadh corridor connects the cool mountain city of Taif — renowned for its roses, honey, and temperate climate — with the Saudi capital. The 900km journey travels via Route 15 descending from the Hejaz Highlands, bypassing Makkah, then joining Route 65 across the Najd plateau to Riyadh. This is a popular route for Taif residents travelling to Riyadh for business, government appointments, medical treatment at King Faisal Specialist Hospital, or onward international travel from KKIA.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Taif to Riyadh?", answer: "The Taif to Riyadh drive is approximately 900km and takes 8.5–9 hours. One scheduled prayer and rest stop is included. Your driver departs at your preferred time — no fixed schedule." },
            { question: "What is the best route from Taif to Riyadh?", answer: "The standard route goes from Taif via Route 15 northwest toward Makkah, then joins Route 65 heading northeast across the Najd plateau to Riyadh. Non-Muslim passengers use the designated bypass around the Makkah restricted zone." },
            { question: "Is there a direct bus from Taif to Riyadh?", answer: "SAPTCO operates a Taif–Riyadh service but it takes significantly longer with multiple stops and luggage restrictions. A private taxi provides door-to-door service, departure at your chosen time, and is more practical for families and groups." },
            { question: "Can the Taif to Riyadh taxi stop at a Miqat?", answer: "Yes. Passengers wishing to enter Ihram can request a stop at Qarn Al Manazil (Miqat of Taif) en route. This adds approximately 20–30 minutes. Please mention this when booking." },
            { question: "Can I travel Taif to Riyadh overnight?", answer: "Yes. Many passengers prefer an overnight departure to arrive in Riyadh in the early morning. Your driver is experienced with night travel on Saudi highways. One rest stop at a fuel station is standard on overnight trips." }
        ]
    },
    {
        slug: "abha-to-riyadh",
        title: "Abha to Riyadh Taxi | Private Transfer from Asir to Capital — 850km",
        description: "Book a private Abha to Riyadh taxi. Fixed rate, door-to-door, approximately 8–9 hours via Route 15 and Route 10 through the Asir highlands.",
        h1: "Abha to Riyadh Private Taxi — 850km Direct Transfer",
        distance: "850 km",
        duration: "8–9 hours",
        content: "Abha, the capital of the Asir Region and one of Saudi Arabia's top domestic tourism destinations, sits at 2,200m elevation in the Asir Mountains. The Abha to Riyadh route covers approximately 850km via Route 15 north through the highlands before descending to the Najd plateau. This journey is one of Saudi Arabia's most scenic road routes — passing terraced mountains, ancient villages, and the Asir National Park. The drive is popular with Asiri families travelling to Riyadh for business, education, and medical appointments.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Abha to Riyadh?", answer: "The Abha to Riyadh drive is approximately 850km and takes 8–9 hours via Route 15 and Route 10. One scheduled rest stop is included. The Asir mountain section requires careful driving and an experienced driver." },
            { question: "Is the Abha to Riyadh road safe?", answer: "Yes. Route 15 through the Asir highlands is a well-maintained dual carriageway. The mountain section between Abha and Khamis Mushait requires an experienced driver familiar with the gradient and curves — all our Asir-route drivers are." },
            { question: "What is the cheapest way to get from Abha to Riyadh?", answer: "Saudi Airlines and flynas both operate Abha–Riyadh flights in under 2 hours. A private taxi is better for groups of 4+ splitting the cost, families with significant luggage, or travellers with flexible departure times and no airport transfer hassle." },
            { question: "Can we make a stop in Khamis Mushait on the way to Riyadh?", answer: "Yes. Khamis Mushait is immediately adjacent to Abha. If you need a pickup or stop in Khamis Mushait, simply mention it when booking — no extra charge for the short diversion." },
            { question: "Can I book Abha to Riyadh and return?", answer: "Yes. Round trips are available at a discounted combined rate. The return can be scheduled for any date — we hold your driver preference." }
        ]
    },
    {
        slug: "riyadh-to-yanbu",
        title: "Riyadh to Yanbu Taxi | Private Transfer to Red Sea Industrial City — 1100km",
        description: "Book a private Riyadh to Yanbu taxi. Fixed rate, door-to-door, approximately 10–11 hours. Serving Aramco, SABIC, and petrochemical industry workers.",
        h1: "Riyadh to Yanbu Private Taxi — 1100km Red Sea Transfer",
        distance: "1100 km",
        duration: "10–11 hours",
        content: "Yanbu Al Bahr (Yanbu) is Saudi Arabia's second-largest industrial city on the Red Sea coast — home to major Aramco and SABIC refineries, NEOM's southern gateway, and a growing tourism scene at Yanbu Corniche. The 1,100km Riyadh to Yanbu route travels via Route 65 northwest through Al Majmaah and Al Qassim region before turning west through the Hejaz to the coast. This corridor serves petrochemical industry workers, government contractors, and increasingly, Red Sea tourism travellers.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Riyadh to Yanbu?", answer: "The Riyadh to Yanbu drive is approximately 1,100km and takes 10–11 hours via Route 65. Two scheduled prayer and rest stops are included — typically at Al Majmaah and near Al Hanakiyah." },
            { question: "Is there a direct flight from Riyadh to Yanbu?", answer: "Yes, Saudia and flynas operate Riyadh–Yanbu flights (approx. 1.5 hours). A private taxi is better for groups, families with luggage, petrochemical workers with equipment, or travellers needing door-to-compound delivery." },
            { question: "Can the Riyadh to Yanbu taxi go to the Aramco/SABIC industrial complex?", answer: "Yes. We have extensive experience delivering workers to the Yanbu Industrial City (YIC) and Royal Commission compounds. Provide your exact gate/compound address when booking." },
            { question: "Can we stop in Madinah on the way from Riyadh to Yanbu?", answer: "The standard route does not pass through Madinah (which is further north). A Madinah diversion adds approximately 1.5 hours but is possible for Ziyarat. Please mention this when booking." },
            { question: "What vehicles are available for Riyadh to Yanbu?", answer: "For 10+ hour routes we strongly recommend GMC Yukon XL or Toyota Staria for comfort. Toyota Camry is available for solo or duo travel on a budget. For groups of 8–11, Toyota Hiace is available." }
        ]
    },
    {
        slug: "riyadh-to-khamis-mushait",
        title: "Riyadh to Khamis Mushait Taxi | Private Transfer to Asir Region — 850km",
        description: "Book a private Riyadh to Khamis Mushait taxi. Fixed rate, door-to-door, approximately 8–9 hours. Serving Asir tourism, King Khalid Airport, and military city.",
        h1: "Riyadh to Khamis Mushait Private Taxi — 850km Asir Transfer",
        distance: "850 km",
        duration: "8–9 hours",
        content: "Khamis Mushait is the Eastern gateway to the Asir Region and home to King Khalid Airport (AHB) — the main aviation hub for Abha and the surrounding mountains. The 850km Riyadh to Khamis Mushait route covers the Najd plateau via Route 10 southwest before ascending into the Asir highlands. This corridor is used by Asiri families returning home, tourists heading to Abha and the Asir National Park, and government/military personnel serving at Khamis Mushait Military City.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Riyadh to Khamis Mushait?", answer: "Riyadh to Khamis Mushait is approximately 850km and takes 8–9 hours via Route 10. One scheduled rest stop is included. The final section ascending into the Asir mountains is scenic but requires an experienced driver." },
            { question: "What is the fare for a Riyadh to Khamis Mushait taxi?", answer: "We quote a fixed rate via WhatsApp — no meter, no surge pricing. The fare depends on your vehicle type and pickup/drop-off addresses. Message us for an instant quote." },
            { question: "Can the taxi drop me at King Khalid Airport (AHB) near Khamis Mushait?", answer: "Yes. King Khalid Airport is approximately 20km from Khamis Mushait city centre. We drop directly at departures — provide your flight time and we ensure you arrive with ample check-in time." },
            { question: "Is Khamis Mushait the same as Abha?", answer: "Khamis Mushait and Abha are twin cities approximately 25km apart in the Asir Region. King Khalid Airport serves both cities. We serve both — if your destination is Abha, the transfer continues at no additional routing charge." },
            { question: "Are there rest stops on the Riyadh to Khamis Mushait route?", answer: "Yes. We schedule one stop at a fuel station and rest area approximately halfway through the journey. Prayer stops are accommodated on request throughout the route." }
        ]
    },
    {
        slug: "riyadh-to-tabuk",
        title: "Riyadh to Tabuk Taxi | Private Transfer to NEOM Gateway — 1350km",
        description: "Book a private Riyadh to Tabuk taxi. Fixed rate, door-to-door, approximately 12–13 hours. NEOM gateway, AlUla, and northwest Saudi Arabia access.",
        h1: "Riyadh to Tabuk Private Taxi — 1350km Northwest Transfer",
        distance: "1350 km",
        duration: "12–13 hours",
        content: "Tabuk is the gateway to northwest Saudi Arabia — connecting NEOM, AlUla, Hegra (Mada'in Saleh), and the Red Sea coastline. The 1,350km Riyadh to Tabuk journey crosses the entire width of the Arabian Peninsula, travelling via Route 65 through Al Qassim, then Route 80 northwest through Hail and the Nefud Desert. This long-haul route serves NEOM project workers, AlUla tourism travellers, government contractors, and increasing numbers of adventure tourists exploring Saudi Arabia's northwest.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Riyadh to Tabuk?", answer: "Riyadh to Tabuk is approximately 1,350km and takes 12–13 hours. Two scheduled rest stops are included. An overnight departure from Riyadh (after Isha) arrives in Tabuk by early morning." },
            { question: "Is there a train from Riyadh to Tabuk?", answer: "There is no passenger rail service between Riyadh and Tabuk as of 2026. A private taxi is the most direct door-to-door option. Flights operate Riyadh–Tabuk in approximately 2 hours but require airport transfers at both ends." },
            { question: "Can the taxi take me from Riyadh to NEOM via Tabuk?", answer: "Yes. From Tabuk we can continue to NEOM Bay Airport (NEOM), The Line construction site, or Sharma. NEOM leg adds approximately 2.5–3 hours from Tabuk city centre. Book as a single journey." },
            { question: "Can we stop at AlUla on the way from Riyadh to Tabuk?", answer: "AlUla is approximately 300km south of Tabuk via Route 375. A Riyadh–AlUla–Tabuk routing is possible and adds approximately 3 hours. Many travellers use this to visit Hegra (Mada'in Saleh) en route — mention it when booking." },
            { question: "What vehicle is best for Riyadh to Tabuk?", answer: "For 12+ hour routes we recommend GMC Yukon XL or Toyota Staria for passenger comfort. Toyota Hiace for groups of 8–11. Minimum two rest stops are included on all Tabuk transfers." }
        ]
    }
,
    {
        slug: "riyadh-to-alula",
        title: "Riyadh to AlUla Taxi | Private Car to Saudi Arabia's #1 Tourism Destination — 1100km",
        description: "Book a private Riyadh to AlUla taxi. Fixed rate, door-to-door, approximately 10–11 hours via Route 65 and Route 375. Hegra, Old Town, and Maraya Concert Hall transfers.",
        h1: "Riyadh to AlUla Private Taxi — 1100km Direct Transfer",
        distance: "1100 km",
        duration: "10–11 hours",
        content: "AlUla is Saudi Arabia's most significant tourism destination under Vision 2030 — home to Hegra (Mada'in Saleh), Saudi Arabia's first UNESCO World Heritage Site, the old walled city, Dadan, and the iconic Maraya Concert Hall. The 1,100km journey from Riyadh travels northwest via Route 65 through Al Majmaah and Qassim, then joins Route 375 westward through the Hejaz highlands before descending into the AlUla Valley. The landscape transforms dramatically along this route — from the flat Najd plateau to the dramatic sandstone canyons and rock formations of AlUla. This is one of Saudi Arabia's most scenic road journeys. Our private taxi provides door-to-hotel delivery at AlUla Old Town, Hegra, or your resort, with two scheduled rest stops and a comfortable, modern vehicle.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Riyadh to AlUla?", answer: "Riyadh to AlUla is approximately 1,100km and takes 10–11 hours via Route 65 and Route 375. Two scheduled rest stops are included. An overnight departure from Riyadh arrives in AlUla in the early morning." },
            { question: "Is there a direct flight from Riyadh to AlUla?", answer: "Saudia and flynas operate Riyadh–AlUla (RJAO) flights in approximately 1.5 hours. A private taxi is better for groups, families with luggage, and travellers wanting to experience the dramatic landscape between Riyadh and AlUla — one of Saudi Arabia's most scenic drives." },
            { question: "Can the taxi drop me at Hegra (Mada'in Saleh) directly?", answer: "Yes. Hegra is approximately 20km north of AlUla city. We deliver you directly to the Hegra visitor centre, your resort near the site, or AlUla Old Town — door to door." },
            { question: "What is the best time to travel Riyadh to AlUla?", answer: "AlUla's desert climate means cooler months (October–March) are ideal. Overnight departure from Riyadh after Isha (10pm) delivers you to AlUla around 8–9am — morning light in the valley is spectacular and ideal for photography at Hegra." },
            { question: "Can we stop at Madinah on the way from Riyadh to AlUla?", answer: "Madinah is approximately 200km east of the standard Riyadh–AlUla route. A Madinah detour for Ziyarat adds approximately 2.5 hours. Many travellers combine a Riyadh–Madinah–AlUla multi-day journey — we can route accordingly." },
            { question: "What is the Maraya Concert Hall and can I get a taxi there?", answer: "Maraya is the world's largest mirrored building, located in the Ashar Valley near AlUla — famous for international concerts and the MDL Beast festival. We deliver directly to the venue entrance. Pre-book your return pickup for after the event." }
        ]
    }
,
    {
        slug: "bahrain-to-riyadh",
        title: "Bahrain to Riyadh Taxi | Private Transfer via King Fahad Causeway — 450km",
        description: "Book a private Bahrain to Riyadh taxi. Fixed rate, door-to-door, approximately 4–4.5 hours via King Fahad Causeway and Route 40. Manama, Muharraq, and all Bahrain areas served.",
        h1: "Bahrain to Riyadh Private Taxi — 450km via King Fahad Causeway",
        distance: "450 km",
        duration: "4–4.5 hours",
        content: "The Bahrain to Riyadh route crosses the King Fahad Causeway — the 25km bridge connecting Bahrain to Saudi Arabia's Eastern Province — then continues 400km west via Route 40 to Riyadh. This is a popular business corridor connecting Manama's financial district with KAFD, the Saudi government ministries, and Aramco's Dhahran compound. Our private taxi provides door-to-door transfer with pre-arranged border crossing coordination. Passengers must hold valid Saudi entry visas and Bahrain exit clearance.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Bahrain to Riyadh?", answer: "Bahrain to Riyadh is approximately 450km and takes 4–4.5 hours via the King Fahad Causeway and Route 40. Border crossing time at King Fahad Causeway varies — allow 30–60 minutes extra during peak weekends (Thursday–Friday evenings)." },
            { question: "Do I need a visa to travel from Bahrain to Saudi Arabia by taxi?", answer: "Yes. You need a valid Saudi entry visa (or eVisa) and your passport must be valid for at least 6 months. Saudi nationals and GCC residents have streamlined crossing procedures. Your driver will guide you through the Causeway immigration process." },
            { question: "What is the King Fahad Causeway and how long does it take to cross?", answer: "The King Fahad Causeway is a 25km bridge-and-causeway complex linking Bahrain to Saudi Arabia's Eastern Province. Border crossing (exit Bahrain, enter Saudi) takes 20–60 minutes depending on traffic. It is significantly busier on Thursday and Friday evenings." },
            { question: "Can the taxi pick me up from Manama city centre?", answer: "Yes. We pick up from your hotel, office, or residence in Manama, Muharraq, Juffair, or anywhere in Bahrain and deliver directly to your Riyadh destination." }
        ]
    },
    {
        slug: "yanbu-to-riyadh",
        title: "Yanbu to Riyadh Taxi | Private Transfer from Red Sea Industrial City — 1100km",
        description: "Book a private Yanbu to Riyadh taxi. Fixed rate, door-to-door, approximately 10–11 hours. Serving Aramco workers, SABIC staff, and Red Sea travellers.",
        h1: "Yanbu to Riyadh Private Taxi — 1100km Direct Transfer",
        distance: "1100 km",
        duration: "10–11 hours",
        content: "Yanbu to Riyadh covers 1,100km via Route 15 east through the Hejaz highlands before joining Route 65 southeast across the Najd plateau to Riyadh. This corridor serves petrochemical workers returning from Yanbu Industrial City rotations, business travellers, and families. Our private taxi provides fixed-rate, door-to-door transfer with two scheduled rest stops.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Yanbu to Riyadh?", answer: "Yanbu to Riyadh is approximately 1,100km and takes 10–11 hours via Route 15 and Route 65. Two scheduled prayer and rest stops are included." },
            { question: "Can I get a taxi from Yanbu Industrial City directly to Riyadh?", answer: "Yes. We pick up from Yanbu Industrial City (YIC) compounds, port areas, and hotels in central Yanbu and deliver door-to-door in Riyadh. Provide your exact compound or building address when booking." },
            { question: "Is there a flight from Yanbu to Riyadh?", answer: "Yes, Saudia and flynas operate Yanbu–Riyadh flights in approximately 1.5 hours. A private taxi is preferred by groups, families, workers with equipment, and those needing door-to-door delivery without airport transfers at both ends." }
        ]
    },
    {
        slug: "khamis-mushait-to-riyadh",
        title: "Khamis Mushait to Riyadh Taxi | Private Transfer from Asir Region — 850km",
        description: "Book a private Khamis Mushait to Riyadh taxi. Fixed rate, door-to-door, approximately 8–9 hours. King Khalid Airport pickups, Asir families, and military city transfers.",
        h1: "Khamis Mushait to Riyadh Private Taxi — 850km Direct Transfer",
        distance: "850 km",
        duration: "8–9 hours",
        content: "Khamis Mushait to Riyadh covers 850km via Route 10 northeast across the Asir highlands and Najd plateau to the capital. This is one of Saudi Arabia's most scenic intercity routes — descending from the cool Asir mountains through dramatic escarpment landscapes before reaching the flat Najd. The journey serves Asiri families travelling to Riyadh for government appointments, medical treatment, education, and KKIA international connections.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Khamis Mushait to Riyadh?", answer: "Khamis Mushait to Riyadh is approximately 850km and takes 8–9 hours via Route 10. One scheduled rest stop is included. The Asir highlands section is scenic but requires an experienced driver familiar with the mountain roads." },
            { question: "Can I get a taxi from King Khalid Airport (AHB) near Khamis Mushait to Riyadh?", answer: "Yes. King Khalid Airport is approximately 20km from Khamis Mushait. We meet you at arrivals and provide direct transfer to Riyadh — approximately 8–9 hours. Book in advance with your flight number for flight-tracked pickup." },
            { question: "Is Khamis Mushait the same as Abha?", answer: "Khamis Mushait and Abha are twin cities approximately 25km apart. If your origin is Abha, we pick up from there — no additional charge for the short diversion. Both cities share King Khalid Airport (AHB)." }
        ]
    },
    {
        slug: "tabuk-to-riyadh",
        title: "Tabuk to Riyadh Taxi | Private Transfer from Northwest Saudi Arabia — 1350km",
        description: "Book a private Tabuk to Riyadh taxi. Fixed rate, door-to-door, approximately 12–13 hours. NEOM workers, AlUla visitors, and northwest Saudi Arabia transfers.",
        h1: "Tabuk to Riyadh Private Taxi — 1350km Northwest Transfer",
        distance: "1350 km",
        duration: "12–13 hours",
        content: "Tabuk to Riyadh covers 1,350km via Route 80 southeast through the Nefud Desert and Hail region, then Route 65 south to Riyadh. This long-haul corridor serves NEOM project workers completing rotations, AlUla tourists returning to Riyadh, government contractors, and Tabuk residents travelling to the capital for medical or government appointments. Two scheduled rest stops are included.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from Tabuk to Riyadh?", answer: "Tabuk to Riyadh is approximately 1,350km and takes 12–13 hours via Route 80 and Route 65. Two scheduled rest stops are included. An overnight departure from Tabuk arrives in Riyadh in the early morning." },
            { question: "Is there a direct flight from Tabuk to Riyadh?", answer: "Yes, Saudia and flynas operate Tabuk–Riyadh flights in approximately 2 hours. A private taxi is preferred by NEOM workers with equipment, groups splitting costs, and travellers needing door-to-door delivery." },
            { question: "Can the Tabuk to Riyadh taxi pick up from NEOM?", answer: "Yes. If your origin is NEOM Bay, The Line site, or Sharma, we pick up from there and route via Tabuk to Riyadh. NEOM to Riyadh adds approximately 2.5–3 hours to the Tabuk leg. Book as a single journey." }
        ]
    },
    {
        slug: "alula-to-riyadh",
        title: "AlUla to Riyadh Taxi | Private Transfer from UNESCO Heritage to Capital — 1100km",
        description: "Book a private AlUla to Riyadh taxi. Fixed rate, door-to-door, approximately 10–11 hours via Route 375 and Route 65. Hotel pickups at Hegra, Old Town, and all AlUla resorts.",
        h1: "AlUla to Riyadh Private Taxi — 1100km Direct Transfer",
        distance: "1100 km",
        duration: "10–11 hours",
        content: "AlUla to Riyadh covers 1,100km via Route 375 east through the Hejaz highlands and Nefud Desert edge, then Route 65 southeast to Riyadh. This is one of Saudi Arabia's most dramatic road journeys — leaving AlUla's sandstone canyon valley, crossing vast desert plateaus, and arriving in the Saudi capital. The journey serves tourists completing their AlUla visit, NEOM-adjacent workers, and government contractors.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does it take to drive from AlUla to Riyadh?", answer: "AlUla to Riyadh is approximately 1,100km and takes 10–11 hours via Route 375 and Route 65. Two scheduled rest stops are included. An overnight departure from AlUla arrives in Riyadh in the early morning." },
            { question: "Can I fly back from AlUla to Riyadh instead of taking a taxi?", answer: "Yes. AlUla has a regional airport (RJAO) with Saudia and flynas flights to Riyadh in approximately 1.5 hours. Many visitors drive one-way with us to AlUla and fly back — or vice versa. We handle either direction." },
            { question: "Can the taxi pick me up at my resort or Hegra directly?", answer: "Yes. We pick up from all AlUla hotels, Hegra visitor area, Old Town, and Dadan. Provide your exact resort or accommodation name when booking." }
        ]
    },
    {
        slug: "neom-city-to-riyadh",
        title: "NEOM to Riyadh Taxi | Private Transfer from The Line & NEOM Bay — 1600km",
        description: "Book a private NEOM to Riyadh taxi. Fixed rate, door-to-door, approximately 14–15 hours. NEOM Bay Airport pickups, The Line site, and Sharma transfers.",
        h1: "NEOM to Riyadh Private Taxi — 1600km Direct Transfer",
        distance: "1600 km",
        duration: "14–15 hours",
        content: "NEOM to Riyadh is one of Saudi Arabia's longest intercity taxi routes — covering approximately 1,600km from the NEOM construction zone in Tabuk Province southeast through the Hejaz and Najd to Riyadh. This corridor serves NEOM project workers completing rotations, contractors, and government personnel. The route travels via Tabuk, then Route 80 through the Nefud, then Route 65 south to Riyadh. An overnight departure is strongly recommended.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How far is NEOM from Riyadh?", answer: "NEOM is approximately 1,600km from Riyadh — one of the longest intercity routes in Saudi Arabia. By private taxi the journey takes 14–15 hours with two scheduled rest stops. Most NEOM workers fly via NEOM Bay Airport (NUM) or Tabuk Airport." },
            { question: "Is there a flight from NEOM to Riyadh?", answer: "NEOM Bay Airport (NUM) operates connections to Riyadh via Saudia and flynas. The flight is approximately 2.5 hours. A private taxi is used by workers with significant equipment, groups, or those needing door-to-compound delivery at NEOM sites." },
            { question: "Can the taxi pick up from The Line site or NEOM Bay?", answer: "Yes. We pick up from NEOM Bay, The Line construction zone, Sharma, and Gayal. Provide your site address or accommodation and we coordinate the pickup." }
        ]
    },
    {
        slug: "al-ahsa-to-riyadh",
        title: "Al-Ahsa to Riyadh Taxi | Private Transfer from Eastern Province — 350km",
        description: "Book a private Al-Ahsa to Riyadh taxi. Fixed rate, door-to-door, approximately 3.5–4 hours. Al Hofuf, Mubarraz, and all Al-Ahsa districts served.",
        h1: "Al-Ahsa to Riyadh Private Taxi — 350km Direct Transfer",
        distance: "350 km",
        duration: "3.5–4 hours",
        content: "Al-Ahsa (Al-Hasa) is Saudi Arabia's largest governorate by area and home to the historic oases of Al Hofuf and Mubarraz. The 350km journey to Riyadh via Route 10 west is one of the Eastern Province's busiest intercity corridors — used by Al-Ahsa residents travelling to the capital for government services, medical treatment at Riyadh hospitals, education, and business. No rest stop is required for this relatively short journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Al-Ahsa to Riyadh?", answer: "Al-Ahsa (Al Hofuf) to Riyadh is approximately 350km via Route 10 and takes 3.5–4 hours under normal traffic conditions. No scheduled rest stop is required." },
            { question: "Can the taxi pick up from Al Hofuf city centre?", answer: "Yes. We pick up from Al Hofuf, Mubarraz, and all Al-Ahsa districts. Provide your exact address and we deliver directly to your Riyadh destination." },
            { question: "Is there a direct bus from Al-Ahsa to Riyadh?", answer: "SAPTCO operates an Al-Ahsa–Riyadh intercity bus service. A private taxi provides door-to-door flexibility, no fixed schedule, and is competitive for groups of 3–4 passengers sharing the cost." }
        ]
    },
    {
        slug: "jeddah-to-taif",
        title: "Jeddah to Taif Taxi | City Center to Mountain Transfer — 170km",
        description: "Private taxi from Jeddah city center to Taif. Escape the coastal heat for the cool Taif highlands. Fixed rate, approximately 2.5 hours, all Jeddah areas served.",
        h1: "Jeddah to Taif Taxi — 170km Mountain Transfer",
        distance: "170 km",
        duration: "2.5 hours",
        content: "Escape the intense Jeddah summer heat by booking a private taxi to the cool mountain city of Taif. The 170km journey from central Jeddah to Taif takes approximately 2.5 hours via the mountain highway, climbing from sea level to 1,800m elevation. Popular with Jeddah families heading to Al Hada resorts, Shafa highlands, and Taif rose farms. This route is distinct from Jeddah Airport to Taif — we pick up from any Jeddah address including Al Hamra, Al Rawdah, Al Zahra, Corniche hotels, and all residential districts.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Jeddah to Taif?", answer: "Jeddah to Taif city center is approximately 170km and takes 2.5 hours via the mountain highway. Al Hada mountain resort takes an additional 30 minutes, and Shafa highlands adds approximately 45 minutes to the total." },
            { question: "What is the best vehicle for Jeddah to Taif with a family?", answer: "The GMC Yukon XL is ideal for families of up to 7 with luggage — spacious, powerful enough for the mountain climb, and air-conditioned. For larger families of 8–11, the Toyota Hiace minibus is the best option." },
            { question: "Do you pick up from all Jeddah areas?", answer: "Yes. We pick up from all Jeddah areas including Al Hamra, Al Rawdah, Al Zahra, North Jeddah, South Jeddah, Al Corniche, Obhur, and all residential districts and hotels." },
            { question: "Can I book a Jeddah to Taif round trip?", answer: "Yes. Round-trip packages with a discounted return are available. WhatsApp us with your Jeddah address, Taif accommodation, and travel dates for a combined fixed quote." }
        ]
    },
    {
        slug: "taif-to-khobar",
        title: "Taif to Al Khobar Taxi | Eastern Province Transfer — 900km",
        description: "Private taxi from Taif to Al Khobar. Door-to-door long-haul transfer via Route 65 and Route 40. Fixed rate, approximately 9 hours, one rest stop.",
        h1: "Taif to Al Khobar Private Taxi — 900km Eastern Province",
        distance: "900 km",
        duration: "9 hours",
        content: "Taif to Al Khobar is one of the longer intercity routes in Saudi Arabia, connecting the Hejaz highland city with the Aramco hub and Eastern Province coastal strip. The journey follows Route 15 north to the Taif–Riyadh highway (Route 65), then Route 40 east to Al Khobar — approximately 9 hours with one scheduled prayer and rest stop. Popular with Eastern Province residents who holiday in Taif or with expats connecting to Aramco Dhahran Compound after pilgrimage travel. We also serve Dammam, Dhahran, and Jubail on this corridor.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the Taif to Al Khobar drive?", answer: "Taif to Al Khobar is approximately 900km and takes 9 hours with one scheduled rest stop. The route goes via the Taif–Riyadh highway then east on Route 40 to the Eastern Province." },
            { question: "Can the taxi continue to Dammam or Dhahran from Khobar?", answer: "Yes. Al Khobar, Dammam, and Dhahran are all on the same Eastern Province corridor — approximately 30 minutes apart. We deliver to your specific address anywhere in the Eastern Province." },
            { question: "Is this a good route for Aramco employees?", answer: "Yes. We regularly serve Aramco compound residents travelling to/from Taif and Makkah for Umrah or holidays. We can arrange pickup from the Aramco residential compound gate." }
        ]
    },
    {
        slug: "khobar-to-taif",
        title: "Al Khobar to Taif Taxi | Eastern Province to Highland Transfer — 900km",
        description: "Private taxi from Al Khobar to Taif. Door-to-door intercity transfer via Route 40 and Route 65. Fixed rate, approximately 9 hours.",
        h1: "Al Khobar to Taif Private Taxi — 900km Direct Transfer",
        distance: "900 km",
        duration: "9 hours",
        content: "Travel from Al Khobar and the Eastern Province to the cool mountain city of Taif. Popular for Eastern Province families escaping the summer humidity for Taif's highland resorts, and for Aramco employees connecting to the Hejaz for Umrah. The 900km journey follows Route 40 west to Route 65, then Route 15 south to Taif. One prayer and rest stop included. We also pick up from Dammam, Dhahran, Jubail, and all Eastern Province locations.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the Al Khobar to Taif drive?", answer: "Al Khobar to Taif is approximately 900km and takes 9 hours with one rest stop. The route goes west on Route 40 then south on Route 65 toward Taif." },
            { question: "Can I be dropped at Al Hada or Shafa resort?", answer: "Yes. We deliver to any Taif location including Al Hada mountain resort, Shafa highlands, Al Hawiya, and all Taif city hotels. Provide your exact accommodation when booking." },
            { question: "Do you serve Dammam and Jubail for this route?", answer: "Yes. We pick up from Al Khobar, Dammam, Dhahran Aramco compound, and Jubail for the Taif transfer. All Eastern Province locations are served." }
        ]
    },
    {
        slug: "taif-to-yanbu",
        title: "Taif to Yanbu Taxi | Red Sea Industrial City Transfer — 350km",
        description: "Private taxi from Taif to Yanbu. Direct transfer via Route 15 north and coastal highway. Fixed rate, approximately 4 hours.",
        h1: "Taif to Yanbu Private Taxi — 350km Direct Transfer",
        distance: "350 km",
        duration: "4 hours",
        content: "Taif to Yanbu connects the Hejaz highland city with the Red Sea industrial port and petrochemical hub. The 350km journey takes approximately 4 hours via Route 15 north toward Madinah, then west on the coastal highway to Yanbu. Used by Yanbu refinery and petrochemical plant workers who holiday in Taif or visit family in the Makkah Region, and by Taif residents with connections to the Red Sea coast.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the Taif to Yanbu drive?", answer: "Taif to Yanbu is approximately 350km and takes 4 hours. No rest stop is typically required, though we can arrange a prayer stop on request." },
            { question: "Which route does the Taif to Yanbu taxi use?", answer: "We use Route 15 north from Taif toward Madinah, then branch west on the Red Sea coastal highway toward Yanbu. This avoids passing through any restricted zones." },
            { question: "Do you serve Yanbu Industrial City and Yanbu Al Bahr?", answer: "Yes. We serve both Yanbu Al Sinaiyah (industrial city) and Yanbu Al Bahr (coastal residential area). Provide your compound gate or address when booking." }
        ]
    },
    {
        slug: "taif-to-tabuk",
        title: "Taif to Tabuk Taxi | Northern Saudi Transfer — 1,100km",
        description: "Private taxi from Taif to Tabuk. Long-haul intercity transfer via Route 15 and Route 65 north. Fixed rate, approximately 11 hours, two rest stops.",
        h1: "Taif to Tabuk Private Taxi — 1,100km Long-Haul Transfer",
        distance: "1,100 km",
        duration: "11 hours",
        content: "Taif to Tabuk is a long-haul intercity route connecting the Hejaz highland city with the northwest Saudi gateway to NEOM, AlUla, and the Jordan border. The 1,100km journey follows Route 15 north toward Madinah then continues north on Route 65 (Hijaz Road) to Tabuk — approximately 11 hours with two scheduled prayer and rest stops. Popular for NEOM and Tabuk project workers travelling from the Makkah Region, and for travelers connecting to Jordan via Haql and Aqaba.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the Taif to Tabuk drive?", answer: "Taif to Tabuk is approximately 1,100km via Route 15 and Route 65 north. The journey takes around 11 hours with two scheduled rest stops." },
            { question: "Can I continue to NEOM or Haql from Tabuk?", answer: "Yes. Tabuk is the regional hub for NEOM (130km northwest), Haql (230km northwest for the Jordan crossing), and AlUla (350km south). We can arrange a door-to-destination transfer from Taif to any northwest Saudi location." },
            { question: "Is an overnight stop needed for Taif to Tabuk?", answer: "An 11-hour journey can be completed in a single day with two rest stops if you depart early morning (5–6am). Alternatively, we can arrange an overnight stop in Madinah and continue to Tabuk the next morning." }
        ]
    },
    {
        slug: "taif-to-abha",
        title: "Taif to Abha Taxi | Mountain Highway Transfer — 470km",
        description: "Private taxi from Taif to Abha. Scenic mountain highway Route 15 south through the Hejaz and Asir highlands. Fixed rate, door-to-door, approximately 5 hours.",
        h1: "Taif to Abha Private Taxi — 470km Mountain Highway",
        distance: "470 km",
        duration: "5 hours",
        content: "The Taif to Abha corridor follows Route 15 south through the dramatic Hejaz and Asir mountain ranges — one of the most scenic intercity drives in Saudi Arabia. From the rose city of Taif at 1,800m elevation, the road descends and climbs through mountain passes before reaching Abha, the capital of Asir Province at 2,270m. This is a popular route for families connecting between the two highland resort cities, and for visitors combining Taif's rose season with Abha's cultural festivals. One scheduled prayer stop is included. Allow extra time during summer peak season when the mountain road attracts high traffic.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Taif to Abha?", answer: "Taif to Abha is approximately 470km via Route 15 south and takes around 5 hours. The mountain highway is well-maintained but involves winding sections — our drivers are experienced on this route." },
            { question: "Which route does the Taif to Abha taxi use?", answer: "We use Route 15 south (the Hejaz-Asir highland highway), passing through Al Baha and continuing south to Abha. This is the most direct and scenic mountain route connecting the two highland cities." },
            { question: "Can I stop in Al Baha on the way from Taif to Abha?", answer: "Yes. Al Baha is approximately 220km south of Taif — roughly halfway to Abha. We can include a stop in Al Baha for a meal or sightseeing. Inform us when booking and we will plan the schedule accordingly." },
            { question: "Do you pick up from Al Hada or Shafa for the Taif to Abha route?", answer: "Yes. We pick up from any Taif location including Al Hada mountain resort, Shafa, Al Hawiya, and all city center hotels." }
        ]
    },
    {
        slug: "taif-to-al-baha",
        title: "Taif to Al Baha Taxi | Mountain Transfer — 220km",
        description: "Private taxi from Taif to Al Baha. Scenic Route 15 mountain highway through the Hejaz highlands. Fixed rate, approximately 3 hours, all Taif districts served.",
        h1: "Taif to Al Baha Private Taxi — 220km Direct Transfer",
        distance: "220 km",
        duration: "3 hours",
        content: "Taif to Al Baha follows the spectacular Route 15 mountain highway south through the Hejaz highlands. Al Baha Province is famous for its cool climate, ancient stone villages, Al Shallal waterfall area, and Al Baha forests — making it a popular destination for Taif residents on extended mountain holidays. The 220km route takes approximately 3 hours and involves some of the most dramatic scenery in western Saudi Arabia. No rest stop is typically required for this duration, though we can arrange a mid-route prayer and coffee stop on request.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Taif to Al Baha?", answer: "Taif to Al Baha is approximately 220km via Route 15 and takes around 3 hours. The route follows the Hejaz mountain highway south with spectacular highland scenery." },
            { question: "Is the Taif to Al Baha road safe?", answer: "Yes. Route 15 from Taif to Al Baha is a well-maintained mountain highway. Our drivers are experienced with the mountain driving conditions and winding sections along this route." },
            { question: "Can I book a round trip from Taif to Al Baha?", answer: "Yes. We offer round-trip packages with driver waiting or a scheduled return time. WhatsApp us with your dates and we will arrange a discounted round-trip rate." },
            { question: "Do you serve all Al Baha areas and Baljurashi?", answer: "Yes. We deliver to Al Baha city, Baljurashi, Al Shallal, Al Namas, and all Al Baha Province destinations. Provide your specific address when booking." }
        ]
    },
    {
        slug: "al-baha-to-taif",
        title: "Al Baha to Taif Taxi | Mountain Transfer — 220km",
        description: "Private taxi from Al Baha to Taif. Scenic Route 15 mountain highway north through the Hejaz highlands. Fixed rate, approximately 3 hours.",
        h1: "Al Baha to Taif Private Taxi — 220km Direct Transfer",
        distance: "220 km",
        duration: "3 hours",
        content: "Travel from the lush Al Baha highlands north to Taif along the spectacular Route 15 mountain highway. Many visitors combine Al Baha's forest scenery and ancient stone villages with Taif's rose farms, Al Hada cable car, and mountain resorts. The 220km journey takes approximately 3 hours. We pick up from Al Baha city, Baljurashi, Al Shallal, Al Namas, and all Al Baha Province locations.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Al Baha to Taif?", answer: "Al Baha to Taif is approximately 220km via Route 15 north and takes around 3 hours. Our mountain-experienced drivers handle the highland highway sections safely." },
            { question: "Can I continue from Taif to Makkah or Jeddah Airport?", answer: "Yes. We offer door-to-door transfers from Al Baha through Taif and onward to Makkah (additional 1.5 hrs) or Jeddah Airport (additional 2.5 hrs from Taif). Book the full route for a single fixed price." },
            { question: "Do you pick up from all Al Baha locations?", answer: "Yes. We serve Al Baha city, Baljurashi, Al Shallal waterfall area, and all villages and resorts across Al Baha Province." }
        ]
    },
    {
        slug: "abha-to-taif",
        title: "Abha to Taif Taxi | Mountain Highway Transfer — 470km",
        description: "Private taxi from Abha to Taif. Scenic Route 15 north through the Asir and Hejaz highlands. Fixed rate, approximately 5 hours, all Abha areas served.",
        h1: "Abha to Taif Private Taxi — 470km Mountain Highway",
        distance: "470 km",
        duration: "5 hours",
        content: "Travel from Abha, Asir Province's highland capital, north to the rose city of Taif along Route 15. The reverse of one of Saudi Arabia's most scenic mountain highway routes, this 470km corridor connects two of the Kingdom's premier highland resort destinations. Popular for families and visitors connecting mountain holiday areas. One prayer stop is included. We pick up from all Abha areas including Abha city, Khamis Mushait, and Soudah.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the Abha to Taif drive?", answer: "Abha to Taif is approximately 470km via Route 15 north and takes around 5 hours with one prayer stop. Mountain conditions and seasonal traffic may add time during summer peak season." },
            { question: "Do you serve Khamis Mushait and Soudah?", answer: "Yes. We pick up from Abha city, Khamis Mushait, Soudah Peak area, and all Asir Province locations for the Taif transfer." },
            { question: "Can I continue from Taif to Makkah?", answer: "Yes. We offer seamless transfers from Abha through Taif and onward to Makkah for one fixed price. The total journey Abha to Makkah via Taif is approximately 6.5–7 hours." }
        ]
    },
    {
        slug: "madinah-to-taif",
        title: "Madinah to Taif Taxi | Direct Transfer Bypassing Makkah — 430km",
        description: "Private taxi from Madinah to Taif. Direct 4.5-hour transfer via Route 60/15 bypassing Makkah city. Fixed rate, door-to-door, all Taif districts served.",
        h1: "Madinah to Taif Private Taxi — 430km Direct Transfer",
        distance: "430 km",
        duration: "4.5 hours",
        content: "Travel from the Prophet's City of Madinah directly to the cool mountain resort city of Taif without passing through central Makkah. The 430km journey takes approximately 4.5 hours via Route 60 south to the Makkah bypass, then Route 15 east up into the Hejaz highlands to Taif. This is a popular route for pilgrims completing Ziyarat in Madinah who wish to visit Taif's rose farms, Al Hada cable car, and mountain resorts before connecting onward to Makkah or flying from Taif Regional Airport (TIF). We pick up from all Madinah hotels, including those near Masjid Al-Nabawi, Prince Mohammad Bin Abdulaziz Airport (MED), and the Haramain Train Station. Drop-off at all Taif locations including Al Hada, Shafa, Al Hawiya, and city center.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Taif?", answer: "Madinah to Taif is approximately 430km and takes around 4.5 hours by private taxi. The route uses the Makkah bypass so non-Muslim passengers and those without Makkah entry permission can travel directly without entering the restricted zone." },
            { question: "Does the Madinah to Taif taxi pass through Makkah?", answer: "No. Our route uses the designated Makkah bypass (Route 15 east), allowing passengers to travel from Madinah to Taif without passing through the Makkah restricted zone. Non-Muslim passengers can therefore complete this journey." },
            { question: "Can I book from Madinah Airport to Taif?", answer: "Yes. We provide pickups from Prince Mohammad Bin Abdulaziz Airport (MED) in Madinah for direct transfer to Taif. Provide your flight number and we will track your arrival and have a driver ready." },
            { question: "Can I continue from Taif to Makkah after arriving from Madinah?", answer: "Yes. We offer seamless door-to-door transfers from Madinah through Taif and onward to Makkah as a single booking. The Taif to Makkah leg adds approximately 1.5 hours. Contact us on WhatsApp for a combined route quote." },
            { question: "What vehicles are available for Madinah to Taif?", answer: "We offer Toyota Camry for individuals and couples, GMC Yukon XL for families with luggage, Toyota Staria for groups up to 7, and Toyota Hiace for groups of 8–11. All vehicles are modern, air-conditioned, and fully maintained." }
        ]
    },
    {
        slug: "yanbu-to-taif",
        title: "Yanbu to Taif Taxi | Red Sea to Highland Transfer — 350km",
        description: "Private taxi from Yanbu to Taif. Direct transfer via coastal highway and Route 15. Fixed rate, approximately 4 hours, Yanbu Industrial City and residential areas served.",
        h1: "Yanbu to Taif Private Taxi — 350km Direct Transfer",
        distance: "350 km",
        duration: "4 hours",
        content: "Travel from Yanbu — Saudi Arabia's Red Sea industrial port and petrochemical hub — east into the cool Hejaz highlands to Taif. The 350km route follows the Red Sea coastal highway east, then joins Route 15 southeast ascending into the mountains to Taif. Popular with Yanbu refinery and SABIC workers holidaying in Taif's mountain resorts, and with Taif residents working rotations at Yanbu Industrial City (YIC). We pick up from Yanbu Al Sinaiyah (industrial city), Yanbu Al Bahr (coastal residential), and Yanbu Airport (YNB). Drop-off at all Taif locations including Al Hada, Shafa, Al Hawiya, and city center.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Yanbu to Taif?", answer: "Yanbu to Taif is approximately 350km and takes around 4 hours. No rest stop is typically required for this duration, though we can arrange a prayer break on request." },
            { question: "Do you pick up from Yanbu Industrial City (YIC)?", answer: "Yes. We pick up from all Yanbu Industrial City compounds, port areas, and residential areas, as well as Yanbu Al Bahr and Yanbu Airport (YNB)." },
            { question: "Can I be dropped at Al Hada or Shafa resort from Yanbu?", answer: "Yes. We deliver to any Taif location including Al Hada mountain resort, Shafa highlands, Al Hawiya, Wadi Naaman rose farms, and all city center hotels. Provide your exact accommodation when booking." },
            { question: "Is there a direct road from Yanbu to Taif?", answer: "Yes. The route uses the Red Sea coastal highway east to Route 15, which climbs into the Hejaz highlands toward Taif. The ascent into the mountains is scenic and the roads are well-maintained." }
        ]
    },
    {
        slug: "tabuk-to-taif",
        title: "Tabuk to Taif Taxi | Northwest Saudi to Hejaz Highlands — 1,100km",
        description: "Private taxi from Tabuk to Taif. Long-haul intercity transfer via Route 65 and Route 15 south. Fixed rate, approximately 11 hours, two rest stops.",
        h1: "Tabuk to Taif Private Taxi — 1,100km Long-Haul Transfer",
        distance: "1,100 km",
        duration: "11 hours",
        content: "Travel from the northwest Saudi city of Tabuk — gateway to NEOM, AlUla, and the Jordan border — south to the Hejaz highland city of Taif. The 1,100km route follows Route 65 (Hijaz Road) south through the Nefud Desert toward Madinah, then continues south on Route 15 through the highlands to Taif — approximately 11 hours with two scheduled prayer and rest stops. This corridor is used by NEOM and Tabuk project workers connecting to the Makkah Region for Umrah, and by Taif residents travelling north for work assignments or Jordan border crossings. We pick up from Tabuk city, Prince Sultan Airport (TUU), and all NEOM-area accommodations.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Tabuk to Taif?", answer: "Tabuk to Taif is approximately 1,100km via Route 65 south and Route 15. The journey takes around 11 hours with two scheduled rest stops. An early morning departure from Tabuk arrives in Taif by evening." },
            { question: "Can I stop in Madinah on the way from Tabuk to Taif?", answer: "Yes. Madinah is approximately mid-route between Tabuk and Taif. We can plan a Ziyarat stop in Madinah — typically 2–3 hours — before continuing south to Taif. Mention this when booking for an adjusted itinerary." },
            { question: "Do you pick up from NEOM for a Taif transfer?", answer: "Yes. If your origin is NEOM Bay, The Line site, or Sharma, we pick up from there and route via Tabuk south to Taif. NEOM to Taif adds approximately 2.5–3 hours to the Tabuk leg." },
            { question: "Is an overnight stop needed for Tabuk to Taif?", answer: "An 11-hour journey can be completed in a single day with two rest stops if departing early morning (5–6am). Alternatively, we can plan an overnight stop in Madinah and continue to Taif the next morning — ideal for pilgrims wanting to pray at Masjid Al-Nabawi." }
        ]
    },
    {
        slug: "taif-to-jeddah",
        title: "Taif to Jeddah Taxi | Highland to Red Sea City Transfer — 170km",
        description: "Private taxi from Taif to Jeddah city. Scenic mountain descent to the Red Sea coast. Fixed rate, approximately 2.5 hours, all Taif districts and Jeddah areas served.",
        h1: "Taif to Jeddah Taxi — 170km City Transfer",
        distance: "170 km",
        duration: "2.5 hours",
        content: "Travel from the cool Hejaz highlands of Taif down to the vibrant Red Sea city of Jeddah. The 170km journey descends approximately 1,800m from Taif's mountain plateau to sea level in Jeddah — a scenic drive taking around 2.5 hours. Popular with Taif families heading to Jeddah for shopping, Al Balad sightseeing, Corniche dining, or to catch a domestic flight. This route is distinct from the Taif to Jeddah Airport transfer — we drop off at any Jeddah address including Al Hamra, Al Rawdah, Al Zahra, the Corniche, North Jeddah, and all residential and hotel districts. We pick up from all Taif areas including Al Hada, Shafa, Al Hawiya, Wadi Naaman, and city center.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Taif to Jeddah city?", answer: "Taif to Jeddah city center is approximately 170km and takes 2.5 hours via the mountain highway. The descent from Taif's highlands to Jeddah's coast is one of the most scenic drives in the Hejaz region." },
            { question: "What is the difference between Taif to Jeddah city and Taif to Jeddah Airport?", answer: "The Taif to Jeddah city transfer drops you at any Jeddah address — hotel, residential, Corniche, or mall. The Taif to Jeddah Airport (KAIA) transfer is specifically for flight departures. If you are catching a flight, book the airport route; for sightseeing or shopping in Jeddah, book this city transfer." },
            { question: "Do you pick up from Al Hada and Shafa for the Jeddah city transfer?", answer: "Yes. We pick up from all Taif areas including Al Hada mountain resort, Shafa highlands, Al Hawiya, and all Taif city center hotels. Simply provide your pickup location when booking." },
            { question: "Can I book a return Taif–Jeddah–Taif round trip?", answer: "Yes. We offer round-trip bookings with a discounted combined rate. WhatsApp us with your Taif address, Jeddah destination, and travel dates for a fixed round-trip quote." },
            { question: "Do you drop off at Al Balad (Jeddah Old Town) and the Corniche?", answer: "Yes. We deliver to all Jeddah areas including Al Balad (Historic Jeddah), the Corniche, Al Hamra, Al Rawdah, Al Zahra, Obhur, and North Jeddah. Provide your exact address when booking." }
        ]
    },
    {
        slug: "jeddah-to-abha",
        title: "Jeddah to Abha Taxi | Red Sea to Asir Mountains Transfer — 550km",
        description: "Private taxi from Jeddah to Abha, capital of Asir Province. Scenic Hejaz to Asir highlands transfer — 550km, approximately 5.5 hours. Fixed rate, all Jeddah and Abha areas.",
        h1: "Jeddah to Abha Taxi — 550km Highland Transfer",
        distance: "550 km",
        duration: "5.5 hours",
        content: "Travel from Jeddah's Red Sea coast deep into the Asir highlands to Abha — Saudi Arabia's highland garden city sitting at 2,200m above sea level. The 550km journey follows Route 15 south through Lith, Al Qunfudhah, and the dramatic Asir escarpment before arriving in Abha. Abha is one of Saudi Arabia's most visited domestic tourism destinations, known for its cool climate, Al Soudah cable car, Habala village, Asir National Park, and vibrant weekend markets. A popular route for Jeddah families seeking a highland escape during the summer months. We pick up from all Jeddah districts including KAIA airport, Al Hamra, Al Rawdah, North Jeddah, and the Corniche. We deliver to all Abha areas including city center, Green Mountain (Jabal Al Akhdar), Al Soudah, Khamis Mushait, and all Asir tourism sites.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Jeddah to Abha?", answer: "Jeddah to Abha is approximately 550km and takes 5–5.5 hours via Route 15 south. The route passes through Al Qunfudhah and climbs dramatically up the Asir escarpment into the highlands. Scenery is spectacular on the final mountain ascent section." },
            { question: "What is there to do in Abha?", answer: "Abha is Saudi Arabia's premier highland tourism destination. Key attractions include Al Soudah Cable Car, Habala (the hanging village), Asir National Park, Green Mountain viewpoint, Rijal Almaa heritage village, and weekend markets. The cool summer climate (18–25°C vs 40°C in Jeddah) is the main draw for Saudi families." },
            { question: "Can I book Jeddah to Abha and then continue to Al Baha?", answer: "Yes. We can plan a multi-city itinerary — Jeddah to Al Baha (midway) with a stop, then continue to Abha, or reverse. WhatsApp us for a multi-leg itinerary with a combined fixed rate." },
            { question: "Is the Jeddah to Abha route scenic?", answer: "Yes. The Asir escarpment section — approximately the last 80km approaching Abha — is one of the most dramatic mountain roads in Saudi Arabia. The road climbs from near sea level to 2,200m through terraced hillsides, mist, and mountain villages." },
            { question: "Do you serve Khamis Mushait near Abha?", answer: "Yes. Khamis Mushait is just 30km from Abha and is the larger commercial city in the Asir Region. We drop off at all Khamis Mushait locations including hotels, hospitals, and residential areas." }
        ]
    },
    {
        slug: "abha-to-jeddah",
        title: "Abha to Jeddah Taxi | Asir Mountains to Red Sea City Transfer — 550km",
        description: "Private taxi from Abha to Jeddah. Asir highlands to the Red Sea coast — 550km, 5.5 hours. Pick up from all Abha areas, Khamis Mushait, and Asir tourism sites.",
        h1: "Abha to Jeddah Taxi — 550km Asir to Hejaz Transfer",
        distance: "550 km",
        duration: "5.5 hours",
        content: "Travel from the cool Asir highlands of Abha back to the Red Sea city of Jeddah — descending from 2,200m down through the dramatic Asir escarpment to the Hejaz coast. The 550km route follows Route 15 north, passing through Al Qunfudhah and Lith before arriving in Jeddah approximately 5.5 hours later. We pick up from all Abha areas including Al Soudah, Green Mountain (Jabal Al Akhdar), city center, Khamis Mushait, and all Asir tourism sites. We deliver to all Jeddah addresses including KAIA airport, Al Hamra, Corniche, Al Balad, North Jeddah, and all hotels. Early morning departures from Abha arriving in Jeddah by early afternoon are recommended for KAIA flight connections.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Abha to Jeddah?", answer: "Abha to Jeddah is approximately 550km and takes 5–5.5 hours via Route 15 north. The descent from Abha's 2,200m altitude to Jeddah's sea-level coast includes spectacular mountain scenery on the Asir escarpment section." },
            { question: "What time should I leave Abha to catch a Jeddah flight?", answer: "For a KAIA Jeddah Airport departure, add your travel time (5.5 hours) plus at least 2 hours check-in buffer. For a 2pm flight, depart Abha by 6am. We can arrange very early morning pickups — just WhatsApp your flight details when booking." },
            { question: "Do you pick up from Al Soudah and Habala for the Jeddah transfer?", answer: "Yes. We pick up from Al Soudah Cable Car area, Habala village, Rijal Almaa, and all Asir tourism sites within reasonable distance of Abha. Mention your exact pickup location when booking for accurate scheduling." },
            { question: "Can you drop me at Jeddah Al Balad (Historic Jeddah) instead of a hotel?", answer: "Yes. We drop off at any Jeddah address — Al Balad old town, Corniche hotels, Al Hamra, North Jeddah compounds, or KAIA airport. Provide your exact destination when booking." }
        ]
    },
    {
        slug: "jeddah-to-yanbu",
        title: "Jeddah to Yanbu Taxi | Red Sea Coast North Transfer — 350km",
        description: "Private taxi from Jeddah to Yanbu city. 350km coastal highway, approximately 3.5 hours. Yanbu Al Bahr dive resort area and Yanbu industrial zone served. Fixed rate.",
        h1: "Jeddah to Yanbu Taxi — 350km Red Sea Coast Transfer",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Travel north from Jeddah along the Red Sea coast to Yanbu — the second-largest port city on Saudi Arabia's western coast. The 350km route follows the coastal highway northward, passing through Rabigh and KAEC before arriving in Yanbu approximately 3.5 hours later. Yanbu has two distinct areas: Yanbu Al Bahr (Old Town and dive resort area) and Yanbu Al Sinaiyah (the vast industrial port complex). We serve both. Popular with dive tourism visitors heading to Yanbu's world-class Red Sea reefs, and business travelers connecting to the industrial zone's factories and port operations. We pick up from all Jeddah districts.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Jeddah to Yanbu?", answer: "Jeddah to Yanbu city is approximately 350km along the coastal highway and takes 3–3.5 hours. The route passes through Rabigh and the King Abdullah Economic City (KAEC) area along the Red Sea coast." },
            { question: "What is Yanbu Al Bahr?", answer: "Yanbu Al Bahr is the historic old town and coastal resort area of Yanbu. It is known for its coral reefs, dive sites, corniche, and traditional architecture. It is approximately 10km from Yanbu Al Sinaiyah (the industrial port area)." },
            { question: "Is Yanbu a good diving destination?", answer: "Yes. Yanbu is often called the City of Flowers and Divers. Its Red Sea reefs are considered among the best beginner-to-intermediate dive sites on the Red Sea's northern coast, with warm water, good visibility, and abundant marine life." },
            { question: "Can I travel from Jeddah to Yanbu and then continue to Madinah?", answer: "Yes. Yanbu to Madinah is approximately 220km and 2.5 hours east via Route 60. We can plan a Jeddah → Yanbu → Madinah multi-leg transfer. WhatsApp us for a combined itinerary and fixed rate." }
        ]
    },
    {
        slug: "yanbu-to-jeddah",
        title: "Yanbu to Jeddah Taxi | Red Sea Coast South Transfer — 350km",
        description: "Private taxi from Yanbu to Jeddah. 350km Red Sea coastal highway, 3.5 hours. Pick up from Yanbu Al Bahr, Yanbu industrial zone, and all Yanbu addresses. KAIA airport connections.",
        h1: "Yanbu to Jeddah Taxi — 350km Coastal Transfer",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Travel south from Yanbu along the Red Sea coast to Jeddah — the 350km coastal highway takes approximately 3.5 hours via Rabigh and KAEC. Popular for divers and tourists finishing a Yanbu Red Sea itinerary and heading to Jeddah for KAIA flight departures or onward travel to Makkah and Madinah. We pick up from all Yanbu areas including Yanbu Al Bahr (dive resort area), Yanbu Al Sinaiyah (industrial port), and all residential areas. We deliver to all Jeddah addresses and KAIA airport.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Yanbu to Jeddah?", answer: "Yanbu to Jeddah is approximately 350km and takes 3–3.5 hours via the Red Sea coastal highway." },
            { question: "Can I connect from Yanbu to KAIA Jeddah Airport for a flight?", answer: "Yes. Allow 3.5 hours travel time plus 2 hours airport check-in buffer — depart Yanbu at least 5.5 hours before your flight departure time." },
            { question: "Do you pick up from the Yanbu dive resort area?", answer: "Yes. We pick up from all Yanbu Al Bahr addresses including dive centres, hotels, the waterfront Corniche, and residential areas. Also from Yanbu Al Sinaiyah and all industrial zone facilities." }
        ]
    },
    {
        slug: "madinah-to-jeddah",
        title: "Madinah to Jeddah Taxi | Holy City to Red Sea City Transfer — 400km",
        description: "Private taxi from Madinah to Jeddah. 400km via Hijrah Highway, approximately 4 hours. Hajj-permitted for Makkah connections. From all Madinah hotels and Masjid Al-Nabawi area.",
        h1: "Madinah to Jeddah Taxi — 400km Hijrah Highway Transfer",
        distance: "400 km",
        duration: "4 hours",
        content: "Travel from the blessed city of Madinah to Jeddah's Red Sea metropolis — 400km via the Hijrah Highway taking approximately 4 hours. This is one of the most-travelled pilgrimage routes in Saudi Arabia, used by pilgrims completing Ziyarat in Madinah before flying home from KAIA Jeddah Airport, and by Umrah visitors moving between the two holy cities via Jeddah. We pick up from all Madinah areas including Masjid Al-Nabawi hotels, Quba area, and all central Madinah addresses. We deliver to all Jeddah addresses including KAIA airport and all Jeddah hotels. If you require onward connection from Jeddah to Makkah, we have Hajj-permitted vehicles for the full Madinah → Jeddah → Makkah itinerary.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Jeddah?", answer: "Madinah to Jeddah is approximately 400km and takes 4 hours via the Hijrah Highway (Route 60 west). The route is a fast, well-maintained dual carriageway through the Hejaz desert." },
            { question: "Can I go from Madinah to Jeddah Airport (KAIA) for a flight?", answer: "Yes. We offer direct Madinah to KAIA airport transfers. Allow 4 hours travel time plus 2 hours airport buffer — depart Madinah at least 6 hours before your flight departure time." },
            { question: "Is the Haramain Express Train faster than a taxi from Madinah to Jeddah?", answer: "The Haramain High Speed Railway connects Madinah to KAIA Jeddah Airport in about 2 hours at much lower cost. For solo travellers, the train is generally preferable. For families with heavy luggage, elderly passengers, or groups requiring door-to-door service, a private taxi is more practical." },
            { question: "Do you offer Madinah to Jeddah to Makkah three-city transfer?", answer: "Yes. Madinah → Jeddah → Makkah is a popular Umrah itinerary. We offer the full three-city route with Hajj-permitted vehicles for Makkah entry. WhatsApp us for a combined fixed rate." }
        ]
    },
    {
        slug: "al-baha-to-jeddah",
        title: "Al Baha to Jeddah Taxi | Hejaz Highlands to Red Sea City — 390km",
        description: "Private taxi from Al Baha to Jeddah. Hejaz highlands to Red Sea coast — 390km, approximately 4.5 hours. All Al Baha districts and Jeddah areas served. Fixed rate.",
        h1: "Al Baha to Jeddah Taxi — 390km Highlands to Coast",
        distance: "390 km",
        duration: "4.5 hours",
        content: "Travel from Al Baha's cool Hejaz highlands down to Jeddah's Red Sea coast — a 390km journey descending from 1,700m altitude to sea level in approximately 4.5 hours. Al Baha Province is one of Saudi Arabia's most beautiful highland regions, known for ancient stone villages, pomegranate orchards, and forested mountains. The route follows Route 15 north through the Hejaz escarpment, passing through Al Qunfudhah before reaching Jeddah. We pick up from all Al Baha areas including Al Baha city, Al Aqiq, Baljurashi, Dhee Ayn (the marble village), and Al Sarat highlands. We deliver to all Jeddah addresses and KAIA airport.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Al Baha to Jeddah?", answer: "Al Baha to Jeddah is approximately 390km and takes 4–4.5 hours via Route 15 north through the Hejaz highlands. The route is scenic — especially the section descending from Al Baha's mountain plateau." },
            { question: "What is Al Baha famous for?", answer: "Al Baha Province is known for ancient stone villages (Dhee Ayn, Al Ain), pomegranate orchards, cedar forests on the Al Sarat plateau, and traditional Hejazi highland architecture. It is a popular domestic tourism destination for Saudi families escaping the summer heat." },
            { question: "Do you pick up from Dhee Ayn marble village for the Jeddah transfer?", answer: "Yes. We pick up from Dhee Ayn, Al Aqiq, Baljurashi, and all Al Baha Province locations. Provide your exact address when booking." }
        ]
    },
    {
        slug: "jeddah-to-al-baha",
        title: "Jeddah to Al Baha Taxi | Red Sea City to Hejaz Highlands — 390km",
        description: "Private taxi from Jeddah to Al Baha Province. 390km, approximately 4.5 hours via Route 15 south. Marble village Dhee Ayn, highland villages, and Baljurashi served. Fixed rate.",
        h1: "Jeddah to Al Baha Taxi — 390km Hejaz Highlands Transfer",
        distance: "390 km",
        duration: "4.5 hours",
        content: "Travel from Jeddah's Red Sea coast up into the cool Hejaz highlands of Al Baha Province — ascending from sea level to approximately 1,700m over 390km. The journey takes around 4.5 hours via Route 15 south through Lith and Al Qunfudhah before climbing the escarpment into Al Baha. A popular route for Jeddah families seeking a mountain summer break, visiting the famous marble village of Dhee Ayn, ancient stone settlements, Al Sarat forested highlands, or the vibrant markets of Al Aqiq and Baljurashi. We pick up from all Jeddah districts including KAIA airport, Al Hamra, North Jeddah, the Corniche, and all residential areas.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Jeddah to Al Baha?", answer: "Jeddah to Al Baha is approximately 390km and takes 4–4.5 hours via Route 15 south. The final 80km is a mountain ascent from the Red Sea coastal plain up to Al Baha's 1,700m highland plateau — particularly scenic with terraced agriculture and mountain villages." },
            { question: "What are the main tourist attractions in Al Baha?", answer: "Al Baha's key attractions include Dhee Ayn (the white marble village), ancient stone villages, Al Sarat Nature Reserve cedar forests, Al Aqiq market town, Baljurashi agricultural markets, and the Hejaz highlands scenery. Best visited October–April for cooler temperatures." },
            { question: "Can I combine Jeddah to Al Baha with a stop in Taif?", answer: "Taif and Al Baha are not on the same axis — Taif is east of Jeddah while Al Baha is south. A Jeddah → Taif → Al Baha multi-stop route is possible but adds distance. WhatsApp us with your itinerary for a custom combined route." }
        ]
    },
    {
        slug: "tabuk-to-jeddah",
        title: "Tabuk to Jeddah Taxi | Northwest Saudi to Red Sea City — 1,200km",
        description: "Long-distance private taxi from Tabuk to Jeddah. 1,200km, approximately 12 hours via Route 65 south and Hijrah Highway. Scheduled rest stops. Fixed rate.",
        h1: "Tabuk to Jeddah Taxi — 1,200km Northwest to Red Sea",
        distance: "1,200 km",
        duration: "12 hours",
        content: "Long-haul private taxi from Tabuk in northwest Saudi Arabia to the Red Sea city of Jeddah — a 1,200km journey taking approximately 12 hours with two scheduled rest stops. The route follows Route 65 south from Tabuk through Al Ula and Madinah before joining the Hijrah Highway west to Jeddah. Overnight or split-day options available. Popular for Tabuk residents and NEOM workers relocating to or from Jeddah, and pilgrims connecting from northwest Saudi Arabia to KAIA airport. We pick up from Tabuk city, Tabuk Airport, NEOM Bay, The Line site, and Al Ula. We deliver to all Jeddah addresses including KAIA airport.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Tabuk to Jeddah?", answer: "Tabuk to Jeddah is approximately 1,200km and takes 11–12 hours with two scheduled rest stops. An early morning departure from Tabuk (5–6am) arrives in Jeddah in the early evening." },
            { question: "Can I stop in Madinah on the way from Tabuk to Jeddah?", answer: "Yes. Madinah is approximately mid-route. We can plan a Madinah Ziyarat stop — typically 2–3 hours — before continuing to Jeddah. Mention this when booking." },
            { question: "Do you pick up from NEOM for a Jeddah transfer?", answer: "Yes. If your origin is NEOM Bay, The Line site, Sharma, or Gayal, we pick up from there and route via Tabuk south to Jeddah. Add approximately 1.5–2 hours to the journey time." },
            { question: "Is an overnight stop available on Tabuk to Jeddah?", answer: "Yes. We offer an overnight option with a stop in Madinah — departing Tabuk one day, staying overnight in Madinah, then continuing to Jeddah the following morning. Ideal for pilgrims wanting to pray at Masjid Al-Nabawi." }
        ]
    },
    {
        slug: "madinah-to-yanbu",
        title: "Madinah to Yanbu Taxi | Prophet's City to Red Sea Port — 220km",
        description: "Private taxi from Madinah to Yanbu city. 220km west via Route 60, approximately 2.5 hours. Yanbu Al Bahr dive resort and Yanbu industrial zone served. Fixed rate.",
        h1: "Madinah to Yanbu Taxi — 220km Red Sea Coast Transfer",
        distance: "220 km",
        duration: "2.5 hours",
        content: "Travel from Madinah west to Yanbu on the Red Sea coast — a 220km drive taking approximately 2.5 hours via Route 60 through the Hejaz desert. Yanbu is a popular destination for Madinah-based pilgrims and expats heading to the Red Sea for diving, seafood, or connecting to Jeddah via the coastal highway. The route passes through the Hejaz plains before descending to the Red Sea coastal corridor. We pick up from all Madinah hotels and deliver to all Yanbu areas: Yanbu Al Bahr (old town and dive resort area), Yanbu Al Sinaiyah (industrial port), and all residential addresses.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Yanbu?", answer: "Madinah to Yanbu is approximately 220km and takes 2–2.5 hours via Route 60 west through the Hejaz plain to the Red Sea coast." },
            { question: "What is Yanbu Al Bahr?", answer: "Yanbu Al Bahr is the historic old town and coastal resort area of Yanbu — known for world-class Red Sea diving, coral reefs, a waterfront corniche, and excellent seafood restaurants. It is distinct from the industrial port area (Yanbu Al Sinaiyah) 10km away." },
            { question: "Can I go from Madinah to Jeddah via Yanbu?", answer: "Yes, though it adds significant distance compared to the direct Madinah–Jeddah Hijrah Highway route. Madinah → Yanbu → Jeddah via the coastal highway is approximately 580km and 6 hours. The direct Madinah → Jeddah route via Route 60 is 415km and 4 hours. The coastal route is scenic but not recommended purely for speed." }
        ]
    },
    {
        slug: "tabuk-to-madinah",
        title: "Tabuk to Madinah Taxi | Northwest Saudi to the Prophet's City — 500km",
        description: "Private taxi from Tabuk to Madinah Al Munawwarah. 500km via Route 65 south, approximately 5 hours. Scheduled rest stop. Pick up from Tabuk city, Tabuk Airport, NEOM, and Al Ula.",
        h1: "Tabuk to Madinah Taxi — 500km Northwest to Holy City",
        distance: "500 km",
        duration: "5 hours",
        content: "Private taxi from Tabuk — capital of northwestern Saudi Arabia — south to Madinah Al Munawwarah, City of the Prophet ﷺ. The 500km journey follows Route 65 south through the Hejaz Mountains, passing through Al Ula and its famous Nabataean heritage before arriving in Madinah approximately 5 hours later. A popular route for Tabuk residents, NEOM workers, and northwest Saudi Arabia pilgrims heading to Madinah for Ziyarat and onward to Makkah for Umrah or Hajj. We pick up from Tabuk city, Tabuk Airport, NEOM Bay/The Line, and Al Ula (Hegra). We deliver to all Madinah hotels.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Tabuk to Madinah?", answer: "Tabuk to Madinah is approximately 500km and takes 5–5.5 hours via Route 65 south. One rest stop is included. Early morning departures from Tabuk arrive in Madinah by early afternoon." },
            { question: "Can I stop at Al Ula on the way from Tabuk to Madinah?", answer: "Yes. Al Ula (Hegra / Mada'in Saleh) is approximately midway between Tabuk and Madinah on Route 65. We can plan a heritage stop at Al Ula — Hegra Nabataean tombs, Dadan ancient city, or the Al Ula old town — before continuing south to Madinah. Allow an extra 2–3 hours for the Al Ula stop." },
            { question: "Do you pick up from NEOM for a Madinah transfer?", answer: "Yes. We pick up from NEOM Bay, The Line site, Sharma, and the broader Tabuk/northwest area. NEOM to Madinah is approximately 550–600km depending on your specific NEOM location — 6–6.5 hours." }
        ]
    },
    {
        slug: "madinah-to-alula",
        title: "Madinah to Al Ula Taxi | Holy City to Nabataean Heritage — 340km",
        description: "Private taxi from Madinah to Al Ula (Hegra / Mada'in Saleh). 340km north via Route 65, approximately 3.5 hours. Hegra UNESCO site, Dadan, and Al Ula old town served.",
        h1: "Madinah to Al Ula Taxi — 340km Nabataean Heritage Transfer",
        distance: "340 km",
        duration: "3.5 hours",
        content: "Travel from Madinah north to Al Ula — home of Hegra (Mada'in Saleh), Saudi Arabia's first UNESCO World Heritage Site, and one of the most extraordinary archaeological destinations in the world. The 340km journey follows Route 65 north through the Hejaz highland desert, arriving in Al Ula approximately 3.5 hours later. Al Ula has been significantly developed as a tourism destination under Vision 2030, with luxury desert camps, the Maraya Concert Hall (world's largest mirrored building), Hegra Nabataean tombs, and the ancient Dadan civilization site. Popular with pilgrims extending their Madinah visit with a heritage excursion before or after Umrah. We pick up from all Madinah hotels and deliver to all Al Ula locations including Hegra, the old town, and all Al Ula resorts and camps.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Al Ula?", answer: "Madinah to Al Ula is approximately 340km and takes 3–3.5 hours via Route 65 north. The road passes through the rocky Hejaz highland desert — an impressive landscape in its own right." },
            { question: "What is Hegra (Mada'in Saleh)?", answer: "Hegra — also called Mada'in Saleh — is a Nabataean city dating from the 1st century BCE, contemporaneous with Petra in Jordan. It features over 100 rock-carved monumental tombs in dramatic sandstone outcrops. It became Saudi Arabia's first UNESCO World Heritage Site in 2008 and is the centrepiece of Al Ula's tourism offering." },
            { question: "Can I do a day trip to Al Ula from Madinah?", answer: "A day trip is possible — departing Madinah at 6am, arriving Al Ula by 9:30am, with 4–5 hours for Hegra and the old town, returning to Madinah by 9pm. However, Al Ula is better experienced with at least one overnight stay. We can arrange the transfer both ways with flexible scheduling." },
            { question: "Is there a Haramain Train from Madinah to Al Ula?", answer: "No. The Haramain High Speed Railway only connects Madinah–KAIA Jeddah–Makkah. There is no rail link from Madinah to Al Ula. Private taxi is the primary transport option for this route." }
        ]
    },
    {
        slug: "madinah-to-abha",
        title: "Madinah to Abha Taxi | Prophet's City to Asir Highlands — 900km",
        description: "Long-distance private taxi from Madinah to Abha, Asir Province. 900km, approximately 9 hours via Taif or Jeddah connection. Scheduled rest stops. Fixed rate.",
        h1: "Madinah to Abha Taxi — 900km Hejaz to Asir Transfer",
        distance: "900 km",
        duration: "9 hours",
        content: "Long-haul private taxi from Madinah Al Munawwarah south to Abha — capital of Asir Province and Saudi Arabia's highland garden city. The 900km journey can be routed via Taif (through the Hejaz highlands) or via Jeddah (coastal highway). The Taif routing adds scenic mountain driving; the Jeddah routing is faster on highway. Either way, the journey takes approximately 9 hours with two scheduled rest stops. An early morning departure from Madinah (5–6am) arrives in Abha by early evening. We pick up from all Madinah hotels. We deliver to all Abha locations including city center, Green Mountain, Al Soudah, and Khamis Mushait.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Madinah to Abha?", answer: "Madinah to Abha is approximately 900km and takes 9–9.5 hours via the most direct route (through Taif or Jeddah). Two rest stops are included. An early morning departure is strongly recommended." },
            { question: "Can I stop in Taif on the way from Madinah to Abha?", answer: "Yes. Taif is on the Madinah–Abha route via the highland highway. A Taif stop — to visit Al Hada, Shubra Palace, or the Taif rose farm area — adds 2–3 hours to the journey. WhatsApp us for a multi-leg itinerary." },
            { question: "Is it possible to do Madinah to Abha in one day?", answer: "Yes, with an early departure (5am). With two rest stops and 9 hours of driving, you arrive in Abha by 3–4pm. For passengers preferring comfort over speed, an overnight stop in Taif or Jeddah is available." }
        ]
    },
    {
        slug: "abha-to-madinah",
        title: "Abha to Madinah Taxi | Asir Highlands to Prophet's City — 900km",
        description: "Long-distance private taxi from Abha to Madinah Al Munawwarah. 900km, approximately 9 hours. Pick up from all Abha areas and Khamis Mushait. Scheduled rest stops.",
        h1: "Abha to Madinah Taxi — 900km Asir to Hejaz Transfer",
        distance: "900 km",
        duration: "9 hours",
        content: "Travel from Abha's cool Asir highlands north to Madinah Al Munawwarah — the City of the Prophet ﷺ. The 900km journey can be routed via Taif (scenic highland route) or via Jeddah (coastal highway) and takes approximately 9 hours with two rest stops. A popular route for Asir residents making Umrah or Hajj pilgrimage via Madinah before proceeding to Makkah. We pick up from all Abha locations including city center, Green Mountain (Jabal Al Akhdar), Al Soudah, and Khamis Mushait. We deliver to all Madinah hotels. For onward connections to Makkah, we can arrange the full Abha → Madinah → Makkah three-city itinerary.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Abha to Madinah?", answer: "Abha to Madinah is approximately 900km and takes 9–9.5 hours with two scheduled rest stops. Departure at 5am from Abha arrives in Madinah by early-to-mid afternoon." },
            { question: "Can I go from Abha to Madinah and then to Makkah for Umrah?", answer: "Yes. Abha → Madinah (9 hrs) → Makkah (4.5 hrs) is a popular two-day Umrah itinerary — arriving in Madinah in the afternoon for Ziyarat and overnight stay, then continuing to Makkah the next morning. We can book the full multi-leg journey at a combined rate." },
            { question: "Do you pick up from Al Soudah for the Madinah transfer?", answer: "Yes. We pick up from Al Soudah resort area, Green Mountain (Jabal Al Akhdar), and all Abha Province tourism sites including Habala village and Rijal Almaa. Provide your exact pickup location when booking." }
        ]
    },
    {
        slug: "makkah-to-yanbu",
        title: "Makkah to Yanbu Taxi | Private Transfer — 350km, 3.5 Hours",
        description: "Private taxi from Makkah to Yanbu Al-Bahr. 350km along the Red Sea coastal highway, approximately 3.5 hours. Fixed rate, Hajj-permitted vehicles available.",
        h1: "Makkah to Yanbu Taxi — 350km Red Sea Coastal Transfer",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Travel from the Holy City of Makkah to Yanbu Al-Bahr — the historic Red Sea port city and Saudi Arabia's petrochemical hub — along the coastal highway north. The 350km journey passes through Jeddah and continues up the Red Sea coast, taking approximately 3.5 hours. Popular for Umrah pilgrims continuing travel northward after their pilgrimage, as well as business travellers connecting to Yanbu's industrial city. Fixed rates from any Makkah hotel.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Yanbu?", answer: "Makkah to Yanbu is approximately 350km and takes 3–3.5 hours via the coastal highway through Jeddah." },
            { question: "Does the Makkah to Yanbu route pass through Jeddah?", answer: "Yes — the route passes through or near Jeddah. If you need to make a stop in Jeddah city, we can arrange this at your request." }
        ]
    },
    {
        slug: "yanbu-to-makkah",
        title: "Yanbu to Makkah Taxi | Private Transfer — 350km, 3.5 Hours",
        description: "Private taxi from Yanbu Al-Bahr to Makkah Al-Mukarramah. 350km, approximately 3.5 hours. Direct hotel-to-hotel transfer. Fixed rate, WhatsApp booking.",
        h1: "Yanbu to Makkah Taxi — 350km Red Sea to Holy City Transfer",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Travel from Yanbu Al-Bahr on the Red Sea coast south to Makkah Al-Mukarramah. The 350km journey follows the Red Sea coastal highway south through Jeddah and into Makkah, taking approximately 3.5 hours. Popular with Umrah pilgrims from the Yanbu and Madinah regions and with travellers combining a Red Sea coast visit with an Umrah pilgrimage.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Yanbu Industrial City for the Makkah transfer?", answer: "Yes — we serve both Yanbu Al-Bahr (old town) and Yanbu Al-Sinaiyah (Industrial City) for Makkah transfers." },
            { question: "Which Miqat applies when travelling from Yanbu to Makkah for Umrah?", answer: "If departing from Yanbu southward directly toward Makkah, consult a scholar about the applicable Miqat for your specific route. We can plan the transfer accordingly and include any Miqat stop." }
        ]
    },
    {
        slug: "makkah-to-abha",
        title: "Makkah to Abha Taxi | Private Transfer — 500km, 5 Hours",
        description: "Private taxi from Makkah to Abha (Asir Region). 500km via Taif and the Asir highland road, approximately 5 hours. Scenic mountain route. Fixed rate.",
        h1: "Makkah to Abha Taxi — 500km Holy City to Asir Highlands Transfer",
        distance: "500 km",
        duration: "5 hours",
        content: "Travel from Makkah Al-Mukarramah to Abha — the mountain city capital of Asir Region at 2,200 metres altitude — via the spectacular highland road through Taif and Al Hada. The 500km journey climbs from the Tihama coastal plain through the Asir escarpment to Abha's cool highland altitude. Total journey time is approximately 5 hours. Popular with Hajj and Umrah pilgrims from Asir Region returning home after Makkah, and with Makkah-based travellers heading to Abha's famous tourism circuit.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Abha?", answer: "Makkah to Abha is approximately 500km and takes 4.5–5 hours via Taif and the Asir highland road." },
            { question: "Does the Makkah to Abha route pass through Taif?", answer: "Yes — the most scenic and direct route passes through Taif and then climbs the Asir escarpment via the mountain highway. A brief Taif stop can be included on request." }
        ]
    },
    {
        slug: "abha-to-makkah",
        title: "Abha to Makkah Taxi | Private Transfer — 500km, 5 Hours",
        description: "Private taxi from Abha (Asir Region) to Makkah Al-Mukarramah. 500km via Taif highland road, approximately 5 hours. Door-to-door service. Fixed rate.",
        h1: "Abha to Makkah Taxi — 500km Asir Highlands to Holy City",
        distance: "500 km",
        duration: "5 hours",
        content: "Travel from Abha — the highland capital of Asir Region — down the spectacular mountain escarpment through Taif to Makkah Al-Mukarramah. The 500km journey takes 5 hours via the scenic highland road. We pick up from all Abha locations including Green Mountain, Al Soudah, Khamis Mushait, and Rijal Almaa, and deliver to any Makkah hotel.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Can I go from Abha to Makkah and then to Madinah?", answer: "Yes. Abha → Makkah (5 hrs) for Umrah, then Makkah → Madinah (4.5 hrs) for Ziyarat is a classic Umrah itinerary. We can arrange both legs." },
            { question: "Do you pick up from Khamis Mushait?", answer: "Yes — Khamis Mushait is included in our Abha pickup zone at no extra charge. We also cover all Abha Province areas including Al Namas and Bisha." }
        ]
    },
    {
        slug: "makkah-to-al-baha",
        title: "Makkah to Al Baha Taxi | Private Transfer — 340km, 3.5 Hours",
        description: "Private taxi from Makkah to Al Baha (Al Bahah Region). 340km via Taif, approximately 3.5 hours. Fixed rate, door-to-door service.",
        h1: "Makkah to Al Baha Taxi — 340km Holy City to Thee Ain Highlands",
        distance: "340 km",
        duration: "3.5 hours",
        content: "Travel from Makkah to Al Baha — the highland province famous for Thee Ain Historic Village and the Al Bahah escarpment. The 340km route goes via Taif into the Al Baha highlands, taking approximately 3.5 hours. Al Baha is a common origin for Umrah pilgrims from the southwestern highlands of Saudi Arabia.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Al Baha?", answer: "Makkah to Al Baha is approximately 340km and takes 3–3.5 hours via Taif and the Al Baha highland road." },
            { question: "Can I stop at Thee Ain Village en route?", answer: "Thee Ain is a short detour from the main Al Baha road. We can include a stop on request — let us know when booking." }
        ]
    },
    {
        slug: "al-baha-to-makkah",
        title: "Al Baha to Makkah Taxi | Private Transfer — 340km, 3.5 Hours",
        description: "Private taxi from Al Baha to Makkah Al-Mukarramah. 340km, approximately 3.5 hours. Door-to-door service. Fixed rate.",
        h1: "Al Baha to Makkah Taxi — 340km Highlands to Holy City Transfer",
        distance: "340 km",
        duration: "3.5 hours",
        content: "Travel from Al Baha province down to Makkah Al-Mukarramah via the Taif highland road. The 340km journey descends the escarpment through dramatic mountain scenery before arriving in Makkah, taking approximately 3.5 hours. We pick up from all Al Baha areas including Thee Ain, Al Mandaq, and Biljurashi.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Do you pick up from Thee Ain for the Makkah transfer?", answer: "Yes — Thee Ain and surrounding Al Baha villages are in our pickup zone. Provide your exact location when booking." },
            { question: "Can I combine Al Baha to Makkah with a Taif stop?", answer: "Yes — Taif is on the route between Al Baha and Makkah. A stop at Al Hada, Shafa, or central Taif can be included on request." }
        ]
    },
    {
        slug: "makkah-to-tabuk",
        title: "Makkah to Tabuk Taxi | Long Distance Transfer — 1,400km, 13 Hours",
        description: "Long-distance private taxi from Makkah to Tabuk Region. 1,400km via the Red Sea coastal highway north. Scheduled rest stops, two drivers for safety. Fixed rate.",
        h1: "Makkah to Tabuk Taxi — 1,400km Holy City to Northwest Saudi Transfer",
        distance: "1,400 km",
        duration: "13 hours",
        content: "Long-distance private taxi from Makkah Al-Mukarramah to Tabuk — gateway to northwest Saudi Arabia including Neom, Al Ula, and Haql. The 1,400km journey follows the Red Sea coastal highway north through Jeddah, Yanbu, and Al Wajh into Tabuk, taking approximately 13 hours with scheduled rest stops. Popular with Tabuk residents returning home after Hajj or Umrah. We assign two drivers for this distance to ensure safe and comfortable travel.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "How long does the Makkah to Tabuk drive take?", answer: "Makkah to Tabuk is approximately 1,400km and takes 13–14 hours via the Red Sea coastal highway through Yanbu and Al Wajh. Scheduled rest stops approximately every 3–4 hours." },
            { question: "Do you assign two drivers for the Makkah to Tabuk journey?", answer: "Yes — for journeys over 10 hours, we assign two drivers who alternate. This ensures safety and that no single driver exceeds regulated driving hours." }
        ]
    },
    {
        slug: "tabuk-to-makkah",
        title: "Tabuk to Makkah Taxi | Long Distance Transfer — 1,400km, 13 Hours",
        description: "Long-distance private taxi from Tabuk to Makkah Al-Mukarramah. 1,400km via the Red Sea coastal highway south. Overnight transfer with rest stops. Fixed rate.",
        h1: "Tabuk to Makkah Taxi — 1,400km Northwest Saudi to Holy City",
        distance: "1,400 km",
        duration: "13 hours",
        content: "Long-distance private taxi from Tabuk south to Makkah Al-Mukarramah via the Red Sea coastal highway. The 1,400km journey passes through Al Wajh, Yanbu, and Jeddah before arriving in Makkah, taking approximately 13 hours. Popular with Tabuk and northwest Saudi Arabia residents making annual Hajj and Umrah. We provide two drivers for safety on this long route.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Get Quote", capacity: "4 Pax", luggage: "3 Bags" },
            { vehicle: "GMC Yukon XL", price: "Get Quote", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Staria", price: "Get Quote", capacity: "7 Pax", luggage: "7 Bags" },
            { vehicle: "Toyota Hiace", price: "Get Quote", capacity: "11 Pax", luggage: "10 Bags" },
        ],
        faqs: [
            { question: "Where do we stop on the Tabuk to Makkah road?", answer: "Scheduled rest stops approximately every 3–4 hours — typically at Yanbu (midpoint) for a 30-minute break with prayers, plus fuel stops at Al Wajh and near Jeddah." },
            { question: "Can pilgrims from Tabuk use this service for Hajj 2026?", answer: "Yes. The Miqat for pilgrims from the direction of Tabuk is Al-Juhfah (Rabigh) — approximately 187km north of Makkah on the Red Sea coast. We include a Miqat stop at Rabigh mosque on request." }
        ]
    }
];