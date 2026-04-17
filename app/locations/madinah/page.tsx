import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';
import CustomerUpdates from '@/components/CustomerUpdates';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/madinah',
    },
    title: 'Executive Chauffeur Service in Madinah | Elite Ziyarat Tours - Haram Chauffeur',
    description: 'Book distinguished chauffeur service in Madinah. VIP airport transfers, hotel pickups, and exclusive Ziyarat tours. Experience the City of the Prophet with absolute serenity. Available 24/7.',
    keywords: ['Madinah chauffeur service', 'VIP transport Madinah', 'executive car Madinah', 'distinguished Madinah transport', 'Madinah Ziyarat chauffeur', 'luxury Madinah travel'],
    openGraph: {
        title: 'Executive Chauffeur Service in Madinah | Elite Ziyarat Tours',
        description: 'Elite chauffeur and VIP transport in Madinah. Airport transfers, Ziyarat tours, and intercity travel.',
        url: 'https://haramtaxiservice.com/locations/madinah',
        type: 'website',
    },
};

export default function MadinahPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Pickup from Prince Mohammad bin Abdulaziz Airport (MED) to your hotel.',
            icon: Car,
            href: '/routes/madinah-hotel-to-madinah-airport'
        },
        {
            name: 'Ziyarat Tours',
            description: 'Visit Quba Mosque, Mount Uhud, Qiblatain, and Seven Mosques.',
            icon: MapPin,
            href: '/routes/madinah-ziyarat-tour'
        },
        {
            name: 'Transfer to Makkah',
            description: 'Reliable travel to Makkah hotels or Haram (4.5 hours).',
            icon: ArrowRight,
            href: '/routes/makkah-to-madinah'
        },
        {
            name: 'Hotel Pickup',
            description: 'Service from Central Area (Markazia) and all Madinah hotels.',
            icon: MapPin,
            href: '/booking'
        },
        {
            name: 'Jeddah Airport Transfer',
            description: "Direct drop-off at Jeddah Airport (KAIA) from Madinah.",
            icon: Car,
            href: '/routes/madinah-hotel-to-jeddah-airport'
        },
        {
            name: 'Train Station Transfer',
            description: 'Transfers to Haramain High Speed Railway Station in Madinah.',
            icon: Clock,
            href: '/routes/train-station-transfers-madinah'
        },
    ];

    const features = [
        'Licensed Madinah taxi drivers',
        'Clean and air-conditioned vehicles',
        'Competitive fixed rates - no hidden charges',
        '24/7 availability in Madinah',
        'English & Arabic speaking drivers',
        'Ziyarat tour packages available',
    ];

    const faqs = [
        {
            question: "How much is a taxi from Madinah Airport to hotels?",
            answer: "The taxi fare from Prince Mohammad bin Abdulaziz Airport to Madinah hotels is fixed based on hotel location and vehicle type. The journey takes approximately 20 to 30 minutes."
        },
        {
            question: "Do you provide Ziyarat tours in Madinah?",
            answer: "Yes, we provide comprehensive Ziyarat tours in Madinah including visits to Quba Mosque, Mount Uhud, Qiblatain Mosque, and other historic Islamic sites. Our drivers are knowledgeable about all Ziyarat locations."
        },
        {
            question: "How long does it take from Madinah to Makkah by taxi?",
            answer: "The taxi journey from Madinah to Makkah takes approximately 4.5 hours via the Hijrah Highway. We provide comfortable vehicles with experienced drivers for this intercity trip."
        },
        {
            question: "Is taxi service available 24/7 in Madinah?",
            answer: "Yes, our taxi service in Madinah operates 24 hours a day, 7 days a week. Whether you need early morning airport transfer or late-night hotel pickup, we're always available."
        },
        {
            question: "Can I book a taxi for multiple days in Madinah?",
            answer: "Yes, we offer multi-day taxi rental services in Madinah. Perfect for families or groups who want dedicated transportation during their stay. Contact us for special rates."
        }
    ];

    const popularRoutes = [
        { from: 'Madinah Airport', to: 'Madinah Hotels', duration: '30 min' },
        { from: 'Madinah Hotel', to: 'Prophet\'s Mosque', duration: '5 min' },
        { from: 'Madinah', to: 'Makkah', duration: '4.5 hrs' },
        { from: 'Madinah', to: 'Quba Mosque', duration: '15 min' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Madinah",
        "image": "https://haramtaxiservice.com/madinah-prophets-mosque.webp",
        "@id": "https://haramtaxiservice.com/locations/madinah",
        "url": "https://haramtaxiservice.com/locations/madinah",
        "telephone": "+996575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Madinah",
            "addressLocality": "Madinah",
            "addressRegion": "Al Madinah Province",
            "postalCode": "42311",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.5247,
            "longitude": 39.5692
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": {
            "@type": "City",
            "name": "Madinah"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-slate-500">Home</Link>
                            <span>/</span>
                            <Link href="/locations" className="hover:text-slate-500">Locations</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Madinah</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative h-[500px] bg-gray-900">
                    <Image
                        src="/masjid-nabawi-madinah.webp"
                        alt="Taxi service in Madinah - Prophet's Mosque view"
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
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">The Enlightened City of Madinah</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Premium Chauffeur in <span className="text-brand-gold">Madinah</span>
                                </h1>

                                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                                    Premier chauffeur service in Madinah, the sanctuary of the Prophet (ﷺ). We provide elite airport arrivals, bespoke Ziyarat experiences to historical sites, and dignified intercity transit.
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving Madinah and surrounding areas within 50km radius</span>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Madinah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <WhatsAppIcon className="w-5 h-5 mr-2" />
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
                                <div className="text-sm opacity-90">Service in Madinah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">4.5 hrs</div>
                                <div className="text-sm opacity-90">To Makkah</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">30+</div>
                                <div className="text-sm opacity-90">Hotels Covered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">800+</div>
                                <div className="text-sm opacity-90">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Madinah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Makkah</div>
                                    <div className="text-sm text-gray-500">Distance: 450km</div>
                                </div>
                                <div className="text-xl font-bold text-brand-navy">4.5 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Jeddah Airport</div>
                                    <div className="text-sm text-gray-500">Distance: 420km</div>
                                </div>
                                <div className="text-xl font-bold text-slate-600">4 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Yanbu</div>
                                    <div className="text-sm text-gray-500">Distance: 230km</div>
                                </div>
                                <div className="text-xl font-bold text-slate-600">2.5 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Solved Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Taxi Challenges in Madinah</h2>
                            <p className="text-xl text-gray-600">We solve the problems visitors face when traveling to the Prophet&apos;s City.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Distance Challenge</h3>
                                <p className="text-gray-600 mb-4">Prince Mohammad Bin Abdulaziz Airport is 20km+ from most hotels. Finding reliable airport transfers can be stressful after a long flight.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Pre-arranged Meet & Greet with flight tracking</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Ziyarat Timing Confusion</h3>
                                <p className="text-gray-600 mb-4">Coordinating visits to Quba Mosque, Qiblatain, and Uhud can be confusing. Many drivers lack knowledge of optimal visit sequences.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Knowledgeable drivers with planned Ziyarat routes</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Zone Confusion</h3>
                                <p className="text-gray-600 mb-4">Hotels in Markaziyah vs outer ring areas require different navigation. Explaining locations to drivers can be frustrating.</p>
                                <div className="flex items-center text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: GPS coordinates and local area expertise</span>
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
                                <span className="text-slate-800 text-sm font-semibold">Clear Pricing</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Fare Guide for Madinah</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Competitive fixed rates for all routes, so you know exactly what you&apos;ll pay before you ride.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Determines Your Price?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Vehicle Selection</h4>
                                            <p className="text-gray-600 text-sm">Standard sedans for individuals/couples. Family vans for groups visiting Ziyarat sites together.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Trip Type</h4>
                                            <p className="text-gray-600 text-sm">Airport transfers are priced based on distance from local Ziyarat tours or intercity trips to Makkah.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Ziyarat Duration</h4>
                                            <p className="text-gray-600 text-sm">Half-day Ziyarat packages (3-4 hours) are available for visiting multiple historical sites efficiently.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-center shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Fixed Airport Rates</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    No matter what time your flight lands or how heavy the traffic is, you pay the same agreed price for airport transfers. No meter anxiety, no surprises.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-slate-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Book Your Transfer
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Madinah</h2>
                            <p className="text-xl text-gray-600">Hassle-free transportation from arrival to departure</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book with Flight Details</h3>
                                <p className="text-center text-gray-600">Share your flight number. We track your arrival and adjust pickup time automatically if delayed.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Airport Greeting</h3>
                                <p className="text-center text-gray-600">Driver waits at arrivals with a name board. Free waiting time included for flight delays.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-slate-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Relax & Arrive</h3>
                                <p className="text-center text-gray-600">Comfortable ride to your hotel or arrange a Ziyarat tour for the next day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services in Madinah */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in Madinah</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across Madinah</p>
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

                {/* Popular Routes */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Taxi Routes from Madinah</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from Madinah</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link href="/routes/madinah-hotel-to-madinah-airport" className="block group">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-slate-300 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">From</div>
                                            <div className="font-bold text-gray-900">Madinah Airport</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">To</div>
                                            <div className="font-bold text-gray-900">Madinah Hotels</div>
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
                            </Link>

                            <Link href="/routes/makkah-to-madinah" className="block group">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-slate-300 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">From</div>
                                            <div className="font-bold text-gray-900">Madinah</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">To</div>
                                            <div className="font-bold text-gray-900">Makkah</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />
                                            4.5 hrs
                                        </div>
                                        <div className="font-semibold text-slate-500">Get Quote</div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/routes/madinah-ziyarat-tour" className="block group">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-slate-300 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">From</div>
                                            <div className="font-bold text-gray-900">Madinah Hotel</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-500 mx-4 group-hover:translate-x-1 transition-transform" />
                                        <div className="flex-1">
                                            <div className="text-sm text-gray-600 mb-1">To</div>
                                            <div className="font-bold text-gray-900">Quba/Ziyarat</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />
                                            3 Hours
                                        </div>
                                        <div className="font-semibold text-slate-500">Get Quote</div>
                                    </div>
                                </div>
                            </Link>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">From</div>
                                        <div className="font-bold text-gray-900">Madinah Hotel</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">To</div>
                                        <div className="font-bold text-gray-900">Prophet&apos;s Mosque</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        10 min
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
                                    Why Choose Our Madinah Taxi Service?
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    We provide reliable, professional taxi services throughout Madinah with experienced drivers who know the city and Ziyarat locations well.
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
                                    src="/green-dome-detail.webp"
                                    alt="Professional taxi service near Green Dome Madinah"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customer Updates */}
                <CustomerUpdates location="Madinah" />

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Madinah Taxi Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Madinah</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 px-6 rounded-xl border-0">
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

                {/* CTA */}
                <section className="py-20 bg-brand-navy text-white shadow-2xl">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Madinah Taxi?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Professional taxi service in Madinah available 24/7. Book now for instant confirmation!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white text-slate-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                    Book Madinah Taxi Online
                                </Button>
                            </Link>
                            <a href="https://wa.me/996575806733">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-[#25D366] hover:text-white px-8 py-6 text-lg">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    WhatsApp for Booking
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
