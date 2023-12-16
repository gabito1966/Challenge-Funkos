const express = require('express');
const {adminView, createView, editView, createItem, editItem, deleteItem }= require('../controllers/adminController');
const router = express.Router();

router.get("/", adminView);
router.get("/create", createView);
router.post("/create", createItem);
router.get("/edit/:id", editView);
router.put("/edit/:id", editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;