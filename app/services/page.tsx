import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock, Plane, Compass, Users, Briefcase, MapPin, Route } from 'lucide-react';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/services',
    },
    title: { absolute: 'All Services — Private Car, Taxi, Limo & Chauffeur Service in Saudi Arabia | 24/7 Service' },
    description: 'All private taxi services in Saudi Arabia — airport transfers from KAIA, PMIA & RUH, Umrah & Hajj transport, Ziyarat tours, heritage tours, VIP chauffeur, and intercity routes. Fixed rates, 24/7.',
};

const serviceClusters = [
    {
        id: 'airport',
        label: 'Airport Taxi',
        icon: Plane,
        color: 'bg-sky-600',
        lightColor: 'bg-sky-50',
        borderColor: 'border-sky-200',
        textColor: 'text-sky-700',
        description: 'Meet & greet transfers from all Saudi airports — KAIA, PMIA, KFIA, KKIA, and more.',
        slugs: ['jeddah-airport-transfer', 'madinah-airport-transfer', 'riyadh-airport-transfer', 'dammam-airport-transfer', 'alula-airport-transfer', 'neom-bay-transfer', 'jazan-airport-taxi'],
        anchor: '#airport-taxi',
    },
    {
        id: 'umrah',
        label: 'Umrah & Hajj',
        icon: Compass,
        color: 'bg-emerald-600',
        lightColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        textColor: 'text-emerald-700',
        description: 'Dedicated Umrah taxis, Hajj group coaches, and Miqat transfers with Ihram facilities.',
        slugs: ['hajj-umrah-group-bus-coaster', 'taif-miqat-transfer', 'makkah-ziyarat', 'madinah-ziyarat'],
        anchor: '#umrah-hajj',
    },
    {
        id: 'ziyarat',
        label: 'Ziyarat & Heritage Tours',
        icon: Star,
        color: 'bg-amber-600',
        lightColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        textColor: 'text-amber-700',
        description: 'Guided taxi tours of Islamic heritage sites, UNESCO landmarks, and mountain highlands.',
        slugs: ['badr-ziyarat-tour', 'hegra-tour', 'alula-hegra-day-trip', 'alula-old-town-circuit', 'taif-rose-farm-tour', 'taif-mountain-tour', 'taif-city-tour', 'tabuk-city-tour'],
        anchor: '#ziyarat-tours',
    },
    {
        id: 'intercity',
        label: 'Intercity & Border',
        icon: Route,
        color: 'bg-violet-600',
        lightColor: 'bg-violet-50',
        borderColor: 'border-violet-200',
        textColor: 'text-violet-700',
        description: 'Long-distance intercity taxis and cross-border transfers to Bahrain and Jordan.',
        slugs: ['tabuk-to-jordan-border', 'dammam-to-bahrain', 'khobar-to-bahrain-taxi', 'bahrain-taxi'],
        anchor: '#intercity',
    },
    {
        id: 'vip',
        label: 'VIP & Corporate',
        icon: Briefcase,
        color: 'bg-brand-navy',
        lightColor: 'bg-slate-50',
        borderColor: 'border-slate-200',
        textColor: 'text-slate-800',
        description: 'Executive chauffeurs, corporate accounts, hourly car-with-driver, and NEOM project transport.',
        slugs: ['business-travel', 'hourly-chauffeur', 'neom-taxi', 'neom-bay-transfer'],
        anchor: '#vip-corporate',
    },
    {
        id: 'city',
        label: 'City & Local Taxi',
        icon: MapPin,
        color: 'bg-teal-600',
        lightColor: 'bg-teal-50',
        borderColor: 'border-teal-200',
        textColor: 'text-teal-700',
        description: 'Local taxi services across Saudi cities — Taif, Abha, Yanbu, Jubail, and Jazan.',
        slugs: ['taif-taxi', 'abha-taxi', 'jubail-taxi', 'yanbu-taxi'],
        anchor: '#city-taxi',
    },
];

const clusterSlugs: Record<string, string> = {};
serviceClusters.forEach(cluster => {
    cluster.slugs.forEach(slug => { clusterSlugs[slug] = cluster.id; });
});

