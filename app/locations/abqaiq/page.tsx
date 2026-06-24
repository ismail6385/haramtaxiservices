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
        canonical: 'https://haramtaxiservice.com/locations/abqaiq',
    },
    title: 'Taxi Service in Abqaiq | Aramco Community Taxi',
    description: 'Premier taxi service in Abqaiq (Buqayq). Reliable transfers to Dammam Airport, Hofuf, and Dhahran. Serving Aramco compounds.',
    keywords: ['taxi Abqaiq', 'Buqayq taxi service', 'Aramco airline taxi', 'Abqaiq to Dammam airport', 'Abqaiq to Hofuf taxi'],
    openGraph: {
        title: 'Taxi Service in Abqaiq | Oil Industry Hub',
        description: 'Trusted drivers in Abqaiq. Safe transport for Aramco employees and families.',
        url: 'https://haramtaxiservice.com/locations/abqaiq',
        type: 'website',
    },
};

export default function AbqaiqLocationPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Timely pickups for flights at King Fahd International Airport (KFIA) and Al Ahsa Airport suitable for Aramco schedules.',
            icon: Globe,
            href: '/services/airport-taxi'
        },
        {
            name: 'Corporate Transport',
            description: 'Executive cars for business travel to Dhahran Techno Valley and Aramco HQ.',
            icon: Briefcase,
            href: '/services/business-taxi'
        },
        {
            name: 'Hofuf Connection',
            description: 'Regular trips to Al Ahsa (Hofuf) for shopping, dining, and family visits.',
            icon: MapPin,
            href: '/services/hofuf-taxi'
        },
        {
            name: 'Dammam/Khobar Trip',
            description: 'Weekend getaways to the Corniche and malls in Dammam and Al Khobar.',
            icon: ArrowRight,
            href: '/services/dammam-taxi'
        }
    ];

    const faqs = [
        {
            question: "How long is the drive to Dammam Airport?",
            answer: "It takes approximately a estimated time to reach King Fahd International Airport from Abqaiq."
        },
        {
            question: "Do you enter the Aramco compound?",
            answer: "We can drop off and pick up at the main gates. For entry, a gate pass or resident arrangement is required."
        },
        {
            question: "Can I book a taxi to Bahrain?",
            answer: "Yes, we provide cross-causeway services to Bahrain for weekends or business meetings."
        },
        {
            question: "Is service available early morning?",
            answer: "Yes, we operate 24/7. Early morning airport runs are our specialty."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Abqaiq",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Abqaiq",
            "postalCode": "33261",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/abqaiq",
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
        <div className="bg-yellow-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-yellow-100 py-4 border-b border-amber-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-yellow-900/60">
                    <Link href="/" className="hover:text-yellow-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-yellow-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-yellow-900">Abqaiq</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-yellow-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-yellow-800 z-0">
                    <Image
                        src="/abqaiq-industry.webp"
                        alt="Taxi Service in Abqaiq"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 rounded-full mb-6 animate-fade-in border border-amber-400/50">
                            <Briefcase className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Energy Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Abqaiq Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-yellow-50">
                            Connecting the Energy City to airports, Dhahran, and Al Ahsa with professionalism.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Abqaiq." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Abqaiq?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Transfers to Dammam Airport range from <span className="font-bold text-yellow-700">Get Quote</span>.
                        Rides to Al Hofuf typically cost <span className="font-bold text-yellow-700">Get Quote</span>.
                        Trips to Al Khobar or Dhahran are around <span className="font-bold text-yellow-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-yellow-600" />
                                    Why Haram Taxi Abqaiq?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Briefcase className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Corporate Standard</h3>
                                            <p className="text-sm text-gray-600">Our cars are clean, smoke-free, and driven by professionals accustomed to corporate clients.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Shift Friendly</h3>
                                            <p className="text-sm text-gray-600">We understand industrial shift timings and are available 24/7 for safe commutes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Abqaiq Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-yellow-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-yellow-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Abqaiq FAQs</h2>
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
                                <div className="bg-yellow-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Abqaiq & Airport</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Abqaiq." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-yellow-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Aramco Main Gate</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Abqaiq Train Station</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Senior Staff Camp</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Dhahran Highway</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Abqaiq" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Lift from Abqaiq?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The preferred choice for energy sector professionals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-6 text-lg font-bold">
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



