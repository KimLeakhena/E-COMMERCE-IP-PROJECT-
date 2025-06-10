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

  if (category) {
    try {
      matchCond['category'] = mongoose.Types.ObjectId(category);
    } catch {
      console.error('Invalid category id:', category);
    }
  }
  if (item) {
    try {
      matchCond['item'] = mongoose.Types.ObjectId(item);
    } catch {
      console.error('Invalid item id:', item);
    }
  }
  if (search) {
    matchCond['$text'] = { $search: search };
  }

  console.log("Match condition:", matchCond);

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
    // Temporarily comment out unwind to see if products exist
    // { "$unwind": "$category" },
    // { "$unwind": "$item" },
    {
      $project: {
        title: 1,
        desc: 1,
        imageUrl: 1,
        prices: 1,
        category: { name: { $arrayElemAt: ["$category.name", 0] }, _id: { $arrayElemAt: ["$category._id", 0] } },
        item: { name: { $arrayElemAt: ["$item.name", 0] }, _id: { $arrayElemAt: ["$item._id", 0] } }
      }
    },
    { $skip: skip },
    { $limit: parseInt(limit) }
  ]);

  return products;
};


const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return await createdProduct.save();
};

const update = async (id, data) => {
  const updated = await Products.findByIdAndUpdate(id, data, { new: true });
  return updated;
};

const remove = async (id) => {
  const deleted = await Products.findByIdAndDelete(id);
  return deleted;
};

const getProductsByCategory = async (categoryId) => {
  try {
    const products = await Products.find({ category: categoryId }).populate('category');
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

module.exports = {
  findById,
  findAll,
  getProductsByCategory,
  create,
  update,
  remove
};
