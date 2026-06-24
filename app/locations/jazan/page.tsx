import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan' },
    title: 'Jazan Taxi Service 2026 | Farasan Islands, Airport & Red Sea Coast',
    description: 'Taxi in Jazan — Jazan Airport (GIZ), Farasan Islands ferry, Jizan Corniche, Sabya, Abu Arish, Al Dayer. Tropical coast, khareef greenery, Red Sea fishing. Fixed rates, 24/7.',
    keywords: ['Jazan taxi', 'Jizan taxi', 'Jazan airport taxi', 'Farasan Islands taxi', 'Jizan corniche taxi', 'Sabya taxi', 'Jazan to Abha taxi', 'Jazan Red Sea taxi'],
    openGraph: {
        title: 'Jazan Taxi Service — Farasan Islands, Airport & Red Sea Coast',
        description: 'Professional taxi in Jazan. Airport transfers, Farasan Islands ferry, Jizan Corniche, Abha mountain route. Fixed rates, 24/7.',
        url: 'https://haramtaxiservice.com/locations/jazan',
        type: 'website',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service — Jazan",
    "description": "Professional taxi service in Jazan — Farasan Islands, GIZ Airport, Jizan Corniche, Abha mountain transfers.",
    "url": "https://haramtaxiservice.com/locations/jazan",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "areaServed": "Jazan Region, Saudi Arabia",
    "address": { "@type": "PostalAddress", "addressLocality": "Jazan", "addressCountry": "SA" }
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How do I get from Jazan Airport to the city?", "acceptedAnswer": { "@type": "Answer", "text": "Pre-book a taxi via WhatsApp with your flight number. Our driver meets you at Jazan Airport (GIZ) arrivals with a name board. Transfer to Jazan city centre (15km, 20 min), Jizan Corniche hotels, or any Jazan destination. Flight tracked, fixed rate." } },
        { "@type": "Question", "name": "How do I get to the Farasan Islands from Jazan?", "acceptedAnswer": { "@type": "Answer", "text": "The Farasan Islands are reached by ferry from Jazan Port. Our taxi takes you from your hotel to the ferry terminal. The ferry to Greater Farasan Island takes approximately 1.5–2 hours. We arrange return pickups from the ferry port." } },
    ]
} as const;

const districts = [
    { name: 'Jazan Airport (GIZ)', href: '/locations/jazan/jazan-airport', color: 'bg-slate-700', desc: 'Arrivals, flight tracking, name board' },
    { name: 'Farasan Islands', href: '/locations/jazan/farasan-islands', color: 'bg-teal-700', desc: 'Ferry port taxi, coral reef, no cars on island' },
    { name: 'Jizan Corniche', href: '/locations/jazan/jizan-corniche', color: 'bg-blue-700', desc: 'Red Sea promenade, hotels, fish market' },
    { name: 'Sabya', href: '/locations/jazan/sabya', color: 'bg-green-700', desc: 'Largest inland city, agriculture hub' },
    { name: 'Abu Arish', href: '/locations/jazan/abu-arish', color: 'bg-amber-700', desc: 'Historic trading town, Hamdah Fort' },
    { name: 'Al Dayer', href: '/locations/jazan/al-dayer', color: 'bg-emerald-800', desc: 'Mountain gateway, ancient terraced farms' },
];

