-- Vehicles Table for Haram Taxi Service Admin
-- Run this in Supabase SQL Editor → New Query → Run

CREATE TABLE IF NOT EXISTS vehicles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  passengers INTEGER NOT NULL DEFAULT 4,
  luggage INTEGER NOT NULL DEFAULT 3,
  plate_number TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'maintenance', 'inactive')),
  notes TEXT
);

-- Enable RLS
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Only authenticated (admin) users can read/write
CREATE POLICY "Admin full access on vehicles"
  ON vehicles
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Seed with existing fleet
INSERT INTO vehicles (name, type, passengers, luggage, status) VALUES
  ('GMC Yukon XL', 'Luxury SUV', 7, 6, 'active'),
  ('Toyota Camry', 'Sedan', 4, 3, 'active'),
  ('Hyundai Staria', 'Family Van', 7, 7, 'active'),
  ('Toyota Hiace', 'Minibus', 12, 10, 'maintenance')
ON CONFLICT DO NOTHING;
