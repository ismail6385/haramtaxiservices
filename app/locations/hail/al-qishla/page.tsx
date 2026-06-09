import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/al-qishla' },
    title: 'Al-Qishla Palace Hail Taxi | Ottoman Heritage & Cultural Centre',
    description: 'Taxi to Al-Qishla Palace in Hail — Ottoman-era barracks and cultural heritage centre in Hail city centre. Part of the Hail heritage circuit. Fixed rate.',
    keywords: ['Al-Qishla Hail taxi', 'Hail Ottoman palace taxi', 'Hail cultural centre taxi', 'Hail heritage circuit taxi', 'Al Qishla Palace Hail'],
    openGraph: {
        title: 'Al-Qishla Palace Hail — Ottoman Heritage & Cultural Centre Taxi',
        description: 'Taxi to Al-Qishla Palace, Hail Ottoman heritage centre. Part of Hail heritage circuit.',
        url: 'https://haramtaxiservice.com/locations/hail/al-qishla',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Al-Qishla Palace?', answer: "Al-Qishla (Al-Qishlah) Palace in Hail is an Ottoman-era military barracks complex built during the 19th century when the Ottoman Empire maintained administrative and military presence in the Hejaz and Najd regions. 'Qishla' is an Ottoman-Turkish word for military barracks (from Turkish kışla). The building later served as a government facility and has been preserved and restored as a heritage site and cultural centre." },
    { question: 'What is the Ottoman connection to Hail?', answer: "The Ottoman Empire had indirect influence over Hail through the Rashidi Shammar emirate, which at various points maintained relations (sometimes cooperative, sometimes tense) with Ottoman authorities in the Hejaz. Ottoman military architecture like Al-Qishla reflects this period of 19th-century interaction between the Ottoman state and the regional tribal powers of northern Arabia." },
    { question: 'How does Al-Qishla differ from Qasr Barzan?', answer: "Qasr Barzan is indigenous Najdi architecture — mud-brick, local materials, built by the Al Rashid dynasty for their own use. Al-Qishla reflects Ottoman architectural influence — different building techniques, different layout, and a different historical narrative (external power vs. local dynasty). Together they represent the competing forces that shaped 19th-century Hail." },
    { question: 'Is Al-Qishla in the city centre?', answer: "Yes — Al-Qishla is in the central Hail area, within a few minutes of Qasr Barzan. It can be visited as part of a Hail city heritage circuit that covers all the major historic sites in one taxi journey." },
    { question: 'What can I see inside Al-Qishla?', answer: "Al-Qishla has been developed as a cultural heritage facility with exhibitions on Hail's history, traditional artefacts, and information on the Shammar tribe and the Ottoman period. The architectural character of the building itself — the courtyard, arched galleries, and exterior facade — is the main draw." },
];

export default function AlQishlaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Qishla Palace</span>
                </div>
            </div>

            <section className="bg-teal-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Qishla · Ottoman Barracks · Cultural Heritage · Hail City Centre</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Qishla Palace Hail — Ottoman Heritage &amp; Cultural Centre</h1>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Taxi to <strong>Al-Qishla Palace</strong> — Hail&apos;s Ottoman-era military barracks, now a cultural heritage centre. City centre location. Complete the <strong>Hail heritage circuit</strong> with Qasr Barzan and A&apos;arif Fort.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hail%20heritage%20city%20tour" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Hail Heritage Circuit
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">The Complete Hail Heritage Circuit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { site: "A'arif Fort", time: '1 hr', color: 'bg-red-50 border-red-100', accent: 'text-red-700', desc: "Hilltop fortress above the city — best 360° panorama of Hail. Start here at golden hour for the best photography.", dist: '3km from centre' },
                            { site: 'Qasr Barzan', time: '1 hr', color: 'bg-amber-50 border-amber-100', accent: 'text-amber-700', desc: "The Shammar Emirate's mud-brick palace — the heart of Al Rashid dynasty power in 19th-century northern Arabia.", dist: '2km from centre' },
                            { site: 'Al-Qishla Palace', time: '45 min', color: 'bg-teal-50 border-teal-100', accent: 'text-teal-700', desc: "Ottoman-era barracks and cultural heritage centre — the external influence on 19th-century Hail in architectural form.", dist: '2km from centre' },
                        ].map((s, i) => (
                            <div key={i} className={`${s.color} p-6 rounded-2xl border`}>
                                <div className={`text-sm font-bold ${s.accent} mb-2 uppercase tracking-wide`}>{s.dist}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.site}</h3>
                                <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                                <div className={`text-xs ${s.accent} font-semibold`}>Recommended time: {s.time}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
                        <p className="text-gray-600 text-sm mb-4">Full heritage circuit with driver-waits: approximately 3.5–4 hours. One fixed rate covers all three sites.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hail%20heritage%20city%20tour%20-%20Aarif%20Fort%2C%20Qasr%20Barzan%2C%20Al-Qishla" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2 mx-auto">
                                <WhatsAppIcon className="w-4 h-4" />Book Full Heritage Circuit
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Qishla Palace FAQ</h2>
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

            <section className="py-14 bg-teal-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Hail Heritage Circuit</h2>
                    <p className="mb-8 opacity-90">Al-Qishla + Qasr Barzan + A&apos;arif Fort — one driver, one rate, 3.5 hours.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hail%20heritage%20city%20tour" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Hail Heritage Circuit
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail/aarif-fort" className="text-slate-600 hover:underline">← A&apos;arif Fort</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail" className="text-slate-600 hover:underline">Back to Hail Hub</Link>
            </div>
        </div>
    );
}
