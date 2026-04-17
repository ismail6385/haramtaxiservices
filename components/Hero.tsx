"use client";

import { MessageSquare, Phone, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import HeroBookingForm from './HeroBookingForm';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-navy-dark">
            {/* SEO Background & Overlays */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark z-10" />
                <div className="absolute inset-0 bg-[url('/hero-bg-saudi.webp')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10" />
            </div>

            <div className="container relative z-20 px-4">
                <div className="text-center max-w-5xl mx-auto space-y-8">
                    {/* Urgency & Trust Header */}
                    <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest leading-none">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available 24/7 | Drivers Ready in 10 mins
                        </div>
                        <div className="bg-brand-gold px-4 py-2 rounded-full flex items-center gap-2 text-brand-navy text-[10px] font-black uppercase tracking-widest leading-none shadow-lg">
                            <Star className="w-3 h-3 fill-brand-navy" />
                            4.9/5 Google Rated
                        </div>
                    </div>

                    {/* Exact-Match SEO Headline */}
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white leading-[1] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Book Your <span className="text-brand-gold italic">Premium Taxi</span> from <br className="hidden md:block" />
                        <span className="underline decoration-brand-gold decoration-8 underline-offset-8 text-white">Makkah to Madinah</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 mt-6 md:mt-10">
                        <span className="text-brand-gold bg-brand-navy-dark/80 px-4 py-2 rounded-xl inline-block mb-3 border border-brand-gold/30">Rent a Car <strong className="text-white">With Driver</strong> • Chauffeur Driven Taxis</span> <br className="hidden md:block" />
                        <span className="text-white/90">Jeddah Airport to Makkah | Fixed Rates • Pay After The Journey</span>
                    </p>

                    {/* Dominant Primary CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                        <Button asChild size="lg" className="h-24 px-12 bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-2xl rounded-3xl shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <Link href="/booking">
                                BOOK YOUR TAXI NOW <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform h-8 w-8" />
                            </Link>
                        </Button>
                        
                        <Button asChild size="lg" className="h-24 px-12 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-2xl rounded-3xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <a href="https://wa.me/996575806733" target="_blank">
                                <MessageSquare className="w-8 h-8 mr-3 fill-current" />
                                WHATSAPP US
                            </a>
                        </Button>
                    </div>

                    {/* THE BOOKING ENGINE */}
                    <HeroBookingForm />

                    {/* Trust Proof Strip */}
                    <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                         {[
                            { label: "Google Rated", val: "4.9/5", icon: "⭐" },
                            { label: "TripAdvisor", val: "TOP CHOICE", icon: "🏆" },
                            { label: "KSA Licensed", val: "100%", icon: "📜" },
                            { label: "Zero Hidden Fees", val: "GUARANTEED", icon: "💎" },
                         ].map((trust, i) => (
                             <div key={i} className="flex flex-col items-center">
                                 <span className="text-2xl mb-1">{trust.icon}</span>
                                 <span className="text-white font-black text-xs uppercase tracking-widest">{trust.val}</span>
                                 <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">{trust.label}</span>
                             </div>
                         ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                <div className="w-1 h-12 bg-gradient-to-b from-brand-gold to-transparent rounded-full animate-bounce" />
            </div>
        </section>
    );
}
