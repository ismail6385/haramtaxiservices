'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { MapPin, TrendingUp, Navigation } from 'lucide-react';

interface LocationStat {
    name: string;
    count: number;
    pct: number;
}

export default function LocationsPage() {
    const [destinations, setDestinations] = useState<LocationStat[]>([]);
    const [pickups, setPickups] = useState<LocationStat[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const init = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) { router.push('/admin/login'); return; }

            const { data, error } = await supabase
                .from('bookings')
                .select('destination, pickup_location');

            if (!error && data) {
                setTotal(data.length);

                const countMap = (key: 'destination' | 'pickup_location') => {
                    const m: Record<string, number> = {};
                    data.forEach(b => {
                        const v = b[key];
                        if (v) m[v] = (m[v] || 0) + 1;
                    });
                    const sorted = Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, 12);
                    const max = sorted[0]?.[1] || 1;
                    return sorted.map(([name, count]) => ({ name, count, pct: Math.round((count / max) * 100) }));
                };

                setDestinations(countMap('destination'));
                setPickups(countMap('pickup_location'));
            }
            setLoading(false);
        };
        init();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    const topDest = destinations[0]?.name ?? '—';

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                        Locations Analytics
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Top destinations and pickups from {total} bookings
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Total Bookings', value: total, color: 'text-brand-gold' },
                        { label: 'Unique Destinations', value: destinations.length, color: 'text-purple-400' },
                        { label: 'Unique Pickups', value: pickups.length, color: 'text-cyan-400' },
                        { label: 'Top Destination', value: topDest.length > 14 ? topDest.slice(0, 14) + '…' : topDest, color: 'text-green-400' },
                    ].map(s => (
                        <div key={s.label} className="bg-brand-navy-light p-5 rounded-xl border border-slate-700/50">
                            <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">{s.label}</div>
                            <div className={`text-xl font-bold ${s.color} truncate`}>{s.value}</div>
                        </div>
                    ))}
                </div>

                {/* Two columns: destinations + pickups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Top Destinations */}
                    <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <MapPin className="w-4 h-4 text-brand-gold" />
                            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Top Destinations</h2>
                        </div>
                        {destinations.length === 0 ? (
                            <div className="text-slate-500 text-sm py-8 text-center">No booking data yet</div>
                        ) : (
                            <div className="space-y-3">
                                {destinations.map((d, i) => (
                                    <div key={d.name} className="flex items-center gap-3">
                                        <div className="text-xs text-slate-500 w-5 text-right font-mono">{i + 1}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-white truncate max-w-[180px]">{d.name}</span>
                                                <span className="text-xs text-brand-gold font-medium ml-2 shrink-0">{d.count}</span>
                                            </div>
                                            <div className="bg-slate-800 rounded-full h-1.5">
                                                <div
                                                    className="bg-brand-gold h-1.5 rounded-full transition-all duration-500"
                                                    style={{ width: `${d.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Top Pickups */}
                    <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <Navigation className="w-4 h-4 text-cyan-400" />
                            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Top Pickup Locations</h2>
                        </div>
                        {pickups.length === 0 ? (
                            <div className="text-slate-500 text-sm py-8 text-center">No booking data yet</div>
                        ) : (
                            <div className="space-y-3">
                                {pickups.map((d, i) => (
                                    <div key={d.name} className="flex items-center gap-3">
                                        <div className="text-xs text-slate-500 w-5 text-right font-mono">{i + 1}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-white truncate max-w-[180px]">{d.name}</span>
                                                <span className="text-xs text-cyan-400 font-medium ml-2 shrink-0">{d.count}</span>
                                            </div>
                                            <div className="bg-slate-800 rounded-full h-1.5">
                                                <div
                                                    className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500"
                                                    style={{ width: `${d.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Data is live from Supabase bookings table. Bars show relative frequency.
                </div>
            </div>
        </div>
    );
}
