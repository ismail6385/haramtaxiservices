import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Train, Ship, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/kaec',
    },
    title: 'Taxi Service in KAEC (Rabigh) | Economic City & Train',
    description: 'Premier taxi service in King Abdullah Economic City (KAEC) and Rabigh. Transfers to Haramain Train Station, KAEC Port, and resorts. JED airport rides.',
    keywords: ['taxi KAEC', 'King Abdullah Economic City taxi', 'Haramain Train taxi', 'Rabigh taxi service', 'KAEC to Jeddah airport'],
    openGraph: {
        title: 'Taxi Service in KAEC (Rabigh)',
        description: 'Reliable transport for KAEC, Rabigh, and the Industrial Valley. Connect to Haramain Station and Jeddah Airport.',
        url: 'https://haramtaxiservice.com/locations/kaec',
        type: 'website',
    },
};

export default function KAECLocationPage() {
    const services = [
        {
            name: 'Haramain Train Station',
            description: 'Prompt pickup and drop-off at King Abdullah Economic City (KAEC) Railway Station.',
            icon: Train,
            href: '/services/kaec-train-station-taxi'
        },
        {
            name: 'KAEC Industrial Vally',
            description: 'Corporate transport for employees and visitors to the Industrial Valley and King Abdullah Port.',
            icon: Ship,
            href: '/services/industrial-valley-taxi'
        },
        {
            name: 'Jeddah Airport Transfer',
            description: 'Direct transfer from KAEC to King Abdulaziz International Airport (JED) in about 1 hour.',
            icon: ArrowRight,
            href: '/services/kaec-jeddah-airport-taxi'
        },
        {
            name: 'Rabigh City Taxi',
            description: 'Local taxi service within Rabigh city and Petro Rabigh complex.',
            icon: MapPin,
            href: '/services/rabigh-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is KAEC from Jeddah Airport?",
            answer: "King Abdullah Economic City is about 100km north of Jeddah Airport (JED), taking roughly a estimated time by car."
        },
        {
            question: "Can I get a taxi from the Haramain Train Station?",
            answer: "Yes, we offer pre-booked pickups from the KAEC Haramain Station to take you to your hotel, resort, or Rabigh."
        },
        {
            question: "Do you serve Petro Rabigh?",
            answer: "Yes, we provide transportation for professionals working at or visiting the Petro Rabigh industrial complex."
        },
        {
            question: "Is there a taxi service inside KAEC?",
            answer: "KAEC is a large development. While app-based rides can be scarce, our private booking service ensures you have a driver when you need one."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service KAEC",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bay La Sun District",
            "addressLocality": "King Abdullah Economic City",
            "postalCode": "23964",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/kaec",
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
                    <span className="font-semibold text-slate-900">KAEC (Rabigh)</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/kaec-canal.webp"
                        alt="Taxi Service in KAEC and Rabigh"
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
                            <Train className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Future Living</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            KAEC Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-slate-50">
                            Connecting King Abdullah Economic City, Rabigh, and the Haramain Railway.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Kaec." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in KAEC?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from KAEC to Jeddah Airport (JED) typically costs <span className="font-bold text-slate-700">Get Quote</span>.
                        Transfers from the Haramain Train Station to Bay La Sun or Marina start from <span className="font-bold text-slate-700">Get Quote</span>.
                        Rides to Rabigh city center are around <span className="font-bold text-slate-700">Get Quote</span>.
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
                                    Why Haram Taxi KAEC?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Train className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Station Connectivity</h3>
                                            <p className="text-sm text-gray-600">We bridge the gap between the Haramain Train Station and your final destination in KAEC or Rabigh.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Ship className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Industrial Access</h3>
                                            <p className="text-sm text-gray-600">Reliable transport for business meetings at King Abdullah Port and the Industrial Valley.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Kaec Taxi Services</h2>
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">KAEC Visitor FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Reserve Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">KAEC & Rabigh</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Kaec." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-slate-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Haramain Train Station</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Bay La Sun District</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Industrial Valley</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> King Abdullah Port</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Petro Rabigh</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Yam Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="KAEC" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Arriving by Train?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Our drivers are ready to pick you up from the KAEC station for a smooth final leg.
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


