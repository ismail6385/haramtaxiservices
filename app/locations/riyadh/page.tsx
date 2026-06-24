import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, AlertCircle, Wallet, Star, Navigation, Building2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import LocationNAP from '@/components/LocationNAP';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh',
    },
    title: 'Taxi Service Riyadh | VIP Airport Transfer King Khalid Airport',
    description: 'Book trusted taxi in Riyadh 24/7. KKIA airport transfers, Riyadh to Jeddah/Madinah/Khobar intercity, corporate chauffeur — fixed rates, no surge, WhatsApp booking.',
    keywords: ['taxi Riyadh', 'Riyadh airport taxi', 'KKIA taxi', 'Riyadh to Jeddah taxi', 'Riyadh to Madinah taxi', 'Riyadh to Makkah taxi', 'Riyadh to AlUla taxi', 'Riyadh to Khobar taxi', 'KAFD taxi', 'chauffeur service Riyadh', 'taxi service Riyadh Saudi Arabia', 'King Faisal Specialist Hospital taxi', 'Diriyah taxi', 'Diplomatic Quarter taxi Riyadh', 'female solo travel taxi Riyadh', 'expat taxi Riyadh'],
    openGraph: {
        title: 'Riyadh Taxi | KKIA Airport, Intercity & Corporate Chauffeur',
        description: 'Trusted taxi in Riyadh. KKIA airport transfers, Riyadh to Jeddah/Madinah/Khobar routes, corporate chauffeur. Fixed rates, 24/7 WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh',
        type: 'website',
    },
};

