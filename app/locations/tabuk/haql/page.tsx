import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/haql' },
    title: 'Haql Taxi from Tabuk | Shipwreck, Gulf of Aqaba & Jordan Border Transfer',
    description: 'Taxi from Tabuk to Haql — Red Sea Gulf of Aqaba coast, the famous Haql shipwreck, Tabuk diving sites, and Al Durra / Halat Ammar Jordan border crossing. 2 hours from Tabuk.',
    keywords: ['Haql taxi Tabuk', 'Haql shipwreck taxi', 'Tabuk Jordan border taxi', 'Halat Ammar border transport', 'Gulf of Aqaba Tabuk taxi', 'Tabuk Red Sea', 'Al Durra border crossing taxi'],
    openGraph: {
        title: 'Haql & Jordan Border — Taxi from Tabuk | Red Sea Shipwreck & Border Crossing Guide',
        description: 'Private taxi Tabuk to Haql (200km, 2hrs). Shipwreck photography, Gulf of Aqaba diving, and Jordan border crossing.',
        url: 'https://haramtaxiservice.com/locations/tabuk/haql',
        type: 'website',
        images: [{ url: '/haql-shipwreck.webp', width: 1200, height: 630, alt: 'Haql Shipwreck Gulf of Aqaba Saudi Arabia' }],
    },
};

const faqs = [
    { question: 'What is the Haql shipwreck and how do I visit it?', answer: "The Haql shipwreck is a cargo ship (the 'Million Hope' or similar — multiple vessels have run aground in this area) stranded on the Gulf of Aqaba shore near Haql town in Tabuk Province. The rusting hulk is visible from the shoreline and has become one of Saudi Arabia's most-photographed coastal landmarks. It can be viewed from the beach — no diving required for the visual. For underwater wreck diving, local dive operators in Haql can arrange guided dives around the vessel and the surrounding reef." },
    { question: 'How long is the taxi from Tabuk to Haql?', answer: "Tabuk to Haql town is approximately 200km — about 2 hours via the coastal highway northwest. The route passes through striking desert-meets-sea scenery on the Gulf of Aqaba coast. Our driver waits at Haql while you explore the beach and shipwreck site, then drives you back — full day round trip." },
    { question: 'Which Jordan border crossing is near Tabuk/Haql?', answer: "There are two main Saudi-Jordan border crossings accessible from Tabuk: (1) Halat Ammar (Durra) crossing — 150km north of Tabuk city, the main vehicle crossing point. Popular with Saudi residents crossing to Aqaba, Jordan. (2) Al Durra crossing — near Haql, at the tip of the Gulf of Aqaba. Both crossings require valid Saudi exit permits, passport, and Jordan visa (or Jordan visa on arrival for GCC residents). Saudi transit visas for expatriates require Saudi exit/re-entry authorization." },
    { question: 'Do you drop off at the Saudi-Jordan border?', answer: "Yes — we provide drop-off at both Halat Ammar and Al Durra border crossings. Our service ends at the Saudi border gate — transport on the Jordan side must be arranged separately (Aqaba has taxis on the Jordanian side). For the return journey from Jordan to Tabuk, arrange a separate booking in advance via WhatsApp." },
    { question: 'What documents do I need for the Jordan border crossing?', answer: "For Saudi nationals and GCC residents: valid passport, Saudi exit permit (for non-Saudis on iqama), and Jordan visa or visa-on-arrival eligibility. Many nationalities receive Jordan visa on arrival at Aqaba (including US, EU, UK passports). For Saudi nationals, a national ID card may suffice at land crossings. Always verify entry requirements with the Jordan Consulate before travel — requirements change. Our drivers do not provide document advice but know the crossing procedure." },
];

export default function HaqlPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Haql & Red Sea Coast</span>
                </div>
            </div>

            <section className="relative h-[460px] bg-gray-900">
                <Image src="/haql-shipwreck.webp" alt="Haql Shipwreck — Gulf of Aqaba, Tabuk Region Saudi Arabia" width={1200} height={460} className="w-full h-full object-cover opacity-60" sizes="100vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">Gulf of Aqaba · 200km from Tabuk · Jordan Border</span>
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-4">Haql — Shipwreck, Red Sea Diving & Jordan Border Taxi</h1>
                            <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20Haql" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                    <WhatsAppIcon className="w-5 h-5" />Book Tabuk–Haql Taxi
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold mb-1">200 km</div><div className="text-sm opacity-85">Tabuk to Haql</div></div>
                        <div><div className="text-3xl font-bold mb-1">2 hrs</div><div className="text-sm opacity-85">Drive Time</div></div>
                        <div><div className="text-3xl font-bold mb-1">Gulf of Aqaba</div><div className="text-sm opacity-85">Red Sea Diving</div></div>
                        <div><div className="text-3xl font-bold mb-1">Jordan</div><div className="text-sm opacity-85">Border Crossing Available</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Haql & Red Sea Coast — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Haql Shipwreck', icon: '🚢', desc: 'An iconic cargo ship stranded on the Gulf of Aqaba shore — rusting in the clear blue water and visible from the beach. A favourite for photographers and social media. Location: Haql Beach, directly visible from the coastal road. Accessible without any special permit.' },
                            { title: 'Gulf of Aqaba Diving & Snorkelling', icon: '🤿', desc: 'The Gulf of Aqaba (northern Red Sea) has some of the world\'s clearest water and healthiest coral. The Haql coast offers snorkelling and diving from the beach. Local dive operators in Haql provide gear rental and guided reef dives. Visibility often exceeds 30m.' },
                            { title: 'Jordan Border Crossing (Al Durra / Halat Ammar)', icon: '🛂', desc: 'Haql is the closest Saudi point to the Jordan border crossing at Al Durra. Halat Ammar, the main Saudi–Jordan land border, is 150km from Tabuk. Our taxi drops you at the Saudi border gate. Jordan side transport to Aqaba arranged separately.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-blue-50 p-7 rounded-2xl border border-blue-100">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Haql & Border Trip Logistics</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-blue-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Trip Type</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { type: 'Tabuk to Haql (day trip)', dist: '200 km', time: '2 hrs each way', note: 'Driver waits at Haql 3–4 hrs' },
                                    { type: 'Tabuk to Halat Ammar border', dist: '150 km', time: '1.5 hrs', note: 'Drop-off at Saudi gate only' },
                                    { type: 'Tabuk to Al Durra crossing', dist: '210 km', time: '2.5 hrs', note: 'Near Haql — less traffic than Halat Ammar' },
                                    { type: 'Haql to NEOM Bay', dist: '40 km', time: '30 min', note: 'NEOM Bay is just north of Haql' },
                                    { type: 'Tabuk Airport to Haql', dist: '215 km', time: '2 hrs 15 min', note: 'Direct from TUU airport arrivals' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.type}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-blue-800">{row.time}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <div className="py-6 bg-amber-50 border-y border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-900"><strong>Border Crossing Documents:</strong> Saudi nationals need their national ID or passport. Expatriates on iqama need exit/re-entry visa. Jordan requires passport + visa (many nationalities get visa on arrival at land borders). Verify requirements with the Jordan Consulate before travel. Our service ends at the Saudi border gate.</p>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Haql & Jordan Border FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Tabuk–Haql Taxi</h2>
                    <p className="mb-8 opacity-90">Shipwreck, diving, Jordan border — driver waits, fixed rate, 2 hours each way.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20Haql" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Haql Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk/neom" className="text-slate-600 hover:underline">← NEOM</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk/tabuk-airport" className="text-slate-600 hover:underline">Tabuk Airport →</Link>
            </div>
        </div>
    );
}
