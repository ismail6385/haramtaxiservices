import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Anchor, Castle, ArrowRight, Sunset, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-wajh',
    },
    title: 'Taxi Service in Al Wajh | Red Sea Heritage & Airport',
    description: 'Premier taxi service in Al Wajh. Airport transfers (EJH), Old Town tours, and rides to Red Sea project sites.',
    keywords: ['taxi Al Wajh', 'Al Wajh airport taxi', 'Red Sea Project taxi', 'Al Wajh old town tour', 'Al Wajh to Umluj taxi'],
    openGraph: {
        title: 'Taxi Service in Al Wajh | Historic Coast',
        description: 'Reliable transport in Al Wajh. Connecting the airport to the historic Balad and Red Sea resorts.',
        url: 'https://haramtaxiservice.com/locations/al-wajh',
        type: 'website',
    },
};

export default function AlWajhLocationPage() {
    const services = [
        {
            name: 'Al Wajh Airport (EJH)',
            description: 'Fast and punctual transfers to and from Al Wajh Domestic Airport.',
            icon: PlaneIcon, // Helper below
            href: '/services/al-wajh-airport-taxi'
        },
        {
            name: 'Old Town Tours',
            description: 'Visit the historic Al-Balad district with its unique Hejazi architecture.',
            icon: Castle,
            href: '/services/old-town-tour'
        },
        {
            name: 'Red Sea Projects',
            description: 'Transport services to nearby Red Sea Global development sites and resorts.',
            icon: Anchor,
            href: '/services/red-sea-taxi'
        },
        {
            name: 'Umluj Transfer',
            description: 'Coastal drives south to the "Maldives of Saudi Arabia" (approx. 2 hours).',
            icon: Sunset,
            href: '/services/umluj-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the airport from the city?",
            answer: "Al Wajh Airport (EJH) is very close, just a comfortable drive south of the city center."
        },
        {
            question: "Can I get a ride to AlUla from here?",
            answer: "Yes, we offer long-distance transfers to AlUla, which is about a 3-hour drive inland through the mountains."
        },
        {
            question: "Do you serve the Red Sea Project sites?",
            answer: "Yes, we provide transport for staff and visitors to accessible areas of the Red Sea development projects."
        },
        {
            question: "Is there a taxi stand at the airport?",
            answer: "Taxis can be limited. We strongly recommend pre-booking your ride to ensure a driver is waiting for your arrival."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Wajh",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Corniche Road",
            "addressLocality": "Al Wajh",
            "postalCode": "48721",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-wajh",
        "priceRange": "$$"
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
                    <span className="font-semibold text-cyan-900">Al Wajh</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cyan-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-cyan-800 z-0">
                    <Image
                        src="/al-wajh-old-town.webp"
                        alt="Taxi Service in Al Wajh Historic Town"
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
                            <Castle className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Historic Port</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Wajh Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-cyan-50">
                            Your gateway to Red Sea heritage and pristine coastal projects.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Wajh." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Al Wajh?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Airport transfers to the city center cost <span className="font-bold text-cyan-700">Get Quote</span>.
                        Tours of the Old Town are negotiable, often around <span className="font-bold text-cyan-700">Get Quote/hour</span>.
                        Trips to Umluj start from <span className="font-bold text-cyan-700">Get Quote</span>.
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
                                    Why Haram Taxi Al Wajh?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <Castle className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Heritage Guides</h3>
                                            <p className="text-sm text-gray-600">Our drivers know the history of the Al-Balad district and the best photo spots.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center shrink-0">
                                            <Anchor className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Coastal Routes</h3>
                                            <p className="text-sm text-gray-600">Scenic drives along the coast to Umluj, Yanbu, or north to Duba.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-wajh Taxi Services</h2>
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
                                                        Booking Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Wajh FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Trip Planner
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & Tours</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Wajh." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-cyan-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Al Wajh Airport (EJH)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Old Town (Al-Balad)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Al Wajh Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div> Al Wajh Castle</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Wajh" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Explore the Historic Coast?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the heritage of Al Wajh with our local experts.
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

// Helper for Plane Icon
function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12h20" />
            <path d="M13 2 4 14" />
            <path d="M20 14 11 2" />
        </svg>
    )
}


