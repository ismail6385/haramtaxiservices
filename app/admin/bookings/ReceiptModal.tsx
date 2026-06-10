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
    if (!booking) return null

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const price = booking.total_price
    const vat = price ? vatCalc(price) : null

    const handlePrint = () => {
        const win = window.open('', '_blank', 'width=860,height=700')
        if (!win) return
        win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Receipt – ${receiptNumber(booking.id)}</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Segoe UI',Arial,sans-serif; color:#1a1a2e; background:#fff; }
.page { max-width:680px; margin:0 auto; padding:48px 56px; }

/* Top gold bar */
.top-bar { height:8px; background:linear-gradient(90deg,#001f3f,#d4af37); border-radius:4px; margin-bottom:36px; }

/* Header */
.header { text-align:center; margin-bottom:32px; }
.brand-name { font-size:32px; font-weight:900; color:#001f3f; letter-spacing:-1px; }
.brand-name span { color:#d4af37; }
.brand-sub { font-size:11px; color:#888; letter-spacing:2px; text-transform:uppercase; margin-top:3px; }
.receipt-badge { display:inline-block; background:#d4af37; color:#001f3f; font-size:13px; font-weight:800; letter-spacing:3px; text-transform:uppercase; padding:6px 24px; border-radius:20px; margin-top:16px; }

/* PAID circle */
.paid-circle { width:100px; height:100px; border-radius:50%; border:5px solid #16a34a; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 24px; }
.paid-text { font-size:18px; font-weight:900; color:#16a34a; letter-spacing:3px; }
.paid-check { font-size:28px; color:#16a34a; }

/* Receipt meta */
.meta-row { display:flex; justify-content:space-between; background:#f8f9fb; padding:10px 16px; border-radius:8px; margin-bottom:6px; }
.meta-label { font-size:11px; color:#888; text-transform:uppercase; letter-spacing:0.5px; }
.meta-value { font-size:12px; font-weight:600; color:#1a1a2e; }

.divider { border:none; border-top:1px dashed #ddd; margin:20px 0; }

/* Amount box */
.amount-box { background:#001f3f; color:#fff; border-radius:16px; padding:24px 32px; text-align:center; margin:20px 0; }
.amount-label { font-size:11px; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:8px; }
.amount-value { font-size:40px; font-weight:900; color:#d4af37; letter-spacing:-1px; }
.amount-currency { font-size:13px; color:rgba(255,255,255,0.4); margin-top:4px; }

/* Services */
.service-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f0f0f0; font-size:12px; }
.service-label { color:#555; }
.service-value { font-weight:600; color:#1a1a2e; text-align:right; }

/* VAT breakdown */
.tax-box { background:#f8f9fb; border-radius:8px; padding:14px 18px; margin:16px 0; }
.tax-row { display:flex; justify-content:space-between; font-size:11px; padding:3px 0; }
.tax-label { color:#888; }
.tax-value { color:#555; font-weight:600; }
.tax-total { border-top:2px solid #001f3f; margin-top:6px; padding-top:6px; }
.tax-total .tax-label { color:#001f3f; font-weight:700; font-size:12px; }
.tax-total .tax-value { color:#001f3f; font-weight:800; font-size:13px; }

/* Thank you */
.thankyou { text-align:center; padding:20px 0; }
.thankyou-text { font-size:18px; font-weight:700; color:#001f3f; }
.thankyou-sub { font-size:12px; color:#888; margin-top:4px; }

/* Footer */
.footer { border-top:2px dashed #e5e7eb; padding-top:20px; text-align:center; }
.footer-brand { font-size:13px; font-weight:700; color:#001f3f; }
.footer-brand span { color:#d4af37; }
.footer-contact { font-size:11px; color:#aaa; margin-top:4px; }

/* Bottom bar */
.bottom-bar { height:6px; background:linear-gradient(90deg,#d4af37,#001f3f); border-radius:4px; margin-top:32px; }

@media print { body{-webkit-print-color-adjust:exact;print-color-adjust:exact;} .page{padding:24px 32px;} }
</style>
</head>
<body>
<div class="page">

<div class="top-bar"></div>

<div class="header">
  <div class="brand-name">Haram<span>Taxi</span></div>
  <div class="brand-sub">Premium Transport · Saudi Arabia</div>
  <div class="receipt-badge">Payment Receipt</div>
</div>

<div class="paid-circle">
  <div class="paid-check">✓</div>
  <div class="paid-text">PAID</div>
</div>

<div class="meta-row"><span class="meta-label">Receipt No.</span><span class="meta-value">${receiptNumber(booking.id)}</span></div>
<div class="meta-row"><span class="meta-label">Date</span><span class="meta-value">${today}</span></div>
<div class="meta-row"><span class="meta-label">Received From</span><span class="meta-value">${booking.customer_name}</span></div>
<div class="meta-row"><span class="meta-label">Contact</span><span class="meta-value">${booking.customer_phone}</span></div>
${booking.driver_assigned ? `<div class="meta-row"><span class="meta-label">Driver</span><span class="meta-value">${booking.driver_assigned}</span></div>` : ''}

<hr class="divider"/>

<div class="amount-box">
  <div class="amount-label">Amount Received</div>
  ${price
    ? `<div class="amount-value">${price.toLocaleString()}</div><div class="amount-currency">Saudi Riyal (SAR)</div>`
    : `<div class="amount-value" style="font-size:22px;color:rgba(255,255,255,0.4)">Amount Not Set</div>`
  }
</div>

<div class="service-row"><span class="service-label">Service</span><span class="service-value">Private Transfer</span></div>
<div class="service-row"><span class="service-label">Route</span><span class="service-value">${booking.pickup_location} → ${booking.destination}</span></div>
<div class="service-row"><span class="service-label">Travel Date</span><span class="service-value">${formatDate(booking.pickup_date)} at ${booking.pickup_time}</span></div>
<div class="service-row"><span class="service-label">Vehicle</span><span class="service-value">${booking.vehicle_type} · ${booking.passengers} Passengers</span></div>

${price && vat ? `
<div class="tax-box">
  <div class="tax-row"><span class="tax-label">Subtotal (excl. VAT)</span><span class="tax-value">SAR ${vat.base.toFixed(2)}</span></div>
  <div class="tax-row"><span class="tax-label">VAT (15%)</span><span class="tax-value">SAR ${vat.vat.toFixed(2)}</span></div>
  <div class="tax-row tax-total"><span class="tax-label">Total Paid</span><span class="tax-value">SAR ${price.toLocaleString()}</span></div>
</div>
` : ''}

<hr class="divider"/>

<div class="thankyou">
  <div class="thankyou-text">Thank you for choosing Haram Taxi!</div>
  <div class="thankyou-sub">We look forward to serving you again.</div>
</div>

<div class="footer">
  <div class="footer-brand">Haram<span>Taxi</span> Service</div>
  <div class="footer-contact">+966 57 580 6733 &nbsp;·&nbsp; haramtaxiservice.com &nbsp;·&nbsp; wa.me/966575806733</div>
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
            <DialogContent className="max-w-md bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8">
                    <DialogTitle className="text-white">Receipt — {receiptNumber(booking.id)}</DialogTitle>
                    <Button onClick={handlePrint} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold gap-2" size="sm">
                        <Printer className="w-4 h-4" /> Print / PDF
                    </Button>
                </DialogHeader>

                <div className="bg-white text-gray-900 rounded-lg overflow-hidden text-xs mt-2" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
                    <div className="h-1.5 bg-gradient-to-r from-[#001f3f] to-[#d4af37]" />
                    <div className="p-6">

                        {/* Header */}
                        <div className="text-center mb-5">
                            <div className="text-xl font-black text-[#001f3f]">Haram<span className="text-[#d4af37]">Taxi</span></div>
                            <div className="text-[9px] text-gray-400 tracking-widest uppercase mt-0.5">Premium Transport · Saudi Arabia</div>
                            <div className="inline-block bg-[#d4af37] text-[#001f3f] font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-full mt-3">Payment Receipt</div>
                        </div>

                        {/* PAID circle */}
                        <div className="flex flex-col items-center mb-5">
                            <div className="w-16 h-16 rounded-full border-4 border-green-600 flex flex-col items-center justify-center">
                                <div className="text-green-600 text-xl font-black">✓</div>
                                <div className="text-green-600 text-[9px] font-black tracking-widest">PAID</div>
                            </div>
                        </div>

                        {/* Meta */}
                        <div className="space-y-1.5 mb-4">
                            {[
                                ['Receipt No.', receiptNumber(booking.id)],
                                ['Date', today],
                                ['Received From', booking.customer_name],
                                ['Contact', booking.customer_phone],
                                ...(booking.driver_assigned ? [['Driver', booking.driver_assigned]] : []),
                            ].map(([l, v]) => (
                                <div key={l} className="flex justify-between bg-gray-50 px-3 py-2 rounded-lg">
                                    <span className="text-gray-400 text-[9px] uppercase tracking-wide">{l}</span>
                                    <span className="font-semibold text-gray-800">{v}</span>
                                </div>
                            ))}
                        </div>

                        {/* Amount */}
                        <div className="bg-[#001f3f] rounded-xl p-4 text-center mb-4">
                            <div className="text-[9px] tracking-widest uppercase text-white/40 mb-1">Amount Received</div>
                            {price ? (
                                <>
                                    <div className="text-3xl font-black text-[#d4af37]">{price.toLocaleString()}</div>
                                    <div className="text-[10px] text-white/30 mt-0.5">Saudi Riyal (SAR)</div>
                                </>
                            ) : (
                                <div className="text-sm text-white/30 font-semibold">Amount Not Set</div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="space-y-1.5 mb-3">
                            {[
                                ['Service', 'Private Transfer'],
                                ['Route', `${booking.pickup_location} → ${booking.destination}`],
                                ['Date', `${formatDate(booking.pickup_date)} at ${booking.pickup_time}`],
                                ['Vehicle', `${booking.vehicle_type} · ${booking.passengers} pax`],
                            ].map(([l, v]) => (
                                <div key={l} className="flex justify-between border-b border-gray-100 pb-1.5">
                                    <span className="text-gray-400">{l}</span>
                                    <span className="font-semibold text-gray-700 text-right max-w-[55%]">{v}</span>
                                </div>
                            ))}
                        </div>

                        {/* VAT */}
                        {price && vat && (
                            <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                <div className="flex justify-between text-gray-500 mb-1"><span>Subtotal (excl. VAT)</span><span>SAR {vat.base.toFixed(2)}</span></div>
                                <div className="flex justify-between text-gray-500 mb-1"><span>VAT (15%)</span><span>SAR {vat.vat.toFixed(2)}</span></div>
                                <div className="flex justify-between font-bold text-[#001f3f] border-t border-[#001f3f]/20 pt-1.5"><span>Total Paid</span><span>SAR {price.toLocaleString()}</span></div>
                            </div>
                        )}

                        {/* Thank you */}
                        <div className="text-center py-3 border-t border-dashed border-gray-200">
                            <div className="font-bold text-[#001f3f] text-sm">Thank you for choosing Haram Taxi!</div>
                            <div className="text-gray-400 text-[10px] mt-1">We look forward to serving you again.</div>
                        </div>

                        {/* Footer */}
                        <div className="text-center border-t border-dashed border-gray-200 pt-3">
                            <div className="font-bold text-[#001f3f] text-xs">Haram<span className="text-[#d4af37]">Taxi</span> Service</div>
                            <div className="text-[9px] text-gray-400 mt-1">+966 57 580 6733 · haramtaxiservice.com</div>
                        </div>
                    </div>
                    <div className="h-1.5 bg-gradient-to-r from-[#d4af37] to-[#001f3f]" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
