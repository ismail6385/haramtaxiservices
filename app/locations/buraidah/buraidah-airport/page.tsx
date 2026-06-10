import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/buraidah/buraidah-airport' },
    title: 'Buraidah Airport Taxi | Prince Naif Airport (ELQ) Arrivals Transfer',
    description: 'Meet & greet taxi at Prince Naif Airport (ELQ), Buraidah. Flight tracked, name board. Buraidah city, Unaizah, Riyadh transfers. Fixed rate, 24/7.',
    keywords: ['Buraidah airport taxi', 'ELQ airport taxi', 'Prince Naif Airport taxi', 'Qassim airport taxi', 'Buraidah arrivals transfer'],
    openGraph: {
        title: 'Buraidah Airport (ELQ) Taxi — Meet & Greet Arrivals Transfer',
        description: 'Pre-booked taxi at Prince Naif Airport (ELQ). Flight tracked, name board. Buraidah, Unaizah, Riyadh.',
        url: 'https://haramtaxiservice.com/locations/buraidah/buraidah-airport',
        type: 'website',
    },
};

const faqs = [
    { question: "Where is Prince Naif Airport (ELQ)?", answer: "Prince Naif bin Abdulaziz Airport (IATA: ELQ) is located approximately 18km north of Buraidah city centre — about 20 minutes by taxi. It serves both Buraidah and Unaizah (the Qassim twin cities), with domestic flights from Riyadh, Jeddah, and Madinah on Saudia, flyadeal, and flynas." },
    { question: "How do I pre-book a taxi at Buraidah Airport?", answer: "WhatsApp your flight number, arrival date, and destination before your flight. We confirm a fixed rate, assign a driver, and track your flight. Name board at ELQ arrivals exit. No extra charge for delays." },
    { question: "Does ELQ Airport serve Unaizah as well?", answer: "Yes — Prince Naif Airport (ELQ) is the shared airport for Buraidah and Unaizah, both cities in Qassim Region. Unaizah is approximately 25km from ELQ — about 30 minutes by taxi. We serve transfers to both cities from the airport." },
    { question: "Can I go directly from ELQ Airport to Riyadh?", answer: "Yes — ELQ to Riyadh is approximately 330km, 3 hours by private taxi. Popular for business travellers who fly to ELQ and need onward road transfer to Riyadh, or who prefer the road return rather than connecting flight." },
    { question: "What if my Buraidah flight is delayed?", answer: "We track all flights in real time. Delays are handled automatically — your driver adjusts arrival time and waits at ELQ arrivals exit. No extra charge for flight delays of any length." },
];

export default function BuraidahAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/buraidah">Buraidah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Buraidah Airport (ELQ)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">IATA: ELQ · Prince Naif bin Abdulaziz Airport · Qassim Region</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Buraidah Airport (ELQ) Taxi — Meet &amp; Greet Arrivals</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Pre-booked taxi at <strong>Prince Naif Airport (ELQ)</strong> — flight tracked, name board at arrivals. Transfer to <strong>Buraidah city, Unaizah, or Riyadh</strong>. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Buraidah%20Airport%20ELQ" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book ELQ Airport Pickup
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from Buraidah Airport (ELQ)</h2>
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
                                    { dest: 'Buraidah City Centre', dist: '18 km', time: '20 min', note: 'Standard airport drop-off' },
                                    { dest: 'Unaizah City', dist: '25 km', time: '30 min', note: 'Twin city, served from ELQ' },
                                    { dest: 'Dates Market (Souq Al-Tamr)', dist: '20 km', time: '25 min', note: 'Direct to festival market Aug–Sep' },
                                    { dest: 'Qassim University', dist: '22 km', time: '25 min', note: 'Staff & student transfers' },
                                    { dest: 'Riyadh (King Khalid Airport)', dist: '330 km', time: '3 hrs', note: 'Road transfer, no connection needed' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Buraidah Airport FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Pre-Book ELQ Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Send your flight number — rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20pickup%20at%20Buraidah%20Airport%20ELQ" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book ELQ Pickup
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/buraidah" className="text-amber-600 hover:underline">← Back to Buraidah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/buraidah/buraydah-dates-market" className="text-amber-600 hover:underline">Dates Market →</Link>
            </div>
        </div>
    );
}
