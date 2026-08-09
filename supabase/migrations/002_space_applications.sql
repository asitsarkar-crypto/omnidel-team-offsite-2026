-- Space offer applications (Plants Donation Initiative)
-- Apply in Supabase SQL editor after 001_init.sql when credentials exist.

create table if not exists space_applications (
  id uuid primary key default gen_random_uuid(),
  public_id text unique not null,
  applicant_name text not null,
  organization_name text not null,
  number_of_locations integer not null default 1,
  locations text not null,
  approximate_area text not null,
  plantation_capacity text not null,
  mobile text not null,
  email text not null,
  application_date date,
  notes text,
  permission_consent boolean not null default false,
  photo_ack boolean not null default false,
  status text not null default 'submitted'
    check (status in ('submitted','under_review','approved','declined','withdrawn')),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists space_applications_created_idx on space_applications(created_at desc);
create index if not exists space_applications_email_idx on space_applications(email);
create index if not exists space_applications_status_idx on space_applications(status);

alter table space_applications enable row level security;
-- Writes via service role only; no public read of applicant PII.
