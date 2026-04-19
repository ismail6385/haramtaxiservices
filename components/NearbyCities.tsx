import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { cityRelationships } from '@/data/cities';

interface NearbyCitiesProps {
    currentCity: string;
}

export default function NearbyCities({ currentCity }: NearbyCitiesProps) {
    const nearbyCities = cityRelationships[currentCity] || [];

    if (nearbyCities.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Nearby Cities</h2>
                    <p className="text-xl text-gray-600">We also serve these nearby destinations</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {nearbyCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/locations/${city.slug}`}
                            className="group bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 hover:border-brand-navy/20"
                        >
                            <div className="w-12 h-12 bg-brand-navy-pale/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-navy transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">{city.name}</h3>
                            <p className="text-brand-navy font-semibold mb-3">{city.distance} away</p>
                            <p className="text-gray-600 mb-4 font-light">{city.description}</p>
                            <div className="flex items-center text-brand-navy-dark font-bold group-hover:translate-x-2 transition-transform">
                                View Taxi Service <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
