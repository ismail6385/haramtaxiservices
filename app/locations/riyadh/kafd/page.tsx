import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, Building2, Briefcase, Star, Shield } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh/kafd',
    },
    title: 'KAFD Taxi | King Abdullah Financial District Riyadh — Corporate Chauffeur & Airport Transfer',
    description: 'Reliable taxi and corporate chauffeur in KAFD Riyadh. KKIA airport to KAFD transfers, Diplomatic Quarter, Olaya runs. Named driver, fixed rate, 24/7 booking via WhatsApp.',
    keywords: ['KAFD taxi', 'King Abdullah Financial District taxi', 'KAFD to KKIA airport', 'corporate chauffeur KAFD Riyadh', 'taxi KAFD Riyadh', 'KAFD transfer service', 'chauffeur service King Abdullah Financial District'],
    openGraph: {
        title: 'KAFD Taxi Riyadh | Corporate Chauffeur — King Abdullah Financial District',
        description: 'Named driver, fixed rate corporate taxi in KAFD. Airport transfers, intercity, and Riyadh business circuits. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh/kafd',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi — KAFD Riyadh Corporate Chauffeur",
    "@id": "https://haramtaxiservice.com/locations/riyadh/kafd",
    "url": "https://haramtaxiservice.com/locations/riyadh/kafd",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "description": "Corporate taxi and chauffeur service in King Abdullah Financial District (KAFD), Riyadh. Specialising in KKIA airport transfers, business circuit runs, and intercity executive travel.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "King Abdullah Financial District (KAFD)",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
    },
    "areaServed": "King Abdullah Financial District, Riyadh",
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi from KAFD to KKIA Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "Book via WhatsApp with your KAFD tower/building address and flight time. Your driver meets you at your building exit, handles luggage, and delivers you to KKIA departures — approximately 35–45 minutes depending on traffic." }
        },
        {
            "@type": "Question",
            "name": "Is Uber reliable for KAFD to KKIA airport transfer?",
            "acceptedAnswer": { "@type": "Answer", "text": "Uber works within Riyadh but does not guarantee a named driver, fixed rate, or flight tracking. For airport transfers from KAFD, a pre-booked private taxi ensures a driver waits at your building, monitors your flight, and provides a fixed fare with no surge." }
        },
        {
            "@type": "Question",
            "name": "Can I get a corporate account for regular KAFD taxi transfers?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We support corporate accounts for businesses in KAFD requiring regular transfers — KKIA airport, Diplomatic Quarter, Old Airport Road, and intercity. Contact us via WhatsApp to discuss account arrangements." }
        },
        {
            "@type": "Question",
            "name": "How far is KAFD from KKIA Airport?",
            "acceptedAnswer": { "@type": "Answer", "text": "KAFD is approximately 32km from King Khalid International Airport (KKIA). The drive takes 30–45 minutes depending on Riyadh traffic. Peak hours (7–9am, 4–7pm) add 10–15 minutes." }
        },
        {
            "@type": "Question",
            "name": "Does the taxi pick up inside KAFD towers?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Provide your tower name and exit/lobby when booking. Your driver navigates to your specific building — no need to walk to a pickup zone." }
        },
        {
            "@type": "Question",
            "name": "Can I book a Riyadh to Jeddah taxi from KAFD?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We pick up from your KAFD office or hotel and provide direct door-to-door transfer to Jeddah (950km, 9–10 hours). Ideal for executives avoiding flight schedule constraints." }
        }
    ]
};

const kafdRoutes = [
    { to: 'KKIA Airport', duration: '35–45 min', desc: 'Terminal 1, 3 or 5 — all covered' },
    { to: 'Diplomatic Quarter', duration: '20–25 min', desc: 'Embassy row, expat compounds' },
    { to: 'Olaya / Kingdom Tower', duration: '15–20 min', desc: 'Central Riyadh CBD' },
    { to: 'Diriyah', duration: '25–30 min', desc: 'UNESCO heritage, Vision 2030 district' },
    { to: 'Jeddah', duration: '9–10 hrs', desc: 'Direct intercity, 950km' },
    { to: 'Madinah', duration: '8–9 hrs', desc: 'Direct intercity, 840km' },
];

