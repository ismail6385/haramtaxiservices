import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/wadi-disah' },
    title: 'Wadi Disah Taxi from Tabuk | Canyon Day Trip (Wadi Qaraqir) Guide 2026',
    description: 'Taxi from Tabuk to Wadi Disah (Wadi Qaraqir) — 60km south, 50 minutes. Dramatic sandstone canyon with towering walls, palm groves, and freshwater springs. Half-day and full-day driver-waits tours.',
    keywords: ['Wadi Disah taxi Tabuk', 'Wadi Qaraqir tour Tabuk', 'Tabuk canyon day trip', 'Wadi Disah transport', 'Tabuk desert canyon taxi', 'Tabuk nature tours'],
    openGraph: {
        title: 'Wadi Disah (Wadi Qaraqir) — Canyon Day Trip Taxi from Tabuk',
        description: 'Private taxi Tabuk to Wadi Disah. 60km south, 50 mins. Driver waits while you explore the sandstone canyon. Half-day or full-day tours.',
        url: 'https://haramtaxiservice.com/locations/tabuk/wadi-disah',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Wadi Disah and what makes it special?', answer: "Wadi Disah (also called Wadi Qaraqir) is a spectacular sandstone canyon approximately 60km south of Tabuk city. The wadi cuts through the Hisma plateau — towering orange-red cliffs rise 200–300m on either side of a narrow valley floor lined with palm groves, agricultural plots, and freshwater springs. The combination of dramatic geology, vegetation, and the small Bedouin community living inside the canyon makes it one of the most visually extraordinary landscapes in Saudi Arabia. The canyon floor is accessible by driving in with a vehicle." },
    { question: 'How long does it take to explore Wadi Disah?', answer: "A half-day trip (3–4 hours in the canyon) covers the main canyon drive, viewpoints, and palm grove walk. A full day (5–6 hours) allows time to go deeper into the canyon, explore the side wadis, stop at the spring pools, interact with the small resident community, and photograph the golden-hour light on the canyon walls. Most visitors find a full day deeply worthwhile." },
    { question: 'Is there a specific entrance or path through Wadi Disah?', answer: "The main access road into Wadi Disah is via Route 70 south from Tabuk, turning off near Qayl village. The canyon has a recognized entry track that most vehicles can manage — no 4x4 is required for the main floor track, though a SUV handles the rougher sections more comfortably. Our drivers know the correct entry route and the best viewpoints inside the canyon." },
    { question: 'Is Wadi Disah suitable for families with children?', answer: "Yes — Wadi Disah is one of Saudi Arabia's most family-friendly nature sites. The canyon floor is walkable and flat, the spring areas are safe for children to explore, the shade from canyon walls provides relief from heat, and the landscape is extraordinary. Best seasons: October–April (cooler). Summer (May–September) is very hot — start before 8am if visiting in summer." },
    { question: 'Can I combine Wadi Disah with AlUla in one day?', answer: "Theoretically possible but exhausting: Tabuk to Wadi Disah (50 min) → 3 hrs in canyon → Wadi Disah to AlUla (3 hrs south) = nearly a full day of driving. This itinerary makes more sense as part of a longer trip southward (e.g., Tabuk → Wadi Disah morning → AlUla overnight → Madinah). For a day trip from Tabuk, choose either Wadi Disah or AlUla — not both." },
];

