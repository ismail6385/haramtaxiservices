import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Shield, Star, ArrowRight, MessageCircle, ChevronRight, Globe, Zap } from 'lucide-react';
import NearbyCities from '@/components/NearbyCities';
import Image from 'next/image';

export const metadata = {
  title: 'Taxi Service in Tabuk | Gateway to NEOM & The Line | Haram Taxi',
  description: 'Premium taxi service in Tabuk. Professional airport transfers to NEOM, The Line, and historical sites. 24/7 service with local expert drivers. Book via WhatsApp.',
};

const TabukLocationPage = () => {
  const taxiSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Haram Taxi Tabuk Service",
    "description": "Professional taxi and transport services in Tabuk region, specializing in NEOM transfers and airport pickups.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Haram Taxi Service",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tabuk",
        "addressCountry": "SA"
      }
    },
    "areaServed": "Tabuk & NEOM Region",
    "serviceType": "Airport Transfer, Long Distance Taxi",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "SAR",
      "price": "150"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f18] selection:bg-cyan-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
      />

      {/* Futuristic Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-[#0a0f18]" />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Regional Gateway Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            TABUK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TRANSFERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Experience premium transit from Tabuk to <span className="text-white font-medium">NEOM, The Line</span>, and beyond. Professional local drivers meeting the vision of 2030.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/966500000000?text=I%20need%20a%20taxi%20in%20Tabuk"
              className="group relative px-8 py-5 bg-cyan-500 rounded-2xl text-[#0a0f18] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 fill-current" />
                Book via WhatsApp
              </span>
            </a>
            <button className="px-8 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all">
              View All Routes
            </button>
          </div>
        </div>

        {/* Floating Stats Glassmorphism */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex gap-12 px-12 py-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl">
          {[
            { label: 'Avg Arrival', val: '15 Min', icon: Clock },
            { label: 'Routes Covered', val: '50+', icon: MapPin },
            { label: 'Safety Rating', val: '4.9/5', icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          
          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { 
                title: 'NEOM Specialized', 
                desc: 'Our drivers are experts in the specific entry points and logistics of The Line and Oxagon.',
                icon: '🚀' 
              },
              { 
                title: 'Premium Comfort', 
                desc: 'Modern, air-conditioned fleet designed for the long desert stretches of the Tabuk region.',
                icon: '⭐' 
              },
              { 
                title: 'Instant WhatsApp', 
                desc: 'Skip the forms. Connect directly with our dispatch team for real-time Tabuk bookings.',
                icon: '💬' 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* NEW: Multimodal Experience Gallery (Satisfies Visual Search) */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Gateway Experience</h2>
              <p className="text-slate-400 text-lg">Visualizing your journey through the historical heart and future vision of Saudi Arabia.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[600px]">
              <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
                <Image src="/images/locations/tabuk-hero.webp" alt="Tabuk Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                  <span className="text-white font-medium">Ancient Heritage Sites</span>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/locations/neom-context.webp" alt="NEOM Vision" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                  <span className="text-white text-sm">NEOM Proximity</span>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group">
                <Image src="/images/locations/tabuk-airport.webp" alt="Tabuk Airport" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                  <span className="text-white text-sm">Airport Transfers</span>
                </div>
              </div>
              <div className="col-span-2 relative rounded-3xl overflow-hidden group">
                <Image src="/images/locations/desert-highway.webp" alt="Saudi Desert Highway" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Long-distance Comfort</span>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Local Insider Guide (Authenticity Section) */}
          <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900/40 backdrop-blur-xl rounded-[40px] p-8 md:p-16 border border-white/10 mb-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Tabuk Insider Guide</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex-shrink-0 flex items-center justify-center text-cyan-400 font-bold">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">NEOM Entry Protocols</h4>
                    <p className="text-slate-400">Visiting The Line or Oxagon? Ensure you have your visitor permits ready. Our drivers are familiar with the specific checkpoint locations to save you time.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex-shrink-0 flex items-center justify-center text-cyan-400 font-bold">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Timing Your Arrival</h4>
                    <p className="text-slate-400">Tabuk Airport (TUH) is most active during the morning hours. We recommend booking at least 2 hours in advance to guarantee a premium vehicle during peak times.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex-shrink-0 flex items-center justify-center text-cyan-400 font-bold">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Beyond the City</h4>
                    <p className="text-slate-400">Don&apos;t miss the Hijaz Railway station. Ask your driver for the scenic route—our local team knows the best spots for a quick photo-op without delaying your schedule.</p>
                  </div>
                </div>
              </div>

              {/* Concierge Tip: Human Joy Element */}
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border-l-4 border-cyan-500">
                <p className="text-white font-medium flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Concierge Tip:
                </p>
                <p className="text-slate-400 mt-2 italic">
                  &quot;If you&apos;re traveling during the early morning, ask your driver to stop by a local &apos;Gahwa&apos; shop. Starting your NEOM journey with traditional Saudi coffee and dates is the authentic way to experience Tabuk hospitality.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Human-Centric Differentiator (Danny Sullivan's "Original Voice") */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">More Than Just a Ride</h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                In an era of automated apps and commodity transport, we believe in the <span className="text-cyan-400">Human Connection</span>. Our service in Tabuk isn&apos;t just about moving a car from Point A to Point B. 
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center"><Star className="w-4 h-4 text-cyan-400" /></div>
                  <span>Drivers who know the best local sunrise spots in the desert.</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center"><Shield className="w-4 h-4 text-cyan-400" /></div>
                  <span>A commitment to traditional Saudi hospitality (Karam).</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center"><Globe className="w-4 h-4 text-cyan-400" /></div>
                  <span>Language support to bridge the gap for international NEOM visitors.</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 border border-white/10">
                <blockquote className="text-xl italic text-slate-300 mb-6">
                  &quot;Our goal is to be the first friendly face you see when arriving in Tabuk. We don&apos;t just drive; we welcome you to the future of Saudi Arabia.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20" />
                  <div>
                    <p className="text-white font-bold">Ahmed Al-Tabuki</p>
                    <p className="text-slate-500 text-sm">Lead Driver, Tabuk Region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content / FAQ */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Your Journey Decoded</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Where exactly will my driver meet me at Tabuk Airport?",
                  a: "Your driver will be waiting at the Arrivals exit with a clear nameboard featuring the Haram Taxi logo. We track your flight in real-time, so even if your plane is early or delayed, we'll be there."
                },
                {
                  q: "How do I handle the NEOM security checkpoints?",
                  a: "Our drivers handle the vehicle clearance. You simply need to have your visitor permit (issued by your NEOM host) or your national ID/Passport ready for the guards. We'll guide you through the process."
                },
                {
                  q: "Is there a 'waiting' fee if my flight is delayed?",
                  a: "No. Part of our commitment to human-centric service is that we don't punish you for flight delays. We offer 60 minutes of free waiting time from the moment your flight actually lands."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden">
                  <summary className="list-none p-6 cursor-pointer flex items-center justify-between text-white font-bold text-lg group-open:bg-white/5 transition-all">
                    {faq.q}
                    <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="p-6 text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Nearby Cities Component */}
      <NearbyCities currentCity="tabuk" />

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0a0f18] mb-8">Ready to Start Your Journey?</h2>
          <p className="text-[#0a0f18]/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join the hundreds of professionals and travelers who trust Haram Taxi for their Tabuk and NEOM transfers.
          </p>
          <a 
            href="https://wa.me/966500000000"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#0a0f18] text-white rounded-2xl font-bold text-2xl hover:scale-105 transition-all shadow-2xl"
          >
            <MessageCircle className="w-8 h-8" />
            Book My Tabuk Taxi Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default TabukLocationPage;
