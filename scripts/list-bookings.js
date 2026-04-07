const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

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

const supabase = createClient(supabaseUrl, supabaseKey);

async function listRecentBookings() {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('created_at, customer_name, pickup_location, destination')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error(error);
      return;
    }

    console.log("Recent Bookings:");
    data.forEach(b => {
      console.log(`${b.created_at} | ${b.customer_name} | ${b.pickup_location} -> ${b.destination}`);
    });
  } catch (err) {
    console.error(err);
  }
}

listRecentBookings();
