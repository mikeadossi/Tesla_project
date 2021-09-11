const queries = require("./queries");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const passwordHelper = require("./utility/passwordHelper"); 

require("dotenv").config({ path: __dirname + "/.env" }); 

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.get("/isUserRegistered", async (req, res) => {
  const {
    query: { email },
  } = req;

  try {
    const active = await queries.isEmailRegistered(email);

    if (active.length > 0) {
      let ob = {
        data: active,
        success: true,
        msg: "User matched with this email",
      };
      return res.status(200).json(ob);
    } else {
      let ob = {
        data: {},
        success: false,
        msg: "No user matched with this email",
      };
      return res.status(200).json(ob);
    }
  } catch (e) {
    return res.status(500);
  }
});

app.get("/statedata", async (req, res) => {
  const {
    query: { abbr },
  } = req;

  try {
    const rows = await queries.getStateDataByStateAbbr(abbr); 
    return res.status(200).send(rows);
  } catch (e) {
    return res.status(500);
  }
});

app.get("/userData", async (req, res) => {
  console.log("called route /userData");
  const {
    query: { abbr },
  } = req;

  try {
    const rows = await queries.getUserData(abbr);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.post("/insertNewUser", async (req, res) => {
  let body = req.body; 
  body["password"] = await passwordHelper.hash(body["password"]);

  try {
    const rows = await queries.insertNewUser(body);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.post("/logUserIntoApp", async (req, res) => {
  const { email, password } = req.body;
  const getUser = await queries.getUserQuery(email);  
  var result = await passwordHelper.compare(password, getUser[0]["user_password"]); 

  if(result) { 
    let ob = {
      data: getUser,
      success: true,
      msg: "User logged in successfully"
    }

    return res.status(200).json(ob);
  } else{ 
    let ob = {
      data: {},
      success: false,
      msg: "Email / password doesn't match"
    }

    return res.status(200).json(ob);
  }
});

app.post("/updateUserData", async (req, res) => {
  const { body } = req;

  if(body["ourKey"] === "user_password"){
    body["ourValue"] = await passwordHelper.hash(body["ourValue"]);
  }

  try {
    const rows = await queries.updateUser(body); 
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.get("/zipcode", async (req, res) => {
  const {
    query: { zipcode },
  } = req;

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
