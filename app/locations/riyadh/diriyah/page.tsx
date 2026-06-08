import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Landmark, Star, CheckCircle2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh/diriyah',
    },
    title: 'Diriyah Taxi | Riyadh to Diriyah Transfer — UNESCO Heritage & Vision 2030 District',
    description: 'Book a taxi from Riyadh to Diriyah. At-Turaif UNESCO World Heritage Site, Bujairi Terrace, and Diriyah Gate. Fixed rate, return trips, day tours — WhatsApp booking.',
    keywords: ['Diriyah taxi', 'Riyadh to Diriyah taxi', 'taxi to At-Turaif', 'Diriyah Gate taxi', 'Diriyah day trip from Riyadh', 'Bujairi Terrace taxi', 'taxi Diriyah Riyadh'],
    openGraph: {
        title: 'Riyadh to Diriyah Taxi | At-Turaif UNESCO & Diriyah Gate',
        description: 'Fixed-rate taxi from Riyadh hotels and KKIA to Diriyah. Return trips and full-day tours available. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh/diriyah',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Diriyah Riyadh",
    "@id": "https://haramtaxiservice.com/locations/riyadh/diriyah",
    "url": "https://haramtaxiservice.com/locations/riyadh/diriyah",
    "telephone": "+966575806733",
    "description": "Taxi and private transfer service to Diriyah UNESCO Heritage Site and Diriyah Gate district from Riyadh hotels, KAFD, KKIA, and all Riyadh areas.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Diriyah",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
    },
    "areaServed": "Diriyah, Riyadh",
    "priceRange": "$$"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How far is Diriyah from Riyadh city centre?",
            "acceptedAnswer": { "@type": "Answer", "text": "Diriyah is approximately 20–25km northwest of central Riyadh (Olaya/Kingdom Tower). The drive takes 25–35 minutes depending on traffic. From KAFD, allow 25–30 minutes." }
        },
        {
            "@type": "Question",
            "name": "Can I get a return taxi from Riyadh to Diriyah and back?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer return trips — your driver can wait at Diriyah while you explore (charged per waiting hour) or return to collect you at a set time. Both options are available. Mention your preferred arrangement when booking." }
        },
        {
            "@type": "Question",
            "name": "Is there parking at Diriyah Gate?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Diriyah Gate has dedicated visitor parking. However, during Riyadh Season and peak weekends, parking fills quickly. Arriving by private taxi avoids the parking hassle entirely — your driver drops you at the entrance." }
        },
        {
            "@type": "Question",
            "name": "Can I book a Riyadh to Diriyah day trip with multiple stops?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A popular full-day itinerary covers Diriyah (At-Turaif ruins, Bujairi Terrace), then King Salman Park, then Wadi Hanifa walk. We quote a fixed day-rate for your driver — no meter running. Message us on WhatsApp to plan your route." }
        },
        {
            "@type": "Question",
            "name": "How do I get from KKIA Airport to Diriyah?",
            "acceptedAnswer": { "@type": "Answer", "text": "KKIA to Diriyah is approximately 35–40km and takes 40–50 minutes. Book a private transfer via WhatsApp — your driver meets you at arrivals and delivers you directly to Diriyah Gate or your hotel near the site." }
        },
        {
            "@type": "Question",
            "name": "What is there to see at Diriyah?",
            "acceptedAnswer": { "@type": "Answer", "text": "At-Turaif (the original Saudi capital, UNESCO World Heritage) is the main attraction — mud-brick palace ruins from the 18th century. Bujairi Terrace has restaurants and cafes. Wadi Hanifa is a walking/cycling path along the valley. Diriyah Gate has a heritage museum and Riyadh Season events." }
        }
    ]
};

const attractions = [
    { name: 'At-Turaif UNESCO Site', desc: 'Original Saudi capital, 18th-century mud-brick palaces — World Heritage since 2010' },
    { name: 'Bujairi Terrace', desc: 'Rooftop restaurants and cafes overlooking the Wadi Hanifa — best sunset views in Riyadh' },
    { name: 'Wadi Hanifa', desc: 'Valley walkway along the historic wadi — cycling and walking trails' },
    { name: 'Diriyah Gate', desc: 'Heritage museum, cultural events, Riyadh Season venue' },
    { name: 'Salwa Palace', desc: 'Restored royal palace from the first Saudi state — guided tours available' },
];

export default function DiriyahPage() {
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
                            <li className="text-gray-900 font-medium">Diriyah</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 mb-6">
                                <Landmark className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">UNESCO World Heritage · Vision 2030</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Riyadh to Diriyah<br />
                                <span className="text-amber-400">Private Taxi</span>
                            </h1>
                            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                                At-Turaif ruins, Bujairi Terrace, and Wadi Hanifa — the birthplace of Saudi Arabia. Fixed-rate transfers and day tours from anywhere in Riyadh.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Riyadh%20to%20Diriyah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Diriyah Transfer
                                </a>
                                <Link
                                    href="/locations/riyadh"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-stone-500 text-stone-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    All Riyadh Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick stats */}
                <section className="bg-amber-50 border-b border-amber-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'From Olaya / CBD', value: '25–35 min' },
                                { label: 'From KAFD', value: '25–30 min' },
                                { label: 'From KKIA Airport', value: '40–50 min' },
                                { label: 'UNESCO Status', value: '2010' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-stone-800">{s.value}</div>
                                    <div className="text-sm text-stone-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What to see */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">What to See in Diriyah</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">The birthplace of the Saudi state — now a UNESCO World Heritage Site and one of Saudi Arabia&apos;s fastest-growing tourism destinations</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {attractions.map((a, i) => (
                                <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{a.name}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trip options */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Transfer & Day Trip Options</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'One-Way Transfer',
                                    desc: 'From your Riyadh hotel, KAFD, or KKIA airport directly to Diriyah Gate. Driver drops at the entrance.',
                                    time: '25–50 min from Riyadh',
                                },
                                {
                                    title: 'Return Trip',
                                    desc: 'Driver drops you at Diriyah and returns to collect at your specified time. Ideal for 2–4 hour visits.',
                                    time: 'Set your return time',
                                },
                                {
                                    title: 'Full-Day Riyadh Tour',
                                    desc: 'Diriyah + King Salman Park + Wadi Hanifa + Kingdom Tower. Fixed day-rate, single driver all day.',
                                    time: '6–8 hours',
                                },
                            ].map((opt, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                                    <Star className="w-8 h-8 text-amber-500 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{opt.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{opt.desc}</p>
                                    <div className="flex items-center gap-2 text-sm text-amber-700 font-semibold">
                                        <Clock className="w-4 h-4" />
                                        {opt.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <a
                                href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Riyadh%20to%20Diriyah%20day%20trip%20taxi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-black text-lg rounded-xl transition-all hover:scale-105"
                            >
                                <WhatsAppIcon className="w-6 h-6" />
                                Plan My Diriyah Visit
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Diriyah Taxi — Frequently Asked Questions</h2>
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
                <section className="py-16 bg-amber-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Landmark className="w-12 h-12 text-white mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Diriyah Transfer</h2>
                        <p className="text-amber-100 text-lg mb-8">One-way, return, or full-day tour — fixed rate, confirmed via WhatsApp in 2 minutes.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Diriyah%20from%20Riyadh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-700 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg"
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
