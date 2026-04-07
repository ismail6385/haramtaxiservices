"use client";

import { useState } from "react";
import { CheckCircle2, Car, Users, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Data Structure for Pricing
const pricingData = {
    camry: {
        title: "Toyota Camry",
        type: "Sedan",
        capacity: "4 Pax",
        luggage: "2 Bags",
        icon: Car,
        rates: [
            { route: "Jeddah Airport Transfer", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam & Khobar City Ride", price: "Get Quote" },
            { route: "Makkah <-> Madinah Intercity", price: "Get Quote" },
            { route: "Tabuk to Jordan Border", price: "Get Quote" },
            { route: "City Ziyarat & Heritage Tour", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Cross Border & Causeway Transfer", price: "Get Quote" },
            { route: "Full Day Hourly Chauffeur", price: "Get Quote" },
        ]
    },
    staria: {
        title: "Hyundai Staria / Starex",
        type: "Family Van",
        capacity: "7 Pax",
        luggage: "5 Bags",
        icon: Users,
        rates: [
            { route: "Jeddah Airport Transfer", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam & Khobar City Ride", price: "Get Quote" },
            { route: "Makkah <-> Madinah Intercity", price: "Get Quote" },
            { route: "Tabuk to Jordan Border", price: "Get Quote" },
            { route: "City Ziyarat & Heritage Tour", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Cross Border & Causeway Transfer", price: "Get Quote" },
            { route: "Full Day Hourly Chauffeur", price: "Get Quote" },
        ]
    },
    gmc: {
        title: "GMC Yukon XL / Suburban",
        type: "VIP SUV",
        capacity: "7 Pax",
        luggage: "6 Bags",
        icon: Briefcase,
        rates: [
            { route: "Jeddah Airport Transfer", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam & Khobar City Ride", price: "Get Quote" },
            { route: "Makkah <-> Madinah Intercity", price: "Get Quote" },
            { route: "Tabuk to Jordan Border", price: "Get Quote" },
            { route: "City Ziyarat & Heritage Tour", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Cross Border & Causeway Transfer", price: "Get Quote" },
            { route: "Full Day Hourly Chauffeur", price: "Get Quote" },
        ]
    },
    hiace: {
        title: "Toyota Hiace",
        type: "Minibus",
        capacity: "11 Pax",
        luggage: "10 Bags",
        icon: Users,
        rates: [
            { route: "Jeddah Airport Transfer", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam & Khobar City Ride", price: "Get Quote" },
            { route: "Makkah <-> Madinah Intercity", price: "Get Quote" },
            { route: "Tabuk to Jordan Border", price: "Get Quote" },
            { route: "City Ziyarat & Heritage Tour", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Cross Border & Causeway Transfer", price: "Get Quote" },
            { route: "Full Day Hourly Chauffeur", price: "Get Quote" },
        ]
    },
    coaster: {
        title: "Toyota Coaster",
        type: "Bus",
        capacity: "17 Pax",
        luggage: "15 Bags",
        icon: Users,
        rates: [
            { route: "Jeddah Airport Transfer", price: "Get Quote" },
            { route: "Riyadh Airport Transfer", price: "Get Quote" },
            { route: "Dammam & Khobar City Ride", price: "Get Quote" },
            { route: "Makkah <-> Madinah Intercity", price: "Get Quote" },
            { route: "Tabuk to Jordan Border", price: "Get Quote" },
            { route: "City Ziyarat & Heritage Tour", price: "Get Quote" },
            { route: "NEOM & Project Sites", price: "Get Quote" },
            { route: "Cross Border & Causeway Transfer", price: "Get Quote" },
            { route: "Full Day Hourly Chauffeur", price: "Get Quote" },
        ]
    }
};

type VehicleKey = keyof typeof pricingData;

export default function PricingPreview() {
    const [activeTab, setActiveTab] = useState<VehicleKey>('camry');

    const activeData = pricingData[activeTab];

    return (
        <section className="py-20 bg-white" id="pricing" aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 id="pricing-heading" className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Our Executive Fleet & Service Areas</h2>
                    <p className="text-xl text-gray-600">Fixed Rates. No Hidden Charges. <span className="text-brand-gold font-semibold">Best Price Guaranteed.</span></p>
                </div>

                {/* Vehicle Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {(Object.keys(pricingData) as VehicleKey[]).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border-2 ${activeTab === key
                                ? "bg-brand-navy border-brand-navy text-white shadow-lg scale-105"
                                : "bg-white border-gray-100 text-gray-600 hover:border-brand-navy-light hover:bg-brand-navy-pale hover:text-brand-navy-light"
                                }`}
                        >
                            {pricingData[key].title}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Vehicle Card - Left Column */}
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl border border-brand-navy-pale overflow-hidden sticky top-24 ring-1 ring-gray-900/5">
                        <div className="bg-brand-navy p-8 text-white text-center relative overflow-hidden">
                            {/* Abstract bg pattern */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                            <activeData.icon className="w-16 h-16 mx-auto mb-4 opacity-90 relative z-10" />
                            <h3 className="text-2xl font-display font-bold relative z-10">{activeData.title}</h3>
                            <p className="opacity-90 font-medium tracking-wide text-sm uppercase mt-1 relative z-10">{activeData.type}</p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                <span className="text-gray-600 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-brand-navy" /> Max Passengers
                                </span>
                                <span className="font-bold text-gray-900 text-lg">{activeData.capacity}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                <span className="text-gray-600 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-brand-navy" /> Max Luggage
                                </span>
                                <span className="font-bold text-gray-900 text-lg">{activeData.luggage}</span>
                            </div>
                            <div className="pt-4">
                                <Link href="/booking" className="block">
                                    <Button className="w-full bg-brand-gold hover:bg-brand-gold-light text-white h-14 text-lg font-bold shadow-lg shadow-brand-gold/20 hover:shadow-xl transition-all">
                                        Book This Vehicle
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                                    <CheckCircle2 className="w-3 h-3 text-brand-navy" />
                                    Instant confirmation via WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rates Table - Right Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ring-1 ring-gray-900/5">
                            <div className="grid grid-cols-1 divide-y divide-gray-50">
                                {activeData.rates.map((rate, idx) => (
                                    <div key={idx} className="p-5 flex flex-col sm:flex-row justify-between items-center hover:bg-brand-navy-pale/30 transition-colors group">
                                        <div className="flex items-center gap-4 mb-2 sm:mb-0 w-full sm:w-auto">
                                            <div className="w-2 h-2 rounded-full bg-brand-navy-light opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                                            <span className="font-medium text-gray-700 text-lg group-hover:text-brand-navy-light transition-colors">{rate.route}</span>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pl-6 sm:pl-0 border-l-2 sm:border-l-0 border-brand-navy-pale sm:border-transparent">
                                            <span className="font-display font-bold text-2xl text-brand-navy">{rate.price}</span>
                                            <Link href="/booking">
                                                <Button size="sm" variant="outline" className="flex border-brand-navy-light text-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
                                                    Book
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Link href="/pricing" className="text-brand-navy font-semibold hover:text-brand-navy-light flex items-center gap-2 text-sm group transition-all">
                                View Full Pricing & Terms
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
