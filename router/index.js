const express = require("express");
const route = express.Router();

const dataUser = require("./userRouter");
const dataLearning = require("./learnRouter");

route.get("/", (req, res) => {
  res.json("SEVIMA SERVER");
});
route.use("/user", dataUser);
route.use("/learning", dataLearning);

module.exports = route;
