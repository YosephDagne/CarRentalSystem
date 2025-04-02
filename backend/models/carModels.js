import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  description: String,
  image: String,
});

export default mongoose.model("Car", carSchema);

