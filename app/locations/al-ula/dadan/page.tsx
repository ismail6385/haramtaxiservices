import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/dadan' },
    title: 'Dadan AlUla Taxi | Ancient Dadanite Capital & Lion Tombs Transfer',
    description: 'Taxi to Dadan ancient city from AlUla — Dadanite and Lihyanite kingdom capital (6th–4th century BCE). Rock-cut lion tombs on cliff face. 10km from AlUla. Fixed rate.',
    keywords: ['Dadan AlUla taxi', 'Dadan ancient city taxi', 'Lihyan tombs taxi', 'Dadanite kingdom AlUla', 'AlUla ancient ruins taxi', 'lion tombs AlUla taxi'],
    openGraph: {
        title: 'Dadan Ancient City Taxi — AlUla Dadanite Kingdom Transfer',
        description: 'Taxi to Dadan ancient city, AlUla. Dadanite capital, lion tombs, 10km. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ula/dadan',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Dadan?", answer: "Dadan (also spelled Dedan) was the capital of the Dadanite (Dedanite) Kingdom and later the Lihyanite Kingdom — two pre-Islamic Arabian civilizations that controlled the northern Hejaz incense trade route from approximately the 6th to the 4th century BCE. The site predates Hegra by several centuries and represents one of the oldest archaeologically significant settlements in northwest Arabia. Dadan was recently opened to visitors after decades of archaeological excavation." },
    { question: "What are the lion tombs at Dadan?", answer: "The lion tombs are a series of rock-cut funerary monuments carved into the cliff face above the Dadan valley floor — distinctive for the carved lion figures (real or stylized) that flank the tomb facades. They are among the most visually striking pre-Islamic funerary monuments in Arabia. The Lihyanite lions are distinctive in Arabian art: bold, stylized, and carved in high relief on the sandstone cliff face." },
    { question: "How far is Dadan from AlUla?", answer: "Dadan is approximately 10km from AlUla city centre — about 10 minutes by taxi. The site is in the main AlUla valley, south of the Hegra direction and close to the Old Town. It can be combined with an AlUla Old Town visit in the same morning or afternoon." },
    { question: "Do I need to book Dadan tickets in advance?", answer: "Yes — Dadan requires advance ticket booking through the Experience AlUla app (alula.sa), as with Hegra. Visitor numbers are limited and peak season (October–April) books up. The ticket includes a guided tour with a vehicle buggy up to the lion tombs level — not accessible on foot without the tour." },
    { question: "Can I combine Dadan with other AlUla sites in one day?", answer: "Yes — Dadan and AlUla Old Town are 10–15 minutes apart and make a natural morning pairing. Dadan + Old Town + Jabal Ikmah can be done in a single day. Dadan and Hegra are 30 minutes apart and better combined as a full-day itinerary with your driver waiting between sites." },
];

export default function DadanPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Dadan Ancient City</span>
                </div>
            </div>

            <section className="bg-teal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Dadan · Dadanite Capital · Lion Tombs · 6th–4th Century BCE · 10km from AlUla</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Dadan Ancient City Taxi — Dadanite Kingdom &amp; Lion Tombs Transfer</h1>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Taxi from <strong>AlUla to Dadan</strong> — 10km, 10 minutes. Capital of the <strong>Dadanite and Lihyanite kingdoms</strong>. Rock-cut lion tombs on cliff face. Pre-Islamic Arabia&apos;s oldest urban settlement in the Hejaz. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Dadan%20ancient%20city" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Dadan Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-teal-50 border-b border-teal-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-teal-800 mb-1">10 km</div><div className="text-sm text-gray-600">from AlUla</div></div>
                        <div><div className="text-3xl font-bold text-teal-800 mb-1">6th BCE</div><div className="text-sm text-gray-600">Dadanite Kingdom</div></div>
                        <div><div className="text-3xl font-bold text-teal-800 mb-1">Lions</div><div className="text-sm text-gray-600">Rock-Cut Cliff Tombs</div></div>
                        <div><div className="text-3xl font-bold text-teal-800 mb-1">Lihyan</div><div className="text-sm text-gray-600">Ancient Arabian Kingdom</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Dadan — The Ancient Kingdom</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Dadanite Kingdom', desc: "Dadan was the capital of the Dadanite (Dedanite) Kingdom — a North Arabian civilization that flourished from the 8th to 4th century BCE. Dadan controlled a critical segment of the ancient Incense Route running from South Arabia to the Levant and Mesopotamia. Biblical and Assyrian sources mention Dedan as a major trading centre. The site has temple foundations, administrative buildings, and a dense urban layout now partially excavated.", note: 'Archaeological excavations ongoing — partial site open.' },
                            { title: 'Lion Tombs of Lihyan', desc: "The lion tombs are the most dramatic feature of Dadan — a row of rock-cut tombs carved into the vertical cliff face above the valley, each flanked by carved lion figures. The Lihyanite style (4th–2nd century BCE) is bolder and more stylized than the Nabataean tombs at Hegra. Access is by guided buggy tour up to the cliff level — not reachable on foot. The cliff panorama from the lion tomb level over the AlUla valley is extraordinary.", note: 'Ticket includes guided buggy to cliff level.' },
                            { title: 'Archaeological Context', desc: "Dadan predates Hegra by several centuries and represents a different phase of ancient Arabian history — before the Nabataean commercial empire. Recent Saudi-French excavations have uncovered temples, votives, and inscriptions in the Dadanite script. The site provides a layered view of north Arabian cultural succession: Dadanite → Lihyanite → Nabataean → early Islamic.", note: 'Museum at site entrance: excavation findings displayed.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-teal-800 font-medium border-t border-teal-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dadan Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-teal-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-teal-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Dadan Taxi</h2>
                    <p className="mb-8 opacity-90">10km from AlUla — lion tombs, ancient kingdom, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Dadan%20ancient%20city" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Dadan Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula/elephant-rock" className="text-amber-700 hover:underline">← Elephant Rock</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula/old-town" className="text-amber-700 hover:underline">AlUla Old Town →</Link>
            </div>
        </div>
    );
}
