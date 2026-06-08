import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Anchor } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/corniche' },
    title: 'Jeddah Corniche Taxi | Red Sea Waterfront & King Fahd Fountain Transfer',
    description: 'Taxi for Jeddah Corniche — 30km Red Sea waterfront, King Fahd Fountain, Al Hamra Corniche, and seafront hotels. Fixed-rate private transfers and city tours.',
    keywords: ['Jeddah Corniche taxi', 'King Fahd Fountain taxi', 'Jeddah waterfront taxi', 'Jeddah Corniche transfer', 'Jeddah seafront taxi', 'Al Hamra Corniche taxi'],
    openGraph: {
        title: 'Jeddah Corniche Taxi | Red Sea Waterfront Transfer',
        description: 'Private taxi for Jeddah Corniche, King Fahd Fountain, and Red Sea seafront hotels. Fixed rate. 24/7.',
        url: 'https://haramtaxiservice.com/locations/jeddah/corniche',
        type: 'website',
    },
};

export default function JeddahCornichePage() {
    const landmarks = [
        { name: 'King Fahd Fountain', desc: 'World\'s tallest fountain — best viewed from South Corniche at dusk', time: '25 min from KAIA' },
        { name: 'Al Hamra Corniche', desc: 'Upscale seafront promenade with restaurants and cafes', time: '20 min from KAIA' },
        { name: 'Jeddah Waterfront (JW)', desc: 'Modern seafront development — Four Seasons, restaurants', time: '20 min from KAIA' },
        { name: 'Al Nawras Park', desc: 'Family waterfront park — open-air seating and sea views', time: '30 min from KAIA' },
        { name: 'Al Shallal Theme Park', desc: 'Rides, ice skating, and entertainment on the Red Sea', time: '35 min from KAIA' },
        { name: 'Fakieh Aquarium', desc: 'Marine park — dolphin shows and Red Sea exhibits', time: '20 min from KAIA' },
    ];

    const faqs = [
        { question: 'How long is Jeddah Corniche?', answer: 'Jeddah Corniche stretches approximately 30km along the Red Sea coast from the south of the city to Obhur Creek in the north. The main tourist stretch between Al Hamra and the King Fahd Fountain area is about 5–10km.' },
        { question: 'Is there parking at Jeddah Corniche?', answer: 'Corniche parking is extremely difficult during evenings and weekends — especially near King Fahd Fountain. Using a private taxi driver who drops you and waits or picks you up on call is far more practical than self-driving, especially for visitors.' },
        { question: 'When can I see King Fahd Fountain?', answer: 'King Fahd Fountain operates approximately 6pm–midnight during cooler months (Oct–April). During summer it runs in the evenings only. The illuminated fountain is most spectacular at night. Confirm current timings with your hotel concierge.' },
        { question: 'Can I combine Corniche and Al Balad in one trip?', answer: 'Yes. Al Balad (Historic Jeddah) is only 5–10 minutes south of the main Corniche strip. A half-day Jeddah city tour covering both is a popular choice — WhatsApp us to arrange a fixed-rate combined tour.' },
        { question: 'Do you serve Corniche hotels?', answer: 'Yes. We serve all Jeddah Corniche hotels including Four Seasons Jeddah, Rosewood Jeddah, Jeddah Waterfront hotels, Hilton Al Hamra, and all properties along the seafront. Simply provide your hotel name when booking.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Corniche</span>
                </div>
            </div>

            <section className="bg-sky-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Anchor className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Red Sea Waterfront · Jeddah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jeddah Corniche Taxi — Red Sea Waterfront Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi for <strong>Jeddah Corniche</strong> — the 30km Red Sea waterfront, King Fahd Fountain, Al Hamra seafront, and all Corniche hotels. Your driver drops, waits, or returns on call — fixed rate, no meter.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jeddah%20Corniche" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Corniche Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-sky-50 border-b border-sky-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-sky-700 mb-1">30 km</div><div className="text-sm text-gray-600">Corniche Stretch</div></div>
                        <div><div className="text-3xl font-bold text-sky-700 mb-1">300m</div><div className="text-sm text-gray-600">King Fahd Fountain Height</div></div>
                        <div><div className="text-3xl font-bold text-sky-700 mb-1">25 min</div><div className="text-sm text-gray-600">from KAIA Airport</div></div>
                        <div><div className="text-3xl font-bold text-sky-700 mb-1">24/7</div><div className="text-sm text-gray-600">Pickup Service</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Corniche Destinations — Taxi Drop Points</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {landmarks.map((lm, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <MapPin className="w-6 h-6 text-sky-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{lm.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{lm.desc}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400"><Clock className="w-3 h-3" />{lm.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Private Taxi for Jeddah Corniche?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'No Parking Stress', desc: 'Corniche parking lots fill by 5pm on weekends and evenings. Your driver drops you at the fountain, finds a waiting area, and returns on call — no hunting for parking or meter running.' },
                            { title: 'Door-to-Door Comfort', desc: 'From your hotel to the exact Corniche entrance or restaurant. No 15-minute walks from car parks in the heat with children or elderly guests.' },
                            { title: 'Flexible Multi-Stop', desc: 'King Fahd Fountain → Al Balad → Corniche dinner restaurant — all in one trip at a single fixed rate. Add or change stops, your driver adapts.' },
                        ].map((c, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <CheckCircle2 className="w-6 h-6 text-green-500 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jeddah Corniche Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-sky-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-sky-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Corniche Transfer</h2>
                    <p className="mb-8 opacity-90">Tell us your hotel and preferred times — fixed rate to King Fahd Fountain and all Corniche destinations.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20Jeddah%20Corniche%20taxi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Corniche Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah/al-balad" className="text-slate-600 hover:underline">← Al Balad</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">Jeddah Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah/al-hamra" className="text-slate-600 hover:underline">Al Hamra →</Link>
            </div>
        </div>
    );
}
