// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const Product = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });
 
// export model
export default mongoose.model('Products', Product);