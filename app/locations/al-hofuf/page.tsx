import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import { MapPin, Clock, Shield, Globe, Landmark, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-hofuf',
    },
    title: 'Taxi Service in Al Hofuf | Al Ahsa Oasis Taxi',
    description: 'Premier taxi service in Al Hofuf and Al Ahsa. Transfers to Al Ahsa Airport, Al Qara Mountain, and Riyadh. 24/7 Service.',
    keywords: ['taxi Al Hofuf', 'Al Ahsa taxi', 'Al Ahsa airport taxi', 'taxi to Al Qara', 'Hofuf local taxi'],
    openGraph: {
        title: 'Taxi Service in Al Hofuf | UNESCO Oasis',
        description: "Reliable transport in Al Ahsa. Connecting you to the world's largest oasis and heritage sites.",
        url: 'https://haramtaxiservice.com/locations/al-hofuf',
        type: 'website',
    },
};

export default function AlHofufLocationPage() {
    const services = [
        {
            name: 'Al Ahsa Airport (HOF)',
            description: 'Prompt transfers to Al Ahsa International Airport for domestic and regional flights.',
            icon: Globe,
            href: '/services/al-ahsa-airport-taxi'
        },
        {
            name: 'Oasis & Heritage Tour',
            description: 'Guided rides to Al Qara Mountain, Jawatha Mosque, and the date palm oasis.',
            icon: Landmark,
            href: '/services/oasis-tour-taxi'
        },
        {
            name: 'Riyadh/Dammam',
            description: 'Comfortable long-distance travel to Riyadh (train station) or Dammam city.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        },
        {
            name: 'Local City Ride',
            description: 'Quick taxi service to Al Othaim Mall, King Faisal University, and local souqs.',
            icon: ArrowRight,
            href: '/services/local-taxi'
        }
    ];

    const faqs = [
        {
            question: "Is Al Hofuf different from Al Ahsa?",
            answer: "Al Hofuf is the major urban center within the Al Ahsa governorate. We serve the entire region."
        },
        {
            question: "How far is the airport from the city center?",
            answer: "Al Ahsa Airport is about a short distance from downtown Hofuf, a 20-minute drive."
        },
        {
            question: "Do you offer tours of Al Qara Mountain?",
            answer: "Yes, we provide round-trip services with waiting time for tourists visiting the caves and mountains."
        },
        {
            question: "Can I get a taxi to the train station?",
            answer: "Absolutely. We offer timely drop-offs to the SAR Railway Station for trains to Riyadh and Dammam."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Haram Taxi Service Al Hofuf",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966575806733",
        "email": "booking@haramtaxiservice.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Road",
            "addressLocality": "Al Hofuf",
            "postalCode": "31982",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-hofuf",
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
            <div className="bg-yellow-100 py-4 border-b border-yellow-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-yellow-900/60">
                    <Link href="/" className="hover:text-yellow-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-yellow-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-yellow-900">Al Hofuf</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-yellow-900/50 z-10"></div>
                <div className="absolute inset-0 bg-yellow-800 z-0">
                    <Image
                        src="/al-hofuf-oasis.webp"
                        alt="Taxi Service in Al Hofuf Oasis"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 rounded-full mb-6 border border-yellow-400/50">
                            <Landmark className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">UNESCO World Heritage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Hofuf Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-yellow-50">
                            Explore the world&apos;s largest oasis. Safe rides to heritage sites, airports, and beyond.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Hofuf." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Al Hofuf?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Airport transfers to Al Ahsa Airport usually cost <span className="font-bold text-yellow-700">Get Quote</span>.
                        Tours to Al Qara Mountain run around <span className="font-bold text-yellow-700">Get Quote</span> per trip.
                        Local city rides start from <span className="font-bold text-yellow-700">Get Quote</span>.
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
                                    Why Haram Taxi Hofuf?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Heritage Experts</h3>
                                            <p className="text-sm text-gray-600">Our drivers can take you to all the hidden gems of the Al Ahsa Oasis and historical souqs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Station Transfers</h3>
                                            <p className="text-sm text-gray-600">Reliable pickups and drops for SAR train passengers arriving from Riyadh or Dammam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-hofuf Taxi Services</h2>
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Hofuf FAQs</h2>
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
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-yellow-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Hofuf & Oasis Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                        <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                        <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Hofuf." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-yellow-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Al Qara Mountain</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Jawatha Mosque</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Qaisariah Souq</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Al Ahsa Mall</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Hofuf" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Discover Al Ahsa</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The best way to travel around the Oasis and Hofuf City.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966575806733">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg font-bold flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
