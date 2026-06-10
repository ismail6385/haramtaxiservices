'use client'

import { useState, useEffect, useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from 'sonner'
import {
    MessageCircle, Mail, MapPin, Calendar, Clock, Car, Users,
    Loader2, PackageOpen, StickyNote, BadgeDollarSign, CalendarClock,
    UserCheck, Pencil, Check, X, FileText, ChevronDown,
    Copy, ExternalLink, RotateCcw, Send, Printer, RefreshCw,
    CreditCard, ArrowLeftRight, CheckSquare, Square, History,
    AlertCircle,
} from 'lucide-react'
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from '@/components/ui/sheet'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
    DropdownMenuSeparator, DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import StatusBadge from './StatusBadge'
import QuotationModal from './QuotationModal'
import InvoiceModal from './InvoiceModal'
import ReceiptModal from './ReceiptModal'
import DriverVoucherModal from './DriverVoucherModal'
import type { Booking, BookingStatus, BookingLog, PaymentStatus, PaymentMethod } from './types'

interface Props {
    booking: Booking | null
    open: boolean
    onClose: () => void
    onStatusChange: (id: string, status: BookingStatus) => void
    onDriverAssign: (id: string, driver: string) => Promise<void>
    onPriceUpdate: (id: string, price: number) => Promise<void>
    onNoteSave: (id: string, note: string) => Promise<void>
    onPaymentUpdate: (id: string, data: { payment_status: PaymentStatus; payment_method?: PaymentMethod; amount_paid?: number }) => Promise<void>
    onRoundTripUpdate: (id: string, data: { is_round_trip: boolean; return_date?: string; return_time?: string }) => Promise<void>
    onDuplicate: (booking: Booking) => Promise<void>
    onResendEmail: (booking: Booking) => Promise<void>
    allBookings: Booking[]
    updatingId: string | null
}

type Tab = 'details' | 'payment' | 'timeline'

const WA_TEMPLATES = (b: Booking) => [
    {
        label: 'Booking Confirmed',
        message: `Assalamu Alaikum ${b.customer_name},\n\nYour booking has been *CONFIRMED* ✅\n\n🚗 Route: ${b.pickup_location} → ${b.destination}\n📅 Date: ${b.pickup_date} at ${b.pickup_time}\n🚙 Vehicle: ${b.vehicle_type}\n${b.driver_assigned ? `👤 Driver: ${b.driver_assigned}\n` : ''}${b.is_round_trip && b.return_date ? `↩ Return: ${b.return_date} ${b.return_time || ''}\n` : ''}\nFor any queries, please contact us.\n\n*Haram Taxi Service*\n+966 57 580 6733`,
    },
    {
        label: 'Trip Reminder',
        message: `Assalamu Alaikum ${b.customer_name},\n\n⏰ *Reminder* — Your trip is tomorrow!\n\n🚗 ${b.pickup_location} → ${b.destination}\n📅 ${b.pickup_date} at ${b.pickup_time}\n${b.driver_assigned ? `👤 Driver: ${b.driver_assigned}\n` : ''}\nPlease be ready 5 minutes before pickup.\n\n*Haram Taxi Service*`,
    },
    {
        label: 'Trip Completed',
        message: `Assalamu Alaikum ${b.customer_name},\n\nThank you for travelling with *Haram Taxi Service* 🙏\n\nWe hope you had a comfortable journey from ${b.pickup_location} to ${b.destination}.\n\nWe look forward to serving you again!\n\n+966 57 580 6733`,
    },
    {
        label: 'Payment Request',
        message: `Assalamu Alaikum ${b.customer_name},\n\nKindly arrange payment for your booking:\n\n🚗 ${b.pickup_location} → ${b.destination}\n📅 ${b.pickup_date}${b.total_price ? `\n💰 Amount: SAR ${b.total_price}` : ''}\n\nPayment via WhatsApp or on arrival.\n\n*Haram Taxi Service*\n+966 57 580 6733`,
    },
    {
        label: 'Round Trip Reminder',
        message: `Assalamu Alaikum ${b.customer_name},\n\n↩ *Return Trip Reminder*\n\nYour return journey:\n📅 ${b.return_date || '—'} at ${b.return_time || '—'}\n🚗 ${b.destination} → ${b.pickup_location}\n${b.driver_assigned ? `👤 Driver: ${b.driver_assigned}` : ''}\n\nPlease be ready on time.\n\n*Haram Taxi Service*`,
    },
]

const CHECKLIST_ITEMS = [
    { key: 'customerConfirmed', label: 'Customer confirmed pickup' },
    { key: 'driverBriefed', label: 'Driver briefed' },
    { key: 'vehicleReady', label: 'Vehicle ready & clean' },
    { key: 'paymentArranged', label: 'Payment arranged' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
    return <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2.5">{children}</p>
}

function DetailRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
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

function CopyBtn({ text, label }: { text: string; label: string }) {
    return (
        <button
            onClick={() => navigator.clipboard.writeText(text).then(() => toast.success(`${label} copied`))}
            className="p-1 text-neutral-600 hover:text-neutral-300 transition-colors"
            title={`Copy ${label}`}
        >
            <Copy className="w-3 h-3" />
        </button>
    )
}

export default function BookingDetailSheet({
    booking, open, onClose, onStatusChange, onDriverAssign, onPriceUpdate,
    onNoteSave, onPaymentUpdate, onRoundTripUpdate, onDuplicate, onResendEmail,
    allBookings, updatingId,
}: Props) {
    const [activeTab, setActiveTab] = useState<Tab>('details')

    // Existing edit state
    const [driverEdit, setDriverEdit] = useState(false)
    const [driverInput, setDriverInput] = useState('')
    const [savingDriver, setSavingDriver] = useState(false)
    const [priceEdit, setPriceEdit] = useState(false)
    const [priceInput, setPriceInput] = useState('')
    const [savingPrice, setSavingPrice] = useState(false)
    const [noteEdit, setNoteEdit] = useState(false)
    const [noteInput, setNoteInput] = useState('')
    const [savingNote, setSavingNote] = useState(false)

    // Modal state
    const [quoteOpen, setQuoteOpen] = useState(false)
    const [invoiceOpen, setInvoiceOpen] = useState(false)
    const [receiptOpen, setReceiptOpen] = useState(false)
    const [voucherOpen, setVoucherOpen] = useState(false)

    // Round trip state
    const [roundTrip, setRoundTrip] = useState(false)
    const [returnDate, setReturnDate] = useState('')
    const [returnTime, setReturnTime] = useState('')
    const [savingRoundTrip, setSavingRoundTrip] = useState(false)

    // Payment state
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('unpaid')
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | ''>('')
    const [amountPaid, setAmountPaid] = useState('')
    const [savingPayment, setSavingPayment] = useState(false)

    // Timeline state
    const [logs, setLogs] = useState<BookingLog[]>([])
    const [logsLoading, setLogsLoading] = useState(false)
    const [logsSetupNeeded, setLogsSetupNeeded] = useState(false)

    // Checklist (local only)
    const [checklist, setChecklist] = useState<Record<string, boolean>>({})

    // Resend state
    const [resending, setResending] = useState(false)
    const [duplicating, setDuplicating] = useState(false)

    // Drivers list
    const [availableDrivers, setAvailableDrivers] = useState<{ id: string; name: string; status: string }[]>([])

    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), [])

    // Sync state when booking changes
    useEffect(() => {
        if (!booking) return
        setActiveTab('details')
        setDriverEdit(false)
        setPriceEdit(false)
        setNoteEdit(false)
        setRoundTrip(booking.is_round_trip ?? false)
        setReturnDate(booking.return_date ?? '')
        setReturnTime(booking.return_time ?? '')
        setPaymentStatus(booking.payment_status ?? 'unpaid')
        setPaymentMethod(booking.payment_method ?? '')
        setAmountPaid(String(booking.amount_paid ?? ''))
        setChecklist({})
        setLogs([])
        setLogsSetupNeeded(false)
    }, [booking?.id])

    // Fetch drivers list
    useEffect(() => {
        supabase.from('drivers').select('id, name, status').order('name').then(({ data }) => {
            if (data) setAvailableDrivers(data)
        })
    }, [supabase])

    // Fetch logs when timeline tab opened
    useEffect(() => {
        if (activeTab !== 'timeline' || !booking) return
        setLogsLoading(true)
        supabase
            .from('booking_logs')
            .select('*')
            .eq('booking_id', booking.id)
            .order('created_at', { ascending: false })
            .then(({ data, error }) => {
                if (error?.code === '42P01') { setLogsSetupNeeded(true) }
                else { setLogs((data as BookingLog[]) ?? []) }
                setLogsLoading(false)
            })
    }, [activeTab, booking?.id, supabase])

    if (!booking) return null

    const isUpdating = updatingId === booking.id
    const phone = booking.customer_phone.replace(/\D/g, '')
    const waMessage = encodeURIComponent(`Hello ${booking.customer_name}, regarding your booking from ${booking.pickup_location} to ${booking.destination} on ${booking.pickup_date}. `)
    const whatsappLink = `https://wa.me/${phone}?text=${waMessage}`
    const mailtoLink = `mailto:${booking.customer_email}?subject=Your Booking – ${booking.pickup_date}&body=Dear ${booking.customer_name},%0A%0ARegarding your booking from ${booking.pickup_location} to ${booking.destination}.`
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(booking.pickup_location + ', Saudi Arabia')}&destination=${encodeURIComponent(booking.destination + ', Saudi Arabia')}`
    const createdAt = new Date(booking.created_at).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

    // Customer history
    const customerHistory = allBookings
        .filter(b => b.id !== booking.id && (
            b.customer_email?.toLowerCase() === booking.customer_email?.toLowerCase() ||
            b.customer_phone === booking.customer_phone
        ))
        .slice(0, 5)

    // Payment balance
    const balance = booking.total_price && parseFloat(amountPaid)
        ? booking.total_price - parseFloat(amountPaid)
        : null

    const handleDriverSave = async () => {
        if (!driverInput.trim()) return
        setSavingDriver(true)
        await onDriverAssign(booking.id, driverInput.trim())
        setSavingDriver(false)
        setDriverEdit(false)
        setDriverInput('')
    }

    const handlePriceSave = async () => {
        const val = parseFloat(priceInput)
        if (isNaN(val) || val <= 0) return
        setSavingPrice(true)
        await onPriceUpdate(booking.id, val)
        setSavingPrice(false)
        setPriceEdit(false)
        setPriceInput('')
    }

    const handleNoteSave = async () => {
        setSavingNote(true)
        await onNoteSave(booking.id, noteInput.trim())
        setSavingNote(false)
        setNoteEdit(false)
    }

    const handleRoundTripSave = async () => {
        setSavingRoundTrip(true)
        await onRoundTripUpdate(booking.id, {
            is_round_trip: roundTrip,
            return_date: roundTrip ? returnDate : undefined,
            return_time: roundTrip ? returnTime : undefined,
        })
        setSavingRoundTrip(false)
    }

    const handlePaymentSave = async () => {
        setSavingPayment(true)
        await onPaymentUpdate(booking.id, {
            payment_status: paymentStatus,
            payment_method: paymentMethod || undefined,
            amount_paid: amountPaid ? parseFloat(amountPaid) : undefined,
        })
        setSavingPayment(false)
    }

    const handleDuplicate = async () => {
        setDuplicating(true)
        await onDuplicate(booking)
        setDuplicating(false)
    }

    const handleResendEmail = async () => {
        setResending(true)
        await onResendEmail(booking)
        setResending(false)
    }

    const TABS: { key: Tab; label: string }[] = [
        { key: 'details', label: 'Details' },
        { key: 'payment', label: 'Payment' },
        { key: 'timeline', label: 'Timeline' },
    ]

    const PAYMENT_STATUS_STYLES: Record<PaymentStatus, string> = {
        unpaid: 'bg-red-500/15 text-red-400 border-red-500/30',
        partial: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
        paid: 'bg-green-500/15 text-green-400 border-green-500/30',
    }

    return (
        <>
            <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
                <SheetContent className="w-full sm:max-w-[500px] bg-neutral-950 border-neutral-800 text-white p-0 flex flex-col overflow-hidden">

                    {/* ── Header ─────────────────────────────────────────────────── */}
                    <div className="p-4 border-b border-neutral-800 bg-neutral-900 shrink-0 space-y-3">
                        <SheetHeader className="text-left space-y-0 pb-0">
                            <div className="flex items-center justify-between">
                                <SheetTitle className="text-base font-bold text-white">Booking Details</SheetTitle>
                                <SheetDescription className="text-[10px] text-neutral-600 font-mono mt-0">
                                    #{booking.id.slice(0, 8).toUpperCase()}
                                    <CopyBtn text={booking.id} label="Booking ID" />
                                </SheetDescription>
                            </div>
                        </SheetHeader>

                        {/* Status */}
                        <div className="flex items-center gap-2">
                            <StatusBadge status={booking.status} />
                            {booking.payment_status && (
                                <span className={`text-[10px] font-bold border rounded-full px-2 py-0.5 ${PAYMENT_STATUS_STYLES[booking.payment_status]}`}>
                                    {booking.payment_status.charAt(0).toUpperCase() + booking.payment_status.slice(1)}
                                </span>
                            )}
                            {booking.is_round_trip && (
                                <span className="text-[10px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30 rounded-full px-2 py-0.5">↩ Round Trip</span>
                            )}
                            <Select value={booking.status} onValueChange={(val) => onStatusChange(booking.id, val as BookingStatus)} disabled={isUpdating}>
                                <SelectTrigger className="h-7 w-[130px] bg-neutral-800 border-neutral-600 text-xs ml-auto">
                                    {isUpdating ? <Loader2 className="w-3 h-3 animate-spin" /> : <SelectValue />}
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Actions row 1 */}
                        <div className="flex gap-1.5">
                            <a href={whatsappLink} target="_blank" rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-1 h-8 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/20 transition-colors">
                                <MessageCircle className="w-3.5 h-3.5" /> WA
                            </a>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-1 h-8 px-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/20 transition-colors">
                                        Templates <ChevronDown className="w-3 h-3" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-neutral-800 border-neutral-700 text-white w-52">
                                    <DropdownMenuLabel className="text-neutral-400 text-xs">WhatsApp Templates</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-neutral-700" />
                                    {WA_TEMPLATES(booking).map(t => (
                                        <DropdownMenuItem key={t.label} asChild>
                                            <a href={`https://wa.me/${phone}?text=${encodeURIComponent(t.message)}`} target="_blank" rel="noreferrer"
                                                className="text-sm text-white cursor-pointer">
                                                {t.label}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <a href={mailtoLink} className="flex-1 flex items-center justify-center gap-1 h-8 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/20 transition-colors">
                                <Mail className="w-3.5 h-3.5" /> Email
                            </a>
                            <a href={mapsUrl} target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-1 h-8 px-2.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/20 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" /> Maps
                            </a>
                        </div>

                        {/* Actions row 2 */}
                        <div className="flex gap-1.5">
                            <button onClick={() => setQuoteOpen(true)} className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 text-xs font-medium border border-yellow-500/20 transition-colors">
                                <FileText className="w-3 h-3" /> Quote
                            </button>
                            <button onClick={() => setInvoiceOpen(true)} className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/20 transition-colors">
                                <FileText className="w-3 h-3" /> Invoice
                            </button>
                            <button onClick={() => setReceiptOpen(true)} className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/20 transition-colors">
                                <FileText className="w-3 h-3" /> Receipt
                            </button>
                            <button onClick={() => setVoucherOpen(true)} className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-medium border border-cyan-500/20 transition-colors">
                                <Printer className="w-3 h-3" /> Voucher
                            </button>
                        </div>

                        {/* Actions row 3 */}
                        <div className="flex gap-1.5">
                            <button onClick={handleDuplicate} disabled={duplicating}
                                className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-300 text-xs font-medium border border-neutral-600 transition-colors disabled:opacity-50">
                                {duplicating ? <Loader2 className="w-3 h-3 animate-spin" /> : <RotateCcw className="w-3 h-3" />} Duplicate
                            </button>
                            <button onClick={handleResendEmail} disabled={resending}
                                className="flex-1 flex items-center justify-center gap-1 h-7 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-300 text-xs font-medium border border-neutral-600 transition-colors disabled:opacity-50">
                                {resending ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />} Resend Email
                            </button>
                        </div>
                    </div>

                    {/* ── Tabs ───────────────────────────────────────────────────── */}
                    <div className="flex border-b border-neutral-800 bg-neutral-900 shrink-0">
                        {TABS.map(t => (
                            <button key={t.key} onClick={() => setActiveTab(t.key)}
                                className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${activeTab === t.key
                                    ? 'text-yellow-400 border-b-2 border-yellow-400 bg-neutral-950'
                                    : 'text-neutral-500 hover:text-neutral-300'}`}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* ── Body ───────────────────────────────────────────────────── */}
                    <div className="flex-1 overflow-y-auto">

                        {/* ── DETAILS TAB ──────────────────────────────────────── */}
                        {activeTab === 'details' && (
                            <div className="p-4 space-y-5">
                                {/* Customer */}
                                <div>
                                    <SectionLabel>Customer</SectionLabel>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <Users className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-0.5">Full Name</p>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-sm font-medium text-white">{booking.customer_name}</span>
                                                    <CopyBtn text={booking.customer_name} label="Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <MessageCircle className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-0.5">Phone</p>
                                                <div className="flex items-center gap-1.5">
                                                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-sm font-medium text-green-400 hover:text-green-300">{booking.customer_phone}</a>
                                                    <CopyBtn text={booking.customer_phone} label="Phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <Mail className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-0.5">Email</p>
                                                <div className="flex items-center gap-1.5">
                                                    <a href={`mailto:${booking.customer_email}`} className="text-sm font-medium text-blue-400 hover:text-blue-300 truncate">{booking.customer_email}</a>
                                                    <CopyBtn text={booking.customer_email} label="Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="bg-neutral-800" />

                                {/* Trip */}
                                <div>
                                    <SectionLabel>Trip</SectionLabel>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <MapPin className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-0.5">Route</p>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="text-sm font-medium text-white leading-snug">
                                                        <span className="text-green-400">{booking.pickup_location}</span>
                                                        <span className="text-neutral-500 mx-1.5">→</span>
                                                        <span className="text-red-400">{booking.destination}</span>
                                                    </div>
                                                </div>
                                                <a href={mapsUrl} target="_blank" rel="noreferrer"
                                                    className="inline-flex items-center gap-1 mt-1 text-[10px] text-orange-400 hover:text-orange-300">
                                                    <ExternalLink className="w-2.5 h-2.5" /> Open in Maps
                                                </a>
                                            </div>
                                        </div>
                                        <DetailRow icon={Calendar} label="Date">{booking.pickup_date}</DetailRow>
                                        <DetailRow icon={Clock} label="Time">{booking.pickup_time}</DetailRow>

                                        {/* Round trip toggle */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <ArrowLeftRight className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className="text-[11px] text-neutral-500">Round Trip</p>
                                                    <button
                                                        onClick={() => setRoundTrip(v => !v)}
                                                        className={`relative w-10 h-5 rounded-full transition-colors ${roundTrip ? 'bg-yellow-500' : 'bg-neutral-700'}`}>
                                                        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${roundTrip ? 'translate-x-5' : 'translate-x-0.5'}`} />
                                                    </button>
                                                </div>
                                                {roundTrip && (
                                                    <div className="space-y-2 mt-2">
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div>
                                                                <label className="text-[10px] text-neutral-500 block mb-1">Return Date</label>
                                                                <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)}
                                                                    className="w-full px-2 py-1.5 bg-neutral-800 border border-neutral-600 rounded-lg text-xs text-white focus:outline-none focus:border-yellow-500/50" />
                                                            </div>
                                                            <div>
                                                                <label className="text-[10px] text-neutral-500 block mb-1">Return Time</label>
                                                                <input type="time" value={returnTime} onChange={e => setReturnTime(e.target.value)}
                                                                    className="w-full px-2 py-1.5 bg-neutral-800 border border-neutral-600 rounded-lg text-xs text-white focus:outline-none focus:border-yellow-500/50" />
                                                            </div>
                                                        </div>
                                                        <Button onClick={handleRoundTripSave} disabled={savingRoundTrip} size="sm"
                                                            className="h-7 text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-1">
                                                            {savingRoundTrip ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />} Save Round Trip
                                                        </Button>
                                                    </div>
                                                )}
                                                {!roundTrip && booking.is_round_trip && (
                                                    <Button onClick={handleRoundTripSave} disabled={savingRoundTrip} size="sm" variant="ghost"
                                                        className="h-6 text-xs text-neutral-500 mt-1 px-0">
                                                        {savingRoundTrip ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : null} Set to one-way
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="bg-neutral-800" />

                                {/* Ride */}
                                <div>
                                    <SectionLabel>Ride</SectionLabel>
                                    <div className="space-y-3">
                                        <DetailRow icon={Car} label="Vehicle">{booking.vehicle_type}</DetailRow>
                                        <DetailRow icon={Users} label="Passengers">{booking.passengers} <span className="text-neutral-500 font-normal">people</span></DetailRow>
                                        <DetailRow icon={PackageOpen} label="Luggage">{booking.luggage} <span className="text-neutral-500 font-normal">bags</span></DetailRow>
                                        {booking.special_requests && (
                                            <DetailRow icon={StickyNote} label="Special Requests">
                                                <span className="text-neutral-300 font-normal">{booking.special_requests}</span>
                                            </DetailRow>
                                        )}
                                    </div>
                                </div>

                                <Separator className="bg-neutral-800" />

                                {/* Operations */}
                                <div>
                                    <SectionLabel>Operations</SectionLabel>
                                    <div className="space-y-3">
                                        {/* Driver */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <UserCheck className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-1">Driver Assigned</p>
                                                {driverEdit ? (
                                                    <div className="space-y-2">
                                                        {availableDrivers.length > 0 ? (
                                                            <Select value={driverInput} onValueChange={setDriverInput}>
                                                                <SelectTrigger className="h-8 text-sm bg-neutral-800 border-neutral-600 text-white">
                                                                    <SelectValue placeholder="Select driver..." />
                                                                </SelectTrigger>
                                                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                                                    {availableDrivers.map(d => (
                                                                        <SelectItem key={d.id} value={d.name}>
                                                                            {d.name}
                                                                            {d.status === 'available' && <span className="ml-2 text-green-400 text-[10px]">● available</span>}
                                                                            {d.status === 'on_trip' && <span className="ml-2 text-yellow-400 text-[10px]">● on trip</span>}
                                                                            {d.status === 'off_duty' && <span className="ml-2 text-neutral-500 text-[10px]">● off duty</span>}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        ) : (
                                                            <Input autoFocus placeholder="Driver name" value={driverInput}
                                                                onChange={e => setDriverInput(e.target.value)}
                                                                onKeyDown={e => { if (e.key === 'Enter') handleDriverSave(); if (e.key === 'Escape') setDriverEdit(false) }}
                                                                className="h-8 text-sm bg-neutral-800 border-neutral-600 text-white" />
                                                        )}
                                                        <div className="flex gap-2">
                                                            <button onClick={handleDriverSave} disabled={savingDriver} className="text-green-400 hover:text-green-300">
                                                                {savingDriver ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                                            </button>
                                                            <button onClick={() => setDriverEdit(false)} className="text-neutral-500 hover:text-neutral-300"><X className="w-4 h-4" /></button>
                                                        </div>
                                                    </div>
                                                ) : booking.driver_assigned ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-green-400">{booking.driver_assigned}</span>
                                                        <button onClick={() => { setDriverInput(booking.driver_assigned || ''); setDriverEdit(true) }} className="text-neutral-600 hover:text-neutral-300"><Pencil className="w-3 h-3" /></button>
                                                    </div>
                                                ) : (
                                                    <button onClick={() => setDriverEdit(true)} className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center gap-1">
                                                        <UserCheck className="w-3.5 h-3.5" /> Assign Driver
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <BadgeDollarSign className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-1">Price (SAR)</p>
                                                {priceEdit ? (
                                                    <div className="flex items-center gap-2">
                                                        <Input autoFocus type="number" placeholder="0" value={priceInput}
                                                            onChange={e => setPriceInput(e.target.value)}
                                                            onKeyDown={e => { if (e.key === 'Enter') handlePriceSave(); if (e.key === 'Escape') setPriceEdit(false) }}
                                                            className="h-8 text-sm bg-neutral-800 border-neutral-600 text-white" />
                                                        <button onClick={handlePriceSave} disabled={savingPrice} className="text-green-400 hover:text-green-300">
                                                            {savingPrice ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                                        </button>
                                                        <button onClick={() => setPriceEdit(false)} className="text-neutral-500 hover:text-neutral-300"><X className="w-4 h-4" /></button>
                                                    </div>
                                                ) : booking.total_price ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-base font-bold text-green-400">SAR {booking.total_price.toLocaleString()}</span>
                                                        <button onClick={() => { setPriceInput(String(booking.total_price || '')); setPriceEdit(true) }} className="text-neutral-600 hover:text-neutral-300"><Pencil className="w-3 h-3" /></button>
                                                    </div>
                                                ) : (
                                                    <button onClick={() => setPriceEdit(true)} className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center gap-1">
                                                        <BadgeDollarSign className="w-3.5 h-3.5" /> Set Price
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        {/* Admin notes */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                                                <StickyNote className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[11px] text-neutral-500 mb-1">Admin Notes <span className="text-neutral-700">(internal)</span></p>
                                                {noteEdit ? (
                                                    <div className="space-y-2">
                                                        <Textarea value={noteInput} onChange={e => setNoteInput(e.target.value)}
                                                            placeholder="Internal notes..." rows={3}
                                                            className="text-sm bg-neutral-800 border-neutral-600 text-white resize-none" />
                                                        <div className="flex gap-2">
                                                            <Button onClick={handleNoteSave} disabled={savingNote} size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400 h-7 text-xs font-bold">
                                                                {savingNote ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Check className="w-3 h-3 mr-1" />} Save
                                                            </Button>
                                                            <Button onClick={() => setNoteEdit(false)} size="sm" variant="ghost" className="h-7 text-xs text-neutral-400">Cancel</Button>
                                                        </div>
                                                    </div>
                                                ) : booking.admin_notes ? (
                                                    <div className="flex items-start gap-2">
                                                        <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-300 whitespace-pre-wrap">{booking.admin_notes}</div>
                                                        <button onClick={() => { setNoteInput(booking.admin_notes || ''); setNoteEdit(true) }} className="text-neutral-600 hover:text-neutral-300 mt-2 shrink-0"><Pencil className="w-3 h-3" /></button>
                                                    </div>
                                                ) : (
                                                    <button onClick={() => { setNoteInput(''); setNoteEdit(true) }} className="text-sm text-neutral-500 hover:text-neutral-300 flex items-center gap-1">
                                                        <Pencil className="w-3 h-3" /> Add note
                                                    </button>
                                                )}
                                            </div>
                                        </div>

                                        <DetailRow icon={CalendarClock} label="Booking Received">
                                            <span className="text-neutral-400 font-normal text-xs">{createdAt}</span>
                                        </DetailRow>
                                    </div>
                                </div>

                                <Separator className="bg-neutral-800" />

                                {/* Pre-trip Checklist */}
                                <div>
                                    <SectionLabel>Pre-Trip Checklist</SectionLabel>
                                    <div className="space-y-2">
                                        {CHECKLIST_ITEMS.map(item => {
                                            const done = !!checklist[item.key]
                                            return (
                                                <button key={item.key} onClick={() => setChecklist(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                                    className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-neutral-800 transition-colors text-left">
                                                    {done
                                                        ? <CheckSquare className="w-4 h-4 text-green-400 shrink-0" />
                                                        : <Square className="w-4 h-4 text-neutral-600 shrink-0" />}
                                                    <span className={`text-sm ${done ? 'text-neutral-500 line-through' : 'text-neutral-300'}`}>{item.label}</span>
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── PAYMENT TAB ───────────────────────────────────────── */}
                        {activeTab === 'payment' && (
                            <div className="p-4 space-y-5">
                                {/* Payment status */}
                                <div>
                                    <SectionLabel>Payment Status</SectionLabel>
                                    <div className="flex gap-2">
                                        {(['unpaid', 'partial', 'paid'] as PaymentStatus[]).map(s => (
                                            <button key={s} onClick={() => setPaymentStatus(s)}
                                                className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all capitalize ${paymentStatus === s
                                                    ? PAYMENT_STATUS_STYLES[s] + ' ring-1 ring-current'
                                                    : 'bg-neutral-800 text-neutral-500 border-neutral-700 hover:border-neutral-500'}`}>
                                                {s === 'unpaid' ? '✗ Unpaid' : s === 'partial' ? '⊙ Partial' : '✓ Paid'}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment method */}
                                <div>
                                    <SectionLabel>Payment Method</SectionLabel>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { key: 'cash', label: 'Cash' },
                                            { key: 'bank_transfer', label: 'Bank Transfer' },
                                            { key: 'online', label: 'Online' },
                                            { key: 'other', label: 'Other' },
                                        ].map(m => (
                                            <button key={m.key} onClick={() => setPaymentMethod(m.key as PaymentMethod)}
                                                className={`py-2 rounded-xl text-xs font-semibold border transition-all ${paymentMethod === m.key
                                                    ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                                                    : 'bg-neutral-800 text-neutral-400 border-neutral-700 hover:border-neutral-500'}`}>
                                                {m.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Amount paid */}
                                <div>
                                    <SectionLabel>Amount Paid (SAR)</SectionLabel>
                                    <Input type="number" placeholder="0.00" value={amountPaid}
                                        onChange={e => setAmountPaid(e.target.value)}
                                        className="bg-neutral-800 border-neutral-700 text-white text-base font-bold" />
                                </div>

                                {/* Balance due */}
                                {booking.total_price && (
                                    <div className="bg-neutral-800 rounded-xl p-4 space-y-2 border border-neutral-700">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400">Total Price</span>
                                            <span className="text-white font-semibold">SAR {booking.total_price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-neutral-400">Amount Paid</span>
                                            <span className="text-green-400 font-semibold">SAR {parseFloat(amountPaid || '0').toLocaleString()}</span>
                                        </div>
                                        <div className="border-t border-neutral-700 pt-2 flex justify-between text-sm font-bold">
                                            <span className="text-neutral-300">Balance Due</span>
                                            <span className={balance && balance > 0 ? 'text-red-400' : 'text-green-400'}>
                                                SAR {((booking.total_price) - parseFloat(amountPaid || '0')).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <Button onClick={handlePaymentSave} disabled={savingPayment} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-2">
                                    {savingPayment ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
                                    Save Payment Info
                                </Button>
                            </div>
                        )}

                        {/* ── TIMELINE TAB ──────────────────────────────────────── */}
                        {activeTab === 'timeline' && (
                            <div className="p-4 space-y-5">
                                {/* Activity log */}
                                <div>
                                    <SectionLabel>Activity Log</SectionLabel>
                                    {logsSetupNeeded ? (
                                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                                            <p className="text-amber-400 font-semibold text-sm mb-2 flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4" /> Setup Required
                                            </p>
                                            <p className="text-neutral-400 text-xs mb-3">Run this SQL in Supabase to enable activity logging:</p>
                                            <pre className="bg-neutral-950 rounded-lg p-3 text-xs text-green-400 overflow-x-auto border border-neutral-800">{`CREATE TABLE booking_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id)
    ON DELETE CASCADE,
  action VARCHAR(100) NOT NULL,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE booking_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admin access" ON booking_logs
  FOR ALL USING (auth.role() = 'authenticated');`}</pre>
                                        </div>
                                    ) : logsLoading ? (
                                        <div className="space-y-2">
                                            {[1, 2, 3].map(i => <div key={i} className="h-12 bg-neutral-800 rounded-xl animate-pulse" />)}
                                        </div>
                                    ) : logs.length === 0 ? (
                                        <div className="bg-neutral-800 rounded-xl p-6 text-center border border-neutral-700">
                                            <History className="w-8 h-8 text-neutral-600 mx-auto mb-2" />
                                            <p className="text-neutral-500 text-sm">No activity yet</p>
                                            <p className="text-neutral-600 text-xs mt-1">Changes will appear here</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            {logs.map(log => (
                                                <div key={log.id} className="flex gap-3 p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-white">{log.action}</p>
                                                        {log.details && <p className="text-xs text-neutral-500 mt-0.5">{log.details}</p>}
                                                        <p className="text-[10px] text-neutral-600 mt-1">
                                                            {new Date(log.created_at).toLocaleString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Customer history */}
                                <div>
                                    <SectionLabel>Customer&apos;s Other Bookings ({customerHistory.length})</SectionLabel>
                                    {customerHistory.length === 0 ? (
                                        <div className="bg-neutral-800 rounded-xl p-4 text-center border border-neutral-700">
                                            <p className="text-neutral-500 text-sm">First-time customer</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            {customerHistory.map(b => (
                                                <div key={b.id} className="bg-neutral-800 rounded-xl p-3 border border-neutral-700 space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <StatusBadge status={b.status} />
                                                        <span className="text-xs text-neutral-500">{b.pickup_date}</span>
                                                    </div>
                                                    <p className="text-xs text-neutral-300">{b.pickup_location} → {b.destination}</p>
                                                    {b.total_price && <p className="text-xs font-bold text-green-400">SAR {b.total_price.toLocaleString()}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Booking meta */}
                                <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
                                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Booking Info</p>
                                    <div className="space-y-1.5 text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">ID</span>
                                            <div className="flex items-center gap-1">
                                                <span className="font-mono text-neutral-300">{booking.id.slice(0, 8).toUpperCase()}</span>
                                                <CopyBtn text={booking.id} label="ID" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-500">Created</span>
                                            <span className="text-neutral-300">{createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>

            <QuotationModal booking={booking} open={quoteOpen} onClose={() => setQuoteOpen(false)} />
            <InvoiceModal booking={booking} open={invoiceOpen} onClose={() => setInvoiceOpen(false)} />
            <ReceiptModal booking={booking} open={receiptOpen} onClose={() => setReceiptOpen(false)} />
            <DriverVoucherModal booking={booking} open={voucherOpen} onClose={() => setVoucherOpen(false)} />
        </>
    )
}
