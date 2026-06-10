'use client'

import { useState } from 'react'
import {
    MessageCircle,
    Mail,
    MapPin,
    Calendar,
    Clock,
    Car,
    Users,
    Loader2,
    PackageOpen,
    StickyNote,
    BadgeDollarSign,
    CalendarClock,
    UserCheck,
    Pencil,
    Check,
    X,
} from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import StatusBadge from './StatusBadge'
import type { Booking, BookingStatus } from './types'

interface Props {
    booking: Booking | null
    open: boolean
    onClose: () => void
    onStatusChange: (id: string, status: BookingStatus) => void
    onDriverAssign: (id: string, driver: string) => Promise<void>
    updatingId: string | null
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-3">
            {children}
        </p>
    )
}

function DetailRow({
    icon: Icon,
    label,
    children,
}: {
    icon: React.ElementType
    label: string
    children: React.ReactNode
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-neutral-500" />
            </div>
            <div className="min-w-0">
                <p className="text-[11px] text-neutral-500 mb-0.5">{label}</p>
                <div className="text-sm text-white font-medium leading-snug">{children}</div>
            </div>
        </div>
    )
}

export default function BookingDetailSheet({
    booking, open, onClose, onStatusChange, onDriverAssign, updatingId,
}: Props) {
    const [driverEdit, setDriverEdit] = useState(false)
    const [driverInput, setDriverInput] = useState('')
    const [savingDriver, setSavingDriver] = useState(false)

    if (!booking) return null

    const isUpdating = updatingId === booking.id

    const handleDriverSave = async () => {
        if (!driverInput.trim()) return
        setSavingDriver(true)
        await onDriverAssign(booking.id, driverInput.trim())
        setSavingDriver(false)
        setDriverEdit(false)
        setDriverInput('')
    }
    const phone = booking.customer_phone.replace(/\D/g, '')
    const waMessage = encodeURIComponent(
        `Hello ${booking.customer_name}, regarding your booking from ${booking.pickup_location} to ${booking.destination} on ${booking.pickup_date} at ${booking.pickup_time}. `
    )
    const whatsappLink = `https://wa.me/${phone}?text=${waMessage}`
    const mailtoLink = `mailto:${booking.customer_email}?subject=Your Booking – ${booking.pickup_date}&body=Dear ${booking.customer_name},%0A%0ARegarding your booking from ${booking.pickup_location} to ${booking.destination} on ${booking.pickup_date} at ${booking.pickup_time}.`
    const createdAt = new Date(booking.created_at).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
            <SheetContent className="w-full sm:max-w-[480px] bg-neutral-950 border-neutral-800 text-white p-0 flex flex-col overflow-hidden">
                {/* ── Header ── */}
                <div className="p-5 border-b border-neutral-800 bg-neutral-900 shrink-0">
                    <SheetHeader className="text-left space-y-0.5 mb-4">
                        <SheetTitle className="text-lg font-bold text-white">
                            Booking Details
                        </SheetTitle>
                        <SheetDescription className="text-[11px] text-neutral-600 font-mono">
                            #{booking.id.toUpperCase()}
                        </SheetDescription>
                    </SheetHeader>

                    {/* Status control */}
                    <div className="flex items-center justify-between gap-3">
                        <StatusBadge status={booking.status} />
                        <Select
                            value={booking.status}
                            onValueChange={(val) =>
                                onStatusChange(booking.id, val as BookingStatus)
                            }
                            disabled={isUpdating}
                        >
                            <SelectTrigger className="h-8 w-[145px] bg-neutral-800 border-neutral-600 text-xs">
                                {isUpdating ? (
                                    <Loader2 className="w-3 h-3 animate-spin text-neutral-400" />
                                ) : (
                                    <SelectValue />
                                )}
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Quick actions */}
                    <div className="flex gap-2 mt-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/20 transition-colors"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </a>
                        <a
                            href={mailtoLink}
                            className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/20 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </a>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-5 space-y-6">
                        {/* Customer */}
                        <div>
                            <SectionLabel>Customer</SectionLabel>
                            <div className="space-y-3">
                                <DetailRow icon={Users} label="Full Name">
                                    {booking.customer_name}
                                </DetailRow>
                                <DetailRow icon={MessageCircle} label="Phone">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-green-400 hover:text-green-300 transition-colors"
                                    >
                                        {booking.customer_phone}
                                    </a>
                                </DetailRow>
                                <DetailRow icon={Mail} label="Email">
                                    <a
                                        href={`mailto:${booking.customer_email}`}
                                        className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                                    >
                                        {booking.customer_email}
                                    </a>
                                </DetailRow>
                            </div>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Trip */}
                        <div>
                            <SectionLabel>Trip</SectionLabel>
                            <div className="space-y-3">
                                <DetailRow icon={MapPin} label="Pickup Location">
                                    {booking.pickup_location}
                                </DetailRow>
                                <DetailRow icon={MapPin} label="Destination">
                                    {booking.destination}
                                </DetailRow>
                                <DetailRow icon={Calendar} label="Date">
                                    {booking.pickup_date}
                                </DetailRow>
                                <DetailRow icon={Clock} label="Time">
                                    {booking.pickup_time}
                                </DetailRow>
                            </div>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Ride */}
                        <div>
                            <SectionLabel>Ride</SectionLabel>
                            <div className="space-y-3">
                                <DetailRow icon={Car} label="Vehicle">
                                    {booking.vehicle_type}
                                </DetailRow>
                                <DetailRow icon={Users} label="Passengers">
                                    {booking.passengers}{' '}
                                    <span className="text-neutral-500 font-normal">people</span>
                                </DetailRow>
                                <DetailRow icon={PackageOpen} label="Luggage">
                                    {booking.luggage}{' '}
                                    <span className="text-neutral-500 font-normal">bags</span>
                                </DetailRow>
                            </div>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Other */}
                        <div>
                            <SectionLabel>Other</SectionLabel>
                            <div className="space-y-3">

                                {/* Driver Assignment */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                        <UserCheck className="w-4 h-4 text-neutral-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[11px] text-neutral-500 mb-1">Driver Assigned</p>
                                        {driverEdit ? (
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    autoFocus
                                                    placeholder="Driver name or ID"
                                                    value={driverInput}
                                                    onChange={e => setDriverInput(e.target.value)}
                                                    onKeyDown={e => { if (e.key === 'Enter') handleDriverSave(); if (e.key === 'Escape') setDriverEdit(false); }}
                                                    className="h-8 text-sm bg-neutral-800 border-neutral-600 text-white"
                                                />
                                                <button onClick={handleDriverSave} disabled={savingDriver} className="text-green-400 hover:text-green-300 transition-colors">
                                                    {savingDriver ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                                </button>
                                                <button onClick={() => setDriverEdit(false)} className="text-neutral-500 hover:text-neutral-300 transition-colors">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : booking.driver_assigned ? (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium text-green-400">{booking.driver_assigned}</span>
                                                <button onClick={() => { setDriverInput(booking.driver_assigned || ''); setDriverEdit(true); }} className="text-neutral-600 hover:text-neutral-300 transition-colors">
                                                    <Pencil className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => setDriverEdit(true)}
                                                className="text-sm text-brand-gold hover:text-yellow-300 transition-colors flex items-center gap-1"
                                            >
                                                <UserCheck className="w-3.5 h-3.5" /> Assign Driver
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <DetailRow icon={BadgeDollarSign} label="Price">
                                    {booking.total_price ? (
                                        <span className="text-green-400 text-base font-bold">
                                            SAR {booking.total_price}
                                        </span>
                                    ) : (
                                        <span className="text-neutral-500 font-normal">
                                            Get Quote
                                        </span>
                                    )}
                                </DetailRow>

                                {/* Special requests */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                        <StickyNote className="w-4 h-4 text-neutral-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[11px] text-neutral-500 mb-1">
                                            Special Requests
                                        </p>
                                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-300 whitespace-pre-wrap min-h-[52px] leading-relaxed">
                                            {booking.special_requests || (
                                                <span className="text-neutral-600">None</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <DetailRow icon={CalendarClock} label="Booking Received">
                                    <span className="text-neutral-400 font-normal text-xs">
                                        {createdAt}
                                    </span>
                                </DetailRow>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
