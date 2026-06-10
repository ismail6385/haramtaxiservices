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

function invoiceNumber(id: string) {
    return 'INV-' + id.replace(/-/g, '').slice(0, 8).toUpperCase()
}

function dueDate() {
    const d = new Date()
    d.setDate(d.getDate() + 7)
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
}

function vatCalc(total: number) {
    const base = Math.round((total / 1.15) * 100) / 100
    const vat = Math.round((total - base) * 100) / 100
    return { base, vat }
}

export default function InvoiceModal({ booking, open, onClose }: Props) {
    if (!booking) return null

    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    const isPaid = booking.status === 'completed'
    const price = booking.total_price
    const vat = price ? vatCalc(price) : null

    const handlePrint = () => {
        const win = window.open('', '_blank', 'width=900,height=700')
        if (!win) return
        win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Invoice – ${invoiceNumber(booking.id)}</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Segoe UI',Arial,sans-serif; color:#1a1a2e; background:#fff; }
.page { max-width:780px; margin:0 auto; padding:48px 56px; position:relative; }

.header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:3px solid #001f3f; padding-bottom:24px; margin-bottom:32px; }
.brand-name { font-size:28px; font-weight:800; color:#001f3f; }
.brand-name span { color:#d4af37; }
.brand-sub { font-size:11px; color:#888; letter-spacing:1px; text-transform:uppercase; margin-top:3px; }

.inv-meta { text-align:right; }
.inv-label { font-size:32px; font-weight:800; color:#001f3f; letter-spacing:3px; text-transform:uppercase; }
.inv-num { font-size:13px; color:#555; font-family:monospace; margin-top:4px; }
.inv-dates { font-size:12px; color:#888; margin-top:6px; line-height:1.8; }
.inv-dates strong { color:#333; }

${isPaid ? `.paid-stamp {
    position:absolute; top:80px; right:56px;
    border:4px solid #16a34a; color:#16a34a; font-size:36px; font-weight:900;
    letter-spacing:4px; padding:8px 20px; border-radius:8px; opacity:0.15;
    transform:rotate(-15deg); text-transform:uppercase; pointer-events:none;
}` : `.unpaid-stamp {
    position:absolute; top:80px; right:56px;
    border:4px solid #dc2626; color:#dc2626; font-size:28px; font-weight:900;
    letter-spacing:3px; padding:8px 20px; border-radius:8px; opacity:0.12;
    transform:rotate(-15deg); text-transform:uppercase; pointer-events:none;
}`}

.parties { display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:32px; }
.party-box { background:#f8f9fb; border-left:4px solid #001f3f; padding:16px 20px; border-radius:0 8px 8px 0; }
.party-box.gold { border-left-color:#d4af37; }
.party-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#888; margin-bottom:8px; }
.party-name { font-size:16px; font-weight:700; color:#1a1a2e; }
.party-line { font-size:13px; color:#555; margin-top:3px; }

.section-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#888; margin-bottom:12px; border-bottom:1px solid #e5e7eb; padding-bottom:6px; }

table { width:100%; border-collapse:collapse; margin-bottom:24px; }
th { background:#001f3f; color:#fff; text-align:left; padding:10px 14px; font-size:11px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; }
th.right { text-align:right; }
td { padding:10px 14px; font-size:13px; border-bottom:1px solid #f0f0f0; color:#333; }
td.right { text-align:right; }
tr:nth-child(even) td { background:#fafafa; }

.totals { display:flex; justify-content:flex-end; margin-bottom:28px; }
.totals-box { min-width:280px; }
.totals-row { display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #f0f0f0; font-size:13px; }
.totals-row.final { background:#001f3f; color:#fff; padding:12px 16px; border-radius:8px; margin-top:8px; font-weight:700; font-size:15px; }
.totals-row.final span:last-child { color:#d4af37; font-size:18px; }
.totals-label { color:#666; }
.totals-value { font-weight:600; color:#1a1a2e; }

.payment-box { background:#f0f9ff; border:1px solid #bae6fd; border-radius:8px; padding:16px 20px; margin-bottom:28px; }
.payment-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#0369a1; margin-bottom:8px; }
.payment-line { font-size:12px; color:#0c4a6e; line-height:1.8; }

.footer { border-top:2px solid #e5e7eb; padding-top:20px; display:flex; justify-content:space-between; align-items:center; }
.footer-brand { font-size:14px; font-weight:700; color:#001f3f; }
.footer-brand span { color:#d4af37; }
.footer-contact { font-size:11px; color:#888; text-align:right; line-height:1.8; }

@media print { body { -webkit-print-color-adjust:exact; print-color-adjust:exact; } .page { padding:24px 32px; } }
</style>
</head>
<body>
<div class="page">
${isPaid ? '<div class="paid-stamp">PAID</div>' : '<div class="unpaid-stamp">UNPAID</div>'}

<div class="header">
  <div>
    <div class="brand-name">Haram<span>Taxi</span></div>
    <div class="brand-sub">Premium Transport · Saudi Arabia</div>
  </div>
  <div class="inv-meta">
    <div class="inv-label">Invoice</div>
    <div class="inv-num">${invoiceNumber(booking.id)}</div>
    <div class="inv-dates">
      <strong>Issue Date:</strong> ${today}<br/>
      <strong>Due Date:</strong> ${dueDate()}<br/>
      <strong>Status:</strong> ${isPaid ? '✓ Paid' : 'Payment Due'}
    </div>
  </div>
</div>

<div class="parties">
  <div class="party-box">
    <div class="party-label">Bill To</div>
    <div class="party-name">${booking.customer_name}</div>
    <div class="party-line">${booking.customer_phone}</div>
    <div class="party-line">${booking.customer_email}</div>
  </div>
  <div class="party-box gold">
    <div class="party-label">Issued By</div>
    <div class="party-name">Haram Taxi Service</div>
    <div class="party-line">+966 57 580 6733</div>
    <div class="party-line">haramtaxiservice@gmail.com</div>
    <div class="party-line">CR: 1010XXXXXXX</div>
  </div>
</div>

<div class="section-title">Services</div>
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Date</th>
      <th>Vehicle</th>
      <th class="right">Amount (SAR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Private Transfer: ${booking.pickup_location} → ${booking.destination}</td>
      <td>${formatDate(booking.pickup_date)} ${booking.pickup_time}</td>
      <td>${booking.vehicle_type} · ${booking.passengers} pax</td>
      <td class="right">${price ? (price / 1.15).toFixed(2) : 'TBQ'}</td>
    </tr>
  </tbody>
</table>

<div class="totals">
  <div class="totals-box">
    ${price && vat ? `
    <div class="totals-row"><span class="totals-label">Subtotal (excl. VAT)</span><span class="totals-value">SAR ${vat.base.toFixed(2)}</span></div>
    <div class="totals-row"><span class="totals-label">VAT (15%)</span><span class="totals-value">SAR ${vat.vat.toFixed(2)}</span></div>
    <div class="totals-row final"><span>Total Due</span><span>SAR ${price.toLocaleString()}</span></div>
    ` : `<div class="totals-row final"><span>Total Due</span><span>To Be Quoted</span></div>`}
  </div>
</div>

${!isPaid ? `
<div class="payment-box">
  <div class="payment-label">Payment Instructions</div>
  <div class="payment-line">
    Please arrange payment within 7 days of invoice date.<br/>
    WhatsApp: <strong>+966 57 580 6733</strong> &nbsp;·&nbsp; haramtaxiservice.com<br/>
    Reference: <strong>${invoiceNumber(booking.id)}</strong>
  </div>
</div>
` : ''}

<div class="footer">
  <div class="footer-brand">Haram<span>Taxi</span> Service</div>
  <div class="footer-contact">
    wa.me/966575806733<br/>haramtaxiservice.com
  </div>
</div>
</div>
<script>window.onload=function(){window.print();}<\/script>
</body>
</html>`)
        win.document.close()
    }

    return (
        <Dialog open={open} onOpenChange={o => !o && onClose()}>
            <DialogContent className="max-w-2xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8">
                    <DialogTitle className="text-white">Invoice — {invoiceNumber(booking.id)}</DialogTitle>
                    <Button onClick={handlePrint} className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold gap-2" size="sm">
                        <Printer className="w-4 h-4" /> Print / PDF
                    </Button>
                </DialogHeader>

                <div className="bg-white text-gray-900 rounded-lg p-7 text-xs mt-2 relative" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>

                    {/* Stamp */}
                    {isPaid ? (
                        <div className="absolute top-6 right-8 border-4 border-green-600 text-green-600 font-black text-2xl tracking-widest px-4 py-1 rounded-lg opacity-20 rotate-[-15deg] uppercase pointer-events-none">PAID</div>
                    ) : (
                        <div className="absolute top-6 right-8 border-4 border-red-600 text-red-600 font-black text-xl tracking-widest px-4 py-1 rounded-lg opacity-20 rotate-[-15deg] uppercase pointer-events-none">UNPAID</div>
                    )}

                    {/* Header */}
                    <div className="flex justify-between items-start border-b-2 border-[#001f3f] pb-4 mb-5">
                        <div>
                            <div className="text-xl font-black text-[#001f3f]">Haram<span className="text-[#d4af37]">Taxi</span></div>
                            <div className="text-[9px] text-gray-400 tracking-widest uppercase mt-0.5">Premium Transport · Saudi Arabia</div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-black text-[#001f3f] tracking-widest uppercase">Invoice</div>
                            <div className="font-mono text-gray-500 mt-0.5">{invoiceNumber(booking.id)}</div>
                            <div className="text-gray-400 mt-1 space-y-0.5">
                                <div><span className="font-semibold text-gray-600">Issued:</span> {today}</div>
                                <div><span className="font-semibold text-gray-600">Due:</span> {dueDate()}</div>
                                <div className={isPaid ? 'text-green-600 font-bold' : 'text-red-500 font-bold'}>
                                    {isPaid ? '✓ Paid' : 'Payment Due'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parties */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-gray-50 border-l-4 border-[#001f3f] pl-3 pr-2 py-3 rounded-r-lg">
                            <div className="text-[8px] font-bold tracking-widest uppercase text-gray-400 mb-1">Bill To</div>
                            <div className="font-bold text-[#1a1a2e] text-sm">{booking.customer_name}</div>
                            <div className="text-gray-500 mt-0.5">{booking.customer_phone}</div>
                            <div className="text-gray-500">{booking.customer_email}</div>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-[#d4af37] pl-3 pr-2 py-3 rounded-r-lg">
                            <div className="text-[8px] font-bold tracking-widest uppercase text-gray-400 mb-1">Issued By</div>
                            <div className="font-bold text-[#1a1a2e] text-sm">Haram Taxi Service</div>
                            <div className="text-gray-500 mt-0.5">+966 57 580 6733</div>
                            <div className="text-gray-500">haramtaxiservice@gmail.com</div>
                        </div>
                    </div>

                    {/* Services table */}
                    <div className="text-[8px] font-bold tracking-widest uppercase text-gray-400 mb-1.5 border-b border-gray-200 pb-1">Services</div>
                    <table className="w-full mb-4">
                        <thead>
                            <tr className="bg-[#001f3f] text-white">
                                <th className="text-left px-3 py-2 font-semibold text-[9px] uppercase tracking-wide">Description</th>
                                <th className="text-left px-3 py-2 font-semibold text-[9px] uppercase tracking-wide">Date</th>
                                <th className="text-right px-3 py-2 font-semibold text-[9px] uppercase tracking-wide">Amount (SAR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-50">
                                <td className="px-3 py-2 text-gray-700">{booking.pickup_location} → {booking.destination}<br/><span className="text-gray-400">{booking.vehicle_type} · {booking.passengers} pax</span></td>
                                <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{formatDate(booking.pickup_date)}<br/><span className="text-gray-400">{booking.pickup_time}</span></td>
                                <td className="px-3 py-2 text-right font-semibold text-gray-800">{price ? (price / 1.15).toFixed(2) : 'TBQ'}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Totals */}
                    <div className="flex justify-end mb-4">
                        <div className="min-w-[240px] space-y-1.5">
                            {price && vat ? (
                                <>
                                    <div className="flex justify-between text-gray-500 border-b border-gray-100 pb-1"><span>Subtotal (excl. VAT)</span><span className="font-medium text-gray-700">SAR {vat.base.toFixed(2)}</span></div>
                                    <div className="flex justify-between text-gray-500 border-b border-gray-100 pb-1"><span>VAT (15%)</span><span className="font-medium text-gray-700">SAR {vat.vat.toFixed(2)}</span></div>
                                    <div className="flex justify-between bg-[#001f3f] text-white px-3 py-2 rounded-lg font-bold text-sm mt-2">
                                        <span>Total Due</span><span className="text-[#d4af37] text-base">SAR {price.toLocaleString()}</span>
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-between bg-[#001f3f] text-white px-3 py-2 rounded-lg font-bold text-sm">
                                    <span>Total Due</span><span className="text-[#d4af37]">To Be Quoted</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center">
                        <div className="font-bold text-[#001f3f] text-sm">Haram<span className="text-[#d4af37]">Taxi</span> Service</div>
                        <div className="text-gray-400 text-right">wa.me/966575806733 · haramtaxiservice.com</div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
