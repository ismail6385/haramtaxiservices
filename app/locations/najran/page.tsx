import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import CustomerUpdates from '@/components/CustomerUpdates';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran' },
    title: 'Najran Taxi | Al-Ukhdood, Bir Hima UNESCO & Airport Transfers — Private Car Service',
    description: "Private taxi in Najran — EAM Airport pickups, Al-Ukhdood archaeological site, Bir Hima UNESCO rock art, Emara Palace, Wadi Najran. Fixed rate 24/7.",
    keywords: ['Najran taxi', 'Al-Ukhdood taxi', 'Najran airport taxi', 'EAM airport transfer', 'Bir Hima taxi', 'Najran private car', 'Najran heritage tour taxi'],
    openGraph: {
        title: 'Najran Taxi — Al-Ukhdood, Bir Hima UNESCO & Airport Transfers',
        description: "Private taxi in Najran. EAM Airport, Al-Ukhdood ruins, Bir Hima UNESCO, Emara Palace. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/najran',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service — Najran",
    "description": "Private taxi in Najran — EAM Airport transfers, Al-Ukhdood archaeological site, Bir Hima UNESCO rock art, Emara Palace, and intercity routes to Riyadh, Abha, and Jazan.",
    "telephone": "+966575806733",
    "address": { "@type": "PostalAddress", "addressLocality": "Najran", "addressRegion": "Najran Province", "addressCountry": "SA" },
    "url": "https://haramtaxiservice.com/locations/najran",
    "areaServed": "Najran",
    "priceRange": "$$"
} as const;

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "What is Najran famous for?", "acceptedAnswer": { "@type": "Answer", "text": "Najran is famous for: Al-Ukhdood (an ancient pre-Islamic city mentioned in the Quran as the site of the 'People of the Trench'); Bir Hima (a UNESCO World Heritage Site with 25,000+ ancient rock carvings, inscribed 2021); Emara Palace (traditional Najrani mud-brick architecture); and its unique southwestern location near the Yemen border." } },
        { "@type": "Question", "name": "What is Al-Ukhdood in Najran?", "acceptedAnswer": { "@type": "Answer", "text": "Al-Ukhdood is an ancient pre-Islamic city in Najran — the site referenced in Surah Al-Burooj of the Quran as the location of the 'Aṣḥāb al-Ukhdūd' (People of the Trench). The site has Iron Age foundations from the Sabaean and Himyarite periods (1st millennium BCE to 6th century CE)." } },
        { "@type": "Question", "name": "What is Bir Hima UNESCO site near Najran?", "acceptedAnswer": { "@type": "Answer", "text": "Bir Hima Cultural Area is a UNESCO World Heritage Site (inscribed 2021) approximately 100km north of Najran city. It has over 25,000 rock carvings and inscriptions spanning from the Neolithic period to the Islamic era — one of the most important rock art sites in Arabia." } },
    ]
} as const;

