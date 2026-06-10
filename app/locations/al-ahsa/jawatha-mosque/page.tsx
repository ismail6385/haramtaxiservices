import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/al-ahsa/jawatha-mosque' },
    title: 'Jawatha Mosque Taxi | Al-Ahsa — Oldest Mosque in Eastern Arabia Transfer',
    description: "Taxi to Jawatha Mosque from Al-Ahsa — 25km, 30 minutes. One of the oldest mosques in the Arabian Peninsula, 7th century CE. First Jumu'ah outside Makkah. Driver waits. Fixed rate.",
    keywords: ["Jawatha Mosque taxi", "Al-Ahsa mosque taxi", "oldest mosque Eastern Arabia taxi", "Jawatha Al-Ahsa taxi", "Jawatha mosque transfer"],
    openGraph: {
        title: "Jawatha Mosque Taxi — Al-Ahsa Oldest Mosque Transfer",
        description: "Taxi to Jawatha Mosque, Al-Ahsa. 7th century CE, oldest mosque in Eastern Arabia. 25km. Driver waits.",
        url: 'https://haramtaxiservice.com/locations/al-ahsa/jawatha-mosque',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Jawatha Mosque?", answer: "Jawatha Mosque is located in Al-Kilabiyah village, approximately 25km from central Hofuf. It is one of the oldest mosques in the Arabian Peninsula — built in the early Islamic period (7th century CE, 1st Hijra). According to Islamic historical accounts, Jawatha Mosque is the site where the first Jumu'ah (Friday congregational prayer) was held outside Makkah and Madinah after the Prophet's migration. It is a place of significant religious and historical importance." },
    { question: "When was Jawatha Mosque built?", answer: "Jawatha Mosque was built in approximately 629–632 CE (7th–9th year of Hijra) during the early Islamic period when the tribes of the Al-Ahsa region converted to Islam. The original structure no longer stands in its ancient form — the current mosque is a restoration and preservation of the site. Archaeological studies have identified the original mosque footprint and remains of the ancient structure." },
    { question: "Is Jawatha Mosque still active?", answer: "Yes — Jawatha Mosque is an active place of worship and a significant pilgrimage site for Muslims who wish to pray at one of the earliest mosques in Islamic history. Visitors should dress modestly and be aware that the mosque is in active use, particularly at prayer times. Non-Muslim visitors are generally welcome to visit the grounds and exterior during non-prayer times." },
    { question: "How far is Jawatha Mosque from Al-Ahsa city?", answer: "Approximately 25km from central Hofuf — about 30 minutes by taxi. The mosque is in Al-Kilabiyah village within the Al-Ahsa oasis area." },
    { question: "Can I combine Jawatha Mosque with other Al-Ahsa sites?", answer: "Yes — Jawatha Mosque is typically part of the Al-Ahsa heritage circuit: Al-Qara Mountain (morning) + Jawatha Mosque (mid-morning) + Qasr Ibrahim (afternoon, city centre) = the three main heritage sites in one day. Your driver plans the optimal routing." },
];

export default function JawathaMosquePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/al-ahsa">Al-Ahsa</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jawatha Mosque</span>
                </div>
            </div>

            <section className="bg-stone-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Jawatha Mosque · 7th Century CE · Oldest in Eastern Arabia · 25km from Hofuf</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jawatha Mosque Taxi — Al-Ahsa Oldest Mosque Transfer</h1>
                        <p className="text-xl text-stone-200 mb-8 font-light">
                            Taxi to <strong>Jawatha Mosque</strong> from Al-Ahsa — 25km, 30 minutes. <strong>One of the oldest mosques in the Arabian Peninsula</strong> — 7th century CE, first Jumu&apos;ah outside Makkah. Active place of worship. Driver waits. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jawatha%20Mosque%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jawatha Mosque Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-100 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">7th C CE</div><div className="text-sm text-gray-600">Built Early Islamic Period</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">25 km</div><div className="text-sm text-gray-600">from Hofuf city</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">1st</div><div className="text-sm text-gray-600">Jumu&apos;ah Outside Makkah</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">Active</div><div className="text-sm text-gray-600">Place of Worship</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Jawatha Mosque — What to Know</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Historical Significance', desc: "Jawatha Mosque occupies a position of unique importance in Islamic history — according to the traditional accounts, it is the site where the first Jumu'ah (Friday congregational prayer) was performed outside of Makkah and Madinah. This occurred when the Bani Abd Al-Qais tribe of the Al-Ahsa region converted to Islam during the lifetime of the Prophet Muhammad (PBUH). The mosque's significance is therefore foundational — one of the earliest expansions of Islamic prayer beyond the two holy cities.", note: 'Visit: best before or after Fajr or Asr prayer.' },
                            { title: 'The Current Structure', desc: "The current structure at the Jawatha site is a restoration and preservation project built over and around the original mosque footprint. The original ancient structure has been excavated and studied — remains of early Islamic construction (mud brick, plaster) have been documented. The restored mosque maintains the original proportions and orientation (qibla direction). A small interpretive display documents the site history. The mosque is in active use.", note: 'Non-Muslim visitors: exterior and grounds welcome.' },
                            { title: 'Setting in the Oasis', desc: "Jawatha Mosque is set within the Al-Kilabiyah village — a community within the broader Al-Ahsa oasis area. The surrounding landscape includes date palm groves and the traditional village setting that gives context to the 7th-century founding. The drive from Hofuf passes through the oasis — irrigation channels, palm groves, and traditional farm plots that have been continuously cultivated for over 1,000 years.", note: 'Combined visit: Al-Qara Mountain + Jawatha = ideal morning.' },
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jawatha Mosque Taxi FAQ</h2>
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

            <section className="py-14 bg-stone-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Jawatha Mosque Taxi</h2>
                    <p className="mb-8 opacity-90">25km from Hofuf — 7th century mosque, driver waits. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jawatha%20Mosque%20in%20Al-Ahsa" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jawatha Mosque Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/al-ahsa/al-qara-mountain" className="text-amber-700 hover:underline">← Al-Qara Mountain</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/al-ahsa/qasr-ibrahim" className="text-amber-700 hover:underline">Qasr Ibrahim →</Link>
            </div>
        </div>
    );
}
