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
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha' },
    title: 'Abha Taxi Service 2026 | Asir National Park, Al-Soudah & Airport Transfers',
    description: "Taxi service in Abha — Saudi Arabia's mountain city. Abha Airport (AHB), Green Mountain, Asir National Park, Al-Soudah, Habala Village, Khamis Mushait. Fixed rates, 24/7.",
    keywords: ['Abha taxi', 'Abha airport transfer', 'Asir National Park taxi', 'Al-Soudah taxi', 'Habala village taxi', 'Khamis Mushait taxi', 'Green Mountain Abha taxi', 'taxi Abha Saudi Arabia'],
    openGraph: {
        title: "Abha Taxi Service — Saudi Arabia's Mountain City, Asir & Airport",
        description: "Professional taxi in Abha and Asir region. Airport transfers, Asir National Park, Al-Soudah, Habala Village, Khamis Mushait. Fixed rates, 24/7.",
        url: 'https://haramtaxiservice.com/locations/abha',
        type: 'website',
        images: [{ url: '/abha-green-mountain.webp', width: 1200, height: 630, alt: "Abha Green Mountain — Saudi Arabia's Mountain City" }],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Abha",
    "description": "Professional taxi service in Abha and Asir region. Airport transfers, Asir National Park, Al-Soudah, Habala Village, and Khamis Mushait.",
    "url": "https://haramtaxiservice.com/locations/abha",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Abha", "addressRegion": "Asir", "addressCountry": "SA" },
    "geo": { "@type": "GeoCoordinates", "latitude": 18.2164, "longitude": 42.5053 },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "areaServed": ["Abha", "Khamis Mushait", "Al-Soudah", "Habala", "Asir National Park", "Abha Airport"]
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "How do I book a taxi at Abha Airport?", "acceptedAnswer": { "@type": "Answer", "text": "WhatsApp us your flight number and arrival time at Prince Sultan bin Abdulaziz Airport (AHB). We track your flight and provide a name-board pickup at arrivals. Fixed rate to your Abha or Khamis Mushait hotel." } },
        { "@type": "Question", "name": "How far is Abha from Al-Soudah?", "acceptedAnswer": { "@type": "Answer", "text": "Al-Soudah is approximately 25km west of Abha — about 40 minutes by taxi up the winding mountain road. Al-Soudah sits at 2,910m, Saudi Arabia's highest point, accessible by cable car from the Al-Soudah cable car station." } },
        { "@type": "Question", "name": "How do I get to Habala Village from Abha?", "acceptedAnswer": { "@type": "Answer", "text": "Habala Village is 45km from Abha — about 50 minutes by taxi to the cable car station at the cliff edge. The village itself is only accessible by cable car (the village hangs on a cliff face, 300m below the plateau). Taxi brings you to the cable car; cable car descent is approx 5 minutes. Pre-book cable car tickets at asirpark.com." } },
    ]
} as const;

