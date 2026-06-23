import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routesData } from '@/lib/routesData';
import BookingForm from '@/components/BookingForm';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';
import { Suspense } from 'react';
import PilgrimTips from '@/components/PilgrimTips';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home } from 'lucide-react';
import CustomerUpdates from '@/components/CustomerUpdates';

export const dynamic = 'force-static';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const route = routesData.find((r) => r.slug === slug);

    if (!route) {
        return {
            title: 'Route Not Found',
        };
    }

    return {
        title: `${route.title} | Haram Taxi Service`,
        description: `Book a reliable ${route.h1} with Haram Taxi Service. Fixed rates, professional licensed drivers, and door-to-door service across Saudi Arabia. Available 24/7 with instant WhatsApp confirmation.`,
        alternates: {
            canonical: `https://haramtaxiservice.com/routes/${slug}`,
        },
        openGraph: {
            title: `${route.title} | Haram Taxi`,
            description: route.description,
            type: 'website',
            url: `https://haramtaxiservice.com/routes/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return routesData.map((route) => ({
        slug: route.slug,
    }));
}

export default async function RoutePage({ params }: Props) {
    const { slug } = await params;
    const route = routesData.find((r) => r.slug === slug);

    if (!route) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": route.title,
        "description": route.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "telephone": "+966575806733",
            "image": "https://haramtaxiservice.com/logo.png"
        },
        "areaServed": "Saudi Arabia",
        "url": `https://haramtaxiservice.com/routes/${route.slug}`,
        "offers": route.pricing.map(p => ({
            "@type": "Offer",
            "priceCurrency": "SAR",
            "price": p.price.replace(/[^0-9]/g, '') || "0",
            "itemOffered": {
                "@type": "Service",
                "name": p.vehicle
            }
        }))
    };


    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://haramtaxiservice.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Routes",
                "item": "https://haramtaxiservice.com/routes"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": route.title,
                "item": `https://haramtaxiservice.com/routes/${route.slug}`
            }
        ]
    };

    const faqSchema = route.faqs && route.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": route.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

            {/* Breadcrumb */}
            <div className="bg-slate-700 text-slate-100 py-3 border-b border-slate-600">
                <div className="container mx-auto px-4 text-sm flex items-center gap-2">
                    <Link href="/" className="hover:text-white flex items-center gap-1"><Home className="w-3 h-3" /> Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/routes" className="hover:text-white">Routes</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white font-semibold truncate">{route.h1}</span>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-slate-800 text-white py-14">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{route.h1}</h1>
                    <p className="text-slate-300 mb-8 max-w-2xl">Fixed rates · Professional licensed drivers · Door-to-door service across Saudi Arabia · No pre-payment required</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/booking">
                            <Button className="bg-white text-slate-800 hover:bg-gray-100 font-bold px-8">Book This Route</Button>
                        </Link>
                        <a href={`https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20for%20${encodeURIComponent(route.h1)}`} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">WhatsApp</Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Navigation / Table of Contents */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-wrap items-center gap-6 text-sm">
                        <span className="font-bold text-gray-900 uppercase tracking-wider text-[10px] text-gray-400">Quick Navigation:</span>
                        <a href="#about" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Route Details</a>
                        <a href="#pricing" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Pricing</a>
                        <a href="#pricing" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Competitive Pricing</a>
                        <a href="#faq" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Route FAQs</a>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div id="about" className="bg-white rounded-2xl p-8 shadow-sm scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-1">{route.h1}</h2>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Taxi Service Overview</p>
                            <p className="text-gray-600 leading-relaxed text-lg">{route.content}</p>
                        </div>

                        {/* Pricing Table */}
                        <div id="pricing" className="bg-white rounded-2xl shadow-sm overflow-hidden scroll-mt-24">
                            <div className="bg-gray-900 text-white p-6">
                                <h2 className="text-2xl font-bold">{route.h1} Taxi Rates 2026</h2>
                                <p className="opacity-80">Competitive quotes for {route.h1}</p>
                            </div>
                            <div className="p-6">
                                <div className="grid gap-4">
                                    {route.pricing.map((item, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-4 border border-gray-100 rounded-lg hover:border-slate-500 hover:bg-slate-50/10 transition-all">
                                            <div className="mb-2 sm:mb-0">
                                                <h3 className="font-bold text-lg text-gray-900">{item.vehicle}</h3>
                                                <div className="text-sm text-gray-500 flex gap-3">
                                                    <span>{item.capacity}</span>
                                                    <span>•</span>
                                                    <span>{item.luggage}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl font-bold text-slate-600">{item.price}</span>
                                                <Link href="/booking">
                                                    <Button size="sm">Book Now</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}
                        {route.faqs && route.faqs.length > 0 && (
                            <div id="faq" className="bg-white rounded-2xl p-8 shadow-sm scroll-mt-24">
                                <h2 className="text-2xl font-bold mb-6">{route.h1} FAQ</h2>
                                <div className="space-y-6">
                                    {route.faqs.map((faq, idx) => (
                                        <div key={idx}>
                                            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div id="tips" className="scroll-mt-24">
                            <PilgrimTips />
                        </div>
                    </div>

                    {/* Sidebar Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Book Your Ride</h3>
                            <Suspense fallback={<div className="h-[600px] flex items-center justify-center text-gray-400">Loading booking form...</div>}>
                                <BookingForm />
                            </Suspense>
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="font-semibold mb-3">Why Choose Us?</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Licensed Drivers</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Competitive Quotes</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500" /> 24/7 Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Customer Updates for the Route */}
            <CustomerUpdates location={route.h1} />

            {/* Silo Linking Section */}
            <div className="bg-white border-t border-gray-200 mt-12 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Explore Other Destinations</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/locations/makkah" className="px-5 py-2 bg-gray-50 hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Makkah
                        </Link>
                        <Link href="/locations/madinah" className="px-5 py-2 bg-gray-50 hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Madinah
                        </Link>
                        <Link href="/locations/jeddah" className="px-5 py-2 bg-gray-50 hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors">
                            Taxi in Jeddah
                        </Link>
                        <Link href="/blog" className="px-5 py-2 bg-gray-50 hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors">
                            Travel Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

