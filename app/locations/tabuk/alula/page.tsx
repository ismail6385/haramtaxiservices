import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/alula' },
    title: 'AlUla Taxi from Tabuk | Hegra, Madain Saleh & Nabataean Heritage Day Trip 2026',
    description: 'Taxi from Tabuk to AlUla — 340km south, 3.5 hours. Hegra (Madain Saleh) Nabataean tombs, Dadan, Jabal Ikmah, AlUla Old Town. Day trips and overnight transfers from Tabuk.',
    keywords: ['AlUla taxi Tabuk', 'Hegra taxi from Tabuk', 'Madain Saleh taxi Tabuk', 'AlUla day trip Tabuk', 'Nabataean heritage tour', 'Dadan AlUla transport', 'Jabal Ikmah taxi'],
    openGraph: {
        title: 'Tabuk to AlUla — Hegra, Madain Saleh & UNESCO Heritage Taxi Guide',
        description: 'Day trip or overnight taxi from Tabuk to AlUla. Nabataean tombs at Hegra, Dadan, Jabal Ikmah, AlUla Old Town. 3.5 hours each way.',
        url: 'https://haramtaxiservice.com/locations/tabuk/alula',
        type: 'website',
    },
};

const faqs = [
    { question: 'How far is AlUla from Tabuk and how long is the drive?', answer: "AlUla is approximately 340km south of Tabuk — about 3.5 hours via Route 375 south toward AlUla. The route passes through dramatic desert highland scenery. A day trip from Tabuk to AlUla is feasible (7 hours total driving) but exhausting — an overnight stay in AlUla is recommended to do the sites justice." },
    { question: 'What is Hegra (Madain Saleh) and why is it significant?', answer: "Hegra — officially Madain Saleh (Saleh's Cities) and now UNESCO World Heritage Site Hegra — is Saudi Arabia's most important pre-Islamic archaeological site. It contains 111 monumental tombs carved into sandstone outcrops by the Nabataean civilization (1st century BCE to 1st century CE). The Nabataeans were the same people who built Petra in Jordan. Hegra's tombs are extremely well-preserved — the remote desert location protected them. The site is approximately 22km north of AlUla town." },
    { question: 'What other heritage sites are in AlUla?', answer: "AlUla Region contains: (1) Hegra (Madain Saleh) — 111 Nabataean tombs, UNESCO; (2) Dadan — Lihyanite and Dadanite kingdom ruins, 1st millennium BCE; (3) Jabal Ikmah — open-air library of 450+ ancient inscriptions in Dadanitic, Minaic, Nabataean, Greek, and Latin; (4) AlUla Old Town — abandoned 14th-century mud-brick village with 900 houses; (5) Elephant Rock (Jabal Al-Fil) — iconic mushroom-shaped sandstone formation. All major sites are within 30km of AlUla town." },
    { question: 'Do I need to book AlUla site tickets in advance?', answer: "Yes — AlUla's major sites (especially Hegra) have limited daily visitor numbers and require advance booking through the Experience AlUla (EXP) app or alula.sa website. Hegra particularly fills up quickly. We recommend booking site tickets at least 1–2 weeks in advance for Hegra, especially during peak season (October–April). Our taxi gets you to the sites — site entry is managed separately by Experience AlUla." },
    { question: 'Can you do a day trip to AlUla from Tabuk?', answer: "A day trip is possible but intense: depart Tabuk 6am, arrive AlUla 9:30am, 5–6 hours at sites (Elephant Rock, AlUla Old Town, optionally Hegra if booked), depart AlUla 4pm, arrive Tabuk 7:30pm. If your main target is Hegra alone, the day trip timing works. If you want to cover multiple sites thoroughly, plan an overnight stay in AlUla." },
];