export default function ServicesIndexPage() {
    const servicesByCluster: Record<string, typeof servicesData> = {
        airport: [], umrah: [], ziyarat: [], intercity: [], vip: [], city: [], other: [],
    };

    servicesData.forEach(service => {
        const clusterId = clusterSlugs[service.slug] || 'other';
        servicesByCluster[clusterId].push(service);
    });

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-brand-navy text-white py-12 md:py-20 px-4 text-center">
                <h1 className="text-fluid-h1 font-bold mb-4 font-display">Saudi Arabia Taxi &amp; Chauffeur Services</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                    Airport transfers, Umrah & Hajj transport, Ziyarat tours, VIP chauffeur, and intercity routes —
                    all across <Link href="/locations" className="text-white hover:text-brand-gold underline decoration-white/20">13 provinces of Saudi Arabia</Link>.
                </p>
            </div>

            {/* Sticky Nav */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Browse:</span>
                        {serviceClusters.map(cluster => (
                            <a key={cluster.id} href={cluster.anchor} className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">
                                {cluster.label}
                            </a>
                        ))}
                        <a href="#all-services" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">All Services</a>
                        <a href="#why-choose" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Why Us</a>
                    </nav>
                </div>
            </div>

            {/* Service Clusters Overview */}
            <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold font-display text-gray-900 mb-3">Browse by Service Type</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">Find the right taxi service for your journey — click a category to see all services within it.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceClusters.map(cluster => {
                        const Icon = cluster.icon;
                        return (
                            <a key={cluster.id} href={cluster.anchor}
                                className={`group block rounded-2xl border ${cluster.borderColor} ${cluster.lightColor} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}>
                                <div className={`w-12 h-12 ${cluster.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${cluster.textColor} group-hover:underline`}>{cluster.label}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-3">{cluster.description}</p>
                                <span className="text-xs text-gray-500">{cluster.slugs.length}+ services</span>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Cluster Sections */}
            {serviceClusters.map(cluster => {
                const services = servicesByCluster[cluster.id];
                if (!services.length) return null;
                const Icon = cluster.icon;
                return (
                    <div key={cluster.id} id={cluster.id + '-taxi'} className="border-t border-gray-100 py-16 scroll-mt-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className={`w-10 h-10 ${cluster.color} rounded-lg flex items-center justify-center`}>
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold font-display text-gray-900">{cluster.label}</h2>
                                    <p className="text-sm text-gray-500">{cluster.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {services.map(service => (
                                    <Card key={service.slug} className={`hover:shadow-xl transition-all duration-300 ${cluster.borderColor} hover:border-opacity-100 border group`}>
                                        <CardHeader>
                                            <CardTitle className={`text-lg font-bold font-display text-gray-900 line-clamp-2 min-h-[3rem] group-hover:${cluster.textColor} transition-colors`}>
                                                {service.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2 mt-1 text-gray-600 text-sm">
                                                {service.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-1.5 text-sm text-gray-600">
                                                {service.features.slice(0, 3).map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${cluster.color}`}></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href={`/services/${service.slug}`} className="w-full">
                                                <Button className={`w-full ${cluster.color} hover:opacity-90 text-white group shadow-sm hover:shadow-md transition-all`}>
                                                    View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* All Services Grid */}
            <div id="all-services" className="bg-gray-50 border-t border-gray-200 py-20 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-display text-gray-900 mb-3">All Services A–Z</h2>
                        <p className="text-gray-600">Every service we offer — from single city rides to multi-day pilgrim transport packages.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <Card key={service.slug} className="hover:shadow-xl transition-all duration-300 border-brand-navy-pale hover:border-brand-navy group bg-white">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold font-display text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-navy transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3 mt-2 text-gray-600">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/services/${service.slug}`} className="w-full">
                                        <Button className="w-full bg-brand-navy hover:bg-brand-navy-dark group shadow-md hover:shadow-lg transition-all">
                                            View {service.title.split('|')[0].trim()} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div id="why-choose" className="bg-white py-20 border-t border-gray-100 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Choose Haram Taxi?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium service.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-navy-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-7 h-7 text-brand-navy" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Safe & Secure</h3>
                            <p className="text-gray-600 leading-relaxed">Licensed drivers and tracked vehicles for your complete peace of mind.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-navy-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-7 h-7 text-brand-navy" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Always Punctual</h3>
                            <p className="text-gray-600 leading-relaxed">We value your time above all. Our drivers arrive 15 minutes early, guaranteed.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-navy-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-7 h-7 text-brand-navy" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Top Rated Service</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trusted by thousands of pilgrims for <Link href="/routes" className="text-brand-navy hover:text-brand-gold underline decoration-brand-navy/20">Umrah and Hajj transport</Link> excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
