const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//we are accepting request from all but in production we write it such that it only accepts request from domain
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
module.exports = app;
