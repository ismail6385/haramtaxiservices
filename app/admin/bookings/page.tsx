import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import BookingsClient from './BookingsClient'
import type { Booking } from './types'

// Always fetch fresh data — never use cached version
export const dynamic = 'force-dynamic'

export default async function BookingsPage() {
    const cookieStore = cookies()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookieStore.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('[BookingsPage] Failed to fetch bookings:', error.message)
    }

    return <BookingsClient initialBookings={(data as Booking[]) || []} />
}
