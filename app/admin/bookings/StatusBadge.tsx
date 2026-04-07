import type { BookingStatus } from './types'

const config: Record<BookingStatus, { label: string; classes: string }> = {
    pending: {
        label: 'Pending',
        classes: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    confirmed: {
        label: 'Confirmed',
        classes: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    completed: {
        label: 'Completed',
        classes: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    cancelled: {
        label: 'Cancelled',
        classes: 'bg-red-500/10 text-red-400 border-red-500/20',
    },
}

export default function StatusBadge({ status }: { status: BookingStatus }) {
    const { label, classes } = config[status] ?? config.pending
    return (
        <span
            className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border uppercase tracking-widest whitespace-nowrap ${classes}`}
        >
            {label}
        </span>
    )
}
