// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const Table = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nomor:{
        type: Number,
        required: true
    },
    is_booking:{
        type: Boolean,
        required: true
    },
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });
 
// export model
export default mongoose.model('Tables', Table);