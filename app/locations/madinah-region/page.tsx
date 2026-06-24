import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Car, Clock, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah-region' },
    title: 'Madinah Region Taxi Service | Madinah, Yanbu, Al Ula — Haram Taxi',
    description: 'Trusted taxi service across the Madinah Region — Madinah Al-Munawwarah (PMIA Airport), Yanbu Industrial City, and Al Ula heritage site. Fixed rates, Ziyarat tours, 24/7 WhatsApp.',
    keywords: ['Madinah region taxi', 'Madinah taxi service', 'PMIA airport transfer', 'Yanbu taxi', 'Al Ula taxi', 'Madinah Ziyarat tour', 'Madinah to Makkah taxi', 'Yanbu to Madinah taxi', 'Hejaz taxi service', 'Al Ula tour transfer'],
    openGraph: {
        title: 'Madinah Region Taxi Service | Madinah, Yanbu, Al Ula — Haram Taxi',
        description: 'Covering all of Madinah Province — Prophet\'s Mosque transfers, Ziyarat tours, Yanbu airport service, Al Ula heritage tours. Fixed rates 24/7.',
        url: 'https://haramtaxiservice.com/locations/madinah-region',
        type: 'website',
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haramtaxiservice.com" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://haramtaxiservice.com/locations" },
        { "@type": "ListItem", "position": 3, "name": "Madinah Region", "item": "https://haramtaxiservice.com/locations/madinah-region" },
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Madinah Region",
    "description": "Professional taxi across Madinah Region covering Madinah Al-Munawwarah, Yanbu Industrial City, and Al Ula heritage site.",
    "url": "https://haramtaxiservice.com/locations/madinah-region",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "priceRange": "$$",
    "areaServed": { "@type": "AdministrativeArea", "name": "Madinah Region, Saudi Arabia" },
    "openingHours": "Mo-Su 00:00-24:00"
};

const faqs = [
    {
        question: "Which cities in Madinah Region do you cover?",
        answer: "We serve all of Madinah Province: Madinah Al-Munawwarah (Prince Mohammad Bin Abdulaziz Airport / PMIA), Yanbu (Prince Abdul Mohsin Airport / YNB), and Al Ula (Al Ula Airport / ULH). We also cover intercity routes connecting these cities to Makkah, Jeddah, and Tabuk."
    },
    {
        question: "Do you operate from Madinah Airport (PMIA) to the Prophet's Mosque?",
        answer: "Yes. We meet all arriving flights at Prince Mohammad Bin Abdulaziz International Airport with a name board and transfer you directly to your Madinah hotel near Masjid An-Nabawi. Transfer time is approximately 20–30 minutes depending on traffic. Available 24/7 with flight tracking."
    },
    {
        question: "Do you offer Madinah Ziyarat tours?",
        answer: "Yes — our Madinah Ziyarat tours visit Masjid Al-Qiblatayn (Mosque of Two Qiblas), Masjid Al-Ijabah, Masjid Al-Fath, Jabal Uhud, the Uhud Martyrs Cemetery, Masjid Ghamamah, Al-Baqi Cemetery, and Quba Mosque. Half-day and full-day tours available with a knowledgeable driver."
    },
    {
        question: "How long is the Madinah to Makkah taxi journey?",
        answer: "The Madinah to Makkah taxi journey takes approximately 4.5 hours via the Hijrah Highway. We include a Miqat stop at Abyar Ali (Dhul Hulaifa) at no extra charge for pilgrims wishing to enter Ihram before reaching Makkah. All fares are fixed."
    },
    {
        question: "Can you arrange transfers between Yanbu and Madinah?",
        answer: "Yes. Yanbu to Madinah is approximately 2.5 hours via the coastal highway. This route is popular for Umrah pilgrims arriving at Yanbu Port or Yanbu Airport, as well as workers at Yanbu Industrial City visiting Madinah for the weekend."
    },
    {
        question: "Do you provide Al Ula heritage tour transport?",
        answer: "Yes. Al Ula is one of Saudi Arabia's most spectacular destinations. We arrange transport from Madinah or Yanbu to Al Ula (Al Ula Airport or direct to your resort). Within Al Ula, we provide guided tour transport to Hegra (Mada'in Salih UNESCO site), Elephant Rock, Dadan, and the old town."
    }
];

const cities = [
    {
        name: 'Madinah Al-Munawwarah',
        slug: 'madinah',
        desc: "Prophet's Mosque, Ziyarat tours, PMIA airport transfers, intercity travel",
        emoji: '🕌',
        color: 'bg-teal-700',
        tags: ["Masjid Nabawi", 'Ziyarat', 'Airport'],
    },
    {
        name: 'Yanbu',
        slug: 'yanbu',
        desc: 'Industrial City, Royal Commission, Red Sea port, Madinah connection',
        emoji: '⚓',
        color: 'bg-cyan-800',
        tags: ['Industrial', 'Airport', 'Port'],
    },
    {
        name: 'Al Ula',
        slug: 'al-ula',
        desc: 'Hegra (Mada\'in Salih), Elephant Rock, Dadan, luxury resort transfers',
        emoji: '🏺',
        color: 'bg-amber-800',
        tags: ['UNESCO', 'Heritage', 'Luxury Tour'],
    },
];

