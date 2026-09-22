import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Created lazily on first use (not at module import) so that build-time
// static analysis of routes/pages importing this module doesn't crash when
// env vars aren't present in the build environment.
let client: SupabaseClient | null = null

function getClient(): SupabaseClient {
    if (client) return client

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    client = createClient(supabaseUrl, supabaseAnonKey)
    return client
}

export const supabase = new Proxy({} as SupabaseClient, {
    get(_target, prop, _receiver) {
        const real = getClient();
        const value = Reflect.get(real, prop, real);
        return typeof value === 'function' ? value.bind(real) : value;
    }
})

export type BookingData = {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_location: string;
    destination: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    vehicle_image?: string;
    passengers: number;
    luggage: number;
    special_requests?: string;
    status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    confirmation_token?: string;
};

export const vehicles = [
    {
        name: 'GMC Yukon',
        image: '/gmc-yukon.webp',
        passengers: 7,
        luggage: 5,
        priceRange: 'Get Quote - 400'
    },
    {
        name: 'Toyota Camry',
        image: '/toyota-camry.webp',
        passengers: 4,
        luggage: 3,
        priceRange: 'Get Quote - 150'
    },
    {
        name: 'Hyundai Staria',
        image: '/hyundai-staria.webp',
        passengers: 7,
        luggage: 6,
        priceRange: 'Get Quote - 250'
    },
    {
        name: 'Toyota Hiace',
        image: '/toyota-hiace.webp',
        passengers: 11,
        luggage: 10,
        priceRange: 'Get Quote - 450'
    },
    {
        name: 'Toyota Coaster',
        image: '/toyota-coaster.webp',
        passengers: 17,
        luggage: 15,
        priceRange: 'Get Quote - 600'
    },
    {
        name: 'Hyundai Starex',
        image: '/hyundai-starex.webp',
        passengers: 7,
        luggage: 5,
        priceRange: 'Get Quote - 220'
    }
];
