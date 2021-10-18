USE heroku_85b959e27eb22fb;
DROP TABLE IF EXISTS zip_codes;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS state_data; 
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS area_codes; 
DROP TABLE IF EXISTS notifications; 

CREATE TABLE zip_codes (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) NULL,
  state_abbr VARCHAR(255) NULL,
  state_name VARCHAR(255) NULL,
  area_codes VARCHAR(255) NULL,
  county VARCHAR(255) NULL,
  time_zone VARCHAR(45) NULL,
  observes_day_light_savings VARCHAR(45) NULL,
  latitude VARCHAR(45) NULL,
  longitude VARCHAR(45) NULL,
  closest_showrooms VARCHAR(45) NULL
);

CREATE TABLE user_details (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255) NULL,
  user_password VARCHAR(255) NULL,
  gave_cookie_permission VARCHAR(255) NULL,
  notifications_last_viewed_on VARCHAR(255) NULL,
  notifications_on VARCHAR(255) NULL,
  apply_all_warning_on VARCHAR(255) NULL,
  reset_warning_on VARCHAR(255) NULL, 
  date_joined VARCHAR(255) NULL,
  viewed_welcome_notification VARCHAR(255) NULL,
  user_sessionID VARCHAR(255) NULL
);

CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  notification_date VARCHAR(255) NULL,
  text_content VARCHAR(255) NULL,
  link VARCHAR(255) NULL
);

CREATE TABLE state_data (
  id SERIAL PRIMARY KEY,
  state_name LONGTEXT NULL,
  state_abbr LONGTEXT NULL,
  vehicle_incentives LONGTEXT NULL,
  solar_incentives LONGTEXT NULL, 
  local_vehicle_incentives LONGTEXT NULL,
  local_solar_incentives LONGTEXT NULL,
  all_showrooms LONGTEXT NULL,
  all_service_centers LONGTEXT NULL,
  all_charging_locations LONGTEXT NULL,
  vehicle_order LONGTEXT NULL,
  payment_object LONGTEXT NULL
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  partial_premium_interior LONGTEXT NULL,
  premium_interior LONGTEXT NULL,
  model VARCHAR(45) NULL,
  standard_battery LONGTEXT NULL,
  off_menu LONGTEXT NULL,
  long_range LONGTEXT NULL,
  performance LONGTEXT NULL,
  plaid LONGTEXT NULL,
  paint_options LONGTEXT NULL,
  default_optioned_vehicle LONGTEXT NULL
);

CREATE TABLE area_codes (
  id SERIAL PRIMARY KEY,
  state_abbr VARCHAR(45) NULL
);