import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, AlertCircle, Wallet, Star, Navigation, Anchor, Building2 } from 'lucide-react';
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
        canonical: 'https://haramtaxiservice.com/locations/jeddah',
    },
    title: 'Jeddah Taxi Service | KAIA Airport, Al Balad, Makkah & Intercity 2026',
    description: 'Trusted Jeddah taxi 24/7. KAIA airport to Makkah (75 min), Al Balad city tours, Corniche transfers, Hajj 2026 permits — fixed fares, no surge. Book via WhatsApp.',
    keywords: ['Jeddah taxi', 'Jeddah airport taxi', 'KAIA taxi to Makkah', 'Jeddah to Makkah taxi', 'Hajj 2026 Jeddah transfer', 'Al Balad taxi Jeddah', 'Jeddah city tour taxi', 'Jeddah Corniche taxi', 'Jeddah intercity taxi', 'KAIA transfer Makkah Madinah'],
    openGraph: {
        title: 'Jeddah Taxi Service | KAIA Airport, Al Balad & Hajj 2026',
        description: 'Professional taxi in Jeddah. KAIA airport transfers, Al Balad city tours, Corniche transfers, Makkah & Madinah routes. Book 24/7 via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/jeddah',
        type: 'website',
    },
};

export default function JeddahPage() {
    const services = [
        { name: 'KAIA Airport Transfer', description: 'Meet & greet from all KAIA terminals (T1, Hajj Terminal) directly to Makkah, Madinah, or Jeddah city. Flight tracked, 24/7.', icon: Navigation, href: '/services/jeddah-airport-transfer' },
        { name: 'Jeddah to Makkah', description: '75-minute fixed-rate transfer from any Jeddah hotel or address directly to your Makkah hotel via the Haramain Highway.', icon: ArrowRight, href: '/routes/jeddah-to-makkah' },
        { name: 'Al Balad City Tour', description: "UNESCO-listed Historic Jeddah — coral-built merchant houses, Al-Shafi'i Mosque, Naseef House, and the old souq by private taxi.", icon: Building2, href: '/locations/jeddah/al-balad' },
        { name: 'Corniche Transfer', description: "Red Sea Corniche, King Fahd Fountain, and Jeddah's waterfront by private taxi. Flexible stops, driver waits.", icon: Anchor, href: '/locations/jeddah/corniche' },
        { name: 'Intercity Transfers', description: 'Jeddah to Riyadh, Madinah, Taif, Abha, Yanbu, Al Khobar — all intercity routes served with fixed rates.', icon: Car, href: '/routes' },
        { name: '24/7 Service', description: 'Round-the-clock service across all Jeddah districts, KAIA airport, KAEC, and North Jeddah — no surge pricing.', icon: Clock, href: '/booking' },
    ];

    const features = [
        'Licensed, Hajj-permitted drivers for Makkah entry checkpoints',
        'Clean, modern fleet — Camry, GMC Yukon XL, Staria, Hiace, Coaster',
        'Fixed upfront fares — no meters, no haggling, no surge pricing',
        'Flight tracking for all KAIA arrivals — free 60-min wait',
        'English & Arabic-speaking support via WhatsApp',
        'Meet & greet with name board at KAIA Terminal 1 and Hajj Terminal',
    ];

    const faqs = [
        {
            question: "How long is the taxi from Jeddah Airport (KAIA) to Makkah?",
            answer: "The drive from King Abdulaziz International Airport (KAIA) to Makkah hotels takes approximately 75–90 minutes via the Haramain Expressway. During peak Umrah/Hajj periods, allow 90–120 minutes. All fares are fixed and confirmed before departure."
        },
        {
            question: "Do you offer Hajj 2026 transfers from Jeddah Airport?",
            answer: "Yes. We provide Hajj-permitted KAIA airport transfers to Makkah for Hajj 2026. Our vehicles carry Ministry of Hajj permits allowing entry into Makkah through the security checkpoints. Pre-booking at least 2–4 weeks before your Hajj travel is strongly recommended as slots fill fast during Dhul Hijjah."
        },
        {
            question: "Which terminals does Jeddah Airport (KAIA) have?",
            answer: "KAIA has Terminal 1 (the main new terminal for domestic and international flights) and the Hajj Terminal (operational only during the Hajj season for pilgrims). We serve all terminals — provide your terminal and flight number when booking and your driver meets you at the correct exit."
        },
        {
            question: "Can I book a Jeddah city tour to Al Balad and the Corniche?",
            answer: "Yes. We offer private half-day and full-day Jeddah city tours covering UNESCO-listed Al Balad (Historic Jeddah), the Red Sea Corniche, King Fahd Fountain, and other landmarks. Your driver waits at each stop. Contact us via WhatsApp for a custom itinerary and fixed tour rate."
        },
        {
            question: "How much does a Jeddah to Madinah taxi cost?",
            answer: "Jeddah to Madinah is approximately 400km and takes 4 hours via the Hijrah Highway. Fares vary by vehicle type — from Toyota Camry to GMC Yukon XL. Message us on WhatsApp with your group size for an instant fixed quote. No pre-payment required."
        },
        {
            question: "Is there Uber in Jeddah?",
            answer: "Yes, Uber and Careem operate in Jeddah for short city trips. However, for Makkah transfers (Hajj-permitted vehicles required), airport transfers with meet & greet, Madinah intercity routes, and large-group travel, a pre-booked private taxi is far more reliable and often more cost-effective for families."
        },
        {
            question: "Do you serve all Jeddah districts?",
            answer: "Yes. We serve all Jeddah areas including Al Balad, Al Hamra, Al Rawdah, Al Zahra, the Corniche, North Jeddah, Obhur, KAEC, and all hotels and residential compounds. We also serve KAEC (King Abdullah Economic City) — approximately 90 minutes north of Jeddah."
        },
        {
            question: "Can I book a Jeddah to Riyadh private taxi?",
            answer: "Yes. Jeddah to Riyadh is approximately 950km and takes 9–10 hours via King Abdulaziz Highway (Route 40). We recommend the GMC Yukon XL or Toyota Staria for family comfort on this long-distance route. Round-trip discounts are available."
        },
        {
            question: "What is the best vehicle for a family arriving at KAIA with heavy Hajj luggage?",
            answer: "The GMC Yukon XL is the most popular choice for Hajj families — it comfortably carries 7 passengers with full Hajj luggage including large suitcases and carry-on bags. For larger groups of 8–11, the Toyota Hiace minibus is available. For budget-conscious solo travelers or couples, the Toyota Camry is excellent."
        },
        {
            question: "Do you offer women-only taxi from Jeddah Airport to Makkah?",
            answer: "Yes. We offer female-traveler-friendly transfers with professional, vetted male drivers in the front and complete privacy in the rear cabin. Female passengers travelling alone or in female-only groups frequently use our KAIA to Makkah service. We treat all female passengers with full dignity and respect."
        },
        {
            question: "How do I book a Jeddah taxi from outside Saudi Arabia?",
            answer: "Simply WhatsApp us your itinerary details (flight number, arrival terminal, destination hotel, group size, and date) and we confirm your booking with a fixed price instantly. No app download, no pre-payment, no credit card needed. Confirmation is via WhatsApp message."
        },
        {
            question: "Can I go from KAIA Jeddah Airport directly to Madinah (bypassing Makkah)?",
            answer: "Yes. We offer direct KAIA to Madinah transfers — approximately 415km and 4 hours — via the Hijrah Highway without entering Makkah. This is a popular route for pilgrims whose Umrah itinerary starts in Madinah before proceeding to Makkah."
        }
    ];

    const popularRoutes = [
        { from: 'KAIA Jeddah Airport', to: 'Makkah', duration: '75–90 min', href: '/routes/jeddah-airport-to-makkah' },
        { from: 'Jeddah City', to: 'Makkah', duration: '75 min', href: '/routes/jeddah-to-makkah' },
        { from: 'KAIA Jeddah Airport', to: 'Madinah', duration: '4 hrs', href: '/routes/madinah-hotel-to-jeddah-airport' },
        { from: 'Jeddah', to: 'Madinah', duration: '4 hrs', href: '/routes/jeddah-to-madinah' },
        { from: 'Jeddah', to: 'Taif', duration: '2.5 hrs', href: '/routes/jeddah-to-taif' },
        { from: 'Jeddah', to: 'Riyadh', duration: '9–10 hrs', href: '/routes/jeddah-to-riyadh' },
        { from: 'Jeddah', to: 'Abha', duration: '5–6 hrs', href: '/routes/jeddah-to-abha' },
        { from: 'Jeddah', to: 'Al Baha', duration: '4.5 hrs', href: '/routes/jeddah-to-al-baha' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service — Jeddah",
        "image": "https://haramtaxiservice.com/images/locations/jeddah-corniche-view.webp",
        "@id": "https://haramtaxiservice.com/locations/jeddah",
        "url": "https://haramtaxiservice.com/locations/jeddah",
        "telephone": "+966575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "postalCode": "21411",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.4858,
            "longitude": 39.1925
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": { "@type": "City", "name": "Jeddah" }
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
                        <span className="text-gray-900 font-medium">Jeddah</span>
                    </div>
                </div>

                {/* Hajj 2026 Urgency Banner */}
                <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                    <span>Hajj 2026 KAIA transfers are booking fast. <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Jeddah%20Airport%20KAIA%20transfer%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Reserve your Hajj-permitted seat via WhatsApp.</a></span>
                </div>

                {/* Hero */}
                <section className="relative h-[500px] bg-gray-900 border-b-4 border-slate-500">
                    <Image
                        src="/images/locations/jeddah-corniche-view.webp"
                        alt="Jeddah Corniche — taxi service at Red Sea Gateway"
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
                                    <Anchor className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Gateway to the Haramain · Jeddah, Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Jeddah Taxi — KAIA, Al Balad &amp; <span className="text-brand-gold">Hajj 2026</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-6 font-light leading-relaxed">
                                    Trusted 24/7 taxi in <strong>Jeddah, Saudi Arabia</strong>. Fixed-rate <Link href="/routes/jeddah-airport-to-makkah" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">KAIA airport transfers to Makkah</Link> (75 min), <Link href="/locations/jeddah/al-balad" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Al Balad city tours</Link>, Corniche transfers, and intercity routes — no surge pricing.
                                </p>
                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>KAIA Airport · Al Balad · Corniche · North Jeddah · Al Hamra · KAEC</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jeddah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">KAIA Airport Service</div></div>
                            <div><div className="text-3xl font-bold mb-2">75 min</div><div className="text-sm opacity-90">KAIA to Makkah</div></div>
                            <div><div className="text-3xl font-bold mb-2">6</div><div className="text-sm opacity-90">Districts Covered</div></div>
                            <div><div className="text-3xl font-bold mb-2">100%</div><div className="text-sm opacity-90">Fixed Pricing</div></div>
                        </div>
                    </div>
                </section>

                {/* Jeddah Districts */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taxi by Jeddah District & Area</h2>
                            <p className="text-gray-600">Select your area for tailored transfer and tour information</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { name: 'KAIA Airport', sub: 'T1 & Hajj Terminal', href: '/locations/jeddah/kaia-airport', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
                                { name: 'Al Balad', sub: 'UNESCO Heritage', href: '/locations/jeddah/al-balad', color: 'bg-amber-50 border-amber-200 hover:border-amber-400' },
                                { name: 'Corniche', sub: 'Red Sea Waterfront', href: '/locations/jeddah/corniche', color: 'bg-sky-50 border-sky-200 hover:border-sky-400' },
                                { name: 'Al Hamra', sub: 'Upscale Residential', href: '/locations/jeddah/al-hamra', color: 'bg-green-50 border-green-200 hover:border-green-400' },
                                { name: 'North Jeddah', sub: 'Obhur & New Districts', href: '/locations/jeddah/north-jeddah', color: 'bg-stone-50 border-stone-200 hover:border-stone-400' },
                                { name: 'KAEC', sub: 'Economic City', href: '/locations/jeddah/kaec', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
                            ].map((d, i) => (
                                <Link key={i} href={d.href} className={`block p-5 rounded-xl border-2 transition-all ${d.color} group`}>
                                    <MapPin className="w-6 h-6 text-gray-500 mb-3 group-hover:text-gray-700 transition-colors" />
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Times from Jeddah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { city: 'Makkah', dist: '100 km', route: 'Haramain Expressway', time: '75 min', href: '/routes/jeddah-to-makkah' },
                                { city: 'Madinah', dist: '400 km', route: 'Hijrah Highway', time: '4 hrs', href: '/routes/jeddah-to-madinah' },
                                { city: 'Taif', dist: '170 km', route: 'Mountain Highway', time: '2.5 hrs', href: '/routes/jeddah-to-taif' },
                                { city: 'Riyadh', dist: '950 km', route: 'Route 40', time: '9–10 hrs', href: '/routes/jeddah-to-riyadh' },
                                { city: 'Abha', dist: '550 km', route: 'Route 15 South', time: '5–6 hrs', href: '/routes/jeddah-to-abha' },
                                { city: 'Al Baha', dist: '390 km', route: 'Route 15 South', time: '4.5 hrs', href: '/routes/jeddah-to-al-baha' },
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Jeddah</h2>
                            <p className="text-xl text-gray-600 font-light">We solve the transport problems pilgrims and visitors face at the Red Sea Gateway.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">KAIA Terminal Chaos</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">KAIA is one of the world&apos;s busiest airports during Hajj and Umrah season. Unlicensed touts, metered taxis charging inflated rates, and drivers who don&apos;t know the Makkah checkpoints make arrivals stressful and expensive.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Pre-booked meet & greet with name board</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Makkah Checkpoint Access</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">During Hajj, only Ministry-registered, permit-holding vehicles can enter Makkah through the security cordons. Standard Uber, Careem, and unlicensed taxis are turned back — leaving pilgrims stranded kilometres from their hotels.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Hajj-permitted vehicles with full Ministry clearance</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">City Tour Navigation</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Al Balad&apos;s narrow coral-house alleys, the Corniche&apos;s restricted parking zones, and the distance between Jeddah landmarks make ad-hoc travel complicated and time-consuming without a knowledgeable local driver.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span className="text-sm">Local-knowledge drivers for all Jeddah areas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jeddah Landmarks */}
                <section className="py-16 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Jeddah Landmarks — Taxi Access</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We transfer to every major Jeddah attraction, institution, and neighbourhood — fixed rate, door to entrance</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: 'KAIA Terminal 1', time: 'Airport — 24/7 meet & greet', href: '/locations/jeddah/kaia-airport' },
                                { name: 'KAIA Hajj Terminal', time: 'Hajj season — name-board pickup', href: '/locations/jeddah/kaia-airport' },
                                { name: 'Al Balad (Historic Jeddah)', time: 'UNESCO Heritage — 20 min from KAIA', href: '/locations/jeddah/al-balad' },
                                { name: 'King Fahd Fountain', time: 'Corniche — 25 min from KAIA', href: '/locations/jeddah/corniche' },
                                { name: 'Red Sea Mall', time: 'North Jeddah — 30 min from KAIA', href: '/locations/jeddah/north-jeddah' },
                                { name: 'Al Shallal Theme Park', time: 'North Jeddah — 35 min from center', href: '/locations/jeddah/north-jeddah' },
                                { name: 'Naseef House Museum', time: 'Al Balad — 20 min from KAIA', href: '/locations/jeddah/al-balad' },
                                { name: "Al-Shafi'i Mosque", time: 'Al Balad — historic Hejaz mosque', href: '/locations/jeddah/al-balad' },
                                { name: 'Jeddah Corniche', time: '30km waterfront — scenic transfer', href: '/locations/jeddah/corniche' },
                                { name: 'KAEC (Economic City)', time: '90 min north — all compounds', href: '/locations/jeddah/kaec' },
                                { name: 'KAUST University', time: 'Thuwal — 60 min north of Jeddah', href: '/locations/jeddah/north-jeddah' },
                                { name: 'Obhur Creek & Resorts', time: 'North Jeddah — 40 min from center', href: '/locations/jeddah/north-jeddah' },
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jeddah Taxi Pricing</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                Fixed rates for every route — airport transfers, city tours, Makkah runs, and intercity. The price quoted on WhatsApp is the exact price you pay.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Determines Your Fare?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Navigation className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Distance</h4>
                                            <p className="text-gray-600 text-xs">City transfers within Jeddah, KAIA to Makkah (75 min), and intercity long-haul are all separately priced with no hidden charges.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Type</h4>
                                            <p className="text-gray-600 text-xs">Toyota Camry for 1–3 passengers. GMC Yukon XL for families with Hajj luggage. Toyota Hiace for groups of 8–11.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Tour Duration</h4>
                                            <p className="text-gray-600 text-xs">Half-day Al Balad and Corniche tours are priced per itinerary, not per km. Full-day city tours with driver waiting are fixed rate.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-700 p-8 rounded-2xl text-white flex flex-col justify-center shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">No Hajj or Ramadan Surcharges</h3>
                                <p className="mb-6 opacity-95 text-lg font-light leading-relaxed">
                                    During Hajj 2026 and Ramadan, unlicensed taxis triple their fares at KAIA. Our fixed pricing is the same year-round — the quote you receive on WhatsApp is exactly what you pay, whether it&apos;s the 1st of Muharram or the 10th of Dhul Hijjah.
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Jeddah</h2>
                            <p className="text-xl text-gray-600 font-light">Book, confirm, and travel in three simple steps</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10" />
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Share Your Details</h3>
                                <p className="text-center text-gray-600">WhatsApp us your flight number (for airport pickups), hotel address, destination, date, and group size. We confirm your fixed price instantly.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Receive Driver Details</h3>
                                <p className="text-center text-gray-600">We send your driver&apos;s name, vehicle model, and direct number before travel. For KAIA pickups, your driver tracks the flight and adjusts automatically.</p>
                            </div>
                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Travel Comfortably</h3>
                                <p className="text-center text-gray-600">Your driver meets you at the KAIA exit with a name board, assists with luggage, and drives you directly to your destination — no detours, no surprises.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jeddah Taxi Services</h2>
                            <p className="text-xl text-gray-600 font-light">From KAIA airport transfers to city tours — everything covered.</p>
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
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Haram Taxi in Jeddah?</h2>
                                <ul className="space-y-4">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex gap-4">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Jeddah%20taxi" target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                            <WhatsAppIcon className="w-4 h-4" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">Jeddah Corniche</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Routes */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Jeddah Taxi Routes</h2>
                            <p className="text-xl text-gray-600 font-light">Airport connections and intercity transfers from the Red Sea Gateway.</p>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Jeddah Passengers Say</h2>
                            <p className="text-gray-600">Real reviews from pilgrims, tourists, and residents</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Adnan M.",
                                    role: "Hajj Pilgrim from Birmingham, UK",
                                    text: "After a 12-hour flight to KAIA, our GMC Yukon was cold and spotless at the arrivals gate. The driver helped with all 7 bags without being asked and had the Hajj permit at every checkpoint. Best decision we made — booked 3 weeks in advance.",
                                    stars: 5
                                },
                                {
                                    name: "Farah K.",
                                    role: "Solo Umrah Traveller from Malaysia",
                                    text: "I was travelling alone for Umrah. The Haram Taxi driver was professional and respectful the entire journey from KAIA to my Makkah hotel. WhatsApp booking took 2 minutes. I will never use a random airport taxi again.",
                                    stars: 5
                                },
                                {
                                    name: "Kamran S.",
                                    role: "Group Hajj Pilgrim from Pakistan",
                                    text: "Six of us, heavy Hajj luggage, and the Yukon XL handled it all. Fixed price confirmed before we landed in Jeddah — no drama at the Makkah checkpoint. The driver knew exactly which gate to use. Absolutely reliable.",
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
                    <CustomerUpdates location="Jeddah" />
                </div>

                {/* FAQs */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Jeddah Taxi</h2>
                            <p className="text-xl text-gray-600 font-light">Everything you need to know about taxi service in Jeddah and KAIA airport transfers.</p>
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
                    <NearbyCities currentCity="jeddah" />
                </div>

                {/* Final CTA */}
                <section className="py-20 bg-slate-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-4">Book Your Jeddah Taxi Now</h2>
                        <p className="text-xl mb-2 opacity-95 font-light">KAIA airport transfers, Makkah runs, Al Balad tours &amp; intercity — all fixed-rate, no surprises.</p>
                        <p className="text-sm mb-8 opacity-80">No pre-payment. Instant WhatsApp confirmation. 24/7 service across all Jeddah districts.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Jeddah%20taxi" target="_blank" rel="noopener noreferrer">
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
