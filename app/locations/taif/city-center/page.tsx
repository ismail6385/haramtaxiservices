import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Star, CheckCircle2, Car, Building2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/taif/city-center',
    },
    title: 'Taif City Center Taxi | Shubra Palace, Airport & Intercity Transfers',
    description: 'Taxi in Taif City Center — Shubra Palace, Abdullah Ibn Abbas Mosque, Taif Airport (TIF), and intercity transfers to Makkah & Jeddah. Fixed fares, 24/7 WhatsApp.',
    keywords: ['Taif city center taxi', 'Shubra Palace taxi Taif', 'Taif airport taxi', 'TIF airport transfer', 'downtown Taif taxi', 'Abdullah Ibn Abbas Mosque taxi', 'Taif souq taxi'],
    openGraph: {
        title: 'Taif City Center Taxi | Shubra Palace, Airport & Transfers',
        description: 'Pre-booked taxi in downtown Taif. Shubra Palace, Taif Airport, and intercity connections. Fixed rate via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/city-center',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Taif City Center",
    "@id": "https://haramtaxiservice.com/locations/taif/city-center",
    "url": "https://haramtaxiservice.com/locations/taif/city-center",
    "telephone": "+966575806733",
    "description": "Professional taxi service in Taif city center. Shubra Palace, Taif Airport transfers, and intercity connections to Makkah, Jeddah, and Riyadh.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "City Center",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "postalCode": "26511",
        "addressCountry": "SA"
    },
    "areaServed": "Taif City Center",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "City Center", "item": "https://haramtaxiservice.com/locations/taif/city-center" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi from Taif City Center to the airport (TIF)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Taif Regional Airport (TIF) is approximately 15–20 minutes from downtown Taif. Book via WhatsApp with your departure time and flight details. We recommend booking at least 2 hours before your flight. We serve all airlines operating from TIF including Saudia and flynas." }
        },
        {
            "@type": "Question",
            "name": "Can I get a taxi from Taif City Center to Shubra Palace?",
            "acceptedAnswer": { "@type": "Answer", "text": "Shubra Palace Museum is located in the heart of Taif city. Our drivers know the area well and can pick you up from any hotel or address in central Taif. If you want a guided city tour including Shubra Palace, Abdullah Ibn Abbas Mosque, and Al Baz Tower, we can arrange a half-day driver." }
        },
        {
            "@type": "Question",
            "name": "How far is Taif City Center from Makkah?",
            "acceptedAnswer": { "@type": "Answer", "text": "Taif city center is approximately 90km from Makkah and the drive takes 1.5–2 hours via the Al Hada mountain road (Route 15) or 1.5 hours via the As-Sail highway. For Miqat stops, we recommend the Al Hada route via As-Sail Al-Kabir." }
        },
        {
            "@type": "Question",
            "name": "What intercity routes depart from Taif City Center?",
            "acceptedAnswer": { "@type": "Answer", "text": "All major intercity routes depart from Taif city. Popular destinations: Makkah (1.5 hrs), Jeddah Airport (2.5 hrs), Madinah (4.5–5 hrs), Riyadh (8 hrs), Abha (5 hrs), Al Baha (3 hrs). WhatsApp us for any destination in Saudi Arabia." }
        },
        {
            "@type": "Question",
            "name": "Do you cover Taif hotels for airport pickups?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide hotel-to-airport pickups from all Taif hotels including Hilton Taif, Marriott Taif, and all city center hotels. Share your hotel name and flight time and we will arrange your transfer." }
        },
        {
            "@type": "Question",
            "name": "Is there a taxi from Taif City to the Rose Festival area?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Taif Rose Festival (usually March–April) takes place around the Wadi Naaman rose farm area, approximately 30 minutes from Taif city center. We offer return-trip festival transfers and full rose farm tour packages." }
        }
    ]
};

