import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/jazan-airport' },
    title: 'Jazan Airport Taxi | King Abdullah Airport (GIZ) Arrivals Transfer',
    description: 'Meet & greet taxi at Jazan Airport (GIZ — King Abdullah bin Abdulaziz Airport). Flight tracked, name board at arrivals. Jazan city, Farasan Islands, Abha. Fixed rate, 24/7.',
    keywords: ['Jazan airport taxi', 'GIZ airport taxi', 'Jizan airport transfer', 'Jazan arrivals pickup', 'King Abdullah Airport Jazan taxi'],
    openGraph: {
        title: 'Jazan Airport (GIZ) Taxi — Meet & Greet Arrivals Transfer',
        description: 'Pre-booked taxi at Jazan Airport (GIZ). Flight tracked, name board. City, Farasan Islands, Abha. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/jazan/jazan-airport',
        type: 'website',
    },
};

const faqs = [
    { question: "Where is Jazan Airport?", answer: "Jazan Airport (officially King Abdullah bin Abdulaziz Airport, IATA: GIZ) is located approximately 15km north of Jazan city centre — about 20 minutes by taxi. It handles domestic flights from Riyadh (RUH), Jeddah (JED), and Madinah (MED) on Saudia, flyadeal, and flynas." },
    { question: "How do I pre-book a taxi at Jazan Airport?", answer: "WhatsApp us your flight number (e.g. SV234), arrival date, and destination (hotel name or area). We confirm a fixed rate immediately, assign a driver, and track your flight in real time. Your driver waits at the GIZ arrivals exit with your name board." },
    { question: "Can I go directly from Jazan Airport to the Farasan Islands ferry port?", answer: "Yes — airport to Farasan ferry port is approximately 20km, 25 minutes. If your flight arrives early enough to catch a morning ferry departure, we can take you directly from GIZ to the port without stopping at your hotel first." },
    { question: "Can I book an airport transfer from GIZ to Abha directly?", answer: "Yes — Jazan Airport to Abha is approximately 200km, 2.5–3 hours up the Asir escarpment mountain highway. This is a popular direct transfer for visitors arriving at GIZ and continuing to the Asir highlands. Confirm when booking." },
    { question: "What if my Jazan flight is delayed?", answer: "We track all flights in real time. Delays of any length are handled automatically — your driver adjusts arrival time and waits at the GIZ arrivals exit. No extra charge for flight delays." },
];

export default function JazanAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jazan Airport (GIZ)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: GIZ · King Abdullah bin Abdulaziz Airport · Jazan</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jazan Airport (GIZ) Taxi — Meet &amp; Greet Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi at <strong>Jazan Airport (GIZ)</strong> — flight tracked, name board at arrivals. Transfer to <strong>Jazan city, Farasan Islands ferry port, Jizan Corniche hotels, or Abha</strong>. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Jazan%20Airport%20GIZ" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book GIZ Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">15 km</div><div className="text-sm text-gray-600">from Jazan City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Name Board</div><div className="text-sm text-gray-600">Arrivals Exit</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Fixed Rate</div><div className="text-sm text-gray-600">Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from Jazan Airport (GIZ)</h2>
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
                                    { dest: 'Jazan City Centre', dist: '15 km', time: '20 min', note: 'Standard airport drop-off' },
                                    { dest: 'Jizan Corniche Hotels', dist: '18 km', time: '25 min', note: 'Red Sea beachfront hotels' },
                                    { dest: 'Farasan Ferry Port', dist: '20 km', time: '25 min', note: 'Direct to ferry for early flights' },
                                    { dest: 'Sabya', dist: '65 km', time: '1 hr', note: 'Largest inland city' },
                                    { dest: 'Abha City', dist: '200 km', time: '2.5–3 hrs', note: 'Direct mountain highway transfer' },
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

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jazan Airport FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-slate-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-slate-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Pre-Book Jazan Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Jazan%20Airport%20GIZ" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book GIZ Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan" className="text-teal-600 hover:underline">← Back to Jazan</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan/farasan-islands" className="text-teal-600 hover:underline">Farasan Islands →</Link>
            </div>
        </div>
    );
}
