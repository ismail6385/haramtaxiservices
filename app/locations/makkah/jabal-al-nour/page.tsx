import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/jabal-al-nour' },
    title: 'Jabal Al-Nour Taxi Makkah | Cave of Hira (Ghar Hira) Transport Guide',
    description: 'Private taxi to Jabal Al-Nour (Mountain of Light) and Cave of Hira (Ghar Hira) in Makkah — where the first Quranic revelation was revealed to Prophet Muhammad ﷺ. 5km from Haram. Fixed rate.',
    keywords: ['Jabal Al-Nour taxi', 'Cave of Hira taxi Makkah', 'Ghar Hira transport', 'Mountain of Light Makkah taxi', 'Makkah Ziyarat taxi', 'first revelation site Makkah'],
    openGraph: {
        title: 'Jabal Al-Nour Taxi — Cave of Hira Transport from Makkah',
        description: 'Private taxi to Jabal Al-Nour and Ghar Hira — site of the first Quranic revelation. 5km north of Masjid Al-Haram. Fixed rate.',
        url: 'https://haramtaxiservice.com/locations/makkah/jabal-al-nour',
        type: 'website',
    },
};

export default function JabalAlNourPage() {
    const faqs = [
        { question: 'What is Jabal Al-Nour and why is it important?', answer: "Jabal Al-Nour — the Mountain of Light — is a rocky mountain approximately 5km north of Masjid Al-Haram in Makkah. It contains the Cave of Hira (Ghar Hira) — the site where the first verses of the Quran were revealed to the Prophet Muhammad ﷺ by the Angel Jibreel (Gabriel AS) around 610 CE / 13 BH. The Prophet ﷺ would regularly retreat to Ghar Hira for spiritual reflection before receiving revelation. For Muslims worldwide, Jabal Al-Nour represents the origin point of the final divine revelation to humanity." },
        { question: 'How high is Jabal Al-Nour and how long does the climb take?', answer: "Jabal Al-Nour is approximately 642 metres above sea level (about 270 metres above the surrounding area). The climb involves approximately 1,100–1,200 steps on a well-maintained staircase path. In good physical condition, the ascent takes 40–60 minutes and the descent 30–45 minutes. The path is fully paved and has railings. Elderly visitors or those with mobility limitations may find the climb challenging. The cave itself is near the summit — small and can only accommodate 4–5 visitors at a time." },
        { question: 'What is the Cave of Hira (Ghar Hira)?', answer: "Ghar Hira is a small cave at the summit of Jabal Al-Nour — approximately 4 metres long and 1.7 metres wide. It is where the Prophet Muhammad ﷺ would seclude himself for meditation and worship during the month of Ramadan in particular. In approximately 610 CE, during one such retreat, the Angel Jibreel AS appeared and commanded: 'Iqra!' (Read/Recite!) — and the first five verses of Surah Al-Alaq were revealed. This event marks the beginning of the Quranic revelation and the prophethood of Muhammad ﷺ." },
        { question: 'What is Jabal Thawr and how is it different from Jabal Al-Nour?', answer: "Jabal Thawr is a different mountain approximately 4km south of Makkah. The Cave of Thawr (Ghar Thawr) is where the Prophet ﷺ and his companion Abu Bakr Al-Siddiq RA hid for three days during the Hijrah (migration to Madinah) in 622 CE. While Jabal Al-Nour is associated with the beginning of revelation (prophethood), Jabal Thawr is associated with the beginning of the Islamic state (the Hijrah). Both sites are included in a full Makkah Ziyarat tour." },
        { question: 'How do I get a taxi to Jabal Al-Nour from my Makkah hotel?', answer: "Jabal Al-Nour is approximately 5km north of Masjid Al-Haram — a 10–15 minute taxi drive from Markaziah hotels, or 15–25 minutes from Aziziyah. We pick up from your hotel and drop you at the base of the mountain. The driver waits while you climb (typically 2–3 hours for the round trip including time at the summit) and returns you to your hotel. WhatsApp us your hotel name, group size, and preferred morning time." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Jabal Al-Nour</span>
                </div>
            </div>

            <section className="bg-stone-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">5km North of Haram · Mountain of Light</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Jabal Al-Nour Taxi — Cave of Hira Transport from Makkah</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to <strong>Jabal Al-Nour (Mountain of Light)</strong> — home of <strong>Ghar Hira (Cave of Hira)</strong> where the first Quranic revelation descended upon the Prophet Muhammad ﷺ in 610 CE. 5km north of Masjid Al-Haram. Driver waits at the mountain base.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Jabal%20Al-Nour%20in%20Makkah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Jabal Al-Nour Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-stone-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">5 km</div><div className="text-sm text-gray-600">From Masjid Al-Haram</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">1,200</div><div className="text-sm text-gray-600">Steps to Summit</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">610 CE</div><div className="text-sm text-gray-600">First Revelation</div></div>
                        <div><div className="text-3xl font-bold text-stone-700 mb-1">2–3 hrs</div><div className="text-sm text-gray-600">Round Trip Climb</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The First Revelation — Historical Context</h2>
                    <div className="max-w-4xl mx-auto prose prose-gray">
                        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">In approximately 610 CE — around the 17th night of Ramadan — the Prophet Muhammad ﷺ was in seclusion (I&apos;tikaf) in the Cave of Hira when the Angel Jibreel AS appeared and embraced him three times, saying: <em>&quot;Iqra!&quot; (Read/Recite!)</em></p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">The Prophet ﷺ, who had not been taught to read, replied: <em>&quot;I cannot read.&quot;</em> After the third embrace, Jibreel AS recited the first words of the divine revelation:</p>
                            <blockquote className="border-l-4 border-stone-400 pl-6 text-gray-800 font-medium text-lg my-6 italic">
                                &quot;Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous — who taught by the pen — taught man that which he knew not.&quot;<br/>
                                <span className="text-sm not-italic text-gray-500">— Surah Al-Alaq, 96:1–5 (First verses revealed)</span>
                            </blockquote>
                            <p className="text-lg text-gray-700 leading-relaxed">The Prophet ﷺ descended from the mountain trembling and returned to his wife Khadijah RA, who comforted him and brought him to her cousin Waraqah ibn Nawfal — a scholar of the earlier scriptures — who recognised the event as prophethood. The Quranic revelation continued for 23 years.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practical Guide to Visiting Jabal Al-Nour</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">The Climb</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />Approximately 1,100–1,200 paved steps with railings — challenging but manageable for moderately fit adults</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />Ascent: 40–60 minutes. Descent: 30–45 minutes. Allow 2–3 hours total including time at the cave.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />Bring water — the climb is physically demanding, especially in summer (40°C+). Visit before 9am to avoid peak heat.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />Comfortable closed-toe shoes strongly recommended. The path is rocky near the top.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">At the Cave</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />The cave is small — approximately 4m long, 1.7m wide. Queuing is usually required during Hajj and Umrah peak times.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />There is no specific prayer or ritual prescribed at Ghar Hira. Many pilgrims make Du&apos;a and recite Surah Al-Alaq.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />The view from the summit looks north over modern Makkah. The Abraj Al-Bait Clock Tower is visible to the south.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />Best time to visit: early morning (6–9am) before the heat and before tour groups arrive.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Makkah Ziyarat Sites — Combined Tours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { site: 'Jabal Al-Nour (Cave of Hira)', dist: '5km north of Haram', note: 'First revelation — start of Quran' },
                            { site: 'Jabal Thawr (Cave of Thawr)', dist: '4km south of Makkah', note: 'Hijrah hiding place — 622 CE' },
                            { site: 'Plain of Arafat', dist: '14km east of Makkah', note: 'Wuquf — pillar of Hajj' },
                            { site: 'Mina Tent City', dist: '5km east of Haram', note: 'Jamarat stoning — Hajj Days 10–13' },
                            { site: 'Muzdalifah', dist: '9km east of Makkah', note: 'Overnight Hajj site — collect pebbles' },
                            { site: 'Jannat Al-Mualla', dist: '0.5km from Haram', note: 'Cemetery — Khadijah RA buried here' },
                        ].map((s, i) => (
                            <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-stone-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">{s.site}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{s.dist}</div>
                                    <div className="text-xs text-stone-600 mt-0.5 font-medium">{s.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/services/makkah-ziyarat">
                            <Button variant="outline" className="border-stone-700 text-stone-700 hover:bg-stone-700 hover:text-white">
                                View Full Makkah Ziyarat Tour
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jabal Al-Nour FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-stone-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-stone-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Jabal Al-Nour Taxi</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel and preferred morning departure — driver waits at the mountain base.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20to%20Jabal%20Al-Nour%20Cave%20of%20Hira%20from%20Makkah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Jabal Al-Nour Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah/arafat" className="text-slate-600 hover:underline">← Arafat</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah/aziziyah" className="text-slate-600 hover:underline">Aziziyah →</Link>
            </div>
        </div>
    );
}
