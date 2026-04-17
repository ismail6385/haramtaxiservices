"use client";

import { useState, useEffect } from "react";

export default function UrgencyTopBar() {
    const [visible, setVisible] = useState(true);
    const [bookings, setBookings] = useState(12);

    useEffect(() => {
        // Simulate live booking counter
        const interval = setInterval(() => {
            setBookings(prev => {
                const change = Math.random() > 0.6 ? 1 : 0;
                return Math.min(prev + change, 47);
            });
        }, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    if (!visible) return null;

    return (
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white text-center py-2 px-4 text-sm font-semibold relative z-[1001] flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <strong>{bookings} pilgrims</strong> booked today
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
                🕋 Umrah Season — <strong>Pre-Book Now</strong> for Fixed Prices
            </span>
            <a
                href="https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20saw%20the%20Umrah%20season%20offer.%20Need%20a%20quote%20please."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 font-black px-3 py-1 rounded-full text-xs hover:bg-yellow-100 transition-colors ml-1"
            >
                Get Quote →
            </a>
            <button
                onClick={() => setVisible(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-lg font-bold"
                aria-label="Close"
            >
                ×
            </button>
        </div>
    );
}