export default function RiyadhLocationPage() {
    const services = [
        {
            name: 'KKIA Airport Transfer',
            description: 'Meet & greet at King Khalid International Airport (RUH). All terminals covered, flight tracking, no waiting.',
            icon: Navigation,
            href: '/services/riyadh-airport-transfer',
        },
        {
            name: 'Riyadh to Jeddah',
            description: '950km direct transfer via King Abdulaziz Highway. Fixed rate, one rest stop, door-to-door.',
            icon: ArrowRight,
            href: '/routes/riyadh-to-jeddah',
        },
        {
            name: 'Riyadh to Madinah',
            description: 'Private Umrah transfer — 840km to Al Madinah Al Munawwarah, hotel drop, 8–9 hours.',
            icon: MapPin,
            href: '/routes/riyadh-to-madinah',
        },
        {
            name: 'Riyadh to Al Khobar',
            description: 'Eastern Province corridor — 400km to Aramco, Dhahran, Al Khobar Corniche, 4 hours.',
            icon: Car,
            href: '/routes/riyadh-to-khobar',
        },
        {
            name: 'Riyadh to Makkah',
            description: 'Umrah & Hajj 2026 transfer — 870km, Hajj-permitted vehicles, direct to Makkah hotel.',
            icon: MapPin,
            href: '/routes/riyadh-to-makkah',
        },
        {
            name: 'Corporate Chauffeur',
            description: 'Hourly and daily executive chauffeur for KAFD, DQ, and all Riyadh business districts.',
            icon: Building2,
            href: '/services/hourly-chauffeur',
        },
    ];

    const features = [
        'Licensed professional Riyadh drivers',
        'Clean, modern fleet — Camry, Yukon XL, Staria',
        'Fixed upfront quotes — no hidden charges',
        '24/7 availability including late-night KKIA arrivals',
        'English & Arabic speaking support',
        'All major Riyadh districts and intercity routes covered',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Riyadh Airport (KKIA) to the city centre?",
            answer: "Our fares are fixed and agreed before you travel — the number on WhatsApp is exactly what you pay. The journey from King Khalid International Airport (RUH) to central Riyadh (Olaya, KAFD, Diplomatic Quarter) takes 20–40 minutes depending on traffic. Message us on WhatsApp with your destination for an instant quote."
        },
        {
            question: "How long is the Riyadh to Jeddah drive by private taxi?",
            answer: "Riyadh to Jeddah is approximately 950km via King Abdulaziz Highway (Route 40) and takes 9–10 hours. We include one scheduled prayer and rest stop. This is a popular route for business travellers and families connecting to Jeddah Airport (KAIA) or visiting the Red Sea coast."
        },
        {
            question: "Can I book a Riyadh to Madinah taxi for Umrah?",
            answer: "Yes — this is one of our most requested routes for Riyadh pilgrims. The journey is 840km and takes 8–9 hours door-to-hotel. We drop you at your specific Madinah accommodation in the Markaziyah zone near Masjid Al-Nabawi. Pre-booking 24–48 hours in advance is strongly recommended."
        },
        {
            question: "How long is the Riyadh to Al Khobar drive?",
            answer: "Riyadh to Al Khobar is approximately 400km via Route 40 and takes 4–4.5 hours. No rest stop is needed. This is our most popular business corridor, serving the Aramco compound in Dhahran, Al Khobar Corniche, and the wider Eastern Province. The transfer can extend to Dammam, Jubail, or across the King Fahad Causeway to Bahrain."
        },
        {
            question: "Is Uber or Careem available in Riyadh — why use a private taxi?",
            answer: "Uber and Careem both operate in Riyadh for short city rides. For KKIA airport pickups, long-distance intercity transfers (Jeddah, Madinah, Khobar), and corporate travel, a pre-booked private taxi provides: fixed pricing agreed in advance, a named driver with meet & greet, no cancellation risk, and vehicles suitable for heavy luggage. App-based taxis do not cover intercity routes reliably."
        },
        {
            question: "Can I book a Riyadh to Makkah taxi for Umrah or Hajj 2026?",
            answer: "Yes. Riyadh to Makkah is 870km (8–9 hours). We provide Hajj-permitted vehicles that can pass Makkah's security cordons — standard taxis and app-based rides cannot enter the Haram zone. Pre-booking is essential for Hajj 2026, especially for travel during 8th–13th Dhul Hijjah."
        },
        {
            question: "Do you serve the King Abdullah Financial District (KAFD) and Diplomatic Quarter?",
            answer: "Yes. We cover all major Riyadh districts including KAFD, Diplomatic Quarter, Olaya, Al Malqa, Al Nakheel, Diriyah, and all hotel zones. For corporate clients requiring regular transport to KAFD or embassy pickups in the DQ, we offer pre-arranged account billing and scheduled routes."
        },
        {
            question: "Can I get a taxi from Riyadh Airport (KKIA) directly to Makkah?",
            answer: "Yes. KKIA to Makkah is approximately 870km and takes 8–9 hours. We meet you at arrivals and deliver door-to-hotel in Makkah. During Hajj season, only Ministry-registered Hajj-permitted vehicles can pass Makkah cordons — our fleet carries full permits. Pre-book before your flight."
        },
        {
            question: "How do I get to Diriyah UNESCO site from Riyadh?",
            answer: "Diriyah is 20–25km northwest of central Riyadh — 25–35 minutes by private taxi from Olaya or KAFD. We offer one-way, return, and full-day trips including At-Turaif ruins, Bujairi Terrace, and Wadi Hanifa. See our dedicated Diriyah taxi page for full details."
        },
        {
            question: "Can you take me from Riyadh to AlUla?",
            answer: "Yes. Riyadh to AlUla is 1,100km and takes 10–11 hours by private taxi via Route 65 and Route 375. We deliver to Hegra (Mada'in Saleh), AlUla Old Town, Dadan, or your resort. An overnight departure from Riyadh arrives in AlUla by early morning — ideal for dawn at Hegra."
        },
        {
            question: "Can I get a taxi from KKIA Airport to King Faisal Specialist Hospital?",
            answer: "Yes. KKIA to King Faisal Specialist Hospital (KFSH&RC) in northern Riyadh is approximately 35–40 minutes. We meet patients and families at arrivals with a name board and assist with luggage to the hospital entrance. Daily recurring appointment transfers are also available at a fixed rate."
        }
    ];

    const popularRoutes = [
        { from: 'KKIA Airport', to: 'Riyadh City', duration: '30 min', href: '/services/riyadh-airport-transfer' },
        { from: 'Riyadh', to: 'Jeddah', duration: '9–10 hrs', href: '/routes/riyadh-to-jeddah' },
        { from: 'Riyadh', to: 'Madinah', duration: '8–9 hrs', href: '/routes/riyadh-to-madinah' },
        { from: 'Riyadh', to: 'Al Khobar', duration: '4–4.5 hrs', href: '/routes/riyadh-to-khobar' },
        { from: 'Riyadh', to: 'Makkah', duration: '8–9 hrs', href: '/routes/riyadh-to-makkah' },
        { from: 'Riyadh', to: 'Dammam', duration: '4 hrs', href: '/routes/riyadh-to-dammam' },
        { from: 'Riyadh', to: 'Taif', duration: '8.5–9 hrs', href: '/routes/riyadh-to-taif' },
        { from: 'Riyadh', to: 'Abha', duration: '8–9 hrs', href: '/routes/riyadh-to-abha' },
        { from: 'Riyadh', to: 'Tabuk', duration: '12–13 hrs', href: '/routes/riyadh-to-tabuk' },
        { from: 'Riyadh', to: 'Yanbu', duration: '10–11 hrs', href: '/routes/riyadh-to-yanbu' },
        { from: 'Riyadh', to: 'AlUla', duration: '10–11 hrs', href: '/routes/riyadh-to-alula' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service — Riyadh",
        "description": "Professional taxi and intercity transfer service in Riyadh. KKIA airport transfers, Riyadh to Jeddah/Madinah/Makkah routes, and corporate chauffeur. Fixed rates, 24/7.",
        "image": "https://haramtaxiservice.com/riyadh-skyline.webp",
        "@id": "https://haramtaxiservice.com/locations/riyadh",
        "url": "https://haramtaxiservice.com/locations/riyadh",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "priceRange": "$$",
        "currenciesAccepted": "SAR",
        "paymentAccepted": "Cash, Bank Transfer",
        "hasMap": "https://maps.google.com/?q=Haram+Taxi+Service+Riyadh+Saudi+Arabia",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road, Olaya",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh Province",
            "postalCode": "11564",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.7136,
            "longitude": 46.6753
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": [
            { "@type": "City", "name": "Riyadh" },
            { "@type": "Place", "name": "KAFD — King Abdullah Financial District" },
            { "@type": "Place", "name": "Diplomatic Quarter, Riyadh" },
            { "@type": "Place", "name": "Olaya, Riyadh" },
            { "@type": "Place", "name": "Diriyah, Riyadh" },
            { "@type": "Place", "name": "King Khalid International Airport (KKIA)" }
        ],
        "sameAs": [
            "https://www.facebook.com/haramtaxiservice",
            "https://www.instagram.com/haramtaxiservice",
            "https://wa.me/966575806733"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "212",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-slate-500">Home</Link>
                            <span>/</span>
                            <Link href="/locations" className="hover:text-slate-500">Locations</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Riyadh</span>
                        </div>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative h-[500px] bg-gray-900">
                    <Image
                        src="/riyadh-skyline.webp"
                        alt="Taxi service in Riyadh — skyline and King Fahd Road"
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
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Capital of Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Professional Taxi & Intercity Transfer in <span className="text-brand-gold">Riyadh</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                                    Trusted 24/7 taxi service in Riyadh — <Link href="/services/riyadh-airport-transfer" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">KKIA airport transfers</Link>, intercity routes to <Link href="/routes/riyadh-to-jeddah" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Jeddah</Link>, <Link href="/routes/riyadh-to-madinah" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Madinah</Link> &amp; <Link href="/routes/riyadh-to-khobar" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Al Khobar</Link>, and executive corporate chauffeur. Fixed rates, no surge.
                                </p>
                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>All Riyadh districts · KKIA · Intercity Saudi Arabia</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Riyadh." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hajj / Ramadan Urgency Banner */}
                <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                    <span>Hajj 2026 & Ramadan Umrah transfers from Riyadh now booking — <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Riyadh%20for%20Hajj%202026" className="underline hover:no-underline">Reserve your seat via WhatsApp.</a></span>
                </div>

                {/* Quick Stats */}
                <section className="py-12 bg-brand-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-sm opacity-90">Service in Riyadh</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">5+</div>
                                <div className="text-sm opacity-90">Intercity Routes</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">KKIA</div>
                                <div className="text-sm opacity-90">All Terminals</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">50,000+</div>
                                <div className="text-sm opacity-90">Pilgrims Served</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Riyadh Districts */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taxi by Riyadh District</h2>
                            <p className="text-gray-600">Select your district for tailored transfer information</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: 'KAFD', sub: 'Financial District', href: '/locations/riyadh/kafd', color: 'bg-amber-50 border-amber-200 hover:border-amber-400' },
                                { name: 'Diriyah', sub: 'UNESCO Heritage', href: '/locations/riyadh/diriyah', color: 'bg-stone-50 border-stone-200 hover:border-stone-400' },
                                { name: 'Diplomatic Quarter', sub: 'Embassies & Expats', href: '/locations/riyadh/diplomatic-quarter', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
                                { name: 'Olaya', sub: 'Kingdom Tower CBD', href: '/locations/riyadh/olaya', color: 'bg-gray-50 border-gray-200 hover:border-gray-400' },
                                { name: 'Boulevard City', sub: 'Riyadh Season Venue', href: '/locations/riyadh/boulevard-city', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
                                { name: 'King Salman Park', sub: "World's Largest Park", href: '/locations/riyadh/king-salman-park', color: 'bg-green-50 border-green-200 hover:border-green-400' },
                            ].map((d, i) => (
                                <Link key={i} href={d.href} className={`block p-5 rounded-xl border-2 transition-all ${d.color} group`}>
                                    <Building2 className="w-6 h-6 text-gray-500 mb-3 group-hover:text-gray-700 transition-colors" />
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Intercity Travel Times from Riyadh</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { city: 'Jeddah', dist: '950km', route: 'Route 65', time: '9–10 hrs', href: '/routes/riyadh-to-jeddah' },
                                { city: 'Madinah', dist: '840km', route: 'Route 65', time: '8–9 hrs', href: '/routes/riyadh-to-madinah' },
                                { city: 'Makkah', dist: '870km', route: 'Route 65 & 15', time: '8–9 hrs', href: '/routes/riyadh-to-makkah' },
                                { city: 'Al Khobar', dist: '400km', route: 'Route 40', time: '4 hrs', href: '/routes/riyadh-to-khobar' },
                                { city: 'AlUla', dist: '1100km', route: 'Route 65 & 375', time: '10–11 hrs', href: '/routes/riyadh-to-alula' },
                                { city: 'Tabuk', dist: '1350km', route: 'Route 65 & 80', time: '12–13 hrs', href: '/routes/riyadh-to-tabuk' },
                            ].map((r, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            <Link href={r.href} className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">{r.city}</Link>
                                        </div>
                                        <div className="text-sm text-gray-500">Distance: {r.dist} · {r.route}</div>
                                    </div>
                                    <div className="text-xl font-bold text-slate-600">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Problems Solved */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Riyadh</h2>
                            <p className="text-xl text-gray-600">We solve the problems business travellers and pilgrims face in Saudi Arabia&apos;s capital.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">KKIA Terminal Confusion</h3>
                                <p className="text-gray-600 mb-4">King Khalid International Airport has multiple terminals — Terminal 1 (domestic) and Terminal 5 (international). Wrong terminal means a long walk or missing your pickup.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Solution: We verify your terminal from your flight number</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Unreliable Intercity Options</h3>
                                <p className="text-gray-600 mb-4">SAPTCO buses have fixed schedules, luggage limits, and multiple stops. App-based taxis don&apos;t cover long-distance routes like Riyadh to Jeddah or Madinah reliably.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Solution: Private door-to-door transfer, departs when you&apos;re ready</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Reliability Gap</h3>
                                <p className="text-gray-600 mb-4">Business meetings at KAFD, embassy visits in the Diplomatic Quarter, and conference pickups at RICEC require punctuality that app-based rides cannot guarantee.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Solution: Pre-scheduled executive chauffeur with account billing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Riyadh Landmarks & Attractions */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Riyadh Landmarks — Taxi Access</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We transfer to every major Riyadh attraction, venue, and institution — fixed rate, door to entrance</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: 'Diriyah (At-Turaif UNESCO)', time: '25–35 min from Olaya', href: '/locations/riyadh/diriyah' },
                                { name: 'King Salman Park', time: '20–25 min from KAFD', href: '/locations/riyadh/king-salman-park' },
                                { name: 'Boulevard City (Riyadh Season)', time: '15–20 min from Olaya', href: '/locations/riyadh/boulevard-city' },
                                { name: 'Edge of the World (Jebel Fihrayn)', time: '90 min from Riyadh', href: '/blog/riyadh-day-trips-taxi-guide-2026' },
                                { name: 'Kingdom Tower (Al Mamlaka)', time: 'Olaya — central CBD', href: '/locations/riyadh/olaya' },
                                { name: 'King Faisal Specialist Hospital', time: '35–40 min from KKIA', href: '/services/riyadh-medical-transfer' },
                                { name: 'National Museum of Saudi Arabia', time: '25–30 min from KAFD', href: '/locations/riyadh' },
                                { name: 'Wadi Hanifa', time: 'Near Diriyah — 30 min', href: '/locations/riyadh/diriyah' },
                                { name: 'King Abdullah Sports City', time: '30–40 min from Olaya', href: '/locations/riyadh' },
                                { name: 'Murabba Palace (Old Riyadh)', time: '20–25 min from KAFD', href: '/locations/riyadh' },
                                { name: 'KAFD (Financial District)', time: '35–45 min from KKIA', href: '/locations/riyadh/kafd' },
                                { name: 'Diplomatic Quarter', time: '15–20 min from Olaya', href: '/locations/riyadh/diplomatic-quarter' },
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

                {/* Pricing Guide */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                                <Wallet className="w-4 h-4 text-slate-600" />
                                <span className="text-slate-800 text-sm font-semibold">Clear Pricing</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Fare Guide for Riyadh</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Fixed rates for every route — city transfers, airport pickups, and long-distance intercity. The price on WhatsApp is the exact amount you pay.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Determines Your Fare?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Type</h4>
                                            <p className="text-gray-600 text-sm">Toyota Camry for solo or couple travel. GMC Yukon XL for families with luggage. Toyota Hiace for groups of 8–11.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Distance</h4>
                                            <p className="text-gray-600 text-sm">City transfers within Riyadh, airport pickups, and long-distance intercity routes (Jeddah, Madinah, Khobar) are priced per route.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Time of Travel</h4>
                                            <p className="text-gray-600 text-sm">No surge pricing. Late-night KKIA arrivals and Hajj/Ramadan season transfers are charged the same agreed rate — no exceptions.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-center shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">No Hajj or Ramadan Surges</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    Many drivers triple their prices during Ramadan and Hajj season. We maintain consistent, fair pricing all year — whether you&apos;re booking a Riyadh airport transfer or a long-haul intercity ride to <Link href="/locations/madinah" className="text-white hover:text-brand-gold underline decoration-white/30">Madinah</Link>.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-slate-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Get Your Fixed Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Riyadh</h2>
                            <p className="text-xl text-gray-600">Book, confirm, travel — in three simple steps</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10" />
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Share Your Details</h3>
                                <p className="text-center text-gray-600">Send your pickup location, destination, date, and flight number (if airport) via WhatsApp. We confirm instantly.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Receive Driver Details</h3>
                                <p className="text-center text-gray-600">We send your driver&apos;s name, vehicle, and contact number before travel. For KKIA, your driver meets you at arrivals with a name board.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Travel Comfortably</h3>
                                <p className="text-center text-gray-600">Door-to-door service to your hotel, office, or onward city. Pay the agreed amount on arrival — no pre-payment required.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in Riyadh</h2>
                            <p className="text-xl text-gray-600">Airport transfers, intercity routes, and corporate chauffeur</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="block group">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-transparent group-hover:border-slate-100">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-500 transition-colors">
                                            <service.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">{service.name}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Riyadh Taxi Service?</h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    We provide reliable, professional taxi services throughout <strong>Riyadh, Saudi Arabia</strong> — from <Link href="/services/riyadh-airport-transfer" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">King Khalid International Airport (KKIA)</Link> transfers to long-distance intercity routes to <Link href="/routes/riyadh-to-jeddah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Jeddah</Link>, <Link href="/routes/riyadh-to-madinah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Madinah</Link>, and the Eastern Province.
                                </p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/riyadh-skyline.webp"
                                    alt="Professional taxi service in Riyadh city"
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Taxi Routes from Riyadh</h2>
                            <p className="text-xl text-gray-600">Most requested transfers from the Saudi capital</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <Link key={index} href={route.href} className="block group">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-slate-300 hover:shadow-md transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-600 mb-1">From</div>
                                                <div className="font-bold text-gray-900">{route.from}</div>
                                            </div>
                                            <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-600 mb-1">To</div>
                                                <div className="font-bold text-gray-900">{route.to}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Clock className="w-4 h-4" />
                                                {route.duration}
                                            </div>
                                            <div className="font-semibold text-slate-500">Get Quote</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pilgrim & Business Reviews */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Real Client Reviews</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Pilgrims and Business Travellers from Riyadh</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: 'Br. Khalid A.',
                                    country: 'Riyadh, Saudi Arabia',
                                    review: 'Booked a Riyadh to Madinah taxi for our family Umrah. The GMC Yukon was spacious, cold, and the driver was respectful the entire 8-hour journey. No hidden charges, exactly what was quoted on WhatsApp. Will use again for Hajj 2026.'
                                },
                                {
                                    name: 'Ms. Jennifer T.',
                                    country: 'London, United Kingdom',
                                    review: 'Our team needed transport from KKIA to KAFD for three consecutive days of meetings. The driver was on time every morning, the vehicle was executive standard, and the WhatsApp coordination was seamless. Exactly what corporate travel needs.'
                                },
                                {
                                    name: 'Br. Mohammed S.',
                                    country: 'Riyadh, Saudi Arabia',
                                    review: 'Took the Riyadh to Khobar taxi for a business trip to the Aramco compound. Driver knew the route well, we made excellent time, and the fixed rate was fair. No negotiating, no meter anxiety. I book with Haram Taxi for every Eastern Province run now.'
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1">&quot;{review.review}&quot;</p>
                                    <div className="border-t border-gray-200 pt-4">
                                        <p className="text-gray-900 font-bold text-sm">{review.name}</p>
                                        <p className="text-gray-400 text-xs mt-1">{review.country}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Updates */}
                <CustomerUpdates location="Riyadh" />

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Riyadh Taxi Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Riyadh</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-slate-500 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Nearby Cities */}
                <NearbyCities currentCity="riyadh" />

                {/* NAP — Local SEO contact block */}
                <LocationNAP
                    city="Riyadh"
                    address="King Fahd Road, Olaya, Riyadh, Saudi Arabia"
                    mapsUrl="https://maps.google.com/?q=Haram+Taxi+Service+Riyadh+Saudi+Arabia"
                    reviewCount={212}
                    nearbyAreas={["KAFD", "Diplomatic Quarter", "Olaya", "Diriyah", "KKIA Airport", "Boulevard City", "Al Nakheel", "Al Malqa"]}
                />

                {/* CTA */}
                <section className="py-20 bg-brand-navy text-white shadow-2xl">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-4">Book Your Riyadh Taxi Now</h2>
                        <p className="text-xl mb-2 opacity-90">
                            Airport pickups, intercity transfers &amp; corporate chauffeur — all in one trusted service.
                        </p>
                        <p className="text-sm mb-8 opacity-70">No pre-payment. Fixed rates. Instant WhatsApp confirmation.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Riyadh" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book via WhatsApp Now
                                </Button>
                            </a>
                            <Link href="/booking">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-500 px-8 py-6 text-lg">
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
