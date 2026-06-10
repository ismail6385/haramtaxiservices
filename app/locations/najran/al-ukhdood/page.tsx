import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/najran/al-ukhdood' },
    title: "Al-Ukhdood Taxi | Najran Quranic Archaeological Site — Sabaean Ruins Transfer",
    description: "Taxi to Al-Ukhdood from Najran — 5km, 5 minutes. Pre-Islamic Sabaean city, referenced in Surah Al-Burooj (Quran). Iron Age ruins, archaeological park. Fixed rate.",
    keywords: ["Al-Ukhdood taxi", "Ukhdood Najran taxi", "Najran archaeological site taxi", "Sabaean ruins Najran taxi", "People of the Trench Najran"],
    openGraph: {
        title: "Al-Ukhdood Taxi — Najran Quranic Archaeological Site Transfer",
        description: "Taxi to Al-Ukhdood, Najran. Quranic pre-Islamic ruins. 5km. Fixed rate.",
        url: 'https://haramtaxiservice.com/locations/najran/al-ukhdood',
        type: 'website',
    },
};

const faqs = [
    { question: "What is Al-Ukhdood?", answer: "Al-Ukhdood (Arabic: الأخدود — 'the trench') is a pre-Islamic archaeological site in Najran city — the location referenced in Surah Al-Burooj of the Quran as the site of the Aṣḥāb al-Ukhdūd (People of the Trench). The site has Iron Age foundations from Sabaean and Himyarite occupation of the Najran valley, with excavated city blocks, ancient walls, and artefacts spanning from approximately the 1st millennium BCE to the 6th century CE." },
    { question: "What is the Quranic significance of Al-Ukhdood?", answer: "Surah Al-Burooj (Chapter 85) of the Quran begins with the oath of the sky and its constellations, then references the 'Aṣḥāb al-Ukhdūd' — those who dug a trench and burned believers in it. Islamic tradition identifies this event with the persecution of Christians in Najran by the Himyarite king Yusuf Dhu Nuwas in approximately 523 CE. The site in Najran is identified by Muslim scholars as the location of this event." },
    { question: "How far is Al-Ukhdood from Najran city?", answer: "Al-Ukhdood is approximately 5km from Najran city centre — about 5 minutes by taxi. It is one of the closest heritage attractions to the Najran hotel zone, making it a convenient first stop on any Najran heritage visit." },
    { question: "What can I see at Al-Ukhdood?", answer: "The Al-Ukhdood Archaeological Park has excavated city ruins: stone-built walls and structures from the Sabaean/Himyarite period, ancient inscriptions in South Arabian script carved into rock faces, a cistern system, and artefacts displayed in the on-site visitor area. The site has been excavated by Saudi and international archaeological teams since the 1970s, with significant finds now in the Najran Regional Museum." },
    { question: "Do I need to pre-book entry to Al-Ukhdood?", answer: "Al-Ukhdood has an entry fee and opening hours managed by the Saudi Heritage Commission. Ticket booking may be available through the Nusuk or relevant heritage app — confirm current booking requirements before visiting. The site is typically open mornings and evenings, closed during afternoon heat. A taxi drop-and-pickup arrangement allows you to visit independently." },
];

export default function AlUkhdoodPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/najran">Najran</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Ukhdood</span>
                </div>
            </div>

            <section className="bg-rose-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Al-Ukhdood · Quranic Site · Sabaean Ruins · Pre-Islamic · 5km from Najran</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Ukhdood Taxi — Najran Quranic Archaeological Site Transfer</h1>
                        <p className="text-xl text-rose-100 mb-8 font-light">
                            Taxi from <strong>Najran to Al-Ukhdood</strong> — 5km, 5 minutes. <strong>Pre-Islamic Sabaean city referenced in Surah Al-Burooj</strong> of the Quran. Iron Age ruins, ancient inscriptions, archaeological park. Fixed rate.
                        </p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Najran%20to%20Al-Ukhdood%20archaeological%20site" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al-Ukhdood Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-rose-50 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">5 km</div><div className="text-sm text-gray-600">from Najran city</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">Quran</div><div className="text-sm text-gray-600">Surah Al-Burooj (Ch. 85)</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">Sabaean</div><div className="text-sm text-gray-600">Iron Age Civilization</div></div>
                        <div><div className="text-3xl font-bold text-rose-800 mb-1">1st BCE</div><div className="text-sm text-gray-600">Archaeological Period</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Al-Ukhdood — History &amp; What to See</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'The Quranic Connection', desc: "Surah Al-Burooj (Chapter 85) of the Quran references the 'Aṣḥāb al-Ukhdūd' — a people who persecuted believers by burning them in a trench. Islamic tradition identifies this with the Himyarite king Yusuf Dhu Nuwas who massacred the Christian community of Najran in approximately 523 CE. This event — one of the most widely known episodes in pre-Islamic Arabian history — is directly connected to this site.", note: 'Surah Al-Burooj: ayat 4–8.' },
                            { title: 'The Sabaean City', desc: "Al-Ukhdood was a Sabaean settlement in the Najran valley — part of the South Arabian civilisation that controlled the northern ends of the incense and trade routes. The excavated city blocks show stone-built residential and administrative structures, a planned urban layout, and inscriptions in Musnad script (the monumental script of South Arabian civilisations). Najran was a significant trading junction on the route from Yemen northward to the Hejaz and Mesopotamia.", note: 'Saudi-international archaeological excavations ongoing.' },
                            { title: 'The Archaeological Park', desc: "The Al-Ukhdood site is developed as a heritage park — with excavated ruins, protective shelters over key finds, rock-face inscriptions with interpretation panels, and a visitor pathway. The ancient inscriptions in South Arabian script carved directly into the sandstone cliff faces alongside the ruins are among the most accessible pre-Islamic inscriptions in Saudi Arabia.", note: 'Visitor pathway: approx 45 minutes for full circuit.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{s.desc}</p>
                                <p className="text-xs text-rose-800 font-medium border-t border-rose-200 pt-3">{s.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al-Ukhdood Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border-0">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-rose-800 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-14 bg-rose-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Al-Ukhdood Taxi</h2>
                    <p className="mb-8 opacity-90">5km from Najran — Quranic site, Sabaean ruins, archaeological park. Fixed rate.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20Najran%20to%20Al-Ukhdood%20archaeological%20site" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al-Ukhdood Taxi
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/najran" className="text-red-700 hover:underline">← Back to Najran Hub</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/najran/emara-palace" className="text-red-700 hover:underline">Emara Palace →</Link>
            </div>
        </div>
    );
}
