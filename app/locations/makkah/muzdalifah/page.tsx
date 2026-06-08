import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/muzdalifah' },
    title: 'Muzdalifah Taxi Makkah | Hajj Overnight Site Transport Guide 2026',
    description: 'Transport guide for Muzdalifah — the open-air Hajj overnight site between Arafat and Mina. Arafat to Muzdalifah transfer on 9 Dhul Hijjah, pebble collection, and Muzdalifah to Mina transport.',
    keywords: ['Muzdalifah taxi Hajj', 'Arafat to Muzdalifah transport', 'Muzdalifah Mina transfer', 'Hajj overnight Muzdalifah', 'pebble collection Muzdalifah', 'Hajj 2026 transport Muzdalifah'],
    openGraph: {
        title: 'Muzdalifah Transport — Hajj Overnight Site Between Arafat and Mina',
        description: 'Private taxi for the Arafat → Muzdalifah → Mina Hajj journey. Hajj-permitted vehicles, fixed rate.',
        url: 'https://haramtaxiservice.com/locations/makkah/muzdalifah',
        type: 'website',
    },
};

export default function MuzdalifaPage() {
    const faqs = [
        { question: 'What is Muzdalifah and what is its role in Hajj?', answer: "Muzdalifah is an open plain approximately 9km east of Makkah, situated between the Plain of Arafat (east) and Mina (west). During Hajj, pilgrims travel from Arafat to Muzdalifah after sunset on the 9th of Dhul Hijjah and spend the night there under the open sky — praying Maghrib and Isha combined and shortened (Qasr), collecting pebbles for the Jamarat stoning in Mina, sleeping, and then departing for Mina before sunrise on the 10th (Eid Al-Adha). Spending the night at Muzdalifah is a Wajib (obligatory) act of Hajj." },
        { question: 'What is the Mash\'ar Al-Haram mosque at Muzdalifah?', answer: "Mash'ar Al-Haram (the Sacred Monument) is a mosque in Muzdalifah mentioned in the Quran (Al-Baqarah 2:198): 'And when you depart from Arafat, remember Allah at Al-Mash'ar Al-Haram.' The Prophet ﷺ dismounted here, made Dhikr, Du'a, and faced the Qibla during his final Hajj. Standing and making Du'a at Mash'ar Al-Haram at night (between Maghrib and Fajr of the 9th–10th Dhul Hijjah) is Sunnah." },
        { question: 'How many pebbles do I need from Muzdalifah?', answer: "Pilgrims should collect approximately 70 pebbles from Muzdalifah — chickpea-sized, not larger. The breakdown: 7 pebbles for Jamarat Al-Aqaba on Day 10 (Eid). Then 21 pebbles per day for Days 11 and 12 (7 per Jamara × 3 Jamaras). If staying for Day 13: another 21 pebbles. Total for 4-day stoning: 70 pebbles. Collecting extra is prudent in case any are dropped. Pebbles should be washed. The Hajj authorities also distribute pebbles for pilgrims who cannot collect from Muzdalifah." },
        { question: 'Can elderly pilgrims leave Muzdalifah early (after midnight)?', answer: "Yes. A concession exists for the elderly, ill, and women with children: they may depart Muzdalifah after midnight (after the first half of the night has passed) instead of staying until Fajr. This allows them to stone Jamarat Al-Aqaba before the main morning crowds on Eid Day. If you have elderly family members, arrange this with your Hajj group leader and our transport team in advance — we account for early departure logistics." },
        { question: 'How do I get from Arafat to Muzdalifah on Hajj evening?', answer: "The Arafat to Muzdalifah transfer on the evening of 9 Dhul Hijjah is one of the most congested journeys of the year — millions of pilgrims travel the same 9km simultaneously after sunset. Only registered Hajj transport operators can navigate this route with permits. Standard taxi apps and unregistered vehicles cannot access the Hajj corridor. We provide this transfer as part of our full Hajj movement package. Book well in advance of Dhul Hijjah." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Muzdalifah</span>
                </div>
            </div>

            <section className="bg-purple-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Between Arafat & Mina · Hajj Night 9–10</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Muzdalifah Transport — Hajj Overnight Site & Pebble Collection</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi for the <strong>Arafat → Muzdalifah → Mina</strong> Hajj journey. Muzdalifah is the open-air overnight Hajj site where pilgrims combine prayers, collect Jamarat pebbles, and sleep under the stars between the 9th and 10th Dhul Hijjah. Hajj-permitted vehicles required.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20Hajj%20transport%20for%20Muzdalifah%202026" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Muzdalifah Hajj Transport
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-purple-50 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">9 km</div><div className="text-sm text-gray-600">East of Makkah</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">Night 9–10</div><div className="text-sm text-gray-600">Dhul Hijjah (Hajj)</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">Wajib</div><div className="text-sm text-gray-600">Obligatory Hajj Act</div></div>
                        <div><div className="text-3xl font-bold text-purple-700 mb-1">70</div><div className="text-sm text-gray-600">Pebbles to Collect</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Muzdalifah Night — Hajj Guide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {[
                                { step: '1', title: 'Depart Arafat after Maghrib (9 Dhul Hijjah)', desc: 'After sunset on the 9th, pilgrims begin the journey from Arafat to Muzdalifah. The Sunnah is to depart calmly without rushing. The journey (9km) may take 2–4 hours due to the millions of simultaneous travellers.' },
                                { step: '2', title: 'Pray Maghrib and Isha in Muzdalifah', desc: 'Upon arriving in Muzdalifah, combine and shorten Maghrib and Isha prayers (Jam\'a Taqdeem/Ta\'kheer). This combined prayer at Muzdalifah is how the Prophet ﷺ performed it during his Hajj.' },
                                { step: '3', title: 'Collect Pebbles', desc: 'Collect approximately 70 chickpea-sized pebbles from the ground at Muzdalifah. Wash them before use. These are used for the Jamarat stoning in Mina over the next 3–4 days.' },
                                { step: '4', title: 'Sleep Under the Open Sky', desc: 'Sleeping at Muzdalifah is Wajib (obligatory) — spending any part of the night there, from after midnight until before Fajr, fulfils this obligation. Most pilgrims sleep on prayer mats or blankets on the ground or in their vehicles.' },
                                { step: '5', title: 'Depart to Mina Before Sunrise', desc: 'After Fajr prayer, proceed to Mina. The elderly and those with hardship may depart after midnight. Arriving in Mina before the main Jamarat stoning crowds is important.' },
                            ].map((s, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-purple-700 text-sm">{s.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{s.title}</h3>
                                        <p className="text-sm text-gray-600">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">The Full Hajj Movement Circuit</h3>
                            <div className="space-y-4">
                                {[
                                    { from: 'Makkah Hotel', to: 'Mina', day: 'Day 8 (Yawm Al-Tarwiyah)', note: 'Overnight in Mina tents' },
                                    { from: 'Mina', to: 'Arafat', day: 'Day 9 (Fajr–Afternoon)', note: 'Wuquf — pillar of Hajj' },
                                    { from: 'Arafat', to: 'Muzdalifah', day: 'Day 9 (After Maghrib)', note: 'Overnight, collect pebbles' },
                                    { from: 'Muzdalifah', to: 'Mina', day: 'Day 10 (Eid — Before Sunrise)', note: 'Jamarat Al-Aqaba, Sacrifice' },
                                    { from: 'Mina (stay)', to: 'Mina', day: 'Days 11–13', note: 'Stone all 3 Jamaras daily' },
                                    { from: 'Mina', to: 'Makkah Hotel', day: 'Day 12 or 13', note: 'Tawaf Al-Wada (Farewell Tawaf)' },
                                ].map((m, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border border-purple-100">
                                        <div className="text-xs font-bold text-purple-700 mb-1">{m.day}</div>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                            <span>{m.from}</span>
                                            <span className="text-purple-400">→</span>
                                            <span>{m.to}</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">{m.note}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Muzdalifah FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-purple-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-purple-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Hajj 2026 Transport Circuit</h2>
                    <p className="mb-8 opacity-90">Makkah → Mina → Arafat → Muzdalifah → Mina — full Hajj movement logistics, one pre-arranged booking.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20full%20Hajj%20transport%20circuit%20Makkah%20Mina%20Arafat%20Muzdalifah%202026" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Full Hajj Transport
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah/aziziyah" className="text-slate-600 hover:underline">← Aziziyah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah" className="text-slate-600 hover:underline">Makkah Hub</Link>
            </div>
        </div>
    );
}
