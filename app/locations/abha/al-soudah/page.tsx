import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/al-soudah' },
    title: "Al-Soudah Taxi | Saudi Arabia's Highest Point 2,910m — Abha Mountain Tour",
    description: "Taxi from Abha to Al-Soudah — Saudi Arabia's highest accessible peak at 2,910m. Al-Soudah Adventure Park, cable car to Habala, escarpment views. Driver waits. Fixed rate.",
    keywords: ['Al-Soudah taxi', 'Al Soudah Abha taxi', "Saudi Arabia highest point taxi", 'Al-Soudah adventure park taxi', 'Abha mountain tour taxi', 'Habala cable car Al-Soudah taxi'],
    openGraph: {
        title: "Al-Soudah Taxi — Saudi Arabia's Highest Peak, Adventure Park & Cable Car",
        description: "Taxi to Al-Soudah (2,910m). Adventure park, cable car to Habala, escarpment views. Driver waits.",
        url: 'https://haramtaxiservice.com/locations/abha/al-soudah',
        type: 'website',
    },
};

const faqs = [
    { question: "How far is Al-Soudah from Abha?", answer: "Al-Soudah is approximately 25km west of Abha city — about 35–40 minutes by taxi on the winding mountain road (Route 211). The road is fully paved but has many bends as it climbs through the Asir escarpment toward the plateau edge at Al-Soudah." },
    { question: "What is the altitude of Al-Soudah?", answer: "Al-Soudah sits at approximately 2,910m above sea level — the highest accessible point in Saudi Arabia. Some nearby peaks are marginally higher but not accessible to the public. The altitude gives Al-Soudah temperatures 10–15°C cooler than Abha and 20–25°C cooler than the Saudi lowlands." },
    { question: "What is the Al-Soudah Adventure Park?", answer: "Al-Soudah (also called Al-Soudah Park) is a Royal Commission-managed recreation area at the mountain top with walking paths, scenic viewpoints, a restaurant, and the upper station of the Asir cable car that descends to Habala Village. Adventure activities and facilities have been expanded under Vision 2030." },
    { question: "Does the cable car from Al-Soudah go to Habala Village?", answer: "Yes — the Al-Soudah to Habala cable car descends 300m down the cliff face to Habala Village, the cliffside settlement of the Qahtani tribe. The cable car is approximately 5–7 minutes each way. Habala Village itself can only be accessed by this cable car (or historically, by rope). Pre-book cable car tickets at asirpark.com." },
    { question: "Is it cold at Al-Soudah?", answer: "Yes — Al-Soudah is significantly cooler than Abha, which is already cool by Saudi standards. In summer (June–September): Al-Soudah averages 12–18°C, with morning mist and cloud. In winter (December–February): temperatures drop to 2–8°C and frost is possible on the ground. Bring a warm layer even in summer." },
];

export default function AlSoudahPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Soudah</span>
                </div>
            </div>

            <section className="bg-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Soudah · 2,910m · Saudi Arabia&apos;s Highest Point</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Soudah Taxi — Saudi Arabia&apos;s Highest Peak</h1>
                        <p className="text-xl text-blue-200 mb-8 font-light">
                            Taxi from <strong>Abha to Al-Soudah (2,910m)</strong> — Saudi Arabia&apos;s highest accessible point. <strong>Al-Soudah Adventure Park, cable car to Habala Village</strong>, and dramatic escarpment views. Driver waits. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Soudah%20from%20Abha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Soudah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">2,910m</div><div className="text-sm text-gray-600">Highest Point in Saudi Arabia</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">40 min</div><div className="text-sm text-gray-600">from Abha by Taxi</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Cable Car</div><div className="text-sm text-gray-600">Down to Habala Village</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">12–18°C</div><div className="text-sm text-gray-600">Summer Temperature</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al-Soudah — What to See &amp; Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Al-Soudah Summit Viewpoint', desc: "At 2,910m, the Al-Soudah plateau edge offers views across the Asir escarpment — on clear days, the Red Sea coast (140km west) and the Yemeni highlands (south) are visible. The escarpment drops 2,000–3,000m to the Tihama coastal plain below in one of the most dramatic landscape panoramas in Arabia.", note: 'Best visibility: early morning before cloud builds.' },
                            { title: 'Al-Soudah to Habala Cable Car', desc: "The cable car from the Al-Soudah upper station descends 300m down the cliff face to Habala Village — a 5–7 minute descent through the air above a sheer escarpment wall. The upper station is at Al-Soudah park. Habala Village is at the bottom and only accessible this way.", note: 'Cable car hours: check asirpark.com before visiting.' },
                            { title: 'Al-Soudah Adventure Park', desc: "Royal Commission-managed park at the summit with walking paths, viewing decks, a restaurant, and access to the cable car. Facilities have expanded significantly under Vision 2030 Saudi tourism investment.", note: 'Entry fees apply — check current rates on arrival.' },
                            { title: 'Juniper Forest Road (Abha to Al-Soudah)', desc: "The 25km drive from Abha to Al-Soudah on Route 211 is itself one of the great mountain drives in Saudi Arabia — winding through juniper cloud forest, with baboon troops on the roadside and mist in the trees. Best driven slowly with windows down in khareef season.", note: 'Baboons regularly seen along this road — do not feed.' },
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

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Practical Info — Al-Soudah Visit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { t: 'Clothing', d: 'Bring a warm layer — even in summer, Al-Soudah can be 12°C with wind. In winter, bring a proper jacket (2–5°C possible).' },
                            { t: 'Cable car timing', d: 'Last cable car descent times change by season — check asirpark.com or ask your driver. Missing the last cable down means being stranded in Habala.' },
                            { t: 'Driver waits option', d: 'Our driver waits at Al-Soudah park car area while you visit and do the cable car round trip. Time included in the quoted rate.' },
                            { t: 'Photography', d: 'Best light for escarpment views: sunrise (eastern facing light on the valley below). Cloud effects: mid-morning to early afternoon in khareef season.' },
                            { t: 'Altitude effects', d: 'Some visitors experience mild lightheadedness at 2,900m, especially coming directly from low-altitude. Rest, hydrate, and take it easy initially.' },
                            { t: 'Combine with Habala', d: 'Al-Soudah + Habala Village (cable car) is the standard combination — budget 3–4 hours for both. Our driver covers both in one round trip.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{s.t}</h3>
                                    <p className="text-xs text-gray-600">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Soudah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-blue-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-blue-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al-Soudah Taxi</h2>
                    <p className="mb-8 opacity-90">Saudi Arabia&apos;s highest peak — driver waits, cable car included, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Al-Soudah%20from%20Abha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Soudah Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/asir-national-park" className="text-slate-600 hover:underline">← Asir National Park</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha/habala-village" className="text-slate-600 hover:underline">Habala Village →</Link>
            </div>
        </div>
    );
}
