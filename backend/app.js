const express = require("express");
const DB = require("./config/db.js");
require("dotenv").config();

const app = express();

DB()
  .then(() => {
    console.log("DB connected ");
    app.listen(process.env.PORT, () => {
      console.log("App is listening on port 5000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
