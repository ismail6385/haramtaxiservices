import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, Star, AlertCircle, Wallet, MessageCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/jeddah',
    },
    title: 'Executive Chauffeur Service in Jeddah | Airport VIP Transfer - Haram Chauffeur',
    description: 'Experience premium chauffeur service in Jeddah. VIP airport transfers, city tours, and hotel pickups with professional drivers. Available 24/7. Book your executive ride now!',
    keywords: ['chauffeur service Jeddah', 'Jeddah airport VIP transport', 'executive car Jeddah', 'distinguished Jeddah chauffeur', 'VIP Jeddah transport'],
    openGraph: {
        title: 'Executive Chauffeur Service in Jeddah | VIP Airport Transfer',
        description: 'Elite chauffeur and VIP transport services in Jeddah. Professional, private, and reliable.',
        url: 'https://haramtaxiservice.com/locations/jeddah',
        type: 'website',
    },
};

export default function JeddahPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Reliable pickup from King Abdulaziz International Airport (KAIA) to your destination.',
            icon: Car,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'City Tours',
            description: 'Visit Al-Balad, Jeddah Corniche, and the Red Sea Mall with a local guide.',
            icon: MapPin,
            href: '/services/jeddah-city-tour'
        },
        {
            name: 'Transfer to Makkah',
            description: 'Direct ride to your Makkah hotel or the Haram (approx. 90 minutes).',
            icon: ArrowRight,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'Hotel Pickup',
            description: 'Convenient rides from any hotel, resort, or apartment in Jeddah.',
            icon: MapPin,
            href: '/booking'
        },
        {
            name: 'Business Travel',
            description: 'Professional chauffeurs for meetings and corporate events.',
            icon: Car,
            href: '/services/business-travel'
        },
        {
            name: '24/7 Service',
            description: 'Always available, day or night, for all your transportation needs.',
            icon: Clock,
            href: '/contact'
        },
    ];

    const features = [
        'Licensed Jeddah taxi drivers',
        'Clean and air-conditioned vehicles',
        'Competitive fixed rates - no hidden charges',
        '24/7 availability in Jeddah',
        'English & Arabic speaking drivers',
        'Airport meet & greet service',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "The taxi fare from King Abdulaziz International Airport (Jeddah) to Makkah is fixed based on vehicle type. The journey takes approximately 90 minutes. Book with us for transparent, upfront quotes."
        },
        {
            question: "Is taxi service available 24/7 in Jeddah?",
            answer: "Yes, our taxi service in Jeddah operates 24 hours a day, 7 days a week. Whether you need an early morning airport transfer or late-night city ride, we're always available to serve you."
        },
        {
            question: "How do I book a taxi in Jeddah?",
            answer: "You can book a taxi in Jeddah through our online booking form on this website or via WhatsApp. Simply share your pickup details, and we'll confirm your ride instantly."
        },
        {
            question: "Do you provide taxi service from Jeddah to Madinah?",
            answer: "Yes, we provide comfortable taxi service from Jeddah to Madinah. The journey takes approximately 4 hours. We recommend booking in advance for this intercity trip."
        },
        {
            question: "Are your Jeddah taxi drivers licensed?",
            answer: "Yes, all our drivers in Jeddah are fully licensed, experienced, and professionally trained. They have excellent knowledge of Jeddah city and surrounding areas."
        }
    ];

    const popularRoutes = [
        { from: 'Jeddah Airport', to: 'Makkah Hotels', duration: '90 min', price: 'Get Quote' },
        { from: 'Jeddah Airport', to: 'Jeddah City Center', duration: '30 min', price: 'Get Quote' },
        { from: 'Jeddah', to: 'Madinah', duration: '4 hours', price: 'Get Quote' },
        { from: 'Jeddah Corniche', to: 'Al-Balad', duration: '20 min', price: 'Get Quote' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Chauffeur Service - Jeddah",
        "image": "https://haramtaxiservice.com/jeddah-corniche-sunset.webp",
        "@id": "https://haramtaxiservice.com/locations/jeddah",
        "url": "https://haramtaxiservice.com/locations/jeddah",
        "telephone": "+996575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jeddah",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "postalCode": "21442",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.5433,
            "longitude": 39.1728
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": {
            "@type": "City",
            "name": "Jeddah"
        }
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-slate-500">Home</Link>
                            <span>/</span>
                            <Link href="/locations" className="hover:text-slate-500">Locations</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Jeddah</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative h-[500px] bg-gray-900">
                    <Image
                        src="/jeddah-corniche-view.webp"
                        alt="Taxi service in Jeddah - Jeddah Corniche sunset view"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Jeddah, Saudi Arabia</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Premium Chauffeur in <span className="text-brand-gold">Jeddah</span>
                                </h1>

                                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                                    Distinguished chauffeur service in Jeddah, the Gateway to the Holy Cities. We provide elite airport arrivals, executive intercity transfers, and bespoke Ziyarat experiences with absolute dignity.
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving Jeddah and surrounding areas within 50km radius</span>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jeddah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-12 bg-brand-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">24/7</div>
                                <div className="text-sm opacity-90">Service in Jeddah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">90 min</div>
                                <div className="text-sm opacity-90">To Makkah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm opacity-90">Hotels Covered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">1000+</div>
                                <div className="text-sm opacity-90">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Jeddah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Makkah</div>
                                    <div className="text-sm text-gray-500">Distance: 80km</div>
                                </div>
                                <div className="text-xl font-bold text-brand-navy">60 mins</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Madinah</div>
                                    <div className="text-sm text-gray-500">Distance: 420km</div>
                                </div>
                                <div className="text-xl font-bold text-slate-600">4 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">KAEC</div>
                                    <div className="text-sm text-gray-500">Distance: 100km</div>
                                </div>
                                <div className="text-xl font-bold text-slate-600">1.5 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Solved Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Taxi Challenges in Jeddah</h2>
                            <p className="text-xl text-gray-600">We solve the problems travelers often face at Jeddah Airport and city.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Chaos & Queues</h3>
                                <p className="text-gray-600 mb-4">Finding a taxi at King Abdulaziz International Airport (KAIA) can be chaotic, especially during peak seasons. Long queues are common.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Pre-booked Meet & Greet</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Unpredictable Meters</h3>
                                <p className="text-gray-600 mb-4">Street taxis often refuse to use meters or take longer routes, leading to higher fares than expected.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: upfront quotes with fixed rates</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Language Barriers</h3>
                                <p className="text-gray-600 mb-4">Communicating destination details to non-English speaking drivers can be stressful and lead to errors.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Professional Chauffeurs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost / Pricing Guide */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                                <Wallet className="w-4 h-4 text-slate-600" />
                                <span className="text-slate-800 text-sm font-semibold">Price Transparency</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chauffeur Fare Guide for Jeddah</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Unlike metered taxis that charge by time and distance, we offer competitive fixed rates based on vehicle type and destination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Affects Your Price?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Class</h4>
                                            <p className="text-gray-600 text-sm">Economy sedans are standard. SUVs and Large Vans for groups are available for extra capacity and comfort.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Distance & Route</h4>
                                            <p className="text-gray-600 text-sm">Longer trips like Jeddah to Makkah (80km) are priced at fixed rates, different from local city rides.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Seasonality</h4>
                                            <p className="text-gray-600 text-sm">Prices remain fair year-round, with only minor adjustments during high-demand periods like Ramadan and Hajj.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-center shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Why Fixed Quotes Win</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    With street taxis, traffic jams mean the meter keeps running. With Haram Taxi, you pay the agreed fixed price regardless of traffic delays on Medina Road or Haramain Highway.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-slate-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Get Your Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                            <p className="text-xl text-gray-600">Your journey in 3 simple steps</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book & Coordinate</h3>
                                <p className="text-center text-gray-600">Select your pickup, drop-off, and vehicle type. No payment needed to reserve. We&apos;ll coordinate via WhatsApp.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Receive Confirmation</h3>
                                <p className="text-center text-gray-600">Get an instant confirmation via WhatsApp or Email. We&apos;ll share driver details before your trip.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Meet & Ride</h3>
                                <p className="text-center text-gray-600">Driver meets you at the airport or hotel. Enjoy a comfortable ride to your destination.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services in Jeddah */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Services in Jeddah</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across Jeddah</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Link key={index} href={service.href} className="block group">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-transparent group-hover:border-slate-100">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-500 transition-colors">
                                            <service.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">{service.name}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Popular Routes from Jeddah */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Taxi Routes from Jeddah</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from Jeddah</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link href="/routes/jeddah-airport-to-makkah" className="block group">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-slate-300 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">From</div>
                                            <div className="font-bold text-gray-900">Jeddah Airport</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">To</div>
                                            <div className="font-bold text-gray-900">Makkah Hotels</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />
                                            90 min
                                        </div>
                                        <div className="font-semibold text-brand-gold uppercase tracking-wider text-xs">Executive Quote</div>
                                    </div>
                                </div>
                            </Link>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="font-bold text-gray-900">Jeddah Airport</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="font-bold text-gray-900">Jeddah City Center</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        30 min
                                    </div>
                                    <div className="font-semibold text-slate-500">Get Quote</div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="font-bold text-gray-900">Jeddah</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="font-bold text-gray-900">Madinah</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        4 hours
                                    </div>
                                    <div className="font-semibold text-slate-500">Get Quote</div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="font-bold text-gray-900">Jeddah Corniche</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="font-bold text-gray-900">Al-Balad</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        20 min
                                    </div>
                                    <div className="font-semibold text-slate-500">Get Quote</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Why Choose Our Jeddah Taxi Service?
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    We provide reliable, professional taxi services throughout Jeddah with experienced drivers who know the city well. From airport transfers to city tours, we ensure comfortable and safe transportation.
                                </p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/jeddah-corniche-road.webp"
                                    alt="Professional taxi service on Jeddah Corniche road"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jeddah Taxi Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Jeddah</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-gray-50 px-6 rounded-xl border-0"
                                >
                                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-slate-500 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-brand-navy text-white shadow-2xl">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Book Your Jeddah Taxi?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Professional taxi service in Jeddah available 24/7. Book now for instant confirmation!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white text-slate-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                    Reserve Your Jeddah Chauffeur Now
                                </Button>
                            </Link>
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Jeddah." target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-500 px-8 py-6 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
