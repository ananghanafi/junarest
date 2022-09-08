// import mongoose
import mongoose from "mongoose";

// Buat Schema
const Order = mongoose.Schema({
  order: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  table: {
    type: Number,
    required: true,
  },
  t_price: {
    type: String,
    required: true,
  },
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

// export model
export default mongoose.model("Orders", Order);