export default function WadiDisahPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Wadi Disah</span>
                </div>
            </div>

            <section className="bg-green-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Hisma Plateau · 60km South of Tabuk · Canyon Day Trip</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Wadi Disah (Wadi Qaraqir) — Sandstone Canyon Day Trip from Tabuk</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Private taxi from <strong>Tabuk to Wadi Disah</strong> (60km, 50 minutes). A dramatic canyon with 200–300m sandstone walls, palm groves, freshwater springs, and resident Bedouin farms. <strong>Driver waits</strong> while you explore — half-day or full-day. No 4x4 required.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Tabuk%20to%20Wadi%20Disah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Wadi Disah Day Trip
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-700 mb-1">60 km</div><div className="text-sm text-gray-600">South of Tabuk</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">50 min</div><div className="text-sm text-gray-600">Drive Time</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">200–300m</div><div className="text-sm text-gray-600">Canyon Wall Height</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Full Day</div><div className="text-sm text-gray-600">Recommended Visit Length</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What to See in Wadi Disah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {[
                                { title: 'Canyon Entrance & Towering Cliffs', desc: 'The canyon entrance is immediately dramatic — sandstone walls of deep orange and red rise sharply on both sides as you drive in. The scale is disorienting in the best way. The main canyon floor is approximately 15km long with the walls progressively narrowing.' },
                                { title: 'Palm Grove & Freshwater Springs', desc: 'Unlike the surrounding desert, Wadi Disah has underground water sources feeding freshwater springs and a thriving palm grove community. The contrast of green palms against red canyon walls is striking. The springs create small pools — a genuine desert oasis.' },
                                { title: 'Bedouin Farms & Community', desc: 'A small permanent Bedouin community lives and farms inside Wadi Disah — one of the few inhabited canyons in Saudi Arabia. Goat herds, date palms, and small vegetable gardens exist in the canyon sheltered from desert winds. Respectful visits are welcomed.' },
                                { title: 'Photography Viewpoints', desc: 'The canyon walls catch extraordinary golden light at sunrise and late afternoon. Multiple viewpoints exist from the canyon floor looking up — at midday, look upward through the narrow sky gap. The sand dunes at the western canyon entrance are also striking.' },
                            ].map((s, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Suggested Day Trip Schedule</h3>
                            <div className="space-y-4">
                                {[
                                    { time: '7:00am', activity: 'Depart Tabuk hotel or airport', note: 'Cool morning — ideal for canyon arrival' },
                                    { time: '7:50am', activity: 'Arrive Wadi Disah entrance', note: '60km south via Route 70' },
                                    { time: '8:00am', activity: 'Drive into canyon, first viewpoints', note: 'Golden morning light on the walls' },
                                    { time: '9:00am', activity: 'Palm grove walk & spring exploration', note: 'Shade available — pleasant hiking' },
                                    { time: '11:00am', activity: 'Deeper canyon track', note: 'Side wadis if time permits' },
                                    { time: '1:00pm', activity: 'Lunch break (bring provisions)', note: 'No restaurants inside the canyon' },
                                    { time: '2:30pm', activity: 'Return to canyon entrance', note: 'Driver waiting at agreed point' },
                                    { time: '3:30pm', activity: 'Arrive back in Tabuk', note: 'Or continue south to AlUla (3 hrs)' },
                                ].map((s, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="text-xs font-bold text-green-700 w-16 flex-shrink-0 mt-0.5">{s.time}</div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">{s.activity}</div>
                                            <div className="text-xs text-gray-500">{s.note}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Practical Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Best Season', detail: 'October to April — comfortable temperatures (10–25°C). Summer (May–September) reaches 40°C+ in the canyon. If visiting in summer, enter before 8am and leave before 11am.', icon: '🌡️' },
                            { title: 'What to Bring', detail: 'Water (3+ litres per person), food (no facilities inside canyon), sunscreen, walking shoes, hat, camera. Mobile signal is limited inside the canyon — download offline maps before departure.', icon: '🎒' },
                            { title: 'Entry Rules', detail: 'No entry fee. Wadi Disah is an open natural site. Respect the resident community\'s property and privacy. Camping is possible at designated areas near the entrance with appropriate permits from local authorities.', icon: '🏕️' },
                        ].map((p, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                                <div className="text-3xl mb-3">{p.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{p.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wadi Disah FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Wadi Disah Day Trip</h2>
                    <p className="mb-8 opacity-90">Driver waits inside or near the canyon — fixed rate, no stranding. Half-day or full-day.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Wadi%20Disah%20day%20trip%20from%20Tabuk" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Wadi Disah Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk/alula" className="text-slate-600 hover:underline">← AlUla & Hegra</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk" className="text-slate-600 hover:underline">Tabuk Hub</Link>
            </div>
        </div>
    );
}
