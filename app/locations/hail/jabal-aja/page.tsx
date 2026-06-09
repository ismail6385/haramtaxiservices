import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/jabal-aja' },
    title: "Jabal Aja Hail Taxi | Sacred Twin Mountain & Desert Landscape Tour",
    description: "Taxi to Jabal Aja from Hail city — the sacred granite mountain of Hail, celebrated in pre-Islamic Arabic poetry alongside Jabal Salma. Desert landscape photography. 15km from Hail.",
    keywords: ['Jabal Aja taxi', 'Jabal Aja Hail taxi', 'Hail mountain taxi', 'Aja Salma mountains Hail', 'Hail nature tour taxi', 'Hail desert photography taxi'],
    openGraph: {
        title: "Jabal Aja Hail — Sacred Mountain Tour Taxi",
        description: "Taxi to Jabal Aja, the sacred granite mountain of Hail. Desert photography, mountain scenery. 15km from city.",
        url: 'https://haramtaxiservice.com/locations/hail/jabal-aja',
        type: 'website',
    },
};

const faqs = [
    { question: 'What are Jabal Aja and Jabal Salma?', answer: "Jabal Aja and Jabal Salma are the two sacred mountains of Hail — twin granite massifs that have been celebrated in Arabic poetry since before Islam. They are among the most famous geographical features in classical Arabic literature, mentioned in pre-Islamic (Jahili) poetry as symbols of Hail and the Shammar heartland. Jabal Aja rises immediately southwest of Hail city and dominates the skyline." },
    { question: 'Can I hike on Jabal Aja?', answer: "The lower slopes of Jabal Aja are accessible and popular for walking and photography. The granite rock formations, desert plants, and views over Hail city are the main attractions. There are no formal hiking trails with infrastructure, but well-worn paths lead into the lower mountain. Wear sturdy shoes and bring water. Best in the cooler months (October–March)." },
    { question: 'How far is Jabal Aja from Hail city?', answer: "The base of Jabal Aja is approximately 15km from central Hail — about 20 minutes by taxi. The mountain begins immediately outside the western suburbs of Hail and the lower rock formations are visible from the city." },
    { question: 'Where is Jabal Salma?', answer: "Jabal Salma is the second of the twin sacred mountains — located approximately 80km south of Hail. While Jabal Aja is adjacent to Hail city, Jabal Salma requires a separate longer trip. For most visitors, Jabal Aja (15km from the city) is the primary destination." },
    { question: 'Is Jabal Aja good for photography?', answer: "Yes — Jabal Aja is one of the best photography locations near Hail. The red-orange granite boulders and rock formations contrast dramatically with the surrounding desert plain, especially at golden hour (sunrise or sunset). The city of Hail is visible from the lower slopes, providing an interesting foreground. Early morning light is particularly good." },
];

export default function JabalAjaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jabal Aja &amp; Salma</span>
                </div>
            </div>

            <section className="bg-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jabal Aja · Sacred Mountains of Hail · Pre-Islamic Poetry · Granite Massif</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jabal Aja Hail — Sacred Mountain Taxi &amp; Desert Tour</h1>
                        <p className="text-xl text-blue-100 mb-8 font-light">
                            Taxi to <strong>Jabal Aja</strong> — the sacred granite mountain of Hail, immortalised in pre-Islamic Arabic poetry alongside <strong>Jabal Salma</strong>. Desert photography, mountain scenery, and Hail city panoramas. 15km from the city centre.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jabal%20Aja%20from%20Hail" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jabal Aja Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-blue-50 border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">15 km</div><div className="text-sm text-gray-600">from Hail City</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Granite</div><div className="text-sm text-gray-600">Red-Orange Massif</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Pre-Islamic</div><div className="text-sm text-gray-600">In Arabic Poetry</div></div>
                        <div><div className="text-3xl font-bold text-blue-700 mb-1">Photography</div><div className="text-sm text-gray-600">Golden Hour Views</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jabal Aja — Heritage &amp; Nature</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'The Sacred Mountains in Arabic Literature', desc: "Aja and Salma are among the most frequently mentioned geographical names in classical Arabic poetry. Pre-Islamic poets of the Shammar heartland used the twin mountains as the archetypal symbols of home, belonging, and nostalgia — the same way European poets would reference the Alps or a childhood river. Any educated Arabic reader recognises Aja and Salma as Hail's defining landmarks.", note: 'Dozens of pre-Islamic poems reference the Aja and Salma pair.' },
                            { title: 'Granite Rock Formations', desc: "Jabal Aja is part of the ancient Precambrian Arabian Shield — the exposed granite core of the Arabian plate, hundreds of millions of years old. The mountain is composed of red-orange granite boulders, some massive, forming dramatic landscapes of stacked rock and narrow passages. The colour of the rock is particularly vivid at sunrise and sunset.", note: 'Best photography: 30 min before and after sunrise/sunset.' },
                            { title: 'Desert View from the Lower Slopes', desc: "From the lower slopes of Jabal Aja, the view back over Hail city and the surrounding desert plain is excellent. On clear winter days, Hail's urban sprawl is surrounded by flat desert stretching to the horizon on three sides, with the mountain providing a dramatic elevated perspective.", note: 'Early morning visit recommended — city still cool, no haze.' },
                            { title: 'Combine with Hail Heritage Circuit', desc: "Jabal Aja combines naturally with the Hail heritage city circuit: morning at Jabal Aja (photography, lower slopes walk) → Hail city → Qasr Barzan → A'arif Fort → Al-Qishla Palace. Our driver covers all stops in one quoted rate for the day.", note: 'Full circuit: 5–6 hours from hotel.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jabal Aja FAQ</h2>
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

            <section className="py-14 bg-blue-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jabal Aja Taxi</h2>
                    <p className="mb-8 opacity-90">Sacred mountain of Hail — photography, desert views, golden hour.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jabal%20Aja%20from%20Hail" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jabal Aja Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail/qasr-barzan" className="text-slate-600 hover:underline">← Qasr Barzan</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail/aarif-fort" className="text-slate-600 hover:underline">A&apos;arif Fort →</Link>
            </div>
        </div>
    );
}
