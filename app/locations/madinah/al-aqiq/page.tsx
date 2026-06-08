import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/al-aqiq' },
    title: 'Al-Aqiq Miqat Taxi Madinah | Dhul Hulayfah (Abyar Ali) Ihram Transfer',
    description: "Private taxi to Miqat Dhul Hulayfah (Abyar Ali / Bir Ali) — where pilgrims from Madinah enter Ihram before Umrah or Hajj. 10 minutes from Markaziah. Fixed rate.",
    keywords: ['Miqat Madinah taxi', 'Dhul Hulayfah taxi', 'Abyar Ali taxi Madinah', 'Bir Ali Madinah taxi', 'Ihram Miqat Madinah taxi', 'Al-Aqiq Madinah'],
    openGraph: {
        title: 'Miqat Dhul Hulayfah Taxi — Ihram Entry Point from Madinah',
        description: "Fixed-rate taxi to Miqat Dhul Hulayfah (Abyar Ali) from all Madinah hotels. Where Madinah-route pilgrims enter Ihram for Umrah and Hajj.",
        url: 'https://haramtaxiservice.com/locations/madinah/al-aqiq',
        type: 'website',
    },
};

export default function AlAqiqPage() {
    const faqs = [
        { question: 'What is Miqat Dhul Hulayfah?', answer: "Dhul Hulayfah (also called Abyar Ali or Bir Ali) is the Miqat — the designated boundary — for pilgrims travelling to Makkah from the direction of Madinah. It is located approximately 7–9km southwest of Masjid Al-Nabawi, on the road toward Makkah. This is where pilgrims who have been in Madinah must enter Ihram (the state of ritual purity and dedication) before proceeding to Makkah for Umrah or Hajj. The Miqat of Dhul Hulayfah is the furthest Miqat from Makkah of all five designated boundaries — approximately 450km." },
        { question: 'What is Masjid Al-Shajarah at Dhul Hulayfah?', answer: "Masjid Al-Shajarah (the Mosque of the Tree) is a large mosque at the Miqat of Dhul Hulayfah where pilgrims make the intention for Ihram and pray two Rak'ah Sunnah before assuming the state of Ihram and proceeding to Makkah. The mosque is large and well-facilitated with separate areas for men and women, changing rooms, and ablution facilities." },
        { question: 'Can I do Ghusl and change into Ihram at Dhul Hulayfah?', answer: "Yes. Masjid Al-Shajarah at Dhul Hulayfah has full facilities for Ghusl (ritual bath), Ihram changing rooms, and all necessary services. It is the most complete Miqat facility in Saudi Arabia given its role as the Madinah-route Miqat serving millions of pilgrims annually." },
        { question: 'How do I get to Dhul Hulayfah Miqat from my Madinah hotel?', answer: "Dhul Hulayfah (Abyar Ali) is approximately 7–9km from Markaziah Madinah — a 10-minute taxi drive. We drop you at the Miqat mosque entrance and wait while you complete Ihram procedures, then continue to Makkah — approximately 4.5 hours from the Miqat. Alternatively, if you prefer to enter Ihram at the Miqat on your own schedule, we offer the Miqat stop as part of any Madinah-to-Makkah transfer." },
        { question: 'What is Wadi Al-Aqiq?', answer: "Wadi Al-Aqiq is the valley area between Madinah and the Miqat of Dhul Hulayfah — mentioned by name by the Prophet ﷺ as a blessed valley. The Miqat of Dhul Hulayfah is located at the far end of this valley. The area has deep historical and spiritual significance for pilgrims approaching Makkah from Madinah." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al-Aqiq / Miqat</span>
                </div>
            </div>

            <section className="bg-amber-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Miqat of Dhul Hulayfah · West Madinah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al-Aqiq Miqat Taxi — Dhul Hulayfah Ihram Transfer</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Miqat Dhul Hulayfah (Abyar Ali / Bir Ali)</strong> — where Madinah-route pilgrims enter Ihram before proceeding to Makkah for Umrah or Hajj. 10 minutes from Markaziah. Your driver waits while you complete Ihram, then continues to Makkah.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Miqat%20Dhul%20Hulayfah%20in%20Madinah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Miqat Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How the Miqat Transfer Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', title: 'Hotel to Miqat', desc: 'Taxi from your Markaziah hotel to Masjid Al-Shajarah at Dhul Hulayfah — approximately 10 minutes. Driver drops you at the entrance.' },
                            { step: '2', title: 'Ihram at the Miqat', desc: 'Perform Ghusl, change into Ihram, pray two Rak\'ah, and make your intention (Niyyah) for Umrah or Hajj at the mosque. Full facilities available.' },
                            { step: '3', title: 'Continue to Makkah', desc: 'Driver resumes after you complete Ihram procedures and drives you directly to Makkah — approximately 4.5 hours via the Hijrah Highway.' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-amber-700">{s.step}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Five Mawaqit of Hajj</h2>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">The Miqat (plural: Mawaqit) are the five designated boundaries around Makkah where pilgrims from each direction must enter Ihram before proceeding to the Haram.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'Dhul Hulayfah (Abyar Ali)', dir: 'From Madinah direction', dist: '450km from Makkah' },
                            { name: 'Al-Juhfah (Rabigh)', dir: 'From Syria / North direction', dist: '187km from Makkah' },
                            { name: 'Qarn Al-Manazil (As-Sail)', dir: 'From Najd / East direction', dist: '94km from Makkah' },
                            { name: 'Yalamlam (As-Sa\'diyya)', dir: 'From Yemen / South direction', dist: '92km from Makkah' },
                            { name: 'Dhat Irq', dir: 'From Iraq / Northeast direction', dist: '94km from Makkah' },
                        ].map((m, i) => (
                            <div key={i} className={`p-5 rounded-xl border-2 ${i === 0 ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                                <div className={`font-bold mb-1 ${i === 0 ? 'text-amber-800' : 'text-gray-900'}`}>{m.name} {i === 0 && <span className="text-xs font-normal bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full ml-1">Your Miqat</span>}</div>
                                <div className="text-sm text-gray-600">{m.dir}</div>
                                <div className="text-xs text-gray-400">{m.dist}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Miqat Transfer FAQ</h2>
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

            <section className="py-16 bg-amber-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Madinah to Makkah via Miqat</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel and departure time — we include the Miqat stop on your Madinah to Makkah transfer.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20Madinah%20to%20Makkah%20transfer%20with%20a%20Miqat%20Ihram%20stop" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Miqat + Makkah Transfer
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">← Back to Madinah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah/wadi-al-jinn" className="text-slate-600 hover:underline">Wadi Al-Jinn →</Link>
            </div>
        </div>
    );
}
