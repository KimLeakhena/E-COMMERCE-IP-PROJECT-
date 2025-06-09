const Products = require("../models/products");
const mongoose = require('mongoose');

const findById = async (id) => {
  const products = await Products.aggregate([
    {
      "$match": {
        _id: mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    }
  ]);

  if (!products?.length) return null;

  return products[0];
};

const findAll = async (category = '', item = '', search = '', page = 1, limit = 10) => {
  let matchCond = {};

  if (category) matchCond['category'] = mongoose.Types.ObjectId(category);
  if (item) matchCond['item'] = mongoose.Types.ObjectId(item);
  if (search) matchCond['$text'] = { $search: search };

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const products = await Products.aggregate([
    { "$match": matchCond },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category"
      }
    },
    {
      $lookup: {
        from: "items",
        localField: "item",
        foreignField: "_id",
        as: "item"
      }
    },
    { "$unwind": "$category" },
    { "$unwind": "$item" },
    {
      $project: {
        title: 1,
        desc: 1,
        imageUrl: 1,
        prices: 1,
        category: { name: "$category.name", _id: "$category._id" },
        item: { name: "$item.name", _id: "$item._id" }
      }
    },
    { $skip: skip },
    { $limit: parseInt(limit) }
  ]);

  return products;
};

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
};

const update = async (id, data) => {
  const updated = await Products.findByIdAndUpdate(id, data, { new: true });
  return updated;
};

const remove = async (id) => {
  const deleted = await Products.findByIdAndDelete(id);
  return deleted;
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  remove
};
