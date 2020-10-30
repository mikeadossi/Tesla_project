require('dotenv').config({ path: __dirname + '../.env' });
let mysql = require('mysql');


const pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password: process.env.PASSWORD,
    database: 'tesla_project'
});

module.exports = pool;