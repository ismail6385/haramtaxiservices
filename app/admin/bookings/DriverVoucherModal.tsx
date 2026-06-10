'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'
import type { Booking } from './types'

interface Props {
    booking: Booking | null
    open: boolean
    onClose: () => void
}

export default function DriverVoucherModal({ booking, open, onClose }: Props) {
    if (!booking) return null

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

    const handlePrint = () => {
        const win = window.open('', '_blank', 'width=760,height=620')
        if (!win) return
        win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Driver Voucher – ${booking.id.slice(0,8).toUpperCase()}</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Segoe UI',Arial,sans-serif; color:#1a1a2e; background:#fff; }
.page { max-width:640px; margin:0 auto; padding:36px 44px; }
.top-bar { height:6px; background:linear-gradient(90deg,#001f3f,#d4af37); border-radius:4px; margin-bottom:28px; }
.header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px; }
.brand { font-size:26px; font-weight:900; color:#001f3f; }
.brand span { color:#d4af37; }
.brand-sub { font-size:10px; color:#888; letter-spacing:2px; text-transform:uppercase; margin-top:2px; }
.voucher-badge { background:#001f3f; color:#d4af37; font-size:11px; font-weight:800; letter-spacing:2px; text-transform:uppercase; padding:6px 14px; border-radius:6px; }
.driver-box { background:#f8f9fb; border:2px dashed #d4af37; border-radius:12px; padding:16px 20px; margin-bottom:20px; display:flex; align-items:center; gap:16px; }
.driver-icon { width:52px; height:52px; background:#001f3f; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#d4af37; font-size:22px; font-weight:900; }
.driver-label { font-size:10px; color:#888; text-transform:uppercase; letter-spacing:1px; }
.driver-name { font-size:18px; font-weight:800; color:#001f3f; margin-top:2px; }
.section { margin-bottom:16px; }
.section-title { font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:2px; color:#888; margin-bottom:8px; padding-bottom:4px; border-bottom:1px solid #eee; }
.row { display:flex; justify-content:space-between; padding:5px 0; }
.row-label { font-size:11px; color:#888; }
.row-value { font-size:12px; font-weight:600; color:#1a1a2e; text-align:right; max-width:55%; }
.route-box { background:#001f3f; border-radius:10px; padding:14px 18px; margin-bottom:16px; display:flex; align-items:center; gap:12px; }
.route-icon { color:#d4af37; font-size:18px; }
.route-from { font-size:11px; color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:1px; }
.route-name { font-size:13px; font-weight:700; color:#fff; margin-top:2px; }
.route-arrow { color:#d4af37; font-size:20px; font-weight:900; flex-shrink:0; }
.special-box { background:#fffbeb; border:1px solid #fef08a; border-radius:8px; padding:10px 14px; font-size:12px; color:#92400e; line-height:1.5; }
.footer { border-top:2px dashed #e5e7eb; padding-top:14px; display:flex; justify-content:space-between; align-items:center; margin-top:20px; }
.footer-brand { font-size:12px; font-weight:700; color:#001f3f; }
.footer-brand span { color:#d4af37; }
.footer-contact { font-size:10px; color:#aaa; }
.sign-box { border:1px solid #ddd; border-radius:8px; padding:10px 20px; text-align:center; }
.sign-label { font-size:10px; color:#888; text-transform:uppercase; letter-spacing:1px; }
.sign-line { margin-top:20px; border-bottom:1px solid #ccc; width:140px; }
.bottom-bar { height:4px; background:linear-gradient(90deg,#d4af37,#001f3f); border-radius:4px; margin-top:24px; }
@media print { body{-webkit-print-color-adjust:exact;print-color-adjust:exact;} .page{padding:20px 28px;} }
</style>
</head>
<body>
<div class="page">
<div class="top-bar"></div>
<div class="header">
  <div>
    <div class="brand">Haram<span>Taxi</span></div>
    <div class="brand-sub">Driver Trip Voucher</div>
  </div>
  <div class="voucher-badge">VOUCHER</div>
</div>

<div class="driver-box">
  <div class="driver-icon">${(booking.driver_assigned || 'D').charAt(0).toUpperCase()}</div>
  <div>
    <div class="driver-label">Assigned Driver</div>
    <div class="driver-name">${booking.driver_assigned || 'Not Assigned'}</div>
  </div>
</div>

<div class="route-box">
  <div>
    <div class="route-from">From</div>
    <div class="route-name">${booking.pickup_location}</div>
  </div>
  <div class="route-arrow">→</div>
  <div>
    <div class="route-from">To</div>
    <div class="route-name">${booking.destination}</div>
  </div>
</div>

<div class="section">
  <div class="section-title">Trip Details</div>
  <div class="row"><span class="row-label">Date</span><span class="row-value">${booking.pickup_date}</span></div>
  <div class="row"><span class="row-label">Pickup Time</span><span class="row-value">${booking.pickup_time}</span></div>
  <div class="row"><span class="row-label">Vehicle Type</span><span class="row-value">${booking.vehicle_type}</span></div>
  <div class="row"><span class="row-label">Passengers</span><span class="row-value">${booking.passengers}</span></div>
  <div class="row"><span class="row-label">Luggage</span><span class="row-value">${booking.luggage} bags</span></div>
  ${booking.is_round_trip ? `<div class="row"><span class="row-label">Trip Type</span><span class="row-value" style="color:#d4af37;font-weight:800;">Round Trip ↩</span></div>` : ''}
  ${booking.return_date ? `<div class="row"><span class="row-label">Return Date</span><span class="row-value">${booking.return_date} ${booking.return_time || ''}</span></div>` : ''}
</div>

<div class="section">
  <div class="section-title">Customer</div>
  <div class="row"><span class="row-label">Name</span><span class="row-value">${booking.customer_name}</span></div>
  <div class="row"><span class="row-label">Phone</span><span class="row-value" style="color:#16a34a;font-weight:700;">${booking.customer_phone}</span></div>
</div>

${booking.special_requests ? `
<div class="section">
  <div class="section-title">Special Instructions</div>
  <div class="special-box">${booking.special_requests}</div>
</div>
` : ''}

${booking.admin_notes ? `
<div class="section">
  <div class="section-title">Admin Notes</div>
  <div class="special-box" style="background:#eff6ff;border-color:#bfdbfe;color:#1e40af;">${booking.admin_notes}</div>
</div>
` : ''}

<div class="footer">
  <div>
    <div class="footer-brand">Haram<span>Taxi</span> Service</div>
    <div class="footer-contact">+966 57 580 6733 · Voucher: #${booking.id.slice(0,8).toUpperCase()} · ${today}</div>
  </div>
  <div class="sign-box">
    <div class="sign-label">Driver Signature</div>
    <div class="sign-line"></div>
  </div>
</div>
<div class="bottom-bar"></div>
</div>
<script>window.onload=function(){window.print();}<\/script>
</body>
</html>`)
        win.document.close()
    }

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-sm bg-neutral-950 border-neutral-800 text-white">
                <DialogHeader className="flex flex-row items-center justify-between pr-8">
                    <DialogTitle className="text-white">Driver Voucher</DialogTitle>
                    <Button onClick={handlePrint} className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-2" size="sm">
                        <Printer className="w-4 h-4" /> Print
                    </Button>
                </DialogHeader>
                <div className="space-y-3 text-sm pt-2">
                    <div className="bg-neutral-800 rounded-xl p-4 space-y-2">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Driver</p>
                        <p className="font-bold text-yellow-400 text-base">{booking.driver_assigned || 'Not assigned'}</p>
                    </div>
                    <div className="bg-neutral-800 rounded-xl p-4 space-y-1.5">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Trip</p>
                        <p className="text-white"><span className="text-neutral-500">From: </span>{booking.pickup_location}</p>
                        <p className="text-white"><span className="text-neutral-500">To: </span>{booking.destination}</p>
                        <p className="text-white"><span className="text-neutral-500">Date: </span>{booking.pickup_date} at {booking.pickup_time}</p>
                        <p className="text-white"><span className="text-neutral-500">Vehicle: </span>{booking.vehicle_type} · {booking.passengers} pax</p>
                        {booking.is_round_trip && <p className="text-yellow-400 font-semibold">↩ Round Trip — Return: {booking.return_date} {booking.return_time}</p>}
                    </div>
                    <div className="bg-neutral-800 rounded-xl p-4 space-y-1">
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Customer</p>
                        <p className="text-white font-medium">{booking.customer_name}</p>
                        <p className="text-green-400">{booking.customer_phone}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
