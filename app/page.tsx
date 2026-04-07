import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, Navigation, Building2, Crown, CheckCircle2, Shield, Settings, Clock, Star, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import { getPrayerTimes } from '@/lib/prayer-times';
import PrayerTimesWidget from '@/components/PrayerTimes';
import PricingPreview from '@/components/PricingPreview';
import HowItWorks from '@/components/HowItWorks';
import BlogTeaser from '@/components/BlogTeaser';
import DistanceTable from '@/components/DistanceTable';
import Testimonials from '@/components/Testimonials';
import FounderNote from '@/components/FounderNote';
import TrustMarkers from '@/components/TrustMarkers';
import BookingProcess from '@/components/BookingProcess';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://haramtaxiservice.com',
  },
  title: 'Haram Taxi | Complete Transportation & Travel Agency in Saudi Arabia',
  description: 'Book trusted transportation services across Saudi Arabia. Transfers from all major airports, intercity travel, and border crossing services.',
  keywords: ['Haram Taxi', 'transport saudi arabia', 'Saudi Arabia taxi', 'Jeddah airport transfer', 'saudi border crossing taxi', 'taxi saudi arabia'],
};

export default async function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Haram Taxi Service - Premium VIP Transportation",
    "url": "https://haramtaxiservice.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://haramtaxiservice.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const initialPrayerTimes = await getPrayerTimes('Makkah');

  // Redefined Services structure for the new layout
  const primaryServices = [
    {
      title: "All KSA Airport Transfers",
      description: "Transfers from Jeddah, Riyadh, Dammam, NEOM, Tabuk, and all domestic/international airports.",
      icon: Plane,
      link: "/locations/jeddah"
    },
    {
      title: "Intercity Travel & Highways",
      description: "Safe, fixed-rate travel between any major Saudi cities including Makkah, Madinah, Riyadh, and Dammam.",
      icon: Navigation,
      link: "/locations/riyadh"
    },
    {
      title: "Border Crossings",
      description: "Reliable cross-border transportation to Bahrain, Jordan, UAE, and other neighboring nations.",
      icon: Shield,
      link: "/locations/dammam"
    },
    {
      title: "Ziyarat & Sacred Sites",
      description: "Guided transport to historical sites in Makkah and Madinah with knowledgeable, respectful drivers.",
      icon: Crown,
      link: "/services/makkah-ziyarat"
    },
    {
      title: "Heritage & Tourism",
      description: "Explore AlUla, Diriyah, Taif Mountains, Abha, and the diverse landscapes of Saudi Arabia.",
      icon: MapPin,
      link: "/locations/al-ula"
    },
    {
      title: "Corporate Transport",
      description: "Professional hourly bookings, event transport, and business delegation services across KSA.",
      icon: Settings,
      link: "/about"
    }
  ];

  const faqs = [
    {
      question: "How do I book a VIP taxi from Jeddah Airport to Makkah?",
      answer: "Use our online form or WhatsApp to reserve instantly. The driver will meet you with a customized name board."
    },
    {
      question: "Are your Makkah to Madinah taxi rates fixed?",
      answer: "Yes, our intercity rates are 100% fixed with no hidden tolls or surge pricing."
    },
    {
      question: "Does Haram Taxi offer 24/7 airport pickups?",
      answer: "Absolutely. Our fleet operates round the clock for all inbound flights."
    },
    {
      question: "Can I request a GMC Yukon XL for my family?",
      answer: "Yes, our fleet exclusively features luxury 7-seaters like the GMC Yukon and Hyundai Staria for large groups."
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen"> {/* Changed global background */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />

      {/* NEW HERO COMPONENT */}
      <Hero />

      {/* NEW: Distinct "Why Us" Stats Section overlapping hero */}
      <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-brand-gold hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-display font-black text-brand-navy mb-2">15,000+</h3>
            <p className="font-bold text-gray-800">Clients Served</p>
            <p className="text-sm text-gray-500 mt-2">Trusted globally for reliable transport.</p>
          </div>
          <div className="bg-brand-navy rounded-2xl p-8 shadow-xl border-t-4 border-brand-gold text-white hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-display font-black text-brand-gold mb-2">0 delays</h3>
            <p className="font-bold text-white">Flight Tracking</p>
            <p className="text-sm text-gray-300 mt-2">We monitor your Jeddah arrival live.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-brand-gold hover:-translate-y-2 transition-transform">
            <h3 className="text-4xl font-display font-black text-brand-navy mb-2">100%</h3>
            <p className="font-bold text-gray-800">Cleanliness Rating</p>
            <p className="text-sm text-gray-500 mt-2">Sanitized professional fleet, every ride.</p>
          </div>
        </div>
      </div>

      {/* NEW: 2-Column SEO Introduction Block */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/gmc-yukon-xl-taxi.webp"
                  alt="Trusted Taxi Service Saudi Arabia"
                  width={600}
                  height={800}
                  className="w-full object-cover aspect-[4/5]"
                />
                {/* Floating element */}
                <div className="absolute top-10 -right-5 bg-white p-4 rounded-xl shadow-xl hidden md:block border-l-4 border-brand-gold">
                     <div className="flex items-center gap-3">
                       <Star className="text-brand-gold fill-brand-gold w-6 h-6" />
                       <p className="font-bold text-gray-800 text-lg">Top Rated Provider</p>
                     </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm border-b border-brand-gold pb-1">Unmatched Reliability</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 leading-tight">
                Haram Taxi: Your Complete <span className="text-brand-navy underline decoration-brand-gold decoration-4 underline-offset-8">Travel Agency</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Your journey should be completely free of stress. We bridge the gap between all major airports and cities across Saudi Arabia with safe, reliable transportation services, including complete border crossing capabilities. Avoid the uncertainty of local cabs and surge pricing.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "No hidden toll fees or waiting charges.",
                  "Licensed drivers well-versed with Haram boundaries.",
                  "Spacious luggage capacity for all premium vehicles.",
                  "Immediate dispatch upon landing in KSA."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-brand-navy shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy-dark text-white rounded-full px-8 py-6 shadow-xl">
                  <Link href="/about">Discover Our Story <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restructured Services Overview */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Core Transportation Services</h2>
            <p className="text-brand-navy-pale text-lg max-w-2xl mx-auto">Tailored transport solutions prioritizing comfort, reliability, and broad coverage.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {primaryServices.map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-6 overflow-hidden shadow-lg shadow-brand-gold/20">
                  <service.icon className="w-8 h-8 text-brand-navy" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed mb-6">{service.description}</p>
                <Link href={service.link} className="flex items-center text-brand-gold font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Fleet and Distance Overview */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <PricingPreview />
          <DistanceTable />
        </div>
      </section>

      {/* Visual Break / Location CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-navy mb-6">Serving All of Saudi Arabia & Borders</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {["Makkah", "Madinah", "Jeddah", "Taif", "Border Crossing"].map(city => (
               <Link href={`/locations/${city.toLowerCase().replace(' ', '-')}`} key={city} className="bg-white text-brand-navy px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl transition-shadow">
                 {city} Services →
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Specialized SEO text blocks, different layout to avoid duplication penalty */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-10 text-center border-b-2 border-gray-100 pb-6">Trusted Transportation Protocols For KSA</h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 font-light leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-brand-navy pl-4">Reliable Airport Routing</h3>
              <p className="mb-4">
                Landing at major airports like Jeddah (JED), Riyadh (RUH), or Dammam (DMM) can be overwhelming. Standard taxis might demand negotiation. With <strong>Haram Taxi Service</strong>, your transfer is pre-secured. We await your arrival across all terminals, holding a name placard for swift recognition.
              </p>
              <p>
                Our fixed <strong>Airport to City taxi fares</strong> are transparent. You receive a comfortable GMC Yukon or Sedan for a swift highway journey straight to the steps of your destination anywhere in KSA.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-brand-gold pl-4">Intercity & Border Crossings</h3>
              <p className="mb-4">
                Whether travelling the 450km transit path from Makkah to Madinah or requiring services for border crossing, our travel agency provides superior vehicles. We provide climate-controlled spacious vans (Hyundai Staria) or reliable SUVs to ensure families travel without fatigue. 
              </p>
              <p>
                As part of the leading <strong>Transportation service in Saudi Arabia</strong>, our drivers can accommodate various routes and requirements in complete privacy and comfort for all your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingProcess />
      
      {/* Testimonials */}
      <div className="py-10 bg-brand-navy-pale/30">
        <Testimonials />
      </div>

      <HowItWorks title="Our Booking Method" />

      {/* Prayer Times Section Integration */}
      <section className="py-16 bg-gray-900 text-white border-t-4 border-brand-gold">
         <div className="max-w-5xl mx-auto px-4 text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-4">Live Prayer Times</h2>
            <p className="text-gray-400">Our professional drivers respect the time of Salah and can adjust travel schedules accordingly.</p>
         </div>
         <div className="max-w-lg mx-auto bg-gray-800 rounded-2xl shadow-2xl p-4">
            <PrayerTimesWidget initialData={initialPrayerTimes} />
         </div>
      </section>

      <TrustMarkers />
      
      <div className="bg-white py-12">
        <FounderNote />
      </div>

      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <BlogTeaser />
      </div>
      
    </div>
  );
}
