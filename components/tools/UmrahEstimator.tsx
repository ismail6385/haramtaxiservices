"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Map, CheckCircle2 } from 'lucide-react';

const PACKAGES = [
    { id: 'full', name: 'Full Umrah Route', desc: 'Jeddah → Makkah → Madinah → Jeddah' },
    { id: 'makkah_only', name: 'Makkah Only', desc: 'Jeddah → Makkah → Jeddah' },
    { id: 'madinah_first', name: 'Madinah First', desc: 'Madinah → Makkah → Jeddah' },
];

export default function UmrahEstimator() {
    const [groupSize, setGroupSize] = useState('small'); // small (Sedan), medium (GMC), large (Hiace)
    const [route, setRoute] = useState('full');
    const [ziyarat, setZiyarat] = useState(false);
    const [estimate, setEstimate] = useState<number | null>(null);

    const calculate = () => {
        let vehicle = 'Sedan';
        if (groupSize === 'medium') vehicle = 'GMC Yukon';
        if (groupSize === 'large') vehicle = 'Hiace';

        setEstimate(1);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-2xl mx-auto">
            <div className="bg-slate-900 p-6 text-white text-center">
                <Map className="w-10 h-10 mx-auto mb-2 opacity-90" />
                <h2 className="text-2xl font-bold">Umrah Transport Budget Planner</h2>
                <p className="text-slate-200 text-sm">Estimate total transport costs for your group</p>
            </div>

            <div className="p-8 space-y-8">
                {/* Group Size */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Group Size</label>
                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => setGroupSize('small')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'small' ? 'border-slate-600 bg-slate-50' : 'border-gray-100 hover:border-slate-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">Get Quote Pax</div>
                            <div className="text-xs text-gray-400">Sedan</div>
                        </button>
                        <button onClick={() => setGroupSize('medium')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'medium' ? 'border-slate-600 bg-slate-50' : 'border-gray-100 hover:border-slate-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">Get Quote Pax</div>
                            <div className="text-xs text-gray-400">GMC Yukon</div>
                        </button>
                        <button onClick={() => setGroupSize('large')} className={`p-4 rounded-xl border-2 text-center transition-all ${groupSize === 'large' ? 'border-slate-600 bg-slate-50' : 'border-gray-100 hover:border-slate-200'}`}>
                            <Users className="w-6 h-6 mx-auto mb-2 text-gray-500" />
                            <div className="font-semibold text-sm">Get Quote Pax</div>
                            <div className="text-xs text-gray-400">Hiace</div>
                        </button>
                    </div>
                </div>

                {/* Route */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Travel Route</label>
                    <div className="space-y-2">
                        {PACKAGES.map(pkg => (
                            <div key={pkg.id} onClick={() => setRoute(pkg.id)} className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${route === pkg.id ? 'border-slate-600 bg-slate-50' : 'border-gray-100'}`}>
                                <div>
                                    <div className="font-semibold text-gray-900">{pkg.name}</div>
                                    <div className="text-xs text-gray-500">{pkg.desc}</div>
                                </div>
                                {route === pkg.id && <CheckCircle2 className="w-5 h-5 text-slate-600" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extras */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <input
                        type="checkbox"
                        checked={ziyarat}
                        onChange={(e) => setZiyarat(e.target.checked)}
                        className="w-5 h-5 text-slate-600 rounded focus:ring-teal-500 border-gray-300"
                    />
                    <div>
                        <div className="font-medium text-gray-900">Include Ziyarat Tours?</div>
                        <div className="text-xs text-gray-500">Add visits to holy sites in each city</div>
                    </div>
                </div>

                <Button onClick={calculate} className="w-full bg-slate-800 hover:bg-slate-900 h-12 text-lg">
                    Calculate Total Cost
                </Button>

                {estimate !== null && (
                    <div className="bg-slate-900 text-white p-6 rounded-xl text-center animate-in zoom-in-95">
                        <div className="text-slate-200 text-sm mb-1">Your Trip Summary is Ready</div>
                        <div className="text-xl font-bold mb-3">Contact us for your fixed quote</div>
                        <a
                            href={`https://wa.me/966575806733?text=${encodeURIComponent('Salam, I would like a quote for my Umrah transport.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#25D366] text-white font-black px-6 py-3 rounded-xl text-sm hover:bg-[#20BD5A] transition-colors"
                        >
                            WhatsApp Us for Quote
                        </a>
                        <p className="text-xs text-slate-300/80 mt-3">Fixed rates • No hidden fees • Instant confirmation</p>
                    </div>
                )}
            </div>
        </div>
    );
}
