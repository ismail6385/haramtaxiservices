import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/tabuk/tabuk-castle' },
    title: 'Tabuk Castle Taxi | Historic Old City & Hijaz Railway Transport Guide',
    description: 'Taxi to Tabuk Castle (Al-Qal\'a) — the Ottoman fort where the Prophet Muhammad ﷺ camped during the Tabuk Expedition, 630 CE. Includes Hijaz Railway museum and old Tabuk city walking tour.',
    keywords: ['Tabuk Castle taxi', 'Al-Qala Tabuk transport', 'Hijaz Railway station Tabuk', 'Tabuk old city tour', 'Prophet expedition Tabuk', 'Tabuk heritage sites'],
    openGraph: {
        title: 'Tabuk Castle & Old City — Taxi & Transport Guide',
        description: 'Visit Tabuk Castle (Ottoman fort, 630 CE Expedition site) and Hijaz Railway station. Private taxi from anywhere in Tabuk.',
        url: 'https://haramtaxiservice.com/locations/tabuk/tabuk-castle',
        type: 'website',
    },
};

const faqs = [
    { question: 'What is Tabuk Castle and why is it significant in Islamic history?', answer: "Tabuk Castle (Qal'at Tabuk) is a historic Ottoman-era fort in central Tabuk city. Its Islamic significance pre-dates the Ottoman construction: in 630 CE (9 AH), the Prophet Muhammad ﷺ led the Tabuk Expedition — the largest military campaign of his lifetime — and camped at the water spring in Tabuk. The current castle structure dates from the Ottoman period (renovated in the 17th century), but the site's sanctity in Islamic tradition links it to the Prophet's presence. Inside the castle is a small mosque (Masjid Al-Nabawi Al-Tabuki) marking the spot where the Prophet ﷺ prayed." },
    { question: 'Where is Tabuk Castle located and how do I get there?', answer: "Tabuk Castle is in central Tabuk city — King Faisal Street, opposite Tabuk Municipality. It's approximately 15–20 minutes from most Tabuk hotels by taxi. WhatsApp us your hotel or pickup point and we'll arrange direct transport." },
    { question: 'What is the Hijaz Railway station in Tabuk?', answer: "The Ottoman Hejaz Railway (Hijaz Demiryolu) was a narrow-gauge railway connecting Damascus to Madinah, completed in 1908. It ran through Tabuk as a key waypoint on the route to the Hijaz. The Tabuk railway station is one of the best-preserved stations on the line — the original building, a historic steam locomotive, and Ottoman infrastructure are on display. The railway was famously sabotaged by T.E. Lawrence (Lawrence of Arabia) during WWI. The station is approximately 1.5km from Tabuk Castle." },
    { question: 'What else is in Tabuk\'s old city area?', answer: "Near Tabuk Castle: (1) Hijaz Railway Station Museum — 1.5km, historic locomotive display. (2) Masjid Al-Nabawi Al-Tabuki — small mosque marking the Prophet's ﷺ prayer site during the Tabuk Expedition. (3) Old Tabuk commercial district — traditional market, old mud-brick buildings. (4) Tabuk's central corniche. A half-day walking tour of the old city and castle area covers all four sites." },
    { question: 'Is Tabuk Castle open to visitors?', answer: "Yes — Tabuk Castle is managed by the Saudi Heritage Commission and open to visitors. Hours: typically Saturday–Thursday 9am–8pm, Friday 4pm–8pm (verify current times on arrival as heritage site hours are reviewed periodically). There is no entry fee. Non-Muslim visitors are welcome to the castle grounds and museum. The interior mosque is for Muslim prayer." },
];

