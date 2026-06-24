import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Shield, Users, Star, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah-region' },
    title: 'Makkah Region Taxi Service | Jeddah, Taif, Rabigh, KAEC — Haram Taxi',
    description: 'Professional taxi service across the entire Makkah Region (Mecca Province) — Makkah, Jeddah, Taif, Rabigh, KAEC, and Al Qunfudhah. Fixed rates, 24/7 WhatsApp booking, Hajj-permitted vehicles.',
    keywords: ['Makkah region taxi', 'Mecca Province taxi', 'Hejaz taxi service', 'Jeddah Makkah Taif taxi', 'Western Saudi Arabia taxi', 'Makkah province transport', 'Jeddah KAIA airport taxi', 'Taif mountain taxi', 'KAEC taxi service', 'Rabigh taxi'],
    openGraph: {
        title: 'Makkah Region Taxi Service | Hejaz Transport — Haram Taxi',
        description: 'Covering Makkah, Jeddah, Taif, Rabigh, KAEC & Al Qunfudhah. Fixed rates, Hajj-permitted vehicles, 24/7 service.',
        url: 'https://haramtaxiservice.com/locations/makkah-region',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Makkah Region", "item": "https://haramtaxiservice.com/locations/makkah-region" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Makkah Region",
    "description": "Professional taxi service across the Makkah Region covering Makkah, Jeddah, Taif, Rabigh, KAEC, and Al Qunfudhah.",
    "url": "https://haramtaxiservice.com/locations/makkah-region",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Makkah Region, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which cities in Makkah Region do you serve?",
        answer: "We cover all major cities and towns in Makkah Region: Makkah Al-Mukarramah, Jeddah (including KAIA Airport), Taif, Rabigh, King Abdullah Economic City (KAEC), and Al Qunfudhah. We also handle intercity routes within the region."
    },
    {
        question: "Do you operate from KAIA Jeddah Airport to all Makkah Region cities?",
        answer: "Yes. KAIA (King Abdulaziz International Airport, Jeddah) is the main gateway for the region. We run transfers from KAIA to Makkah (1.5–2 hrs), KAIA to Taif (2 hrs), KAIA to Rabigh (1.5 hrs), and KAIA to KAEC (45 min). All fares are fixed and confirmed before travel."
    },
    {
        question: "Can I book a multi-city tour across Makkah Region?",
        answer: "Absolutely. We can arrange combined itineraries — for example: Jeddah arrival → Makkah Umrah → Taif mountain tour → return to KAIA. WhatsApp us your itinerary and we'll provide a fixed multi-day quote."
    },
    {
        question: "Do you have Hajj-permitted vehicles for Makkah Region?",
        answer: "Yes. Our GMC Yukon XLs and Toyota Staria vans hold the required Ministry of Hajj permits to enter Makkah's security cordons during Hajj 2026. These vehicles can serve all inner Makkah hotel zones and the Haram area access points."
    },
    {
        question: "How far is Taif from Jeddah?",
        answer: "Taif is approximately 80 km from Jeddah by road (1.5–2 hours). The scenic Al Hada mountain route adds about 30 minutes but offers stunning views. Our Jeddah to Taif fixed-rate taxi is a popular choice for pilgrims and tourists."
    },
    {
        question: "Do you cover the smaller towns like Rabigh and Al Qunfudhah?",
        answer: "Yes. Rabigh (150 km north of Jeddah) and Al Qunfudhah (350 km south of Jeddah on the Red Sea coast) are both served. These routes are popular for industrial transfers (Rabigh Economic City) and pilgrim connections (Al Qunfudhah ferry routes)."
    }
];

const cities = [
    {
        name: 'Makkah Al-Mukarramah',
        slug: 'makkah',
        desc: 'Haram hotel transfers, Ziyarat tours, Hajj logistics, KAIA airport transfer',
        emoji: '🕌',
        color: 'bg-emerald-700',
        tags: ['Hajj 2026', 'Airport', 'Haram Transfer'],
    },
    {
        name: 'Jeddah',
        slug: 'jeddah',
        desc: 'KAIA airport gateway, Al Balad historic tours, Red Sea Corniche, Makkah transfer',
        emoji: '✈️',
        color: 'bg-blue-700',
        tags: ['KAIA Airport', 'Al Balad', 'Corniche'],
    },
    {
        name: 'Taif',
        slug: 'taif',
        desc: 'Miqat transfer, Al Hada mountain tours, rose farm visits, cable car excursions',
        emoji: '🌹',
        color: 'bg-rose-700',
        tags: ['Miqat', 'Mountain Tour', 'Rose Farms'],
    },
    {
        name: 'Rabigh',
        slug: 'rabigh',
        desc: 'Rabigh Economic City, industrial transfers, Jeddah connection, Red Sea coast',
        emoji: '🏭',
        color: 'bg-slate-700',
        tags: ['Economic City', 'Industrial', 'Airport'],
    },
    {
        name: 'KAEC (King Abdullah Economic City)',
        slug: 'kaec',
        desc: 'KAEC smart city, Haramain Station, University Hospital, Jeddah transfer',
        emoji: '🏙️',
        color: 'bg-indigo-700',
        tags: ['KAEC', 'Haramain Train', 'Smart City'],
    },
    {
        name: 'Al Qunfudhah',
        slug: 'al-qunfudhah',
        desc: 'Southern Red Sea coast, Farasan Island ferry connection, intercity transfer',
        emoji: '🌊',
        color: 'bg-cyan-800',
        tags: ['Red Sea', 'Farasan', 'Southern Hejaz'],
    },
];

