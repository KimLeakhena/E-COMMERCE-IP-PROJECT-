'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String }],
  price: { type: Number, required: true },
  shortDesc: { type: String },
  fullDesc: { type: String },
  variants: [{ type: String }],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true
  },
}, {
  timestamps: true
});

productSchema.index({ name: 'text' });

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

