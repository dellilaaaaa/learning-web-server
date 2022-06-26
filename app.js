const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
const route = require("./router");

const db = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(route);

db.connection.on("error", (err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("DATABASE RUNNING ON PORT " + PORT);
});
