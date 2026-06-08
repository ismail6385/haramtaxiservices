import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/al-balad' },
    title: 'Al Balad Jeddah Taxi | UNESCO Historic Jeddah City Tour 2026',
    description: 'Private taxi for Al Balad (Historic Jeddah). UNESCO World Heritage coral houses, Naseef House, Al-Shafi\'i Mosque & old souq. Half-day and full-day city tours — fixed rate.',
    keywords: ['Al Balad taxi Jeddah', 'Historic Jeddah taxi', 'Al Balad city tour', 'UNESCO Jeddah taxi', 'Naseef House Jeddah taxi', 'Al Balad tour car', 'Jeddah old town taxi'],
    openGraph: {
        title: 'Al Balad Jeddah Taxi | UNESCO Historic Jeddah City Tour',
        description: 'Private taxi for Al Balad UNESCO Heritage district. Fixed-rate half-day and full-day tours of Historic Jeddah. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/jeddah/al-balad',
        type: 'website',
    },
};

export default function AlBaladJeddahPage() {
    const landmarks = [
        { name: 'Naseef House Museum', desc: 'Historic merchant palace — 19th-century coral architecture', time: '20 min' },
        { name: "Al-Shafi'i Mosque", desc: "Jeddah's oldest mosque — Hejazi minaret and coral construction", time: '5 min walk' },
        { name: 'Al Alawi Mosque', desc: 'Distinctive cylindrical minaret — classic Hejaz design', time: '5 min walk' },
        { name: 'Al Balad Souq', desc: 'Fragrant spice, fabric, and craft market in the old city', time: '10 min walk' },
        { name: 'Bab Makkah', desc: 'Historic gate — entrance to the old city from the Makkah road', time: '15 min walk' },
        { name: 'Sharbatly House', desc: 'Restored coral mansion — elegant rowshan-window facade', time: '15 min walk' },
    ];

    const faqs = [
        { question: 'How far is Al Balad from KAIA Jeddah Airport?', answer: 'Al Balad (Historic Jeddah) is approximately 20km from King Abdulaziz International Airport — a 20–25 minute drive. From Jeddah Corniche hotels it is a 10-minute drive.' },
        { question: 'Can I visit Al Balad by taxi without a tour guide?', answer: 'Yes. We drop you at the Bab Makkah or Bab Sharif entrance, and you explore at your own pace. The district is a UNESCO World Heritage Site with good walking routes. Your driver can wait at a designated spot or you can call when ready to leave.' },
        { question: 'What are the opening hours for Al Balad?', answer: 'Al Balad is open-air and accessible at any time. Some museums (like Naseef House) have limited opening hours. The best experience is early morning (7–10am) or late afternoon (4–7pm) when light is best and crowds are lighter. Evenings on weekends are lively.' },
        { question: 'Is Al Balad safe to visit?', answer: 'Yes. Al Balad has been restored and secured as a heritage zone. It is a popular tourism destination with regular visitors. Normal urban precautions apply — keep valuables secure in the crowded souq area.' },
        { question: 'Can I do Al Balad and Corniche in the same day?', answer: 'Absolutely. A standard half-day Jeddah city tour often combines Al Balad (2–3 hours) with the Corniche and King Fahd Fountain — all within 10km of each other. Ask us for a custom fixed-rate day tour via WhatsApp.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Al Balad (Historic Jeddah)</span>
                </div>
            </div>

            <section className="bg-amber-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">UNESCO World Heritage Site · Jeddah</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Al Balad Taxi — Historic Jeddah City Tour</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Private taxi for <strong>Al Balad (Historic Jeddah)</strong> — the UNESCO-listed district of 700-year-old coral merchant houses, Hejazi rowshan windows, ancient mosques, and the old spice souq. Fixed-rate half-day and full-day tours.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20want%20to%20book%20an%20Al%20Balad%20city%20tour%20in%20Jeddah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Al Balad Tour
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-amber-50 border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">UNESCO</div><div className="text-sm text-gray-600">World Heritage Site</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">700+</div><div className="text-sm text-gray-600">Years of History</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">20 min</div><div className="text-sm text-gray-600">from KAIA Airport</div></div>
                        <div><div className="text-3xl font-bold text-amber-700 mb-1">2–4 hrs</div><div className="text-sm text-gray-600">Recommended Tour Time</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Balad Landmarks — Taxi Drop-Off Points</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {landmarks.map((lm, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <MapPin className="w-6 h-6 text-amber-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-1">{lm.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{lm.desc}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-400"><Clock className="w-3 h-3" />{lm.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tour Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Al Balad Drop &amp; Explore</h3>
                            <p className="text-gray-600 mb-4">Transfer from your hotel or KAIA airport to the Al Balad entrance. Driver waits at a designated point while you explore at your own pace. WhatsApp the driver when done.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />Fixed transfer rate</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />Driver waits up to 3 hours</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />Return to hotel included</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Full Jeddah City Day Tour</h3>
                            <p className="text-gray-600 mb-4">Al Balad + Corniche + King Fahd Fountain + any other stop you choose. Full-day private driver from 9am to 5pm with flexible itinerary.</p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />Custom itinerary</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />All-day fixed rate</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />No wait limits — driver is yours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Al Balad Taxi FAQ</h2>
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

            <section className="py-16 bg-amber-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your Al Balad City Tour</h2>
                    <p className="mb-8 opacity-90">WhatsApp us your hotel, preferred dates, and group size — fixed-rate tour confirmation in minutes.</p>
                    <a href="https://wa.me/966575806733?text=I%20want%20to%20book%20an%20Al%20Balad%20Jeddah%20city%20tour" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Al Balad Tour
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">← Back to Jeddah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/jeddah/corniche" className="text-slate-600 hover:underline">Jeddah Corniche →</Link>
            </div>
        </div>
    );
}
