import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Navigation, ArrowRight, AlertCircle, Wallet, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah' },
    title: 'Makkah Taxi Service 2026 | Hajj Transport, KAIA Airport & Ziyarat Tours',
    description: 'Trusted taxi service in Makkah Al-Mukarramah for Hajj 2026 & Umrah. KAIA Airport to Makkah hotel, Haram transfers, Ziyarat tours, Mina & Arafat transport. Fixed rates, 24/7 WhatsApp.',
    keywords: ['Makkah taxi', 'Hajj 2026 taxi', 'KAIA airport to Makkah', 'Umrah taxi Makkah', 'Makkah Ziyarat tour', 'Mina Arafat transport', 'Haram hotel transfer', 'private taxi Makkah', 'Aziziyah taxi Makkah', 'Makkah Madinah taxi'],
    openGraph: {
        title: 'Makkah Taxi Service — Hajj 2026 Transport & Ziyarat Tours',
        description: 'Professional taxi service in Makkah for Hajj & Umrah. Airport transfers, Haram hotel transport, Mina/Arafat Hajj transfers, Ziyarat tours. Fixed rates 24/7.',
        url: 'https://haramtaxiservice.com/locations/makkah',
        type: 'website',
        images: [{ url: '/makkah-royal-clock-tower.webp', width: 1200, height: 630, alt: 'Makkah Royal Clock Tower and Masjid Al-Haram' }],
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Makkah Al-Mukarramah",
    "description": "Professional taxi and transport service in Makkah. Hajj 2026 permitted vehicles, KAIA airport transfers, Ziyarat tours, Haram hotel transport.",
    "@id": "https://haramtaxiservice.com/locations/makkah",
    "url": "https://haramtaxiservice.com/locations/makkah",
    "telephone": "+966575806733",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "streetAddress": "Masjid Al-Haram Area", "addressLocality": "Makkah Al-Mukarramah", "addressCountry": "SA" },
    "areaServed": { "@type": "City", "name": "Makkah Al-Mukarramah" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    { question: "How do I book a taxi from KAIA Jeddah Airport to my Makkah hotel?", answer: "WhatsApp us with your flight number, arrival date, and Makkah hotel name. We confirm instantly, assign a driver, and send you their details before you land. Your driver meets you at KAIA arrivals with a name board. Drive to Makkah takes 1.5–2 hours depending on checkpoint traffic." },
    { question: "Do you have Hajj-permitted vehicles for 2026?", answer: "Yes. Our GMC Yukon XLs and Toyota Staria vans carry the required Ministry of Hajj permits to pass Makkah security cordons and reach inner hotel zones. Without these permits, taxis cannot enter the Haram zone — pre-booking with a licensed operator is essential for Hajj 2026." },
    { question: "How long does it take from KAIA Airport to Makkah?", answer: "1.5–2 hours via the Haramain Highway under normal conditions. During peak Hajj days (8th–13th Dhul Hijjah), allow 2.5–3 hours due to checkpoint queues. We account for this in all Hajj bookings and track your flight for delays." },
    { question: "What is the closest private taxi drop-off to Masjid Al-Haram?", answer: "Private vehicles cannot enter the immediate Haram pedestrian zone. We drop you at the nearest legally permitted checkpoint (Ajyad, Kudai, or the hotel's designated access point), which is a manageable walk to the Grand Mosque. We know which access points are open at each time during Hajj." },
    { question: "Can you arrange Mina, Arafat, and Muzdalifah transfers during Hajj?", answer: "Yes — but Hajj ritual site transfers (Mina, Arafat, Muzdalifah) during the 8th–13th Dhul Hijjah are strictly regulated. Only registered Hajj transport operators can provide these transfers and they must be booked as part of a Hajj package. Contact us well in advance to arrange Hajj movement logistics." },
    { question: "Can you arrange Makkah to Madinah transport after Hajj?", answer: "Yes. Post-Hajj Makkah to Madinah transfers (4.5 hours via Hijrah Highway) are one of our most popular services. Book at least 48 hours in advance — vehicles fill up quickly after the main Hajj days. We include the Miqat stop if you are travelling to Madinah first." },
    { question: "Do you offer Makkah Ziyarat tours (Hira, Thawr, Mina)?", answer: "Yes. Our Makkah Ziyarat tour visits Jabal Al-Nour (Cave of Hira), Jabal Thawr (Cave of Thawr), Mina tent city, the plain of Arafat, and Muzdalifah. Half-day and full-day options. Fixed rate with a driver who understands the Islamic significance of each site." },
    { question: "What is your Makkah taxi price for large groups?", answer: "Group pricing depends on your party size and vehicle type. GMC Yukon XL seats 7 with luggage (ideal for families). Toyota Hiace seats 12. Toyota Coaster for 24+. WhatsApp us your group size and route — we confirm the fixed rate immediately. No hidden charges, no surge pricing during Hajj." },
    { question: "Which Makkah hotel areas can you reach?", answer: "We serve all Makkah hotel zones: Markaziah (Clock Tower / Abraj Al-Bait area), Aziziyah, Misfalah, Shisha, Kudai, Jarwal, and outer districts. Each zone has specific vehicle access rules that our drivers know in detail." },
    { question: "Can I book Makkah transport for Umrah outside Hajj season?", answer: "Yes — we operate 24/7 year-round. Umrah season (especially Ramadan) is our busiest non-Hajj period. Booking in advance during Ramadan is strongly recommended as vehicles are in high demand." },
    { question: "Do you offer pickup from Makkah to KAIA Airport?", answer: "Yes. Makkah to KAIA departure transfers are available 24 hours a day. We recommend booking 24 hours in advance. Allow 2.5–3 hours from Makkah for peak Hajj periods; 1.5–2 hours at other times. Your driver monitors for road access changes." },
    { question: "What vehicles do you use for Makkah airport transfers?", answer: "Toyota Camry (1–3 passengers, standard luggage), GMC Yukon XL (4–7 passengers, large Hajj luggage), Toyota Staria/Hyundai Staria (5–7 passengers, family comfort), Toyota Hiace (8–12 passengers, group transfers). All vehicles are air-conditioned and regularly maintained." }
];

