import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Haram Taxi Service | No.1 Private Taxi in Saudi Arabia [2026]',
  },
  description: 'Saudi Arabia\'s most trusted private taxi service. Specialising in Umrah transfers, Makkah to Madinah routes, and Jeddah Airport pickups. Fixed rates, no pre-payment, 24/7 availability.',
  keywords: [
    'taxi service saudi arabia', 'umrah taxi', 'makkah to madinah taxi', 'jeddah airport taxi',
    'private driver saudi', 'haram taxi', 'rent a car with driver saudi arabia',
    'chauffeur driven car', 'Makkah to Madinah taxi', 'Jeddah airport transfer',
    'Umrah taxi service', 'VIP taxi Jeddah', 'Makkah taxi booking'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Haram Taxi Service | Trusted Saudi Arabia Transportation',
    description: 'Book your private taxi for Umrah or intercity travel. Professional, reliable, and luxury transport.',
    url: 'https://haramtaxiservice.com',
    siteName: 'Haram Taxi Service',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haram Taxi Service | Private Taxi Saudi Arabia',
    description: 'Professional taxi service in Makkah, Madinah, and Jeddah. Available 24/7.',
  },
};
import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, Navigation, Building2, Crown, CheckCircle2, Shield, Settings, Clock, Star, MapPin, ArrowRight, Wallet, BadgeCheck, Car, MessageSquare, Users, Phone, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import JsonLdService from '@/components/JsonLdService';
import PricingPreview from '@/components/PricingPreview';
import BlogTeaser from '@/components/BlogTeaser';
import Testimonials from '@/components/Testimonials';
import FounderNote from '@/components/FounderNote';
import TrustMarkers from '@/components/TrustMarkers';
import BookingProcess from '@/components/BookingProcess';
import PilgrimTips from '@/components/PilgrimTips';
import HomeFAQ from '@/components/HomeFAQ';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import StickyCallButton from '@/components/StickyCallButton';



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

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Haram Taxi Service — No.1 Private Taxi in Saudi Arabia",
    "url": "https://haramtaxiservice.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable"]
    },
    "description": "Haram Taxi Service is Saudi Arabia's most trusted private taxi. We specialise in Umrah and Hajj transfers between Makkah, Madinah and Jeddah Airport. Fixed rates, 24/7 service, no pre-payment required."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Haram Taxi Service",
    "image": [
      "https://haramtaxiservice.com/gmc-yukon-xl-taxi.webp",
      "https://haramtaxiservice.com/makkah-clock-tower-new.webp"
    ],
    "logo": "https://haramtaxiservice.com/logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Aziziyah, Misfalah District",
      "addressLocality": "Makkah Al Mukarramah",
      "addressRegion": "Makkah Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4225,
      "longitude": 39.8262
    },
    "hasMap": "https://maps.google.com/?q=Haram+Taxi+Service+Makkah",
    "url": "https://haramtaxiservice.com",
    "telephone": "+966575806733",
    "email": "booking@haramtaxiservice.com",
    "sameAs": [
      "https://www.facebook.com/haramtaxiservice",
      "https://www.instagram.com/haramtaxiservice",
      "https://wa.me/966575806733"
    ],
    "areaServed": [
      { "@type": "City", "name": "Makkah" },
      { "@type": "City", "name": "Madinah" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "Country", "name": "Saudi Arabia" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://haramtaxiservice.com/booking",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Taxi Booking"
      }
    }
  };

  const faqs = [
    {
      question: "Where exactly will I meet my driver at the airport?",
      answer: "We offer a 'No-Stress Meet & Greet' service. Your driver will be waiting at the arrivals terminal exit (International or Domestic) holding a clear name-board with your name and the Haram Taxi logo. We track your flight status live, so even if you land early or late, we are there."
    },
    {
      question: "Do I need to pay in advance for my Makkah to Madinah taxi?",
      answer: "No pre-payment is required. We believe in trust-based service. You can book your ride today and pay the driver in cash or via local transfer after you safely reach your destination. This gives you total peace of mind and flexibility."
    },
    {
      question: "Can we stop for food or prayer during the long Makkah-Madinah journey?",
      answer: "Absolutely. Our drivers understand the needs of pilgrims and families. The 450km journey includes stops at high-quality rest areas (like Sasco) for prayer, washrooms, or a meal. Just let your driver know—your comfort is our priority."
    },
    {
      question: "Are child seats available for family transfers?",
      answer: "Yes, we prioritize the safety of your little ones. Please mention the requirement for a child seat when booking via WhatsApp, and we will ensure your vehicle (SUV or Van) is equipped with one before arrival."
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
      <Script
        id="speakable-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
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
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">{stat.label}</p>
              <p className="text-xs font-bold text-brand-gold/80">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INTRO SECTION - Max Authority & EEAT */}
      <section className="py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">By Ministry of Transport</p>
                      </div>
                  </div>
                  <p className="text-xs font-bold text-gray-500 max-w-[200px] leading-relaxed">
                      Official transport provider for pilgrims and corporate clients across the Kingdom.
                  </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-navy text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl">
                <Crown className="w-4 h-4 text-brand-gold animate-pulse" /> THE KSA ROYAL STANDARD
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-navy leading-[1] tracking-tighter">
                Haram Taxi: <br />
                <span className="text-brand-gold">10 Years</span> of <br />
                Trust & Safety
              </h2>

              <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed">
                <p>
                    Haram Taxi Service is more than just a ride; we are your dedicated travel partners in <Link href="/locations" className="text-brand-navy hover:text-brand-gold underline decoration-brand-gold/30">Saudi Arabia</Link>. With a fleet of <strong>85+ Luxury Vehicles</strong> including GMC Yukon XLs and Hyundai Starias, we specialize in the route between the two Holy Cities of <Link href="/locations/makkah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-gold/30">Makkah</Link> and <Link href="/locations/madinah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-gold/30">Madinah</Link>. Our professionally managed pickups at <Link href="/locations/jeddah" className="text-brand-navy hover:text-brand-gold underline decoration-brand-gold/30">Jeddah Airport</Link> are fully insured and driven by local experts who prioritize your peace of mind.
                </p>
                <p className="text-sm border-l-4 border-brand-gold pl-6 italic">
                    &ldquo;From the moment you touch down in Jeddah to your final Ziyarat tour, our licensed professional drivers ensure every kilometer is traveled in pure serenity.&rdquo;
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
                <Button asChild size="lg" className="h-12 px-8 bg-brand-navy hover:bg-brand-navy-light text-white font-black text-sm rounded-xl shadow-xl group">
                  <Link href="/pricing">EXPLORE FLEET RATES <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform h-4 w-4 text-brand-gold" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: THE HUMAN CONCIERGE SECTION (AEO/GEO Optimization) */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 text-brand-gold rounded-full text-xs font-black uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" /> Beyond The Algorithm
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-none mb-8">
                  The <span className="text-brand-gold">Human Standard</span> <br /> 
                  of Saudi Travel.
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium mb-10">
                  In a world of automated apps and random drivers, we believe your sacred journey deserves a <Link href="/about" className="text-white underline decoration-brand-gold decoration-4 underline-offset-8 hover:text-brand-gold transition-colors">Human Touch</Link>. 
                  We don&apos;t just send a car; we dispatch a <Link href="/services" className="text-white hover:text-brand-gold underline decoration-white/20">managed experience</Link>.
                </p>
                
                <div className="space-y-6">
                  {[
                    { t: "Managed Fleet, Not Marketplace", d: "Unlike apps that &apos;hope&apos; a driver shows up, we own our schedule. Your booking is a guarantee, not a request.", icon: BadgeCheck },
                    { t: "Pilgrim-Specific Knowledge", d: "Our drivers know exactly where the best prayer spots, hydration stations, and logistics shortcuts are located.", icon: MapPin },
                    { t: "Fixed Peace of Mind", d: "No surge pricing. No hidden tolls. No &apos;negotiating&apos; at the airport curb. One price, pure serenity.", icon: Wallet }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex-shrink-0 flex items-center justify-center border border-brand-gold/20 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                        <item.icon className="w-7 h-7 text-brand-gold group-hover:text-brand-navy" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white mb-1">{item.t}</h4>
                        <p className="text-sm text-gray-400 font-bold leading-relaxed tracking-tight">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/20 rounded-[3rem] blur-3xl" />
                <div className="relative bg-brand-navy-dark p-10 rounded-[3rem] border border-white/10 space-y-8">
                  <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-brand-gold">
                    <p className="text-brand-gold font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Concierge Insider Tip
                    </p>
                    <p className="text-white text-lg font-medium italic">
                      &quot;Arriving at JED late at night? Don&apos;t worry about currency exchange at the airport. Our drivers accept multiple payment methods and can even wait for you to visit an ATM after check-in. Your arrival should be about relief, not stress.&quot;
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <p className="text-3xl font-black text-white">0</p>
                      <p className="text-xs font-black text-brand-gold uppercase tracking-widest mt-1">Pre-payment Required</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <p className="text-3xl font-black text-white">100%</p>
                      <p className="text-xs font-black text-brand-gold uppercase tracking-widest mt-1">Managed Performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ROUTES & SEO LANDING CLUSTERS */}
      <section className="py-20 bg-brand-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-lg opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">Global Routes, <span className="text-brand-gold">Local Excellence.</span></h2>
              <p className="text-gray-400 text-base font-medium leading-relaxed">Makkah to Madinah Transit • Riyadh Corporate • Jeddah Airport Transfers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 text-center flex flex-col items-center gap-3">
                 <div className="flex items-center gap-2 text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-brand-gold" />)}
                 </div>
                 <p className="text-3xl font-black text-white">50,000+</p>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Pilgrims Served Worldwide</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Taxi from Makkah to Madinah", p: "Fixed Rate • Get Quote", d: "Standard 450km transit via Haramain Highway in premium SUV or Van.", tags: ["4.5 Hours", "Door-to-door", "Meet & Greet"], link: "/routes/makkah-to-madinah-taxi" },
              { title: "Jeddah Airport to Makkah Taxi", p: "Fixed Rate • Get Quote", d: "Direct KAIA Terminal transfer with flight tracking and 60min free waiting.", tags: ["VIP Pickup", "Fixed Tolls", "Luggage Help"], link: "/routes/jeddah-airport-to-makkah-taxi" },
              { title: "VIP Madinah City Ziyarat", p: "Fixed Rate • Get Quote", d: "Visit Uhud, Quba, and 7 Mosques with our expert bilingual guides.", tags: ["Knowledgeable", "Hydration Incl.", "Flexible Time"], link: "/services/ziyarat" }
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-3xl border border-white/10 p-8 rounded-3xl hover:bg-brand-gold group transition-all duration-500 cursor-pointer">
                <h3 className="text-xl font-black text-white group-hover:text-brand-navy mb-3 leading-tight">{service.title}</h3>
                <div className="text-brand-gold group-hover:text-brand-navy font-black text-lg mb-5 italic">{service.p}</div>
                <p className="text-gray-300 group-hover:text-brand-navy/70 font-bold text-sm leading-relaxed mb-5">{service.d}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((t, j) => (
                        <span key={j} className="text-xs font-black uppercase bg-white/10 group-hover:bg-brand-navy group-hover:text-white px-3 py-1.5 rounded-full tracking-tighter">
                            {t}
                        </span>
                    ))}
                </div>
                <Link href={service.link} className="inline-flex items-center text-white group-hover:text-brand-navy font-black text-xs uppercase tracking-[0.3em]">
                  BOOK THIS ROUTE <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPreview />

      {/* MASSIVE LOCATION GRID - Final SEO Victory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
                <h2 className="text-5xl md:text-6xl font-display font-black text-brand-navy leading-none tracking-tighter">
                    We Cover <br />
                    <span className="text-brand-gold font-outline">Every District</span> <br />
                    In Saudi Arabia.
                </h2>
                <p className="text-xl text-gray-500 font-bold leading-relaxed uppercase tracking-widest">From Tabuk to Abha, and every holy site in between.</p>
                <div className="p-8 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center">
                    <p className="text-4xl font-black text-brand-navy mb-2">55+</p>
                    <p className="text-xs font-black uppercase tracking-widest text-brand-gold">Cities Serviced 24/7</p>
                </div>
                <Button asChild className="w-full h-12 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-black text-sm rounded-xl">
                    <Link href="/locations">VIEW ALL LOCATIONS <MapPin className="ml-2 w-4 h-4" /></Link>
                </Button>
            </div>
            
            <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-12">
                   {[
                     { title: "Holy City Hubs", areas: [
                       { n: "Makkah Taxi City Center", s: "makkah" },
                       { n: "Madinah Taxi Haram Area", s: "madinah" },
                       { n: "Aziziyah & Misfalah", s: "makkah" },
                       { n: "Quba & Uhud Districts", s: "madinah" },
                       { n: "Mina & Arafat Transfers", s: "makkah" }
                     ]},
                     { title: "Airport Terminals", areas: [
                       { n: "Jeddah Taxi to Airport (JED)", s: "jeddah" },
                       { n: "Riyadh (RUH) King Khalid", s: "riyadh" },
                       { n: "Madinah (MED) Prince Mohammad", s: "madinah" },
                       { n: "DMM King Fahd International", s: "dammam" },
                       { n: "Neom Bay Airport VIP", s: "neom" }
                     ]},
                     { title: "Regional & Borders", areas: [
                       { n: "Taif Mountain Resorts", s: "taif" },
                       { n: "Yanbu Industrial Gateway", s: "yanbu" },
                       { n: "Tabuk & Jordan Border", s: "tabuk" },
                       { n: "Riyadh Business District", s: "riyadh" },
                       { n: "Dammam & Khobar Coast", s: "dammam" }
                     ]},
                     { title: "Intercity Corridors", areas: [
                       { n: "Makkah to Madinah (Haramain)", s: "makkah" },
                       { n: "Jeddah to Makkah Highway", s: "makkah" },
                       { n: "Riyadh to Makkah Long-Haul", s: "riyadh" },
                       { n: "Hofuf & Al Ahsa Region", s: "al-ahsa" },
                       { n: "Abha & Southern Highlands", s: "abha" }
                     ]}
                   ].map((cat, i) => (
                       <div key={i} className="space-y-6">
                           <h4 className="text-xl font-black text-brand-navy flex items-center gap-3">
                               <span className="w-8 h-px bg-brand-gold" /> {cat.title}
                           </h4>
                           <div className="flex flex-col gap-3">
                               {cat.areas.map((area, j) => (
                                   <Link key={j} href={`/locations/${area.s}`} className="text-sm font-bold text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gray-200" /> {area.n}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
             <div className="text-center mb-12 space-y-4">
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
                     <div key={i} className="relative z-10 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl text-center group">
                         <div className="w-14 h-14 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                             <step.icon className="w-7 h-7" />
                         </div>
                         <h4 className="text-xl font-black text-brand-navy mb-4">{step.t}</h4>
                         <p className="text-sm font-medium text-gray-500 leading-relaxed">{step.d}</p>
                     </div>
                 ))}
             </div>
             
             <div className="mt-12 p-8 bg-green-50 rounded-[2rem] border-2 border-green-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-green-100">
                         <ShieldCheck className="w-8 h-8" />
                     </div>
                     <div>
                         <p className="text-xl font-black text-green-900 leading-tight">Zero-Risk Booking Policy</p>
                         <p className="text-xs font-bold text-green-700/60 uppercase tracking-widest mt-1">Free Cancellation • No Pre-payment required • 100% Fixed Rates</p>
                     </div>
                 </div>
                 <button className="bg-green-600 hover:bg-green-700 text-white font-black px-10 h-16 rounded-2xl shadow-xl shadow-green-200">
                     <Link href="/booking">BOOK RISK-FREE</Link>
                 </button>
             </div>
        </div>
      </section>

      {/* TESTIMONIALS & GOOGLE RATINGS */}
      <section className="bg-gray-900 relative overflow-hidden">
        <Testimonials />
      </section>

      <BookingProcess />

      <TrustMarkers />

      <HomeFAQ />

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
              <div className="vcard flex flex-col items-center text-white/40 font-bold text-xs uppercase tracking-widest gap-2">
                  <div className="fn text-brand-gold text-lg font-black mb-2">HARAM TAXI SERVICE HQ</div>
                  <div className="adr text-center">
                      <div className="street-address">Al Aziziyah, Misfalah District</div>
                      <span className="locality">Makkah Al Mukarramah</span>, <span className="country-name">Kingdom of Saudi Arabia</span>
                  </div>
                  <div className="tel flex items-center gap-2">
                      <Phone className="w-3 h-3" /> +966 57 580 6733
                  </div>
                  <div className="email">booking@haramtaxiservice.com</div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-xs font-black text-white/20 uppercase tracking-[0.2em] border-t border-white/5 pt-8 w-full">
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
