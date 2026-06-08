import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/aziziyah' },
    title: 'Aziziyah Taxi Makkah | Aziziyah Hotel Transport & Haram Transfer Guide',
    description: 'Taxi from Aziziyah to Masjid Al-Haram in Makkah — 3km, 10 minutes. Aziziyah hotel pickup, KAIA airport transfers, Ziyarat tours. Fixed rate, 24/7 service for Hajj & Umrah.',
    keywords: ['Aziziyah taxi Makkah', 'Aziziyah to Haram taxi', 'Makkah Aziziyah transport', 'Aziziyah hotel taxi service', 'Hajj Aziziyah transfer', 'Umrah taxi Aziziyah'],
    openGraph: {
        title: 'Aziziyah Taxi Makkah — Hotel to Haram Transport',
        description: 'Private taxi from Aziziyah hotels to Masjid Al-Haram. 10 minutes, fixed rate. KAIA airport transfers and Ziyarat tours available.',
        url: 'https://haramtaxiservice.com/locations/makkah/aziziyah',
        type: 'website',
    },
};

export default function AziziyahPage() {
    const faqs = [
        { question: 'How far is Aziziyah from Masjid Al-Haram?', answer: "The Aziziyah district is approximately 2.5–4km from Masjid Al-Haram depending on which part of Aziziyah your hotel is in. By taxi, the journey takes 10–20 minutes in normal traffic. During peak prayer times (Maghrib and Isha), especially in Ramadan and Hajj, allow 25–40 minutes due to road congestion near the Haram area. Many Aziziyah residents and pilgrims choose to walk the 30–45 minute route to the Haram during cooler morning and evening hours." },
        { question: 'Why do so many Hajj pilgrims stay in Aziziyah?', answer: "Aziziyah is a large residential and commercial district that contains hundreds of affordable to mid-range hotels. During Hajj season, inner Markaziah (close to Haram) properties are primarily occupied by officially registered Hajj groups with pre-allocated accommodation. Independent pilgrims, later-booking groups, and budget-conscious Umrah visitors find a wide range of available options in Aziziyah. The district is well-served by taxis and local buses (Makkah Metro serves some areas during Hajj)." },
        { question: 'Is there a Makkah Metro stop in Aziziyah?', answer: "Yes — the Makkah Metro (Haramain Metro) runs during Hajj season connecting Aziziyah to the Haram, Mina, Arafat, and Muzdalifah. During non-Hajj periods, the service is limited or unavailable. The Al-Aziziyah station provides a convenient, affordable option for the Haram journey during Hajj. However, during peak Hajj movement days (8th–13th Dhul Hijjah), the metro reaches capacity and waits can be very long — pre-booked private taxi is the reliable alternative." },
        { question: 'What taxi services are available in Aziziyah for Hajj 2026?', answer: "We offer 24/7 taxi service from Aziziyah hotels — hotel pickup at your entrance, Haram transport, airport transfers to KAIA Jeddah, and full Ziyarat tours. Our drivers know every Aziziyah hotel's location, which are sometimes in complex street layouts unfamiliar to drivers from outside Makkah. WhatsApp us your hotel name and we confirm pickup logistics instantly." },
        { question: 'How do I get from KAIA Airport to my Aziziyah hotel?', answer: "KAIA Jeddah Airport to Aziziyah is approximately 90–100km — a 1.5–2 hour drive. Our airport transfer drivers meet you at KAIA arrivals with a name board, assist with luggage, and drive directly to your Aziziyah hotel. Book in advance via WhatsApp with your flight number and hotel name. We track your flight for delays at no extra cost." },
    ];

    const hotels = [
        { name: 'Al Safwah Royale Orchid', type: 'Luxury', note: 'King Road area' },
        { name: 'Le Méridien Towers Makkah', type: 'Luxury', note: 'Near Aziziyah main road' },
        { name: 'Elaf Kinda Hotel', type: 'Mid-range', note: 'Central Aziziyah' },
        { name: 'Swissotel Al Maqam', type: 'Luxury', note: 'Close to Haram boundary' },
        { name: 'Best Western Plus Makkah', type: 'Mid-range', note: 'Aziziyah commercial area' },
        { name: 'Various Hajj Group Hotels', type: 'Varied', note: 'Ministry-allocated Hajj accommodations' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Aziziyah</span>
                </div>
            </div>

            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">3km From Haram · Makkah Hotel District</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Aziziyah Taxi Makkah — Hotel to Haram Transport & Airport Transfers</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi from your <strong>Aziziyah hotel</strong> to Masjid Al-Haram — 10 minutes, fixed rate. KAIA Airport pickup, full Ziyarat tours, and Hajj-season 24/7 service for all Aziziyah district hotels.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Aziziyah%20Makkah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Aziziyah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">3 km</div><div className="text-sm text-gray-600">To Masjid Al-Haram</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">10 min</div><div className="text-sm text-gray-600">Taxi to Haram</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">24/7</div><div className="text-sm text-gray-600">Hajj & Umrah Service</div></div>
                        <div><div className="text-3xl font-bold text-blue-800 mb-1">Fixed</div><div className="text-sm text-gray-600">Rate — No Surge</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Aziziyah Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Hotel to Haram Transfers', desc: 'Pickup from your Aziziyah hotel entrance — 10–20 minute drive to Masjid Al-Haram drop-off zone. Pre-schedule your Fajr, Dhuhr, and Isha journeys to avoid prayer time traffic.', time: '10–20 min' },
                            { title: 'KAIA Airport to Aziziyah', desc: 'Meet & greet at KAIA arrivals — driver with name board. Direct transfer to your Aziziyah hotel. All Hajj luggage accommodated. Flight tracked for delays.', time: '1.5–2 hrs' },
                            { title: 'Makkah Ziyarat from Aziziyah', desc: 'Full Ziyarat circuit from your Aziziyah hotel: Jabal Al-Nour, Jabal Thawr, Mina, Arafat, Muzdalifah, Jannat Al-Mualla. Half-day and full-day options. Fixed all-inclusive rate.', time: '4–7 hrs' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-2 text-blue-700 text-sm font-semibold mb-3">
                                    <Clock className="w-4 h-4" />{s.time}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aziziyah Hotels We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{h.name}</div>
                                    <div className="text-xs text-blue-600 font-medium mt-0.5">{h.type}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">{h.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">Don&apos;t see your hotel? We serve all Aziziyah properties — WhatsApp your hotel name for confirmation.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aziziyah FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Your Aziziyah Taxi</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel name and required service — airport pickup, Haram transfer, or Ziyarat tour.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20my%20Aziziyah%20hotel%20in%20Makkah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Aziziyah Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah/jabal-al-nour" className="text-slate-600 hover:underline">← Jabal Al-Nour</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah/muzdalifah" className="text-slate-600 hover:underline">Muzdalifah →</Link>
            </div>
        </div>
    );
}
