import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/emara-palace' },
    title: 'Emara Palace Najran Taxi | Najran Regional Museum & Traditional Architecture Transfer',
    description: 'Taxi to Emara Palace (Najran Palace) — traditional Najrani mud-brick architecture, Najran Regional Museum. 2km from city centre. Unique decorated tower-house design. Fixed rate.',
    keywords: ['Emara Palace Najran taxi', 'Najran Palace taxi', 'Najran Regional Museum taxi', 'Najran traditional palace taxi', 'Al-Emara Najran taxi'],
    openGraph: {
        title: 'Emara Palace Taxi — Najran Traditional Palace & Museum Transfer',
        description: 'Taxi to Emara Palace, Najran. Traditional mud palace, Najran Regional Museum. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/najran/emara-palace',
        type: 'website',
    },
};

const faqs = [
    { question: "What is the Emara Palace in Najran?", answer: "Emara Palace (also called Najran Palace, Al-Emara Palace, or Najran Emirate Palace) is the most architecturally significant building in Najran — a traditional multi-story mud-brick and stone palace in the city centre. It is the best example of classical Najrani architecture: decorated facades with coloured stone and gypsum inlay, wooden balconies, crenellated parapets, and a distinctive tower-house form influenced by the highland Yemeni architectural tradition. The palace complex also houses the Najran Regional Museum." },
    { question: "What is unique about Najrani architecture?", answer: "Najrani architecture is one of the most distinctive regional styles in Saudi Arabia — closely related to the highland Yemeni tradition but with local variations. Key features: multi-story construction (3–5 floors) on stone bases with mud-brick upper floors; decorated parapets with alternating coloured stones and applied gypsum geometric patterns; wooden balconies and beam ends projecting from upper floors; small windows with carved surrounds; and the distinctive 'qamaria' — coloured stained glass window panels." },
    { question: "What is in the Najran Regional Museum?", answer: "The Najran Regional Museum (housed within the Emara Palace complex) has archaeological finds from Al-Ukhdood and other Najran sites — Sabaean inscriptions, pottery, metal artefacts, ancient jewellery, and objects from the pre-Islamic trade route. Ethnographic exhibits cover traditional Najrani clothing, weapons, household objects, and the distinctive Najrani jewellery tradition (heavy silver tribal pieces). The museum is one of the best regional museums in southwest Saudi Arabia." },
    { question: "How far is Emara Palace from the city centre?", answer: "The Emara Palace is approximately 2km from the main Najran hotel zone — about 5 minutes by taxi. It is in the central Najran area and can be combined with a visit to Al-Ukhdood (5km away) in a single morning." },
    { question: "Can I combine Emara Palace with Al-Ukhdood?", answer: "Yes — a standard Najran heritage morning covers Emara Palace (1 hour) + Najran Regional Museum (45 minutes) + Al-Ukhdood Archaeological Park (1 hour). Your driver waits between sites. This is the most popular half-day Najran heritage itinerary." },
];

export default function EmaraPalacePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Emara Palace</span>
                </div>
            </div>

            <section className="bg-amber-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Emara Palace · Najran Regional Museum · Traditional Architecture · 2km from Centre</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Emara Palace Taxi — Najran Traditional Palace &amp; Regional Museum Transfer</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi to <strong>Emara Palace (Najran Palace)</strong> — 2km from city centre. <strong>Traditional Najrani mud-brick tower architecture</strong>, decorated facade, coloured stone inlay. Houses the <strong>Najran Regional Museum</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Emara%20Palace%20in%20Najran" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Emara Palace Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">2 km</div><div className="text-sm text-gray-600">from Najran Centre</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Palace</div><div className="text-sm text-gray-600">Traditional Najrani Design</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Museum</div><div className="text-sm text-gray-600">Najran Regional Museum</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Yemeni</div><div className="text-sm text-gray-600">Influenced Architecture</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Emara Palace — Architecture &amp; Museum</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Palace Architecture', desc: "Emara Palace is a 5-story mud-brick and stone tower complex — the defining example of classical Najrani architecture. The decorated facade uses alternating bands of coloured stones and applied gypsum geometric patterns in a technique unique to the Najran-Yemen highland building tradition. Wooden projecting balconies, carved window surrounds, and the distinctive crenellated parapet with alternating merlons complete the design.", note: 'Best viewed from the west approach road.' },
                            { title: 'Najran Regional Museum', desc: "The museum inside the Emara complex has one of the best collections of pre-Islamic South Arabian artefacts in the region — Sabaean inscribed stones, bronze votive objects, ancient pottery, copper and silver jewellery from the Al-Ukhdood excavations, and early Islamic period finds. Ethnographic sections document the traditional Najrani way of life: clothing, weapons, agricultural tools, and the famous Najrani tribal silver jewellery tradition.", note: 'Museum: typically open mornings and late afternoons.' },
                            { title: 'Najrani Jewellery', desc: "Najrani silverwork is one of the most distinctive craft traditions in Arabia — heavy tribal pieces in solid silver with geometric and floral inlay, large pendants, stacked bangles, and elaborate headdress ornaments. The museum displays historic pieces; the Najran old souq has working silversmiths producing traditional designs. Najrani jewellery is highly collected and significantly less well-known internationally than the more famous Yemeni and Omani traditions it shares roots with.", note: 'Old souq: silversmiths near the main market.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emara Palace Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Emara Palace Taxi</h2>
                    <p className="mb-8 opacity-90">2km from Najran centre — traditional palace, regional museum. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Emara%20Palace%20in%20Najran" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Emara Palace Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran/al-ukhdood" className="text-red-700 hover:underline">← Al-Ukhdood</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran/bir-hima" className="text-red-700 hover:underline">Bir Hima UNESCO →</Link>
            </div>
        </div>
    );
}
