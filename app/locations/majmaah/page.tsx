import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Shield, Train, School, ArrowRight } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/majmaah',
    },
    title: 'Taxi Service in Al Majmaah | Railway Station & Sudair',
    description: 'Trusted taxi service in Al Majma\'ah. Transfers to Majmaah SAR Train Station, Sudair Industrial City, and Majmaah University. Riyadh airport rides.',
    keywords: ['taxi Majmaah', 'Majmaah train station taxi', 'Sudair Industrial City taxi', 'Majmaah University taxi', 'taxi to Riyadh from Majmaah'],
    openGraph: {
        title: 'Taxi Service in Al Majmaah | Train & Industrial',
        description: 'Reliable rides in Al Majma\'ah. Connecting SAR Railway Station, Sudair Industrial City, and University.',
        url: 'https://haramtaxiservice.com/locations/majmaah',
        type: 'website',
    },
};

export default function MajmaahLocationPage() {
    const services = [
        {
            name: 'Majmaah SAR Station',
            description: 'Pickup and drop-off at the SAR Railway Station for trains to Riyadh, Qassim, Hail, and Jouf.',
            icon: Train,
            href: '/services/majmaah-train-taxi'
        },
        {
            name: 'Sudair Industrial City',
            description: 'Corporate transport to factories and businesses in Sudair Industrial and Business City.',
            icon: ArrowRight,
            href: '/services/sudair-industrial-taxi'
        },
        {
            name: 'Majmaah University Transfer',
            description: 'Safe and punctual rides for students and faculty to Majmaah University campuses.',
            icon: School,
            href: '/services/university-taxi'
        },
        {
            name: 'Intercity to Riyadh',
            description: 'Private car transfer to King Khalid Airport (RUH) or Riyadh city center (approx. 180km).',
            icon: MapPin,
            href: '/services/intercity-taxi'
        }
    ];

    const faqs = [
        {
            question: "How far is Sudair Industrial City from Majmaah?",
            answer: "Sudair Industrial City is located about a short distance south of Majmaah, a comfortable drive."
        },
        {
            question: "Is there a taxi stand at Majmaah SAR Station?",
            answer: "Taxis can be limited upon train arrival. We strongly recommend booking in advance to have a driver waiting for you."
        },
        {
            question: "Do you offer monthly rides for university students?",
            answer: "Yes, we offer scheduled contract transport for students and staff at Majmaah University."
        },
        {
            question: "How much is a taxi to Riyadh Airport?",
            answer: "A private transfer from Majmaah to King Khalid International Airport (RUH) typically ranges from 250 to Get Quote"
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Al Majmaah",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Al Majma'ah",
            "postalCode": "15362",
            "addressCountry": "SA"
        },
        "url": "https://haramtaxiservice.com/locations/majmaah",
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
        <div className="bg-emerald-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-emerald-100 py-4 border-b border-emerald-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-emerald-900/60">
                    <Link href="/" className="hover:text-emerald-700">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-emerald-700">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-emerald-900">Al Majma&apos;ah</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-emerald-900/50 z-10"></div>
                {/* Fallback color/image */}
                <div className="absolute inset-0 bg-stone-800 z-0">
                    <Image
                        src="/majmaah-university.webp"
                        alt="Taxi Service in Majmaah and Sudair"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-full mb-6 animate-fade-in border border-emerald-400/50">
                            <Train className="w-4 h-4 text-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Railway Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Majmaah Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-95 mb-8 leading-relaxed font-light text-emerald-50">
                            Connecting you to the SAR Railway Station, Sudair Industrial City, and University.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Majmaah." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-[#25D366] hover:bg-[#1ebd5b] text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Book via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxi Fares in Al Majma&apos;ah</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A taxi from Majmaah SAR Station to the city center costs around <span className="font-bold text-emerald-700">Get Quote</span>.
                        Trips to Sudair Industrial City are typically <span className="font-bold text-emerald-700">affordable rates</span>.
                        Transfers to Riyadh Airport (RUH) start from <span className="font-bold text-emerald-700">Get Quote</span>.
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
                                    <Shield className="w-8 h-8 text-emerald-600" />
                                    Why Haram Taxi Majmaah?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <Train className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Station Pickup</h3>
                                            <p className="text-sm text-gray-600">We monitor train schedules to ensure convenient pickups upon your arrival.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                            <School className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Student Safe</h3>
                                            <p className="text-sm text-gray-600">Trusted by families for transporting university students safely and punctually.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Majmaah Taxi Services</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-emerald-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        Booking Info <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Majmaah Visitor FAQs</h2>
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
                                <div className="bg-emerald-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> Reserve Taxi
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Station & University</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Book Your Ride</h3>
                                        <p className="text-sm text-gray-600 mb-4">Chat with us on WhatsApp for instant booking.</p>
                                        <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Majmaah." target="_blank" rel="noopener noreferrer" className="block w-full">
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
                                    <MapPin className="w-5 h-5 text-emerald-600" /> Key Landmarks
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> SAR Railway Station</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Majmaah University</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Sudair Industrial City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> King Salman Sport City</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div> Al Twaim Historic Village</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Majmaah" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Train Connection?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Let us handle the last mile from the SAR station to your home or office.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg font-bold">
                                Book Now
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
