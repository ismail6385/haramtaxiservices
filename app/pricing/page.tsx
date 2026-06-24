import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Car, 
  ArrowRight,
  Award,
  Globe,
  Clock
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://haramtaxiservice.com/pricing',
    },
    title: 'Our Executive Fleet & Service Areas | Haram Taxi Service',
    description: 'Explore our premium fleet for Umrah & Hajj transfers. competitive quotes for Camry, GMC Yukon, Staria, and Hiace. WhatsApp for an instant quote.',
};

const fleet = [
    {
        name: 'Toyota Camry',
        category: 'Standard Sedan',
        description: 'Ideal for couples or small families seeking a comfortable and cost-effective transfer in Makkah, Madinah, and Jeddah.',
        capacity: '4 Passengers',
        luggage: '2 Large Bags',
        image: '/toyota-camry-context.webp',
        features: ['Dual AC', 'Clean Interior', 'Professional Driver', 'Economic Rates'],
        bestFor: 'Individual Travelers'
    },
    {
        name: 'GMC Yukon XL / Suburban',
        category: 'VIP Luxury SUV',
        description: 'The preferred choice for VIP guests and families who prioritize maximum comfort, space, and a premium travel experience.',
        capacity: '7 Passengers',
        luggage: '6 Large Bags',
        image: '/gmc-yukon-xl-taxi.webp',
        features: ['Premium Leather Seats', 'Extra Legroom', 'Privacy Glass', 'Smooth Highway Ride'],
        bestFor: 'VIPs & Large Families'
    },
    {
        name: 'Hyundai Staria',
        category: 'Executive Family Van',
        description: 'The latest in modern family transport. Features a futuristic design with ample headroom and flexible seating arrangements.',
        capacity: '7-9 Passengers',
        luggage: '5 Large Bags',
        image: '/hyundai-staria-family-taxi.webp',
        features: ['Futuristic Design', 'Panoramic View', 'Sliding Doors', 'Modern Safety Tech'],
        bestFor: 'Modern Family Groups'
    },
    {
        name: 'Toyota Hiace',
        category: 'Group Commuter',
        description: 'Our most reliable vehicle for larger groups. Perfect for Ziyarat tours and airport transfers for extended families.',
        capacity: '11-14 Passengers',
        luggage: '10 Large Bags',
        image: '/toyota-hiace-group-transport-saudi.webp',
        features: ['High Roof', 'Dedicated AC Vents', 'Safe Group Travel', 'Bulk Luggage Space'],
        bestFor: 'Small Pilgrim Groups'
    },
    {
        name: 'Toyota Coaster',
        category: 'Mini Bus',
        description: 'Spacious and reliable for large pilgrim groups and corporate tours across the Kingdom.',
        capacity: '17-22 Passengers',
        luggage: '18 Large Bags',
        image: '/toyota-coaster-minibus.webp',
        features: ['PA System', 'Comfortable Seating', 'Professional Bus Captain', 'Ideal for Ziyarat'],
        bestFor: 'Large Groups & Tours'
    }
];

