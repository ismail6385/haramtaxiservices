"use client";

import { useState } from "react";
import { CheckCircle2, Car, Users, Briefcase, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Data Structure for Pricing
const pricingData = {
    camry: {
        title: "Toyota Camry",
        type: "Standard Sedan",
        capacity: "4 Pax",
        luggage: "2 Bags",
        idealFor: "Couples & Business",
        startPrice: "",
        icon: Car,
        rates: [
            { route: "Jeddah Airport to Makkah", price: "Get Quote", popular: true },
            { route: "Makkah to Madinah Taxi", price: "Get Quote" },
            { route: "Madinah Airport to Madinah Hotel", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam City Ride", price: "Get Quote" },
            { route: "Ziyarat Makkah (4 Hours)", price: "Get Quote" },
        ]
    },
    staria: {
        title: "Hyundai Staria",
        type: "Luxury Family Van",
        capacity: "7 Pax",
        luggage: "5 Bags",
        idealFor: "Families & Groups",
        startPrice: "",
        icon: Users,
        rates: [
            { route: "Jeddah Airport to Makkah", price: "Get Quote", popular: true },
            { route: "Makkah to Madinah Taxi", price: "Get Quote" },
            { route: "Madinah Airport to Madinah Hotel", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Ziyarat Madinah (4 Hours)", price: "Get Quote" },
        ]
    },
    gmc: {
        title: "GMC Yukon XL / Suburban",
        type: "VIP Executive SUV",
        capacity: "7 Pax",
        luggage: "6 Bags",
        idealFor: "VIP & Executives",
        startPrice: "",
        icon: Briefcase,
        rates: [
            { route: "Jeddah Airport to Makkah (VIP)", price: "Get Quote", popular: true },
            { route: "Makkah to Madinah (VIP)", price: "Get Quote" },
            { route: "Riyadh Corporate Full Day", price: "Get Quote" },
            { route: "NEOM Business Delegation", price: "Get Quote" },
            { route: "Border Crossing (Bahrain)", price: "Get Quote" },
            { route: "VIP Ziyarat Tour", price: "Get Quote" },
        ]
    },
    hiace: {
        title: "Toyota Hiace",
        type: "Group Minibus",
        capacity: "11 Pax",
        luggage: "10 Bags",
        idealFor: "Large Pilgrim Groups",
        startPrice: "",
        icon: Users,
        rates: [
            { route: "Jeddah Airport to Makkah (Group)", price: "Get Quote", popular: true },
            { route: "Makkah to Madinah (Group)", price: "Get Quote" },
            { route: "Full Day Group Ziyarat", price: "Get Quote" },
            { route: "Airport to City Group Transfer", price: "Get Quote" },
            { route: "Corporate Event Transport", price: "Get Quote" },
            { route: "Hajj/Umrah Group Logistics", price: "Get Quote" },
        ]
    }
};

type VehicleKey = keyof typeof pricingData;

export default function PricingPreview() {
    const [activeTab, setActiveTab] = useState<VehicleKey>('camry');

    const activeData = pricingData[activeTab];

    return (
        <section className="py-24 bg-white" id="pricing" aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 id="pricing-heading" className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-4 tracking-tight">Executive Fleet & Transparent Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">No bargaining. No hidden tolls. Just professional service at <span className="text-brand-gold font-black">Guaranteed Fixed Rates.</span></p>
                    <div className="mt-6 flex justify-center">
                        <div className="bg-amber-50 border border-amber-100 text-amber-900 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 max-w-xl text-left">
                            <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 animate-pulse"></span>
                            Price varies based on chosen vehicle category, exact pickup/dropoff points, and seasonal availability.
                        </div>
                    </div>
                </div>

                {/* Vehicle Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {(Object.keys(pricingData) as VehicleKey[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-8 py-4 rounded-2xl text-sm sm:text-lg font-black tracking-widest uppercase transition-all duration-300 border-2 ${activeTab === key
                                ? "bg-brand-navy border-brand-navy text-white shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] scale-105"
                                : "bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-brand-navy/20 hover:text-brand-navy"
                                }`}
                        >
                            {pricingData[key].title}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Vehicle Card - Left Column */}
                    <div className="lg:col-span-4 bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden sticky top-24">
                        <div className="bg-brand-navy p-10 text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <activeData.icon className="w-20 h-20 mx-auto mb-6 text-brand-gold" />
                            <h3 className="text-3xl font-display font-black tracking-tight mb-2">{activeData.title}</h3>
                            <div className="inline-block px-4 py-1.5 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                                {activeData.type}
                            </div>
                            <div className="text-2xl font-black text-brand-gold mt-4 uppercase tracking-widest">
                               Fixed Rate • On Request
                            </div>
                        </div>
                        <div className="p-10 space-y-6">
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                                <span className="text-gray-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Users className="w-4 h-4 text-brand-navy" /> Passengers
                                </span>
                                <span className="font-black text-gray-900 text-xl">{activeData.capacity}</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                                <span className="text-gray-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-brand-navy" /> Luggage
                                </span>
                                <span className="font-black text-gray-900 text-xl">{activeData.luggage}</span>
                            </div>
                            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                                <span className="text-gray-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-navy" /> Ideal For
                                </span>
                                <span className="font-black text-brand-gold text-right text-sm leading-tight max-w-[120px]">{activeData.idealFor}</span>
                            </div>
                            
                            <div className="pt-6 space-y-4">
                                <Button asChild className="w-full bg-brand-navy hover:bg-brand-navy-light text-white h-20 text-xl font-black rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                                    <Link href="/booking">
                                        BOOK THIS VEHICLE
                                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </Button>
                                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-3 h-3 text-green-500" />
                                    Instant confirmation via WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rates Table - Right Column */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                {activeData.rates.map((rate, idx) => (
                                    <div key={idx} className={`p-8 flex flex-col sm:flex-row justify-between items-center hover:bg-brand-navy-pale/20 transition-all group ${rate.popular ? 'bg-brand-gold/5' : ''}`}>
                                        <div className="flex items-center gap-6 mb-4 sm:mb-0 w-full sm:w-auto">
                                            <div className={`w-3 h-3 rounded-full ${rate.popular ? 'bg-brand-gold animate-pulse' : 'bg-brand-navy-light/30'}`} />
                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-black text-gray-900 text-xl group-hover:text-brand-navy transition-colors">{rate.route}</span>
                                                    {rate.popular && <span className="text-[10px] font-black bg-brand-gold text-brand-navy px-2 py-1 rounded inline-block">MOST POPULAR</span>}
                                                </div>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Direct Way • All Inclusive</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-10">
                                            <div className="text-right">
                                                <span className="font-black text-xl text-brand-gold">{rate.price}</span>
                                                <p className="text-[10px] text-gray-400 font-bold">FIXED RATE</p>
                                            </div>
                                            <Link href="/booking">
                                                <Button size="lg" className="bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-black px-8 py-6 rounded-xl transition-all group-hover:scale-105 flex flex-col items-center h-auto min-h-[64px]">
                                                    <span>BOOK NOW</span>
                                                    <span className="text-[9px] text-red-500 group-hover:text-brand-gold animate-pulse mt-0.5 tracking-wider">LIMITED AVAILABILITY</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                               <div className="flex -space-x-3">
                                   {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />)}
                               </div>
                               <p className="text-sm font-bold text-gray-500">Joined by 250+ passengers this week</p>
                            </div>
                            <Link href="/pricing" className="text-brand-navy font-black hover:text-brand-navy-light flex items-center gap-3 text-sm group tracking-widest uppercase">
                                VIEW ALL 50+ ROUTES
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform shadow-sm" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

