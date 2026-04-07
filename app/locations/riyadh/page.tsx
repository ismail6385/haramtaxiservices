import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';
import { MapPin, Phone, Clock, Star, Shield, Car, CheckCircle2, Navigation, DollarSign, ArrowRight, MessageCircle } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/locations/riyadh',
    },
    title: 'Taxi Service in Riyadh | Professional Chauffeur & City Transfer',
    description: 'Book trusted taxi service in Riyadh. Airport transfer to King Khalid Int\'l Airport (RUH), city tours, and intercity rides. 24/7 professional drivers.',
    keywords: ['taxi Riyadh', 'Riyadh airport taxi', 'taxi service Riyadh Saudi Arabia', 'chauffeur service Riyadh', 'ride to Riyadh'],
    openGraph: {
        title: 'Taxi Service in Riyadh | Professional Chauffeur',
        description: 'Reliable taxi service in Riyadh. Airport transfers, city tours, and private chauffeurs. Book now!',
        url: 'https://haramtaxiservice.com/locations/riyadh',
        type: 'website',
    },
};

export default function RiyadhLocationPage() {
    const services = [
        {
            name: 'Airport Transfer',
            description: 'Reliable pickup/drop-off at King Khalid International Airport (RUH). Meet & greet service included.',
            icon: Car,
            href: '/services/riyadh-airport-transfer'
        },
        {
            name: 'City Tours',
            description: 'Explore Riyadh landmarks like Kingdom Centre, Al Masmak Fortress, and The Boulevard.',
            icon: MapPin,
            href: '/services/city-tours'
        },
        {
            name: 'Intercity Travel',
            description: 'Comfortable private taxi from Riyadh to Dammam, Al Khobar, or Makkah/Madinah.',
            icon: Navigation,
            href: '/routes/riyadh-to-makkah'
        },
        {
            name: 'Hourly Chauffeur',
            description: 'Book a driver by the hour for business meetings, events, or shopping trips in Riyadh.',
            icon: Clock,
            href: '/services/hourly-chauffeur'
        }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Riyadh Airport to downtown?",
            answer: "Fares are fixed based on the vehicle type (Sedan vs. SUV/GMC) and your specific destination in Riyadh. Book with us for transparent quotes."
        },
        {
            question: "Is Uber or Careem available in Riyadh?",
            answer: "Yes, but our private taxi service offers pre-booked reliability, executive vehicles, and professional drivers who specialize in long-distance and airport transfers."
        },
        {
            question: "Can I book a taxi from Riyadh to Makkah?",
            answer: "Yes, we offer long-distance intercity transfers. The drive takes about 8 to 9 hours, offering a comfortable and private alternative to flying or public transport."
        },
        {
            question: "Do you serve Riyadh Season events?",
            answer: "Absolutely! We provide dedicated transport to Riyadh Boulevard, Winter Wonderland, and all other Riyadh Season venues with pre-scheduled pickups."
        }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haram Taxi Service Riyadh",
        "image": "https://haramtaxiservice.com/logo.png",
        "telephone": "+996575806733",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "King Fahd Road",
            "addressLocality": "Riyadh",
            "postalCode": "11564",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.7136,
            "longitude": 46.6753
        },
        "url": "https://haramtaxiservice.com/locations/riyadh",
        "priceRange": "$$"
    };

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            {/* Breadcrumbs */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-slate-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/locations" className="hover:text-slate-600">Locations</Link>
                    <span className="mx-2">/</span>
                    <span className="font-semibold text-gray-900">Riyadh</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 bg-gray-900/60 z-10 transition-colors"></div>
                {/* Fallback color if image fails loading */}
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <Image
                        src="/riyadh-skyline.webp"
                        alt="Taxi Service in Riyadh Saudi Arabia"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover opacity-60"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500 rounded-full mb-6 italic">
                            <Star className="w-4 h-4 fill-white" />
                            <span className="text-sm font-semibold uppercase tracking-wide">Professional Service in Riyadh</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Riyadh&apos;s Trusted Taxi Service
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed font-light">
                            Professional chauffeur service for airport transfers, business travel, and city tours in Saudi Arabia&apos;s capital.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Riyadh." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:scale-105 transition-transform flex items-center justify-center border-0">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Book via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Overview / Quick Info Block */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Taxi Booking in Riyadh</h2>
                    <p className="text-lg text-slate-800 leading-relaxed">
                        We offer professional taxi services for airport transfers and city rides throughout Riyadh.
                        Available 24/7 for major districts like Olaya, Al Malqa, and Diplomatic Quarter.
                        Get a fixed quote for your journey today.
                    </p>
                    <p className="text-sm text-slate-600 mt-2 italic">*All rides are pre-booked for maximum reliability.</p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Why Choose Us */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <Shield className="w-8 h-8 text-slate-500" />
                                    Why Choose Haram Taxi in Riyadh?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Licensed & Professional", desc: "Expert chauffeurs with deep knowledge of Riyadh's road networks." },
                                        { title: "Executive Fleet", desc: "Clean, comfortable vehicles from standard sedans to luxury SUVs." },
                                        { title: "Fixed Price Policy", desc: "All quotes provided upfront. No hidden surcharges." },
                                        { title: "Always Available", desc: "24/7 support for early morning flights and late-night arrivals." },
                                        { title: "English & Arabic", desc: "Bilingual support for a smooth communication experience." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-slate-200 transition-colors">
                                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Services List */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services in Riyadh</h2>
                                <div className="space-y-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                                <service.icon className="w-6 h-6 text-slate-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                                <p className="text-gray-600 mb-3">{service.description}</p>
                                                {service.href && (
                                                    <Link href={service.href} className="text-slate-600 font-semibold text-sm hover:underline flex items-center gap-1">
                                                        {service.name} Details <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study / Testimonial Hybrid */}
                            <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 bg-slate-500 rounded text-xs font-bold mb-4">BUSINESS TRAVEL REVIEW</div>
                                    <h3 className="text-2xl font-bold mb-4">Reliable Transport for Riyadh Business</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        &quot;Professional and punctual. We used Haram Taxi for our team&apos;s transport to the Riyadh International Convention & Exhibition Center. The driver was excellent, the vehicle was pristine, and everything went according to plan. Highly recommended for executive travel.&quot;
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                                        <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center font-bold">SM</div>
                                        <div>
                                            <div className="font-bold">Sarah M.</div>
                                            <div className="text-xs text-gray-400">Corporate Client</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            </div>

                            {/* FAQs */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Riyadh Taxi Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Form Widget */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-slate-600 p-6 text-white text-center">
                                    <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                                        <Clock className="w-5 h-5 text-white" /> Get a Quote
                                    </h3>
                                    <p className="text-sm opacity-90 mt-1">Chat on WhatsApp for instant pricing</p>
                                </div>
                                <div className="p-6">
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Booking</h3>
                                        <p className="text-sm text-gray-600 mb-4 font-medium">Click below to start a WhatsApp chat.</p>
                                        <a href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride%20in%20Riyadh." target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12 border-0">
                                                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Booking
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Coverage Area */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-slate-500" /> Service Areas
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    We serve all major districts in Riyadh including:
                                </p>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> Olaya</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> Al Malqa</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> Al Nakheel</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> Diplomatic Q.</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> King Abdullah D.</li>
                                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-slate-500" /> Al Sulaimaniya</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Cities Component */}
            <div className="container mx-auto px-4 pb-20">
                <NearbyCities currentCity="Riyadh" />
            </div>

            {/* Final CTA */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Need a Transfer in Riyadh?</h2>
                    <p className="text-xl text-gray-400 mb-8 font-light">
                        From King Khalid Airport to downtown, or private intercity travel - we provide professional services you can trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking">
                            <Button size="lg" className="bg-slate-500 hover:bg-slate-600 text-white px-10 py-6 text-lg font-bold border-0">
                                Book Now
                            </Button>
                        </Link>
                        <a href="https://wa.me/996575806733">
                            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-10 py-6 text-lg">
                                WhatsApp Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

