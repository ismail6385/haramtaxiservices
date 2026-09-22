'use client';

import { useEffect, useState, useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Booking {
    id: string;
    customer_name: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    status: string;
    vehicle_type: string;
    total_price?: number;
}

const STATUS_COLORS: Record<string, string> = {
    pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    confirmed: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    completed: 'bg-green-500/20 text-green-300 border-green-500/30',
    cancelled: 'bg-red-500/20 text-red-300 border-red-500/30',
};

const STATUS_DOT: Record<string, string> = {
    pending: 'bg-yellow-400',
    confirmed: 'bg-blue-400',
    completed: 'bg-green-400',
    cancelled: 'bg-red-400',
};

export default function CalendarPage() {
    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), []);

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [view, setView] = useState<'month' | 'week'>('month');

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            const { data } = await supabase
                .from('bookings')
                .select('id, customer_name, pickup_location, destination, pickup_date, pickup_time, status, vehicle_type, total_price')
                .order('pickup_date');
            if (data) setBookings(data);
            setLoading(false);
        };
        load();
    }, [supabase]);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // Month grid
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarCells: (number | null)[] = [
        ...Array(firstDay).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    while (calendarCells.length % 7 !== 0) calendarCells.push(null);

    const bookingsByDate = useMemo(() => {
        const map: Record<string, Booking[]> = {};
        bookings.forEach(b => {
            if (!map[b.pickup_date]) map[b.pickup_date] = [];
            map[b.pickup_date].push(b);
        });
        return map;
    }, [bookings]);

    const dateStr = (day: number) => {
        const m = String(month + 1).padStart(2, '0');
        const d = String(day).padStart(2, '0');
        return `${year}-${m}-${d}`;
    };

    const selectedBookings = selectedDate ? (bookingsByDate[selectedDate] || []) : [];
    const today = new Date().toISOString().split('T')[0];

    const prevMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
    const nextMonth = () => setViewDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));

    const monthLabel = viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

    // Week view helpers
    const getWeekDays = () => {
        const monday = new Date(viewDate);
        const day = monday.getDay();
        monday.setDate(monday.getDate() - (day === 0 ? 6 : day - 1));
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date(monday);
            d.setDate(monday.getDate() + i);
            return d;
        });
    };

    const weekDays = view === 'week' ? getWeekDays() : [];

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                            Calendar
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            {bookings.length} bookings total
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* View toggle */}
                        <div className="flex bg-neutral-800 rounded-lg p-0.5">
                            {(['month', 'week'] as const).map(v => (
                                <button key={v} onClick={() => setView(v)}
                                    className={cn('px-3 py-1.5 rounded-md text-xs font-semibold transition-colors capitalize', view === v ? 'bg-brand-gold text-brand-navy' : 'text-neutral-400 hover:text-white')}>
                                    {v}
                                </button>
                            ))}
                        </div>
                        {/* Nav */}
                        <div className="flex items-center gap-2">
                            <button onClick={prevMonth} className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-semibold w-36 text-center">{monthLabel}</span>
                            <button onClick={nextMonth} className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <button onClick={() => setViewDate(new Date())}
                            className="text-xs text-brand-gold border border-brand-gold/30 px-3 py-1.5 rounded-lg hover:bg-brand-gold/10 transition-colors">
                            Today
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Calendar */}
                    <div className={cn('lg:col-span-2 bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden', loading && 'opacity-60')}>
                        {/* Day headers */}
                        <div className="grid grid-cols-7 border-b border-slate-800">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                <div key={d} className="py-2.5 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {d}
                                </div>
                            ))}
                        </div>

                        {view === 'month' ? (
                            <div className="grid grid-cols-7">
                                {calendarCells.map((day, i) => {
                                    if (!day) return <div key={`empty-${i}`} className="h-24 border-b border-r border-slate-800/50" />;
                                    const ds = dateStr(day);
                                    const dayBookings = bookingsByDate[ds] || [];
                                    const isToday = ds === today;
                                    const isSelected = ds === selectedDate;
                                    return (
                                        <div
                                            key={ds}
                                            onClick={() => setSelectedDate(isSelected ? null : ds)}
                                            className={cn(
                                                'h-24 border-b border-r border-slate-800/50 p-1.5 cursor-pointer transition-colors hover:bg-slate-800/30',
                                                isSelected && 'bg-brand-gold/10 border-brand-gold/20',
                                                isToday && !isSelected && 'bg-blue-500/5'
                                            )}
                                        >
                                            <div className={cn(
                                                'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-1',
                                                isToday ? 'bg-brand-gold text-brand-navy' : 'text-slate-400'
                                            )}>
                                                {day}
                                            </div>
                                            <div className="space-y-0.5 overflow-hidden">
                                                {dayBookings.slice(0, 3).map(b => (
                                                    <div key={b.id} className={cn('text-[9px] px-1 py-0.5 rounded truncate border', STATUS_COLORS[b.status])}>
                                                        {b.pickup_time} {b.customer_name.split(' ')[0]}
                                                    </div>
                                                ))}
                                                {dayBookings.length > 3 && (
                                                    <div className="text-[9px] text-slate-500 px-1">+{dayBookings.length - 3} more</div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            // Week view
                            <div className="grid grid-cols-7">
                                {weekDays.map(wd => {
                                    const ds = wd.toISOString().split('T')[0];
                                    const dayBookings = bookingsByDate[ds] || [];
                                    const isToday = ds === today;
                                    const isSelected = ds === selectedDate;
                                    return (
                                        <div key={ds}
                                            onClick={() => setSelectedDate(isSelected ? null : ds)}
                                            className={cn(
                                                'min-h-40 border-r border-slate-800/50 p-2 cursor-pointer hover:bg-slate-800/30 transition-colors',
                                                isSelected && 'bg-brand-gold/10',
                                                isToday && !isSelected && 'bg-blue-500/5'
                                            )}>
                                            <div className={cn('w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-2',
                                                isToday ? 'bg-brand-gold text-brand-navy' : 'text-slate-400')}>
                                                {wd.getDate()}
                                            </div>
                                            <div className="space-y-1">
                                                {dayBookings.map(b => (
                                                    <div key={b.id} className={cn('text-[10px] px-1.5 py-1 rounded border', STATUS_COLORS[b.status])}>
                                                        <div className="font-semibold">{b.pickup_time}</div>
                                                        <div className="truncate">{b.customer_name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Side panel */}
                    <div className="space-y-4">
                        {/* Legend */}
                        <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-4">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Status Legend</p>
                            <div className="space-y-2">
                                {Object.entries(STATUS_DOT).map(([s, dot]) => (
                                    <div key={s} className="flex items-center gap-2">
                                        <span className={cn('w-2.5 h-2.5 rounded-full', dot)} />
                                        <span className="text-sm text-slate-300 capitalize">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Monthly stats */}
                        <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-4">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">This Month</p>
                            {(() => {
                                const monthBookings = bookings.filter(b => {
                                    const d = new Date(b.pickup_date);
                                    return d.getMonth() === month && d.getFullYear() === year;
                                });
                                const revenue = monthBookings.reduce((s, b) => s + (b.total_price || 0), 0);
                                return (
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm"><span className="text-slate-400">Total Trips</span><span className="font-bold">{monthBookings.length}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-slate-400">Confirmed</span><span className="font-bold text-blue-400">{monthBookings.filter(b => b.status === 'confirmed').length}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-slate-400">Completed</span><span className="font-bold text-green-400">{monthBookings.filter(b => b.status === 'completed').length}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-slate-400">Revenue</span><span className="font-bold text-brand-gold">SAR {revenue.toLocaleString()}</span></div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* Selected day bookings */}
                        {selectedDate && (
                            <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        {new Date(selectedDate + 'T00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                                    </p>
                                    <button onClick={() => setSelectedDate(null)} className="text-slate-600 hover:text-slate-400 text-xs">✕</button>
                                </div>
                                {selectedBookings.length === 0 ? (
                                    <div className="text-center py-4 text-slate-600">
                                        <Calendar className="w-6 h-6 mx-auto mb-2 opacity-30" />
                                        <p className="text-xs">No bookings this day</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {selectedBookings
                                            .sort((a, b) => a.pickup_time.localeCompare(b.pickup_time))
                                            .map(b => (
                                                <div key={b.id} className={cn('p-3 rounded-lg border', STATUS_COLORS[b.status])}>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs font-bold">{b.pickup_time}</span>
                                                        <span className="text-[10px] capitalize opacity-70">{b.status}</span>
                                                    </div>
                                                    <div className="text-sm font-semibold">{b.customer_name}</div>
                                                    <div className="text-[11px] opacity-70 mt-0.5">{b.pickup_location} → {b.destination}</div>
                                                    <div className="text-[10px] opacity-50 mt-0.5">{b.vehicle_type}</div>
                                                    {b.total_price && <div className="text-xs font-bold mt-1">SAR {b.total_price.toLocaleString()}</div>}
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
