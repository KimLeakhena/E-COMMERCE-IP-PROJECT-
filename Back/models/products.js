const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
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
    required: true
  }
}, {
  timestamps: true
});

// Generate SKU like CHOCO-XYZ123 based on name
productSchema.pre('save', function (next) {
  if (!this.sku && this.name) {
    const namePrefix = this.name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '') // Remove special characters/spaces
      .substring(0, 5);           // Limit to first 5 characters

    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase(); // 5 random alphanumeric chars
    this.sku = `${namePrefix}-${randomSuffix}`;
  }
  next();
});
