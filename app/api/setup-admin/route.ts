import { NextResponse } from 'next/server';

// This endpoint has been disabled for security.
// Admin users are managed directly in the Supabase dashboard:
// Authentication → Users → Add User
export async function GET() {
    return NextResponse.json({ error: 'This endpoint is disabled.' }, { status: 410 });
}
