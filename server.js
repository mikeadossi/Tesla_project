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
  const {
    query: { abbr },
  } = req;
  console.log("request received for statedata", abbr);
  try {
    const rows = await queries.getStateDataByStateAbbr(abbr);
    // console.log('statedata rows ---> ',rows)
    return res.status(200).send(rows);
  } catch (e) {
    return res.status(500);
  }
});

app.get("/userData", async (req, res) => {
  const {
    query: { id },
  } = req;
  console.log("request received for id: ", id);
  try {
    const rows = await queries.getUserData(id);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.post("/insertNewUser", async (req, res) => {
  const { body } = req;
  console.log("received params", body);
  // console.log("request received for email: ", email);
  try {
    const rows = await queries.insertNewUser(body);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.get("/updateUserData", async (req, res) => {
  const {
    query: {
      id,
      dark_theme_off,
      gave_cookie_permission,
      notifications_on,
      apply_all_warning_on,
      reset_warning_on,
    },
  } = req;
  console.log("request received for id: ", id);
  try {
    const rows = await queries.updateUser({
      id,
      dark_theme_off,
      gave_cookie_permission,
      notifications_on,
      apply_all_warning_on,
      reset_warning_on,
    });
    return res.status(200).send(JSON.stringify(rows));
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
  // queries.seedVehiclesDatabase();
  // queries.seedStateDatabase();
});
// kill -9 $( lsof -t -i:3002)
