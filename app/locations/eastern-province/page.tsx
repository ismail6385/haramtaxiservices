import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Shield, Users, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/eastern-province' },
    title: 'Eastern Province Taxi Service | Dammam, Khobar, Jubail, Dhahran — Haram Taxi',
    description: 'Trusted taxi service across Saudi Arabia\'s Eastern Province — Dammam, Al Khobar, Dhahran, Jubail, Qatif, Al Ahsa, Ras Tanura, Khafji, Abqaiq, Salwa. Fixed rates, 24/7.',
    keywords: ['Eastern Province taxi', 'Dammam taxi', 'Khobar taxi service', 'Jubail taxi', 'Dhahran taxi', 'Qatif taxi', 'Al Ahsa taxi', 'Bahrain Causeway taxi', 'King Fahd Causeway transfer', 'Eastern Saudi Arabia taxi'],
    openGraph: {
        title: 'Eastern Province Taxi Service | Dammam, Khobar, Jubail — Haram Taxi',
        description: 'Complete taxi coverage across Saudi Arabia\'s Eastern Province. Bahrain Causeway, oil city transfers, airport service. Fixed rates 24/7.',
        url: 'https://haramtaxiservice.com/locations/eastern-province',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Eastern Province", "item": "https://haramtaxiservice.com/locations/eastern-province" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Eastern Province",
    "description": "Professional taxi service across Saudi Arabia's Eastern Province including Dammam, Al Khobar, Dhahran, Jubail, Qatif, Al Ahsa, Ras Tanura, Khafji, Abqaiq, and Salwa border.",
    "url": "https://haramtaxiservice.com/locations/eastern-province",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Eastern Province, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which Eastern Province cities do you serve?",
        answer: "We cover the full Eastern Province: Dammam (King Fahd International Airport), Al Khobar, Dhahran (Aramco HQ), Jubail Industrial City, Qatif, Al Ahsa (Al Hofuf), Ras Tanura, Khafji, Abqaiq, and Salwa (Qatar border). All routes have fixed rates confirmed before travel."
    },
    {
        question: "Do you run transfers across the King Fahd Causeway to Bahrain?",
        answer: "Yes. We offer private taxi service from any Eastern Province city across the King Fahd Causeway to Bahrain (Manama, Muharraq, Bahrain International Airport). The crossing takes approximately 30–45 minutes plus border formalities. Fixed rate confirmed before departure."
    },
    {
        question: "Can you arrange transport for Aramco or SABIC staff?",
        answer: "Absolutely. We regularly handle staff transfers for oil and gas facilities in Dhahran, Jubail Industrial City, Ras Tanura Refinery, and Abqaiq Plants. Corporate accounts with invoicing are available on request."
    },
    {
        question: "How far is Dammam Airport from Al Khobar?",
        answer: "King Fahd International Airport (DMM) is approximately 30 km from Al Khobar city center (about 30–40 minutes by taxi). We cover all Eastern Province airports including DMM for arrivals and departures."
    },
    {
        question: "Do you serve the Qatar border crossing at Salwa?",
        answer: "Yes. We provide private taxi service to and from the Salwa border crossing (Abu Samra on the Qatar side). Transfer from Dammam to Salwa is approximately 2.5 hours. Pre-booking is essential for border transfers."
    },
    {
        question: "Is there service between the Eastern Province and Riyadh?",
        answer: "Yes. Dammam to Riyadh is one of our most popular long-distance routes (approximately 3.5–4 hours via Highway 40). We also cover Khobar to Riyadh, Jubail to Riyadh, and Al Ahsa to Riyadh with fixed rates."
    }
];

