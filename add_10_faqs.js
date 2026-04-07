const fs = require('fs');

const fileName = 'lib/blogData.ts';
let fileContent = fs.readFileSync(fileName, 'utf8');

const commonFAQs = [
    { question: "How will I find my driver at the airport?", answer: "Your chauffeur will wait at the arrivals hall exit with a personalized name board. We also share the driver's contact details via WhatsApp 2 hours before arrival." },
    { question: "What happens if my flight is delayed?", answer: "We track all flights in real-time. If your flight is delayed, your pickup time is automatically adjusted at no extra cost to you." },
    { question: "Are there any hidden charges like tolls or parking?", answer: "No, our prices are completely all-inclusive. This covers fuel, tolls (including the Makkah road fees), parking, and VAT." },
    { question: "Do you provide child car seats for families?", answer: "Yes, we offer complimentary child seats upon request. Please specify the number and age of children during your booking." },
    { question: "Is the booking price per person or per vehicle?", answer: "All our rates are per vehicle, not per person. This makes our private transfers highly cost-effective for families and groups." },
    { question: "Can I change my pickup time or date after booking?", answer: "Yes, you can modify your booking free of charge up to 24 hours before the scheduled pickup time." },
    { question: "Are the chauffeurs bilingual and professional?", answer: "Absolutely. All our drivers are professionally trained, experienced on Saudi highways, and speak both Arabic and English." },
    { question: "Is your transport service licensed and insured?", answer: "Yes, we are a fully licensed transport company in Saudi Arabia, and all our vehicles carry comprehensive commercial insurance for passengers." },
    { question: "Do you provide door-to-door service to any hotel?", answer: "Yes, we provide direct door-to-door service to any hotel, apartment, or residential address in Makkah, Madinah, and Jeddah." },
    { question: "Can we transport Zamzam water in the vehicle?", answer: "Yes, we allow Zamzam water bottles. However, please ensure you book a vehicle category with sufficient luggage space for these extra items." }
];

