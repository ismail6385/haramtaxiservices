import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/jabal-ikmah' },
    title: 'Jabal Ikmah AlUla Taxi | Open-Air Library & Ancient Inscriptions Transfer',
    description: "Taxi to Jabal Ikmah from AlUla — AlUla's open-air library with thousands of Nabataean, Lihyanite, and ancient Arabian inscriptions. Sacred valley, 12km from AlUla. Fixed rate.",
    keywords: ['Jabal Ikmah AlUla taxi', 'AlUla open air library taxi', 'ancient inscriptions AlUla taxi', 'Jabal Ikmah transfer', 'AlUla sacred valley taxi'],
    openGraph: {
        title: "Jabal Ikmah Taxi — AlUla Open-Air Library Transfer",
        description: "Taxi to Jabal Ikmah, AlUla's open-air library. Ancient inscriptions, sacred valley, 12km. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/al-ula/jabal-ikmah',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Jabal Ikmah?", answer: "Jabal Ikmah (also called Al-Khurayba) is described as AlUla's open-air library — a sacred sandstone valley with thousands of ancient inscriptions carved into the cliff faces and boulders over a period spanning approximately the 8th century BCE to the 1st century CE. The inscriptions are in Dadanite, Lihyanite, Minaic, Nabataean, and Thamudic scripts — representing the full sequence of ancient North Arabian writing traditions. It is one of the largest concentrations of ancient inscriptions in the world." },
    { question: "Why was Jabal Ikmah sacred?", answer: "Jabal Ikmah was a sacred site for the ancient Dadanite and Lihyanite peoples — a place of ritual, prayer, and petition. The inscriptions on the cliff faces are not merely graffiti but include religious dedications to the gods (particularly Dhu Ghabat), votive texts, commemorative inscriptions, and requests for divine protection. The density of inscription suggests the valley was actively used as a sacred outdoor sanctuary for centuries." },
    { question: "How far is Jabal Ikmah from AlUla?", answer: "Approximately 12km from AlUla city centre — about 12 minutes by taxi north through the valley, in the direction of Hegra. It is between the Old Town and Hegra, making it a natural intermediate stop in a morning or afternoon AlUla heritage itinerary." },
    { question: "What scripts can I see at Jabal Ikmah?", answer: "The inscriptions at Jabal Ikmah span multiple ancient writing systems: Dadanite (related to South Arabian script), Lihyanite (an evolved form of Dadanite), Minaic (a separate South Arabian dialect), Nabataean (the script from which Arabic script ultimately descends), and Thamudic (an umbrella term for various ancient North Arabian scripts). Many inscriptions are bilingual or show script transitions, making Jabal Ikmah exceptionally valuable for the history of writing in Arabia." },
    { question: "Do I need to book Jabal Ikmah in advance?", answer: "Jabal Ikmah requires an Experience AlUla ticket — book via alula.sa in advance, especially in peak season (October–April). The visit includes a guided walk along the valley floor with the key inscription panels explained. The terrain is relatively accessible — flat walking on the valley floor with some boulder scrambling optional." },
];

export default function JabalIkmahPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jabal Ikmah</span>
                </div>
            </div>

            <section className="bg-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jabal Ikmah · Open-Air Library · Ancient Inscriptions · Sacred Valley · 12km from AlUla</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jabal Ikmah Taxi — AlUla Open-Air Library &amp; Ancient Inscriptions Transfer</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi from <strong>AlUla to Jabal Ikmah</strong> — 12km, 12 minutes. <strong>Thousands of ancient Nabataean, Lihyanite, and Dadanite inscriptions</strong> carved into sandstone cliff faces. Arabia&apos;s largest open-air inscription site. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Jabal%20Ikmah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jabal Ikmah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">12 km</div><div className="text-sm text-gray-600">from AlUla</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">1000s</div><div className="text-sm text-gray-600">Ancient Inscriptions</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">6 Scripts</div><div className="text-sm text-gray-600">Dadanite to Nabataean</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">Sacred</div><div className="text-sm text-gray-600">Ancient Sanctuary Valley</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jabal Ikmah — The Open-Air Library</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Inscriptions', desc: "Thousands of inscriptions cover the sandstone cliff faces and boulders of the Jabal Ikmah valley — ranging from single-line personal names to multi-line religious dedications, prayers, and commemorative texts. The oldest inscriptions (8th–6th century BCE) are in Dadanite script; later inscriptions transition through Lihyanite to Nabataean. Side-by-side inscriptions in different scripts make this one of the world's most important sites for the history of writing.", note: 'Guides explain key inscription panels.' },
                            { title: 'The Sacred Valley', desc: "The geology of Jabal Ikmah — a narrow valley between overhanging sandstone cliffs — created natural shelter and a sense of enclosed sacred space that drew worshippers for over a millennium. Ancient travellers on the incense route would make ritual dedications here before continuing north or south. The same sheltering cliffs that protected the ancient pilgrims now protect the inscriptions from direct weathering.", note: 'Valley floor accessible on foot.' },
                            { title: 'For Writers & Linguists', desc: "Jabal Ikmah is considered the most important site in the world for studying the transition from ancient South and North Arabian scripts to the Nabataean script — which evolved directly into the Arabic script used today. The inscriptions document the entire sequence. For anyone interested in the history of Arabic writing, this is an essential and deeply moving site.", note: 'Photography permitted — no flash on close inscription panels.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-blue-800 font-medium border-t border-blue-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jabal Ikmah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jabal Ikmah Taxi</h2>
                    <p className="mb-8 opacity-90">12km from AlUla — ancient inscriptions, sacred valley. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Jabal%20Ikmah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jabal Ikmah Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula/old-town" className="text-amber-700 hover:underline">← AlUla Old Town</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula/al-ula-airport" className="text-amber-700 hover:underline">AlUla Airport →</Link>
            </div>
        </div>
    );
}
