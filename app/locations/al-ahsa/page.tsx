import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import CustomerUpdates from '@/components/CustomerUpdates';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa' },
    title: 'Al-Ahsa Taxi | UNESCO Oasis, Al-Qara Mountain Caves, Jawatha Mosque & HOF Airport',
    description: 'Private taxi in Al-Ahsa (Hofuf) — Al-Qara Mountain caves, Jawatha Mosque (oldest in Eastern Arabia), Qasr Ibrahim, UNESCO Oasis, Al-Uqair coast, HOF Airport. Fixed rate 24/7.',
    keywords: ['Al-Ahsa taxi', 'Hofuf taxi', 'Al-Qara Mountain taxi', 'Jawatha Mosque taxi', 'UNESCO oasis Al-Ahsa taxi', 'HOF airport taxi', 'Al-Ahsa airport transfer', 'Al-Uqair taxi'],
    openGraph: {
        title: 'Al-Ahsa Taxi — UNESCO Oasis, Al-Qara Mountain & HOF Airport',
        description: 'Private taxi in Al-Ahsa. UNESCO oasis, Al-Qara caves, Jawatha Mosque. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Al-Ahsa",
    "description": "Private taxi in Al-Ahsa (Hofuf) — UNESCO Oasis, Al-Qara Mountain caves, Jawatha Mosque, Qasr Ibrahim, Al-Uqair coast, HOF Airport, and intercity routes to Riyadh, Dammam, and Qatar border.",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Al-Ahsa", "addressRegion": "Eastern Province", "addressCountry": "SA" },
    "url": "https://haramtaxiservice.com/locations/al-ahsa",
    "areaServed": "Al-Ahsa",
    "priceRange": "$$"
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "What is Al-Ahsa famous for?", "acceptedAnswer": { "@type": "Answer", "text": "Al-Ahsa (Al-Hasa, Hofuf) is famous for: the Al-Ahsa Oasis (UNESCO World Heritage 2018 — the largest oasis in the world with 2.5 million date palms and 32 springs); Al-Qara Mountain (a sandstone mountain with cool cave networks — 18°C inside even when it is 45°C outside); Jawatha Mosque (one of the oldest mosques in the Arabian Peninsula, 7th century CE); Qasr Ibrahim (16th-century Ottoman fortress); and Al-Uqair (ancient port ruins on the Arabian Gulf coast)." } },
        { "@type": "Question", "name": "Is there Uber in Al-Ahsa?", "acceptedAnswer": { "@type": "Answer", "text": "Uber and Careem have limited coverage in Al-Ahsa, particularly for HOF Airport pickups, Al-Qara Mountain, Al-Uqair coast, and intercity transfers. Pre-booked private taxi is the recommended option for airport transfers and heritage site visits." } },
        { "@type": "Question", "name": "How far is Al-Ahsa from Riyadh and Dammam?", "acceptedAnswer": { "@type": "Answer", "text": "Riyadh to Al-Ahsa: approximately 350km, 3.5–4 hours. Dammam to Al-Ahsa: approximately 135km, 1.5 hours. Al-Ahsa is a popular weekend destination from both cities — particularly for the Al-Qara Mountain caves (cool relief from Eastern Province summers) and the UNESCO oasis." } },
    ]
} as const;

