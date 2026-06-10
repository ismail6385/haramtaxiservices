import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/rijal-almaa' },
    title: 'Rijal Almaa Taxi | Abha — UNESCO Heritage Village Transfer, Driver Waits',
    description: 'Taxi from Abha to Rijal Almaa (Rijal Alma) — 70km, 1.5 hours. UNESCO tentative list decorated stone tower houses, colourful gypsum facades, heritage museum. Driver waits. Fixed rate.',
    keywords: ['Rijal Almaa taxi', 'Rijal Alma taxi Abha', 'Rijal Almaa Abha day trip taxi', 'Asir heritage village taxi', 'Rijal Almaa heritage village taxi', 'Abha UNESCO village taxi'],
    openGraph: {
        title: 'Rijal Almaa Taxi — Abha UNESCO Heritage Village Transfer',
        description: 'Taxi from Abha to Rijal Almaa. UNESCO tentative list. Coloured tower houses. 70km. Driver waits.',
        url: 'https://haramtaxiservice.com/locations/abha/rijal-almaa',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Rijal Almaa?", answer: "Rijal Almaa (also: Rijal Alma, Rijal Al Maa, Rijaal Almaa) is a pre-Islamic fortified mountain village in the Asir highlands, approximately 70km west of Abha on the road toward the coastal escarpment. The village is on UNESCO's tentative World Heritage list for its distinctive multi-story stone tower architecture with colourful geometric facade decorations. Buildings reach 8–10 floors and are decorated with triangular, diamond, and zigzag patterns in white gypsum, coloured stone insets, and plaster relief work — a completely distinct aesthetic from any other heritage village in Saudi Arabia." },
    { question: "What makes Rijal Almaa architecture unique?", answer: "The buildings of Rijal Almaa have two extraordinary characteristics absent from other Asir highland villages: height (8–10 stories — among the tallest traditional stone buildings in Arabia) and decoration (geometric gypsum plaster patterns on the facades — white, green, and ochre triangles, diamonds, and bands applied to the exterior walls). The colour and pattern system was functional as well as aesthetic — different tribal families and house types were identified by their facade patterns. The building base material is locally quarried stone and clay mortar." },
    { question: "Is there a museum at Rijal Almaa?", answer: "Yes — Rijal Almaa has a heritage museum in one of the restored tower houses. The museum documents the history of the Al-Maa tribe and the village's role as a trading post on the Asir highland route connecting the interior plateau with the Tihama coastal plain and Jizan. Collections include traditional Asiri weapons, silver jewellery, agricultural tools, costumes, and household objects. The museum is the best starting point for understanding the village before exploring the broader settlement." },
    { question: "How far is Rijal Almaa from Abha?", answer: "Approximately 70km west of Abha — about 1.5 hours by taxi. The road descends from Abha's 2,200m plateau toward the escarpment, with increasingly dramatic mountain views on the approach to the village. The route is fully paved — no 4x4 required." },
    { question: "How long should I spend at Rijal Almaa?", answer: "Allow 1.5–2 hours for a full visit: 30 minutes in the heritage museum + 45–60 minutes walking the village (main tower cluster, the upper viewpoint, the traditional well area, and the village perimeter). The driver waits at the village parking area. Full-day circuit from Abha: Rijal Almaa (morning, 70km west) + Al-Soudah summit (afternoon, 25km from Abha) = the best of the western Asir escarpment." },
    { question: "Can I combine Rijal Almaa with Habala Village?", answer: "Rijal Almaa (70km west) and Habala Village (45km west, via a different road) are on opposite sides of the Asir plateau descent — combining them in one day is possible but long (total 200km+ round-trip). The most common circuit: Rijal Almaa full morning + Habala cable car afternoon. Depart Abha at 7am. Your driver plans the optimal routing." },
];

