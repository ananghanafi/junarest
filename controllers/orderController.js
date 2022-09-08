// import models
import Order from "../models/Order.js";
 
// function get All Orders
export const getOrders = async (req, res) => {
    try {
        const order = await Order.find();
        res.json(order);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}

export const getLastOrders = async (req, res) => {
    try {
        const order = await Order.find().sort({"_id" : -1}).limit(1);
        res.json(order);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single Order
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
// function Create Order
export const saveOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json({message: "Success Order", success: 1});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update Order
export const updateOrder = async (req, res) => {
    const cekId = await Order.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedOrder = await Order.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete Order
export const deleteOrder = async (req, res) => {
    const cekId = await Order.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedOrder = await Order.deleteOne({_id: req.params.id});
        res.status(200).json(deletedOrder);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}