export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "Toyota Camry Private Taxi Service",
                "description": "Comfortable 4-passenger sedan for airport transfers and intercity travel.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "SAR",
                    "price": "150",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "150",
                        "priceCurrency": "SAR",
                        "priceType": "https://schema.org/MinimumPrice"
                    }
                }
            },
            {
                "@type": "Product",
                "name": "GMC Yukon XL Private Taxi Service",
                "description": "Spacious 7-passenger VIP SUV for families with luggage.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "SAR",
                    "price": "350",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "350",
                        "priceCurrency": "SAR",
                        "priceType": "https://schema.org/MinimumPrice"
                    }
                }
            },
            {
                "@type": "Product",
                "name": "Hyundai Staria Private Taxi Service",
                "description": "Modern 7-9 passenger family minivan.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "SAR",
                    "price": "300",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "300",
                        "priceCurrency": "SAR",
                        "priceType": "https://schema.org/MinimumPrice"
                    }
                }
            },
            {
                "@type": "Product",
                "name": "Toyota Hiace Minibus Service",
                "description": "11-14 passenger minibus for group transfers and Ziyarats.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "SAR",
                    "price": "450",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "450",
                        "priceCurrency": "SAR",
                        "priceType": "https://schema.org/MinimumPrice"
                    }
                }
            },
            {
                "@type": "Product",
                "name": "Toyota Coaster Bus Service",
                "description": "17-22 passenger minibus for large pilgrim groups.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "SAR",
                    "price": "800",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "800",
                        "priceCurrency": "SAR",
                        "priceType": "https://schema.org/MinimumPrice"
                    }
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            {/* Executive Hero */}
            <section className="relative py-24 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20 text-white/90">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Premium Transportation Network</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Our Executive Fleet & <span className="text-brand-gold">Service Areas</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
                        Moving away from fixed lists to personalized value. WhatsApp us your requirements for a customized, competitive quote tailored to your exact journey.
                    </p>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-12 border-b border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <h2 className="sr-only">Our Core Service Values</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, label: '24/7 Availability', sub: 'Across KSA Airports', isWA: false },
                            { icon: ShieldCheck, label: 'Verified Drivers', sub: 'Safety & Reliability', isWA: false },
                            { icon: Globe, label: 'All City Routes', sub: 'Kingdom Wide Service', isWA: false },
                            { icon: null, label: 'Instant Quotes', sub: 'Via WhatsApp Chat', isWA: true },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                {item.isWA 
                                    ? <WhatsAppIcon className="w-8 h-8 text-[#25D366] mb-3" />
                                    : item.icon && <item.icon className="w-8 h-8 text-brand-navy mb-3" />
                                }
                                <h3 className="font-bold text-gray-900">{item.label}</h3>
                                <p className="text-xs text-gray-500">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Choose Your Preferred Ride</h2>
                        <p className="text-gray-600">A vehicle for every group size and budget requirement.</p>
                    </div>

                    <div className="space-y-12">
                        {fleet.map((vehicle, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image Container */}
                                <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                                    <Image 
                                        src={vehicle.image} 
                                        alt={vehicle.name} 
                                        fill 
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 bg-brand-navy text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {vehicle.category}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-2 text-brand-navy-light font-bold text-sm tracking-wide uppercase italic">
                                        Best for: {vehicle.bestFor}
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">{vehicle.name}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {vehicle.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-navy-pale rounded-xl flex items-center justify-center">
                                                <Users className="w-5 h-5 text-brand-navy" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-400 uppercase">Seating</div>
                                                <div className="font-bold text-gray-900">{vehicle.capacity}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-brand-navy-pale rounded-xl flex items-center justify-center">
                                                <Briefcase className="w-5 h-5 text-brand-navy" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-400 uppercase">Luggage</div>
                                                <div className="font-bold text-gray-900">{vehicle.luggage}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                                        {vehicle.features.map((feature, fidx) => (
                                            <div key={fidx} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a 
                                            href={`https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20want%20to%20get%20a%20quote%20for%20a%20${encodeURIComponent(vehicle.name)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 rounded-2xl font-bold shadow-lg shadow-green-200">
                                                <WhatsAppIcon className="w-5 h-5 mr-2" /> WhatsApp for Quote
                                            </Button>
                                        </a>
                                        <Link href="/booking" className="flex-1">
                                            <Button variant="outline" className="w-full border-gray-200 h-14 rounded-2xl font-bold hover:bg-gray-50">
                                                Book via Form
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Grid Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Frequently Requested Routes</h2>
                            <p className="text-gray-600 mb-8">While we cover entire KSA, these are our most popular transfers for pilgrims and travelers.</p>
                            
                            <div className="space-y-4">
                                {[
                                    'Jeddah Airport to Makkah Hotels',
                                    'Makkah to Madinah (Hijrah Highway)',
                                    'Madinah to Jeddah Airport (KAIA)',
                                    'Makkah & Madinah Ziyarat Tours',
                                    'Riyadh to Makkah Intercity',
                                    'Dammam to Bahrain Causeway'
                                ].map((route, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-brand-navy-pale transition-colors group">
                                        <span className="font-semibold text-gray-700">{route}</span>
                                        <ArrowRight className="w-4 h-4 text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-brand-gold/5 rounded-2xl border border-brand-gold/10">
                                <h4 className="font-bold text-brand-gold-dark mb-2">Note on Peak Seasons</h4>
                                <p className="text-sm text-brand-gold-dark/70 leading-relaxed">
                                    During Ramadan and Hajj seasons, availability is limited. We recommend booking at least 1 week in advance for peak travel periods.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                             <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full"></div>
                                <h3 className="text-3xl font-display font-bold mb-2">Quick Quote Request</h3>
                                <p className="text-gray-500 mb-8">Fill the form below or message us directly on WhatsApp for an immediate response.</p>
                                <BookingForm />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-brand-navy text-white text-center relative">
                 <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Experience <span className="text-brand-gold italic">Premium Travel?</span></h2>
                    <p className="text-lg text-white/70 mb-10 leading-relaxed">
                        Whether you are an individual pilgrim or a large group, we have the fleet and expertise to make your journey through the Kingdom seamless.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/966575806733"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-white text-brand-navy hover:bg-gray-100 px-12 py-7 text-xl font-bold rounded-2xl shadow-xl shadow-brand-navy-dark/20">
                                <WhatsAppIcon className="w-6 h-6 mr-2 text-[#25D366]" /> Message on WhatsApp
                            </Button>
                        </a>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-7 text-xl font-bold rounded-2xl">
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                 </div>
            </section>
        </div>
    );
}
