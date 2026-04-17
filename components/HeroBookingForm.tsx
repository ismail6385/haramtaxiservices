"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowRight, Clock, Star, ShieldCheck, Tag } from 'lucide-react';
import Link from 'next/link';

export default function HeroBookingForm() {
    const [pickup, setPickup] = useState('Jeddah Airport');
    const [dropoff, setDropoff] = useState('Makkah Hotel');
    const [pax, setPax] = useState('1-4 Pax');

    const estimatedFare = useMemo(() => {
        const p = pickup.toLowerCase();
        const d = dropoff.toLowerCase();
        
        if ((p.includes('jeddah') && d.includes('makkah')) || (d.includes('jeddah') && p.includes('makkah'))) {
            return pax === '1-4 Pax' ? '200' : '350';
        }
        if ((p.includes('makkah') && d.includes('madinah')) || (d.includes('makkah') && p.includes('madinah'))) {
            return pax === '1-4 Pax' ? '400' : '650';
        }
        return null;
    }, [pickup, dropoff, pax]);

    const quickRoutes = [
        { p: 'Jeddah Airport', d: 'Makkah Hotel' },
        { p: 'Makkah', d: 'Madinah' },
        { p: 'Madinah Airport', d: 'Madinah Hotel' },
    ];

    return (
        <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-brand-gold/20 p-4 sm:p-8 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {/* Quick Select Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-[10px] font-black text-brand-navy/40 tracking-widest uppercase flex items-center gap-2 mr-2">
                    <Tag className="w-3 h-3 text-brand-gold" /> Popular:
                </span>
                {quickRoutes.map((route, i) => (
                    <button
                        key={i}
                        onClick={() => { setPickup(route.p); setDropoff(route.d); }}
                        className="px-4 py-2 bg-brand-navy-pale/30 hover:bg-brand-gold hover:text-brand-navy rounded-full text-[10px] font-black uppercase tracking-widest transition-all text-brand-navy/60"
                    >
                        {route.p} to {route.d}
                    </button>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row items-end gap-6">
                {/* Pickup */}
                <div className="flex-[1.2] w-full space-y-2 group">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/60">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        Pickup Point
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="e.g. Jeddah Terminal 1"
                            className="w-full h-20 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-2xl px-6 text-gray-900 font-bold transition-all outline-none shadow-inner"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                        />
                    </div>
                </div>

                {/* Dropoff */}
                <div className="flex-[1.2] w-full space-y-2 group">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/60">
                        <MapPin className="w-3 h-3 text-brand-navy" />
                        Destination
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="e.g. Makkah Clock Tower"
                            className="w-full h-20 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-2xl px-6 text-gray-900 font-bold transition-all outline-none shadow-inner"
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                        />
                    </div>
                </div>

                {/* Pax */}
                <div className="flex-1 w-full space-y-2 group">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/60">
                        <Users className="w-3 h-3 text-brand-gold" />
                        Group Size
                    </label>
                    <select 
                        value={pax}
                        onChange={(e) => setPax(e.target.value)}
                        className="w-full h-20 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-2xl px-6 text-gray-900 font-bold transition-all outline-none shadow-inner appearance-none cursor-pointer"
                    >
                        <option>1-4 Pax (Economy/Sedan)</option>
                        <option>5-7 Pax (GMC/Van)</option>
                        <option>8-11 Pax (Hiace)</option>
                    </select>
                </div>

                {/* CTA */}
                <div className="w-full lg:w-auto">
                    <Button asChild className="w-full h-20 lg:px-12 bg-brand-navy hover:bg-brand-navy-light text-white font-black text-xl rounded-2xl shadow-2xl transition-all hover:scale-[1.05] active:scale-95 group relative overflow-hidden">
                        <Link href={`/booking?pickup=${pickup}&dropoff=${dropoff}&pax=${pax}`}>
                            <span className="relative z-10 flex items-center gap-3">
                                {estimatedFare ? 'BOOK FOR ' + estimatedFare + ' SAR' : 'GET QUOTE'}
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Live Feedback / Reassurance */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4 text-green-500" /> Pay After Journey
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-brand-gold" /> Meet & Greet Included
                    </div>
                </div>
                
                {estimatedFare && (
                    <div className="bg-brand-gold/10 px-6 py-3 rounded-2xl border-2 border-brand-gold/30 animate-in zoom-in-95">
                        <span className="text-xs font-black text-brand-navy uppercase tracking-widest block">Estimated Fixed Fare</span>
                        <span className="text-3xl font-black text-brand-navy">{estimatedFare} SAR</span>
                        <span className="text-[9px] font-bold text-gray-500 ml-2 uppercase">All taxes included</span>
                    </div>
                )}
            </div>
        </div>
    );
}