const cityCenterRoutes = [
    { to: 'Taif Airport (TIF)', duration: '15–20 min', note: 'All Saudia & flynas flights' },
    { to: 'Al Hada Mountain', duration: '30 min', note: 'Cable car & zigzag road' },
    { to: 'Shafa Highlands', duration: '45 min', note: 'Mountain resort area' },
    { to: 'Makkah', duration: '1.5–2 hrs', note: 'Via Al Hada mountain road' },
    { to: 'Jeddah Airport (KAIA)', duration: '2.5 hrs', note: 'Via Makkah bypass' },
    { to: 'Riyadh', duration: '8–8.5 hrs', note: 'Intercity via Route 65' },
];

const cityLandmarks = [
    'Shubra Palace Museum — Ottoman-era royal palace',
    'Abdullah Ibn Abbas Mosque — historic landmark',
    'Al Baz Tower — city landmark and viewpoint',
    'Taif Souq — traditional market and shopping',
    'Al Rudaf Park — city&apos;s main public park',
    'Taif Regional Airport (TIF) — 15 min away',
];

export default function TaifCityCenterPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="bg-white min-h-screen">
                <nav className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <ol className="flex items-center gap-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li><Link href="/locations/taif" className="hover:text-gray-700">Taif</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li className="text-gray-900 font-medium">City Center</li>
                        </ol>
                    </div>
                </nav>

                <section className="bg-gradient-to-br from-stone-900 via-gray-800 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <Building2 className="w-4 h-4 text-stone-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Downtown Taif · Shubra Palace · Airport</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Taif City Center Taxi<br />
                                <span className="text-stone-300">Shubra Palace & Airport Transfers</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Pre-booked taxi in downtown Taif. Shubra Palace, Al Baz Tower, Taif Airport (TIF), and all intercity transfers to Makkah, Jeddah, and Riyadh — fixed rate, named driver, via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Taif%20City%20Center" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                    <WhatsAppIcon className="w-5 h-5" />Book City Center Transfer
                                </a>
                                <Link href="/locations/taif" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors">
                                    <Car className="w-4 h-4" />All Taif Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 border-b border-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'Taif to Airport (TIF)', value: '15–20 min' },
                                { label: 'Taif to Makkah', value: '1.5–2 hrs' },
                                { label: 'Taif to Jeddah Airport', value: '2.5 hrs' },
                                { label: 'Available', value: '24/7' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-gray-800">{s.value}</div>
                                    <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfers from Taif City Center</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {cityCenterRoutes.map((route, i) => (
                                            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                                <div>
                                                    <div className="font-semibold text-white">{route.to}</div>
                                                    <div className="text-sm text-slate-400">{route.note}</div>
                                                </div>
                                                <div className="flex items-center gap-1 text-green-400 text-sm font-bold whitespace-nowrap">
                                                    <Clock className="w-4 h-4" />{route.duration}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">City Center Landmarks We Serve</h2>
                                <ul className="space-y-4">
                                    {cityLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Taif%20City%20Center" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                        <WhatsAppIcon className="w-5 h-5" />Book City Center Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Taif City Hotels We Serve</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We pick up from all major Taif city center hotels — no walking to a kerb or waiting for an app.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                            {['Hilton Taif Hotel', 'Marriott Taif', 'Ascott Taif', 'Holiday Inn Taif', 'Movenpick Taif', 'All City Hotels'].map((h, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-700">
                                    <Star className="w-4 h-4 text-amber-500 mx-auto mb-2" />{h}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Taif City Center — FAQs</h2>
                        <Accordion type="single" collapsible className="space-y-3">
                            {faqSchema.mainEntity.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-6">
                                    <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline">{faq.name}</AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-5 leading-relaxed">{faq.acceptedAnswer.text}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                <section className="py-16 bg-slate-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Taif City Transfer</h2>
                        <p className="text-slate-300 text-lg mb-8">Share your hotel or address, destination, and time. Confirmed in 2 minutes via WhatsApp.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Taif%20City%20Center" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-800 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg">
                            <WhatsAppIcon className="w-6 h-6" />WhatsApp — Book Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
