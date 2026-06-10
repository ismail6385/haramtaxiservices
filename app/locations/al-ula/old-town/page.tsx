import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ula/old-town' },
    title: 'AlUla Old Town Taxi | 900-Year Mud-Brick City — Al-Ula Al-Qadimah Transfer',
    description: 'Taxi to AlUla Old Town (Al-Ula Al-Qadimah) — 5km from AlUla centre. 900-year mud-brick city abandoned 1983. 800 houses, old souq, restored heritage site. Fixed rate.',
    keywords: ['AlUla Old Town taxi', 'Al-Ula Al-Qadimah taxi', 'AlUla old city taxi', 'AlUla mud-brick city taxi', 'old town AlUla transfer'],
    openGraph: {
        title: 'AlUla Old Town Taxi — Al-Ula Al-Qadimah Heritage Transfer',
        description: 'Taxi to AlUla Old Town. 900-year mud-brick city, 5km from AlUla. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/al-ula/old-town',
        type: 'website',
    },
};

const faqs = [
    { question: "What is AlUla Old Town?", answer: "AlUla Old Town (Al-Ula Al-Qadimah — 'Old AlUla') is a 900-year-old mud-brick city that was inhabited continuously until 1983, when residents relocated to a new modern town nearby. The old city has approximately 800 mud-brick and stone houses, a central mosque, a market street (Souq Al-Khumayyis), and a hilltop fort. It is one of the most intact traditional Arabian town sites in existence — largely because it was not demolished but simply abandoned." },
    { question: "How far is AlUla Old Town from the city centre?", answer: "AlUla Old Town is approximately 5km from the main AlUla city — about 5 minutes by taxi. The old town is in the valley floor at the base of the sandstone cliffs, south of the new city. It is one of the closest AlUla attractions to the main hotel zone." },
    { question: "Is AlUla Old Town open to visitors?", answer: "Yes — AlUla Old Town is a ticketed heritage site open to visitors. A guided walking tour takes you through the narrow lanes, the mosque, the old souq, and up to the fort overlook. The Experience AlUla booking platform (alula.sa) lists the tours. No advance booking is required for general admission outside peak season, but guided tours benefit from pre-booking." },
    { question: "What is the fort at AlUla Old Town?", answer: "The old town fort sits on a rocky promontory above the town — a small defensive structure with a commanding view over the entire AlUla valley, the palm grove oasis, and the sandstone canyon walls. The fort has been partially restored. The climb takes 10–15 minutes on stone steps from the town entrance." },
    { question: "Can I combine AlUla Old Town with Dadan and Jabal Ikmah?", answer: "Yes — these three sites form a natural AlUla Valley heritage circuit. Old Town → Dadan (10 min drive) → Jabal Ikmah (10 min drive) can be done in a half day with your taxi driver waiting between sites. This is one of the most recommended AlUla itineraries for visitors who have already seen Hegra." },
];

export default function OldTownPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ula">AlUla</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">AlUla Old Town</span>
                </div>
            </div>

            <section className="bg-stone-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">AlUla Old Town · 900 Years · Mud-Brick · Abandoned 1983 · 5km from AlUla</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">AlUla Old Town Taxi — 900-Year Mud-Brick City Transfer</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi to <strong>AlUla Old Town (Al-Ula Al-Qadimah)</strong> — 5km, 5 minutes. <strong>900-year continuously inhabited mud-brick city</strong>, abandoned 1983. 800 houses, old souq, hilltop fort, restored heritage lanes. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20the%20Old%20Town" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Old Town Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-800 mb-1">5 km</div><div className="text-sm text-gray-600">from AlUla Centre</div></div>
                        <div><div className="text-3xl font-bold text-stone-800 mb-1">900 yrs</div><div className="text-sm text-gray-600">Old Heritage City</div></div>
                        <div><div className="text-3xl font-bold text-stone-800 mb-1">800+</div><div className="text-sm text-gray-600">Mud-Brick Houses</div></div>
                        <div><div className="text-3xl font-bold text-stone-800 mb-1">1983</div><div className="text-sm text-gray-600">Year Abandoned</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">AlUla Old Town — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Mud-Brick City', desc: "The old town is a dense urban fabric of mud-brick and stone construction — multi-story houses with thick earthen walls, small windows, internal courtyards, and carved wooden doors. The narrow lanes are covered in some sections, creating a cool interior street at ground level. The atmosphere of the abandoned city is extraordinary: structurally intact but silent, with the ghost of daily life still visible in the domestic architecture.", note: 'Guided tour: 45–60 minutes through main lanes.' },
                            { title: 'Souq Al-Khumayyis (Old Market)', desc: "The traditional covered market street ran down the centre of the old town — selling agricultural produce, textiles, spices, and crafts to the valley population. Today, some stalls are restored and operating artisan workshops and cafes in the original market spaces. The combination of the original mud-brick structure with contemporary activation makes the souq the most visitor-friendly part of the old town.", note: 'Evening: some workshops open after 4pm.' },
                            { title: 'Fort & Valley View', desc: "The fort at the top of the rocky outcrop above the old town has a panoramic view over the entire AlUla valley — the palm grove oasis below, the sandstone canyon walls rising on either side, and the modern new town to the north. The climb takes 10–15 minutes on stone stairs cut into the rock. The view is particularly good at sunset when the canyon walls turn amber-red.", note: 'Fort climb: 10–15 minutes from town entrance.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AlUla Old Town Taxi FAQ</h2>
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

            <section className="py-14 bg-stone-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book AlUla Old Town Taxi</h2>
                    <p className="mb-8 opacity-90">5km from AlUla — 900-year mud-brick city, fort view, old souq. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20AlUla%20to%20the%20Old%20Town" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Old Town Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ula/dadan" className="text-amber-700 hover:underline">← Dadan Ancient City</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ula/jabal-ikmah" className="text-amber-700 hover:underline">Jabal Ikmah →</Link>
            </div>
        </div>
    );
}
