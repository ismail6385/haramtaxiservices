import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import CustomerUpdates from '@/components/CustomerUpdates';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha' },
    title: 'Al-Baha Taxi | Dhee Ain Marble Village, Raghadan Forest & ABT Airport Transfers',
    description: 'Private taxi in Al-Baha — ABT Airport pickups, Dhee Ain marble village, Raghadan Forest cable car, Zahran Heritage Village, Baljurashi. Fixed rate 24/7.',
    keywords: ['Al-Baha taxi', 'Dhee Ain taxi', 'Al-Baha airport taxi', 'ABT airport transfer', 'Raghadan Forest taxi', 'Al-Baha private car', 'Baljurashi taxi', 'Thee Ain village taxi'],
    openGraph: {
        title: 'Al-Baha Taxi — Dhee Ain, Raghadan Forest & ABT Airport Transfers',
        description: 'Private taxi in Al-Baha. ABT Airport, Dhee Ain marble village, Raghadan Forest. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Al-Baha",
    "description": "Private taxi in Al-Baha — ABT Airport transfers, Dhee Ain marble village, Raghadan Forest, Zahran Heritage Village, Baljurashi, and intercity routes to Jeddah, Taif, and Riyadh.",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Al-Baha", "addressRegion": "Al-Baha Province", "addressCountry": "SA" },
    "url": "https://haramtaxiservice.com/locations/al-baha",
    "areaServed": "Al-Baha",
    "priceRange": "$$"
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "What is Al-Baha famous for?", "acceptedAnswer": { "@type": "Answer", "text": "Al-Baha is famous for: Dhee Ain (the White Marble Village — one of the most photographed heritage sites in Saudi Arabia); Raghadan Forest Park (highland cedar and juniper forest with cable car); traditional Hejazi stone tower architecture; pomegranate orchards; and the most dramatic mountain scenery on the western escarpment of the Hejaz highlands." } },
        { "@type": "Question", "name": "What is Dhee Ain village in Al-Baha?", "acceptedAnswer": { "@type": "Answer", "text": "Dhee Ain (also called Thee Ain or the Marble Village) is a pre-Islamic stone village built on a rocky hilltop approximately 25km west of Al-Baha city. The houses are built from locally quarried white and cream-coloured quartz and limestone, giving the village a distinctive pale appearance that glows in morning and afternoon light. It is one of the most photographed heritage sites in the Arabian Peninsula." } },
        { "@type": "Question", "name": "Is there Uber in Al-Baha?", "acceptedAnswer": { "@type": "Answer", "text": "Uber and Careem have limited coverage in Al-Baha. For airport pickups, heritage site visits (Dhee Ain, Zahran Village), and intercity transfers to Jeddah, Taif, or Riyadh, pre-booked private taxi is the reliable option." } },
    ]
} as const;

