import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/qasr-barzan' },
    title: 'Qasr Barzan Hail Taxi | Shammar Palace Heritage Tour',
    description: 'Taxi to Qasr Barzan in Hail — the 19th-century mud-brick palace of the Al Rashid Shammar dynasty. City centre, walking distance from hotels. Fixed rate.',
    keywords: ['Qasr Barzan Hail taxi', 'Hail heritage taxi', 'Al Rashid palace Hail', 'Shammar palace taxi', 'Hail city tour taxi'],
    openGraph: {
        title: 'Qasr Barzan Hail — Shammar Emirate Palace Heritage Tour',
        description: 'Taxi to Qasr Barzan, the historic Shammar palace in Hail city centre. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/hail/qasr-barzan',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Qasr Barzan?', answer: "Qasr Barzan is a historic mud-brick palace-fortress in central Hail, built in the 19th century during the Shammar Emirate under the Al Rashid dynasty. It served as the seat of power for the Al Rashid emirs who ruled much of northern Arabia before the unification of Saudi Arabia. The palace is a fine example of traditional Najdi architecture — thick mud-brick walls, defensive towers, and ornamental crenellations." },
    { question: 'Who were the Al Rashid / Shammar dynasty?', answer: "The Al Rashid family of the Shammar tribe established an emirate based in Hail in the 19th century. At its peak, the Rashidi Emirate controlled much of northern and central Arabia. The Shammar are one of the largest tribal confederations in Arabia, with Hail as their historic heartland. Qasr Barzan was their seat of government." },
    { question: 'How far is Qasr Barzan from central Hail hotels?', answer: "Qasr Barzan is in the historic city centre of Hail — approximately 2km from most Hail hotels. It can be reached on foot from some hotels, or a 5–8 minute taxi ride. It is best visited in combination with A'arif Fort and Al-Qishla Palace as a Hail heritage circuit." },
    { question: 'Can I combine Qasr Barzan with other Hail heritage sites?', answer: "Yes — a Hail city heritage circuit typically covers: Qasr Barzan (palace), A'arif Fort (hilltop fortress), and Al-Qishla Palace (Ottoman barracks) in 3–4 hours with a driver who waits between stops. All three are within the central Hail area." },
    { question: 'What are the opening hours of Qasr Barzan?', answer: "Opening hours vary by season and may be managed by the Saudi Heritage Commission. Generally open daily except Friday mornings. Confirm current hours on arrival in Hail or check with your hotel." },
];

export default function QasrBarzanPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Qasr Barzan</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Qasr Barzan · Shammar Emirate · Al Rashid Palace · Hail City Centre</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Qasr Barzan Hail — Shammar Palace Heritage Tour</h1>
                        <p className="text-xl text-amber-100 mb-8 font-light">
                            Taxi to <strong>Qasr Barzan</strong> — the 19th-century mud-brick palace of the <strong>Al Rashid Shammar dynasty</strong>. One of Najdi Arabia&apos;s most significant heritage palaces, in central Hail. Combine with A&apos;arif Fort and Al-Qishla for a full city heritage circuit.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Qasr%20Barzan%20in%20Hail" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Hail Heritage Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Qasr Barzan — The Shammar Seat of Power</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Palace Architecture', desc: "Built in traditional Najdi style — thick rammed earth and mud-brick walls providing natural insulation against desert heat. Defensive corner towers with arrow slits and crenellated parapets. The central courtyard layout typical of Arabian palace-fortresses. Decorative geometric patterns on the facade in traditional Asiri-Najdi fusion style.", note: 'One of the best-preserved 19th-century palaces in northern Saudi Arabia.' },
                            { title: 'The Al Rashid Story', desc: "The Al Rashid family rose from the Shammar tribe to establish one of Arabia's most powerful 19th-century dynasties. At their peak they controlled Hail, Najd, and much of the Hejaz trade routes. Their rivalry with the Al Saud family shaped Arabian history before the founding of Saudi Arabia. Hail was their capital and Qasr Barzan their seat of power.", note: 'The last Al Rashid emir surrendered to Ibn Saud in 1921.' },
                            { title: 'Heritage Circuit with A\'arif Fort', desc: "Qasr Barzan and A'arif Fort are the two primary heritage sites of central Hail — both within 3km of each other. A combined visit covers the Shammar dynasty's urban palace (Barzan) and their hilltop fortress (A'arif). Add Al-Qishla Palace for the full Hail heritage circuit — 3–4 hours total, driver waits.", note: "A'arif Fort: 3km, 10 min. Al-Qishla: 2km, 8 min." },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qasr Barzan FAQ</h2>
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

            <section className="py-14 bg-amber-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Hail City Heritage Tour</h2>
                    <p className="mb-8 opacity-90">Qasr Barzan, A&apos;arif Fort, Al-Qishla — driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hail%20heritage%20city%20tour" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Hail Heritage Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail/jubbah-rock-art" className="text-slate-600 hover:underline">← Jubbah Rock Art</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail/jabal-aja" className="text-slate-600 hover:underline">Jabal Aja →</Link>
            </div>
        </div>
    );
}
