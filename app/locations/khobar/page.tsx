import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Waves, Building2, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/khobar',
    },
    title: 'Taxi Service in Al Khobar | Bahrain Causeway & Corniche',
    description: 'Premium taxi service in Al Khobar. Transfers to Bahrain (King Fahd Causeway), Dammam Airport (DMM), and Half Moon Bay. VIP Chauffeur services available.',
    keywords: ['taxi Al Khobar', 'Khobar taxi', 'Bahrain Causeway taxi', 'Khobar to Bahrain transfer', 'DMM airport taxi'],
    openGraph: {
        title: 'Taxi Service in Al Khobar | Bahrain & Airport Transfer',
        description: 'Reliable rides in Al Khobar. Direct transfers to Bahrain via the Causeway and King Fahd Airport.',
        url: 'https://haramtaxiservice.com/locations/khobar',
        type: 'website',
    },
};

export default function KhobarLocationPage() {
    const services = [
        {
            name: 'Bahrain Causeway Transfer',
            description: 'Direct taxi service from Al Khobar to Bahrain via King Fahd Causeway. Hassle-free border crossing.',
            icon: Waves,
            href: '/services/khobar-to-bahrain-taxi'
        },
        {
            name: 'Dammam Airport (DMM) Taxi',
            description: 'Comfortable airport pickup and drop-off to King Fahd International Airport.',
            icon: ArrowRight,
            href: '/services/khobar-airport-taxi'
        },
        {
            name: 'VIP City Chauffeur',
            description: 'Hourly luxury car rental with driver for business meetings or shopping in Al Khobar.',
            icon: Shield,
            href: '/services/luxury-chauffeur'
        },
        {
            name: 'Half Moon Bay Trip',
            description: 'Family trips to Half Moon Bay resorts and beaches with waiting service.',
            icon: MapPin,
            href: '/services/half-moon-bay-taxi'
        }
    ];

    const faqs = [
        {
            question: "Can you take me across the Causeway to Bahrain?",
            answer: "Yes, we have authorized vehicles and drivers permitted to transport passengers across the King Fahd Causeway to Bahrain."
        },
        {
            question: "How much is a taxi from Khobar to Bahrain?",
            answer: "A one-way trip from Al Khobar to Manama (Bahrain) typically costs between Get Quote and Get Quote, including plain causeway fees."
        },
        {
            question: "How far is Dammam Airport from Al Khobar?",
            answer: "King Fahd International Airport (DMM) is about a short distance from Al Khobar, a Get Quote minute drive."
        },
        {
            question: "Do you serve the Corniche area?",
            answer: "Yes, we have frequent presence near Al Khobar Corniche, Al Rashid Mall, and Dhahran Mall."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Khobar",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Turkey Street",
            "addressLocality": "Al Khobar",
            "postalCode": "31952",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/khobar",
        "priceRange": "$$"
    };

    return (
        <div className="bg-cyan-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-cyan-100 py-4 border-b border-cyan-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-cyan-900/60">
                    <Link href="/" className="hover:text-cyan-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-cyan-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-cyan-900">Al Khobar</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cyan-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/khobar-water-tower.webp"
                        alt="Taxi Service in Al Khobar and Bahrain Causeway"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-full mb-6 animate-fade-in border border-cyan-400/50">
                            <Waves className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Pearl of the Gulf</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Khobar Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-cyan-50">
                            Seamless transfers to Bahrain, Dammam Airport (DMM), and Half Moon Bay.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khobar." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Prices in Al Khobar</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Al Khobar to Dammam Airport (DMM) typically costs <span className="font-bold text-cyan-700">Get Quote</span>.
                        A trip to Bahrain (Manama) usually ranges from <span className="font-bold text-cyan-700">Get Quote</span> depending on traffic.
                        Local city rides start from <span className="font-bold text-cyan-700">Get Quote</span>.
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
                                    Why Haram Taxi Khobar?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <Waves className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Bahrain Experts</h3>
                                            <p className="text-sm text-gray-600">Our drivers have the necessary permits to cross the King Fahd Causeway smoothly.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <Building2 className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Premium Comfort</h3>
                                            <p className="text-sm text-gray-600">Clean, modern sedans and SUVs perfect for business travelers and families.</p>
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
                                            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-cyan-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        More details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Khobar Travel FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Book Khobar Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Local & Bahrain Transfer</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khobar." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-cyan-600" /> Key Landmarks
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Al Khobar Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> King Fahd Causeway</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Al Rashid Mall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Dhahran Mall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Half Moon Bay</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Ithra (Dhahran)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Khobar" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Crossing to Bahrain?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Skip the hassle. Book a direct ride from your door in Khobar to anywhere in Bahrain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg font-bold">
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

