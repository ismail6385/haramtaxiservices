import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Leaf, Heart, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-jouf',
    },
    title: 'Taxi Service in Al Jouf (Sakaka) | Olive Oil Tours & Airport',
    description: 'Trusted taxi in Al Jouf. Transfers to Al Jouf Airport (AJF), Marid Castle tours, and visits to olive farms. Reliable Sakaka and Dumat al-Jandal transport.',
    keywords: ['taxi Al Jouf', 'Sakaka taxi', 'Al Jouf airport taxi', 'Dumat al-Jandal taxi', 'olive farm tour Saudi Arabia'],
    openGraph: {
        title: 'Taxi Service in Al Jouf (Sakaka) | Heritage & Airport',
        description: 'Explore the land of olives with a private driver. Airport transfers (AJF) and historical tours in Sakaka.',
        url: 'https://haramtaxiservice.com/locations/al-jouf',
        type: 'website',
    },
};

export default function AlJoufLocationPage() {
    const services = [
        {
            name: 'Al Jouf Airport (AJF) Taxi',
            description: 'Fast and reliable pickup from Al Jouf Airport to Sakaka, Dumat al-Jandal, or Qurayyat.',
            icon: ArrowRight,
            href: '/services/al-jouf-airport-taxi'
        },
        {
            name: 'Olive Farm Tours',
            description: 'Visit the famous olive groves of Al Jouf and buy fresh olive oil directly from the source.',
            icon: Leaf,
            href: '/services/olive-farm-tour'
        },
        {
            name: 'Marid Castle & Heritage',
            description: 'Tour the historical Za&apos;bal Castle in Sakaka and Marid Castle in Dumat al-Jandal.',
            icon: Shield,
            href: '/services/al-jouf-heritage-tour'
        },
        {
            name: 'Intercity Transport',
            description: 'Comfortable transfers to Hail, Arar, or Tabuk by private car.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Dumat al-Jandal from Sakaka?",
            answer: "Dumat al-Jandal is about 50km from Sakaka city center, a drive of roughly a estimated time."
        },
        {
            question: "Can I book a tour of an olive farm?",
            answer: "Yes! Al Jouf is the &apos;Capital of Olives&apos;. We can arrange visits to major olive farms particularly during the harvest season (Jan-Feb)."
        },
        {
            question: "How much is a taxi from Al Jouf Airport to Sakaka?",
            answer: "A taxi from Al Jouf Airport (AJF) to downtown Sakaka typically costs between Get Quote"
        },
        {
            question: "Do you go to Qurayyat?",
            answer: "Yes, we provide long-distance transfers to Al Qurayyat (near the Jordan border), which is about 300km from Sakaka."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Jouf",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Faisal Road",
            "addressLocality": "Sakaka",
            "postalCode": "72341",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-jouf",
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
        <div className="bg-lime-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-lime-100 py-4 border-b border-lime-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-lime-900/60">
                    <Link href="/" className="hover:text-lime-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-lime-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-lime-900">Al Jouf (Sakaka)</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-lime-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/al-jouf-olive-farm.webp"
                        alt="Taxi Service in Al Jouf and Sakaka"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-600 rounded-full mb-6 animate-fade-in border border-lime-400/50">
                            <Leaf className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Capital of Olives</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Jouf Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-lime-50">
                            Explore Sakaka, Dumat al-Jandal, and Al Jouf Airport (AJF) with our local experts.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Jouf." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-lime-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Sakaka?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Al Jouf Airport (AJF) to Sakaka city center costs around <span className="font-bold text-lime-700">Get Quote</span>.
                        A round trip to Dumat al-Jandal (Marid Castle) is typically <span className="font-bold text-lime-700">affordable rates</span>.
                        Long-distance trips to Qurayyat start from <span className="font-bold text-lime-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-lime-600" />
                                    Why Haram Taxi Al Jouf?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                                            <Leaf className="w-5 h-5 text-lime-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Local Knowledge</h3>
                                            <p className="text-sm text-gray-600">We know the best olive farms and historical sites in Sakaka and Dumat al-Jandal.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                                            <Heart className="w-5 h-5 text-lime-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Airport Punctuality</h3>
                                            <p className="text-sm text-gray-600">We track all flights at AJF to ensure we are there when you land.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-jouf Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-lime-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-lime-600 font-semibold text-sm hover:underline flex items-center gap-1">
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
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Jouf Visitors Guide</h2>
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
                                <div className="bg-lime-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Sakaka & Airport Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Jouf." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-lime-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Sakaka City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Al Jouf Airport (AJF)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Za&apos;bal Castle</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Dumat al-Jandal Lake</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Marid Castle</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div> Qurayyat (300km)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Jouf" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Visiting Al Jouf?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Experience the heritage and nature of northern Saudi Arabia with comfort.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg font-bold">
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


