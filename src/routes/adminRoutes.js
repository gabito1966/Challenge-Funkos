const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles')

const {
    admin, 
    createView, 
    editView, 
    createItem, 
    editItem, 
    deleteItem 
}= require('../controllers/adminController');

router.get("/", admin);
router.get("/create", createView);
router.post("/create", upload.array('images', 2), createItem);
router.get("/edit/:id", editView);
router.put("/edit/:id", editItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;