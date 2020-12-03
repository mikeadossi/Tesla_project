require("dotenv").config();
const pool = require('./utility/database')
const zipCodes = require('./seed_folder/newestObject');
const vehiclesObj = require('./seed_folder/vehicles_seedFile'); 

let queries = {

  getAll: function () {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from stateData', (err, rows) => {
        console.log('rows: ',rows);
        if (err) return reject(err);
        return resolve(rows)
      });
    });
  },

  getZipcodeData: function (zipcode) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from zip_codes where id=${zipcode}`, (err, rows) => {
        console.log('rows: ',rows);
        if (err) return reject(err);
        return resolve(rows[0])
      });
    });
  },

  getVehicleData: function (model) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from vehicles where model='${model}'`, (err, rows) => {
        console.log(rows);
        if (err) return reject(err);
        return resolve(rows[0])
      });
    });
  },

  dropTable: function (tableName) {
    return pool.query(`DROP TABLE IF EXISTS ${tableName};`);
  },


  insertZipCode: function ({ id, city, state_abbr, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude }) {
    pool.query(`INSERT INTO zip_codes (id, city, state_abbr, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude) VALUES (${id}, '${city}', '${state_abbr}', '${state_name}',' ${area_codes}', '${county}', '${time_zone}', '${observes_day_light_savings}', '${latitude}', '${longitude}')`, (err, rows) => {
      if (err) console.log('Got an error inserting row to zip_codes', err);
      else console.log(`Row was inserted in zip_codes: ${id} - ${state_name}`);
    });
  },

  initializeDatabase: function () { 
    const zipcodesToSeed = Object.keys(zipCodes).map(zipcode => {
      const { state_abbr, state_name, county, city, area_codes, time_zone, observes_day_light_savings, latitude, longitude } = zipCodes[zipcode];
      return {
        state_abbr, state_name, county, city, area_codes, time_zone, observes_day_light_savings, latitude, longitude, id: zipcode
      };
    });
    zipcodesToSeed.forEach(zipcodeObject => this.insertZipCode(zipcodeObject));
  },

  insertVehicle: function({ model, partial_premium_interior, premium_interior, standard, off_menu, long_range, performance, plaid }) {
    pool.query(`INSERT INTO vehicles (model, partial_premium_interior, premium_interior, standard, off_menu, long_range, performance, plaid) VALUES ('${model}', '${partial_premium_interior}', '${premium_interior}', '${standard}', '${off_menu}', '${long_range}', '${performance}', '${plaid}')`, (err, rows) => {
      if (err) console.log('Got an error inserting row to vehicles', err);
      else console.log(`Row was inserted in vehicles: ${model}`);
    });
  },

  seedVehiclesDatabase: function () { 
    const vehiclesToSeed = Object.keys(vehiclesObj).map(vehicleModel => {
      const { partial_premium_interior, premium_interior, standard, off_menu, long_range, performance, plaid } = vehiclesObj[vehicleModel];
      return { partial_premium_interior, premium_interior, standard, off_menu, long_range, performance, plaid, model: vehicleModel };
    });
    vehiclesToSeed.forEach(elem => this.insertVehicle(elem));
  },


};

module.exports = queries;