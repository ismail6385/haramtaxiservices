import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/riyadh-region' },
    title: 'Riyadh Region Taxi Service | Capital, Kharj, Majmaah, Dawadmi — Haram Taxi',
    description: 'Professional taxi service across Riyadh Region — Riyadh capital, Al Kharj, Majmaah, Dawadmi, Shaqra, Zulfi, and Wadi Ad Dawasir. Fixed rates, airport transfers, 24/7 WhatsApp booking.',
    keywords: ['Riyadh region taxi', 'Riyadh taxi service', 'Riyadh airport taxi', 'Al Kharj taxi', 'Majmaah taxi', 'Riyadh to Makkah taxi', 'capital region taxi Saudi Arabia', 'Dawadmi taxi', 'Shaqra taxi'],
    openGraph: {
        title: 'Riyadh Region Taxi Service | Capital & Surrounding Cities — Haram Taxi',
        description: 'Full coverage across Riyadh Province — capital city transfers, airport service, and intercity routes to Makkah, Madinah & Eastern Province.',
        url: 'https://haramtaxiservice.com/locations/riyadh-region',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Riyadh Region", "item": "https://haramtaxiservice.com/locations/riyadh-region" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Riyadh Region",
    "description": "Professional taxi across Riyadh Region including Riyadh, Al Kharj, Majmaah, Dawadmi, Shaqra, Zulfi, and Wadi Ad Dawasir.",
    "url": "https://haramtaxiservice.com/locations/riyadh-region",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Riyadh Region, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which cities in the Riyadh Region do you cover?",
        answer: "We serve all major Riyadh Province cities: Riyadh (King Khalid International Airport and all city zones), Al Kharj, Majmaah, Dawadmi, Shaqra, Zulfi, and Wadi Ad Dawasir. Long-distance routes from Riyadh to other Saudi regions are also available."
    },
    {
        question: "Do you serve King Khalid International Airport (RUH) in Riyadh?",
        answer: "Yes — King Khalid International Airport (KKIA/RUH) is our main Riyadh hub. We track all flights for arrivals, meet drivers in the terminal with a name board, and cover departures from all Riyadh districts. Available 24/7."
    },
    {
        question: "How far is Riyadh from Makkah by taxi?",
        answer: "The direct distance from Riyadh to Makkah is approximately 900 km via Highway 40/15, which takes about 9–10 hours by car. For most pilgrims we recommend the Haramain High-Speed Train (2.5 hrs, Riyadh–Madinah–Jeddah–Makkah) for this route, but private taxi service is available for those needing door-to-door transfer."
    },
    {
        question: "Is there taxi service between Riyadh and Dammam?",
        answer: "Yes. Riyadh to Dammam is one of our most popular intercity routes — approximately 400 km via Highway 40 (3.5–4 hours). We also cover Riyadh to Al Khobar (4 hours) and Riyadh to Jubail (4.5 hours)."
    },
    {
        question: "Can you arrange Riyadh business chauffeur service?",
        answer: "Yes. We provide professional chauffeur service for business meetings, corporate events, and government delegations in Riyadh. Our drivers are professionally presented, punctual, and familiar with all major Riyadh business districts and government offices."
    },
    {
        question: "Do you cover Diriyah and the new Riyadh development zones?",
        answer: "Yes. We serve all Riyadh city zones including Diriyah (UNESCO World Heritage site and tourism hub), Al Qiddiya entertainment city, NEOM support zones, and all major Riyadh business districts, hotels, and government areas."
    }
];

