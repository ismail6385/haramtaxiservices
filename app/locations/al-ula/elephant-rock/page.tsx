import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/elephant-rock' },
    title: 'Elephant Rock AlUla Taxi | Jabal AlFil Transfer — Sunset & Night Market',
    description: "Taxi to Elephant Rock (Jabal AlFil) from AlUla — 15km, 15 minutes. AlUla's most iconic natural sandstone formation. Sunset market, evening food stalls. Fixed rate.",
    keywords: ['Elephant Rock AlUla taxi', 'Jabal AlFil taxi', 'Elephant Rock transfer AlUla', 'AlUla natural rock taxi', 'Elephant Rock sunset taxi'],
    openGraph: {
        title: "Elephant Rock Taxi — Jabal AlFil AlUla Sunset Transfer",
        description: "Taxi to Elephant Rock (Jabal AlFil) AlUla. 15km, sunset market, iconic formation. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/al-ula/elephant-rock',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Elephant Rock?", answer: "Elephant Rock (Jabal AlFil — 'Elephant Mountain' in Arabic) is a 52-metre naturally eroded sandstone formation in the AlUla desert that closely resembles a giant elephant drinking from the ground. It is the most photographed natural landmark in AlUla and one of the most iconic rock formations in Saudi Arabia. The arch at the base is the trunk; the massive body rises to a rounded summit." },
    { question: "How far is Elephant Rock from AlUla?", answer: "Approximately 15km north of AlUla city — about 15 minutes by private taxi. The access road runs north from the main AlUla highway through the desert valley. No public transport serves the Elephant Rock area." },
    { question: "What is the Elephant Rock night market?", answer: "The Elephant Rock complex includes an open-air dining and market area that operates in the evening (approximately from 5pm to late). Food trucks, outdoor restaurants, fire pits, and craft stalls are set up in the area around the rock formation. The combination of the illuminated rock, desert atmosphere, and food market makes this one of AlUla's best evening experiences. The light show on the rock runs after dark." },
    { question: "What time should I visit Elephant Rock?", answer: "Two optimal times: (1) Sunset — the orange-red sandstone glows intensely at sunset, the market opens, and the light is ideal for photography (approximately 1 hour before sunset in your visit season). (2) Full night — after dark, the rock is illuminated with light projections during certain periods, particularly Winter at Tantora season. Midday visits under direct sun are harsh — the rock is better in directional light." },
    { question: "Do I need to book Elephant Rock entry?", answer: "Elephant Rock and the surrounding dining area do not require advance ticket booking — unlike Hegra. You can arrive directly. However, during Winter at Tantora (December–March) and peak weekends, the area is crowded. Confirm your return pickup time with your driver before entering." },
];

export default function ElephantRockPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Elephant Rock</span>
                </div>
            </div>

            <section className="bg-orange-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Elephant Rock · Jabal AlFil · 52m Natural Arch · 15km from AlUla</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Elephant Rock Taxi — Jabal AlFil AlUla Sunset &amp; Night Market Transfer</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Taxi from <strong>AlUla to Elephant Rock (Jabal AlFil)</strong> — 15km, 15 minutes. <strong>AlUla&apos;s most iconic 52-metre sandstone arch</strong>, sunset dining market, evening light show. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Elephant%20Rock" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Elephant Rock Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">15 km</div><div className="text-sm text-gray-600">from AlUla</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">52 m</div><div className="text-sm text-gray-600">Natural Rock Arch</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Sunset</div><div className="text-sm text-gray-600">Best Photography Time</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Market</div><div className="text-sm text-gray-600">Evening Food &amp; Craft</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Elephant Rock — What to Expect</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Rock Formation', desc: "Jabal AlFil is a naturally eroded sandstone monolith — 52 metres tall, shaped over millions of years into the unmistakable form of an elephant with a long trunk touching the ground. The 9-metre arch at the base is the defining feature. Up close, the scale is extraordinary. The reddish-orange sandstone colour intensifies dramatically in the hour before sunset.", note: 'Viewpoint: approach from the west for the full trunk profile.' },
                            { title: 'Sunset Experience', desc: "Elephant Rock at sunset is one of Saudi Arabia's great natural spectacles. The sandstone catches the last directional light and turns deep amber-red. The market and food area begin operating from approximately 4:30–5pm (season-dependent), so visitors can dine as the sun sets behind the rock. The timing requires a pre-arranged pickup to return to AlUla after the experience.", note: 'Sunset times vary by season — check when booking.' },
                            { title: 'Night Market & Dining', desc: "The Elephant Rock dining complex has outdoor restaurants, food trucks serving Saudi, international, and fusion cuisine, craft stalls, fire pits, and seating areas. During Winter at Tantora (December–March), additional events and light projections are added. The market operates until approximately 10–11pm. Book your return taxi pickup time before entering the market.", note: 'No-entry-ticket required for market area.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-orange-700 font-medium border-t border-orange-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Elephant Rock Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-orange-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-orange-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Elephant Rock Taxi</h2>
                    <p className="mb-8 opacity-90">15km from AlUla — sunset, market, iconic arch. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20Elephant%20Rock" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Elephant Rock Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula/hegra" className="text-amber-700 hover:underline">← Hegra (Madain Saleh)</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula/dadan" className="text-amber-700 hover:underline">Dadan Ancient City →</Link>
            </div>
        </div>
    );
}
