const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/quotes");

// Counter schema
const Counter = mongoose.model("Counter", {
  clicks: Number
});

// Initialize counter
async function init() {
  const exists = await Counter.findOne();
  if (!exists) {
    await Counter.create({ clicks: 0 });
  }
}
init();

// Quotes + meanings
const quotesData = {
  "Success is not final, failure is not fatal":
    "Success and failure are temporary. Keep moving forward.",

  "Stars can’t shine without darkness":
    "Difficult times help you grow and stand out.",

  "Dream big, work hard":
    "Big dreams need consistent effort.",

  "Every moment is a fresh beginning":
    "You can restart anytime in life.",

  "Push yourself, because no one else will":
    "Self-motivation is the key to success."
};

// Track visit
app.post("/visit", async (req, res) => {
  await Counter.updateOne({}, { $inc: { clicks: 1 } });
  res.send("Visited");
});

// Get quote meaning
app.get("/quote", async (req, res) => {
  const quote = req.query.q;

  await Counter.updateOne({}, { $inc: { clicks: 1 } });

  const counter = await Counter.findOne();

  res.json({
    meaning: quotesData[quote],
    clicks: counter.clicks
  });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});