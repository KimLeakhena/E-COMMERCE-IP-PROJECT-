const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Categories', CategorySchema);
