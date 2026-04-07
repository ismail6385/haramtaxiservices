import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, MessageCircle, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/taif',
    },
    title: 'Elite Chauffeur Service in Taif | VIP Mountain Tours - Haram Chauffeur',
    description: 'Book premium chauffeur service in Taif. Mountain tours, city transfers, and hotel pickups. Available 24/7. Excellence in high-altitude travel.',
    keywords: ['chauffeur service Taif', 'Taif luxury transport', 'executive car Taif', 'Taif to Makkah private car', 'Taif mountain tour chauffeur'],
    openGraph: {
        title: 'Taxi Service in Taif | Mountain Tours & City Rides',
        description: 'Professional taxi service in Taif. Mountain tours, city transfers, hotel pickups. Book now!',
        url: 'https://haramtaxiservice.com/locations/taif',
        type: 'website',
    },
};

export default function TaifPage() {
    const services = [
        { name: 'City Transfer', description: 'Reliable taxi service within Taif city and suburbs.', icon: Car },
        { name: 'Mountain Tours', description: 'Scenic tours to Al Hada & Shafa mountains.', icon: MapPin },
        { name: 'Transfer to Makkah', description: 'Comfortable ride from Taif to Makkah via the scenic Al Hada road.', icon: ArrowRight },
        { name: 'Hotel Pickup', description: 'Prompt pickups from any hotel or resort in Taif.', icon: MapPin },
        { name: 'Rose Farm Tours', description: 'Visits to Taif’s world-famous rose farms and distilleries.', icon: Car },
        { name: '24/7 Service', description: 'Round-the-clock availability for all transport needs.', icon: Clock },
    ];

    const features = [
        'Licensed professional Taif taxi chauffeurs',
        'Clean, modern, and air-conditioned vehicles',
        'Fixed upfront quotes - no hidden charges',
        '24/7 reliability across Taif region',
        'English & Arabic speaking support',
        'Specialized mountain tour packages',
    ];

    const faqs = [
        {
            question: "How long is the taxi ride from Taif to Makkah?",
            answer: "The taxi journey from Taif to Makkah takes approximately 1.5 to 2 hours depending on traffic and the chosen route (Al Hada vs. As Sail Al Kabir). Prices are fixed based on vehicle type."
        },
        {
            question: "Do you provide mountain tour services in Taif?",
            answer: "Yes, we offer specialized mountain tours to Al-Hada and Shafa. Our chauffeurs are highly experienced with Taif's uniquely scenic and winding mountain roads."
        },
        {
            question: "Is taxi service available 24/7 in Taif?",
            answer: "Yes, our taxi services in Taif are available 24 hours a day. We recommend pre-booking for early morning airport transfers or late-night mountain returns."
        },
        {
            question: "Can you take us to the Taif rose farms?",
            answer: "Absolutely. During the rose season (spring), we provide dedicated tours to the most famous farms and traditional rose water factories in the highland areas."
        },
        {
            question: "Is there Uber available in Taif?",
            answer: "While apps exist, availability can be limited in mountain areas and for long-distance trips to Makkah. Pre-booking with us ensures a guaranteed chauffeur and a fixed price."
        }
    ];

    const popularRoutes = [
        { from: 'Taif', to: 'Makkah', duration: '1.5 hrs', price: 'Get Quote' },
        { from: 'Taif', to: 'Jeddah', duration: '2.5 hrs', price: 'Get Quote' },
        { from: 'Taif City', to: 'Al-Hada', duration: '30 min', price: 'Get Quote' },
        { from: 'Taif', to: 'Shafa Mountains', duration: '45 min', price: 'Get Quote' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Taif",
        "image": "https://haramtaxiservice.com/taif-mountains-view.webp",
        "@id": "https://haramtaxiservice.com/locations/taif",
        "url": "https://haramtaxiservice.com/locations/taif",
        "telephone": "+996575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Taif",
            "addressRegion": "Makkah Province",
            "postalCode": "26511",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.2703,
            "longitude": 40.4150
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": { "@type": "City", "name": "Taif" }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-slate-500">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/locations" className="hover:text-slate-500">Locations</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Taif</span>
                    </div>
                </div>

                <section className="relative h-[500px] bg-gray-900 border-b-4 border-slate-500">
                    <Image
                        src="/taif-mountains-view.webp"
                        alt="Taxi service in Taif - Mountain view"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500 rounded-full mb-6 italic">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold">Taif, Saudi Arabia</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                    Elite Chauffeur in <span className="text-brand-gold">Taif</span>
                                </h1>

                                <p className="text-xl text-gray-200 mb-6 font-light leading-relaxed">
                                    Experience the &quot;City of Roses&quot; with our elite VIP chauffeur service. We offer scenic mountain tours to Al Hada & Shafa, visits to historic rose farms, and dignified transfers to Makkah and Jeddah.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Taif." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center border-0">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-brand-navy text-white shadow-inner">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">Service in Taif</div></div>
                            <div><div className="text-3xl font-bold mb-2">90 min</div><div className="text-sm opacity-90">To Makkah</div></div>
                            <div><div className="text-3xl font-bold mb-2">30+</div><div className="text-sm opacity-90">Resorts Covered</div></div>
                            <div><div className="text-3xl font-bold mb-2">100%</div><div className="text-sm opacity-90">Price Certainty</div></div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 ">Estimated Travel Times from Taif</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between transition-shadow hover:shadow-md">
                                <div className="text-left">
                                    <div className="font-semibold text-gray-900">Makkah</div>
                                    <div className="text-xs text-gray-500">Distance: 90km</div>
                                </div>
                                <div className="text-xl font-bold text-brand-navy-dark">1.5 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between transition-shadow hover:shadow-md">
                                <div className="text-left">
                                    <div className="font-semibold text-gray-900">Jeddah</div>
                                    <div className="text-xs text-gray-500">Distance: 170km</div>
                                </div>
                                <div className="text-xl font-bold text-brand-navy-dark">2.5 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between transition-shadow hover:shadow-md">
                                <div className="text-left">
                                    <div className="font-semibold text-gray-900">Riyadh</div>
                                    <div className="text-xs text-gray-500">Distance: 780km</div>
                                </div>
                                <div className="text-xl font-bold text-brand-navy-dark">8 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taif Transport Solutions</h2>
                            <p className="text-xl text-gray-600 font-light">Solving common travel challenges in the Highlands.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Mountain Road Safety</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Taif&apos;s winding mountain routes (Al Hada) require specialized local experience, particularly during night travel or poor weather conditions.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span className="text-sm">Expert mountain-certified chauffeurs</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Navigating Tourist Sites</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Major spots like Shubra Palace and Rose Farms are geographically spread out, making ad-hoc taxi travel complicated for visitors.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span className="text-sm">Pre-planned local tour packages</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability Issues</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Unlike Riyadh or Jeddah, finding high-quality available taxis in residential or mountain resort areas can be unpredictable during summer peak seasons.</p>
                                <div className="flex items-center text-brand-navy-dark font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span className="text-sm">Guaranteed service with pre-booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-4">
                                <Wallet className="w-4 h-4 text-brand-navy-dark" />
                                <span className="text-slate-800 text-sm font-semibold">Fixed Price Transparency</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing in the City of Roses</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                We provide transparent, fixed-rate pricing for all mountain routes and city tours.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Factors</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Route Selection</h4>
                                            <p className="text-gray-600 text-xs">Different rates apply for mountain routes (Al Hada/Shifa) which require specific chauffeur expertise and fuel consumption.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Itinerary Length</h4>
                                            <p className="text-gray-600 text-xs">We offer both quick city transfers and comprehensive full-day tours covering all Taif landmarks.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-500 p-8 rounded-2xl text-white flex flex-col justify-center shadow-lg">
                                <h3 className="text-2xl font-bold mb-6">No Summer Surcharges</h3>
                                <p className="mb-6 opacity-95 text-lg font-light leading-relaxed">
                                    While the summer season brings high demand to Taif, Haram Taxi maintains ethical pricing. Get your fixed quote today and enjoy the mountain air without worrying about the meter.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-brand-navy-dark hover:bg-gray-100 w-full text-lg h-12 border-0 shadow-md">
                                        Get Transport Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 ">Taif Taxi Routes</h2>
                            <p className="text-xl text-gray-600 font-light">Reliable mountain and intercity transfers.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-500 mb-1">From</div>
                                            <div className="font-bold text-gray-900">{route.from}</div>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                                        <div className="flex-1 text-right">
                                            <div className="text-xs text-gray-500 mb-1">To</div>
                                            <div className="font-bold text-gray-900">{route.to}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600 font-medium font-sans">
                                            <Clock className="w-4 h-4" />{route.duration}
                                        </div>
                                        <div className="font-bold text-slate-500 font-sans">{route.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
                            <p className="text-xl text-gray-600 font-light">Everything you need to know about taxi service in Taif.</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-gray-100 shadow-sm">
                                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-slate-500 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed font-sans">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                <section className="py-20 bg-slate-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Plan Your Journey to Taif</h2>
                        <p className="text-xl mb-8 opacity-95 font-light">Professional taxi service in Taif available 24/7. Book now for a safe and comfortable ride!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white text-slate-500 hover:bg-gray-100 px-8 py-6 text-lg border-0 shadow-lg">
                                    Book Transport Online
                                </Button>
                            </Link>
                            <a href="https://wa.me/996575806733">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-500 px-8 py-6 text-lg">
                                    <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for Support
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container mx-auto px-4 py-20">
                <NearbyCities currentCity="Taif" />
            </div>
        </>
    );
}

