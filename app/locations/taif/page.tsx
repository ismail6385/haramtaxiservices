import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, MessageCircle, ArrowRight, AlertCircle, Wallet, Star, Navigation, Building2, Mountain } from 'lucide-react';
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
        canonical: 'https://haramtaxiservice.com/locations/taif',
    },
    title: 'Taif Taxi Service | Miqat Transfer, Mountain Tours & Hajj 2026',
    description: 'Trusted Taif taxi 24/7. Miqat transfers to Makkah (90 min), Al Hada & Shafa mountain tours, rose farm visits, airport transfers — fixed fares, no surge pricing.',
    keywords: ['Taif taxi', 'Taif to Makkah taxi', 'Taif Miqat taxi Hajj 2026', 'Hajj 2026 Taif transport', 'Taif taxi service', 'Taif mountain tour taxi', 'Taif Al Hada Shafa tour', 'Al Hada taxi', 'Shafa taxi', 'Taif rose farm tour', 'Taif airport taxi', 'Taif chauffeur service'],
    openGraph: {
        title: 'Taif Taxi Service | Miqat, Mountain Tours & Hajj 2026',
        description: 'Professional taxi in Taif. Miqat transfers for Hajj/Umrah, Al Hada mountain tours, rose farm visits. Book 24/7 via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif',
        type: 'website',
    },
};

