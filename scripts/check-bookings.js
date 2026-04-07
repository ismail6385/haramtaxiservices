const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read directly from .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val) {
    env[key.trim()] = val.join('=').trim().replace(/^"(.*)"$/, '$1');
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBookings() {
  try {
    const { data, count, error } = await supabase
      .from('bookings')
      .select('*', { count: 'exact' });

    if (error) {
      console.error("Error fetching bookings:", error);
      process.exit(1);
    }

    console.log(`Total Bookings: ${count}`);
    if (data && data.length > 0) {
      const sorted = data.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
      const latest = sorted[0];
      console.log(`Latest Booking Date: ${latest.created_at}`);
      console.log(`Latest Customer: ${latest.customer_name}`);
      console.log(`Latest Route: ${latest.pickup_location} -> ${latest.destination}`);
    } else {
      console.log("No bookings found in the database.");
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

checkBookings();
