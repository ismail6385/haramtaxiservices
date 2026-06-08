import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Shield, Star, Building2, CheckCircle2 } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh/diplomatic-quarter',
    },
    title: 'Diplomatic Quarter Taxi Riyadh | DQ Embassy Transfers & Expat Chauffeur Service',
    description: 'Reliable taxi in Riyadh Diplomatic Quarter (DQ). Embassy transfers, KKIA airport runs, expat family transfers, and corporate chauffeur. Fixed rate, named driver, 24/7.',
    keywords: ['Diplomatic Quarter taxi Riyadh', 'DQ taxi Riyadh', 'taxi Diplomatic Quarter', 'embassy transfer Riyadh', 'expat taxi Riyadh DQ', 'Riyadh diplomatic area taxi', 'chauffeur Diplomatic Quarter Riyadh'],
    openGraph: {
        title: 'Diplomatic Quarter Taxi Riyadh | Embassy & Expat Transfers',
        description: 'Named driver, fixed rate taxi in Riyadh DQ. KKIA airport, KAFD, and intercity transfers. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh/diplomatic-quarter',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi — Diplomatic Quarter Riyadh",
    "@id": "https://haramtaxiservice.com/locations/riyadh/diplomatic-quarter",
    "url": "https://haramtaxiservice.com/locations/riyadh/diplomatic-quarter",
    "telephone": "+966575806733",
    "description": "Professional taxi and chauffeur service in Riyadh's Diplomatic Quarter. Serving embassy staff, expat families, NGO workers, and corporate clients with fixed-rate, pre-booked transfers.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Diplomatic Quarter (DQ)",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
    },
    "areaServed": "Diplomatic Quarter, Riyadh",
    "priceRange": "$$"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I book a taxi in the Diplomatic Quarter Riyadh?",
            "acceptedAnswer": { "@type": "Answer", "text": "Book via WhatsApp with your DQ address (compound name or street) and destination. Your driver is confirmed with a name and vehicle plate before pickup — no hailing required in the DQ residential streets." }
        },
        {
            "@type": "Question",
            "name": "How far is the Diplomatic Quarter from KKIA Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "The Diplomatic Quarter is approximately 25km from King Khalid International Airport (KKIA). The drive takes 25–35 minutes under normal conditions. We track your flight and meet you at arrivals." }
        },
        {
            "@type": "Question",
            "name": "Can I get a regular weekly taxi from DQ to KAFD?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many of our DQ clients use us for regular Monday–Friday KAFD commutes. We can schedule a recurring booking — same driver where possible, confirmed 24 hours in advance each day." }
        },
        {
            "@type": "Question",
            "name": "Do you serve expat families in the Diplomatic Quarter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We regularly serve expat families in the DQ for school runs (French School, Lycée, international schools), shopping trips to Riyadh Park and Granada Mall, and KKIA airport transfers for home visits." }
        },
        {
            "@type": "Question",
            "name": "Is Uber available in the Diplomatic Quarter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Uber operates in Riyadh including the DQ area. However, DQ's gated compounds and residential street layout make pickup coordination unreliable. Pre-booked private taxi with your exact compound name ensures no confusion." }
        },
        {
            "@type": "Question",
            "name": "Can I get a Riyadh to Jeddah taxi from the Diplomatic Quarter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We pick up directly from your DQ compound and provide door-to-door transfer to Jeddah (950km, 9–10 hours), Madinah (840km, 8–9 hours), or any intercity destination in Saudi Arabia." }
        }
    ]
};

const dqRoutes = [
    { to: 'KKIA Airport', duration: '25–35 min', note: 'All terminals, flight tracked' },
    { to: 'KAFD', duration: '20–25 min', note: 'Business district' },
    { to: 'Olaya / Kingdom Tower', duration: '15–20 min', note: 'Central CBD' },
    { to: 'Riyadh Park Mall', duration: '20–25 min', note: 'Shopping & leisure' },
    { to: 'King Faisal Specialist Hospital', duration: '10–15 min', note: 'Medical' },
    { to: 'Diriyah', duration: '20–25 min', note: 'UNESCO heritage site' },
];

export default function DiplomaticQuarterPage() {
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
                            <li className="text-gray-900 font-medium">Diplomatic Quarter</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 mb-6">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">Diplomatic Quarter — DQ Riyadh</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Diplomatic Quarter<br />
                                <span className="text-blue-400">Taxi & Chauffeur</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Embassy transfers, expat family runs, KKIA airport pickups, and KAFD business commutes — pre-booked, named driver, fixed rate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20the%20Diplomatic%20Quarter%20Riyadh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book DQ Transfer
                                </a>
                                <Link
                                    href="/locations/riyadh"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    All Riyadh Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick stats */}
                <section className="bg-blue-50 border-b border-blue-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'DQ to KKIA', value: '25–35 min' },
                                { label: 'DQ to KAFD', value: '20–25 min' },
                                { label: 'DQ to Olaya', value: '15–20 min' },
                                { label: 'Service Hours', value: '24/7' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-slate-800">{s.value}</div>
                                    <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services for DQ */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Serve in the DQ</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    The Diplomatic Quarter is Riyadh&apos;s most international district — home to over 50 embassies, NGO offices, and expat residential compounds. Our service is trusted by diplomatic staff, international business executives, and families requiring a reliable, professional driver who understands the DQ layout.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Embassy staff — visa appointment days, airport runs',
                                        'Expat families — school runs, shopping, medical',
                                        'NGO/INGO workers — regular KAFD and city transfers',
                                        'Corporate executives — Ministry meetings and airport',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Common DQ Transfer Routes</h3>
                                <div className="space-y-4">
                                    {dqRoutes.map((route, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                            <div>
                                                <div className="font-semibold text-white">{route.to}</div>
                                                <div className="text-sm text-slate-400">{route.note}</div>
                                            </div>
                                            <div className="flex items-center gap-1 text-blue-400 text-sm font-bold whitespace-nowrap">
                                                <Clock className="w-4 h-4" />
                                                {route.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regular booking CTA */}
                <section className="py-16 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Set Up a Regular DQ Transfer</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Weekly KAFD commutes, recurring airport runs, or school-term schedules — message us to arrange a standing booking. Same driver where possible, confirmed each day.
                        </p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20live%20in%20the%20Diplomatic%20Quarter%20and%20need%20regular%20taxi%20service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-500 hover:bg-blue-400 text-white font-black text-lg rounded-xl transition-all hover:scale-105"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            Set Up Regular Booking
                        </a>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">DQ Taxi — Frequently Asked Questions</h2>
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
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your DQ Transfer</h2>
                        <p className="text-green-100 text-lg mb-8">Share your compound name, destination, and time — confirmed in 2 minutes via WhatsApp.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20the%20Diplomatic%20Quarter%20Riyadh"
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
