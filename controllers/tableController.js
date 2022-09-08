// import models
import Table from "../models/Table.js";
 
// function get All Tables
export const getTables = async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single Table
export const getTableById = async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        res.json(table);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
// function Create Table
export const saveTable = async (req, res) => {
    const table = new Table(req.body);
    try {
        const savedTable = await table.save();
        res.status(201).json(savedTable);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update Table
export const updateTable = async (req, res) => {
    const cekId = await Table.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedTable = await Table.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedTable);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete Table
export const deleteTable = async (req, res) => {
    const cekId = await Table.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedTable = await Table.deleteOne({_id: req.params.id});
        res.status(200).json(deletedTable);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}