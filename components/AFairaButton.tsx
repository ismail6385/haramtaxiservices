"use client";

import { Crown, PartyPopper } from "lucide-react";
import { useState } from "react";

export default function AFairaButton() {
    const [showCongrats, setShowCongrats] = useState(false);

    const handleClick = () => {
        setShowCongrats(true);
        // Hide after 4 seconds
        setTimeout(() => setShowCongrats(false), 4000);
    };

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[1000] hidden lg:block">
            {/* Congrats Message Overlay */}
            {showCongrats && (
                <div className="absolute left-16 top-1/2 -translate-y-1/2 ml-4 bg-white p-6 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-brand-gold/20 animate-in fade-in zoom-in slide-in-from-left-8 duration-500 flex items-center gap-6 whitespace-nowrap z-[1001]">
                    <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-gold shadow-xl rotate-3">
                        <PartyPopper className="w-8 h-8" />
                    </div>
                    <div className="pr-4">
                        <div className="flex items-center gap-2 mb-1">
                             <span className="text-2xl">🎉</span>
                             <h4 className="font-display font-black text-2xl text-brand-navy leading-none tracking-tight">WELCOME TO AFAIRA!</h4>
                        </div>
                        <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">Congrats on choosing the best service ✨</p>
                    </div>
                    
                    {/* Decorative Dot */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-l border-b border-brand-gold/10" />
                </div>
            )}

            <button
                onClick={handleClick}
                className={`group relative flex items-center bg-brand-navy text-white py-12 px-2 rounded-r-[2rem] border-y border-r border-brand-gold/30 shadow-[10px_0_30px_rgba(0,0,0,0.3)] hover:pr-8 hover:bg-brand-navy-light transition-all duration-500 overflow-hidden ${showCongrats ? 'pr-8 bg-brand-navy-light' : ''}`}
            >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <div className="flex flex-col items-center gap-6 relative z-10">
                    <Crown className={`w-5 h-5 text-brand-gold transition-all duration-500 ${showCongrats ? 'scale-125 rotate-[360deg]' : 'group-hover:rotate-12'}`} />
                    <span 
                        className="font-display font-black uppercase tracking-[0.4em] text-xs [writing-mode:vertical-lr] rotate-180"
                    >
                        AFaira
                    </span>
                </div>
                
                {/* Expand Indicator */}
                <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${showCongrats ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                   <div className="w-1 h-20 bg-brand-gold rounded-full animate-pulse" />
                </div>
            </button>
        </div>
    );
}
