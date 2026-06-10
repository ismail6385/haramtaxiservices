import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/al-qaysariyya-market' },
    title: 'Al-Qaysariyya Market Taxi | Al-Ahsa Traditional Souq — UNESCO Weaving & Dates',
    description: 'Taxi to Al-Qaysariyya Market in Al-Ahsa (Hofuf) — traditional covered souq, Al-Sadu weaving (UNESCO intangible heritage), dates, honey, silver, spices. Most authentic market in Eastern Province.',
    keywords: ['Al-Qaysariyya Market taxi', 'Hofuf souq taxi', 'Al-Ahsa traditional market taxi', 'Al-Sadu weaving Al-Ahsa', 'Hofuf market taxi', 'Al-Ahsa dates market taxi'],
    openGraph: {
        title: "Al-Qaysariyya Market Taxi — Al-Ahsa Traditional Souq Transfer",
        description: 'Taxi to Al-Qaysariyya Market, Al-Ahsa. UNESCO weaving, dates, silver. Traditional souq. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa/al-qaysariyya-market',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al-Qaysariyya Market?", answer: "Al-Qaysariyya Market is the main traditional covered souq in Hofuf — Al-Ahsa's historic commercial market. The market specialises in traditional crafts, Al-Sadu weaving (Bedouin textile art on UNESCO's Intangible Cultural Heritage list), Al-Ahsa dates (Khalas, Shalabi, and other premium varieties), local honey, silver jewellery, traditional clothing, spices, and medicinal herbs. It is considered the most authentic traditional market in the Eastern Province." },
    { question: "What is Al-Sadu weaving?", answer: "Al-Sadu is a traditional Bedouin weaving technique practised across the Arabian Peninsula — using a ground loom to create geometric-patterned textiles (tent panels, saddlebags, floor coverings, and decorative pieces). Al-Sadu weaving was inscribed on UNESCO's Representative List of Intangible Cultural Heritage in 2020. Al-Ahsa is one of the primary locations where Al-Sadu weaving is still actively practised and sold." },
    { question: "What dates can I buy at Al-Qaysariyya Market?", answer: "Al-Ahsa is Saudi Arabia's most important date-producing region with over 2.5 million palm trees. The most prized variety at the market: Khalas (soft, honey-sweet, the most expensive Al-Ahsa date), Shalabi, Kheneizi, and Rothan. Fresh Rutab (ripe, soft) dates are available July–October; dried and semi-dried varieties are available year-round. Buying directly from market stalls gets you the best quality and variety." },
    { question: "Where is Al-Qaysariyya Market in Al-Ahsa?", answer: "Al-Qaysariyya Market is in the historic centre of Hofuf — near the Qasr Ibrahim palace area. The market has been on this site for centuries as the commercial heart of the old city. A taxi from anywhere in Al-Ahsa takes you directly to the market entrance." },
    { question: "What else is in the Al-Qaysariyya Market area?", answer: "The Qasr Ibrahim Ottoman fortress is a short walk from Al-Qaysariyya Market — the two sites can be combined in a 2–3 hour city-centre visit. The surrounding streets also have traditional Hofuf architecture — old commercial buildings and residential lanes that retain the historic urban character of the city." },
];

export default function AlQaysariyyaMarketPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Qaysariyya Market</span>
                </div>
            </div>

            <section className="bg-orange-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Qaysariyya Market · UNESCO Al-Sadu Weaving · Khalas Dates · Hofuf Souq</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Qaysariyya Market Taxi — Al-Ahsa Traditional Souq Transfer</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Taxi to <strong>Al-Qaysariyya Market</strong> in Hofuf. <strong>UNESCO Al-Sadu weaving, Khalas dates, silver jewellery, traditional spices</strong>. Most authentic covered souq in the Eastern Province. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Qaysariyya%20Market%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Market Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Al-Sadu</div><div className="text-sm text-gray-600">UNESCO Weaving</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Khalas</div><div className="text-sm text-gray-600">Premium Al-Ahsa Dates</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Silver</div><div className="text-sm text-gray-600">Traditional Jewellery</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Covered</div><div className="text-sm text-gray-600">Historic Souq</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al-Qaysariyya Market — What to Buy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Al-Sadu Weaving', desc: "Al-Sadu (Bedouin textile weaving — UNESCO Intangible Cultural Heritage) is one of Al-Ahsa's defining craft traditions. The geometric-patterned textiles — woven on ground looms from wool, goat hair, and camel hair — are used for tent panels, cushion covers, bags, and decorative pieces. Al-Qaysariyya Market has dedicated Al-Sadu workshops and retail stalls where pieces are both made and sold. Prices range from small decorative items to large tent panels.", note: 'Best purchase: cushion cover (approx 80×80cm, portable).' },
                            { title: 'Al-Ahsa Khalas Dates', desc: "Khalas is the most prized Al-Ahsa date variety — a soft, honey-caramel date harvested from the 2.5 million palm trees of the UNESCO oasis. Fresh Khalas at Rutab stage (July–October) is one of the finest edible products in Arabia — soft, syrupy, and intensely sweet. Dried Khalas is available year-round. The market also sells Shalabi, Kheneizi, Rothan, and date products (date syrup, date paste, date coffee). Buy direct from stall owners for best quality and negotiated price.", note: 'Peak season: July–October (fresh Rutab Khalas).' },
                            { title: 'Silver & Traditional Crafts', desc: "Al-Qaysariyya Market has traditional silver jewellery stalls — Eastern Province silver tradition differs from Hejazi (western) styles: heavier pieces, more architectural forms, and distinctive geometric patterns. The market also has traditional clothing (thobes, bisht cloaks), spices (dried lime, black lime, traditional spice blends), incense and bukhur, and handmade copper and brass items. The covered market arcade structure is itself a heritage feature — restored traditional vaulted-ceiling commercial architecture.", note: 'Best exploration: start from the Qasr Ibrahim end.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Qaysariyya Market Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Al-Qaysariyya Market Taxi</h2>
                    <p className="mb-8 opacity-90">Hofuf traditional souq — Al-Sadu weaving, Khalas dates, silver. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Qaysariyya%20Market%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Market Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa/qasr-ibrahim" className="text-amber-700 hover:underline">← Qasr Ibrahim</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa/al-uqair" className="text-amber-700 hover:underline">Al-Uqair Coast →</Link>
            </div>
        </div>
    );
}
