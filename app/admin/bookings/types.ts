export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'
export type PaymentStatus = 'unpaid' | 'partial' | 'paid'
export type PaymentMethod = 'cash' | 'bank_transfer' | 'online' | 'other'

export interface Booking {
    id: string
    created_at: string
    customer_name: string
    customer_email: string
    customer_phone: string
    pickup_location: string
    destination: string
    pickup_date: string
    pickup_time: string
    vehicle_type: string
    passengers: number
    luggage: number
    special_requests?: string
    status: BookingStatus
    total_price?: number
    driver_assigned?: string
    admin_notes?: string
    // Round trip
    is_round_trip?: boolean
    return_date?: string
    return_time?: string
    // Payment
    payment_status?: PaymentStatus
    payment_method?: PaymentMethod
    amount_paid?: number
}

export interface BookingLog {
    id: string
    booking_id: string
    action: string
    details?: string | null
    created_at: string
}

export type SortField = 'created_at' | 'customer_name' | 'pickup_date'
export type SortDir = 'asc' | 'desc'
