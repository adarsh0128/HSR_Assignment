const express = require("express");
const DB = require("./config/db.js");
require("dotenv").config();
const authRouter = require("./routes/auth.js");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/", authRouter);

DB()
  .then(() => {
    console.log("DB connected ");
    app.listen(PORT, () => {
      console.log("App is listening on port 5000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
