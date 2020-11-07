require("dotenv").config();
const pool = require('./utility/database')

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

  createTable: function () {
    return pool.query('CREATE TABLE cars (name VARCHAR(255), model VARCHAR(255))');
  },

  insertData: function () {
    return pool.query("INSERT INTO cars (name, model) VALUES ('Tesla','S')");
  }

}; 

module.exports = queries;