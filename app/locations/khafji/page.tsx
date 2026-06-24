import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Anchor, Briefcase, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/khafji',
    },
    title: 'Taxi Service in Khafji | Kuwait Border & Joint Operations',
    description: 'Trusted taxi service in Khafji. Transfers to Kuwait Border (Al Khafji Joint Operations), Dammam Airport, and local business hubs.',
    keywords: ['taxi Khafji', 'Khafji Kuwait border taxi', 'Khafji to Dammam taxi', 'KJO taxi', 'Al Khafji Joint Operations taxi'],
    openGraph: {
        title: 'Taxi Service in Khafji | Border & Business',
        description: 'Reliable transport in Al Khafji. Connecting you to the Kuwait Border and Dammam/Khobar.',
        url: 'https://haramtaxiservice.com/locations/khafji',
        type: 'website',
    },
};

export default function KhafjiLocationPage() {
    const services = [
        {
            name: 'Kuwait Border Transport',
            description: 'Drop-off at the Saudi side of the Khafji-Kuwait border crossing.',
            icon: Shield,
            href: '/services/kuwait-border-taxi'
        },
        {
            name: 'KJO Transfer',
            description: 'Corporate transport to Al Khafji Joint Operations (KJO) and oil sector offices.',
            icon: Briefcase,
            href: '/services/kjo-taxi'
        },
        {
            name: 'Dammam Airport Transfer',
            description: 'Long-distance taxi to King Fahd International Airport (DMM) - approx. 3 hours.',
            icon: ArrowRight,
            href: '/services/dammam-airport-taxi'
        },
        {
            name: 'Local City Rides',
            description: 'Quick and reliable rides within Khafji city, beach corniche, and markets.',
            icon: MapPin,
            href: '/services/city-taxi'
        }
    ];

    const faqs = [
        {
            question: "Do you cross the border into Kuwait?",
            answer: "We provide transport to the Saudi passport control at the Khafji border. You will need to arrange separate transport or walk across depending on regulations."
        },
        {
            question: "How far is Dammam Airport from Khafji?",
            answer: "King Fahd International Airport (DMM) is about a short distance south of Khafji, roughly a 3-hour drive."
        },
        {
            question: "Do you serve KJO employees?",
            answer: "Yes, we offer contract and on-demand rides for Al Khafji Joint Operations staff and contractors."
        },
        {
            question: "Is the road to Dammam safe?",
            answer: "The coastal highway to Dammam is excellent. Our drivers are experienced with long-distance highway travel."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Khafji",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Faisal Road",
            "addressLocality": "Al Khafji",
            "postalCode": "39271",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/khafji",
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
        <div className="bg-indigo-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-indigo-100 py-4 border-b border-indigo-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-indigo-900/60">
                    <Link href="/" className="hover:text-indigo-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-indigo-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-indigo-900">Al Khafji</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-indigo-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-indigo-800 z-0">
                    <Image
                        src="/khafji-corniche.webp"
                        alt="Taxi Service in Khafji and Kuwait Border"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full mb-6 animate-fade-in border border-indigo-400/50">
                            <Anchor className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to Kuwait</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Khafji Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-indigo-50">
                            Connecting the Eastern Province to the Kuwaiti Border. Reliable KJO Transfers.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khafji." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-indigo-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Al Khafji?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A local taxi ride in Khafji typically costs <span className="font-bold text-indigo-700">Get Quote</span>.
                        Transfers to the Kuwait Border post are around <span className="font-bold text-indigo-700">Get Quote</span>.
                        Long distance to Dammam Airport starts from <span className="font-bold text-indigo-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-indigo-600" />
                                    Why Haram Taxi Khafji?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Briefcase className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Corporate Trusted</h3>
                                            <p className="text-sm text-gray-600">Preferred by oil & gas professionals for daily commutes and airport runs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Efficiency</h3>
                                            <p className="text-sm text-gray-600">We ensure timely drop-offs at the border crossing to keep your travel on schedule.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Khafji Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Service Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Khafji" targetCountry="Kuwait" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Khafji FAQs</h2>
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
                                <div className="bg-indigo-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Border & Airport Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Khafji." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-indigo-600" /> Key Landmarks
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Kuwait Border Crossing</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Al Khafji Joint Operations (KJO)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Khafji Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Khafji Mall</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Khafji" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Crossing to Kuwait?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Our drivers are the most experienced on the Khafji border route.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 text-lg font-bold">
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


