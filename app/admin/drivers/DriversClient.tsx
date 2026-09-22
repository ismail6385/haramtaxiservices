'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from 'sonner'
import { UserCheck, Plus, Pencil, Trash2, Loader2, Phone, Car, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Driver {
    id: string
    name: string
    phone: string
    vehicle_type: string
    license_plate: string
    status: 'available' | 'on_trip' | 'off_duty'
    created_at: string
}

const STATUS_STYLES = {
    available: 'bg-green-500/15 text-green-400 border-green-500/30',
    on_trip: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    off_duty: 'bg-neutral-700 text-neutral-400 border-neutral-600',
}

const STATUS_LABELS = {
    available: 'Available',
    on_trip: 'On Trip',
    off_duty: 'Off Duty',
}

interface FormState {
    name: string
    phone: string
    vehicle_type: string
    license_plate: string
    status: 'available' | 'on_trip' | 'off_duty'
}

const EMPTY_FORM: FormState = { name: '', phone: '', vehicle_type: '', license_plate: '', status: 'available' }

export default function DriversPage() {
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [loading, setLoading] = useState(true)
    const [tableError, setTableError] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [editingDriver, setEditingDriver] = useState<Driver | null>(null)
    const [form, setForm] = useState<FormState>(EMPTY_FORM)
    const [saving, setSaving] = useState(false)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const fetchDrivers = async () => {
        const { data, error } = await supabase
            .from('drivers')
            .select('*')
            .order('name', { ascending: true })

        if (error) {
            if (error.code === '42P01') setTableError(true)
            else toast.error('Failed to load drivers')
        } else {
            setDrivers(data ?? [])
        }
        setLoading(false)
    }

    useEffect(() => { fetchDrivers() }, [])

    const openAdd = () => {
        setEditingDriver(null)
        setForm(EMPTY_FORM)
        setShowForm(true)
    }

    const openEdit = (d: Driver) => {
        setEditingDriver(d)
        setForm({ name: d.name, phone: d.phone, vehicle_type: d.vehicle_type, license_plate: d.license_plate, status: d.status })
        setShowForm(true)
    }

    const handleSave = async () => {
        if (!form.name.trim()) { toast.error('Name is required'); return }
        setSaving(true)
        if (editingDriver) {
            const { error } = await supabase.from('drivers').update(form).eq('id', editingDriver.id)
            if (error) { toast.error('Failed to update driver'); setSaving(false); return }
            toast.success('Driver updated')
        } else {
            const { error } = await supabase.from('drivers').insert([form])
            if (error) { toast.error('Failed to add driver'); setSaving(false); return }
            toast.success('Driver added')
        }
        await fetchDrivers()
        setShowForm(false)
        setSaving(false)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this driver?')) return
        setDeletingId(id)
        const { error } = await supabase.from('drivers').delete().eq('id', id)
        if (error) toast.error('Failed to delete')
        else { toast.success('Driver deleted'); setDrivers(prev => prev.filter(d => d.id !== id)) }
        setDeletingId(null)
    }

    const counts = {
        available: drivers.filter(d => d.status === 'available').length,
        on_trip: drivers.filter(d => d.status === 'on_trip').length,
        off_duty: drivers.filter(d => d.status === 'off_duty').length,
    }

    if (tableError) {
        return (
            <div className="text-white space-y-6">
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">Drivers</h1>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                    <h2 className="text-amber-400 font-semibold text-lg mb-2">Setup Required</h2>
                    <p className="text-neutral-400 text-sm mb-4">The <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-amber-300">drivers</code> table doesn&apos;t exist yet. Run this SQL in your Supabase dashboard:</p>
                    <pre className="bg-neutral-950 rounded-xl p-4 text-xs text-green-400 overflow-x-auto border border-neutral-800 leading-relaxed">
{`CREATE TABLE drivers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) DEFAULT '',
  vehicle_type VARCHAR(50) DEFAULT '',
  license_plate VARCHAR(20) DEFAULT '',
  status VARCHAR(20) DEFAULT 'available'
    CHECK (status IN ('available', 'on_trip', 'off_duty')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE drivers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin full access" ON drivers
  FOR ALL USING (auth.role() = 'authenticated');`}
                    </pre>
                    <p className="text-neutral-500 text-xs mt-3">Go to Supabase → SQL Editor → paste → Run, then refresh this page.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="text-white space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Drivers
                    </h1>
                    <p className="text-neutral-500 text-sm mt-1">
                        {drivers.length} drivers registered
                    </p>
                </div>
                <Button onClick={openAdd} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-2">
                    <Plus className="w-4 h-4" /> Add Driver
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Available', count: counts.available, color: 'text-green-400', bg: 'bg-green-500/10' },
                    { label: 'On Trip', count: counts.on_trip, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { label: 'Off Duty', count: counts.off_duty, color: 'text-neutral-400', bg: 'bg-neutral-700/50' },
                ].map(s => (
                    <div key={s.label} className="bg-neutral-800 rounded-xl border border-neutral-700 p-4 text-center">
                        <div className={`text-2xl font-bold ${s.color}`}>{s.count}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Add / Edit Form */}
            {showForm && (
                <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-white">
                        {editingDriver ? 'Edit Driver' : 'Add New Driver'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { key: 'name', label: 'Full Name *', placeholder: 'Mohammed Al-Ghamdi' },
                            { key: 'phone', label: 'Phone Number', placeholder: '+966 5X XXX XXXX' },
                            { key: 'vehicle_type', label: 'Vehicle Type', placeholder: 'Toyota Hiace / Coaster...' },
                            { key: 'license_plate', label: 'License Plate', placeholder: 'ABC 1234' },
                        ].map(f => (
                            <div key={f.key}>
                                <label className="block text-xs text-neutral-400 mb-1.5 font-medium uppercase tracking-wide">{f.label}</label>
                                <input
                                    value={form[f.key as keyof FormState] as string}
                                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                                    placeholder={f.placeholder}
                                    className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-colors"
                                />
                            </div>
                        ))}
                        <div>
                            <label className="block text-xs text-neutral-400 mb-1.5 font-medium uppercase tracking-wide">Status</label>
                            <select
                                value={form.status}
                                onChange={e => setForm(prev => ({ ...prev, status: e.target.value as FormState['status'] }))}
                                className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-colors"
                            >
                                <option value="available">Available</option>
                                <option value="on_trip">On Trip</option>
                                <option value="off_duty">Off Duty</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <Button onClick={handleSave} disabled={saving} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-2">
                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                            {editingDriver ? 'Save Changes' : 'Add Driver'}
                        </Button>
                        <Button onClick={() => setShowForm(false)} variant="ghost" className="text-neutral-400 hover:text-white">
                            Cancel
                        </Button>
                    </div>
                </div>
            )}

            {/* Drivers list */}
            {loading ? (
                <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-20 bg-neutral-800 rounded-xl animate-pulse border border-neutral-700" />
                    ))}
                </div>
            ) : drivers.length === 0 ? (
                <div className="bg-neutral-800 rounded-xl border border-neutral-700 py-20 text-center">
                    <UserCheck className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
                    <p className="text-neutral-400 font-medium">No drivers yet</p>
                    <p className="text-neutral-600 text-sm mt-1">Click Add Driver to get started</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {drivers.map(driver => (
                        <div key={driver.id} className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 flex flex-col gap-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                                        <span className="text-sm font-bold text-yellow-400">
                                            {driver.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{driver.name}</p>
                                        <span className={`text-[10px] font-bold border rounded-full px-2 py-0.5 ${STATUS_STYLES[driver.status]}`}>
                                            {STATUS_LABELS[driver.status]}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => openEdit(driver)}
                                        className="p-1.5 rounded-lg text-neutral-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors">
                                        <Pencil className="w-3.5 h-3.5" />
                                    </button>
                                    <button onClick={() => handleDelete(driver.id)} disabled={deletingId === driver.id}
                                        className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-40">
                                        {deletingId === driver.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2 text-xs">
                                {driver.phone && (
                                    <a href={`https://wa.me/${driver.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                                        <Phone className="w-3.5 h-3.5 shrink-0" />
                                        <span>{driver.phone}</span>
                                    </a>
                                )}
                                {(driver.vehicle_type || driver.license_plate) && (
                                    <div className="flex items-center gap-2 text-neutral-400">
                                        <Car className="w-3.5 h-3.5 shrink-0" />
                                        <span>
                                            {[driver.vehicle_type, driver.license_plate].filter(Boolean).join(' · ')}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
