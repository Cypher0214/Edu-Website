const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const Port = process.env.PORT || 6090;
app.listen(Port, () => {
    console.log("listening on port", Port);
});

const MONGO_LINK = "mongodb://localhost:27017";
mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.MONGO_LINK,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
  // You can perform operations on the database here.
});

