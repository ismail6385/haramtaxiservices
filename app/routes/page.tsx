import { Metadata } from 'next';
import Link from 'next/link';
import { routesData } from '@/lib/routesData';
import { MapPin, Clock, ArrowRight, Route as RouteIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Popular Taxi Routes in Saudi Arabia | Haram Taxi',
    description: 'Explore our long-distance intercity taxi routes, cross-border transfers, and specialized Umrah transport services across Saudi Arabia.',
    alternates: {
        canonical: 'https://haramtaxiservice.com/routes',
    }
};

export default function RoutesIndexPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Taxi Routes</h1>
                    <p className="text-lg text-gray-600">
                        From <Link href="/services" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">VIP intercity transfers</Link> to long-distance cross-border journeys, view all our dedicated routes across <Link href="/locations" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Saudi Arabia</Link> and the Gulf.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {routesData.map((route, idx) => (
                        <Link href={`/routes/${route.slug}`} key={idx} className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-600 group-hover:text-white transition-colors">
                                    <RouteIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-600 transition-colors line-clamp-2">
                                    {route.h1}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                    {route.description}
                                </p>
                            </div>
                            
                            <div className="mt-auto border-t border-gray-50 bg-gray-50/50 p-4 flex items-center justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center text-xs font-medium text-gray-500">
                                        <MapPin className="w-3 h-3 mr-2" /> {route.distance}
                                    </div>
                                    <div className="flex items-center text-xs font-medium text-gray-500">
                                        <Clock className="w-3 h-3 mr-2" /> {route.duration}
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-600 text-slate-400 group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
