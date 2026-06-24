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
        canonical: 'https://haramtaxiservice.com/locations/taif/al-hada',
    },
    title: 'Al Hada Taxi Taif | Cable Car, Zigzag Road & Mountain Transfer Service',
    description: 'Taxi in Al Hada, Taif — cable car (Telefric), zigzag road scenic tours, hotel pickups, and transfers to Makkah (60 min). Fixed rate, mountain-expert drivers, 24/7 WhatsApp.',
    keywords: ['Al Hada taxi', 'Al Hada Taif taxi', 'Al Hada cable car taxi', 'Telefric Al Hada', 'Al Hada mountain tour', 'Al Hada to Makkah taxi', 'zigzag road Taif taxi'],
    openGraph: {
        title: 'Al Hada Taxi | Cable Car, Zigzag Road & Makkah Transfer',
        description: 'Pre-booked taxi in Al Hada, Taif. Cable car, zigzag road tours, hotel pickups. 60 min to Makkah. Fixed rate via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/taif/al-hada',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi — Al Hada, Taif",
    "@id": "https://haramtaxiservice.com/locations/taif/al-hada",
    "url": "https://haramtaxiservice.com/locations/taif/al-hada",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "description": "Professional taxi and mountain tour service in Al Hada, Taif. Cable car transfers, zigzag road scenic tours, hotel pickups, and Makkah transfers via the scenic mountain route.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Hada Mountain",
        "addressLocality": "Taif",
        "addressRegion": "Makkah Province",
        "addressCountry": "SA"
    },
    "areaServed": "Al Hada, Taif",
    "priceRange": "$$"
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Taif", "item": "https://haramtaxiservice.com/locations/taif" },
        { "@type": "ListItem", "position": 4, "name": "Al Hada", "item": "https://haramtaxiservice.com/locations/taif/al-hada" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi to Al Hada Cable Car (Telefric) from Taif City?",
            "acceptedAnswer": { "@type": "Answer", "text": "Book via WhatsApp with your hotel or pickup address. The drive from Taif city center to Al Hada Cable Car station takes approximately 30 minutes via the scenic mountain road. Your driver can wait during your cable car ride and continue the tour afterward." }
        },
        {
            "@type": "Question",
            "name": "How far is Al Hada from Makkah?",
            "acceptedAnswer": { "@type": "Answer", "text": "Al Hada is approximately 60km from Makkah via Route 15. The drive takes around 60–75 minutes. This is the most scenic route, featuring dramatic mountain descents and views over the Hejaz range before reaching Makkah." }
        },
        {
            "@type": "Question",
            "name": "Is the Al Hada zigzag road safe by taxi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, when driven by a local mountain-experienced driver. Our Al Hada and Taif chauffeurs drive this road daily and are fully trained on its 30+ switchback turns. We do not recommend unfamiliar or app-based drivers on this road, especially at night or in fog." }
        },
        {
            "@type": "Question",
            "name": "Can I book a full-day Al Hada mountain tour from Taif?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer full-day Al Hada tours that include: the cable car station, zigzag road viewpoints, Al Hada mountain cafes and restaurants, and optional continuation to Shafa or Wadi Naaman rose farms. Contact us on WhatsApp for a custom itinerary." }
        },
        {
            "@type": "Question",
            "name": "What hotels in Al Hada do you serve?",
            "acceptedAnswer": { "@type": "Answer", "text": "We serve all Al Hada hotels and resorts including Intercontinental Al Hada Mountain Resort, Shubra Hotel Al Hada, and all residential resort complexes on the mountain. We pick up from your specific building entrance." }
        },
        {
            "@type": "Question",
            "name": "Can I book a Miqat transfer from Al Hada to Makkah for Hajj 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Al Hada is close to the Qarn al-Manazil Miqat (As-Sail Al-Kabir). We provide dedicated Miqat transfers from Al Hada for Hajj 2026 and Umrah pilgrims. Pre-booking is essential during Hajj season — WhatsApp us now to secure your date." }
        }
    ]
};

const alHadaRoutes = [
    { to: 'Al Hada Cable Car Station', duration: '5 min', note: 'Local Al Hada transfer' },
    { to: 'Taif City Center', duration: '30 min', note: 'Via mountain road' },
    { to: 'Makkah', duration: '60–75 min', note: 'Via Route 15 mountain descent' },
    { to: 'Shafa Mountains', duration: '20 min', note: 'Connecting highland resorts' },
    { to: 'Jeddah Airport (KAIA)', duration: '2 hrs', note: 'Via Makkah bypass' },
    { to: 'Madinah', duration: '5 hrs', note: 'Intercity direct transfer' },
];

const alHadaLandmarks = [
    'Al Hada Cable Car (Telefric) — panoramic mountain views',
    'Zigzag Road — 30+ switchbacks with Hejaz mountain scenery',
    'Al Hada Mountain Resort — luxury hotel & spa',
    'Mountain viewpoint cafes and rest areas',
    'Waterfall and rocky gorge viewpoints',
    'Al Hada Nature walks and trekking paths',
];

export default function AlHadaPage() {
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
                            <li className="text-gray-900 font-medium">Al Hada</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-green-900 via-gray-800 to-slate-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <Mountain className="w-4 h-4 text-green-300" />
                                <span className="text-gray-300 text-xs font-bold tracking-widest uppercase">Al Hada · Cable Car · Zigzag Road · Taif</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Al Hada Taxi<br />
                                <span className="text-green-300">Mountain Tours & Transfers</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Pre-booked taxi from Al Hada Mountain Resort, cable car station, and all Al Hada hotels. Zigzag road scenic tours, Makkah Miqat transfers, and connections to Taif city — fixed rate, confirmed via WhatsApp.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Hada%20Taif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Al Hada Transfer
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
                                { label: 'Al Hada to Makkah', value: '60–75 min' },
                                { label: 'Al Hada to Taif City', value: '30 min' },
                                { label: 'Al Hada to Shafa', value: '20 min' },
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transfer Routes from Al Hada</h2>
                                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-4">
                                        {alHadaRoutes.map((route, i) => (
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Hada Landmarks We Serve</h2>
                                <ul className="space-y-4">
                                    {alHadaLandmarks.map((lm, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{lm}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Hada%20Taif"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Book Al Hada Taxi
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hotels Note */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">Al Hada Hotel & Resort Pickups</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We pick up from all Al Hada mountain hotels and resort complexes — no need to walk to a main road or wait for an app.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
                            {['InterContinental Al Hada', 'Shubra Hotel Al Hada', 'Al Hada Mountain Resort', 'Radisson Blu Al Hada', 'Mountain View Chalets', 'All Private Villas'].map((h, i) => (
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Al Hada Taxi — Frequently Asked Questions</h2>
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
                <section className="py-16 bg-green-700">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Al Hada Mountain Transfer</h2>
                        <p className="text-green-100 text-lg mb-8">Cable car, zigzag road tour, Makkah transfer, or hotel pickup — share your location and time. Confirmed in 2 minutes via WhatsApp.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al%20Hada%20Taif"
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
