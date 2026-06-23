import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import CustomerUpdates from '@/components/CustomerUpdates';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha' },
    title: 'Abha Taxi | Al-Soudah, Habala Village, Rijal Almaa & AHB Airport Transfers',
    description: 'Private taxi in Abha — Al-Soudah 2,910m, Habala cliffside village (cable car), Rijal Almaa UNESCO village, Asir National Park, AHB Airport. Khareef season specialists. Fixed rate 24/7.',
    keywords: ['Abha taxi', 'Al-Soudah taxi', 'Habala Village taxi', 'Rijal Almaa taxi', 'Abha airport taxi', 'AHB airport transfer', 'Asir National Park taxi', 'khareef season Abha taxi'],
    openGraph: {
        title: "Abha Taxi — Al-Soudah, Habala Village, Rijal Almaa & AHB Airport",
        description: "Private taxi in Abha. Al-Soudah (2,910m), Habala village, Rijal Almaa UNESCO, Asir National Park. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/abha',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Abha",
    "description": "Private taxi in Abha — Al-Soudah, Habala Village, Rijal Almaa heritage village, Asir National Park, AHB Airport, Khamis Mushait, and intercity routes to Jeddah, Riyadh, and Jizan.",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Abha", "addressRegion": "Asir", "addressCountry": "SA" },
    "url": "https://haramtaxiservice.com/locations/abha",
    "areaServed": "Abha",
    "priceRange": "$$"
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "What is Abha famous for?", "acceptedAnswer": { "@type": "Answer", "text": "Abha is Saudi Arabia's premier mountain resort city at 2,200m altitude in the Asir highlands. Famous for: Al-Soudah (2,910m — Saudi Arabia's highest accessible point), Habala Village (cliffside Qahtani village accessible only by cable car), Rijal Almaa heritage village (UNESCO tentative list — colorful decorated tower houses), the Asir National Park cloud forest, and the khareef monsoon season (July–September) when mist and light rain transform the mountains." } },
        { "@type": "Question", "name": "How do I get from Abha Airport to the city?", "acceptedAnswer": { "@type": "Answer", "text": "Abha Airport (AHB) is approximately 20km from central Abha — about 25 minutes by taxi. Pre-book a transfer; on-demand taxis at AHB can be limited during off-peak hours. Our driver meets you at arrivals with a name board. Fixed rate confirmed before your flight." } },
        { "@type": "Question", "name": "What is the best time to visit Abha?", "acceptedAnswer": { "@type": "Answer", "text": "Khareef season (July–September) is the most atmospheric: the southwest monsoon brings mist, light rain, and lush greenery to the Asir mountains while the rest of Saudi Arabia is in extreme heat. Winter (December–February) is clear and cool, with occasional frost at Al-Soudah. Spring (March–April) is excellent — mild, clear, with wildflowers at altitude. Summer at Abha averages 18–25°C versus 42°C in Jeddah and Riyadh — making it the most popular domestic summer escape in Saudi Arabia." } },
    ]
} as const;

