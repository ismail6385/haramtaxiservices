import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Plane } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/med-airport' },
    title: 'Madinah Airport Taxi (MED) | Prince Mohammad bin Abdulaziz Airport Transfer',
    description: 'Pre-booked taxi from Madinah Airport (MED) — Prince Mohammad bin Abdulaziz Airport. Meet & greet, name board, 20-min to Markaziah hotels. Fixed rate, 24/7, Hajj 2026.',
    keywords: ['Madinah airport taxi', 'MED airport transfer', 'Prince Mohammad airport taxi Madinah', 'Madinah airport to hotel', 'MED taxi Madinah'],
    openGraph: {
        title: 'Madinah Airport Taxi (MED) — Prince Mohammad bin Abdulaziz Airport',
        description: 'Meet & greet from Madinah MED Airport to all Madinah hotels. Fixed fare, flight tracked, 24/7. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/madinah/med-airport',
        type: 'website',
    },
};

export default function MedAirportPage() {
    const destinations = [
        { dest: 'Markaziah Hotels (Inner Ring)', time: '20 min', note: 'Prophet\'s Mosque-adjacent hotels' },
        { dest: 'Markaziah Hotels (Mid Ring)', time: '25 min', note: 'Al-Aziziah and surrounding area' },
        { dest: 'Haramain Train Station', time: '25 min', note: 'Connect to Makkah or Jeddah by train' },
        { dest: 'Makkah', time: '4.5 hrs', note: 'Via Hijrah Highway — Hajj-permitted' },
        { dest: 'Yanbu', time: '2.5 hrs', note: 'Via Route 60 West' },
        { dest: 'Jeddah City', time: '4 hrs', note: 'Via Hijrah Highway to Red Sea coast' },
    ];

    const faqs = [
        { question: 'How far is MED Airport from Madinah hotels?', answer: 'Prince Mohammad bin Abdulaziz Airport (MED) is approximately 17–20km from the Markaziah hotel zone around Masjid Al-Nabawi. The drive takes 20–30 minutes depending on traffic and your specific hotel location.' },
        { question: 'Does MED have international flights?', answer: 'Yes. MED serves both domestic and international routes — including direct flights from UK, Pakistan, Indonesia, Malaysia, India, Egypt, and other countries with large Muslim populations. It is particularly busy during Hajj and Umrah seasons.' },
        { question: 'How does the meet & greet work at MED?', answer: 'After booking, we send your driver\'s name, vehicle model, and phone number via WhatsApp before you land. Your driver waits at the MED arrivals exit with a board showing your name. They assist with luggage and take you directly to your hotel. No need to navigate public transport with Hajj luggage after a long flight.' },
        { question: 'Is there a surcharge for late-night MED arrivals?', answer: 'No. Our fixed pricing is the same 24 hours a day. Many Hajj and Umrah flights arrive at MED between midnight and 5am — our drivers are on duty for all arrival windows without any late-night surcharge.' },
        { question: 'Can you take me from MED airport directly to Makkah?', answer: 'Yes. We offer direct MED airport to Makkah transfers — approximately 4.5 hours via the Hijrah Highway. Our vehicles are Hajj-permitted for Makkah checkpoint entry. For a KAIA Jeddah departure instead, we also offer MED to KAIA airport intercity transfers.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">MED Airport</span>
                </div>
            </div>

            <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                <span>Hajj 2026 MED airport slots filling fast. <a href="https://wa.me/966575806733?text=I%20need%20a%20Madinah%20MED%20airport%20transfer%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer" className="underline">Book now.</a></span>
            </div>

            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Prince Mohammad bin Abdulaziz Airport · Madinah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Madinah Airport (MED) Taxi — Meet &amp; Greet Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Pre-booked, fixed-rate taxi from <strong>Prince Mohammad bin Abdulaziz Airport (MED)</strong> to all Madinah hotels, Haramain Train Station, Makkah, and Yanbu. Flight tracked, name board at arrivals, 24/7 including midnight flights.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Madinah%20MED%20airport" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book MED Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from Madinah MED Airport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {destinations.map((d, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900">{d.dest}</span>
                                    <span className="text-blue-700 font-bold">{d.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />{d.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vehicle Guide for MED Airport Pickups</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Toyota Camry', cap: '1–3 pax', bag: '2 large bags', best: 'Solo traveler or couple' },
                            { name: 'GMC Yukon XL', cap: '1–7 pax', bag: '7 large bags', best: 'Families with Hajj luggage' },
                            { name: 'Toyota Hiace', cap: '8–11 pax', bag: '10+ bags', best: 'Group Hajj travel parties' },
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <Car className="w-8 h-8 text-slate-500 mb-4" />
                                <h3 className="font-bold text-lg text-gray-900 mb-3">{v.name}</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />{v.cap}</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />{v.bag}</div>
                                    <div className="text-xs text-gray-400 italic mt-2">Best for: {v.best}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">MED Airport Transfer FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-blue-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your MED Airport Transfer</h2>
                    <p className="mb-8 opacity-90">WhatsApp your flight number, arrival terminal, hotel name, and group size — fixed price confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20Madinah%20MED%20airport" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">← Back to Madinah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah/al-aqiq" className="text-slate-600 hover:underline">Al-Aqiq Miqat →</Link>
            </div>
        </div>
    );
}
