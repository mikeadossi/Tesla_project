const queries = require("./queries"); 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002;

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, "0.0.0.0", () => {
    queries.seedVehiclesDatabase();
    queries.seedStateDatabase();
    queries.seedNotifications();
    queries.seedZipcodesDatabase(); 
    console.log('DB has been populated!')
});