import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/al-baha-airport' },
    title: 'Al-Baha Airport Taxi | ABT King Saud Airport Transfer — Pre-Book Essential',
    description: 'Taxi from Al-Baha Airport (ABT) — King Saud bin Abdulaziz Airport. Pre-book essential — limited on-demand transport. Saudia, flynas. City, Dhee Ain, Raghadan transfers. Fixed rate.',
    keywords: ['Al-Baha airport taxi', 'ABT airport transfer', 'Al-Baha airport pickup', 'King Saud airport Al-Baha taxi', 'ABT taxi'],
    openGraph: {
        title: 'Al-Baha Airport (ABT) Taxi — King Saud Airport Transfer',
        description: 'Pre-book Al-Baha Airport (ABT) taxi. Limited transport at arrivals. City, heritage sites. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha/al-baha-airport',
        type: 'website',
    },
};

const transfers = [
    { from: 'ABT Airport', to: 'Al-Baha City Hotels', distance: '15 km', time: '20 min' },
    { from: 'ABT Airport', to: 'Raghadan Forest Park', distance: '18 km', time: '25 min' },
    { from: 'ABT Airport', to: 'Dhee Ain Marble Village', distance: '38 km', time: '45 min' },
    { from: 'ABT Airport', to: 'Jeddah City', distance: '390 km', time: '4.5 hrs' },
    { from: 'ABT Airport', to: 'Riyadh City', distance: '660 km', time: '7 hrs' },
];

const faqs = [
    { question: "What is Al-Baha Airport (ABT)?", answer: "Al-Baha Regional Airport (IATA: ABT) — officially King Saud bin Abdulaziz Airport — is the commercial airport serving Al-Baha city and Al-Baha Province. It is a domestic-only airport with scheduled services to Riyadh (RUH) and Jeddah (JED) operated by Saudia and flynas. The airport is approximately 15km from Al-Baha city centre, on the edge of the highland plateau." },
    { question: "Is there a taxi at Al-Baha Airport arrivals?", answer: "Al-Baha Airport has very limited on-demand taxi services at arrivals — particularly in the evenings and off-peak hours. Pre-booking a private transfer is essential. Our driver meets you at the arrivals exit with a name board and drives directly to your accommodation or chosen destination." },
    { question: "How far is Al-Baha Airport from Dhee Ain and Raghadan?", answer: "Raghadan Forest Park: approximately 18km, 25 minutes from the airport. Dhee Ain Marble Village: approximately 38km, 45 minutes (airport → city → Dhee Ain access road). Arranging a direct airport-to-Dhee Ain transfer is possible for arrivals who want to arrive at the village for the afternoon light." },
    { question: "Which airlines fly to Al-Baha (ABT)?", answer: "Saudia (Saudi Arabian Airlines) and flynas operate domestic routes to Al-Baha from Riyadh (RUH) and Jeddah (JED). Flight frequency is limited — typically a few flights per day on each route. Check airline websites for current schedules." },
    { question: "Can I book an onward transfer from Al-Baha Airport to Jeddah or Taif?", answer: "Yes — we offer direct transfers from ABT Airport: Al-Baha to Jeddah (390km, 4.5 hours), Al-Baha to Taif (220km, 3 hours), Al-Baha to Riyadh (660km, 7 hours). Confirm your arrival time when booking for long-distance onward transfers." },
];

export default function AlBahaAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Baha Airport (ABT)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Baha Airport · IATA: ABT · King Saud Airport · 15km from City</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Baha Airport (ABT) Taxi — King Saud Airport Transfer</h1>
                        <p className="text-xl text-slate-200 mb-8 font-light">
                            Pre-book your <strong>Al-Baha Airport (ABT) taxi</strong> — <strong>very limited on-demand transport at arrivals</strong>. Driver with name board, direct to city, Dhee Ain, or Raghadan Forest. Saudia, flynas. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Al-Baha%20Airport%20(ABT)" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book ABT Airport Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">ABT</div><div className="text-sm text-gray-600">IATA Airport Code</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">15 km</div><div className="text-sm text-gray-600">to Al-Baha City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Saudia</div><div className="text-sm text-gray-600">+ flynas Domestic</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Baha Airport Transfer Distances</h2>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Baha Airport Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Al-Baha Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Pre-book ABT — very limited on-demand taxis. Name board, flight tracking, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Al-Baha%20Airport%20(ABT)" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book ABT Airport Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha/wadi-al-aqiq" className="text-emerald-700 hover:underline">← Wadi Al-Aqiq</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha" className="text-emerald-700 hover:underline">Back to Al-Baha Hub</Link>
            </div>
        </div>
    );
}
