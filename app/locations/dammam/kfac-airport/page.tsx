import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Plane } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/dammam/kfac-airport' },
    title: 'KFAC Airport Taxi Dammam | King Fahd International Airport (DMM) Transfers',
    description: 'Meet & greet taxi at King Fahd International Airport (KFAC/DMM). Flight tracked, name board at arrivals. Dammam, Khobar, Dhahran, Jubail, Bahrain Causeway. Fixed rates, 24/7.',
    keywords: ['KFAC airport taxi', 'DMM airport transfer', 'King Fahd International Airport taxi', 'Dammam airport pickup', 'Khobar airport taxi', 'Dhahran airport transfer', 'DMM arrivals taxi'],
    openGraph: {
        title: 'KFAC Airport (DMM) Taxi — Meet & Greet Arrivals Transfer Dammam',
        description: 'Pre-booked taxi at King Fahd International Airport. Flight tracked, name board. Dammam, Khobar, Aramco, Jubail. Fixed rates.',
        url: 'https://haramtaxiservice.com/locations/dammam/kfac-airport',
        type: 'website',
    },
};

const faqs = [
    { question: 'Where is the taxi pickup point at KFAC Airport?', answer: "King Fahd International Airport (DMM/KFAC) is located approximately 35km northwest of Dammam city and 40km from Al Khobar. Our driver waits at the arrivals hall exit with a name board. After clearing customs and collecting baggage, exit arrivals and look for your name. The airport is large — WhatsApp us when you land and we confirm your driver location." },
    { question: 'How do I book a pickup from KFAC Airport?', answer: "WhatsApp us your flight number (e.g. EK842, SV315), arrival date, destination (hotel name, Aramco compound, Jubail site, or city/area), and passenger count. We confirm a fixed rate immediately. Driver is assigned and tracks your flight. No app required, no card payment — cash on arrival." },
    { question: 'What if my KFAC flight is delayed?', answer: "We track all flights in real time via flight number. If your flight is delayed 30 minutes or 3 hours, your driver adjusts and waits at arrivals. There is no extra charge for flight delays. This is included in the standard service." },
    { question: 'Which airlines fly into KFAC Airport (DMM)?', answer: "KFAC (King Fahd International Airport, IATA: DMM) serves Dammam and the Eastern Province. Airlines: Saudia (domestic and international), flyadeal, flynas (domestic), Air Arabia, Emirates, Qatar Airways, Bahrain Air, Gulf Air, Kuwait Airways, Oman Air, Turkish Airlines, EgyptAir. Domestic routes include Riyadh, Jeddah, and Madinah." },
    { question: 'How far is KFAC Airport from Al Khobar, Dhahran, and Jubail?', answer: "KFAC Airport to: Al Khobar city centre — 40km, 40 min. Dhahran/Aramco compound — 40km, 40 min. Dammam city — 35km, 35 min. Jubail Industrial City — 140km, 1.5 hrs. Bahrain Causeway entrance — 65km, 1 hr." },
];

export default function KFACAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/dammam">Dammam</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">KFAC Airport (DMM)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: DMM · King Fahd International Airport</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">KFAC Airport Taxi — Meet &amp; Greet at DMM Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi at <strong>King Fahd International Airport (KFAC/DMM)</strong> — Eastern Province&apos;s main airport. Flight tracked, name board at arrivals. Drop-off to <strong>Dammam, Khobar, Dhahran/Aramco, Jubail, or Bahrain Causeway</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20KFAC%20Airport%20DMM" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book KFAC Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">35 km</div><div className="text-sm text-gray-600">from Dammam City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Name Board</div><div className="text-sm text-gray-600">Arrivals Hall Pickup</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Fixed Rate</div><div className="text-sm text-gray-600">Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from KFAC Airport (DMM)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-slate-700 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                                    <th className="px-6 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { dest: 'Dammam City Centre', dist: '35 km', time: '35 min', note: 'Standard airport drop-off' },
                                    { dest: 'Al Khobar', dist: '40 km', time: '40 min', note: 'Gulf Corniche and business district' },
                                    { dest: 'Dhahran / Aramco Compound', dist: '40 km', time: '40 min', note: 'Direct to Aramco gate' },
                                    { dest: 'Jubail Industrial City', dist: '140 km', time: '1.5 hrs', note: 'Contractor and executive transfers' },
                                    { dest: 'Bahrain Causeway entrance', dist: '65 km', time: '1 hr', note: 'Or continue to Manama (add 45 min)' },
                                    { dest: 'Qatif', dist: '60 km', time: '1 hr', note: 'Via coastal highway north' },
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

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What&apos;s Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            'Real-time flight tracking — driver adjusts for any delay',
                            'Name board at KFAC arrivals hall exit',
                            'Luggage assistance — driver helps load',
                            'Direct route to destination — no detours',
                            'Fixed rate confirmed on WhatsApp before your flight',
                            'Group vehicles available (4–12 passengers, Jubail groups)',
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">KFAC Airport FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Pre-Book KFAC Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number and destination — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20KFAC%20DMM" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book KFAC Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/dammam/dhahran" className="text-slate-600 hover:underline">← Dhahran &amp; Aramco</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/dammam/jubail" className="text-slate-600 hover:underline">Jubail Industrial →</Link>
            </div>
        </div>
    );
}
