import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/jizan-corniche' },
    title: 'Jizan Corniche Taxi | Red Sea Promenade Hotels & Fish Market',
    description: 'Taxi to Jizan Corniche — 9km Red Sea promenade, beachfront hotels, Jazan fish market, seafood restaurants. Jazan city centre hotel transfers. Fixed rate.',
    keywords: ['Jizan Corniche taxi', 'Jazan corniche hotel taxi', 'Jizan beach hotel taxi', 'Jazan seafood taxi', 'Jizan city centre taxi'],
    openGraph: {
        title: 'Jizan Corniche Taxi — Red Sea Promenade & Hotel Transfers',
        description: 'Taxi to Jizan Corniche, beachfront hotels, fish market and seafood restaurants. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/jazan/jizan-corniche',
        type: 'website',
    },
};

const faqs = [
    { question: "What is the Jizan Corniche?", answer: "The Jizan Corniche is a 9km seafront promenade along the Red Sea coast of Jazan city. It runs from the central city south through parks, cafes, restaurants, and beachfront areas. Most of Jazan's best hotels are located on or near the Corniche. The adjacent fish market (Souq Al-Samak) is one of Saudi Arabia's busiest and best-stocked." },
    { question: "Which hotels are on the Jizan Corniche?", answer: "Major hotels on or near the Corniche include Movenpick Jazan, Coral Hotel Jizan, Al Muhaidb Hotel, and several other 3–4 star properties. Most have sea views and are within walking distance of the fish market and main promenade. Our taxi covers pickups and drop-offs from all Corniche hotels." },
    { question: "Where is the Jazan fish market?", answer: "The Jazan fish market (Al-Suq Al-Samak) is located near the Corniche and the old port area in central Jazan. It is most active in the early morning (5–9am) when the fishing boats unload. The market sells hammour (grouper), kingfish, lobster, shrimp, squid, and local Red Sea specialty fish. Several restaurants surrounding the market cook your purchase for a small fee." },
    { question: "How do I get from Jizan Corniche to the Farasan Islands ferry port?", answer: "The Farasan Islands ferry port is approximately 12km from the Corniche hotels — about 15–20 minutes by taxi. For early morning ferries, we recommend pre-booking a pickup from your Corniche hotel the night before to ensure you make your departure." },
    { question: "Is the Jizan Corniche safe for walking at night?", answer: "Yes — the Jizan Corniche is a well-lit public promenade that is popular for evening walks, especially after Maghrib prayer (sunset) when temperatures cool. Cafes and juice stands are open late. The area is family-friendly and one of the most pleasant evening walks in southern Saudi Arabia." },
];

export default function JizanCornichePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jizan Corniche</span>
                </div>
            </div>

            <section className="bg-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jizan Corniche · 9km Red Sea Promenade · Hotels · Fish Market</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jizan Corniche Taxi — Red Sea Promenade &amp; Hotel Transfers</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi to <strong>Jizan Corniche</strong> — Jazan&apos;s 9km Red Sea promenade. <strong>Beachfront hotels, Jazan fish market, seafood restaurants</strong>. Hotel pickups and drop-offs, airport connections, Farasan ferry port transfers. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jizan%20Corniche" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Corniche Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">9 km</div><div className="text-sm text-gray-600">Red Sea Promenade</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Fish Market</div><div className="text-sm text-gray-600">Saudi Arabia&apos;s Best</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Hotels</div><div className="text-sm text-gray-600">All Corniche Properties</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">15 min</div><div className="text-sm text-gray-600">to Ferry Port</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jizan Corniche — What to See &amp; Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Jizan Fish Market', desc: "The Jizan fish market (Al-Suq Al-Samak) near the Corniche port area is one of Saudi Arabia's most active — fresh catch daily from the Red Sea fishing fleet. Hammour, kingfish, lobster, shrimp, and local specialty fish. Most active 5–9am. Several restaurants around the market will cook your purchase.", note: 'Best visited at sunrise for maximum variety and activity.' },
                            { title: 'Corniche Promenade & Cafes', desc: "The 9km waterfront promenade has parks, seating areas, juice stands, and cafes running its full length. Most active in the evening after Maghrib prayer when the temperature drops and families come out for walks. The sea breeze makes it one of the most pleasant evenings in southern Saudi Arabia.", note: 'Evening: most cafes open until midnight, juice stands later.' },
                            { title: 'Mangrove Coast South of Corniche', desc: "South of the main Corniche, Jazan has one of Saudi Arabia's most significant mangrove habitats — a UNESCO-nominated ecosystem providing habitat for fish nurseries, birds, and the coastal ecology of the Red Sea. The mangrove boardwalk is accessible from the southern end of the waterfront area.", note: 'Best for birdwatching October–April (migrating species).' },
                        ].map((s, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-blue-700 font-medium border-t border-blue-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jizan Corniche FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jizan Corniche Taxi</h2>
                    <p className="mb-8 opacity-90">Hotel transfers, fish market, ferry port — all covered.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jizan%20Corniche" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Corniche Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan/farasan-islands" className="text-teal-600 hover:underline">← Farasan Islands</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan/sabya" className="text-teal-600 hover:underline">Sabya →</Link>
            </div>
        </div>
    );
}
