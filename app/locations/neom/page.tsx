import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Anchor, Zap, ArrowRight, Building, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/neom',
    },
    title: 'Taxi Service in NEOM | The Line & Trojena Transfers',
    description: 'Premier taxi service in NEOM. Luxury transfers to The Line, Trojena, Sindalah, and Oxagon. Connecting NEOM Bay Airport (NUM) with the future.',
    keywords: ['taxi NEOM', 'NEOM Bay airport taxi', 'The Line taxi', 'Trojena transfer', 'Sindalah ride', 'taxi to Tabuk from NEOM'],
    openGraph: {
        title: 'Taxi Service in NEOM | Future City Transport',
        description: 'Reliable rides in NEOM. Connecting you to the airport (NUM), The Line, and Trojena.',
        url: 'https://haramtaxiservice.com/locations/neom',
        type: 'website',
    },
};

export default function NeomLocationPage() {
    const services = [
        {
            name: 'NEOM Bay Airport (NUM)',
            description: 'VIP airport transfers for business leaders and tourists arriving at NEOM Bay.',
            icon: ArrowRight,
            href: '/services/neom-airport-taxi'
        },
        {
            name: 'The Line & Magna',
            description: 'Direct transport to the construction and visitor centers of The Line and coastal Magna.',
            icon: Zap,
            href: '/services/the-line-taxi'
        },
        {
            name: 'Trojena Mountain Resort',
            description: '4x4 transfers to the high-altitude mountain destination of Trojena.',
            icon: Shield,
            href: '/services/trojena-taxi'
        },
        {
            name: 'Sindalah & Oxagon',
            description: 'Transport to the luxury island of Sindalah and the industrial hub of Oxagon.',
            icon: Anchor,
            href: '/services/sindalah-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is The Line from NEOM Bay Airport?",
            answer: "The Line is a vast development, but the main access points are reachable within a estimated time from NEOM Bay Airport via our private transfers."
        },
        {
            question: "Do you offer rides to Tabuk?",
            answer: "Yes, we provide comfortable intercity taxi services to Tabuk city and airport, which is about 1.5 to 2 hours away."
        },
        {
            question: "Is transport available to Trojena?",
            answer: "Yes, we have specialized vehicles capable of navigating the mountain roads to Trojena safely."
        },
        {
            question: "Can I book a taxi for a business delegation?",
            answer: "Absolutely. We offer fleet booking for corporate groups visiting NEOM projects."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service NEOM",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "NEOM Community 1",
            "addressLocality": "NEOM",
            "postalCode": "49643",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/neom",
        "priceRange": "$$$"
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-slate-100 py-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-900/60">
                    <Link href="/" className="hover:text-slate-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-slate-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-slate-900">NEOM</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image
                        src="/neom-future.webp"
                        alt="Taxi Service in NEOM and The Line"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full mb-6 animate-fade-in border border-blue-400/50">
                            <Zap className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Vision 2030 City</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            NEOM Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-slate-50">
                            The future of transport. Connecting NEOM Bay, The Line, Trojena, and Oxagon.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Neom." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in NEOM</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A private transfer from NEOM Bay Airport (NUM) starting from <span className="font-bold text-blue-700">Get Quote</span>.
                        Trips to Tabuk are typically <span className="font-bold text-blue-700">affordable rates</span>.
                        Daily chauffeur services for project sites start at <span className="font-bold text-blue-700">fixed rates/day</span>.
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
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    Why Haram Taxi NEOM?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Project Ready</h3>
                                            <p className="text-sm text-gray-600">Our drivers are familiar with the developing road network and security checkpoints of NEOM.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Building className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Business Class</h3>
                                            <p className="text-sm text-gray-600">Premium vehicles available for executives and investors visiting the region.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Neom Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Booking {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">NEOM Visitor Guide</h2>
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
                                <div className="bg-blue-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & Project Sites</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Neom." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-blue-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> NEOM Bay Airport (NUM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> The Line Visitor Experience</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Sharma & Magna</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Gayal Beach</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Tabuk Intercity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Neom" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Visiting the Future?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Secure your transport in the Kingdom&apos;s most ambitious project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                WhatsApp Booking
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}