export default function RijalAlmaaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Rijal Almaa</span>
                </div>
            </div>

            <section className="bg-rose-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Rijal Almaa · UNESCO Tentative List · Decorated Tower Houses · 70km from Abha</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Rijal Almaa Taxi — Abha UNESCO Heritage Village Transfer</h1>
                        <p className="text-xl text-rose-100 mb-8 font-light">
                            Taxi from <strong>Abha to Rijal Almaa</strong> — 70km west, 1.5 hours. <strong>UNESCO tentative list — colourful 8–10 storey stone tower houses</strong> with decorated gypsum facades, heritage museum. <strong>Driver waits</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Abha%20to%20Rijal%20Almaa%20heritage%20village%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Rijal Almaa Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-rose-50 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">70 km</div><div className="text-sm text-gray-600">west of Abha city</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">8–10</div><div className="text-sm text-gray-600">Story Tower Houses</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">Tentative List</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">Museum</div><div className="text-sm text-gray-600">Asiri Heritage Display</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Rijal Almaa — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Decorated Tower Houses', desc: "Rijal Almaa's buildings are the most visually distinctive traditional architecture in Saudi Arabia. The stone towers (8–10 floors) are decorated with geometric patterns applied in white gypsum plaster: triangles, diamonds, zigzags, and banding in white, ochre, and natural coloured stone. The overall effect — a cluster of tall decorated towers on a hillside — is unlike any other historic settlement in Arabia. The best view: from the road approach, where the full height and decoration of the village is visible.", note: 'Best photo: morning, from the road approach (east side).' },
                            { title: 'The Heritage Museum', desc: "The village museum occupies one of the restored tower houses and documents Rijal Almaa's history as a trading waystation on the Asir highland route: caravans connecting the Najd interior plateau with the Tihama coastal strip and Jizan port. Collections include silver jewellery (the Asiri tradition is distinct from Hejazi silver — heavier, more geometric), traditional weapons, agricultural tools, and costumes. The museum also documents the Al-Maa tribal confederation's political history in the region.", note: 'Museum: 1 floor of the restored tower. Allow 30 min.' },
                            { title: 'The Village Walk & Viewpoints', desc: "The village has a clear circuit walk through the main tower cluster, the old well and water management area, the village mosque (exterior only), and an upper viewpoint looking back over the settlement and down toward the Tihama coastal plain. On clear days (best in winter and spring) the view extends toward the Red Sea lowlands from the upper viewpoint. The village is partially inhabited — some families still live in lower floors of the towers while upper stories are preserved.", note: 'Circuit walk: approx 45–60 minutes.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-rose-700 font-medium border-t border-rose-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Rijal Almaa Compares to Other Heritage Villages</h2>
                    <div className="overflow-x-auto rounded-2xl border border-rose-100">
                        <table className="w-full text-sm">
                            <thead className="bg-rose-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Village</th>
                                    <th className="px-6 py-4 text-left font-semibold">Style</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance from Hub</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distinctive Feature</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-rose-50">
                                {[
                                    { v: 'Rijal Almaa', hub: 'Abha', style: 'Decorated stone towers', dist: '70km', feature: '8–10 floors, coloured gypsum patterns — UNESCO tentative' },
                                    { v: 'Habala Village', hub: 'Abha', style: 'Cliffside cave-houses', dist: '45km', feature: 'Cable car only access — 300m below plateau' },
                                    { v: 'Dhee Ain', hub: 'Al-Baha', style: 'White quartz village', dist: '25km', feature: 'Pre-Islamic, white/cream stone on rocky outcrop' },
                                    { v: 'Al-Ukhdood', hub: 'Najran', style: 'Sabaean ruins', dist: '5km', feature: 'Iron Age + Islamic ruins, Surah Al-Burooj site' },
                                ].map((r, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-rose-50'}>
                                        <td className="px-6 py-4 font-semibold text-gray-900">{r.v}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.style}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600 text-xs">{r.feature}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rijal Almaa Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-rose-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-rose-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Rijal Almaa Taxi</h2>
                    <p className="mb-8 opacity-90">70km from Abha — UNESCO heritage village, driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Abha%20to%20Rijal%20Almaa%20heritage%20village%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Rijal Almaa Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/habala-village" className="text-green-700 hover:underline">← Habala Village</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha" className="text-green-700 hover:underline">Back to Abha Hub</Link>
            </div>
        </div>
    );
}
