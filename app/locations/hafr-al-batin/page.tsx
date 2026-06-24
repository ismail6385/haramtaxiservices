import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/hafr-al-batin',
    },
    title: 'Taxi Service in Hafr Al Batin | Kuwait Border Transfer',
    description: 'Reliable taxi in Hafr Al Batin. Direct transfers to Al Raqi (Kuwait Border) and Qaisumah Airport (AQI). 24/7 Service.',
    keywords: ['taxi Hafr Al Batin', 'Kuwait border taxi', 'Al Raqi border taxi', 'Hafr Al Batin airport taxi', 'taxi to Kuwait'],
    openGraph: {
        title: 'Taxi Service in Hafr Al Batin | Kuwait Border',
        description: 'Professional transfers to the Kuwait border and Qaisumah Airport. Safe and affordable.',
        url: 'https://haramtaxiservice.com/locations/hafr-al-batin',
        type: 'website',
    },
};

export default function HafrLocationPage() {
    const services = [
        {
            name: 'Kuwait Border (Al Raqi) Transfer',
            description: 'Direct and fast taxi service to the Al Raqi border crossing for travelers heading to Kuwait.',
            icon: ArrowRight,
            href: '/routes/hafr-to-kuwait-border'
        },
        {
            name: 'Qaisumah Airport (AQI) Taxi',
            description: 'Punctual airport pickup and drop-off at Al Qaisumah/Hafr Al Batin Airport.',
            icon: Car,
            href: '/services/qaisumah-airport-taxi'
        },
        {
            name: 'Hafr to Riyadh',
            description: 'Long-distance intercity transfer to Riyadh via the Majmaah route (approx. 5 hours).',
            icon: MapPin,
            href: '/routes/hafr-to-riyadh'
        },
        {
            name: 'King Khalid Military City',
            description: 'Authorized drop-off at the gates of KKMC for personnel and visitors.',
            icon: Shield,
            href: '/services/kkmc-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the Kuwait border from Hafr Al Batin?",
            answer: "The Al Raqi border crossing is about 90km from the center of Hafr Al Batin, taking roughly 1 hour by taxi."
        },
        {
            question: "Do you take passengers inside Kuwait?",
            answer: "We drop you off at the Saudi passport control at Al Raqi. You will need to arrange Kuwaiti transport on the other side or we can help arrange a cross-border car for an extra fee."
        },
        {
            question: "How much is a taxi to the Kuwait border?",
            answer: "A standard sedan trip to the Al Raqi border typically costs a competitive rate."
        },
        {
            question: "Do you serve King Khalid Military City (KKMC)?",
            answer: "Yes, we frequently transport passengers to and from the KKMC main gates."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Hafr Al Batin",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Hafr Al Batin",
            "postalCode": "39921",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/hafr-al-batin",
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
                    <span className="font-semibold text-orange-900">Hafr Al Batin</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-orange-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/hafr-al-batin-desert.webp"
                        alt="Taxi Service in Hafr Al Batin and Kuwait Border"
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
                            <MapPin className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Gateway to Kuwait</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hafr Al Batin Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-orange-50">
                            Fast and safe transfers to the Al Raqi Kuwait Border and Qaisumah Airport (AQI).
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hafr%20Al%20Batin." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Hafr Al Batin?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Hafr Al Batin to the Kuwait Border (Al Raqi) typically costs <span className="font-bold text-orange-700">Get Quote</span>.
                        Transfers to Qaisumah Airport (AQI) are approximately <span className="font-bold text-orange-700">Get Quote</span>.
                        Long-distance rides to Riyadh start from <span className="font-bold text-orange-700">Get Quote</span>.
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
                                    Why Haram Taxi Hafr Al Batin?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Car className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Reliability</h3>
                                            <p className="text-sm text-gray-600">We ensure you reach the Kuwait border crossing on time, every time.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">KKMC Authorized</h3>
                                            <p className="text-sm text-gray-600">Trusted transport for military city personnel and visitors.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Hafr-al-batin Taxi Services</h2>
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
                                                        Booking {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Hafr Al Batin" targetCountry="Kuwait/Iraq" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hafr Travel FAQs</h2>
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
                                    <p className="text-sm opacity-90 mt-1">Border & Airport Service</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Hafr%20Al%20Batin." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-orange-600" /> Coverage Map
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Hafr Al Batin City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Al Raqi (Kuwait Border)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Qaisumah Airport (AQI)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> KKMC Military City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Al Qaisumah</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Hafr Al Batin" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Traveling to Kuwait?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We provide reliable connections to the border crossing 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-bold">
                                Book Border Ride
                            </Button>
                        </Link>
                        <a href="https://wa.me/966575806733">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                WhatsApp Now
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}



