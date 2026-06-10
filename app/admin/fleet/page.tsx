'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import {
    Car, Users, Luggage, Plus, Pencil, Trash2,
    AlertTriangle, CheckCircle, Wrench, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface Vehicle {
    id: string;
    created_at: string;
    name: string;
    type: string;
    passengers: number;
    luggage: number;
    plate_number?: string;
    status: 'active' | 'maintenance' | 'inactive';
    notes?: string;
}

const VEHICLE_TYPES = ['Sedan', 'Luxury SUV', 'Family Van', 'Minibus', 'Coaster', 'Limousine', 'Other'];

const statusConfig = {
    active: { label: 'Active', color: 'bg-green-500/10 text-green-400 border-green-500/20', icon: CheckCircle },
    maintenance: { label: 'Maintenance', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', icon: Wrench },
    inactive: { label: 'Inactive', color: 'bg-red-500/10 text-red-400 border-red-500/20', icon: X },
};

const emptyForm = { name: '', type: 'Sedan', passengers: 4, luggage: 3, plate_number: '', status: 'active' as Vehicle['status'], notes: '' };

export default function FleetPage() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [tableExists, setTableExists] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [editing, setEditing] = useState<Vehicle | null>(null);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState(emptyForm);
    const router = useRouter();

    const fetchVehicles = useCallback(async () => {
        const { data, error } = await supabase.from('vehicles').select('*').order('created_at', { ascending: true });
        if (error) {
            if (error.code === '42P01') setTableExists(false);
        } else {
            setVehicles(data || []);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        const init = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) { router.push('/admin/login'); return; }
            fetchVehicles();
        };
        init();
    }, [router, fetchVehicles]);

    const openAdd = () => {
        setEditing(null);
        setForm(emptyForm);
        setDialogOpen(true);
    };

    const openEdit = (v: Vehicle) => {
        setEditing(v);
        setForm({ name: v.name, type: v.type, passengers: v.passengers, luggage: v.luggage, plate_number: v.plate_number || '', status: v.status, notes: v.notes || '' });
        setDialogOpen(true);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (editing) {
                const { error } = await supabase.from('vehicles').update(form).eq('id', editing.id);
                if (error) throw error;
                setVehicles(vehicles.map(v => v.id === editing.id ? { ...v, ...form } : v));
            } else {
                const { data, error } = await supabase.from('vehicles').insert([form]).select();
                if (error) throw error;
                if (data) setVehicles([...vehicles, data[0]]);
            }
            setDialogOpen(false);
        } catch (err) {
            console.error(err);
            alert('Failed to save. Check Supabase connection.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase.from('vehicles').delete().eq('id', id);
        if (!error) setVehicles(vehicles.filter(v => v.id !== id));
        setDeleteId(null);
    };

    const toggleStatus = async (v: Vehicle) => {
        const next: Vehicle['status'] = v.status === 'active' ? 'maintenance' : 'active';
        const { error } = await supabase.from('vehicles').update({ status: next }).eq('id', v.id);
        if (!error) setVehicles(vehicles.map(x => x.id === v.id ? { ...x, status: next } : x));
    };

    const active = vehicles.filter(v => v.status === 'active').length;
    const maintenance = vehicles.filter(v => v.status === 'maintenance').length;

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200">
                            Fleet Management
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            {vehicles.length} vehicle{vehicles.length !== 1 ? 's' : ''} · {active} active · {maintenance} in maintenance
                        </p>
                    </div>
                    <Button
                        className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold"
                        onClick={openAdd}
                        disabled={!tableExists}
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Vehicle
                    </Button>
                </div>

                {/* Setup notice */}
                {!tableExists && (
                    <div className="flex items-start gap-3 mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-300 text-sm">
                        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                            <div className="font-semibold mb-1">Vehicles table not set up yet</div>
                            <div className="text-yellow-400/80">Run <code className="bg-black/30 px-1.5 py-0.5 rounded text-xs font-mono">supabase-create-vehicles-table.sql</code> in your Supabase SQL Editor to enable fleet management.</div>
                        </div>
                    </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                        { label: 'Total Fleet', value: vehicles.length, color: 'text-brand-gold' },
                        { label: 'Active', value: active, color: 'text-green-400' },
                        { label: 'Maintenance', value: maintenance, color: 'text-yellow-400' },
                    ].map(s => (
                        <div key={s.label} className="bg-brand-navy-light p-5 rounded-xl border border-slate-700/50 text-center">
                            <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
                            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Vehicle Grid */}
                {vehicles.length === 0 && tableExists ? (
                    <div className="text-center py-20 text-slate-500">
                        <Car className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <div className="text-lg font-medium mb-2">No vehicles added yet</div>
                        <Button className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold mt-2" onClick={openAdd}>
                            <Plus className="mr-2 h-4 w-4" /> Add First Vehicle
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {vehicles.map((v) => {
                            const sc = statusConfig[v.status];
                            const StatusIcon = sc.icon;
                            return (
                                <div key={v.id} className="bg-brand-navy-light rounded-xl border border-slate-700/50 overflow-hidden hover:border-brand-gold/30 transition-colors">
                                    {/* Color bar */}
                                    <div className={`h-1 w-full ${v.status === 'active' ? 'bg-green-500' : v.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'}`} />

                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{v.name}</h3>
                                                <p className="text-sm text-slate-400">{v.type}</p>
                                                {v.plate_number && (
                                                    <p className="text-xs font-mono text-slate-500 mt-0.5">{v.plate_number}</p>
                                                )}
                                            </div>
                                            <Badge variant="outline" className={`${sc.color} flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {sc.label}
                                            </Badge>
                                        </div>

                                        <div className="flex gap-4 mb-4 text-sm text-slate-400">
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-4 h-4 text-brand-gold/70" />
                                                {v.passengers} seats
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Luggage className="w-4 h-4 text-brand-gold/70" />
                                                {v.luggage} bags
                                            </span>
                                        </div>

                                        {v.notes && (
                                            <p className="text-xs text-slate-500 mb-4 italic">{v.notes}</p>
                                        )}

                                        <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-slate-400 hover:text-white h-8 px-3 text-xs"
                                                onClick={() => toggleStatus(v)}
                                            >
                                                {v.status === 'active' ? 'Mark Maintenance' : 'Mark Active'}
                                            </Button>
                                            <div className="flex-1" />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-slate-400 hover:text-brand-gold hover:bg-brand-gold/10"
                                                onClick={() => openEdit(v)}
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                                                onClick={() => setDeleteId(v.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Add / Edit Dialog */}
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogContent className="bg-brand-navy border border-slate-700 text-white sm:max-w-[440px]">
                        <DialogHeader>
                            <DialogTitle className="text-brand-gold text-xl">
                                {editing ? 'Edit Vehicle' : 'Add New Vehicle'}
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSave} className="space-y-4 mt-2">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-2 space-y-1.5">
                                    <Label>Vehicle Name</Label>
                                    <Input required placeholder="e.g. GMC Yukon XL" value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                        className="bg-brand-navy-light border-slate-700 text-white" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Type</Label>
                                    <select className="flex h-10 w-full rounded-md border border-slate-700 bg-brand-navy-light px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
                                        value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                                        {VEHICLE_TYPES.map(t => <option key={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Status</Label>
                                    <select className="flex h-10 w-full rounded-md border border-slate-700 bg-brand-navy-light px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"
                                        value={form.status} onChange={e => setForm({ ...form, status: e.target.value as Vehicle['status'] })}>
                                        <option value="active">Active</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Passengers</Label>
                                    <Input required type="number" min={1} max={50} value={form.passengers}
                                        onChange={e => setForm({ ...form, passengers: parseInt(e.target.value) || 0 })}
                                        className="bg-brand-navy-light border-slate-700 text-white" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Luggage Bags</Label>
                                    <Input required type="number" min={0} max={50} value={form.luggage}
                                        onChange={e => setForm({ ...form, luggage: parseInt(e.target.value) || 0 })}
                                        className="bg-brand-navy-light border-slate-700 text-white" />
                                </div>
                                <div className="col-span-2 space-y-1.5">
                                    <Label>Plate Number <span className="text-slate-500 font-normal">(optional)</span></Label>
                                    <Input placeholder="e.g. ABC 1234" value={form.plate_number}
                                        onChange={e => setForm({ ...form, plate_number: e.target.value })}
                                        className="bg-brand-navy-light border-slate-700 text-white" />
                                </div>
                                <div className="col-span-2 space-y-1.5">
                                    <Label>Notes <span className="text-slate-500 font-normal">(optional)</span></Label>
                                    <Input placeholder="e.g., AC needs check, new tires" value={form.notes}
                                        onChange={e => setForm({ ...form, notes: e.target.value })}
                                        className="bg-brand-navy-light border-slate-700 text-white" />
                                </div>
                            </div>
                            <Button type="submit" disabled={saving}
                                className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold mt-2">
                                {saving ? 'Saving…' : editing ? 'Update Vehicle' : 'Add Vehicle'}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* Delete Confirm Dialog */}
                <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                    <DialogContent className="bg-brand-navy border border-slate-700 text-white sm:max-w-[380px]">
                        <DialogHeader>
                            <DialogTitle className="text-red-400">Delete Vehicle?</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-slate-400 mt-1">This cannot be undone.</p>
                        <div className="flex gap-3 mt-4">
                            <Button variant="outline" className="flex-1 border-slate-700 text-slate-300" onClick={() => setDeleteId(null)}>Cancel</Button>
                            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    );
}
