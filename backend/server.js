import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT 

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Test route
app.get("/", (req, res) => {
  res.send("Car Rental System API is running...");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
