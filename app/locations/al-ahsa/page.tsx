import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Factory, Mountain, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-ahsa',
    },
    title: 'Taxi Service in Al Ahsa (Hofuf) | Qatar & UAE Border Transfer',
    description: 'Trusted taxi in Al Ahsa. Transfers to Salwa (Qatar Border) and Batha (UAE Border). Visit Al Qara Mountain and Al Ahsa Airport (HOF).',
    keywords: ['taxi Al Ahsa', 'Hofuf taxi', 'taxi to Qatar border', 'taxi to UAE border', 'Salwa border taxi', 'Batha border taxi'],
    openGraph: {
        title: 'Taxi Service in Al Ahsa | Hofuf & Border Transfers',
        description: 'Reliable rides in Al Ahsa. Border crossing transfers to Qatar and UAE. Visit the UNESCO Oasis.',
        url: 'https://haramtaxiservice.com/locations/al-ahsa',
        type: 'website',
    },
};

export default function AlAhsaLocationPage() {
    const services = [
        {
            name: 'Al Ahsa Airport (HOF) Transfer',
            description: 'Prompt pickup from Al Ahsa International Airport to Hofuf city center or Mubarraz.',
            icon: Car,
            href: '/services/al-ahsa-airport-taxi'
        },
        {
            name: 'Qatar Border (Salwa) Transfer',
            description: 'Direct taxi service to the Salwa border crossing for travel to Doha, Qatar.',
            icon: Globe,
            href: '/routes/al-ahsa-to-qatar'
        },
        {
            name: 'UAE Border (Batha) Transfer',
            description: 'Long-distance transfer to the Al Batha border crossing for travel to Abu Dhabi or Dubai.',
            icon: ArrowRight,
            href: '/routes/al-ahsa-to-uae'
        },
        {
            name: 'Al Qara Mountain Tour',
            description: 'Visit the famous Al Qara caves and the largest date palm oasis in the world.',
            icon: Mountain,
            href: '/services/al-qara-tour'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Hofuf to the Qatar border?",
            answer: "A trip from Hofuf to the Salwa border (Qatar) typically costs between Get Quote depending on the vehicle."
        },
        {
            question: "Do you cross the border into Qatar or UAE?",
            answer: "We maximize convenience by dropping you off at the Saudi passport control. Cross-border service requires special arrangements and higher fees."
        },
        {
            question: "Can I book a tour of the Al Ahsa Oasis?",
            answer: "Yes! We offer half-day and full-day tours covering Al Qara Mountain, the Judas Cave, and the historic Ibrahim Palace."
        },
        {
            question: "How far is the UAE border from Al Ahsa?",
            answer: "The Batha border crossing is approximately 280km from Hofuf, taking about 3 hours by taxi."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Ahsa",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdullah Road",
            "addressLocality": "Hofuf",
            "postalCode": "31982",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-ahsa",
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
        <div className="bg-emerald-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-emerald-100 py-4 border-b border-emerald-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/60">
                    <Link href="/" className="hover:text-emerald-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-emerald-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-emerald-900">Al Ahsa</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-emerald-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/al-qara-mountain.webp"
                        alt="Taxi Service in Al Ahsa Hofuf"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-full mb-6 animate-fade-in border border-emerald-400/50">
                            <Mountain className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">World&apos;s Largest Oasis</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Ahsa & Border Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-emerald-50">
                            Expert transfers to Salwa (Qatar) and Batha (UAE) borders from Hofuf and Al Ahsa Airport (HOF).
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Ahsa." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi from Al Ahsa to the border cost?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A one-way taxi from Al Ahsa (Hofuf) to the Salwa Border (Qatar) costs around <span className="font-bold text-emerald-700">Get Quote</span>.
                        Trips to the Batha Border (UAE) are longer and typically cost <span className="font-bold text-emerald-700">Get Quote</span>.
                        Local city rides start from <span className="font-bold text-emerald-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-emerald-600" />
                                    Why Choose Haram Taxi Al Ahsa?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Border Specialists</h3>
                                            <p className="text-sm text-gray-600">We specialize in transfers to Qatar and UAE borders, knowing the best times to travel.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Local Heritage Guides</h3>
                                            <p className="text-sm text-gray-600">Our drivers can take you to the best spots in the Oasis and Al Qara caves.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-ahsa Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hofuf & Border FAQs</h2>
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
                                <div className="bg-emerald-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Book Transfer
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Border Runs & Airport</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Ahsa." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-emerald-600" /> Coverage Area
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Hofuf City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Al Mubarraz</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Al Ahsa Airport (HOF)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Salwa Border (Qatar)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Batha Border (UAE)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Al Qara Mountain</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Ahsa" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Crossing the Border?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        The easiest way to get to Qatar or UAE borders from Saudia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg font-bold">
                                Book Border Taxi
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
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



