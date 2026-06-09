import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/farasan-islands' },
    title: 'Farasan Islands Taxi | Jazan Ferry Port Transfer — Red Sea Coral Archipelago',
    description: 'Taxi from Jazan to Farasan Islands ferry port — morning drop-off and return pickup. No cars on the islands. Pre-book essential. Red Sea coral reefs, Ottoman fort, wildlife.',
    keywords: ['Farasan Islands taxi', 'Farasan ferry port taxi', 'Jazan Farasan taxi', 'Farasan Al-Kabeer ferry', 'Jizan Farasan Islands transfer'],
    openGraph: {
        title: 'Farasan Islands Taxi — Jazan Ferry Port Transfer',
        description: 'Taxi to Farasan Islands ferry port from Jazan. No taxis on islands — pre-book return pickup. Coral reefs, Ottoman fort.',
        url: 'https://haramtaxiservice.com/locations/jazan/farasan-islands',
        type: 'website',
    },
};

const faqs = [
    { question: "What are the Farasan Islands?", answer: "The Farasan Islands are a Saudi Arabian coral archipelago in the Red Sea, approximately 40–50km southwest of Jazan city. The island group includes over 80 islands and islets, with Greater Farasan Island (Al-Kabeer) being the main inhabited island. The islands have exceptional coral reefs (among the Red Sea's richest), an Ottoman-era fortress, traditional coral-stone architecture, and significant wildlife including Arabian gazelle and migratory birds." },
    { question: "How do I get from Jazan to the Farasan Islands?", answer: "The only regular access to the Farasan Islands is by government ferry from Jazan Port (Al-Minaab Terminal). Our taxi takes you from your Jazan hotel to the ferry terminal. The ferry journey to Greater Farasan Island takes approximately 1.5–2 hours. Return: we pick you up from the ferry terminal when you arrive back in Jazan." },
    { question: "Are there taxis on the Farasan Islands?", answer: "No — there are no taxis, Careem, Uber, or car rental on the Farasan Islands. Transport on the islands is by foot, bicycle (rentable on the island), or local electric golf carts. The island has a relaxed, car-free atmosphere. This is part of the islands' appeal." },
    { question: "How do I book the Farasan Islands ferry?", answer: "The Farasan Islands ferry is operated by the Saudi Coast Guard / government transport authority. Booking procedures and schedules vary — check current ferry times before your trip as departures and booking methods change. Our taxi will get you to the port on time for your chosen departure." },
    { question: "What can I see on the Farasan Islands?", answer: "Main attractions: (1) Ottoman Fort (Qasr Al-Farasan) — a well-preserved 16th-century Ottoman fortification on the main island. (2) Coral reefs — some of the Red Sea's richest — excellent for snorkelling and diving. (3) Traditional coral-stone architecture — old houses built from the reef material unique to these islands. (4) Wildlife — Arabian gazelle, hawksbill turtles nesting on beaches, migratory birds (over 170 species recorded). (5) Fish market — fresh catch daily at the small island harbour." },
];

export default function FarasanIslandsPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Farasan Islands</span>
                </div>
            </div>

            <section className="bg-teal-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Farasan Islands · Red Sea · Coral Reef · No Cars · Ferry from Jazan</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Farasan Islands Taxi — Jazan Ferry Port Transfer</h1>
                        <p className="text-xl text-teal-100 mb-8 font-light">
                            Taxi from <strong>Jazan to Farasan Islands ferry port</strong> — morning drop-off and return pickup. <strong>No taxis on the islands</strong> — pre-book your Jazan port transfer before departing. Coral reefs, Ottoman fort, car-free island life.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Farasan%20Islands%20ferry%20port%20from%20Jazan" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Farasan Ferry Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8 rounded-r-xl">
                <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-amber-800 mb-1">No Taxis on the Farasan Islands — Pre-Book Your Return Port Pickup</p>
                        <p className="text-sm text-amber-700">There are no taxis, Careem, or Uber on or near Jazan ferry port at night. Pre-book your return pickup before you leave — confirm your estimated return ferry time with us so we are at the port when you arrive back.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-teal-50 border-b border-teal-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">80+</div><div className="text-sm text-gray-600">Islands & Islets</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">No Cars</div><div className="text-sm text-gray-600">Car-Free Islands</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">1.5–2 hrs</div><div className="text-sm text-gray-600">Ferry Crossing</div></div>
                        <div><div className="text-3xl font-bold text-teal-700 mb-1">Ottoman</div><div className="text-sm text-gray-600">16th-Century Fort</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Farasan Islands — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Ottoman Fort (Qasr Al-Farasan)', desc: "The centrepiece of Greater Farasan Island — a well-preserved 16th-century Ottoman fortress built when the Ottoman Empire controlled the Red Sea and Yemen. The fort's thick walls, watchtowers, and arched gates are in excellent condition. One of the most complete Ottoman military structures in Saudi Arabia.", note: 'Best visited in the morning before midday heat.' },
                            { title: 'Coral Reefs & Marine Life', desc: "The Farasan Islands sit within the Red Sea's central zone — one of the world's most biodiverse marine environments. The reefs around the islands are extremely healthy (low boat traffic, protected status) with excellent visibility. Hawksbill and green turtles nest on the beaches from April to September.", note: 'Snorkelling gear available for hire on the island.' },
                            { title: 'Coral-Stone Architecture', desc: "Traditional Farasan houses are built from coral stone cut from the reef — a construction method unique to these islands and very few other Red Sea locations. The old quarter of Greater Farasan village has well-preserved coral-stone houses with carved wooden doors and latticed windows, giving the island a distinct architectural character unlike anywhere on the mainland.", note: 'Old quarter: 15-minute walk from the ferry landing.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-teal-700 font-medium border-t border-teal-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Farasan Islands FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-teal-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-teal-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Farasan Ferry Taxi</h2>
                    <p className="mb-8 opacity-90">Morning drop-off + return pickup — pre-book before you go.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Farasan%20Islands%20ferry%20port%20from%20Jazan" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Farasan Ferry Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan/jazan-airport" className="text-teal-600 hover:underline">← Jazan Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan/jizan-corniche" className="text-teal-600 hover:underline">Jizan Corniche →</Link>
            </div>
        </div>
    );
}
