const queries = require("./queries");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3002; 
require('dotenv').config({ path: __dirname + '/.env' });
let mysql = require('mysql');


const app = express();
app.use(cors());
app.use(bodyParser.json())

app.post('/statedata', async (req, res) => {
    console.log('request received');
    try {
        const rows = await queries.getAll();
        return res.status(200).send(JSON.stringify(rows));
    } catch (e) {
        return res.status(500);
    }
});

app.get('/zipcode',  async (req, res) => {
    const { query: { zipcode } } = req;
    console.log('request received for zipcode: ', zipcode);
    try {
        const rows = await queries.getZipcodeData(zipcode);
        return res.status(200).send(JSON.stringify(rows));
    } catch (e) {
        return res.status(500);
    }
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    // queries.initializeDatabase();
})