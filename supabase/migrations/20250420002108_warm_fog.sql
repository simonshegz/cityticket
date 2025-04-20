/*
  # Create events and tickets tables

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `date` (date)
      - `time` (time)
      - `venue` (text)
      - `location` (text)
      - `image` (text)
      - `price` (decimal)
      - `category` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `tickets`
      - `id` (uuid, primary key)
      - `event_id` (uuid, foreign key)
      - `type` (text)
      - `price` (decimal)
      - `available` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date date NOT NULL,
  time time NOT NULL,
  venue text NOT NULL,
  location text NOT NULL,
  image text,
  price decimal NOT NULL,
  category text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create tickets table
CREATE TABLE IF NOT EXISTS tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events ON DELETE CASCADE,
  type text NOT NULL,
  price decimal NOT NULL,
  available integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;

-- Create policies for events
CREATE POLICY "Allow public read access to events"
  ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin write access to events"
  ON events
  FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT user_id FROM admin_users
    )
  );

-- Create policies for tickets
CREATE POLICY "Allow public read access to tickets"
  ON tickets
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow admin write access to tickets"
  ON tickets
  FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT user_id FROM admin_users
    )
  );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tickets_updated_at
  BEFORE UPDATE ON tickets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();