import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Taxi Service Locations in Saudi Arabia | Makkah, Madinah, Jeddah - Haram Taxi',
    description: 'Professional taxi service across Saudi Arabia. We serve Makkah, Madinah, Jeddah, Taif, AlUla, and Khayber. Book reliable transportation 24/7.',
    keywords: ['taxi service Saudi Arabia', 'taxi Makkah', 'taxi Madinah', 'taxi Jeddah', 'taxi Taif', 'taxi AlUla', 'taxi Khayber'],
    openGraph: {
        title: 'Taxi Service Locations in Saudi Arabia',
        description: 'Professional taxi service in Makkah, Madinah, Jeddah, Taif, AlUla, and Khayber. Book now!',
        url: 'https://haramtaxiservice.com/locations',
        type: 'website',
    },
};

export default function LocationsPage() {
    const locations = [
        {
            name: 'Jeddah',
            slug: 'jeddah',
            description: 'Airport transfers, city tours, and rides to Makkah from Jeddah',
            image: '/jeddah-corniche-view.webp',
            services: ['Airport Transfer', 'City Tours', 'Jeddah to Makkah'],
            popular: true,
        },
        {
            name: 'Makkah',
            slug: 'makkah',
            description: 'Haram transfers, Ziyarat tours, and intercity travel from Makkah',
            image: '/makkah-royal-clock-tower.webp',
            services: ['Haram Transfer', 'Ziyarat Tours', 'Hotel Pickup'],
            popular: true,
        },
        {
            name: 'Madinah',
            slug: 'madinah',
            description: 'Airport transfers, Ziyarat tours, and rides to Makkah from Madinah',
            image: '/masjid-nabawi-madinah.webp',
            services: ['Airport Transfer', 'Ziyarat Tours', 'Madinah to Makkah'],
            popular: true,
        },
        {
            name: 'Taif',
            slug: 'taif',
            description: 'Mountain tours, city transfers, and rides to Makkah from Taif',
            image: '/taif-mountains-view.webp',
            services: ['Mountain Tours', 'City Transfer', 'Taif to Makkah'],
            popular: false,
        },
        {
            name: 'AlUla',
            slug: 'alula',
            description: 'Heritage site tours, city transfers, and intercity travel',
            image: '/alula-hegra-tombs.webp',
            services: ['Heritage Tours', 'City Transfer', 'Day Tours'],
            popular: false,
        },
        {
            name: 'Khayber',
            slug: 'khayber-fort',
            description: 'Historical tours, city transfers, and rides to Madinah',
            image: '/khaybar-fort-main.webp',
            services: ['Historical Tours', 'City Transfer', 'Khayber to Madinah'],
            popular: false,
        },
    ];

    const popularLocations = locations.filter(loc => loc.popular);
    const otherLocations = locations.filter(loc => !loc.popular);

    const serviceAreasSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Taxi Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "url": "https://haramtaxiservice.com"
        },
        "areaServed": locations.map(loc => ({
            "@type": "City",
            "name": loc.name,
            "containedInPlace": {
                "@type": "Country",
                "name": "Saudi Arabia"
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-teal-500">Home</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Locations</span>
                        </div>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold">Service Locations</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Taxi Service Locations in Saudi Arabia
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto opacity-90">
                            Professional taxi service across major cities in Saudi Arabia. We serve Makkah, Madinah, Jeddah, Taif, AlUla, and Khayber with 24/7 availability.
                        </p>
                    </div>
                </section>

                {/* Popular Locations */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
                            <p className="text-xl text-gray-600">Most requested taxi service locations</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {popularLocations.map((location) => (
                                <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                        <div className="relative h-64">
                                            <Image
                                                src={location.image}
                                                alt={`Taxi service in ${location.name}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 mb-4">{location.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {location.services.map((service, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-teal-500 font-semibold group-hover:gap-2 transition-all">
                                                View Details
                                                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Locations */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Locations</h2>
                            <p className="text-xl text-gray-600">Additional cities we serve</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherLocations.map((location) => (
                                <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                                        <div className="relative h-48">
                                            <Image
                                                src={location.image}
                                                alt={`Taxi service in ${location.name}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-xl font-bold text-white">{location.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 mb-4">{location.description}</p>
                                            <div className="flex items-center text-teal-500 font-semibold group-hover:gap-2 transition-all">
                                                View Details
                                                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-teal-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Need a Taxi in Saudi Arabia?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Book reliable taxi service across all major cities. Available 24/7 with professional drivers.
                        </p>
                        <Link href="/booking">
                            <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                Book Your Ride Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
