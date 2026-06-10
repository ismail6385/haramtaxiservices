import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah' },
    title: 'Buraidah Taxi Service 2026 | Qassim Airport, Dates Market & Unaizah',
    description: 'Taxi in Buraidah — Prince Naif Airport (ELQ), Buraidah Dates Market (world\'s largest), Unaizah, Ar Rass, Al Asyah. Capital of Qassim Region. Fixed rates, 24/7.',
    keywords: ['Buraidah taxi', 'Buraydah taxi', 'Qassim taxi', 'Buraidah airport taxi', 'ELQ airport taxi', 'Buraidah dates market taxi', 'Unaizah taxi', 'Riyadh to Buraidah taxi'],
    openGraph: {
        title: 'Buraidah Taxi Service — Qassim Airport, Dates Market & Unaizah',
        description: 'Professional taxi in Buraidah. Airport transfers, dates market, Unaizah, Riyadh transfers. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/buraidah',
        type: 'website',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Buraidah",
    "description": "Professional taxi service in Buraidah — ELQ Airport, Dates Market, Unaizah, Riyadh transfers.",
    "url": "https://haramtaxiservice.com/locations/buraidah",
    "telephone": "+966575806733",
    "areaServed": "Qassim Region, Saudi Arabia",
    "address": { "@type": "PostalAddress", "addressLocality": "Buraidah", "addressCountry": "SA" }
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How do I get from Buraidah Airport to the city?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-book a taxi via WhatsApp with your flight number. Our driver meets you at Prince Naif Airport (ELQ) arrivals with a name board. Transfer to Buraidah city centre (18km, 20 min), Unaizah, or any Qassim destination. Flight tracked, fixed rate." } },
        { "@type": "Question", "name": "How far is Buraidah from Riyadh?", "acceptedAnswer": { "@type": "Answer", "text": "Buraidah is approximately 330km north of Riyadh — about 3 hours by private taxi on Highway 65. One of Saudi Arabia's most-driven intercity routes, heavily used by business travellers and families." } },
    ]
} as const;

const districts = [
    { name: 'Buraidah Airport (ELQ)', href: '/locations/buraidah/buraidah-airport', color: 'bg-slate-700', desc: 'Prince Naif Airport, arrivals, name board' },
    { name: 'Buraidah Dates Market', href: '/locations/buraidah/buraydah-dates-market', color: 'bg-amber-700', desc: "World's largest dates market, summer festival" },
    { name: 'Unaizah', href: '/locations/buraidah/unaizah', color: 'bg-green-700', desc: 'Twin city, old souq, Al Ulayya district' },
    { name: 'Al Qassim Mall Area', href: '/locations/buraidah/al-qassim-mall', color: 'bg-blue-700', desc: 'Shopping, hotels, commercial centre' },
    { name: 'Ar Rass', href: '/locations/buraidah/ar-rass', color: 'bg-orange-700', desc: 'Historic town, 110km south of Buraidah' },
    { name: 'Al Asyah', href: '/locations/buraidah/al-asyah', color: 'bg-stone-700', desc: 'Heritage village, pottery, sandstone cliffs' },
];

