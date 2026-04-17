"use client";

import { useState, useEffect } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

export default function LeadCapturePopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    // Show timed popup after 12 seconds
    useEffect(() => {
        const alreadySeen = sessionStorage.getItem("haram_popup_seen");
        if (alreadySeen) return;

        const timer = setTimeout(() => {
            setShowPopup(true);
            sessionStorage.setItem("haram_popup_seen", "true");
        }, 12000);

        return () => clearTimeout(timer);
    }, []);

    // Exit intent detection (mouse leaves viewport top)
    useEffect(() => {
        const alreadyExited = sessionStorage.getItem("haram_exit_seen");
        if (alreadyExited) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !dismissed) {
                setShowExitPopup(true);
                sessionStorage.setItem("haram_exit_seen", "true");
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [dismissed]);

    const closePopup = () => {
        setShowPopup(false);
        setDismissed(true);
    };

    const closeExitPopup = () => {
        setShowExitPopup(false);
        setDismissed(true);
    };

    const whatsappUrl = "https://wa.me/966575806733?text=Assalamu%20Alaikum%2C%20I%20need%20a%20taxi%20quote%20please.";

    return (
        <>
            {/* ===== TIMED POPUP (After 12 seconds) ===== */}
            {showPopup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn px-4">
                    <div className="relative bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-amber-400/30">
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 text-white/60 hover:text-white text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center"
                            aria-label="Close"
                        >×</button>

                        {/* Gold Badge */}
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 px-4 text-sm font-bold tracking-wider uppercase">
                            🕋 Limited Umrah Season Offer
                        </div>

                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                                <WhatsAppIcon className="w-9 h-9 text-white" />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2">
                                Get Your Free Taxi Quote
                            </h3>
                            <p className="text-white/70 text-sm mb-4">
                                Flat fixed prices. No hidden fees. Pay only after safe arrival at your hotel.
                            </p>

                            {/* Trust Points */}
                            <div className="space-y-2 text-left mb-5">
                                {[
                                    "✅ VIP Vehicles: GMC Yukon, Staria, Camry",
                                    "✅ English & Urdu Speaking Drivers",
                                    "✅ 24/7 Airport Pickup — Zero Wait Fees",
                                    "✅ Pay After Arrival — No Upfront Payment"
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white/90 text-sm bg-white/5 rounded-lg px-3 py-2">
                                        {point}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-green-500/30"
                            >
                                💬 Get Instant Quote on WhatsApp
                            </a>

                            <p className="text-white/40 text-xs mt-3">
                                Trusted by 5,000+ pilgrims • Response in under 2 minutes
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== EXIT INTENT POPUP ===== */}
            {showExitPopup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn px-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={closeExitPopup}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center"
                            aria-label="Close"
                        >×</button>

                        {/* Red Urgency Banner */}
                        <div className="bg-red-600 text-white text-center py-3 px-4">
                            <p className="text-sm font-bold uppercase tracking-wider">
                                ⚠️ Wait! Don&apos;t Book an Unknown Taxi
                            </p>
                        </div>

                        <div className="p-6 text-center">
                            <h3 className="text-xl font-black text-gray-900 mb-2">
                                Avoid Jeddah Airport Scams
                            </h3>
                            <p className="text-gray-600 text-sm mb-5">
                                Random airport taxis overcharge by <strong className="text-red-600">200-300%</strong>.
                                Pre-book with us and get a <strong>guaranteed fixed price</strong> with no surprises.
                            </p>

                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                                <p className="text-amber-800 font-bold text-sm">
                                    🎁 Pre-book now and get FREE flight tracking + zero wait fees!
                                </p>
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-black py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg"
                            >
                                ✅ Yes, Get My Safe Fixed Quote
                            </a>

                            <button
                                onClick={closeExitPopup}
                                className="text-gray-400 text-xs mt-3 underline hover:text-gray-600"
                            >
                                No thanks, I&apos;ll risk the airport taxis
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
