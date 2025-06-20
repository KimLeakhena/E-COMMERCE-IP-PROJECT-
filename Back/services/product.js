
const Product = require("../models/products");
const mongoose = require('mongoose');

const findAll = async () => {

  const products = await Product.find();
  return { success: true, data: products };

}

// const findById = async (id) => {
//   try {
//     const objectId = new mongoose.Types.ObjectId(id); // ensure it's a valid ObjectId

//     const products = await Product.aggregate([
//       { $match: { _id: objectId } },
//       {
//         $lookup: {
//           from: "prices",
//           localField: "_id",
//           foreignField: "product",
//           as: "prices"
//         }
//       },
//       {
//         $lookup: {
//           from: "categories",
//           localField: "category",
//           foreignField: "_id",
//           as: "category"
//         }
//       },
//       { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } },
//       {
//         $project: {
//           name: 1,
//           images: 1,
//           price: 1,
//           shortDesc: 1,
//           fullDesc: 1,
//           variants: 1,
//           prices: 1,
//           category: {
//             name: "$category.name",
//             _id: "$category._id"
//           }
//         }
//       }
//     ]);

//     if (!products.length) return null;

//     return products[0];
//   } catch (err) {
//     console.error("Error fetching product by ID:", err.message);
//     throw new Error("Invalid product ID format");
//   }
// };

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
  const product = new Product(newProduct); // triggers pre-save
  return await product.save();             // saves the product
};

const update = async (id, data) => {
  const updated = await Product.findByIdAndUpdate(id, data, { new: true });
  return updated;
};

const remove = async (id) => {
  const deleted = await Product.findByIdAndDelete(id);
  return deleted;
};
// router.get('/products', async (req, res) => {
//   const searchQuery = req.query.search || '';

//   try {
//     const products = await Product.find({
//       $or: [
//         { name: { $regex: searchQuery, $options: 'i' } },
//         { shortDesc: { $regex: searchQuery, $options: 'i' } }
//         // Add more fields as needed
//       ]
//     });

//     res.json({ success: true, data: products });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Search failed', error: err.message });
//   }
// });


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
async function findById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const product = await Product.findById(id);
  return product;
}
// const products = await Product.aggregate([
//   {
//     $lookup: {
//       from: "categories",
//       localField: "category",
//       foreignField: "_id",
//       as: "category"
//     }
//   },
//   { $unwind: "$category" },
//   {
//     $match: {
//       $or: [
//         { name: { $regex: searchQuery, $options: 'i' } },
//         { shortDesc: { $regex: searchQuery, $options: 'i' } },
//         { "category.name": { $regex: searchQuery, $options: 'i' } }
//       ]
//     }
//   }
// ]);




module.exports = {
  findAll,
  // findById,
  getProductsByCategory,
  create,
  update,
  remove,
  findById,
};
