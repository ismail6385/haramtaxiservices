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

function receiptNumber(id: string) {
    return 'RCP-' + id.replace(/-/g, '').slice(0, 8).toUpperCase()
}

function vatCalc(total: number) {
    const base = Math.round((total / 1.15) * 100) / 100
    const vat = Math.round((total - base) * 100) / 100
    return { base, vat }
}

export default function ReceiptModal({ booking, open, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [busy, setBusy] = useState(false)

    if (!booking) return null

    const filename = `RCP-HT${booking.id.slice(0, 8).toUpperCase()}-${booking.pickup_date}.pdf`

    const handleDownload = async () => {
        if (!ref.current) return
        setBusy(true)
        try { await downloadPDF(ref.current, filename) }
        catch { toast.error('Download failed') }
        setBusy(false)
    }

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const price = booking.total_price
    const vat = price ? vatCalc(price) : null

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-3xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8 shrink-0">
                    <div>
                        <DialogTitle className="text-white">Receipt</DialogTitle>
                        <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">{filename}</p>
                    </div>
                    <Button onClick={handleDownload} disabled={busy}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold gap-2" size="sm">
                        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {busy ? 'Generating...' : 'Download PDF'}
                    </Button>
                </DialogHeader>

                {/* A4 document */}
                <div ref={ref} className="bg-white text-gray-900 rounded-lg"
                    style={{ fontFamily: '"Segoe UI", Arial, sans-serif', width: '210mm', padding: '16mm 18mm' }}>

                    {/* Top bar */}
                    <div style={{ height: '8px', background: 'linear-gradient(90deg,#001f3f,#d4af37)', borderRadius: '4px', marginBottom: '28px' }} />

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <div style={{ fontSize: '32px', fontWeight: 900, color: '#001f3f', letterSpacing: '-1px' }}>
                            Haram<span style={{ color: '#d4af37' }}>Taxi</span>
                        </div>
                        <div style={{ fontSize: '10px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '3px' }}>
                            Premium Transport · Saudi Arabia
                        </div>
                        <div style={{ display: 'inline-block', background: '#d4af37', color: '#001f3f', fontSize: '12px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', padding: '5px 20px', borderRadius: '20px', marginTop: '14px' }}>
                            Payment Receipt
                        </div>
                    </div>

                    {/* PAID stamp */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '5px solid #16a34a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '26px', color: '#16a34a', fontWeight: 900 }}>✓</div>
                            <div style={{ fontSize: '10px', color: '#16a34a', fontWeight: 900, letterSpacing: '3px' }}>PAID</div>
                        </div>
                    </div>

                    {/* Meta rows */}
                    <div style={{ marginBottom: '16px' }}>
                        {[
                            ['Receipt No.', receiptNumber(booking.id)],
                            ['Date', today],
                            ['Received From', booking.customer_name],
                            ['Contact', booking.customer_phone],
                            ...(booking.driver_assigned ? [['Driver', booking.driver_assigned]] : []),
                        ].map(([l, v]) => (
                            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', background: '#f8f9fb', padding: '9px 14px', borderRadius: '8px', marginBottom: '5px' }}>
                                <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{l}</span>
                                <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a2e' }}>{v}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ border: 'none', borderTop: '1px dashed #ddd', margin: '16px 0' }} />

                    {/* Amount */}
                    <div style={{ background: '#001f3f', borderRadius: '14px', padding: '20px 28px', textAlign: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Amount Received</div>
                        {price ? (
                            <>
                                <div style={{ fontSize: '38px', fontWeight: 900, color: '#d4af37', letterSpacing: '-1px' }}>{price.toLocaleString()}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '3px' }}>Saudi Riyal (SAR)</div>
                            </>
                        ) : (
                            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>Amount Not Set</div>
                        )}
                    </div>

                    {/* Trip details */}
                    <div style={{ marginBottom: '14px' }}>
                        {[
                            ['Service', 'Private Transfer'],
                            ['Route', `${booking.pickup_location} → ${booking.destination}`],
                            ['Travel Date', `${formatDate(booking.pickup_date)} at ${booking.pickup_time}`],
                            ['Vehicle', `${booking.vehicle_type} · ${booking.passengers} Passengers`],
                            ...(booking.is_round_trip && booking.return_date ? [['Return Date', `${booking.return_date} ${booking.return_time || ''}`]] : []),
                        ].map(([l, v]) => (
                            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: '12px' }}>
                                <span style={{ color: '#666' }}>{l}</span>
                                <span style={{ fontWeight: 600, color: '#1a1a2e', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                            </div>
                        ))}
                    </div>

                    {/* VAT */}
                    {price && vat && (
                        <div style={{ background: '#f8f9fb', borderRadius: '8px', padding: '13px 16px', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '5px' }}>
                                <span style={{ color: '#888' }}>Subtotal (excl. VAT)</span>
                                <span style={{ fontWeight: 600 }}>SAR {vat.base.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '7px' }}>
                                <span style={{ color: '#888' }}>VAT (15%)</span>
                                <span style={{ fontWeight: 600 }}>SAR {vat.vat.toFixed(2)}</span>
                            </div>
                            <div style={{ borderTop: '2px solid #001f3f', paddingTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: 800, color: '#001f3f', fontSize: '12px' }}>Total Paid</span>
                                <span style={{ fontWeight: 900, color: '#001f3f', fontSize: '14px' }}>SAR {price.toLocaleString()}</span>
                            </div>
                        </div>
                    )}

                    <div style={{ border: 'none', borderTop: '1px dashed #e5e7eb', margin: '16px 0' }} />

                    {/* Thank you */}
                    <div style={{ textAlign: 'center', padding: '12px 0' }}>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: '#001f3f' }}>Thank you for choosing Haram Taxi!</div>
                        <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>We look forward to serving you again.</div>
                    </div>

                    {/* Footer */}
                    <div style={{ textAlign: 'center', borderTop: '1px dashed #e5e7eb', paddingTop: '14px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#001f3f' }}>
                            Haram<span style={{ color: '#d4af37' }}>Taxi</span> Service
                        </div>
                        <div style={{ fontSize: '10px', color: '#aaa', marginTop: '3px' }}>+966 57 580 6733 · haramtaxiservice.com</div>
                    </div>

                    <div style={{ height: '6px', background: 'linear-gradient(90deg,#d4af37,#001f3f)', borderRadius: '4px', marginTop: '20px' }} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