const faqs = [
    { question: "What is Al-Ahsa famous for?", answer: "Al-Ahsa (Al-Hasa, Hofuf) is famous for: the Al-Ahsa Oasis (UNESCO World Heritage 2018 — the largest oasis in the world with 2.5 million date palms and 32 natural springs); Al-Qara Mountain (a sandstone mountain with cave systems inside — 18°C year-round even when it is 45°C outside); Jawatha Mosque (one of the oldest mosques in the Arabian Peninsula, built in the early Islamic period); Qasr Ibrahim (16th-century Ottoman fortress in central Hofuf); and Al-Uqair (ancient coastal port ruins on the Arabian Gulf)." },
    { question: "What is Al-Qara Mountain?", answer: "Al-Qara Mountain (Jabal Al-Qara) is the most unusual attraction in Al-Ahsa — a sandstone mountain approximately 15km from Hofuf that contains extensive cave networks inside. The caves maintain a temperature of approximately 18°C year-round regardless of the outside temperature. In summer, when Al-Ahsa regularly reaches 45–50°C, walking into Al-Qara Mountain is like stepping into air conditioning provided by nature. The caves are illuminated and have a well-developed visitor path." },
    { question: "What is Jawatha Mosque?", answer: "Jawatha Mosque is located in Al-Kilabiyah village in Al-Ahsa — one of the oldest mosques in the Arabian Peninsula, built in the first year of the Hijra calendar (7th century CE). According to historical accounts, it is the first mosque in which Jumu'ah (Friday) prayers were held outside Makkah after the Prophet's migration. The current structure is a restoration of the original site. The mosque is approximately 25km from central Hofuf." },
    { question: "What is the Al-Ahsa Oasis UNESCO listing?", answer: "The Al-Ahsa Oasis was inscribed on the UNESCO World Heritage List in 2018 as a cultural landscape. The oasis covers approximately 85,000 hectares and contains 2.5 million date palms, 32 natural springs, gardens, canals, qanats (underground water channels), and archaeological remains spanning pre-Islamic through modern periods. It is classified by UNESCO as the largest oasis in the world. The oasis is a living landscape — still actively farmed." },
    { question: "Is there Uber in Al-Ahsa?", answer: "Uber and Careem have limited coverage in Al-Ahsa — particularly for HOF Airport, Al-Qara Mountain, Al-Uqair coast, and intercity transfers. Pre-booked private taxi is the recommended option." },
    { question: "How far is Al-Ahsa from Dammam and Riyadh?", answer: "Dammam to Al-Ahsa: approximately 135km, 1.5 hours (via the direct highway through Abqaiq). Riyadh to Al-Ahsa: approximately 350km, 3.5–4 hours. Al-Ahsa is a popular weekend destination from both cities." },
    { question: "What is Al-Uqair?", answer: "Al-Uqair is an ancient port on the Arabian Gulf coast approximately 80km east of Hofuf. Historically it was one of the main ports for the Al-Ahsa region — a landing point for Persian Gulf trade. The site includes ruins of an ancient settlement, a fort, and what remains of the old port structures. In 1922, the Uqair Protocol was signed here, establishing the borders between Saudi Arabia, Iraq, and Kuwait. Today it is also a quiet beach with fine sand on the Arabian Gulf." },
    { question: "What is Qasr Ibrahim?", answer: "Qasr Ibrahim (Ibrahim Palace) is a 16th-century Ottoman fortress in the centre of Hofuf. Built around 1555 CE when the Ottomans held the Al-Ahsa region, it served as an administrative and military garrison. The palace has been restored and is open to visitors. It includes the Al-Khamis Mosque (one of the oldest mosques in Al-Ahsa) within its walls. A well-preserved example of Ottoman military architecture in Arabia." },
    { question: "What are the best Al-Ahsa dates?", answer: "Al-Ahsa Province is the most important date-producing region in Saudi Arabia — growing over 100 varieties from 2.5 million palm trees. The most prized varieties: Khalas (the most famous Al-Ahsa date — soft, honey-caramel), Shalabi (sweet, medium), and Rothan. The harvest season is July–October, when fresh Rutab dates are sold directly from farms and at the traditional markets. Al-Ahsa dates are considered among the finest in the world." },
    { question: "How do I get from HOF Airport to Al-Ahsa city?", answer: "Al-Ahsa International Airport (HOF) is approximately 30km from central Hofuf — about 35 minutes by taxi. Pre-book a transfer; on-demand taxis at HOF can be limited. Our driver meets you at arrivals with a name board, fixed rate confirmed in advance." },
    { question: "Can I do a day trip to Al-Ahsa from Dammam?", answer: "Yes — Dammam to Al-Ahsa is 135km (1.5 hours). A day trip covers: Al-Qara Mountain (1.5–2 hours), Qasr Ibrahim (45 minutes), Jawatha Mosque (30 minutes), and a traditional market stop. Return to Dammam by evening. Your driver knows the optimal routing." },
];

const districts = [
    { name: 'Al-Qara Mountain', slug: 'al-qara-mountain', desc: 'Sandstone mountain with cave networks — 18°C inside year-round. Natural air conditioning in one of the hottest cities in the world. 15km from Hofuf.', color: 'bg-teal-50 border-teal-200', badge: 'Caves · 18°C Year-Round · 15km' },
    { name: 'Jawatha Mosque', slug: 'jawatha-mosque', desc: "One of the oldest mosques in the Arabian Peninsula — 7th century CE, first Jumu'ah outside Makkah. Al-Kilabiyah village, 25km from Hofuf. Active place of worship.", color: 'bg-stone-50 border-stone-200', badge: '7th Century CE · Oldest in East Arabia' },
    { name: 'Qasr Ibrahim', slug: 'qasr-ibrahim', desc: '16th-century Ottoman fortress in central Hofuf. Garrison and administrative centre. Includes Al-Khamis Mosque. 5km from city centre — most accessible heritage site.', color: 'bg-amber-50 border-amber-200', badge: 'Ottoman Fortress · City Centre · 5km' },
    { name: 'Al-Qaysariyya Market', slug: 'al-qaysariyya-market', desc: 'Traditional covered souq in Hofuf — Al-Ahsa weaving (UNESCO intangible heritage), dates, honey, silver, spices, Asiri crafts. Most atmospheric market in the Eastern Province.', color: 'bg-orange-50 border-orange-100', badge: 'Traditional Souq · UNESCO Weaving' },
    { name: 'Al-Uqair Coast', slug: 'al-uqair', desc: 'Ancient port ruins on the Arabian Gulf — 80km east of Hofuf. 1922 border treaty site. Isolated beach, fort ruins, pre-Islamic settlement archaeology.', color: 'bg-blue-50 border-blue-100', badge: 'Arabian Gulf Coast · Ruins · 80km' },
    { name: 'Al-Ahsa Airport (HOF)', slug: 'al-ahsa-airport', desc: 'Al-Ahsa International Airport — IATA: HOF. Saudia, flynas. 30km from Hofuf. Pre-book — limited on-demand transport at arrivals.', color: 'bg-slate-50 border-slate-200', badge: 'IATA: HOF · 30km · Pre-Book' },
];

