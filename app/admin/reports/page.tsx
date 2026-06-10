'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { TrendingUp, DollarSign, CalendarDays, Car, Download, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Booking {
    id: string;
    created_at: string;
    pickup_date: string;
    status: string;
    total_price?: number;
    vehicle_type: string;
    pickup_location: string;
    destination: string;
}

interface MonthStat {
    month: string;
    total: number;
    completed: number;
    revenue: number;
}

export default function ReportsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [exporting, setExporting] = useState(false);
    const reportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const init = async () => {
            const { data, error } = await supabase
                .from('bookings')
                .select('id, created_at, pickup_date, status, total_price, vehicle_type, pickup_location, destination')
                .order('created_at', { ascending: false });
            if (!error) setBookings(data || []);
            setLoading(false);
        };
        init();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    // — monthly breakdown (last 6 months) —
    const monthStats: MonthStat[] = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        const year = d.getFullYear();
        const month = d.getMonth();
        const label = d.toLocaleString('en-US', { month: 'short', year: '2-digit' });
        const monthBookings = bookings.filter(b => {
            const bd = new Date(b.created_at);
            return bd.getFullYear() === year && bd.getMonth() === month;
        });
        const completed = monthBookings.filter(b => b.status === 'completed');
        const revenue = completed.reduce((s, b) => s + (b.total_price || 0), 0);
        monthStats.push({ month: label, total: monthBookings.length, completed: completed.length, revenue });
    }

    // — vehicle breakdown —
    const vehMap: Record<string, { count: number; revenue: number }> = {};
    bookings.forEach(b => {
        if (!vehMap[b.vehicle_type]) vehMap[b.vehicle_type] = { count: 0, revenue: 0 };
        vehMap[b.vehicle_type].count++;
        if (b.status === 'completed') vehMap[b.vehicle_type].revenue += b.total_price || 0;
    });
    const vehStats = Object.entries(vehMap).sort((a, b) => b[1].count - a[1].count);

    // — route breakdown —
    const routeMap: Record<string, { count: number; revenue: number; completed: number }> = {};
    bookings.forEach(b => {
        const key = `${b.pickup_location}||${b.destination}`;
        if (!routeMap[key]) routeMap[key] = { count: 0, revenue: 0, completed: 0 };
        routeMap[key].count++;
        if (b.status === 'completed') {
            routeMap[key].completed++;
            routeMap[key].revenue += b.total_price || 0;
        }
    });
    const routeStats = Object.entries(routeMap)
        .sort((a, b) => b[1].revenue - a[1].revenue)
        .slice(0, 10);

    // — totals —
    const totalRevenue = bookings.filter(b => b.status === 'completed').reduce((s, b) => s + (b.total_price || 0), 0);
    const completionRate = bookings.length > 0 ? Math.round((bookings.filter(b => b.status === 'completed').length / bookings.length) * 100) : 0;
    const cancellationRate = bookings.length > 0 ? Math.round((bookings.filter(b => b.status === 'cancelled').length / bookings.length) * 100) : 0;
    const avgRevenue = bookings.filter(b => b.status === 'completed' && b.total_price).length > 0
        ? Math.round(totalRevenue / bookings.filter(b => b.status === 'completed' && b.total_price).length)
        : 0;

    const maxMonthTotal = Math.max(...monthStats.map(m => m.total), 1);
    const maxVehCount = vehStats[0]?.[1].count || 1;
    const maxRouteRevenue = routeStats[0]?.[1].revenue || 1;

    const handleExportPDF = async () => {
        if (!reportRef.current) return;
        setExporting(true);
        try {
            const { downloadPDF } = await import('../bookings/downloadPDF');
            const today = new Date().toISOString().split('T')[0];
            await downloadPDF(reportRef.current, `Report-HaramTaxi-${today}.pdf`);
        } catch {
            toast.error('Export failed');
        } finally {
            setExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                            Reports
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Revenue & booking analytics</p>
                    </div>
                    <Button onClick={handleExportPDF} disabled={exporting}
                        className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold gap-2">
                        {exporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        Export PDF
                    </Button>
                </div>

                {/* PDF capture area */}
                <div ref={reportRef} className="space-y-6">

                    {/* Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Total Revenue', value: totalRevenue > 0 ? `SAR ${totalRevenue.toLocaleString()}` : '—', icon: DollarSign, color: 'text-emerald-400' },
                            { label: 'Avg per Trip', value: avgRevenue > 0 ? `SAR ${avgRevenue}` : '—', icon: TrendingUp, color: 'text-blue-400' },
                            { label: 'Completion Rate', value: `${completionRate}%`, icon: CalendarDays, color: 'text-green-400' },
                            { label: 'Cancellation Rate', value: `${cancellationRate}%`, icon: Car, color: 'text-red-400' },
                        ].map(s => (
                            <div key={s.label} className="bg-brand-navy-light p-5 rounded-xl border border-slate-700/50">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</span>
                                    <s.icon className={`w-4 h-4 ${s.color}`} />
                                </div>
                                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Monthly booking chart */}
                        <div className="md:col-span-2 bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">Monthly Bookings (Last 6 Months)</h2>
                            <div className="flex items-end gap-3 h-40">
                                {monthStats.map((m) => (
                                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                                        <span className="text-xs text-brand-gold font-medium">{m.total > 0 ? m.total : ''}</span>
                                        <div className="w-full flex flex-col justify-end" style={{ height: '100px' }}>
                                            <div
                                                className="w-full bg-brand-gold/70 rounded-t-md transition-all duration-500"
                                                style={{ height: `${Math.max((m.total / maxMonthTotal) * 100, m.total > 0 ? 6 : 0)}px` }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-slate-500 mt-1">{m.month}</span>
                                        {m.revenue > 0 && <span className="text-[9px] text-emerald-500">SAR {m.revenue}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vehicle breakdown */}
                        <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">By Vehicle</h2>
                            {vehStats.length === 0 ? (
                                <div className="text-slate-500 text-sm py-8 text-center">No data</div>
                            ) : (
                                <div className="space-y-4">
                                    {vehStats.map(([name, stat]) => (
                                        <div key={name}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-white truncate max-w-[130px]">{name}</span>
                                                <span className="text-xs text-brand-gold font-medium">{stat.count} trips</span>
                                            </div>
                                            <div className="bg-slate-800 rounded-full h-1.5">
                                                <div className="bg-brand-gold h-1.5 rounded-full" style={{ width: `${(stat.count / maxVehCount) * 100}%` }} />
                                            </div>
                                            {stat.revenue > 0 && (
                                                <div className="text-[10px] text-emerald-500 mt-0.5">SAR {stat.revenue.toLocaleString()} revenue</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Revenue by Route */}
                    <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-6">
                        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Revenue by Route (Top 10)</h2>
                        {routeStats.length === 0 ? (
                            <div className="text-slate-500 text-sm py-4 text-center">No route data available</div>
                        ) : (
                            <div className="space-y-3">
                                {routeStats.map(([key, stat], i) => {
                                    const [from, to] = key.split('||');
                                    return (
                                        <div key={key} className="flex items-center gap-4">
                                            <span className="text-xs text-slate-600 w-5 text-right">{i + 1}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    <span className="text-xs text-green-400 truncate max-w-[140px]">{from}</span>
                                                    <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                                                    <span className="text-xs text-red-400 truncate max-w-[140px]">{to}</span>
                                                </div>
                                                <div className="bg-slate-800 rounded-full h-1.5">
                                                    <div className="bg-emerald-500/60 h-1.5 rounded-full transition-all"
                                                        style={{ width: `${(stat.revenue / maxRouteRevenue) * 100}%` }} />
                                                </div>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <div className="text-sm font-bold text-emerald-400">
                                                    {stat.revenue > 0 ? `SAR ${stat.revenue.toLocaleString()}` : '—'}
                                                </div>
                                                <div className="text-[10px] text-slate-500">{stat.count} trips · {stat.completed} done</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Monthly table */}
                    <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-black/30 border-b border-slate-800">
                                <tr>
                                    {['Month', 'Total Bookings', 'Completed', 'Completion %', 'Revenue (SAR)'].map(h => (
                                        <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {[...monthStats].reverse().map((m, i) => (
                                    <tr key={m.month} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                                        <td className="px-5 py-3 font-medium text-white">{m.month}</td>
                                        <td className="px-5 py-3 text-slate-300">{m.total}</td>
                                        <td className="px-5 py-3 text-slate-300">{m.completed}</td>
                                        <td className="px-5 py-3 text-slate-300">
                                            {m.total > 0 ? `${Math.round((m.completed / m.total) * 100)}%` : '—'}
                                        </td>
                                        <td className="px-5 py-3 text-emerald-400 font-mono">
                                            {m.revenue > 0 ? m.revenue.toLocaleString() : '—'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
}
