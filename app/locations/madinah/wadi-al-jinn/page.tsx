import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/wadi-al-jinn' },
    title: 'Wadi Al-Jinn Taxi Madinah | Magnetic Valley Day Trip from Madinah',
    description: "Private taxi to Wadi Al-Jinn (Al-Baida Magnetic Valley) — 40km north of Madinah. Cars roll uphill, water flows against gravity. Popular Madinah day trip. Fixed rate.",
    keywords: ['Wadi Al-Jinn taxi Madinah', 'Magnetic Hill Madinah taxi', 'Al-Baida Valley taxi', 'Wadi Al-Jinn tour', 'Madinah day trip Wadi Jinn'],
    openGraph: {
        title: 'Wadi Al-Jinn Taxi — Magnetic Valley Day Trip from Madinah',
        description: "Private taxi to the magnetic Wadi Al-Jinn (Al-Baida Valley) from Madinah — where cars appear to roll uphill. 40 minutes. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/madinah/wadi-al-jinn',
        type: 'website',
    },
};

export default function WadiAlJinnPage() {
    const faqs = [
        { question: 'What is Wadi Al-Jinn?', answer: "Wadi Al-Jinn — officially named Wadi Al-Baida — is a valley approximately 40km north of Madinah where a remarkable optical illusion makes cars appear to roll uphill and water appear to flow against gravity when the engine is off. The phenomenon is caused by the surrounding mountain ridges and flat valley floor creating a visual gradient that reverses the perceived slope. Despite its supernatural-sounding reputation (Jinn means genies in Arabic), the effect is entirely a natural optical illusion confirmed by topographical measurement." },
        { question: 'How do I get to Wadi Al-Jinn from Madinah?', answer: "Wadi Al-Jinn is approximately 40km north of Madinah — a 40-minute drive via Route 15 north toward Tabuk. We pick up from your Madinah hotel and take you directly. Most visitors spend 1–2 hours at the valley experiencing the car-rolling effect and taking photos before returning to Madinah." },
        { question: 'Is Wadi Al-Jinn safe to visit?', answer: "Yes. Wadi Al-Jinn is a well-known tourist destination and is regularly visited by Madinah pilgrims. The road is paved and safe. The site is in a desert valley — bring water, especially in summer months. Visit in the morning to avoid peak afternoon heat." },
        { question: 'Can I combine Wadi Al-Jinn with other Madinah Ziyarat?', answer: "Yes. A full-day tour can combine the main Madinah Ziyarat sites (Quba, Uhud, Qiblatain, Seven Mosques) in the morning with a Wadi Al-Jinn excursion in the afternoon. This is our most comprehensive Madinah day tour. WhatsApp us to arrange the combined itinerary." },
        { question: 'Why does Wadi Al-Jinn have this name?', answer: "The Arabic name 'Wadi Al-Jinn' (Valley of the Jinn) comes from traditional local explanations for the unexplained magnetic-seeming force that appears to push cars uphill. The scientific explanation is an optical illusion — the surrounding landscape makes a downhill slope appear uphill to the human eye. The official geological name of the valley is Wadi Al-Baida." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Wadi Al-Jinn</span>
                </div>
            </div>

            <section className="bg-purple-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">North Madinah · Al-Baida Magnetic Valley</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Wadi Al-Jinn Taxi — Magnetic Valley Day Trip from Madinah</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Wadi Al-Jinn (Al-Baida Valley)</strong> — 40km north of Madinah, where cars roll uphill and water defies gravity. The most popular day trip from Madinah beyond the Ziyarat circuit. Fixed rate, driver waits at the valley.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Al-Jinn%20from%20Madinah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Wadi Al-Jinn Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-purple-50 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">40 km</div><div className="text-sm text-gray-600">North of Madinah</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">40 min</div><div className="text-sm text-gray-600">Drive from Markaziah</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">1–2 hrs</div><div className="text-sm text-gray-600">At the Valley</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">Fixed</div><div className="text-sm text-gray-600">Round-Trip Rate</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Wadi Al-Jinn Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Cars Roll Uphill', desc: 'Put your car in neutral on the designated section of road. It appears to roll uphill, gaining speed as it goes. The effect is caused by the surrounding mountain profile creating a visual illusion — the road appears flat or uphill but is actually slightly downhill.' },
                            { title: 'Water Flows "Against Gravity"', desc: 'Pour water on the road and it appears to flow uphill toward the higher-seeming direction. Same optical illusion — the visual reference points from the surrounding mountains fool the human brain into reversing the perceived slope.' },
                            { title: 'The Science Explained', desc: 'GPS elevation measurements confirm the road at Wadi Al-Jinn is actually downward sloping in the direction things appear to roll "uphill." The optical illusion is perfect: the nearby ridgelines create a false horizon that reverses how the brain interprets the slope.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-purple-500 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tour Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Wadi Al-Jinn Half-Day Trip</h3>
                            <p className="text-gray-600 mb-4 text-sm">Pickup from your Madinah hotel → 40-min drive to Wadi Al-Jinn → 1–2 hours at the magnetic valley → return to hotel. Morning departure recommended.</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500"><Clock className="w-4 h-4" />3–4 hours total</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ziyarat + Wadi Al-Jinn Full Day</h3>
                            <p className="text-gray-600 mb-4 text-sm">Full-day tour: Quba Mosque, Mount Uhud, Seven Mosques, Qiblatain — all Ziyarat sites in the morning, then Wadi Al-Jinn in the afternoon. One booking, fixed all-day rate.</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500"><Clock className="w-4 h-4" />7–8 hours total</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wadi Al-Jinn FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-purple-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-purple-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Wadi Al-Jinn Day Trip</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel and preferred morning time — fixed round-trip rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=I%20want%20to%20book%20a%20Wadi%20Al-Jinn%20day%20trip%20from%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Wadi Al-Jinn Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah/al-aqiq" className="text-slate-600 hover:underline">← Al-Aqiq Miqat</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">Madinah Hub</Link>
            </div>
        </div>
    );
}