const routes = [
    { from: 'Madinah Airport (PMIA)', to: 'Masjid Nabawi', time: '25 min', slug: 'madinah-airport-to-madinah' },
    { from: 'Madinah', to: 'Makkah', time: '4.5 hrs', slug: 'madinah-to-makkah' },
    { from: 'Yanbu', to: 'Madinah', time: '2.5 hrs', slug: 'yanbu-to-madinah' },
    { from: 'Madinah', to: 'Al Ula', time: '4 hrs', slug: 'madinah-to-al-ula' },
    { from: 'Madinah', to: 'Jeddah', time: '5 hrs', slug: 'madinah-to-jeddah' },
    { from: 'Al Ula', to: 'Tabuk', time: '3.5 hrs', slug: 'al-ula-to-tabuk' },
];

export default function MadinahRegionPage() {
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
            <div className="bg-teal-50 border-b border-teal-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-teal-800">
                    <Link href="/" className="hover:underline">Home</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <Link href="/locations" className="hover:underline">Locations</Link>
                    <span className="mx-2 opacity-40">/</span>
                    <span className="font-semibold">Madinah Region</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            Saudi Arabia → Madinah Region (Al Madinah Al Munawwarah)
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Madinah Region Taxi Service — <span className="text-amber-400">Madinah, Yanbu & Al Ula</span>
                        </h1>
                        <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                            Trusted private taxi across all of <strong>Madinah Province</strong> — the Prophet&apos;s Mosque city, Yanbu Industrial Port, and Al Ula heritage wonder. Fixed rates, Ziyarat tours, and 24/7 WhatsApp booking.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah%20Region" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick stats */}
            <section className="bg-teal-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">3</div><div className="text-sm opacity-80">Cities Covered</div></div>
                        <div><div className="text-3xl font-bold mb-1">4.5 hrs</div><div className="text-sm opacity-80">Madinah to Makkah</div></div>
                        <div><div className="text-3xl font-bold mb-1">Miqat ✓</div><div className="text-sm opacity-80">Stop at Abyar Ali</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-80">Ziyarat Service</div></div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-black text-teal-700 uppercase tracking-widest mb-3">Service Area</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cities We Serve in Madinah Region</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">From the City of the Prophet to Red Sea industry to ancient rock-cut tombs — Madinah Province in full.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cities.map((city) => (
                            <Link key={city.slug} href={`/locations/${city.slug}`} className="group block">
                                <div className={`${city.color} text-white p-8 rounded-2xl hover:scale-[1.02] transition-all shadow-md h-full`}>
                                    <div className="text-4xl mb-4">{city.emoji}</div>
                                    <h3 className="text-2xl font-bold mb-3">{city.name}</h3>
                                    <p className="text-sm opacity-85 mb-5 leading-relaxed">{city.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-5">
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Routes in Madinah Region</h2>
                        <p className="text-gray-500">Key pilgrim, tourist, and intercity routes with fixed rates.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-teal-400 hover:shadow-md transition-all flex items-center gap-4">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Car className="w-5 h-5 text-teal-700" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm truncate">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{r.time}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0" />
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
                        <p className="text-gray-500">About taxi service in the Madinah Region.</p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-xl px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline hover:text-teal-700">
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
                            { name: 'Riyadh Region', slug: 'riyadh-region', cities: 'Riyadh, Kharj, Majmaah' },
                            { name: 'Eastern Province', slug: 'eastern-province', cities: 'Dammam, Khobar, Jubail' },
                            { name: 'Asir Region', slug: 'asir-region', cities: 'Abha, Khamis Mushait, Bisha' },
                            { name: 'Tabuk Region', slug: 'tabuk-region', cities: 'Tabuk, NEOM, Haql' },
                            { name: 'All Saudi Locations', slug: '', cities: 'Browse 50+ cities' },
                        ].map((province) => (
                            <Link
                                key={province.slug}
                                href={province.slug ? `/locations/${province.slug}` : '/locations'}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all group"
                            >
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-700 transition-colors">{province.name}</p>
                                    <p className="text-xs text-gray-500">{province.cities}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-teal-900 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Book Your Madinah Region Taxi Now</h2>
                    <p className="text-teal-200 mb-8">Ziyarat tours, PMIA airport pickups, Makkah transfers — all confirmed via WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Madinah%20Region" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg flex items-center gap-2 mx-auto shadow-xl">
                            <WhatsAppIcon className="w-5 h-5" />WhatsApp Us Now
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}
