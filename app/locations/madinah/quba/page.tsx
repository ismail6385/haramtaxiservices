import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/quba' },
    title: 'Quba Mosque Taxi Madinah | Masjid Quba Transfer & Ziyarat Tour',
    description: "Private taxi to Masjid Quba — the first mosque built in Islam, 10 minutes from Madinah's Haram zone. Half-day Ziyarat tours including Quba, Uhud & Seven Mosques. Fixed rate.",
    keywords: ['Quba Mosque taxi Madinah', 'Masjid Quba taxi', 'Quba Ziyarat taxi', 'Quba tour Madinah', 'Madinah south Ziyarat taxi'],
    openGraph: {
        title: "Quba Mosque Taxi — Madinah's First Mosque Ziyarat Transfer",
        description: "Fixed-rate taxi to Masjid Quba from all Madinah hotels. Half-day Ziyarat tours including Quba, Uhud & Seven Mosques. Book via WhatsApp.",
        url: 'https://haramtaxiservice.com/locations/madinah/quba',
        type: 'website',
    },
};

export default function QubaPage() {
    const nearbyZiyarat = [
        { name: 'Masjid Al-Qiblatain', desc: 'Mosque of the Two Qiblas — where the Qibla changed from Jerusalem to Makkah', time: '15 min from Quba' },
        { name: 'Sab\'a Masajid (Seven Mosques)', desc: 'Site of the Battle of the Trench (Khandaq) — multiple historical mosques', time: '20 min from Quba' },
        { name: 'Masjid Al-Fath', desc: 'Mosque of the Opening (Victory) — where the Prophet ﷺ prayed for 3 days', time: '20 min from Quba' },
        { name: 'Wadi Al-Aqiq', desc: 'Blessed valley mentioned by the Prophet ﷺ — scenic drive', time: '10 min from Quba' },
    ];

    const faqs = [
        { question: 'How far is Masjid Quba from Madinah hotels?', answer: "Masjid Quba is approximately 8–10km south of the Prophet's Mosque (Masjid Al-Nabawi) in Markaziah — a 10–15 minute taxi drive. It is one of the easiest Ziyarat sites to reach from the central hotel zone." },
        { question: 'What is the significance of Masjid Quba?', answer: "Masjid Quba is the first mosque ever built in Islam. The Prophet Muhammad ﷺ laid its foundation stones upon arriving in Madinah during the Hijra from Makkah in 622 CE. Praying two Rak'ah in Quba Mosque carries the reward of one Umrah, according to a hadith. It is visited by millions of pilgrims annually." },
        { question: 'Can women visit Masjid Quba?', answer: "Yes. Masjid Quba has separate entrances, ablution facilities, and prayer areas for women. The women's section has been expanded significantly as part of the mosque renovation completed in recent years. Our taxis are available for solo female travelers visiting Quba." },
        { question: 'What is the best time to visit Quba Mosque?', answer: "Mondays are considered especially blessed for visiting Quba — the Prophet ﷺ visited Quba every Monday. Early morning after Fajr or late morning after the main prayer rush are the least crowded times. Avoid the period immediately before and after Dhuhr on Fridays when crowds are at peak." },
        { question: 'Can I book a Ziyarat tour that includes Quba Mosque?', answer: "Yes. Our half-day Ziyarat tour includes Quba Mosque as the first stop, followed by Mount Uhud, Masjid Al-Qiblatain, and the Seven Mosques. The full-day tour adds Masjid Al-Ijabah and Wadi Al-Jinn. Both are fixed-rate packages departing from your hotel." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Quba District</span>
                </div>
            </div>

            <section className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">South Madinah · First Mosque in Islam</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Quba Mosque Taxi — Masjid Quba Ziyarat Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Masjid Quba</strong> — the first mosque in Islam, 10–15 minutes south of the Prophet&apos;s Mosque. Fixed-rate transfers from all Madinah hotels and half-day Ziyarat tours including Quba, Uhud, and the Seven Mosques.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Masjid%20Quba%20in%20Madinah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Quba Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">622 CE</div><div className="text-sm text-gray-600">Year Mosque Founded</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">1 Umrah</div><div className="text-sm text-gray-600">Reward per 2 Rak&apos;ah</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">10 min</div><div className="text-sm text-gray-600">from Prophet&apos;s Mosque</div></div>
                        <div><div className="text-3xl font-bold text-emerald-800 mb-1">24/7</div><div className="text-sm text-gray-600">Pickup Service</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">About Masjid Quba</h2>
                    <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
                        <p>Masjid Quba was the first mosque established in Islam. When the Prophet Muhammad ﷺ arrived in Madinah during the Hijra (migration from Makkah) in 622 CE, he spent 14 days in the Quba area before entering Madinah city, and during this time he laid the foundation stones of Masjid Quba with his own blessed hands.</p>
                        <p>A hadith recorded in Bukhari and Muslim states: <em>&quot;One who purifies oneself in one&apos;s home and comes to Masjid Quba and prays two Rak&apos;ah therein, will get the reward equal to Umrah.&quot;</em> Because of this, Masjid Quba is visited by virtually every pilgrim who stays in Madinah.</p>
                        <p>The mosque has been expanded multiple times throughout Islamic history and most recently renovated into a large, modern structure capable of accommodating tens of thousands of worshippers. The original foundation stones from the Prophet&apos;s time are preserved within the structure.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nearby Ziyarat Sites from Quba Area</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {nearbyZiyarat.map((z, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <MapPin className="w-6 h-6 text-emerald-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{z.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{z.desc}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400"><Clock className="w-3 h-3" />{z.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quba Mosque Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-emerald-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-emerald-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Quba Mosque Transfer</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel name and preferred visiting time — fixed-rate transfer confirmed in minutes.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20to%20Masjid%20Quba%20from%20my%20Madinah%20hotel" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Quba Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">← Back to Madinah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah/mount-uhud" className="text-slate-600 hover:underline">Mount Uhud →</Link>
            </div>
        </div>
    );
}
