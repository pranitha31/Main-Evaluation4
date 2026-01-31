create table trips(
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references users(id) not null,
  vahicle_id uuid references vehicles(id) not null,
  start_date timestamp not null,
  end_date timestamp not null,
  location text not null,
  distance_km numeric not null,
  passengers integer  not null,
  trip_cost numeric,
  is_completed boolean default false,
  created_at timestamp default current_timestamp
);