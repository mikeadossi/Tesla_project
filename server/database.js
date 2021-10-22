require("dotenv").config({ path: __dirname + "/.env" });
let mysql = require('mysql2');

console.log('process.env-',process.env)
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.OUR_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports = pool;