const faqs = [
    { question: "What is Al-Baha famous for?", answer: "Al-Baha is one of Saudi Arabia's most beautiful highland regions — famous for Dhee Ain (the ancient white marble village), Raghadan Forest Park (highland cedar and juniper forests), traditional Hejazi stone tower-house architecture, pomegranate orchards, and dramatic mountain scenery on the western escarpment. It sits at approximately 1,700m altitude, making it one of the coolest cities in Saudi Arabia in summer." },
    { question: "What is Dhee Ain marble village?", answer: "Dhee Ain (also: Zee Ain, Thee Ain, Al-Dhee Ain) is a pre-Islamic stone village perched on a rocky hilltop approximately 25km west of Al-Baha. The houses are constructed from locally quarried white quartz and cream limestone, giving the village its distinctive pale glow — especially at dawn and dusk. The multi-story tower houses are built directly into the cliff face and are one of the most photographed heritage sites in Saudi Arabia." },
    { question: "Is there Uber in Al-Baha?", answer: "Uber and Careem coverage in Al-Baha is limited and unreliable. Pre-booked private taxi is the recommended transport for airport pickups, heritage sites (Dhee Ain, Zahran Village), and intercity transfers. Raghadan Forest and Baljurashi have no on-demand transport — pre-booking is essential." },
    { question: "How far is Al-Baha from Jeddah?", answer: "Approximately 390km south of Jeddah — about 4.5 hours via Route 15 south. The route ascends from Jeddah's sea-level coast up to Al-Baha's 1,700m highland plateau, making the drive one of the most scenic in western Saudi Arabia." },
    { question: "How far is Al-Baha from Riyadh?", answer: "Approximately 660km west of Riyadh — about 7 hours via the main highway through Taif and Route 15 south. Al-Baha is a viable weekend destination from Riyadh, particularly for October–March when the highland climate is at its most comfortable." },
    { question: "What airport serves Al-Baha?", answer: "Al-Baha Domestic Airport (IATA: ABT) — also known as Al-Baha Regional Airport or King Saud bin Abdulaziz Airport. Saudia and flynas operate domestic routes to Riyadh (RUH) and Jeddah (JED). The airport is approximately 15km from Al-Baha city centre." },
    { question: "What is Raghadan Forest Park?", answer: "Raghadan Forest Park is Al-Baha's main recreation area — a highland forest of cedar and juniper trees approximately 5km from the city centre. The park has walking trails, picnic areas, and viewpoints overlooking the mountain valleys below. A cable car (Raghadan Cable Car) runs from the forest to the valley floor, offering panoramic views of the escarpment. It is the most visited green space in Al-Baha Province." },
    { question: "What is Baljurashi?", answer: "Baljurashi is the second city of Al-Baha Province — approximately 55km south of Al-Baha city. It sits in a valley below the highland plateau and is known for its weekly market (one of the most traditional in the region), pomegranate orchards, and the scenic descent from the Al-Baha plateau down to the lower valley." },
    { question: "What time of year is best to visit Al-Baha?", answer: "October to April — Al-Baha's climate is among the most pleasant in Saudi Arabia in these months (15–25°C days, cool nights). Summer (May–September) is still cooler than most Saudi cities at 25–32°C, which is exactly why Al-Baha is a popular domestic summer resort destination for Jeddah and Riyadh families. Al-Baha has fog and cloud during winter mornings, creating atmospheric photography conditions." },
    { question: "How far is Dhee Ain from Al-Baha city?", answer: "Approximately 25km west of Al-Baha city — about 25–30 minutes by taxi on the winding mountain road descending the western escarpment. The road to Dhee Ain is itself scenic, with views over the lower valleys and coastal plain in clear weather." },
    { question: "Can I combine Jeddah and Al-Baha in one trip?", answer: "Yes — many visitors arrive at Jeddah Airport (KAIA) and travel directly to Al-Baha (4.5 hours), spending 2–3 days before returning to Jeddah for their flight. Alternatively, Al-Baha can be combined with Taif (220km north, 3 hours) in a highland mountain itinerary." },
];

const districts = [
    { name: 'Dhee Ain — Marble Village', slug: 'dhee-ain', desc: "Pre-Islamic white stone village on a rocky cliff — one of the most photographed heritage sites in Saudi Arabia. Locally quarried quartz houses glow at dawn and dusk. 25km west of Al-Baha.", color: 'bg-stone-50 border-stone-200', badge: 'Pre-Islamic · White Village · UNESCO Candidate' },
    { name: 'Raghadan Forest Park', slug: 'raghadan-forest', desc: 'Highland cedar and juniper forest, cable car with panoramic valley views, walking trails, and picnic areas. 5km from Al-Baha city — main recreation area in the Province.', color: 'bg-emerald-50 border-emerald-200', badge: 'Forest · Cable Car · Views' },
    { name: 'Zahran Heritage Village', slug: 'zahran-heritage-village', desc: 'Traditional Hejazi stone tower-house village — multi-story constructions with decorated facades unique to the Al-Baha highland architectural style. Heritage museum on site.', color: 'bg-amber-50 border-amber-200', badge: 'Stone Tower Houses · Heritage' },
    { name: 'Baljurashi', slug: 'baljurashi', desc: "Al-Baha Province's second city — 55km south. Weekly traditional market, pomegranate valley, scenic descent from the highland plateau. Authentic highland market town.", color: 'bg-orange-50 border-orange-100', badge: 'Market Town · Pomegranates · 55km' },
    { name: 'Wadi Al-Aqiq', slug: 'wadi-al-aqiq', desc: 'Scenic wadi running west from the highland plateau — dam reservoir, agricultural terraces, pomegranate orchards. Most scenic valley drive in Al-Baha Province.', color: 'bg-blue-50 border-blue-100', badge: 'Wadi · Dam · Terraced Farms' },
    { name: 'Al-Baha Airport (ABT)', slug: 'al-baha-airport', desc: 'King Saud bin Abdulaziz Airport — IATA: ABT. Saudia, flynas. 15km from city. Pre-book taxi — limited on-demand transport at arrivals.', color: 'bg-slate-50 border-slate-200', badge: 'IATA: ABT · 15km' },
];