const cities = [
    { name: 'Riyadh', slug: 'riyadh', desc: 'KKIA airport, business chauffeur, Diriyah, government transfers, city tours', emoji: '🏙️', color: 'bg-amber-700', tags: ['Airport', 'Business', 'Diriyah'] },
    { name: 'Al Kharj', slug: 'kharj', desc: 'Military City, agricultural hub, Riyadh satellite city transfer', emoji: '🌾', color: 'bg-green-800', tags: ['Military City', 'Airport', 'Agriculture'] },
    { name: 'Majmaah', slug: 'majmaah', desc: 'University city, King Abdulaziz Road, northern Riyadh region', emoji: '🎓', color: 'bg-blue-800', tags: ['University', 'Northern', 'Education'] },
    { name: 'Dawadmi', slug: 'dawadmi', desc: 'Western Riyadh gateway, intercity hub between Riyadh and Hejaz', emoji: '🛣️', color: 'bg-slate-700', tags: ['Gateway', 'Transit Hub', 'Western'] },
    { name: 'Shaqra', slug: 'shaqra', desc: 'Shaqra University, central Riyadh Province, heritage town', emoji: '🏛️', color: 'bg-stone-700', tags: ['University', 'Heritage', 'Central'] },
    { name: 'Zulfi', slug: 'zulfi', desc: 'Northern Riyadh Province, Majmaah connection, agricultural region', emoji: '🌿', color: 'bg-emerald-800', tags: ['Northern', 'Agriculture', 'University'] },
    { name: 'Wadi Ad Dawasir', slug: 'wadi-ad-dawasir', desc: 'Southern Riyadh gateway, Najran connection, date farms', emoji: '🌴', color: 'bg-orange-800', tags: ['Southern', 'Date Farms', 'Najran Link'] },
];

const routes = [
    { from: 'Riyadh Airport (KKIA)', to: 'Riyadh City', time: '30 min', slug: 'riyadh-airport-to-riyadh' },
    { from: 'Riyadh', to: 'Dammam', time: '3.5 hrs', slug: 'riyadh-to-dammam' },
    { from: 'Riyadh', to: 'Jeddah', time: '9 hrs', slug: 'riyadh-to-jeddah' },
    { from: 'Riyadh', to: 'Al Kharj', time: '1 hr', slug: 'riyadh-to-al-kharj' },
    { from: 'Riyadh', to: 'Majmaah', time: '2 hrs', slug: 'riyadh-to-majmaah' },
    { from: 'Riyadh', to: 'Dawadmi', time: '2.5 hrs', slug: 'riyadh-to-dawadmi' },
];

export default function RiyadhRegionPage() {
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
            <div className="bg-amber-50 border-b border-amber-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-amber-900">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Riyadh Region</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Riyadh Region (Capital Province)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Riyadh Region Taxi Service — <span className="text-amber-300">Capital & Surrounding Cities</span>
                        </h1>
                        <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                            Professional private taxi across the <strong>Riyadh Province</strong> — capital city transfers, KKIA airport service, business chauffeur, and intercity routes to all Saudi regions. Fixed rates, 24/7 service.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Riyadh%20Region" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-amber-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">7</div><div className="text-sm opacity-80">Cities Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">KKIA Airport Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">9 hrs</div><div className="text-sm opacity-80">Riyadh to Makkah</div></div>
                        <div><div className="text-3xl font-bold mb-1">Fixed</div><div className="text-sm opacity-80">Corporate Rates</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-amber-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities We Serve in Riyadh Region</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The capital and every major Riyadh Province city — from the KKIA airport hub to the distant agricultural towns.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes from Riyadh Region</h2>
                        <p className="text-gray-500">Airport, intercity, and cross-country fixed-rate transfers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-amber-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
                        <p className="text-gray-500">About taxi service in the Riyadh Region.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-amber-700">
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

            {/* Other Regions */}
            <section className="py-12 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Other Saudi Arabia Regions</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'Makkah Region', slug: 'makkah-region', cities: 'Makkah, Jeddah, Taif' },
                            { name: 'Madinah Region', slug: 'madinah-region', cities: 'Madinah, Yanbu, Al Ula' },
                            { name: 'Eastern Province', slug: 'eastern-province', cities: 'Dammam, Khobar, Jubail' },
                            { name: 'Asir Region', slug: 'asir-region', cities: 'Abha, Khamis Mushait, Bisha' },
                            { name: 'Tabuk Region', slug: 'tabuk-region', cities: 'Tabuk, NEOM, Haql' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-amber-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-amber-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Riyadh Region Taxi Now</h2>
                    <p className="text-amber-200 mb-8">Airport pickups, business chauffeur, intercity transfers — all confirmed via WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Riyadh%20Region" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
