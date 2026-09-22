import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Note: Using service role key bypasses RLS. Use with caution and only on server-side.
let client: SupabaseClient | null = null

function getClient(): SupabaseClient {
    if (client) return client

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

    if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error('CRITICAL: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set. Admin operations will fail.');
    }

    client = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })
    return client
}

// Created lazily on first use (not at module import) so that build-time
// static analysis of routes importing this module doesn't crash when env
// vars aren't present in the build environment — only a real request that
// actually touches the database needs them.
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
    get(_target, prop, _receiver) {
        const real = getClient();
        const value = Reflect.get(real, prop, real);
        return typeof value === 'function' ? value.bind(real) : value;
    }
})
