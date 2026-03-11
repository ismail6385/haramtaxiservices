import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, History, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/hail',
    },
    title: 'Taxi Service in Hail | Jubbah Rock Art & Airport Transfers',
    description: 'Premier taxi service in Hail. Transfers to Hail Airport (HAS), Jubbah (UNESCO Rock Art), and Al Nafud Desert. Reliable local drivers.',
    keywords: ['taxi Hail', 'Hail airport taxi', 'Jubbah rock art transport', 'Hail to Riyadh taxi', 'driver in Hail'],
    openGraph: {
        title: 'Taxi Service in Hail | UNESCO Sites & Airport',
        description: 'Explore Hail with a private driver. Airport transfers (HAS) and tours to Jubbah and Nafud.',
        url: 'https://haramtaxiservice.com/locations/hail',
        type: 'website',
    },
};

export default function HailLocationPage() {
    const services = [
        {
            name: 'Hail Airport (HAS) Transfer',
            description: 'Reliable pickup from Hail International Airport to your hotel or the train station.',
            icon: Car,
            href: '/services/hail-airport-taxi'
        },
        {
            name: 'Jubbah UNESCO Tour',
            description: 'Visit the world-famous rock carvings at Jubbah with a knowledgeable driver-guide.',
            icon: History,
            href: '/services/jubbah-tour'
        },
        {
            name: 'Hail to Riyadh',
            description: 'Long-distance intercity transfer to Riyadh via the Qassim highway (approx 6 hours).',
            icon: ArrowRight,
            href: '/routes/hail-to-riyadh'
        },
        {
            name: 'Al Nafud Desert Trip',
            description: 'Safe transport to the edge of the scenic Al Nafud desert for camping and sightseeing.',
            icon: Star,
            href: '/services/nafud-desert-trip'
        }
    ];

    const faqs = [
        {
            question: "How far is Jubbah from Hail city?",
            answer: "Jubbah is about 90km north of Hail city. It takes roughly an hour by car to reach the UNESCO site."
        },
        {
            question: "Do you offer rides to the Hail Train Station?",
            answer: "Yes, we provide timely transfers to and from the SAR Railway Station for trains to Riyadh and Al Jouf."
        },
        {
            question: "How much creates a taxi from Hail to Al Ula?",
            answer: "A private transfer from Hail to Al Ula (approx 4 hours) typically costs between Get Quote and Get Quote"
        },
        {
            question: "Is there Uber in Hail?",
            answer: "Uber availability can be limited, especially for trips out to Jubbah or the desert. Pre-booking a private car is recommended."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Hail",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Sultan Road",
            "addressLocality": "Hail",
            "postalCode": "55421",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/hail",
        "priceRange": "$$"
    };

    return (
        <div className="bg-stone-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-stone-100 py-4 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-stone-900/60">
                    <Link href="/" className="hover:text-stone-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-stone-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-stone-900">Hail</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/hail-jubbah-rock-art.webp"
                        alt="Taxi Service in Hail and Jubbah"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-600 rounded-full mb-6 animate-fade-in border border-stone-400/50">
                            <History className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to Heritage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hail Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-stone-50">
                            Connecting Hail Airport (HAS), the Railway Station, and the ancient art of Jubbah.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hail." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-white border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Hail</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Hail Airport (HAS) to the city center costs around <span className="font-bold text-stone-700">Get Quote</span>.
                        A return trip to the Jubbah UNESCO site typically costs <span className="font-bold text-stone-700">Get Quote</span>.
                        Transfers to the SAR Train Station are usually <span className="font-bold text-stone-700">Get Quote</span>.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-stone-600" />
                                    Why Haram Taxi in Hail?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                            <History className="w-5 h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Heritage Experts</h3>
                                            <p className="text-sm text-gray-600">We know the history of A&apos;arif Fort and the routes to Jubbah intimately.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Station & Airport</h3>
                                            <p className="text-sm text-gray-600">Reliable connections between the SAR Train Station and Hail Airport.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Hail Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-stone-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-stone-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        More Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hail Visitor FAQs</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-stone-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Hail Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Cash or Transfer</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hail." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-stone-600" /> Key Locations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Hail City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Hail Airport (HAS)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> SAR Train Station</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Jubbah (UNESCO)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> A&apos;arif Fort</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Al Nafud Desert</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Hail" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Visiting Hail?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the legendary generosity of Hail with our premium taxi service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-stone-600 hover:bg-stone-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966569487569">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                Contact Driver
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

