const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing SUPABASE credentials in .env.local");
    process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createAdmin() {
    const email = 'admin@haramtaxiservice.com';
    const password = 'AdminPassword123!';

    console.log(`Checking if user ${email} exists...`);

    // Try finding user (since we only can do it by creating or listing, let's just attempt creation)
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: { role: 'admin' }
    });

    if (error) {
        if (error.message.includes('already exists')) {
            console.log(`User ${email} already exists.`);
            console.log(`To login, use email: ${email} password: ${password}`);

            // Let's update the password to be sure it's the one we know.
            // But we need the user ID. We can list users.
            const { data: usersData } = await supabaseAdmin.auth.admin.listUsers();
            const user = usersData?.users.find(u => u.email === email);
            if (user) {
                console.log(`Resetting password for ${email}...`);
                await supabaseAdmin.auth.admin.updateUserById(user.id, { password: password });
                console.log("Password reset successfully. You can now login with the credentials above.");
            }
        } else {
            console.error("Error creating user:", error.message);
        }
    } else {
        console.log(`Admin user created successfully!`);
        console.log(`To login, use email: ${email} password: ${password}`);
    }
}

createAdmin();
