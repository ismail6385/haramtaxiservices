"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Clock, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  images?: string[];
}

export default function Hero({ images }: HeroProps) {
  const defaultImage = '/makkah-clock-tower.webp';

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-brand-navy-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={defaultImage}
          alt="Haram Taxi VIP Service in Saudi Arabia"
          fill
          priority
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/90 via-brand-navy-dark/70 to-brand-navy-dark/95" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-8 shadow-sm">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-widest">Complete Transportation Services</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 max-w-4xl tracking-tight">
          Reliable Transportation <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
            Across Saudi Arabia
          </span>
        </h1>

        {/* Sub headline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
          From local city transfers to complete border crossing services, we provide reliable travel solutions for all your journeys across the kingdom.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-md sm:max-w-none">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-brand-gold hover:bg-yellow-500 text-brand-navy-dark px-10 py-7 text-lg font-bold rounded-xl shadow-xl shadow-brand-gold/20 transition-transform hover:-translate-y-1"
          {...({} as any)}
          >
            <Link href="/booking">
              Book Your Taxi Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-gray-400 text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold rounded-xl transition-all"
          {...({} as any)}
          >
            <Link href="https://wa.me/996575806733?text=Hello%20Haram%20Taxi%2C%20I%20would%20like%20to%20book%20a%20ride." target="_blank">
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Link>
          </Button>
        </div>

        {/* Trust Indicators below CTA */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white w-full max-w-3xl border-t border-white/10 pt-10">
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-8 h-8 text-brand-gold" />
            <div className="text-left">
              <p className="font-bold text-lg">24/7 Available</p>
              <p className="text-xs text-gray-400">Kingdom-wide Coverage</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-brand-gold" />
            <div className="text-left">
              <p className="font-bold text-lg">Direct Routes</p>
              <p className="text-xs text-gray-400">All Major Cities</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-gold" />
            <div className="text-left">
              <p className="font-bold text-lg">Fixed Pricing</p>
              <p className="text-xs text-gray-400">No Hidden Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
