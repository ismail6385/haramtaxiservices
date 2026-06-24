import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Plane, Building2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/khamis-mushait',
    },
    title: 'Taxi Service in Khamis Mushait | Military & Business City',
    description: 'Top-rated taxi service in Khamis Mushait. Transfers to Abha Airport, King Khalid Air Base, and commercial centers. 24/7 Service.',
    keywords: ['taxi Khamis Mushait', 'Khamis Mushait airport taxi', 'taxi to Abha', 'King Khalid Air Base taxi', 'Khamis Mushait industrial taxi'],
    openGraph: {
        title: 'Taxi Service in Khamis Mushait | Southern Hub',
        description: 'Reliable transport in Khamis Mushait. Connecting the Military City, Abha Airport, and local markets.',
        url: 'https://haramtaxiservice.com/locations/khamis-mushait',
        type: 'website',
    },
};

export default function KhamisLocationPage() {
    const services = [
        {
            name: 'Abha Airport (AHB)',
            description: 'Fast transfers to Abha International Airport, serving both Khamis and Abha regions.',
            icon: Plane,
            href: '/services/abha-airport-taxi'
        },
        {
            name: 'Military City Transfer',
            description: 'Authorized gate drops for King Khalid Air Base and military housing compounds.',
            icon: Shield,
            href: '/services/military-city-taxi'
        },
        {
            name: 'Industrial Area',
            description: 'Commuter services for workers in the Khamis Mushait Industrial City.',
            icon: Building2,
            href: '/services/industrial-taxi'
        },
        {
            name: 'Abha Intercity',
            description: 'Quick rides to Abha city center, Al Soudah, and Green Mountain.',
            icon: ArrowRight,
            href: '/services/abha-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Abha Airport from Khamis Mushait?",
            answer: "The airport is actually closer to Khamis Mushait than Abha city. It takes only a estimated time to reach AHB."
        },
        {
            question: "Do you serve the King Khalid Air Base?",
            answer: "Yes, we can drop passengers at the main visitor gates of the military city and air base."
        },
        {
            question: "Can I book a ride to Jazan?",
            answer: "Yes, we offer long-distance taxis to Jazan (approx. 2.5 hours) via the scenic mountain descent."
        },
        {
            question: "Are taxis available late at night?",
            answer: "Khamis Mushait is a busy commercial hub, and our taxis serve the city 24/7, including late-night shopping trips."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Khamis Mushait",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Khamis Mushait",
            "postalCode": "62431",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/khamis-mushait",
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
        <div className="bg-slate-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-slate-100 py-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-900/60">
                    <Link href="/" className="hover:text-slate-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-slate-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-slate-900">Khamis Mushait</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image
                        src="/khamis-mushait-city.webp"
                        alt="Taxi Service in Khamis Mushait"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full mb-6 animate-fade-in border border-slate-400/50">
                            <Building2 className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Commercial Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Khamis Mushait Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-slate-50">
                            The heartbeat of the South. Connecting markets, military bases, and airports.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khamis%20Mushait." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Khamis Mushait?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local rides within the city cost <span className="font-bold text-slate-700">Get Quote</span>.
                        Transfers to Abha Airport are typically <span className="font-bold text-slate-700">affordable rates</span>.
                        Trips to Abha city center range from <span className="font-bold text-slate-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-slate-600" />
                                    Why Haram Taxi Khamis?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <ShoppingBag className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Commercial Expert</h3>
                                            <p className="text-sm text-gray-600">We know all the major malls, gold souks, and industrial districts for efficient shopping/business trips.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Base Access</h3>
                                            <p className="text-sm text-gray-600">Familiar with the drop-off protocols for the King Khalid Air Base and Military City.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Khamis-mushait Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-slate-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Khamis FAQs</h2>
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
                                <div className="bg-slate-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & City</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khamis%20Mushait." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-slate-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> King Khalid Air Base</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Khamis Avenue Mall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Gold Souk</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Heritage Village</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Industrial City</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Khamis Mushait" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Lift in Khamis?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The most reliable taxi service in the Southern Region.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966575806733">
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



