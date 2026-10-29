-- Testimonials for the portfolio. Run this in the Supabase SQL editor.
--
-- Visitors (the anon role) can submit a note, which is saved as not approved,
-- and can read only approved notes. To publish a note, open the table in the
-- Supabase dashboard and set approved to true, or run:
--   update public.testimonials set approved = true where id = '<note id>';

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  role text check (role is null or char_length(role) <= 80),
  message text not null check (char_length(message) between 10 and 400),
  approved boolean not null default false,
  created_at timestamptz default now()
);

create index if not exists testimonials_approved_created_at_idx
  on public.testimonials (approved, created_at desc);

alter table public.testimonials enable row level security;

drop policy if exists "Anyone can submit an unapproved testimonial" on public.testimonials;
create policy "Anyone can submit an unapproved testimonial"
  on public.testimonials
  for insert
  to anon
  with check (approved = false);

drop policy if exists "Anyone can read approved testimonials" on public.testimonials;
create policy "Anyone can read approved testimonials"
  on public.testimonials
  for select
  to anon
  using (approved = true);

grant select, insert on public.testimonials to anon;
