import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk-region' },
    title: 'Tabuk Region Taxi Service | Tabuk, NEOM, Haql, Al Wajh, Duba — Haram Taxi',
    description: 'Professional taxi across Tabuk Region — Tabuk city (PSAA Airport), NEOM megaproject, Haql Red Sea beaches, Al Wajh, Duba, and Umluj. Fixed rates, 24/7 WhatsApp booking.',
    keywords: ['Tabuk taxi service', 'NEOM taxi', 'Haql taxi', 'Tabuk airport taxi', 'Al Wajh taxi', 'Duba Saudi Arabia taxi', 'Umluj taxi', 'NEOM transfer', 'Tabuk region transport', 'The Line taxi', 'SINDALAH taxi'],
    openGraph: {
        title: 'Tabuk Region Taxi Service | Tabuk, NEOM, Haql, Red Sea — Haram Taxi',
        description: 'Complete taxi coverage across Tabuk Province — NEOM megaproject, Tabuk Airport, Haql beach, Al Wajh, Duba. Fixed rates 24/7.',
        url: 'https://haramtaxiservice.com/locations/tabuk-region',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Tabuk Region", "item": "https://haramtaxiservice.com/locations/tabuk-region" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Tabuk Region",
    "description": "Professional taxi service across Tabuk Region including Tabuk, NEOM, Haql, Al Wajh, Duba, and Umluj.",
    "url": "https://haramtaxiservice.com/locations/tabuk-region",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Tabuk Region, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which Tabuk Region cities do you serve?",
        answer: "We cover the full Tabuk Province: Tabuk city (Prince Sultan bin Abdulaziz Airport / PSAA), NEOM megaproject zone, Haql (Gulf of Aqaba beachfront), Al Wajh (Red Sea coast), Duba, Umluj, and Al Haditha. We also handle the Jordan border crossing at Durra (Al Omari)."
    },
    {
        question: "Do you provide NEOM taxi transfers?",
        answer: "Yes. NEOM is one of the world's largest construction megaprojects. We provide private taxi transfers for NEOM workers, contractors, consultants, and site visitors across the NEOM zone. Transfer from Tabuk Airport to NEOM is approximately 3 hours. Pre-booking is essential."
    },
    {
        question: "Can you arrange transfers from Tabuk to Haql (Gulf of Aqaba)?",
        answer: "Yes. Haql is a coastal resort town on the Gulf of Aqaba, approximately 3.5 hours from Tabuk city. We provide fixed-rate transfers for tourists visiting Haql's beaches, Gayal National Park, and the Gulf of Aqaba dive sites."
    },
    {
        question: "Do you cover the Jordan border at Al Haditha / Durra?",
        answer: "Yes. We provide private taxi service to the Jordan border crossing at Al Haditha (Saudi side) / Durra / Al Omari (Jordan side). From Haql, the border is approximately 30 minutes; from Tabuk approximately 3.5–4 hours."
    },
    {
        question: "How far is Tabuk Airport from the city?",
        answer: "Prince Sultan bin Abdulaziz Airport (PSAA) is approximately 15 km northeast of Tabuk city center — about 15–20 minutes by taxi. We cover all arrivals and departures with a name board at arrivals and flight tracking service."
    },
    {
        question: "Do you go from Tabuk to Al Ula?",
        answer: "Yes. Tabuk to Al Ula is approximately 3.5–4 hours south via the Hijaz Mountains highway. This route connects the NEOM/Tabuk region with Al Ula's Hegra UNESCO site, Elephant Rock, and luxury eco-resorts. A popular route for tourism itineraries."
    }
];

