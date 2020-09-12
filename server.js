const express = require('express'); 
require('dotenv').config({ path: __dirname + '/.env' });
let mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password: process.env.PASSWORD,
    database: 'tesla_project'
});

app.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('Connected in ' + connection.threadId);
        connection.query('SELECT * from cars LIMIT 1', (err, rows) => {
            connection.release();
            if(err) throw err;
            console.log('The data from users table are: \n', rows);
        });
    });
});

app.listen(3100, () => {
    console.log('Server is running on port 3100');
})