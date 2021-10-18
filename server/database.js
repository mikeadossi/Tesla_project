require("dotenv").config({ path: __dirname + "/.env" });
let mysql = require('mysql');


const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.OUR_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});


module.exports = pool;