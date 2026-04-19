import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Ship, Anchor, ArrowRight, Building, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/jazan',
    },
    title: 'Taxi Service in Jazan | Airport, Port & Farasan Ferry Transfers',
    description: 'Trusted taxi service in Jazan. Transfers to King Abdullah Airport (GIZ), Jazan Port for Farasan Ferry, and Economic City. 24/7 reliability.',
    keywords: ['taxi Jazan', 'Jazan airport taxi', 'Jazan to Farasan ferry taxi', 'Jizan taxi service', 'Uber Jous'],
    openGraph: {
        title: 'Taxi Service in Jazan | GIZ Airport & Port',
        description: 'Reliable taxi in Jazan. Servicing King Abdullah Airport, Ferry Terminal, and Industrial City. Book now.',
        url: 'https://haramtaxiservice.com/locations/jazan',
        type: 'website',
    },
};

export default function JazanLocationPage() {
    const services = [
        {
            name: 'Jazan Airport (GIZ) Transfer',
            description: 'Fast and reliable pickup from King Abdullah bin Abdulaziz Airport to Jazan City or Sabya.',
            icon: Car,
            href: '/services/jazan-airport-taxi'
        },
        {
            name: 'Farasan Island Ferry Transfer',
            description: 'Timely drop-off at Jazan Port for your ferry to the beautiful Farasan Islands.',
            icon: Ship,
            href: '/services/farasan-ferry-transfer'
        },
        {
            name: 'Jazan Economic City',
            description: 'Corporate transport to Jazan City for Primary and Downstream Industries (JCPDI).',
            icon: Building,
            href: '/services/jazan-economic-city'
        },
        {
            name: 'Intercity to Abha',
            description: 'Scenic private drive via the mountain roads to Abha and Khamis Mushait.',
            icon: MapPin,
            href: '/routes/jazan-to-abha'
        }
    ];

    const faqs = [
        {
            question: "How far is the ferry terminal from Jazan Airport?",
            answer: "The Jazan Port (ferry terminal) is about a comfortable drive from Jazan Airport (GIZ). We ensure you arrive with plenty of time before departure."
        },
        {
            question: "Do you go to Sabya and Abu Arish?",
            answer: "Yes, we cover all major towns in the Jazan region including Sabya, Abu Arish, Samtah, and Beish."
        },
        {
            question: "Is there Uber in Jazan?",
            answer: "Yes, but availability can be inconsistent, especially for early ferry departures or airport runs. Pre-booking a private taxi is safer."
        },
        {
            question: "Can you drive me to Abha?",
            answer: "Absolutely. We offer comfortable intercity transfers to Abha, allowing you to enjoy the stunning mountain views without the stress of driving."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Jazan",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Corniche Road",
            "addressLocality": "Jazan",
            "postalCode": "82722",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/jazan",
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
                    <span className="font-semibold text-orange-900">Jazan</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[550px] flex items-center">
                <div className="absolute inset-0 bg-orange-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/jazan-heritage-village.webp"
                        alt="Taxi Service in Jazan Saudi Arabia"
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
                            <Anchor className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">The Pearl of the South</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Jazan City Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-orange-50">
                            Connecting Jazan Airport, the Farasan Ferry Terminal, and the Economic City.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jazan." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Jazan?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A typical taxi fare from Jazan Airport (GIZ) to the city center or Ferry Terminal is between <span className="font-bold text-orange-700">Get Quote</span>.
                        Trips to surrounding towns like Sabya or Abu Arish range from <span className="font-bold text-orange-700">Get Quote</span>.
                        Always agree on a fix price or use a trusted booking service.
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
                                    Why Haram Taxi in Jazan?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Ferry Schedule Aligned</h3>
                                            <p className="text-sm text-gray-600">We track the Farasan ferry times to ensure you never miss your boat.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Industrial City Access</h3>
                                            <p className="text-sm text-gray-600">Familiar with the routes and checkpoints for Jazan Economic City (JCPDI).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                            <Car className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Clean, Cool Cars</h3>
                                            <p className="text-sm text-gray-600">Essential in Jazan&apos;s humid climate. Our AC is always well-maintained.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Jazan Taxi Service Areas</h2>
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
                                                        Book This Route <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Travel FAQs</h2>
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
                                    <p className="text-sm opacity-90 mt-1">Pay cash or transfer</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jazan." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-orange-600" /> Coverage
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Jazan City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> King Abdullah Airport (GIZ)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Jazan Port (Ferry)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Jazan University</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Sabya & Abu Arish</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div> Economic City (JCPDI)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Jazan" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Ride in Jazan?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        From the airport to the islands, we are your reliable local partner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg font-bold">
                                Book Jazan Taxi
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

