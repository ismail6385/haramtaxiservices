import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/abha/green-mountain' },
    title: 'Green Mountain Abha Taxi | Jabal Akhdar Cable Car & Abha Dam Lake',
    description: "Taxi to Abha Green Mountain (Jabal Akhdar) — cable car, Abha Dam Lake, city panorama. 10 minutes from central Abha. Fixed rate, 24/7.",
    keywords: ['Green Mountain Abha taxi', 'Jabal Akhdar Abha taxi', 'Abha cable car taxi', 'Abha Dam Lake taxi', 'Abha city tour taxi'],
    openGraph: {
        title: "Green Mountain Abha — Jabal Akhdar Cable Car & City Panorama Taxi",
        description: "Taxi to Abha Green Mountain. Cable car, Abha Dam Lake panorama, city views. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/abha/green-mountain',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Abha's Green Mountain?", answer: "Jabal Akhdar (Green Mountain) is the forested hill at the heart of Abha city — lit in green at night (visible across the whole city), accessible by a cable car from the base station near Abha Dam Lake. The summit has a rotating restaurant, panoramic city and lake views, and walking paths. Probably the most iconic Abha landmark for visitors." },
    { question: 'How far is the Green Mountain from central Abha?', answer: "The Green Mountain cable car base station is approximately 8–10km from central Abha city — about 12–15 minutes by taxi. The cable car itself is a short ride of 2–3 minutes to the summit. Operating hours vary by season — check with your hotel before going." },
    { question: 'What is Abha Dam Lake?', answer: "Abha Dam Lake (Buhairat Abha) is a reservoir formed by the Abha Dam at the foot of Jabal Akhdar. The lake waterfront has restaurants, a promenade, pedalboat rentals, and Al-Shallal theme park on its north shore. It is the most popular leisure area in Abha — beautiful in the evening with the Green Mountain lit behind the water." },
    { question: 'Is there a combined tour of Green Mountain, Abha Dam, and city?', answer: "Yes — a half-day Abha city tour typically covers: Green Mountain cable car, Abha Dam Lake waterfront, Al-Shallal park (optional), and the Abha old town/palace area. We offer a driver-waits package for city tours — WhatsApp us for a quote." },
    { question: 'What time does the Green Mountain cable car open?', answer: "Cable car hours vary by season. Generally open from 9am and running until late evening. In khareef season (July–September) hours are extended and the mountain is busiest. Confirm current hours on the day — your driver can call ahead." },
];

export default function GreenMountainPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/abha">Abha</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Green Mountain</span>
                </div>
            </div>

            <section className="bg-green-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jabal Akhdar · Abha Dam Lake · Cable Car · City Panorama</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Green Mountain Abha — Cable Car &amp; Abha Dam Lake Taxi</h1>
                        <p className="text-xl text-green-100 mb-8 font-light">
                            Taxi to <strong>Jabal Akhdar (Green Mountain)</strong> — Abha&apos;s most iconic landmark. Cable car to the lit green summit, <strong>Abha Dam Lake</strong> waterfront, city panorama. 10 minutes from central Abha.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Green%20Mountain%20Abha" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Green Mountain Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Green Mountain &amp; Abha Dam — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Jabal Akhdar Cable Car', desc: "The cable car ascends 2–3 minutes from the base station near Abha Dam to the summit of Jabal Akhdar. The summit has a rotating restaurant, observation decks, and 360° views of Abha city and the surrounding Asir mountains. The green lighting at night is visible from across the city.", note: 'Base station: near Abha Dam Lake south shore.' },
                            { title: 'Abha Dam Lake (Buhairat Abha)', desc: "The reservoir at the foot of Jabal Akhdar — a popular waterfront destination with restaurants, promenades, and pedalboat rentals. The most beautiful in the evening when Green Mountain is lit behind the water. The surrounding park areas are well-maintained and family-friendly.", note: 'Al-Shallal Theme Park is on the north shore.' },
                            { title: 'Abha Old Town & Palace', desc: "Historic Abha city centre with the Abha Palace (former Asir governor residence, now a heritage museum), traditional Asiri architecture, and souq streets. A 15-minute walk from the dam lake area or a short taxi ride.", note: 'Abha Palace Museum: traditional weapons, costumes, architecture.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-green-700 font-medium border-t border-green-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Half-Day Abha City Tour — What&apos;s Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { t: 'Green Mountain cable car base station', d: 'Driver drops and waits at car park below cable car' },
                            { t: 'Abha Dam Lake waterfront', d: 'Promenade, restaurants, pedalboats, evening lighting' },
                            { t: 'Al-Shallal Theme Park (optional)', d: 'Family entertainment, rides, lake views — extra time required' },
                            { t: 'Abha Old Town / Palace area', d: 'Historic architecture and heritage museum' },
                            { t: 'Khamis Mushait Souq (optional add-on)', d: '25km away — traditional market, Asiri crafts and silver' },
                            { t: 'Driver waits throughout', d: 'Fixed half-day or full-day rate — no meter running' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Green Mountain Abha FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-green-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Green Mountain &amp; Abha City Tour</h2>
                    <p className="mb-8 opacity-90">Cable car, Dam Lake, Old Town — driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Green%20Mountain%20Abha" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Abha City Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/abha" className="text-slate-600 hover:underline">← Back to Abha</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/abha/abha-airport" className="text-slate-600 hover:underline">Abha Airport →</Link>
            </div>
        </div>
    );
}
