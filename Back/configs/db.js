const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://139.162.3.208:1020/ecommerce', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ",err);
  }
}
