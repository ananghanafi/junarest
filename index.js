//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import product from "./routes/product.js";
import order from "./routes/order.js";
import table from "./routes/table.js";
//import cors
import cors from "cors";
// construct express function
const app = express();
 
// connect ke database mongoDB
mongoose.connect("mongodb://localhost:27017/junarest",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors());
app.use(express.json());
app.use('/product',product);
app.use('/order',order);
app.use('/table',table);
 
// listening to port
app.listen('3000',()=> console.log('Server Running at port: 3000'));