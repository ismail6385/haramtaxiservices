import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Anchor, Heart, Truck, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/najran',
    },
    title: 'Taxi Service in Najran | Yemen Border & Heritage Tours',
    description: 'Premier taxi service in Najran. Airport transfers (EAM), Wuday\'ah Yemen Border crossing, and Al-Ukhdood heritage tours.',
    keywords: ['taxi Najran', 'Najran airport taxi', 'Yemen border taxi', 'Wuday\'ah border transport', 'taxi to Yemen border'],
    openGraph: {
        title: 'Taxi Service in Najran | Yemen Border',
        description: 'Safe and reliable transfers in Najran. Connect to the Wuday\'ah border and Najran Airport (EAM).',
        url: 'https://haramtaxiservice.com/locations/najran',
        type: 'website',
    },
};

export default function NajranLocationPage() {
    const services = [
        {
            name: 'Yemen Border (Wuday\'ah)',
            description: 'Specialized transfer service to the Wuday\'ah land port for travelers heading to Yemen.',
            icon: Truck,
            href: '/routes/najran-to-yemen-border'
        },
        {
            name: 'Najran Airport (EAM) Taxi',
            description: 'Punctual airport transfers from Najran Domestic Airport to all city districts.',
            icon: ArrowRight,
            href: '/services/najran-airport-taxi'
        },
        {
            name: 'Al-Ukhdood Heritage Tour',
            description: 'Visit the ancient archaeological site of Al-Ukhdood and Najran Fort.',
            icon: Heart,
            href: '/services/najran-heritage-tour'
        },
        {
            name: 'Intercity Transport',
            description: 'Long-distance rides to Abha, Khamis Mushait, and Jazan.',
            icon: MapPin,
            href: '/services/intercity-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is the Yemen border from Najran?",
            answer: "The Wuday\'ah border crossing is about 350km from Najran city, a drive of approximately 3.5 to 4 hours."
        },
        {
            question: "Is it safe to travel to the Yemen border?",
            answer: "We use experienced drivers who are familiar with the route and road conditions to ensure a safe journey to the Saudi side of the border."
        },
        {
            question: "How much is a taxi from Najran to the Yemen border?",
            answer: "Due to the long distance (350km+), a private taxi to Wuday\'ah typically costs between Get Quote"
        },
        {
            question: "Do you offer tours of Najran's historical sites?",
            answer: "Yes, we offer hourly packages to visit Al-Ukhdood, the Emara Palace, and the Raum Castle."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Najran",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Najran",
            "postalCode": "66271",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/najran",
        "priceRange": "$$"
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
        <div className="bg-yellow-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-yellow-100 py-4 border-b border-yellow-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-yellow-900/60">
                    <Link href="/" className="hover:text-yellow-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-yellow-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-yellow-900">Najran</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-yellow-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/najran-emara-palace.webp"
                        alt="Taxi Service in Najran and Yemen Border"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 rounded-full mb-6 animate-fade-in border border-yellow-400/50">
                            <Heart className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Historical Najran</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Najran Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-yellow-50">
                            Connecting you to Najran Airport (EAM), local heritage sites, and the Wuday&apos;ah Border.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Najran." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Book via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-white border-b border-yellow-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Najran?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Najran Airport (EAM) to the city typically costs <span className="font-bold text-yellow-700">Get Quote</span>.
                        Long-distance trips to the Wuday&apos;ah (Yemen) border start from <span className="font-bold text-yellow-700">Get Quote</span> due to the 350km distance.
                        Hourly city tours are available for <span className="font-bold text-yellow-700">Get Quote/hr</span>.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-yellow-600" />
                                    Why Haram Taxi Najran?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Truck className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Long Distance Ready</h3>
                                            <p className="text-sm text-gray-600">Comfortable vehicles equipped for the long drive to Wuday&apos;ah and Sharurah.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                            <Heart className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Heritage Passion</h3>
                                            <p className="text-sm text-gray-600">We love showing visitors the rich history of Al-Ukhdood and Najran&apos;s mud palaces.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Najran Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-yellow-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-yellow-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        {service.name} Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visitor FAQs</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-yellow-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Now
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Najran City & Border</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                        <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                        <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Najran." target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold h-12">
                                                <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp Booking
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-yellow-600" /> Key Destinations
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Najran City Center</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Najran Airport (EAM)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Al-Ukhdood Archeological Site</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Emara Palace</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Wuday&apos;ah (Yemen Border)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div> Sharurah</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Najran" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Traveling South?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We provide reliable connections to Sharurah and the Yemen Border.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-6 text-lg font-bold">
                                Book Najran Taxi
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-10 py-6 text-lg font-bold border-0">
                                <WhatsAppIcon className="w-5 h-5 mr-3" /> WhatsApp Booking
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