const cities = [
    { name: 'Tabuk', slug: 'tabuk', desc: 'PSAA airport, Tabuk Castle, NEOM gateway, city transfers, Jordan border', emoji: '🏰', color: 'bg-violet-800', tags: ['Airport', 'NEOM Gateway', 'Jordan Border'] },
    { name: 'NEOM', slug: 'neom', desc: 'The Line, Sindalah Island, Magna, Sharma — world\'s largest megaproject', emoji: '🌆', color: 'bg-indigo-800', tags: ['The Line', 'Megaproject', 'Contractor Transfer'] },
    { name: 'Haql', slug: 'haql', desc: 'Gulf of Aqaba beaches, Red Sea diving, Gayal Park, Jordan border crossing', emoji: '🏖️', color: 'bg-cyan-700', tags: ['Gulf of Aqaba', 'Diving', 'Beach Resort'] },
    { name: 'Al Wajh', slug: 'al-wajh', desc: 'Red Sea coast, Al Wajh Airport, coral reefs, Al Ula connection', emoji: '🌊', color: 'bg-blue-800', tags: ['Airport', 'Red Sea', 'Coral Reefs'] },
    { name: 'Duba', slug: 'duba', desc: 'Red Sea port city, Duba fishing harbor, Al Wajh connection', emoji: '⛵', color: 'bg-teal-800', tags: ['Port City', 'Fishing', 'Red Sea'] },
    { name: 'Umluj', slug: 'umluj', desc: 'Maldives of Saudi Arabia — turquoise lagoons, coral islands, eco-tourism', emoji: '🏝️', color: 'bg-emerald-800', tags: ['Eco-Tourism', 'Lagoons', 'Islands'] },
];

const routes = [
    { from: 'Tabuk Airport (PSAA)', to: 'Tabuk City', time: '20 min', slug: 'tabuk-airport-to-tabuk' },
    { from: 'Tabuk', to: 'NEOM', time: '3 hrs', slug: 'tabuk-to-neom' },
    { from: 'Tabuk', to: 'Haql', time: '3.5 hrs', slug: 'tabuk-to-haql' },
    { from: 'Tabuk', to: 'Al Ula', time: '4 hrs', slug: 'tabuk-to-al-ula' },
    { from: 'Haql', to: 'Jordan Border', time: '30 min', slug: 'haql-to-jordan-border' },
    { from: 'Al Wajh', to: 'Umluj', time: '1.5 hrs', slug: 'al-wajh-to-umluj' },
];

export default function TabukRegionPage() {
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
            <div className="bg-violet-50 border-b border-violet-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-violet-800">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Tabuk Region</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Tabuk Region (Northwest)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Tabuk Region Taxi Service — <span className="text-amber-400">NEOM, Haql & Red Sea Coast</span>
                        </h1>
                        <p className="text-xl text-violet-100 mb-8 leading-relaxed">
                            Professional private taxi across <strong>Tabuk Province</strong> — Saudi Arabia&apos;s northwest frontier. NEOM megaproject transfers, Tabuk Airport service, Haql Gulf of Aqaba beach transfers, Al Wajh, Duba, and Umluj coral paradise. Fixed rates, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Tabuk%20Region" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-violet-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">6+</div><div className="text-sm opacity-80">Cities & Zones Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">NEOM ✓</div><div className="text-sm opacity-80">Megaproject Transfers</div></div>
                        <div><div className="text-3xl font-bold mb-1">Jordan</div><div className="text-sm opacity-80">Border Crossing Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">PSAA Airport Transfers</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-violet-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities & Zones We Serve in Tabuk Region</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">From NEOM&apos;s futuristic sites to the turquoise Red Sea coast — northwest Saudi Arabia in full.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes in Tabuk Region</h2>
                        <p className="text-gray-500">NEOM transfers, airport runs, coastal routes, border crossings.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-violet-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-violet-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors flex-shrink-0" />
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
                        <p className="text-gray-500">About taxi service in Tabuk Region.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-violet-700">
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
                            { name: 'Asir Region', slug: 'asir-region', cities: 'Abha, Khamis Mushait, Bisha' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-violet-400 hover:bg-violet-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-violet-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-violet-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-violet-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Tabuk Region Taxi Now</h2>
                    <p className="text-violet-200 mb-8">NEOM transfers, Haql beach trips, border crossings — all fixed rates via WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Tabuk%20Region" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
