import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Tent, Plane, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/rafha',
    },
    title: 'Taxi Service in Rafha | Airport Transfer & Northern Borders',
    description: 'Trusted taxi service in Rafha. Transfers to Rafha Airport (RAH), Lina historic village, and intercity rides to Hafr Al Batin or Arar.',
    keywords: ['taxi Rafha', 'Rafha airport taxi', 'Lina village taxi', 'Rafha to Hafr Al Batin', 'Northern Borders taxi'],
    openGraph: {
        title: 'Taxi Service in Rafha | Airport & History',
        description: 'Reliable transport in Rafha. Connecting you to the airport (RAH) and the historic village of Lina.',
        url: 'https://haramtaxiservice.com/locations/rafha',
        type: 'website',
    },
};

export default function RafhaLocationPage() {
    const services = [
        {
            name: 'Rafha Airport (RAH) Taxi',
            description: 'Prompt and reliable airport transfers for all domestic flights arriving in Rafha.',
            icon: Plane,
            href: '/services/rafha-airport-taxi'
        },
        {
            name: 'Lina Village Tour',
            description: 'Visit the historic village of Lina, one of the oldest settlements in Northern Saudi Arabia.',
            icon: Tent,
            href: '/services/lina-village-taxi'
        },
        {
            name: 'Intercity Transport',
            description: 'Comfortable long-distance rides to Arar (west) or Hafr Al Batin (east).',
            icon: MapPin,
            href: '/services/intercity-taxi'
        },
        {
            name: 'Desert Camping Transfer',
            description: 'Drop-off and pickup services for desert camping trips during the spring season.',
            icon: Shield,
            href: '/services/desert-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the historic village of Lina from Rafha?",
            answer: "Lina is located approximately 100km south of Rafha, known for its ancient wells and market."
        },
        {
            question: "Do you go to Hafr Al Batin?",
            answer: "Yes, we offer private taxi transfers to Hafr Al Batin, which is about 280km east of Rafha."
        },
        {
            question: "Is there a taxi service at Rafha Airport?",
            answer: "Taxis can be scarce. We recommend pre-booking your ride to ensure a driver is waiting for you at RAH Airport."
        },
        {
            question: "What is the price for a local ride in Rafha?",
            answer: "Local rides within Rafha city limits typically cost between 20 to Get Quote"
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Rafha",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Road",
            "addressLocality": "Rafha",
            "postalCode": "76311",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/rafha",
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
                    <span className="font-semibold text-stone-900">Rafha</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-stone-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/rafha-desert.webp"
                        alt="Taxi Service in Rafha and Northern Borders"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-600 rounded-full mb-6 animate-fade-in border border-stone-400/50">
                            <Tent className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Northern Heritage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Rafha Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-stone-50">
                            menghubungkan you to Rafha Airport (RAH), Lina Village, and the Northern Borders highway.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Rafha." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Rafha</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Rafha Airport (RAH) to the city center costs around <span className="font-bold text-stone-700">Get Quote</span>.
                        A trip to the historic village of Lina is approximately <span className="font-bold text-stone-700">Get Quote</span>.
                        Long-distance rides to Arar start from <span className="font-bold text-stone-700">Get Quote</span>.
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
                                    Why Haram Taxi Rafha?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                            <Plane className="w-5 h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Airport Punctuality</h3>
                                            <p className="text-sm text-gray-600">We track your flight to ensure we are there when you land at RAH Airport.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                            <Tent className="w-5 h-5 text-stone-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Desert Access</h3>
                                            <p className="text-sm text-gray-600">Our drivers are familiar with the routes to popular spring camping spots.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Rafha Taxi Services</h2>
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
                                                        {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Rafha FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Book Rafha Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & City Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Rafha." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Rafha City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Rafha Airport (RAH)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Lina Historic Village</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-stone-600 rounded-full"></div> Northern Borders University</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Rafha" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Traveling the Northern Highway?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Stop in Rafha or get a reliable ride to your next destination.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-stone-600 hover:bg-stone-700 text-white px-10 py-6 text-lg font-bold">
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



