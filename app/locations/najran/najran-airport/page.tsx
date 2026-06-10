import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/najran-airport' },
    title: 'Najran Airport Taxi | EAM Prince Abdulmajeed Airport Transfer — Pre-Book Essential',
    description: 'Taxi from Najran Airport (EAM) — Prince Abdulmajeed bin Abdulaziz Airport. Pre-book essential — limited taxis at arrivals. Saudia, flynas. City transfers, heritage sites. Fixed rate.',
    keywords: ['Najran airport taxi', 'EAM airport transfer', 'Prince Abdulmajeed airport taxi', 'Najran airport pickup', 'Najran EAM taxi'],
    openGraph: {
        title: 'Najran Airport (EAM) Taxi — Prince Abdulmajeed Airport Transfer',
        description: 'Pre-book Najran Airport (EAM) taxi. Limited transport at arrivals. City drops, heritage sites. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/najran/najran-airport',
        type: 'website',
    },
};

const transfers = [
    { from: 'EAM Airport', to: 'Najran City Hotels', distance: '10 km', time: '15 min' },
    { from: 'EAM Airport', to: 'Al-Ukhdood Archaeological Site', distance: '12 km', time: '15 min' },
    { from: 'EAM Airport', to: 'Emara Palace', distance: '10 km', time: '15 min' },
    { from: 'EAM Airport', to: 'Abha City', distance: '300 km', time: '3.5 hrs' },
    { from: 'EAM Airport', to: 'Riyadh City', distance: '980 km', time: '10 hrs' },
];

const faqs = [
    { question: "What is Najran Airport (EAM)?", answer: "Najran Domestic Airport (IATA: EAM) — officially Prince Abdulmajeed bin Abdulaziz Domestic Airport — is the commercial airport serving Najran city and the surrounding Najran Province. It is a domestic-only airport with scheduled services to Riyadh (RUH) and Jeddah (JED) operated by Saudia and flynas. The airport is approximately 10km from Najran city centre." },
    { question: "Is there a taxi at Najran Airport arrivals?", answer: "Najran Airport has limited and unreliable on-demand taxi services at arrivals. Pre-booking a private transfer is strongly recommended — particularly for arrivals in the evening or outside peak hours. Our driver meets you at the arrivals exit with a name board and drives directly to your accommodation." },
    { question: "How far is Najran Airport from the city and main sites?", answer: "Najran city hotels: approximately 10km, 15 minutes. Al-Ukhdood Archaeological Site: 12km, 15 minutes (can route directly from airport on arrival). Emara Palace: 10km, 15 minutes. Bir Hima UNESCO: 110km, 1 hour 15 minutes (EAM → Najran direction, then north)." },
    { question: "Which airlines fly to Najran (EAM)?", answer: "Saudia (Saudi Arabian Airlines) and flynas operate domestic routes to Najran from Riyadh (RUH) and Jeddah (JED). Flight frequency is limited — typically a few flights per day on each route. Check airline websites for current schedules." },
    { question: "Can I book an onward transfer from Najran Airport to Abha or Riyadh?", answer: "Yes — we offer airport-to-city direct transfers from EAM. Najran to Abha: 300km, 3.5 hours. Najran to Riyadh: 980km, 10 hours. For long-distance transfers, confirm your arrival time when booking so we can assess the departure timing." },
];

export default function NajranAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Najran Airport (EAM)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Najran Airport · IATA: EAM · Prince Abdulmajeed Airport · 10km from City</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Najran Airport (EAM) Taxi — Prince Abdulmajeed Airport Transfer</h1>
                        <p className="text-xl text-slate-200 mb-8 font-light">
                            Pre-book your <strong>Najran Airport (EAM) taxi</strong> — <strong>limited on-demand transport at arrivals</strong>. Driver with name board, direct to city or heritage sites. Saudia, flynas. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Najran%20Airport%20(EAM)" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book EAM Airport Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">EAM</div><div className="text-sm text-gray-600">IATA Airport Code</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">10 km</div><div className="text-sm text-gray-600">to Najran City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">Saudia</div><div className="text-sm text-gray-600">+ flynas Domestic</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Najran Airport Transfer Distances</h2>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Najran Airport Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Najran Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Pre-book EAM — limited on-demand taxis at arrivals. Name board, flight tracking, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20Najran%20Airport%20(EAM)" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book EAM Airport Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran/najran-old-town" className="text-red-700 hover:underline">← Najran Old Town</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran" className="text-red-700 hover:underline">Back to Najran Hub</Link>
            </div>
        </div>
    );
}
