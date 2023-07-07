const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://170.187.231.28:1020/ecommerce', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ",err);
  }
}
