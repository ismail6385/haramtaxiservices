'use client'

import { Loader2, AlertTriangle } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog'
import type { Booking } from './types'

interface Props {
    booking: Booking | null
    open: boolean
    onClose: () => void
    onConfirm: () => void
    deleting: boolean
}

export default function DeleteDialog({ booking, open, onClose, onConfirm, deleting }: Props) {
    return (
        <AlertDialog open={open} onOpenChange={(o) => !o && onClose()}>
            <AlertDialogContent className="bg-neutral-900 border-neutral-700 text-white max-w-md">
                <AlertDialogHeader>
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                        </div>
                        <AlertDialogTitle className="text-white text-lg">
                            Delete Booking?
                        </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-neutral-400 leading-relaxed">
                        You are about to permanently delete the booking for{' '}
                        <span className="text-white font-semibold">{booking?.customer_name}</span>
                        {booking?.pickup_date && (
                            <>
                                {' '}scheduled on{' '}
                                <span className="text-white font-semibold">{booking.pickup_date}</span>
                            </>
                        )}
                        .
                        <br />
                        <br />
                        This action{' '}
                        <span className="text-red-400 font-semibold">cannot be undone</span>.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-2 mt-2">
                    <AlertDialogCancel
                        onClick={onClose}
                        disabled={deleting}
                        className="bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={(e) => {
                            e.preventDefault()
                            onConfirm()
                        }}
                        disabled={deleting}
                        className="bg-red-600 hover:bg-red-700 text-white border-0 min-w-[110px]"
                    >
                        {deleting ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            'Yes, Delete'
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
