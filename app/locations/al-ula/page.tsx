import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import CustomerUpdates from '@/components/CustomerUpdates';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula' },
    title: 'AlUla Taxi | Hegra, Elephant Rock & Airport Transfers — Private Car Service',
    description: 'Private taxi in AlUla — ULH Airport pickups, Hegra (Madain Saleh) UNESCO transfers, Elephant Rock, Dadan, Old Town. No Uber in AlUla — pre-book essential. Fixed rate 24/7.',
    keywords: ['AlUla taxi', 'Al Ula taxi', 'Hegra taxi transfer', 'Madain Saleh taxi', 'ULH airport transfer', 'Elephant Rock taxi', 'AlUla private car', 'AlUla transport'],
    openGraph: {
        title: 'AlUla Taxi — Private Transfers, Hegra Tours & Heritage Valley Transport',
        description: 'No Uber in AlUla — pre-book a private taxi. ULH Airport, Hegra UNESCO, Elephant Rock, Dadan, Old Town. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ula',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — AlUla",
    "description": "Private taxi and transfer service in AlUla — ULH Airport transfers, Hegra day trips, Elephant Rock, Dadan, AlUla Old Town, and intercity routes to Madinah, Tabuk, and Jeddah.",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "address": { "@type": "PostalAddress", "addressLocality": "AlUla", "addressRegion": "Madinah Province", "addressCountry": "SA" },
    "url": "https://haramtaxiservice.com/locations/al-ula",
    "areaServed": "AlUla",
    "priceRange": "$$"
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "Is there Uber or Careem in AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "No — Uber and Careem have virtually no coverage in AlUla. Pre-booking a private taxi is essential for all transport in and around AlUla, including airport pickups, heritage site visits, and hotel transfers." } },
        { "@type": "Question", "name": "How do I get from Madinah to AlUla?", "acceptedAnswer": { "@type": "Answer", "text": "Private taxi is the main option — no rail link exists. Madinah to AlUla is 340km, approximately 3.5 hours north via Route 65. We pick up from all Madinah hotels and deliver to any AlUla resort or heritage site." } },
        { "@type": "Question", "name": "How far is Hegra from AlUla city?", "acceptedAnswer": { "@type": "Answer", "text": "Hegra (Madain Saleh) is approximately 20km north of AlUla town centre — about 20 minutes by taxi. No public transport serves Hegra." } },
    ]
} as const;

