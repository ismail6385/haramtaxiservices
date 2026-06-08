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
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk' },
    title: 'Tabuk Taxi Service 2026 | NEOM, AlUla, Airport & Jordan Border Transfers',
    description: 'Trusted taxi service in Tabuk — NEOM Bay transfers, AlUla day trips, Prince Sultan Airport pickups, Haql Red Sea, and Jordan border crossings. Fixed rates, 24/7 WhatsApp.',
    keywords: ['Tabuk taxi', 'NEOM taxi Tabuk', 'Tabuk airport transfer', 'AlUla taxi from Tabuk', 'Haql taxi Tabuk', 'Jordan border taxi Tabuk', 'Wadi Disah tour Tabuk', 'The Line NEOM taxi'],
    openGraph: {
        title: 'Tabuk Taxi Service — NEOM, AlUla, Airport & Jordan Border Transfers',
        description: 'Professional taxi in Tabuk. NEOM Bay, The Line, AlUla heritage, Haql Red Sea, Jordan border, Prince Sultan Airport. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/tabuk',
        type: 'website',
        images: [{ url: '/haql-shipwreck.webp', width: 1200, height: 630, alt: 'Haql Shipwreck — Tabuk Red Sea Coast' }],
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Tabuk",
    "description": "Professional taxi service in Tabuk Region. NEOM transfers, AlUla day trips, airport pickups, Jordan border crossings, Red Sea coast trips.",
    "@id": "https://haramtaxiservice.com/locations/tabuk",
    "url": "https://haramtaxiservice.com/locations/tabuk",
    "telephone": "+966575806733",
    "priceRange": "$$",
    "address": { "@type": "PostalAddress", "streetAddress": "Tabuk City", "addressLocality": "Tabuk", "addressCountry": "SA" },
    "areaServed": { "@type": "City", "name": "Tabuk" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    { question: "How do I book a taxi from Tabuk Airport (TUU) to my hotel?", answer: "WhatsApp us your flight number, arrival date, and hotel or destination. We meet you at Prince Sultan bin Abdulaziz Airport arrivals with a name board, load your luggage, and drive directly to your destination. Fixed rate confirmed before your flight." },
    { question: "Do you provide transfers to NEOM (The Line / NEOM Bay)?", answer: "Yes. Tabuk to NEOM Bay is approximately 200km northwest — about 2.5 hours. We serve all NEOM sub-destinations including NEOM Bay (Sharma), The Line site, Sindalah Island access point, and the Gayal/Trojena area. Passenger permits required for active NEOM construction zones — ensure your NEOM host has issued permits before booking." },
    { question: "Can I get a taxi from Tabuk to AlUla?", answer: "Yes. Tabuk to AlUla is approximately 340km — about 3.5 hours via Route 375 south. AlUla is one of Saudi Arabia's premier heritage tourism destinations with Hegra (Madain Saleh), Dadan, Jabal Ikmah, and the AlUla Old Town. Day trips and overnight drop-offs both available." },
    { question: "Do you offer transfers to the Jordan border (Haql / Halat Ammar)?", answer: "Yes. Tabuk to the Halat Ammar border crossing is approximately 150km. Tabuk to Haql (for the Red Sea shipwreck diving site and the Al Durra border crossing to Jordan) is approximately 200km. Border crossings require valid Saudi exit permits, passports, and Jordan visas — ensure all documents are in order before booking." },
    { question: "How long is the drive from Tabuk to Madinah?", answer: "Tabuk to Madinah is approximately 620km — about 6 hours via the Hejaz highway south. A popular route for pilgrims from the northwest Saudi region travelling for Umrah or Hajj via Madinah." },
    { question: "How long is the drive from Tabuk to Jeddah?", answer: "Tabuk to Jeddah is approximately 1,200km — about 12 hours via the Red Sea coastal highway south through Yanbu. Our drivers are experienced on this long-haul route. Two drivers are assigned for journeys over 10 hours." },
    { question: "Can I book a Tabuk to Riyadh taxi?", answer: "Yes. Tabuk to Riyadh is approximately 1,300km — about 12–13 hours via Route 80 east through Hail. A long overnight journey best booked 48 hours in advance. Two drivers assigned for safety." },
    { question: "Do you do Wadi Disah tours from Tabuk?", answer: "Yes. Wadi Disah (Wadi Qaraqir) is approximately 60km south of Tabuk — one of the most dramatic canyon landscapes in Saudi Arabia. We offer half-day and full-day tours with a driver who waits while you explore the canyon." },
    { question: "What is the fare from Tabuk Airport to the city?", answer: "Tabuk Airport (TUU) to central Tabuk city is approximately 15–20km — 20 minutes. We confirm the exact fixed rate on WhatsApp before your flight. No meter, no surprises." },
    { question: "Do you provide transport for NEOM workers rotating out of Tabuk Airport?", answer: "Yes — NEOM worker rotation transport (Tabuk Airport ↔ NEOM site) is a significant part of our Tabuk service. We handle groups and individuals. NEOM contractors booking transfers: WhatsApp us your project site, worker count, and rotation dates." },
    { question: "Is the Haql shipwreck accessible by taxi from Tabuk?", answer: "Yes. Haql is approximately 200km northwest of Tabuk — about 2 hours. The Haql shipwreck (a stranded cargo ship visible from the shore) is a popular photography and diving destination on the Gulf of Aqaba. We offer day trips from Tabuk to Haql with driver waiting for your return." },
    { question: "What vehicles do you use for Tabuk transfers?", answer: "Toyota Camry (1–3 passengers, standard trips), GMC Yukon XL (4–7 passengers, families with luggage), Toyota Hiace (8–12 passengers, NEOM worker groups). For long-distance routes (Riyadh, Jeddah, Madinah), we assign newer long-range vehicles with two drivers." }
];

export default function TabukPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    };

    const districts = [
        { name: 'Tabuk Castle & Old City', desc: 'Ottoman fort, Hijaz Railway station, Prophet\'s ﷺ mosque', href: '/locations/tabuk/tabuk-castle', color: 'bg-stone-700', emoji: '🏰' },
        { name: 'NEOM', desc: 'The Line, Sindalah, NEOM Bay, Gayal — 200km from Tabuk', href: '/locations/tabuk/neom', color: 'bg-cyan-800', emoji: '🌆' },
        { name: 'Haql & Red Sea Coast', desc: 'Shipwreck site, Gulf of Aqaba diving, Jordan border crossing', href: '/locations/tabuk/haql', color: 'bg-blue-800', emoji: '🚢' },
        { name: 'Tabuk Airport (TUU)', desc: 'Prince Sultan bin Abdulaziz Airport — transfers & pickups', href: '/locations/tabuk/tabuk-airport', color: 'bg-slate-700', emoji: '✈️' },
        { name: 'AlUla & Hegra', desc: 'Nabataean tombs, Madain Saleh, Jabal Ikmah — 3.5 hrs south', href: '/locations/tabuk/alula', color: 'bg-amber-800', emoji: '🏺' },
        { name: 'Wadi Disah', desc: 'Spectacular canyon (Wadi Qaraqir), rock formations — 60km south', href: '/locations/tabuk/wadi-disah', color: 'bg-green-800', emoji: '🏜️' },
    ];

    const landmarks = [
        { name: 'Tabuk Castle (Al-Qal\'a)', note: 'Ottoman-era fort — Prophet ﷺ camped here, 630 CE' },
        { name: 'Hijaz Railway Station', note: 'Ottoman Hejaz Railway — Lawrence of Arabia era' },
        { name: 'Masjid Al-Nabawi Al-Tabuki', note: 'Prophet\'s mosque in Tabuk — Tabuk Expedition site' },
        { name: 'NEOM Bay', note: 'Saudi Arabia\'s Vision 2030 megaproject entrance' },
        { name: 'The Line (NEOM)', note: '170km linear city — construction site visits' },
        { name: 'Haql Shipwreck', note: 'Iconic stranded cargo ship — Gulf of Aqaba' },
        { name: 'Wadi Disah (Wadi Qaraqir)', note: 'Dramatic sandstone canyon — 60km from city' },
        { name: 'Jabal Al-Lawz', note: 'Saudi Arabia\'s highest peak in Tabuk — 2,580m' },
        { name: 'AlUla (Hegra/Madain Saleh)', note: 'Nabataean heritage site — 340km south' },
        { name: 'Halat Ammar Border', note: 'Saudi-Jordan land border crossing' },
        { name: 'Al Shaar Mountains', note: 'Desert mountain trekking north of Tabuk' },
        { name: 'Gulf of Aqaba Red Sea', note: 'Pristine diving and snorkelling — Haql coast' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative h-[520px] bg-gray-900">
                <Image src="/haql-shipwreck.webp" alt="Haql Shipwreck — Tabuk Red Sea Coast Saudi Arabia" width={1200} height={520} className="w-full h-full object-cover opacity-55" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Tabuk Region — Northwest Saudi Arabia</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Tabuk Taxi Service — <span className="text-amber-400">NEOM, AlUla & Airport</span> Transfers
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Professional taxi in <strong>Tabuk</strong> — NEOM Bay & The Line transfers, AlUla heritage day trips, Prince Sultan Airport pickups, Haql Red Sea coast, Jordan border crossings, and intercity routes to Madinah, Jeddah & Riyadh. Fixed rates, 24/7 WhatsApp.
                            </p>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Tabuk" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                    <WhatsAppIcon className="w-5 h-5" />Book Tabuk Taxi — WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="py-10 bg-stone-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">Airport & NEOM Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">2.5 hrs</div><div className="text-sm opacity-85">Tabuk to NEOM Bay</div></div>
                        <div><div className="text-3xl font-bold mb-1">3.5 hrs</div><div className="text-sm opacity-85">Tabuk to AlUla</div></div>
                        <div><div className="text-3xl font-bold mb-1">100%</div><div className="text-sm opacity-85">Fixed Rate — No Surge</div></div>
                    </div>
                </div>
            </section>

            {/* Districts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tabuk Districts & Destinations</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">From the Prophet&apos;s historic castle to Saudi Arabia&apos;s most ambitious megaproject — Tabuk is a gateway to extraordinary destinations.</p>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Tabuk</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-stone-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Drive Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'NEOM Bay (Sharma)', dist: '200 km', time: '2.5 hrs', note: 'Via Route 55 northwest' },
                                    { dest: 'AlUla (Hegra/Madain Saleh)', dist: '340 km', time: '3.5 hrs', note: 'Via Route 375 south' },
                                    { dest: 'Haql (Shipwreck / Jordan Border)', dist: '200 km', time: '2 hrs', note: 'Via Gulf of Aqaba coast' },
                                    { dest: 'Wadi Disah', dist: '60 km', time: '50 min', note: 'Via Route 15 south' },
                                    { dest: 'Halat Ammar Border (Jordan)', dist: '150 km', time: '1.5 hrs', note: 'Main Saudi–Jordan crossing' },
                                    { dest: 'Madinah', dist: '620 km', time: '6 hrs', note: 'Via Hejaz highway south' },
                                    { dest: 'Jeddah (KAIA)', dist: '1,200 km', time: '12 hrs', note: 'Via Red Sea coast — 2 drivers' },
                                    { dest: 'Riyadh', dist: '1,300 km', time: '12–13 hrs', note: 'Via Route 80 through Hail — 2 drivers' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-amber-800">{row.time}</td>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tabuk Transport — Problems We Solve</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { problem: 'NEOM Entry Logistics', detail: 'NEOM has multiple sub-destinations (NEOM Bay, The Line site, Gayal, Sindalah access) each with different routes and checkpoint procedures. First-time visitors frequently misdirect.', solution: 'Our drivers know all NEOM sub-destination routes and checkpoint entry procedures.' },
                            { problem: 'No Ride-Hailing in Remote Areas', detail: 'Wadi Disah, Haql, and the Jordan border are all 1.5–2 hours from Tabuk. Ride-hailing apps have no coverage. Stranding on the return journey is a real risk.', solution: 'Our driver waits at your destination for the return — full round-trip, fixed rate agreed upfront.' },
                            { problem: 'Border Crossing Complexity', detail: 'Saudi–Jordan border crossings (Halat Ammar, Haql) involve multiple lanes, document checks, and vehicle clearances confusing for first-timers.', solution: 'Our drivers know the crossing procedure and which lanes to use for private passenger vehicles.' },
                        ].map((p, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-5">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.problem}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{p.detail}</p>
                                <div className="flex items-start gap-2 text-amber-800 font-medium text-sm">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span>{p.solution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Landmarks */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tabuk Region — Key Sites & Landmarks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {landmarks.map((l, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">How Tabuk Booking Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: '1', title: 'WhatsApp Your Route', desc: 'Tell us your pickup point (hotel, airport, or address), your destination, and group size. For NEOM: include your sub-destination and permit status.' },
                            { n: '2', title: 'Rate Confirmed Instantly', desc: 'We confirm a fixed rate immediately — the number on WhatsApp is what you pay. Driver details sent before your journey.' },
                            { n: '3', title: 'Driver Waits for You', desc: 'For Wadi Disah, Haql, or AlUla day trips — your driver waits at the site for your return. No stranding in remote desert locations.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <span className="text-3xl font-bold text-amber-800">{s.n}</span>
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">Tabuk Taxi Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Tabuk Airport Transfers', desc: 'Meet & greet at Prince Sultan Airport (TUU). Flight tracked for delays. Direct to hotel or NEOM.', icon: Navigation, href: '/services/tabuk-airport-transfer' },
                            { name: 'NEOM Bay & The Line', desc: 'Tabuk to NEOM Bay, The Line, Sindalah, Gayal. Checkpoint-familiar drivers. Fixed rate.', icon: Car, href: '/locations/tabuk/neom' },
                            { name: 'AlUla Heritage Tours', desc: 'Day trip from Tabuk to AlUla — Hegra tombs, Dadan, Jabal Ikmah. 3.5 hrs each way.', icon: Navigation, href: '/locations/tabuk/alula' },
                            { name: 'Haql & Jordan Border', desc: 'Red Sea coast to Haql shipwreck and Halat Ammar / Al Durra border crossings.', icon: MapPin, href: '/locations/tabuk/haql' },
                            { name: 'Wadi Disah Canyon Tour', desc: 'Half-day or full-day canyon tour — driver waits while you hike the sandstone gorge.', icon: Navigation, href: '/locations/tabuk/wadi-disah' },
                            { name: 'Tabuk to Madinah', desc: '620km Hejaz highway south. 6 hours. Popular with northwest pilgrims for Umrah.', icon: Car, href: '/routes/tabuk-to-madinah' },
                        ].map((s, i) => (
                            <Link key={i} href={s.href} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-transparent group-hover:border-amber-100 h-full">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                                        <s.icon className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in Tabuk?</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">Tabuk is a vast region spanning desert highways, NEOM construction zones, Jordan border crossings, and remote canyon landscapes. Our local drivers know every route and every access checkpoint.</p>
                            <ul className="space-y-4">
                                {[
                                    'NEOM sub-destination knowledge — all zones covered',
                                    'Jordan border crossing experience (Halat Ammar & Haql)',
                                    'Remote destination driver-waits service (Wadi Disah, Haql)',
                                    'Two drivers on all journeys over 10 hours',
                                    'Flight tracking — no extra charge for delays',
                                    'Fixed rates confirmed on WhatsApp before travel',
                                    '24/7 availability — including NEOM worker rotations',
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/haql-shipwreck.webp" alt="Haql Red Sea Coast — Tabuk Region Saudi Arabia" width={800} height={480} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular routes */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Routes from Tabuk</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { from: 'Tabuk', to: 'NEOM Bay', time: '2.5 hrs', href: '/locations/tabuk/neom' },
                            { from: 'Tabuk', to: 'AlUla', time: '3.5 hrs', href: '/locations/tabuk/alula' },
                            { from: 'Tabuk', to: 'Haql (Shipwreck)', time: '2 hrs', href: '/locations/tabuk/haql' },
                            { from: 'Tabuk', to: 'Wadi Disah', time: '50 min', href: '/locations/tabuk/wadi-disah' },
                            { from: 'Tabuk', to: 'Madinah', time: '6 hrs', href: '/routes/tabuk-to-madinah' },
                            { from: 'Tabuk', to: 'Jordan Border', time: '1.5 hrs', href: '/locations/tabuk/haql' },
                            { from: 'Tabuk', to: 'Makkah', time: '13 hrs', href: '/routes/tabuk-to-makkah' },
                            { from: 'Tabuk', to: 'Riyadh', time: '12–13 hrs', href: '/routes/tabuk-to-riyadh' },
                        ].map((r, i) => (
                            <Link key={i} href={r.href} className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all">
                                    <div className="text-xs text-gray-400 mb-1">{r.from}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-bold text-gray-900 text-sm">{r.to}</span>
                                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-amber-700 transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-amber-800 font-semibold">
                                        <Clock className="w-3 h-3" />{r.time}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Trusted by Tabuk Travellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'James M.', country: 'NEOM Contractor, UK', review: 'Used Haram Taxi for the Tabuk Airport to NEOM Bay rotation transfer three times now. Driver knows exactly which checkpoint to use and the NEOM entry procedure. On time every rotation. Nothing else has been as reliable.' },
                            { name: 'Khalid Al-Rashidi', country: 'Saudi Tourist, Riyadh', review: 'Booked a full day trip to Wadi Disah and AlUla. Driver waited patiently at both sites, knew the terrain, and gave excellent route advice. The Wadi Disah canyon was extraordinary — the driver made the whole day.' },
                            { name: 'Lars H.', country: 'Travel Photographer, Sweden', review: 'Needed to reach Haql for the shipwreck photography and then cross to Jordan. Driver handled both the Saudi exit paperwork guidance and the border lane selection. Seamless — exactly what you need on a complex trip.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
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

            <CustomerUpdates location="Tabuk" />

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tabuk Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <NearbyCities currentCity="tabuk" />

            {/* Final CTA */}
            <section className="py-20 bg-stone-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-4">Book Your Tabuk Taxi</h2>
                    <p className="text-xl mb-2 opacity-90">NEOM, AlUla, Airport, Haql — fixed rates, 24/7 WhatsApp. No pre-payment required.</p>
                    <p className="text-sm mb-8 opacity-70">Instant WhatsApp confirmation.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Tabuk" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-lg">
                            <WhatsAppIcon className="w-5 h-5" />Book Tabuk Taxi — WhatsApp
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
