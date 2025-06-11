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
    },
    {
      $addFields: {
        categoryObjId: {
          $cond: {
            if: { $not: [{ $isObjectId: "$category" }] },
            then: { $toObjectId: "$category" },
            else: "$category"
          }
        }
      }
    },
    {
      $lookup: {
        from: "categories",
        localField: "categoryObjId",
        foreignField: "_id",
        as: "category"
      }
    },
    { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
    {
      $project: {
        title: 1,
        desc: 1,
        imageUrl: 1,
        prices: 1,
        category: { name: "$category.name", _id: "$category._id" }
      }
    }
  ]);

  if (!products?.length) return null;

  return products[0];
}
const findAll = async () => {
  return await Products.find();
}

// const findAll = async (category = '', search = '', page = 1, limit = 10) => {
//   let matchCond = {};

//   if (category) {
//     try {
//       matchCond['category'] = mongoose.Types.ObjectId(category);
//     } catch {
//       console.error('Invalid category id:', category);
//     }
//   }
//   if (search) {
//     matchCond['$text'] = { $search: search };
//   }

//   const skip = (parseInt(page) - 1) * parseInt(limit);

//   const products = await Products.aggregate([
//     { $match: matchCond },

//     // Ensure category field is ObjectId for lookup - if it is string, convert:
//     {
//       $addFields: {
//         categoryObjId: {
//           $cond: {
//             if: { $not: [{ $isObjectId: "$category" }] },
//             then: { $toObjectId: "$category" },
//             else: "$category"
//           }
//         }
//       }
//     },

//     {
//       $lookup: {
//         from: "prices",
//         localField: "_id",
//         foreignField: "product",
//         as: "prices"
//       }
//     },
//     {
//       $lookup: {
//         from: "categories",
//         localField: "categoryObjId",
//         foreignField: "_id",
//         as: "category"
//       }
//     },

//     // Unwind category array to a single object (optional)
//     { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },

//     {
//       $project: {
//         title: 1,
//         desc: 1,
//         imageUrl: 1,
//         prices: 1,
//         category: { name: "$category.name", _id: "$category._id" }
//       }
//     },
//     { $skip: skip },
//     { $limit: parseInt(limit) }
//   ]);

//   return products;
// };



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
    const categoryObjId = mongoose.Types.ObjectId(categoryId);
    console.log('Fetching products for category:', categoryObjId);
    const products = await Products.find({ category: categoryObjId }).populate('category');
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
