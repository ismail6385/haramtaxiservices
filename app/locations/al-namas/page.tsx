import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Cloud, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-namas',
    },
    title: 'Taxi Service in Al Namas | City of Fog Taxi',
    description: 'Trusted taxi service in Al Namas and Tanomah. Transfers to Abha Airport, local parks, and scenic mountain tours. 24/7 Availability.',
    keywords: ['taxi Al Namas', 'Al Namas airport taxi', 'Tanomah taxi', 'Al Namas misty mountains', 'Abha to Al Namas taxi'],
    openGraph: {
        title: 'Taxi Service in Al Namas | Asir Mountains',
        description: 'Explore the City of Fog. Safe rides through the scenic Sarawat Mountains and Al Namas parks.',
        url: 'https://haramtaxiservice.com/locations/al-namas',
        type: 'website',
    },
};

export default function AlNamasLocationPage() {
    const services = [
        {
            name: 'Abha Airport (AHB)',
            description: 'Reliable transfers to Abha International Airport (approx. 150km).',
            icon: Globe,
            href: '/services/abha-airport-taxi'
        },
        {
            name: 'Scenic Mountain Tour',
            description: 'Guided tours of the misty Sarawat mountains, Shalal Dahna, and local parks.',
            icon: Cloud,
            href: '/services/mountain-tour-taxi'
        },
        {
            name: 'Tanomah & Billasmar',
            description: 'Intercity services to neighboring towns of Tanomah, Billasmar, and Bllahmar.',
            icon: MapPin,
            href: '/services/tanomah-taxi'
        },
        {
            name: 'Local Transport',
            description: 'Convenient shopping and hospital runs within Al Namas city limits.',
            icon: ArrowRight,
            href: '/services/local-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Al Namas from Abha?",
            answer: "It is about a short distance north of Abha. The scenic drive takes around 2 hours."
        },
        {
            question: "Do you serve Tanomah?",
            answer: "Yes, we provide taxi services throughout the Tanomah and Al Namas region."
        },
        {
            question: "Can I book a ride to Al Baha?",
            answer: "Yes, we offer long-distance transfers north to Al Baha and south to Abha/Jazan."
        },
        {
            question: "Is the road to Al Namas safe?",
            answer: "Yes, the main highway is well-maintained, and our drivers are experienced in mountain driving."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Namas",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Faisal Road",
            "addressLocality": "Al Namas",
            "postalCode": "67393",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-namas",
        "priceRange": "$$"
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-slate-100 py-4 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-900/60">
                    <Link href="/" className="hover:text-slate-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-slate-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-slate-900">Al Namas</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-slate-800 z-0">
                    <Image
                        src="/al-namas-fog.webp"
                        alt="Taxi Service in Al Namas City of Fog"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-full mb-6 animate-fade-in border border-slate-400/50">
                            <Cloud className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">City of Fog</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Namas Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-slate-50">
                            Safe and comfortable mountain transfers in the heart of Asir.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Namas." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Al Namas</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Transfers to Abha Airport are usually <span className="font-bold text-slate-700">Get Quote</span>.
                        Rides to Tanomah start from <span className="font-bold text-slate-700">Get Quote</span>.
                        Long-haul trips to Al Baha average <span className="font-bold text-slate-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-slate-600" />
                                    Why Haram Taxi Al Namas?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Cloud className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Mountain Experts</h3>
                                            <p className="text-sm text-gray-600">Our drivers are skilled in navigating the steep and winding roads of the Sarawat mountains safely.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Reliable Commutes</h3>
                                            <p className="text-sm text-gray-600">Timely daily services for teachers and government employees working in neighboring villages.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-slate-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Namas FAQs</h2>
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
                                <div className="bg-slate-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Ride
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Al Namas & Tanomah</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Namas." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-slate-600" /> Iconic Spots
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Al Namas Museum</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Sha&apos;af Al Walid Park</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Tanomah Waterfall</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div> Al Meger Tourist Village</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Namas" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Visiting the Fog City?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let us handle the driving so you can enjoy the view.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966569487569">
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

