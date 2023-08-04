const artist = require("../models/artists");
var mongoose =require('mongoose');

// const findById=async(id)=>{
    
//     const artists=await  artist.aggregate([
//         {
//             "$match":{
//                 _id:mongoose.Types.ObjectId(id),
//             }
//         },
//         {
//             $lookup:{
//                 from:"categories",
//                 localField:"_id",
//                 foreignField:"artists",
//                 as:""

//             }
//         }
//     ])
// }
const findById = async (id) => {
    try {
      return {
        success: true,
        data: {}
      };
    } catch (err) {
      return {
        success: false,
        error: err || 'error'
      }
    }
  }
  
  const findAll = async () => {
    return await artist.find().populate('category');
  }
  
  const create = async (newArtist) => {
    // to do
    const createdArtist = await artist.create(newArtist);
    return createdArtist;
  }
  
  const update = async () => {
    // to do
  }
  
  const remove = async () => {
    // to do
  }
  module.exports={
    findById,
    update,
    remove,
    create,
    findAll,
    // findByCategoryID,
  }
