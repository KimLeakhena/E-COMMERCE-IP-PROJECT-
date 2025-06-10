const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
});

module.exports = mongoose.model("categories", CategorySchema);