const travelTimes = [
    { destination: 'Riyadh', distance: '350 km', time: '3.5 hrs' },
    { destination: 'Dammam', distance: '135 km', time: '1.5 hrs' },
    { destination: 'Al-Khobar', distance: '155 km', time: '1.75 hrs' },
    { destination: 'Qatar Border (Salwa)', distance: '150 km', time: '1.5 hrs' },
    { destination: 'UAE Border (Batha)', distance: '350 km', time: '4 hrs' },
    { destination: 'Al-Qara Mountain', distance: '15 km', time: '20 min' },
    { destination: 'Jawatha Mosque', distance: '25 km', time: '30 min' },
    { destination: 'Qasr Ibrahim', distance: '5 km', time: '10 min' },
    { destination: 'Al-Uqair Coast', distance: '80 km', time: '1 hr' },
    { destination: 'Al-Ahsa Airport (HOF)', distance: '30 km', time: '35 min' },
];

export default function AlAhsaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Ahsa</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Ahsa · UNESCO World Heritage 2018 · Largest Oasis in the World · Eastern Province</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Ahsa Taxi — UNESCO Oasis, Al-Qara Mountain Caves &amp; HOF Airport</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Private taxi in <strong>Al-Ahsa (Hofuf)</strong> — <strong>Al-Qara Mountain caves (18°C inside), Jawatha Mosque, Qasr Ibrahim Ottoman fortress</strong>, UNESCO Oasis, Al-Uqair coast, HOF Airport. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Ahsa Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">World Heritage 2018</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">2.5M</div><div className="text-sm text-gray-600">Date Palms in Oasis</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">18°C</div><div className="text-sm text-gray-600">Al-Qara Caves (year-round)</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">7th C</div><div className="text-sm text-gray-600">Jawatha Mosque</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Al-Ahsa — Heritage Sites &amp; Taxi Transfers</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Al-Qara Mountain, Jawatha Mosque, and Al-Uqair have no public transport — private taxi is the only practical option. Select a destination for transfer details.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/al-ahsa/${d.slug}`} className={`block p-6 rounded-2xl border ${d.color} hover:shadow-md transition-shadow`}>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Ahsa — Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto rounded-2xl border border-amber-200">
                        <table className="w-full text-sm">
                            <thead className="bg-amber-800 text-white">
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
                                            <a href={`https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Ahsa%20to%20${encodeURIComponent(r.destination)}`} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 font-medium text-xs">WhatsApp →</a>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Ahsa Taxi FAQ</h2>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Travellers Say About Al-Ahsa Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Faisal A.', origin: 'Riyadh', text: 'Day trip from Riyadh to Al-Ahsa for Al-Qara Mountain. Stepping into those caves from 45°C heat was extraordinary. Driver waited, then Qasr Ibrahim in the afternoon. Perfect day.' },
                            { name: 'Noura K.', origin: 'Dammam', text: 'Driver took us to Jawatha Mosque and the oasis area. The date farms in the oasis are beautiful. Al-Ahsa is much more interesting than I expected — a complete hidden gem.' },
                            { name: 'Ahmed S.', origin: 'Dubai', text: 'HOF Airport pickup to city hotel, then two days exploring with the same driver. Al-Uqair beach on day two — completely deserted, historical, peaceful. Excellent service throughout.' },
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-amber-100">
                                <p className="text-sm text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                                <div className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· from {t.origin}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-amber-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Al-Ahsa Transfer</h2>
                    <p className="mb-8 opacity-90">UNESCO oasis, Al-Qara Mountain caves, HOF Airport — fixed rate, 24/7.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Ahsa Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 bg-white">
                <CustomerUpdates location="Al-Ahsa" />
            </div>
            <div className="py-8 bg-white">
                <NearbyCities currentCity="Al-Ahsa" />
            </div>
        </div>
    );
}
