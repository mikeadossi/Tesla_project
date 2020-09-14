require("dotenv").config(); 
const { pool } = require('./utility/database')

let queries = {

  getAll: function(){
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if(err) reject(err);
        connection.query('SELECT * from cars LIMIT 1', (err, rows) => {
            connection.release();
            if(err) reject(err);
            return resolve(rows)
        });
      });
    });
  }

};1
module.exports = queries;