import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Users, Clock, Star, Award, Target, Heart, TrendingUp, Car, MapPin, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/about',
    },
    title: 'About Us | Premier VIP Chauffeur Service Saudi Arabia - Haram Chauffeur',
    description: 'Learn about Haram Chauffeur - elite transportation in Makkah, Madinah, and Jeddah. Serving the Guests of Allah with reliable, safe, and comfortable executive rides since 2020.',
    keywords: ['about Haram Chauffeur', 'chauffeur agency Saudi Arabia', 'premium VIP transport', 'Makkah executive car', 'Madinah elite transportation', 'reliable chauffeur Saudi Arabia'],
    openGraph: {
        title: 'About Us | Elite Chauffeur Service in Saudi Arabia',
        description: 'Distinguished transportation in Makkah, Madinah, Jeddah. Serving the Guests of Allah across Saudi Arabia.',
        url: 'https://haramtaxiservice.com/about',
        type: 'website',
    },
};

export default function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: 'Uncompromised Safety',
            description: 'Your safety is our sacred duty. We strictly adhere to the highest safety checks and regulations.'
        },
        {
            icon: Clock,
            title: 'Prayer Punctuality',
            description: 'We understand the value of every Salah. Our schedules are optimized to ensure you never miss a prayer.'
        },
        {
            icon: Star,
            title: 'Royal Comfort',
            description: 'Travel in the dignity you deserve. Our fleet offers a peaceful sanctuary for your spiritual reflection.'
        },
        {
            icon: Users,
            title: 'Guest Hospitality',
            description: 'Serving the Guests of Allah with unmatched patience, respect, and traditional Arab hospitality.'
        }
    ];

    const achievements = [
        { number: '15k+', label: 'Pilgrims Served' },
        { number: '100+', label: 'Expert Chauffeurs' },
        { number: '50+', label: 'Luxury Fleet' },
        { number: '24/7', label: 'Support System' }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: 'Umrah Specialists',
            description: 'Deep knowledge of Makkah & Madinah routes, ensuring the smoothest access to hotels and Haram.'
        },
        {
            icon: Car,
            title: 'Premium Fleet',
            description: 'From GMC Yukons to spacious Coasters, all our vehicles are 2024 models maintained to showroom standards.'
        },
        {
            icon: MapPin,
            title: 'Wide Coverage',
            description: 'Seamless transfers between Jeddah, Makkah, Madinah, Taif, and all Historical Ziyarat sites.'
        },
        {
            icon: Headphones,
            title: 'Round-the-Clock',
            description: 'Our team monitors your journey 24/7, ready to assist with any changes or requests instantly.'
        }
    ];

    const faqs = [
        {
            question: "Is Umrah Taxi a licensed provider?",
            answer: "Yes, we are a fully licensed and insured transportation service, operating in strict compliance with the Saudi Public Transport Authority regulations for Hajj and Umrah pilgrims."
        },
        {
            question: "Do you offer group bookings?",
            answer: "Absolutely. We specialize in group logistics, offering luxury Toyota Hiace vans and Coaster buses for families and large delegations performing Umrah together."
        },
        {
            question: "How do you ensure pilgrim safety?",
            answer: "Safety is paramount. All our vehicles are GPS-tracked, and our chauffeurs undergo rigorous background checks and safe-driving training."
        },
        {
            question: "Can I book a customized Ziyarat tour?",
            answer: "Yes, our Ziyarat tours are not just rides but guided experiences. Our knowledgeable chauffeurs can take you to all significant historical Islamic sites."
        }
    ];

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Haram Taxi Service",
        "url": "https://haramtaxiservice.com",
        "logo": "https://haramtaxiservice.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+996575806733",
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["English", "Arabic", "Urdu"]
        },
        "sameAs": [
            "https://www.facebook.com/haramtaxiservice",
            "https://twitter.com/haramtaxi",
            "https://www.instagram.com/haramtaxi"
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 relative text-gray-900 overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-brand-navy/20 bg-brand-navy-pale/10 backdrop-blur-md rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-brand-navy rounded-full animate-pulse"></span>
                        <span className="text-brand-navy text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
                        Serving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">Guests of Allah</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                        Founded in 2020, we transcend traditional transportation. We are an elite chauffeur agency dedicated to providing a travel experience defined by absolute privacy, dignity, and unrivaled comfort for executive families and VIP pilgrims.
                    </p>
                </div>

                {/* Our Story / Why We Started Section - EEAT SIGNAL */}
                <div className="mb-24 bg-gradient-to-br from-teal-50 to-white rounded-3xl p-12 border border-slate-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Heart className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Redefining Religious Transport</h2>
                            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                        </div>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Our journey began in 2020 during a time when reliable, transparent transportation for pilgrims and travelers in Saudi Arabia was inconsistent. We witnessed firsthand the challenges faced by visitors to the Holy Citiesâ€”unpredictable pricing, language barriers, chauffeurs unfamiliar with prayer times, and the stress of navigating unfamiliar routes during what should be a spiritually peaceful journey.
                            </p>

                            <p>
                                The founder of Haram Taxi Service recognized a simple truth: <strong>travelers needed a transportation partner they could trust</strong>. Someone who understood that arriving at Fajr on time isn&apos;t just about punctualityâ€”it&apos;s about fulfilling an obligation. Someone who knew that the journey from Jeddah Airport to Makkah after a 12-hour flight should be comfortable, not stressful.
                            </p>

                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 my-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">The VIP Standard We Introduced</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Fixed Premium Rates:</strong> Eliminating the anxiety of surge pricing. Our distinguished clients secure guaranteed rates prior to arrival.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Executive Fleet Only:</strong> Refusing to compromise on comfort, we exclusively deploy late-model vehicles from executive sedans to spacious SUVs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Bespoke Assistance:</strong> Overcoming language and logistical barriers. Our bilingual chauffeurs serve as discrete concierges during your transits.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Unwavering Punctuality:</strong> Integrating real-time flight tracking with deep knowledge of Makkah traffic closures to ensure flawless connections.</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Today, we are proud to be the premier transport partner for thousands of VIP pilgrims, diplomats, and families. Our commitment stands firm: <strong>to deliver an impeccably smooth journey so you can focus entirely on your spiritual goals</strong>.
                            </p>

                            <p className="text-gray-600 italic border-l-4 border-brand-gold pl-6 py-2">
                                &quot;A truly premium service is invisible. You shouldn&apos;t have to think about your transfer—you simply arrive peacefully, exactly when and where you need to be. That is the Haram Taxi guarantee.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Mission */}
                    <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 relative overflow-hidden group hover:border-brand-navy/20 transition-colors shadow-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full -mr-8 -mt-8"></div>
                        <div className="flex items-center mb-6">
                            <div className="bg-slate-100 p-3 mr-4 rounded-xl">
                                <Target className="w-8 h-8 text-brand-navy" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            To serve every pilgrim with the highest standard of care, ensuring that transportation is the most seamless part of their ibadah.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We aim to remove all worldly travel hassles, allowing you to focus entirely on your connection with the Divine.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 relative overflow-hidden group hover:border-brand-navy/20 transition-colors shadow-sm">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-navy/5 rounded-tr-full -ml-8 -mb-8"></div>
                        <div className="flex items-center mb-6">
                            <div className="bg-slate-100 p-3 mr-4 rounded-xl">
                                <TrendingUp className="w-8 h-8 text-brand-navy" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            To set the global benchmark for religious tourism transport, merging modern luxury with traditional Islamic hospitality.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We envision a future where every pilgrim&apos;s journey is as beautiful and dignified as the destination itself.
                        </p>
                    </div>
                </div>

                {/* Team / Driver Spotlight */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-xl group">
                        <Image
                            src="/professional-saudi-taxi-chauffeur.webp"
                            alt="Professional Saudi taxi chauffeur in uniform providing VIP service"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                            <div className="bg-brand-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-2 rounded-sm">Our Pride</div>
                            <h3 className="text-3xl font-bold text-white font-serif">Expert Chauffeurs</h3>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            More Than Just <br /> <span className="text-brand-navy">Drivers</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            Our chauffeurs are the heart of Haram Taxi. Carefully selected for their experience, patience, and deep knowledge of the Holy Cities, they are not just driving you; they are guiding you.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-navy">
                                    <Shield className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-gray-900 font-bold">Vetted & Trained</h4>
                                    <p className="text-sm text-gray-500">Background checked and trained in pilgrim etiquette.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-navy">
                                    <MapPin className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-gray-900 font-bold">Route Masters</h4>
                                    <p className="text-sm text-gray-500">Experts in avoiding traffic during prayer times.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-navy">
                                    <Heart className="w-5 h-5" />
                                </span>
                                <div>
                                    <h4 className="text-gray-900 font-bold">Multilingual Support</h4>
                                    <p className="text-sm text-gray-500">English, Arabic, and Urdu speaking chauffeurs available.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Journey Through History - Gallery */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            A Journey Through History
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We don&apos;t just drive; we guide you through the landmarks that define our Islamic heritage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
                            <Image
                                src="/makkah-clock-tower-new.webp"
                                alt="Makkah Royal Clock Tower"
                                width={400}
                                height={320}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Makkah Al Mukarramah</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">The Holiest City</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all md:-mt-8">
                            <Image
                                src="/madinah-umbrellas.webp"
                                alt="Masjid Al Nabawi Umbrellas"
                                width={400}
                                height={320}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Madinah Al Munawwarah</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">City of Peace</p>
                            </div>
                        </div>

                        <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
                            <Image
                                src="/mount-uhud-historical-site.webp"
                                alt="Mount Uhud historical site in Madinah for Ziyarat tours"
                                width={400}
                                height={320}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white font-serif mb-1">Mount Uhud</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Historical Ziyarat</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            Our Core Values
                        </h2>
                        <div className="h-1 w-24 bg-brand-navy mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 duration-300 group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                                    <value.icon className="w-6 h-6 text-brand-navy group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                                    {value.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Stats */}
                <div className="relative bg-slate-600 rounded-3xl p-12 mb-24 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-10"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-serif">
                                    {achievement.number}
                                </div>
                                <div className="text-slate-100 text-sm uppercase tracking-widest font-bold">
                                    {achievement.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How Our Service Works - Process Transparency EEAT */}
                <div className="mb-24 bg-gray-50 rounded-3xl p-12 border border-gray-200">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <Clock className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">How Our Chauffeur Service Works</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Complete transparency from booking to drop-off. No hidden steps, no surprises.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 shadow-sm">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">1</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Booking Request</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Submit your ride details through our simple booking form: pickup location, destination, date, time, and number of passengers. You&apos;ll receive an instant quoteâ€”no hidden fees, no meter guesswork.
                                        </p>
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-800"><strong>What we need:</strong> Flight number (for airport pickups), hotel name, preferred pickup time, and any special requests (child seats, luggage assistance).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 shadow-sm">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">2</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Confirmation & Driver Assignment</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Within 24 hours (usually much faster), you receive a confirmation via WhatsApp or email with your chauffeur&apos;s name, vehicle details, and contact number. For airport pickups, we track your flight status in real-time.
                                        </p>
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-800"><strong>Peace of mind:</strong> If your flight is delayed, we adjust automaticallyâ€”no extra charges for waiting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 shadow-sm">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">3</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Pickup & Meet</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Your chauffeur arrives a reasonable time early at the agreed location. For airport pickups, they&apos;ll wait at arrivals holding a name board with your name. For hotel pickups, they wait in the lobby or designated pickup area.
                                        </p>
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-800"><strong>Communication:</strong> Driver will share live location via WhatsApp. You can call directly if needed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 shadow-sm">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">4</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Comfortable Journey</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Relax in a clean, air-conditioned vehicle. Our chauffeurs are trained to take the fastest route while avoiding traffic hotspots, especially during prayer times. Need a prayer break? Just let the chauffeur know.
                                        </p>
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-800"><strong>Your safety:</strong> All vehicles are GPS-tracked. We monitor every ride for quality assurance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white rounded-xl p-8 border-l-4 border-slate-500 shadow-sm">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">5</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Safe Drop-Off</h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Arrival at your destination. For hotels, we drop you at the main entrance. For Haram areas with restricted access, we&apos;ll take you to the nearest legal drop-off point and guide you from there.
                                        </p>
                                        <div className="bg-slate-50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-800"><strong>Payment:</strong> Pay the agreed Competitive Quote. We accept cash (SAR) or can arrange bank transfers for corporate clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-white rounded-xl p-8 border-2 border-slate-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Questions We Address</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-brand-navy" />
                                        What if my flight is delayed?
                                    </h4>
                                    <p className="text-gray-600 text-sm">We track your flight automatically. Driver adjusts pickup time with no extra charges.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-brand-navy" />
                                        How do I contact the chauffeur?
                                    </h4>
                                    <p className="text-gray-600 text-sm">You&apos;ll receive chauffeur&apos;s WhatsApp number and phone number 24 hours before pickup.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-brand-navy" />
                                        Can I change my booking?
                                    </h4>
                                    <p className="text-gray-600 text-sm">Yes, contact us at least 12 hours before pickup for free changes. Last-minute changes may incur fees.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-brand-navy" />
                                        Are your chauffeurs professional?
                                    </h4>
                                    <p className="text-gray-600 text-sm">All chauffeurs are background-checked, licensed, and trained in customer service and route optimization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            Why Choose Haram Taxi?
                        </h2>
                        <p className="text-gray-600">Distinguished service for a distinguished journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm flex items-start hover:shadow-md transition-all group"
                            >
                                <div className="bg-slate-50 p-3 mr-6 rounded-xl flex-shrink-0 group-hover:bg-brand-navy transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-navy group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Questions & Answers</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 border border-gray-100 px-6 rounded-xl">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-slate-500 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Service Network Silo Links */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Explore Our Network</h2>
                        <p className="text-gray-600">Connecting you to the holiest sites in Islam</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Prime Locations</h3>
                            <ul className="space-y-3">
                                <li><Link href="/locations/makkah" className="text-brand-navy hover:text-slate-800 hover:underline">Chauffeur in Makkah</Link></li>
                                <li><Link href="/locations/madinah" className="text-brand-navy hover:text-slate-800 hover:underline">Chauffeur in Madinah</Link></li>
                                <li><Link href="/locations/jeddah" className="text-brand-navy hover:text-slate-800 hover:underline">Chauffeur in Jeddah</Link></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Routes</h3>
                            <ul className="space-y-3">
                                <li><Link href="/routes/jeddah-airport-to-makkah" className="text-brand-navy hover:text-slate-800 hover:underline">Jeddah Airport to Makkah</Link></li>
                                <li><Link href="/routes/makkah-to-madinah" className="text-brand-navy hover:text-slate-800 hover:underline">Makkah to Madinah</Link></li>
                                <li><Link href="/routes/madinah-ziyarat-tour" className="text-brand-navy hover:text-slate-800 hover:underline">Madinah Ziyarat</Link></li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                            <ul className="space-y-3">
                                <li><Link href="/services" className="text-brand-navy hover:text-slate-800 hover:underline">All Services</Link></li>
                                <li><Link href="/fleet" className="text-brand-navy hover:text-slate-800 hover:underline">Our Fleet</Link></li>
                                <li><Link href="/blog" className="text-brand-navy hover:text-slate-800 hover:underline">Travel Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative rounded-3xl overflow-hidden p-12 text-center shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                            Ready for your <span className="text-slate-400">Sacred Journey?</span>
                        </h2>
                        <p className="text-lg text-slate-100 mb-8 max-w-2xl mx-auto">
                            Book your premium transport today and experience the peace of mind you deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/booking">
                                <Button size="lg" className="bg-white hover:bg-gray-100 text-slate-900 font-bold text-lg px-12 py-8 shadow-lg transition-transform hover:scale-105">
                                    Book Now
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white hover:text-slate-900 font-bold text-lg px-12 py-8 backdrop-blur-sm">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

