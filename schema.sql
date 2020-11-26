DROP TABLE IF EXISTS zip_codes CASCADE;
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS showrooms CASCADE;
DROP TABLE IF EXISTS service_centers CASCADE;
DROP TABLE IF EXISTS superchargers CASCADE;
DROP TABLE IF EXISTS state_data CASCADE;
DROP TABLE IF EXISTS general CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;
DROP TABLE IF EXISTS area_codes CASCADE; 

CREATE TABLE zip_codes (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) DEFAULT NULL,
  state_name VARCHAR(255) DEFAULT NULL,
  state_data_id INTEGER REFERENCES state_data(id),
  area_codes REFERENCES area_codes(id),
  county VARCHAR(255) DEFAULT NULL,
  time_zone VARCHAR(255) DEFAULT NULL,
  observes_day_light_savings VARCHAR(255) DEFAULT NULL,
  latitude VARCHAR(255) DEFAULT NULL,
  longitude VARCHAR(255) DEFAULT NULL,
  closest_showrooms VARCHAR(255) DEFAULT NULL
)

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) DEFAULT NULL,
  user_password VARCHAR(255) DEFAULT NULL,
  dark_mode VARCHAR
  gave_cookie_permission VARCHAR
)

CREATE TABLE showrooms (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL,
  zip_codes_id INTEGER REFERENCES zip_codes(id)
)

CREATE TABLE service_centers (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL,
  zip_codes_id INTEGER REFERENCES zip_codes(id)
)

CREATE TABLE superchargers (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL,
  zip_codes_id INTEGER REFERENCES zip_codes(id)
)

CREATE TABLE state_data (
  id SERIAL PRIMARY KEY,
  state_name VARCHAR(255) DEFAULT NULL,
  state_abbr VARCHAR(255) DEFAULT NULL,
  tax_rate VARCHAR(255) DEFAULT NULL,
  fees VARCHAR(255) DEFAULT NULL,
  solar_incentives VARCHAR(255) DEFAULT NULL,
  vehicle_incentives VARCHAR(255) DEFAULT NULL,
  showroom_id INTEGER REFERENCES showrooms(id),
  service_center_id INTEGER REFERENCES service_centers(id),
  superchargers_id INTEGER REFERENCES superchargers(id),
  state_tax_summary VARCHAR(255) DEFAULT NULL,
  state_tax VARCHAR(255) DEFAULT NULL,
  state_tax_with_price_condition VARCHAR(255) DEFAULT NULL,
  motor_vehicle_doc_fee VARCHAR(255) DEFAULT NULL,
  motor_vehicle_excise VARCHAR(255) DEFAULT NULL,
  titling_tax VARCHAR(255) DEFAULT NULL,
  title_fee VARCHAR(255) DEFAULT NULL,
  maximum_tax_cash_amt VARCHAR(255) DEFAULT NULL,
  minimum_tax_cash_amt VARCHAR(255) DEFAULT NULL,
  lease_tax VARCHAR(255) DEFAULT NULL,
  highway_use VARCHAR(255) DEFAULT NULL,
  local_surtax VARCHAR(255) DEFAULT NULL,
  additional_municipality_cost VARCHAR(255) DEFAULT NULL,
  additional_county_cost VARCHAR(255) DEFAULT NULL,
  average_district_tax VARCHAR(255) DEFAULT NULL,
  registration_fee VARCHAR(255) DEFAULT NULL,
  plate_transfer_fee VARCHAR(255) DEFAULT NULL,
  tax_before_rebate_bool VARCHAR
)

CREATE TABLE general (
  id SERIAL PRIMARY KEY,
  vehicle_apr INTEGER,
  solar_apr INTEGER,
  vehicle_warranty VARCHAR(255) DEFAULT NULL,
  solar_warranty VARCHAR
)

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  vehicle_name VARCHAR(255) DEFAULT NULL,
  trim_data VARCHAR(255) DEFAULT NULL,
  manufactured_year INTEGER,
  purchase_price INTEGER,
  zero_sixty_mph_in_seconds INTEGER,
  top_speed_mph INTEGER,
  range_in_miles INTEGER,
  interior_options VARCHAR(255) DEFAULT NULL,
  seating VARCHAR(255) DEFAULT NULL,
  misc_options VARCHAR(255) DEFAULT NULL, 
  wheel_options VARCHAR(255) DEFAULT NULL
)

CREATE TABLE area_codes (
  id SERIAL PRIMARY KEY,
  area_code_number INTEGER,
  zipcode_id REFERENCES zip_codes(id),
  state_id REFERENCES state_data(id)
)