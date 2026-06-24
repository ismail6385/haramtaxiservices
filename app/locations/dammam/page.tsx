import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Navigation, ArrowRight, AlertCircle, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import LocationNAP from '@/components/LocationNAP';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam' },
    title: 'Dammam Taxi Service 2026 | KFAC Airport, Bahrain Causeway & Eastern Province',
    description: 'Trusted taxi in Dammam — King Fahd Airport transfers, Bahrain Causeway crossings, Dhahran/Aramco trips, Jubail Industrial City, and intercity routes to Riyadh, Kuwait & Jeddah. Fixed rates, 24/7.',
    keywords: ['Dammam taxi', 'KFAC airport taxi Dammam', 'Bahrain Causeway taxi', 'Dammam to Bahrain taxi', 'Dhahran Aramco taxi', 'Jubail taxi', 'Khobar taxi service', 'Dammam airport transfer DMM'],
    openGraph: {
        title: 'Dammam Taxi — KFAC Airport, Bahrain Causeway & Eastern Province Transfers',
        description: 'Professional taxi in Dammam. Bahrain Causeway, KFAC Airport (DMM), Aramco/Dhahran, Jubail, Khobar. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/dammam',
        type: 'website',
        images: [{ url: '/dammam-corniche.webp', width: 1200, height: 630, alt: 'Dammam Corniche — Eastern Province Saudi Arabia' }],
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Dammam & Eastern Province",
    "description": "Professional taxi service in Dammam, Al Khobar, Dhahran, and Jubail. Bahrain Causeway crossings, KFAC Airport transfers, Aramco trips, intercity routes.",
    "@id": "https://haramtaxiservice.com/locations/dammam",
    "url": "https://haramtaxiservice.com/locations/dammam",
    "telephone": "+966575806733",
    "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Bank Transfer",
    "hasMap": "https://maps.google.com/?q=Haram+Taxi+Service+Dammam+Saudi+Arabia",
    "address": { "@type": "PostalAddress", "streetAddress": "Dammam City", "addressLocality": "Dammam", "addressRegion": "Eastern Province", "addressCountry": "SA" },
    "geo": { "@type": "GeoCoordinates", "latitude": 26.4207, "longitude": 50.0888 },
    "areaServed": [
        { "@type": "City", "name": "Dammam" },
        { "@type": "City", "name": "Al Khobar" },
        { "@type": "City", "name": "Dhahran" },
        { "@type": "City", "name": "Jubail" },
        { "@type": "Place", "name": "King Fahd International Airport (KFAC/DMM)" },
        { "@type": "Place", "name": "Saudi Aramco compound, Dhahran" }
    ],
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    },
    "sameAs": [
        "https://www.facebook.com/haramtaxiservice",
        "https://www.instagram.com/haramtaxiservice",
        "https://wa.me/966575806733"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "167",
        "bestRating": "5",
        "worstRating": "1"
    }
};

