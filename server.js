const queries = require("./queries");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002;

require("dotenv").config({ path: __dirname + "/.env" });
let mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/statedata", async (req, res) => {
  console.log("req received");
  // const { abbr } = req.body;
  const {
    query: { abbr },
  } = req;
  console.log("request received for statedata", abbr);
  try {
    const rows = await queries.getStateDataByStateAbbr(abbr);
    console.log('statedata rows ---> ',rows)
    return res.status(200).send(rows);
  } catch (e) {
    return res.status(500);
  }
});

app.get("/zipcode", async (req, res) => {
  const {
    query: { zipcode },
  } = req;
  console.log("request received for zipcode: ", zipcode);
  try {
    const rows = await queries.getZipcodeData(zipcode);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.get("/model", async (req, res) => {
  const {
    query: { model },
  } = req;
  console.log("request received for model: ", model);
  try {
    const rows = await queries.getVehicleData(model);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.get("/allModels", async (req, res) => {
  const {} = req;
  try {
    const rows = await queries.getAllVehicleData();

    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`); 
}); 