const faqs = [
    { question: "What is Abha famous for?", answer: "Abha is Saudi Arabia's premier mountain resort city — at 2,200m altitude in the Asir highlands. Famous for: Al-Soudah (2,910m, Saudi's highest accessible point), Habala Village (cliffside Qahtani village accessible only by cable car), Rijal Almaa (UNESCO tentative list — colourful decorated tower houses), Asir National Park cloud forest, and the khareef monsoon season (July–September) when the mountains turn misty and green." },
    { question: "How do I get from Abha Airport (AHB) to the city?", answer: "Abha Airport (AHB — Prince Sultan bin Abdulaziz Airport) is approximately 20km from central Abha — about 25 minutes by taxi. Pre-book a transfer; on-demand taxis at AHB can be limited during off-peak hours. Our driver meets you at arrivals with a name board, fixed rate confirmed before your flight." },
    { question: "What is the best time to visit Abha?", answer: "Khareef season (July–September) is the most atmospheric — the southwest monsoon brings mist and light rain while the rest of Saudi Arabia is at 42°C+. Abha averages 18–25°C in summer, making it the premier domestic summer escape. Winter (December–February) is clear and cold with frost at Al-Soudah. Spring (March–April) has wildflowers and excellent visibility. All seasons are visitable but khareef is uniquely dramatic." },
    { question: "How far is Abha from Al-Soudah?", answer: "Al-Soudah is approximately 25km west of Abha — about 35–40 minutes by taxi via the winding mountain road (Route 211). Al-Soudah sits at 2,910m — Saudi Arabia's highest accessible point. The same area contains the upper cable car station for the Habala descent." },
    { question: "How do I visit Habala Village?", answer: "Habala (Al-Habalah) is 45km from Abha — about 50 minutes to the cliff-top cable car station. The village hangs on a sheer 300m cliff face and is accessible only by cable car (the village name derives from 'habala' — rope — which the Qahtani tribe historically used to descend). The driver waits at the top while you take the cable car down and back. Book cable car tickets in advance during peak khareef season." },
    { question: "What is Rijal Almaa?", answer: "Rijal Almaa (Rijal Alma) is a UNESCO tentative list heritage village 70km west of Abha — a multi-story stone tower settlement with the most elaborate and distinctive architecture in the Asir region. The buildings have coloured geometric patterns on their facades made from gypsum plaster — triangular, diamond, and zigzag designs in white, green, and ochre. Some buildings reach 8–10 floors. The village was a major trading post on the Asir highland route. A heritage museum is on site." },
    { question: "Is there Uber in Abha?", answer: "Uber and Careem operate in Abha city but with limited driver availability, particularly for mountain destinations (Al-Soudah, Habala, Rijal Almaa) and for early morning or late evening trips. Pre-booked private taxi is the reliable option for all mountain excursions and airport pickups." },
    { question: "How far is Abha from Jeddah and Riyadh?", answer: "Jeddah to Abha: approximately 640km, 6.5 hours via the mountain highway. Riyadh to Abha: approximately 850km, 9 hours. Both cities run regular domestic flights to AHB Airport. Driving from Jeddah is a popular option for the scenic mountain road — the approach up the Asir escarpment is among the most dramatic drives in Saudi Arabia." },
    { question: "Can I combine Abha with Jizan and Najran?", answer: "Yes — Abha is centrally located for a southwest Saudi circuit: Abha → Jizan (200km west, 2.5 hrs, Red Sea coast) → Najran (300km east, 3.5 hrs, pre-Islamic heritage). A 4–5 day circuit is achievable with private taxi. WhatsApp us with your itinerary for a multi-stop quote." },
    { question: "What vehicles are available in Abha?", answer: "Toyota Camry (4 passengers), GMC Yukon XL (7 passengers), Toyota Staria (7 passengers), Toyota Hiace (11 passengers). All mountain routes — Al-Soudah, Habala, Rijal Almaa — are paved and accessible by standard vehicle. No 4x4 required." },
    { question: "How far is Khamis Mushait from Abha?", answer: "Khamis Mushait is approximately 25km east of Abha — about 25–30 minutes by taxi. The two cities form a combined urban area and are often treated as one destination. Khamis Mushait has a large traditional market, the King Khalid Military Academy, and more commercial infrastructure than Abha." },
];

const districts = [
    { name: 'Al-Soudah (2,910m)', slug: 'al-soudah', desc: "Saudi Arabia's highest accessible peak — cable car, Dalghan adventure park, Al-Soudah viewpoint. 25km west of Abha.", color: 'bg-blue-50 border-blue-200', badge: "Saudi's Highest · 2,910m · Cable Car" },
    { name: 'Habala Village', slug: 'habala-village', desc: 'Cliffside Qahtani heritage village — accessible only by cable car. Hangs 300m below the plateau on a sheer cliff face. 45km from Abha.', color: 'bg-amber-50 border-amber-200', badge: 'Cliffside · Cable Car Only · Unique' },
    { name: 'Rijal Almaa Heritage Village', slug: 'rijal-almaa', desc: 'UNESCO tentative list — colourful decorated stone tower houses, geometric gypsum facades, 8–10 story buildings. Heritage museum. 70km west.', color: 'bg-rose-50 border-rose-200', badge: 'UNESCO Candidate · Decorated Towers · 70km' },
    { name: 'Asir National Park', slug: 'asir-national-park', desc: 'Highland cloud forest — juniper, wild olive, endemic flora. Dalghan adventure park (zip lines, paragliding). Khareef mist season July–September.', color: 'bg-green-50 border-green-200', badge: 'Cloud Forest · Khareef · Adventure' },
    { name: 'Khamis Mushait', slug: 'khamis-mushait', desc: "Abha's twin city — 25km east. Large traditional market, King Khalid Military Academy, commercial centre. Asir's largest combined urban area.", color: 'bg-stone-50 border-stone-200', badge: 'Twin City · Market · 25km' },
    { name: 'Abha Airport (AHB)', slug: 'abha-airport', desc: 'Prince Sultan bin Abdulaziz Airport — IATA: AHB. Saudia, flynas, flyadeal. 20km from city. Pre-book — limited on-demand transport at arrivals.', color: 'bg-slate-50 border-slate-200', badge: 'IATA: AHB · 20km · Pre-Book' },
];

