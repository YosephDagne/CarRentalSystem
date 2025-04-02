import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import carRoutes from "./routes/carRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
