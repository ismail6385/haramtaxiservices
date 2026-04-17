import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, Navigation, Building2, Crown, CheckCircle2, Shield, Settings, Clock, Star, MapPin, ArrowRight, Wallet, BadgeCheck, Car, MessageSquare, Users, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import JsonLdService from '@/components/JsonLdService';
import PricingPreview from '@/components/PricingPreview';
import HowItWorks from '@/components/HowItWorks';
import BlogTeaser from '@/components/BlogTeaser';
import DistanceTable from '@/components/DistanceTable';
import Testimonials from '@/components/Testimonials';
import FounderNote from '@/components/FounderNote';
import TrustMarkers from '@/components/TrustMarkers';
import BookingProcess from '@/components/BookingProcess';
import PilgrimTips from '@/components/PilgrimTips';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import StickyCallButton from '@/components/StickyCallButton';
import AFairaButton from '@/components/AFairaButton';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://haramtaxiservice.com',
  },
  title: 'Makkah to Madinah Taxi | Rent a Car With Driver | Haram Taxi',
  description: 'Premium Rent a car with driver and Airport Transfer services in Saudi Arabia. Fixed rates for Makkah to Madinah, Jeddah Airport, and all intercity travels.',
  keywords: ['rent a car with driver saudi arabia', 'chauffeur driven car', 'Makkah to Madinah taxi', 'Jeddah airport transfer', 'Umrah taxi service', 'VIP taxi Jeddah', 'Makkah taxi booking'],
};

