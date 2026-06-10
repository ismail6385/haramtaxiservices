'use client';

import { useEffect, useState, useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    DollarSign, Plus, Trash2, Loader2, Save, ArrowRight,
    RefreshCw, TrendingUp,
} from 'lucide-react';
import { toast } from 'sonner';

interface RoutePrice {
    id: string;
    pickup_location: string;
    destination: string;
    vehicle_type: string;
    price: number;
    created_at: string;
}

const VEHICLE_TYPES = ['Economy', 'Standard', 'Premium', 'Business', 'VIP', 'Minibus', 'Bus'];

const POPULAR_ROUTES = [
    { from: 'Jeddah Airport', to: 'Makkah Hotel' },
    { from: 'Makkah Hotel', to: 'Madinah Hotel' },
    { from: 'Makkah Hotel', to: 'Jeddah Airport' },
    { from: 'Madinah Hotel', to: 'Jeddah Airport' },
    { from: 'Makkah Hotel', to: 'Makkah Train Station' },
    { from: 'Madinah Hotel', to: 'Madinah Train Station' },
    { from: 'Madinah Hotel', to: 'Madinah Airport' },
];

const SETUP_SQL = `CREATE TABLE IF NOT EXISTS route_prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pickup_location TEXT NOT NULL,
  destination TEXT NOT NULL,
  vehicle_type TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(pickup_location, destination, vehicle_type)
);
ALTER TABLE route_prices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin manage pricing" ON route_prices
  FOR ALL TO authenticated USING (true) WITH CHECK (true);`;

