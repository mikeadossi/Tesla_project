DROP TABLE IF EXISTS stateData CASCADE; 
  
CREATE TABLE stateData (
  id SERIAL PRIMARY KEY,
  region VARCHAR(255),
  vehicle_sales_tax INTEGER,
  solar_subscription VARCHAR(255),
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

INSERT INTO stateData (
  id,
  region,
  vehicle_sales_tax,
  solar_subscription,
  solar_sub_utility,
  leasing_available,
  financing_available,
  solar_incentives_text,
  solar_savings,
  vehicle_incentives,
  capital_city,
  random_zip,
  state_name,
  allows_solar_panels,
  allows_solar_roof
)
VALUES (0, 'USA', 100, 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 3, 'a', 'a', 'a');
 
INSERT INTO stateData (
  id,
  region,
  vehicle_sales_tax,
  solar_subscription,
  solar_sub_utility,
  leasing_available,
  financing_available,
  solar_incentives_text,
  solar_savings,
  vehicle_incentives,
  capital_city,
  random_zip,
  state_name,
  allows_solar_panels,
  allows_solar_roof
)
VALUES (1, 'USA', 1000, 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 3, 'a', 'a', 'a');
