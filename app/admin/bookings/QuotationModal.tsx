'use client'

import { useRef } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Printer, X } from 'lucide-react'
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
    const printRef = useRef<HTMLDivElement>(null)

    if (!booking) return null

    const handlePrint = () => {
        const content = printRef.current
        if (!content) return
        const win = window.open('', '_blank', 'width=900,height=700')
        if (!win) return
        win.document.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Quotation – ${quoteNumber(booking.id)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a2e; background: #fff; }
    .page { max-width: 780px; margin: 0 auto; padding: 48px 56px; }

    /* Header */
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #001f3f; padding-bottom: 24px; margin-bottom: 32px; }
    .brand { display: flex; flex-direction: column; gap: 4px; }
    .brand-name { font-size: 28px; font-weight: 800; color: #001f3f; letter-spacing: -0.5px; }
    .brand-name span { color: #d4af37; }
    .brand-sub { font-size: 12px; color: #666; letter-spacing: 1px; text-transform: uppercase; }
    .quote-meta { text-align: right; }
    .quote-label { font-size: 28px; font-weight: 700; color: #d4af37; letter-spacing: 2px; text-transform: uppercase; }
    .quote-num { font-size: 13px; color: #555; margin-top: 4px; font-family: monospace; }
    .quote-date { font-size: 12px; color: #888; margin-top: 2px; }

    /* To / From */
    .parties { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }
    .party-box { background: #f8f9fb; border-left: 4px solid #001f3f; padding: 16px 20px; border-radius: 0 8px 8px 0; }
    .party-box.gold { border-left-color: #d4af37; }
    .party-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin-bottom: 8px; }
    .party-name { font-size: 16px; font-weight: 700; color: #1a1a2e; }
    .party-line { font-size: 13px; color: #555; margin-top: 3px; }

    /* Trip details table */
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }
    th { background: #001f3f; color: #fff; text-align: left; padding: 10px 14px; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
    td { padding: 10px 14px; font-size: 13px; border-bottom: 1px solid #f0f0f0; color: #333; }
    tr:last-child td { border-bottom: none; }
    tr:nth-child(even) td { background: #fafafa; }
    .highlight td { font-weight: 700; color: #001f3f; }

    /* Price box */
    .price-section { display: flex; justify-content: flex-end; margin-bottom: 32px; }
    .price-box { background: #001f3f; color: #fff; border-radius: 12px; padding: 20px 32px; text-align: right; min-width: 240px; }
    .price-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 6px; }
    .price-amount { font-size: 32px; font-weight: 800; color: #d4af37; }
    .price-currency { font-size: 14px; color: rgba(255,255,255,0.7); margin-top: 2px; }
    .price-na { font-size: 18px; font-weight: 600; color: rgba(255,255,255,0.5); }

    /* Notes */
    .notes-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 14px 18px; margin-bottom: 28px; }
    .notes-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #92400e; margin-bottom: 4px; }
    .notes-text { font-size: 13px; color: #78350f; }

    /* Terms */
    .terms { background: #f8f9fb; border-radius: 8px; padding: 16px 20px; margin-bottom: 32px; }
    .terms ul { padding-left: 18px; }
    .terms li { font-size: 11.5px; color: #666; margin-bottom: 4px; line-height: 1.5; }

    /* Footer */
    .footer { border-top: 2px solid #e5e7eb; padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }
    .footer-brand { font-size: 14px; font-weight: 700; color: #001f3f; }
    .footer-brand span { color: #d4af37; }
    .footer-contact { font-size: 12px; color: #888; text-align: right; }
    .footer-contact a { color: #001f3f; text-decoration: none; }

    .valid-note { text-align: center; font-size: 11px; color: #aaa; margin-bottom: 16px; font-style: italic; }

    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .page { padding: 24px 32px; }
    }
  </style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="brand">
      <div class="brand-name">Haram<span>Taxi</span></div>
      <div class="brand-sub">Premium Transport · Saudi Arabia</div>
    </div>
    <div class="quote-meta">
      <div class="quote-label">Quotation</div>
      <div class="quote-num">${quoteNumber(booking.id)}</div>
      <div class="quote-date">Issued: ${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
    </div>
  </div>

  <div class="parties">
    <div class="party-box">
      <div class="party-label">Quoted To</div>
      <div class="party-name">${booking.customer_name}</div>
      <div class="party-line">${booking.customer_phone}</div>
      <div class="party-line">${booking.customer_email}</div>
    </div>
    <div class="party-box gold">
      <div class="party-label">Service Provider</div>
      <div class="party-name">Haram Taxi Service</div>
      <div class="party-line">+966 57 580 6733</div>
      <div class="party-line">haramtaxiservice@gmail.com</div>
    </div>
  </div>

  <div class="section-title">Trip Details</div>
  <table>
    <thead>
      <tr>
        <th>Detail</th>
        <th>Information</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Pickup Location</td><td>${booking.pickup_location}</td></tr>
      <tr><td>Destination</td><td>${booking.destination}</td></tr>
      <tr><td>Travel Date</td><td>${formatDate(booking.pickup_date)}</td></tr>
      <tr><td>Pickup Time</td><td>${booking.pickup_time}</td></tr>
      <tr><td>Vehicle Type</td><td>${booking.vehicle_type}</td></tr>
      <tr><td>Passengers</td><td>${booking.passengers}</td></tr>
      <tr><td>Luggage Bags</td><td>${booking.luggage}</td></tr>
      ${booking.driver_assigned ? `<tr><td>Assigned Driver</td><td>${booking.driver_assigned}</td></tr>` : ''}
    </tbody>
  </table>

  ${booking.special_requests ? `
  <div class="notes-box">
    <div class="notes-label">Special Requests</div>
    <div class="notes-text">${booking.special_requests}</div>
  </div>
  ` : ''}

  <div class="price-section">
    <div class="price-box">
      <div class="price-label">Total Fare</div>
      ${booking.total_price
        ? `<div class="price-amount">${booking.total_price.toLocaleString()}</div><div class="price-currency">Saudi Riyal (SAR) · VAT included</div>`
        : `<div class="price-na">To Be Quoted</div><div class="price-currency">Contact us for pricing</div>`
      }
    </div>
  </div>

  <div class="terms">
    <div class="section-title" style="margin-bottom:8px">Terms & Conditions</div>
    <ul>
      <li>This quotation is valid for 7 days from the date of issue.</li>
      <li>Full payment or 50% deposit required to confirm the booking.</li>
      <li>Cancellations made 24+ hours before pickup receive a full refund.</li>
      <li>Waiting time exceeding 30 minutes may incur additional charges.</li>
      <li>Haram Taxi Service reserves the right to assign a suitable vehicle of equal or higher category.</li>
    </ul>
  </div>

  <div class="valid-note">This is a computer-generated quotation. No signature required.</div>

  <div class="footer">
    <div class="footer-brand">Haram<span>Taxi</span> Service</div>
    <div class="footer-contact">
      wa.me/966575806733 &nbsp;·&nbsp; haramtaxiservice.com
    </div>
  </div>

</div>
<script>window.onload = function(){ window.print(); }<\/script>
</body>
</html>`)
        win.document.close()
    }

    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="max-w-2xl bg-neutral-950 border-neutral-800 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader className="flex flex-row items-center justify-between pr-8">
                    <DialogTitle className="text-white text-lg">Quotation Letter</DialogTitle>
                    <Button
                        onClick={handlePrint}
                        className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold gap-2"
                        size="sm"
                    >
                        <Printer className="w-4 h-4" />
                        Print / Save PDF
                    </Button>
                </DialogHeader>

                {/* Preview */}
                <div ref={printRef} className="bg-white text-gray-900 rounded-lg p-8 text-sm mt-2" style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>

                    {/* Header */}
                    <div className="flex justify-between items-start border-b-2 border-[#001f3f] pb-5 mb-6">
                        <div>
                            <div className="text-2xl font-black text-[#001f3f]">Haram<span className="text-[#d4af37]">Taxi</span></div>
                            <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-0.5">Premium Transport · Saudi Arabia</div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-[#d4af37] tracking-widest uppercase">Quotation</div>
                            <div className="text-xs font-mono text-gray-500 mt-0.5">{quoteNumber(booking.id)}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
                                {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                        </div>
                    </div>

                    {/* Parties */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 border-l-4 border-[#001f3f] pl-4 pr-3 py-3 rounded-r-lg">
                            <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-1">Quoted To</div>
                            <div className="font-bold text-[#1a1a2e]">{booking.customer_name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{booking.customer_phone}</div>
                            <div className="text-xs text-gray-500">{booking.customer_email}</div>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-[#d4af37] pl-4 pr-3 py-3 rounded-r-lg">
                            <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-1">Service Provider</div>
                            <div className="font-bold text-[#1a1a2e]">Haram Taxi Service</div>
                            <div className="text-xs text-gray-500 mt-0.5">+966 57 580 6733</div>
                            <div className="text-xs text-gray-500">haramtaxiservice@gmail.com</div>
                        </div>
                    </div>

                    {/* Trip table */}
                    <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-2 border-b border-gray-200 pb-1">Trip Details</div>
                    <table className="w-full mb-5 text-xs">
                        <thead>
                            <tr className="bg-[#001f3f] text-white">
                                <th className="text-left px-3 py-2 font-semibold text-[10px] uppercase tracking-wide">Detail</th>
                                <th className="text-left px-3 py-2 font-semibold text-[10px] uppercase tracking-wide">Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Pickup Location', booking.pickup_location],
                                ['Destination', booking.destination],
                                ['Travel Date', formatDate(booking.pickup_date)],
                                ['Pickup Time', booking.pickup_time],
                                ['Vehicle Type', booking.vehicle_type],
                                ['Passengers', String(booking.passengers)],
                                ['Luggage Bags', String(booking.luggage)],
                                ...(booking.driver_assigned ? [['Assigned Driver', booking.driver_assigned]] : []),
                            ].map(([label, value], i) => (
                                <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-3 py-2 text-gray-500">{label}</td>
                                    <td className="px-3 py-2 font-medium text-gray-800">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Special requests */}
                    {booking.special_requests && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 mb-5">
                            <div className="text-[9px] font-bold tracking-widest uppercase text-yellow-700 mb-1">Special Requests</div>
                            <div className="text-xs text-yellow-800">{booking.special_requests}</div>
                        </div>
                    )}

                    {/* Price */}
                    <div className="flex justify-end mb-5">
                        <div className="bg-[#001f3f] text-white rounded-xl px-8 py-4 text-right min-w-[200px]">
                            <div className="text-[9px] tracking-widest uppercase text-white/50 mb-1">Total Fare</div>
                            {booking.total_price ? (
                                <>
                                    <div className="text-2xl font-black text-[#d4af37]">{booking.total_price.toLocaleString()}</div>
                                    <div className="text-[10px] text-white/50 mt-0.5">SAR · VAT included</div>
                                </>
                            ) : (
                                <div className="text-sm font-semibold text-white/50">To Be Quoted</div>
                            )}
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="bg-gray-50 rounded-lg px-4 py-3 mb-5">
                        <div className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-2">Terms & Conditions</div>
                        <ul className="list-disc list-inside space-y-1">
                            {[
                                'This quotation is valid for 7 days from the date of issue.',
                                'Full payment or 50% deposit required to confirm the booking.',
                                'Cancellations made 24+ hours before pickup receive a full refund.',
                                'Waiting time exceeding 30 minutes may incur additional charges.',
                                'Haram Taxi Service reserves the right to assign a suitable vehicle of equal or higher category.',
                            ].map(t => <li key={t} className="text-[10px] text-gray-500">{t}</li>)}
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                        <div className="font-bold text-[#001f3f] text-sm">Haram<span className="text-[#d4af37]">Taxi</span> Service</div>
                        <div className="text-[10px] text-gray-400 text-right">wa.me/966575806733 · haramtaxiservice.com</div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}
