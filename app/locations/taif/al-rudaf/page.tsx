import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Star, CheckCircle2, Car } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/taif/al-rudaf',
    },
    title: 'Al Rudaf Taxi Taif | Park Transfers, City Rides & Family Outings',
    description: 'Taxi in Al Rudaf, Taif — Al Rudaf Park, Taif Zoo, family recreational area transfers. Fixed rate, 24/7 service, WhatsApp booking.',
    keywords: ['Al Rudaf taxi', 'Al Rudaf Park taxi Taif', 'Taif zoo taxi', 'Al Rudaf Taif transfer', 'family taxi Taif', 'Taif recreation area taxi'],
    openGraph: {
        title: 'Al Rudaf Taxi Taif | Park & Recreation Transfers',
        description: 'Taxi to Al Rudaf Park, Taif Zoo, and all recreational areas. Fixed rate, family vehicles, 24/7 WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/al-rudaf',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi — Al Rudaf, Taif",
    "@id": "https://haramtaxiservice.com/locations/taif/al-rudaf",
    "url": "https://haramtaxiservice.com/locations/taif/al-rudaf",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "description": "Professional taxi service in Al Rudaf, Taif. Park visits, zoo trips, family outings and city transfers.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Rudaf",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "addressCountry": "SA"
    },
    "areaServed": "Al Rudaf, Taif",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "Al Rudaf", "item": "https://haramtaxiservice.com/locations/taif/al-rudaf" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi to Al Rudaf Park in Taif?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Rudaf Park is approximately 5–10 minutes from central Taif. Book via WhatsApp with your hotel or address and we will pick you up and drop off at the park entrance. Return trips can be pre-arranged at the same time." }
        },
        {
            "@type": "Question",
            "name": "Is there a taxi to Taif Zoo from the city hotels?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Taif Zoo is located near the Al Rudaf area, approximately 15–20 minutes from Taif city center hotels. We offer family taxis with child-friendly vehicles for zoo visits and can arrange a return at your preferred time." }
        },
        {
            "@type": "Question",
            "name": "Do you offer family taxi service for day trips in Taif?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have family-sized vehicles including GMC Yukon XL (7 passengers) and Toyota Staria. For full-day family outings covering Al Rudaf Park, the zoo, and Taif city center, we offer a fixed day-rate driver." }
        },
        {
            "@type": "Question",
            "name": "How far is Al Rudaf from Taif Airport (TIF)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Rudaf is approximately 10–15 minutes from Taif Regional Airport. We offer airport pickup and transfer to the Al Rudaf area for families and tourists arriving in Taif." }
        },
        {
            "@type": "Question",
            "name": "Can I book a taxi from Al Rudaf to the mountain resorts?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. From Al Rudaf, it is 35–40 minutes to Al Hada and 50 minutes to Shafa mountain resorts. We serve all routes from Al Rudaf to the Taif highlands and intercity connections to Makkah and Jeddah." }
        }
    ]
};

const alRudafRoutes = [
    { to: 'Taif City Center', duration: '10–15 min', note: 'Downtown Taif' },
    { to: 'Taif Airport (TIF)', duration: '15–20 min', note: 'Regional airport' },
    { to: 'Al Hada Mountain', duration: '35–40 min', note: 'Cable car & resort' },
    { to: 'Shafa Highlands', duration: '50–55 min', note: 'Mountain resort area' },
    { to: 'Makkah', duration: '1.5–2 hrs', note: 'Via Al Hada route' },
    { to: 'Wadi Naaman', duration: '35 min', note: 'Rose farms' },
];

const alRudafLandmarks = [
    'Al Rudaf Park — Taif\'s largest public park',
    'Taif Zoo — popular family attraction',
    'Al Rudaf sports facilities and playgrounds',
    'Walking tracks and picnic areas',
    'Access to Taif city center shopping',
    'Residential districts and family compounds',
];

export default function AlRudafPage() {
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
                            <li className="text-gray-900 font-medium">Al Rudaf</li>
                        </ol>
                    </div>
                </nav>

                <section className="bg-gradient-to-br from-emerald-900 via-slate-800 to-gray-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <MapPin className="w-4 h-4 text-emerald-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Al Rudaf · Parks & Recreation · Taif</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Al Rudaf Taxi<br />
                                <span className="text-emerald-300">Park & Family Transfers</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Taxi to Al Rudaf Park, Taif Zoo, and all recreational areas. Family vehicles, fixed rate. Airport pickups and city transfers — all confirmed via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al%20Rudaf%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                    <WhatsAppIcon className="w-5 h-5" />Book Al Rudaf Transfer
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
                                { label: 'Al Rudaf to City Center', value: '10–15 min' },
                                { label: 'Al Rudaf to Airport', value: '15–20 min' },
                                { label: 'Al Rudaf to Al Hada', value: '35–40 min' },
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Al Rudaf</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {alRudafRoutes.map((route, i) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Rudaf Attractions We Serve</h2>
                                <ul className="space-y-4">
                                    {alRudafLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al%20Rudaf%20Park%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                        <WhatsAppIcon className="w-5 h-5" />Book Al Rudaf Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Al Rudaf Taxi — FAQs</h2>
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

                <section className="py-16 bg-emerald-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Al Rudaf Transfer</h2>
                        <p className="text-emerald-100 text-lg mb-8">Share your pickup address and destination. Confirmed in 2 minutes via WhatsApp.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al%20Rudaf%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-800 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg">
                            <WhatsAppIcon className="w-6 h-6" />WhatsApp — Book Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
