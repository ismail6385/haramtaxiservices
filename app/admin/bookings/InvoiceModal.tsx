'use client'

import { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Download, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { downloadPDF } from './downloadPDF'
import type { Booking } from './types'

interface Props {
    booking: Booking | null
    open: boolean
    onClose: () => void
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

function invoiceNumber(id: string) {
    return 'INV-' + id.replace(/-/g, '').slice(0, 8).toUpperCase()
}

function vatCalc(total: number) {
    const base = Math.round((total / 1.15) * 100) / 100
    const vat = Math.round((total - base) * 100) / 100
    return { base, vat }
}

export default function InvoiceModal({ booking, open, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [busy, setBusy] = useState(false)

    if (!booking) return null

    const filename = `INV-HT${booking.id.slice(0, 8).toUpperCase()}-${booking.pickup_date}.pdf`

    const handleDownload = async () => {
        if (!ref.current) return
        setBusy(true)
        try { await downloadPDF(ref.current, filename) }
        catch { toast.error('Download failed') }
        setBusy(false)
    }

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const due = new Date(); due.setDate(due.getDate() + 7)
    const dueStr = due.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const price = booking.total_price
    const vat = price ? vatCalc(price) : null
    const isPaid = booking.payment_status === 'paid'

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-3xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8 shrink-0">
                    <div>
                        <DialogTitle className="text-white">Invoice</DialogTitle>
                        <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">{filename}</p>
                    </div>
                    <Button onClick={handleDownload} disabled={busy}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold gap-2" size="sm">
                        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {busy ? 'Generating...' : 'Download PDF'}
                    </Button>
                </DialogHeader>

                {/* A4 document */}
                <div ref={ref} className="bg-white text-gray-900 rounded-lg"
                    style={{ fontFamily: '"Segoe UI", Arial, sans-serif', width: '210mm', padding: '16mm 18mm', position: 'relative' }}>

                    {/* Watermark */}
                    {isPaid && (
                        <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%) rotate(-30deg)', fontSize: '72px', fontWeight: 900, color: 'rgba(22,163,74,0.08)', letterSpacing: '6px', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
                            PAID
                        </div>
                    )}
                    {!isPaid && (
                        <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%,-50%) rotate(-30deg)', fontSize: '72px', fontWeight: 900, color: 'rgba(239,68,68,0.07)', letterSpacing: '6px', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
                            UNPAID
                        </div>
                    )}

                    {/* Gold top bar */}
                    <div style={{ height: '6px', background: 'linear-gradient(90deg,#001f3f,#d4af37)', borderRadius: '4px', marginBottom: '28px' }} />

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                        <div>
                            <div style={{ fontSize: '28px', fontWeight: 900, color: '#001f3f' }}>
                                Haram<span style={{ color: '#d4af37' }}>Taxi</span>
                            </div>
                            <div style={{ fontSize: '11px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>
                                Premium Transport · Saudi Arabia
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '28px', fontWeight: 900, color: '#001f3f', letterSpacing: '2px', textTransform: 'uppercase' }}>INVOICE</div>
                            <div style={{ fontSize: '12px', color: '#555', fontFamily: 'monospace', marginTop: '4px' }}>{invoiceNumber(booking.id)}</div>
                            <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>Issue: {today}</div>
                            <div style={{ fontSize: '11px', color: '#888' }}>Due: {dueStr}</div>
                            <div style={{ display: 'inline-block', marginTop: '6px', background: isPaid ? '#16a34a' : '#dc2626', color: '#fff', fontSize: '10px', fontWeight: 800, letterSpacing: '2px', padding: '3px 10px', borderRadius: '4px' }}>
                                {isPaid ? 'PAID' : 'UNPAID'}
                            </div>
                        </div>
                    </div>

                    {/* Bill to / From */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ background: '#f8f9fb', padding: '14px 18px', borderRadius: '8px', borderLeft: '4px solid #001f3f' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', marginBottom: '6px' }}>Bill To</div>
                            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e' }}>{booking.customer_name}</div>
                            <div style={{ fontSize: '12px', color: '#555', marginTop: '3px' }}>{booking.customer_phone}</div>
                            <div style={{ fontSize: '12px', color: '#555' }}>{booking.customer_email}</div>
                        </div>
                        <div style={{ background: '#f8f9fb', padding: '14px 18px', borderRadius: '8px', borderLeft: '4px solid #d4af37' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', marginBottom: '6px' }}>Issued By</div>
                            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e' }}>Haram Taxi Service</div>
                            <div style={{ fontSize: '12px', color: '#555', marginTop: '3px' }}>+966 57 580 6733</div>
                            <div style={{ fontSize: '12px', color: '#555' }}>haramtaxiservice@gmail.com</div>
                        </div>
                    </div>

                    {/* Services table */}
                    <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', borderBottom: '1px solid #e5e7eb', paddingBottom: '6px', marginBottom: '10px' }}>
                        Services
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '12px' }}>
                        <thead>
                            <tr style={{ background: '#001f3f', color: '#fff' }}>
                                <th style={{ textAlign: 'left', padding: '9px 13px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Description</th>
                                <th style={{ textAlign: 'left', padding: '9px 13px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Details</th>
                                <th style={{ textAlign: 'right', padding: '9px 13px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px 13px', color: '#333', borderBottom: '1px solid #f0f0f0', fontWeight: 600 }}>Private Transfer</td>
                                <td style={{ padding: '10px 13px', color: '#555', borderBottom: '1px solid #f0f0f0', fontSize: '11px', lineHeight: 1.6 }}>
                                    {booking.pickup_location} → {booking.destination}<br />
                                    {formatDate(booking.pickup_date)} at {booking.pickup_time}<br />
                                    {booking.vehicle_type} · {booking.passengers} Passengers
                                    {booking.is_round_trip && booking.return_date ? `\nReturn: ${booking.return_date}` : ''}
                                </td>
                                <td style={{ padding: '10px 13px', borderBottom: '1px solid #f0f0f0', textAlign: 'right', fontWeight: 700, color: '#1a1a2e' }}>
                                    {price ? `SAR ${price.toLocaleString()}` : 'TBD'}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* VAT breakdown */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                        <div style={{ background: '#f8f9fb', borderRadius: '10px', padding: '16px 20px', minWidth: '240px' }}>
                            {vat && price ? (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                                        <span style={{ color: '#666' }}>Subtotal (excl. VAT)</span>
                                        <span style={{ fontWeight: 600 }}>SAR {vat.base.toFixed(2)}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                                        <span style={{ color: '#666' }}>VAT (15%)</span>
                                        <span style={{ fontWeight: 600 }}>SAR {vat.vat.toFixed(2)}</span>
                                    </div>
                                    <div style={{ borderTop: '2px solid #001f3f', paddingTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ fontWeight: 800, color: '#001f3f', fontSize: '13px' }}>Total</span>
                                        <span style={{ fontWeight: 900, color: '#001f3f', fontSize: '16px' }}>SAR {price.toLocaleString()}</span>
                                    </div>
                                </>
                            ) : (
                                <div style={{ fontSize: '13px', color: '#888', textAlign: 'center' }}>Amount to be confirmed</div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#001f3f' }}>
                            Haram<span style={{ color: '#d4af37' }}>Taxi</span> Service
                        </div>
                        <div style={{ fontSize: '11px', color: '#aaa' }}>
                            +966 57 580 6733 · haramtaxiservice.com
                        </div>
                    </div>

                    <div style={{ height: '5px', background: 'linear-gradient(90deg,#d4af37,#001f3f)', borderRadius: '4px', marginTop: '20px' }} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
