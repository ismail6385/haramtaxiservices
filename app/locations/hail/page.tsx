import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail' },
    title: 'Hail Taxi Service 2026 | Jubbah UNESCO Rock Art, Airport & Desert Tours',
    description: "Taxi service in Hail — Ha'il Airport (HAS), Jubbah UNESCO petroglyphs, Qasr Barzan, Jabal Aja, A'arif Fort. City of Chivalry, northern Saudi Arabia. Fixed rates, 24/7.",
    keywords: ['Hail taxi', 'Ha\'il taxi', 'Hail airport transfer', 'Jubbah rock art taxi', 'Qasr Barzan taxi', 'Jabal Aja taxi', "A'arif Fort taxi", 'taxi Hail Saudi Arabia', 'Hail desert tour'],
    openGraph: {
        title: "Hail Taxi Service — Jubbah UNESCO, Qasr Barzan & Airport Transfers",
        description: "Professional taxi in Hail. Airport transfers, Jubbah UNESCO petroglyphs, Qasr Barzan, Jabal Aja. Fixed rates, 24/7.",
        url: 'https://haramtaxiservice.com/locations/hail',
        type: 'website',
        images: [{ url: '/hail-desert.webp', width: 1200, height: 630, alt: "Hail — City of Chivalry, Northern Saudi Arabia" }],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Hail",
    "description": "Professional taxi service in Hail and northern Saudi Arabia. Airport transfers, Jubbah UNESCO rock art, Qasr Barzan, Jabal Aja, and desert tours.",
    "url": "https://haramtaxiservice.com/locations/hail",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Hail", "addressRegion": "Hail Region", "addressCountry": "SA" },
    "geo": { "@type": "GeoCoordinates", "latitude": 27.5114, "longitude": 41.6930 },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": ["Hail", "Jubbah", "Qasr Barzan", "Jabal Aja", "A'arif Fort", "Hail Airport"]
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How do I book a taxi at Hail Airport?", "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp us your flight number and arrival time at Ha'il Regional Airport (HAS). We track your flight and meet you at arrivals with a name board. Fixed rate to your Hail hotel or destination." } },
        { "@type": "Question", "name": "How far is Jubbah from Hail city?", "acceptedAnswer": { "@type": "Answer", "text": "Jubbah is approximately 100km north of Hail city — about 1 hour by taxi. The Jubbah petroglyphs (UNESCO World Heritage Site) include rock art panels dating back 10,000 years on the sandstone inselbergs around the Jubbah oasis." } },
    ]
} as const;