const faqs = [
    { question: "Is Jazan the same as Jizan?", answer: "'Jizan' is the traditional Arabic pronunciation and common local usage; 'Jazan' is the official government transliteration used by airports, region names, and international references. The city, region, and airport (IATA: GIZ) are all officially 'Jazan'. Both spellings are widely understood." },
    { question: "How do I get to the Farasan Islands from Jazan?", answer: "The Farasan Islands are reached by government ferry from Jazan Port (Al-Minaab Ferry Terminal). The ferry to Greater Farasan Island (Al-Kabeer) takes approximately 1.5–2 hours. There are no taxis on the islands — all island transport is by foot, bicycle, or local golf cart. Our taxi takes you from your hotel to the ferry port and picks you up on return." },
    { question: "What is the Jazan to Abha mountain route like?", answer: "The Jazan to Abha drive is one of Saudi Arabia's most spectacular road journeys — approximately 200km, ascending from sea level at Jazan to 2,200m at Abha through the Asir escarpment. The route includes dramatic hairpin bends, cloud forest, terraced farms, and views over the Tihama coastal plain. Journey time: 2.5–3 hours." },
    { question: "What is the best time of year to visit Jazan?", answer: "October to March — temperatures are 22–32°C, ideal for beach and outdoor activity. July–September (khareef) brings monsoon-influenced humidity and lush tropical greenery — unique in Saudi Arabia. The Farasan Islands are best October–April for diving and snorkelling. Avoid June–August if you dislike humidity (80%+ and 35°C+)." },
    { question: "Are there app taxis (Careem/Uber) in Jazan?", answer: "Yes — Careem and Uber operate in Jazan city. For the Farasan ferry port, out-of-city trips (Sabya, Abu Arish, Al Dayer), and the Abha mountain route, pre-booked private taxis are recommended over app taxis which may not reliably serve these areas." },
    { question: "What is Jazan famous for?", answer: "Jazan is Saudi Arabia's southernmost major city — known for the Farasan Islands (Red Sea coral archipelago), khareef-season tropical greenery, some of the Kingdom's best seafood, the Asir mountain drive to Abha, and Jazan Region's tropical fruit production (mangoes, papayas, bananas)." },
    { question: "How far is Jazan from Abha?", answer: "Jazan to Abha is approximately 200km — 2.5 to 3 hours by private taxi on the mountain highway. The route ascends the Asir escarpment through dramatic scenery. Popular as a one-way transfer for visitors combining Red Sea coast with Asir highlands." },
    { question: "Can I visit Farasan Islands as a day trip from Jazan?", answer: "Yes — the standard Farasan day trip: taxi to ferry port (morning, 7–8am), ferry to Greater Farasan Island (1.5–2 hrs), explore the island (3–4 hours on foot or bicycle), return ferry, taxi back to Jazan hotel. Total: 10–12 hours. Pre-book taxi both ways." },
    { question: "What seafood is Jazan famous for?", answer: "Jazan's fishing industry is one of Saudi Arabia's most productive. The Jizan fish market near the corniche is one of the Kingdom's best — fresh hammour (grouper), kingfish, lobster, shrimp, and Red Sea specialty fish. Corniche restaurants serve some of the freshest seafood in Saudi Arabia." },
    { question: "Is Jazan Airport (GIZ) far from the city?", answer: "Jazan Airport (GIZ — King Abdullah bin Abdulaziz Airport) is approximately 15km north of Jazan city centre — about 20 minutes by taxi. It handles domestic flights from Riyadh, Jeddah, and Madinah." },
    { question: "What vehicle is best for Jazan to Abha?", answer: "Both Camry (4 passengers) and GMC (7 passengers) handle the Abha mountain highway well. For families with luggage, the GMC gives more boot space. Confirm your passenger count and bag count when booking so we assign the right vehicle for the mountain road." },
];