export default async function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Haram Taxi Service",
    "url": "https://haramtaxiservice.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://haramtaxiservice.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Haram Taxi Service",
    "image": "https://haramtaxiservice.com/gmc-yukon-xl-taxi.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Makkah",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4225,
      "longitude": 39.8262
    },
    "url": "https://haramtaxiservice.com",
    "telephone": "+996575806733",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const faqs = [
    {
      question: "How do I book a taxi from Makkah to Madinah?",
      answer: "You can book instantly using our online booking form or via WhatsApp at +996 57 580 6733. We offer fixed rates starting from 400 SAR for Makkah to Madinah transfers."
    },
    {
      question: "Are your Jeddah Airport transfer rates fixed?",
      answer: "Yes, all our airport transfer rates are 100% fixed. This includes meet and greet service, tolls, and parking fees. No hidden costs guaranteed."
    },
    {
      question: "What vehicles are available in your fleet?",
      answer: "Our premium fleet includes Toyota Camry (Sedan), Hyundai Staria (Family Van), GMC Yukon XL (VIP SUV), and Toyota Hiace (Group Minibus)."
    },
    {
      question: "Do you provide Umrah Ziyarat tours?",
      answer: "Yes, we provide specialized Ziyarat tours in both Makkah and Madinah with knowledgeable drivers who can guide you through all historical and sacred sites."
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-brand-gold selection:text-brand-navy">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />
      <JsonLdService />
      
      {/* Sticky Components */}
      <WhatsAppFloating />
      <StickyCallButton />

      {/* NEW HERO COMPONENT */}
      <Hero />

      {/* TRUST STRIP - Improved */}
      <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Bookings", val: "5,000+", sub: "Trips Completed", icon: BadgeCheck },
            { label: "Google Rating", val: "⭐ 4.9", sub: "Google Verified", icon: Star },
            { label: "Drivers", val: "85+", sub: "Licensed by Transport Ministry", icon: Shield },
            { label: "Support", val: "24/7", sub: "Instant Response", icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all">
              <stat.icon className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-navy leading-none">{stat.val}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
              <p className="text-[9px] font-bold text-brand-gold/80">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO SECTION - Max Authority & EEAT */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-brand-gold/20 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/gmc-yukon-xl-taxi.webp"
                  alt="Premium GMC Yukon Taxi Service Saudi Arabia"
                  width={800}
                  height={1000}
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] z-20 border border-gray-50">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center">
                          <Shield className="text-brand-gold w-8 h-8" />
                      </div>
                      <div>
                          <p className="text-3xl font-black text-brand-navy">Licensed</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By Ministry of Transport</p>
                      </div>
                  </div>
                  <p className="text-xs font-bold text-gray-500 max-w-[200px] leading-relaxed">
                      Official transport provider for pilgrims and corporate clients across the Kingdom.
                  </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl">
                <Crown className="w-4 h-4 text-brand-gold animate-pulse" /> THE KSA ROYAL STANDARD
              </div>
              
              <h2 className="text-5xl md:text-8xl font-display font-black text-brand-navy leading-[0.9] tracking-tighter">
                Haram Taxi: <br />
                <span className="text-brand-gold">10 Years</span> of <br />
                Trust & Safety
              </h2>

              <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
                <p>
                    Haram Taxi Service is not just a <Link href="/services" className="text-brand-gold underline font-black">transportation service</Link>; we are your dedicated travel partners in Saudi Arabia. With a massive fleet of <strong>85+ Luxury Vehicles</strong> including GMC Yukon XLs and Hyundai Starias, we dominate the <Link href="/routes/makkah-to-madinah-taxi" className="text-brand-navy font-black hover:text-brand-gold">Makkah to Madinah Taxi</Link> corridor. Our comprehensive <Link href="/routes/jeddah-airport-to-makkah-taxi" className="text-brand-navy font-black hover:text-brand-gold">Jeddah Airport Transfers</Link> are fully insured and driven by locally licensed experts to meet your every need.
                </p>
                <p className="text-sm border-l-4 border-brand-gold pl-6 italic">
                    &ldquo;From the moment you touch down at Jeddah Airport (JED) to your final Ziyarat tour, our licensed professional drivers ensure every kilometer is traveled in pure serenity.&rdquo;
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   { t: "85+ Premium Fleet", d: "GMC, Staria, Camry, Hiace", icon: Car },
                   { t: "24/7 Live Support", d: "WhatsApp Response in <2 mins", icon: MessageSquare },
                   { t: "Fixed Price Policy", d: "No bargaining, No hidden tolls", icon: Wallet },
                   { t: "Meet & Greet", d: "Driver waits with Name Board", icon: Users }
                 ].map((feat, i) => (
                   <div key={i} className="flex flex-col p-6 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-brand-gold transition-colors">
                      <feat.icon className="w-8 h-8 text-brand-navy mb-4" />
                      <h4 className="font-black text-brand-navy text-lg leading-tight">{feat.t}</h4>
                      <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">{feat.d}</p>
                   </div>
                 ))}
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" className="h-24 px-12 bg-brand-navy hover:bg-brand-navy-light text-white font-black text-xl rounded-3xl shadow-2xl group">
                  <Link href="/pricing">EXPLORE FLEET RATES <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform h-8 w-8 text-brand-gold" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ROUTES & SEO LANDING CLUSTERS */}
      <section className="py-32 bg-brand-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-lg opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 leading-none">Global Routes, <br/><span className="text-brand-gold">Local Excellence.</span></h2>
              <p className="text-gray-400 text-xl font-bold uppercase tracking-widest italic leading-relaxed">Exclusive Makkah to Madinah Transit • Riyadh Corporate • Jeddah Airport Specialists</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-center flex flex-col items-center">
                 <div className="flex -space-x-4 mb-4">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-navy-dark bg-gray-600 shadow-xl" />)}
                 </div>
                 <p className="text-white text-xs font-black uppercase tracking-widest leading-none">Trust by 50,000+ Pilgrims Worldwide</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Taxi from Makkah to Madinah", p: "Starts 400 SAR", d: "Standard 450km transit via Haramain Highway in premium SUV or Van.", tags: ["4.5 Hours", "Door-to-door", "Meet & Greet"], link: "/routes/makkah-to-madinah-taxi" },
              { title: "Jeddah Airport to Makkah Taxi", p: "Starts 150 SAR", d: "Direct KAIA Terminal transfer with flight tracking and 60min free waiting.", tags: ["VIP Pickup", "Fixed Tolls", "Luggage Help"], link: "/routes/jeddah-airport-to-makkah-taxi" },
              { title: "VIP Madinah City Ziyarat", p: "Starts 200 SAR", d: "Visit Uhud, Quba, and 7 Mosques with our expert bilingual guides.", tags: ["Knowledgeable", "Hydration Incl.", "Flexible Time"], link: "/services/ziyarat" }
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] hover:bg-brand-gold group transition-all duration-500 cursor-pointer">
                <h3 className="text-3xl font-black text-white group-hover:text-brand-navy mb-4 leading-tight">{service.title}</h3>
                <div className="text-brand-gold group-hover:text-brand-navy font-black text-2xl mb-8 italic">{service.p}</div>
                <p className="text-gray-300 group-hover:text-brand-navy/70 font-bold text-sm leading-relaxed mb-8">{service.d}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    {service.tags.map((t, j) => (
                        <span key={j} className="text-[9px] font-black uppercase bg-white/10 group-hover:bg-brand-navy group-hover:text-white px-3 py-1.5 rounded-full tracking-tighter">
                            {t}
                        </span>
                    ))}
                </div>
                <Link href={service.link} className="inline-flex items-center text-white group-hover:text-brand-navy font-black text-xs uppercase tracking-[0.3em]">
                  SECURE RIDE NOW <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPreview />

      {/* MASSIVE LOCATION GRID - Final SEO Victory */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-8">
                <h2 className="text-5xl md:text-6xl font-display font-black text-brand-navy leading-none tracking-tighter">
                    We Cover <br />
                    <span className="text-brand-gold font-outline">Every District</span> <br />
                    In Saudi Arabia.
                </h2>
                <p className="text-xl text-gray-500 font-bold leading-relaxed uppercase tracking-widest">From Tabuk to Abha, and every holy site in between.</p>
                <div className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center">
                    <p className="text-4xl font-black text-brand-navy mb-2">55+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Cities Serviced 24/7</p>
                </div>
                <Button asChild className="w-full h-20 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-black text-sm rounded-2xl">
                    <Link href="/locations">VIEW INTERACTIVE MAP <MapPin className="ml-3" /></Link>
                </Button>
            </div>
            
            <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-12">
                   {[
                     { title: "Holy City Hubs", areas: ["Makkah Taxi City Center", "Madinah Taxi Haram Area", "Aziziyah & Misfalah", "Quba & Uhud Districts", "Mina & Arafat Transfers"] },
                     { title: "Airport Terminals", areas: ["Jeddah Taxi to Airport (JED)", "Riyadh (RUH) King Khalid", "Madinah (MED) Prince Mohammad", "DMM King Fahd International", "Neom Bay Airport VIP"] },
                     { title: "Regional & Borders", areas: ["Taif Mountain Resorts", "Yanbu Industrial Gateway", "Tabuk & Jordan Border", "Riyadh Business District", "Dammam & Khobar Coast"] },
                     { title: "Intercity Corridors", areas: ["Makkah to Madinah (Haramain)", "Jeddah to Makkah Highway", "Riyadh to Makkah Long-Haul", "Hofuf & Al Ahsa Region", "Abha & Southern Highlands"] }
                   ].map((cat, i) => (
                       <div key={i} className="space-y-6">
                           <h4 className="text-xl font-black text-brand-navy flex items-center gap-3">
                               <span className="w-8 h-px bg-brand-gold" /> {cat.title}
                           </h4>
                           <div className="flex flex-col gap-3">
                               {cat.areas.map((area, j) => (
                                   <Link key={j} href="/locations" className="text-sm font-bold text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gray-200" /> {area}
                                   </Link>
                               ))}
                           </div>
                       </div>
                   ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE / HOW IT WORKS */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
             <div className="text-center mb-20 space-y-4">
                 <h2 className="text-4xl md:text-6xl font-display font-black text-brand-navy">What Happens Next?</h2>
                 <p className="text-gray-500 font-bold uppercase tracking-widest">Total Transparency from Booking to Destination.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-12 relative">
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-gold/20 -translate-y-1/2 hidden md:block" />
                 {[
                   { t: "Instant Booking", d: "Confirm via WhatsApp. We track your flight live. Multiple payment options available.", icon: MessageSquare },
                   { t: "Driver Dispatch", d: "Driver contacts you 30 mins before pickup. Meeting point and exact timing shared immediately.", icon: Phone },
                   { t: "Safe Journey", d: "Pay CASH or CARD AFTER reaching safely. Free and transparent cancellation policy.", icon: BadgeCheck }
                 ].map((step, i) => (
                     <div key={i} className="relative z-10 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl text-center group">
                         <div className="w-20 h-20 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform">
                             <step.icon className="w-10 h-10" />
                         </div>
                         <h4 className="text-xl font-black text-brand-navy mb-4">{step.t}</h4>
                         <p className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-widest">{step.d}</p>
                     </div>
                 ))}
             </div>
             
             <div className="mt-20 p-8 bg-green-50 rounded-[3rem] border-2 border-green-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-green-100">
                         <ShieldCheck className="w-8 h-8" />
                     </div>
                     <div>
                         <p className="text-xl font-black text-green-900 leading-tight">Zero-Risk Booking Policy</p>
                         <p className="text-xs font-bold text-green-700/60 uppercase tracking-widest mt-1">Free Cancellation • No Pre-payment required • 100% Fixed Rates</p>
                     </div>
                 </div>
                 <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-black px-10 h-16 rounded-2xl shadow-xl shadow-green-200">
                     <Link href="/booking">BOOK RISK-FREE</Link>
                 </Button>
             </div>
        </div>
      </section>

      {/* TESTIMONIALS & GOOGLE RATINGS */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-brand-gold" />
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
             <div className="inline-flex items-center gap-2 mb-6">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-brand-gold fill-brand-gold" />)}
             </div>
             <h2 className="text-5xl md:text-8xl font-display font-black text-brand-navy mb-6 tracking-tighter italic">Verified Pilgrims Love Us</h2>
             <div className="flex justify-center items-center gap-4">
                 <div className="bg-gray-100 px-6 py-2 rounded-xl flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest border border-gray-200">
                    <Star className="w-4 h-4 fill-brand-gold text-brand-gold" /> GOOGLE REVIEWS
                 </div>
                 <div className="bg-gray-100 px-6 py-2 rounded-xl flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-widest border border-gray-200">
                    <Crown className="w-4 h-4 text-brand-navy" /> TRIPADVISOR
                 </div>
             </div>
        </div>
        <Testimonials />
      </section>

      <BookingProcess />

      <TrustMarkers />
      
      <div className="bg-white py-32 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4">
             <PilgrimTips />
         </div>
      </div>

      <div className="bg-white py-16">
        <FounderNote />
      </div>

      <div className="bg-gray-50 py-32 border-t border-gray-200">
        <BlogTeaser />
      </div>

      {/* FOOTER NAP (FOR LOCAL SEO) */}
      <footer className="bg-brand-navy py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
              <div className="vcard flex flex-col items-center text-white/40 font-bold text-[10px] uppercase tracking-widest gap-2">
                  <div className="fn text-brand-gold text-lg font-black mb-2">HARAM TAXI SERVICE HQ</div>
                  <div className="adr text-center">
                      <div className="street-address">Al Aziziyah, Misfalah District</div>
                      <span className="locality">Makkah Al Mukarramah</span>, <span className="country-name">Kingdom of Saudi Arabia</span>
                  </div>
                  <div className="tel flex items-center gap-2">
                      <Phone className="w-3 h-3" /> +996 57 580 6733
                  </div>
                  <div className="email">booking@haramtaxiservice.com</div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] border-t border-white/5 pt-8 w-full">
                  <Link href="/locations/makkah">Makkah Taxi</Link>
                  <Link href="/locations/madinah">Madinah Taxi</Link>
                  <Link href="/locations/jeddah">Jeddah Taxi</Link>
                  <Link href="/services/airport-transfer">Airport Pickup</Link>
                  <Link href="/services/umrah-taxi">Umrah Packages</Link>
              </div>
          </div>
      </footer>
    </div>
  );
}