const cities = [
    { name: 'Dammam', slug: 'dammam', desc: 'KFI Airport gateway, Corniche, Half Moon Bay, Riyadh transfer', emoji: '🏙️', color: 'bg-blue-800', tags: ['Airport', 'Corniche', 'Business'] },
    { name: 'Al Khobar', slug: 'khobar', desc: 'King Fahd Causeway (Bahrain), Corniche, shopping, expat hub', emoji: '🌉', color: 'bg-indigo-700', tags: ['Bahrain Transfer', 'Causeway', 'Expat'] },
    { name: 'Dhahran', slug: 'dhahran', desc: 'Aramco Headquarters, KFUPM, SANG, company compound transfers', emoji: '🛢️', color: 'bg-slate-700', tags: ['Aramco', 'Corporate', 'KFUPM'] },
    { name: 'Jubail', slug: 'jubail', desc: 'Royal Commission Industrial City, SABIC, Corniche, port transfers', emoji: '🏭', color: 'bg-cyan-800', tags: ['Industrial', 'SABIC', 'Corporate'] },
    { name: 'Qatif', slug: 'qatif', desc: 'Heritage oasis city, Tarut Island, Date farms, Dammam connection', emoji: '🌴', color: 'bg-green-800', tags: ['Heritage', 'Tarut Island', 'Oasis'] },
    { name: 'Al Ahsa (Hofuf)', slug: 'al-ahsa', desc: 'UNESCO oasis, Al Qara Mountain, Qatar & UAE border transfers', emoji: '🏔️', color: 'bg-amber-800', tags: ['UNESCO', 'Border Taxi', 'Oasis'] },
    { name: 'Ras Tanura', slug: 'ras-tanura', desc: 'Aramco refinery hub, Red Sea ferry, Tarut Bay, staff transfers', emoji: '⛽', color: 'bg-orange-800', tags: ['Aramco', 'Refinery', 'Ferry'] },
    { name: 'Khafji', slug: 'khafji', desc: 'Kuwait border crossing, Khafji Joint Operations, Neutral Zone', emoji: '🛃', color: 'bg-gray-700', tags: ['Kuwait Border', 'Border Transfer', 'Oil Field'] },
    { name: 'Abqaiq', slug: 'abqaiq', desc: "World's largest oil processing facility, Aramco Abqaiq Plants", emoji: '🏗️', color: 'bg-stone-700', tags: ['Aramco', 'Oil Plant', 'Industrial'] },
];

const routes = [
    { from: 'Dammam Airport (DMM)', to: 'Al Khobar', time: '35 min', slug: 'dammam-to-khobar' },
    { from: 'Khobar', to: 'Bahrain (Causeway)', time: '45 min', slug: 'khobar-to-bahrain' },
    { from: 'Dammam', to: 'Riyadh', time: '3.5 hrs', slug: 'dammam-to-riyadh' },
    { from: 'Jubail', to: 'Dammam', time: '45 min', slug: 'jubail-to-dammam' },
    { from: 'Al Ahsa', to: 'Salwa (Qatar Border)', time: '1.5 hrs', slug: 'al-ahsa-to-salwa' },
    { from: 'Khafji', to: 'Kuwait Border', time: '20 min', slug: 'khafji-to-kuwait-border' },
];

export default function EasternProvincePage() {
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
            <div className="bg-blue-50 border-b border-blue-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-blue-800">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Eastern Province</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Eastern Province (Al Sharqiyah)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Eastern Province Taxi Service — <span className="text-amber-400">Dammam, Khobar & Jubail</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Reliable private taxi across all of <strong>Saudi Arabia&apos;s Eastern Province</strong> — Dammam, Al Khobar, Dhahran, Jubail, Qatif, Al Ahsa, Ras Tanura, Khafji, Abqaiq, and Salwa border. Corporate, airport, and inter-city transfers with fixed rates.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20the%20Eastern%20Province" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-blue-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">9+</div><div className="text-sm opacity-80">Cities Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">Airport & Border Service</div></div>
                        <div><div className="text-3xl font-bold mb-1">3</div><div className="text-sm opacity-80">Border Crossings Served</div></div>
                        <div><div className="text-3xl font-bold mb-1">Fixed</div><div className="text-sm opacity-80">Corporate Rates</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-blue-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities We Serve in Eastern Province</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">From the Bahrain Causeway in the north to Salwa border in the south — the entire oil country covered.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes in Eastern Province</h2>
                        <p className="text-gray-500">Most-booked intercity and border transfers with fixed rates.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-blue-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
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
                        <p className="text-gray-500">About taxi service in Saudi Arabia&apos;s Eastern Province.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-blue-700">
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
                            { name: 'Asir Region', slug: 'asir-region', cities: 'Abha, Khamis Mushait, Bisha' },
                            { name: 'Tabuk Region', slug: 'tabuk-region', cities: 'Tabuk, NEOM, Haql' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Eastern Province Taxi Now</h2>
                    <p className="text-blue-200 mb-8">Corporate accounts, airport pickups, border transfers — all fixed rates via WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20the%20Eastern%20Province" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