const faqs = [
    { question: "What is Najran famous for?", answer: "Najran is famous for Al-Ukhdood (ancient pre-Islamic ruins mentioned in the Quran), Bir Hima UNESCO World Heritage Site (25,000+ rock carvings), the unique Najrani tower-house architecture influenced by Yemeni building traditions, and the Emara Palace complex. It is Saudi Arabia's southernmost significant city, set in an oasis valley near the Yemen border." },
    { question: "What is Al-Ukhdood?", answer: "Al-Ukhdood is a pre-Islamic archaeological site in Najran — referenced in Surah Al-Burooj of the Quran as the location of the 'Aṣḥāb al-Ukhdūd' (People of the Trench). The site has Iron Age foundations from Sabaean and Himyarite occupation and is one of the most historically and religiously significant archaeological sites in the Arabian Peninsula." },
    { question: "What is Bir Hima UNESCO site?", answer: "Bir Hima Cultural Area is a UNESCO World Heritage Site (inscribed July 2021) approximately 100km north of Najran. It has over 25,000 rock carvings and inscriptions spanning the Neolithic period through the Islamic era — camels, cattle, horses, hunting scenes, and ancient scripts carved into the sandstone. The site also has ancient wells that served the pre-Islamic incense caravan route." },
    { question: "Is there Uber in Najran?", answer: "Uber and Careem have limited coverage in Najran. For airport pickups, heritage site visits, and intercity transfers, pre-booked private taxi is the reliable option. Sites like Bir Hima (100km from the city) have no on-demand transport at all — pre-booking is essential." },
    { question: "What is the Emara Palace?", answer: "Emara Palace (also called Najran Palace or Al-Emara) is a traditional Najrani mud-brick and stone palace in the city centre — the most architecturally distinctive building in Najran. It reflects the unique Najrani building style: multi-story construction, decorated parapets with coloured stones and gypsum inlays, wooden balconies, and a design influenced by the Yemeni highland architectural tradition. It houses the Najran Regional Museum." },
    { question: "How far is Najran from Riyadh?", answer: "Approximately 980km south of Riyadh — about 10 hours by private taxi via the main southern highway through Wadi Al-Dawasir. We offer this as a full-day transfer with two scheduled rest stops. An overnight departure from Riyadh arrives in Najran in the morning." },
    { question: "What airport serves Najran?", answer: "Najran Domestic Airport (IATA: EAM) — also known as Prince Abdulmajeed bin Abdulaziz Airport. Airlines: Saudia and flynas, with domestic routes to Riyadh (RUH), Jeddah (JED), and other Saudi cities. The airport is approximately 10km from Najran city centre." },
    { question: "What is traditional Najrani architecture?", answer: "Najrani architecture is one of the most distinctive in Saudi Arabia — multi-story mud-brick and stone tower houses with decorated facades, wooden balconies, zigzag parapet decorations, and coloured stone or gypsum inlay patterns. It is closely related to the traditional architecture of Yemen's highland cities (Sana'a, Sa'dah) but with distinct local variations. The Emara Palace and old town houses are the best examples." },
    { question: "How far is Najran from Abha?", answer: "Approximately 300km northwest — about 3.5 hours by taxi through the Asir highlands on Route 15. The drive is scenic, passing through mountain terrain before descending into the Najran valley." },
    { question: "What time of year is best to visit Najran?", answer: "October to March — Najran's winter season is mild and pleasant (15–25°C days). The valley is green with winter rains and the date palms are productive. Summer (June–September) is hot but drier than the coast. Unlike Riyadh, Najran rarely exceeds 40°C in summer due to its higher elevation and valley climate." },
    { question: "Can I visit the Yemen border from Najran?", answer: "The Al Wadeeah border crossing is approximately 250km east of Najran — about 2.5 hours. It is the main land border crossing between Saudi Arabia and Yemen. We offer transfer service to the border for permitted travellers. Always confirm current border status and entry requirements before travelling." },
];

const districts = [
    { name: 'Al-Ukhdood Archaeological Site', slug: 'al-ukhdood', desc: "Pre-Islamic Sabaean city, referenced in the Quran (Surah Al-Burooj). Iron Age ruins, excavated city blocks, and the 'People of the Trench' site. 5km from city centre.", color: 'bg-rose-50 border-rose-200', badge: 'Quran · Sabaean · Pre-Islamic' },
    { name: 'Emara Palace', slug: 'emara-palace', desc: 'Traditional Najrani mud-brick palace — unique architecture with decorated parapets, coloured stone inlay, and Yemeni-influenced design. Houses the Najran Regional Museum.', color: 'bg-amber-50 border-amber-200', badge: 'Heritage Palace · Museum' },
    { name: 'Bir Hima Rock Art (UNESCO)', slug: 'bir-hima', desc: '25,000+ ancient rock carvings — UNESCO World Heritage Site (2021). Neolithic to Islamic inscriptions. 100km north of Najran. Driver-waits essential.', color: 'bg-stone-50 border-stone-300', badge: 'UNESCO 2021 · Rock Art' },
    { name: 'Wadi Najran & Dam', slug: 'wadi-najran', desc: 'Scenic oasis valley — Najran Dam reservoir, date palm groves, green wadis. Most picturesque landscape in Najran Province. 20km from city.', color: 'bg-green-50 border-green-200', badge: 'Oasis · Dam · Date Palms' },
    { name: 'Najran Old Town', slug: 'najran-old-town', desc: 'Traditional tower-house architecture unique in Saudi Arabia. Mud-brick multi-story buildings with Yemeni-influenced decorated facades. Najrani souq and heritage lanes.', color: 'bg-orange-50 border-orange-100', badge: 'Tower Houses · Heritage' },
    { name: 'Najran Airport (EAM)', slug: 'najran-airport', desc: 'Prince Abdulmajeed bin Abdulaziz Airport — IATA: EAM. Saudia, flynas. 10km from city. Pre-book taxi — no transport at arrivals.', color: 'bg-slate-50 border-slate-200', badge: 'IATA: EAM · 10km' },
];

