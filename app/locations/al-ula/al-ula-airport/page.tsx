import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/al-ula-airport' },
    title: 'AlUla Airport Taxi | ULH Prince Abdul Majeed Airport Transfer — Pre-Book Essential',
    description: 'Taxi from AlUla Airport (ULH) — Prince Abdul Majeed bin Abdulaziz Airport. Pre-book essential — no taxis at ULH arrivals. Saudia, flyadeal, flynas. Resort drop-offs, fixed rate.',
    keywords: ['AlUla airport taxi', 'ULH airport transfer', 'Prince Abdul Majeed airport taxi', 'AlUla airport pickup', 'AlUla ULH taxi'],
    openGraph: {
        title: 'AlUla Airport (ULH) Taxi — Prince Abdul Majeed Airport Transfer',
        description: 'Pre-book ULH AlUla airport taxi. No taxis at arrivals. Resort drops, fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ula/al-ula-airport',
        type: 'website',
    },
};

const transfers = [
    { from: 'ULH Airport', to: 'AlUla City Hotels', distance: '15 km', time: '20 min' },
    { from: 'ULH Airport', to: 'Hegra Resorts / Camp Sites', distance: '30 km', time: '35 min' },
    { from: 'ULH Airport', to: 'Habitas / Banyan Tree Resort', distance: '20 km', time: '25 min' },
    { from: 'ULH Airport', to: 'Madinah City', distance: '340 km', time: '3.5 hrs' },
    { from: 'ULH Airport', to: 'Tabuk City', distance: '285 km', time: '3 hrs' },
];

const faqs = [
    { question: "What is AlUla Airport (ULH)?", answer: "AlUla Airport — formally Prince Abdul Majeed bin Abdulaziz Regional Airport (IATA: ULH, ICAO: OEAO) — is the commercial airport serving AlUla and the surrounding Madinah Province northwest. It is a small regional airport that has been significantly upgraded as part of the AlUla Vision 2030 development programme. Airlines serving ULH include Saudia, flyadeal, and flynas on domestic routes to Riyadh (RUH), Jeddah (JED), and Madinah (MED)." },
    { question: "Is there a taxi at AlUla Airport arrivals?", answer: "No — ULH Airport has no standard taxi rank or ride-hailing coverage. Pre-booking a private transfer before your flight is essential. Without a pre-booked driver, you will exit arrivals with no transport options. Our driver meets you at arrivals with a name board." },
    { question: "How far is AlUla Airport from the city?", answer: "Approximately 15km from AlUla city centre — about 20 minutes by taxi. Resorts near Hegra (north of the city) are approximately 30–35 minutes from the airport. Confirm your accommodation address when booking so we route correctly." },
    { question: "Which airlines fly to AlUla Airport?", answer: "Saudia, flyadeal, and flynas operate domestic routes to ULH from Riyadh (RUH), Jeddah (JED), and Madinah (MED). Seasonal routes may also operate from Dammam. Check current schedules on the airline websites — ULH routes expand during Winter at Tantora season (December–March)." },
    { question: "Can I book an onward transfer from AlUla Airport to Madinah?", answer: "Yes — AlUla to Madinah is 340km southeast, approximately 3.5 hours. We offer direct airport-to-Madinah transfers for visitors arriving at ULH and continuing to the Prophet's Mosque. Confirm when booking so we plan the correct vehicle for your luggage." },
];

export default function AlUlaAirportPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">AlUla Airport (ULH)</span>
                </div>
            </div>

            <section className="bg-slate-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">AlUla Airport · IATA: ULH · Prince Abdul Majeed Airport · Pre-Book Essential</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">AlUla Airport (ULH) Taxi — Prince Abdul Majeed Airport Transfer</h1>
                        <p className="text-xl text-slate-200 mb-8 font-light">
                            Pre-book your <strong>AlUla Airport (ULH) taxi</strong> — <strong>no taxis or ride-hailing at arrivals</strong>. Driver meets you with name board. Resort drops, Madinah &amp; Tabuk onward transfers. Saudia, flyadeal, flynas. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20AlUla%20Airport%20(ULH)" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book ULH Airport Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">ULH</div><div className="text-sm text-gray-600">IATA Airport Code</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">15 km</div><div className="text-sm text-gray-600">to AlUla City</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">3 Airlines</div><div className="text-sm text-gray-600">Saudia · flyadeal · flynas</div></div>
                        <div><div className="text-3xl font-bold text-slate-700 mb-1">24/7</div><div className="text-sm text-gray-600">Flight Tracking</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla Airport Transfer Distances</h2>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla Airport Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book AlUla Airport Transfer</h2>
                    <p className="mb-8 opacity-90">Pre-book essential — no taxis at ULH arrivals. Flight tracking, name board, resort drops.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20an%20airport%20taxi%20from%20AlUla%20Airport%20(ULH)" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book ULH Airport Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula/jabal-ikmah" className="text-amber-700 hover:underline">← Jabal Ikmah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula" className="text-amber-700 hover:underline">Back to AlUla Hub</Link>
            </div>
        </div>
    );
}
