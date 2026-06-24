import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/asir-region' },
    title: 'Asir Region Taxi Service | Abha, Khamis Mushait, Bisha, Al Namas — Haram Taxi',
    description: 'Professional taxi service across Asir Region — Abha (mountain capital), Khamis Mushait, Bisha, Al Namas, and Soudah. Airport transfers, mountain tours, Rijal Almaa village. Fixed rates 24/7.',
    keywords: ['Asir taxi service', 'Abha taxi', 'Khamis Mushait taxi', 'Asir mountain taxi', 'Abha airport taxi', 'Soudah taxi', 'Rijal Almaa transfer', 'Bisha taxi', 'Al Namas taxi', 'Aseer region transport'],
    openGraph: {
        title: 'Asir Region Taxi Service | Abha, Khamis Mushait, Soudah — Haram Taxi',
        description: 'Covering all of Asir Province — Abha Airport, mountain tours, Soudah Peak, Rijal Almaa. Fixed rates, 24/7 service.',
        url: 'https://haramtaxiservice.com/locations/asir-region',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Asir Region", "item": "https://haramtaxiservice.com/locations/asir-region" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Asir Region",
    "description": "Professional taxi service in Asir Region including Abha, Khamis Mushait, Bisha, Al Namas, and Soudah.",
    "url": "https://haramtaxiservice.com/locations/asir-region",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Asir Region, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which Asir Region cities do you cover?",
        answer: "We cover all major Asir Province cities and attractions: Abha (including Abha Regional Airport), Khamis Mushait (including King Khalid Air Base area), Bisha, Al Namas, and the high-altitude attractions: Soudah Peak (3,015m — highest point in Saudi Arabia), Rijal Almaa heritage village, Habala village, and the Green Mountain cable car in Abha."
    },
    {
        question: "Do you serve Abha Airport (AHB)?",
        answer: "Yes. Abha Regional Airport (AHB) is our main Asir hub. We meet arriving flights with a name board and transfer to any Abha hotel, Khamis Mushait, Soudah, or other Asir destinations. All flights tracked. Available 24/7 including late-night arrivals."
    },
    {
        question: "Can you arrange Soudah mountain tours from Abha?",
        answer: "Absolutely. Soudah Peak (3,015 metres — Saudi Arabia's highest point) is approximately 30 km from Abha city. We arrange half-day and full-day Soudah trips including the Soudah chairlift/cable car area, Rijal Almaa UNESCO-listed heritage village, and scenic viewpoint stops along the escarpment."
    },
    {
        question: "How far is Abha from Khamis Mushait?",
        answer: "Abha and Khamis Mushait are twin cities approximately 25 km apart (about 30 minutes by taxi). We provide quick transfers between the two cities and can arrange combined itineraries across both."
    },
    {
        question: "Do you travel from Asir Region to Makkah or Jeddah?",
        answer: "Yes. Long-distance transfers from Abha to Jeddah (approximately 5 hours via coastal highway) and Abha to Makkah (approximately 7 hours) are available with fixed rates. Pre-booking is required for these routes."
    },
    {
        question: "Is the mountain road to Rijal Almaa safe for regular vehicles?",
        answer: "The road to Rijal Almaa is paved and well-maintained. Our drivers are experienced with Asir's mountain roads and the Sarawat escarpment driving conditions, which can involve tight switchbacks and fog in the morning. We use appropriate vehicles for all mountain routes."
    }
];

const cities = [
    { name: 'Abha', slug: 'abha', desc: 'Mountain capital, AHB airport, Green Mountain cable car, Asir National Park', emoji: '⛰️', color: 'bg-green-800', tags: ['Airport', 'Cable Car', 'Mountain'] },
    { name: 'Khamis Mushait', slug: 'khamis-mushait', desc: 'Twin city to Abha, Al Wadyan area, military base, south Asir transfers', emoji: '🏙️', color: 'bg-slate-700', tags: ['Twin City', 'Military', 'Business'] },
    { name: 'Bisha', slug: 'bisha', desc: 'Northern Asir gateway, airport transfers, Namas connection, agricultural hub', emoji: '🌾', color: 'bg-amber-800', tags: ['Airport', 'Gateway', 'Northern Asir'] },
    { name: 'Al Namas', slug: 'al-namas', desc: 'Cool climate highland resort, pomegranate groves, Shada Mountain retreat', emoji: '🍎', color: 'bg-rose-800', tags: ['Highland', 'Resort', 'Pomegranates'] },
];

const routes = [
    { from: 'Abha Airport (AHB)', to: 'Abha City', time: '20 min', slug: 'abha-airport-to-abha' },
    { from: 'Abha', to: 'Soudah Peak', time: '40 min', slug: 'abha-to-soudah' },
    { from: 'Abha', to: 'Rijal Almaa', time: '1.5 hrs', slug: 'abha-to-rijal-almaa' },
    { from: 'Abha', to: 'Khamis Mushait', time: '30 min', slug: 'abha-to-khamis-mushait' },
    { from: 'Abha', to: 'Jeddah', time: '5 hrs', slug: 'abha-to-jeddah' },
    { from: 'Bisha', to: 'Abha', time: '2.5 hrs', slug: 'bisha-to-abha' },
];

export default function AsirRegionPage() {
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
            <div className="bg-green-50 border-b border-green-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-green-800">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Asir Region</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-green-900 via-green-800 to-teal-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Asir Region (Aseer)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Asir Region Taxi Service — <span className="text-amber-400">Abha, Khamis Mushait & Soudah</span>
                        </h1>
                        <p className="text-xl text-green-100 mb-8 leading-relaxed">
                            Professional private taxi across the <strong>Asir Province</strong> — Saudi Arabia&apos;s cool mountain heartland. Abha Airport transfers, Soudah Peak tours, Rijal Almaa heritage village, and Al Namas highland escapes. Fixed rates, 24/7 service.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Asir%20Region" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-green-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">3,015m</div><div className="text-sm opacity-80">Soudah Peak — KSA&apos;s Highest</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">Abha Airport Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">4+</div><div className="text-sm opacity-80">Cities Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">Fixed</div><div className="text-sm opacity-80">Mountain Tour Rates</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-green-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities We Serve in Asir Region</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The Sarawat mountain escarpment from Bisha in the north to the Yemen border — Saudi Arabia&apos;s green highlands covered.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes in Asir Region</h2>
                        <p className="text-gray-500">Mountain tours, airport runs, and long-distance connections.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-green-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-green-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
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
                        <p className="text-gray-500">About taxi service in Asir Region.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-green-700">
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
                            { name: 'Riyadh Region', slug: 'riyadh-region', cities: 'Riyadh, Kharj, Majmaah' },
                            { name: 'Eastern Province', slug: 'eastern-province', cities: 'Dammam, Khobar, Jubail' },
                            { name: 'Tabuk Region', slug: 'tabuk-region', cities: 'Tabuk, NEOM, Haql' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Asir Mountain Taxi Now</h2>
                    <p className="text-green-200 mb-8">Airport transfers, Soudah tours, Rijal Almaa visits — all fixed rates via WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Asir%20Region" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
