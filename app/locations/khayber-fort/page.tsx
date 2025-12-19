import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Taxi Service in Khayber | Historical Tours & City Rides - Haram Taxi',
    description: 'Book reliable taxi service in Khayber, Saudi Arabia. Historical site tours, city transfers, and hotel pickups. Available 24/7. Call now!',
    keywords: ['taxi service Khayber', 'Khayber taxi', 'taxi in Khayber', 'Khayber fort tour taxi', 'Khayber to Madinah taxi'],
    openGraph: {
        title: 'Taxi Service in Khayber | Historical Tours & City Rides',
        description: 'Professional taxi service in Khayber. Historical tours, city transfers. Book now!',
        url: 'https://haramtaxiservice.com/locations/khayber-fort',
        type: 'website',
    },
};

export default function KhayberPage() {
    const services = [
        { name: 'Khayber City Transfer', description: 'Reliable taxi service within Khayber', icon: Car },
        { name: 'Khayber Fort Tours', description: 'Tours to historical forts and ancient sites', icon: MapPin },
        { name: 'Khayber to Madinah', description: 'Comfortable ride from Khayber to Madinah', icon: ArrowRight },
        { name: 'Khayber Hotel Pickup', description: 'Pickup from any location in Khayber', icon: MapPin },
        { name: 'Historical Site Tours', description: 'Visit ancient oases and ruins', icon: Car },
        { name: '24/7 Taxi Khayber', description: 'Round-the-clock taxi service', icon: Clock },
    ];

    const features = ['Licensed Khayber taxi drivers', 'Clean and air-conditioned vehicles', 'Fixed rates - no hidden charges', '24/7 availability in Khayber', 'English & Arabic speaking drivers', 'Historical tour packages available'];

    const faqs = [
        { question: "How much is a taxi for Khayber fort tours?", answer: "The taxi fare for Khayber fort tours typically ranges from SAR 150-300 for a half-day tour depending on the sites you want to visit. We offer customized historical tour packages." },
        { question: "Do you provide tours to Khayber historical sites?", answer: "Yes, we provide comprehensive tours to Khayber's historical sites including ancient forts, oases, and ruins. Our drivers are knowledgeable about the rich Islamic history of Khayber." },
        { question: "Is taxi service available 24/7 in Khayber?", answer: "Yes, our taxi service in Khayber operates 24 hours a day, 7 days a week. Whether you need early morning transfer or late-night pickup, we're always available." },
        { question: "How long does it take from Khayber to Madinah by taxi?", answer: "The taxi journey from Khayber to Madinah takes approximately 2-2.5 hours. We provide comfortable vehicles with experienced drivers for this route." },
        { question: "Can you arrange day trips from Madinah to Khayber?", answer: "Yes, we offer day trip packages from Madinah to Khayber including round-trip transportation and guided tours of historical sites. Perfect for history enthusiasts." }
    ];

    const popularRoutes = [
        { from: 'Khayber', to: 'Madinah', duration: '2-2.5 hrs', price: 'SAR 250-350' },
        { from: 'Khayber City', to: 'Khayber Fort', duration: '15 min', price: 'SAR 30-50' },
        { from: 'Khayber', to: 'Ancient Oasis', duration: '20 min', price: 'SAR 40-60' },
        { from: 'Madinah', to: 'Khayber Day Tour', duration: '2-2.5 hrs', price: 'SAR 400-600' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Haram Taxi Service - Khayber",
        "image": "https://haramtaxiservice.com/khaybar-fort-main.webp", "@id": "https://haramtaxiservice.com/locations/khayber-fort",
        "url": "https://haramtaxiservice.com/locations/khayber-fort", "telephone": "+966-XXX-XXXX", "priceRange": "SAR 30-600",
        "address": { "@type": "PostalAddress", "addressLocality": "Khayber", "addressRegion": "Madinah Province", "postalCode": "43721", "addressCountry": "SA" },
        "geo": { "@type": "GeoCoordinates", "latitude": 25.7000, "longitude": 39.3000 },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
        "areaServed": { "@type": "City", "name": "Khayber" }
    };

    const faqSchema = {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="bg-white min-h-screen">
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-teal-500">Home</Link><span>/</span>
                            <Link href="/locations" className="hover:text-teal-500">Locations</Link><span>/</span>
                            <span className="text-gray-900 font-medium">Khayber</span>
                        </div>
                    </div>
                </div>

                <section className="relative h-[500px] bg-gray-900">
                    <Image src="/khaybar-fort-main.webp" alt="Taxi service in Khayber - Historical fort" fill className="object-cover opacity-60" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold">Khayber, Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Taxi Service in <span className="text-teal-400">Khayber</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-6">
                                    Specialized taxi service for Khayber Fort and historical tours. Explore the ancient oasis and forts. Transfers from Madinah (2 hrs) and AlUla (3 hrs).
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-teal-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving Khayber and historical sites within 30km radius</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/booking"><Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">Book Khayber Taxi Now</Button></Link>
                                    <a href="tel:+966XXXXXXX"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"><Phone className="w-5 h-5 mr-2" />Call Now</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-teal-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">Service in Khayber</div></div>
                            <div><div className="text-3xl font-bold mb-2">2-2.5 hrs</div><div className="text-sm opacity-90">To Madinah</div></div>
                            <div><div className="text-3xl font-bold mb-2">Ancient</div><div className="text-sm opacity-90">Historical Sites</div></div>
                            <div><div className="text-3xl font-bold mb-2">200+</div><div className="text-sm opacity-90">Happy Tourists</div></div>
                        </div>
                    </div>
                </section>

                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from Khayber</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Madinah</div>
                                    <div className="text-sm text-gray-500">Distance: 170km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">2 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">AlUla</div>
                                    <div className="text-sm text-gray-500">Distance: 290km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">3 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Tabuk</div>
                                    <div className="text-sm text-gray-500">Distance: 450km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">5 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Solved Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Challenges Visiting Khayber</h2>
                            <p className="text-xl text-gray-600">We solve the difficulties travelers face in this remote historical destination.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Extreme Remoteness</h3>
                                <p className="text-gray-600 mb-4">Khayber is 170km from Madinah with very limited local transport. No rideshare apps operate here, and finding a return taxi after exploring can be nearly impossible.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Round-trip booking with guaranteed return</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Fortress Location Knowledge</h3>
                                <p className="text-gray-600 mb-4">The historic fort sites are not well-marked. Many drivers from Madinah don&apos;t know the exact locations of the ancient oases and fortifications.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Drivers with local historical knowledge</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Tourist Infrastructure</h3>
                                <p className="text-gray-600 mb-4">Unlike Madinah or AlUla, Khayber has minimal tourist facilities. Long waits in the desert heat without transport options is a real risk.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Door-to-door service with waiting time included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost / Pricing Guide */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
                                <Wallet className="w-4 h-4 text-teal-600" />
                                <span className="text-teal-800 text-sm font-semibold">Fair Remote Tours</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical Tour Pricing for Khayber</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Transparent rates for day trips to this significant Islamic historical site.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Affects Khayber Pricing?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Distance from Madinah</h4>
                                            <p className="text-gray-600 text-sm">170km one-way means 340km round-trip with fuel and driver time costs factored in.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Waiting & Exploration Time</h4>
                                            <p className="text-gray-600 text-sm">Day tours include 2-3 hours of fortress exploration time while driver waits (vs. drop-and-go transfers).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Desert Road Conditions</h4>
                                            <p className="text-gray-600 text-sm">Remote desert highways require reliable, well-maintained vehicles with safety equipment.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-500 p-8 rounded-2xl text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6">Whole-Day Package</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    Most visitors book full-day tours from Madinah, including pickup, fortress exploration, photo stops, and return—all in one transparent price.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Book Khayber Tour
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Khayber Tours Work</h2>
                            <p className="text-xl text-gray-600">Experience the Battle of Khayber historical site</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Book Day Trip</h3>
                                <p className="text-center text-gray-600">Reserve a round-trip tour from your Madinah hotel to Khayber Fort with flexible timing.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Morning Pickup</h3>
                                <p className="text-center text-gray-600">Early start to avoid midday heat. Comfortable 2-hour drive through desert landscapes.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Explore & Return</h3>
                                <p className="text-center text-gray-600">Visit ancient fortresses, take photos, learn history. Safe return to Madinah by afternoon.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in Khayber</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across Khayber</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <service.icon className="w-6 h-6 text-teal-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes from Khayber</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from Khayber</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-1"><div className="text-sm text-gray-600 mb-1">From</div><div className="font-bold text-gray-900">{route.from}</div></div>
                                        <ArrowRight className="w-6 h-6 text-teal-500 mx-4" />
                                        <div className="flex-1"><div className="text-sm text-gray-600 mb-1">To</div><div className="font-bold text-gray-900">{route.to}</div></div>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-600"><Clock className="w-4 h-4" />{route.duration}</div>
                                        <div className="font-semibold text-teal-500">{route.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Khayber Taxi Service?</h2>
                                <p className="text-gray-600 mb-8 text-lg">We provide reliable, professional taxi services throughout Khayber with experienced drivers who know all historical sites and routes.</p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />{feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/khaybar-oasis.webp" alt="Professional taxi service to Khayber oasis" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in Khayber</p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 px-6 rounded-xl border-0">
                                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-teal-500 text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                <section className="py-20 bg-teal-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Khayber Taxi?</h2>
                        <p className="text-xl mb-8 opacity-90">Professional taxi service in Khayber available 24/7. Book now for instant confirmation!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking"><Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">Book Khayber Taxi Online</Button></Link>
                            <a href="tel:+966XXXXXXX"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-6 text-lg"><Phone className="w-5 h-5 mr-2" />Call for Booking</Button></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
