import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface NearbyCity {
    name: string;
    slug: string;
    distance: string;
    description: string;
}

interface NearbyCitiesProps {
    currentCity: string;
}

export default function NearbyCities({ currentCity }: NearbyCitiesProps) {
    // Define all cities with their relationships
    const cityRelationships: Record<string, NearbyCity[]> = {
        'makkah': [
            { name: 'Jeddah', slug: 'jeddah', distance: '80km', description: 'Coastal city with international airport' },
            { name: 'Taif', slug: 'taif', distance: '90km', description: 'Mountain retreat with cool climate' },
            { name: 'Madinah', slug: 'madinah', distance: '450km', description: 'Holy city with Prophet\'s Mosque' }
        ],
        'madinah': [
            { name: 'Makkah', slug: 'makkah', distance: '450km', description: 'Holy city with Grand Mosque' },
            { name: 'Jeddah', slug: 'jeddah', distance: '420km', description: 'Gateway city with airport' },
            { name: 'Khayber Fort', slug: 'khayber-fort', distance: '95km', description: 'Historical fort and heritage site' }
        ],
        'jeddah': [
            { name: 'Makkah', slug: 'makkah', distance: '80km', description: 'Holy city, popular destination' },
            { name: 'Taif', slug: 'taif', distance: '170km', description: 'Mountain city with gardens' },
            { name: 'Madinah', slug: 'madinah', distance: '420km', description: 'Holy city of the Prophet' }
        ],
        'taif': [
            { name: 'Makkah', slug: 'makkah', distance: '90km', description: 'Holy city nearby' },
            { name: 'Jeddah', slug: 'jeddah', distance: '170km', description: 'Coastal city with airport' },
            { name: 'Madinah', slug: 'madinah', distance: '500km', description: 'Holy city of Madinah' }
        ],
        'alula': [
            { name: 'Madinah', slug: 'madinah', distance: '380km', description: 'Holy city to the south' },
            { name: 'Khayber Fort', slug: 'khayber-fort', distance: '290km', description: 'Historical site nearby' },
            { name: 'Jeddah', slug: 'jeddah', distance: '800km', description: 'Major coastal city' }
        ],
        'khayber-fort': [
            { name: 'Madinah', slug: 'madinah', distance: '95km', description: 'Holy city nearby' },
            { name: 'AlUla', slug: 'alula', distance: '290km', description: 'UNESCO heritage site' },
            { name: 'Makkah', slug: 'makkah', distance: '530km', description: 'Holy city of Makkah' }
        ]
    };

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
                            className="group bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all"
                        >
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                                <MapPin className="w-6 h-6 text-teal-500 group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.name}</h3>
                            <p className="text-teal-600 font-semibold mb-3">{city.distance} away</p>
                            <p className="text-gray-600 mb-4">{city.description}</p>
                            <div className="flex items-center text-teal-500 font-semibold">
                                View Taxi Service <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
