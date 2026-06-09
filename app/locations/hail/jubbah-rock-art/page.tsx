import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/hail/jubbah-rock-art' },
    title: 'Jubbah Rock Art Taxi | UNESCO Petroglyphs Hail — Day Trip from Hail City',
    description: "Taxi day trip from Hail to Jubbah UNESCO petroglyphs — 100km, 1 hour. 10,000-year-old rock art on sandstone inselbergs. Driver waits. No taxis at Jubbah — pre-book essential.",
    keywords: ['Jubbah rock art taxi', 'Jubbah petroglyphs taxi', 'Hail UNESCO taxi', 'Jubbah day trip from Hail', 'Hail rock art tour', 'Jubbah Hail taxi'],
    openGraph: {
        title: 'Jubbah Rock Art Taxi — UNESCO Petroglyphs Day Trip from Hail',
        description: "Taxi to Jubbah UNESCO petroglyphs from Hail. 100km, driver waits. Pre-book essential — no taxis at Jubbah.",
        url: 'https://haramtaxiservice.com/locations/hail/jubbah-rock-art',
        type: 'website',
    },
};

const faqs = [
    { question: 'What are the Jubbah petroglyphs?', answer: "The Jubbah petroglyphs are a UNESCO World Heritage Site (inscribed 2015 as part of 'Rock Art in the Hail Region of Saudi Arabia') featuring thousands of rock carvings on sandstone inselbergs (isolated rocky outcrops) around the Jubbah oasis. The carvings date from approximately 10,000 years ago to the early Islamic period — depicting humans, animals (camels, ibex, horses, ostriches), hunting scenes, and ancient scripts including Thamudic, Dadanite, and Nabataean inscriptions." },
    { question: 'Are there taxis at Jubbah?', answer: "No — there are no taxis, app taxis (Careem/Uber), or public transport at Jubbah. Jubbah is a small oasis town 100km from Hail on the desert highway. If you go without a pre-booked return taxi, you have no way to get back to Hail. Our driver takes you from Hail to Jubbah and waits at the site for the 2–3 hour visit before returning." },
    { question: 'How far is Jubbah from Hail city?', answer: "Jubbah is approximately 100km north of Hail city on Highway 65 — about 1 hour by taxi. The drive crosses open desert with the occasional date palm grove and sandstone formation. The Jubbah oasis and its rocky inselbergs appear on the horizon as you approach." },
    { question: 'Is there an entrance fee at Jubbah?', answer: "Entry to the Jubbah rock art site is managed by the Saudi Heritage Commission. There is a visitor centre at Jubbah. Entry procedures and fees may apply — confirm current status before visiting. The site has been developed with boardwalks and information panels around the main petroglyph panels." },
    { question: 'What is the best time of day to visit Jubbah?', answer: "Early morning (8–10am) gives the best light for photographing the petroglyphs — low-angle light creates shadows that make the carved lines more visible. Midday light is flat and harsh. The site is open-air desert — bring sun protection, a hat, and water regardless of season. Avoid summer afternoons (40°C+ heat)." },
];

export default function JubbahRockArtPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/hail">Hail</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jubbah Rock Art (UNESCO)</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">UNESCO World Heritage · Jubbah · 100km from Hail · 10,000 Years Old</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jubbah Rock Art Taxi — UNESCO Petroglyphs Day Trip from Hail</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi from <strong>Hail to Jubbah UNESCO petroglyphs</strong> — 100km north, 1 hour. <strong>10,000-year-old rock carvings</strong> on sandstone inselbergs. Driver waits at site. <strong>No taxis at Jubbah — pre-booking is essential.</strong>
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jubbah%20rock%20art%20from%20Hail" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jubbah Day Trip
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8 rounded-r-xl">
                <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-bold text-amber-800 mb-1">No Taxis at Jubbah — Pre-Book Your Return</p>
                        <p className="text-sm text-amber-700">Jubbah has no local taxis, Careem, or Uber. If you travel to Jubbah without a pre-booked return taxi, you are stranded in the desert 100km from Hail. Always pre-book a driver-waits round trip.</p>
                    </div>
                </div>
            </div>

            <section className="py-10 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">UNESCO</div><div className="text-sm text-gray-600">World Heritage 2015</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">10,000 yrs</div><div className="text-sm text-gray-600">Oldest Carvings</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">100 km</div><div className="text-sm text-gray-600">from Hail City</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Driver Waits</div><div className="text-sm text-gray-600">No Jubbah Taxis</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jubbah Petroglyphs — What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Sandstone Inselbergs', desc: "The Jubbah petroglyphs are carved into the vertical faces of sandstone inselbergs — isolated rocky outcrops rising from the flat desert plain around the Jubbah oasis. The largest concentration of carvings is on Jabal Umm Sinman, the main rock outcrop at the site.", note: 'Boardwalks and signage installed by Saudi Heritage Commission.' },
                            { title: 'Rock Art Panels — What Is Depicted', desc: "The carvings show humans (hunters, warriors, figures in ritual postures), animals (Arabian oryx, ibex, ostriches, horses, camels, and extinct species), hunting scenes with bows and spears, and ancient inscriptions in Thamudic, Dadanite, and early Arabic scripts. Some panels show animals that became locally extinct thousands of years ago.", note: 'Over 5,000 individual figures recorded at the Jubbah site.' },
                            { title: 'Jubbah Oasis & Village', desc: "The Jubbah oasis is a working date palm oasis that has sustained human settlement for thousands of years — one of the reasons the rock art here spans so many millennia of human activity. The modern Jubbah village has a visitor centre and facilities. The oasis and village add context to the archaeological significance.", note: 'Visitor centre: current hours confirm on day of visit.' },
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Jubbah Day Trip — Schedule</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-stone-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Time</th>
                                    <th className="px-5 py-4 text-left font-semibold">Activity</th>
                                    <th className="px-5 py-4 text-left font-semibold">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { time: '7:30am', act: 'Depart Hail by taxi', dur: '–' },
                                    { time: '8:30am', act: 'Arrive Jubbah (100km)', dur: '1 hr drive' },
                                    { time: '8:30am', act: 'Visitor centre & orientation', dur: '20 min' },
                                    { time: '8:50am', act: 'Jabal Umm Sinman rock art panels', dur: '1.5–2 hrs' },
                                    { time: '10:45am', act: 'Jubbah oasis walk (optional)', dur: '30 min' },
                                    { time: '11:15am', act: 'Return taxi departs Jubbah', dur: '–' },
                                    { time: '12:15pm', act: 'Back in Hail — half day complete', dur: '1 hr drive' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-bold text-stone-700">{row.time}</td>
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.act}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.dur}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jubbah Rock Art FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Jubbah UNESCO Day Trip</h2>
                    <p className="mb-8 opacity-90">Driver waits at site — no return taxi available at Jubbah without pre-booking.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jubbah%20rock%20art%20from%20Hail" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jubbah Day Trip
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/hail/hail-airport" className="text-slate-600 hover:underline">← Hail Airport</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/hail/qasr-barzan" className="text-slate-600 hover:underline">Qasr Barzan →</Link>
            </div>
        </div>
    );
}
