import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, AlertCircle, Wallet, Star, Navigation, BookOpen } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/madinah',
    },
    title: 'Madinah Taxi Service 2026 | MED Airport, Ziyarat Tours & Hajj Transport',
    description: 'Trusted 24/7 taxi in Madinah. MED airport transfers, Quba & Uhud Ziyarat tours, Madinah to Makkah (4.5 hrs), Wadi Al-Jinn, and Hajj 2026 — fixed fares, no surge.',
    keywords: ['Madinah taxi', 'Madinah airport taxi', 'MED airport transfer Madinah', 'Madinah Ziyarat taxi', 'Madinah to Makkah taxi', 'Hajj 2026 taxi Madinah', 'Quba Mosque taxi', 'Mount Uhud taxi Madinah', 'Wadi Al-Jinn taxi', 'Madinah intercity taxi'],
    openGraph: {
        title: 'Madinah Taxi — MED Airport, Ziyarat & Hajj 2026',
        description: 'Professional taxi in Madinah, City of the Prophet ﷺ. Airport transfers, Ziyarat tours, Makkah connections, Wadi Al-Jinn. 24/7 fixed rates.',
        url: 'https://haramtaxiservice.com/locations/madinah',
        type: 'website',
    },
};

export default function MadinahPage() {
    const services = [
        { name: 'MED Airport Transfer', description: 'Meet & greet from Prince Mohammad bin Abdulaziz Airport (MED) to your Madinah hotel. Flight tracked, 24/7.', icon: Navigation, href: '/services/madinah-airport-transfer' },
        { name: 'Ziyarat Tour', description: 'Quba Mosque, Mount Uhud, Qiblatain, Seven Mosques, Jannat Al-Baqi — optimised half-day and full-day Ziyarat packages.', icon: BookOpen, href: '/services/madinah-ziyarat' },
        { name: 'Madinah to Makkah', description: '4.5-hour Hajj-permitted transfer to Makkah hotels — all Markaziah hotels and Haram-adjacent areas served.', icon: ArrowRight, href: '/routes/madinah-to-makkah' },
        { name: 'Wadi Al-Jinn Tour', description: 'Private taxi to the magnetic hills of Wadi Al-Jinn (Al-Baida Valley) — 40km north of Madinah. Popular day trip.', icon: MapPin, href: '/services/madinah-wadi-jinn-tour' },
        { name: 'Haramain Train Station', description: 'Transfers to Madinah Haramain High Speed Railway station — connect to Jeddah, KAIA, and Makkah by train.', icon: Clock, href: '/routes/train-station-transfers-madinah' },
        { name: 'Intercity Routes', description: 'Madinah to Riyadh, Yanbu, Tabuk, Al Ula, Dammam, Jeddah and all intercity destinations — fixed rates.', icon: Car, href: '/routes' },
    ];

    const features = [
        'Licensed Madinah taxi drivers familiar with all Ziyarat sites',
        'Clean, air-conditioned fleet — Camry, GMC Yukon XL, Staria, Hiace',
        'Fixed upfront fares — no meters, no surge, no hidden charges',
        '24/7 service including late-night MED airport arrivals',
        'English & Arabic-speaking support via WhatsApp',
        'Meet & greet with name board at MED arrivals',
    ];

    const faqs = [
        {
            question: "How do I book a taxi from Madinah Airport (MED) to my hotel?",
            answer: "WhatsApp us your flight number, arrival date, and hotel name. We confirm instantly and send your driver's details before you land. Your driver meets you at arrivals with a name board and assists with luggage. The journey to central Madinah Markaziah hotels takes 20–30 minutes."
        },
        {
            question: "How long does the Madinah to Makkah taxi take?",
            answer: "Approximately 4–4.5 hours via the Hijrah Highway under normal conditions. During Hajj and peak Umrah season, allow 4.5–5.5 hours due to checkpoint traffic. All our vehicles are fully air-conditioned with comfortable seating. We recommend booking 48 hours in advance during Hajj season."
        },
        {
            question: "What Ziyarat sites do you cover in Madinah?",
            answer: "Our half-day and full-day Ziyarat tours cover all major sites: Quba Mosque (the first mosque in Islam), Mount Uhud (Battle of Uhud site and martyrs' graveyard), Masjid Al-Qiblatain (the mosque of two Qiblas), the Seven Mosques (Sab'a Masajid), Jannat Al-Baqi cemetery, Masjid Al-Ijabah, and Wadi Al-Jinn (Magnetic Hill) as an optional add-on."
        },
        {
            question: "Are you offering Hajj 2026 transport from Madinah?",
            answer: "Yes. We handle the full Madinah leg of your Hajj journey — MED airport arrival, hotel pickups, Ziyarat tours, and the Madinah to Makkah intercity transfer (4.5 hrs). Hajj slots fill fast — we recommend booking at least 3–4 weeks before your travel dates."
        },
        {
            question: "What is Wadi Al-Jinn (Al-Baida Valley)?",
            answer: "Wadi Al-Jinn — also called Wadi Al-Baida or the Magnetic Valley — is a valley approximately 40km north of Madinah where cars appear to roll uphill by themselves due to an optical illusion created by the landscape gradient. It is one of the most popular day trips from Madinah for pilgrims and tourists. Our drivers take you there and wait while you experience the phenomenon."
        },
        {
            question: "Can I book a taxi from Madinah to KAIA Jeddah Airport for my departure flight?",
            answer: "Yes. Madinah to KAIA Jeddah Airport is approximately 415km and 4 hours. Allow 4 hours travel time plus a 2-hour check-in buffer — depart Madinah at least 6 hours before your flight. We offer very early morning departures (4–5am) for morning flights."
        },
        {
            question: "How far is Prince Mohammad bin Abdulaziz Airport (MED) from Madinah hotels?",
            answer: "MED airport is approximately 17km from the Prophet's Mosque (Masjid Al-Nabawi) and the Markaziah hotel district — a 20–30 minute drive. For hotels in the outer ring areas of Madinah, add 5–10 minutes."
        },
        {
            question: "Can I book a Madinah to Yanbu taxi?",
            answer: "Yes. Madinah to Yanbu is approximately 220km and 2.5 hours via Route 60 west to the Red Sea coast. A popular route for pilgrims finishing Madinah and connecting to Yanbu's port or dive sites, or continuing to Jeddah."
        },
        {
            question: "What is the best vehicle for a family with Hajj luggage in Madinah?",
            answer: "The GMC Yukon XL is ideal for families with full Hajj luggage — 7 passengers plus all bags. For larger groups of 8–11, the Toyota Hiace minibus. Budget-conscious couples or solo travelers are well served by the Toyota Camry. All vehicles are Hajj-permitted for Makkah checkpoint entry."
        },
        {
            question: "Can I book a dedicated driver for my entire Madinah stay?",
            answer: "Yes. Multi-day private driver packages are popular with families who want dedicated transportation for airport arrival, daily Ziyarat visits, shopping at Madinah's markets, and departure — all in one booking. WhatsApp us with your arrival date, departure date, and intended itinerary for a fixed multi-day package rate."
        },
        {
            question: "Do you serve pilgrims staying in the outer Madinah ring hotels?",
            answer: "Yes. We serve all Madinah hotel zones — the inner Markaziah ring (Prophet's Mosque-adjacent), the mid-ring (Al-Aziziah, Al-Rawabi), and the outer ring areas. Simply provide your exact hotel name when booking and your driver will know exactly where to go."
        },
        {
            question: "Can I go from Madinah directly to Riyadh by taxi?",
            answer: "Yes. Madinah to Riyadh is approximately 900km and takes 9–10 hours via Route 40 (King Abdulaziz Highway) east. We recommend the GMC Yukon XL or Staria for family comfort on this long route. Split-day with an overnight stop is available. WhatsApp for a fixed quote."
        }
    ];

    const popularRoutes = [
        { from: 'MED Airport', to: 'Madinah Hotels', duration: '25 min', href: '/routes/madinah-hotel-to-madinah-airport' },
        { from: 'Madinah', to: 'Makkah', duration: '4.5 hrs', href: '/routes/madinah-to-makkah' },
        { from: 'Madinah', to: 'KAIA Jeddah Airport', duration: '4 hrs', href: '/routes/madinah-hotel-to-jeddah-airport' },
        { from: 'Madinah', to: 'Ziyarat Tour', duration: '3–6 hrs', href: '/routes/madinah-ziyarat-tour' },
        { from: 'Madinah', to: 'Yanbu', duration: '2.5 hrs', href: '/routes/madinah-to-yanbu' },
        { from: 'Madinah', to: 'Tabuk', duration: '5 hrs', href: '/routes/madinah-to-tabuk' },
        { from: 'Madinah', to: 'Al Ula', duration: '3.5 hrs', href: '/routes/madinah-to-alula' },
        { from: 'Madinah', to: 'Riyadh', duration: '9–10 hrs', href: '/routes/madinah-to-riyadh' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service — Madinah",
        "image": "https://haramtaxiservice.com/masjid-nabawi-madinah.webp",
        "@id": "https://haramtaxiservice.com/locations/madinah",
        "url": "https://haramtaxiservice.com/locations/madinah",
        "telephone": "+966575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madinah",
            "addressRegion": "Al Madinah Province",
            "postalCode": "42311",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.5247,
            "longitude": 39.5692
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": { "@type": "City", "name": "Madinah" }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-slate-500">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/locations" className="hover:text-slate-500">Locations</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Madinah</span>
                    </div>
                </div>

                {/* Hajj 2026 Urgency Banner */}
                <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                    <span>Hajj 2026 Madinah transport booking is now open — limited slots. <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Reserve via WhatsApp.</a></span>
                </div>

                {/* Hero */}
                <section className="relative h-[500px] bg-gray-900 border-b-4 border-slate-500">
                    <Image
                        src="/masjid-nabawi-madinah.webp"
                        alt="Taxi service in Madinah — Prophet's Mosque Al-Masjid An-Nabawi"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-60"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Al Madinah Al Munawwarah · Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Madinah Taxi — MED Airport, <span className="text-brand-gold">Ziyarat</span> &amp; Hajj 2026
                                </h1>
                                <p className="text-xl text-gray-200 mb-6 font-light leading-relaxed">
                                    Trusted 24/7 taxi in <strong>Madinah Al Munawwarah</strong>. <Link href="/services/madinah-airport-transfer" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">MED airport transfers</Link>, <Link href="/services/madinah-ziyarat" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Quba &amp; Uhud Ziyarat tours</Link>, <Link href="/routes/madinah-to-makkah" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Makkah transfers</Link>, Wadi Al-Jinn — fixed fares, no surge.
                                </p>
                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Markaziah · Quba · Uhud · MED Airport · Al-Aqiq Miqat · Wadi Al-Jinn</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center border-0">
                                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-12 bg-brand-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">MED Airport Service</div></div>
                            <div><div className="text-3xl font-bold mb-2">4.5 hrs</div><div className="text-sm opacity-90">To Makkah</div></div>
                            <div><div className="text-3xl font-bold mb-2">10+</div><div className="text-sm opacity-90">Ziyarat Sites Covered</div></div>
                            <div><div className="text-3xl font-bold mb-2">100%</div><div className="text-sm opacity-90">Fixed Pricing</div></div>
                        </div>
                    </div>
                </section>

                {/* Districts Grid */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taxi by Madinah District &amp; Area</h2>
                            <p className="text-gray-600">Select your area for tailored transfer and Ziyarat information</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: 'Markaziah', sub: "Prophet's Mosque Zone", href: '/locations/madinah/markaziah', color: 'bg-green-50 border-green-200 hover:border-green-400' },
                                { name: 'Quba District', sub: 'First Mosque in Islam', href: '/locations/madinah/quba', color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400' },
                                { name: 'Mount Uhud', sub: 'Battle of Uhud Site', href: '/locations/madinah/mount-uhud', color: 'bg-stone-50 border-stone-200 hover:border-stone-400' },
                                { name: 'MED Airport', sub: 'Prince Mohammad Airport', href: '/locations/madinah/med-airport', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
                                { name: 'Al-Aqiq / Miqat', sub: 'Dhul Hulayfah Miqat', href: '/locations/madinah/al-aqiq', color: 'bg-amber-50 border-amber-200 hover:border-amber-400' },
                                { name: 'Wadi Al-Jinn', sub: 'Magnetic Hill Day Trip', href: '/locations/madinah/wadi-al-jinn', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
                            ].map((d, i) => (
                                <Link key={i} href={d.href} className={`block p-5 rounded-xl border-2 transition-all ${d.color} group`}>
                                    <MapPin className="w-6 h-6 text-gray-500 mb-3 group-hover:text-gray-700" />
                                    <div className="font-bold text-gray-900 mb-1 text-sm">{d.name}</div>
                                    <div className="text-xs text-gray-500">{d.sub}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Travel Times */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Madinah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { city: 'Makkah', dist: '450 km', route: 'Hijrah Highway', time: '4.5 hrs', href: '/routes/madinah-to-makkah' },
                                { city: 'KAIA Jeddah Airport', dist: '415 km', route: 'Hijrah Highway', time: '4 hrs', href: '/routes/madinah-hotel-to-jeddah-airport' },
                                { city: 'Yanbu', dist: '220 km', route: 'Route 60 West', time: '2.5 hrs', href: '/routes/madinah-to-yanbu' },
                                { city: 'Tabuk', dist: '500 km', route: 'Route 65 North', time: '5 hrs', href: '/routes/madinah-to-tabuk' },
                                { city: 'Al Ula', dist: '340 km', route: 'Route 65 North', time: '3.5 hrs', href: '/routes/madinah-to-alula' },
                                { city: 'Riyadh', dist: '900 km', route: 'Route 40 East', time: '9–10 hrs', href: '/routes/madinah-to-riyadh' },
                            ].map((r, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            <Link href={r.href} className="hover:text-slate-600 underline decoration-gray-200">{r.city}</Link>
                                        </div>
                                        <div className="text-xs text-gray-500">{r.dist} · {r.route}</div>
                                    </div>
                                    <div className="text-xl font-bold text-brand-navy-dark">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ziyarat Sites */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Madinah Ziyarat Sites — Taxi Access</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We transfer to every major Ziyarat site and Islamic landmark in Madinah — fixed rate, door to entrance</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: 'Masjid Al-Nabawi (Prophet\'s Mosque)', time: 'Markaziah — central Madinah', href: '/locations/madinah/markaziah' },
                                { name: 'Masjid Quba', time: '10 min south — first mosque in Islam', href: '/locations/madinah/quba' },
                                { name: 'Mount Uhud', time: '15 min north — Battle of Uhud site', href: '/locations/madinah/mount-uhud' },
                                { name: 'Jannat Al-Baqi Cemetery', time: 'Markaziah — adjacent to Prophet\'s Mosque', href: '/locations/madinah/markaziah' },
                                { name: 'Masjid Al-Qiblatain', time: '20 min — Mosque of the Two Qiblas', href: '/routes/madinah-ziyarat-tour' },
                                { name: 'Sab\'a Masajid (Seven Mosques)', time: '20 min — Battle of the Trench sites', href: '/routes/madinah-ziyarat-tour' },
                                { name: 'Masjid Al-Ijabah', time: '15 min — accepted prayer site', href: '/routes/madinah-ziyarat-tour' },
                                { name: 'Miqat Dhul Hulayfah (Abyar Ali)', time: '10 min west — Ihram entry point', href: '/locations/madinah/al-aqiq' },
                                { name: 'Wadi Al-Jinn (Magnetic Valley)', time: '40 min north — popular day trip', href: '/locations/madinah/wadi-al-jinn' },
                                { name: 'Madinah Museum (Al-Madina Museum)', time: 'City center — Islamic history', href: '/locations/madinah/markaziah' },
                                { name: 'Bir Ali (Dhul Hulayfah Well)', time: '10 min west — near Miqat', href: '/locations/madinah/al-aqiq' },
                                { name: 'MED Airport', time: 'Prince Mohammad bin Abdulaziz Airport', href: '/locations/madinah/med-airport' },
                            ].map((lm, i) => (
                                <Link key={i} href={lm.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-slate-400 hover:bg-white transition-all group">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                                        <span className="font-medium text-gray-800 text-sm group-hover:text-slate-700">{lm.name}</span>
                                    </div>
                                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{lm.time}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Problems Solved */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Madinah</h2>
                            <p className="text-xl text-gray-600 font-light">We solve the problems pilgrims face in the Prophet&apos;s City.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Late-Night Airport Arrivals</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Many Hajj and Umrah flights arrive after midnight at MED. Finding reliable, safe transport at 2am in an unfamiliar city with heavy Hajj luggage is stressful for families and solo travelers alike.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Pre-booked meet & greet, 24/7, no late-night surcharge</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Ziyarat Timing &amp; Sequence</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Quba, Uhud, Qiblatain, the Seven Mosques, Baqi — visiting all Ziyarat sites efficiently requires knowing the right sequence, opening times, gender-separate visiting schedules, and distances between sites.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Knowledgeable drivers with optimised Ziyarat routes</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Markaziah Hotel Zone Navigation</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Madinah&apos;s Markaziah hotel zone has three rings of hotels with dozens of properties — some facing directly onto the Masjid Al-Nabawi plaza, others 500m–2km away. Street addresses and navigation are challenging for non-Arabic speakers.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Local-knowledge drivers who know every Madinah hotel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Madinah Taxi Services</h2>
                            <p className="text-xl text-gray-600 font-light">From MED airport arrivals to Ziyarat tours and intercity routes — everything covered.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="block group">
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-slate-300 hover:shadow-md transition-all h-full">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100">
                                            <service.icon className="w-6 h-6 text-slate-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in Madinah?</h2>
                                <ul className="space-y-4">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Madinah%20taxi" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                            <WhatsAppIcon className="w-4 h-4" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                                <Image
                                    src="/green-dome-detail.webp"
                                    alt="Green Dome of Prophet's Mosque — Madinah taxi service"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Routes */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Madinah Taxi Routes</h2>
                            <p className="text-xl text-gray-600 font-light">Airport connections, Ziyarat tours, and intercity routes from the Prophet&apos;s City.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <Link key={index} href={route.href} className="block group">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-slate-400 hover:shadow-md transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 mb-1">From</div>
                                                <div className="font-bold text-gray-900">{route.from}</div>
                                            </div>
                                            <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                            <div className="flex-1 text-right">
                                                <div className="text-xs text-gray-500 mb-1">To</div>
                                                <div className="font-bold text-gray-900">{route.to}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-600 font-medium">
                                                <Clock className="w-4 h-4" />{route.duration}
                                            </div>
                                            <div className="font-bold text-slate-500 group-hover:text-slate-700">Get Quote →</div>
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                                <Wallet className="w-4 h-4 text-brand-navy-dark" />
                                <span className="text-slate-800 text-sm font-semibold">Fixed Price Transparency</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Madinah Taxi Pricing</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">Fixed rates for every route — airport, Ziyarat, Makkah, and intercity. The price quoted on WhatsApp is the exact price you pay.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Determines Your Fare?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                                            <Navigation className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Distance</h4>
                                            <p className="text-gray-600 text-xs">MED airport (20 min), Ziyarat city tour (3–6 hrs), Makkah intercity (4.5 hrs) — each has a distinct fixed rate.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Type</h4>
                                            <p className="text-gray-600 text-xs">Toyota Camry for 1–3 passengers. GMC Yukon XL for Hajj families with full luggage. Toyota Hiace for groups of 8–11.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                                            <BookOpen className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Ziyarat Package</h4>
                                            <p className="text-gray-600 text-xs">Half-day (Quba + Uhud + 2 sites) or full-day (all 8+ sites including Wadi Al-Jinn) — each has a fixed package rate.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-center shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">No Hajj or Ramadan Surcharges</h3>
                                <p className="mb-6 opacity-95 text-lg font-light leading-relaxed">During Hajj 2026 and Ramadan, unlicensed taxis around the Haram in Madinah charge 3–5× standard rates. Our fixed pricing is year-round — the same rate whether it is Muharram or Dhul Hijjah.</p>
                                <Link href="/booking">
                                    <Button className="bg-white text-brand-navy-dark hover:bg-gray-100 w-full text-lg h-12 border-0 shadow-md">
                                        Get Your Fixed Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Real Pilgrim Reviews</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pilgrims From Around the World Trust Our Madinah Service</h2>
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                {['United Kingdom', 'Pakistan', 'Indonesia', 'Malaysia', 'South Africa', 'India', 'Nigeria'].map(c => (
                                    <span key={c} className="px-3 py-1 bg-white rounded-full text-gray-600 text-sm border border-gray-200">{c}</span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Br. Yusuf A.', country: 'Johannesburg, South Africa', text: 'Arrived at Prince Mohammad bin Abdulaziz Airport at 2am. Our driver was waiting with a name board, calm and professional. He knew exactly where our hotel in Markaziah Madinah was. Zero stress after a long journey.', stars: 5 },
                                { name: 'Ustaz Rahimullah', country: 'Dhaka, Bangladesh', text: 'Booked a full-day Ziyarat tour for our group of 8. The driver took us to Quba Mosque, Uhud, Qiblatain, and 5 other sites in perfect sequence. He shared knowledge about each location. Truly the best way to visit Madinah.', stars: 5 },
                                { name: 'Sister Maryam T.', country: 'Birmingham, United Kingdom', text: 'We needed a Madinah to Makkah transfer for Hajj. The journey was comfortable, the van was cold and clean, and we arrived in exactly 4.5 hours as promised. Booking on WhatsApp was instant — highly recommend.', stars: 5 },
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                                    <div className="flex mb-4">
                                        {[...Array(review.stars)].map((_, s) => (<Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />))}
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                                    <div>
                                        <div className="font-bold text-gray-900">{review.name}</div>
                                        <div className="text-sm text-gray-500">{review.country}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Updates */}
                <div className="container mx-auto px-4 py-8">
                    <CustomerUpdates location="Madinah" />
                </div>

                {/* FAQs */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Madinah Taxi</h2>
                            <p className="text-xl text-gray-600 font-light">Everything you need to know about taxi service in Madinah, Ziyarat tours, and airport transfers.</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-gray-100 shadow-sm">
                                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-slate-500 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed font-sans">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Nearby Cities */}
                <div className="container mx-auto px-4 py-20">
                    <NearbyCities currentCity="madinah" />
                </div>

                {/* Final CTA */}
                <section className="py-20 bg-brand-navy text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-4">Book Your Madinah Taxi for Hajj 2026</h2>
                        <p className="text-xl mb-2 opacity-95 font-light">MED airport transfers, Ziyarat tours, Makkah intercity &amp; more — all fixed-rate.</p>
                        <p className="text-sm mb-8 opacity-80">No pre-payment. Instant WhatsApp confirmation. 24/7 across all Madinah districts.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Madinah%20taxi%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg border-0 shadow-lg flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book via WhatsApp Now
                                </Button>
                            </a>
                            <Link href="/booking">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy-dark px-8 py-6 text-lg">
                                    Get Online Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