const travelTimes = [
    { destination: 'Jeddah', distance: '640 km', time: '6.5 hrs' },
    { destination: 'Riyadh', distance: '850 km', time: '9 hrs' },
    { destination: 'Makkah', distance: '730 km', time: '8 hrs' },
    { destination: 'Jizan', distance: '200 km', time: '2.5 hrs' },
    { destination: 'Najran', distance: '300 km', time: '3.5 hrs' },
    { destination: 'Taif', distance: '470 km', time: '5 hrs' },
    { destination: 'Al-Baha', distance: '320 km', time: '3.5 hrs' },
    { destination: 'Al-Soudah', distance: '25 km', time: '40 min' },
    { destination: 'Habala Village (cable car)', distance: '45 km', time: '50 min' },
    { destination: 'Rijal Almaa Village', distance: '70 km', time: '1.5 hrs' },
    { destination: 'Khamis Mushait', distance: '25 km', time: '30 min' },
    { destination: 'Abha Airport (AHB)', distance: '20 km', time: '25 min' },
];

export default function AbhaPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Abha</span>
                </div>
            </div>

            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Abha · Asir Region · 2,200m · Saudi Arabia&apos;s Mountain City · Khareef Season</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Abha Taxi — Al-Soudah, Habala Village, Rijal Almaa &amp; AHB Airport</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Private taxi in <strong>Abha</strong> — <strong>Al-Soudah (Saudi&apos;s highest point), Habala cliffside village, Rijal Almaa UNESCO heritage village</strong>, Asir National Park, AHB Airport. Khareef season mountain specialists. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Abha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Abha Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-800 mb-1">2,200m</div><div className="text-sm text-gray-600">Abha City Altitude</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">18–25°C</div><div className="text-sm text-gray-600">Summer Temperature</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">Khareef</div><div className="text-sm text-gray-600">Monsoon Season July–Sept</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">24/7</div><div className="text-sm text-gray-600">Mountain Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Abha &amp; Asir — Districts &amp; Taxi Transfers</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every major Asir destination requires a private driver — no public transport to Al-Soudah, Habala, or Rijal Almaa. Select a destination for transfer details.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/abha/${d.slug}`} className={`block p-6 rounded-2xl border ${d.color} hover:shadow-md transition-shadow`}>
                                <div className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">{d.badge}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{d.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                                <div className="mt-4 text-green-700 text-sm font-medium">Book taxi →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Abha — Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto rounded-2xl border border-green-200">
                        <table className="w-full text-sm">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-center font-semibold">Taxi Time</th>
                                    <th className="px-6 py-4 text-center font-semibold">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-green-100">
                                {travelTimes.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{r.destination}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.distance}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4 text-center">
                                            <Link href="/booking" className="text-green-700 hover:text-green-900 font-medium text-xs">Book →</Link>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Abha Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Travellers Say About Abha Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Khalid M.', origin: 'Riyadh', text: 'Booked Abha airport pickup and a full day at Al-Soudah and Habala. Driver knew every mountain road. Khareef season mist was magical — like another country.' },
                            { name: 'Sarah A.', origin: 'Jeddah', text: 'Driver took us to Rijal Almaa for the afternoon light — the coloured tower houses are extraordinary. Then Habala the next morning. Two best sites in Asir, perfectly organised.' },
                            { name: 'Omar T.', origin: 'Dubai', text: 'Travelling with family, needed a Hiace for 9 people. Smooth booking, on time at AHB airport, full day Asir circuit. Professional service.' },
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-green-100">
                                <p className="text-sm text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                                <div className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· from {t.origin}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-green-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Abha Transfer</h2>
                    <p className="mb-8 opacity-90">Airport, Al-Soudah, Habala, Rijal Almaa — fixed rate, 24/7, khareef season specialists.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Abha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Abha Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 bg-white">
                <CustomerUpdates location="Abha" />
            </div>
            <div className="py-8 bg-white">
                <NearbyCities currentCity="Abha" />
            </div>
        </div>
    );
}
