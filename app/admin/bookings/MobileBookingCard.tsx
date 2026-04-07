'use client'

import { Eye, Trash2, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import StatusBadge from './StatusBadge'
import type { Booking, BookingStatus } from './types'

interface Props {
    booking: Booking
    updatingId: string | null
    deletingId: string | null
    onView: (booking: Booking) => void
    onStatusChange: (id: string, status: BookingStatus) => void
    onDelete: (booking: Booking) => void
}

export default function MobileBookingCard({
    booking, updatingId, deletingId,
    onView, onStatusChange, onDelete,
}: Props) {
    const isUpdating = updatingId === booking.id
    const isDeleting = deletingId === booking.id
    const whatsappLink = `https://wa.me/${booking.customer_phone.replace(/\D/g, '')}`

    return (
        <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-4 space-y-3 transition-colors hover:border-neutral-600">
            {/* Top row: name + status */}
            <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                    <p className="font-semibold text-white text-sm truncate">
                        {booking.customer_name}
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-green-400 text-xs mt-0.5 hover:text-green-300 transition-colors"
                    >
                        <MessageCircle className="w-3 h-3" />
                        {booking.customer_phone}
                    </a>
                </div>
                <StatusBadge status={booking.status} />
            </div>

            {/* Route */}
            <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                    <span className="truncate">{booking.pickup_location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span className="truncate">{booking.destination}</span>
                </div>
            </div>

            {/* Meta row */}
            <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span>{booking.pickup_date}</span>
                <span className="text-neutral-700">·</span>
                <span>{booking.pickup_time}</span>
                <span className="text-neutral-700">·</span>
                <span className="truncate">{booking.vehicle_type}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-neutral-700">
                <Select
                    value={booking.status}
                    onValueChange={(val) => onStatusChange(booking.id, val as BookingStatus)}
                    disabled={isUpdating || !!updatingId}
                >
                    <SelectTrigger className="h-7 flex-1 bg-neutral-900 border-neutral-600 text-xs">
                        {isUpdating ? (
                            <Loader2 className="w-3 h-3 animate-spin text-neutral-400" />
                        ) : (
                            <SelectValue />
                        )}
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 shrink-0"
                    onClick={() => onView(booking)}
                    aria-label="View booking"
                >
                    <Eye className="h-3.5 w-3.5" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-red-400 hover:text-red-300 hover:bg-red-500/10 shrink-0"
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
        </div>
    )
}
