import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, ArrowRight, Plane, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: { canonical: 'https://haramtaxiservice.com/locations/jeddah/kaia-airport' },
    title: 'KAIA Airport Taxi Jeddah | King Abdulaziz International Airport Transfer 2026',
    description: 'Pre-booked KAIA airport taxi — Terminal 1 and Hajj Terminal. Fixed-rate transfers to Makkah (75 min), Madinah (4 hrs), and all Jeddah hotels. Hajj 2026 permitted.',
    keywords: ['KAIA airport taxi', 'Jeddah airport transfer', 'KAIA to Makkah taxi', 'King Abdulaziz airport taxi', 'Jeddah airport Makkah', 'Hajj terminal taxi Jeddah', 'KAIA T1 taxi'],
    openGraph: {
        title: 'KAIA Airport Taxi Jeddah — Fixed Fare to Makkah & Madinah',
        description: 'Meet & greet at KAIA Terminal 1 and Hajj Terminal. Fixed fares to Makkah, Madinah, Taif and Jeddah hotels. Hajj-permitted. 24/7.',
        url: 'https://haramtaxiservice.com/locations/jeddah/kaia-airport',
        type: 'website',
    },
};

export default function KaiaAirportPage() {
    const faqs = [
        { question: 'How do I find my driver at KAIA Terminal 1?', answer: 'Your driver waits at the arrivals exit with a name board showing your name. We share the driver\'s name, vehicle plate, and photo via WhatsApp before your flight lands. Flight tracking means the driver adjusts automatically if your flight is late.' },
        { question: 'How long is the drive from KAIA to Makkah hotels?', answer: 'Approximately 75–90 minutes via the Haramain Expressway. During peak Hajj or Umrah season add 15–30 minutes at checkpoints. All our KAIA vehicles hold Hajj Ministry permits for smooth checkpoint entry.' },
        { question: 'Do you serve the KAIA Hajj Terminal?', answer: 'Yes. The Hajj Terminal (South Terminal) operates seasonally for Hajj pilgrims. We serve all Hajj Terminal arrivals and departures with the same fixed pricing and Hajj-permit clearance as Terminal 1.' },
        { question: 'How much free waiting time is included?', answer: '60 minutes free waiting time from your scheduled arrival. After 60 minutes, a short wait fee applies if you are significantly delayed by immigration or baggage. We always confirm before charging anything extra.' },
        { question: 'Can you take me directly from KAIA to Madinah?', answer: 'Yes. KAIA to Madinah is a 4-hour, 415km direct transfer via the Hijrah Highway. This is a popular route for pilgrims starting Umrah in Madinah. We do not enter Makkah on this route.' },
    ];

    const destinations = [
        { dest: 'Makkah Hotels', time: '75–90 min', note: 'Hajj-permitted checkpoint entry' },
        { dest: 'Madinah', time: '4 hrs', note: 'Via Hijrah Highway direct' },
        { dest: 'Jeddah Al Balad', time: '20 min', note: 'UNESCO Historic Jeddah' },
        { dest: 'Jeddah Corniche Hotels', time: '25 min', note: 'Red Sea waterfront hotels' },
        { dest: 'North Jeddah / Obhur', time: '35 min', note: 'Compounds & beach resorts' },
        { dest: 'Taif', time: '3 hrs', note: 'Via mountain highway' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/">Home</Link><span className="mx-2">/</span>
                    <Link href="/locations">Locations</Link><span className="mx-2">/</span>
                    <Link href="/locations/jeddah">Jeddah</Link><span className="mx-2">/</span>
                    <span className="font-medium text-gray-900">KAIA Airport</span>
                </div>
            </div>

            <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                <span>Hajj 2026: KAIA Hajj Terminal transfers filling fast. <a href="https://wa.me/966575806733?text=I%20need%20a%20KAIA%20Hajj%20Terminal%20transfer%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer" className="underline">Book via WhatsApp.</a></span>
            </div>

            <section className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Plane className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">King Abdulaziz International Airport</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">KAIA Airport Taxi — Terminal 1 &amp; Hajj Terminal</h1>
                        <p className="text-xl text-gray-200 mb-8 font-light">Pre-booked, fixed-rate taxi from <strong>King Abdulaziz International Airport (KAIA)</strong> Jeddah to Makkah, Madinah, Taif, and all Jeddah hotels. Meet &amp; greet service. Hajj 2026 Ministry permits. 24/7.</p>
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20KAIA%20airport%20transfer" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />Book KAIA Transfer
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transfers from KAIA Airport</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {destinations.map((d, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-gray-900">{d.dest}</span>
                                    <span className="text-brand-navy-dark font-bold">{d.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />{d.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Pre-Book Your KAIA Airport Taxi?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Tout Problem</h3>
                            <p className="text-sm text-gray-600">Unlicensed taxi touts at KAIA charge 3–5× fair rates, especially at Hajj/Umrah peaks. Some don&apos;t have Makkah entry permits and get turned back at checkpoints.</p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Checkpoint Refusal</h3>
                            <p className="text-sm text-gray-600">During Hajj, only Ministry-permitted vehicles enter Makkah. Standard Uber, Careem, and random airport taxis are turned back at the security cordon — leaving pilgrims stranded.</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                            <h3 className="font-bold text-gray-900 mb-2">Our Solution</h3>
                            <p className="text-sm text-gray-600">Name-board meet &amp; greet at arrivals. Flight tracked. Hajj-permitted vehicles. Fixed price confirmed before you land. Zero surprises, zero checkpoint drama.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vehicle Guide for KAIA Pickups</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Toyota Camry', capacity: '1–3 passengers', luggage: '2 large bags', best: 'Solo or couple, light luggage' },
                            { name: 'GMC Yukon XL', capacity: '1–7 passengers', luggage: '7 large bags', best: 'Families with full Hajj luggage' },
                            { name: 'Toyota Hiace', capacity: '8–11 passengers', luggage: '10+ bags', best: 'Groups, Hajj travel parties' },
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <Car className="w-8 h-8 text-slate-500 mb-4" />
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{v.name}</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />{v.capacity}</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />{v.luggage}</div>
                                    <div className="text-xs text-gray-400 mt-3 italic">Best for: {v.best}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">KAIA Airport Transfer FAQ</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 px-6 rounded-xl border border-gray-100">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-5 hover:text-slate-500 text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-5 text-sm leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-16 bg-slate-700 text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Book Your KAIA Airport Transfer</h2>
                    <p className="mb-8 opacity-90">WhatsApp your flight number, arrival terminal, destination, and group size — get a fixed price in minutes.</p>
                    <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20KAIA%20airport%20taxi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white border-0 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
                            <WhatsAppIcon className="w-5 h-5" />Book via WhatsApp
                        </Button>
                    </a>
                </div>
            </section>

            <div className="py-8 text-center text-sm text-gray-500">
                <Link href="/locations/jeddah" className="text-slate-600 hover:underline">← Back to Jeddah</Link>
                <span className="mx-3">·</span>
                <Link href="/routes/jeddah-airport-to-makkah" className="text-slate-600 hover:underline">KAIA to Makkah Route →</Link>
            </div>
        </div>
    );
}
