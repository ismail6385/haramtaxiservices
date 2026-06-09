import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/aarif-fort' },
    title: "A'arif Fort Hail Taxi | Hilltop Fortress & City Panorama",
    description: "Taxi to A'arif Fort in Hail — the hilltop fortress overlooking Hail city. Best panoramic view in Hail. 3km from city centre. Part of Hail heritage circuit.",
    keywords: ["A'arif Fort taxi", "Aarif Fort Hail taxi", 'Hail fort taxi', 'Hail city view taxi', 'Qasr Aarif Hail', 'Hail heritage tour taxi'],
    openGraph: {
        title: "A'arif Fort Hail — Hilltop Fortress Panorama Taxi",
        description: "Taxi to A'arif Fort, Hail's hilltop fortress with best city panorama. 3km from centre.",
        url: 'https://haramtaxiservice.com/locations/hail/aarif-fort',
        type: 'website',
    },
};

const faqs = [
    { question: "What is A'arif Fort?", answer: "A'arif Fort (Qasr A'arif or A'rif Fort) is a historic fortress built on a rocky ridge directly above Hail city. Originally constructed in the 18th century, it was used as a watchtower and military strongpoint by the Al Rashid Shammar rulers. The fort commands a complete 360° view of Hail city and the surrounding desert plain, making it the best viewpoint in Hail." },
    { question: "How do I get to A'arif Fort?", answer: "A'arif Fort is approximately 3km from central Hail — about 10 minutes by taxi. The fort is reached by a road that winds up the rocky ridge above the city. The last section may require a short walk. Our driver drops you at the base and waits while you visit." },
    { question: "Is A'arif Fort accessible on foot?", answer: "The lower road to A'arif Fort is driveable to a certain point, after which a short walk up the rock is required. The path is not steep but is uneven rock — wear closed shoes. The walk takes approximately 10–15 minutes from the car park area. The views are worth it." },
    { question: "What is the view like from A'arif Fort?", answer: "From A'arif Fort, the complete Hail city panorama is visible — the city centre, hotels, the mosque minarets, and Qasr Barzan below. Jabal Aja and its granite formations are visible to the west. The surrounding desert plain stretches to the horizon. At sunset, the view of the city lights coming on is particularly striking." },
    { question: "What other heritage sites can I combine with A'arif Fort?", answer: "A'arif Fort is best visited as part of the Hail city heritage circuit: A'arif Fort (hilltop views), Qasr Barzan (Shammar palace, 3km away), and Al-Qishla Palace (Ottoman barracks, nearby). All three cover different aspects of Hail's layered history in a 3–4 hour circuit." },
];

export default function AarifFortPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">A&apos;arif Fort</span>
                </div>
            </div>

            <section className="bg-red-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">A&apos;arif Fort · Hilltop Fortress · Best City Panorama · 3km from Centre</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">A&apos;arif Fort Hail — Hilltop Fortress &amp; City Panorama</h1>
                        <p className="text-xl text-red-100 mb-8 font-light">
                            Taxi to <strong>A&apos;arif Fort</strong> — Hail&apos;s 18th-century hilltop fortress with the <strong>best panoramic view of the city</strong> and surrounding desert. Part of the Hail heritage circuit with Qasr Barzan and Al-Qishla Palace.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Aarif%20Fort%20in%20Hail" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book A&apos;arif Fort Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-red-50 border-b border-red-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-red-700 mb-1">3 km</div><div className="text-sm text-gray-600">from Hail Centre</div></div>
                        <div><div className="text-3xl font-bold text-red-700 mb-1">360°</div><div className="text-sm text-gray-600">City Panorama</div></div>
                        <div><div className="text-3xl font-bold text-red-700 mb-1">18th C</div><div className="text-sm text-gray-600">Al Rashid Fortress</div></div>
                        <div><div className="text-3xl font-bold text-red-700 mb-1">10 min</div><div className="text-sm text-gray-600">Taxi from City</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">A&apos;arif Fort — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Fort Structure', desc: "Built on a rocky ridge that rises sharply above the Hail city plain, A'arif Fort uses the natural elevated position as its primary defense. The mud-brick walls, watchtower, and gate are typical of northern Najdi military architecture. The fort controlled the approach to Hail from the north and east.", note: 'Restored sections and interpretive signage installed.' },
                            { title: 'Panoramic Views', desc: "The ridge location gives A'arif Fort the best unobstructed views of Hail city and the surrounding landscape — the flat desert plain extending to the horizon, Jabal Aja's granite peaks to the west, and the city sprawl below. Ideal photography at golden hour (sunset).", note: 'Sunset: approximately 6:30pm (winter) to 7:30pm (summer).' },
                            { title: 'Hail Heritage Circuit', desc: "A'arif Fort is the natural starting or ending point for a Hail heritage circuit: fort visit (1 hour) → Qasr Barzan palace (1 hour) → Al-Qishla Palace (45 min) → Hail Museum (optional, 1 hour). A driver-waits package covers all stops in one rate.", note: 'Circuit total: 3.5–4 hours including travel between sites.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-red-700 font-medium border-t border-red-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">A&apos;arif Fort FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-red-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-red-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book A&apos;arif Fort Taxi</h2>
                    <p className="mb-8 opacity-90">Best city panorama in Hail — sunset photography, heritage circuit.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Aarif%20Fort%20in%20Hail" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book A&apos;arif Fort Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail/jabal-aja" className="text-slate-600 hover:underline">← Jabal Aja</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail/al-qishla" className="text-slate-600 hover:underline">Al-Qishla Palace →</Link>
            </div>
        </div>
    );
}
