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
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest leading-none">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available 24/7 | Drivers Ready in 10 mins
                        </div>
                        <div className="bg-brand-gold px-4 py-2 rounded-full flex items-center gap-2 text-brand-navy text-xs font-black uppercase tracking-widest leading-none shadow-lg">
                            <Star className="w-3 h-3 fill-brand-navy" />
                            4.9/5 Google Rated
                        </div>
                    </div>

                    {/* Exact-Match SEO Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Saudi Arabia&apos;s <span className="text-brand-gold italic">#1</span><br />
                        <span className="text-brand-gold italic">Private Taxi</span> <span className="underline decoration-brand-gold decoration-4 underline-offset-8">for Umrah &amp; Hajj</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 mt-6 md:mt-10">
                        <span className="text-brand-gold bg-brand-navy-dark/80 px-4 py-2 rounded-xl inline-block mb-3 border border-brand-gold/30">Rent a Car <strong className="text-white">With Driver</strong> • Chauffeur Driven Taxis</span> <br className="hidden md:block" />
                        <span className="text-white/90">Makkah • Madinah • Jeddah Airport | Fixed Rates • Pay After The Journey</span>
                    </p>

                    {/* Dominant Primary CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                        <Button asChild size="lg" className="h-16 px-10 bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-lg rounded-2xl shadow-[0_12px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <Link href="/booking">
                                BOOK YOUR TAXI NOW <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform h-5 w-5" />
                            </Link>
                        </Button>

                        <Button asChild size="lg" className="h-16 px-10 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-lg rounded-2xl shadow-[0_12px_40px_rgba(37,211,102,0.4)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="w-5 h-5 mr-2 fill-current" />
                                WHATSAPP US
                            </a>
                        </Button>
                    </div>

                    {/* THE BOOKING ENGINE */}
                    <HeroBookingForm />

                    {/* Trust micro-strip */}
                    <div className="pt-8 flex flex-wrap justify-center gap-6">
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"><ShieldCheck className="w-4 h-4 text-green-400" /> Pay After Journey</span>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"><Star className="w-4 h-4 text-brand-gold fill-brand-gold" /> 4.9/5 Google</span>
                        <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest"><Phone className="w-4 h-4 text-brand-gold" /> 24/7 Support</span>
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