export default function MakkahPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    };

    const districts = [
        { name: 'Masjid Al-Haram', desc: 'The Grand Mosque — Tawaf, Sa\'i, Zamzam & Kaaba proximity', href: '/locations/makkah/masjid-al-haram', color: 'bg-emerald-700', emoji: '🕌' },
        { name: 'Mina', desc: 'Tent City — Jamarat (Ramy Al-Jamarat) & Hajj ritual hub', href: '/locations/makkah/mina', color: 'bg-amber-700', emoji: '⛺' },
        { name: 'Arafat', desc: 'Plain of Arafat — Wuquf on 9 Dhul Hijjah, Jabal Al-Rahma', href: '/locations/makkah/arafat', color: 'bg-orange-700', emoji: '🌄' },
        { name: 'Jabal Al-Nour', desc: 'Mountain of Light — Cave of Hira, first Quranic revelation', href: '/locations/makkah/jabal-al-nour', color: 'bg-stone-700', emoji: '🏔️' },
        { name: 'Aziziyah', desc: 'Outer hotel district — 3km from Haram, major pilgrim zone', href: '/locations/makkah/aziziyah', color: 'bg-blue-800', emoji: '🏨' },
        { name: 'Muzdalifah', desc: 'Open-air Hajj site — overnight 9–10 Dhul Hijjah, pebble collection', href: '/locations/makkah/muzdalifah', color: 'bg-purple-800', emoji: '🌙' },
    ];

    const landmarks = [
        { name: 'Masjid Al-Haram', note: 'The Grand Mosque — world\'s largest' },
        { name: 'The Holy Kaaba', note: 'The Qibla of all Muslims' },
        { name: 'Zamzam Well', note: 'Sacred water, 5000+ years old' },
        { name: 'Abraj Al-Bait (Clock Tower)', note: 'Tallest clock tower in the world' },
        { name: 'Jabal Al-Nour (Hira Cave)', note: 'First Quranic revelation, 621 CE' },
        { name: 'Jabal Thawr (Cave of Thawr)', note: 'Hijrah — Prophet & Abu Bakr RA hid here' },
        { name: 'Mina Tent City', note: 'World\'s largest annual tent city' },
        { name: 'Plain of Arafat', note: 'Wuquf — the essence of Hajj' },
        { name: 'Muzdalifah', note: 'Open-air overnight site between Arafat & Mina' },
        { name: 'Masjid Al-Khayf', note: 'Prophetic mosque in Mina valley' },
        { name: 'Masjid Namirah', note: 'Massive mosque at the boundary of Arafat' },
        { name: 'Jannat Al-Mualla', note: 'Cemetery — Khadijah RA & Prophet\'s family' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hajj 2026 urgency banner */}
            <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                <span>Hajj 2026 — Hajj-permitted vehicles are booking fast. <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hajj%202026%20taxi%20in%20Makkah" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline ml-1">Reserve now via WhatsApp.</a></span>
            </div>

            {/* Hero */}
            <section className="relative h-[520px] bg-gray-900">
                <Image src="/makkah-royal-clock-tower.webp" alt="Makkah Al-Mukarramah — Abraj Al-Bait Clock Tower and Masjid Al-Haram" width={1200} height={520} className="w-full h-full object-cover opacity-55" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Makkah Al-Mukarramah — The Holiest City</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Makkah Taxi Service — <span className="text-amber-400">Hajj 2026</span> & Umrah Transport
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Trusted private taxi in <strong>Makkah Al-Mukarramah</strong> — KAIA Airport transfers, Haram hotel transport, Ziyarat tours, Mina & Arafat Hajj transfers. Fixed rates, Hajj-permitted vehicles, 24/7 WhatsApp booking.
                            </p>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Makkah%20taxi%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                    <WhatsAppIcon className="w-5 h-5" />Book Makkah Taxi — WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="py-10 bg-emerald-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">KAIA Airport Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">1.5 hrs</div><div className="text-sm opacity-85">KAIA to Makkah Hotel</div></div>
                        <div><div className="text-3xl font-bold mb-1">12+</div><div className="text-sm opacity-85">Ziyarat Sites Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">100%</div><div className="text-sm opacity-85">Fixed Rate — No Surge</div></div>
                    </div>
                </div>
            </section>

            {/* Districts grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Makkah Districts & Sacred Sites</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Each district has specific vehicle access rules, entry protocols, and transport logistics. Our drivers know all of them.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.name} href={d.href} className="block group">
                                <div className={`${d.color} text-white p-6 rounded-2xl hover:scale-[1.02] transition-all shadow-md`}>
                                    <div className="text-3xl mb-3">{d.emoji}</div>
                                    <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                                    <p className="text-sm opacity-85 mb-4">{d.desc}</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span>Transport guide</span><ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel times */}
            <section className="py-12 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Makkah</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-emerald-900 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Drive Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'KAIA Jeddah Airport', dist: '90 km', time: '1.5 hrs', note: 'Via Haramain Highway' },
                                    { dest: 'Jeddah City', dist: '80 km', time: '1 hr', note: 'Via Route 40' },
                                    { dest: 'Taif', dist: '90 km', time: '1.5 hrs', note: 'Via Taif Mountain Road' },
                                    { dest: 'Madinah', dist: '450 km', time: '4.5 hrs', note: 'Via Hijrah Highway — Miqat stop available' },
                                    { dest: 'Riyadh', dist: '950 km', time: '9–10 hrs', note: 'Via Route 40 east' },
                                    { dest: 'Abha', dist: '500 km', time: '5 hrs', note: 'Via Taif-Abha highway' },
                                    { dest: 'Yanbu', dist: '350 km', time: '3.5 hrs', note: 'Via coastal highway' },
                                    { dest: 'Al Baha', dist: '340 km', time: '3.5 hrs', note: 'Via Taif highland road' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-emerald-800">{row.time}</td>
                                        <td className="px-6 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Problems solved */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Makkah Transport — Problems We Solve</h2>
                        <p className="text-xl text-gray-600">The Holy City has unique transport challenges. Our local knowledge eliminates every one of them.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { problem: 'Haram Access Restrictions', detail: 'Private vehicles cannot enter the pedestrian Haram zone. First-time visitors often end up dropped far from their hotel with heavy luggage.', solution: 'We know the closest legal drop-off point for every Markaziah hotel — your walk is minimised.' },
                            { problem: 'Hajj Security Checkpoints', detail: 'During Hajj, all vehicles entering Makkah pass through Ministry of Interior checkpoints. Vehicles without Hajj permits are turned back.', solution: 'Our fleet carries valid Hajj transport permits — zero checkpoint delays for your booking.' },
                            { problem: 'Peak Prayer Hour Traffic', detail: 'Gridlock after Maghrib and Isha prayers is severe around the Haram. Taxis refuse short trips; walking with elderly family members is dangerous.', solution: 'Pre-scheduled rides and driver coordination ensures you are always picked up on time, every prayer.' },
                        ].map((p, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-5">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.problem}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{p.detail}</p>
                                <div className="flex items-start gap-2 text-emerald-700 font-medium text-sm">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span>{p.solution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Makkah landmarks */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Makkah Sacred Sites & Landmarks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {landmarks.map((l, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{l.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{l.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">How Makkah Booking Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: '1', title: 'WhatsApp Your Details', desc: 'Send us your hotel name, travel date, and group size. We confirm the exact pickup point based on Makkah access rules.' },
                            { n: '2', title: 'Driver Details Confirmed', desc: 'Receive your driver\'s name, mobile number, and vehicle plate. No waiting, no searching in the heat.' },
                            { n: '3', title: 'Arrive at the Haram', desc: 'Your driver navigates the checkpoints and drops you at the closest legal access point to your hotel. Fixed rate — no extras.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <span className="text-3xl font-bold text-emerald-700">{s.n}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">Makkah Transport Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'KAIA Airport to Makkah', desc: 'Meet & greet at KAIA arrivals — direct to your Makkah hotel. Flight tracked for delays. Hajj permits included.', icon: Navigation, href: '/routes/jeddah-airport-to-makkah' },
                            { name: 'Haram Hotel Transport', desc: 'Daily hotel-to-Haram transfers. Pre-scheduled so you reach every Fajr and Isha prayer on time.', icon: MapPin, href: '/services/hotel-to-haram-transport' },
                            { name: 'Makkah Ziyarat Tour', desc: 'Jabal Al-Nour (Cave of Hira), Jabal Thawr, Mina, Arafat, Muzdalifah. Half-day and full-day options.', icon: Navigation, href: '/services/makkah-ziyarat' },
                            { name: 'Makkah to Madinah', desc: 'Post-Hajj / Umrah intercity — 4.5 hours via Hijrah Highway. Miqat stop included. Fixed rate.', icon: Car, href: '/routes/makkah-to-madinah' },
                            { name: 'Group Hajj Transport', desc: 'Coordinated multi-vehicle transport for families and Umrah groups. Yukon XL, Hiace, and Coaster options.', icon: Users, href: '/fleet' },
                            { name: 'Makkah to Jeddah City', desc: '80km to Jeddah city centre or port. Popular for layover pilgrims and Umrah groups.', icon: Car, href: '/routes/makkah-to-jeddah' },
                        ].map((s, i) => (
                            <Link key={i} href={s.href} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-transparent group-hover:border-emerald-100 h-full">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                                        <s.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{s.name}</h3>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in Makkah?</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">Makkah transport requires specific local expertise — Hajj permits, checkpoint knowledge, Haram zone access rules, and hotel-by-hotel drop-off protocols. We have operated in Makkah for years and know every detail.</p>
                            <ul className="space-y-4">
                                {[
                                    'Hajj-permitted vehicles — Ministry of Hajj clearance passes',
                                    'Checkpoint navigation knowledge for all Makkah cordons',
                                    'Closest legal Haram drop-off for every hotel zone',
                                    'Flight tracking — your driver waits at no extra cost',
                                    'Fixed rates agreed before travel — zero surprises',
                                    '24/7 WhatsApp — English, Arabic, Urdu support',
                                    'Serving pilgrims from 50+ countries',
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/makkah-haram-night-view.webp" alt="Masjid Al-Haram Makkah night view — Haram Taxi Service" width={800} height={480} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular routes */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Routes from Makkah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { from: 'Makkah', to: 'KAIA Jeddah Airport', time: '1.5 hrs', href: '/routes/makkah-to-jeddah-airport' },
                            { from: 'Makkah', to: 'Madinah', time: '4.5 hrs', href: '/routes/makkah-to-madinah' },
                            { from: 'Makkah', to: 'Taif', time: '1.5 hrs', href: '/routes/makkah-to-taif' },
                            { from: 'Makkah', to: 'Riyadh', time: '9–10 hrs', href: '/routes/makkah-to-riyadh' },
                            { from: 'KAIA Jeddah Airport', to: 'Makkah', time: '1.5 hrs', href: '/routes/jeddah-airport-to-makkah' },
                            { from: 'Madinah', to: 'Makkah', time: '4.5 hrs', href: '/routes/madinah-to-makkah' },
                            { from: 'Makkah', to: 'Abha', time: '5 hrs', href: '/routes/makkah-to-abha' },
                            { from: 'Makkah', to: 'Yanbu', time: '3.5 hrs', href: '/routes/makkah-to-yanbu' },
                        ].map((r, i) => (
                            <Link key={i} href={r.href} className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all">
                                    <div className="text-xs text-gray-400 mb-1">{r.from}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-bold text-gray-900 text-sm">{r.to}</span>
                                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                                        <Clock className="w-3 h-3" />{r.time}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
                            <Wallet className="w-4 h-4 text-emerald-700" />
                            <span className="text-emerald-800 text-sm font-semibold">Fixed Pricing — No Surge</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Makkah Taxi Pricing Guide</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Prices are agreed on WhatsApp before you travel. What you see is what you pay. No Hajj surcharges.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { vehicle: 'Toyota Camry', seats: '1–3 passengers', use: 'Solo & couple transfers, airport pickups', badge: 'Standard' },
                            { vehicle: 'GMC Yukon XL', seats: '4–7 passengers', use: 'Family Hajj transfers, large luggage groups', badge: 'Most Popular' },
                            { vehicle: 'Toyota Hiace / Staria', seats: '8–12 passengers', use: 'Group Hajj transport, Umrah delegations', badge: 'Groups' },
                        ].map((v, i) => (
                            <div key={i} className={`p-8 rounded-2xl border-2 ${i === 1 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 bg-gray-50'}`}>
                                {i === 1 && <div className="text-xs font-bold text-emerald-700 bg-emerald-200 px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>}
                                <h3 className={`text-xl font-bold mb-2 ${i === 1 ? 'text-emerald-900' : 'text-gray-900'}`}>{v.vehicle}</h3>
                                <p className="text-sm text-gray-600 mb-1">{v.seats}</p>
                                <p className="text-sm text-gray-500">{v.use}</p>
                                <a href="https://wa.me/966575806733?text=I%20need%20a%20Makkah%20taxi%20quote" target="_blank" rel="noopener noreferrer" className={`mt-6 block text-center py-3 rounded-xl font-semibold text-sm ${i === 1 ? 'bg-emerald-700 text-white' : 'bg-white border border-gray-300 text-gray-700'} hover:opacity-90 transition-opacity`}>
                                    Get WhatsApp Quote
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">Trusted by Hajj & Umrah Pilgrims</h2>
                    <p className="text-center text-gray-500 mb-12">From 50+ countries worldwide</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Br. Tariq J.', country: 'London, UK', review: 'After a 12-hour flight from London to KAIA, the last thing my family wanted was to negotiate with taxi drivers. Our driver was waiting with a name board, the Yukon was cold, and we arrived at the Haram hotel within 90 minutes. The fixed price was confirmed before we even left London.' },
                            { name: 'Sister Ayesha N.', country: 'Jakarta, Indonesia', review: 'Booked via WhatsApp — confirmed in 5 minutes. Driver knew exactly which Makkah drop-off point was closest to our Aziziyah hotel. Professional and respectful throughout. Will use again for Hajj 2026 without hesitation.' },
                            { name: 'Br. Imran H.', country: 'Lahore, Pakistan', review: 'Five people and full Hajj luggage. The Yukon XL handled everything comfortably. Our driver cleared every Makkah checkpoint without delays. The fixed price meant no disputes on arrival. Pre-booking is the only sensible way to travel during Hajj.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col">
                                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}</div>
                                <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">&quot;{r.review}&quot;</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{r.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CustomerUpdates location="Makkah" />

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Makkah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-emerald-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <NearbyCities currentCity="makkah" />

            {/* Final CTA */}
            <section className="py-20 bg-emerald-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-4">Book Your Makkah Taxi for Hajj 2026</h2>
                    <p className="text-xl mb-2 opacity-90">Hajj-permitted vehicles. Fixed rates. 24/7 WhatsApp. No pre-payment required.</p>
                    <p className="text-sm mb-8 opacity-70">Trusted by pilgrims from 50+ countries. Instant WhatsApp confirmation.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Makkah%20taxi%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-lg">
                            <WhatsAppIcon className="w-5 h-5" />Book Makkah Taxi — WhatsApp
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