const faqs = [
    { question: 'How do I book a taxi at Abha Airport (AHB)?', answer: "WhatsApp us your flight number and arrival time at Prince Sultan bin Abdulaziz Airport (AHB/Abha Airport). We track your flight and meet you at arrivals with a name board. Fixed rate to Abha city, Khamis Mushait, or your Asir destination — confirmed before you fly." },
    { question: 'How far is Abha from Al-Soudah and how long does the taxi take?', answer: "Al-Soudah is approximately 25km west of Abha — about 35–40 minutes by taxi on the winding mountain road (Route 211). Al-Soudah sits at 2,910m above sea level — Saudi Arabia's highest accessible point. The road is good but winds through the Asir escarpment, so the drive takes longer than the distance suggests." },
    { question: 'How do I visit Habala Village from Abha?', answer: "Habala (Al-Habalah) is 45km from Abha — about 50 minutes by taxi to the cliff-edge cable car station. The village itself is only reachable by cable car — it hangs on a sheer 300m cliff face below the Asir plateau, accessible only by the cable car (or historically, ropes by the Qahtani tribe). Taxi brings you to the cable car station; descent takes approximately 5 minutes. Cable car tickets: book at asirpark.com." },
    { question: 'How far is Abha from Khamis Mushait?', answer: "Abha and Khamis Mushait are twin cities — approximately 25km apart, about 25–30 minutes by taxi. They are the two largest cities in the Asir region and are often treated as a combined urban area. Khamis Mushait has the King Khalid Military Academy, a larger commercial centre, and extensive markets. Both cities are served from Abha Airport (AHB)." },
    { question: 'What is the best time of year to visit Abha and Asir?', answer: "Abha is one of Saudi Arabia's most comfortable destinations in summer (June–September) — temperatures average 18–25°C while the rest of the Kingdom is 40°C+. The monsoon khareef season (July–September) brings mist, light rain, and lush green landscapes to the Asir mountains — the so-called 'Saudi Switzerland' effect. Winter (December–February) is cool and clear, with occasional frost at Al-Soudah. Peak tourist season: July–August (Saudi families escaping the heat)." },
    { question: 'Do taxis in Abha serve the mountain area including Al-Soudah, Dalghan, and Rijal Almaa?', answer: "Yes — our Abha taxis serve all Asir region destinations including Al-Soudah, Dalghan (adventure park), Rijal Almaa heritage village (70km west), and the Asir National Park areas. Mountain roads require experienced local drivers — our Abha drivers know all the mountain routes. Some roads are scenic but narrow; all are paved." },
    { question: 'How far is Abha from Jizan?', answer: "Abha to Jizan (on the Red Sea coast) is approximately 200km — about 2.5 hours by taxi descending from the mountain plateau to the coastal lowlands. A popular day trip or overnight from Abha for seafood and coastal scenery." },
    { question: 'Is there a taxi from Abha to Jeddah?', answer: "Yes — Abha to Jeddah is approximately 640km, about 6.5 hours via the mountain highway. We also cover Abha to Riyadh (850km, 9 hours) and Abha to Makkah (730km, 8 hours) as long-distance intercity routes." },
    { question: 'Does the Abha taxi service run during khareef (monsoon) season?', answer: "Yes — we operate year-round. The khareef season (July–September) brings mist and occasional rain which reduces visibility on mountain roads. Our drivers are experienced with Asir mountain driving in all weather conditions. Some higher routes may close briefly after heavy rain — your driver confirms conditions on the day." },
    { question: 'What vehicles are available in Abha for mountain tours?', answer: "Toyota Camry (standard), GMC Yukon XL and Toyota Hiace (for groups). All mountain routes (Al-Soudah, Habala, Rijal Almaa) are accessible by standard vehicle — no 4x4 required as all roads are paved. For larger groups visiting Asir National Park sites, we recommend Yukon XL or Hiace." },
    { question: 'How far is Abha from the Asir National Park entrance?', answer: "Asir National Park covers a huge area, but the most-visited section (the Al-Soudah/Habala corridor) starts 20km west of Abha city. The national park visitor centre is approximately 30 minutes from central Abha." },
    { question: 'Can I get a taxi from Abha to Najran?', answer: "Yes — Abha to Najran is approximately 300km east, about 3.5 hours via Route 15 through the Asir highlands. Najran is the southernmost city in Saudi Arabia near the Yemen border. Our service covers this route." },
];

const districts = [
    { name: 'Green Mountain (Jabal Akhdar)', slug: 'green-mountain', color: 'bg-green-700', desc: 'Cable car, city panoramas, Abha Dam Lake', icon: '🌿' },
    { name: 'Abha Airport (AHB)', slug: 'abha-airport', color: 'bg-slate-700', desc: 'Prince Sultan bin Abdulaziz Airport, arrivals', icon: '✈️' },
    { name: 'Khamis Mushait', slug: 'khamis-mushait', color: 'bg-stone-700', desc: 'Twin city, markets, military academy', icon: '🏙️' },
    { name: 'Asir National Park', slug: 'asir-national-park', color: 'bg-emerald-800', desc: 'Cloud forest, hiking, Dalghan adventure park', icon: '🌲' },
    { name: 'Al-Soudah', slug: 'al-soudah', color: 'bg-blue-800', desc: "Saudi Arabia's highest point, 2,910m", icon: '⛰️' },
    { name: 'Habala Village', slug: 'habala-village', color: 'bg-amber-800', desc: 'Cliffside Qahtani village, cable car only', icon: '🪨' },
];

