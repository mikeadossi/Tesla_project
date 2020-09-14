const queries = require("./queries");
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3002; 
require('dotenv').config({ path: __dirname + '/.env' });
let mysql = require('mysql');


const app = express();
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    console.log('request received');
    try {
        const rows = await queries.getAll();
        return res.status(200).json({data: rows});
    } catch (e) {
        return res.status(500);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})