const faqs = [
    { question: "How do I book a taxi at Hail Airport (HAS)?", answer: "WhatsApp us your flight number and arrival time at Ha'il Regional Airport (HAS). We track your flight and meet you at the arrivals exit with a name board. Fixed rate to Hail city centre or any Hail destination — confirmed before you fly." },
    { question: "How far is Jubbah from Hail and how long does the taxi take?", answer: "Jubbah is approximately 100km north of Hail city — about 1 hour by taxi on the desert highway. The Jubbah petroglyphs (UNESCO World Heritage) are on the sandstone outcrops around the Jubbah oasis. We provide a driver-waits day trip from Hail." },
    { question: "What is Qasr Barzan?", answer: "Qasr Barzan is a historic mud-brick palace-fortress in central Hail, built in the 19th century during the Shammar Emirate (Al Rashid dynasty). It is one of the most significant examples of traditional Najdi architecture in northern Saudi Arabia and is now a heritage site within Hail city. Walking distance from most Hail hotels." },
    { question: "What are Jabal Aja and Jabal Salma?", answer: "Jabal Aja and Jabal Salma are the two sacred mountains of Hail — twin granite massifs that have been celebrated in Arabic poetry since pre-Islamic times. Jabal Aja dominates the Hail city skyline to the southwest. The mountains are a popular hiking and photography destination, with dramatic rocky landscape and desert views. Taxis serve the base areas." },
    { question: "What is A'arif Fort?", answer: "A'arif Fort (Qasr A'arif) is a hilltop fortress overlooking Hail city from a rocky ridge just above the city centre. Originally built in the 18th century, it was used by the Al Rashid dynasty. The fort offers the best panoramic views of Hail city and the surrounding desert plains. Short walk up to the fort from the base." },
    { question: "How far is Hail from Riyadh and how long does the drive take?", answer: "Hail is approximately 680km northwest of Riyadh — about 6.5–7 hours by taxi on Route 65 (King Abdulaziz Road). A popular long-distance route for government employees and families. We provide private intercity taxis for this route with fixed rates." },
    { question: "What is Al-Qishla Palace in Hail?", answer: "Al-Qishla Palace is an Ottoman-era military barracks complex in Hail city, later used as a government building and now preserved as a heritage site. The building reflects the Ottoman architectural influence in the Hejaz and Najd regions during the 19th–early 20th century. Located in the city centre." },
    { question: "Does Hail have a camel festival?", answer: "Yes — the Hail International Camel Festival (also called the Camel Festival of Hail) is one of Saudi Arabia's largest traditional events, held annually in the desert north of Hail. It features camel racing, camel beauty contests, traditional poetry, falconry, and Bedouin heritage exhibitions. Date varies — check Saudi events calendar." },
    { question: "How do I get from Hail to Jubbah and back in one day?", answer: "Hail to Jubbah is 100km north — 1 hour each way. A day trip: depart Hail by 8am, arrive Jubbah by 9am, 2–3 hours at the UNESCO rock art site, return to Hail by 1–2pm. Our driver waits at Jubbah while you visit. Pre-booking is essential as there are no taxis at Jubbah itself." },
    { question: "What is the best time of year to visit Hail?", answer: "October to March is the best season — temperatures are 10–22°C, comfortable for outdoor sightseeing at Jubbah, Jabal Aja, and the desert sites. April can still be pleasant (20–28°C). Summer (June–August) reaches 40–45°C — outdoor sightseeing is very difficult in the heat. The Hail Camel Festival is usually in winter." },
    { question: "Is there a taxi from Hail to Medina or Madinah?", answer: "Yes — Hail to Madinah is approximately 480km southwest — about 5 hours by taxi on Route 70. We cover this route as a long-distance intercity transfer. Hail is also 320km from Tabuk (3.5 hours northwest) and 680km from Riyadh (7 hours southeast)." },
];

const districts = [
    { name: "Hail Airport (HAS)", slug: 'hail-airport', color: 'bg-slate-700', desc: "Ha'il Regional Airport, flight tracked arrivals", icon: '✈️' },
    { name: 'Jubbah Rock Art (UNESCO)', slug: 'jubbah-rock-art', color: 'bg-stone-700', desc: '10,000-year-old petroglyphs, 100km north', icon: '🪨' },
    { name: 'Qasr Barzan', slug: 'qasr-barzan', color: 'bg-amber-800', desc: 'Shammar Emirate mud-brick palace-fortress', icon: '🏰' },
    { name: 'Jabal Aja & Salma', slug: 'jabal-aja', color: 'bg-blue-800', desc: "Twin sacred mountains of Hail, granite massifs", icon: '⛰️' },
    { name: "A'arif Fort", slug: 'aarif-fort', color: 'bg-red-800', desc: 'Hilltop fortress, panoramic city views', icon: '🏯' },
    { name: 'Al-Qishla Palace', slug: 'al-qishla', color: 'bg-teal-700', desc: 'Ottoman-era heritage, city centre', icon: '🕌' },
];