const routes = [
    { from: 'Jeddah Airport (KAIA)', to: 'Makkah Hotel', time: '1.5 hrs', slug: 'jeddah-airport-to-makkah' },
    { from: 'Makkah', to: 'Madinah', time: '4.5 hrs', slug: 'makkah-to-madinah' },
    { from: 'Taif', to: 'Makkah', time: '1.5–2 hrs', slug: 'taif-to-makkah' },
    { from: 'Jeddah', to: 'Taif', time: '1.5 hrs', slug: 'jeddah-to-taif' },
    { from: 'Jeddah', to: 'Rabigh', time: '1.5 hrs', slug: 'jeddah-to-rabigh' },
    { from: 'KAIA Airport', to: 'KAEC', time: '45 min', slug: 'jeddah-to-kaec' },
];

export default function MakkahRegionPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumb */}
            <div className="bg-emerald-50 border-b border-emerald-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-800">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Makkah Region</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Makkah Region (Hejaz)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Makkah Region Taxi Service — <span className="text-amber-400">Jeddah, Taif & Beyond</span>
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                            Professional private taxi across all of <strong>Makkah Province</strong> — Makkah Al-Mukarramah, Jeddah (KAIA Airport), Taif, Rabigh, KAEC, and Al Qunfudhah. Fixed rates, Hajj-permitted vehicles, and 24/7 WhatsApp booking.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Makkah%20Region" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                    <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                                </Button>
                            </a>
                            <Link href="/locations/makkah">
                                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg">
                                    Makkah City Page →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-emerald-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">6</div><div className="text-sm opacity-80">Cities Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">KAIA Airport Transfers</div></div>
                        <div><div className="text-3xl font-bold mb-1">Hajj ✓</div><div className="text-sm opacity-80">Permitted Vehicles</div></div>
                        <div><div className="text-3xl font-bold mb-1">Fixed</div><div className="text-sm opacity-80">Rates — No Surge</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities We Serve in Makkah Region</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Every major city and economic zone in the Makkah Province — each with its own dedicated page, local knowledge, and fixed fares.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cities.map((city) => (
                            <Link key={city.slug} href={`/locations/${city.slug}`} className="group block">
                                <div className={`${city.color} text-white p-6 rounded-2xl hover:scale-[1.02] transition-all shadow-md h-full`}>
                                    <div className="text-3xl mb-3">{city.emoji}</div>
                                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                                    <p className="text-sm opacity-85 mb-4 leading-relaxed">{city.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {city.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full font-medium">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold opacity-90 group-hover:opacity-100">
                                        <span>View city page</span><ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes in Makkah Region</h2>
                        <p className="text-gray-500">Most-booked intercity transfers with fixed rates.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-emerald-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-emerald-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/routes" className="text-sm font-semibold text-emerald-700 hover:underline">
                            Browse all Saudi Arabia routes →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Book Makkah Region Taxi with Us</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, title: 'Hajj-Permitted Vehicles', desc: 'Ministry of Hajj licensed fleet — can enter Makkah cordons and Haram access points.' },
                            { icon: Clock, title: '24/7 Airport Coverage', desc: 'KAIA arrivals at any hour. Flight tracked for early/late landings. Driver waits with name board.' },
                            { icon: Car, title: 'Fixed Rates — No Surge', desc: 'Quote locked at booking. No Hajj season surge, no meter ticking. What we quote is what you pay.' },
                            { icon: Users, title: 'Group Fleet Available', desc: 'Camry (4 pax) to Coaster (24 pax). Same-day fleet for corporate delegations across the region.' },
                        ].map((item) => (
                            <div key={item.title} className="text-center p-6">
                                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-emerald-700" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-500">About taxi service in the Makkah Region.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-emerald-700">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Province navigation */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Other Saudi Arabia Regions</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'Madinah Region', slug: 'madinah-region', cities: 'Madinah, Yanbu, Al Ula' },
                            { name: 'Riyadh Region', slug: 'riyadh-region', cities: 'Riyadh, Kharj, Majmaah' },
                            { name: 'Eastern Province', slug: 'eastern-province', cities: 'Dammam, Khobar, Jubail' },
                            { name: 'Asir Region', slug: 'asir-region', cities: 'Abha, Khamis Mushait, Bisha' },
                            { name: 'Tabuk Region', slug: 'tabuk-region', cities: 'Tabuk, NEOM, Haql' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-emerald-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Makkah Region Taxi Now</h2>
                    <p className="text-emerald-200 mb-8">WhatsApp us your route, date, and group size — we send a fixed quote in minutes.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Makkah%20Region" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
