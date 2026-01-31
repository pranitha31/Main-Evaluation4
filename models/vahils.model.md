create table vehicles(
  id uuid primary key default gen_random_uuid(),
  name text not null,
  registration_number text unique not null,
  allowed_passengers integer not null,
  is_available boolean default true,
  driver_id uuid references users(id),
  rate_per_km numeric not null,
  owner_id uuid references users(id) not null,
  created_at timestamp default current_timestamp
);