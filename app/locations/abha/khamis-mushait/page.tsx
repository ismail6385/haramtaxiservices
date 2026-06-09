import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/khamis-mushait' },
    title: 'Khamis Mushait Taxi | Asir Twin City, Souq & Military Academy Transfers',
    description: "Taxi in Khamis Mushait — Asir's twin city to Abha. King Khalid Military Academy, Khamis Mushait Souq, and intercity transfers. Fixed rate, 24/7.",
    keywords: ['Khamis Mushait taxi', 'Abha Khamis Mushait taxi', 'Khamis Mushait airport taxi', 'Khamis Mushait souq taxi', 'Asir taxi service'],
    openGraph: {
        title: "Khamis Mushait Taxi — Asir Twin City, Souq & Airport",
        description: "Taxi in Khamis Mushait. King Khalid Military Academy, Khamis Mushait Souq. Abha airport, 24/7.",
        url: 'https://haramtaxiservice.com/locations/abha/khamis-mushait',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Khamis Mushait?', answer: "Khamis Mushait is the twin city of Abha — the two are 25km apart and together form the largest urban area in the Asir region. Khamis Mushait is generally more commercial and populated than Abha proper, with a large souq, extensive markets, and the nearby King Khalid Military City. The shared Abha Airport (AHB) actually sits closer to Khamis Mushait than to Abha city centre." },
    { question: 'How far is Khamis Mushait from Abha Airport?', answer: "Khamis Mushait city centre is approximately 15km from Abha Airport (AHB) — about 20 minutes by taxi. This is slightly closer than Abha city itself (which is 20km, 25 min). The airport is between the two cities." },
    { question: 'What is the Khamis Mushait Souq known for?', answer: "Khamis Mushait Souq is one of the largest traditional markets in Asir. Known for Asiri silver jewellery (traditionally worn by Asiri women), handmade Asiri costumes, spices, incense (bukhoor), honey (Asir is famous for its mountain honey), and traditional household items. Best visited Thursday evening or Friday morning when it is busiest." },
    { question: 'Is King Khalid Military City accessible by taxi?', answer: "King Khalid Military City (KKMC) is a large military base near Khamis Mushait. Access is restricted to authorized military personnel and authorized visitors — civilian taxis can reach the outer perimeter. Confirm with your host that visitor access has been arranged before booking a taxi to KKMC." },
    { question: 'Can I get a taxi between Khamis Mushait and Abha?', answer: "Yes — Abha to Khamis Mushait and the reverse is a very common short transfer. 25km, approximately 30 minutes. We serve both cities and the route between them at any time of day or night." },
];

export default function KhamisMushaitPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Khamis Mushait</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Khamis Mushait · Asir Twin City · Souq · Military Academy</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Khamis Mushait Taxi — Asir&apos;s Twin City</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Professional taxi in <strong>Khamis Mushait</strong> — Abha&apos;s twin city and the commercial hub of Asir. Khamis Mushait Souq, King Khalid Military Academy, <strong>Abha Airport transfers</strong>, and intercity routes. Fixed rate, 24/7.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Khamis%20Mushait" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Khamis Mushait Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">25 km</div><div className="text-sm text-gray-600">from Abha</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">15 km</div><div className="text-sm text-gray-600">from AHB Airport</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Asir Souq</div><div className="text-sm text-gray-600">Silver, Honey, Spices</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">24/7</div><div className="text-sm text-gray-600">Airport &amp; City</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Khamis Mushait — Key Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Khamis Mushait Souq', desc: "One of Asir's largest traditional markets. Asiri silver jewellery, handmade textiles, mountain honey, incense, and traditional crafts. Thursday evening is the liveliest. A genuine Asiri market experience — less touristic than Abha but more authentic.", note: 'Best day: Thursday evening. Central market district.' },
                            { title: 'King Khalid Military Academy', desc: "Saudi Arabia's premier officer training academy is located near Khamis Mushait. The surrounding military city infrastructure has made Khamis Mushait one of the region's most developed cities. Access to the academy itself requires military authorization.", note: 'Taxi access to outer city only — military zone.' },
                            { title: 'Abha–Khamis Mushait Corridor', desc: "The two cities are effectively one urban agglomeration — the road between them passes through continuous development. Most residents of each city regularly move between them. Hotel options in Khamis Mushait are often more affordable than Abha city hotels.", note: 'Many visitors base in Khamis Mushait and day-trip to Abha.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-stone-700 font-medium border-t border-stone-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Khamis Mushait Routes</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-stone-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Route</th>
                                    <th className="px-5 py-4 text-left font-semibold">Distance</th>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { route: 'Khamis Mushait to Abha Airport (AHB)', dist: '15 km', time: '20 min' },
                                    { route: 'Khamis Mushait to Abha City', dist: '25 km', time: '30 min' },
                                    { route: 'Khamis Mushait to Al-Soudah', dist: '50 km', time: '55 min' },
                                    { route: 'Khamis Mushait to Jizan', dist: '210 km', time: '2.5 hrs' },
                                    { route: 'Khamis Mushait to Jeddah', dist: '650 km', time: '7 hrs' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.route}</td>
                                        <td className="px-5 py-4 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-4 font-bold text-stone-700">{row.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Khamis Mushait Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-stone-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-stone-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Khamis Mushait Taxi</h2>
                    <p className="mb-8 opacity-90">Airport, souq, Abha intercity — fixed rate, 24/7.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20in%20Khamis%20Mushait" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Khamis Mushait Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha/abha-airport" className="text-slate-600 hover:underline">← Abha Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha/asir-national-park" className="text-slate-600 hover:underline">Asir National Park →</Link>
            </div>
        </div>
    );
}
