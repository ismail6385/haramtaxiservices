import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Navigation, Plane, Globe, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/dammam',
    },
    title: 'Trusted Taxi Service in Dammam | Airport & Bahrain Causeway Transfers',
    description: 'Professional taxi service in Dammam. Airport transfers to King Fahd Int\'l (DMM), Bahrain Causeway rides, and intercity travel. Licensed & Insured.',
    keywords: ['taxi Dammam', 'Dammam airport taxi', 'taxi Dammam to Bahrain', 'Dammam taxi service', 'Uber alternative Dammam'],
    openGraph: {
        title: 'Taxi Service in Dammam | DMM Airport & Bahrain',
        description: 'Reliable taxi in Dammam. Servicing Airport (DMM), Al Khobar, and Bahrain Causeway. Book now.',
        url: 'https://haramtaxiservice.com/locations/dammam',
        type: 'website',
    },
};

export default function DammamLocationPage() {
    const services = [
        {
            name: 'DMM Airport Transfer',
            description: 'Fixed-rate pickups from King Fahd International Airport (DMM) to Dammam, Khobar, or Jubail.',
            icon: Plane,
            href: '/services/dammam-airport-transfer'
        },
        {
            name: 'Bahrain Causeway',
            description: 'Seamless cross-border taxi service from Dammam/Khobar to Bahrain. We assist with all travel requirements.',
            icon: Globe,
            href: '/services/dammam-to-bahrain'
        },
        {
            name: 'Intercity Travel',
            description: 'Private rides from Dammam to Riyadh (4 hrs) or Makkah/Madinah for Umrah and business.',
            icon: Navigation,
            href: '/routes/dammam-to-makkah'
        },
        {
            name: 'City Commute',
            description: 'Daily transfers within Dammam, Dhahran, and Al Khobar for business or leisure.',
            icon: Car,
            href: '/services/hourly-chauffeur'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Dammam Airport to the city?",
            answer: "Taxi fares from King Fahd International Airport (DMM) are determined by the vehicle type and your destination district in Dammam or Al Khobar. We offer fixed upfront quotes to ensure price certainty."
        },
        {
            question: "Can you take me from Dammam to Bahrain?",
            answer: "Yes! We specialize in King Fahd Causeway transfers. Our drivers are well-versed with the border procedures for a smooth and efficient crossing."
        },
        {
            question: "Do you service Aramco / Dhahran areas?",
            answer: "Yes, we provide reliable transportation for professionals needing access to Dhahran, Al Khobar, and the Aramco districts."
        },
        {
            question: "Is the taxi service available 24/7 in Dammam?",
            answer: "Absolutely. Whether your flight lands at midnight or you need a sunrise trip to the Causeway, our professional drivers are available 24/7."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Dammam",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Road",
            "addressLocality": "Dammam",
            "postalCode": "31411",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/dammam",
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
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-slate-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-slate-600">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-gray-900">Dammam</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-gray-900 z-0 text-center">
                    <Image
                        src="/dammam-corniche.webp"
                        alt="Taxi Service in Dammam"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-50"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500 rounded-full mb-6 italic">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Serving the Eastern Province</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Dammam&apos;s Trusted Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                            Seamless transfers for Dammam Airport (DMM), Bahrain Causeway, and Al Khobar.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dammam." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center border-0">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Book via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How do I book a taxi in Dammam?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We provide professional taxi services across Dammam, Al Khobar, and Dhahran.
                        Specializing in airport transfers for King Fahd International (DMM) and cross-border trips to Bahrain.
                        Get a fixed quote for your journey today.
                    </p>
                    <p className="text-sm text-gray-500 mt-2 italic">*All fares are fixed to avoid surprises.</p>
                </div>
            </section>

            {/* Service Details Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-slate-500" />
                                    Why Choose Haram Taxi Dammam?
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Licensed & Cross-Border Ready</strong>
                                            <p className="text-gray-600 text-sm">Officially authorized for Saudi operations and King Fahd Causeway crossings to Bahrain.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Fixed Rates, No Meters</strong>
                                            <p className="text-gray-600 text-sm">Transparent pricing for all airport transfers and city-to-city trips.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">Professional Chauffeurs</strong>
                                            <p className="text-gray-600 text-sm">Experienced drivers with excellent knowledge of Dammam, Al Khobar, and Dhahran.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-gray-900">24/7 Reliability</strong>
                                            <p className="text-gray-600 text-sm">Pre-book your ride anytime. We are always available for airport pickups and early morning trips.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Eastern Province Services</h2>
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
                                                        View {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study */}
                            <div className="bg-gradient-to-r from-teal-900 to-gray-900 text-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold mb-4 font-mono text-slate-300">DMM Airport Experience</h3>
                                <p className="text-gray-300 mb-4 font-medium">Safe Arrival at Midnight</p>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                                    A group of business travelers arrived at King Fahd Airport late at night. By pre-booking with us, they avoided the long queues and enjoyed a direct, professional ride to their hotel in Al Khobar.
                                </p>
                                <p className="text-white font-bold border-l-4 border-slate-500 pl-4">
                                    Result: Punctual pickup, professional driver, and a comfortable executive vehicle for the 45-minute journey.
                                </p>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dammam Taxi Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
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
                                <div className="bg-slate-600 p-6 text-white text-center">
                                    <h3 className="text-xl font-bold flex items-center justify-center gap-2 text-white">
                                        <Clock className="w-5 h-5 text-white" /> Get a Quote
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Chat via WhatsApp for instant pricing</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                        <p className="text-sm text-gray-600 mb-4 font-medium">Click below to start a WhatsApp chat with our team.</p>
                                        <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Dammam." target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold h-12 border-0">
                                                <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp Booking
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-slate-500" /> Coverage Area
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Serving the Greater Dammam Area:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div> Dammam City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div> Al Khobar / Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div> Dhahran District</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div> King Fahd Airport (DMM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div> Jubail & Beyond</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Dammam" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to Ride in Dammam?</h2>
                    <p className="text-xl text-gray-400 mb-8 font-light">
                        Experience the leading taxi service in the Eastern Province. Professional, Reliable, and Safe.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-slate-500 hover:bg-slate-600 text-white px-10 py-6 text-lg font-bold border-0">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-[#25D366] hover:text-white px-10 py-6 text-lg">
                                <WhatsAppIcon className="w-5 h-5 mr-2" />
                                WhatsApp Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

