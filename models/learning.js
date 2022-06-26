const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataProduct = new Schema({
  title: String,
  image: String,
  description: String,
  link: String,
});

const product = mongoose.model("product", dataProduct);

module.exports = product;
