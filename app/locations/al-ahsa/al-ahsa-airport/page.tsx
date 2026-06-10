import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/al-ahsa-airport' },
    title: 'Al-Ahsa Airport Taxi | HOF Transfer — Pre-Book Essential',
    description: 'Taxi from Al-Ahsa Airport (HOF) — Al-Ahsa International Airport. Pre-book essential. Saudia, flynas. City, Al-Qara Mountain, Qatar border transfers. Fixed rate.',
    keywords: ['Al-Ahsa airport taxi', 'HOF airport transfer', 'Al-Ahsa airport pickup', 'Hofuf airport taxi', 'HOF taxi'],
    openGraph: {
        title: 'Al-Ahsa Airport (HOF) Taxi — Pre-Book Essential',
        description: 'Pre-book Al-Ahsa Airport (HOF) taxi. Saudia, flynas. City, heritage sites. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa/al-ahsa-airport',
        type: 'website',
    },
};

const transfers = [
    { from: 'HOF Airport', to: 'Hofuf City Centre', distance: '30 km', time: '35 min' },
    { from: 'HOF Airport', to: 'Al-Qara Mountain', distance: '40 km', time: '45 min' },
    { from: 'HOF Airport', to: 'Qasr Ibrahim', distance: '35 km', time: '40 min' },
    { from: 'HOF Airport', to: 'Riyadh City', distance: '350 km', time: '3.5 hrs' },
    { from: 'HOF Airport', to: 'Dammam City', distance: '160 km', time: '1.75 hrs' },
];

const faqs = [
    { question: "What is Al-Ahsa Airport (HOF)?", answer: "Al-Ahsa International Airport (IATA: HOF) — also known as Al-Ahsa Regional Airport — serves Hofuf and the Al-Ahsa governorate. Domestic routes operated by Saudia and flynas connect to Riyadh (RUH) and Jeddah (JED). The airport is approximately 30km from Hofuf city centre — about 35 minutes by taxi." },
    { question: "Is there a taxi at Al-Ahsa Airport arrivals?", answer: "On-demand taxi availability at HOF Airport is limited. Pre-booking a private transfer is strongly recommended — particularly for evening arrivals and off-peak hours. Our driver meets you at arrivals with a name board and takes you directly to your hotel or heritage destination." },
    { question: "Can I go directly from HOF Airport to Al-Qara Mountain?", answer: "Yes — a direct airport-to-Al-Qara Mountain transfer is popular for visitors arriving in the morning who want to do the cave visit while it is still early. Al-Qara is approximately 40km from the airport (45 minutes). From Al-Qara you can continue to Jawatha Mosque and Qasr Ibrahim for a full heritage day." },
    { question: "Which airlines fly to Al-Ahsa (HOF)?", answer: "Saudia (Saudi Arabian Airlines) and flynas operate domestic routes to Al-Ahsa from Riyadh (RUH) and Jeddah (JED). Flight frequency is limited. Many visitors choose to drive from Dammam (135km) or Riyadh (350km) rather than fly." },
    { question: "Can I book a transfer from HOF Airport to the Qatar border?", answer: "Yes — we offer transfers from HOF Airport to Salwa Qatar Border (approximately 150km, 1.5 hours) and Batha UAE Border (approximately 350km, 4 hours). These are intercity transfers that need confirmation of your arrival time and onward crossing timing." },
];

export default function AlAhsaAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Ahsa Airport (HOF)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Ahsa Airport · IATA: HOF · 30km from Hofuf · Pre-Book Essential</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Ahsa Airport (HOF) Taxi — Pre-Book Essential</h1>
                        <p className="text-xl text-slate-200 mb-8 font-light">
                            Pre-book your <strong>Al-Ahsa Airport (HOF) taxi</strong> — <strong>limited on-demand transport at arrivals</strong>. Driver with name board, direct to Hofuf city, Al-Qara Mountain, or Qatar border. Saudia, flynas. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Al-Ahsa%20Airport%20(HOF)" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book HOF Airport Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">HOF</div><div className="text-sm text-gray-600">IATA Airport Code</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">30 km</div><div className="text-sm text-gray-600">to Hofuf City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Saudia</div><div className="text-sm text-gray-600">+ flynas Domestic</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Ahsa Airport Transfer Distances</h2>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">From</th>
                                    <th className="px-6 py-4 text-left font-semibold">To</th>
                                    <th className="px-6 py-4 text-center font-semibold">Distance</th>
                                    <th className="px-6 py-4 text-center font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {transfers.map((t, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="px-6 py-4 text-gray-700">{t.from}</td>
                                        <td className="px-6 py-4 font-medium text-gray-900">{t.to}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{t.distance}</td>
                                        <td className="px-6 py-4 text-center text-gray-600">{t.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Ahsa Airport Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Al-Ahsa Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Pre-book HOF — name board, flight tracking, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Al-Ahsa%20Airport%20(HOF)" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book HOF Airport Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa/al-uqair" className="text-amber-700 hover:underline">← Al-Uqair Coast</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa" className="text-amber-700 hover:underline">Back to Al-Ahsa Hub</Link>
            </div>
        </div>
    );
}
