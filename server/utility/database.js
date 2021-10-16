require('dotenv').config({ path: __dirname + '../.env' });
let mysql = require('mysql');


const pool = mysql.createPool({
    host : 'localhost',
    user : process.env.USER,
    password: process.env.DB_PASSWORD,
    database: 'tesla_project'
});

module.exports = pool;