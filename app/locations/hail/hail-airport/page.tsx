import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plane, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/hail-airport' },
    title: "Hail Airport Taxi | Ha'il Regional Airport (HAS) Arrivals Transfer",
    description: "Meet & greet taxi at Ha'il Regional Airport (HAS). Flight tracked, name board at arrivals. Hail city, Jubbah, Qasr Barzan. Fixed rate, 24/7.",
    keywords: ['Hail airport taxi', 'HAS airport transfer', "Ha'il airport taxi", 'Hail arrivals pickup', 'Hail city airport taxi'],
    openGraph: {
        title: "Hail Airport (HAS) Taxi — Meet & Greet Arrivals Transfer",
        description: "Pre-booked taxi at Ha'il Airport. Flight tracked, name board. Hail city, Jubbah. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/hail/hail-airport',
        type: 'website',
    },
};

const faqs = [
    { question: "Where is Ha'il Regional Airport?", answer: "Ha'il Regional Airport (IATA: HAS) is located approximately 10km southeast of Hail city centre — about 15 minutes by taxi. It is a domestic airport serving Hail Region with connections to Riyadh (RUH), Jeddah (JED), and Madinah (MED)." },
    { question: 'How do I pre-book a taxi at Hail Airport?', answer: "WhatsApp us your flight number (e.g. SV461), arrival date, and destination (hotel name or area). We confirm a fixed rate immediately, assign a driver, and track your flight in real time. Your driver waits at the arrivals exit with your name board." },
    { question: 'Which airlines fly to Hail Airport (HAS)?', answer: "Hail Airport is served by Saudia (domestic routes to Riyadh, Jeddah, and Madinah), flyadeal, and flynas. No international flights currently. Most visitors arrive via Riyadh or Jeddah connection." },
    { question: 'Can I book an airport pickup and go directly to Jubbah from HAS?', answer: "Yes — pickup at Hail Airport and direct transfer to Jubbah (100km north, 1 hour) is available. Popular for visitors who want to start their UNESCO rock art visit immediately. The driver takes you to Jubbah, waits during the site visit, then returns to Hail or your hotel." },
    { question: 'What if my Hail flight is delayed?', answer: "We track all flights in real time. Flight delays — whether 30 minutes or 3 hours — are handled automatically. Your driver adjusts arrival time and waits at the arrivals exit. No extra charge for delays." },
];

export default function HailAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Hail Airport (HAS)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: HAS · Ha&apos;il Regional Airport</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Hail Airport (HAS) Taxi — Meet &amp; Greet Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi at <strong>Ha&apos;il Regional Airport (HAS)</strong> — flight tracked, name board at arrivals. Transfer to <strong>Hail city, Jubbah UNESCO, Qasr Barzan, or any Hail destination</strong>. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Hail%20Airport%20HAS" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book HAS Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">10 km</div><div className="text-sm text-gray-600">from Hail City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Name Board</div><div className="text-sm text-gray-600">Arrivals Exit</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Fixed Rate</div><div className="text-sm text-gray-600">Confirmed on WhatsApp</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from Hail Airport (HAS)</h2>
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
                                    { dest: 'Hail City Centre', dist: '10 km', time: '15 min', note: 'Standard airport drop-off' },
                                    { dest: 'Jubbah Rock Art (UNESCO)', dist: '110 km', time: '1.1 hrs', note: 'Direct to UNESCO site from airport' },
                                    { dest: "A'arif Fort", dist: '12 km', time: '18 min', note: 'Hilltop fortress, city views' },
                                    { dest: 'Qasr Barzan', dist: '11 km', time: '18 min', note: 'Historic Shammar palace' },
                                    { dest: 'Jabal Aja base', dist: '22 km', time: '28 min', note: 'Sacred mountain of Hail' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hail Airport FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Pre-Book Hail Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Hail%20Airport%20HAS" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book HAS Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail" className="text-slate-600 hover:underline">← Back to Hail</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail/jubbah-rock-art" className="text-slate-600 hover:underline">Jubbah Rock Art →</Link>
            </div>
        </div>
    );
}
