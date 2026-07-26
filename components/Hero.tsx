"use client";

import { MessageSquare, ShieldCheck, Star, ArrowRight, Clock } from 'lucide-react';
import HeroBookingForm from './HeroBookingForm';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-navy-dark">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark via-brand-navy-dark/90 to-brand-navy-dark z-10" />
                <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            </div>

            <div className="container relative z-20 px-4">
                <div className="text-center max-w-5xl mx-auto">

                    {/* Single trust row */}
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-brand-gold" /> 24/7 Support</span>
                        <span className="text-white/20 hidden sm:inline">·</span>
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-green-400" /> Fixed Fares</span>
                        <span className="text-white/20 hidden sm:inline">·</span>
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-green-400" /> Pay After Journey</span>
                        <span className="text-white/20 hidden sm:inline">·</span>
                        <span className="flex items-center gap-1.5"><Star className="w-3 h-3 text-brand-gold fill-brand-gold" /> 4.9/5 Google Rated</span>
                    </div>

                    {/* H1 — keyword-focused, deliberately distinct from the <title> tag */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-[1.1] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        Private Taxi &amp; Chauffeur Service for Umrah Travel<br />
                        <span className="text-brand-gold">in Makkah, Madinah, Jeddah &amp; Across Saudi Arabia</span>
                    </h1>

                    {/* Supporting text — keyword-rich, audience-clear */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 animate-in fade-in duration-1000 delay-150">
                        Private taxi transfers for Umrah, Hajj, airport pickups, hotel transfers and intercity travel across Jeddah Airport, Makkah, Madinah, Taif and major Saudi cities — for pilgrims, families and tourists.
                    </p>

                    {/* 2 CTAs only */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-in fade-in duration-1000 delay-200">
                        <Button asChild size="lg" className="h-14 px-10 bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-base rounded-2xl shadow-[0_12px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <Link href="/booking">
                                Get Instant Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="h-14 px-10 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base rounded-2xl shadow-[0_12px_40px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto">
                            <a href="https://wa.me/966575806733" target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>

                    {/* Booking Form */}
                    <HeroBookingForm />

                    {/* Popular routes — real SEO-crawlable links */}
                    <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Popular routes:</span>
                        {[
                            { label: 'Jeddah Airport → Makkah', href: '/routes/jeddah-airport-to-makkah' },
                            { label: 'Makkah → Madinah', href: '/routes/makkah-to-madinah' },
                            { label: 'Madinah → Makkah', href: '/routes/madinah-to-makkah' },
                            { label: 'Makkah → Taif', href: '/routes/makkah-to-taif' },
                        ].map((r) => (
                            <Link
                                key={r.href}
                                href={r.href}
                                className="px-4 py-1.5 bg-white/8 hover:bg-brand-gold hover:text-brand-navy text-white/60 rounded-full text-xs font-bold transition-all border border-white/10 hover:border-brand-gold"
                            >
                                {r.label}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
                <div className="w-1 h-12 bg-gradient-to-b from-brand-gold to-transparent rounded-full animate-bounce" />
            </div>
        </section>
    );
}
