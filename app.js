const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://mongo:27017/yelp-camp", {
  useNewurlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`serving on port ${process.env.APP_PORT}`);
});
