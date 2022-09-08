// import express
import express from "express";
// import controllers
import { getOrders, 
    getOrderById, 
    getLastOrders,
    saveOrder, 
    updateOrder,
    deleteOrder } from "../controllers/orderController.js";
 
    // express router
const router = express.Router();
 
// Route get All Orders
router.get('/', getOrders);
// Route get Last Orders
router.get('/last', getLastOrders);
// Route get single Order
router.get('/:id', getOrderById);
// Route CREATE Order
router.post('/', saveOrder);
// Route UPDATE Order
router.patch('/:id', updateOrder);
// Route DELETE Order
router.delete('/:id', deleteOrder);
 
// export router
export default router;