import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/arafat' },
    title: 'Arafat Taxi Makkah | Wuquf Transport & Plain of Arafat Hajj Transfer',
    description: 'Private taxi to the Plain of Arafat (Wuquf) on 9 Dhul Hijjah — the most critical day of Hajj. Makkah to Arafat transfer, Jabal Al-Rahma, Masjid Namirah transport. Hajj permits included.',
    keywords: ['Arafat taxi Hajj', 'Plain of Arafat transport', 'Wuquf Arafat taxi', 'Makkah to Arafat transfer', 'Jabal Al-Rahma taxi', 'Hajj Day 9 transport'],
    openGraph: {
        title: 'Arafat Taxi — Wuquf Transport on Hajj Day 9 (9 Dhul Hijjah)',
        description: 'Private taxi to the Plain of Arafat for Wuquf — the essential pillar of Hajj. Hajj-permitted vehicles, fixed rate.',
        url: 'https://haramtaxiservice.com/locations/makkah/arafat',
        type: 'website',
    },
};

export default function ArafatPage() {
    const faqs = [
        { question: 'What is Wuquf at Arafat?', answer: "Wuquf (meaning 'standing' or 'presence') at Arafat is the central pillar of Hajj. The Prophet Muhammad ﷺ said: 'Al-Hajj Arafah' — Hajj is Arafat. Every pilgrim must be present on the Plain of Arafat at any point between the afternoon of 9 Dhul Hijjah and the dawn of 10 Dhul Hijjah. Pilgrims spend this time in Du'a, Dhikr, recitation of the Quran, and seeking forgiveness. The Wuquf is considered the spiritual peak of the entire Hajj journey." },
        { question: 'What is Jabal Al-Rahma (Mount of Mercy)?', answer: "Jabal Al-Rahma — the Mount of Mercy — is a granite hill in the centre of the Plain of Arafat. It is traditionally held to be where the Prophet Muhammad ﷺ delivered his final Farewell Sermon (Khutbat Al-Wada') on 9 Dhul Hijjah 10 AH / March 632 CE — a sermon now considered one of the most important speeches in human history. Some pilgrims climb Jabal Al-Rahma for the view and the spiritual significance of standing where the Prophet ﷺ stood — though standing anywhere on the Plain of Arafat fulfils the Wuquf obligation." },
        { question: 'What is Masjid Namirah?', answer: "Masjid Namirah is a massive mosque on the western edge of the Plain of Arafat, built at the site where the Prophet ﷺ delivered his Farewell Sermon. It can accommodate over 350,000 worshippers and is where the Hajj Khutbah and combined Dhuhr/Asr prayer (Salat Al-Jama) are broadcast globally each year. Importantly, the front section of Masjid Namirah is technically in Wadi Urana — outside the Arafat boundary — so pilgrims should ensure they are in the Arafat section of the mosque or on the open plain." },
        { question: 'How do I get from my Makkah hotel to Arafat on Hajj Day 9?', answer: "The Makkah to Arafat transfer on 9 Dhul Hijjah is typically organised by your Hajj company as part of your package. Independent Hajj pilgrims need to arrange their own transport. Only Ministry-registered Hajj transport operators can enter Arafat during the Hajj period. We provide this service — WhatsApp us with your Makkah hotel, group size, and Hajj permit details to arrange the Arafat transfer. Booking at least 4–6 weeks in advance is essential." },
        { question: 'What is the boundary of Arafat?', answer: "The Arafat plain has clearly marked boundaries with signboards in Arabic, English, Urdu, and other languages. The boundary is critically important — Wuquf only counts if you are within the Arafat boundary. Wadi Urana (the valley west of Arafat, containing the front portion of Masjid Namirah) is NOT part of Arafat. Our drivers know the boundary exactly and will ensure you are delivered within the Arafat zone." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Arafat</span>
                </div>
            </div>

            <section className="bg-orange-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">14km East of Makkah · Hajj Day 9</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Arafat Transport — Wuquf & Plain of Arafat Hajj Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to the <strong>Plain of Arafat</strong> — site of the Wuquf, the essential pillar of Hajj on 9 Dhul Hijjah. The Prophet ﷺ said: &quot;Al-Hajj Arafah.&quot; Without reaching Arafat, Hajj is not complete. Hajj-permitted vehicles required.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20Hajj%20transport%20to%20Arafat%20on%209%20Dhul%20Hijjah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Arafat Hajj Transport
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-orange-50 border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">14 km</div><div className="text-sm text-gray-600">East of Makkah</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Day 9</div><div className="text-sm text-gray-600">Dhul Hijjah (Hajj)</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">Fard</div><div className="text-sm text-gray-600">Obligatory Pillar of Hajj</div></div>
                        <div><div className="text-3xl font-bold text-orange-700 mb-1">2M+</div><div className="text-sm text-gray-600">Pilgrims at Arafat</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Arafat — The Sacred Plain</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'The Wuquf (Standing)', desc: 'Wuquf at Arafat is the essential pillar of Hajj — the one act without which Hajj is not valid. Every pilgrim must be present within the boundaries of Arafat at any time between the afternoon of 9 Dhul Hijjah and before Fajr of 10 Dhul Hijjah. Pilgrims spend this time in intense worship, Du\'a, and seeking Allah\'s forgiveness — the day is considered the closest to Judgment Day in terms of divine mercy.' },
                            { title: 'Jabal Al-Rahma', desc: 'The Hill of Mercy is the rocky granite outcrop in the centre of the Arafat plain. The Prophet Muhammad ﷺ delivered his Farewell Sermon here on 9 Dhul Hijjah 10 AH. Standing at the base or summit of Jabal Al-Rahma is not a required Hajj ritual — the entire Arafat plain is equally valid for Wuquf — but millions of pilgrims visit it for its profound historical significance.' },
                            { title: 'Masjid Namirah', desc: 'The giant Masjid Namirah on the western edge of Arafat can accommodate 350,000+ worshippers. The Hajj Khutbah and combined Dhuhr/Asr prayer are delivered here annually. Critical note: only the eastern portion of Masjid Namirah is within the Arafat boundary — the front section is in Wadi Urana. Pilgrims should pray in the Arafat section of the mosque or on the open plain.' },
                        ].map((p, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-orange-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-600">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Makkah to Arafat — Transport Logistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Distance & Timing</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Makkah hotel to Arafat: approximately 14–20km (20–40 min drive under normal conditions)</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>On 9 Dhul Hijjah, road congestion is extreme — all pilgrims travel the same route simultaneously. Allow 2–3 hours for the journey.</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Departure from Makkah: typically after Fajr on the 9th — arriving at Arafat by late morning for the Khutbah and combined prayer.</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Departure from Arafat to Muzdalifah: after Maghrib on the 9th. Heavy traffic — the Muzdalifah journey may take 2–4 hours.</span></li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Pre-Book Arafat Transport</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Only registered Hajj transport operators with Ministry access permits can enter Arafat zone during Hajj</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Standard taxis and ride-hailing apps cannot get through the checkpoints on 9 Dhul Hijjah</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Failing to reach Arafat means Hajj is not valid — missing this transport connection has severe consequences</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" /><span>Book at least 4–6 weeks before Hajj — Hajj transport capacity is limited by the Ministry</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Arafat FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-orange-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-orange-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Arafat Hajj Transport for 2026</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel, group size, and Hajj permit details — arrange your Arafat transfer well in advance.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20Hajj%20transport%20to%20the%20Plain%20of%20Arafat%202026" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Arafat Transport
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah/mina" className="text-slate-600 hover:underline">← Mina</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah/jabal-al-nour" className="text-slate-600 hover:underline">Jabal Al-Nour →</Link>
            </div>
        </div>
    );
}
