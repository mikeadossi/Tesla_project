DROP TABLE IF EXISTS zip_codes;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS state_data; 
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS area_codes; 

CREATE TABLE zip_codes (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) DEFAULT NULL,
  state_abbr VARCHAR(255) DEFAULT NULL,
  state_name VARCHAR(255) DEFAULT NULL,
  area_codes VARCHAR(255) DEFAULT NULL,
  county VARCHAR(45) DEFAULT NULL,
  time_zone VARCHAR(45) DEFAULT NULL,
  observes_day_light_savings VARCHAR(45) DEFAULT NULL,
  latitude VARCHAR(45) DEFAULT NULL,
  longitude VARCHAR(45) DEFAULT NULL,
  closest_showrooms VARCHAR(45) DEFAULT NULL,
)

CREATE TABLE user_details (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) DEFAULT NULL,
  user_password VARCHAR(255) DEFAULT NULL,
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

CREATE TABLE state_data (
  id SERIAL PRIMARY KEY,
  state_name LONGTEXT DEFAULT NULL,
  state_abbr LONGTEXT DEFAULT NULL,
  vehicle_incentives LONGTEXT DEFAULT NULL,
  solar_incentives LONGTEXT DEFAULT NULL, 
  local_vehicle_incentives LONGTEXT DEFAULT NULL,
  local_solar_incentives LONGTEXT DEFAULT NULL,
  all_showrooms LONGTEXT DEFAULT NULL,
  all_service_centers LONGTEXT DEFAULT NULL,
  all_charging_locations LONGTEXT DEFAULT NULL,
  vehicle_order LONGTEXT DEFAULT NULL,
  payment_object LONGTEXT DEFAULT NULL,
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
  plaid LONGTEXT DEFAULT NULL,
  paint_options LONGTEXT DEFAULT NULL,
  default_optioned_vehicle LONGTEXT DEFAULT NULL,
)

CREATE TABLE area_codes (
  id SERIAL PRIMARY KEY,
  state_abbr VARCHAR(45) DEFAULT NULL,
)