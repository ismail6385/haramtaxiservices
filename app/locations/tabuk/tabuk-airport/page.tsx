import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Plane } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/tabuk-airport' },
    title: 'Tabuk Airport Taxi | Prince Sultan Airport (TUU) Transfers — Meet & Greet',
    description: 'Meet & greet taxi service at Prince Sultan bin Abdulaziz Airport Tabuk (TUU). Arrivals pickup, NEOM worker transfers, hotel drop-offs. Flight tracked. Fixed rates, 24/7 WhatsApp.',
    keywords: ['Tabuk airport taxi', 'Prince Sultan Airport transfer', 'TUU airport pickup', 'Tabuk airport to hotel', 'NEOM airport transfer Tabuk', 'Tabuk airport meet greet'],
    openGraph: {
        title: 'Tabuk Airport (TUU) Taxi — Meet & Greet Arrivals Transfer',
        description: 'Pre-booked taxi from Tabuk Airport (TUU). Flight tracked, name board at arrivals. NEOM, hotel, or onward city transfers.',
        url: 'https://haramtaxiservice.com/locations/tabuk/tabuk-airport',
        type: 'website',
    },
};

const faqs = [
    { question: 'Where exactly is the taxi pickup point at Tabuk Airport?', answer: "Prince Sultan bin Abdulaziz Airport (TUU) is approximately 15–20km from central Tabuk city. The arrivals exit leads directly to the ground transport area. Our driver waits at the arrivals hall exit holding a name board with your name. WhatsApp us your flight number and we'll track your arrival and have your driver in position." },
    { question: 'How do I book a pickup from Tabuk Airport?', answer: "WhatsApp us your flight number (e.g. SV362), arrival date, destination (hotel name, NEOM sub-destination, or city), and group size and luggage count. We confirm a fixed rate immediately. Your driver is notified and tracked to your flight landing. No app required, no card payment — pay cash on arrival." },
    { question: 'What if my flight is delayed?', answer: "We track all incoming flights in real time. If your flight is delayed, your driver adjusts — you will never arrive to find no car waiting. Flight tracking is included in the service at no extra charge." },
    { question: 'Which airlines fly to Tabuk Airport (TUU)?', answer: "Tabuk Airport (IATA: TUU) is served by Saudi Airlines (Saudia), flyadeal, flynas, and Air Arabia. Domestic routes include Riyadh (King Khalid), Jeddah (KAIA), and Dammam (King Fahd). Seasonal routes to Madinah exist. There are no regular international flights at TUU — international travellers typically connect via Jeddah or Riyadh." },
    { question: 'Can I book a taxi from Tabuk Airport to NEOM Bay?', answer: "Yes — Tabuk Airport to NEOM Bay (Sharma) is approximately 215km — about 2.5 hours. This is a common transfer for NEOM workers arriving on rotation. Book in advance: WhatsApp your flight number, worker count, and NEOM sub-destination. For groups of 4+, we deploy a GMC Yukon XL or Toyota Hiace." },
];

export default function TabukAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Tabuk Airport (TUU)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: TUU · Prince Sultan bin Abdulaziz Airport</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Tabuk Airport Taxi — Meet & Greet at TUU Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi from <strong>Prince Sultan bin Abdulaziz Airport (TUU)</strong>. Flight tracked, name board at arrivals. Hotel drop-offs, <strong>NEOM worker rotations</strong>, and onward intercity transfers. Fixed rate confirmed before your flight.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Tabuk%20Airport%20TUU" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book TUU Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">15–20 min</div><div className="text-sm text-gray-600">Airport to City Centre</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Name Board</div><div className="text-sm text-gray-600">Arrivals Hall Pickup</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Fixed Rate</div><div className="text-sm text-gray-600">Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Transfers from Tabuk Airport (TUU)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-slate-700 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Drive Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'Tabuk City Centre / Hotels', dist: '15–20 km', time: '20 min', note: 'Standard airport drop-off' },
                                    { dest: 'NEOM Bay (Sharma)', dist: '215 km', time: '2.5 hrs', note: 'Common NEOM worker rotation route' },
                                    { dest: 'Haql (Shipwreck)', dist: '215 km', time: '2.5 hrs', note: 'Gulf of Aqaba coastal day trip' },
                                    { dest: 'Wadi Disah', dist: '75 km', time: '1 hr', note: 'Canyon day trip from airport' },
                                    { dest: 'Halat Ammar Jordan Border', dist: '165 km', time: '1.75 hrs', note: 'Direct to border from airport' },
                                    { dest: 'Madinah', dist: '635 km', time: '6 hrs', note: 'Long-haul Hejaz highway south' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-6 py-4 font-bold text-slate-700">{row.time}</td>
                                        <td className="px-6 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What&apos;s Included in Our Airport Transfer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            'Real-time flight tracking — driver adjusts for delays at no extra charge',
                            'Name board at TUU arrivals hall exit',
                            'Luggage assistance — driver helps load',
                            'Direct route to your destination — no detours',
                            'Fixed rate confirmed on WhatsApp before your flight',
                            'Group vehicles available (4–12 passengers)',
                        ].map((f, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tabuk Airport FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-slate-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-slate-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Pre-Book Your TUU Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number and destination — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Tabuk%20Airport%20TUU" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book TUU Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk/haql" className="text-slate-600 hover:underline">← Haql & Red Sea</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk/alula" className="text-slate-600 hover:underline">AlUla & Hegra →</Link>
            </div>
        </div>
    );
}