const landmarks = [
    { name: 'Green Mountain (Jabal Akhdar)', desc: 'Lit summit tower, cable car, Abha Dam Lake views' },
    { name: 'Abha Cable Car', desc: 'Al-Soudah to Habala — 7km, 360° Asir escarpment views' },
    { name: 'Al-Soudah (2,910m)', desc: "Saudi Arabia's highest accessible peak, adventure park" },
    { name: 'Habala Village', desc: 'Cliffside heritage village, Qahtani tribe, UNESCO candidate' },
    { name: 'Asir National Park', desc: 'Juniper cloud forest, endemic flora, Dalghan park' },
    { name: 'Rijal Almaa Heritage Village', desc: 'UNESCO-listed Asir architecture, 70km from Abha' },
    { name: 'Abha Palace & Old Town', desc: 'Historic Abha city centre, traditional Asiri architecture' },
    { name: 'Al-Shallal Theme Park', desc: 'Family entertainment park on Abha Dam Lake shore' },
    { name: 'Abha Dam Lake', desc: 'Reservoir with waterfront restaurants and pedalboats' },
    { name: 'Dalghan Adventure Park', desc: 'Zip lines, mountain biking, paragliding (20km from Abha)' },
    { name: 'Khamis Mushait Souq', desc: 'Large traditional market — spices, Asiri crafts, silver jewellery' },
    { name: 'Al-Qabil Museum', desc: 'Asir regional heritage museum, traditional costumes and weapons' },
];

const services = [
    { title: 'Abha Airport Transfer', desc: 'Flight-tracked pickup at AHB, name board, fixed rate' },
    { title: 'Al-Soudah Day Trip', desc: "Driver waits at Saudi Arabia's highest point" },
    { title: 'Habala Village Tour', desc: 'To cable car station and back — driver waits' },
    { title: 'Asir National Park Tour', desc: 'Full or half-day — cloud forest, viewpoints, Dalghan' },
    { title: 'Khamis Mushait Transfer', desc: 'Abha to Khamis twin city — 25km, 30 min' },
    { title: 'Rijal Almaa Heritage Trip', desc: 'Day trip to UNESCO village — 70km west of Abha' },
    { title: 'Khareef Season Mountain Tour', desc: 'Misty mountain circuit — July to September' },
    { title: 'Abha to Jeddah / Riyadh', desc: 'Long-distance intercity — fixed rate, private' },
];

const routes = [
    { from: 'Abha', to: 'Al-Soudah', dist: '25 km', time: '40 min' },
    { from: 'Abha', to: 'Habala Village (cable car)', dist: '45 km', time: '50 min' },
    { from: 'Abha', to: 'Khamis Mushait', dist: '25 km', time: '30 min' },
    { from: 'Abha', to: 'Abha Airport (AHB)', dist: '20 km', time: '25 min' },
    { from: 'Abha', to: 'Rijal Almaa', dist: '70 km', time: '1.5 hrs' },
    { from: 'Abha', to: 'Jizan', dist: '200 km', time: '2.5 hrs' },
    { from: 'Abha', to: 'Najran', dist: '300 km', time: '3.5 hrs' },
    { from: 'Abha', to: 'Jeddah', dist: '640 km', time: '6.5 hrs' },
    { from: 'Abha', to: 'Makkah', dist: '730 km', time: '8 hrs' },
    { from: 'Abha', to: 'Riyadh', dist: '850 km', time: '9 hrs' },
];

const testimonials = [
    { name: 'Khalid M.', city: 'Riyadh', text: 'Booked Abha airport pickup and a full day in Al-Soudah and Habala. Driver knew every road perfectly. Khareef season was magical.', rating: 5 },
    { name: 'Sarah A.', city: 'Jeddah', text: "Came to Abha for the khareef mist. The driver took us to all the best viewpoints. Habala cable car was incredible — highly recommend.", rating: 5 },
    { name: 'Omar T.', city: 'Dubai', text: 'Travelling with family — needed a Hiace for 9 people. Smooth booking, on time at airport, took us to Rijal Almaa and Asir Park. Excellent.', rating: 5 },
];