const faqs = [
    { question: "How do I book a taxi from KFAC Airport (DMM) to Dammam or Khobar?", answer: "WhatsApp us your flight number, arrival date, and destination (hotel name or area). We meet you at King Fahd International Airport (DMM/KFAC) arrivals with a name board. Your driver tracks your flight — no extra charge for delays. Fixed rate confirmed on WhatsApp before your flight." },
    { question: "How long does it take to cross the Bahrain Causeway by taxi?", answer: "The King Fahd Causeway is 25km long connecting Khobar (Saudi side) to Al Jasra (Bahrain side). The drive takes 20–30 minutes. Saudi and Bahrain immigration checkpoints add 15–45 minutes depending on queues. Peak times (Thursday evenings and holidays) can take 1–2 hours. Total Dammam city to Manama: typically 1 to 1.5 hours." },
    { question: "Do you drive to Bahrain from Dammam and Khobar?", answer: "Yes — Bahrain Causeway crossings are one of our most popular services. We drive you from any Dammam or Khobar address directly to any Bahrain destination (Manama, BIAP airport, hotels). Saudi nationals and GCC residents cross without a visa. Other nationalities: confirm Bahrain visa requirements in advance." },
    { question: "Can I get a taxi from Dammam to the Aramco compound in Dhahran?", answer: "Yes — Dhahran is 15km from central Dammam, approximately 20 minutes. We serve all Saudi Aramco facilities including the Aramco residential compound, admin area, KFUPM campus, and the surrounding Dhahran/Khobar corporate district. Aramco contractor and executive transfers available 24/7." },
    { question: "How long is the drive from Dammam to Riyadh?", answer: "Dammam to Riyadh is approximately 420km — about 4 hours via Route 40 (the main Riyadh-Dammam highway). One of Saudi Arabia's busiest intercity routes. Popular for business travellers, Aramco personnel, and government workers commuting between the Eastern Province and the capital." },
    { question: "How long is the drive from Dammam to Kuwait?", answer: "Dammam to Kuwait City is approximately 550km — about 5.5 hours via the Gulf highway north. Border crossing at Khafji adds 30–60 minutes. Popular route for business and family travel between the Eastern Province and Kuwait." },
    { question: "Do you serve Jubail Industrial City?", answer: "Yes — Jubail is approximately 100km north of Dammam, about 1 hour. Jubail Industrial City is one of the world's largest industrial complexes — SABIC, Saudi Aramco downstream, and dozens of major facilities. We serve contractor personnel, business visitors, and residents. Airport transfers from KFAC directly to Jubail available." },
    { question: "How far is Dammam to Jeddah?", answer: "Dammam to Jeddah is approximately 1,200km — about 12 hours via Route 40 west to Riyadh then south. A long overnight journey — we assign two drivers for safety on all journeys over 10 hours." },
    { question: "What is KFAC Airport and what airlines fly there?", answer: "King Fahd International Airport (IATA: DMM, also called KFAC) is the main airport serving Dammam, Khobar, and Dhahran. It is one of the largest airports in the world by land area. Airlines include Saudia, flyadeal, flynas, Air Arabia, Emirates, Qatar Airways, and others." },
    { question: "Can I get a taxi from Qatif to Dammam or Khobar?", answer: "Yes — Qatif is 25km north of Dammam, about 30 minutes. We serve all Qatif areas including the historic old town, Qatif Corniche, and the modern city districts. Qatif to KFAC Airport is approximately 50km, 45 minutes." },
    { question: "Do you have group vehicles for corporate Dammam transfers?", answer: "Yes. GMC Yukon XL (7 passengers), Toyota Hiace (8–12 passengers), and Toyota Coaster (20+ passengers) for corporate groups, Aramco delegations, and industrial site transfers in Jubail and Dammam. Monthly corporate accounts available." },
    { question: "What is the taxi fare from Dammam to Riyadh?", answer: "The fixed rate is confirmed on WhatsApp before booking — the number we quote is what you pay, no surge pricing. Vehicle class affects the rate (Camry for individuals, Yukon XL for families with luggage). WhatsApp us for an instant quote." },
];

