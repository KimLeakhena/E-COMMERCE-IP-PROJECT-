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

const findAll = async (category = '', search = '', page = 1, limit = 10) => {
  let matchCond = {};

  if (category) {
    try {
      matchCond['category'] = mongoose.Types.ObjectId(category);
    } catch {
      console.error('Invalid category id:', category);
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
    console.log('Fetching products for category:', categoryId);
    const products = await Products.find({ category: categoryId }).populate('category');
    console.log('Found products:', products.length);
    return products;
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
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