export default function AbhaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4 sticky top-0 z-10 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        <Link href="/">Home</Link><span className="mx-2">/</span>
                        <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                        <span className="font-medium text-gray-900">Abha</span>
                    </div>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Abha" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-1.5">
                            <WhatsAppIcon className="w-4 h-4" />Book Abha Taxi
                        </Button>
                    </a>
                </div>
            </div>

            <section className="relative h-[500px] bg-gray-900">
                <Image src="/abha-green-mountain.webp" alt="Abha Green Mountain — Saudi Arabia Mountain City Asir" width={1200} height={500} className="w-full h-full object-cover opacity-55" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 rounded-full mb-5">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Asir Region · 2,200m Altitude · Saudi Arabia&apos;s Mountain City</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                                Abha Taxi Service — Asir National Park, Al-Soudah &amp; Airport
                            </h1>
                            <p className="text-lg text-gray-200 mb-6">
                                Professional taxi in <strong>Abha</strong> — airport transfers, Al-Soudah, Habala Village, Asir National Park, Khamis Mushait, and long-distance intercity routes. Fixed rates, 24/7.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Abha" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                        <WhatsAppIcon className="w-5 h-5" />Book Abha Taxi
                                    </Button>
                                </a>
                                <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Abha%20Airport%20AHB" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 flex items-center gap-2">
                                        <WhatsAppIcon className="w-5 h-5" />AHB Airport Pickup
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">2,200m</div><div className="text-sm opacity-85">Abha City Altitude</div></div>
                        <div><div className="text-3xl font-bold mb-1">18–25°C</div><div className="text-sm opacity-85">Summer Temperatures</div></div>
                        <div><div className="text-3xl font-bold mb-1">6 Districts</div><div className="text-sm opacity-85">Asir Region Coverage</div></div>
                        <div><div className="text-3xl font-bold mb-1">24/7</div><div className="text-sm opacity-85">Airport &amp; Mountain Tours</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Abha &amp; Asir — Districts &amp; Areas</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Each district has its own dedicated page with detailed travel info, routes, and booking links.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/abha/${d.slug}`} className="group block">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Abha Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-green-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">From Abha</th>
                                    <th className="px-5 py-4 text-left font-semibold">To</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{r.from}</td>
                                        <td className="px-5 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-5 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-5 py-4 font-bold text-green-700">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Problems We Solve in Abha</h2>
                    <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Mountain travel in Asir requires local knowledge — winding roads, fog, cable car logistics, and remote village access.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Mountain Road Navigation', desc: 'The roads to Al-Soudah, Habala, and Rijal Almaa are winding, steep, and in khareef season can have fog and mist. Our Abha drivers know every mountain road and how to drive them safely in any weather.', icon: '⛰️' },
                            { title: 'Cable Car Logistics', desc: "Habala Village and Al-Soudah cable car require timing — last descent, first ascent, cable car schedule. Your driver knows the timings, drops you at the right car park, and waits at the agreed meeting point.", icon: '🚡' },
                            { title: 'No Airport Taxi Uncertainty', desc: "Abha Airport (AHB) has limited metered taxis. Pre-booked pickup with flight tracking eliminates the wait — driver is at arrivals when you land, name board visible, rate agreed in advance.", icon: '✈️' },
                        ].map((p, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Abha &amp; Asir Landmarks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {landmarks.map((l, i) => (
                            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Abha Taxi Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((s, i) => (
                            <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h3>
                                <p className="text-xs text-gray-500">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Abha Routes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { route: 'Abha Airport → Abha City', time: '25 min', type: 'Airport Transfer' },
                            { route: 'Abha → Al-Soudah', time: '40 min', type: 'Mountain Day Trip' },
                            { route: 'Abha → Habala Cable Car', time: '50 min', type: 'Heritage Tour' },
                            { route: 'Abha → Khamis Mushait', time: '30 min', type: 'Intercity' },
                            { route: 'Abha → Asir National Park', time: '30 min', type: 'Nature Tour' },
                            { route: 'Abha → Rijal Almaa', time: '1.5 hrs', type: 'Heritage Tour' },
                            { route: 'Abha → Jizan', time: '2.5 hrs', type: 'Coastal Transfer' },
                            { route: 'Abha → Jeddah', time: '6.5 hrs', type: 'Long Distance' },
                        ].map((r, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-gray-100">
                                <div className="text-xs text-green-700 font-semibold mb-2 uppercase tracking-wide">{r.type}</div>
                                <div className="font-bold text-gray-900 text-sm mb-1">{r.route}</div>
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                    <Clock className="w-3 h-3" />{r.time}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Abha Taxi — Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Abha Passengers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
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

            <CustomerUpdates location="Abha" />

            <section className="py-14 bg-green-700 text-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Book Abha Taxi — Mountain City &amp; Asir</h2>
                    <p className="text-lg mb-8 opacity-90">Airport, Al-Soudah, Habala, Asir National Park — fixed rate, 24/7.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Abha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Abha Taxi
                            </Button>
                        </a>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Abha%20Airport%20AHB" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />AHB Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <NearbyCities currentCity="Abha" />
        </div>
    );
}
