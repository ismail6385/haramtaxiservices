import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, Navigation, ArrowRight, AlertCircle, Wallet, Star, MessageCircle } from 'lucide-react';
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
        canonical: 'https://haramtaxiservice.com/locations/makkah',
    },
    title: 'Makkah Taxi & Hajj 2026 Transport | KAIA Airport to Makkah Fixed Rate',
    description: 'Book trusted taxi service in Makkah for Hajj 2026. KAIA airport to Makkah hotel from 1.5 hrs â€” fixed fares, no surge, meet & greet, Haram-permitted vehicles. WhatsApp booking 24/7.',
    keywords: ['Makkah taxi', 'Hajj transport Makkah', 'Hajj 2026 taxi', 'KAIA airport to Makkah taxi', 'VIP transport Makkah', 'Makkah chauffeur', 'Umrah taxi Makkah', 'private taxi Makkah', 'jeddah airport makkah transfer'],
};

export default function MakkahPage() {
    const services = [
        {
            name: 'Airport Transfers',
            description: 'Direct pickup from Jeddah Airport (KAIA) to your Makkah hotel.',
            icon: Navigation,
            href: '/routes/jeddah-airport-to-makkah'
        },
        {
            name: 'Hotel Pickup',
            description: 'Service from Clock Tower, Aziziyah, and all Makkah hotels.',
            icon: MapPin,
            href: '/booking'
        },
        {
            name: 'Haram Transfers',
            description: 'Convenient daily rides to and from Masjid Al-Haram.',
            icon: MapPin,
            href: '/services/hotel-to-haram-transport'
        },
        {
            name: 'Makkah to Madinah',
            description: 'Comfortable intercity journey via Hijrah Highway (4.5 hours).',
            icon: Car,
            href: '/routes/makkah-to-madinah'
        },
        {
            name: 'Ziyarat Tours',
            description: 'Visit Cave of Hira, Jabal Thawr, Mina, and Arafat.',
            icon: Navigation,
            href: '/services/makkah-ziyarat'
        },
        {
            name: 'Group Transport',
            description: 'Spacious vans and buses for families and Umrah groups.',
            icon: Users,
            href: '/fleet'
        },
    ];

    const features = [
        'Experienced local drivers',
        'Clean and comfortable vehicles',
        'Fixed competitive quotes',
        '24/7 availability',
        'English & Arabic speaking',
        'All major hotels covered',
    ];

    const faqs = [
        {
            question: "How do I book a taxi from Jeddah Airport (KAIA) to Makkah?",
            answer: "The easiest way is to message us on WhatsApp with your arrival date, flight number, and hotel name in Makkah. We confirm your booking instantly, assign a driver, and send you their contact details before you land. Our driver meets you at the arrival hall with a name board."
        },
        {
            question: "Do you have Hajj-permitted vehicles for 2026?",
            answer: "Yes. Our fleet includes GMC Yukon XLs and Toyota Staria vans that carry the required Ministry of Hajj permits to pass Makkah security cordons. Without these permits, taxis cannot enter the Haram zone or deliver you to your hotel â€” this is why pre-booking with a licensed operator is critical."
        },
        {
            question: "How long does it take from Jeddah Airport to Makkah?",
            answer: "The journey typically takes 1.5 to 2 hours via the Haramain Highway under normal conditions. During peak Hajj days (8thâ€“13th Dhul Hijjah), allow 2.5â€“3 hours due to checkpoint queues. We account for this in all Hajj bookings."
        },
        {
            question: "What is the closest drop-off point to Masjid Al-Haram?",
            answer: "Private vehicles cannot enter the immediate Haram area. We drop you at the nearest legally permitted checkpoint (typically Ajyad or Kudai), which is a short, manageable walk to the Grand Mosque. We know exactly which access points are open each day during Hajj."
        },
        {
            question: "Can you arrange transport from Makkah to Madinah?",
            answer: "Yes. The Makkah to Madinah intercity journey takes approximately 4.5 hours via the Hijrah Highway. We recommend booking this 48 hours in advance, especially during Hajj and Ramadan. Message us on WhatsApp for an instant quote."
        },
        {
            question: "Do you offer group transportation for Hajj families?",
            answer: "Absolutely. Our GMC Yukon XLs seat 7 passengers comfortably with luggage, and we can arrange multiple vehicles for larger groups. We also offer 8-seater Toyota Staria vans for families. Contact us to arrange your full Hajj fleet."
        },
        {
            question: "What is the taxi price from Jeddah Airport to Makkah for Hajj 2026?",
            answer: "We don't publish fixed prices publicly because the fare depends on your group size, vehicle type, and exact hotel location in Makkah. The best way to get an accurate quote is to message us on WhatsApp with your group details â€” we respond within minutes. All prices are agreed in advance, and the number you see on WhatsApp is the exact amount you pay. No airport taxes, no hidden charges."
        }
    ];

    
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service - Makkah",
        "description": "Professional taxi service in Makkah. Book online for reliable transportation.",
        "@id": "https://haramtaxiservice.com/locations/makkah",
        "url": "https://haramtaxiservice.com/locations/makkah",
        "telephone": "+966575806733",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Makkah",
            "addressLocality": "Makkah",
            "addressCountry": "SA"
        },
        "areaServed": {
            "@type": "City",
            "name": "Makkah"
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
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* Hero Section */}
            <section className="relative h-[500px] bg-gray-900">
                <Image
                    src="/makkah-royal-clock-tower.webp"
                    alt="Makkah Royal Clock Tower and Haram view"
                    width={1200}
                    height={500}
                    className="w-full h-full object-cover opacity-60"
                    sizes="100vw"
                        priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy rounded-full mb-6">
                                <MapPin className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">The Holy City of Makkah</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
                                Trusted Taxi & Hajj 2026 Transport in <span className="text-brand-gold">Makkah</span>
                            </h1>

                            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                                Distinguished taxi service in the Holy City of Makkah, fully ready for Hajj 2026. We provide 24/7 executive transfers to <Link href="/services/hotel-to-haram-transport" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Masjid Al-Haram</Link>, guided <Link href="/services/makkah-ziyarat" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">Ziyarat tours</Link>, and reliable <Link href="/routes" className="text-brand-gold hover:text-white underline decoration-brand-gold/30">intercity transport</Link> for pilgrims.
                            </p>

                            <div className="flex items-center gap-2 mb-8 text-slate-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                <MapPin className="w-5 h-5" />
                                <span>Serving Makkah and surrounding areas within 50km radius</span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Makkah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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

            {/* Hajj 2026 Urgency Banner */}
            <div className="bg-amber-500 text-black py-3 px-4 text-center font-bold text-sm flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse inline-block" />
                <span>Hajj 2026 is approaching â€” our Hajj-permitted vehicles are booking fast. <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Hajj%202026%20taxi%20in%20Makkah" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline ml-1">Reserve your seat via WhatsApp now.</a></span>
            </div>

            {/* Quick Stats */}
            <section className="py-12 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <div className="text-sm opacity-90">Available</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">1.5 hrs</div>
                            <div className="text-sm opacity-90">KAIA to Makkah</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">100+</div>
                            <div className="text-sm opacity-90">Hotels Covered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50,000+</div>
                            <div className="text-sm opacity-90">Pilgrims Served</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Times Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Makkah</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900"><Link href="/locations/jeddah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20 transition-colors">Jeddah Airport</Link></div>
                                <div className="text-sm text-gray-500">Distance: 80km</div>
                            </div>
                            <div className="text-xl font-bold text-brand-navy">60 mins</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900"><Link href="/locations/madinah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20 transition-colors">Madinah</Link></div>
                                <div className="text-sm text-gray-500">Distance: 450km</div>
                            </div>
                            <div className="text-xl font-bold text-slate-600">4.5 hours</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900"><Link href="/locations/taif" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20 transition-colors">Taif</Link></div>
                                <div className="text-sm text-gray-500">Distance: 90km</div>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in Makkah</h2>
                        <p className="text-xl text-gray-600">We solve the unique problems pilgrims face when traveling in the Holy City.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Haram Access Restrictions</h3>
                            <p className="text-gray-600 mb-4">Private vehicles cannot enter the immediate Haram area. Drop-off points can be confusing, especially for first-time visitors.</p>
                            <div className="flex items-center text-slate-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: We know the closest legal pickup/drop-off points</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Walking Distance with Luggage</h3>
                            <p className="text-gray-600 mb-4">Hotels in Aziziyah and Misfalah areas often require long walks through pedestrian-only zones, difficult with heavy bags.</p>
                            <div className="flex items-center text-slate-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: Door-to-door service where legally permitted</span>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Peak Prayer Traffic</h3>
                            <p className="text-gray-600 mb-4">Gridlock after Maghrib and Isha prayers makes transportation extremely difficult, with some taxis refusing trips.</p>
                            <div className="flex items-center text-slate-600 font-medium">
                                <CheckCircle2 className="w-5 h-5 mr-2" />
                                <span>Solution: Pre-scheduled rides with timing flexibility</span>
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
                            <span className="text-slate-800 text-sm font-semibold">Fair Pricing</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Pricing in Makkah</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            competitive quotes designed for pilgrims, with no inflated rates during peak seasons.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Influences Your Fare?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Users className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Group Size</h4>
                                        <p className="text-gray-600 text-sm">Family sedans accommodate up to 4 passengers. Larger groups need vans or multiple vehicles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Hotel Location</h4>
                                        <p className="text-gray-600 text-sm">Hotels closer to Haram (Clock Tower area) vs outer districts (Aziziyah) may have different drop-off coordination needs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <Clock className="w-4 h-4 text-slate-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ramadan & Hajj Season</h4>
                                        <p className="text-gray-600 text-sm">While some services surge pricing, we maintain fair rates year-round, with only minor adjustments for operational costs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-brand-navy p-8 rounded-2xl text-white flex flex-col justify-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">No Ramadan Surges</h3>
                            <p className="mb-6 opacity-90 text-lg">
                                Many services triple their prices during Ramadan and Hajj. We believe in serving pilgrims with honesty and maintain consistent, <Link href="/pricing" className="text-white hover:text-brand-gold underline decoration-white/30">fair pricing</Link> throughout the year.
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in Makkah</h2>
                        <p className="text-xl text-gray-600">Seamless transportation for your pilgrimage</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-slate-500">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book & Coordinate</h3>
                            <p className="text-center text-gray-600">Share your hotel details via WhatsApp. We&apos;ll confirm the exact pickup point based on accessibility rules.</p>
                        </div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-slate-500">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Meet Your Driver</h3>
                            <p className="text-center text-gray-600">Receive driver details and live location. No searching or waiting in the heat.</p>
                        </div>

                        <div className="bg-white p-6 relative">
                            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                <span className="text-3xl font-bold text-slate-500">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Arrive Safely</h3>
                            <p className="text-center text-gray-600">Comfortable ride to your destination, whether <Link href="/locations/jeddah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Jeddah Airport</Link>, <Link href="/locations/madinah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Madinah</Link>, or local Ziyarat sites.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services in Makkah</h2>
                        <p className="text-xl text-gray-600">Complete transportation solutions</p>
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

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Why Choose Our Makkah Taxi Service?
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                We provide reliable, professional taxi services throughout Makkah with experienced drivers who know the city well.
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
                                src="/makkah-highway.webp"
                                alt="Private taxi driving on Makkah highway towards the Holy City"
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Routes */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes from Makkah</h2>
                        <p className="text-xl text-gray-600">Most requested destinations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/routes/jeddah-airport-to-makkah" className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-600">Jeddah Airport</h3>
                                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-gray-600 mb-2">Duration: 1.5 hours</p>
                                <p className="text-sm text-gray-500">Most popular airport transfer</p>
                            </div>
                        </Link>

                        <Link href="/routes/makkah-to-madinah" className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-600">Madinah</h3>
                                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-gray-600 mb-2">Duration: 4.5 hours</p>
                                <p className="text-sm text-gray-500">Comfortable intercity travel</p>
                            </div>
                        </Link>

                        <Link href="/locations/taif" className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-600">Taif</h3>
                                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                                <p className="text-gray-600 mb-2">Duration: 1.5 hours</p>
                                <p className="text-sm text-gray-500">Miqat transfer & mountain route</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pilgrim Reviews */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Real Pilgrim Reviews</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Hajj & Umrah Pilgrims From 50+ Countries</h2>
                        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl mx-auto">
                            {['United Kingdom', 'Pakistan', 'Indonesia', 'Malaysia', 'USA', 'South Africa', 'India', 'Nigeria', 'Bangladesh', 'Turkey'].map(c => (
                                <span key={c} className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm">{c}</span>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Br. Tariq J.',
                                country: 'London, United Kingdom',
                                review: 'After a 12-hour flight from London to KAIA, the last thing my family wanted was to negotiate with taxi drivers. Our Haram Taxi driver was waiting with a name board, the GMC Yukon was cold, and we arrived in Makkah completely relaxed. The fixed price was confirmed before we landed.'
                            },
                            {
                                name: 'Sister Ayesha N.',
                                country: 'Jakarta, Indonesia',
                                review: 'I booked via WhatsApp and confirmed in 5 minutes. The driver knew exactly which Makkah drop-off point was closest to my hotel in the Markaziah area. Very professional and respectful. Will absolutely use again for Hajj 2026.'
                            },
                            {
                                name: 'Br. Imran H.',
                                country: 'Lahore, Pakistan',
                                review: 'We had 5 people and heavy Hajj luggage. The Yukon XL handled everything comfortably. Fixed price meant no surprises. The driver cleared the Makkah checkpoint without any issues. Pre-booking is the only way to travel during Hajj.'
                            }
                        ].map((review, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed mb-6 italic flex-1">&quot;{review.review}&quot;</p>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-900 font-bold text-sm">{review.name}</p>
                                    <p className="text-gray-400 text-xs mt-1">{review.country}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Private Transfer vs SAPTCO Bus */}
            <section className="py-20 bg-brand-navy text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Private Hajj Taxi vs SAPTCO Bus from KAIA â€” Which is Right for You?</h2>
                        <p className="text-xl opacity-80">The honest comparison every Hajj pilgrim needs to see</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                            <h3 className="text-2xl font-bold mb-6 text-brand-gold">Private Haram Taxi</h3>
                            <ul className="space-y-4">
                                {[
                                    'Door-to-door drop at your specific Makkah hotel',
                                    'Departs when you clear immigration â€” zero waiting',
                                    'GMC Yukon XL fits all Hajj luggage for 5â€“7 people',
                                    'Hajj-permitted vehicles with Ministry clearance passes',
                                    'Driver tracks your KAIA flight â€” delays covered at no cost',
                                    'Fixed rate agreed on WhatsApp before you travel',
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                                        <span className="opacity-90 text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-slate-400">SAPTCO Public Bus</h3>
                            <ul className="space-y-4">
                                {[
                                    'Multiple stops â€” adds 30â€“60 min to the journey',
                                    'Fixed schedule â€” no flexibility for delayed flights',
                                    'Strict luggage limits (difficult with Hajj gear)',
                                    'Drops at a general zone, not your hotel entrance',
                                    'Can be overcrowded during peak Hajj arrival days',
                                    'No personal assistance or name-board meet & greet',
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 opacity-60">
                                        <span className="text-slate-500 mt-0.5 flex-shrink-0 font-bold text-lg leading-none">âœ•</span>
                                        <span className="text-sm">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20want%20to%20book%20a%20private%20Hajj%202026%20transfer%20from%20KAIA%20to%20Makkah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-black font-bold rounded-2xl hover:scale-105 transition-all text-lg">
                            <MessageCircle className="w-5 h-5" />
                            Book Private Transfer via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Customer Updates */}
            <CustomerUpdates location="Makkah" />

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Makkah Taxi Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Common questions about Makkah taxi service</p>
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

            {/* Nearby Cities */}
            <NearbyCities currentCity="makkah" />

            {/* CTA Section */}
            <section className="py-20 bg-brand-navy text-white shadow-2xl">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Book Your Makkah Taxi for Hajj 2026
                    </h2>
                    <p className="text-xl mb-2 opacity-90">
                        Trusted by 50,000+ pilgrims. Fixed rates, Hajj-permitted vehicles, 24/7 WhatsApp support.
                    </p>
                    <p className="text-sm mb-8 opacity-70">No pre-payment required. Instant WhatsApp confirmation.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20Makkah%20taxi%20for%20Hajj%202026" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg flex items-center gap-2">
                                <WhatsAppIcon className="w-5 h-5" />
                                Book via WhatsApp
                            </Button>
                        </a>
                        <Link href="/booking">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-500 px-8 py-6 text-lg">
                                Get Online Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}



