
const Product = require("../models/products");
const mongoose = require('mongoose');

const findAll = async () => {

  const products = await Product.find();
  return { success: true, data: products };

}

const findById = async (id) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id); // ensure it's a valid ObjectId

    const products = await Product.aggregate([
      { $match: { _id: objectId } },
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
      { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          name: 1,
          images: 1,
          price: 1,
          shortDesc: 1,
          fullDesc: 1,
          variants: 1,
          prices: 1,
          category: {
            name: "$category.name",
            _id: "$category._id"
          }
        }
      }
    ]);

    if (!products.length) return null;

    return products[0];
  } catch (err) {
    console.error("Error fetching product by ID:", err.message);
    throw new Error("Invalid product ID format");
  }
};

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
  const createdProduct = await Product.create(newProduct);
  return await createdProduct.save();
};

const update = async (id, data) => {
  const updated = await Product.findByIdAndUpdate(id, data, { new: true });
  return updated;
};

const remove = async (id) => {
  const deleted = await Product.findByIdAndDelete(id);
  return deleted;
};

const getProductsByCategory = async (categoryId) => {
  try {
    const categoryObjId = mongoose.Types.ObjectId(categoryId);
    console.log('Fetching products for category:', categoryObjId);
    const products = await Product.find({ category: categoryObjId }).populate('category');
    console.log('Found products:', products.length);
    return products;
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    throw error;
  }
};



module.exports = {
  findAll,
  findById,
  getProductsByCategory,
  create,
  update,
  remove
};
