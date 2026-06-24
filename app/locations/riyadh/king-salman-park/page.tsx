import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Trees, CheckCircle2, Star } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh/king-salman-park',
    },
    title: 'King Salman Park Taxi Riyadh | Transfer to World\'s Largest Urban Park',
    description: "Taxi to King Salman Park Riyadh — the world's largest urban park. Fixed rate transfers from KKIA, KAFD, Olaya, and all Riyadh hotels. Return trips and hourly chauffeur available.",
    keywords: ["King Salman Park taxi", "taxi to King Salman Park Riyadh", "King Salman Park transfer", "Riyadh park taxi", "Vision 2030 park Riyadh taxi"],
    openGraph: {
        title: "King Salman Park Taxi Riyadh | World's Largest Urban Park",
        description: "Pre-booked taxi to King Salman Park. Fixed rate, return trips, hourly chauffeur. Book via WhatsApp.",
        url: 'https://haramtaxiservice.com/locations/riyadh/king-salman-park',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi — King Salman Park Riyadh",
    "@id": "https://haramtaxiservice.com/locations/riyadh/king-salman-park",
    "url": "https://haramtaxiservice.com/locations/riyadh/king-salman-park",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "description": "Taxi and transfer service to King Salman Park, the world's largest urban park in Riyadh. Fixed-rate transfers from hotels, KAFD, KKIA airport, and all Riyadh areas.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "King Salman Park, North Riyadh",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
    },
    "areaServed": "King Salman Park, Riyadh"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get to King Salman Park in Riyadh?",
            "acceptedAnswer": { "@type": "Answer", "text": "King Salman Park is in northern Riyadh. Book a private taxi via WhatsApp with your pickup address — from KAFD approximately 20–25 minutes, from Olaya approximately 25–30 minutes, from KKIA Airport approximately 35–45 minutes." }
        },
        {
            "@type": "Question",
            "name": "Is there parking at King Salman Park?",
            "acceptedAnswer": { "@type": "Answer", "text": "King Salman Park has parking facilities but they fill quickly during weekends and events. Arriving by private taxi avoids parking entirely — drop at the entrance, return taxi confirmed at your exit time." }
        },
        {
            "@type": "Question",
            "name": "How big is King Salman Park?",
            "acceptedAnswer": { "@type": "Answer", "text": "King Salman Park covers approximately 13.4 km² — making it the world's largest urban park, larger than New York's Central Park (3.4 km²) and London's Hyde Park (2.5 km²). It includes gardens, cultural facilities, a performing arts centre, and the Royal Arts Complex." }
        },
        {
            "@type": "Question",
            "name": "What is there to do at King Salman Park?",
            "acceptedAnswer": { "@type": "Answer", "text": "King Salman Park features gardens, walking paths, cycling tracks, outdoor performance spaces, the Royal Arts Complex (museums, theatres, galleries), restaurants, and family recreation areas. Event programming runs throughout the year." }
        },
        {
            "@type": "Question",
            "name": "Can I combine King Salman Park with other Riyadh attractions in one day?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A popular circuit combines King Salman Park in the morning, Diriyah (20 minutes away) in the afternoon, and Olaya/Tahlia Street for dinner. Our hourly chauffeur service covers multi-stop days at a fixed day rate." }
        }
    ]
};

export default function KingSalmanParkPage() {
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
                            <li className="text-gray-900 font-medium">King Salman Park</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-green-950 via-emerald-900 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/40 mb-6">
                                <Trees className="w-4 h-4 text-green-300" />
                                <span className="text-green-200 text-xs font-bold tracking-widest uppercase">World&apos;s Largest Urban Park · Vision 2030</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                King Salman Park<br />
                                <span className="text-green-400">Taxi Riyadh</span>
                            </h1>
                            <p className="text-xl text-emerald-200 mb-8 leading-relaxed">
                                The world&apos;s largest urban park — 13.4 km² of gardens, culture, and recreation in northern Riyadh. Fixed-rate transfers from anywhere in the city.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20King%20Salman%20Park%20Riyadh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Park Transfer
                                </a>
                                <Link
                                    href="/locations/riyadh"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-emerald-600 text-emerald-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    All Riyadh Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-green-50 border-b border-green-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'Park Size', value: '13.4 km²' },
                                { label: 'From KAFD', value: '20–25 min' },
                                { label: 'From Olaya', value: '25–30 min' },
                                { label: 'From KKIA', value: '35–45 min' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-green-900">{s.value}</div>
                                    <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About the park */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">About King Salman Park</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    King Salman Park is one of Saudi Arabia&apos;s flagship Vision 2030 projects — a 13.4 km² urban park in northern Riyadh that surpasses every urban park in the world by area. It transforms a former Royal Saudi Air Force base into Riyadh&apos;s green lung.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Royal Arts Complex — museums, theatres, and galleries',
                                        'Outdoor performance spaces and amphitheatres',
                                        'Cycling and walking tracks across the full park',
                                        'Family recreation areas and children\'s zones',
                                        'Restaurants and cafes throughout',
                                        'Botanical gardens and native Saudi flora',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Combine With Other Riyadh Sites</h2>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Diriyah UNESCO Site', time: '20 min away', href: '/locations/riyadh/diriyah' },
                                        { name: 'KAFD', time: '20–25 min away', href: '/locations/riyadh/kafd' },
                                        { name: 'Olaya / Kingdom Tower', time: '25–30 min away', href: '/locations/riyadh/olaya' },
                                        { name: 'Boulevard City', time: '15–20 min away', href: '/locations/riyadh/boulevard-city' },
                                    ].map((site, i) => (
                                        <Link key={i} href={site.href} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 transition-all group">
                                            <div className="flex items-center gap-3">
                                                <Star className="w-4 h-4 text-green-500" />
                                                <span className="font-medium text-gray-900 group-hover:text-green-700">{site.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {site.time}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <Link
                                        href="/services/riyadh-hourly-chauffeur"
                                        className="block text-center py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
                                    >
                                        Book Hourly Chauffeur for Full-Day Riyadh Tour
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">King Salman Park Taxi — FAQs</h2>
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

                {/* CTA */}
                <section className="py-16 bg-green-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Trees className="w-12 h-12 text-white mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your King Salman Park Transfer</h2>
                        <p className="text-green-100 text-lg mb-8">One-way, return, or full-day Riyadh tour — fixed rate, confirmed in 2 minutes.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20King%20Salman%20Park%20Riyadh"
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