export default function JazanPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jazan</span>
                </div>
            </div>

            <section className="bg-teal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jazan · Red Sea Coast · Farasan Islands · Asir Gateway</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jazan Taxi Service — Farasan Islands, Airport &amp; Red Sea Coast</h1>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Professional taxi in <strong>Jazan</strong> — Saudi Arabia&apos;s tropical coast. <strong>GIZ Airport transfers</strong>, <strong>Farasan Islands ferry port</strong>, Jizan Corniche, Sabya, and the <strong>Abha mountain highway</strong>. Fixed rates, 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Jazan" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />Book Jazan Taxi
                                </Button>
                            </a>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Farasan%20Islands%20ferry%20taxi%20from%20Jazan" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
                                    Farasan Islands Transfer
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-teal-50 border-b border-teal-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">Farasan</div><div className="text-sm text-gray-600">Coral Islands Ferry</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">GIZ</div><div className="text-sm text-gray-600">Airport Transfers</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">2.5 hrs</div><div className="text-sm text-gray-600">to Abha Mountains</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">24/7</div><div className="text-sm text-gray-600">Fixed Rate Service</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Jazan Districts &amp; Destinations</h2>
                    <p className="text-gray-500 text-center mb-10">Select your destination for detailed taxi information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {districts.map((d, i) => (
                            <Link key={i} href={d.href} className="group block">
                                <div className={`${d.color} text-white p-6 rounded-2xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02]`}>
                                    <div className="flex items-start justify-between mb-3">
                                        <MapPin className="w-5 h-5 opacity-70" />
                                        <span className="text-xs opacity-60 uppercase tracking-wider">Jazan</span>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jazan Travel Times &amp; Routes</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-teal-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">From Jazan To</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'Jazan Airport (GIZ)', dist: '15 km', time: '20 min', note: 'Flight tracking, name board' },
                                    { dest: 'Farasan Islands Ferry Port', dist: '12 km', time: '15 min', note: 'Port drop-off + return pickup' },
                                    { dest: 'Sabya City', dist: '55 km', time: '45 min', note: 'Largest inland Jazan city' },
                                    { dest: 'Abu Arish', dist: '60 km', time: '50 min', note: 'Historic trading town, Hamdah Fort' },
                                    { dest: 'Al Dayer', dist: '70 km', time: '60 min', note: 'Mountain gateway, terraced farms' },
                                    { dest: 'Abha City', dist: '200 km', time: '2.5–3 hrs', note: 'Asir escarpment mountain highway' },
                                    { dest: 'Khamis Mushait', dist: '195 km', time: '2.5 hrs', note: 'Twin city to Abha' },
                                    { dest: 'Najran', dist: '430 km', time: '4.5 hrs', note: 'Long-distance south route' },
                                    { dest: 'Jeddah', dist: '990 km', time: '10 hrs', note: 'Long-distance north Red Sea route' },
                                    { dest: 'Riyadh', dist: '1,250 km', time: '12 hrs', note: 'Long-distance central route' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-teal-700">{row.time}</td>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Haram Taxi in Jazan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Farasan Islands Ferry Connection', desc: "The Farasan Islands have no taxis — all visitors need a pre-booked taxi to and from the ferry port in Jazan. Our driver drops you at the morning ferry and returns for your arrival back at the port. No stranded-at-the-port situations." },
                            { title: 'Abha Mountain Route Specialists', desc: "The Jazan–Abha highway is one of Saudi Arabia's most dramatic roads — steep Asir escarpment switchbacks rising from sea level to 2,200m. Our drivers are experienced on this route year-round." },
                            { title: 'GIZ Airport — Khareef Season Ready', desc: "During khareef tourist season (July–September), Jazan Airport arrivals are busy and app taxis are scarce. Pre-booking guarantees your driver is there — flight tracked, name board at arrivals." },
                        ].map((s, i) => (
                            <div key={i} className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jazan Key Sites &amp; Landmarks</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Farasan Islands', note: 'Red Sea coral archipelago, Ottoman fort' },
                            { name: 'Jizan Corniche', note: '9km Red Sea promenade, seafood restaurants' },
                            { name: 'Jazan Fish Market', note: "Saudi Arabia's best fresh seafood souq" },
                            { name: 'Hamdah Fort (Abu Arish)', note: '500-year-old historic fortress' },
                            { name: 'Al-Qahma Beach', note: 'White sand beach south of city' },
                            { name: 'Sabya Old Town', note: 'Agricultural city, traditional souq' },
                            { name: 'Jazan Mangroves', note: 'UNESCO-nominated coastal ecosystem' },
                            { name: 'Al Dayer Terraces', note: 'Ancient mountain farming terraces' },
                            { name: 'Jazan Economic City', note: "Saudi Arabia's southern industrial hub" },
                            { name: 'Al-Uroodha Beach', note: 'Popular local beach, shallow calm water' },
                            { name: 'Farasan Al-Kabeer', note: 'Main island, coral houses, heritage' },
                            { name: 'Abha Mountain Road', note: "Asir escarpment — Arabia's great drive" },
                        ].map((l, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                                <div className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jazan Taxi Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { title: 'GIZ Airport Transfer', desc: 'Meet & greet, flight tracked, name board, 24/7' },
                            { title: 'Farasan Ferry Port', desc: 'Morning drop + return pickup from port' },
                            { title: 'Jazan to Abha', desc: 'Mountain highway, 2.5–3 hrs, experienced drivers' },
                            { title: 'City Circuit Tour', desc: 'Corniche, fish market, souq, mangroves' },
                            { title: 'Sabya & Abu Arish', desc: 'Inland city and heritage fort transfers' },
                            { title: 'Al Dayer Mountain', desc: 'Terraced farm villages, cool mountain air' },
                            { title: 'Najran Transfer', desc: 'Long-distance south route, 4.5 hours' },
                            { title: 'Group & Family', desc: 'GMC and Hiace for large groups' },
                        ].map((s, i) => (
                            <Link key={i} href="/booking" className="block bg-gray-50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 p-5 rounded-xl transition-all">
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                                <p className="text-xs text-gray-500">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jazan Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-teal-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-teal-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Ahmed M.', loc: 'Farasan Islands Trip', stars: 5, text: 'Booked the ferry port taxi and the driver was at my hotel at 5:30am sharp. Got to the ferry with 30 minutes to spare. Perfect service for an early start.' },
                            { name: 'Fatimah K.', loc: 'GIZ Airport Pickup', stars: 5, text: 'Flight from Riyadh was delayed 90 minutes — driver was still there waiting at arrivals with my name board. No extra charge. Exactly the service level you need.' },
                            { name: 'Omar S.', loc: 'Jazan to Abha Route', stars: 5, text: 'The Abha mountain road was stunning. Our driver knew every viewpoint and stopped at the best spots. One of the great drives in Saudi Arabia.' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-teal-100 text-sm mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                                <div className="text-white font-semibold text-sm">{r.name}</div>
                                <div className="text-teal-300 text-xs">{r.loc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Jazan Taxi</h2>
                    <p className="text-gray-500 mb-8">Airport, Farasan ferry port, Abha mountain route — fixed rate confirmed on WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Jazan" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jazan Taxi Now
                        </Button>
                    </a>
                </div>
            </section>

            <CustomerUpdates location="Jazan" />
            <NearbyCities currentCity="Jazan" />
        </div>
    );
}
