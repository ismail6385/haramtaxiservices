import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/habala-village' },
    title: 'Habala Village Taxi Abha | Al-Habalah Cable Car & Cliffside Village Transfer',
    description: 'Taxi from Abha to Habala Village (Al-Habalah) — the cliffside Qahtani village accessible only by cable car. Driver waits at the cliff top. 50 minutes from Abha. Fixed rate.',
    keywords: ['Habala Village taxi', 'Al-Habalah taxi Abha', 'Habala cable car taxi', 'Abha cliffside village taxi', 'Qahtani village taxi Asir', 'Habala Abha day trip'],
    openGraph: {
        title: 'Habala Village Taxi — Cliffside Village, Cable Car from Abha',
        description: 'Taxi to Habala Village cable car station. Driver waits. 50 min from Abha. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/abha/habala-village',
        type: 'website',
    },
};

const faqs = [
    { question: 'How do I reach Habala Village?', answer: "Habala Village (Al-Habalah) hangs on a sheer cliff face 300m below the Asir plateau. The only access is by cable car from the cliff-top station. Our taxi takes you to the cable car station (45km from Abha, 50 minutes). The cable car descent takes approximately 5–7 minutes. The driver waits at the top while you visit." },
    { question: 'Why was Habala Village built on a cliff?', answer: "Habala Village was built by the Qahtani tribe as a defensive settlement — perched on a sheer cliff face that was essentially unreachable by enemies approaching from the lowlands. The tribe would lower themselves by rope (habala means 'rope' in Arabic) to reach their village. Today the cable car replaces the ropes. The village was abandoned by most residents in the 20th century; some heritage preservation work is ongoing." },
    { question: 'What is there to see at Habala Village?', answer: "At the bottom of the cable car descent: traditional stone houses built into the cliff face, the village mosque and communal areas, and extraordinary views back up the escarpment. The Asir escarpment drops to the Tihama coastal plain — on clear days you can see the Red Sea from the village level. A fascinating and unique place unlike any other in Saudi Arabia." },
    { question: 'How far is Habala from Abha and how long does it take?', answer: "Habala Village cable car station is approximately 45km from central Abha — about 50 minutes by taxi. The road is through mountain terrain with some winding sections. Combined with Al-Soudah (nearby), this is a natural full-day mountain circuit from Abha." },
    { question: 'Can I combine Habala and Al-Soudah in one day trip?', answer: "Yes — Al-Soudah and Habala are adjacent destinations (Al-Soudah upper cable car station is the same as the Habala upper cable car station, or very nearby). A combined day trip: Abha → Al-Soudah summit → cable car to Habala → cable car back up → return to Abha. Budget 5–6 hours including travel. Our driver covers both in one quoted rate." },
];

export default function HabalaVillagePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Habala Village</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Habala Village · Cliffside · Cable Car Only · Qahtani Tribe</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Habala Village Taxi — Cable Car to the Cliffside Village</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi from <strong>Abha to Habala Village</strong> (Al-Habalah) — Arabia&apos;s most extraordinary heritage village, clinging to a sheer 300m cliff face. <strong>Accessible only by cable car.</strong> Driver waits at the top. 50 minutes from Abha.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Habala%20Village%20from%20Abha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Habala Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8 rounded-r-xl">
                <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-amber-800 mb-1">Cable Car Last Descent — Check Before Going</p>
                        <p className="text-sm text-amber-700">The Habala cable car has set operating hours with a last descent time. Missing the last cable car up means being stranded in the village. Check current hours at asirpark.com or ask your driver to call ahead before visiting.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">300m</div><div className="text-sm text-gray-600">Cliff Descent</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">45 km</div><div className="text-sm text-gray-600">from Abha</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Cable Car</div><div className="text-sm text-gray-600">Only Access</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Driver Waits</div><div className="text-sm text-gray-600">At Cliff Top</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Habala Village — What Makes It Unique</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Cliff Settlement', desc: "Habala Village clings to a sheer vertical cliff face on the western edge of the Asir plateau. The stone houses — some multi-storey — were built directly into ledges and crevices in the rock. From below, the village appears to grow out of the cliff itself. There is no road access. This is one of the most extraordinary human settlements in Arabia.", note: 'Habala means \'rope\' in Arabic — the original access method.' },
                            { title: 'Qahtani Tribe Heritage', desc: "The Qahtani tribe built Habala centuries ago as an impregnable defensive position — the cliff face protected them from tribal raids and invaders from the lowlands. The village was inhabited until relatively recently. Some heritage restoration work preserves the original stone structures. The tribal descendants still maintain connection to the site.", note: 'Now largely uninhabited — preserved as heritage site.' },
                            { title: 'Escarpment Views', desc: "From Habala Village level (300m below the plateau), the views look UP at the cliff face and OUT across the Tihama coastal plain to the Red Sea. On clear days the sea is visible. The scale of the escarpment viewed from below is extraordinary — more dramatic than from the top.", note: 'Best visibility in mornings before haze builds.' },
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

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Day Trip: Al-Soudah + Habala Combined</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-amber-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Activity</th>
                                    <th className="px-5 py-4 text-left font-semibold">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { time: '8:00am', act: 'Depart Abha by taxi', dur: '–' },
                                    { time: '8:40am', act: 'Arrive Al-Soudah summit (2,910m)', dur: '40 min drive' },
                                    { time: '8:45am', act: 'Al-Soudah viewpoint & park walk', dur: '45 min' },
                                    { time: '9:30am', act: 'Cable car descent to Habala Village', dur: '7 min descent' },
                                    { time: '9:37am', act: 'Explore Habala Village', dur: '60–90 min' },
                                    { time: '11:00am', act: 'Cable car ascent back to Al-Soudah', dur: '7 min ascent' },
                                    { time: '11:10am', act: 'Return taxi to Abha', dur: '40 min drive' },
                                    { time: '11:50am', act: 'Back in Abha — half day trip complete', dur: '–' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-bold text-amber-700">{row.time}</td>
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.act}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.dur}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">Approximate schedule — cable car hours subject to change. Confirm times on day of visit.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Habala Village FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-amber-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Habala Village Taxi</h2>
                    <p className="mb-8 opacity-90">Cable car station transfer from Abha — driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Habala%20Village%20from%20Abha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Habala Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/al-soudah" className="text-slate-600 hover:underline">← Al-Soudah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha" className="text-slate-600 hover:underline">Back to Abha Hub</Link>
            </div>
        </div>
    );
}
