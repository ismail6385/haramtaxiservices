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
        canonical: 'https://haramtaxiservice.com/locations/riyadh/olaya',
    },
    title: 'Olaya Taxi Riyadh | Kingdom Tower, Bourjain & Central Riyadh Transfer Service',
    description: 'Taxi in Olaya Riyadh — Kingdom Tower, Bourjain Tower, King Fahd Road. KKIA airport transfers, KAFD runs, intercity. Fixed rate, named driver, 24/7 WhatsApp booking.',
    keywords: ['Olaya taxi Riyadh', 'taxi Olaya Street Riyadh', 'Kingdom Tower taxi', 'Bourjain taxi Riyadh', 'King Fahd Road taxi', 'taxi central Riyadh', 'Olaya chauffeur service'],
    openGraph: {
        title: 'Olaya Taxi Riyadh | Kingdom Tower & Central CBD Transfers',
        description: 'Pre-booked taxi in Olaya, Riyadh. Named driver, fixed rate. KKIA airport, KAFD, intercity. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh/olaya',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Olaya Riyadh",
    "@id": "https://haramtaxiservice.com/locations/riyadh/olaya",
    "url": "https://haramtaxiservice.com/locations/riyadh/olaya",
    "telephone": "+966575806733",
    "description": "Professional taxi and chauffeur service in Olaya, Riyadh's central business district. KKIA airport transfers, KAFD business runs, and intercity travel from Kingdom Tower and King Fahd Road area.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Olaya Street",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh Province",
        "addressCountry": "SA"
    },
    "areaServed": "Olaya, Riyadh",
    "priceRange": "$$"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi near Kingdom Tower in Olaya Riyadh?",
            "acceptedAnswer": { "@type": "Answer", "text": "Book via WhatsApp with your exact building or hotel name on Olaya Street. Your driver arrives at your entrance — no roadside flagging required on busy King Fahd Road. Most Olaya pickups are confirmed within 15–20 minutes." }
        },
        {
            "@type": "Question",
            "name": "How far is Olaya from KKIA Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "Olaya is approximately 28–30km from King Khalid International Airport (KKIA). The drive takes 30–40 minutes in normal traffic. Morning peak (7–9am) and evening peak (5–7pm) can add 10–20 minutes." }
        },
        {
            "@type": "Question",
            "name": "Can I get a taxi from Olaya to KAFD?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Olaya to KAFD is approximately 15–20 minutes. Many executives use our service for daily KAFD–Olaya runs — pre-booked with a named driver guarantees on-time pickup during busy Riyadh mornings." }
        },
        {
            "@type": "Question",
            "name": "What hotels in Olaya do you serve?",
            "acceptedAnswer": { "@type": "Answer", "text": "We serve all major Olaya hotels including Four Seasons Riyadh at Kingdom Centre, Rosewood Riyadh, Hilton Riyadh Hotel & Residences, JW Marriott, and all serviced apartments on Olaya Street and Tahlia Street." }
        },
        {
            "@type": "Question",
            "name": "Can I get a Riyadh to Jeddah private taxi from Olaya?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We pick up from your Olaya hotel or office and provide direct door-to-door transfer to Jeddah (950km, 9–10 hours), Madinah (8–9 hours), or any destination in Saudi Arabia." }
        },
        {
            "@type": "Question",
            "name": "What is the best taxi app in Olaya Riyadh?",
            "acceptedAnswer": { "@type": "Answer", "text": "Uber and Careem both operate in Olaya. For airport transfers with flight tracking, intercity routes, and confirmed named drivers for hotel pickups, a pre-booked private taxi via WhatsApp provides more reliability than app-based hailing in a busy area like Olaya." }
        }
    ]
};

const olayaRoutes = [
    { to: 'KKIA Airport', duration: '30–40 min', note: 'All 5 terminals' },
    { to: 'KAFD', duration: '15–20 min', note: 'King Abdullah Financial District' },
    { to: 'Diplomatic Quarter', duration: '15–20 min', note: 'Embassy area' },
    { to: 'Diriyah', duration: '25–35 min', note: 'UNESCO heritage site' },
    { to: 'Jeddah', duration: '9–10 hrs', note: '950km intercity' },
    { to: 'Madinah', duration: '8–9 hrs', note: '840km Umrah transfer' },
];

const olayaLandmarks = [
    'Kingdom Tower (Burj Al-Mamlaka) — iconic tower, Four Seasons hotel',
    'Bourjain Tower — luxury residences and offices',
    'Al Faisaliah Tower — globe restaurant, offices',
    'Centria Mall — Olaya Street retail',
    'Tahlia Street restaurants and cafes',
    'King Fahd Road — main commercial artery',
];

export default function OlayaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <nav className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <ol className="flex items-center gap-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li><Link href="/locations/riyadh" className="hover:text-gray-700">Riyadh</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li className="text-gray-900 font-medium">Olaya</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <MapPin className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Olaya · King Fahd Road · Central Riyadh</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Olaya Taxi<br />
                                <span className="text-gray-300">Riyadh CBD</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Pre-booked taxi from Kingdom Tower, Bourjain, and all Olaya hotels. KKIA airport, KAFD, Diplomatic Quarter, and intercity — fixed rate, confirmed via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Olaya%20Riyadh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Olaya Transfer
                                </a>
                                <Link
                                    href="/locations/riyadh"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <Car className="w-4 h-4" />
                                    All Riyadh Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick stats */}
                <section className="bg-gray-50 border-b border-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'Olaya to KKIA', value: '30–40 min' },
                                { label: 'Olaya to KAFD', value: '15–20 min' },
                                { label: 'Olaya to DQ', value: '15–20 min' },
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Olaya</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {olayaRoutes.map((route, i) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Olaya Landmarks We Serve</h2>
                                <ul className="space-y-4">
                                    {olayaLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20pickup%20in%20Olaya%20Riyadh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Book Olaya Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hotels note */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Olaya Hotel Pickups</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We pick up from all major hotels on Olaya and Tahlia Streets — no need to walk to a kerb or wait for a rideshare app.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                            {['Four Seasons at Kingdom Centre', 'Rosewood Riyadh', 'Hilton Riyadh Hotel', 'JW Marriott Riyadh', 'Al Faisaliah Hotel', 'InterContinental Riyadh'].map((h, i) => (
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Olaya Taxi — Frequently Asked Questions</h2>
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
                <section className="py-16 bg-green-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Olaya Transfer</h2>
                        <p className="text-green-100 text-lg mb-8">Share your hotel or building name, destination, and time. Confirmed in 2 minutes via WhatsApp.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Olaya%20Riyadh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-700 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg"
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