const specificFAQs = {
    "best-cars-for-umrah-travel-sedan-vs-suv": [
        { question: "How many bags fit in a standard sedan?", answer: "A standard sedan like a Toyota Camry fits 2 large suitcases and 2 small carry-ons comfortably." },
        { question: "Is an SUV mandatory for 4 passengers?", answer: "While you can fit in a sedan, if you have 4 large suitcases, an SUV is mandatory as they will not fit in a sedan's trunk." },
        { question: "Which vehicle is better for elderly passengers?", answer: "The GMC Yukon SUV is superior for elderly passengers due to its higher seating position and easier entry/exit compared to low sedans." }
    ],
    "how-to-book-chauffeur-jeddah-airport-to-makkah": [
        { question: "Where is the meeting point at Jeddah Airport?", answer: "The meet and greet point is specifically at the International Arrivals exit gate, near the information desk." },
        { question: "How far is Makkah from Jeddah Airport?", answer: "The distance is approximately 95km and the drive usually takes 60 to 90 minutes depending on traffic." },
        { question: "Can I book a return trip to the airport immediately?", answer: "Yes, we recommend booking a round-trip to lock in the fixed rate and ensure availability for your departure." }
    ],
    "top-5-reasons-to-choose-gmc-yukon-for-family-umrah": [
        { question: "Is the GMC Yukon XL version always provided?", answer: "Yes, we primarily use the XL (extended) version to ensure maximum luggage space for our Umrah guests." },
        { question: "Does the Yukon have rear-seat entertainment?", answer: "Many of our VIP Yukon models include rear-seat screens; please request this if you are traveling with children." },
        { question: "Is the GMC Yukon suitable for Madinah road trips?", answer: "It is our most recommended vehicle for the 450km Makkah-Madinah highway due to its superior suspension." }
    ],
    "hyundai-staria-ultimate-choice-for-large-groups": [
        { question: "Can 9 people fit in a Hyundai Staria?", answer: "Our Staria configuration is for 7-8 passengers to ensure maximum comfort and luggage room." },
        { question: "Is the Staria air conditioning powerful enough for the back?", answer: "Yes, the Staria features a dedicated high-output rear AC system with independent controls for passengers." },
        { question: "Does the Staria have sliding doors?", answer: "Yes, it features dual electric sliding doors, making it exceptionally easy to get in and out at crowded hotel lobbies." }
    ],
    "toyota-camry-reliable-airport-transfer-jeddah": [
        { question: "Is the Camry used for intercity travel?", answer: "Yes, it is a very reliable and cost-effective option for intercity travel between Jeddah and Makkah for 1-3 people." },
        { question: "What is the max speed for highway travel in a Camry?", answer: "Our drivers strictly adhere to the 120km/h or 140km/h highway limits for your safety and comfort." },
        { question: "Is a newer model Camry guaranteed?", answer: "We only use late-model (2022-2024) Toyota Camrys to ensure reliability and icy-cold air conditioning." }
    ],
    "ford-taurus-luxury-executive-travel-for-saudi-business-trips": [
        { question: "Is the Ford Taurus suitable for VIP guests?", answer: "Yes, the Taurus is our flagship executive sedan, offering luxury leather interiors and advanced noise cancellation." },
        { question: "Does the Taurus have USB charging for laptops?", answer: "It features multiple high-speed USB ports and 12V outlets to keep your devices charged during travel." },
        { question: "Is there enough legroom for tall passengers?", answer: "The Ford Taurus is famous in the Middle East for its exceptional rear legroom, rivaling luxury German sedans." }
    ],
    "chevrolet-suburban-space-and-comfort-for-long-saudi-road-trips": [
        { question: "What is the difference between Yukon XL and Suburban?", answer: "They are very similar, but the Suburban often features a slightly different interior layout and identical class-leading luggage space." },
        { question: "Is the Suburban comfortable for 5-hour drives?", answer: "It is widely considered the best long-distance highway vehicle in the world due to its heavy frame and smoothing suspension." },
        { question: "Can the third row be folded for extra bags?", answer: "Yes, if you have fewer passengers, we can fold the rear seats to accommodate up to 15 large suitcases." }
    ],
    "makkah-to-madinah-taxi-why-professional-drivers-matter": [
        { question: "How long is the drive from Makkah to Madinah?", answer: "The journey is 450km and typically takes 4.5 to 5 hours, including one rest stop." },
        { question: "Do you stop for prayers on the highway?", answer: "Yes, our drivers will stop at a clean SASQO station for any prayer time during the journey." },
        { question: "Are these drivers familiar with the Miqat?", answer: "Yes, all our drivers know the Miqat locations and will wait while you perform your intentions for Umrah." }
    ],
    "makkah-to-madinah-taxi-price-2024-complete-fare-guide": [
        { question: "Are prices higher during Ramadan?", answer: "Prices do increase slightly due to extreme demand, but we offer a fixed booking rate if you reserve in advance." },
        { question: "Does the price include the return trip?", answer: "Usually, prices are quoted one-way. However, we offer significant discounts for a committed round-trip booking." },
        { question: "Is VAT included in the quoted price?", answer: "Yes, all our quotes are transparent and include the 15% Saudi VAT." }
    ],
    "why-pre-booking-your-umrah-taxi-is-essential": [
        { question: "Can I find a taxi at the airport arrivals?", answer: "While possible, local airport taxis often have surge pricing and do not offer VIP meet and greet or luggage assistance." },
        { question: "How far in advance should I book?", answer: "We recommend booking at least 48 hours in advance to guarantee your preferred vehicle model." },
        { question: "Is there a cancellation fee?", answer: "We offer free cancellation up to 24 hours before your trip, providing you with full flexibility." }
    ],
    "top-5-luxury-cars-for-executive-umrah-tours": [
        { question: "Do you offer Mercedes V-Class for VIPs?", answer: "Yes, the Mercedes V-Class is available for those seeking the absolute pinnacle of European luxury transport." },
        { question: "Can I request a bilingual VIP chauffeur?", answer: "All our luxury fleet bookings automatically come with our most experienced, bilingual senior chauffeurs." },
        { question: "Are refreshments provided in VIP vehicles?", answer: "Yes, all our VIP and Executive bookings include complimentary cold bottled water and tissues." }
    ],
    "makkah-to-madinah-transportation-guide-2024": [
        { question: "What is the best time to leave Makkah for Madinah?", answer: "We recommend leaving right after Fajr or after Dahur prayer to reach your hotel before dark." },
        { question: "Is the road safe for night travel?", answer: "The highway is extremely safe and well-lit, but daytime travel is recommended for the best views." },
        { question: "Can we visit the Badr battlefield on the way?", answer: "Yes, we can arrange a detour to historical sites for a small additional waiting fee." }
    ],
    "jeddah-to-makkah-taxi-fare-guide-2024": [
        { question: "What is the fastest way to get to Makkah?", answer: "A private taxi via the Haramain Highway is consistently the fastest door-to-door option." },
        { question: "Are the vehicles equipped with GPS?", answer: "All our vehicles are equipped with professional GPS tracking for safety and precisely finding your hotel." },
        { question: "Is it possible to pay with Credit Card?", answer: "We accept online payments via credit card and bank transfer, as well as cash payments to the driver." }
    ],
    "best-time-to-book-umrah-taxi-for-ramadan": [
        { question: "How early should I book for Ramadan?", answer: "Bookings for Ramadan should ideally be made 2-4 weeks in advance to ensure availability." },
        { question: "Is there 24/7 service during Ramadan?", answer: "Yes, our team and drivers work around the clock during the holy month to serve pilgrims." },
        { question: "Do you provide Iftar on the road?", answer: "If you are traveling during Iftar time, our drivers can stop at a rest area with food facilities or provide dates and water." }
    ],
    "how-we-maintain-our-vehicles-for-zero-breakdown-guarantee": [
        { question: "How often are the vehicles serviced?", answer: "Every vehicle in our fleet undergoes a comprehensive safety inspection every 5,000 kilometers." },
        { question: "What if the car breaks down on the highway?", answer: "In the rare event of a breakdown, we dispatch a replacement vehicle immediately from our nearest station at no cost." },
        { question: "Are the tires replaced frequently?", answer: "Yes, we use only high-performance tires suitable for the intense Saudi heat and replace them every 30,000km for safety." }
    ],
    "latest-model-taxi-fleet-makkah-2024-update": [
        { question: "Are all cars in your fleet 2024 models?", answer: "Our fleet consists entirely of 2022 to 2024 models to ensure maximum reliability and comfort." },
        { question: "Do you have 2024 GMC Yukons?", answer: "Yes, we have just added the latest 2024 GMC Yukon XL models to our luxury family fleet." },
        { question: "What are the newest features in the 2024 fleet?", answer: "Improved AC efficiency, better fuel economy, and advanced safety features like lane-departure warnings." }
    ],
    "booking-a-taxi-in-saudi-arabia-a-complete-guide-for-tourists": [
        { question: "Is it easy for foreigners to book a taxi?", answer: "Yes, via our WhatsApp service, you can book in English and receive all confirmation details instantly." },
        { question: "Are the prices fixed for tourists?", answer: "Unlike street taxis, all our prices are fixed upfront, so there is no confusion for international visitors." },
        { question: "Do I need a local Saudi phone number?", answer: "No, you can communicate with us via your home WhatsApp number or email easily." }
    ],
    "how-to-avoid-common-taxi-scams-at-jeddah-airport": [
        { question: "How do I spot a fake taxi driver?", answer: "Fake drivers often approach you inside the terminal. Official drivers remain at the designated meet-and-greet area with signs." },
        { question: "Should I ever pay the driver more than the agreed price?", answer: "No. You should only pay the price confirmed in your booking. If a driver asks for more, contact our support immediately." },
        { question: "Is it safe to share a taxi with strangers?", answer: "We highly recommend private transfers for security and comfort, rather than 'shared' unregulated rides." }
    ],
    "your-first-umrah-journey-transportation-tips-for-new-pilgrims": [
        { question: "Which city should I visit first, Makkah or Madinah?", answer: "Most pilgrims start in Makkah if they are performing Umrah first. We provide seamless transfers to either city." },
        { question: "How much luggage can an individual pilgrim bring?", answer: "Typically, 1 large suitcase and 1 carry-on per person is standard. Please account for Zamzam water as well." },
        { question: "is there a prayer available in the vehicle?", answer: "While you can pray in the car if necessary, we always stop at mosques or SASQO stations for congregational prayers." }
    ],
    "traveling-with-heavy-luggage-our-large-capacity-suv-solutions": [
        { question: "Can you provide a luggage trailer?", answer: "We do not use external trailers for safety reasons on high-speed highways. Instead, we recommend upgrading to a Staria Van or two separate SUVs for very large groups with excessive gear." },
        { question: "Are there extra charges for luggage?", answer: "No. As long as your luggage fits safely within the designated vehicle's storage areas, there are zero extra fees. We only charge for the vehicle category itself." },
        { question: "What is the max bag limit for Yukon XL?", answer: "It can comfortably hold 8-10 large suitcases without compromising passenger safety." }
    ],
    "makkah-to-madinah-why-private-taxi-is-better-than-the-bus-for-large-families": [
        { question: "Is it safe to travel at night between Makkah and Madinah?", answer: "Yes, the highway is well-lit and heavily patrolled. However, we recommend daytime travel to enjoy the scenery and ensure maximum driver alertness." },
        { question: "Do you offer child car seats for long journeys?", answer: "Yes, car seats are available upon request for a small additional fee. Please specify the age of your child during the booking process." },
        { question: "How much time do I save by taking a private taxi vs. bus?", answer: "A private taxi is typically 2.5 hours faster as it offers door-to-door service and avoids multiple station stops." }
    ],
    "how-to-reach-madinah-from-makkah-without-stress": [
        { question: "How long is the actual drive time?", answer: "Without stops, it takes about 4 hours. With a food and prayer stop, most families reach their Madinah hotel in 5 hours." },
        { question: "Can we visit the Miqat on the way?", answer: "Yes. If you are performing a 'Reverse Umrah' from Madinah to Makkah, we stop at Dhul Hulaifah Miqat. For Makkah to Madinah, we can stop at any historical site along the highway for a small fee." },
        { question: "Can I sleep in the car during the trip?", answer: "Yes, our SUVs like the GMC Yukon feature premium reclining seats perfect for resting during the 450km drive." }
    ],
    "the-best-places-to-stop-for-food-between-makkah-and-madinah": [
        { question: "Is there an extra charge for stopping to eat?", answer: "A quick 15-minute prayer/restroom stop is always included. For an extended 45-60 minute lunch break, we charge a small 'waiting time' fee of 50 SAR to compensate the chauffeur." },
        { question: "Are these food stops open 24/7?", answer: "Major Sasqo stations operate 24/7, including the food outlets and restrooms. However, some traditional local grills may close briefly after midnight." },
        { question: "Do drivers eat with the families?", answer: "Drivers usually eat separately to respect your family's privacy and space unless specifically invited." }
    ],
    "tips-for-traveling-with-children-on-the-makkah-madinah-highway": [
        { question: "Do you have vehicles with built-in TV screens for kids?", answer: "Many of our GMC Yukon VIP models come equipped with rear-seat entertainment systems. Please request this specifically during your WhatsApp booking." },
        { question: "What if my child gets motion sickness?", answer: "Inform the driver. He will drive at a more moderate speed, use less aggressive braking, and keep the cabin well-ventilated to help ease nausea." },
        { question: "Can we stop for diaper changes?", answer: "Absolutely. Our drivers are very understanding and will stop at the nearest clean facility whenever you need." }
    ],
    "safety-measures-every-pilgrim-should-check-before-entering-an-airport-taxi": [
        { question: "Are your vehicles insured for passengers?", answer: "Yes, all our fleet vehicles carry comprehensive commercial insurance that specifically covers passengers in the event of an accident—something freelance 'unregulated' drivers often lack." },
        { question: "What should I do if a driver is speeding?", answer: "Politely ask him once to slow down. If he continues, message our 24/7 WhatsApp support immediately. We track all vehicles via GPS and will call the driver to issue a warning." },
        { question: "How do I verify the driver's identity?", answer: "We send you the driver's name and photo via WhatsApp. You can also verify the vehicle's license plate against the booking confirmation." }
    ],
    "your-ultimate-umrah-packing-list-dont-forget-these-5-essentials": [
        { question: "Can I bring my own snacks in the car?", answer: "Yes, you are welcome to bring snacks and drinks. We just ask that you help us keep the vehicle clean for the next guest." },
        { question: "Do you have phone chargers in the cars?", answer: "All our vehicles are equipped with multiple USB charging ports for both iPhone and Android devices." },
        { question: "Is there a limit to how many Zamzam bottles I can bring?", answer: "As long as they fit in the trunk space of your booked vehicle category, there is no limit from our side." }
    ],
    "choosing-the-right-vehicle-for-jeddah-to-makkah-transfer": [
        { question: "Is it better to book a sedan or SUV for 3 adults?", answer: "For 3 adults, a sedan is fine IF you only have 2-3 bags. If everyone has a large bag, you must book an SUV for a safe and comfortable 90-minute drive." },
        { question: "Does the transfer price change if my hotel is in North or South Makkah?", answer: "No, we offer a flat fixed rate for anywhere within the Makkah city limits, regardless of the hotel neighborhood." },
        { question: "Will the driver help with my bags at the hotel?", answer: "Yes, our meet and greet service includes full luggage assistance from the airport trolley to the vehicle, and from the vehicle to your hotel lobby." }
    ],
    "best-cars-for-makkah-to-madinah-vip-journey": [
        { question: "What is the most 'VIP' car for a couple?", answer: "The Ford Taurus is our #1 recommendation for couples. It offers executive styling, massive legroom, and a very quiet ride for the 450km journey." },
        { question: "Do the VIP cars have Wi-Fi?", answer: "Many of our executive vehicles are equipped with Wi-Fi. Please request this during booking to ensure your specific vehicle has an active hotspot." },
        { question: "Can we request a specific brand of car?", answer: "Yes, if you specifically want a GMC or a Chevrolet Suburban, you can specify this when booking on WhatsApp." }
    ],
    "why-ac-quality-in-vehicles-is-crucial-for-saudi-travel": [
        { question: "What happens if the AC stops working mid-trip?", answer: "In the rare event of a mechanical failure, we dispatch a replacement vehicle immediately from our nearest highway station to ensure you don't suffer in the heat." },
        { question: "Can I control the temperature in the back of the SUV?", answer: "Yes, vehicles like the GMC Yukon and Hyundai Staria have independent rear climate controls so passengers can set their own comfort level." },
        { question: "Are the vehicles pre-cooled before arrival?", answer: "Absolutely. Our drivers are instructed to run the AC for 10-15 minutes before your scheduled pickup time to ensure a refreshing entry." }
    ],
    "luxury-vs-standard-taxi-in-ksa-what-should-you-choose": [
        { question: "Is it safer to book a luxury service?", answer: "Yes, because our drivers are vetted, professionally trained, and our vehicles are maintained to high corporate standards, unlike unregulated street taxis." },
        { question: "Do luxury taxis have better routes?", answer: "Our drivers use professional navigation and local knowledge to avoid seasonal traffic bottlenecks near the Haram, which street taxis might not be aware of." },
        { question: "Is the price difference worth it?", answer: "For most pilgrims, the lack of stress, guaranteed AC, and no-haggling experience is worth the small premium over a standard taxi." }
    ],
    "how-much-luggage-fits-in-a-gmc-yukon-xl": [
        { question: "How many Zamzam boxes fit in the trunk?", answer: "The Yukon XL can fit about 6-8 standard 5-liter Zamzam boxes in addition to 4-5 large suitcases." },
        { question: "Is the 'XL' different from a normal Yukon?", answer: "Yes, the XL is nearly 20 inches longer, which nearly doubles the cargo space behind the third row of seats." },
        { question: "Can we put bags on the roof?", answer: "No, for safety and aerodynamic reasons on the high-speed highway, we do not allow roof-racked luggage. All bags must fit inside the vehicle's safe cargo area." }
    ],
    "top-safety-features-we-ensure-in-our-haram-taxi-fleet": [
        { question: "Do your drivers have a speed limit?", answer: "Yes, we monitor all drivers via GPS. They are strictly prohibited from exceeding the legal highway speeds (120/140 km/h) for passenger safety." },
        { question: "How often are the brakes checked?", answer: "Brakes and tires undergo a safety inspection every 5,000 km because of the extreme braking heat generated on Saudi highways." },
        { question: "Are your cars equipped with airbags for all rows?", answer: "All our modern fleet (2022+) features full side-curtain airbags that protect passengers in the second and third rows as well." }
    ],
    "travelling-with-kids-choose-this-taxi-for-complete-comfort": [
        { question: "Are there charging ports for kids' tablets?", answer: "Yes, all our SUVs and modern vans feature multiple USB and Type-C charging ports in the rear rows to keep devices powered." },
        { question: "Can the driver stop for frequent bathroom breaks for kids?", answer: "Of course. Our drivers are extremely family-friendly and will stop at any clean Sasqo station whenever your children need a break." },
        { question: "Is there enough room for a double stroller?", answer: "Yes, the GMC Yukon XL and Hyundai Staria have sufficient cargo depth to accommodate large double strollers without folding the passenger seats." }
    ],
    "why-hyundai-tucson-is-perfect-for-ziyarat-tours": [
        { question: "Is the Tucson good for Makkah city tours?", answer: "Yes, its compact size makes it perfect for navigating the busy streets near Ziyarat sites like Jabal al-Nour and Cave Hira where larger SUVs might struggle." },
        { question: "How many people does the Tucson hold?", answer: "It is a 5-seater SUV, meaning it fits 1-4 passengers comfortably with enough room for light luggage or day bags." },
        { question: "Does it have a sunroof for better views?", answer: "Most of our Tucson fleet features panoramic sunroofs, which is great for viewing the historical sights and mountains during your tour." }
    ],
    "the-most-comfortable-seats-ranking-our-premium-taxis": [
        { question: "Which car has 'Captain Chairs'?", answer: "Our Hyundai Staria VIP models and some GMC Yukon Denali trims feature individual Captain Chairs in the second row for ultimate luxury." },
        { question: "Are the seats leather or cloth?", answer: "Our entire premium and VIP fleet features high-quality leather interiors for better hygiene and comfort in the heat." },
        { question: "Do the rear seats recline?", answer: "In our SUVs and Staria vans, the passenger seats offer significant reclining capability, perfect for resting during long intercity transfers." }
    ],
    "toyota-hiace-vs-hyundai-staria-which-van-is-better": [
        { question: "Why is the Staria more expensive than the Hiace?", answer: "The Staria is a modern passenger-first vehicle with car-like suspension and superior AC, whereas the Hiace is a commercial van with stiffer, less comfortable leaf-spring suspension." },
        { question: "Does the Staria have more legroom?", answer: "Yes, the Staria offers a much more ergonomic seating layout with significantly more legroom and foot space for every passenger." },
        { question: "Which is safer on the highway?", answer: "The Staria is far safer as it features modern unibody construction and advanced safety electronics like electronic stability control and multiple airbags." }
    ],
    "do-you-need-a-vip-chauffeur-understanding-the-executive-fleet": [
        { question: "Do VIP chauffeurs speak fluent English?", answer: "Yes, we assign our most experienced, bilingual senior chauffeurs to our VIP and Executive fleet to ensure smooth communication with international guests." },
        { question: "Can I book a VIP car for a 12-hour full-day tour?", answer: "Yes, we offer daily hire rates for our VIP fleet, which includes a dedicated chauffeur and unlimited stops within the city for a fixed period." },
        { question: "What is the newest car in the VIP fleet?", answer: "Our newest additions are the 2024 GMC Yukon XL and the 2024 Ford Taurus, both offering the latest in Saudi luxury travel technology." }
    ]
};