export default function PricingPage() {
    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), []);

    const [prices, setPrices] = useState<RoutePrice[]>([]);
    const [loading, setLoading] = useState(true);
    const [tableExists, setTableExists] = useState(true);
    const [saving, setSaving] = useState<string | null>(null);
    const [deleting, setDeleting] = useState<string | null>(null);

    // New route form
    const [newFrom, setNewFrom] = useState('');
    const [newTo, setNewTo] = useState('');
    const [newVehicle, setNewVehicle] = useState(VEHICLE_TYPES[0]);
    const [newPrice, setNewPrice] = useState('');
    const [adding, setAdding] = useState(false);

    // Inline edit
    const [editPrices, setEditPrices] = useState<Record<string, string>>({});

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('route_prices')
            .select('*')
            .order('pickup_location');
        if (error?.code === '42P01') { setTableExists(false); setLoading(false); return; }
        if (!error) setPrices(data || []);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newFrom || !newTo || !newPrice) { toast.error('Fill all fields'); return; }
        const price = parseFloat(newPrice);
        if (isNaN(price) || price < 0) { toast.error('Invalid price'); return; }
        setAdding(true);
        const { data, error } = await supabase
            .from('route_prices')
            .upsert([{ pickup_location: newFrom, destination: newTo, vehicle_type: newVehicle, price }], { onConflict: 'pickup_location,destination,vehicle_type' })
            .select()
            .single();
        setAdding(false);
        if (error) { toast.error(error.message); return; }
        setPrices(prev => {
            const exists = prev.findIndex(p => p.id === data.id);
            if (exists >= 0) { const n = [...prev]; n[exists] = data; return n; }
            return [...prev, data];
        });
        toast.success('Route price saved');
        setNewFrom('');
        setNewTo('');
        setNewPrice('');
    };

    const handleSavePrice = async (id: string) => {
        const val = parseFloat(editPrices[id] ?? '');
        if (isNaN(val)) return;
        setSaving(id);
        const { error } = await supabase.from('route_prices').update({ price: val }).eq('id', id);
        setSaving(null);
        if (error) { toast.error('Failed to save'); return; }
        setPrices(prev => prev.map(p => p.id === id ? { ...p, price: val } : p));
        setEditPrices(prev => { const n = { ...prev }; delete n[id]; return n; });
        toast.success('Price updated');
    };

    const handleDelete = async (id: string) => {
        setDeleting(id);
        const { error } = await supabase.from('route_prices').delete().eq('id', id);
        setDeleting(null);
        if (error) { toast.error('Failed to delete'); return; }
        setPrices(prev => prev.filter(p => p.id !== id));
        toast.success('Route removed');
    };

    // Group by route
    const grouped = useMemo(() => {
        const map: Record<string, RoutePrice[]> = {};
        prices.forEach(p => {
            const key = `${p.pickup_location}||${p.destination}`;
            if (!map[key]) map[key] = [];
            map[key].push(p);
        });
        return map;
    }, [prices]);

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                        Route Pricing
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">Set prices per route & vehicle type</p>
                </div>

                {!tableExists ? (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                        <p className="text-yellow-400 font-semibold mb-2">Setup Required</p>
                        <p className="text-sm text-yellow-300/70 mb-3">Run this SQL in your Supabase dashboard to enable route pricing:</p>
                        <pre className="bg-black/40 rounded-lg p-4 text-xs font-mono text-green-400 overflow-x-auto whitespace-pre">{SETUP_SQL}</pre>
                        <Button onClick={load} className="mt-4 bg-yellow-500 text-black hover:bg-yellow-400 font-bold gap-2">
                            <RefreshCw className="w-4 h-4" /> Check Again
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Add new route */}
                        <div className="bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden">
                            <div className="px-5 py-3 border-b border-slate-800 flex items-center gap-2">
                                <Plus className="w-4 h-4 text-brand-gold" />
                                <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Add / Update Route Price</h2>
                            </div>
                            <form onSubmit={handleAdd} className="p-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
                                    <div className="lg:col-span-2">
                                        <Label className="text-slate-400 text-xs mb-1 block">From</Label>
                                        <Input
                                            value={newFrom}
                                            onChange={e => setNewFrom(e.target.value)}
                                            list="from-suggestions"
                                            placeholder="Pickup location"
                                            className="bg-slate-800/50 border-slate-700 text-white"
                                            required
                                        />
                                        <datalist id="from-suggestions">
                                            {POPULAR_ROUTES.map(r => <option key={r.from} value={r.from} />)}
                                        </datalist>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <Label className="text-slate-400 text-xs mb-1 block">To</Label>
                                        <Input
                                            value={newTo}
                                            onChange={e => setNewTo(e.target.value)}
                                            list="to-suggestions"
                                            placeholder="Destination"
                                            className="bg-slate-800/50 border-slate-700 text-white"
                                            required
                                        />
                                        <datalist id="to-suggestions">
                                            {POPULAR_ROUTES.map(r => <option key={r.to} value={r.to} />)}
                                        </datalist>
                                    </div>
                                    <div>
                                        <Label className="text-slate-400 text-xs mb-1 block">Vehicle</Label>
                                        <select
                                            value={newVehicle}
                                            onChange={e => setNewVehicle(e.target.value)}
                                            className="w-full h-10 rounded-md bg-slate-800/50 border border-slate-700 text-white text-sm px-3 focus:outline-none focus:border-brand-gold"
                                        >
                                            {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-end">
                                    <div>
                                        <Label className="text-slate-400 text-xs mb-1 block">Price (SAR)</Label>
                                        <Input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={newPrice}
                                            onChange={e => setNewPrice(e.target.value)}
                                            placeholder="0.00"
                                            className="bg-slate-800/50 border-slate-700 text-white w-36"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" disabled={adding}
                                        className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold gap-2">
                                        {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                        Add Route
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Pricing table */}
                        {loading ? (
                            <div className="flex items-center gap-2 text-slate-500 py-8 justify-center">
                                <Loader2 className="w-5 h-5 animate-spin" /> Loading...
                            </div>
                        ) : Object.keys(grouped).length === 0 ? (
                            <div className="text-center py-12 text-slate-600">
                                <DollarSign className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                <p>No routes added yet. Add your first route above.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {Object.entries(grouped).map(([key, routes]) => {
                                    const [from, to] = key.split('||');
                                    return (
                                        <div key={key} className="bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden">
                                            <div className="px-5 py-3 bg-slate-800/50 flex items-center gap-2">
                                                <span className="text-sm font-semibold text-green-400">{from}</span>
                                                <ArrowRight className="w-4 h-4 text-neutral-500 shrink-0" />
                                                <span className="text-sm font-semibold text-red-400">{to}</span>
                                                <span className="ml-auto text-xs text-slate-500">{routes.length} vehicle{routes.length !== 1 ? 's' : ''}</span>
                                            </div>
                                            <div className="divide-y divide-slate-800">
                                                {routes.map(r => (
                                                    <div key={r.id} className="flex items-center gap-4 px-5 py-3">
                                                        <span className="text-sm text-slate-300 w-28 shrink-0">{r.vehicle_type}</span>
                                                        <div className="flex items-center gap-2 flex-1">
                                                            <span className="text-xs text-slate-500">SAR</span>
                                                            <Input
                                                                type="number"
                                                                value={editPrices[r.id] !== undefined ? editPrices[r.id] : r.price}
                                                                onChange={e => setEditPrices(prev => ({ ...prev, [r.id]: e.target.value }))}
                                                                className="bg-slate-800/50 border-slate-700 text-white w-32 h-8 text-sm"
                                                            />
                                                            {editPrices[r.id] !== undefined && editPrices[r.id] !== String(r.price) && (
                                                                <Button
                                                                    size="sm"
                                                                    onClick={() => handleSavePrice(r.id)}
                                                                    disabled={saving === r.id}
                                                                    className="h-8 bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold gap-1 text-xs">
                                                                    {saving === r.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                                                                    Save
                                                                </Button>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => handleDelete(r.id)}
                                                            disabled={deleting === r.id}
                                                            className="text-red-500/50 hover:text-red-400 transition-colors">
                                                            {deleting === r.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Stats */}
                        {prices.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    { label: 'Total Routes', value: Object.keys(grouped).length, icon: ArrowRight },
                                    { label: 'Price Points', value: prices.length, icon: TrendingUp },
                                    { label: 'Avg Price', value: `SAR ${Math.round(prices.reduce((s, p) => s + p.price, 0) / prices.length)}`, icon: DollarSign },
                                ].map(s => (
                                    <div key={s.label} className="bg-brand-navy-light rounded-xl border border-slate-700/50 p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <s.icon className="w-4 h-4 text-brand-gold" />
                                            <span className="text-xs text-slate-400">{s.label}</span>
                                        </div>
                                        <div className="text-xl font-bold text-white">{s.value}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
