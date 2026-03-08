const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("SpendWise API is running...");
});

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/transactions", require("./routes/transactionRoutes"));

const PORT = process.env.PORT || 27017;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});