import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Factory, CheckCircle2, Waves, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/jubail',
    },
    title: 'Taxi Service in Jubail | Industrial City & Royal Commission',
    description: 'Premier taxi service in Jubail. Transfers to Jubail Industrial City, Royal Commission, and Dammam Airport (DMM). Contract transport available.',
    keywords: ['taxi Jubail', 'Jubail Industrial City taxi', 'Royal Commission transport', 'Jubail to Dammam taxi', 'Jubail airport transfer'],
    openGraph: {
        title: 'Taxi Service in Jubail | Industrial Hub Transport',
        description: 'Reliable transfers for Jubail Industrial City and Royal Commission. Corporate accounts and airport rides.',
        url: 'https://haramtaxiservice.com/locations/jubail',
        type: 'website',
    },
};

export default function JubailLocationPage() {
    const services = [
        {
            name: 'Jubail Industrial City Transfer',
            description: 'Authorized access transport to factories and companies within Jubail 1 and Jubail 2.',
            icon: Factory,
            href: '/services/jubail-industrial-taxi'
        },
        {
            name: 'DMM Airport Transfer',
            description: 'Fixed-rate airport taxi from Jubail to King Fahd International Airport (approx. 1 hour).',
            icon: ArrowRight,
            href: '/services/jubail-airport-taxi'
        },
        {
            name: 'Royal Commission Area',
            description: 'Premium chauffeur service within the residential and commercial districts of the Royal Commission.',
            icon: Shield,
            href: '/services/royal-commission-taxi'
        },
        {
            name: 'Staff Transport',
            description: 'Daily contract transportation for employees and staff members.',
            icon: CheckCircle2,
            href: '/services/staff-transport'
        }
    ];

    const faqs = [
        {
            question: "Do you have gate passes for Jubail Industrial City?",
            answer: "Our drivers are familiar with the security protocols. For restricted areas, we can coordinate with your host company for gate access."
        },
        {
            question: "How far is Jubail from Dammam Airport?",
            answer: "Jubail is approximately 30km from King Fahd International Airport (DMM), taking about a estimated time by car."
        },
        {
            question: "Can I book a monthly driver in Jubail?",
            answer: "Yes, we offer monthly chauffeur services for professionals working in the Royal Commission or Industrial City."
        },
        {
            question: "How much is a taxi from Jubail to Dammam?",
            answer: "A standard one-way trip between Jubail and Dammam typically costs between Get Quote"
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Jubail",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Fanateer Corniche",
            "addressLocality": "Jubail",
            "postalCode": "31961",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/jubail",
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
        <div className="bg-sky-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-sky-100 py-4 border-b border-sky-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-sky-900/60">
                    <Link href="/" className="hover:text-sky-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-sky-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-sky-900">Jubail</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-sky-900/60 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/jubail-corniche.webp"
                        alt="Taxi Service in Jubail Industrial City"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 rounded-full mb-6 animate-fade-in border border-sky-400/50">
                            <Factory className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Industrial Powerhouse</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Jubail Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-sky-50">
                            Professional transport for Jubail Industrial City, Royal Commission, and DMM Airport.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jubail." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Jubail?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Jubail to Dammam Airport (DMM) typically costs <span className="font-bold text-sky-700">Get Quote</span>.
                        Local rides within the Royal Commission area start from <span className="font-bold text-sky-700">Get Quote</span>.
                        Transfers to Khobar or Dammam city are generally <span className="font-bold text-sky-700">Get Quote</span>.
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
                                    Why Haram Taxi in Jubail?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                            <Factory className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Industry Focused</h3>
                                            <p className="text-sm text-gray-600">We specialize in serving corporate clients and industrial workers with punctual pickups.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Royal Commission Experts</h3>
                                            <p className="text-sm text-gray-600">Navigating the sectors of R.C. Jubail is our expertise, ensuring zero delays.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Jubail Taxi Services</h2>
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Jubail FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Book Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Industrial City & Airport</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jubail." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-sky-600" /> Key Locations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Jubail Industrial City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Royal Commission</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Al Fanateer Beach</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Dammam Airport (DMM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div> Jubail Commercial Port</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Jubail" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Ride in Jubail?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The preferred choice for industrial and corporate transport in the Eastern Province.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966575806733">
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



