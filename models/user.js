const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataUser = new Schema({
  username: String,
  email: String,
  password: String,
});

const users = mongoose.model("user", dataUser);

module.exports = users;