const travelTimes = [
    { destination: 'Riyadh', distance: '980 km', time: '10 hrs' },
    { destination: 'Abha', distance: '300 km', time: '3.5 hrs' },
    { destination: 'Khamis Mushait', distance: '320 km', time: '3.5 hrs' },
    { destination: 'Jazan', distance: '430 km', time: '4.5 hrs' },
    { destination: 'Sharurah', distance: '320 km', time: '3 hrs' },
    { destination: 'Yemen Border (Al Wadeeah)', distance: '250 km', time: '2.5 hrs' },
    { destination: 'Bir Hima (UNESCO)', distance: '100 km', time: '1 hr' },
    { destination: 'Al-Ukhdood Site', distance: '5 km', time: '5 min' },
    { destination: 'Wadi Najran Dam', distance: '20 km', time: '20 min' },
    { destination: 'Emara Palace', distance: '2 km', time: '5 min' },
];

export default function NajranPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Najran</span>
                </div>
            </div>

            <section className="bg-red-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Najran · Al-Ukhdood · Bir Hima UNESCO · Emara Palace · Southwest Arabia</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Najran Taxi — Al-Ukhdood, Bir Hima UNESCO &amp; Airport Transfers</h1>
                        <p className="text-xl text-red-100 mb-8 font-light">
                            Private taxi in <strong>Najran</strong> — <strong>EAM Airport pickups, Al-Ukhdood Quranic ruins, Bir Hima UNESCO rock art (2021), Emara Palace</strong>, and Wadi Najran. Fixed rate, 24/7 service.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Najran" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Najran Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-red-50 border-b border-red-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-red-800 mb-1">Al-Ukhdood</div><div className="text-sm text-gray-600">Quranic Archaeological Site</div></div>
                        <div><div className="text-3xl font-bold text-red-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">Bir Hima Rock Art (2021)</div></div>
                        <div><div className="text-3xl font-bold text-red-800 mb-1">EAM</div><div className="text-sm text-gray-600">Najran Airport</div></div>
                        <div><div className="text-3xl font-bold text-red-800 mb-1">24/7</div><div className="text-sm text-gray-600">Private Transfers</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Najran — Heritage Sites &amp; Taxi Transfers</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">From the Quranic ruins of Al-Ukhdood to the UNESCO rock art of Bir Hima — all Najran sites require private transport. Select a destination for transfer details.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {districts.map((d) => (
                            <Link key={d.slug} href={`/locations/najran/${d.slug}`} className={`block p-6 rounded-2xl border ${d.color} hover:shadow-md transition-shadow`}>
                                <div className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">{d.badge}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{d.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
                                <div className="mt-4 text-red-700 text-sm font-medium">Book taxi →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Najran — Travel Times &amp; Distances</h2>
                    <div className="overflow-x-auto rounded-2xl border border-red-200">
                        <table className="w-full text-sm">
                            <thead className="bg-red-900 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-center font-semibold">Taxi Time</th>
                                    <th className="px-6 py-4 text-center font-semibold">Book</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-red-100">
                                {travelTimes.map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50'}>
                                        <td className="px-6 py-4 font-medium text-gray-900">{r.destination}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.distance}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.time}</td>
                                        <td className="px-6 py-4 text-center">
                                            <a href={`https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Najran%20to%20${encodeURIComponent(r.destination)}`} target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 font-medium text-xs">WhatsApp →</a>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Najran Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-red-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Travellers Say About Najran Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Khalid A.', origin: 'Riyadh', text: 'Drove us Riyadh to Najran — arrived at Al-Ukhdood at sunrise. The driver knew the site history. Extraordinary trip.' },
                            { name: 'Mohammed S.', origin: 'Abha', text: 'Najran to Bir Hima day trip with driver waiting. Over 100km each way — the driver was patient and professional. UNESCO site is incredible.' },
                            { name: 'Fatimah H.', origin: 'Jeddah', text: 'EAM Airport pickup was seamless. Driver was waiting, knew all the heritage sites, and got us to the hotel without any issues.' },
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-red-100">
                                <p className="text-sm text-gray-700 italic mb-4">&quot;{t.text}&quot;</p>
                                <div className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· from {t.origin}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-red-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Najran Transfer</h2>
                    <p className="mb-8 opacity-90">Airport, Al-Ukhdood, Bir Hima UNESCO, Emara Palace — fixed rate, 24/7.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Najran" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Najran Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 bg-white">
                <CustomerUpdates location="Najran" />
            </div>
            <div className="py-8 bg-white">
                <NearbyCities currentCity="Najran" />
            </div>
        </div>
    );
}
