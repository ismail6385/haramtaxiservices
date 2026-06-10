import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-baha/dhee-ain' },
    title: 'Dhee Ain Taxi | Al-Baha White Marble Village Transfer — Sunrise & Sunset Photography',
    description: 'Taxi to Dhee Ain (Thee Ain) from Al-Baha — 25km, 25 minutes. Pre-Islamic white quartz village on a rocky cliff. Most photographed heritage site in Al-Baha. Driver waits. Fixed rate.',
    keywords: ['Dhee Ain taxi', 'Thee Ain taxi', 'Dhee Ain Al-Baha taxi', 'marble village Al-Baha taxi', 'white village Al-Baha taxi', 'Al-Baha heritage village taxi'],
    openGraph: {
        title: 'Dhee Ain Taxi — Al-Baha White Marble Village Transfer',
        description: 'Taxi to Dhee Ain, Al-Baha. Pre-Islamic white stone village. 25km. Driver waits. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-baha/dhee-ain',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Dhee Ain village?", answer: "Dhee Ain (Arabic: ذي عين — also romanised as Zee Ain, Dhee Ain, or Thee Ain) is a pre-Islamic stone village built on a rocky hilltop approximately 25km west of Al-Baha city. The village houses are constructed from locally quarried white and cream-coloured quartz and limestone — the most abundant local stone — giving the settlement its characteristic pale, almost luminous appearance. The multi-story tower houses are built directly against and into the cliff face, creating a vertical village with houses stacked up the rocky outcrop." },
    { question: "Why is Dhee Ain called the Marble Village?", answer: "The 'marble village' designation comes from the pale white quartz and limestone used in the construction — stones that have a smooth, near-white surface resembling marble when polished by weathering. This is distinct from true marble; the buildings are built from local quartz-rich sandstone and limestone, which in Al-Baha's highland geology has a particularly light colour. The name 'marble village' is the established English-language tourist designation." },
    { question: "What is the best time to visit Dhee Ain?", answer: "Sunrise (6–7:30am) and sunset (5–6:30pm) are the definitive photography times — the low-angle light catches the white stone surfaces with warm amber-golden tones. Early morning also has better air clarity for the valley views beyond the village. Late afternoon visits are popular as the western orientation of the village catches the full sunset light. Midday is harsh and flat for photography but comfortable for exploring the interiors." },
    { question: "How far is Dhee Ain from Al-Baha?", answer: "Approximately 25km west of Al-Baha city — about 25–30 minutes by taxi. The road descends the western escarpment with views over the lower valleys. The final approach to the village is on a narrower road through the village access route." },
    { question: "Does the driver wait at Dhee Ain?", answer: "Yes — our driver waits at the Dhee Ain parking area while you explore. Visit duration: 45 minutes for a walk-through, 90 minutes for a full photography visit including the view terrace. No on-demand transport is available at the village — the driver is essential for your return." },
];

export default function DheeAinPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-baha">Al-Baha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Dhee Ain</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Dhee Ain · White Marble Village · Pre-Islamic · Driver Waits · 25km from Al-Baha</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Dhee Ain Taxi — Al-Baha White Marble Village, Driver Waits Transfer</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi from <strong>Al-Baha to Dhee Ain</strong> — 25km west, 25 minutes. <strong>Pre-Islamic white quartz village</strong> on a rocky cliff — the most photographed heritage site in Al-Baha Province. <strong>Driver waits</strong>. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Baha%20to%20Dhee%20Ain%20marble%20village%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Dhee Ain Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">25 km</div><div className="text-sm text-gray-600">from Al-Baha city</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">White</div><div className="text-sm text-gray-600">Quartz Stone Village</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Pre-Islamic</div><div className="text-sm text-gray-600">Ancient Heritage</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Driver</div><div className="text-sm text-gray-600">Waits On Site</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Dhee Ain — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The White Stone Houses', desc: "The houses of Dhee Ain are built from locally quarried quartz and limestone — stones with a high silica content that gives them the pale, cream-to-white colour. Construction technique: dry-stone masonry with thick walls for thermal insulation; small, deeply recessed windows; flat or gently sloped roofs with stone parapet edges. The buildings are multi-story (2–4 floors) and built against and into the cliff, with lower floors sometimes cut directly into the rock.", note: 'Best viewed from the access road approach.' },
                            { title: 'The Hilltop Site', desc: "The village occupies a prominent rocky promontory overlooking the valley below — a defensive position that explains its siting. From the upper reaches of the village, the view extends west over the descending valleys toward the Red Sea coastal plain, with the lower escarpment villages visible in clear weather. The contrast between the pale white village and the brown-red rock of the hill is the defining visual of Dhee Ain.", note: 'Upper viewpoint: follow trail to summit.' },
                            { title: 'Photography Conditions', desc: "Dhee Ain is one of the most photographically rewarding heritage sites in Saudi Arabia. Golden hour (first and last 45 minutes of daylight) catches the white stone with warm tones that contrast sharply with the sky. The village has good east-west orientation — morning light from the east illuminates the lower valley below, while afternoon light directly hits the western-facing village facades. Telephoto shots from across the valley give the best overall perspective.", note: 'Best: 6–7am or 4:30–6pm local time.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-stone-700 font-medium border-t border-stone-300 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dhee Ain Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-stone-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-stone-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Dhee Ain Taxi</h2>
                    <p className="mb-8 opacity-90">25km from Al-Baha — white marble village, driver waits, sunrise or sunset. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Al-Baha%20to%20Dhee%20Ain%20marble%20village%20with%20driver%20waiting" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Dhee Ain Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-baha" className="text-emerald-700 hover:underline">← Back to Al-Baha Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-baha/raghadan-forest" className="text-emerald-700 hover:underline">Raghadan Forest →</Link>
            </div>
        </div>
    );
}
