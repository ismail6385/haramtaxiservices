import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Phone, ArrowRight, AlertCircle, Wallet } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
    title: 'Taxi Service in AlUla | Heritage Tours & City Rides - Haram Taxi',
    description: 'Book reliable taxi service in AlUla, Saudi Arabia. Heritage site tours, city transfers, and hotel pickups. Available 24/7. Call now!',
    keywords: ['taxi service AlUla', 'AlUla taxi', 'taxi in AlUla', 'AlUla heritage tour taxi', 'AlUla to Madinah taxi'],
    openGraph: {
        title: 'Taxi Service in AlUla | Heritage Tours & City Rides',
        description: 'Professional taxi service in AlUla. Heritage tours, city transfers. Book now!',
        url: 'https://haramtaxiservice.com/locations/alula',
        type: 'website',
    },
};

export default function AlUlaPage() {
    const services = [
        { name: 'AlUla City Transfer', description: 'Reliable taxi service within AlUla city', icon: Car },
        { name: 'AlUla Heritage Tours', description: 'Tours to Hegra, Elephant Rock, and ancient sites', icon: MapPin },
        { name: 'AlUla to Madinah', description: 'Comfortable ride from AlUla to Madinah', icon: ArrowRight },
        { name: 'AlUla Hotel Pickup', description: 'Pickup from any hotel in AlUla', icon: MapPin },
        { name: 'AlUla Day Tours', description: 'Full day tours to all major attractions', icon: Car },
        { name: '24/7 Taxi AlUla', description: 'Round-the-clock taxi service in AlUla', icon: Clock },
    ];

    const features = ['Licensed AlUla taxi drivers', 'Clean and air-conditioned vehicles', 'Fixed rates - no hidden charges', '24/7 availability in AlUla', 'English & Arabic speaking drivers', 'Heritage tour packages available'];

    const faqs = [
        { question: "How much is a taxi for AlUla heritage site tours?", answer: "The taxi fare for AlUla heritage tours typically ranges from SAR 200-400 for a full day tour depending on the sites you want to visit and vehicle type. We offer customized tour packages." },
        { question: "Do you provide tours to Hegra (Madain Saleh)?", answer: "Yes, we provide comprehensive tours to Hegra (Madain Saleh), AlUla's UNESCO World Heritage site. Our drivers are knowledgeable about the history and will ensure you have enough time to explore." },
        { question: "Is taxi service available 24/7 in AlUla?", answer: "Yes, our taxi service in AlUla operates 24 hours a day, 7 days a week. Whether you need early morning transfer or late-night pickup, we're always available." },
        { question: "Can you take us to Elephant Rock?", answer: "Yes, we offer tours to Elephant Rock (Jabal AlFil), one of AlUla's most iconic natural formations. The journey includes photo opportunities and time to explore the area." },
        { question: "How long does it take from AlUla to Madinah by taxi?", answer: "The taxi journey from AlUla to Madinah takes approximately 4-5 hours. We provide comfortable vehicles with experienced drivers for this route." }
    ];

    const popularRoutes = [
        { from: 'AlUla City', to: 'Hegra (Madain Saleh)', duration: '30 min', price: 'SAR 80-120' },
        { from: 'AlUla', to: 'Elephant Rock', duration: '20 min', price: 'SAR 60-100' },
        { from: 'AlUla', to: 'Madinah', duration: '4-5 hrs', price: 'SAR 500-700' },
        { from: 'AlUla', to: 'Old Town', duration: '15 min', price: 'SAR 40-60' },
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Haram Taxi Service - AlUla",
        "image": "https://haramtaxiservice.com/alula-hegra-tombs.webp", "@id": "https://haramtaxiservice.com/locations/alula",
        "url": "https://haramtaxiservice.com/locations/alula", "telephone": "+966-XXX-XXXX", "priceRange": "SAR 40-700",
        "address": { "@type": "PostalAddress", "addressLocality": "AlUla", "addressRegion": "Madinah Province", "postalCode": "43511", "addressCountry": "SA" },
        "geo": { "@type": "GeoCoordinates", "latitude": 26.6087, "longitude": 38.0534 },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" },
        "areaServed": { "@type": "City", "name": "AlUla" }
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
                            <span className="text-gray-900 font-medium">AlUla</span>
                        </div>
                    </div>
                </div>

                <section className="relative h-[500px] bg-gray-900">
                    <Image src="/alula-hegra-tombs.webp" alt="Taxi service in AlUla - Hegra heritage site" fill className="object-cover opacity-60" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/90 rounded-full mb-6">
                                    <MapPin className="w-4 h-4 text-white" />
                                    <span className="text-white text-sm font-semibold">AlUla, Saudi Arabia</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Taxi Service in <span className="text-teal-400">AlUla</span>
                                </h1>
                                <p className="text-xl text-gray-200 mb-6">
                                    Professional taxi service in AlUla serving the ancient heritage sites. Expert tours to Hegra, Elephant Rock, and Old Town. Transfers to Madinah (4 hrs) and Tabuk.
                                </p>

                                <div className="flex items-center gap-2 mb-8 text-teal-100 font-medium bg-white/10 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <MapPin className="w-5 h-5" />
                                    <span>Serving AlUla and heritage sites within 60km radius</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/booking"><Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">Book AlUla Taxi Now</Button></Link>
                                    <a href="tel:+966XXXXXXX"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"><Phone className="w-5 h-5 mr-2" />Call Now</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-teal-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-sm opacity-90">Service in AlUla</div></div>
                            <div><div className="text-3xl font-bold mb-2">UNESCO</div><div className="text-sm opacity-90">Heritage Site</div></div>
                            <div><div className="text-3xl font-bold mb-2">10+</div><div className="text-sm opacity-90">Attractions</div></div>
                            <div><div className="text-3xl font-bold mb-2">300+</div><div className="text-sm opacity-90">Happy Tourists</div></div>
                        </div>
                    </div>
                </section>

                {/* Travel Times Section */}
                <section className="py-12 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimated Travel Times from AlUla</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Madinah</div>
                                    <div className="text-sm text-gray-500">Distance: 380km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">4 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Tabuk</div>
                                    <div className="text-sm text-gray-500">Distance: 280km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">3.5 hours</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-gray-900">Khayber</div>
                                    <div className="text-sm text-gray-500">Distance: 290km</div>
                                </div>
                                <div className="text-xl font-bold text-teal-600">3 hours</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems Solved Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Transport Challenges in AlUla</h2>
                            <p className="text-xl text-gray-600">We solve the unique difficulties tourists face in this remote heritage destination.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Location Pickup</h3>
                                <p className="text-gray-600 mb-4">AlUla is isolated with limited public transport. Hotels and archaeological sites are far from the small town center, making taxi availability unreliable.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Pre-scheduled pickups with GPS coordination</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Heritage Site Navigation</h3>
                                <p className="text-gray-600 mb-4">Hegra (Madain Saleh) and Elephant Rock require knowledge of entry points and timing. Many drivers lack familiarity with archaeological regulations.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Drivers trained on heritage site access</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Desert Heat & Distance</h3>
                                <p className="text-gray-600 mb-4">Sites are 20-40km apart in extreme heat (summer temps hit 45°C). Walking between locations or waiting for rides isn&apos;t feasible.</p>
                                <div className="flex items-center text-teal-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-2" />
                                    <span>Solution: Multi-stop tour packages with AC vehicles</span>
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
                                <span className="text-teal-800 text-sm font-semibold">Fair Heritage Tours</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi & Tour Pricing in AlUla</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Transparent rates for archaeological tours and intercity transfers in this UNESCO World Heritage area.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Shapes Your Price?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <MapPin className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Sites Visited</h4>
                                            <p className="text-gray-600 text-sm">Single site (Hegra only) vs full heritage circuit (Hegra + Elephant Rock + Old Town + Dadan) affects duration and fuel costs.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Clock className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Time Commitment</h4>
                                            <p className="text-gray-600 text-sm">Half-day tours (4 hours) vs full-day exploration packages (8+ hours) with photo stops and guide time.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <Car className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Desert Terrain</h4>
                                            <p className="text-gray-600 text-sm">Desert roads require proper 4WD vehicles for some routes, factored into pricing for safety.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-500 p-8 rounded-2xl text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6">UNESCO Site Expertise</h3>
                                <p className="mb-6 opacity-90 text-lg">
                                    Our drivers are familiar with AlUla&apos;s archaeological sites, entry requirements, and best viewing times—worth more than just a taxi ride.
                                </p>
                                <Link href="/booking">
                                    <Button className="bg-white text-teal-600 hover:bg-gray-100 w-full text-lg h-12">
                                        Book Heritage Tour
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Heritage Tours Work</h2>
                            <p className="text-xl text-gray-600">Explore ancient Nabatean civilization with ease</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-10"></div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Choose Sites</h3>
                                <p className="text-center text-gray-600">Select which heritage sites you want to visit: Hegra tombs, Elephant Rock, or full circuit.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Coordinate Timing</h3>
                                <p className="text-center text-gray-600">We arrange pickup from your resort or AlUla town center, optimizing for best light/temperatures.</p>
                            </div>

                            <div className="bg-white p-6 relative">
                                <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                                    <span className="text-3xl font-bold text-teal-500">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Explore in Comfort</h3>
                                <p className="text-center text-gray-600">AC vehicle with knowledgeable driver. Return to hotel after sunset at Elephant Rock.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Taxi Services in AlUla</h2>
                            <p className="text-xl text-gray-600">Complete transportation solutions across AlUla</p>
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
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes from AlUla</h2>
                            <p className="text-xl text-gray-600">Most requested destinations from AlUla</p>
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
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AlUla Taxi Service?</h2>
                                <p className="text-gray-600 mb-8 text-lg">We provide reliable, professional taxi services throughout AlUla with experienced drivers who know all heritage sites and tourist attractions.</p>
                                <ul className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />{feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/alula-elephant-rock.webp" alt="Professional taxi service to AlUla Elephant Rock" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600">Common questions about taxi service in AlUla</p>
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
                        <h2 className="text-4xl font-bold mb-6">Ready to Book Your AlUla Taxi?</h2>
                        <p className="text-xl mb-8 opacity-90">Professional taxi service in AlUla available 24/7. Book now for instant confirmation!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking"><Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">Book AlUla Taxi Online</Button></Link>
                            <a href="tel:+966XXXXXXX"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-500 px-8 py-6 text-lg"><Phone className="w-5 h-5 mr-2" />Call for Booking</Button></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
