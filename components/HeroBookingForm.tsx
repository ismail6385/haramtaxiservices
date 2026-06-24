"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroBookingForm() {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState('');
    const [pax, setPax] = useState('');

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-[28px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-brand-gold/20 p-5 sm:p-7">

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">

                {/* Pickup */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Pickup
                    </label>
                    <input
                        type="text"
                        placeholder="City, airport or hotel"
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none placeholder:text-gray-400 placeholder:font-normal"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                    />
                </div>

                {/* Destination */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-brand-navy" /> Destination
                    </label>
                    <input
                        type="text"
                        placeholder="City, airport or hotel"
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none placeholder:text-gray-400 placeholder:font-normal"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                    />
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" /> Travel Date
                    </label>
                    <input
                        type="date"
                        min={today}
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none cursor-pointer"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                {/* Passengers */}
                <div className="space-y-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <Users className="w-3.5 h-3.5 text-brand-gold" /> Passengers
                    </label>
                    <select
                        value={pax}
                        onChange={(e) => setPax(e.target.value)}
                        className="w-full h-12 bg-gray-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl px-4 text-gray-900 font-semibold text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Select passengers</option>
                        <option value="1-4">1–4 Passengers (Sedan)</option>
                        <option value="5-7">5–7 Passengers (Van / SUV)</option>
                        <option value="8-11">8–11 Passengers (Hiace)</option>
                        <option value="12-14">12–14 Passengers (Coaster)</option>
                    </select>
                </div>
            </div>

            {/* CTA */}
            <Button
                asChild
                className="w-full h-12 bg-brand-navy hover:bg-brand-navy-light text-white font-black text-base rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 group"
            >
                <Link href={`/booking?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}&date=${date}&pax=${encodeURIComponent(pax)}`}>
                    <span className="flex items-center justify-center gap-2">
                        Check Fare
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Link>
            </Button>
        </div>
    );
}