const travelTimes = [
    { destination: 'Jeddah', distance: '390 km', time: '4.5 hrs' },
    { destination: 'Riyadh', distance: '660 km', time: '7 hrs' },
    { destination: 'Taif', distance: '220 km', time: '3 hrs' },
    { destination: 'Abha', distance: '320 km', time: '3.5 hrs' },
    { destination: 'Khamis Mushait', distance: '340 km', time: '3.5 hrs' },
    { destination: 'Makkah', distance: '440 km', time: '5 hrs' },
    { destination: 'Dhee Ain Village', distance: '25 km', time: '25 min' },
    { destination: 'Raghadan Forest', distance: '5 km', time: '10 min' },
    { destination: 'Baljurashi', distance: '55 km', time: '45 min' },
    { destination: 'Al-Baha Airport', distance: '15 km', time: '20 min' },
];

export default function AlBahaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Baha</span>
                </div>
            </div>

            <section className="bg-emerald-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Baha · Dhee Ain · Raghadan Forest · Hejaz Highlands · 1,700m</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Baha Taxi — Dhee Ain Marble Village, Raghadan Forest &amp; ABT Airport</h1>
                        <p className="text-xl text-emerald-100 mb-8 font-light">
                            Private taxi in <strong>Al-Baha</strong> — <strong>ABT Airport pickups, Dhee Ain white marble village, Raghadan Forest cable car, Zahran Heritage Village</strong>, Baljurashi. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Baha Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">Dhee Ain</div><div className="text-sm text-gray-600">White Marble Village</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">1,700m</div><div className="text-sm text-gray-600">Altitude — Cool Climate</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">ABT</div><div className="text-sm text-gray-600">Al-Baha Airport</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">24/7</div><div className="text-sm text-gray-600">Private Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Al-Baha — Heritage Sites &amp; Taxi Transfers</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">From the ancient marble village of Dhee Ain to the cable car forests of Raghadan — all Al-Baha sites require private transport. Select a destination for transfer details.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/al-baha/${d.slug}`} className={`block p-6 rounded-2xl border ${d.color} hover:shadow-md transition-shadow`}>
                                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">{d.badge}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{d.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                                <div className="mt-4 text-emerald-700 text-sm font-medium">Book taxi →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-emerald-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Baha — Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto rounded-2xl border border-emerald-200">
                        <table className="w-full text-sm">
                            <thead className="bg-emerald-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-center font-semibold">Taxi Time</th>
                                    <th className="px-6 py-4 text-center font-semibold">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-100">
                                {travelTimes.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50'}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{r.destination}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.distance}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4 text-center">
                                            <a href={`https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Baha%20to%20${encodeURIComponent(r.destination)}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 font-medium text-xs">WhatsApp →</a>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Baha Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-emerald-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-emerald-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Travellers Say About Al-Baha Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Nasser M.', origin: 'Jeddah', text: 'Best highland trip from Jeddah. The driver took us to Dhee Ain at sunrise — the marble village in the morning light is extraordinary. Returned via Zahran village. Perfect day.' },
                            { name: 'Reem A.', origin: 'Riyadh', text: 'Family trip to Raghadan Forest. Driver waited while we did the cable car. Then Dhee Ain. Al-Baha is a completely different Saudi Arabia — the forests are real.' },
                            { name: 'Ibrahim K.', origin: 'Makkah', text: 'ABT Airport pickup was smooth. Driver knew Dhee Ain well and explained the building techniques. Picked us up at check-out two days later. Professional service.' },
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-emerald-100">
                                <p className="text-sm text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                                <div className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· from {t.origin}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-emerald-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Al-Baha Transfer</h2>
                    <p className="mb-8 opacity-90">Airport, Dhee Ain, Raghadan Forest, Zahran — fixed rate, 24/7.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Baha Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 bg-white">
                <CustomerUpdates location="Al-Baha" />
            </div>
            <div className="py-8 bg-white">
                <NearbyCities currentCity="Al-Baha" />
            </div>
        </div>
    );
}
