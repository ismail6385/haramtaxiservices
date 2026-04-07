'use client'

import { ArrowUpDown, ArrowUp, ArrowDown, Eye, Trash2, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select'
import StatusBadge from './StatusBadge'
import type { Booking, BookingStatus, SortField, SortDir } from './types'

interface Props {
    bookings: Booking[]
    updatingId: string | null
    deletingId: string | null
    sortField: SortField
    sortDir: SortDir
    onSort: (field: SortField) => void
    onView: (booking: Booking) => void
    onStatusChange: (id: string, status: BookingStatus) => void
    onDelete: (booking: Booking) => void
}

function SortableHead({
    field, label, sortField, sortDir, onSort,
}: {
    field: SortField
    label: string
    sortField: SortField
    sortDir: SortDir
    onSort: (f: SortField) => void
}) {
    const active = sortField === field
    return (
        <button
            onClick={() => onSort(field)}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider group"
        >
            {label}
            {active ? (
                sortDir === 'asc'
                    ? <ArrowUp className="w-3 h-3 text-primary" />
                    : <ArrowDown className="w-3 h-3 text-primary" />
            ) : (
                <ArrowUpDown className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
            )}
        </button>
    )
}

export default function BookingsTable({
    bookings, updatingId, deletingId,
    sortField, sortDir, onSort,
    onView, onStatusChange, onDelete,
}: Props) {
    if (bookings.length === 0) {
        return (
            <div className="bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg font-medium text-neutral-300">No bookings found</p>
                <p className="text-sm text-neutral-500 mt-1">Try adjusting your search or filters</p>
            </div>
        )
    }

    return (
        <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
            <Table>
                <TableHeader className="bg-neutral-900/60 sticky top-0 z-10">
                    <TableRow className="border-neutral-700 hover:bg-transparent">
                        <TableHead className="py-3 pl-4">
                            <SortableHead
                                field="customer_name"
                                label="Customer"
                                sortField={sortField}
                                sortDir={sortDir}
                                onSort={onSort}
                            />
                        </TableHead>
                        <TableHead className="text-neutral-400 text-xs uppercase tracking-wider">
                            Phone
                        </TableHead>
                        <TableHead className="text-neutral-400 text-xs uppercase tracking-wider">
                            Route
                        </TableHead>
                        <TableHead>
                            <SortableHead
                                field="pickup_date"
                                label="Date"
                                sortField={sortField}
                                sortDir={sortDir}
                                onSort={onSort}
                            />
                        </TableHead>
                        <TableHead className="text-neutral-400 text-xs uppercase tracking-wider">
                            Vehicle
                        </TableHead>
                        <TableHead className="text-neutral-400 text-xs uppercase tracking-wider">
                            Status
                        </TableHead>
                        <TableHead className="text-neutral-400 text-xs uppercase tracking-wider text-right pr-4">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {bookings.map((booking) => {
                        const isUpdating = updatingId === booking.id
                        const isDeleting = deletingId === booking.id
                        const phone = booking.customer_phone.replace(/\D/g, '')
                        const whatsappLink = `https://wa.me/${phone}`

                        return (
                            <TableRow
                                key={booking.id}
                                className="border-neutral-700 hover:bg-neutral-700/30 transition-colors"
                            >
                                {/* Customer */}
                                <TableCell
                                    className="pl-4 cursor-pointer"
                                    onClick={() => onView(booking)}
                                >
                                    <div>
                                        <p className="text-white font-medium text-sm leading-tight">
                                            {booking.customer_name}
                                        </p>
                                        <p className="text-neutral-500 text-xs mt-0.5 truncate max-w-[160px]">
                                            {booking.customer_email}
                                        </p>
                                    </div>
                                </TableCell>

                                {/* Phone */}
                                <TableCell>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm transition-colors"
                                    >
                                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                                        <span className="whitespace-nowrap">{booking.customer_phone}</span>
                                    </a>
                                </TableCell>

                                {/* Route */}
                                <TableCell
                                    className="cursor-pointer"
                                    onClick={() => onView(booking)}
                                >
                                    <div className="space-y-1 max-w-[180px]">
                                        <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                            <span className="truncate">{booking.pickup_location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                            <span className="truncate">{booking.destination}</span>
                                        </div>
                                    </div>
                                </TableCell>

                                {/* Date */}
                                <TableCell
                                    className="cursor-pointer"
                                    onClick={() => onView(booking)}
                                >
                                    <div>
                                        <p className="text-sm text-neutral-200 whitespace-nowrap">
                                            {booking.pickup_date}
                                        </p>
                                        <p className="text-xs text-neutral-500 mt-0.5">
                                            {booking.pickup_time}
                                        </p>
                                    </div>
                                </TableCell>

                                {/* Vehicle */}
                                <TableCell
                                    className="cursor-pointer"
                                    onClick={() => onView(booking)}
                                >
                                    <span className="text-xs text-neutral-300 bg-neutral-900 px-2 py-1 rounded border border-neutral-700 whitespace-nowrap">
                                        {booking.vehicle_type}
                                    </span>
                                </TableCell>

                                {/* Status — inline dropdown that looks like a badge */}
                                <TableCell>
                                    <Select
                                        value={booking.status}
                                        onValueChange={(val) =>
                                            onStatusChange(booking.id, val as BookingStatus)
                                        }
                                        disabled={isUpdating || !!updatingId}
                                    >
                                        <SelectTrigger className="w-auto h-auto p-0 border-0 bg-transparent shadow-none focus:ring-0 gap-1 disabled:opacity-60">
                                            {isUpdating ? (
                                                <Loader2 className="w-3.5 h-3.5 animate-spin text-neutral-400" />
                                            ) : (
                                                <StatusBadge status={booking.status} />
                                            )}
                                        </SelectTrigger>
                                        <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="confirmed">Confirmed</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>

                                {/* Actions */}
                                <TableCell className="pr-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                                            onClick={() => onView(booking)}
                                            aria-label="View booking"
                                        >
                                            <Eye className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                            onClick={() => onDelete(booking)}
                                            disabled={isDeleting}
                                            aria-label="Delete booking"
                                        >
                                            {isDeleting ? (
                                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                            ) : (
                                                <Trash2 className="h-3.5 w-3.5" />
                                            )}
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