const landmarks = [
    { name: "Ha'il Regional Airport (HAS)", desc: 'Domestic hub — Riyadh, Jeddah, Madinah routes' },
    { name: 'Jubbah Petroglyphs (UNESCO)', desc: '10,000-year-old rock art, Hail UNESCO site' },
    { name: 'Qasr Barzan', desc: 'Mud-brick palace of Al Rashid dynasty (Shammar)' },
    { name: "A'arif Fort", desc: 'Hilltop fortress, best city panorama in Hail' },
    { name: 'Al-Qishla Palace', desc: 'Ottoman barracks heritage, city centre' },
    { name: 'Jabal Aja', desc: 'Sacred granite mountain, pre-Islamic poetry' },
    { name: 'Jabal Salma', desc: "Twin of Aja — the two mountains of Hail's identity" },
    { name: 'Hail Museum', desc: 'Regional heritage museum, Shammar and Najdi history' },
    { name: 'Hail Camel Festival Grounds', desc: 'Annual camel racing, falconry, Bedouin heritage' },
    { name: "Hail Old Souq (Al-Qaysariyah)", desc: 'Traditional market, Bedouin silver, dates, spices' },
    { name: 'Samra Valley', desc: 'Desert valley north of Hail, dramatic rock formations' },
    { name: 'Al-Hayat Park', desc: "Hail city's main public park and recreation area" },
];

const routes = [
    { to: "Hail Airport (HAS)", dist: '10 km', time: '15 min' },
    { to: 'Jubbah Rock Art (UNESCO)', dist: '100 km', time: '1 hr' },
    { to: "A'arif Fort", dist: '3 km', time: '10 min' },
    { to: 'Qasr Barzan', dist: '2 km', time: '8 min' },
    { to: 'Jabal Aja base', dist: '15 km', time: '20 min' },
    { to: 'Al-Qishla Palace', dist: '2 km', time: '8 min' },
    { to: 'Tabuk', dist: '320 km', time: '3.5 hrs' },
    { to: 'Madinah', dist: '480 km', time: '5 hrs' },
    { to: 'Riyadh', dist: '680 km', time: '7 hrs' },
    { to: 'Jeddah', dist: '900 km', time: '9 hrs' },
];

const testimonials = [
    { name: 'Abdullah R.', city: 'Riyadh', text: 'Came from Riyadh to see Jubbah rock art. Driver from Hail knew exactly where to go — UNESCO site is off the main road and you need a local. Excellent service.', rating: 5 },
    { name: 'Dr. Faisal N.', city: 'Madinah', text: "Airport pickup was smooth — name board waiting at arrivals. Hotel drop-off, then next day the Qasr Barzan and A'arif Fort tour. Driver very knowledgeable about Hail history.", rating: 5 },
    { name: 'Mohammed K.', city: 'Jeddah', text: 'Hail to Riyadh intercity — 7 hour drive, comfortable, on time. Pre-booked on WhatsApp, fixed rate, no surprises. Would use again.', rating: 5 },
];

