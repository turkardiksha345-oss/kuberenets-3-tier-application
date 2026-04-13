require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const User = require("./userModel");
const Order = require("./orderModel");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Signup API
app.post("/api/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Registered");
});

// Place Order API
app.post("/api/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send("Order Placed");
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});