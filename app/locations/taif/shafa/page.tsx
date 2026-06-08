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
        canonical: 'https://haramtaxiservice.com/locations/taif/shafa',
    },
    title: 'Shafa Taxi Taif | Al Shafa Mountain Resort Transfer & Tour Service',
    description: 'Taxi in Al Shafa, Taif — highland resort transfers, mountain viewpoint tours, hotel pickups, Makkah transfers (90 min). Expert mountain drivers, 24/7 WhatsApp booking.',
    keywords: ['Shafa taxi', 'Al Shafa Taif taxi', 'Shafa mountain taxi', 'Shafa resort transfer', 'Al Shafa to Makkah taxi', 'Shafa Taif tour', 'highland resort taxi Taif'],
    openGraph: {
        title: 'Shafa Taxi Taif | Highland Resort Transfer & Mountain Tours',
        description: 'Pre-booked taxi in Al Shafa, Taif. Resort pickups, mountain tours, Makkah transfers. Fixed rate, expert drivers via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/shafa',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Shafa, Taif",
    "@id": "https://haramtaxiservice.com/locations/taif/shafa",
    "url": "https://haramtaxiservice.com/locations/taif/shafa",
    "telephone": "+966575806733",
    "description": "Professional taxi and mountain tour service in Al Shafa, Taif's premier highland resort area. Hotel pickups, viewpoint tours, and intercity transfers.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Shafa",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "addressCountry": "SA"
    },
    "areaServed": "Shafa, Taif",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "Shafa", "item": "https://haramtaxiservice.com/locations/taif/shafa" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How far is Al Shafa from Taif City Center?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Shafa is approximately 35km from Taif city center and the drive takes 40–50 minutes via the mountain road. The elevation in Shafa is higher than Taif city, making it one of the coolest spots in the Hejaz range." }
        },
        {
            "@type": "Question",
            "name": "Can I get a taxi from Shafa to Jeddah Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Al Shafa to Jeddah Airport (KAIA) is approximately 200km and takes 2.5–3 hours via the mountain road through Taif city and onto Route 15. We recommend departing at least 4–5 hours before your flight to account for mountain traffic and prayer stops." }
        },
        {
            "@type": "Question",
            "name": "What is the best time to visit Shafa, Taif?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Shafa is most popular June–September when families escape the coastal heat. The rose season (March–April) is also excellent for combining mountain air with rose farm visits. Year-round, the temperature in Shafa is 10–15°C cooler than Jeddah." }
        },
        {
            "@type": "Question",
            "name": "Do you offer camping ground transfers in Shafa?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We transfer to and from all Shafa camping sites and recreational areas. Our drivers know the mountain access roads and can assist with equipment loading. Group vehicles (Toyota Hiace) are available for larger camping parties." }
        },
        {
            "@type": "Question",
            "name": "How do I book a Shafa to Makkah transfer for Umrah?",
            "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp us your pickup location in Shafa, your destination hotel in Makkah, and your preferred departure time. The journey from Shafa to Makkah takes approximately 90–100 minutes. We pass the Miqat at As-Sail Al-Kabir if you need to stop for Ihram." }
        },
        {
            "@type": "Question",
            "name": "What hotels do you serve in Al Shafa?",
            "acceptedAnswer": { "@type": "Answer", "text": "We serve all Shafa hotels, chalets, and resort complexes. Share your accommodation name on WhatsApp and we will confirm pickup availability and time. No roadside waiting required." }
        }
    ]
};

const shafaRoutes = [
    { to: 'Taif City Center', duration: '40–50 min', note: 'Via mountain road' },
    { to: 'Al Hada', duration: '20 min', note: 'Connecting highland areas' },
    { to: 'Makkah', duration: '90–100 min', note: 'Via As-Sail & Route 15' },
    { to: 'Jeddah Airport (KAIA)', duration: '2.5–3 hrs', note: 'Via Makkah bypass' },
    { to: 'Al Hawiya', duration: '25 min', note: 'Mountain residential area' },
    { to: 'Madinah', duration: '5.5 hrs', note: 'Intercity direct transfer' },
];

const shafaLandmarks = [
    'Shafa Palace & Royal Mountain Retreat area',
    'Al Shafa mountain viewpoints and overlooks',
    'Mountain camping grounds and picnic areas',
    'Shafa fruit markets — pomegranates and grapes',
    'Highland hiking trails and nature paths',
    'Traditional coffee shops and mountain cafes',
];

export default function ShafaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <nav className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <ol className="flex items-center gap-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li><Link href="/locations/taif" className="hover:text-gray-700">Taif</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li className="text-gray-900 font-medium">Shafa</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-sky-900 via-slate-800 to-gray-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <Mountain className="w-4 h-4 text-sky-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Al Shafa · Highland Resorts · Taif Mountains</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Shafa Taxi<br />
                                <span className="text-sky-300">Highland Resort Transfers</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Pre-booked taxi from Al Shafa mountain resorts, chalets, and hotels. Transfers to Makkah, Jeddah Airport, and Taif city center — plus full-day mountain tours. Fixed rate, confirmed via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Shafa%20Taif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Shafa Transfer
                                </a>
                                <Link
                                    href="/locations/taif"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <Car className="w-4 h-4" />
                                    All Taif Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="bg-gray-50 border-b border-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'Shafa to Makkah', value: '90–100 min' },
                                { label: 'Shafa to Taif City', value: '40–50 min' },
                                { label: 'Shafa to Jeddah Airport', value: '2.5–3 hrs' },
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

                {/* Routes + Landmarks */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Shafa</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {shafaRoutes.map((route, i) => (
                                            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                                <div>
                                                    <div className="font-semibold text-white">{route.to}</div>
                                                    <div className="text-sm text-slate-400">{route.note}</div>
                                                </div>
                                                <div className="flex items-center gap-1 text-green-400 text-sm font-bold whitespace-nowrap">
                                                    <Clock className="w-4 h-4" />
                                                    {route.duration}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Shafa Highlights We Cover</h2>
                                <ul className="space-y-4">
                                    {shafaLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Shafa%20Taif"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Book Shafa Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accommodation Note */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Shafa Accommodation Pickups</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We serve all Shafa hotels, chalets, private villas, and camping sites across the Al Shafa highlands.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                            {['Shafa Mountain Hotels', 'Private Chalets & Villas', 'Mountain Camping Sites', 'Shafa Resort Complexes', 'Highland Rest Houses', 'All Residential Areas'].map((h, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-700">
                                    <Star className="w-4 h-4 text-amber-500 mx-auto mb-2" />
                                    {h}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Shafa Taxi — Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="space-y-3">
                            {faqSchema.mainEntity.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-6">
                                    <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline">
                                        {faq.name}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                                        {faq.acceptedAnswer.text}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-16 bg-sky-800">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Shafa Transfer</h2>
                        <p className="text-sky-100 text-lg mb-8">Share your accommodation name, destination, and time. Confirmed in 2 minutes via WhatsApp.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Shafa%20Taif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-sky-800 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            WhatsApp — Book Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
