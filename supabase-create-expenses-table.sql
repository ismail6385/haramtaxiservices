-- Expenses Table for Haram Taxi Service Admin
-- Run this in Supabase SQL Editor → New Query → Run

CREATE TABLE IF NOT EXISTS expenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  date DATE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Other',
  amount NUMERIC(10, 2) NOT NULL CHECK (amount > 0)
);

-- Enable RLS
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Only authenticated users (admin) can read/write
CREATE POLICY "Admin can do everything on expenses"
  ON expenses
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index on date for sorting performance
CREATE INDEX IF NOT EXISTS expenses_date_idx ON expenses (date DESC);
