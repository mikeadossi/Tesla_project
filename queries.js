require("dotenv").config();
const pool = require('./utility/database')
const zipCodes = require('./zipcodeObject');

let queries = {

  getAll: function () {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from stateData', (err, rows) => {
        console.log(rows);
        if (err) return reject(err);
        return resolve(rows)
      });
    });
  },

  getZipcodeData: function (zipcode) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from zip_codes where id=${zipcode}`, (err, rows) => {
        console.log(rows);
        if (err) return reject(err);
        return resolve(rows[0])
      });
    });
  },

  dropTable: function (tableName) {
    return pool.query(`DROP TABLE IF EXISTS ${tableName};`);
  },

  insertZipCode: function ({ id, city, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude }) {
    pool.query(`INSERT INTO zip_codes (id, city, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude) VALUES (${id}, '${city}', '${state_name}',' ${area_codes}', '${county}', '${time_zone}', '${observes_day_light_savings}', '${latitude}', '${longitude}')`, (err, rows) => {
      if (err) console.log('Got an error inserting row to zip_codes', err);
      else console.log(`Row was inserted in zip_codes: ${id} - ${state_name}`);
    });
  },

  initializeDatabase: function () {
    const zipcodesToSeed = Object.keys(zipCodes).map(zipcode => {
      const { city, state: state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude } = zipCodes[zipcode];
      return {
        city, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude, id: zipcode
      };
    });
    zipcodesToSeed.forEach(zipcodeObject => this.insertZipCode(zipcodeObject));
  }

};

module.exports = queries;