export default function AlulaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">AlUla & Hegra</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">AlUla Region · UNESCO Heritage · 340km from Tabuk</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">AlUla & Hegra — Nabataean Heritage Taxi from Tabuk</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Private taxi from <strong>Tabuk to AlUla</strong> (340km, 3.5 hours). Visit <strong>Hegra (Madain Saleh)</strong> — Saudi Arabia&apos;s first UNESCO World Heritage Site — plus Dadan, Jabal Ikmah, Elephant Rock, and AlUla Old Town. Day trips and overnight drop-offs.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20AlUla" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Tabuk–AlUla Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">340 km</div><div className="text-sm text-gray-600">Tabuk to AlUla</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">3.5 hrs</div><div className="text-sm text-gray-600">Drive Time</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">UNESCO</div><div className="text-sm text-gray-600">World Heritage Site (Hegra)</div></div>
                        <div><div className="text-3xl font-bold text-amber-800 mb-1">111</div><div className="text-sm text-gray-600">Nabataean Tombs at Hegra</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">AlUla Region Heritage Sites</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Hegra (Madain Saleh)', dist: '22km north of AlUla', era: 'Nabataean · 1st century BCE–CE', desc: 'Saudi Arabia\'s first UNESCO World Heritage Site. 111 monumental tombs carved into sandstone outcrops by the Nabataean civilization — the same people who built Petra. Far better preserved due to AlUla\'s remote location. Pre-booking required via Experience AlUla (alula.sa).', highlight: '⭐ UNESCO World Heritage Site' },
                            { name: 'Dadan', dist: '10km north of AlUla', era: 'Dadanite · 1st millennium BCE', desc: 'Capital of the Dadanite and Lihyanite kingdoms. Ancient stone inscriptions, lion tombs carved into the cliff face, and ceremonial platforms. One of Arabia\'s earliest sophisticated kingdoms. An open-air site with guided tours from the Maraya area.', highlight: 'One of Arabia\'s earliest kingdoms' },
                            { name: 'Jabal Ikmah', dist: '12km north of AlUla', era: 'Multi-period inscriptions', desc: 'An extraordinary open-air library of over 450 ancient inscriptions in Dadanitic, Minaic, Nabataean, Greek, and Latin — carved into a canyon of sandstone boulders. Some of the oldest Arabic script precursors in existence. Called the "Library of the Desert."', highlight: '450+ inscriptions in multiple ancient languages' },
                            { name: 'AlUla Old Town', dist: 'AlUla town centre', era: '14th century CE', desc: 'An abandoned mud-brick village of approximately 900 homes, mosques, and markets, inhabited until the 1980s and now a heritage conservation project. Narrow alleyways, original architecture, and a fort overlooking the oasis. Free to walk through.', highlight: 'Abandoned 1983 — now fully preserved' },
                            { name: 'Elephant Rock (Jabal Al-Fil)', dist: '11km north of AlUla', era: 'Natural formation', desc: 'An iconic 52m-high sandstone formation shaped remarkably like an elephant\'s head and trunk. A short walk from a car park, and one of Saudi Arabia\'s most-photographed natural landmarks. Spectacular at sunset. No booking required.', highlight: '52m sandstone natural formation' },
                            { name: 'Maraya Concert Hall', dist: 'AlUla Oasis area', era: 'Modern · Opened 2019', desc: 'The world\'s largest mirrored building — a concert and events venue entirely clad in mirrors, reflecting the surrounding desert and mountains. Visible from the main AlUla approach road. Night-time events calendar available at alula.sa.', highlight: 'World\'s largest mirrored building' },
                        ].map((site, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">{site.era}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{site.name}</h3>
                                <div className="text-xs text-gray-500 mb-3">{site.dist}</div>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{site.desc}</p>
                                <div className="text-xs font-semibold text-amber-800 border-t border-amber-200 pt-3">{site.highlight}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">AlUla Day Trip vs. Overnight — Comparison</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Day Trip from Tabuk</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Depart Tabuk 6:00am</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Arrive AlUla 9:30am</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>5–6 hours for 2–3 sites</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Depart AlUla 4:00pm</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Arrive Tabuk 7:30pm</li>
                                <li className="flex gap-2"><span className="text-amber-500">⚠</span>Driver waits in AlUla — full round-trip fare</li>
                                <li className="flex gap-2"><span className="text-amber-500">⚠</span>Best for: Hegra + Elephant Rock only</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-amber-200 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Overnight Drop-Off</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Depart Tabuk any time</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Drop-off at AlUla hotel</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>1–2 full days for all sites</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Return booking: Tabuk or onward to Madinah (4hrs)</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>One-way fare — significantly cheaper</li>
                                <li className="flex gap-2"><span className="text-green-500">✓</span>Best for: all 6 sites in AlUla region</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla from Tabuk — FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-amber-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Tabuk–AlUla Taxi</h2>
                    <p className="mb-8 opacity-90">Day trip or overnight — fixed rate confirmed on WhatsApp. Driver waits for day trips.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20AlUla" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book AlUla Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk/tabuk-airport" className="text-slate-600 hover:underline">← Tabuk Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk/wadi-disah" className="text-slate-600 hover:underline">Wadi Disah →</Link>
            </div>
        </div>
    );
}