export default function TabukCastlePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/tabuk">Tabuk</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Tabuk Castle & Old City</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Central Tabuk · Ottoman Heritage · 630 CE Expedition</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Tabuk Castle & Hijaz Railway — Historic Old City Transport</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">
                            Private taxi to <strong>Tabuk Castle (Al-Qal&apos;a)</strong> — the Ottoman fort and site of the Prophet Muhammad&apos;s ﷺ Tabuk Expedition camp in 630 CE. Includes the <strong>Hijaz Railway Station Museum</strong> and old Tabuk city heritage walk.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Tabuk%20Castle%20and%20Hijaz%20Railway%20Station" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Tabuk Heritage Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">630 CE</div><div className="text-sm text-gray-600">Tabuk Expedition (9 AH)</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">1908</div><div className="text-sm text-gray-600">Hejaz Railway Completed</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Free</div><div className="text-sm text-gray-600">No Entry Fee</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Half Day</div><div className="text-sm text-gray-600">Castle + Railway Tour</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Key Sites in Tabuk&apos;s Historic Old City</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Tabuk Castle (Al-Qal\'a)',
                                desc: 'The central Ottoman fort of Tabuk, built over the site of an ancient water spring. The Prophet Muhammad ﷺ camped at this spring during the Tabuk Expedition (630 CE / 9 AH) — the largest military campaign of his prophethood. A small mosque inside the castle marks the spot where the Prophet ﷺ prayed.',
                                detail: 'Open Sat–Thu 9am–8pm, Fri 4pm–8pm. Free entry. Central Tabuk.',
                            },
                            {
                                title: 'Hijaz Railway Station Museum',
                                desc: 'The Ottoman Hejaz Railway ran from Damascus to Madinah, passing through Tabuk. Completed in 1908, it was the engineering marvel of its era — built in 8 years across 1,300km of desert. The Tabuk station is one of the finest preserved, with the original building, platforms, a historic steam locomotive on display, and Ottoman-era water towers.',
                                detail: '1.5km from Tabuk Castle. Lawrence of Arabia famously sabotaged bridges on this line during WWI (1916–18).',
                            },
                            {
                                title: 'Masjid Al-Nabawi Al-Tabuki',
                                desc: 'The mosque within Tabuk Castle marks the precise location where the Prophet Muhammad ﷺ prayed during the Tabuk Expedition. It is one of several "Masajid Al-Anbiya" (Prophets\' mosques) across the Arabian Peninsula — sites where prophets are known to have prayed and which carry spiritual significance for visiting Muslims.',
                                detail: 'Inside Tabuk Castle compound. Open for prayer. Respectful dress code for all visitors.',
                            },
                        ].map((site, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{site.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{site.desc}</p>
                                <p className="text-xs text-stone-600 font-medium border-t border-stone-200 pt-3">{site.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tabuk Old City Taxi Logistics</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-stone-700 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Site</th>
                                    <th className="px-5 py-4 text-left font-semibold">From City Centre</th>
                                    <th className="px-5 py-4 text-left font-semibold">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { site: 'Tabuk Castle (Al-Qal\'a)', dist: '5 min (city centre)', note: 'King Faisal Street, central Tabuk' },
                                    { site: 'Hijaz Railway Station Museum', dist: '10 min (1.5 km)', note: 'Near old Tabuk market area' },
                                    { site: 'Tabuk Airport (TUU)', dist: '15–20 min', note: 'Prince Sultan bin Abdulaziz Airport' },
                                    { site: 'Prince Fahd bin Sultan Stadium', dist: '10 min', note: 'Modern Tabuk landmarks' },
                                    { site: 'Wadi Disah Canyon', dist: '50 min south', note: 'Day trip from castle / hotel base' },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-gray-900">{row.site}</td>
                                        <td className="px-5 py-4 font-bold text-stone-700">{row.dist}</td>
                                        <td className="px-5 py-4 text-gray-500">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tabuk Castle & Heritage FAQ</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Book Tabuk Heritage Transport</h2>
                    <p className="mb-8 opacity-90">Castle, Hijaz Railway, and old city walking tour — private taxi, driver waits, fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Tabuk%20Castle%20and%20old%20city" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Heritage Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/tabuk" className="text-slate-600 hover:underline">← Back to Tabuk</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/tabuk/neom" className="text-slate-600 hover:underline">NEOM →</Link>
            </div>
        </div>
    );
}
