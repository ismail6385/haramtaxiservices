import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Anchor, Sunset, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/haql',
    },
    title: 'Taxi Service in Haql | Red Sea Shipwreck & Jordan Border',
    description: 'Premier taxi service in Haql. Transfers to the Georgios G. shipwreck, Jordanian border, and Neom. Enjoy views of 3 countries.',
    keywords: ['taxi Haql', 'Haql shipwreck taxi', 'Jordan border taxi', 'Haql to Neom taxi', 'Tabuk to Haql ride'],
    openGraph: {
        title: 'Taxi Service in Haql | Northern Gem',
        description: 'Reliable transport in Haql. Visit the famous shipwreck and the northern borders ease.',
        url: 'https://haramtaxiservice.com/locations/haql',
        type: 'website',
    },
};

export default function HaqlLocationPage() {
    const services = [
        {
            name: 'Shipwreck Tour',
            description: ' scenic drives to the iconic Georgios G. Shipwreck on the pristine Haql coast.',
            icon: Anchor,
            href: '/services/haql-tour-taxi'
        },
        {
            name: 'Jordan Border Drop-off',
            description: 'Reliable transfers to the Al Durra Border Crossing for travel into Jordan (Aqaba).',
            icon: Shield,
            href: '/services/jordan-border-taxi'
        },
        {
            name: 'Neom Connection',
            description: 'Direct routes south to Magna and the northern sectors of the Neom project.',
            icon: ArrowRight,
            href: '/services/neom-taxi'
        },
        {
            name: 'Tabuk Transfer',
            description: 'Long-distance airport shuttles to Tabuk Regional Airport (TUU).',
            icon: MapPin,
            href: '/services/tabuk-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Haql from Tabuk?",
            answer: "Haql is approximately 230km northwest of Tabuk. The drive takes about 2.5 hours through scenic mountains."
        },
        {
            question: "Do you cross into Jordan?",
            answer: "We provide transport to the Saudi side of the Al Durra border. You can then cross into Aqaba, Jordan."
        },
        {
            question: "Is the shipwreck accessible by car?",
            answer: "Yes, we can drive you very close to the beach where the Georgios G. shipwreck is located."
        },
        {
            question: "Can I see Egypt and Israel from Haql?",
            answer: "Yes, Haql offers unique views where you can see the coastlines of Egypt (Sinai), Israel (Eilat), and Jordan (Aqaba)."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Haql",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Corniche",
            "addressLocality": "Haql",
            "postalCode": "49938",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/haql",
        "priceRange": "$$"
    };

    return (
        <div className="bg-sky-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-sky-100 py-4 border-b border-sky-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-sky-900/60">
                    <Link href="/" className="hover:text-sky-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-sky-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-sky-900">Haql</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-sky-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-sky-800 z-0">
                    <Image
                        src="/haql-shipwreck.webp"
                        alt="Taxi Service in Haql and Shipwreck"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-full mb-6 animate-fade-in border border-sky-400/50">
                            <Sunset className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Jewel of the North</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Haql Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-sky-50">
                            Discover the crystal waters and shipwrecks at the Saudi-Jordan border.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Haql." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-sky-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Haql</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local tours to the shipwreck usually cost <span className="font-bold text-sky-700">Get Quote</span>.
                        Transfers to the Jordan border are approximately <span className="font-bold text-sky-700">Get Quote</span>.
                        Long-distance rides to Tabuk Airport start from <span className="font-bold text-sky-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-sky-600" />
                                    Why Haram Taxi Haql?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                            <Sunset className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Scenic Tours</h3>
                                            <p className="text-sm text-gray-600">We know the best spots for sunset views and photographing the shipwreck.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Logistics</h3>
                                            <p className="text-sm text-gray-600">Hassle-free drops at the Al Durra border crossing for your trip to Jordan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-sky-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-sky-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        More Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Haql" targetCountry="Egypt/Jordan" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Haql FAQs</h2>
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
                                <div className="bg-sky-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Trip Planner
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Border & Beach Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Haql." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-sky-600" /> Top Sights
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Georgios G. Shipwreck</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Al Durra Border (Jordan)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Haql Corniche Park</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Palm Park</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> View of 3 Countries</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Haql" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Heading to Jordan?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We are the border transfer specialists in the North.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966569487569">
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

