import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/najran-old-town' },
    title: 'Najran Old Town Taxi | Traditional Tower Houses & Heritage Souq Transfer',
    description: 'Taxi to Najran Old Town — traditional tower-house architecture, heritage souq, Yemeni-influenced mud-brick buildings. Most distinctive streetscape in southwest Saudi Arabia. Fixed rate.',
    keywords: ['Najran old town taxi', 'Najran traditional architecture taxi', 'Najran tower houses taxi', 'Najran heritage souq taxi', 'Najran old city taxi'],
    openGraph: {
        title: 'Najran Old Town Taxi — Tower Houses & Heritage Souq Transfer',
        description: "Taxi to Najran Old Town. Traditional tower houses, heritage souq, unique architecture. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/najran/najran-old-town',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Najran Old Town?", answer: "Najran Old Town (Al-Qabil or the historic city centre) is the traditional residential and commercial heart of Najran — a district of multi-story mud-brick and stone tower houses with decorated facades, covered market lanes, a traditional mosque, and the surviving streetscape of old Najran. While not as formally preserved as some Saudi heritage sites, it is the most authentic surviving example of traditional Najrani urban architecture." },
    { question: "What makes Najrani architecture unique?", answer: "Najrani architecture is distinctly different from any other style in Saudi Arabia — and from Yemeni architecture while clearly related to it. Key features: multi-story tower construction (3–5 floors) on stone bases; decorated facades with applied geometric patterns in coloured stones and gypsum; wooden projecting balconies and carved wooden doors; 'qamaria' — stained glass panels above windows; and the characteristic stepped-parapet silhouette visible from a distance." },
    { question: "What is the traditional souq in Najran old town?", answer: "The Najran traditional souq has craft merchants, spice sellers, silversmiths producing traditional Najrani jewellery, textile dealers, and agricultural market stalls. The covered souq sections have the traditional vaulted-roof market architecture. The Thursday market (Souq Al-Khamis) is the busiest — bringing traders from surrounding villages and producing the most active market atmosphere." },
    { question: "Can I still see traditional Najrani life in the old town?", answer: "Yes — unlike some fully preserved but static heritage sites, the Najran old town is still partially inhabited and commercially active. Traditional crafts including silver jewellery, weaving, and pottery are still produced and sold. The authentic quality of the old town comes precisely from its continued functional use rather than museum-style preservation." },
    { question: "How long to spend in Najran Old Town?", answer: "A walking visit of 1.5–2 hours covers the main streets, the souq, a mosque exterior visit, and the best architectural facades. A photography visit can extend to 3 hours. The old town pairs naturally with Emara Palace (adjacent) — combining both in a morning or evening is the recommended itinerary." },
];

export default function NajranOldTownPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Najran Old Town</span>
                </div>
            </div>

            <section className="bg-orange-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Najran Old Town · Tower Houses · Heritage Souq · Yemeni Architecture · City Centre</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Najran Old Town Taxi — Traditional Tower Houses &amp; Heritage Souq</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Taxi to <strong>Najran Old Town</strong> — in the city centre. <strong>Multi-story mud-brick tower houses</strong> with decorated facades, traditional souq, and the most distinctive streetscape in southwest Saudi Arabia. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Najran%20Old%20Town" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Old Town Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-800 mb-1">Tower</div><div className="text-sm text-gray-600">Unique Multi-Story Houses</div></div>
                        <div><div className="text-3xl font-bold text-orange-800 mb-1">Souq</div><div className="text-sm text-gray-600">Traditional Heritage Market</div></div>
                        <div><div className="text-3xl font-bold text-orange-800 mb-1">Silver</div><div className="text-sm text-gray-600">Najrani Jewellery Craft</div></div>
                        <div><div className="text-3xl font-bold text-orange-800 mb-1">Living</div><div className="text-sm text-gray-600">Still Inhabited &amp; Active</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Najran Old Town — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Tower Houses', desc: "The tower houses of Najran old town are among the most architecturally distinctive domestic buildings in Saudi Arabia — 3 to 5-story constructions combining stone bases with mud-brick upper floors. The facades are decorated with coloured stone inlay in geometric patterns, wooden projecting balconies, and carved window surrounds. The towers create a remarkable skyline visible from the surrounding roads.", note: 'Best viewed from the old town perimeter road.' },
                            { title: 'Traditional Souq', desc: "The covered souq lanes in the old town have traditional merchant stalls — spices, agricultural products, textiles, traditional medicines, and the speciality of Najran: silver jewellery. The Thursday market is the most active. The vaulted-roof sections of the covered market date back multiple generations and retain the original market architecture.", note: 'Thursday market: busiest day, afternoon to evening.' },
                            { title: 'Najrani Silverwork', desc: "Traditional Najrani silver jewellery is one of the most distinctive craft traditions in southwest Arabia — heavy tribal pieces in solid silver with repoussé geometric patterns, large pendant necklaces, stacked arm bangles, and elaborate headdress ornaments. Working silversmiths in the old town souq produce both traditional designs and contemporary pieces. Najrani silver is less internationally known than Yemeni or Omani pieces but of comparable quality.", note: 'Silversmiths: typically in old souq area.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-orange-800 font-medium border-t border-orange-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Najran Old Town Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-orange-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-orange-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Najran Old Town Taxi</h2>
                    <p className="mb-8 opacity-90">City centre — tower houses, heritage souq, traditional silver. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Najran%20Old%20Town" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Old Town Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran/wadi-najran" className="text-red-700 hover:underline">← Wadi Najran</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran/najran-airport" className="text-red-700 hover:underline">Najran Airport →</Link>
            </div>
        </div>
    );
}
