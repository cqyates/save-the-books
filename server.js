const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
require("dotenv").config()
const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URI2 || "mongodb://localhost:27017/myLibraryDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log("listening on port:" + PORT))