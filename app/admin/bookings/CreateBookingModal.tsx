'use client'

import { useState, useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Plus } from 'lucide-react'
import { toast } from 'sonner'
import type { Booking } from './types'
import { vehicles } from '@/lib/supabase'

interface Props {
    open: boolean
    onClose: () => void
    onCreated: (booking: Booking) => void
}

const TIMES = Array.from({ length: 48 }, (_, i) => {
    const h = Math.floor(i / 2).toString().padStart(2, '0')
    const m = i % 2 === 0 ? '00' : '30'
    return `${h}:${m}`
})

const POPULAR_ROUTES = [
    { from: 'Jeddah Airport', to: 'Makkah Hotel' },
    { from: 'Makkah Hotel', to: 'Madinah Hotel' },
    { from: 'Makkah Hotel', to: 'Jeddah Airport' },
    { from: 'Madinah Hotel', to: 'Jeddah Airport' },
    { from: 'Makkah Hotel', to: 'Makkah Train Station' },
    { from: 'Madinah Hotel', to: 'Madinah Train Station' },
]

export default function CreateBookingModal({ open, onClose, onCreated }: Props) {
    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), [])

    const [saving, setSaving] = useState(false)
    const [form, setForm] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_location: '',
        destination: '',
        pickup_date: '',
        pickup_time: '09:00',
        vehicle_type: '',
        passengers: 1,
        luggage: 0,
        total_price: '',
        special_requests: '',
        admin_notes: '',
        status: 'confirmed',
        is_round_trip: false,
        return_date: '',
        return_time: '',
    })

    const set = (key: string, val: string | number | boolean) =>
        setForm(f => ({ ...f, [key]: val }))

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.customer_name || !form.customer_phone || !form.pickup_location || !form.destination || !form.pickup_date || !form.vehicle_type) {
            toast.error('Please fill all required fields')
            return
        }
        setSaving(true)
        try {
            const payload: Record<string, unknown> = {
                customer_name: form.customer_name,
                customer_email: form.customer_email,
                customer_phone: form.customer_phone,
                pickup_location: form.pickup_location,
                destination: form.destination,
                pickup_date: form.pickup_date,
                pickup_time: form.pickup_time,
                vehicle_type: form.vehicle_type,
                passengers: form.passengers,
                luggage: form.luggage,
                status: form.status,
                special_requests: form.special_requests || null,
                admin_notes: form.admin_notes || null,
                is_round_trip: form.is_round_trip,
            }
            if (form.total_price) payload.total_price = parseFloat(form.total_price)
            if (form.is_round_trip && form.return_date) {
                payload.return_date = form.return_date
                payload.return_time = form.return_time || null
            }

            const { data, error } = await supabase.from('bookings').insert([payload]).select().single()
            if (error) throw error
            toast.success('Booking created', { description: `For ${form.customer_name}` })
            onCreated(data as Booking)
            onClose()
            setForm({
                customer_name: '', customer_email: '', customer_phone: '',
                pickup_location: '', destination: '', pickup_date: '',
                pickup_time: '09:00', vehicle_type: '', passengers: 1,
                luggage: 0, total_price: '', special_requests: '',
                admin_notes: '', status: 'confirmed', is_round_trip: false,
                return_date: '', return_time: '',
            })
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to create booking'
            toast.error(msg)
        } finally {
            setSaving(false)
        }
    }

    const inputCls = 'bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-600'
    const labelCls = 'text-neutral-400 text-xs'

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-2xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-yellow-400" /> New Booking
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    {/* Quick route */}
                    <div>
                        <Label className={labelCls}>Quick Route</Label>
                        <Select onValueChange={v => {
                            const r = POPULAR_ROUTES[parseInt(v)]
                            if (r) { set('pickup_location', r.from); set('destination', r.to) }
                        }}>
                            <SelectTrigger className={`${inputCls} mt-1`}>
                                <SelectValue placeholder="Select popular route (optional)" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                {POPULAR_ROUTES.map((r, i) => (
                                    <SelectItem key={i} value={String(i)}>{r.from} → {r.to}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Customer */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <Label className={labelCls}>Name *</Label>
                            <Input value={form.customer_name} onChange={e => set('customer_name', e.target.value)}
                                placeholder="Full name" className={`${inputCls} mt-1`} required />
                        </div>
                        <div>
                            <Label className={labelCls}>Phone *</Label>
                            <Input value={form.customer_phone} onChange={e => set('customer_phone', e.target.value)}
                                placeholder="+966..." className={`${inputCls} mt-1`} required />
                        </div>
                        <div>
                            <Label className={labelCls}>Email</Label>
                            <Input type="email" value={form.customer_email} onChange={e => set('customer_email', e.target.value)}
                                placeholder="email@example.com" className={`${inputCls} mt-1`} />
                        </div>
                    </div>

                    {/* Route */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <Label className={labelCls}>Pickup Location *</Label>
                            <Input value={form.pickup_location} onChange={e => set('pickup_location', e.target.value)}
                                placeholder="From..." className={`${inputCls} mt-1`} required />
                        </div>
                        <div>
                            <Label className={labelCls}>Destination *</Label>
                            <Input value={form.destination} onChange={e => set('destination', e.target.value)}
                                placeholder="To..." className={`${inputCls} mt-1`} required />
                        </div>
                    </div>

                    {/* Date/time + vehicle */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                            <Label className={labelCls}>Date *</Label>
                            <Input type="date" value={form.pickup_date} onChange={e => set('pickup_date', e.target.value)}
                                className={`${inputCls} mt-1`} required />
                        </div>
                        <div>
                            <Label className={labelCls}>Time</Label>
                            <Select value={form.pickup_time} onValueChange={v => set('pickup_time', v)}>
                                <SelectTrigger className={`${inputCls} mt-1`}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white max-h-48">
                                    {TIMES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className={labelCls}>Vehicle *</Label>
                            <Select value={form.vehicle_type} onValueChange={v => set('vehicle_type', v)}>
                                <SelectTrigger className={`${inputCls} mt-1`}>
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                    {vehicles.map(v => (
                                        <SelectItem key={v.name} value={v.name}>{v.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className={labelCls}>Passengers</Label>
                            <Input type="number" min={1} max={50} value={form.passengers}
                                onChange={e => set('passengers', parseInt(e.target.value) || 1)}
                                className={`${inputCls} mt-1`} />
                        </div>
                    </div>

                    {/* Round trip */}
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => set('is_round_trip', !form.is_round_trip)}
                            className={`relative w-10 h-5 rounded-full transition-colors ${form.is_round_trip ? 'bg-yellow-500' : 'bg-neutral-700'}`}>
                            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${form.is_round_trip ? 'translate-x-5' : 'translate-x-0.5'}`} />
                        </button>
                        <Label className={labelCls}>Round Trip</Label>
                    </div>
                    {form.is_round_trip && (
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label className={labelCls}>Return Date</Label>
                                <Input type="date" value={form.return_date} onChange={e => set('return_date', e.target.value)}
                                    className={`${inputCls} mt-1`} />
                            </div>
                            <div>
                                <Label className={labelCls}>Return Time</Label>
                                <Input type="time" value={form.return_time} onChange={e => set('return_time', e.target.value)}
                                    className={`${inputCls} mt-1`} />
                            </div>
                        </div>
                    )}

                    {/* Price + status */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className={labelCls}>Price (SAR)</Label>
                            <Input type="number" placeholder="0.00" value={form.total_price}
                                onChange={e => set('total_price', e.target.value)}
                                className={`${inputCls} mt-1`} />
                        </div>
                        <div>
                            <Label className={labelCls}>Status</Label>
                            <Select value={form.status} onValueChange={v => set('status', v)}>
                                <SelectTrigger className={`${inputCls} mt-1`}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <Label className={labelCls}>Special Requests</Label>
                            <Textarea value={form.special_requests} onChange={e => set('special_requests', e.target.value)}
                                placeholder="Customer requests..." rows={2}
                                className={`${inputCls} mt-1 resize-none`} />
                        </div>
                        <div>
                            <Label className={labelCls}>Admin Notes (internal)</Label>
                            <Textarea value={form.admin_notes} onChange={e => set('admin_notes', e.target.value)}
                                placeholder="Internal notes..." rows={2}
                                className={`${inputCls} mt-1 resize-none`} />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <Button type="button" variant="ghost" onClick={onClose}
                            className="text-neutral-400 hover:text-white">Cancel</Button>
                        <Button type="submit" disabled={saving}
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-2">
                            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                            {saving ? 'Creating...' : 'Create Booking'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
