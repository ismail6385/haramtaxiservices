const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/routesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const faqMap = {
    "jeddah-to-madinah": [
        { question: "How long does the Jeddah to Madinah taxi take?", answer: "The journey is approximately 400 km and takes around 4 hours via the Hijrah Highway." },
        { question: "Is the Jeddah to Madinah taxi a private ride?", answer: "Yes, all our transfers are 100% private door-to-door with no shared passengers." },
        { question: "Can I be picked up from a Jeddah hotel instead of the airport?", answer: "Absolutely. We pick up from any Jeddah hotel, residence, or King Abdulaziz Airport (KAIA)." }
    ],
    "madinah-hotel-to-madinah-airport": [
        { question: "How far is Madinah city from Madinah Airport?", answer: "Most Madinah hotels are 20–30 km from Prince Mohammad Bin Abdulaziz Airport, approximately 25 minutes by taxi." },
        { question: "How early should I leave my hotel for my flight?", answer: "We recommend booking your taxi at least 3 hours before your flight for domestic and 4 hours for international departures." },
        { question: "Do you track my flight in case of delays?", answer: "Yes, we monitor flight schedules so your driver is always on time." }
    ],
    "dammam-to-makkah": [
        { question: "How long is the drive from Dammam to Makkah?", answer: "The journey is approximately 1,250 km and takes 12–13 hours by private taxi." },
        { question: "Is a rest stop included on this long journey?", answer: "Yes, our driver will make comfort stops along the route so passengers can rest, pray, and refresh." },
        { question: "Which vehicle is best for Dammam to Makkah?", answer: "We recommend the GMC Yukon for maximum comfort on this long-haul journey." }
    ],
    "riyadh-to-makkah": [
        { question: "How long is the drive from Riyadh to Makkah?", answer: "The journey is approximately 870 km and takes 8–9 hours by private taxi via the Makkah–Madinah highway." },
        { question: "Can I book a Riyadh to Makkah taxi for Umrah?", answer: "Yes, this is one of our most popular Umrah routes. We offer vehicle options from Camry to GMC Yukon." },
        { question: "Is there a rest stop along the way?", answer: "Yes, our drivers make scheduled rest and prayer stops on this long-haul route." }
    ],
    "tabuk-to-jordan-border": [
        { question: "Which border crossing is used for Tabuk to Jordan?", answer: "We typically use the Halat Ammar border crossing, which is approximately 150 km from Tabuk city." },
        { question: "Do I need a visa for Jordan?", answer: "Most nationalities can get a Jordan visa on arrival. We recommend confirming your visa requirements before travel." },
        { question: "How long does the border crossing take?", answer: "Border processing usually takes 30–60 minutes depending on traffic. We account for this in our quoted journey time." }
    ],
    "alula-to-madinah": [
        { question: "How long is the drive from AlUla to Madinah?", answer: "The journey is approximately 330 km and takes around 3.5 hours via the Hejaz highway." },
        { question: "Can I be picked up from an AlUla resort?", answer: "Yes, we pick up from all major AlUla resorts including Habitas, Banyan Tree, and Shaden." },
        { question: "Is this a private taxi or shared?", answer: "This is a 100% private transfer. No other passengers will be in your vehicle." }
    ],
    "najran-to-yemen-border": [
        { question: "Which border crossing is used for Najran to Yemen?", answer: "We transfer to the Al Wadeeah border crossing, which is the main crossing point between Najran and Yemen." },
        { question: "How long is the drive to Al Wadeeah from Najran?", answer: "The drive is approximately 350 km and takes around 4 hours." },
        { question: "Is the road to the Yemen border safe?", answer: "Yes, we only operate on the approved, secure highway routes and monitor conditions before every trip." }
    ],
    "hafr-to-kuwait-border": [
        { question: "Which border crossing is used for Hafr Al Batin to Kuwait?", answer: "We use the Al Raqi border crossing, which is the main Saudi-Kuwait crossing point." },
        { question: "How long does the drive from Hafr Al Batin to the Kuwait border take?", answer: "It is approximately 100 km and takes about 1 hour by private taxi." },
        { question: "Do I need specific documents for crossing into Kuwait?", answer: "GCC nationals need their ID card. Other nationalities should have a valid passport and Kuwait entry visa." }
    ],
    "al-ahsa-to-uae": [
        { question: "Which border is used for Al Ahsa to UAE?", answer: "We use the Al Batha border crossing into the UAE, which is approximately 300 km from Al Ahsa." },
        { question: "How long does the Al Ahsa to UAE transfer take?", answer: "The drive takes approximately 3 hours, plus border processing time which varies." },
        { question: "Is this a private taxi to the UAE border?", answer: "Yes, it is a completely private door-to-door service from Al Ahsa to the UAE border crossing." }
    ],
    "hail-to-riyadh": [
        { question: "How long is the drive from Hail to Riyadh?", answer: "The journey is approximately 640 km and takes around 6 hours by private taxi." },
        { question: "Can I be dropped off at Riyadh Airport?", answer: "Yes, we can drop you off at King Khalid International Airport (RUH) or any Riyadh destination." },
        { question: "Is the Hail to Riyadh taxi private?", answer: "Yes, all our intercity transfers are 100% private with no shared passengers." }
    ],
    "jazan-to-abha": [
        { question: "How long is the drive from Jazan to Abha?", answer: "The journey is approximately 200 km and takes around 2.5 hours, ascending into the Asir mountains." },
        { question: "Is the road from Jazan to Abha safe?", answer: "Yes, our drivers are experienced on the mountain highways of Asir and take the route safely." },
        { question: "Can I book a return trip from Abha back to Jazan?", answer: "Yes, we offer both one-way and round-trip bookings on this route." }
    ],
    "hafr-to-riyadh": [
        { question: "How long is the drive from Hafr Al Batin to Riyadh?", answer: "The journey is approximately 500 km and takes about 5 hours by private taxi." },
        { question: "Can I be picked up from Hafr Al Batin city center?", answer: "Yes, we pick up from any location within Hafr Al Batin city." },
        { question: "Is this a direct non-stop transfer?", answer: "Yes, it is a direct private transfer. We stop only for prayers and comfort breaks upon request." }
    ],
    "al-ahsa-to-qatar": [
        { question: "How long is the drive from Al Ahsa to Qatar border?", answer: "The Al Ahsa to Salwa border crossing is approximately 150 km and takes around 1.5 hours." },
        { question: "Which border crossing is used for Al Ahsa to Qatar?", answer: "We use the Salwa border crossing, which is the main entry point into Qatar from Saudi Arabia." },
        { question: "Do I need a visa for Qatar from Saudi Arabia?", answer: "GCC nationals can enter Qatar without a visa. Other nationalities should check Qatar's entry requirements in advance." }
    ],
    "buraidah-to-unayzah": [
        { question: "How far is Buraidah from Unayzah?", answer: "Buraidah and Unayzah are only 30 km apart, making the taxi ride approximately 30 minutes." },
        { question: "Is a taxi from Buraidah to Unayzah expensive?", answer: "It is a short local transfer. Contact us on WhatsApp for an instant quote." },
        { question: "Can I book a return trip?", answer: "Yes, we offer flexible return trip bookings for the Buraidah–Unayzah route." }
    ],
    "yanbu-to-madinah": [
        { question: "How long is the drive from Yanbu to Madinah?", answer: "The journey is approximately 230 km and takes around 2.5 hours by private taxi." },
        { question: "Can I be picked up from Yanbu Airport?", answer: "Yes, we provide pickups from Yanbu Airport (YNB) as well as Yanbu city and industrial areas." },
        { question: "Is this a popular route for pilgrims?", answer: "Yes, many pilgrims arriving at Yanbu Airport use this service to reach Masjid Nabawi in Madinah." }
    ],
    "abha-to-khamis": [
        { question: "How far is Abha from Khamis Mushait?", answer: "Abha and Khamis Mushait are only about 30 km apart, making the taxi ride approximately 30 minutes." },
        { question: "Is a taxi the best way to travel between Abha and Khamis Mushait?", answer: "Yes, a private taxi is the most convenient option for direct door-to-door travel between the two cities." },
        { question: "Can I book this taxi for Abha Airport pickups?", answer: "Yes, we offer pickups from Abha Regional Airport (AHB) for onward transfers to Khamis Mushait." }
    ],
    "arar-to-iraq-border": [
        { question: "How far is Arar from the Iraq border?", answer: "The Jadidah Arar border crossing is approximately 60 km from Arar city, about 45 minutes by taxi." },
        { question: "Which border crossing is used for Arar to Iraq?", answer: "The Jadidah Arar crossing is the main Saudi-Iraq border point used for our transfers." },
        { question: "Do I need a visa to enter Iraq from Saudi Arabia?", answer: "Most nationalities require a visa to enter Iraq. Confirm your visa status before booking the transfer." }
    ],
    "qassim-to-riyadh": [
        { question: "How long is the drive from Qassim to Riyadh?", answer: "The journey is approximately 350 km and takes around 3.5 hours by private taxi." },
        { question: "Do you pick up from Qassim Airport?", answer: "Yes, we pick up from Prince Nayef Airport in Qassim (ELQ) as well as Buraidah and Unaizah city centers." },
        { question: "Can I be dropped off at Riyadh Airport?", answer: "Yes, we drop off anywhere in Riyadh including King Khalid International Airport (RUH)." }
    ],
    "train-station-transfers-makkah": [
        { question: "How long is the taxi from Makkah hotels to the train station?", answer: "From central Makkah hotels like Clock Tower, the drive is approximately 10 km and takes 20 minutes." },
        { question: "How early should I book the taxi to catch my Haramain train?", answer: "We recommend arriving at the station at least 45 minutes before departure. Book your taxi accordingly." },
        { question: "Do you offer meet and greet at Makkah Train Station?", answer: "Yes, we can arrange hotel pickup and driver assistance to the correct departure platform." }
    ],
    "train-station-transfers-madinah": [
        { question: "How long is the taxi from Madinah hotels to the train station?", answer: "Most Madinah hotels near Masjid Nabawi are approximately 12 km from the Haramain station, about 25 minutes." },
        { question: "How early should I leave my hotel for the Haramain train?", answer: "We recommend being at Madinah train station at least 45 minutes before departure." },
        { question: "Can I pre-book a Madinah train station transfer?", answer: "Yes, WhatsApp us your train departure time and hotel address to arrange a pre-scheduled pickup." }
    ],
    "makkah-ziyarat-tour": [
        { question: "What historical sites are included in the Makkah Ziyarat tour?", answer: "Our tour covers Jabal Al-Nour (Cave Hira), Jabal Thawr, Masjid Al-Jinn, Masjid Aisha, and the Hajj sites: Mina, Muzdalifah, and Arafat." },
        { question: "How long does the Makkah Ziyarat tour take?", answer: "The full tour takes approximately 4 hours. We can customize the duration based on your needs." },
        { question: "Is the Makkah Ziyarat tour a private service?", answer: "Yes, the tour is 100% private — just you and your family with your dedicated driver and vehicle." }
    ],
    "madinah-ziyarat-tour": [
        { question: "What sites are included in the Madinah Ziyarat tour?", answer: "The tour covers Masjid Quba, Al-Baqi Cemetery, Mount Uhud, Masjid Al-Qiblatain, and other important Islamic sites." },
        { question: "How long does the Madinah Ziyarat tour take?", answer: "The full Madinah historical tour takes approximately 4 hours depending on your stops." },
        { question: "Is the driver knowledgeable about Islamic history?", answer: "Yes, our Madinah drivers are trained guides who can explain the significance of each site." }
    ],
    "umrah-travel-agency": [
        { question: "Can you provide transport for an Umrah group?", answer: "Yes, we specialize in group Umrah transport with vehicles ranging from GMC Yukons to Toyota Coasters for large groups." },
        { question: "Do you coordinate with Umrah travel agents?", answer: "Yes, we partner with travel agencies to provide seamless ground transportation for their pilgrims." },
        { question: "What routes do you cover for Umrah transport?", answer: "We cover all Umrah routes including Jeddah Airport to Makkah, Makkah to Madinah, and Madinah back to Jeddah Airport." }
    ],
    "hajj-travel-agency": [
        { question: "Do you provide Hajj transport between Mina, Arafat, and Muzdalifah?", answer: "Yes, we offer dedicated Hajj transport for the Mashaer (sacred sites) days with experienced drivers who know the timings." },
        { question: "What vehicles are available for Hajj groups?", answer: "We have GMC Yukons for small groups and luxury buses for large Hajj delegations." },
        { question: "How far in advance should I book Hajj transport?", answer: "We strongly recommend booking Hajj transport at least 3–4 months in advance as demand is very high during Hajj season." }
    ],
    "umrah-transport": [
        { question: "What does your Umrah transport service include?", answer: "Our service includes airport pickup, hotel drop-off, and all intercity transfers between Jeddah, Makkah, and Madinah." },
        { question: "Is your Umrah transport available 24/7?", answer: "Yes, we operate 24/7 to accommodate all flight arrivals and departures throughout Umrah season." },
        { question: "Can I book Umrah transport for a large family group?", answer: "Yes, we have vehicles for groups of all sizes, from 4-passenger Camrys to 17-passenger Coasters." }
    ],
    "luxury-umrah-transport": [
        { question: "What makes your luxury Umrah transport different?", answer: "We offer late-model GMC Yukon XL with premium leather seating, privacy glass, and experienced chauffeurs dedicated to VIP pilgrim comfort." },
        { question: "Is the luxury Umrah vehicle air-conditioned?", answer: "Yes, all our luxury vehicles feature powerful air conditioning essential for the Saudi climate." },
        { question: "Can I request a specific vehicle for my Umrah trip?", answer: "Yes, you can request our GMC Yukon XL or luxury van when booking via WhatsApp." }
    ],
    "hotel-to-haram-transport": [
        { question: "How long does it take from Aziziyah to the Haram by taxi?", answer: "From Aziziyah, the drive to the Clock Tower area near Masjid Al-Haram takes approximately 15–20 minutes." },
        { question: "Can I book daily hotel to Haram transfers?", answer: "Yes, we offer flexible daily booking packages so you can arrange your Haram visits in advance." },
        { question: "Do you serve all Makkah hotels for Haram transfers?", answer: "Yes, we pick up from all Makkah hotels including Aziziyah, Al Shisha, and distant properties." }
    ],
    "kuwait-to-khobar": [
        { question: "How long is the drive from Kuwait to Al Khobar?", answer: "The journey is approximately 420 km and takes around 4 hours 45 minutes by private taxi." },
        { question: "Do you drop off at Saudi Aramco in Dhahran?", answer: "Yes, we drop off anywhere in Khobar, Dhahran, and the Saudi Aramco residential areas." },
        { question: "Is this a private taxi from Kuwait to Saudi Arabia?", answer: "Yes, it is a 100% private cross-border transfer with no shared passengers." }
    ],
    "jubail-to-kuwait": [
        { question: "How long is the drive from Jubail to Kuwait?", answer: "The journey is approximately 320 km and takes around 3 hours 45 minutes." },
        { question: "Do you pick up from Jubail Royal Commission?", answer: "Yes, we pick up from all Jubail Royal Commission areas and industrial city zones." },
        { question: "Is this a private taxi or shared?", answer: "This is a completely private transfer — no other passengers." }
    ],
    "kuwait-to-jubail": [
        { question: "How long is the drive from Kuwait to Jubail?", answer: "The journey is approximately 320 km and takes around 3 hours 45 minutes by private taxi." },
        { question: "Do you drop off at Jubail Industrial City?", answer: "Yes, we drop off at Jubail Industrial City, Royal Commission compounds, and residential areas." },
        { question: "Is this a private cross-border taxi?", answer: "Yes, all our Kuwait–Saudi transfers are 100% private door-to-door services." }
    ],
    "khafji-to-kuwait": [
        { question: "How long is the drive from Khafji to Kuwait City?", answer: "Khafji is very close to the Kuwait border. The journey to Kuwait City takes approximately 1 hour 30 minutes." },
        { question: "Do you operate 24/7 for Khafji to Kuwait transfers?", answer: "Yes, our Khafji to Kuwait service operates around the clock." },
        { question: "Can I be picked up from the Khafji border zone?", answer: "Yes, we pick up from Khafji city, the refinery area, and the border zone." }
    ],
    "jeddah-airport-to-yanbu": [
        { question: "How long is the drive from Jeddah Airport to Yanbu?", answer: "The journey is approximately 330 km and takes around 3.5 hours via the coastal highway." },
        { question: "Do you serve the Yanbu Royal Commission?", answer: "Yes, we drop off at all Yanbu Royal Commission zones including the industrial city and residential compounds." },
        { question: "Can I book this for late-night or early-morning flights?", answer: "Yes, we operate 24/7. Your driver will meet you at the arrivals hall regardless of flight time." }
    ],
    "riyadh-airport-to-qassim": [
        { question: "How long is the drive from Riyadh Airport to Qassim?", answer: "The journey is approximately 350 km and takes around 3.5 hours from King Khalid Airport to Buraidah." },
        { question: "Do you drop off in Unaizah as well?", answer: "Yes, we serve all Qassim cities including Buraidah, Unaizah, and smaller surrounding towns." },
        { question: "Can I pre-book this transfer for my flight arrival?", answer: "Yes, WhatsApp us your flight number and we will have a driver waiting at the arrivals hall." }
    ],
    "madinah-airport-to-yanbu": [
        { question: "How long is the drive from Madinah Airport to Yanbu?", answer: "The journey is approximately 230 km and takes around 2.5 hours by private taxi." },
        { question: "Do you pick up from Prince Mohammad Bin Abdulaziz Airport?", answer: "Yes, we provide meet and greet pickup from Madinah Airport (MED) for direct transfer to Yanbu." },
        { question: "Is this service available for industry workers?", answer: "Yes, many oil, gas, and maritime professionals use this route. We offer executive vehicles for business travelers." }
    ],
    "riyadh-to-al-ahsa": [
        { question: "How long is the drive from Riyadh to Al Ahsa?", answer: "The journey is approximately 330 km and takes around 3 hours 15 minutes by private taxi." },
        { question: "Do you serve Al Ahsa Oasis and Hofuf city?", answer: "Yes, we drop off at any location within Al Ahsa including Hofuf city center and the UNESCO Al Ahsa Oasis." },
        { question: "Can I book a return trip from Al Ahsa to Riyadh?", answer: "Yes, we offer both one-way and round-trip transfers on the Riyadh–Al Ahsa route." }
    ],
    "taif-to-madinah": [
        { question: "How long is the drive from Taif to Madinah?", answer: "The journey is approximately 430 km and takes around 4.5 hours by private taxi, bypassing central Makkah." },
        { question: "Does the Taif to Madinah taxi avoid Makkah?", answer: "Yes, our route avoids central Makkah traffic, making it faster for non-pilgrims and those without Makkah permits." },
        { question: "What vehicles are available for the Taif to Madinah route?", answer: "We offer Toyota Camry for individuals and Toyota Hiace or GMC Yukon for families and groups." }
    ],
    "jeddah-to-al-baha": [
        { question: "How long is the drive from Jeddah to Al Baha?", answer: "The journey is approximately 390 km and takes around 4.5 hours, including the mountain ascent into Al Baha." },
        { question: "Is the mountain road to Al Baha safe?", answer: "Yes, our drivers are experienced on the Al Baha mountain highway and prioritize safety on all winding roads." },
        { question: "Do you pick up from Jeddah Airport for Al Baha?", answer: "Yes, we provide meet and greet from King Abdulaziz Airport for direct transfer to Al Baha." }
    ],
    "jeddah-to-riyadh": [
        { question: "How long is the drive from Jeddah to Riyadh?", answer: "The journey is approximately 950 km and takes 9–10 hours by private taxi." },
        { question: "Why choose a taxi over flying from Jeddah to Riyadh?", answer: "A private taxi offers door-to-door convenience without airport queues, perfect for families with heavy luggage." },
        { question: "Is a rest stop included on the Jeddah to Riyadh journey?", answer: "Yes, our driver will make scheduled rest, prayer, and refreshment stops during the journey." }
    ],
    "riyadh-to-abha": [
        { question: "How long is the drive from Riyadh to Abha?", answer: "The journey is approximately 1,050 km and takes 10–11 hours, including the scenic mountain ascent to Abha." },
        { question: "What is the best vehicle for Riyadh to Abha?", answer: "We recommend the GMC Yukon XL for this long-haul mountain route — maximum comfort and space." },
        { question: "Does the Riyadh to Abha taxi make stops along the way?", answer: "Yes, our driver will make prayer, comfort, and meal stops during this long-haul journey." }
    ],
    "dammam-to-madinah": [
        { question: "How long is the drive from Dammam to Madinah?", answer: "The journey is approximately 1,200 km and takes around 12 hours by private taxi." },
        { question: "Is the Dammam to Madinah taxi good for Umrah?", answer: "Yes, this is a popular pilgrim route. We offer door-to-door service from your Dammam home to your Madinah hotel." },
        { question: "What vehicles can handle Dammam to Madinah luggage?", answer: "We recommend the GMC Yukon XL or Hyundai Staria for their large boot space on this long-distance route." }
    ],
    "qassim-to-makkah": [
        { question: "How long is the drive from Qassim to Makkah?", answer: "The journey is approximately 850 km and takes around 8 hours by private taxi via the Makkah highway." },
        { question: "Is this taxi suitable for Umrah from Qassim?", answer: "Yes, this is one of our most popular Umrah departure routes from the Qassim region." },
        { question: "Can I stop at Meeqat on the way to Makkah?", answer: "Yes, we can stop at the appropriate Meeqat point for Ihram before entering Makkah." }
    ],
    "dammam-to-riyadh": [
        { question: "How long is the drive from Dammam to Riyadh?", answer: "The journey is approximately 400 km and takes around 4 hours by private taxi." },
        { question: "Do you pick up from King Fahd International Airport in Dammam?", answer: "Yes, we provide 24/7 pickups from DMM Airport for direct transfer to Riyadh." },
        { question: "Can I be dropped at Riyadh Airport?", answer: "Yes, we drop off at King Khalid International Airport (RUH) and all Riyadh destinations." }
    ],
    "riyadh-to-neom-city": [
        { question: "How long is the drive from Riyadh to NEOM?", answer: "The journey is approximately 1,500 km and takes 14–15 hours. We recommend an overnight rest stop for VIP passengers." },
        { question: "What vehicle is used for the Riyadh to NEOM transfer?", answer: "We exclusively use the GMC Yukon XL for this ultra-long-haul executive route." },
        { question: "Can I book a Riyadh to NEOM transfer for a corporate team?", answer: "Yes, we specialize in corporate and executive transfers to NEOM and can accommodate multiple vehicles for delegations." }
    ]
};

let updated = 0;
let notFound = [];

for (const [slug, faqs] of Object.entries(faqMap)) {
    const faqsJson = JSON.stringify(faqs, null, 12)
        .replace(/\n/g, '\n        ');

    // Match the specific route block by slug and replace its faqs: []
    const pattern = new RegExp(
        `(slug:\\s*"${slug}"[\\s\\S]*?faqs:\\s*)\\[\\]`,
        'g'
    );

    const before = content;
    content = content.replace(pattern, `$1${faqsJson}`);

    if (content !== before) {
        console.log(`UPDATED: ${slug}`);
        updated++;
    } else {
        notFound.push(slug);
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone. Updated: ${updated}`);
if (notFound.length) console.log(`Not found / already has FAQs: ${notFound.join(', ')}`);
