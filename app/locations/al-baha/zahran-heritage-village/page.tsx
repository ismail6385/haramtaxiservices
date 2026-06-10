import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/zahran-heritage-village' },
    title: 'Zahran Heritage Village Taxi | Al-Baha Stone Tower Houses & Traditional Architecture',
    description: 'Taxi to Zahran Heritage Village from Al-Baha — traditional Hejazi stone tower-house architecture, heritage museum, multi-story decorated facades. Driver waits. Fixed rate.',
    keywords: ['Zahran Heritage Village taxi', 'Al-Baha heritage village taxi', 'Zahran village taxi', 'Al-Baha stone village taxi', 'Hejazi tower houses Al-Baha taxi'],
    openGraph: {
        title: 'Zahran Heritage Village Taxi — Al-Baha Stone Tower Houses Transfer',
        description: 'Taxi to Zahran Heritage Village, Al-Baha. Traditional stone tower houses, heritage museum. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha/zahran-heritage-village',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Zahran Heritage Village?", answer: "Zahran Heritage Village is a traditional stone village in Al-Baha Province representing the distinctive Hejazi highland architectural style — multi-story tower houses built from locally quarried granite and limestone, with decorated stone facades and carved wooden balconies. The village has been partially preserved as a heritage site with an interpretive museum documenting the traditional life of the Al-Baha highlands." },
    { question: "What makes Al-Baha highland architecture unique?", answer: "The highland architecture of Al-Baha Province differs from both the Najdi central plateau style and the coastal Hejazi style. Key features: thick stone walls (70–100cm) for thermal insulation; multi-story construction (2–4 floors) with the ground floor used for livestock and storage; stone and mortar construction without cut stone — large natural rocks fitted together; and external stairways. The villages are built on ridgelines and high ground for defence and wind." },
    { question: "Is there a museum at Zahran Heritage Village?", answer: "Yes — the heritage village has an interpretive display documenting the traditional Zahrani way of life: agricultural tools, traditional clothing, household objects, silver jewellery, weapons, and documentation of the village economy (honey production, coffee cultivation, terraced agriculture). The Zahran tribe is one of the major tribal confederations of Al-Baha Province and their cultural heritage is specifically documented at the site." },
    { question: "How far is Zahran from Al-Baha city?", answer: "Zahran Al-Baha Heritage Village is approximately 15–20km from Al-Baha city — about 20 minutes by taxi. It can be combined with Raghadan Forest (5km from city) in a single morning, or with Dhee Ain for a full-day heritage circuit." },
    { question: "Can I combine Zahran with Dhee Ain and Raghadan?", answer: "Yes — the full Al-Baha heritage day: Raghadan Forest (5km, 1.5 hours) + Zahran Heritage Village (15km, 1 hour) + Dhee Ain marble village (25km, 1.5 hours) = a complete day. Your driver covers all three with waiting time. Depart early (7–8am) from your hotel." },
];

export default function ZahranHeritageVillagePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Zahran Heritage Village</span>
                </div>
            </div>

            <section className="bg-amber-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Zahran Heritage Village · Stone Tower Houses · Heritage Museum · Al-Baha</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Zahran Heritage Village Taxi — Al-Baha Stone Tower Houses Transfer</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi to <strong>Zahran Heritage Village</strong> from Al-Baha. <strong>Traditional Hejazi stone tower-house architecture</strong>, decorated facades, heritage museum. Most authentic village architecture in Al-Baha Province. Driver waits. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Zahran%20Heritage%20Village%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Zahran Village Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Tower</div><div className="text-sm text-gray-600">Multi-Story Stone Houses</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Museum</div><div className="text-sm text-gray-600">Zahrani Heritage Display</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Granite</div><div className="text-sm text-gray-600">Local Stone Construction</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Hejazi</div><div className="text-sm text-gray-600">Highland Architecture</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Zahran Heritage Village — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Stone Tower Houses', desc: "The tower houses of Zahran Heritage Village are the defining example of Al-Baha highland architecture — a style distinct from both the Najdi central plateau tradition and the coastal Hejazi tradition. Walls are built from large, uncut local granite blocks fitted together with stone and earth mortar. Multi-story construction (2–4 floors) with ground floor livestock areas, middle storage and sleeping floors, and upper reception or women's quarters.", note: 'Architecture walk: approx 45 minutes circuit.' },
                            { title: 'Heritage Museum', desc: "The village museum documents traditional Zahrani life: the agricultural calendar (terraced barley and millet cultivation, honey bee management, coffee cultivation in the lower elevations), household objects, silver jewellery specific to the Zahran tribal tradition, and the oral history of the village community. The Zahran tribe was historically significant in Al-Baha Province's political history.", note: 'Museum hours: typically mornings and evenings.' },
                            { title: 'Traditional Honey', desc: "Al-Baha Province is Saudi Arabia's most important honey-producing region — the mountain honey from the highland wildflowers (particularly the famous Sidr — jujube — blossom honey and the highland wildflower honey) is considered among the finest in the world. Zahran area honey is particularly valued. Honey stalls near heritage sites and along the mountain roads sell directly from local beekeepers.", note: 'Best honey: Sidr (Doum) blossom, September–October.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-amber-700 font-medium border-t border-amber-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Zahran Heritage Village Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-amber-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Zahran Heritage Village Taxi</h2>
                    <p className="mb-8 opacity-90">Al-Baha stone tower houses, heritage museum. Driver waits. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Zahran%20Heritage%20Village%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Zahran Village Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha/raghadan-forest" className="text-emerald-700 hover:underline">← Raghadan Forest</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha/baljurashi" className="text-emerald-700 hover:underline">Baljurashi →</Link>
            </div>
        </div>
    );
}
