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

export default function DriverVoucherModal({ booking, open, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [busy, setBusy] = useState(false)

    if (!booking) return null

    const filename = `VOC-HT${booking.id.slice(0, 8).toUpperCase()}-${booking.pickup_date}.pdf`

    const handleDownload = async () => {
        if (!ref.current) return
        setBusy(true)
        try { await downloadPDF(ref.current, filename) }
        catch { toast.error('Download failed') }
        setBusy(false)
    }

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

    const tripRows = [
        ['Date', booking.pickup_date],
        ['Pickup Time', booking.pickup_time],
        ['Vehicle', booking.vehicle_type],
        ['Passengers', String(booking.passengers)],
        ['Luggage', `${booking.luggage} bags`],
        ...(booking.is_round_trip ? [['Trip Type', 'Round Trip ↩']] : [['Trip Type', 'One Way']]),
        ...(booking.return_date ? [['Return Date', `${booking.return_date}${booking.return_time ? ' at ' + booking.return_time : ''}`]] : []),
    ]

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-2xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8 shrink-0">
                    <div>
                        <DialogTitle className="text-white">Driver Voucher</DialogTitle>
                        <p className="text-[11px] text-neutral-500 mt-0.5 font-mono">{filename}</p>
                    </div>
                    <Button onClick={handleDownload} disabled={busy}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold gap-2" size="sm">
                        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {busy ? 'Generating...' : 'Download PDF'}
                    </Button>
                </DialogHeader>

                {/* A4 document */}
                <div ref={ref} className="bg-white text-gray-900 rounded-lg"
                    style={{ fontFamily: '"Segoe UI", Arial, sans-serif', width: '210mm', padding: '14mm 18mm' }}>

                    {/* Top bar */}
                    <div style={{ height: '6px', background: 'linear-gradient(90deg,#001f3f,#d4af37)', borderRadius: '4px', marginBottom: '24px' }} />

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div>
                            <div style={{ fontSize: '26px', fontWeight: 900, color: '#001f3f' }}>
                                Haram<span style={{ color: '#d4af37' }}>Taxi</span>
                            </div>
                            <div style={{ fontSize: '10px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Driver Trip Voucher</div>
                        </div>
                        <div style={{ background: '#001f3f', color: '#d4af37', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '6px' }}>
                            VOUCHER
                        </div>
                    </div>

                    {/* Driver box */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#f8f9fb', border: '2px dashed #d4af37', borderRadius: '12px', padding: '14px 18px', marginBottom: '18px' }}>
                        <div style={{ width: '50px', height: '50px', background: '#001f3f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4af37', fontSize: '20px', fontWeight: 900, flexShrink: 0 }}>
                            {(booking.driver_assigned || 'D').charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Assigned Driver</div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: '#001f3f', marginTop: '2px' }}>{booking.driver_assigned || 'Not Assigned'}</div>
                        </div>
                    </div>

                    {/* Route box */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#001f3f', borderRadius: '10px', padding: '14px 18px', marginBottom: '18px' }}>
                        <div>
                            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>From</div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>{booking.pickup_location}</div>
                        </div>
                        <div style={{ color: '#d4af37', fontSize: '20px', fontWeight: 900, flexShrink: 0 }}>→</div>
                        <div>
                            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>To</div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>{booking.destination}</div>
                        </div>
                    </div>

                    {/* Trip details */}
                    <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', borderBottom: '1px solid #e5e7eb', paddingBottom: '5px', marginBottom: '10px' }}>
                        Trip Details
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '18px', fontSize: '12px' }}>
                        <tbody>
                            {tripRows.map(([l, v]) => (
                                <tr key={l}>
                                    <td style={{ padding: '7px 0', color: '#888', width: '40%' }}>{l}</td>
                                    <td style={{ padding: '7px 0', fontWeight: 600, color: '#1a1a2e', borderBottom: '1px solid #f5f5f5' }}>{v}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Customer */}
                    <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', borderBottom: '1px solid #e5e7eb', paddingBottom: '5px', marginBottom: '10px' }}>
                        Customer
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '18px', fontSize: '12px' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '7px 0', color: '#888', width: '40%' }}>Name</td>
                                <td style={{ padding: '7px 0', fontWeight: 600, color: '#1a1a2e', borderBottom: '1px solid #f5f5f5' }}>{booking.customer_name}</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '7px 0', color: '#888' }}>Phone</td>
                                <td style={{ padding: '7px 0', fontWeight: 700, color: '#16a34a' }}>{booking.customer_phone}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Special instructions */}
                    {(booking.special_requests || booking.admin_notes) && (
                        <>
                            <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', borderBottom: '1px solid #e5e7eb', paddingBottom: '5px', marginBottom: '10px' }}>
                                Instructions
                            </div>
                            {booking.special_requests && (
                                <div style={{ background: '#fffbeb', border: '1px solid #fef08a', borderRadius: '8px', padding: '10px 13px', fontSize: '12px', color: '#92400e', marginBottom: '8px' }}>
                                    <strong>Customer: </strong>{booking.special_requests}
                                </div>
                            )}
                            {booking.admin_notes && (
                                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '10px 13px', fontSize: '12px', color: '#1e40af', marginBottom: '8px' }}>
                                    <strong>Admin: </strong>{booking.admin_notes}
                                </div>
                            )}
                        </>
                    )}

                    {/* Footer + signature */}
                    <div style={{ borderTop: '2px dashed #e5e7eb', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '8px' }}>
                        <div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#001f3f' }}>
                                Haram<span style={{ color: '#d4af37' }}>Taxi</span> Service
                            </div>
                            <div style={{ fontSize: '10px', color: '#aaa', marginTop: '3px' }}>+966 57 580 6733 · #{booking.id.slice(0,8).toUpperCase()} · {today}</div>
                        </div>
                        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '8px 18px', textAlign: 'center' }}>
                            <div style={{ fontSize: '9px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Driver Signature</div>
                            <div style={{ marginTop: '18px', borderBottom: '1px solid #ccc', width: '130px' }} />
                        </div>
                    </div>

                    <div style={{ height: '4px', background: 'linear-gradient(90deg,#d4af37,#001f3f)', borderRadius: '4px', marginTop: '20px' }} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
