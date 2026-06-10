export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

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
}

export type SortField = 'created_at' | 'customer_name' | 'pickup_date'
export type SortDir = 'asc' | 'desc'
