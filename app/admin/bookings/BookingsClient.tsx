'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { toast } from 'sonner'
import type { Booking, BookingStatus, SortField, SortDir } from './types'
import FiltersBar from './FiltersBar'
import BookingsTable from './BookingsTable'
import MobileBookingCard from './MobileBookingCard'
import BookingDetailSheet from './BookingDetailSheet'
import DeleteDialog from './DeleteDialog'
import TableSkeleton from './TableSkeleton'

const PAGE_SIZE = 10

// ── Debounce hook ──────────────────────────────────────────────────────────────
function useDebounce<T>(value: T, delay: number): T {
    const [debounced, setDebounced] = useState<T>(value)
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(t)
    }, [value, delay])
    return debounced
}

// ── Component ──────────────────────────────────────────────────────────────────
interface Props {
    initialBookings: Booking[]
}

export default function BookingsClient({ initialBookings }: Props) {
    // Core data
    const [bookings, setBookings] = useState<Booking[]>(initialBookings)
    const [loading] = useState(false)

    // Filters
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')

    // Sort
    const [sortField, setSortField] = useState<SortField>('created_at')
    const [sortDir, setSortDir] = useState<SortDir>('desc')

    // Pagination
    const [page, setPage] = useState(1)

    // UI state
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
    const [bookingToDelete, setBookingToDelete] = useState<Booking | null>(null)
    const [updatingId, setUpdatingId] = useState<string | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const [exportingCSV, setExportingCSV] = useState(false)

    // Bulk selection
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const [bulkUpdating, setBulkUpdating] = useState(false)

    // Stable ref for bookings (used in callbacks to avoid stale closures)
    const bookingsRef = useRef(bookings)
    useEffect(() => { bookingsRef.current = bookings }, [bookings])

    const debouncedSearch = useDebounce(search, 300)

    const supabase = useMemo(() => createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ), [])

    // ── Real-time subscription ──────────────────────────────────────────────────
    // NOTE: Enable Realtime for the 'bookings' table in Supabase dashboard → Database → Replication
    useEffect(() => {
        const channel = supabase
            .channel('admin-bookings-realtime')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'bookings' },
                (payload) => {
                    if (payload.eventType === 'INSERT') {
                        const newBooking = payload.new as Booking
                        setBookings((prev) => [newBooking, ...prev])
                        toast.success('New booking received!', {
                            description: `From ${newBooking.customer_name}`,
                        })
                    }
                    if (payload.eventType === 'UPDATE') {
                        setBookings((prev) =>
                            prev.map((b) =>
                                b.id === payload.new.id
                                    ? { ...b, ...(payload.new as Booking) }
                                    : b
                            )
                        )
                    }
                    if (payload.eventType === 'DELETE') {
                        const deletedId = (payload.old as Partial<Booking>).id
                        if (deletedId) {
                            setBookings((prev) => prev.filter((b) => b.id !== deletedId))
                        }
                    }
                }
            )
            .subscribe()

        return () => { supabase.removeChannel(channel) }
    }, [supabase])

    // ── Derived data ────────────────────────────────────────────────────────────
    const filteredBookings = useMemo(() => {
        const q = debouncedSearch.toLowerCase().trim()
        return bookings.filter((b) => {
            const matchesSearch =
                !q ||
                b.customer_name?.toLowerCase().includes(q) ||
                b.customer_email?.toLowerCase().includes(q) ||
                b.customer_phone?.includes(q) ||
                b.id.toLowerCase().includes(q)

            const matchesStatus = statusFilter === 'all' || b.status === statusFilter
            const matchesFrom = !dateFrom || b.pickup_date >= dateFrom
            const matchesTo = !dateTo || b.pickup_date <= dateTo

            return matchesSearch && matchesStatus && matchesFrom && matchesTo
        })
    }, [bookings, debouncedSearch, statusFilter, dateFrom, dateTo])

    const sortedBookings = useMemo(() => {
        return [...filteredBookings].sort((a, b) => {
            const av = a[sortField] ?? ''
            const bv = b[sortField] ?? ''
            if (av < bv) return sortDir === 'asc' ? -1 : 1
            if (av > bv) return sortDir === 'asc' ? 1 : -1
            return 0
        })
    }, [filteredBookings, sortField, sortDir])

    const totalPages = Math.ceil(sortedBookings.length / PAGE_SIZE)

    const paginatedBookings = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE
        return sortedBookings.slice(start, start + PAGE_SIZE)
    }, [sortedBookings, page])

    // Reset to page 1 when filters/search change
    useEffect(() => { setPage(1) }, [debouncedSearch, statusFilter, dateFrom, dateTo])

    // ── Handlers ────────────────────────────────────────────────────────────────
    const handleSort = useCallback((field: SortField) => {
        setSortField((prev) => {
            if (prev === field) {
                setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
                return prev
            }
            setSortDir('desc')
            return field
        })
    }, [])

    const handleStatusChange = useCallback(async (id: string, newStatus: BookingStatus) => {
        const prev = bookingsRef.current.find((b) => b.id === id)
        if (!prev || prev.status === newStatus || updatingId) return

        const prevStatus = prev.status

        // Optimistic update
        setBookings((bs) => bs.map((b) => (b.id === id ? { ...b, status: newStatus } : b)))
        setSelectedBooking((s) => (s?.id === id ? { ...s, status: newStatus } : s))
        setUpdatingId(id)

        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id)

            if (error) throw error

            toast.success('Status updated', {
                description: `Booking marked as ${newStatus}`,
            })

            // Fire status email (non-blocking)
            if (['confirmed', 'cancelled', 'completed'].includes(newStatus)) {
                fetch('/api/send-status-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        bookingId: id,
                        status: newStatus,
                        customerEmail: prev.customer_email,
                        customerName: prev.customer_name,
                    }),
                }).catch(() => {})
            }
        } catch {
            // Rollback on failure
            setBookings((bs) => bs.map((b) => (b.id === id ? { ...b, status: prevStatus } : b)))
            setSelectedBooking((s) => (s?.id === id ? { ...s, status: prevStatus } : s))
            toast.error('Update failed', { description: 'Could not update booking status' })
        } finally {
            setUpdatingId(null)
        }
    }, [supabase, updatingId])

    const handleDeleteConfirm = useCallback(async () => {
        if (!bookingToDelete || deletingId) return
        const { id, customer_name } = bookingToDelete

        setDeletingId(id)
        try {
            const res = await fetch(`/api/admin/bookings/${id}`, { method: 'DELETE' })
            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Failed to delete')
            }

            setBookings((bs) => bs.filter((b) => b.id !== id))
            setSelectedBooking((s) => (s?.id === id ? null : s))
            setBookingToDelete(null)
            toast.success('Booking deleted', { description: customer_name })
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Unknown error'
            toast.error('Delete failed', { description: msg })
        } finally {
            setDeletingId(null)
        }
    }, [bookingToDelete, deletingId])

    const handleExportCSV = useCallback(() => {
        if (filteredBookings.length === 0) return
        setExportingCSV(true)

        try {
            const headers = [
                'Name', 'Email', 'Phone', 'Pickup', 'Destination',
                'Date', 'Time', 'Vehicle', 'Passengers', 'Luggage', 'Status', 'Price',
            ]
            const rows = filteredBookings.map((b) =>
                [
                    b.customer_name,
                    b.customer_email,
                    b.customer_phone,
                    b.pickup_location,
                    b.destination,
                    b.pickup_date,
                    b.pickup_time,
                    b.vehicle_type,
                    b.passengers,
                    b.luggage,
                    b.status,
                    b.total_price ?? '',
                ]
                    .map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`)
                    .join(',')
            )

            const csv = [headers.join(','), ...rows].join('\n')
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`
            a.click()
            URL.revokeObjectURL(url)
        } finally {
            setExportingCSV(false)
        }
    }, [filteredBookings])

    const handleDriverAssign = useCallback(async (id: string, driver: string) => {
        try {
            const { error } = await supabase.from('bookings').update({ driver_assigned: driver, status: 'confirmed' }).eq('id', id)
            if (error) throw error
            setBookings((bs) => bs.map((b) => b.id === id ? { ...b, driver_assigned: driver, status: 'confirmed' } : b))
            setSelectedBooking((s) => s?.id === id ? { ...s, driver_assigned: driver, status: 'confirmed' } : s)
            toast.success('Driver assigned', { description: `${driver} — status set to Confirmed` })
        } catch { toast.error('Failed to assign driver') }
    }, [supabase])

    const handlePriceUpdate = useCallback(async (id: string, price: number) => {
        try {
            const { error } = await supabase.from('bookings').update({ total_price: price }).eq('id', id)
            if (error) throw error
            setBookings((bs) => bs.map((b) => b.id === id ? { ...b, total_price: price } : b))
            setSelectedBooking((s) => s?.id === id ? { ...s, total_price: price } : s)
            toast.success('Price updated', { description: `SAR ${price.toLocaleString()}` })
        } catch { toast.error('Failed to update price') }
    }, [supabase])

    const handleNoteSave = useCallback(async (id: string, note: string) => {
        try {
            const { error } = await supabase.from('bookings').update({ admin_notes: note || null }).eq('id', id)
            if (error) throw error
            setBookings((bs) => bs.map((b) => b.id === id ? { ...b, admin_notes: note || undefined } : b))
            setSelectedBooking((s) => s?.id === id ? { ...s, admin_notes: note || undefined } : s)
            toast.success('Note saved')
        } catch { toast.error('Failed to save note') }
    }, [supabase])

    const handleToggleSelect = useCallback((id: string) => {
        setSelectedIds(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }, [])

    const handleToggleSelectAll = useCallback(() => {
        setSelectedIds(prev => {
            const pageIds = paginatedBookings.map(b => b.id)
            const allSelected = pageIds.every(id => prev.has(id))
            if (allSelected) {
                const next = new Set(prev)
                pageIds.forEach(id => next.delete(id))
                return next
            }
            const next = new Set(prev)
            pageIds.forEach(id => next.add(id))
            return next
        })
    }, [paginatedBookings])

    const handleBulkStatus = useCallback(async (newStatus: BookingStatus) => {
        if (selectedIds.size === 0 || bulkUpdating) return
        setBulkUpdating(true)
        try {
            const ids = Array.from(selectedIds)
            const { error } = await supabase.from('bookings').update({ status: newStatus }).in('id', ids)
            if (error) throw error
            setBookings(bs => bs.map(b => selectedIds.has(b.id) ? { ...b, status: newStatus } : b))
            toast.success(`${ids.length} bookings marked as ${newStatus}`)
            setSelectedIds(new Set())
        } catch { toast.error('Bulk update failed') }
        setBulkUpdating(false)
    }, [selectedIds, bulkUpdating, supabase])

    const handleBulkDelete = useCallback(async () => {
        if (selectedIds.size === 0 || bulkUpdating) return
        if (!confirm(`Delete ${selectedIds.size} booking(s)? This cannot be undone.`)) return
        setBulkUpdating(true)
        try {
            const ids = Array.from(selectedIds)
            for (const id of ids) {
                await fetch(`/api/admin/bookings/${id}`, { method: 'DELETE' })
            }
            setBookings(bs => bs.filter(b => !selectedIds.has(b.id)))
            toast.success(`${ids.length} bookings deleted`)
            setSelectedIds(new Set())
        } catch { toast.error('Bulk delete failed') }
        setBulkUpdating(false)
    }, [selectedIds, bulkUpdating])

    const handleReset = useCallback(() => {
        setSearch('')
        setStatusFilter('all')
        setDateFrom('')
        setDateTo('')
        setPage(1)
    }, [])

    // ── Render ──────────────────────────────────────────────────────────────────
    return (
        <div className="text-white space-y-6">
            {/* Page header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Bookings
                    </h1>
                    <p className="text-neutral-500 text-sm mt-1">
                        {bookings.length} total · real-time updates active
                    </p>
                </div>
            </div>

            {/* Filters bar */}
            <FiltersBar
                search={search}
                onSearchChange={setSearch}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                dateFrom={dateFrom}
                onDateFromChange={setDateFrom}
                dateTo={dateTo}
                onDateToChange={setDateTo}
                filteredCount={filteredBookings.length}
                totalCount={bookings.length}
                onReset={handleReset}
                onExportCSV={handleExportCSV}
                exportingCSV={exportingCSV}
            />

            {/* Bulk action bar */}
            {selectedIds.size > 0 && (
                <div className="flex items-center gap-3 px-4 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <span className="text-sm font-medium text-yellow-400">
                        {selectedIds.size} selected
                    </span>
                    <div className="h-4 w-px bg-yellow-500/30" />
                    <div className="flex items-center gap-2 flex-wrap">
                        <button onClick={() => handleBulkStatus('confirmed')} disabled={bulkUpdating}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600/20 text-blue-300 border border-blue-600/40 hover:bg-blue-600/30 disabled:opacity-50 transition-colors">
                            Mark Confirmed
                        </button>
                        <button onClick={() => handleBulkStatus('completed')} disabled={bulkUpdating}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-green-600/20 text-green-300 border border-green-600/40 hover:bg-green-600/30 disabled:opacity-50 transition-colors">
                            Mark Completed
                        </button>
                        <button onClick={() => handleBulkStatus('cancelled')} disabled={bulkUpdating}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-orange-600/20 text-orange-300 border border-orange-600/40 hover:bg-orange-600/30 disabled:opacity-50 transition-colors">
                            Mark Cancelled
                        </button>
                        <button onClick={handleBulkDelete} disabled={bulkUpdating}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-red-600/20 text-red-300 border border-red-600/40 hover:bg-red-600/30 disabled:opacity-50 transition-colors">
                            Delete Selected
                        </button>
                    </div>
                    <button onClick={() => setSelectedIds(new Set())} className="ml-auto text-neutral-500 hover:text-neutral-300 text-xs transition-colors">
                        Clear
                    </button>
                </div>
            )}

            {/* Desktop table */}
            <div className="hidden md:block">
                {loading ? (
                    <TableSkeleton />
                ) : (
                    <BookingsTable
                        bookings={paginatedBookings}
                        updatingId={updatingId}
                        deletingId={deletingId}
                        sortField={sortField}
                        sortDir={sortDir}
                        onSort={handleSort}
                        onView={setSelectedBooking}
                        onStatusChange={handleStatusChange}
                        onDelete={setBookingToDelete}
                        selectedIds={selectedIds}
                        onToggleSelect={handleToggleSelect}
                        onToggleSelectAll={handleToggleSelectAll}
                    />
                )}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
                {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-40 bg-neutral-800 rounded-xl animate-pulse border border-neutral-700" />
                    ))
                ) : paginatedBookings.length === 0 ? (
                    <div className="text-center py-16 text-neutral-500">
                        <p className="text-base font-medium">No bookings found</p>
                        <p className="text-sm mt-1">Try adjusting your filters</p>
                    </div>
                ) : (
                    paginatedBookings.map((booking) => (
                        <MobileBookingCard
                            key={booking.id}
                            booking={booking}
                            updatingId={updatingId}
                            deletingId={deletingId}
                            onView={setSelectedBooking}
                            onStatusChange={handleStatusChange}
                            onDelete={setBookingToDelete}
                        />
                    ))
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between pt-1">
                    <p className="text-sm text-neutral-500">
                        Page {page} of {totalPages}
                        <span className="ml-2 text-neutral-600">·</span>
                        <span className="ml-2">{filteredBookings.length} results</span>
                    </p>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-3 py-1.5 text-sm rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 disabled:opacity-40 hover:bg-neutral-700 hover:text-white transition-colors"
                        >
                            ← Prev
                        </button>

                        {/* Page numbers (up to 5 visible) */}
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            const p = totalPages <= 5
                                ? i + 1
                                : page <= 3
                                    ? i + 1
                                    : page >= totalPages - 2
                                        ? totalPages - 4 + i
                                        : page - 2 + i
                            return (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`w-8 h-8 text-sm rounded-lg border transition-colors ${page === p
                                        ? 'bg-primary text-black border-primary font-bold'
                                        : 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700'
                                        }`}
                                >
                                    {p}
                                </button>
                            )
                        })}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-3 py-1.5 text-sm rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 disabled:opacity-40 hover:bg-neutral-700 hover:text-white transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}

            {/* Booking detail drawer */}
            <BookingDetailSheet
                booking={selectedBooking}
                open={!!selectedBooking}
                onClose={() => setSelectedBooking(null)}
                onStatusChange={handleStatusChange}
                onDriverAssign={handleDriverAssign}
                onPriceUpdate={handlePriceUpdate}
                onNoteSave={handleNoteSave}
                updatingId={updatingId}
            />

            {/* Delete confirmation dialog */}
            <DeleteDialog
                booking={bookingToDelete}
                open={!!bookingToDelete}
                onClose={() => setBookingToDelete(null)}
                onConfirm={handleDeleteConfirm}
                deleting={!!deletingId}
            />
        </div>
    )
}
