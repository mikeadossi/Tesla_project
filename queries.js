require("dotenv").config();
const pool = require("./utility/database");
const zipCodes = require("./seed_folder/newestObject");
const vehiclesObj = require("./seed_folder/vehicles_seedFile");
const stateDataObj = require("./seed_folder/state_seedFile.js");
const areaCodesObj = require("./seed_folder/area_codes"); 
// const showroomObj = require("./seed_folder/showroomData");
// const serviceCenterObj = require(".seed_folder/serviceCenterData");
// const showroomPhoneObj = require("./seed_folder/showroomPhoneNum");
// const serviceCenterPhoneObj = require(".seed_folder/serviceCenterPhoneNum");


const userObject = {
  user1: {
    user_email: 'null',
    user_password: 'null',
    dark_theme_off: 'null',
    gave_cookie_permission: 'null',
    notifications_on: 'null',
    apply_all_warning_on: 'null',
    reset_warning_on: 'null',
    account_active: 'null',
    date_joined: 'null'
  }
};

let queries = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * from stateData", (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  },

  getStateDataByStateAbbr: function (abbr) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * from state_data where state_abbr="${abbr}"`,
        (err, rows) => {
          if (err) return reject(err);
          return resolve(rows);
        }
      );
    });
  },

  isEmailRegistered: function (email) {
    return new Promise((resolve, reject) => {
      pool.query( 
        `SELECT account_active from user_details where user_email="${email}"`, 
        (err, rows) => {
          if (err) return reject(err);
          return resolve(rows);
        }
      );
    });
  },


  getUserQuery: function(email, password) {
    return new Promise((resolve, reject) => {
      pool.query( 
        `SELECT * from user_details where user_email="${email}"`,
        (err, response) => { 
          if (err) return reject(err);
          return resolve(response);
        }
      );
    });
  },

  getStateDataByStateName: function (stateName) { 
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * from stateData where state_name=${stateName}`,
        (err, rows) => {
          // console.log("rows: ", rows);
          if (err) return reject(err);
          return resolve(rows);
        }
      );
    });
  },

  getUserData: function (email) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from user_details where user_email='${email}'`, (err, rows) => { 
        if (err) return reject(err);
        return resolve(rows[0]);
      });
    });
  },

  insertNewUser: function ({
    id,
    email,
    password,
    date_joined, 
    gave_cookie_permission,
    notifications_on,
    apply_all_warning_on,
    reset_warning_on,
  }) {
    pool.query(
      `INSERT INTO user_details (
        user_id, 
        user_email,
        user_password,
        date_joined, 
        gave_cookie_permission,
        notifications_on,
        apply_all_warning_on,
        reset_warning_on
        ) VALUES (
          '${id}', 
          '${email}',
          '${password}', 
          '${date_joined}',
          '${gave_cookie_permission}',
          '${notifications_on}',
          '${apply_all_warning_on}',
          '${reset_warning_on}'
        )`,
      (err, rows) => {
        if (err) console.log("Got an error inserting row to user_details", err);
        else
          console.log(`Row was inserted in user_details: ${email}`);
      }
    );
  },

  updateUser: function ({
    id, 
    ourKey,
    ourValue, 
  }) {
    pool.query(
      `UPDATE user_details SET ${ourKey} = '${ourValue}' WHERE user_id='${id}'`, 
      (err, rows) => {
        if (err) console.log("Got an error inserting row to user_details", err);
        else
          console.log(`Row was inserted in user_details at: ${ourValue}`);
      }
    );
  },

  getZipcodeData: function (zipcode) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from zip_codes where id=${zipcode}`, (err, rows) => {
        // console.log("rows: ", rows);
        if (err) return reject(err);
        return resolve(rows[0]);
      });
    });
  },

  getVehicleData: function (model) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * from vehicles where model='${model}'`,
        (err, rows) => {
          if (err) return reject(err);
          return resolve(rows[0]);
        }
      );
    });
  },

  getAllVehicleData: function () {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * from vehicles`, (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  },

  dropTable: function (tableName) {
    return pool.query(`DROP TABLE IF EXISTS ${tableName};`);
  },

  insertZipCode: function ({
    id,
    city,
    state_abbr,
    state_name,
    area_codes,
    county,
    time_zone,
    observes_day_light_savings,
    latitude,
    longitude,
  }) {
    pool.query(
      `INSERT INTO zip_codes (id, city, state_abbr, state_name, area_codes, county, time_zone, observes_day_light_savings, latitude, longitude) VALUES (${id}, '${city}', '${state_abbr}', '${state_name}',' ${area_codes}', '${county}', '${time_zone}', '${observes_day_light_savings}', '${latitude}', '${longitude}')`,
      (err, rows) => {
        if (err) console.log("Got an error inserting row to zip_codes", err);
        else
          console.log(`Row was inserted in zip_codes: ${id} - ${state_name}`);
      }
    );
  },

  seedZipcodesDatabase: function () {
    const zipcodesToSeed = Object.keys(zipCodes).map((zipcode) => {
      const {
        state_abbr,
        state_name,
        county,
        city,
        area_codes,
        time_zone,
        observes_day_light_savings,
        latitude,
        longitude,
      } = zipCodes[zipcode];
      return {
        state_abbr,
        state_name,
        county,
        city,
        area_codes,
        time_zone,
        observes_day_light_savings,
        latitude,
        longitude,
        id: zipcode,
      };
    });
    zipcodesToSeed.forEach((zipcodeObject) =>
      this.insertZipCode(zipcodeObject)
    );
  },

  insertVehicle: function ({
    model,
    default_optioned_vehicle,
    paint_options,
    partial_premium_interior,
    premium_interior,
    standard_battery,
    off_menu,
    long_range,
    performance,
    plaid,
  }) {
    let strDefaultOptionedVehicle = JSON.stringify(default_optioned_vehicle);
    let strPaint = JSON.stringify(paint_options);
    let strStandard = JSON.stringify(standard_battery);
    let strOffMenu = JSON.stringify(off_menu);
    let strLongRange = JSON.stringify(long_range);
    let strPerformance = JSON.stringify(performance);
    let strPlaid = JSON.stringify(plaid);

    pool.query(
      `INSERT INTO vehicles (model, default_optioned_vehicle, paint_options, partial_premium_interior, premium_interior, standard_battery, off_menu, long_range, performance, plaid) VALUES ('${model}', '${strDefaultOptionedVehicle}', '${strPaint}', '${partial_premium_interior}', '${premium_interior}', '${strStandard}', '${strOffMenu}', '${strLongRange}', '${strPerformance}', '${strPlaid}')`,
      (err, rows) => {
        if (err) console.log("Got an error inserting row to vehicles", err);
        else console.log(`Row was inserted in vehicles: ${model}`);
      }
    );
  },

  seedVehiclesDatabase: function () {
    const vehiclesToSeed = Object.keys(vehiclesObj).map((vehicleModel) => {
      const {
        default_optioned_vehicle,
        paint_options,
        partial_premium_interior,
        premium_interior,
        standard_battery,
        off_menu,
        long_range,
        performance,
        plaid,
      } = vehiclesObj[vehicleModel];
      return {
        default_optioned_vehicle,
        paint_options,
        partial_premium_interior,
        premium_interior,
        standard_battery,
        off_menu,
        long_range,
        performance,
        plaid,
        model: vehicleModel,
      };
    });
    vehiclesToSeed.forEach((elem) => this.insertVehicle(elem));
  },

  seedAreaCodeDatabase: function () {
    const areaCodesObjKeys = Object.keys(areaCodesObj);
    for (let i = 0; i < areaCodesObjKeys.length; i++) {
      let area_code = areaCodesObjKeys[i];
      let state_abbr = areaCodesObj[area_code];
      let strStateAbbr = JSON.stringify(state_abbr);
      pool.query(
        `INSERT INTO area_codes (id,state_abbr) VALUES ('${area_code}','${strStateAbbr}')`,
        (err, rows) => {
          if (err) console.log("Got an error inserting row to area_codes", err);
          else console.log(`Row was inserted in area_codes: ${strStateAbbr}`);
        }
      );
    }
  },

  insertState: function ({
    state_name,
    state_abbr,
    vehicle_incentives,
    solar_incentives,
    local_vehicle_incentives,
    local_solar_incentives,
    all_showrooms,
    all_service_centers,
    all_charging_locations,
    payment_object,
    vehicle_order,
  }) {
    let strPaymentObject = JSON.stringify(payment_object);
    let strVehicleOrder = JSON.stringify(vehicle_order);
    pool.query(
      `INSERT INTO state_data (state_name,state_abbr,vehicle_incentives,solar_incentives,local_vehicle_incentives,local_solar_incentives,all_showrooms,all_service_centers,all_charging_locations,payment_object,vehicle_order) VALUES ('${state_name}','${state_abbr}', '${vehicle_incentives}','${solar_incentives}','${local_vehicle_incentives}','${local_solar_incentives}','${all_showrooms}','${all_service_centers}','${all_charging_locations}','${strPaymentObject}','${strVehicleOrder}')`,
      (err, rows) => {
        if (err) console.log("Got an error inserting row to state_data", err);
        else console.log(`Row was inserted in state_data: ${state_name}`);
      }
    );
  },

  seedStateDatabase: function () {
    const statesToSeed = Object.keys(stateDataObj).map((state) => {
      const {
        state_name,
        state_abbr,
        vehicle_incentives,
        solar_incentives,
        local_vehicle_incentives,
        local_solar_incentives,
        all_showrooms,
        all_service_centers,
        all_charging_locations,
        payment_object,
        vehicle_order,
      } = stateDataObj[state];
      return {
        state_name,
        state_abbr,
        vehicle_incentives,
        solar_incentives,
        local_vehicle_incentives,
        local_solar_incentives,
        all_showrooms,
        all_service_centers,
        all_charging_locations,
        payment_object,
        vehicle_order,
      };
    });
    statesToSeed.forEach((elem) => this.insertState(elem));
  },

};

module.exports = queries;
