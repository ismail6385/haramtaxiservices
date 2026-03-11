import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/dhahran',
    },
    title: 'Taxi Service in Dhahran | Aramco & Techno Valley',
    description: 'Executive taxi service in Dhahran. Serving Saudi Aramco Camp, KFUPM, and Techno Valley. Reliable airport transfers to Dammam Airport.',
    keywords: ['taxi Dhahran', 'Dhahran taxi service', 'Aramco taxi', 'KFUPM taxi', 'Dhahran to Bahrain taxi'],
    openGraph: {
        title: 'Taxi Service in Dhahran | Energy Capital',
        description: 'Professional transport in Dhahran. Safe rides for Aramco employees, KFUPM students, and business travelers.',
        url: 'https://haramtaxiservice.com/locations/dhahran',
        type: 'website',
    },
};

export default function DhahranLocationPage() {
    const services = [
        {
            name: 'Aramco Camp Transfer',
            description: 'Authorized pickups/drop-offs at Saudi Aramco residential and office gates.',
            icon: Briefcase,
            href: '/services/aramco-taxi'
        },
        {
            name: 'Airport Transfer (DMM)',
            description: 'Executive chauffeured rides to King Fahd International Airport (45 mins).',
            icon: Globe,
            href: '/services/dammam-airport-taxi'
        },
        {
            name: 'KFUPM & Techno Valley',
            description: 'Reliable transport for university students, faculty, and visiting researchers.',
            icon: MapPin,
            href: '/services/kfupm-taxi'
        },
        {
            name: 'Bahrain Causeway',
            description: 'Direct trips to Bahrain via the King Fahd Causeway for weekend or business.',
            icon: ArrowRight,
            href: '/services/bahrain-taxi'
        }
    ];

    const faqs = [
        {
            question: "Do you have access to inside Aramco Camp?",
            answer: "We can drop off at all main gates. Gate entry requires a specific visitor pass arranged by the resident."
        },
        {
            question: "How far is Dhahran from Dammam Airport?",
            answer: "It is approximately 30km. The journey takes about a reasonable time via the highway."
        },
        {
            question: "Can I book a monthly service for KFUPM?",
            answer: "Yes, we offer recurring booking packages for students and faculty members."
        },
        {
            question: "Is travel to Bahrain available?",
            answer: "Yes, we provide cross-border taxi services. Please ensure your travel documents are ready."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Dhahran",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Sultan Road",
            "addressLocality": "Dhahran",
            "postalCode": "31261",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/dhahran",
        "priceRange": "$$"
    };

    return (
        <div className="bg-blue-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-blue-100 py-4 border-b border-blue-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-blue-900/60">
                    <Link href="/" className="hover:text-blue-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-blue-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-blue-900">Dhahran</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-blue-800 z-0">
                    <Image
                        src="/dhahran-ithra.webp"
                        alt="Taxi Service in Dhahran Saudi Arabia"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full mb-6 animate-fade-in border border-blue-400/50">
                            <Briefcase className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Global Energy Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Dhahran Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-blue-50">
                            Premium transport for Aramco, KFUPM, and the Eastern Province.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dhahran." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-blue-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Dhahran</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Rides to Dammam Airport typically cost <span className="font-bold text-blue-700">Get Quote</span>.
                        Transfers to Bahrain start from <span className="font-bold text-blue-700">Get Quote</span>.
                        Local trips to Khobar or Dammam are usually <span className="font-bold text-blue-700">Get Quote</span>.
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
                                    Why Haram Taxi Dhahran?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Briefcase className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Corporate Focus</h3>
                                            <p className="text-sm text-gray-600">Tailored for business executives and Aramco professionals requiring punctuality.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Ithra Visitors</h3>
                                            <p className="text-sm text-gray-600">Frequent services to the King Abdulaziz Center for World Culture (Ithra).</p>
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
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dhahran FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Executive Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Dhahran & Aramco</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dhahran." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-blue-600" /> Key Landmarks
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Saudi Aramco HQ</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Ithra (Cultural Center)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> KFUPM University</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Dhahran Mall</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Dhahran" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Business or Leisure in Dhahran?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The gold standard in safe, reliable transportation for the Energy City.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold">
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