function get10FAQs(slug) {
    const specific = specificFAQs[slug] || [];
    // Filter out potential duplicates if commonFAQs overlap with specific ones
    const combined = [...specific];
    
    // Add common FAQs until we reach 10
    for (const common of commonFAQs) {
        if (combined.length >= 10) break;
        // Basic check to see if question already exists
        if (!combined.some(f => f.question === common.question)) {
            combined.push(common);
        }
    }
    
    return combined;
}

// Function to update the file content
function updateBlogPostFAQs(text, slug) {
    const FAQs = get10FAQs(slug);
    if (FAQs.length === 0) return text;

    // Fixed regex to find the faqs block regardless of existing length
    const faqsRegex = new RegExp(`(slug: "${slug}"[\\s\\S]*?faqs:\\s*)\\[[\\s\\S]*?\\]`, 'g');
    const faqsString = '[\n' + FAQs.map(faq => `            {\n                question: "${faq.question}",\n                answer: "${faq.answer}"\n            }`).join(',\n') + '\n        ]';
    
    if (text.match(faqsRegex)) {
        return text.replace(faqsRegex, `$1${faqsString}`);
    } else {
        // If not found, it might be because the faqs: [] is missing or different
        // Let's try to find just the slug and the category/image block and insert before the closing brace
        const insertRegex = new RegExp(`(slug: "${slug}"[\\s\\S]*?)(}[\\s\\n]*,)`, 'g');
        if (text.match(insertRegex)) {
             // This is a bit risky for a mass update, let's stick to the ones that have faqs: []
             return text;
        }
        return text;
    }
}

// Slugs to update
const slugsToUpdate = Object.keys(specificFAQs);

let updatedContent = fileContent;
slugsToUpdate.forEach(slug => {
    updatedContent = updateBlogPostFAQs(updatedContent, slug);
});

fs.writeFileSync(fileName, updatedContent);
console.log(`Successfully updated FAQ count to 10 for ${slugsToUpdate.length} blogs!`);
