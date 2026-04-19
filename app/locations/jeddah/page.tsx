import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Shield, Star, ArrowRight, MessageCircle, ChevronRight, Globe, Zap, Compass, Anchor } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Jeddah Taxi Service',
  description: 'Premium concierge taxi service in Jeddah. Specialized KAIA airport transfers to Makkah, Al-Balad historical tours, and business travel logistics. 24/7 professional drivers.',
  keywords: ['taxi in jeddah', 'kaia airport taxi', 'jeddah to makkah taxi', 'jeddah city tour', 'al-balad taxi', 'jeddah corniche transport'],
  alternates: {
    canonical: '/locations/jeddah',
  },
  openGraph: {
    title: 'Jeddah Taxi Service | KAIA Airport & City Transfers',
    description: 'Expert-led transportation in Jeddah. From King Abdulaziz Airport to Makkah in comfort.',
    url: 'https://haramtaxiservice.com/locations/jeddah',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeddah Taxi Service | Professional Airport Transfers',
    description: 'Book your reliable ride in Jeddah. KAIA to Makkah, Al-Balad tours, and more.',
  },
};

const JeddahLocationPage = () => {
  const taxiSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Haram Taxi Jeddah Service",
    "description": "Professional taxi and chauffeur services in Jeddah, specializing in King Abdulaziz International Airport (KAIA) transfers and Makkah routes.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Haram Taxi Service",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jeddah",
        "addressCountry": "SA"
      }
    },
    "areaServed": "Jeddah & Makkah Province",
    "serviceType": "Airport Transfer, City Tour, Intercity Taxi",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "SAR",
      "price": "150"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f18] selection:bg-brand-gold/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
      />

      {/* Modern Cinematic Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/locations/jeddah-corniche-view.webp"
            alt="Jeddah Corniche at Night"
            fill
            className="object-cover opacity-40 scale-110 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/80 via-transparent to-[#0a0f18]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 backdrop-blur-md mb-8">
            <Anchor className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-gold text-sm font-bold tracking-widest uppercase text-shadow-sm">The Gateway to the Haramain</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
            JEDDAH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">CONCIERGE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            From the Red Sea coast to the Holy City gates. Professional <Link href="/services/airport-transfer" className="text-white hover:text-brand-gold underline decoration-brand-gold/30">KAIA Airport transfers</Link> and bespoke Jeddah city explorations to <Link href="/locations/makkah" className="text-white hover:text-brand-gold underline decoration-brand-gold/30">Makkah</Link>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/966500000000?text=I%20need%20a%20taxi%20in%20Jeddah"
              className="group relative px-10 py-5 bg-brand-gold rounded-2xl text-[#0a0f18] font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            >
              <span className="flex items-center gap-2 relative z-10">
                <MessageCircle className="w-6 h-6 fill-current" />
                Book via WhatsApp
              </span>
            </a>
            <Link href="/pricing" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-bold text-xl hover:bg-white/10 transition-all">
              Fleet & Rates
            </Link>
          </div>
        </div>
      </section>

      {/* The "Jeddah Standard" Experience */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          
          {/* Service Grid - Logistics Decoded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { 
                title: 'Airport Terminal Experts', 
                desc: 'Whether you land at the new Terminal 1 or the Hajj Terminal, our drivers know the exact pickup protocols to avoid the curb-side chaos.',
                icon: <Compass className="w-8 h-8 text-brand-gold" /> 
              },
              { 
                title: 'Makkah Corridor Specialist', 
                desc: 'Daily transfers on the Haramain Highway. We offer safe, 90-minute transit to any <Link href="/locations/makkah" className="text-white hover:text-brand-gold underline decoration-brand-gold/30">hotel in Makkah</Link> with fixed transparent rates.',
                icon: <MapPin className="w-8 h-8 text-brand-gold" /> 
              },
              { 
                title: 'Business & Executive', 
                desc: 'Managed chauffeur services for the Jeddah Business District and KAEC. Punctuality is our absolute baseline.',
                icon: <Shield className="w-8 h-8 text-brand-gold" /> 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 hover:border-brand-gold/30 transition-all group">
                <div className="mb-6 p-4 bg-brand-gold/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Experience Gallery */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Jeddah Through Our Eyes</h2>
                <p className="text-slate-400 text-xl font-medium tracking-tight">The Gateway is more than a destination; it&apos;s the start of your spiritual journey.</p>
              </div>
              <div className="flex gap-4 mb-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all">
                  <Globe className="w-4 h-4 text-brand-gold" />
                  Share Guide
                </button>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold">
                  <span className="text-xs uppercase tracking-widest text-slate-500">Helpful?</span>
                  <button className="hover:text-brand-gold transition-colors">👍</button>
                  <button className="hover:text-brand-gold transition-colors">👎</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px]">
              <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group shadow-2xl">
                <Image src="/images/locations/jeddah-airport.webp" alt="KAIA Jeddah Airport" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-12">
                  <div>
                    <span className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">Airport Hub</span>
                    <h4 className="text-3xl font-bold text-white mt-2">King Abdulaziz International (KAIA)</h4>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                <Image src="/images/locations/al-balad.webp" alt="Al-Balad Historical Jeddah" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <h4 className="text-2xl font-bold text-white">Historical Al-Balad</h4>
                </div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                <Image src="/images/locations/jeddah-corniche.webp" alt="Jeddah Corniche" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <h4 className="text-2xl font-bold text-white">Red Sea Corniche</h4>
                </div>
              </div>
              <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden group shadow-2xl">
                <Image src="/images/locations/makkah-highway.webp" alt="Road to Makkah" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-12">
                  <h4 className="text-3xl font-bold text-white">The Journey to Makkah</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Jeddah Insider Guide (Utility Section) */}
          <div className="bg-gradient-to-br from-brand-navy-dark to-slate-900 backdrop-blur-2xl rounded-[4rem] p-10 md:p-20 border border-white/10 mb-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <div className="max-w-4xl relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-12">Jeddah Concierge Guide</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex-shrink-0 flex items-center justify-center text-brand-gold text-2xl font-black border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">01</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Terminal 1 vs. Hajj Terminal</h4>
                    <p className="text-slate-400 text-lg leading-relaxed"><Link href="/locations/jeddah" className="text-white hover:text-brand-gold underline decoration-brand-gold/30">Jeddah Airport</Link> is massive. Terminal 1 is the new main hub, while the Hajj terminal is seasonal. Our dispatchers verify your flight number to ensure your driver is parked at the correct zone, saving you from a long, hot walk with luggage.</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex-shrink-0 flex items-center justify-center text-brand-gold text-2xl font-black border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">02</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Timing the &apos;Umrah Rush&apos;</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">The road from Jeddah to Makkah can get busy during prayer times and weekends. We recommend scheduling your airport pickup at least 2 hours after your landing time to allow for immigration, especially during Ramadan.</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex-shrink-0 flex items-center justify-center text-brand-gold text-2xl font-black border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">03</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Bypassing the &apos;Taxi Touts&apos;</h4>
                    <p className="text-slate-400 text-lg leading-relaxed">You will be approached by many unofficial drivers at the arrival gate. For your safety and to avoid price-haggling, look for your Haram Taxi driver with your name-board. We never charge extra for &apos;airport taxes&apos; or &apos;parking&apos;—it&apos;s all included.</p>
                  </div>
                </div>
              </div>

              {/* Human Joy Element */}
              <div className="mt-20 p-8 bg-white/5 rounded-3xl border-l-8 border-brand-gold">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-brand-gold fill-current" />
                  <p className="text-white font-black uppercase tracking-widest">The Jeddah Connection:</p>
                </div>
                <p className="text-slate-300 text-xl italic leading-relaxed">
                  &quot;If you have a few hours before your check-in, ask your driver to take the &apos;Coastal Route&apos; through the New Corniche. Seeing the Jeddah Fountain against the Red Sea is the perfect way to reset your mind before entering the <Link href="/locations/makkah" className="text-white hover:text-brand-gold underline decoration-brand-gold/30">state of Ihram for Makkah</Link>.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* The Human Standard Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-[4rem] blur-3xl opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">More Than a Ride</h2>
                <p className="text-slate-400 text-xl leading-relaxed mb-8">
                  In Jeddah, we aren&apos;t just drivers; we are the **Ambassadors of the Gateway**. We understand that for many, Jeddah is the first time they set foot on Saudi soil.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center"><Star className="w-5 h-5 text-brand-gold" /></div>
                    <span className="text-lg font-medium">Bilingual drivers who bridge the cultural gap.</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center"><Shield className="w-5 h-5 text-brand-gold" /></div>
                    <span className="text-lg font-medium">Fixed rates that honor your budget.</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center"><Globe className="w-5 h-5 text-brand-gold" /></div>
                    <span className="text-lg font-medium">Clean, modern fleet (Yukon XL, Staria, Camry).</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <blockquote className="text-3xl md:text-4xl italic text-white font-light leading-snug mb-10">
                &quot;Our drivers don&apos;t just know the roads; they know the history. From the ancient coral houses of Al-Balad to the modern skylines, we tell the story of Jeddah through every kilometer.&quot;
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 border-2 border-brand-gold" />
                <div>
                  <p className="text-white font-bold text-xl leading-none">Omar Al-Hijazi</p>
                  <p className="text-brand-gold font-medium uppercase tracking-widest text-xs mt-2">Senior Lead Driver, Jeddah</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logistics FAQ - "Anxiety Solved" */}
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-16 text-center">Jeddah Travel Decoded</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What if my flight to Jeddah (KAIA) is delayed by 3 hours?",
                  a: "Don't worry. We monitor all arrival flights in real-time. Your driver will adjust their schedule automatically. We provide 60 minutes of free waiting time from the moment your plane actually lands, giving you plenty of time for immigration and luggage."
                },
                {
                  q: "Can I book a Jeddah taxi for a specific Ziyarat tour?",
                  a: "Yes. While we are known for airport transfers, we offer half-day and full-day bookings for Jeddah explorations. You can visit Al-Balad, the Floating Mosque, and the Corniche with a dedicated driver who waits for you at every stop."
                },
                {
                  q: "Is the road from Jeddah Airport to Makkah safe at night?",
                  a: "The Haramain Highway is one of the most well-lit and modern highways in the Kingdom. Our vehicles are all 2023-2025 models with advanced safety features, and our drivers are trained for night-time intercity transit."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
                  <summary className="list-none p-8 cursor-pointer flex items-center justify-between text-white font-bold text-xl group-open:bg-white/10 transition-all">
                    {faq.q}
                    <ChevronRight className="w-6 h-6 group-open:rotate-90 transition-transform text-brand-gold" />
                  </summary>
                  <div className="p-8 text-slate-400 text-lg leading-relaxed border-t border-white/5 bg-white/[0.02]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Nearby Cities Component */}
      <NearbyCities currentCity="jeddah" />

      {/* Modern Bottom CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-[#0a0f18] mb-8 tracking-tighter">THE GATEWAY <br /> IS CALLING</h2>
          <p className="text-[#0a0f18] text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-bold opacity-80 leading-relaxed">
            Experience the gold standard of Jeddah transportation. No pre-payment. No stress. Just <Link href="/services" className="text-[#0a0f18] hover:text-white underline decoration-brand-navy/30 transition-colors">professional service</Link>.
          </p>
          <a 
            href="https://wa.me/966500000000"
            className="inline-flex items-center gap-4 px-14 py-7 bg-[#0a0f18] text-white rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl hover:shadow-brand-navy/40"
          >
            <MessageCircle className="w-8 h-8" />
            Secure My Jeddah Ride
          </a>
        </div>
      </section>
    </div>
  );
};

export default JeddahLocationPage;
