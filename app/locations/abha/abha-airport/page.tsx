import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plane, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/abha-airport' },
    title: 'Abha Airport Taxi | Prince Sultan Airport (AHB) Arrivals Transfer',
    description: 'Meet & greet taxi at Abha Airport (AHB/Prince Sultan bin Abdulaziz Airport). Flight tracked, name board. Abha city, Khamis Mushait, Al-Soudah. Fixed rate, 24/7.',
    keywords: ['Abha airport taxi', 'AHB airport transfer', 'Prince Sultan Airport Abha taxi', 'Abha arrivals pickup', 'Khamis Mushait airport taxi', 'Asir airport transfer'],
    openGraph: {
        title: 'Abha Airport (AHB) Taxi — Meet & Greet Arrivals Transfer',
        description: 'Pre-booked taxi at Abha Airport. Flight tracked, name board. Abha, Khamis Mushait, Al-Soudah. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/abha/abha-airport',
        type: 'website',
    },
};

const faqs = [
    { question: 'Where do I find my taxi at Abha Airport?', answer: "After collecting baggage and clearing arrivals at Prince Sultan bin Abdulaziz Airport (AHB), exit the arrivals hall. Your pre-booked driver will be waiting with a name board at the arrivals exit. WhatsApp us your flight number before departure — we track your flight and your driver arrives at the right time." },
    { question: 'Which airlines fly to Abha Airport (AHB)?', answer: "Abha Airport is served by Saudia (domestic: Riyadh, Jeddah, Madinah; international: limited routes), flyadeal, and flynas (domestic routes). Most domestic connections through Riyadh (RUH) or Jeddah (JED). International visitors typically connect via Jeddah or Riyadh." },
    { question: 'How far is Abha Airport from Abha city and from Khamis Mushait?', answer: "Abha Airport (AHB) to Abha city centre: approximately 20km, 25 minutes. Abha Airport to Khamis Mushait city: approximately 15km, 20 minutes. The airport is actually closer to Khamis Mushait than to central Abha. Both cities are served from this single airport." },
    { question: 'Can I book an airport taxi to Al-Soudah or Asir National Park directly from AHB?', answer: "Yes — pickup at Abha Airport and direct transfer to Al-Soudah, Habala Village cable car, or Asir National Park. These are longer journeys (40–60 minutes from the airport), quoted separately from a standard city transfer. WhatsApp us your flight and destination for a fixed quote." },
    { question: 'What if my flight to Abha is delayed?', answer: "We track all flights in real time. If your Abha flight is delayed, your driver adjusts the pickup time and waits at arrivals. No extra charge for delays. This is included in the standard airport transfer rate." },
];

export default function AbhaAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Abha Airport (AHB)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: AHB · Prince Sultan bin Abdulaziz Airport</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Abha Airport (AHB) Taxi — Meet &amp; Greet Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi at <strong>Abha Airport (AHB)</strong> — flight tracked, name board at arrivals. Transfer to <strong>Abha city, Khamis Mushait, Al-Soudah, or Asir National Park</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Abha%20Airport%20AHB" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book AHB Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">20 km</div><div className="text-sm text-gray-600">from Abha City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Name Board</div><div className="text-sm text-gray-600">Arrivals Hall</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Fixed Rate</div><div className="text-sm text-gray-600">Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from Abha Airport (AHB)</h2>
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
                                    { dest: 'Abha City Centre', dist: '20 km', time: '25 min', note: 'Standard airport transfer' },
                                    { dest: 'Khamis Mushait', dist: '15 km', time: '20 min', note: 'Closer to airport than Abha' },
                                    { dest: 'Al-Soudah', dist: '45 km', time: '55 min', note: "Saudi Arabia's highest point, 2,910m" },
                                    { dest: 'Habala Cable Car Station', dist: '60 km', time: '1 hr 10 min', note: 'Cliffside village, cable car from top' },
                                    { dest: 'Asir National Park', dist: '35 km', time: '45 min', note: 'Cloud forest and Dalghan adventure' },
                                    { dest: 'Rijal Almaa Heritage Village', dist: '90 km', time: '1.5 hrs', note: 'UNESCO Asiri architecture' },
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Book Abha Airport Taxi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: '1', title: 'WhatsApp Your Flight', desc: 'Send your flight number (e.g. SV321), arrival date, destination (hotel name or area), and passenger count.' },
                            { step: '2', title: 'Receive Fixed Rate', desc: 'We confirm your destination and quote a fixed rate immediately. No surge pricing, no meter.' },
                            { step: '3', title: 'Land & Find Your Driver', desc: "Your driver is at arrivals with your name board. We track your flight — no extra charge for delays." },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                                <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Abha Airport FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Pre-Book Abha Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Abha%20Airport%20AHB" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book AHB Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/green-mountain" className="text-slate-600 hover:underline">← Green Mountain</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha/khamis-mushait" className="text-slate-600 hover:underline">Khamis Mushait →</Link>
            </div>
        </div>
    );
}
