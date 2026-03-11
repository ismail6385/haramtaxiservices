import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Factory, Fuel, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/rabigh',
    },
    title: 'Taxi Service in Rabigh | Industrial City & KAEC Transfer',
    description: 'Professional taxi service in Rabigh. Serving Rabigh Refining, Petro Rabigh, and KAEC. Reliable corporate transport.',
    keywords: ['taxi Rabigh', 'Rabigh industrial taxi', 'Petro Rabigh taxi', 'Rabigh to KAEC taxi', 'Rabigh to Jeddah taxi'],
    openGraph: {
        title: 'Taxi Service in Rabigh | Industrial Hub',
        description: 'Reliable transport in Rabigh. Corporate rides for Petro Rabigh and industrial sectors.',
        url: 'https://haramtaxiservice.com/locations/rabigh',
        type: 'website',
    },
};

export default function RabighLocationPage() {
    const services = [
        {
            name: 'Petro Rabigh Transport',
            description: 'Dedicated taxi services for employees and visitors of the Petro Rabigh complex.',
            icon: Fuel,
            href: '/services/petro-rabigh-taxi'
        },
        {
            name: 'KAEC Connection',
            description: 'Quick transfers to King Abdullah Economic City and the Haramain Railway Station.',
            icon: Factory,
            href: '/services/kaec-taxi'
        },
        {
            name: 'Jeddah Airport (JED)',
            description: 'Direct highway rides to King Abdulaziz International Airport (approx. 90 mins).',
            icon: PlaneIcon, // Helper below
            href: '/services/jeddah-airport-taxi'
        },
        {
            name: 'Yanbu Transfer',
            description: 'Corporate shuttles north to Yanbu Industrial City along the coast.',
            icon: ArrowRight,
            href: '/services/yanbu-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Rabigh from KAEC?",
            answer: "Rabigh is very close to KAEC, only about a Get Quote minute drive south along the highway."
        },
        {
            question: "Do you service the industrial zone?",
            answer: "Yes, we specialize in pick-ups and drop-offs at the main gates of the Rabigh Industrial City and Petro Rabigh."
        },
        {
            question: "Can I book a ride to Madinah?",
            answer: "Yes, we offer long-distance taxis to Madinah via the new highway, which takes about 3 hours."
        },
        {
            question: "Is there a train station in Rabigh?",
            answer: "The nearest Haramain High Speed Railway station is located in KAEC (King Abdullah Economic City), just south of Rabigh."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Rabigh",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+966569487569",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Abdulaziz Road",
            "addressLocality": "Rabigh",
            "postalCode": "25725",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/rabigh",
        "priceRange": "$$"
    };

    return (
        <div className="bg-indigo-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-indigo-100 py-4 border-b border-indigo-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-indigo-900/60">
                    <Link href="/" className="hover:text-indigo-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-indigo-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-indigo-900">Rabigh</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-indigo-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-indigo-800 z-0">
                    <Image
                        src="/rabigh-industrial.webp"
                        alt="Taxi Service in Rabigh Industrial City"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full mb-6 animate-fade-in border border-indigo-400/50">
                            <Factory className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Petrochemical Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Rabigh Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-indigo-50">
                            Professional transfers for the energy sector. Connecting Rabigh to KAEC, Rhine, and Jeddah.
                        </p>

                        <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Rabigh." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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
            <section className="py-12 bg-white border-b border-indigo-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Rabigh</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Local rides to the industrial zone cost <span className="font-bold text-indigo-700">Get Quote</span>.
                        Transfers to KAEC Station are approximately <span className="font-bold text-indigo-700">Get Quote</span>.
                        Jeddah Airport transfers start from <span className="font-bold text-indigo-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-indigo-600" />
                                    Why Haram Taxi Rabigh?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Fuel className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Industry Access</h3>
                                            <p className="text-sm text-gray-600">Familiar with gates and shifts at Petro Rabigh and the power plant.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Link to KAEC</h3>
                                            <p className="text-sm text-gray-600">The most reliable link between Rabigh housing and global transport at KAEC.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Rabigh FAQs</h2>
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
                                <div className="bg-indigo-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Schedule Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Petro Rabigh & KAEC</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                    <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                    <a href="https://wa.me/966569487569?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Rabigh." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-indigo-600" /> Key Sites
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Petro Rabigh Complex</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Rabigh General Hospital</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Rabigh Corniche</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div> Rabigh Technical College</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Rabigh" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Lift to Work?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Dependable daily transport for Rabigh&apos;s industrial workforce.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/966569487569">
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

// Helper for Plane Icon
function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12h20" />
            <path d="M13 2 4 14" />
            <path d="M20 14 11 2" />
        </svg>
    )
}

