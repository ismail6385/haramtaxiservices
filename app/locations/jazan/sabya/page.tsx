import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jazan/sabya' },
    title: 'Sabya Taxi | Jazan Region Inland City Transfer',
    description: 'Taxi to Sabya from Jazan — 55km, 45 minutes. Largest inland city of Jazan Region, agricultural hub, traditional souq. Fixed rate.',
    keywords: ['Sabya taxi', 'Sabya Jazan taxi', 'Jazan to Sabya taxi', 'Sabya city transfer', 'Jazan inland taxi'],
    openGraph: {
        title: 'Sabya Taxi — Jazan Region Inland City Transfer',
        description: 'Taxi from Jazan to Sabya, largest inland city of Jazan Region. 55km, 45 min.',
        url: 'https://haramtaxiservice.com/locations/jazan/sabya',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Sabya?", answer: "Sabya is the largest inland city of Jazan Region — an agricultural hub city approximately 55km northeast of Jazan city centre. It is known for its traditional souq, date palm groves, and as a service centre for the surrounding farming communities. Sabya University is located here." },
    { question: "How far is Sabya from Jazan?", answer: "Sabya is approximately 55km northeast of Jazan city — about 45 minutes by taxi on the main highway inland through the Tihama coastal plain. The road is flat and straightforward." },
    { question: "What is Sabya known for?", answer: "Sabya is known as an agricultural and commercial centre for inland Jazan Region — traditionally producing sorghum, millet, mangoes, and tropical fruits. The traditional souq in central Sabya has a mix of local produce, household goods, and the distinctive woven baskets and textiles of the Jazan Region cultural tradition." },
    { question: "Can I go from Sabya directly to Abha?", answer: "Yes — Sabya to Abha is approximately 170km, around 2 hours via the mountain highway. An alternative route to Abha from Sabya through the Asir foothills is possible and slightly shorter than going via Jazan city. Confirm routing when booking." },
    { question: "Is there a university in Sabya?", answer: "Yes — Jazan University has a campus in Sabya. We provide university staff and student transfers between Sabya and Jazan city, as well as inter-city transfers for those commuting to Jazan Airport (GIZ)." },
];

export default function SabyaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jazan">Jazan</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Sabya</span>
                </div>
            </div>

            <section className="bg-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Sabya · Jazan Inland City · Agricultural Hub · 55km from Jazan</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Sabya Taxi — Jazan Region Inland City Transfer</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Taxi from <strong>Jazan to Sabya</strong> — 55km northeast, 45 minutes. Largest inland city of Jazan Region. <strong>Traditional souq, Jazan University campus, agricultural hub</strong>. Fixed rate, fixed journey.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Sabya" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Sabya Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-700 mb-1">55 km</div><div className="text-sm text-gray-600">from Jazan City</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">45 min</div><div className="text-sm text-gray-600">Taxi Journey</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">Souq</div><div className="text-sm text-gray-600">Traditional Market</div></div>
                        <div><div className="text-3xl font-bold text-green-700 mb-1">University</div><div className="text-sm text-gray-600">Jazan University Campus</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sabya — Inland Jazan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Agricultural Heritage', desc: "Sabya and the surrounding Tihama plain are part of Jazan Region's agricultural heartland — tropical fruits (mango, papaya, banana, guava), sorghum, and millet growing in the warm humid climate year-round. The Sabya area produces some of the finest mangoes in Saudi Arabia.", note: 'Mango season: May–July.' },
                            { title: 'Traditional Souq', desc: "Central Sabya has a traditional market with local produce, woven baskets, traditional textiles, honey, and household goods. The souq reflects the distinct cultural traditions of the Jazan Region — different from the Najd and Hejaz markets in style, produce, and social character.", note: 'Busiest: Thursday–Friday mornings.' },
                            { title: 'Jazan University — Sabya Campus', desc: "Jazan University has a major campus in Sabya, making it one of the largest educational institutions in the southern region. We serve staff and student transfers between Sabya campus and Jazan city (airport, hotels, city centre).", note: 'Regular commuter transfers available.' },
                            { title: 'Gateway to the Mountains', desc: "Sabya sits at the transition point between the flat Tihama coastal plain and the rising Asir foothills. The road east from Sabya begins the climb toward Al Dayer and eventually Abha — making it a natural stopping point on the coastal-to-mountain route.", note: 'Sabya to Al Dayer: 15km, 20 min.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-700 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sabya Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jazan to Sabya Taxi</h2>
                    <p className="mb-8 opacity-90">55km, 45 minutes — fixed rate confirmed on WhatsApp.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Jazan%20to%20Sabya" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Sabya Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jazan/jizan-corniche" className="text-teal-600 hover:underline">← Jizan Corniche</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jazan/abu-arish" className="text-teal-600 hover:underline">Abu Arish →</Link>
            </div>
        </div>
    );
}
