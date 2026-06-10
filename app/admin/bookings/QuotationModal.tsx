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
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

function quoteNumber(id: string) {
    return 'QT-' + id.replace(/-/g, '').slice(0, 8).toUpperCase()
}

export default function QuotationModal({ booking, open, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [busy, setBusy] = useState(false)

    if (!booking) return null

    const filename = `QT-HT${booking.id.slice(0, 8).toUpperCase()}-${booking.pickup_date}.pdf`

    const handleDownload = async () => {
        if (!ref.current) return
        setBusy(true)
        try { await downloadPDF(ref.current, filename) }
        catch { toast.error('Download failed') }
        setBusy(false)
    }

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

    const rows = [
        ['Pickup Location', booking.pickup_location],
        ['Destination', booking.destination],
        ['Travel Date', formatDate(booking.pickup_date)],
        ['Pickup Time', booking.pickup_time],
        ['Vehicle Type', booking.vehicle_type],
        ['Passengers', String(booking.passengers)],
        ['Luggage Bags', String(booking.luggage)],
        ...(booking.is_round_trip ? [['Trip Type', 'Round Trip ↩']] : []),
        ...(booking.return_date ? [['Return Date', `${booking.return_date}${booking.return_time ? ' at ' + booking.return_time : ''}`]] : []),
        ...(booking.driver_assigned ? [['Assigned Driver', booking.driver_assigned]] : []),
    ]

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-3xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8 shrink-0">
                    <div>
                        <DialogTitle className="text-white">Quotation</DialogTitle>
                        <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">{filename}</p>
                    </div>
                    <Button onClick={handleDownload} disabled={busy}
                        className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold gap-2" size="sm">
                        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {busy ? 'Generating...' : 'Download PDF'}
                    </Button>
                </DialogHeader>

                {/* A4 document — captured by html2canvas */}
                <div ref={ref} className="bg-white text-gray-900 rounded-lg text-sm"
                    style={{ fontFamily: '"Segoe UI", Arial, sans-serif', width: '210mm', padding: '16mm 18mm' }}>

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px solid #001f3f', paddingBottom: '20px', marginBottom: '24px' }}>
                        <div>
                            <div style={{ fontSize: '28px', fontWeight: 900, color: '#001f3f', letterSpacing: '-0.5px' }}>
                                Haram<span style={{ color: '#d4af37' }}>Taxi</span>
                            </div>
                            <div style={{ fontSize: '11px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>
                                Premium Transport · Saudi Arabia
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '24px', fontWeight: 700, color: '#d4af37', letterSpacing: '3px', textTransform: 'uppercase' }}>Quotation</div>
                            <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', marginTop: '4px' }}>{quoteNumber(booking.id)}</div>
                            <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>Issued: {today}</div>
                            <div style={{ fontSize: '11px', color: '#f59e0b', marginTop: '2px', fontWeight: 600 }}>Valid 7 days</div>
                        </div>
                    </div>

                    {/* Parties */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ background: '#f8f9fb', borderLeft: '4px solid #001f3f', padding: '14px 18px', borderRadius: '0 8px 8px 0' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', marginBottom: '6px' }}>Quoted To</div>
                            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e' }}>{booking.customer_name}</div>
                            <div style={{ fontSize: '12px', color: '#555', marginTop: '3px' }}>{booking.customer_phone}</div>
                            <div style={{ fontSize: '12px', color: '#555' }}>{booking.customer_email}</div>
                        </div>
                        <div style={{ background: '#f8f9fb', borderLeft: '4px solid #d4af37', padding: '14px 18px', borderRadius: '0 8px 8px 0' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', marginBottom: '6px' }}>Service Provider</div>
                            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e' }}>Haram Taxi Service</div>
                            <div style={{ fontSize: '12px', color: '#555', marginTop: '3px' }}>+966 57 580 6733</div>
                            <div style={{ fontSize: '12px', color: '#555' }}>haramtaxiservice@gmail.com</div>
                        </div>
                    </div>

                    {/* Trip table */}
                    <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', borderBottom: '1px solid #e5e7eb', paddingBottom: '6px', marginBottom: '10px' }}>
                        Trip Details
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '12px' }}>
                        <thead>
                            <tr style={{ background: '#001f3f', color: '#fff' }}>
                                <th style={{ textAlign: 'left', padding: '9px 13px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Detail</th>
                                <th style={{ textAlign: 'left', padding: '9px 13px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(([label, value], i) => (
                                <tr key={label} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                                    <td style={{ padding: '9px 13px', color: '#666', borderBottom: '1px solid #f0f0f0' }}>{label}</td>
                                    <td style={{ padding: '9px 13px', fontWeight: 600, color: '#222', borderBottom: '1px solid #f0f0f0' }}>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Special requests */}
                    {booking.special_requests && (
                        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#92400e', marginBottom: '4px' }}>Special Requests</div>
                            <div style={{ fontSize: '12px', color: '#78350f' }}>{booking.special_requests}</div>
                        </div>
                    )}

                    {/* Price */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                        <div style={{ background: '#001f3f', color: '#fff', borderRadius: '12px', padding: '18px 28px', textAlign: 'right', minWidth: '220px' }}>
                            <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Total Fare</div>
                            {booking.total_price ? (
                                <>
                                    <div style={{ fontSize: '30px', fontWeight: 900, color: '#d4af37' }}>{booking.total_price.toLocaleString()}</div>
                                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>Saudi Riyal (SAR) · VAT incl.</div>
                                </>
                            ) : (
                                <div style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>To Be Quoted</div>
                            )}
                        </div>
                    </div>

                    {/* Terms */}
                    <div style={{ background: '#f8f9fb', borderRadius: '8px', padding: '14px 18px', marginBottom: '24px' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: '8px' }}>Terms &amp; Conditions</div>
                        <ul style={{ paddingLeft: '16px', margin: 0 }}>
                            {[
                                'This quotation is valid for 7 days from the date of issue.',
                                'Full payment or 50% deposit required to confirm the booking.',
                                'Cancellations made 24+ hours before pickup receive a full refund.',
                                'Waiting time exceeding 30 minutes may incur additional charges.',
                            ].map(t => <li key={t} style={{ fontSize: '11px', color: '#666', marginBottom: '3px', lineHeight: 1.5 }}>{t}</li>)}
                        </ul>
                    </div>

                    {/* Footer */}
                    <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#001f3f' }}>
                            Haram<span style={{ color: '#d4af37' }}>Taxi</span> Service
                        </div>
                        <div style={{ fontSize: '11px', color: '#aaa', textAlign: 'right' }}>
                            +966 57 580 6733 · haramtaxiservice.com
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
