import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Car, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/salwa',
    },
    title: 'Taxi Service in Salwa | Qatar Border Crossing Transfer',
    description: 'Trusted taxi service in Salwa. Direct transfers to Qatar border, visa run trips, and rides from Al Ahsa & Dammam. 24/7 Service.',
    keywords: ['taxi Salwa', 'Salwa border taxi', 'taxi to Qatar border', 'Al Ahsa to Salwa taxi', 'taxi for visa run Saudi'],
    openGraph: {
        title: 'Taxi Service in Salwa | Saudi-Qatar Border',
        description: 'Reliable border transport. Connecting Dammam and Al Ahsa to the Salwa Land Port.',
        url: 'https://haramtaxiservice.com/locations/salwa',
        type: 'website',
    },
};

export default function SalwaLocationPage() {
    const services = [
        {
            name: 'Qatar Border Transfer',
            description: 'Direct drop-off at the Salwa Passport Control for travelers heading to Doha.',
            icon: Globe,
            href: '/services/qatar-border-taxi'
        },
        {
            name: 'Al Ahsa Connection',
            description: 'Regular rides to Hofuf and Al Ahsa Airport (approx. 1.5 hours).',
            icon: MapPin,
            href: '/services/al-ahsa-taxi'
        },
        {
            name: 'Dammam/Khobar Trip',
            description: 'Long-distance comfort rides to Dammam Airport or Khobar Corniche.',
            icon: Car,
            href: '/services/dammam-taxi'
        },
        {
            name: 'Visa Run Wait',
            description: 'Round trips with waiting time for quick border procedures and return.',
            icon: Clock,
            href: '/services/visa-run-taxi'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi to Salwa border?",
            answer: "Fares depend on pickup location. From Al Ahsa, it's typically Get Quote From Dammam, a competitive rate."
        },
        {
            question: "Do you cross into Qatar?",
            answer: "We drop you at the Saudi side (Salwa). You can walk or take a specialized shuttle to the Qatar side (Abu Samrah)."
        },
        {
            question: "Is the border open 24/7?",
            answer: "Yes, the Salwa border crosses operate 24 hours. Our taxis are also available 24/7 to match your schedule."
        },
        {
            question: "Can I book a return trip?",
            answer: "Absolutely. We can wait for you or schedule a driver to pick you up upon your return to Saudi Arabia."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Salwa",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Salwa Border Road",
            "addressLocality": "Salwa",
            "postalCode": "36461",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/salwa",
        "priceRange": "$$"
    };

    return (
        <div className="bg-emerald-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-emerald-100 py-4 border-b border-emerald-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/60">
                    <Link href="/" className="hover:text-emerald-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-emerald-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-emerald-900">Salwa</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-emerald-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-emerald-800 z-0">
                    <Image
                        src="/salwa-border.webp"
                        alt="Taxi at Salwa Border Crossing"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-full mb-6 animate-fade-in border border-emerald-400/50">
                            <Globe className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to Qatar</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Salwa Border Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-emerald-50">
                            Seamless transfers between Saudi Arabia and Qatar. Reliable, licensed, and 24/7.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Salwa." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi to Salwa border cost?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Trips from Al Ahsa to Salwa typically range from <span className="font-bold text-emerald-700">Get Quote</span>.
                        Longer rides from Dammam or Khobar generally cost between <span className="font-bold text-emerald-700">Get Quote</span>.
                        We operate 24/7 for all border crossing times.
                        <span className="block text-sm text-gray-400 mt-2">Prices vary by vehicle type; confirm before booking.</span>
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
                                    <Shield className="w-8 h-8 text-emerald-600" />
                                    Why Haram Taxi Salwa?
                                </h2>
                                <ul className="grid sm:grid-cols-2 gap-6 list-none">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Specialists</h3>
                                            <p className="text-sm text-gray-600">We know the procedures and drop-off points for smooth transitions.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Punctual Commutes</h3>
                                            <p className="text-sm text-gray-600">On-time pickups for those commuting daily or weekly to Qatar.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Details</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Booking Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Salwa" targetCountry="Qatar" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Salwa Border FAQs</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* EEAT Section */}
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">Trusted by Border Travelers</h3>
                                <p className="text-emerald-800 mb-4">
                                    For over 5 years, we have facilitated thousands of border crossings at Salwa. Our drivers are licensed, background-checked, and carry valid permits for border zones. We ensure you reach the passport control safely and comfortably.
                                </p>
                                <div className="flex gap-4 text-sm font-semibold text-emerald-700">
                                    <span>âœ“ Licensed</span>
                                    <span>âœ“ Insured</span>
                                    <span>âœ“ Background-checked</span>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-emerald-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Qatar Border Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Salwa." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-emerald-600" /> Key Locations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Salwa Land Port</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Salwa Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Customs Clearance Offices</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Nearby Gas Stations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Salwa" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Heading to Qatar?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Get to the border stress-free with our premium taxi service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg font-bold">
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

