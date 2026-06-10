'use client'

import { useState, useEffect, useMemo } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Users, Phone, Mail, TrendingUp, Search, MessageCircle } from 'lucide-react'
import type { Booking } from '../bookings/types'

interface Customer {
    name: string
    email: string
    phone: string
    bookingCount: number
    totalSpend: number
    lastBooking: string
}

export default function CustomersPage() {
    const [bookings, setBookings] = useState<Booking[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    useEffect(() => {
        supabase
            .from('bookings')
            .select('customer_name, customer_email, customer_phone, total_price, pickup_date, created_at, status')
            .order('created_at', { ascending: false })
            .then(({ data }) => {
                setBookings((data as Booking[]) ?? [])
                setLoading(false)
            })
    }, [])

    const customers = useMemo<Customer[]>(() => {
        const map = new Map<string, Customer>()
        for (const b of bookings) {
            const key = b.customer_email?.toLowerCase() ?? b.customer_phone
            if (!map.has(key)) {
                map.set(key, {
                    name: b.customer_name,
                    email: b.customer_email,
                    phone: b.customer_phone,
                    bookingCount: 0,
                    totalSpend: 0,
                    lastBooking: b.pickup_date,
                })
            }
            const c = map.get(key)!
            c.bookingCount++
            c.totalSpend += b.total_price ?? 0
            if (b.pickup_date > c.lastBooking) c.lastBooking = b.pickup_date
        }
        return Array.from(map.values()).sort((a, b) => b.bookingCount - a.bookingCount)
    }, [bookings])

    const filtered = useMemo(() => {
        const q = search.toLowerCase()
        if (!q) return customers
        return customers.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.email?.toLowerCase().includes(q) ||
            c.phone?.includes(q)
        )
    }, [customers, search])

    const totalRevenue = customers.reduce((s, c) => s + c.totalSpend, 0)
    const repeatCustomers = customers.filter(c => c.bookingCount > 1).length

    return (
        <div className="text-white space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Customers
                    </h1>
                    <p className="text-neutral-500 text-sm mt-1">
                        {customers.length} unique customers from all bookings
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Customers', value: customers.length.toString(), icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { label: 'Total Bookings', value: bookings.length.toString(), icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-500/10' },
                    { label: 'Repeat Customers', value: repeatCustomers.toString(), icon: Users, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                    { label: 'Total Revenue', value: `SAR ${totalRevenue.toLocaleString()}`, icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                ].map(s => (
                    <div key={s.label} className="bg-neutral-800 rounded-xl border border-neutral-700 p-4">
                        <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                            <s.icon className={`w-5 h-5 ${s.color}`} />
                        </div>
                        <div className="text-xl font-bold text-white">{s.value}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search customers..."
                    className="w-full pl-9 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-colors"
                />
            </div>

            {/* Table */}
            {loading ? (
                <div className="space-y-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-14 bg-neutral-800 rounded-xl animate-pulse border border-neutral-700" />
                    ))}
                </div>
            ) : filtered.length === 0 ? (
                <div className="bg-neutral-800 rounded-xl border border-neutral-700 py-20 text-center">
                    <Users className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
                    <p className="text-neutral-400 font-medium">No customers found</p>
                    <p className="text-neutral-600 text-sm mt-1">Try adjusting your search</p>
                </div>
            ) : (
                <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-neutral-900/60 border-b border-neutral-700">
                                <tr>
                                    {['Customer', 'Contact', 'Bookings', 'Total Spend', 'Last Trip'].map(h => (
                                        <th key={h} className="px-4 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-700">
                                {filtered.map((c, i) => (
                                    <tr key={i} className="hover:bg-neutral-700/30 transition-colors">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                                                    <span className="text-sm font-bold text-yellow-400">
                                                        {c.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white leading-tight">{c.name}</p>
                                                    <p className="text-xs text-neutral-500 mt-0.5 truncate max-w-[180px]">{c.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="space-y-1">
                                                <a href={`https://wa.me/${c.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                                                    className="flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs transition-colors">
                                                    <MessageCircle className="w-3 h-3 shrink-0" />
                                                    <span>{c.phone}</span>
                                                </a>
                                                {c.email && (
                                                    <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs transition-colors">
                                                        <Mail className="w-3 h-3 shrink-0" />
                                                        <span className="truncate max-w-[160px]">{c.email}</span>
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-semibold text-sm">{c.bookingCount}</span>
                                                {c.bookingCount > 1 && (
                                                    <span className="text-[10px] font-bold bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 px-1.5 py-0.5 rounded-full">
                                                        Repeat
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="text-sm text-white font-medium">
                                                {c.totalSpend > 0 ? `SAR ${c.totalSpend.toLocaleString()}` : '—'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="text-sm text-neutral-300">{c.lastBooking}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
