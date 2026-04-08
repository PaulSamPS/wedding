create table if not exists public.rsvp (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  attending   boolean not null,
  guests      integer not null default 1,
  children    integer not null default 0,
  wishes      text,
  created_at  timestamptz not null default now()
);

alter table public.rsvp enable row level security;

-- Anyone can insert (no auth needed for a public wedding RSVP)
create policy "rsvp_insert_public" on public.rsvp
  for insert with check (true);

-- Only service-role can read (owner views via Supabase dashboard)
create policy "rsvp_select_service" on public.rsvp
  for select using (false);
