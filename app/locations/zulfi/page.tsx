import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Tent, Mountain, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/zulfi',
    },
    title: 'Taxi Service in Zulfi | Desert Tours & Qassim Transfer',
    description: 'Reliable taxi service in Zulfi. Transfers to Qassim Airport, Riyadh, and desert trips to Al-Kasar Heritage Village.',
    keywords: ['taxi Zulfi', 'Zulfi desert safari taxi', 'taxi to Riyadh from Zulfi', 'Zulfi to Buraidah taxi', 'Al Zulfi transport'],
    openGraph: {
        title: 'Taxi Service in Zulfi | Dunes of Najd',
        description: 'Comfortable transport in Zulfi. Connecting you to the stunning sand dunes and heritage sites.',
        url: 'https://haramtaxiservice.com/locations/zulfi',
        type: 'website',
    },
};

export default function ZulfiLocationPage() {
    const services = [
        {
            name: 'Desert Dune Taxi',
            description: 'Off-road capable rides to the famous Zulfi sand dunes for camping and sunset views.',
            icon: Tent,
            href: '/services/desert-safari-taxi'
        },
        {
            name: 'Qassim Airport (ELQ)',
            description: 'Reliable airport transfers to Prince Naif Regional Airport in Buraidah.',
            icon: ArrowRight,
            href: '/services/qassim-airport-taxi'
        },
        {
            name: 'Riyadh Connection',
            description: 'Direct, comfortable sedans for the 260km journey to Riyadh city or airport.',
            icon: MapPin,
            href: '/services/riyadh-taxi'
        },
        {
            name: 'Heritage Tours',
            description: 'Visits to Al-Kasar Heritage Village and Al-Sabalh Garden.',
            icon: Mountain,
            href: '/services/heritage-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Zulfi from Riyadh?",
            answer: "Zulfi is approximately 260km northwest of Riyadh. The drive takes about 2.5 to 3 hours."
        },
        {
            question: "Do you offer rides to the sand dunes?",
            answer: "Yes, we can drop you off at the popular camping spots near the Zulfi dunes."
        },
        {
            question: "Is there an airport in Zulfi?",
            answer: "No, the nearest major airport is Prince Naif Airport (ELQ) in Qassim, about 100km away."
        },
        {
            question: "Can I book a taxi for a family picnic?",
            answer: "Absolutely. We have larger vehicles suitable for families heading to Lake Al-Kasar or the parks."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Zulfi",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Faisal Road",
            "addressLocality": "Al Zulfi",
            "postalCode": "15971",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/zulfi",
        "priceRange": "$$"
    };

    return (
        <div className="bg-yellow-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-yellow-100 py-4 border-b border-yellow-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-yellow-900/60">
                    <Link href="/" className="hover:text-yellow-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-yellow-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-yellow-900">Zulfi</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-yellow-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-yellow-800 z-0">
                    <Image
                        src="/zulfi-dunes.webp"
                        alt="Taxi Service in Zulfi Sand Dunes"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 rounded-full mb-6 animate-fade-in border border-yellow-400/50">
                            <Tent className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Desert Gateway</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Zulfi Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-yellow-50">
                            Explore the majestic dunes and heritage of Al Zulfi.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Zulfi." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Book via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-white border-b border-yellow-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Zulfi</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local city rides range from <span className="font-bold text-yellow-700">Get Quote</span>.
                        Trips to Qassim Airport (ELQ) are typically <span className="font-bold text-yellow-700">affordable rates</span>.
                        Private transfers to Riyadh start around <span className="font-bold text-yellow-700">Get Quote</span>.
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
                                    Why Haram Taxi Zulfi?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Tent className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Desert Access</h3>
                                            <p className="text-sm text-gray-600">We know the safe drop-off points for the Zulfi dunes and camping areas.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Regional Link</h3>
                                            <p className="text-sm text-gray-600">Key connector between the Qassim region and the Riyadh province.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Zulfi Taxi Services</h2>
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Zulfi FAQs</h2>
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
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Desert & City Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                        <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                        <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Zulfi." target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold h-12">
                                                <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp Booking
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-yellow-600" /> Key Attractions
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Zulfi National Park (Dunes)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Al-Kasar Heritage Village</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Lake Al-Kasar</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Zulfi Colleges</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Zulfi" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready for the Golden Sands?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the best desert taxi service in the region.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg font-bold border-0">
                                <WhatsAppIcon className="w-5 h-5 mr-3" /> WhatsApp Booking
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
