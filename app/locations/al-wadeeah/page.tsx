import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Car, ArrowRight, User, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-wadeeah',
    },
    title: 'Taxi Service in Al Wadeeah | Yemen Border Crossing',
    description: 'Trusted taxi service in Al Wadeeah. Direct transfers to Yemen border and Sharurah. Safe, licensed, and 24/7 border rides.',
    keywords: ['taxi Al Wadeeah', 'Al Wadeeah border taxi', 'Yemen border taxi Saudi', 'Sharurah to Wadeeah taxi', 'Al Wadeeah port transport'],
    openGraph: {
        title: 'Taxi Service in Al Wadeeah | Yemen Gateway',
        description: 'Reliable border transport. Connecting Sharurah and Najran to the Al Wadeeah Land Port.',
        url: 'https://haramtaxiservice.com/locations/al-wadeeah',
        type: 'website',
    },
};

export default function AlWadeeahLocationPage() {
    const services = [
        {
            name: 'Yemen Border Transfer',
            description: 'Direct taxi service to the Al Wadeeah Land Port for travelers heading to Yemen.',
            icon: Globe,
            href: '/services/yemen-border-taxi'
        },
        {
            name: 'Sharurah Connect',
            description: 'Quick rides to Sharurah city (approx. 50km) for hotels, airport, and markets.',
            icon: MapPin,
            href: '/services/sharurah-taxi'
        },
        {
            name: 'Najran Trip',
            description: 'Long-distance transfer to Najran city (approx. 350km) across the desert highway.',
            icon: Car,
            href: '/services/najran-taxi'
        },
        {
            name: 'Family Travel',
            description: 'Spacious vehicles for families traveling with luggage across the border.',
            icon: User,
            href: '/services/family-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Al Wadeeah from Sharurah?",
            answer: "It is roughly 50km south of Sharurah. The drive takes about a estimated time."
        },
        {
            question: "Do you cross into Yemen?",
            answer: "We transport you to the Saudi passport control at Al Wadeeah. You will need to process through to the Yemeni side."
        },
        {
            question: "Is the road safe?",
            answer: "The road from Sharurah to the border is a main highway and is secure. Our drivers are local and experienced."
        },
        {
            question: "Can I find a taxi at the border?",
            answer: "Taxis can be limited at the port itself. It is best to book your ride from Sharurah or pre-arrange a pickup."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Wadeeah",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Border Crossing Road",
            "addressLocality": "Al Wadeeah",
            "postalCode": "68611",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-wadeeah",
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
        <div className="bg-red-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-red-100 py-4 border-b border-red-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-red-900/60">
                    <Link href="/" className="hover:text-red-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-red-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-red-900">Al Wadeeah</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-red-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-red-800 z-0">
                    <Image
                        src="/wadeeah-border.webp"
                        alt="Taxi Service at Al Wadeeah Border"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full mb-6 animate-fade-in border border-red-400/50">
                            <Globe className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Primary Yemen Port</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Wadeeah Border Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-red-50">
                            The main gateway to Yemen. Secure and reliable transport from Sharurah and Najran.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Wadeeah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-red-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi to Al Wadeeah cost?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Rides from Sharurah to the border typically cost <span className="font-bold text-red-700">Get Quote</span>.
                        Long-distance transfers from Najran start around <span className="font-bold text-red-700">Get Quote</span>.
                        Family vans are available for larger groups and luggage.
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
                                    <Shield className="w-8 h-8 text-red-600" />
                                    Why Haram Taxi Al Wadeeah?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Safety First</h3>
                                            <p className="text-sm text-gray-600">We prioritize secure travel on border routes with registered, local drivers.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Seamless Connection</h3>
                                            <p className="text-sm text-gray-600">Perfect timing for transfers between Sharurah Airport (SHW) and the land port.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-wadeeah Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-red-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-red-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Al Wadeeah" targetCountry="Yemen" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Wadeeah FAQs</h2>
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
                                <div className="bg-red-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Yemen Border Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Wadeeah." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-red-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Al Wadeeah Land Port</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Customs Area</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div> Sharurah Highway</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Wadeeah" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Heading to the Border?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The most reliable connection for your journey south.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg font-bold">
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



