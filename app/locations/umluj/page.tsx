import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Waves, Ship, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/umluj',
    },
    title: 'Taxi Service in Umluj | Maldives of Saudi Arabia',
    description: 'Premium taxi service in Umluj. Transfers to Red Sea Airport (RSI), Umluj Port, and white sand beaches. Intercity rides to Yanbu and Tabuk.',
    keywords: ['taxi Umluj', 'Umluj airport taxi', 'Red Sea Project taxi', 'Red Sea airport transfer', 'Umluj beach taxi', 'taxi to Yanbu from Umluj'],
    openGraph: {
        title: 'Taxi Service in Umluj | Red Sea Paradise',
        description: 'Reliable transport in Umluj. Connecting you to the pristine beaches and the Red Sea International Airport.',
        url: 'https://haramtaxiservice.com/locations/umluj',
        type: 'website',
    },
};

export default function UmlujLocationPage() {
    const services = [
        {
            name: 'Red Sea Airport (RSI) Taxi',
            description: 'Luxury transfers to and from the new Red Sea International Airport.',
            icon: Ship, // Using Ship as closest maritime theme for now, ideally Plane for airport but RSI is unique
            href: '/services/red-sea-airport-taxi'
        },
        {
            name: 'Beach & Port Transfer',
            description: 'Rides to Umluj Boat Port for island tours and to popular beach resorts.',
            icon: Waves,
            href: '/services/umluj-beach-taxi'
        },
        {
            name: 'Yanbu Intercity',
            description: 'Direct taxi service to Yanbu Airport (YNB) or city center (approx. 150km).',
            icon: MapPin,
            href: '/services/intercity-taxi'
        },
        {
            name: 'Tabuk Transfer',
            description: 'Long-distance transport connecting the Red Sea coast to Tabuk region.',
            icon: ArrowRight,
            href: '/services/tabuk-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the Red Sea International Airport from Umluj?",
            answer: "The Red Sea International Airport (RSI) is located north of Umluj. Driving times vary as new roads open, but we offer direct coordinated transfers."
        },
        {
            question: "Can I get a taxi to Yanbu Airport?",
            answer: "Yes, Yanbu Airport (YNB) is the main alternative hub. We offer fixed-rate transfers for the 1.5-hour drive."
        },
        {
            question: "Do you serve the island boat tours?",
            answer: "We can drop you right at the marina/port where the local boat operators depart for the islands."
        },
        {
            question: "Are SUVs available for beach luggage?",
            answer: "Yes, our fleet includes spacious SUVs perfect for families with diving gear and luggage."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Umluj",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Abdul Majeed Road",
            "addressLocality": "Umluj",
            "postalCode": "48311",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/umluj",
        "priceRange": "$$$"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <div className="bg-cyan-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-cyan-100 py-4 border-b border-cyan-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-cyan-900/60">
                    <Link href="/" className="hover:text-cyan-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-cyan-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-cyan-900">Umluj</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cyan-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-cyan-800 z-0">
                    <Image
                        src="/umluj-beach.webp"
                        alt="Taxi Service in Umluj and Red Sea"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-full mb-6 animate-fade-in border border-cyan-400/50">
                            <Waves className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Maldives of Saudi</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Umluj Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-cyan-50">
                            Luxury transport for your Red Sea escape. Connecting airports, resorts, and pristine islands.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Umluj." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-cyan-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Umluj?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local trips to the port start at <span className="font-bold text-cyan-700">Get Quote</span>.
                        Transfers to Yanbu Airport are approximately <span className="font-bold text-cyan-700">Get Quote</span>.
                        Red Sea Airport (RSI) transfers vary based on resort location, starting from <span className="font-bold text-cyan-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-cyan-600" />
                                    Why Haram Taxi Umluj?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <Waves className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Resort Knowledge</h3>
                                            <p className="text-sm text-gray-600">We know the locations of the newest eco-resorts and marinas along the coast.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Intercity Reliability</h3>
                                            <p className="text-sm text-gray-600">Frequent connections to Yanbu ensure you never miss a flight connection.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Umluj Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-cyan-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Service Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Umluj FAQs</h2>
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
                                <div className="bg-cyan-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Now
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Beach & Airport Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Umluj." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-cyan-600" /> Key Spots
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Umluj Boat Port</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Duqm Tourist Park</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Red Sea Airport (RSI)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> The St. Regis Red Sea</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Historic Umluj</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Umluj" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Island Hopping?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let us handle your transfers so you can relax on the white sands.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg font-bold">
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


