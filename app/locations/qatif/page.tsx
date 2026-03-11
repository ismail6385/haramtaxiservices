import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/qatif',
    },
    title: 'Taxi Service in Qatif | Eastern Province Taxi',
    description: 'Reliable taxi service in Qatif, Tarout, and Saihat. Transfers to Dammam Airport, Jubail, and Khobar. 24/7 Service.',
    keywords: ['taxi Qatif', 'Qatif airport taxi', 'Tarout taxi', 'Saihat taxi', 'Dammam airport transfer'],
    openGraph: {
        title: 'Taxi Service in Qatif | Eastern Province',
        description: 'Professional transport in Qatif. Safe rides to Dammam, Jubail, and King Fahd Airport.',
        url: 'https://haramtaxiservice.com/locations/qatif',
        type: 'website',
    },
};

export default function QatifLocationPage() {
    const services = [
        {
            name: 'Dammam Airport Taxi',
            description: 'Direct transfers to King Fahd International Airport (KFIA) from Qatif, Tarout, and Saihat.',
            icon: Globe,
            href: '/services/dammam-airport-taxi'
        },
        {
            name: 'Jubail Industrial Ride',
            description: 'Daily commuter services for employees working in Jubail Industrial City.',
            icon: MapPin,
            href: '/services/jubail-taxi'
        },
        {
            name: 'Local City Transport',
            description: 'Comfortable rides within Qatif, including Fish Market, Corniche, and City Mall.',
            icon: ShoppingBag,
            href: '/services/local-taxi'
        },
        {
            name: 'Khobar/Dammam Trip',
            description: 'Quick trips to Dammam Corniche, Khobar malls, and Bahrain Causeway.',
            icon: ArrowRight,
            href: '/services/khobar-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Qatif from Dammam Airport?",
            answer: "Qatif is very close to King Fahd Airport (approx. a short distance). The trip usually takes a reasonable time."
        },
        {
            question: "Do you serve Tarout Island?",
            answer: "Yes, our taxi service covers all of Qatif, including Tarout, Darin, Saihat, and Safwa."
        },
        {
            question: "Can I book a daily ride to Jubail?",
            answer: "Absolutely. We offer monthly packages for commuters traveling between Qatif and Jubail Industrial City."
        },
        {
            question: "Are family cars available?",
            answer: "Yes, we have spacious SUVs perfect for family outings to the Corniche or shopping centers."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Qatif",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Quds Street",
            "addressLocality": "Qatif",
            "postalCode": "31911",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/qatif",
        "priceRange": "$$"
    };

    return (
        <div className="bg-teal-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-teal-100 py-4 border-b border-teal-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-teal-900/60">
                    <Link href="/" className="hover:text-teal-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-teal-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-teal-900">Qatif</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-teal-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-teal-800 z-0">
                    <Image
                        src="/qatif-corniche.webp"
                        alt="Taxi Service in Qatif"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 rounded-full mb-6 animate-fade-in border border-teal-400/50">
                            <Shield className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Eastern Province</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Qatif Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-teal-50">
                            Serving Qatif, Saihat, Tarout, and Safwa. Your gateway to Dammam Airport and Jubail.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Qatif." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Qatif</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Rides to Dammam Airport typically cost <span className="font-bold text-teal-700">Get Quote</span>.
                        Transfers to Jubail Industrial City range from <span className="font-bold text-teal-700">Get Quote</span>.
                        Local trips within Qatif/Saihat start from <span className="font-bold text-teal-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-teal-600" />
                                    Why Haram Taxi Qatif?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Punctual Commutes</h3>
                                            <p className="text-sm text-gray-600">We specialize in reliable daily transport for professionals working in Jubail and Dammam 2nd Industrial City.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                            <ShoppingBag className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Local Knowledge</h3>
                                            <p className="text-sm text-gray-600">Our drivers know every corner of Qatif, from the historic Castle to the Fish Market.</p>
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
                                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-teal-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-teal-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Qatif FAQs</h2>
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
                                <div className="bg-teal-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Qatif & Airport</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Qatif." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-teal-600" /> Key Locations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div> Qatif City Mall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div> Tarout Castle</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div> Qatif Fish Market</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div> Prince Nayef Road</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Qatif" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Ride in Qatif?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The most reliable taxi service for Eastern Province residents.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg font-bold">
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