export default function KAFDPage() {
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
                            <li className="text-gray-900 font-medium">KAFD</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 mb-6">
                                <Building2 className="w-4 h-4 text-amber-400" />
                                <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">King Abdullah Financial District</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                KAFD Taxi &<br />
                                <span className="text-amber-400">Corporate Chauffeur</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Named driver, fixed rate, 24/7. KKIA airport transfers, business circuit runs across Riyadh, and intercity executive travel — all pre-booked via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20corporate%20taxi%20in%20KAFD%20Riyadh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book KAFD Transfer
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
                <section className="bg-amber-50 border-b border-amber-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'KAFD to KKIA', value: '35–45 min' },
                                { label: 'KAFD to DQ', value: '20–25 min' },
                                { label: 'KAFD to Olaya', value: '15–20 min' },
                                { label: 'Availability', value: '24/7' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-slate-800">{s.value}</div>
                                    <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why KAFD needs pre-booked taxi */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why KAFD Professionals Pre-Book</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    KAFD&apos;s multi-tower layout, underground parking levels, and restricted vehicle access zones make hailing a street taxi impractical. A pre-booked driver navigates to your exact building exit — no walking to pickup zones, no fare negotiation.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: Briefcase, text: 'Named driver confirmed before you leave your desk' },
                                        { icon: Clock, text: 'Flight-tracked KKIA pickups — driver adjusts to delays' },
                                        { icon: Shield, text: 'Fixed rate quoted upfront — no surge, no negotiation' },
                                        { icon: Star, text: 'Professional vehicle — no worn-out taxis for client meetings' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-slate-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Common KAFD Transfer Routes</h3>
                                <div className="space-y-4">
                                    {kafdRoutes.map((route, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                            <div>
                                                <div className="font-semibold text-white">{route.to}</div>
                                                <div className="text-sm text-slate-400">{route.desc}</div>
                                            </div>
                                            <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
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

                {/* Corporate account CTA */}
                <section className="py-16 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <Building2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Corporate Account for KAFD Businesses</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Regular KKIA runs, executive circuits, and intercity transfers for your team — consolidated billing, priority booking, dedicated account manager.
                        </p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20discuss%20a%20corporate%20taxi%20account%20for%20our%20KAFD%20office"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black text-lg rounded-xl transition-all hover:scale-105"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            Enquire About Corporate Account
                        </a>
                    </div>
                </section>

                {/* Intercity from KAFD */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intercity Transfers from KAFD</h2>
                            <p className="text-gray-600 text-lg">Pickup direct from your KAFD office or hotel — door to door across Saudi Arabia</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { city: 'Jeddah', slug: 'riyadh-to-jeddah', dist: '950km', time: '9–10 hrs', note: 'KAIA, Corniche, Jeddah CBD' },
                                { city: 'Madinah', slug: 'riyadh-to-madinah', dist: '840km', time: '8–9 hrs', note: 'Prophet\'s Mosque, Umrah, Ziyarat' },
                                { city: 'Al Khobar', slug: 'riyadh-to-khobar', dist: '400km', time: '4–4.5 hrs', note: 'Aramco, Eastern Province' },
                            ].map((r, i) => (
                                <Link key={i} href={`/routes/${r.slug}`} className="block group">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-slate-300 hover:shadow-md transition-all">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-600">KAFD → {r.city}</h3>
                                            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <div className="text-sm text-gray-500 mb-1">{r.dist} · {r.time}</div>
                                        <div className="text-sm text-gray-400">{r.note}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">KAFD Taxi — Frequently Asked Questions</h2>
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
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your KAFD Transfer Now</h2>
                        <p className="text-green-100 text-lg mb-8">Send your building name, destination, and travel time — instant confirmation via WhatsApp.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20KAFD%20Riyadh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-700 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            WhatsApp — Book in 2 Minutes
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
