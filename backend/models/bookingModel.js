import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
});

export default mongoose.model("Booking", bookingSchema);
