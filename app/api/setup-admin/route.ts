import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
    const email = 'admin@haramtaxiservice.com';
    const password = 'AdminPassword123!';

    console.log(`Checking if user ${email} exists...`);

    try {
        const { data: usersData, error: listError } = await supabaseAdmin.auth.admin.listUsers();

        if (listError) {
            return NextResponse.json({ error: listError.message }, { status: 500 });
        }

        const user = usersData?.users.find(u => u.email === email);

        if (user) {
            console.log(`User ${email} already exists. Resetting password.`);
            const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(user.id, { password: password });

            if (updateError) {
                return NextResponse.json({ error: updateError.message }, { status: 500 });
            }

            return NextResponse.json({
                message: 'Admin user already existed, password has been reset.',
                credentials: { email, password }
            });
        } else {
            console.log(`Creating user ${email}...`);
            const { data, error } = await supabaseAdmin.auth.admin.createUser({
                email: email,
                password: password,
                email_confirm: true,
                user_metadata: { role: 'admin' }
            });

            if (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }

            return NextResponse.json({
                message: 'Admin user created successfully!',
                credentials: { email, password }
            });
        }
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
