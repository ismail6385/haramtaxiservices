import { NextResponse } from 'next/server';

// This endpoint is disabled for security reasons.
// Admin user setup was a one-time operation.
// To reset admin credentials, use the Supabase dashboard directly.
export async function GET() {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
}
