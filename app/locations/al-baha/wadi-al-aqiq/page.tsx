import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/wadi-al-aqiq' },
    title: 'Wadi Al-Aqiq Taxi | Al-Baha Scenic Valley, Dam & Terraced Farms Transfer',
    description: 'Taxi to Wadi Al-Aqiq from Al-Baha — scenic highland valley, dam reservoir, terraced pomegranate farms, mountain views. Most scenic wadi drive in Al-Baha Province. Fixed rate.',
    keywords: ['Wadi Al-Aqiq taxi', 'Al-Aqiq Al-Baha taxi', 'Al-Baha wadi taxi', 'Al-Baha valley taxi', 'Al-Aqiq valley transfer'],
    openGraph: {
        title: "Wadi Al-Aqiq Taxi — Al-Baha Scenic Valley & Dam Transfer",
        description: 'Taxi to Wadi Al-Aqiq, Al-Baha. Scenic highland valley, dam, terraced farms. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha/wadi-al-aqiq',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Wadi Al-Aqiq in Al-Baha?", answer: "Wadi Al-Aqiq is the main wadi (valley) draining westward from the Al-Baha highland plateau toward the Red Sea coastal plain. The valley runs through some of the most scenic terrain in the province — deeply cut into the Hejaz escarpment with terraced agricultural slopes, dense vegetation at the valley floor, and highland village architecture on the ridges above. The Al-Aqiq town is the main settlement in the valley, known for its markets and honey production." },
    { question: "Is there a dam in Wadi Al-Aqiq?", answer: "Yes — Wadi Al-Aqiq has a dam on the main wadi channel. The reservoir and dam structure are one of the scenic stops on the valley drive. The area around the dam has become a recreation spot for Al-Baha residents — families picnic on the banks particularly on weekends and evenings." },
    { question: "What is Al-Aqiq town known for?", answer: "Al-Aqiq town (Aqiq — approximately 60km west of Al-Baha city) is the main commercial centre for the lower western escarpment of Al-Baha Province. It is known for its weekly market, its pomegranate and honey production at the lower altitude where warmer temperatures favour different crops than the highland plateau, and as the gateway town for travellers coming up the escarpment from the coastal road." },
    { question: "How far is Wadi Al-Aqiq from Al-Baha?", answer: "The wadi begins near the western edge of Al-Baha city and extends approximately 60km west to the Al-Aqiq town. A wadi scenic drive of 20–30km from the city takes about 30–45 minutes. A full drive to Al-Aqiq town is approximately 60 minutes." },
    { question: "Can I combine Wadi Al-Aqiq with Dhee Ain?", answer: "Yes — Dhee Ain marble village is on the western escarpment approximately 25km from Al-Baha, and the Wadi Al-Aqiq scenic drive passes through the same highland descent terrain. A combined morning: drive west toward the escarpment, stop at Wadi Al-Aqiq viewpoints and the dam area, continue to Dhee Ain for the village. Return via the same mountain road." },
];

export default function WadiAlAqiqPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Wadi Al-Aqiq</span>
                </div>
            </div>

            <section className="bg-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Wadi Al-Aqiq · Dam Reservoir · Terraced Farms · Highland Valley · Al-Baha</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Wadi Al-Aqiq Taxi — Al-Baha Scenic Valley &amp; Dam Transfer</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi to <strong>Wadi Al-Aqiq</strong> from Al-Baha. <strong>Deeply cut highland valley, dam reservoir, terraced pomegranate farms</strong>, mountain views. Most scenic wadi drive in Al-Baha Province. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Al-Aqiq%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Wadi Al-Aqiq Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Valley</div><div className="text-sm text-gray-600">Highland Escarpment Wadi</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Dam</div><div className="text-sm text-gray-600">Reservoir &amp; Recreation</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Terraced</div><div className="text-sm text-gray-600">Pomegranate Farms</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Scenic</div><div className="text-sm text-gray-600">Best Wadi Drive in Al-Baha</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Wadi Al-Aqiq — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Valley Descent', desc: "The drive down Wadi Al-Aqiq from the plateau edge is one of the most visually dramatic in the Hejaz mountains — the road descends through layers of escarpment terrain, with the valley floor deepening and the walls rising on either side as you descend. Villages cling to the ridges above, terraced farms step down the slopes below, and the vegetation changes from highland juniper and olive to the denser subtropical growth of the lower altitudes.", note: 'Driving viewpoints: several pullouts on the descent road.' },
                            { title: 'Dam & Reservoir', desc: "The Al-Aqiq dam on the main wadi channel creates a reservoir that fills seasonally. The area around the dam is a popular recreation destination for Al-Baha residents — particularly in the evenings when families gather at the water's edge. The reservoir reflects the escarpment walls and in calm morning conditions creates clear mirror reflections of the surrounding mountains.", note: 'Best reflection shots: still early mornings.' },
                            { title: 'Terraced Pomegranate Farms', desc: "The slopes of Wadi Al-Aqiq have some of the most extensive traditional terraced agriculture still actively cultivated in western Saudi Arabia. The terraces are ancient — built by hand from local stone over many generations — and continue to produce pomegranates, millet, sorghum, and fruit trees. The terraced landscape itself is a significant cultural heritage feature, comparable in agricultural engineering to the famous Asir terraces further south.", note: 'Best season: September–October (pomegranate harvest).' },
                        ].map((s, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-blue-700 font-medium border-t border-blue-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wadi Al-Aqiq Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Wadi Al-Aqiq Taxi</h2>
                    <p className="mb-8 opacity-90">Scenic highland valley, dam, terraced farms. Fixed rate from Al-Baha.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Wadi%20Al-Aqiq%20in%20Al-Baha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Wadi Al-Aqiq Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha/baljurashi" className="text-emerald-700 hover:underline">← Baljurashi</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha/al-baha-airport" className="text-emerald-700 hover:underline">Al-Baha Airport →</Link>
            </div>
        </div>
    );
}
