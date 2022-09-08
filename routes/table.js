// import express
import express from "express";
// import controllers
import { getTables, 
    getTableById, 
    saveTable, 
    updateTable,
    deleteTable } from "../controllers/tableController.js";
 
    // express router
const router = express.Router();
 
// Route get All Tables
router.get('/', getTables);
// Route get single Table
router.get('/:id', getTableById);
// Route CREATE Table
router.post('/', saveTable);
// Route UPDATE Table
router.patch('/:id', updateTable);
// Route DELETE Table
router.delete('/:id', deleteTable);
 
// export router
export default router;