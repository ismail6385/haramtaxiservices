"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowRight, ShieldCheck, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export default function HeroBookingForm() {
    const [pickup, setPickup] = useState('Jeddah Airport');
    const [dropoff, setDropoff] = useState('Makkah Hotel');
    const [date, setDate] = useState('');
    const [pax, setPax] = useState('1-4 Pax');

    const quickRoutes = [
        { p: 'Jeddah Airport', d: 'Makkah Hotel' },
        { p: 'Makkah', d: 'Madinah' },
        { p: 'Madinah Airport', d: 'Madinah Hotel' },
    ];

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border-2 border-brand-gold/20 p-5 sm:p-8 mt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {/* Quick Route Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-black text-brand-navy/40 tracking-widest uppercase flex items-center gap-1.5 mr-1">
                    <Tag className="w-3 h-3 text-brand-gold" /> Popular:
                </span>
                {quickRoutes.map((route, i) => (
                    <button
                        key={i}
                        onClick={() => { setPickup(route.p); setDropoff(route.d); }}
                        className="px-4 py-1.5 bg-gray-100 hover:bg-brand-gold hover:text-brand-navy rounded-full text-xs font-bold transition-all text-gray-500"
                    >
                        {route.p} → {route.d}
                    </button>
                ))}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Pickup */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <MapPin className="w-3 h-3 text-brand-gold" /> Pickup
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Jeddah Terminal 1"
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                </div>

                {/* Dropoff */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <MapPin className="w-3 h-3 text-brand-navy" /> Destination
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Makkah Clock Tower"
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <Calendar className="w-3 h-3 text-brand-gold" /> Travel Date
                    </label>
                    <input
                        type="date"
                        min={today}
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none cursor-pointer"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Pax */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <Users className="w-3 h-3 text-brand-gold" /> Passengers
                    </label>
                    <select
                        value={pax}
                        onChange={(e) => setPax(e.target.value)}
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option>1–4 Pax (Sedan)</option>
                        <option>5–7 Pax (SUV / Van)</option>
                        <option>8–11 Pax (Hiace)</option>
                        <option>12–14 Pax (Coaster)</option>
                    </select>
                </div>
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                        <ShieldCheck className="w-4 h-4 text-green-500" /> Pay After Journey
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                        <Clock className="w-4 h-4 text-brand-gold" /> Meet &amp; Greet Included
                    </span>
                </div>

                <Button asChild className="w-full sm:w-auto h-12 px-10 bg-brand-navy hover:bg-brand-navy-light text-white font-black text-base rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 group">
                    <Link href={`/booking?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}&date=${date}&pax=${encodeURIComponent(pax)}`}>
                        <span className="flex items-center gap-2">
                            GET QUOTE
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
