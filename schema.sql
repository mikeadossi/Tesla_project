DROP TABLE IF EXISTS stateData CASCADE;
DROP TABLE IF EXISTS model3Data CASCADE;
  
  CREATE TABLE stateData (
    id SERIAL PRIMARY KEY, 
    region VARCHAR(255),
    vehicle_sales_tax INTEGER,
    solar_subscription VARACHAR,
    solar_sub_utility VARCHAR(255),
    leasing_available VARCHAR(255),
    financing_available VARCHAR(255),
    solar_incentives_text VARCHAR(255),
    solar_savings VARCHAR(255),
    vehicle_incentives VARCHAR(255),
    capital_city VARCHAR(255),
    random_zip INTEGER,
    state_name VARCHAR(255),
    allows_solar_panels VARCHAR(255),
    allows_solar_roof VARCHAR(255)
  );

  CREATE TABLE model3Data (
    id SERIAL PRIMARY KEY, 
    battery_type VARCHAR(255), // allBatteryResults()
    price INTEGER, // allBatteryResults()
    specs VARCHAR(255), // allBatteryResults()
    delivery_date VARCHAR(255), // allExteriorResults()
    paint_and_price VARCHAR(255), // allExteriorResults()
    interior_and_price VARCHAR(255), // allExteriorResults()
    wheel_and_price VARCHAR(255)
  );
