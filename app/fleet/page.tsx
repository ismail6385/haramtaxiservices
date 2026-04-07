import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Users, Briefcase, CheckCircle2, ArrowRight, Car, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/fleet',
    },
    title: 'Elite Chauffeur Fleet | Premium GMC & VIP Executive Sedans Saudi Arabia',
    description: 'Explore our distinguished chauffeur fleet in Saudi Arabia. Featuring the flagship GMC Yukon XL, executive Toyota Camry, and VIP family vans. Experience the ultimate sanctuary on the road.',
    keywords: ['chauffeur fleet Saudi Arabia', 'GMC Yukon VIP', 'executive sedan Makkah', 'premium family transport', 'luxury SUV chauffeur', 'VIP pilgrimage transport', 'Saudi Arabia executive car'],
    openGraph: {
        title: 'Elite Chauffeur Fleet | Premium Saudi VIP Transport',
        description: 'Elite SUVs, executive sedans, and VIP vans for distinguished travel in Saudi Arabia. Reserve your professional chauffeur today.',
        url: 'https://haramtaxiservice.com/fleet',
        type: 'website',
    },
};

export default function FleetPage() {
    const fleet = [
        {
            name: "GMC Yukon XL",
            image: "/gmc-yukon-xl-taxi.webp",
            passengers: 7,
            luggage: 5,
            category: "Luxury SUV",
            features: ["Luxury Interior", "Extra Legroom", "VIP Experience", "Premium Sound"],
            description: "Perfect for VIP travel and families seeking ultimate comfort",
            href: "/fleet/gmc-yukon",
            alt: "GMC Yukon XL luxury SUV for VIP chauffeur service in Saudi Arabia"
        },
        {
            name: "Toyota Camry Executive",
            image: "/toyota-camry-taxi-sedan.webp",
            passengers: 4,
            luggage: 2,
            category: "Executive Sedan",
            features: ["Discrete Travel", "Climate Control", "Professional Chauffeur", "Punctual Service"],
            description: "The refined choice for business executives and single-traveler transfers",
            href: "/fleet/toyota-camry",
            alt: "Toyota Camry executive chauffeur sedan for city transfers in Jeddah"
        },
        {
            name: "Hyundai Staria",
            image: "/hyundai-staria-family-taxi.webp",
            passengers: 7,
            luggage: 4,
            category: "Family Van",
            features: ["Modern Design", "Spacious", "Family Friendly", "USB Charging"],
            description: "Modern van perfect for families with children",
            href: "/fleet/hyundai-staria",
            alt: "Hyundai Staria modern family van for Umrah pilgrimage chauffeur service"
        },
        {
            name: "Toyota Hiace",
            image: "/toyota-hiace-commuter-van.webp",
            passengers: 11,
            luggage: 16,
            category: "Group Van",
            features: ["Group Travel", "Spacious", "Reliable", "Long Distance"],
            description: "Best choice for medium-sized groups and tours",
            href: "/fleet/toyota-hiace",
            alt: "Toyota Hiace commuter van for group transport in Makkah"
        },
        {
            name: "Toyota Coaster",
            image: "/toyota-coaster-minibus.webp",
            passengers: 17,
            luggage: 20,
            category: "Mini Bus",
            features: ["Large Groups", "Tour Bus", "Corporate", "Long Distance"],
            description: "Perfect for large groups and corporate events",
            href: "/fleet/toyota-coaster",
            alt: "Toyota Coaster minibus for corporate and group events in Riyadh"
        },
        {
            name: "Hyundai Starex",
            image: "/hyundai-starex-family-van.webp",
            passengers: 7,
            luggage: 10,
            category: "Van",
            features: ["Family Friendly", "Comfortable", "Reliable", "Airport Transfer"],
            description: "Reliable van for airport transfers and family trips",
            href: "/fleet/hyundai-starex",
            alt: "Hyundai Starex family van for airport transfers in Madinah"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-slate-500">Home</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Fleet</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy-pale/10 rounded-full mb-6">
                            <Car className="w-4 h-4 text-brand-gold" />
                            <span className="text-brand-navy text-sm font-bold uppercase tracking-wider">Elite Fleet Selection</span>
                        </div>

                        <h1 className="text-fluid-h1 font-bold text-gray-900 mb-6 underline decoration-brand-gold decoration-4 underline-offset-8">
                            Our <span className="text-brand-navy">Executive Fleet</span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                            Experience the pinnacle of comfort with our curated selection of late-model executive vehicles. From flagship SUVs to VIP family vans, we provide the ultimate sanctuary on the road.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-brand-gold mb-2">6</div>
                            <div className="text-sm text-gray-600">Vehicle Types</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-brand-gold mb-2">2024</div>
                            <div className="text-sm text-gray-600">Latest Models</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
                            <div className="text-sm text-gray-600">Clean & Safe</div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm border-b-2 border-brand-gold">
                            <div className="text-3xl font-bold text-brand-navy mb-2">24/7</div>
                            <div className="text-sm text-gray-600">VIP Service</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {fleet.map((vehicle, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                            {vehicle.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-gold transition-colors">
                                        {vehicle.name}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {vehicle.description}
                                    </p>

                                    {/* Capacity */}
                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-100">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Users className="w-5 h-5 text-brand-gold" />
                                            <span className="text-sm font-medium">{vehicle.passengers} Seats</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <Briefcase className="w-5 h-5 text-brand-gold" />
                                            <span className="text-sm font-medium">{vehicle.luggage} Bags</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button asChild className="flex-1 bg-brand-navy hover:bg-brand-navy-pale text-white group-hover:shadow-lg transition-all">
                                            <Link href={vehicle.href}>
                                                View {vehicle.name} Details
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                        <a 
                                            href={`https://wa.me/996575806733?text=Assalamu%20Alaikum%2C%20I%20want%20to%20get%20a%20quote%20for%20a%20${encodeURIComponent(vehicle.name)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                                                WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Fleet */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-fluid-h1 font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h2>
                        <p className="text-xl text-gray-600">Quality and comfort guaranteed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-brand-navy-pale/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-brand-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Meticulously Maintained</h3>
                            <p className="text-gray-600 font-light">All vehicles represent the pinnacle of Saudi transport standards, regularly serviced and inspected.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-brand-gold-pale/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Pristine & Sanitized</h3>
                            <p className="text-gray-600 font-light">Thoroughly detailed and sanitized before every pickup to ensure a fresh, welcoming environment.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-brand-navy-pale/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-brand-navy-dark" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">Contemporary Models</h3>
                            <p className="text-gray-600 font-light">Equipped with modern amenities, robust climate control, and advanced safety features for your comfort.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-fluid-h1 font-bold mb-6 font-display">Experience Distinguished Travel</h2>
                    <p className="text-xl mb-8 opacity-90 font-light">
                        The journey to the Holy Cities deserves a vehicle that matches the reverence of your pilgrimage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/996575806733"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-brand-gold text-brand-navy-dark hover:bg-brand-gold-dark px-12 py-7 text-xl font-bold shadow-xl border-none rounded-xl transition-all hover:scale-105">
                                <MessageCircle className="w-6 h-6 mr-2" /> WhatsApp for Booking
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white hover:text-brand-navy px-12 py-7 text-xl font-bold transition-all rounded-xl">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
