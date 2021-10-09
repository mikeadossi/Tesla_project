DROP TABLE IF EXISTS zip_codes;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS showrooms;
DROP TABLE IF EXISTS service_centers;
DROP TABLE IF EXISTS superchargers;
DROP TABLE IF EXISTS state_data; 
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS area_codes; 

CREATE TABLE zip_codes (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) DEFAULT NULL,
  state_abbr VARCHAR(255) DEFAULT NULL,
  state_name VARCHAR(255) DEFAULT NULL,
  area_codes VARCHAR(255) DEFAULT NULL,
  county VARCHAR(255) DEFAULT NULL,
  time_zone VARCHAR(255) DEFAULT NULL,
  observes_day_light_savings VARCHAR(255) DEFAULT NULL,
  latitude VARCHAR(255) DEFAULT NULL,
  longitude VARCHAR(255) DEFAULT NULL,
  closest_showrooms VARCHAR(255) DEFAULT NULL,
  state_id TINYINT UNSIGNED NOT NULL
)

CREATE TABLE user_details (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) DEFAULT NULL, 
  dark_theme_off VARCHAR(255) DEFAULT NULL,
  gave_cookie_permission VARCHAR(255) DEFAULT NULL,
  notifications_last_viewed_on VARCHAR(255) DEFAULT NULL,
  notifications_on VARCHAR(255) DEFAULT NULL,
  apply_all_warning_on VARCHAR(255) DEFAULT NULL,
  reset_warning_on VARCHAR(255) DEFAULT NULL, 
  date_joined VARCHAR(255) DEFAULT NULL,
  viewed_welcome_notification VARCHAR(255) DEFAULT NULL,
  user_sessionID VARCHAR(255) DEFAULT NULL,
)

CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  notification_date VARCHAR(255) DEFAULT NULL,
  text_content VARCHAR(255) DEFAULT NULL,
  link VARCHAR(255) DEFAULT NULL,
)

CREATE TABLE showrooms (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL 
)

CREATE TABLE service_centers (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL 
)

CREATE TABLE superchargers (
  id SERIAL PRIMARY KEY,
  store_name VARCHAR(255) DEFAULT NULL,
  store_address VARCHAR(255) DEFAULT NULL,
  store_url VARCHAR(255) DEFAULT NULL,
  operational_bool VARCHAR(255) DEFAULT NULL
)

CREATE TABLE state_data (
  id SERIAL PRIMARY KEY,
  state_name VARCHAR(255) DEFAULT NULL,
  state_abbr VARCHAR(2) DEFAULT NULL,
  vehicle_incentives VARCHAR(255) DEFAULT NULL,
  solar_incentives VARCHAR(255) DEFAULT NULL, 
  local_vehicle_incentives VARCHAR(255) DEFAULT NULL,
  local_solar_incentives VARCHAR(255) DEFAULT NULL,
  all_showrooms VARCHAR(255) DEFAULT NULL,
  all_service_centers VARCHAR(255) DEFAULT NULL,
  all_charging_locations VARCHAR(255) DEFAULT NULL,
  tradein_value VARCHAR(255) DEFAULT NULL, 
  tradein_payoff VARCHAR(255) DEFAULT NULL, 
  tradein_equity VARCHAR(255) DEFAULT NULL, 
  order_pymt INTEGER, 
  destination_and_doc_fee VARCHAR(255) DEFAULT NULL, 
  state_tax_rate INTEGER, 
  state_taxes VARCHAR(255) DEFAULT NULL,
  leasing VARCHAR(255) DEFAULT NULL,
  financing VARCHAR(255) DEFAULT NULL,
  registration VARCHAR(255) DEFAULT NULL,
  solar_panel_subscription VARCHAR(255) DEFAULT NULL,
  leasing_available VARCHAR(255) DEFAULT NULL,
  financing_available VARCHAR(255) DEFAULT NULL,
  region VARCHAR(255) DEFAULT NULL, 
  default_zipcode INTEGER, 
)

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  partial_premium_interior LONGTEXT DEFAULT NULL,
  premium_interior LONGTEXT DEFAULT NULL,
  model VARCHAR(45) DEFAULT NULL,
  standard_battery LONGTEXT DEFAULT NULL,
  off_menu LONGTEXT DEFAULT NULL,
  long_range LONGTEXT DEFAULT NULL,
  performance LONGTEXT DEFAULT NULL,
  plaid LONGTEXT DEFAULT NULL
)

CREATE TABLE area_codes (
  id SERIAL PRIMARY KEY,
  area_code_number INTEGER
)