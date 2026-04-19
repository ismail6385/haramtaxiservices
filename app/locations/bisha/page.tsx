import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Grape, Waves, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/bisha',
    },
    title: 'Taxi Service in Bisha | Airport Transfer & Heritage',
    description: 'Trusted taxi service in Bisha. Transfers to Bisha Airport (BHH), King Fahd Dam, and agricultural tours. Connecting Asir with Central Saudi.',
    keywords: ['taxi Bisha', 'Bisha airport taxi', 'King Fahd Dam taxi', 'Bisha date farm tour', 'taxi to Abha from Bisha'],
    openGraph: {
        title: 'Taxi Service in Bisha | Airport & Farm Tours',
        description: 'Reliable rides in Bisha. Airport transfers (BHH) and visits to the famous date palms and King Fahd Dam.',
        url: 'https://haramtaxiservice.com/locations/bisha',
        type: 'website',
    },
};

export default function BishaLocationPage() {
    const services = [
        {
            name: 'Bisha Airport (BHH) Taxi',
            description: 'Fast and comfortable transfers from Bisha Domestic Airport to your hotel or home.',
            icon: ArrowRight,
            href: '/services/bisha-airport-taxi'
        },
        {
            name: 'King Fahd Dam Visit',
            description: 'Scenic trips to one of the largest concrete dams in the Middle East, just south of Bisha.',
            icon: Waves,
            href: '/services/king-fahd-dam-taxi'
        },
        {
            name: 'Date Farm Tours',
            description: 'Experience the agricultural heart of Bisha with tours to local date palm farms.',
            icon: Grape,
            href: '/services/bisha-farm-tour'
        },
        {
            name: 'Intercity Taxi',
            description: 'Long-distance travel to Khamis Mushait, Abha, or Al Baha.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the King Fahd Dam from Bisha?",
            answer: "The King Fahd Dam is located about a short distance south of Bisha city, a pleasant 30-minute drive."
        },
        {
            question: "Do you offer rides to Abha?",
            answer: "Yes, we provide private taxi transfers to Abha and Khamis Mushait, which are about 250km (2.5 to 3 hours) away."
        },
        {
            question: "How much is a taxi from Bisha Airport to downtown?",
            answer: "A taxi from Bisha Airport (BHH) to the city center is very affordable, typically costing between Get Quote"
        },
        {
            question: "Are taxis available for the Bisha Date Festival?",
            answer: "Absolutely! We can arrange transport for visitors attending the annual Bisha Date Festival."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Bisha",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Abu Baker Al Siddiq Road",
            "addressLocality": "Bisha",
            "postalCode": "67711",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/bisha",
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
        <div className="bg-orange-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-orange-100 py-4 border-b border-orange-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-orange-900/60">
                    <Link href="/" className="hover:text-orange-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-orange-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-orange-900">Bisha</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-orange-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/bisha-palms.webp"
                        alt="Taxi Service in Bisha and Date Farms"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 rounded-full mb-6 animate-fade-in border border-orange-400/50">
                            <Grape className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">City of Palms</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Bisha Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-orange-50">
                            Your reliable connection to Bisha Airport (BHH), King Fahd Dam, and beyond.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Bisha." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-orange-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Bisha?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Bisha Airport (BHH) to the city center costs around <span className="font-bold text-orange-700">Get Quote</span>.
                        A round trip to King Fahd Dam with waiting time is typically <span className="font-bold text-orange-700">affordable rates</span>.
                        Intercity trips to Abha start from <span className="font-bold text-orange-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-orange-600" />
                                    Why Haram Taxi Bisha?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Grape className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Local Knowledge</h3>
                                            <p className="text-sm text-gray-600">We know every farm road and the best spots to view the King Fahd Dam.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Regional Connector</h3>
                                            <p className="text-sm text-gray-600">We regularly connect passengers between the Asir highlands and the central Nejd region.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Bisha Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        View Service <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bisha Visitor Guide</h2>
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
                                <div className="bg-orange-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Airport & City Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Bisha." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-orange-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Bisha City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Bisha Airport (BHH)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> King Fahd Dam</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> University of Bisha</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Date Market</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Bisha" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Ride in Bisha?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the hospitality of the southern region with our prompt service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-bold">
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


