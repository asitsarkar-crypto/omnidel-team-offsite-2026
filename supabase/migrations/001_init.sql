-- KarmYog Vatika — initial schema
-- Run in Supabase SQL editor when project credentials are available.
-- TODO(ops): Apply via supabase db push / migration pipeline.

create extension if not exists "pgcrypto";

create table if not exists organizations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  role text,
  website text,
  created_at timestamptz not null default now()
);

create table if not exists campaigns (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  status text not null default 'draft' check (status in ('draft','active','completed','archived')),
  goal_trees integer not null default 0,
  price_per_tree_paise integer not null default 15000,
  summary text,
  starts_on date,
  ends_on date,
  created_at timestamptz not null default now()
);

create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  region text,
  state text,
  country text not null default 'IN',
  status text not null default 'planning',
  detail text,
  trees_planned integer not null default 0,
  latitude numeric(9,6),
  longitude numeric(9,6),
  species jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists donors (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamptz not null default now(),
  unique (email)
);

create table if not exists sponsors (
  id uuid primary key default gen_random_uuid(),
  donor_id uuid references donors(id) on delete set null,
  org_name text,
  display_name text not null,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  public_id text unique not null,
  donor_id uuid references donors(id) on delete set null,
  campaign_id uuid references campaigns(id) on delete set null,
  donation_type text not null check (donation_type in ('plant','sponsor','donate')),
  trees integer not null default 0,
  amount_paise integer not null,
  currency text not null default 'INR',
  payment_method text,
  message text,
  status text not null default 'pending'
    check (status in ('pending','awaiting_payment','paid','failed','refunded','cancelled')),
  razorpay_order_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists transactions (
  id uuid primary key default gen_random_uuid(),
  donation_id uuid not null references donations(id) on delete cascade,
  provider text not null default 'razorpay',
  provider_payment_id text,
  provider_order_id text,
  provider_event_id text unique,
  amount_paise integer not null,
  status text not null,
  raw jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists plantation_batches (
  id uuid primary key default gen_random_uuid(),
  location_id uuid references locations(id) on delete set null,
  campaign_id uuid references campaigns(id) on delete set null,
  planted_on date,
  trees_count integer not null default 0,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists plantation_allocations (
  id uuid primary key default gen_random_uuid(),
  donation_id uuid not null references donations(id) on delete cascade,
  batch_id uuid references plantation_batches(id) on delete set null,
  trees integer not null,
  created_at timestamptz not null default now()
);

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('photo','video','press','article')),
  title text not null,
  caption text,
  src text,
  href text,
  published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists impact_snapshots (
  id uuid primary key default gen_random_uuid(),
  as_of date not null,
  trees_planted integer not null default 0,
  sponsors integer not null default 0,
  funds_raised_paise bigint not null default 0,
  carbon_offset_tons numeric(12,2) not null default 0,
  villages_covered integer not null default 0,
  campaigns integer not null default 0,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists donations_status_idx on donations(status);
create index if not exists donations_created_idx on donations(created_at desc);
create index if not exists transactions_payment_idx on transactions(provider_payment_id);

-- RLS: public read for published content; writes via service role only
alter table media_assets enable row level security;
alter table impact_snapshots enable row level security;
alter table campaigns enable row level security;
alter table locations enable row level security;

create policy "Public read published media" on media_assets
  for select using (published = true);

create policy "Public read impact" on impact_snapshots
  for select using (true);

create policy "Public read active campaigns" on campaigns
  for select using (status in ('active','completed'));

create policy "Public read locations" on locations
  for select using (true);
