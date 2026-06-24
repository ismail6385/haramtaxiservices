"use client";

import { Phone } from "lucide-react";

export default function StickyCallButton() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-[998] bg-white border-t border-gray-200 p-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
            <div className="flex-1 shrink-0 px-2 justify-center flex flex-col">
                <span className="text-xs font-black text-brand-navy">Looking for a Taxi?</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Book instantly</span>
            </div>
            <a
                href="/booking"
                className="flex-1 bg-brand-gold text-brand-navy font-black text-sm py-3 px-4 rounded-xl shadow-lg flex items-center justify-center border-b-4 border-yellow-500 active:border-b-0 active:translate-y-1 transition-all"
            >
                BOOK NOW
            </a>
        </div>
    );
}
