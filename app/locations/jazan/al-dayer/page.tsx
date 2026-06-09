import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/al-dayer' },
    title: 'Al Dayer Taxi | Jazan Mountain Gateway & Terraced Farms',
    description: 'Taxi to Al Dayer from Jazan — 70km, 1 hour. Mountain gateway at the foot of the Asir escarpment. Ancient terraced farms, cool mountain air, Jazan highlands. Fixed rate.',
    keywords: ['Al Dayer taxi', 'Al Dayer Jazan taxi', 'Jazan mountain taxi', 'Jazan to Al Dayer taxi', 'Asir foothills Jazan taxi'],
    openGraph: {
        title: 'Al Dayer Taxi — Jazan Mountain Gateway & Terraced Farms',
        description: 'Taxi from Jazan to Al Dayer mountain gateway. 70km, cool highlands, ancient terraces.',
        url: 'https://haramtaxiservice.com/locations/jazan/al-dayer',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al Dayer?", answer: "Al Dayer is a district and town in Jazan Region at the foot of the Asir escarpment — the transitional zone where the flat Tihama coastal plain begins rising into the Asir highlands. The area is known for ancient agricultural terraces cut into the hillsides, cooler temperatures compared to the coast, and traditional Tihama-Asir architecture." },
    { question: "How far is Al Dayer from Jazan?", answer: "Al Dayer is approximately 70km east of Jazan city — about 60 minutes by taxi on the highway that begins to climb toward the Asir foothills. The drive passes through the flat Tihama plain before entering the first mountain slopes." },
    { question: "What are the terraced farms of Al Dayer?", answer: "The terraced farms (mazraat mutarrajah) of the Al Dayer area are ancient agricultural constructions — stone walls built into the hillsides to create level planting surfaces that trap rainfall and prevent erosion. Similar terracing is found throughout the Asir highlands. The Al Dayer terraces grow sorghum, millet, vegetables, and fruit trees at different elevations." },
    { question: "Is Al Dayer cooler than Jazan city?", answer: "Yes — Al Dayer sits at a higher elevation than Jazan coast and benefits from cooler temperatures and sometimes cloud cover from the Asir mountains. During summer, when Jazan coast is 38–40°C and extremely humid, Al Dayer can be 5–8°C cooler with lower humidity, making it a local retreat for Jazan residents." },
    { question: "Can I continue from Al Dayer to Abha?", answer: "Yes — Al Dayer is on the route toward the higher Asir mountains. From Al Dayer, the road continues to climb toward Abha (approximately 130km, 1.5–2 hours from Al Dayer). A Jazan → Al Dayer → Abha full journey is approximately 2.5 hours total." },
];

export default function AlDayerPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Dayer</span>
                </div>
            </div>

            <section className="bg-emerald-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al Dayer · Mountain Gateway · Asir Foothills · Ancient Terraced Farms</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al Dayer Taxi — Jazan Mountain Gateway &amp; Terraced Farms</h1>
                        <p className="text-xl text-emerald-100 mb-8 font-light">
                            Taxi from <strong>Jazan to Al Dayer</strong> — 70km east, 1 hour. Where the Tihama coastal plain meets the <strong>Asir escarpment</strong>. Ancient terraced farms, cooler mountain air, traditional highland villages. Gateway to Abha.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Al%20Dayer" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al Dayer Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">70 km</div><div className="text-sm text-gray-600">from Jazan City</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Cooler</div><div className="text-sm text-gray-600">Mountain Air</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Terraces</div><div className="text-sm text-gray-600">Ancient Farm Steps</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Abha</div><div className="text-sm text-gray-600">1.5 hrs onward</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al Dayer — Tihama Meets Asir</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Ancient Agricultural Terraces', desc: "The hillsides around Al Dayer are carved with ancient agricultural terraces — stone-walled steps cut into the escarpment to create flat planting surfaces. This system, built over centuries, channels rainwater and prevents soil erosion on steep slopes. The terraces grow sorghum, millet, coffee trees, and vegetables.", note: 'Best season: post-monsoon (September–October) for green terraces.' },
                            { title: 'Tihama-Asir Architecture', desc: "Al Dayer sits in the cultural transition zone between Tihama coastal culture (flat-roofed mud houses, painted interiors) and Asir highland culture (stone multi-story houses, juniper wood). Traditional villages in this zone show both influences — colourful painted walls in the Tihama style with stone construction from the Asir tradition.", note: 'Several traditional villages along the main road.' },
                            { title: 'Gateway to the Mountains', desc: "Al Dayer is the natural waypoint on the Jazan–Abha highway — a good stopping point for a break and tea before the serious mountain climb to Abha begins. From Al Dayer, the road ascends rapidly through the Asir escarpment with switchbacks and dramatic valley views.", note: 'Al Dayer to Abha: 130km, 1.5–2 hours by taxi.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-emerald-700 font-medium border-t border-emerald-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Dayer Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-emerald-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-emerald-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al Dayer Taxi</h2>
                    <p className="mb-8 opacity-90">Mountain gateway, terraced farms, cool highlands — 70km from Jazan.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Al%20Dayer" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al Dayer Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan/abu-arish" className="text-teal-600 hover:underline">← Abu Arish</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan" className="text-teal-600 hover:underline">Back to Jazan Hub</Link>
            </div>
        </div>
    );
}
