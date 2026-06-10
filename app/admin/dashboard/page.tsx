'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    CheckCircle2,
    XCircle,
    TrendingUp,
    MapPin,
    Car,
    ArrowRight,
    MessageCircle,
    AlertCircle,
    DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Booking {
    id: string;
    created_at: string;
    customer_name: string;
    customer_phone: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    total_price?: number;
}

function StatCard({ label, value, icon: Icon, color, sub }: {
    label: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
    sub?: string;
}) {
    return (
        <div className="bg-brand-navy-light p-5 rounded-xl border border-slate-700/50 shadow-lg relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-28 h-28 ${color}/5 rounded-full blur-3xl -mr-8 -mt-8`}></div>
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
                <Icon className={`h-4 w-4 ${color.replace('bg-', 'text-')}`} />
            </div>
            <div className={`text-3xl font-bold ${color.replace('bg-', 'text-')} relative z-10`}>{value}</div>
            {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
        </div>
    );
}

function StatusBar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    return (
        <div className="flex items-center gap-3">
            <div className="w-20 text-xs text-slate-400 text-right shrink-0">{label}</div>
            <div className="flex-1 bg-slate-800 rounded-full h-2">
                <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }}></div>
            </div>
            <div className="w-12 text-xs text-slate-300 font-medium">{count} <span className="text-slate-500">({pct}%)</span></div>
        </div>
    );
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAndFetch = async () => {
            const { data, error } = await supabase
                .from('bookings')
                .select('id, created_at, customer_name, customer_phone, pickup_location, destination, pickup_date, pickup_time, vehicle_type, status, total_price')
                .order('created_at', { ascending: false });

            if (!error) setBookings(data || []);
            setLoading(false);
        };
        checkAndFetch();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    // — computed metrics —
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const completed = bookings.filter(b => b.status === 'completed').length;
    const cancelled = bookings.filter(b => b.status === 'cancelled').length;

    const revenue = bookings
        .filter(b => b.status === 'completed' && b.total_price)
        .reduce((sum, b) => sum + (b.total_price || 0), 0);

    // top destination
    const destCount: Record<string, number> = {};
    bookings.forEach(b => {
        if (b.destination) destCount[b.destination] = (destCount[b.destination] || 0) + 1;
    });
    const topDest = Object.entries(destCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';

    // top vehicle
    const vehCount: Record<string, number> = {};
    bookings.forEach(b => {
        if (b.vehicle_type) vehCount[b.vehicle_type] = (vehCount[b.vehicle_type] || 0) + 1;
    });
    const topVehicle = Object.entries(vehCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';

    // bookings in last 7 days
    const now = new Date();
    const week7 = bookings.filter(b => {
        const diff = (now.getTime() - new Date(b.created_at).getTime()) / (1000 * 60 * 60 * 24);
        return diff <= 7;
    }).length;

    // recent 6 bookings
    const recent = bookings.slice(0, 6);

    const statusColor = (s: string) => {
        if (s === 'confirmed') return 'bg-green-500/10 text-green-400 border-green-500/20';
        if (s === 'pending') return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
        if (s === 'completed') return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        return 'bg-red-500/10 text-red-400 border-red-500/20';
    };

    const sendWhatsApp = (b: Booking) => {
        const phone = b.customer_phone.replace(/[^0-9+]/g, '');
        const msg = encodeURIComponent(`Assalamu Alaikum ${b.customer_name},\n\nYour booking status is *${b.status.toUpperCase()}*.\nPickup: ${b.pickup_location}\nDestination: ${b.destination}\nDate: ${b.pickup_date} at ${b.pickup_time}\n\nHaram Taxi Service`);
        window.open(`https://wa.me/${phone.startsWith('+') ? phone.slice(1) : phone}?text=${msg}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                            Dashboard
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Overview &amp; quick stats</p>
                    </div>
                    {pending > 0 && (
                        <Link href="/admin/bookings">
                            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-sm font-medium hover:bg-yellow-500/20 transition-colors">
                                <AlertCircle className="w-4 h-4" />
                                {pending} pending booking{pending > 1 ? 's' : ''} need attention
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    )}
                </div>

                {/* Stat Cards — row 1 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <StatCard label="Total Bookings" value={total} icon={Calendar} color="bg-brand-gold" sub={`${week7} this week`} />
                    <StatCard label="Pending" value={pending} icon={Clock} color="bg-yellow-500" sub="Awaiting action" />
                    <StatCard label="Confirmed" value={confirmed} icon={CheckCircle2} color="bg-green-500" sub="Upcoming trips" />
                    <StatCard label="Completed" value={completed} icon={TrendingUp} color="bg-blue-500" sub="All time" />
                </div>

                {/* Stat Cards — row 2 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StatCard label="Cancelled" value={cancelled} icon={XCircle} color="bg-red-500" />
                    <StatCard
                        label="Revenue"
                        value={revenue > 0 ? `SAR ${revenue.toLocaleString()}` : '—'}
                        icon={DollarSign}
                        color="bg-emerald-500"
                        sub="Completed trips"
                    />
                    <StatCard label="Top Destination" value={topDest.length > 16 ? topDest.slice(0, 16) + '…' : topDest} icon={MapPin} color="bg-purple-500" />
                    <StatCard label="Top Vehicle" value={topVehicle} icon={Car} color="bg-cyan-500" />
                </div>

                {/* Bottom grid: status breakdown + recent bookings */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Status Breakdown */}
                    <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Booking Status</h2>
                        <div className="space-y-4">
                            <StatusBar label="Confirmed" count={confirmed} total={total} color="bg-green-500" />
                            <StatusBar label="Pending" count={pending} total={total} color="bg-yellow-500" />
                            <StatusBar label="Completed" count={completed} total={total} color="bg-blue-500" />
                            <StatusBar label="Cancelled" count={cancelled} total={total} color="bg-red-500" />
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                            <Link href="/admin/bookings">
                                <Button variant="outline" size="sm" className="w-full border-slate-700 text-slate-300 hover:text-white hover:border-brand-gold gap-2">
                                    Manage All Bookings <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Recent Bookings */}
                    <div className="md:col-span-2 bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Recent Bookings</h2>
                            <Link href="/admin/bookings" className="text-xs text-brand-gold hover:underline flex items-center gap-1">
                                View all <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {recent.length === 0 ? (
                            <div className="text-slate-500 text-sm text-center py-10">No bookings yet</div>
                        ) : (
                            <div className="space-y-3">
                                {recent.map((b) => (
                                    <div key={b.id} className="flex items-center justify-between gap-3 py-2.5 border-b border-slate-700/40 last:border-0">
                                        <div className="min-w-0 flex-1">
                                            <div className="font-medium text-sm text-white truncate">{b.customer_name}</div>
                                            <div className="text-[11px] text-slate-400 truncate mt-0.5">
                                                {b.pickup_location} → {b.destination}
                                            </div>
                                            <div className="text-[11px] text-slate-500 mt-0.5">{b.pickup_date} · {b.vehicle_type}</div>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <Badge variant="outline" className={`${statusColor(b.status)} text-[10px] uppercase tracking-wider font-bold`}>
                                                {b.status}
                                            </Badge>
                                            <button
                                                onClick={() => sendWhatsApp(b)}
                                                className="text-green-500 hover:text-green-400 transition-colors"
                                                title="Send WhatsApp"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
