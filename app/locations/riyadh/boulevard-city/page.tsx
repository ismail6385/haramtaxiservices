import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Star, CheckCircle2, Ticket } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh/boulevard-city',
    },
    title: 'Boulevard City Taxi Riyadh | Riyadh Season Transfers — Pre-Booked, Fixed Rate',
    description: 'Taxi to Boulevard City Riyadh Season venue. Pre-booked fixed rate, no post-event surge, return pickups confirmed. From KKIA, KAFD, Olaya, and all Riyadh hotels.',
    keywords: ['Boulevard City taxi', 'taxi to Boulevard City Riyadh', 'Riyadh Season taxi', 'Boulevard World taxi', 'taxi Boulevard Riyadh', 'Riyadh Season transfer', 'Boulevard City transfer'],
    openGraph: {
        title: 'Boulevard City Taxi — Riyadh Season Transfers | Fixed Rate',
        description: 'Pre-booked taxi to and from Boulevard City — no surge after events. Confirm your return pickup when you book. Book via WhatsApp.',
        url: 'https://haramtaxiservice.com/locations/riyadh/boulevard-city',
        type: 'website',
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi — Boulevard City Riyadh",
    "@id": "https://haramtaxiservice.com/locations/riyadh/boulevard-city",
    "url": "https://haramtaxiservice.com/locations/riyadh/boulevard-city",
    "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
    "description": "Taxi and transfer service to and from Boulevard City, Riyadh Season's main entertainment hub. Pre-booked fixed rates, return pickups, no event-night surge pricing.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boulevard City, King Salman Road",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
    },
    "areaServed": "Boulevard City, Riyadh"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I get a taxi to Boulevard City Riyadh Season?",
            "acceptedAnswer": { "@type": "Answer", "text": "Book via WhatsApp with your pickup address (hotel, KAFD, home) and your event time. Your driver delivers you to the Boulevard City entrance. Book your return at the same time — fixed rate, no event-night surge." }
        },
        {
            "@type": "Question",
            "name": "How far is Boulevard City from central Riyadh?",
            "acceptedAnswer": { "@type": "Answer", "text": "Boulevard City is on King Salman Road in western Riyadh. From Olaya it is approximately 15–20 minutes. From KAFD approximately 20–25 minutes. From KKIA Airport approximately 35–45 minutes." }
        },
        {
            "@type": "Question",
            "name": "Why not just use Uber to Boulevard City?",
            "acceptedAnswer": { "@type": "Answer", "text": "Uber and Careem surge heavily after major events at Boulevard City when thousands of attendees request simultaneously. A pre-booked private taxi with a confirmed return time and fixed rate eliminates this — your driver is waiting at the agreed pickup point when the show ends." }
        },
        {
            "@type": "Question",
            "name": "Is parking available at Boulevard City?",
            "acceptedAnswer": { "@type": "Answer", "text": "Boulevard City has parking but it fills quickly on concert and event nights. Arriving by private taxi eliminates the parking search entirely — drop at the entrance, pickup confirmed at exit." }
        },
        {
            "@type": "Question",
            "name": "Can you take a group of 7 to a Riyadh Season event at Boulevard City?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. GMC Yukon XL accommodates 7 passengers — ideal for family and friend groups attending Riyadh Season. Toyota Hiace available for groups up to 11. Fixed group rate quoted via WhatsApp." }
        }
    ]
};

const distances = [
    { from: 'Olaya / Kingdom Tower', time: '15–20 min' },
    { from: 'KAFD', time: '20–25 min' },
    { from: 'Diplomatic Quarter', time: '20–25 min' },
    { from: 'KKIA Airport', time: '35–45 min' },
    { from: 'Diriyah', time: '25–30 min' },
    { from: 'Riyadh Front', time: '30–35 min' },
];

export default function BoulevardCityPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <nav className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <ol className="flex items-center gap-2 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li><Link href="/locations/riyadh" className="hover:text-gray-700">Riyadh</Link></li>
                            <li><ArrowRight className="w-3 h-3" /></li>
                            <li className="text-gray-900 font-medium">Boulevard City</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <section className="bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 mb-6">
                                <Ticket className="w-4 h-4 text-purple-300" />
                                <span className="text-purple-200 text-xs font-bold tracking-widest uppercase">Riyadh Season · Boulevard City</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Boulevard City<br />
                                <span className="text-purple-400">Taxi — No Surge</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Pre-booked transfer to Riyadh Season events — fixed rate in, confirmed return out. No post-concert surge, no parking stress.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Boulevard%20City%20for%20a%20Riyadh%20Season%20event"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:scale-105"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Book Event Transfer
                                </a>
                                <Link
                                    href="/locations/riyadh"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    All Riyadh Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-purple-50 border-b border-purple-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'From Olaya', value: '15–20 min' },
                                { label: 'From KAFD', value: '20–25 min' },
                                { label: 'From KKIA', value: '35–45 min' },
                                { label: 'Surge Pricing', value: 'None' },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-black text-purple-900">{s.value}</div>
                                    <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The surge problem */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Pre-Book for Boulevard City Events</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    After major concerts and shows at Boulevard City, thousands of people request rideshare simultaneously. Uber and Careem surge 3–5x. You wait 20–40 minutes in the crowd while paying inflated fares.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Book inbound + return at same time — fixed rate both ways',
                                        'Driver confirmed with name and plate before you arrive',
                                        'Return pickup at agreed exit point — no hunting in the crowd',
                                        'Groups up to 11 in single vehicle (Hiace)',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Journey Times to Boulevard City</h3>
                                <div className="space-y-4">
                                    {distances.map((d, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                            <span className="text-slate-300">{d.from}</span>
                                            <span className="flex items-center gap-1 text-purple-400 font-bold text-sm">
                                                <Clock className="w-4 h-4" />
                                                {d.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Riyadh Season venues */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Riyadh Season Venues We Cover</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: 'Diriyah Gate', note: 'Heritage & cultural events', href: '/locations/riyadh/diriyah' },
                                { name: 'King Abdullah Sports City', note: 'Boxing, football, wrestling events', href: '/locations/riyadh' },
                                { name: 'Riyadh Front', note: 'KKIA-adjacent events zone', href: '/locations/riyadh' },
                            ].map((v, i) => (
                                <Link key={i} href={v.href} className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all group">
                                    <Star className="w-6 h-6 text-purple-400 mb-3" />
                                    <div className="font-bold text-gray-900 mb-1 group-hover:text-purple-700">{v.name}</div>
                                    <div className="text-sm text-gray-500">{v.note}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Boulevard City Taxi — FAQs</h2>
                        <Accordion type="single" collapsible className="space-y-3">
                            {faqSchema.mainEntity.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-6">
                                    <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:no-underline">
                                        {faq.name}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                                        {faq.acceptedAnswer.text}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-purple-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Book Your Boulevard City Transfer</h2>
                        <p className="text-purple-100 text-lg mb-8">Tell us your event, pickup address, and time. We confirm both legs — in and out — at a fixed rate.</p>
                        <a
                            href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20to%20Boulevard%20City%20Riyadh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-700 font-black text-lg rounded-xl hover:scale-105 transition-all shadow-lg"
                        >
                            <WhatsAppIcon className="w-6 h-6" />
                            WhatsApp — Book Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