const faqs = [
    { question: "Is Buraidah the same as Buraydah?", answer: "'Buraydah' is the traditional Arabic pronunciation; 'Buraidah' is a common anglicised spelling. Both refer to the same city — the capital of Qassim Region and Saudi Arabia's date-production capital. The airport (IATA: ELQ) is officially Prince Naif bin Abdulaziz Airport." },
    { question: "How far is Buraidah from Riyadh?", answer: "Buraidah is approximately 330km north of Riyadh — about 3 hours by private taxi on Highway 65. It is one of Saudi Arabia's most frequently driven intercity routes, heavily used by government employees, business travellers, and families." },
    { question: "What is Buraidah famous for?", answer: "Buraidah is Saudi Arabia's date capital — the city hosts the world's largest annual dates market (Souq Al-Tamr) during the August–September harvest season, attracting buyers from across the Gulf and beyond. Qassim Region produces over 100 varieties of dates. Buraidah is also known as one of Saudi Arabia's most conservative and traditionally Najdi cities." },
    { question: "How do I get from Buraidah to Unaizah?", answer: "Unaizah is 25km south of Buraidah — about 25 minutes by taxi. The two cities together form the Qassim urban agglomeration, sharing an airport (ELQ), university (Qassim University), and much commercial infrastructure. We serve the Buraidah–Unaizah corridor as a standard short transfer." },
    { question: "What is the Buraidah Dates Festival?", answer: "The Buraidah Dates Festival (Mahrajan Al-Tamr) is held annually in August–September during the date harvest season. It is the world's largest dates trading event — thousands of date varieties, tonnes of fresh product auctioned daily, cultural events, and traditional Najdi crafts. The festival runs for several weeks and attracts visitors from across Saudi Arabia and the Gulf." },
    { question: "Are there app taxis in Buraidah?", answer: "Careem and Uber operate in Buraidah city. For ELQ Airport transfers, inter-city routes (to Riyadh, Madinah, or Hail), and out-of-city destinations (Ar Rass, Al Asyah), pre-booked private taxis are recommended." },
    { question: "How far is Buraidah from Madinah?", answer: "Buraidah to Madinah is approximately 360km west — about 3.5 hours by taxi. The route crosses the central Najd plateau before descending toward the Hejaz. A popular route for Qassim residents making Ziyarah to Masjid al-Nabawi." },
    { question: "What is special about Qassim Region dates?", answer: "Qassim Region, centred on Buraidah and Unaizah, is the world's most productive date-growing region. Over 30 million date palms in Qassim produce more than 100 varieties — from the prized Sukkari (soft, caramel-sweet, Qassim's signature date) to Rutab, Khalas, and dozens of others. Sukkari dates from Qassim are considered the finest in the world." },
    { question: "Can I get a taxi from Buraidah to Hail?", answer: "Buraidah to Hail is approximately 310km northwest — about 3 hours by private taxi. Hail is the nearest major city northwest of Buraidah on the desert highway." },
    { question: "What is the weather like in Buraidah?", answer: "Buraidah has a continental desert climate — hot summers (40–48°C in July–August) and surprisingly cold winters (0–5°C at night, December–January frost is common). Spring (March–April) and autumn (October–November) are the most pleasant seasons. The date harvest season (August–September) coincides with peak summer heat." },
    { question: "Is Buraidah Airport (ELQ) far from the city?", answer: "Prince Naif Airport (ELQ) is approximately 18km north of Buraidah city centre — about 20 minutes by taxi. It also serves Unaizah (25km from the airport)." },
];