const faqs = [
    { question: "Is there Uber or Careem in AlUla?", answer: "No — Uber and Careem have virtually no coverage in AlUla. Pre-booking a private taxi is essential for all transport in and around AlUla. Without a pre-booked car, you can be stranded between the scattered heritage sites, resorts, and the airport." },
    { question: "How do I get from Madinah to AlUla?", answer: "Private taxi is the primary option — there is no rail connection. Madinah to AlUla is 340km north via Route 65, approximately 3–3.5 hours. We pick up from all Madinah hotels and deliver to any AlUla resort, Hegra, Dadan, or the Old Town." },
    { question: "How far is Hegra from AlUla city?", answer: "Hegra (Madain Saleh) is approximately 20km north of AlUla town centre — about 20 minutes by private taxi. No buses or public transport serve Hegra. All visits require a pre-booked vehicle — driver waits at the site while you tour." },
    { question: "How far is Elephant Rock from AlUla?", answer: "Elephant Rock (Jabal AlFil) is approximately 15km from AlUla city — about 15 minutes by taxi. The site has a sunset market and evening food stalls — coordinate your return pickup time when booking." },
    { question: "What is the best way to get around AlUla?", answer: "Pre-booked private taxi — ideally a full-day driver who waits between sites. The main attractions (Hegra, Elephant Rock, Dadan, Jabal Ikmah, Old Town) are 5–25km apart and require vehicle transport. Attempting to visit independently without a pre-booked driver is impractical." },
    { question: "How long should I spend in AlUla?", answer: "Minimum 2–3 days: Day 1 Hegra + Dadan, Day 2 Old Town + Jabal Ikmah + Elephant Rock sunset. 4–5 days allows Maraya, full Hegra exploration, and the Ashar Valley seasonal events. A day trip from Madinah is possible but rushed." },
    { question: "What is the AlUla airport code?", answer: "ULH — Prince Abdul Majeed bin Abdulaziz Airport. Airlines: Saudia, flyadeal, flynas. Domestic routes to Riyadh (RUH), Jeddah (JED), and Madinah (MED). The airport is approximately 15km from AlUla city centre." },
    { question: "Do I need to pre-book Hegra tickets?", answer: "Yes — Hegra has limited daily visitor numbers. Book through the Experience AlUla app (alula.sa) at least 1–2 weeks in advance during peak season (October–April). Peak months (December–January, Winter at Tantora) can sell out 3–4 weeks ahead. Morning slots give better photography light." },
    { question: "How far is AlUla from Tabuk?", answer: "Approximately 280km southeast of Tabuk — about 3 hours by taxi on Route 375 (the Hejaz highway south). Tabuk Airport (TUU) is the nearest international airport to AlUla." },
    { question: "How far is AlUla from Jeddah?", answer: "Approximately 680km southeast — 7 hours by private taxi via the main Hejaz highway. KAIA Jeddah Airport (JED) is the most popular international gateway for AlUla tourism. We offer direct Jeddah–AlUla transfers." },
    { question: "What is Winter at Tantora?", answer: "Winter at Tantora is AlUla's annual arts and music festival — running approximately December to March. It includes concerts at the Maraya (world's largest mirrored building), heritage performances, hot air balloon rides, and the wider AlUla Arts Festival programme. This is peak season — book transport well in advance." },
];

const districts = [
    { name: 'Hegra (Madain Saleh)', slug: 'hegra', desc: "Saudi Arabia's first UNESCO World Heritage Site — 111 Nabataean rock-cut tombs, 20km north of AlUla town. Pre-book entry tickets.", color: 'bg-rose-50 border-rose-200', badge: 'UNESCO #1 · Nabataean' },
    { name: 'Elephant Rock', slug: 'elephant-rock', desc: "Jabal AlFil — AlUla's most iconic natural formation. 52-metre sandstone arch shaped like an elephant, sunset market, 15km from city.", color: 'bg-orange-50 border-orange-200', badge: 'Natural Arch · Sunset' },
    { name: 'Dadan Ancient City', slug: 'dadan', desc: 'Capital of the Dadanite and Lihyanite kingdoms (6th–4th century BCE). Rock-cut lion tombs on the cliff face. One of Arabia\'s oldest cities.', color: 'bg-teal-50 border-teal-200', badge: 'Pre-Islamic · 2500 BCE' },
    { name: 'AlUla Old Town', slug: 'old-town', desc: '900-year-old mud-brick city — 800 houses, a mosque, and a market abandoned in 1983. Partially restored and the most evocative heritage site in the valley.', color: 'bg-stone-50 border-stone-300', badge: '900 Years · Mud-Brick' },
    { name: 'Jabal Ikmah', slug: 'jabal-ikmah', desc: "AlUla's open-air library — thousands of ancient inscriptions in Nabataean, Lihyanite, Minaic, and Dadanite scripts carved into red sandstone cliff faces.", color: 'bg-blue-50 border-blue-200', badge: 'Inscriptions · Sacred Valley' },
    { name: 'AlUla Airport (ULH)', slug: 'al-ula-airport', desc: 'Prince Abdul Majeed bin Abdulaziz Airport — IATA: ULH. Saudia, flyadeal, flynas. Pre-book your airport taxi — no taxis at arrivals.', color: 'bg-slate-50 border-slate-200', badge: 'IATA: ULH · 15km' },
];

