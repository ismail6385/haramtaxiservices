import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Star, CheckCircle2, Car, Mountain } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/taif/al-hawiya',
    },
    title: 'Al Hawiya Taxi Taif | Mountain District Transfer & Makkah Connection',
    description: 'Taxi in Al Hawiya, Taif — residential mountain district transfers, Makkah connections (1.5 hrs), Jeddah Airport runs. Expert drivers, fixed rate, 24/7 WhatsApp booking.',
    keywords: ['Al Hawiya taxi', 'Al Hawiya Taif taxi', 'Hawiya mountain taxi', 'Al Hawiya to Makkah', 'Al Hawiya to Jeddah', 'Taif mountain district taxi'],
    openGraph: {
        title: 'Al Hawiya Taxi Taif | Mountain District Transfers',
        description: 'Pre-booked taxi in Al Hawiya, Taif. Mountain transfers, Makkah and Jeddah connections. Fixed rate via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/al-hawiya',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Al Hawiya, Taif",
    "@id": "https://haramtaxiservice.com/locations/taif/al-hawiya",
    "url": "https://haramtaxiservice.com/locations/taif/al-hawiya",
    "telephone": "+966575806733",
    "description": "Professional taxi service in Al Hawiya, Taif's mountain residential district. City transfers, Makkah connections, and Jeddah airport runs.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Hawiya",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "addressCountry": "SA"
    },
    "areaServed": "Al Hawiya, Taif",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "Al Hawiya", "item": "https://haramtaxiservice.com/locations/taif/al-hawiya" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How far is Al Hawiya from Taif City Center?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Hawiya is approximately 25km from Taif city center and the drive takes 30–35 minutes via the mountain road. It sits between Taif city and the higher mountain resorts of Al Hada and Shafa." }
        },
        {
            "@type": "Question",
            "name": "Can I get a taxi from Al Hawiya to Makkah at night?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We operate 24/7 and regularly provide late-night transfers from Al Hawiya to Makkah for Fajr Umrah and Hajj travel. The journey takes approximately 1.5–2 hours. Pre-booking for night transfers is strongly recommended." }
        },
        {
            "@type": "Question",
            "name": "Is Al Hawiya safe for families to visit?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Hawiya is a pleasant mountain residential district popular with families for its cool climate and gardens. Our family-sized vehicles (GMC Yukon XL, Toyota Staria) are ideal for the winding mountain approach roads." }
        },
        {
            "@type": "Question",
            "name": "Do you serve all addresses in Al Hawiya?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our drivers know all the residential streets, villas, and compounds in Al Hawiya. Share your full address or drop a WhatsApp location pin and we will find you." }
        },
        {
            "@type": "Question",
            "name": "What is the fare from Al Hawiya to Jeddah Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Hawiya to Jeddah Airport (KAIA) is approximately 190km. Fares depend on vehicle type and are quoted as a fixed price on WhatsApp. We recommend departing 4–5 hours before your flight to allow for mountain road traffic and prayer stops." }
        }
    ]
};

const alHawiyaRoutes = [
    { to: 'Taif City Center', duration: '30–35 min', note: 'Via mountain road' },
    { to: 'Al Hada', duration: '20 min', note: 'Higher mountain resort area' },
    { to: 'Shafa', duration: '30 min', note: 'Highland mountain resort' },
    { to: 'Makkah', duration: '1.5–2 hrs', note: 'Via Route 15 descent' },
    { to: 'Jeddah Airport', duration: '2–2.5 hrs', note: 'Via Makkah bypass' },
    { to: 'Taif Airport (TIF)', duration: '40 min', note: 'Regional airport' },
];

const alHawiyaLandmarks = [
    'Al Hawiya gardens and residential compounds',
    'Mountain viewpoints and scenic overlooks',
    'Al Hawiya Valley (Wadi) walking areas',
    'Local traditional markets and shops',
    'Access road to Al Hada and Shafa highlands',
    'Private villa and chalet compounds',
];

export default function AlHawiyaPage() {
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
                            <li className="text-gray-900 font-medium">Al Hawiya</li>
                        </ol>
                    </div>
                </nav>

                <section className="bg-gradient-to-br from-amber-900 via-slate-800 to-gray-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <Mountain className="w-4 h-4 text-amber-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Al Hawiya · Mountain Residential · Taif</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Al Hawiya Taxi<br />
                                <span className="text-amber-300">Mountain District Transfers</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Pre-booked taxi from Al Hawiya — Makkah transfers, Jeddah Airport connections, and city runs to Taif center. All addresses and compounds served. Fixed rate, 24/7 via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Hawiya%20Taif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Al Hawiya Transfer
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
                                { label: 'Al Hawiya to Makkah', value: '1.5–2 hrs' },
                                { label: 'Al Hawiya to Taif', value: '30–35 min' },
                                { label: 'Al Hawiya to Jeddah Airport', value: '2–2.5 hrs' },
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Al Hawiya</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {alHawiyaRoutes.map((route, i) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Hawiya Areas We Serve</h2>
                                <ul className="space-y-4">
                                    {alHawiyaLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Hawiya%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                        <WhatsAppIcon className="w-5 h-5" />Book Al Hawiya Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Al Hawiya Taxi — FAQs</h2>
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

                <section className="py-16 bg-amber-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Al Hawiya Transfer</h2>
                        <p className="text-amber-100 text-lg mb-8">Share your address, destination, and time. Confirmed in 2 minutes via WhatsApp.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al%20Hawiya%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-800 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg">
                            <WhatsAppIcon className="w-6 h-6" />WhatsApp — Book Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