export default function BuraidahPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Buraidah</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Buraidah · Qassim Capital · World&apos;s Dates Capital · 330km from Riyadh</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Buraidah Taxi Service — Qassim Airport, Dates Market &amp; Unaizah</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Professional taxi in <strong>Buraidah</strong> — capital of Qassim Region. <strong>ELQ Airport transfers</strong>, world&apos;s largest <strong>Dates Market (Sukkari harvest)</strong>, Unaizah twin city, and the <strong>Riyadh–Buraidah highway</strong>. Fixed rates, 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Buraidah" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />Book Buraidah Taxi
                                </Button>
                            </a>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Riyadh%20to%20Buraidah%20taxi" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    Riyadh → Buraidah Transfer
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">330 km</div><div className="text-sm text-gray-600">from Riyadh</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">ELQ</div><div className="text-sm text-gray-600">Prince Naif Airport</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Sukkari</div><div className="text-sm text-gray-600">World&apos;s Best Dates</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">24/7</div><div className="text-sm text-gray-600">Fixed Rate Service</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Buraidah Districts &amp; Destinations</h2>
                    <p className="text-gray-500 text-center mb-10">Select your destination for detailed taxi information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {districts.map((d, i) => (
                            <Link key={i} href={d.href} className="group block">
                                <div className={`${d.color} text-white p-6 rounded-2xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02]`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <MapPin className="w-5 h-5 opacity-70" />
                                        <span className="text-xs opacity-60 uppercase tracking-wider">Qassim</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                                    <p className="text-sm opacity-80">{d.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Buraidah Travel Times &amp; Routes</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-amber-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">From Buraidah To</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'Prince Naif Airport (ELQ)', dist: '18 km', time: '20 min', note: 'Serves Buraidah & Unaizah' },
                                    { dest: 'Unaizah City', dist: '25 km', time: '25 min', note: 'Twin city, frequent transfers' },
                                    { dest: 'Ar Rass', dist: '110 km', time: '1 hr', note: 'Historic Qassim town' },
                                    { dest: 'Al Asyah', dist: '90 km', time: '55 min', note: 'Heritage village, pottery' },
                                    { dest: 'Riyadh', dist: '330 km', time: '3 hrs', note: 'Most popular intercity route' },
                                    { dest: 'Madinah', dist: '360 km', time: '3.5 hrs', note: 'West across Najd plateau' },
                                    { dest: 'Hail', dist: '310 km', time: '3 hrs', note: 'Northwest desert highway' },
                                    { dest: 'Jeddah', dist: '830 km', time: '8 hrs', note: 'Long-distance west route' },
                                    { dest: 'Makkah', dist: '860 km', time: '8.5 hrs', note: 'Via Madinah or Taif' },
                                    { dest: 'Tabuk', dist: '730 km', time: '7 hrs', note: 'Long-distance northwest' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-amber-700">{row.time}</td>
                                        <td className="px-6 py-4 text-gray-500 text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Haram Taxi in Buraidah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Riyadh–Buraidah Route Specialists', desc: "The 330km Riyadh–Buraidah highway is one of Saudi Arabia's most-driven intercity routes. Our drivers cover this route daily — fast, comfortable, fixed rate. One of the most frequently booked transfers on our network." },
                            { title: 'Dates Festival Season Ready', desc: "August–September during the Buraidah Dates Festival (Mahrajan Al-Tamr) is Buraidah's busiest period — hotels fill up, app taxis are scarce, and airport arrivals spike. Pre-booking guarantees your transfer during peak festival season." },
                            { title: 'Buraidah–Unaizah Corridor', desc: "The 25km Buraidah–Unaizah corridor is served multiple times daily. Hotel to hotel, airport to city, souq to souq — we cover the full twin-city area. Single fixed rate for the corridor, no meter surprises." },
                        ].map((s, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Buraidah Key Sites &amp; Landmarks</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Souq Al-Tamr (Dates Market)', note: "World's largest — August/September festival" },
                            { name: 'Prince Naif Airport (ELQ)', note: 'Domestic airport serving Qassim Region' },
                            { name: 'Unaizah Old Souq', note: 'Heritage market, traditional goods' },
                            { name: 'Qassim University', note: 'One of Saudi\'s largest universities' },
                            { name: 'Al Asyah Heritage Village', note: 'Pottery, sandstone landscape, old Najdi architecture' },
                            { name: 'Ar Rass', note: 'Historic Qassim town, old fort' },
                            { name: 'Buraidah Souq', note: 'Central market, gold, spices, traditional goods' },
                            { name: 'Al Ulayya District (Unaizah)', note: 'Historic old quarter of Unaizah' },
                            { name: 'Qassim Date Farms', note: '30M+ date palms, 100+ varieties' },
                            { name: "King Fahd Road", note: 'Main commercial spine of Buraidah' },
                            { name: 'Buraidah Corniche Park', note: 'City park, evening walks, families' },
                            { name: 'Sukkari Farm Visits', note: 'Farm-direct Sukkari dates Aug–Sep' },
                        ].map((l, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                                <div className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{l.name}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{l.note}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Buraidah Taxi Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { title: 'ELQ Airport Transfer', desc: 'Meet & greet, flight tracked, name board, 24/7' },
                            { title: 'Riyadh to Buraidah', desc: '330km, 3 hours, most popular intercity route' },
                            { title: 'Buraidah to Madinah', desc: '360km west, Ziyarah transfers' },
                            { title: 'Unaizah Transfers', desc: '25km corridor, hotels, souq, university' },
                            { title: 'Dates Festival Season', desc: 'August–September peak season ready' },
                            { title: 'Ar Rass & Al Asyah', desc: 'Heritage sites, 90–110km from Buraidah' },
                            { title: 'Buraidah to Hail', desc: '310km northwest, 3 hours' },
                            { title: 'Group & Family', desc: 'GMC and Hiace for large groups' },
                        ].map((s, i) => (
                            <a key={i} href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Buraidah" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 hover:bg-amber-50 border border-gray-100 hover:border-amber-200 p-5 rounded-xl transition-all">
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                                <p className="text-xs text-gray-500">{s.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Buraidah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-amber-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Khalid A.', loc: 'Riyadh to Buraidah', stars: 5, text: 'Drive every month for work. Consistent, comfortable, driver always on time at the Riyadh pickup. Wouldn\'t use anything else for this route.' },
                            { name: 'Mohammed F.', loc: 'ELQ Airport Pickup', stars: 5, text: 'Flight was 45 minutes late. Driver was still there with my name board, no complaint. That\'s the kind of reliability you need when travelling.' },
                            { name: 'Hessa Al-Q.', loc: 'Buraidah Dates Festival', stars: 5, text: 'During the dates festival, finding a taxi is nearly impossible. Pre-booked this service and had zero stress. Highly recommend during the festival season.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-amber-100 text-sm mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                                <div className="text-white font-semibold text-sm">{r.name}</div>
                                <div className="text-amber-300 text-xs">{r.loc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Buraidah Taxi</h2>
                    <p className="text-gray-500 mb-8">Airport, Riyadh highway, dates festival — fixed rate confirmed on WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Buraidah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Buraidah Taxi Now
                        </Button>
                    </a>
                </div>
            </section>

            <CustomerUpdates location="Buraidah" />
            <NearbyCities currentCity="Buraidah" />
        </div>
    );
}