export default function HailPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4 sticky top-0 z-10 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        <Link href="/">Home</Link><span className="mx-2">/</span>
                        <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                        <span className="font-medium text-gray-900">Hail</span>
                    </div>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Hail" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-1.5">
                            <WhatsAppIcon className="w-4 h-4" />Book Hail Taxi
                        </Button>
                    </a>
                </div>
            </div>

            <section className="relative h-[500px] bg-gray-900">
                <Image src="/hail-desert.webp" alt="Hail — City of Chivalry, Northern Saudi Arabia Desert" width={1200} height={500} className="w-full h-full object-cover opacity-55" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 rounded-full mb-5">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Hail Region · City of Chivalry · Shammar Heritage · UNESCO Rock Art</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                                Hail Taxi Service — Jubbah UNESCO, Qasr Barzan &amp; Airport
                            </h1>
                            <p className="text-lg text-gray-200 mb-6">
                                Professional taxi in <strong>Hail</strong> — airport transfers, Jubbah UNESCO petroglyphs, Qasr Barzan, Jabal Aja, and <strong>A&apos;arif Fort</strong>. Long-distance routes to Riyadh, Tabuk &amp; Madinah. Fixed rates, 24/7.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Hail" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                        <WhatsAppIcon className="w-5 h-5" />Book Hail Taxi
                                    </Button>
                                </a>
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Hail%20Airport%20HAS" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 flex items-center gap-2">
                                        <WhatsAppIcon className="w-5 h-5" />HAS Airport Pickup
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">UNESCO</div><div className="text-sm opacity-85">Jubbah Rock Art Site</div></div>
                        <div><div className="text-3xl font-bold mb-1">10,000 yrs</div><div className="text-sm opacity-85">Oldest Petroglyphs</div></div>
                        <div><div className="text-3xl font-bold mb-1">6 Sites</div><div className="text-sm opacity-85">Heritage Coverage</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">Airport &amp; City</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Hail &amp; Region — Districts &amp; Sites</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Each district has its own page with detailed travel info, routes, and booking.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/hail/${d.slug}`} className="group block">
                                <div className={`${d.color} text-white p-6 rounded-2xl hover:scale-[1.02] transition-transform`}>
                                    <div className="text-3xl mb-3">{d.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{d.name}</h3>
                                    <p className="text-sm opacity-80">{d.desc}</p>
                                    <div className="mt-4 text-xs font-semibold opacity-70 group-hover:opacity-100">View details →</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hail Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-amber-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">From Hail City</th>
                                    <th className="px-5 py-4 text-left font-semibold">To</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">Hail</td>
                                        <td className="px-5 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-5 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-5 py-4 font-bold text-amber-700">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Hail Needs a Pre-Booked Taxi</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">App taxis exist in Hail city but the heritage sites outside the city — especially Jubbah — have no taxis at all.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Jubbah Has No Local Taxis', desc: "Jubbah is 100km from Hail on the desert highway. There are no taxis at the Jubbah petroglyphs site — no Careem, no Uber, no local taxis. If you go without a pre-booked return, you are stranded. Our driver waits at Jubbah for the 2–3 hour site visit.", icon: '🪨' },
                            { title: "A'arif Fort & Qasr Barzan Navigation", desc: "The heritage sites within Hail city are not always well-mapped on international apps. A'arif Fort is reached by a winding road up a rocky ridge — local knowledge matters. Our Hail drivers know every heritage site and take you to the correct access point.", icon: '🏯' },
                            { title: 'Airport Pickup at Small Airport', desc: "Ha'il Airport (HAS) is a small regional facility — metered taxis are limited and availability at arrivals is inconsistent. A pre-booked pickup with flight tracking guarantees your driver is waiting when you land.", icon: '✈️' },
                        ].map((p, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <div className="text-3xl mb-3">{p.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hail &amp; Region Landmarks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {landmarks.map((l, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{l.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{l.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Hail Routes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { route: 'Hail Airport → Hail City', time: '15 min', type: 'Airport Transfer' },
                            { route: 'Hail → Jubbah UNESCO', time: '1 hr', type: 'Heritage Day Trip' },
                            { route: "Hail → A'arif Fort", time: '10 min', type: 'City Heritage' },
                            { route: 'Hail → Qasr Barzan', time: '8 min', type: 'City Heritage' },
                            { route: 'Hail → Jabal Aja', time: '20 min', type: 'Nature Tour' },
                            { route: 'Hail → Al-Qishla Palace', time: '8 min', type: 'City Heritage' },
                            { route: 'Hail → Tabuk', time: '3.5 hrs', type: 'Intercity' },
                            { route: 'Hail → Madinah', time: '5 hrs', type: 'Intercity' },
                        ].map((r, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <div className="text-xs text-amber-700 font-semibold mb-2 uppercase tracking-wide">{r.type}</div>
                                <div className="font-bold text-gray-900 text-sm mb-1">{r.route}</div>
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                    <Clock className="w-3 h-3" />{r.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hail Taxi — Frequently Asked Questions</h2>
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

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Hail Passengers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div className="flex mb-3">
                                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                                <div className="text-sm font-bold text-gray-900">{t.name}</div>
                                <div className="text-xs text-gray-400">{t.city}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CustomerUpdates location="Hail" />

            <section className="py-14 bg-amber-700 text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Book Hail Taxi — City of Chivalry</h2>
                    <p className="text-lg mb-8 opacity-90">Airport, Jubbah UNESCO, Qasr Barzan, Jabal Aja — fixed rate, 24/7.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Hail" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Hail Taxi
                            </Button>
                        </a>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Hail%20Airport%20HAS" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />HAS Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <NearbyCities currentCity="Hail" />
        </div>
    );
}
