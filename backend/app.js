const express = require("express");
const DB = require("./config/db.js");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRouter = require("./routes/auth.js");
const taskRouter = require("./routes/task.js");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/", authRouter);
app.use("/tasks", taskRouter);

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
