import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/wadi-najran' },
    title: 'Wadi Najran Taxi | Najran Dam & Oasis Valley Transfer — Scenic Drive',
    description: 'Taxi to Wadi Najran and Najran Dam — 20km from city, scenic oasis valley, date palm groves, reservoir. Most picturesque landscape in Najran Province. Fixed rate.',
    keywords: ['Wadi Najran taxi', 'Najran Dam taxi', 'Najran oasis taxi', 'Wadi Najran transfer', 'Najran valley taxi'],
    openGraph: {
        title: 'Wadi Najran Taxi — Dam, Oasis Valley & Date Palms Transfer',
        description: 'Taxi to Wadi Najran and the dam. Scenic oasis, 20km from city. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/najran/wadi-najran',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Wadi Najran?", answer: "Wadi Najran is the main valley system running through Najran Province — the natural landscape that made Najran one of the great oasis settlements of ancient Arabia. The wadi has a year-round water supply fed by mountain catchment, supporting extensive date palm cultivation. The Najran Dam (Sadd Najran) at the upstream end of the valley is the dominant landscape feature, with a large reservoir visible from the surrounding hills." },
    { question: "What is the Najran Dam?", answer: "The Najran Dam (Sadd Najran) is a large earth-fill dam on the main wadi approximately 20km west of Najran city. The reservoir behind the dam is one of the more scenic water features in southwest Saudi Arabia — surrounded by the rocky Asir foothills and dotted with date palms on the lower slopes. The dam road and reservoir area is a popular local recreation destination, especially in evenings and on weekends." },
    { question: "How far is Wadi Najran from the city?", answer: "The main Wadi Najran valley begins at the city edge and extends 20–30km west. The Najran Dam reservoir is approximately 20km west of the city centre — about 20–25 minutes by taxi. The scenic wadi drive runs along the valley floor through date palm groves and rocky terrain." },
    { question: "Are there date farms to visit in Wadi Najran?", answer: "Yes — Wadi Najran has extensive date palm cultivation. The valley produces its own varieties of dates distinct from the Qassim Sukkari or Eastern Province varieties. During harvest season (August–September), some farms welcome visitors and sell fresh dates. Najrani dates are less commercially famous than Qassim dates but valued locally." },
    { question: "Can I combine Wadi Najran with Al-Ukhdood in one day?", answer: "Yes — Al-Ukhdood (5km from city, 1 hour) + Emara Palace (2km, 1 hour) + Wadi Najran drive (20km, scenic 1.5 hours) makes a complete half-day Najran itinerary. Your driver covers all three with waiting time between sites." },
];

export default function WadiNajranPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Wadi Najran</span>
                </div>
            </div>

            <section className="bg-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Wadi Najran · Dam Reservoir · Date Palm Oasis · 20km from Najran</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Wadi Najran Taxi — Dam, Oasis Valley &amp; Date Palm Transfer</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Taxi to <strong>Wadi Najran and Najran Dam</strong> — 20km west, 20 minutes. <strong>Scenic oasis valley, date palm groves, reservoir</strong>. Most picturesque landscape in Najran Province. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Najran%20and%20the%20dam" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Wadi Najran Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-700 mb-1">20 km</div><div className="text-sm text-gray-600">from Najran city</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Dam</div><div className="text-sm text-gray-600">Najran Reservoir</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Oasis</div><div className="text-sm text-gray-600">Date Palm Valley</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Scenic</div><div className="text-sm text-gray-600">Best Najran Landscape</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Wadi Najran — Valley, Dam &amp; Oasis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Oasis Valley', desc: "Wadi Najran is one of the most fertile wadi systems in southwest Arabia — supported by year-round water from mountain catchment above the Asir highlands. The valley floor is planted with date palms, sorghum, and fruit trees in a continuous agricultural strip. The contrast between the green valley floor and the bare rocky hillsides is one of the most visually striking natural landscapes in Saudi Arabia.", note: 'Best visit: morning or late afternoon for light.' },
                            { title: 'Najran Dam & Reservoir', desc: "The Najran Dam (Sadd Najran) is a major earth-fill dam approximately 20km upstream from the city. The reservoir behind it is a significant body of water — stretching several kilometres upstream in a narrow canyon. The dam road offers views down the full length of the reservoir and across to the rocky Asir foothills. Local families picnic on the dam banks, especially evenings and Thursdays.", note: 'Dam viewpoint: best from the dam road above.' },
                            { title: 'Date Palm Cultivation', desc: "Najran dates are cultivated in the wadi valley — varieties distinct from the more commercially famous Qassim Sukkari. The local varieties include softer, darker dates suited to the wadi microclimate. During harvest season (August–September) the date palm stands are heavy with fruit and some farms open to visitors. The traditional irrigation channels (falaj system) feeding the farms are visible along the valley floor.", note: 'Harvest season: August–September.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-700 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wadi Najran Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Wadi Najran Taxi</h2>
                    <p className="mb-8 opacity-90">20km from Najran — oasis valley, dam reservoir, date palms. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Najran%20and%20the%20dam" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Wadi Najran Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran/bir-hima" className="text-red-700 hover:underline">← Bir Hima UNESCO</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran/najran-old-town" className="text-red-700 hover:underline">Najran Old Town →</Link>
            </div>
        </div>
    );
}