const travelTimes = [
    { destination: 'Madinah', distance: '340 km', time: '3.5 hrs' },
    { destination: 'Tabuk', distance: '280 km', time: '3 hrs' },
    { destination: 'Jeddah', distance: '680 km', time: '7 hrs' },
    { destination: 'Riyadh', distance: '1,100 km', time: '11 hrs' },
    { destination: 'Hail', distance: '720 km', time: '7 hrs' },
    { destination: 'Yanbu', distance: '520 km', time: '5 hrs' },
    { destination: 'NEOM', distance: '450 km', time: '4.5 hrs' },
    { destination: 'Hegra (Madain Saleh)', distance: '20 km', time: '20 min' },
    { destination: 'Elephant Rock', distance: '15 km', time: '15 min' },
    { destination: 'AlUla Old Town', distance: '5 km', time: '5 min' },
];

export default function AlUlaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">AlUla</span>
                </div>
            </div>

            <section className="bg-amber-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">AlUla · Saudi Arabia&apos;s First UNESCO Site · Nabataean Heritage · Sandstone Valley</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">AlUla Taxi — Private Transfers, Hegra Tours &amp; Heritage Valley Transport</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Private taxi in <strong>AlUla</strong> — <strong>ULH Airport pickups, Hegra (Madain Saleh) transfers, Elephant Rock, Dadan ancient city</strong>, and the 900-year Old Town. No Uber in AlUla — pre-book is essential. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20AlUla" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book AlUla Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">Saudi&apos;s First World Heritage Site</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">ULH</div><div className="text-sm text-gray-600">Regional Airport</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">Hegra</div><div className="text-sm text-gray-600">111 Nabataean Tombs</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">24/7</div><div className="text-sm text-gray-600">Pre-Book Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">AlUla — Heritage Sites &amp; Taxi Transfers</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">All major AlUla sites require private transport — no public buses, no Uber. Select a destination for dedicated transfer information.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/al-ula/${d.slug}`} className={`block p-6 rounded-2xl border ${d.color} hover:shadow-md transition-shadow`}>
                                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">{d.badge}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{d.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                                <div className="mt-4 text-amber-700 text-sm font-medium">Book taxi →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-amber-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla — Travel Times from the Valley</h2>
                    <div className="overflow-x-auto rounded-2xl border border-amber-200">
                        <table className="w-full text-sm">
                            <thead className="bg-amber-900 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-center font-semibold">Taxi Time</th>
                                    <th className="px-6 py-4 text-center font-semibold">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-amber-100">
                                {travelTimes.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{r.destination}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.distance}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4 text-center">
                                            <Link href="/booking" className="text-amber-700 hover:text-amber-900 font-medium text-xs">Book →</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-amber-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Travellers Say About AlUla Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Sarah K.', origin: 'Madinah', text: 'Drove us Madinah to AlUla and waited at Hegra for 3 hours. Perfectly organised. The driver knew every site.' },
                            { name: 'Ahmed R.', origin: 'Jeddah', text: 'Booked the full day — Hegra, Dadan, Elephant Rock, Old Town. Not a single problem. Driver even helped with the Experience AlUla app.' },
                            { name: 'Fatimah M.', origin: 'Riyadh', text: 'ULH Airport pickup was seamless — driver waiting at arrivals with my name. Dropped directly at the resort. Highly recommend.' },
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-amber-200">
                                <p className="text-sm text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                                <div className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· from {t.origin}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-amber-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your AlUla Transfer</h2>
                    <p className="mb-8 opacity-90">No Uber in AlUla — pre-book a private taxi. Airport, Hegra, Elephant Rock, Dadan. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20AlUla" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book AlUla Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 bg-white">
                <CustomerUpdates location="AlUla" />
            </div>
            <div className="py-8 bg-white">
                <NearbyCities currentCity="AlUla" />
            </div>
        </div>
    );
}