export default function TaifPage() {
    const services = [
        { name: 'Miqat Transfer', description: 'Direct transfer to Qarn al-Manazil Miqat for Hajj & Umrah pilgrims from any Taif hotel.', icon: MapPin, href: '/routes/taif-to-makkah' },
        { name: 'Al Hada Mountain Tour', description: 'Scenic cable car, zigzag road viewpoints, and mountain resort visits in Al Hada.', icon: Mountain, href: '/locations/taif/al-hada' },
        { name: 'Transfer to Makkah', description: '90-minute fixed-rate transfer via Al Hada mountain road directly to your Makkah hotel.', icon: ArrowRight, href: '/routes/taif-to-makkah' },
        { name: 'Rose Farm Tour', description: "Visit Taif's world-famous Damask rose farms and traditional perfume distilleries.", icon: Car, href: '/locations/taif/wadi-naaman' },
        { name: 'Airport Transfer', description: 'Reliable pickups and drop-offs at Taif Regional Airport (TIF) — all flights tracked.', icon: Navigation, href: '/locations/taif/city-center' },
        { name: '24/7 Service', description: 'Round-the-clock availability across all Taif districts, mountain resorts, and hotels.', icon: Clock, href: '/booking' },
    ];

    const features = [
        'Licensed professional Taif & mountain-route chauffeurs',
        'Clean, modern, air-conditioned fleet — Camry, Yukon XL, Staria, Hiace',
        'Fixed upfront quotes — no hidden charges, no surge pricing',
        '24/7 availability across Taif city and mountain areas',
        'English & Arabic-speaking support via WhatsApp',
        'Specialized Al Hada & Shafa mountain driving expertise',
    ];

    const faqs = [
        {
            question: "How long is the taxi ride from Taif to Makkah?",
            answer: "The taxi journey from Taif to Makkah takes approximately 1.5 to 2 hours depending on traffic and the chosen route — scenic Al Hada mountain road (Route 15) or the faster As Sail Al Kabir highway. All fares are fixed and confirmed before departure."
        },
        {
            question: "Do you offer Miqat transfers for Hajj 2026 and Umrah?",
            answer: "Yes. We provide direct transfers from any Taif hotel or resort to the Miqat at Qarn al-Manazil (As-Sail Al-Kabir) and onwards to Makkah for Hajj 2026 and Umrah pilgrims. Our drivers know the Miqat facilities and can wait while you prepare your Ihram."
        },
        {
            question: "Do you provide mountain tour services in Al Hada and Shafa?",
            answer: "Yes, we offer full-day and half-day tours to Al Hada and Shafa mountains. Our chauffeurs are highly experienced with Taif's winding mountain roads. Popular stops include the Al Hada Cable Car (Telefric), zigzag road viewpoints, Shafa Palace area, and mountain cafes."
        },
        {
            question: "Is taxi service available 24/7 in all Taif areas?",
            answer: "Yes, we serve Taif city center, Al Hada, Shafa, Al Hawiya, Al Rudaf, and Wadi Naaman round the clock. Pre-booking is strongly recommended for early-morning Fajr Umrah transfers and late-night arrivals at Taif Airport."
        },
        {
            question: "How much does a Taif to Jeddah Airport taxi cost?",
            answer: "Taif to King Abdulaziz International Airport (KAIA) Jeddah is approximately 170km and takes 2.5 hours. Fares vary by vehicle — we recommend the GMC Yukon XL for families with luggage. Message us on WhatsApp with your group size for an instant fixed quote."
        },
        {
            question: "Can I book a full-day rose farm tour in Taif?",
            answer: "Yes. Taif is the rose capital of Saudi Arabia, famous for Damask roses used in oud and attar perfumes. Our rose farm tours (best March–April) cover the Wadi Naaman rose farms, traditional distilleries, and honey markets. We customize the itinerary around your Taif schedule."
        },
        {
            question: "Is there Uber available in Taif mountain areas?",
            answer: "App-based rides have limited availability in mountain areas like Al Hada and Shafa, and are not suited for long-distance Makkah transfers. Pre-booking with us guarantees a mountain-experienced driver, a fixed price, and 24/7 availability — especially critical during Hajj season."
        },
        {
            question: "What vehicle is best for a Taif to Riyadh long-distance taxi?",
            answer: "For the 780km Taif–Riyadh route (approximately 8 hours), we recommend the GMC Yukon XL or Toyota Staria for maximum comfort with luggage space. Round-trip discounts are available — contact us on WhatsApp for a custom package."
        },
        {
            question: "Do you serve Al Hawiya and all Taif mountain resorts?",
            answer: "Yes. We cover all Taif districts and mountain resorts including Al Hada, Shafa, Al Hawiya, and all hotel and resort areas. Our drivers know every road in the Taif highlands, including private resort access roads that are challenging for non-local drivers."
        },
        {
            question: "Can I book a Taif to Madinah direct taxi?",
            answer: "Yes. Taif to Madinah is approximately 500km (4.5–5 hours) via the bypass route avoiding Makkah city center. This is a popular route for pilgrims completing Umrah and proceeding to Madinah. We offer direct door-to-hotel transfers with scheduled prayer stops."
        },
        {
            question: "Is the Al Hada zigzag road safe at night?",
            answer: "The Al Hada mountain road (30+ switchback turns) requires an experienced local driver, especially at night or in foggy weather. All our Taif chauffeurs are fully trained on this route and drive it regularly. We do not recommend unfamiliar drivers on this road after dark."
        },
        {
            question: "Can I get a taxi from Taif for Hajj without pre-booking?",
            answer: "During Hajj 2026, demand surges dramatically and ad-hoc taxis become unavailable or unreliable. We strongly recommend pre-booking at least 2–4 weeks before your Hajj departure. WhatsApp us now to lock in your Miqat transfer date and vehicle."
        }
    ];

    const popularRoutes = [
        { from: 'Taif', to: 'Makkah', duration: '1.5 hrs', href: '/routes/taif-to-makkah' },
        { from: 'Taif', to: 'Jeddah Airport (KAIA)', duration: '2.5 hrs', href: '/routes/taif-to-jeddah-airport' },
        { from: 'Taif', to: 'Madinah', duration: '4.5–5 hrs', href: '/routes/taif-to-madinah' },
        { from: 'Taif', to: 'Riyadh', duration: '8–8.5 hrs', href: '/routes/taif-to-riyadh' },
        { from: 'Taif City', to: 'Al Hada Mountain', duration: '30 min', href: '/locations/taif/al-hada' },
        { from: 'Taif', to: 'Shafa Mountains', duration: '45 min', href: '/locations/taif/shafa' },
        { from: 'Taif', to: 'Abha', duration: '5 hrs', href: '/routes/taif-to-abha' },
        { from: 'Taif', to: 'Al Baha', duration: '3 hrs', href: '/routes/taif-to-al-baha' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service — Taif",
        "image": "https://haramtaxiservice.com/taif-mountains-view.webp",
        "@id": "https://haramtaxiservice.com/locations/taif",
        "url": "https://haramtaxiservice.com/locations/taif",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "postalCode": "26511",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.2703,
            "longitude": 40.4150
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": { "@type": "City", "name": "Taif" }
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
                        <span className="text-gray-900 font-medium">Taif</span>
                    </div>
                </div>

                {/* Hajj 2026 Urgency Banner */}
                <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                    <span>Hajj 2026 Miqat transfers from Taif are booking fast. <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Taif%20to%20Makkah%20Miqat%20transfer%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Secure your seat via WhatsApp now.</a></span>
                </div>

                {/* Hero */}
                <section className="relative h-[500px] bg-gray-900 border-b-4 border-slate-500">
                    <Image
                        src="/taif-mountains-view.webp"
                        alt="Taxi service in Taif — Mountain view Al Hada"
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
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">City of Roses · Taif, Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Taif Taxi — Miqat, Mountains &amp; <span className="text-brand-gold">Hajj 2026</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-6 font-light leading-relaxed">
                                    Trusted 24/7 taxi in <strong>Taif, Saudi Arabia</strong>. Fixed-rate <Link href="/routes/taif-to-makkah" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Miqat transfers to Makkah</Link> (90 min), <Link href="/locations/taif/al-hada" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Al Hada mountain tours</Link>, rose farm visits, and reliable airport pickups — no surge pricing.
                                </p>
                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Al Hada · Shafa · Al Hawiya · City Center · Wadi Naaman</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Taif." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                <section className="py-12 bg-brand-navy text-white shadow-inner">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">Service in Taif</div></div>
                            <div><div className="text-3xl font-bold mb-2">90 min</div><div className="text-sm opacity-90">To Makkah Miqat</div></div>
                            <div><div className="text-3xl font-bold mb-2">6</div><div className="text-sm opacity-90">Districts Covered</div></div>
                            <div><div className="text-3xl font-bold mb-2">100%</div><div className="text-sm opacity-90">Fixed Pricing</div></div>
                        </div>
                    </div>
                </section>

                {/* Taif Districts */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taxi by Taif District & Area</h2>
                            <p className="text-gray-600">Select your area for tailored transfer and tour information</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: 'Al Hada', sub: 'Cable Car & Zigzag Road', href: '/locations/taif/al-hada', color: 'bg-green-50 border-green-200 hover:border-green-400' },
                                { name: 'Shafa', sub: 'Highland Resort Area', href: '/locations/taif/shafa', color: 'bg-sky-50 border-sky-200 hover:border-sky-400' },
                                { name: 'Al Hawiya', sub: 'Mountain Residential', href: '/locations/taif/al-hawiya', color: 'bg-amber-50 border-amber-200 hover:border-amber-400' },
                                { name: 'City Center', sub: 'Shubra Palace & Souq', href: '/locations/taif/city-center', color: 'bg-stone-50 border-stone-200 hover:border-stone-400' },
                                { name: 'Al Rudaf', sub: 'Parks & Recreation', href: '/locations/taif/al-rudaf', color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400' },
                                { name: 'Wadi Naaman', sub: 'Rose Farms & Honey', href: '/locations/taif/wadi-naaman', color: 'bg-pink-50 border-pink-200 hover:border-pink-400' },
                            ].map((d, i) => (
                                <Link key={i} href={d.href} className={`block p-5 rounded-xl border-2 transition-all ${d.color} group`}>
                                    <Mountain className="w-6 h-6 text-gray-500 mb-3 group-hover:text-gray-700 transition-colors" />
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Taif</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { city: 'Makkah', dist: '90 km', route: 'Al Hada Mountain Road', time: '1.5 hrs', href: '/routes/taif-to-makkah' },
                                { city: 'Jeddah Airport', dist: '170 km', route: 'Route 15 via Makkah bypass', time: '2.5 hrs', href: '/routes/taif-to-jeddah-airport' },
                                { city: 'Madinah', dist: '500 km', route: 'Route 15 & Route 60', time: '4.5–5 hrs', href: '/routes/taif-to-madinah' },
                                { city: 'Riyadh', dist: '780 km', route: 'Route 65 East', time: '8–8.5 hrs', href: '/routes/taif-to-riyadh' },
                                { city: 'Abha', dist: '470 km', route: 'Route 15 South', time: '5 hrs', href: '/routes/taif-to-abha' },
                                { city: 'Al Baha', dist: '220 km', route: 'Route 15 South', time: '3 hrs', href: '/routes/taif-to-al-baha' },
                            ].map((r, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            <Link href={r.href} className="hover:text-slate-600 underline decoration-gray-200">{r.city}</Link>
                                        </div>
                                        <div className="text-xs text-gray-500">Distance: {r.dist} · {r.route}</div>
                                    </div>
                                    <div className="text-xl font-bold text-brand-navy-dark">{r.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Problems Solved */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Taif</h2>
                            <p className="text-xl text-gray-600 font-light">We solve the transport problems visitors and pilgrims face in the Taif highlands.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Mountain Road Safety</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Al Hada&apos;s 30+ switchback turns and steep gradients require specialist local knowledge — especially at night, in fog, or during summer rain. Unfamiliar drivers overheat vehicles or misjudge blind corners.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Expert mountain-certified chauffeurs</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Scattered Tourist Sites</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Shubra Palace, rose farms, the cable car, Abdullah Ibn Abbas Mosque, and Al Rudaf Park are spread across the city and mountains — making ad-hoc travel complicated and expensive without a planned tour.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Pre-planned full-day tour packages</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Hajj Season Availability</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">During Hajj 2026, demand for Miqat transfers surges dramatically. Ad-hoc taxis disappear, prices triple, and pilgrims are left stranded during the most critical days of their journey.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Guaranteed pre-booked Hajj transfers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Taif Landmarks */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taif Landmarks — Taxi Access</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We transfer to every major Taif attraction, mountain site, and institution — fixed rate, door to entrance</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: 'Al Hada Cable Car (Telefric)', time: '30 min from City Center', href: '/locations/taif/al-hada' },
                                { name: 'Shubra Palace Museum', time: 'Taif City Center', href: '/locations/taif/city-center' },
                                { name: 'Shafa Mountains & Viewpoints', time: '45 min from City Center', href: '/locations/taif/shafa' },
                                { name: 'Damask Rose Farms (Wadi Naaman)', time: '30 min — best March/April', href: '/locations/taif/wadi-naaman' },
                                { name: 'Abdullah Ibn Abbas Mosque', time: 'Taif City — 10 min', href: '/locations/taif/city-center' },
                                { name: 'Al Rudaf Park', time: 'City area — 15 min', href: '/locations/taif/al-rudaf' },
                                { name: 'Al Hawiya Waterfall Area', time: '35 min from City Center', href: '/locations/taif/al-hawiya' },
                                { name: 'Taif Regional Airport (TIF)', time: '20 min from City Center', href: '/locations/taif/city-center' },
                                { name: 'Qarn al-Manazil Miqat', time: 'En route to Makkah — 45 min', href: '/routes/taif-to-makkah' },
                                { name: 'Al Baz Tower', time: 'Taif City Center', href: '/locations/taif/city-center' },
                                { name: 'Taif Zoo', time: 'City area — 15 min', href: '/locations/taif/al-rudaf' },
                                { name: 'Honey & Fruit Markets', time: 'Wadi Naaman — 30 min', href: '/locations/taif/wadi-naaman' },
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
                                <Wallet className="w-4 h-4 text-brand-navy-dark" />
                                <span className="text-slate-800 text-sm font-semibold">Fixed Price Transparency</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Pricing in the City of Roses</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                Fixed rates for every route — mountain tours, Miqat transfers, airport runs, and intercity. The price quoted on WhatsApp is the exact price you pay.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Determines Your Fare?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Mountain className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Terrain</h4>
                                            <p className="text-gray-600 text-xs">Mountain routes (Al Hada/Shafa) require specialist drivers and higher fuel consumption. City transfers within Taif are separately priced.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Type</h4>
                                            <p className="text-gray-600 text-xs">Toyota Camry for 1–3 passengers. GMC Yukon XL for families with luggage. Toyota Hiace for groups of 8–11.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Tour Duration</h4>
                                            <p className="text-gray-600 text-xs">Half-day tours (3–4 hours) and full-day tours (7–8 hours) with driver-as-guide are priced per itinerary, not per kilometer.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-700 p-8 rounded-2xl text-white flex flex-col justify-center shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">No Summer or Hajj Surcharges</h3>
                                <p className="mb-6 opacity-95 text-lg font-light leading-relaxed">
                                    Taif&apos;s summer peak and Hajj 2026 season see many drivers double or triple fares. Haram Taxi maintains ethical fixed pricing year-round — your Miqat transfer quote is the same in Rajab as it is in Dhul Hijjah.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-brand-navy-dark hover:bg-gray-100 w-full text-lg h-12 border-0 shadow-md">
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Taif</h2>
                            <p className="text-xl text-gray-600 font-light">Book, confirm, and travel in three simple steps</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10" />
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Share Your Details</h3>
                                <p className="text-center text-gray-600">WhatsApp us your pickup location (hotel, resort, or address), destination, date, and number of passengers. We confirm instantly.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Receive Driver Details</h3>
                                <p className="text-center text-gray-600">We send your driver&apos;s name, vehicle model, and direct number before travel. For airport pickups, your driver tracks the flight.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Travel Comfortably</h3>
                                <p className="text-center text-gray-600">Your driver arrives on time at your location. No pre-payment required. Pay the fixed agreed price on arrival or at journey end.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taif Taxi Services</h2>
                            <p className="text-xl text-gray-600 font-light">From Miqat transfers to mountain tours — everything covered.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="block group">
                                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-slate-300 hover:shadow-md transition-all h-full">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
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
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in Taif?</h2>
                                <ul className="space-y-4">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex gap-4">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Taif%20taxi" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                            <WhatsAppIcon className="w-4 h-4" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/taif-mountains-view.webp"
                                    alt="Haram Taxi chauffeur in Taif mountains"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Routes */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Taif Taxi Routes</h2>
                            <p className="text-xl text-gray-600 font-light">Mountain transfers and intercity connections from Taif.</p>
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

                {/* Testimonials */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Taif Passengers Say</h2>
                            <p className="text-gray-600">Real reviews from pilgrims, tourists, and residents</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Ahmad Al-Farsi",
                                    role: "Hajj Pilgrim from Malaysia",
                                    text: "Booked a Miqat transfer from our Al Hada hotel to Makkah for Hajj 2025. The driver arrived 10 minutes early, knew the exact Miqat facilities, and waited patiently while we prepared our Ihram. Absolutely essential service.",
                                    stars: 5
                                },
                                {
                                    name: "Fatima Hussain",
                                    role: "Taif Summer Visitor",
                                    text: "We hired a driver for a full-day Al Hada and rose farm tour. He showed us the cable car, took us to a traditional rose distillery in Wadi Naaman, and drove us safely through the zigzag road. Best day of our summer holiday.",
                                    stars: 5
                                },
                                {
                                    name: "Ibrahim Al-Rashid",
                                    role: "Taif to Jeddah Airport Transfer",
                                    text: "Needed an early morning transfer from Shafa to Jeddah Airport. The Yukon arrived at 4am, clean and on time. Driver was professional and delivered me to KAIA Terminal 1 with plenty of time. Fixed price, no surprises.",
                                    stars: 5
                                }
                            ].map((review, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                    <div className="flex mb-4">
                                        {[...Array(review.stars)].map((_, s) => (
                                            <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                                    <div>
                                        <div className="font-bold text-gray-900">{review.name}</div>
                                        <div className="text-sm text-gray-500">{review.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Customer Updates */}
                <div className="container mx-auto px-4 py-8">
                    <CustomerUpdates location="Taif" />
                </div>

                {/* FAQs */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Taif Taxi</h2>
                            <p className="text-xl text-gray-600 font-light">Everything you need to know about taxi service in Taif and the Hejaz mountains.</p>
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
                    <NearbyCities currentCity="taif" />
                </div>

                {/* Final CTA */}
                <section className="py-20 bg-slate-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-4">Book Your Taif Taxi Now</h2>
                        <p className="text-xl mb-2 opacity-95 font-light">Miqat transfers, mountain tours, airport runs &amp; intercity — all fixed-rate, no surprises.</p>
                        <p className="text-sm mb-8 opacity-80">No pre-payment. Instant WhatsApp confirmation. 24/7 service across all Taif districts.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Taif%20taxi" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg border-0 shadow-lg flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book via WhatsApp Now
                                </Button>
                            </a>
                            <Link href="/booking">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-700 px-8 py-6 text-lg">
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
