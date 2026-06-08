import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/makkah/masjid-al-haram' },
    title: 'Masjid Al-Haram Taxi Makkah | Haram Hotel Drop-Off & Transport Guide',
    description: 'Private taxi to and from Masjid Al-Haram in Makkah. Hotel drop-off logistics, Haram access zones, closest drop-off points, and Hajj/Umrah transport. Fixed rates, 24/7.',
    keywords: ['Masjid Al-Haram taxi', 'Haram taxi Makkah', 'taxi near Grand Mosque Makkah', 'hotel to Haram transfer', 'Makkah Haram transport', 'Clock Tower taxi Makkah'],
    openGraph: {
        title: 'Masjid Al-Haram Taxi — Hotel Drop-Off & Haram Access Transport',
        description: 'Fixed-rate private taxi to Masjid Al-Haram — closest legal drop-off for every Markaziah hotel zone. Hajj permits included.',
        url: 'https://haramtaxiservice.com/locations/makkah/masjid-al-haram',
        type: 'website',
    },
};

export default function MasjidAlHaramPage() {
    const faqs = [
        { question: 'How close can a taxi drop me to Masjid Al-Haram?', answer: "Private vehicles cannot enter the immediate pedestrian zone surrounding Masjid Al-Haram. The closest legal drop-off points are: the Ajyad area (south gate side), the Kudai drop zone (for pilgrims heading to the Shamiyah and Marwa side entrances), and specific hotel vehicle bays for inner Markaziah hotels. Our drivers know the optimal drop-off for your specific hotel — minimising your walk even with heavy luggage." },
        { question: 'What are the Masjid Al-Haram entrance gates?', answer: "Masjid Al-Haram has over 90 gates numbered in sequence. Key gates for orientation: Bab Al-Salam (Gate 1, northwest) is the traditional Sunnah entry gate. Bab Al-Umrah (Gate 79, northwest) is a major western entrance. Bab Malik Fahd and Bab Abdulaziz are the large modern northern gates. Bab Ibrahim is the closest gate to the Marwa finishing point of Sa\'i. Your hotel's front desk can advise which gate is closest to your specific accommodation." },
        { question: 'Can I get a taxi at 2am for Tahajjud or Fajr at the Haram?', answer: "Yes — we are available 24/7 including late night and pre-Fajr times. Many pilgrims pre-schedule their Tahajjud pickups the evening before. Share your hotel, pickup time, and return time via WhatsApp — we confirm your driver details." },
        { question: 'What is the Kaaba and why does everyone circle it?', answer: "The Kaaba (meaning 'cube' in Arabic) is a cubic structure at the centre of Masjid Al-Haram — the most sacred site in Islam. Muslims worldwide face the Kaaba in prayer. Tawaf (circumambulation) — circling the Kaaba seven times counterclockwise — is a core ritual of both Hajj and Umrah. The Kaaba is believed to have been originally built by the Prophet Ibrahim (Abraham) AS and his son Ismail AS, and rebuilt several times throughout history." },
        { question: 'What is Zamzam water and where does it come from?', answer: "Zamzam is a sacred spring well located approximately 21 metres east of the Kaaba inside Masjid Al-Haram. According to Islamic tradition, it miraculously sprang beneath the feet of Ismail AS when his mother Hajar searched for water in the valley. The well has supplied water continuously for thousands of years. Zamzam water stations are distributed throughout the Haram — pilgrims drink it during Tawaf and Sa\'i. It is also available to take home in sealed containers purchased in Makkah." },
    ];

    const hararZones = [
        { zone: 'Inner Markaziah Hotels', examples: 'Hilton, Pullman Zamzam, Fairmont Clock Tower', walk: '2–5 min to nearest gate', access: 'Vehicle bays only — no street access' },
        { zone: 'Mid Markaziah (300–700m)', examples: 'Mövenpick, Marriott, Dar Al Tawhid', walk: '7–12 min to nearest gate', access: 'Direct street access in most cases' },
        { zone: 'Ajyad & Misfalah', examples: 'Various mid-range hotels', walk: '12–20 min to nearest gate', access: 'Taxi drop at Ajyad zone' },
        { zone: 'Aziziyah / Shisha', examples: 'Outer district hotels', walk: 'Taxi to Haram recommended', access: 'Taxi to Haram drop zone' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/makkah">Makkah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Masjid Al-Haram</span>
                </div>
            </div>

            <section className="bg-emerald-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Makkah City Centre · The Grand Mosque</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Masjid Al-Haram Taxi — Haram Hotel Transport & Drop-Off Guide</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi to and from <strong>Masjid Al-Haram</strong> — the world&apos;s largest mosque and holiest site in Islam. We know the closest legal vehicle drop-off for every hotel in the Markaziah zone. 24/7, fixed rate.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Masjid%20Al-Haram%20in%20Makkah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Haram Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">90+</div><div className="text-sm text-gray-600">Haram Gates</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">24/7</div><div className="text-sm text-gray-600">Service Available</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">5 min</div><div className="text-sm text-gray-600">Closest Inner Hotel Walk</div></div>
                        <div><div className="text-3xl font-bold text-emerald-700 mb-1">Fixed</div><div className="text-sm text-gray-600">Rate — No Surge</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Haram Hotel Zones — Transport Guide</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-50 rounded-xl overflow-hidden shadow-sm text-sm">
                            <thead className="bg-emerald-800 text-white">
                                <tr>
                                    <th className="px-5 py-4 text-left font-semibold">Zone</th>
                                    <th className="px-5 py-4 text-left font-semibold">Example Hotels</th>
                                    <th className="px-5 py-4 text-left font-semibold">Walk to Gate</th>
                                    <th className="px-5 py-4 text-left font-semibold">Vehicle Access</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {hararZones.map((z, i) => (
                                    <tr key={i} className="bg-white hover:bg-emerald-50">
                                        <td className="px-5 py-4 font-semibold text-gray-900">{z.zone}</td>
                                        <td className="px-5 py-4 text-gray-600">{z.examples}</td>
                                        <td className="px-5 py-4 font-bold text-emerald-700">{z.walk}</td>
                                        <td className="px-5 py-4 text-gray-500 text-xs">{z.access}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Grand Mosque — Key Facts for Pilgrims</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Tawaf — Circling the Kaaba', desc: 'Tawaf is the act of circumambulating the Kaaba seven times counterclockwise, beginning and ending at the Black Stone (Al-Hajar Al-Aswad). Obligatory for Umrah and Hajj. The ground floor (Mataf) is closest; upper levels are available for elderly and disabled pilgrims.' },
                            { title: "Sa'i — Walking Safa to Marwa", desc: "Sa'i is walking seven times between the hills of Safa and Marwa (now enclosed within the Mas'a gallery within the Haram). It commemorates Hajar's search for water for Ismail AS. Sa'i follows Tawaf in both Umrah and Hajj. Duration varies from 30 minutes to 2+ hours depending on crowd levels." },
                            { title: 'Zamzam & Prayer Facilities', desc: 'Zamzam water stations are distributed throughout the Haram. Prayer areas are designated for men and women on multiple levels. The Rawdah area (near Kaaba) during Umrah vs the broader prayer halls for daily Salah — the mosque accommodates 2 million+ simultaneously during Hajj peak.' },
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Haram Transport FAQ</h2>
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

            <section className="py-16 bg-emerald-800 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Haram Hotel Transport</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel name and required times — fixed rate confirmed instantly.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20hotel%20to%20Haram%20transport%20in%20Makkah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Haram Transfer
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/makkah" className="text-slate-600 hover:underline">← Back to Makkah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/makkah/mina" className="text-slate-600 hover:underline">Mina Tent City →</Link>
            </div>
        </div>
    );
}
