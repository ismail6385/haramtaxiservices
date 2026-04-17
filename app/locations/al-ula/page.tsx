import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Bed, Palette, Mountain } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-ula',
    },
    title: 'Taxi Service in AlUla | Al-Ula Airport & Hegra Tours - Haram Taxi',
    description: 'Premier taxi service in Al Ula. Airport transfers (ULH), private tours to Hegra (Madain Saleh), Old Town, and Elephant Rock. Luxury SUVs available.',
    keywords: ['taxi Al Ula', 'AlUla airport transfer', 'Hegra tour taxi', 'Al Ula driver', 'Madain Saleh transport', 'AlUla Uber'],
    openGraph: {
        title: 'Taxi Service in AlUla | Hegra & Airport',
        description: 'Explore AlUla with our private chauffeur service. Airport transfers and historical tours.',
        url: 'https://haramtaxiservice.com/locations/al-ula',
        type: 'website',
    },
};

export default function AlUlaLocationPage() {
    const services = [
        {
            name: 'Airport Transfer (ULH)',
            description: 'Greet & ride from AlUla International Airport to resorts like Habitas, Banyan Tree, or Shaden.',
            icon: Car,
            href: '/services/alula-airport-transfer'
        },
        {
            name: 'Hegra (Madain Saleh) Tour',
            description: 'Half-day or full-day private driver for UNESCO heritage sites. Skip the bus crowds.',
            icon: Mountain,
            href: '/services/hegra-tour'
        },
        {
            name: 'AlUla to Madinah',
            description: 'Direct private transfer from AlUla to Madinah (approx 3.5 to 4 hours). Comfortable and scenic.',
            icon: MapPin,
            href: '/routes/alula-to-madinah'
        },
        {
            name: 'Old Town & Elephant Rock',
            description: 'Evening chauffeurs for dinner in the Old Town or sunset at Elephant Rock.',
            icon: Star,
            href: '/services/alula-city-tour'
        }
    ];

    const faqs = [
        {
            question: "Is there Uber in Al Ula?",
            answer: "Ride-sharing apps are very scarce and unreliable in Al Ula. It is highly recommended to pre-book a private driver to ensure you can reach the scattered historical sites without delay."
        },
        {
            question: "How far is the airport from Al Ula resorts?",
            answer: "AlUla International Airport (ULH) is approximately 25 to 35 minutes away from most major resorts like Habitas, Banyan Tree, and Shaden."
        },
        {
            question: "Can I book a driver for the whole day in Al Ula?",
            answer: "Yes, our daily chauffeur service is the most convenient option. You get a dedicated car and driver for up to 10 hours to explore the valley at your own pace."
        },
        {
            question: "Do you offer transport to Madinah?",
            answer: "Yes, we provide comfortable one-way and round-trip transfers from AlUla to Madinah. It's a professional service through the beautiful desert landscapes."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service AlUla",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Ula Old Town Road",
            "addressLocality": "Al Ula",
            "postalCode": "43511",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-ula",
        "priceRange": "$$$"
    };

    return (
        <div className="bg-stone-50 min-h-screen font-serif">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-stone-100 py-4 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-stone-600">
                    <Link href="/" className="hover:text-yellow-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-yellow-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-stone-900">AlUla</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[650px] flex items-center">
                <div className="absolute inset-0 bg-stone-900/40 z-10 transition-all"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/alula-elephant-rock.webp"
                        alt="Taxi Service in Al Ula Saudi Arabia"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-80"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/90 backdrop-blur-sm rounded-full mb-8 animate-fade-in border border-amber-500/50">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-widest ">Luxury Desert Transport</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight ">
                            Experience AlUla in Private Comfort
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-10 leading-relaxed font-light text-stone-100 shadow-sm">
                            Reliable airport transfers and private chauffeurs for Hegra, Old Town, and beyond.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-6 text-lg border-0 shadow-lg">
                                    Reserve Your Driver
                                </Button>
                            </Link>
                            <a href="https://wa.me/996575806733">
                                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg border-0 shadow-lg">
                                    <WhatsAppIcon className="w-5 h-5 mr-3" /> WhatsApp Booking
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-16 bg-white border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-stone-800 mb-6 ">Getting Around Al Ula</h2>
                    <p className="text-lg text-stone-600 leading-relaxed font-light">
                        Transport in AlUla is best managed with pre-booked private cars to ensure reliability.
                        We provide professional airport transfers from AlUla International (ULH) and private tours
                        to historical landmarks like Hegra and Elephant Rock.
                        Get a fixed quote for your personalized journey today.
                    </p>
                    <p className="text-sm text-stone-400 mt-4 italic font-sans">*Advance booking is recommended during peak season (Winter at Tantora).</p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-20">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-10  flex items-center gap-4">
                                    <Shield className="w-8 h-8 text-yellow-600" />
                                    The Premier Choice in AlUla
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-8 font-serif">
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm transition-transform hover:scale-105">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 ">Punctual & Local</h3>
                                        <p className="text-stone-600 leading-relaxed font-sans text-sm">Our drivers know the desert terrain and resort locations perfectly, ensuring a smooth journey through the canyons.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm transition-transform hover:scale-105">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 ">Executive Fleet</h3>
                                        <p className="text-stone-600 leading-relaxed font-sans text-sm">Travel in style with our GMC Yukons and luxury SUVs, perfect for both the rugged landscape and the upscale resort experience.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm transition-transform hover:scale-105">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 ">Flexible Scheduling</h3>
                                        <p className="text-stone-600 leading-relaxed font-sans text-sm">We adapt to your itinerary. Whether your tour runs long or plans change, your driver is at your service.</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-none border-l-4 border-amber-600 shadow-sm transition-transform hover:scale-105">
                                        <h3 className="font-bold text-lg text-stone-900 mb-3 ">Airport Meet & Greet</h3>
                                        <p className="text-stone-600 leading-relaxed font-sans text-sm">Your driver will be waiting at ULH arrivals with a personalized name card for a seamless start to your visit.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-10 ">Tailored Transport Services</h2>
                                <div className="space-y-6">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 bg-white shadow-sm hover:shadow-md transition-all border border-stone-100">
                                            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-8 h-8 text-yellow-700" />
                                            </div>
                                            <div className="grow">
                                                <h3 className="text-2xl font-bold text-stone-900 mb-3 ">{service.name}</h3>
                                                <p className="text-stone-600 text-lg font-sans font-light">{service.description}</p>
                                            </div>
                                            <div className="shrink-0 mt-4 sm:mt-0">
                                                {service.href && (
                                                    <Link href={service.href}>
                                                        <Button variant="outline" className="border-stone-300 hover:bg-stone-100 text-stone-800">
                                                            View More
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-4xl font-bold text-stone-900 mb-8 ">Common Questions</h2>
                                <div className="divide-y divide-stone-200">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="py-6">
                                            <h3 className="font-bold text-lg text-stone-900 mb-3">{faq.question}</h3>
                                            <p className="text-stone-600 leading-relaxed font-sans">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-12">
                            {/* Booking Widget */}
                            <div className="bg-stone-900 text-white p-8 shadow-2xl sticky top-24">
                                <div className="mb-8 border-b border-stone-700 pb-6">
                                    <h3 className="text-2xl font-bold  mb-2">Get a Quote</h3>
                                    <p className="text-stone-400 font-sans text-sm">Concierge-level support via WhatsApp</p>
                                </div>
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Booking</h3>
                                    <p className="text-sm text-gray-600 mb-4 font-sans">Chat with us on WhatsApp for fixed-rate pricing.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Ula." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold h-12 border-0 shadow-md">
                                            <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white p-8 border border-stone-200">
                                <h3 className="font-bold text-stone-900 mb-6  text-xl flex items-center gap-3">
                                    <Palette className="w-5 h-5 text-yellow-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-4 text-stone-600 font-sans text-sm">
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-yellow-600 rotate-45"></div> Hegra (Madain Saleh)
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-yellow-600 rotate-45"></div> Elephant Rock
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-yellow-600 rotate-45"></div> Old Town AlUla
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-yellow-600 rotate-45"></div> Maraya Concert Hall
                                    </li>
                                    <li className="flex items-center gap-3 border-b border-stone-100 pb-3">
                                        <div className="w-2 h-2 bg-yellow-600 rotate-45"></div> Luxury Desert Resorts
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-24 font-sans">
                <NearbyCities currentCity="AlUla" />
            </div>

            {/* Final CTA */}
            <section className="py-24 bg-stone-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] opacity-5"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 ">Journey Through History</h2>
                    <p className="text-xl text-stone-300 mb-10 font-light font-sans shadow-sm">
                        Let us handle the driving while you immerse yourself in the wonders of AlUla.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-8 text-xl border-0 shadow-lg">
                                Book Transport Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

