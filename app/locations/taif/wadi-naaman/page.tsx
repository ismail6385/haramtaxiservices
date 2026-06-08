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
        canonical: 'https://haramtaxiservice.com/locations/taif/wadi-naaman',
    },
    title: 'Wadi Naaman Taxi Taif | Rose Farm Tours, Honey Market & Perfume Factory Visits',
    description: 'Taxi to Wadi Naaman, Taif — Damask rose farm tours, honey markets, and traditional perfume distilleries. Best in March–April rose season. Fixed rate, 24/7 WhatsApp.',
    keywords: ['Wadi Naaman taxi', 'Taif rose farm taxi', 'Taif rose festival taxi', 'Wadi Naaman tour', 'Taif honey market taxi', 'Taif perfume factory tour', 'Damask rose farm Taif'],
    openGraph: {
        title: 'Wadi Naaman Taxi | Rose Farm Tours & Honey Market, Taif',
        description: 'Taxi to Wadi Naaman rose farms, honey markets, and perfume factories in Taif. Best March–April. Fixed rate via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/wadi-naaman',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Wadi Naaman, Taif",
    "@id": "https://haramtaxiservice.com/locations/taif/wadi-naaman",
    "url": "https://haramtaxiservice.com/locations/taif/wadi-naaman",
    "telephone": "+966575806733",
    "description": "Professional taxi and rose farm tour service in Wadi Naaman, Taif. Damask rose farms, traditional perfume distilleries, honey markets, and agricultural areas.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wadi Naaman",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "addressCountry": "SA"
    },
    "areaServed": "Wadi Naaman, Taif",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "Wadi Naaman", "item": "https://haramtaxiservice.com/locations/taif/wadi-naaman" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "When is the best time to visit the Taif rose farms in Wadi Naaman?",
            "acceptedAnswer": { "@type": "Answer", "text": "The Taif Damask rose season runs from late February through April, peaking in March. This is when rose farms in Wadi Naaman are in full bloom and when the traditional rose water (attar) distilleries are actively producing. Outside this period, you can still visit farms and buy rose products, but the bloom season provides the most dramatic experience." }
        },
        {
            "@type": "Question",
            "name": "How far is Wadi Naaman from Taif City Center?",
            "acceptedAnswer": { "@type": "Answer", "text": "Wadi Naaman is approximately 30km from Taif city center, taking 35–40 minutes by road. It is located in the agricultural valley south of Taif where the majority of the city's famous rose farms are concentrated." }
        },
        {
            "@type": "Question",
            "name": "Can I book a full-day rose farm tour from my hotel in Taif?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer full-day and half-day rose farm tour packages from any Taif hotel. A typical tour includes: 2–3 rose farm visits, a traditional distillery demonstration, the honey market, and optional pomegranate and grape farm stops. WhatsApp us with your hotel name and date for a custom itinerary." }
        },
        {
            "@type": "Question",
            "name": "Can I buy rose water and honey directly at the farms?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Wadi Naaman farms sell rose water, rose oil (attar), honey, and dried roses directly. Prices are lower than city shops and the quality is fresher. Our drivers know which farms offer the best products and prices." }
        },
        {
            "@type": "Question",
            "name": "Is the Taif Rose Festival available for taxi tours?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. During the Taif Rose Festival (typically March–April), we offer festival transport packages from Taif city hotels and mountain resorts. The festival draws thousands of visitors — pre-booking your transport is essential to avoid being stranded." }
        },
        {
            "@type": "Question",
            "name": "Can I book a taxi from Makkah to visit the Taif rose farms?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many Umrah pilgrims book a day trip from Makkah to Taif's rose farms during the season. The journey from Makkah to Wadi Naaman takes approximately 2 hours. We offer round-trip packages from Makkah hotels including time at the farms and return to Makkah in the evening." }
        }
    ]
};

const wadiNaamanRoutes = [
    { to: 'Taif City Center', duration: '35–40 min', note: 'Via main Taif road' },
    { to: 'Taif Airport (TIF)', duration: '45 min', note: 'Regional airport' },
    { to: 'Makkah', duration: '2–2.5 hrs', note: 'Via Route 15 south' },
    { to: 'Al Hada Mountain', duration: '50 min', note: 'Cable car & resort' },
    { to: 'Jeddah Airport', duration: '3 hrs', note: 'Via Makkah bypass' },
    { to: 'Al Baha', duration: '2.5 hrs', note: 'Southern mountain route' },
];

const wadiNaamanLandmarks = [
    'Taif Damask Rose Farms — world-famous blooms (March–April)',
    'Traditional rose water distilleries (attar & perfume)',
    'Taif Honey Market — mountain sidr and wildflower honey',
    'Pomegranate orchards and grape vineyards',
    'Wadi Naaman valley views and agricultural terraces',
    'Dried rose and perfume product shops',
];

export default function WadiNaamanPage() {
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
                            <li className="text-gray-900 font-medium">Wadi Naaman</li>
                        </ol>
                    </div>
                </nav>

                <section className="bg-gradient-to-br from-pink-900 via-rose-800 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <MapPin className="w-4 h-4 text-pink-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Wadi Naaman · Rose Farms · Honey · Taif</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Wadi Naaman Taxi<br />
                                <span className="text-pink-300">Rose Farm Tours & Honey Market</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Taxi to Taif&apos;s world-famous Damask rose farms, traditional perfume distilleries, and honey markets in Wadi Naaman. Best March–April during the rose season. Fixed rate, all-day driver option, 24/7 via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Naaman%20rose%20farms%20in%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                    <WhatsAppIcon className="w-5 h-5" />Book Rose Farm Tour
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
                                { label: 'Wadi Naaman to Taif City', value: '35–40 min' },
                                { label: 'Best Rose Season', value: 'March–April' },
                                { label: 'Wadi Naaman to Makkah', value: '2–2.5 hrs' },
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Wadi Naaman</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {wadiNaamanRoutes.map((route, i) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wadi Naaman Attractions</h2>
                                <ul className="space-y-4">
                                    {wadiNaamanLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20rose%20farm%20tour%20in%20Taif" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105">
                                        <WhatsAppIcon className="w-5 h-5" />Book Rose Farm Tour
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-rose-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What You&apos;ll Find at the Rose Farms</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Taif produces 70% of the world&apos;s Damask rose oil. Our drivers take you to authentic farms, not tourist shops.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                            {['Fresh Damask Rose Harvest', 'Traditional Attar Distillation', 'Taif Sidr Honey Tasting', 'Pomegranate Orchards', 'Rose Water & Perfume', 'Local Honey Market'].map((h, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-rose-200 text-sm font-medium text-gray-700">
                                    <Star className="w-4 h-4 text-rose-500 mx-auto mb-2" />{h}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Wadi Naaman Rose Farm — FAQs</h2>
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

                <section className="py-16 bg-rose-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Taif Rose Farm Tour</h2>
                        <p className="text-rose-100 text-lg mb-8">Best March–April for the rose season. Tell us your hotel, date, and group size. Confirmed in 2 minutes via WhatsApp.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20rose%20farm%20tour%20in%20Taif%20from%20my%20hotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-rose-700 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg">
                            <WhatsAppIcon className="w-6 h-6" />WhatsApp — Book Rose Farm Tour
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
