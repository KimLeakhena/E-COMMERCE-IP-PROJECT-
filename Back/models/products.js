// models/Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  sku: { type: String, unique: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  rating: { type: Number, default: 4.5 },
  description: { type: String },
  features: [{ type: String }],
  images: [{ type: String }],
  variants: [{ type: String }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true,
  },
}, {
  timestamps: true,
});

productSchema.pre('save', function (next) {
  if (!this.sku && this.name) {
    const namePrefix = this.name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .substring(0, 5);
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    this.sku = `${namePrefix}-${randomSuffix}`;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema); // ✅ Correct export
