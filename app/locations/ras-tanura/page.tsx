import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Fuel, Building, Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/ras-tanura',
    },
    title: 'Taxi Service in Ras Tanura | Oil & Gas Business Transfers',
    description: 'Executive taxi service in Ras Tanura. Transfers to Aramco Refinery, Najmah Compound, and Dammam Airport.',
    keywords: ['taxi Ras Tanura', 'Ras Tanura Aramco taxi', 'Najmah compound taxi', 'Ras Tanura to Dammam airport', 'corporate taxi Ras Tanura'],
    openGraph: {
        title: 'Taxi Service in Ras Tanura | Energy Hub',
        description: 'Professional transport in Ras Tanura. Connecting the Oil & Gas sector to the Eastern Province.',
        url: 'https://haramtaxiservice.com/locations/ras-tanura',
        type: 'website',
    },
};

export default function RasTanuraLocationPage() {
    const services = [
        {
            name: 'Aramco & Najmah',
            description: 'Authorized gate drops for Saudi Aramco facilities and the residential Najmah compound.',
            icon: Fuel,
            href: '/services/aramco-taxi'
        },
        {
            name: 'Dammam Airport (DMM)',
            description: 'Direct highway transfers to King Fahd International Airport (approx. 45 mins).',
            icon: PlaneIcon, // Using PlaneIcon below
            href: '/services/dammam-airport-taxi'
        },
        {
            name: 'Jubail Industrial',
            description: 'Shuttle services between Ras Tanura and Jubail Industrial City for contractors.',
            icon: Briefcase,
            href: '/services/jubail-taxi'
        },
        {
            name: 'Rahimak City',
            description: 'Local rides within Rahimah and Ras Tanura city areas.',
            icon: MapPin,
            href: '/services/city-taxi'
        }
    ];

    const faqs = [
        {
            question: "Do you have access to Aramco gates?",
            answer: "We can drop off and pick up at the main visitor gates. Entry inside requires specific passes which the passenger must possess."
        },
        {
            question: "How long to Dammam Airport?",
            answer: "The drive to DMM Airport is very quick, usually taking 45 to 50 minutes via the Dhahran - Jubail Expressway."
        },
        {
            question: "Do you serve the Najmah compound?",
            answer: "Yes, we regularly transport residents to and from the Najmah compound gates for shopping or airport runs."
        },
        {
            question: "Is booking required for early flights?",
            answer: "Yes, we highly recommend pre-booking for early morning airport transfers to ensure a driver is assigned to you."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Ras Tanura",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Street",
            "addressLocality": "Ras Tanura",
            "postalCode": "31941",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/ras-tanura",
        "priceRange": "$$"
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
                    <span className="font-semibold text-slate-900">Ras Tanura</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image
                        src="/ras-tanura-refinery.webp"
                        alt="Taxi Service in Ras Tanura Oil Hub"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full mb-6 animate-fade-in border border-slate-400/50">
                            <Fuel className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Energy Capital</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Ras Tanura Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-slate-50">
                            Professional transfers for the Oil & Gas sector. Connecting Najmah, Refinery, and DMM Airport.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Ras%20Tanura." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Ras Tanura</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local rides in Rahimah/Najmah cost <span className="font-bold text-slate-700">Get Quote</span>.
                        Airport transfers to Dammam (DMM) are typically <span className="font-bold text-slate-700">Get Quote</span>.
                        Trips to Jubail Industrial City average <span className="font-bold text-slate-700">Get Quote</span>.
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
                                    Why Haram Taxi RT?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Briefcase className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Business Focus</h3>
                                            <p className="text-sm text-gray-600">Clean, unmarked sedans perfect for corporate meetings and executive travel.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Shift Punctuality</h3>
                                            <p className="text-sm text-gray-600">We understand shift schedules and guarantee on-time pickups for work commutes.</p>
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
                                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-slate-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ras Tanura FAQs</h2>
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
                                    <p className="text-sm opacity-90 mt-1">Corporate & Airport</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Ras%20Tanura." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Najmah Compound Gate</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Refinery Visitor Gate</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Ras Tanura Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Rahimah Commercial Center</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Ras Tanura" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Lift to Main Camp?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Our drivers are familiar with all Ras Tanura gates and checkpoints.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-6 text-lg font-bold">
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

// Helper component for Plane Icon
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

