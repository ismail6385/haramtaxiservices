import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/abu-arish' },
    title: 'Abu Arish Taxi | Hamdah Fort & Historic Trading Town Jazan',
    description: 'Taxi to Abu Arish from Jazan — 60km, 50 minutes. Historic trading town, Hamdah Fort (Ottoman-era), traditional souq. Jazan Region heritage transfer. Fixed rate.',
    keywords: ['Abu Arish taxi', 'Abu Arish Jazan taxi', 'Hamdah Fort taxi', 'Jazan to Abu Arish taxi', 'Abu Arish heritage tour'],
    openGraph: {
        title: 'Abu Arish Taxi — Hamdah Fort & Historic Trading Town',
        description: 'Taxi to Abu Arish from Jazan. 60km, Hamdah Fort, traditional souq. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/jazan/abu-arish',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Abu Arish?", answer: "Abu Arish is a historic trading town in Jazan Region, approximately 60km northeast of Jazan city. It was historically one of the most important commercial centres of the southern Hejaz, known as a market town for goods traded between the coast, mountains, and Yemen. The town has a preserved historic souq and several significant heritage sites." },
    { question: "What is Hamdah Fort?", answer: "Hamdah Fort (Qasr Hamdah or Al-Qal'a) is a historic fortification in Abu Arish dating from the Ottoman period (approximately 16th–17th century) when Ottoman forces controlled the Tihama coast and Yemen. The fort is a substantial mud-brick and stone construction with watchtowers and courtyard layout, used to control the Abu Arish oasis and trade routes." },
    { question: "How far is Abu Arish from Jazan?", answer: "Abu Arish is approximately 60km northeast of Jazan city — about 50 minutes by taxi on the main highway through the Tihama plain. The road passes through agricultural areas and several smaller villages." },
    { question: "What is the traditional souq in Abu Arish?", answer: "Abu Arish has a traditional covered market that still operates as a functional local souq — selling produce, spices, honey (Jazan Region honey is particularly valued), woven goods, and traditional household items. The souq's covered arcade structure is historic and architecturally distinct from modern Saudi commercial areas." },
    { question: "Can I combine Abu Arish with Sabya in one day?", answer: "Yes — Abu Arish (60km from Jazan) and Sabya (55km from Jazan, 15km from Abu Arish) are very close to each other. A combined circuit — Jazan → Abu Arish (Hamdah Fort, souq) → Sabya (university souq) → back to Jazan — takes a full morning with a driver who waits. One rate for the full circuit." },
];

export default function AbuArishPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Abu Arish</span>
                </div>
            </div>

            <section className="bg-amber-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Abu Arish · Hamdah Fort · Historic Trading Town · 60km from Jazan</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Abu Arish Taxi — Hamdah Fort &amp; Historic Souq</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi from <strong>Jazan to Abu Arish</strong> — 60km northeast, 50 minutes. Historic trading town with <strong>Hamdah Fort (Ottoman-era)</strong>, traditional covered souq, and Tihama agricultural heritage. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Abu%20Arish" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Abu Arish Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">60 km</div><div className="text-sm text-gray-600">from Jazan City</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Ottoman</div><div className="text-sm text-gray-600">Hamdah Fort</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Souq</div><div className="text-sm text-gray-600">Historic Covered Market</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">50 min</div><div className="text-sm text-gray-600">Taxi Journey</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Abu Arish — Heritage &amp; Souq</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Hamdah Fort', desc: "A substantial Ottoman-era fortress in Abu Arish — thick mud-brick and stone walls, corner watchtowers, and an enclosed courtyard. Built during the period of Ottoman control of the Tihama coast and Yemen in the 16th–17th centuries. One of the most significant Ottoman heritage sites in southern Saudi Arabia.", note: 'Managed by Saudi Heritage Commission.' },
                            { title: 'Historic Trading Town Souq', desc: "Abu Arish was historically one of the most important market towns of the southern Hejaz — positioned on trade routes between the Tihama coast, the Asir mountains, and Yemen. The traditional covered arcade market still operates and reflects this heritage in its goods — local honey, spices, woven baskets, and regional crafts.", note: 'Busiest: Thursday–Saturday mornings.' },
                            { title: 'Jazan Region Honey', desc: "Jazan Region produces some of Saudi Arabia's most prized honey — Sidr (lote tree), Samur, and Talh varieties from the Tihama plain and Asir foothills. Abu Arish market is one of the best places to buy authentic local honey directly from producers. The honey is raw, unprocessed, and significantly different in flavour from commercial honey.", note: 'Sidr honey: most valued, sold in small jars.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Abu Arish Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Abu Arish Taxi</h2>
                    <p className="mb-8 opacity-90">Hamdah Fort, traditional souq, Jazan honey — fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Abu%20Arish" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Abu Arish Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan/sabya" className="text-teal-600 hover:underline">← Sabya</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan/al-dayer" className="text-teal-600 hover:underline">Al Dayer →</Link>
            </div>
        </div>
    );
}
