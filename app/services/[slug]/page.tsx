import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Star, Clock, MapPin, Phone, Home, ChevronRight } from 'lucide-react';
import { Suspense } from 'react';
import PilgrimTips from '@/components/PilgrimTips';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} [2026 Updated]`,
        description: `Experience a 100% reliable ${service.title.split('|')[0].trim()} with our premium chauffeur service. Professional drivers, pristine cars, and competitive pricing for your spiritual journey. [Get Instant Quote].`,
        alternates: {
            canonical: `https://haramtaxiservice.com/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} | Haram Taxi`,
            description: service.description,
            type: 'website',
            url: `https://haramtaxiservice.com/services/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "priceRange": "$$"
        },
        "areaServed": {
            "@type": "State",
            "name": "Makkah Province"
        },
        "description": service.description
    };

    const faqSchema = service.faqs && service.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex items-center gap-2 text-gray-600">
                    <Link href="/" className="hover:text-slate-600 flex items-center gap-1"><Home className="w-3 h-3" /> Home</Link>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                    <Link href="/services" className="hover:text-slate-600">Services</Link>
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-900 font-semibold truncate">{service.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-black/80 z-10"></div>
                {/* Placeholder for dynamic image if available */}
                <div className="absolute inset-0 bg-[url('/gmc-yukon-xl-taxi.webp')] bg-cover bg-center opacity-40"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 text-slate-300 rounded-full mb-6 border border-slate-500/30 backdrop-blur-sm">
                            <Star className="w-4 h-4 fill-teal-300" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Premium Service</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/booking">
                                <Button size="lg" className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white font-bold px-8 py-6 text-lg transition-colors">
                                    Book Now
                                </Button>
                            </Link>
                            <a href="https://wa.me/996575806733">
                                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 active:text-gray-900 px-8 py-6 text-lg transition-colors">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Navigation / Table of Contents */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-wrap items-center gap-6 text-sm">
                        <span className="font-bold text-gray-900 uppercase tracking-wider text-[10px] text-gray-400">Quick Navigation:</span>
                        <a href="#overview" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Service Overview</a>
                        <a href="#features" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Fleet Standards</a>
                        <a href="#pricing" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Transparent Pricing</a>
                        <a href="#faq" className="text-gray-600 font-medium hover:text-brand-navy hover:underline decoration-brand-navy/30 underline-offset-4">Service FAQs</a>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <div id="overview" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title} Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.content}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div id="features" className="bg-gray-50 rounded-2xl p-8 border border-gray-100 scroll-mt-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Service?</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-slate-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800 mt-2">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing Table */}
                        {service.pricing && service.pricing.length > 0 && (
                            <div id="pricing" className="scroll-mt-24">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Quotes</h3>
                                <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                            <tr>
                                                <th className="px-6 py-4 font-bold text-gray-900">Service / Vehicle</th>
                                                <th className="px-6 py-4 font-bold text-slate-600 text-right">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {service.pricing.map((item, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                                                    <td className="px-6 py-4 font-bold text-slate-600 text-right">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm text-gray-500 italic">* Prices may vary during peak seasons (Ramadan & Hajj).</p>
                            </div>
                        )}

                        {/* FAQ Section */}
                        {service.faqs && service.faqs.length > 0 && (
                            <div id="faq" className="bg-white rounded-2xl p-8 border border-gray-100 scroll-mt-24">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-slate-200 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                                <span className="text-slate-500">Q.</span> {faq.question}
                                            </h4>
                                            <p className="text-gray-600 pl-7">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <PilgrimTips />

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Booking Widget */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                            <div className="bg-slate-500 p-6 text-white text-center">
                                <h3 className="text-xl font-bold">Book Your Ride</h3>
                                <p className="text-sm opacity-90 mt-1">Instant confirmation via WhatsApp</p>
                            </div>
                            <div className="p-6">
                                <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading form...</div>}>
                                    <BookingForm />
                                </Suspense>
                            </div>
                            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                                <p className="text-xs text-gray-500 flex justify-center items-center gap-2">
                                    <Clock className="w-3 h-3" /> 24/7 Support Available
                                </p>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
                            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Our support team is available 24/7 to assist you with your booking.</p>
                            <a href="https://wa.me/996575806733" className="block mb-4">
                                <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white group">
                                    <WhatsAppIcon className="w-4 h-4 mr-2" /> WhatsApp Support
                                </Button>
                            </a>
                            <div className="text-xs text-gray-500">
                                <span className="block mb-1">Email us at:</span>
                                <a href="mailto:support@haramtaxiservice.com" className="text-slate-400 hover:text-white transition-colors">support@haramtaxiservice.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Silo Linking Section */}
            <div className="bg-gray-50 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">{service.title} Service Areas</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link href="/locations/makkah" className="px-5 py-2 bg-white hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Makkah
                        </Link>
                        <Link href="/locations/madinah" className="px-5 py-2 bg-white hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Madinah
                        </Link>
                        <Link href="/locations/jeddah" className="px-5 py-2 bg-white hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Jeddah
                        </Link>
                        <Link href="/routes/jeddah-airport-to-makkah" className="px-5 py-2 bg-white hover:bg-slate-50 text-gray-700 hover:text-slate-700 rounded-full border border-gray-200 transition-colors shadow-sm">
                            Jeddah Airport to Makkah
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

