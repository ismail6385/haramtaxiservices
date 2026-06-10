import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/qasr-ibrahim' },
    title: 'Qasr Ibrahim Taxi | Al-Ahsa Ottoman Fortress Transfer — 16th Century',
    description: 'Taxi to Qasr Ibrahim (Ibrahim Palace) in Al-Ahsa — 5km from Hofuf city centre. 16th-century Ottoman fortress, Al-Khamis Mosque inside walls. Most accessible heritage site in Al-Ahsa. Fixed rate.',
    keywords: ['Qasr Ibrahim taxi', 'Ibrahim Palace Al-Ahsa taxi', 'Hofuf palace taxi', 'Al-Ahsa Ottoman fortress taxi', 'Qasr Ibrahim Hofuf taxi'],
    openGraph: {
        title: 'Qasr Ibrahim Taxi — Al-Ahsa Ottoman Fortress Transfer',
        description: 'Taxi to Qasr Ibrahim, Al-Ahsa. 16th-century Ottoman fortress. 5km from Hofuf. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa/qasr-ibrahim',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Qasr Ibrahim?", answer: "Qasr Ibrahim (Ibrahim Palace) is a 16th-century Ottoman fortress in the heart of Hofuf city, approximately 5km from the commercial centre. Built around 1555 CE during the Ottoman period of Al-Ahsa, it served as the administrative and military headquarters of the Ottoman garrison in the Eastern Province. The fortress includes Al-Khamis Mosque (one of the oldest mosques in Al-Ahsa) within its walls. The structure has been restored and is open to visitors." },
    { question: "Why is the fortress called Qasr Ibrahim?", answer: "The fortress is named after Ibrahim Pasha, the Ottoman governor who held the Al-Ahsa region in the mid-16th century. The name 'Ibrahim' (Ibrahim Pasha's fortress) has persisted from the Ottoman period. The fortress is also sometimes called the Al-Kout Palace (from 'kout' — a regional word for fortified settlement)." },
    { question: "What is inside Qasr Ibrahim?", answer: "The fortress complex includes: the main fortified walls with corner towers (characteristic Ottoman military architecture); a central courtyard; the Al-Khamis Mosque (a mosque with a distinctive minaret style that predates the Ottoman construction — archaeological evidence suggests an earlier structure on this site); and interpretive displays documenting the Ottoman period of Al-Ahsa. The fortress has been restored and maintains much of the original wall and tower structure." },
    { question: "How far is Qasr Ibrahim from Al-Ahsa city centre?", answer: "Approximately 5km from central Hofuf — about 10 minutes by taxi. It is the most accessible major heritage site in Al-Ahsa, located within the city rather than in the oasis outskirts. It can be combined with the Al-Qaysariyya traditional market (nearby) in a single city-centre visit." },
    { question: "Can I combine Qasr Ibrahim with the traditional market?", answer: "Yes — Qasr Ibrahim and Al-Qaysariyya Market are both in the Hofuf city centre area and can be combined in a 2–3 hour circuit. Qasr Ibrahim (45 minutes) → Al-Qaysariyya Market (1 hour) is the standard city-centre pairing for heritage visitors." },
];

export default function QasrIbrahimPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Qasr Ibrahim</span>
                </div>
            </div>

            <section className="bg-amber-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Qasr Ibrahim · 16th Century Ottoman · Al-Khamis Mosque · City Centre · 5km</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Qasr Ibrahim Taxi — Al-Ahsa Ottoman Fortress Transfer</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi to <strong>Qasr Ibrahim (Ibrahim Palace)</strong> in Al-Ahsa city. <strong>16th-century Ottoman military fortress</strong>, Al-Khamis Mosque within walls. 5km from Hofuf — most accessible heritage site in Al-Ahsa. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Qasr%20Ibrahim%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Qasr Ibrahim Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">1555 CE</div><div className="text-sm text-gray-600">Ottoman Construction</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">5 km</div><div className="text-sm text-gray-600">from Hofuf City Centre</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Fortress</div><div className="text-sm text-gray-600">Walls + Corner Towers</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Mosque</div><div className="text-sm text-gray-600">Al-Khamis Inside Walls</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Qasr Ibrahim — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Ottoman Military Architecture', desc: "Qasr Ibrahim is a well-preserved example of 16th-century Ottoman military architecture in Arabia — a rectangular fortified compound with corner towers, thick stone walls, and a defended entrance. The construction style reflects the Ottoman military engineering of the period, adapted to the Arabian context. The walls are approximately 4–5m high and have survived relatively intact through restoration. The fortress is one of the best examples of the Ottoman presence in the Eastern Province.", note: 'Architecture walk: approx 30 minutes circuit.' },
                            { title: 'Al-Khamis Mosque', desc: "Within the Qasr Ibrahim walls is Al-Khamis Mosque — one of the oldest mosques in Al-Ahsa. Archaeological evidence suggests the mosque site predates the Ottoman fortress construction; the Ottoman builders incorporated and rebuilt the existing mosque within their compound. The mosque has a distinctive minaret style and is still used for prayers. The combination of fortress military architecture and active religious site within one compound is unusual.", note: 'Mosque: active. Dress modestly for visit.' },
                            { title: 'City Centre Location', desc: "Qasr Ibrahim is in central Hofuf — the most accessible heritage site in Al-Ahsa without requiring travel into the oasis. It can be combined with the Al-Qaysariyya traditional market (short walk from the palace area) for a city-centre heritage circuit. The surrounding neighbourhood has traditional Hofuf urban character — old commercial streets, traditional architecture, and local daily life.", note: 'Combine with: Al-Qaysariyya Market (15 min walk).' },
                        ].map((s, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-amber-700 font-medium border-t border-amber-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qasr Ibrahim Taxi FAQ</h2>
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

            <section className="py-14 bg-amber-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Qasr Ibrahim Taxi</h2>
                    <p className="mb-8 opacity-90">5km from Hofuf — Ottoman fortress, Al-Khamis Mosque. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Qasr%20Ibrahim%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Qasr Ibrahim Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa/jawatha-mosque" className="text-amber-700 hover:underline">← Jawatha Mosque</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa/al-qaysariyya-market" className="text-amber-700 hover:underline">Al-Qaysariyya Market →</Link>
            </div>
        </div>
    );
}
