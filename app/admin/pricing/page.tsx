import PricingClient from './PricingClient';

// Admin panel — never statically prerender (avoids build-time Supabase client crashes and stale data)
export const dynamic = 'force-dynamic';

export default function PricingPage() {
    return <PricingClient />;
}
