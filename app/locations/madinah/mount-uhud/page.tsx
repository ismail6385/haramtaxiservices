import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/mount-uhud' },
    title: 'Mount Uhud Taxi Madinah | Battle of Uhud & Martyrs Cemetery Transfer',
    description: "Private taxi to Mount Uhud (Jabal Uhud) — site of the Battle of Uhud in 625 CE and the Martyrs' Cemetery. 15 minutes from Madinah's Haram zone. Fixed rate, all hotels served.",
    keywords: ['Mount Uhud taxi Madinah', 'Jabal Uhud taxi', 'Battle of Uhud Ziyarat', 'Uhud martyrs cemetery taxi', 'Madinah Uhud transfer'],
    openGraph: {
        title: 'Mount Uhud Taxi Madinah — Battle of Uhud Ziyarat Transfer',
        description: "Fixed-rate taxi to Jabal Uhud and the Martyrs' Cemetery from all Madinah hotels. 15-minute transfer. Half-day Ziyarat tours available.",
        url: 'https://haramtaxiservice.com/locations/madinah/mount-uhud',
        type: 'website',
    },
};

export default function MountUhudPage() {
    const faqs = [
        { question: 'How far is Mount Uhud from Madinah hotels?', answer: "Mount Uhud (Jabal Uhud) is approximately 5–7km north of Masjid Al-Nabawi — a 10–15 minute taxi drive from Markaziah hotels. It is a quick and straightforward trip, making it easily combined with other north Madinah Ziyarat sites." },
        { question: 'What happened at Mount Uhud?', answer: "The Battle of Uhud took place in 625 CE (3 AH) — the second major battle of early Islam between the Muslim forces of Madinah led by the Prophet Muhammad ﷺ and the Quraysh army from Makkah. The Muslims initially succeeded but suffered a reversal when some archers left their positions. 70 Companions were martyred, including Hamza ibn Abdul-Muttalib RA (the Prophet's uncle). Their graves are at the mountain's base." },
        { question: "Can I visit the Martyrs' Cemetery at Uhud?", answer: "Yes. The Martyrs' Cemetery (Shuhada Uhud) is at the base of Jabal Uhud and is open to visitors. The graves of Hamza RA and the 70 Companions martyred at Uhud are marked. Note that women are generally advised not to enter the cemetery itself but may view from outside — practices vary and visitors should follow current rules." },
        { question: 'Is it permitted to climb Mount Uhud?', answer: "Visitors can approach and walk around the base of Jabal Uhud. The mountain itself is a natural rocky hill — access onto the slopes is possible but limited in certain areas near the heritage site. The main focus of Ziyarat is the base where the battle occurred and the Martyrs' Cemetery, not climbing the summit." },
        { question: 'Can I combine Uhud with Quba Mosque in one Ziyarat tour?', answer: "Yes. Masjid Quba is south of the Prophet's Mosque while Mount Uhud is north — combining both in a half-day Ziyarat tour requires passing through Markaziah. This is the standard half-day Ziyarat tour sequence and takes approximately 3–4 hours total including transit." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Mount Uhud</span>
                </div>
            </div>

            <section className="bg-stone-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">North Madinah · Battle of Uhud Site</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Mount Uhud Taxi — Jabal Uhud &amp; Martyrs&apos; Cemetery Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Mount Uhud (Jabal Uhud)</strong> — site of the Battle of Uhud in 625 CE and the resting place of 70 Companions including Sayyiduna Hamza RA. 15 minutes north of the Prophet&apos;s Mosque. Fixed rate from all Madinah hotels.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Mount%20Uhud%20in%20Madinah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Uhud Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">625 CE</div><div className="text-sm text-gray-600">Battle of Uhud</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">70</div><div className="text-sm text-gray-600">Martyrs Buried Here</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">15 min</div><div className="text-sm text-gray-600">from Prophet&apos;s Mosque</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">7 km</div><div className="text-sm text-gray-600">North of Markaziah</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Mount Uhud — What to Visit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Martyrs' Cemetery (Shuhada Uhud)", desc: "The burial ground of the 70 Companions martyred in the Battle of Uhud, including the Prophet's uncle Hamza ibn Abdul-Muttalib RA. A deeply moving site visited by nearly every Madinah pilgrim." },
                            { title: "Jabal Ar-Rumat (Archers' Hill)", desc: "The small hill where the Prophet ﷺ stationed 50 archers during the battle. A critical tactical position whose abandonment by some archers led to the reversal of Muslim fortunes in the battle's second phase." },
                            { title: "Jabal Uhud Overview", desc: "The large red-rock mountain rising 1,077m at its peak — the Prophet ﷺ said 'Uhud loves us and we love Uhud.' The entire mountain carries spiritual significance for Muslims worldwide." },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-stone-500 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mount Uhud Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-stone-600 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-stone-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Mount Uhud Transfer</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel and preferred time — fixed-rate transfer to Jabal Uhud from anywhere in Madinah.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20to%20Mount%20Uhud%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Uhud Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah/quba" className="text-slate-600 hover:underline">← Quba</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">Madinah Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah/med-airport" className="text-slate-600 hover:underline">MED Airport →</Link>
            </div>
        </div>
    );
}
