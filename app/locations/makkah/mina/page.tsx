import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/mina' },
    title: 'Mina Taxi Makkah | Jamarat Transport & Hajj Tent City Transfer Guide',
    description: 'Transport guide for Mina Tent City during Hajj. Jamarat (Ramy Al-Jamarat) access, Mina to Arafat transfers, Hajj Day 8–13 logistics. Private taxi with Hajj permits.',
    keywords: ['Mina taxi Hajj', 'Jamarat transport Makkah', 'Mina tent city transfer', 'Ramy Al-Jamarat taxi', 'Hajj transport Mina', 'Mina Makkah taxi service'],
    openGraph: {
        title: 'Mina Taxi — Hajj Tent City & Jamarat Transport Guide',
        description: 'Private taxi to Mina for Hajj. Jamarat access, Mina-Arafat-Muzdalifah transfers. Hajj-permitted vehicles.',
        url: 'https://haramtaxiservice.com/locations/makkah/mina',
        type: 'website',
    },
};

export default function MinaPage() {
    const faqs = [
        { question: 'What is Mina and why is it important in Hajj?', answer: "Mina is a valley approximately 5km east of Masjid Al-Haram in Makkah. During Hajj (the annual pilgrimage), Mina becomes the largest tent city in the world — with approximately 160,000 air-conditioned tents housing over two million pilgrims during the 8th–13th days of Dhul Hijjah. The core Hajj ritual of Ramy Al-Jamarat (stoning of the three pillars representing the devil, symbolising the actions of Ibrahim AS) is performed in Mina. Pilgrims also perform the Qurbani (sacrifice) and shave/cut their hair in Mina, marking the transition out of Ihram." },
        { question: 'What is Ramy Al-Jamarat (the Stoning Ritual)?', answer: "Ramy Al-Jamarat is the ritual of throwing pebbles at three large pillars (Jamaras) in Mina. It commemorates Ibrahim AS rejecting the devil, who appeared to tempt him away from sacrificing his son Ismail AS. The three pillars are: Jamarat Al-Aqaba (the large pillar, closest to Makkah), Jamarat Al-Wusta (middle), and Jamarat Al-Sughra (small). On Hajj Day 10 (Eid Al-Adha), only Jamarat Al-Aqaba is stoned (7 pebbles). On Days 11, 12, and 13, all three are stoned (7 pebbles each) in order." },
        { question: 'Can a private taxi take me directly into Mina during Hajj?', answer: "Access to Mina during Hajj (8th–13th Dhul Hijjah) is strictly controlled. Only officially registered Hajj transport operators with Ministry-issued permits can enter Mina. Standard taxis and ride-hailing apps cannot enter. We are registered Hajj transport operators — our vehicles carry the required Mina access permits. Pilgrims who have not pre-arranged transport with a licensed operator often cannot get to Mina conveniently during the Hajj days." },
        { question: 'How do I get pebbles for the Jamarat stoning?', answer: "Pebbles for the Jamarat stoning are traditionally collected from Muzdalifah — where pilgrims spend the night between the 9th and 10th of Dhul Hijjah. Each pilgrim should collect approximately 70 pebbles (to account for 49 required, with spares). Pebbles are the size of chickpeas — not large stones. They should be washed. The Hajj authorities also distribute pebbles for pilgrims who could not collect them at Muzdalifah." },
        { question: 'What is the Masjid Al-Khayf in Mina?', answer: "Masjid Al-Khayf (Mosque of the Valley) is a large mosque in the Mina valley, at the foot of a mountain near the smaller Jamarat. It is one of the oldest and most historically significant mosques in Makkah — a hadith records that seventy prophets prayed at its site. During Hajj, pilgrims who stay in Mina pray in Masjid Al-Khayf and can perform their prayers shortened (Qasr) as the Prophet ﷺ taught." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Mina</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">5km East of Haram · Hajj Tent City</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Mina Taxi — Jamarat Transport & Hajj Tent City Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Mina Tent City</strong> — the world&apos;s largest annual tent settlement, 5km from Masjid Al-Haram. Jamarat access, Mina–Arafat–Muzdalifah transfers. Hajj-permitted vehicles required.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20Hajj%20transport%20to%20Mina%20in%20Makkah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Mina Hajj Transport
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">5 km</div><div className="text-sm text-gray-600">From Masjid Al-Haram</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">160,000</div><div className="text-sm text-gray-600">Air-Con Tents</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">Days 8–13</div><div className="text-sm text-gray-600">Dhul Hijjah (Hajj)</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">3</div><div className="text-sm text-gray-600">Jamarat Pillars</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hajj Movement Calendar — Mina Schedule</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-amber-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Hajj Day</th>
                                    <th className="px-5 py-4 text-left font-semibold">Date (Approx. 2026)</th>
                                    <th className="px-5 py-4 text-left font-semibold">Location</th>
                                    <th className="px-5 py-4 text-left font-semibold">Key Ritual</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { day: '8 Dhul Hijjah (Yawm Al-Tarwiyah)', date: 'Late May 2026', loc: 'Mina', ritual: 'Arrive and spend the night in Mina tents' },
                                    { day: '9 Dhul Hijjah (Yawm Arafat)', date: 'Late May 2026', loc: 'Arafat (then Muzdalifah)', ritual: 'Wuquf at Arafat — the pillar of Hajj' },
                                    { day: '10 Dhul Hijjah (Eid Al-Adha)', date: 'Late May 2026', loc: 'Mina', ritual: 'Stone Jamarat Al-Aqaba, Sacrifice, Halq/Taqsir, Tawaf Al-Ifadah' },
                                    { day: '11 Dhul Hijjah', date: 'Late May 2026', loc: 'Mina', ritual: 'Stone all three Jamaras (after Zawwal/noon)' },
                                    { day: '12 Dhul Hijjah', date: 'Late May 2026', loc: 'Mina (depart before sunset)', ritual: 'Stone all three Jamaras — Naffar Awwal (early departure) possible' },
                                    { day: '13 Dhul Hijjah', date: 'Late May 2026', loc: 'Mina', ritual: 'Stone all three Jamaras — Naffar Thani (late departure)' },
                                ].map((row, i) => (
                                    <tr key={i} className="bg-white hover:bg-amber-50">
                                        <td className="px-5 py-4 font-semibold text-gray-900 text-xs">{row.day}</td>
                                        <td className="px-5 py-4 text-gray-600 text-xs">{row.date}</td>
                                        <td className="px-5 py-4 font-bold text-amber-700 text-xs">{row.loc}</td>
                                        <td className="px-5 py-4 text-gray-500 text-xs">{row.ritual}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">Exact 2026 Hajj dates depend on moon sighting — verify closer to the season.</p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Hajj Transport Must Be Pre-Arranged</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Mina Access Permits Required', desc: 'During Hajj, all vehicles entering the Mina valley require Ministry of Hajj access permits. Standard taxis and ride-hailing apps cannot enter Mina. Only registered Hajj transport operators are authorised. Without pre-arranged transport, pilgrims may have to walk 5km+ with all Hajj luggage.' },
                            { title: 'Jamarat Bridge Crowd Management', desc: 'The Jamarat Bridge (Al-Jisrr) is one of the most heavily managed crowd-control sites in the world. Access times for different pilgrim groups are staggered to prevent dangerous crowding. Transport from your tent to the Jamarat must be timed to avoid peak congestion periods.' },
                            { title: 'Mina–Arafat–Muzdalifah Logistics', desc: 'The three-site journey (Mina → Arafat → Muzdalifah → Mina) covers approximately 25km over 24 hours. Coordinating this for a family — especially with elderly members or children — requires pre-arranged permitted transport with a driver who knows the Hajj road configuration.' },
                        ].map((p, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-amber-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-600">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mina FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-amber-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-amber-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Mina & Jamarat Hajj Transport</h2>
                    <p className="mb-8 opacity-90">WhatsApp your Hajj group size and hotel — we arrange permitted Mina transport well in advance.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20Hajj%20transport%20to%20Mina%20and%20Jamarat" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Mina Transport
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah/masjid-al-haram" className="text-slate-600 hover:underline">← Masjid Al-Haram</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah/arafat" className="text-slate-600 hover:underline">Arafat →</Link>
            </div>
        </div>
    );
}
