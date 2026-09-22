import { NextRequest, NextResponse } from 'next/server';
import { sendBookingConfirmationEmail } from '@/lib/email/sendConfirmationEmail';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Protected by middleware.ts (matches /api/admin/:path*) — requires an admin session.
export async function POST(request: NextRequest) {
    try {
        const { booking } = await request.json();

        if (!booking || !booking.id || !booking.customer_email) {
            return NextResponse.json({ error: 'Missing booking data' }, { status: 400 });
        }

        const emailResult = await sendBookingConfirmationEmail(booking);

        return NextResponse.json({ success: true, emailResult });
    } catch (error: any) {
        console.error('Confirmation email error:', error);
        return NextResponse.json(
            { error: 'Failed to send confirmation email' },
            { status: 500 }
        );
    }
}
