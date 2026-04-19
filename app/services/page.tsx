import { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/services',
    },
    title: 'Professional Taxi Services [2026 Updated] | Premium KSA Transport',
    description: 'Experience the most reliable private taxi services in Saudi Arabia. Premium airport transfers, intercity rides to Makkah & Madinah, and sacred Ziyarat tours. [Get Your 2026 Quote Today].',
};

export default function ServicesIndexPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-brand-navy text-white py-12 md:py-20 px-4 text-center">
                <h1 className="text-fluid-h1 font-bold mb-4 font-display">Our Services</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
                    Elite VIP transportation solutions tailored for your <Link href="/locations" className="text-white hover:text-brand-gold underline decoration-white/20">spiritual journey</Link> across Saudi Arabia with dignity and grace.
                </p>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-wrap items-center gap-6 text-sm">
                        <span className="font-bold text-gray-900 uppercase tracking-wider text-[10px] text-gray-400">Quick Navigation:</span>
                        <a href="#all-services" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">All Services</a>
                        <a href="#why-choose" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Why Choose Us</a>
                        <Link href="/contact" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Support & Help</Link>
                    </nav>
                </div>
            </div>

            {/* Services Grid */}
            <div id="all-services" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Card key={service.slug} className="hover:shadow-xl transition-all duration-300 border-brand-navy-pale hover:border-brand-navy group">
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

            {/* Why Choose Us */}
            <div id="why-choose" className="bg-gray-50 py-20 border-t border-gray-100 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Choose Haram Taxi?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium service.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-navy-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-7 h-7 text-brand-navy" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Safe & Secure</h3>
                            <p className="text-gray-600 leading-relaxed">Licensed drivers and tracked vehicles for your complete peace of mind.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-14 h-14 bg-brand-navy-pale rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-7 h-7 text-brand-navy" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3 text-gray-900">Always Punctual</h3>
                            <p className="text-gray-600 leading-relaxed">We value your time above all. Our drivers arrive 15 minutes early, guaranteed.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
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
