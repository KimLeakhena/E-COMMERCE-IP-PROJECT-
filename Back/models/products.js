const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String }], // Multiple images
  price: { type: String, required: true },
  shortDesc: { type: String },
  fullDesc: { type: String },
  variants: [{ type: String }]
}, {
  timestamps: true // optional: createdAt, updatedAt
});

module.exports = mongoose.model('Product', productSchema);
