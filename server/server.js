const path = require('path');
const queries = require("./queries");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3002; 
const passwordHelper = require("./utility/passwordHelper");
const sendMail = require("./nodemailer");

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));


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


app.get("/isSessionValid", async (req, res) => {
  const { credentials } = req.query;

  let email = credentials.split("sessionID=")[0];
  email = email.replace("%40","@");
  const sessionId = credentials.split("sessionID=")[1]; 

  try {
    const getUserArr = await queries.getUserQuery(email);  

    if(getUserArr.length === 0){
      return res.status(404).json({
        success: false,
        msg: "email not found"
      });
    } else {
      if (sessionId === getUserArr[0]["user_sessionID"]) {
        let ob = {
          data: getUserArr,
          success: true,
          msg: "session is valid!"
        }
        return res.status(200).json(ob);
      } else {
        let ob = {
          data: "",
          success: false,
          msg: "sessionID given =/= sessionID in DB!"
        }
        return res.status(500).json(ob);
      };
    };

  } catch (e) {
    console.log('e-',e)
    return res.sendStatus(500);
  }

});


app.get("/statedata", async (req, res) => { 
  const {
    query: { abbr },
  } = req;

  try {
    const rows = await queries.getStateDataByStateAbbr(abbr); 
    // return res.status(200).send(rows);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});


app.get("/userData", async (req, res) => { 
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
    const ob = {
      success: false,
      msg: "no user inserted"
    };
    return res.status(500).json(ob);
  }
});

app.post("/logUserIntoApp", async (req, res) => {
  const { email, password } = req.body;

  try {
    const getUser = await queries.getUserQuery(email); 

    if(!getUser){ 
      let ob = { 
        success: false,
        msg: `${email} not found`
      } 
      return res.status(500).json(ob);
    };

    const result = await passwordHelper.compare(
      password,
      getUser[0]["user_password"]
    );

    if (result) {
      let ob = {
        data: getUser,
        success: true,
        msg: `${email} logged in successfully`
      }
      return res.status(200).json(ob);
    } else {
      let ob = {
        data: getUser,
        success: false,
        msg: "passwords do not match"
      } 
      return res.status(500).json(ob);
    }
  } catch (e) {
      return res.status(500);
    }
});

app.post("/updateUserData", async (req, res) => {
  const { body } = req;

  if (body["ourKey"] === "user_password") {
    body["ourValue"] = await passwordHelper.hash(body["ourValue"]);
  }

  try {
    const rows = await queries.updateUser(body);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.post("/deleteUserData", async (req, res) => {
  const { body } = req;

  try {
    const rows = await queries.deleteUser(body);
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

app.get("/areacode", async (req, res) => {
  const {
    query: { areacode },
  } = req;

  try {
    const rows = await queries.getZipDataWithAreaCode(areacode);
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

app.post("/sendNewPassword", async (req, res) => {
  const {
    body: { email, passw },
  } = req;

  try {
    const rows = await sendMail(email, passw);
    return res.status(200).send(JSON.stringify(rows));
  } catch (e) {
    return res.status(500);
  }
});

app.get("/userNotifications", async (req, res) => {
  const {
    query: { dateJoined },
  } = req;

  try {
    const notifications = await queries.getTailoredNotifications(dateJoined);
    return res.status(200).send(JSON.stringify(notifications));
  } catch (e) {
    return res.status(500);
  }
});

app.get('/*',(req, res) => { 
  res.sendFile(path.join(__dirname, 'build', 'index.html' ))
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
// kill -9 $( lsof -t -i:3002)
// cmmnd+K+0 - hide functions
