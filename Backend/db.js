const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI); // 👈 ADD THIS

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed, retrying...", error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;