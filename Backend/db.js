const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed, retrying...", err.message);
    
    // Retry after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;