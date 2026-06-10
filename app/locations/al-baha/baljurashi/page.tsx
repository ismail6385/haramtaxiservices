import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/baljurashi' },
    title: 'Baljurashi Taxi | Al-Baha Province Market Town Transfer — 55km',
    description: "Taxi to Baljurashi from Al-Baha — 55km, 45 minutes. Al-Baha Province's second city, traditional weekly market, pomegranate valley, scenic highland descent. Fixed rate.",
    keywords: ['Baljurashi taxi', 'Baljurashi Al-Baha taxi', 'Al-Baha to Baljurashi taxi', 'Baljurashi market taxi', 'Baljurashi transfer'],
    openGraph: {
        title: "Baljurashi Taxi — Al-Baha Province Market Town Transfer",
        description: "Taxi to Baljurashi, Al-Baha Province. 55km, weekly market, pomegranate valley. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/al-baha/baljurashi',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Baljurashi?", answer: "Baljurashi is the second city of Al-Baha Province, approximately 55km south of Al-Baha city via the mountain highway. It sits in a valley below the main highland plateau at a slightly lower elevation, with a different microclimate — warmer and more humid than Al-Baha city, with more intensive pomegranate cultivation. Baljurashi is known for its traditional weekly market, its pomegranate production, and as the main commercial centre for the southern Al-Baha region." },
    { question: "What is the Baljurashi market?", answer: "Baljurashi has one of the most traditional weekly markets in western Saudi Arabia — held on a fixed day each week (typically Wednesday or Thursday). The market brings together farmers, livestock traders, honey sellers, and craftspeople from the surrounding villages. Products include fresh produce (pomegranates, honey, wild herbs), livestock, traditional silver jewellery, and agricultural supplies. The market retains the character of a genuine working agricultural market rather than a tourist market." },
    { question: "Is Baljurashi famous for pomegranates?", answer: "Yes — the Baljurashi area and the broader Al-Baha Province are the most important pomegranate-producing region in Saudi Arabia. The valley topography, water availability, and climate create ideal conditions. Baljurashi pomegranates (particularly the large, sweet varieties grown in the wadi areas) are sold across western Saudi Arabia. Harvest season is approximately September–October." },
    { question: "How far is Baljurashi from Al-Baha?", answer: "Approximately 55km south of Al-Baha city — about 45 minutes by taxi on the highland road south. The drive is scenic, passing through mountain terrain and traditional villages on the escarpment." },
    { question: "Can I make a day trip to Baljurashi from Al-Baha?", answer: "Yes — a half-day round-trip from Al-Baha: 45 minutes drive + 1.5 hours in Baljurashi (market + pomegranate farms) + 45 minutes return = 3 hours. Can be combined with Wadi Al-Aqiq on the return route for a full-day southern Al-Baha exploration." },
];

export default function BaljurashiPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Baljurashi</span>
                </div>
            </div>

            <section className="bg-orange-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Baljurashi · Al-Baha Province · Weekly Market · Pomegranates · 55km South</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Baljurashi Taxi — Al-Baha Province Market Town Transfer</h1>
                        <p className="text-xl text-orange-100 mb-8 font-light">
                            Taxi from <strong>Al-Baha to Baljurashi</strong> — 55km south, 45 minutes. <strong>Traditional weekly market, pomegranate valley, highland descent</strong>. Second city of Al-Baha Province. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Baha%20to%20Baljurashi" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Baljurashi Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">55 km</div><div className="text-sm text-gray-600">south of Al-Baha</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Market</div><div className="text-sm text-gray-600">Traditional Weekly Souq</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Pomegranate</div><div className="text-sm text-gray-600">Saudi Arabia&apos;s Best</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Scenic</div><div className="text-sm text-gray-600">Highland Descent Road</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Baljurashi — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Traditional Weekly Market', desc: "Baljurashi market is one of the most authentic agricultural markets in western Saudi Arabia — held weekly, it brings together farmers, honey producers, livestock traders, silversmiths, and craftspeople from the surrounding villages. The market specialities: Al-Baha mountain honey (particularly Sidr blossom), pomegranates from the wadi farms, wild herbs, traditional coffee, and silver jewellery pieces. The market atmosphere is unhurried and genuinely commercial rather than touristic.", note: 'Market day: typically Wednesday or Thursday morning.' },
                            { title: 'Pomegranate Valley', desc: "The Baljurashi area and Al-Mahwah valley to the south have the most intensive pomegranate cultivation in Saudi Arabia — terraced wadi farms growing large-fruited sweet varieties that are traded across the western region. Harvest (September–October) is the best time to visit — farm stalls along the road sell direct. The terraced pomegranate orchards on the wadi slopes are visually striking, particularly in late September when the fruit is heavy on the branches.", note: 'Harvest season: September–October.' },
                            { title: 'Highland Descent Drive', desc: "The drive from Al-Baha city to Baljurashi on the southern highland road descends through some of the most scenic terrain in the Hejaz escarpment — switchback roads dropping through layers of mountain landscape, with views over increasingly deep valleys. The road passes through traditional villages with tower-house architecture and terraced hillsides. The descent itself is one of the reasons to make the journey, not just the destination.", note: 'Road: mountain highway, scenic stops available.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Baljurashi Taxi FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Baljurashi Taxi</h2>
                    <p className="mb-8 opacity-90">55km south of Al-Baha — weekly market, pomegranate valley, scenic drive. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Baha%20to%20Baljurashi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Baljurashi Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha/zahran-heritage-village" className="text-emerald-700 hover:underline">← Zahran Heritage Village</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha/wadi-al-aqiq" className="text-emerald-700 hover:underline">Wadi Al-Aqiq →</Link>
            </div>
        </div>
    );
}
