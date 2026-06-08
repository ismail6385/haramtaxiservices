import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/madinah/markaziah' },
    title: "Markaziah Madinah Taxi | Prophet's Mosque Hotels & Central Zone Transfer",
    description: "Private taxi in Markaziah — Madinah's central hotel zone around Masjid Al-Nabawi. Airport transfers, Ziyarat pickups, Makkah connections. All Markaziah hotels served. Fixed rate.",
    keywords: ["Markaziah Madinah taxi", "Prophet's Mosque hotel taxi", "Madinah central hotel taxi", "Masjid Nabawi taxi", "Markaziah hotel transfer", "Madinah Haram hotel taxi"],
    openGraph: {
        title: "Markaziah Madinah Taxi | Prophet's Mosque Central Zone",
        description: "Reliable taxi in Markaziah, Madinah's central hotel district around Masjid Al-Nabawi. MED airport, Ziyarat tours, Makkah intercity. Fixed rates.",
        url: 'https://haramtaxiservice.com/locations/madinah/markaziah',
        type: 'website',
    },
};

export default function MarkaziahPage() {
    const hotels = [
        { name: 'Pullman Zamzam Madinah', ring: 'Inner Ring — faces Haram plaza' },
        { name: 'Hilton Madinah', ring: 'Inner Ring — direct Haram view' },
        { name: 'Dar Al Taqwa Hotel', ring: 'Inner Ring — near Bab Al-Salam' },
        { name: 'Marriott Madinah', ring: 'Mid Ring — 400m from Haram' },
        { name: 'Mövenpick Hotel Madinah', ring: 'Mid Ring — 500m from Haram' },
        { name: 'Anwar Al Madinah Mövenpick', ring: 'Mid Ring — 300m from Haram' },
        { name: 'Taiba Hotel Madinah', ring: 'Mid Ring — Haramain station area' },
        { name: 'Al Shohada Hotel', ring: 'Outer Ring — Aziziah area' },
    ];

    const faqs = [
        { question: "How far is Markaziah from Madinah Airport (MED)?", answer: "Markaziah (the central Madinah hotel zone around Masjid Al-Nabawi) is approximately 17–20km from Prince Mohammad bin Abdulaziz Airport. The drive takes 20–30 minutes depending on traffic. Pre-booked meet & greet with flight tracking is available." },
        { question: "Can a taxi enter the Haram perimeter in Markaziah?", answer: "Taxis and private vehicles cannot enter the pedestrian precinct directly surrounding Masjid Al-Nabawi. Your driver drops you at the nearest permitted drop-off point — typically 100–300 metres from the mosque entrance — and you walk the short remaining distance. The same applies for pickup after Ziyarat." },
        { question: "How long does it take to get from a Markaziah hotel to Quba Mosque?", answer: "Quba Mosque is approximately 8–10km south of the Markaziah Haram area — a 10–15 minute drive. Many pilgrims include Quba in a half-day Ziyarat tour starting from their Markaziah hotel." },
        { question: "What is Jannat Al-Baqi and can a taxi take me there?", answer: "Jannat Al-Baqi is the main Islamic cemetery in Madinah, located immediately east of Masjid Al-Nabawi within the Markaziah zone. Many of the Prophet's family and Companions are buried here. It is within walking distance of the mosque — no taxi needed from Markaziah hotels. Our taxi can take you from outer Madinah areas to the Baqi entrance." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/madinah">Madinah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">Markaziah</span>
                </div>
            </div>

            <section className="bg-green-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Central Madinah · Masjid Al-Nabawi Zone</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">Markaziah Madinah Taxi — Prophet&apos;s Mosque Hotel Zone</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light"><strong>Markaziah</strong> is the central hotel district of Madinah, surrounding Masjid Al-Nabawi (the Prophet&apos;s Mosque ﷺ). We serve all Markaziah hotels — inner ring, mid-ring, and outer — with fixed-rate airport transfers, Ziyarat tour pickups, and Makkah intercity connections.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20from%20my%20Markaziah%20hotel%20in%20Madinah" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book Markaziah Taxi
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-green-50 border-b border-green-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-3xl font-bold text-green-800 mb-1">3 Rings</div><div className="text-sm text-gray-600">Inner, Mid &amp; Outer</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">50+</div><div className="text-sm text-gray-600">Hotels Served</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">20 min</div><div className="text-sm text-gray-600">from MED Airport</div></div>
                        <div><div className="text-3xl font-bold text-green-800 mb-1">24/7</div><div className="text-sm text-gray-600">Airport Service</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Markaziah Hotels We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {hotels.map((h, i) => (
                            <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <MapPin className="w-5 h-5 text-green-600 mb-2" />
                                <div className="font-bold text-gray-900 text-sm mb-1">{h.name}</div>
                                <div className="text-xs text-gray-500">{h.ring}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6">And all other Madinah hotels — simply provide your hotel name when booking.</p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Services from Markaziah Hotels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'MED Airport Pickup', desc: 'Meet & greet from Prince Mohammad bin Abdulaziz Airport (MED) — 20–30 min to your Markaziah hotel. Flight tracked, name board at arrivals, 24/7 including midnight arrivals.', time: '20–30 min' },
                            { title: 'Ziyarat Day Tours', desc: 'Half-day (Quba + Uhud + 2 sites) or full-day Ziyarat packages departing from your Markaziah hotel. Optimised visiting sequence, knowledgeable driver.', time: '3–6 hrs' },
                            { title: 'Madinah to Makkah', desc: 'Direct transfer to Makkah hotels via Hijrah Highway — 4.5 hours. All our Madinah–Makkah vehicles are Hajj-permitted for checkpoint entry.', time: '4.5 hrs' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    <div className="flex items-center gap-1 text-sm text-gray-400"><Clock className="w-3 h-3" />{s.time}</div>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Markaziah Taxi FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-green-700 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-green-900 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book from Your Markaziah Hotel</h2>
                    <p className="mb-8 opacity-90">WhatsApp your hotel name, destination, and travel date — fixed-rate confirmation in minutes.</p>
                    <a href="https://wa.me/966575806733?text=I%20need%20a%20taxi%20from%20my%20Markaziah%20hotel%20in%20Madinah" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book Now
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/madinah" className="text-slate-600 hover:underline">← Back to Madinah</Link>
                <span className="mx-3">·</span>
                <Link href="/locations/madinah/quba" className="text-slate-600 hover:underline">Quba District →</Link>
            </div>
        </div>
    );
}