export default function DammamPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    };

    const districts = [
        { name: 'Al Khobar', desc: 'Gulf Corniche, business district, Bahrain Causeway entrance point', href: '/locations/dammam/khobar', color: 'bg-sky-700', emoji: '🌊' },
        { name: 'Dhahran & Aramco', desc: 'Saudi Aramco HQ, ITHRA museum, KFUPM — 15 min from Dammam', href: '/locations/dammam/dhahran', color: 'bg-teal-800', emoji: '🏭' },
        { name: 'KFAC Airport (DMM)', desc: 'King Fahd International Airport — meet & greet, 24/7 arrivals', href: '/locations/dammam/kfac-airport', color: 'bg-slate-700', emoji: '✈️' },
        { name: 'Jubail Industrial City', desc: 'World\'s largest industrial city — SABIC, Aramco, contractors', href: '/locations/dammam/jubail', color: 'bg-orange-800', emoji: '🏗️' },
        { name: 'Bahrain Causeway', desc: 'King Fahd Causeway — 25km to Manama, Bahrain. Cross-border taxi', href: '/locations/dammam/bahrain-causeway', color: 'bg-indigo-800', emoji: '🌉' },
        { name: 'Qatif & Historic District', desc: 'Qatif Old Town, date palm groves, Red Sea Corniche — 25km north', href: '/locations/dammam/qatif', color: 'bg-green-800', emoji: '🕌' },
    ];

    const landmarks = [
        { name: 'King Fahd International Airport (KFAC/DMM)', note: 'One of the world\'s largest airports by land area' },
        { name: 'King Fahd Causeway', note: '25km causeway connecting Saudi Arabia to Bahrain' },
        { name: 'Saudi Aramco Headquarters (Dhahran)', note: 'World\'s largest oil company — global HQ' },
        { name: 'ITHRA — King Abdulaziz Center (Dhahran)', note: 'Museum, library, theatre, innovation hub' },
        { name: 'Al Khobar Corniche', note: 'Gulf waterfront promenade — restaurants, cafes' },
        { name: 'Jubail Industrial City', note: 'Largest industrial city in the world — SABIC, Aramco' },
        { name: 'Dammam Corniche & Waterfront', note: 'Gulf of Arabia seafront — parks, cafes' },
        { name: 'KFUPM (King Fahd University of Petroleum)', note: 'Premier Saudi technical university — Dhahran campus' },
        { name: 'Qatif Old Town & Palm Grove', note: 'Ancient oasis city — date palms and historic architecture' },
        { name: 'Half Moon Bay', note: 'Crescent beach — 30km south of Khobar' },
        { name: 'Ras Tanura Refinery', note: 'World\'s largest oil terminal — Aramco facility' },
        { name: 'Al Uqair Historic Port', note: 'Ancient Gulf trade port — 100km south of Dammam' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="relative h-[520px] bg-gray-900">
                <Image src="/dammam-corniche.webp" alt="Dammam Corniche — Eastern Province Saudi Arabia" width={1200} height={520} className="w-full h-full object-cover opacity-55" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Eastern Province — Dammam · Khobar · Dhahran · Jubail</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Dammam Taxi — <span className="text-sky-400">KFAC Airport, Bahrain & Eastern Province</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Professional taxi in <strong>Dammam, Al Khobar, Dhahran &amp; Jubail</strong> — King Fahd Airport pickups, Bahrain Causeway crossings, Aramco/SABIC transfers, and intercity routes to Riyadh, Kuwait &amp; Jeddah. Fixed rates, 24/7 WhatsApp.
                            </p>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Dammam" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                    <WhatsAppIcon className="w-5 h-5" />Book Dammam Taxi — WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">Airport &amp; Causeway Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">25 km</div><div className="text-sm opacity-85">Khobar to Bahrain Causeway</div></div>
                        <div><div className="text-3xl font-bold mb-1">4 hrs</div><div className="text-sm opacity-85">Dammam to Riyadh</div></div>
                        <div><div className="text-3xl font-bold mb-1">Fixed</div><div className="text-sm opacity-85">Rate — No Surge Pricing</div></div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Eastern Province Districts &amp; Destinations</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">From Saudi Arabia&apos;s oil capital to the Bahrain Causeway — the Eastern Province is the kingdom&apos;s industrial and commercial engine.</p>
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

            <section className="py-12 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Dammam</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-blue-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Drive Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'Bahrain (Manama) via Causeway', dist: '25 km + crossing', time: '~1 hr', note: 'King Fahd Causeway — peak queues add 30–60 min' },
                                    { dest: 'Al Khobar City Centre', dist: '30 km', time: '30 min', note: 'Dammam–Khobar arterial road' },
                                    { dest: 'Dhahran / Aramco HQ', dist: '15 km', time: '20 min', note: 'Via Dhahran/Khobar highway' },
                                    { dest: 'KFAC Airport (DMM)', dist: '35 km', time: '40 min', note: 'From central Dammam' },
                                    { dest: 'Jubail Industrial City', dist: '100 km', time: '1 hr', note: 'Via coastal highway north' },
                                    { dest: 'Qatif', dist: '25 km', time: '30 min', note: 'Via Route 80 north' },
                                    { dest: 'Riyadh', dist: '420 km', time: '4 hrs', note: 'Via Route 40 west' },
                                    { dest: 'Kuwait City', dist: '550 km', time: '5.5 hrs', note: 'Via Gulf highway north + border crossing' },
                                    { dest: 'Jeddah', dist: '1,200 km', time: '12 hrs', note: 'Via Route 40 to Riyadh then south — 2 drivers' },
                                    { dest: 'Madinah', dist: '1,050 km', time: '10 hrs', note: 'Via Route 40 then Hejaz highway — 2 drivers' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-blue-800">{row.time}</td>
                                        <td className="px-6 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Eastern Province Transport — Problems We Solve</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { problem: 'Bahrain Causeway Complexity', detail: 'The King Fahd Causeway has Saudi and Bahrain immigration checkpoints with distinct lane configurations for Saudi nationals, GCC residents, and international visitors. Peak times (Thursday evenings, public holidays) create 1–2 hour queues that surprise first-time travellers.', solution: 'Our drivers know the crossing procedure, optimal lane selection, and departure timing to minimise queue time.' },
                            { problem: 'Industrial Zone & Compound Access', detail: 'Jubail Industrial City, Aramco residential compound, SABIC facilities, and Ras Tanura have controlled access points with specific vehicle entry procedures that confuse first-time visitors and unfamiliar drivers.', solution: 'Our Eastern Province drivers know every industrial access route and facility gate procedure.' },
                            { problem: 'KFAC Airport — Huge Complex', detail: 'King Fahd International Airport is one of the largest airports in the world by area — the terminal is far from central Dammam, and the arrivals exit layout is confusing for first-time international visitors.', solution: 'Driver at arrivals with name board. Flight tracked for delays. Direct to your destination — no confusion.' },
                        ].map((p, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-5">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.problem}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{p.detail}</p>
                                <div className="flex items-start gap-2 text-blue-800 font-medium text-sm">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span>{p.solution}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eastern Province — Key Sites &amp; Landmarks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {landmarks.map((l, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{l.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{l.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">How Dammam Booking Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: '1', title: 'WhatsApp Your Trip', desc: 'Tell us pickup point (hotel, Aramco compound, airport, or address), destination, and group size. For Bahrain crossings: mention nationality for documentation guidance.' },
                            { n: '2', title: 'Rate Confirmed Instantly', desc: 'Fixed rate confirmed on WhatsApp — the number you receive is what you pay. No meter, no Causeway toll surprises, no surge. Driver details sent before travel.' },
                            { n: '3', title: 'Professional Driver, Door to Door', desc: 'For KFAC Airport: driver at arrivals with name board. For Bahrain Causeway: driver knows the immigration lane. For Jubail: driver knows the site gate.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <span className="text-3xl font-bold text-blue-800">{s.n}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">Dammam Taxi Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'KFAC Airport Transfers (DMM)', desc: 'Meet & greet at King Fahd International Airport. Flight tracked for delays. Dammam, Khobar, or Jubail delivery.', icon: Navigation, href: '/locations/dammam/kfac-airport' },
                            { name: 'Bahrain Causeway Crossing', desc: 'Door-to-door Dammam/Khobar to Manama. Immigration-familiar drivers. Fixed rate including Causeway toll.', icon: Car, href: '/locations/dammam/bahrain-causeway' },
                            { name: 'Aramco & Dhahran Corporate', desc: 'Aramco compound, SABIC, KFUPM, ITHRA, and Dhahran corporate zone transfers.', icon: Users, href: '/locations/dammam/dhahran' },
                            { name: 'Jubail Industrial City', desc: 'Contractor and executive transport to SABIC plants, Aramco downstream, and Jubail Port.', icon: MapPin, href: '/locations/dammam/jubail' },
                            { name: 'Dammam to Riyadh', desc: '420km, 4 hours via Route 40. Business, family, and government travel. Fixed rate.', icon: Car, href: '/routes/dammam-to-riyadh' },
                            { name: 'Dammam to Kuwait', desc: '550km, 5.5 hours via Gulf coastal highway. Border crossing familiar drivers.', icon: Navigation, href: '/routes/dammam-to-kuwait' },
                        ].map((s, i) => (
                            <Link key={i} href={s.href} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-transparent group-hover:border-blue-100 h-full">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                                        <s.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{s.name}</h3>
                                    <p className="text-gray-600 text-sm">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in the Eastern Province?</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">The Eastern Province is Saudi Arabia&apos;s most complex transport environment — industrial zones, international border crossings, one of the world&apos;s largest airports, and a dense cluster of corporate campuses. Our drivers know every gate, every crossing lane, every access procedure.</p>
                            <ul className="space-y-4">
                                {[
                                    'Bahrain Causeway crossing experience — immigration lane knowledge',
                                    'KFAC Airport arrivals procedure — name board at exit',
                                    'Aramco, SABIC, and Jubail compound access knowledge',
                                    'Two drivers on all journeys over 10 hours',
                                    'Flight tracking — zero extra charge for delays',
                                    'Fixed rates confirmed on WhatsApp before travel',
                                    'Corporate monthly accounts for Aramco/SABIC repeat transfers',
                                ].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/khobar-water-tower.webp" alt="Al Khobar Water Tower — Eastern Province Saudi Arabia" width={800} height={480} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Routes from Dammam</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { from: 'Dammam', to: 'Bahrain (Manama)', time: '~1 hr', href: '/locations/dammam/bahrain-causeway' },
                            { from: 'Dammam', to: 'Riyadh', time: '4 hrs', href: '/routes/dammam-to-riyadh' },
                            { from: 'Dammam', to: 'Kuwait City', time: '5.5 hrs', href: '/routes/dammam-to-kuwait' },
                            { from: 'Dammam', to: 'Jubail Industrial', time: '1 hr', href: '/locations/dammam/jubail' },
                            { from: 'KFAC Airport', to: 'Khobar / Dhahran', time: '40 min', href: '/locations/dammam/kfac-airport' },
                            { from: 'Dammam', to: 'Jeddah', time: '12 hrs', href: '/routes/dammam-to-jeddah' },
                            { from: 'Dammam', to: 'Madinah', time: '10 hrs', href: '/routes/dammam-to-madinah' },
                            { from: 'Dammam', to: 'Makkah', time: '11 hrs', href: '/routes/dammam-to-makkah' },
                        ].map((r, i) => (
                            <Link key={i} href={r.href} className="block group">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                                    <div className="text-xs text-gray-400 mb-1">{r.from}</div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-bold text-gray-900 text-sm">{r.to}</span>
                                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-700 transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-blue-800 font-semibold">
                                        <Clock className="w-3 h-3" />{r.time}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Trusted by Eastern Province Travellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Mark T.', country: 'Aramco Contractor, USA', review: 'Use Haram Taxi for every rotation from KFAC Airport to the Aramco compound. Driver always at arrivals with name board before I clear customs. Reliable every single time.' },
                            { name: 'Fatima Al-Dosari', country: 'Saudi Resident, Dammam', review: 'Go to Bahrain every few weeks. The Causeway crossing is always smooth with these drivers — they know which lane, when to go to beat the queues. Fixed price, no surprises.' },
                            { name: 'Thomas H.', country: 'SABIC Engineer, Germany', review: 'Contract work in Jubail — use Haram Taxi for all airport transfers KFAC to site. They know the Jubail industrial access routes and the gate procedures. Excellent service.' },
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

            <CustomerUpdates location="Dammam" />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Dammam Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <NearbyCities currentCity="dammam" />

            {/* NAP — Local SEO contact block */}
            <LocationNAP
                city="Dammam"
                address="Dammam, Eastern Province, Saudi Arabia"
                mapsUrl="https://maps.google.com/?q=Haram+Taxi+Service+Dammam+Saudi+Arabia"
                reviewCount={167}
                nearbyAreas={["Al Khobar", "Dhahran", "Jubail", "Qatif", "KFAC Airport", "Aramco compound", "Bahrain Causeway", "Half Moon Bay"]}
            />

            <section className="py-20 bg-blue-800 text-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-4">Book Your Dammam Taxi</h2>
                    <p className="text-xl mb-2 opacity-90">Airport, Bahrain, Aramco, Jubail — fixed rates, 24/7. No pre-payment.</p>
                    <p className="text-sm mb-8 opacity-70">Instant WhatsApp confirmation.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Dammam" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-lg">
                            <WhatsAppIcon className="w-5 h-5" />Book Dammam Taxi — WhatsApp
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
