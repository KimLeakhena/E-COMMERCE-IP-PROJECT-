// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: String,
  fullDescription: String,
  price: { type: Number, required: true },
  category: String,
  images: [String],
  variants: [String]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);


// "use strict"
// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// var productSchema = new mongoose.Schema({
//   title: String,
//   category: {
//     type: Schema.Types.ObjectId,
//     ref: 'Categories'
//   },
//   item: {
//     type: Schema.Types.ObjectId,
//     ref: 'Items'
//   },
//   // artist: {
//   //   type: Schema.Types.ObjectId,
//   //   ref: 'artists'
//   // },
//   imageUrl: String,
//   desc: String,
// }, {
//   timestamps: true,
// });

// productSchema.index({ title: 'text' });
// var Posts = mongoose.model('Products', productSchema);
// module.exports = Posts;
