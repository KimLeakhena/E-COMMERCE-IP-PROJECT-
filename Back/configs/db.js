const mongoose = require('mongoose');
require('dotenv').config(); // Load variables from .env

mongoose.set('strictQuery', false); // Optional, to suppress warnings

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ MongoDB connected~");
  } catch (err) {
    console.log("❌ Mongoose error:", err);
  }
}
