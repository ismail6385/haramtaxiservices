import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Globe, Truck, Landmark, UserCheck, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import BorderCrossingTips from '@/components/BorderCrossingTips';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/al-haditha',
    },
    title: 'Taxi Service in Al Haditha | Jordan Border Crossing',
    description: 'Trusted taxi service at Al Haditha Land Port. Transfers to Qurayyat, Tabuk, and Jordan border. 24/7 passenger and cargo logistics support.',
    keywords: ['taxi Al Haditha', 'Al Haditha border taxi', 'Saudi Jordan border taxi', 'Qurayyat to Haditha taxi', 'Al Haditha customs taxi'],
    openGraph: {
        title: 'Taxi Service in Al Haditha | Largest Land Port',
        description: 'Reliable transport at the Middle East\'s largest land port. Connecting Saudi Arabia and Jordan.',
        url: 'https://haramtaxiservice.com/locations/al-haditha',
        type: 'website',
    },
};

export default function AlHadithaLocationPage() {
    const services = [
        {
            name: 'Jordan Border Transfer',
            description: 'Direct drop-off and pick-up at the Al Haditha Passport Control and Customs area.',
            icon: Globe,
            href: '/services/jordan-border-taxi'
        },
        {
            name: 'Qurayyat City Ride',
            description: 'Quick 30km transfer to Qurayyat city center, hotels, and domestic airport.',
            icon: MapPin,
            href: '/services/qurayyat-taxi'
        },
        {
            name: 'Tabuk/Jouf Travel',
            description: 'Long-distance rides to regional hubs like Tabuk or Sakaka (Al Jouf).',
            icon: Truck,
            href: '/services/long-distance-taxi'
        },
        {
            name: 'Customs Clearance Wait',
            description: 'Standby taxi services for drivers and agents processing cargo paperwork.',
            icon: UserCheck,
            href: '/services/customs-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Al Haditha from Qurayyat?",
            answer: "It is very close, approximately 30km, taking about a estimated time by car."
        },
        {
            question: "Is the border open 24 hours?",
            answer: "Yes, Al Haditha is a major international port operating 24/7. Our taxis are always available."
        },
        {
            question: "Can you take us into Jordan?",
            answer: "We take you to the Saudi departure terminal. You will need to cross the neutral zone to the Omari (Jordanian) side."
        },
        {
            question: "Do you serve freight drivers?",
            answer: "Yes, we often assist truck drivers needing rides into town while their vehicles are in customs."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Haditha",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Border Road",
            "addressLocality": "Al Haditha",
            "postalCode": "77451",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/al-haditha",
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
        <div className="bg-blue-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-blue-100 py-4 border-b border-blue-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-blue-900/60">
                    <Link href="/" className="hover:text-blue-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-blue-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-blue-900">Al Haditha</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-blue-800 z-0">
                    <Image
                        src="/al-haditha-border.webp"
                        alt="Taxi at Al Haditha Land Port"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full mb-6 animate-fade-in border border-blue-400/50">
                            <Landmark className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Major Land Port</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Al Haditha Border Taxi
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-blue-50">
                            The busiest gateway to the Levant. Professional transport for travelers and logistics.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Haditha." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            Book via WhatsApp
                                        </Button>
                                    </a>
                                </div>
                    </div>
                </div>
            </section>

            {/* AI Overview Block */}
            <section className="py-12 bg-white border-b border-blue-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How much does a taxi cost in Al Haditha?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Transfers to Qurayyat city typically cost <span className="font-bold text-blue-700">Get Quote</span>.
                        Rides to Qurayyat Airport designated for border travelers are around <span className="font-bold text-blue-700">Get Quote</span>.
                        Long-haul trips to Al Jouf/Sakaka start from <span className="font-bold text-blue-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-blue-600" />
                                    Why Haram Taxi Al Haditha?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Cross-Border Expertise</h3>
                                            <p className="text-sm text-gray-600">We assist thousands of passengers moving between Saudi Arabia and Jordan every year.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                            <Truck className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Logistics Support</h3>
                                            <p className="text-sm text-gray-600">Reliable transport for customs agents and truck drivers needing quick city access.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Al-haditha Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <BorderCrossingTips borderName="Al Haditha" targetCountry="Jordan" />

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Al Haditha FAQs</h2>
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
                                <div className="bg-blue-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Quick Booking
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Border & City Rides</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Al%20Haditha." target="_blank" rel="noopener noreferrer" className="block w-full">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12">
                                            <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Booking
                                        </Button>
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Local Info */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-blue-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Al Haditha Passenger Terminal</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Customs Clearance Zone</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Qurayyat International Hotel</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Omari Border (Jordan Side)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Al Haditha" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Crossing to Jordan?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Ensure a smooth transit with the region&apos;s top taxi service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                WhatsApp Booking
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}



