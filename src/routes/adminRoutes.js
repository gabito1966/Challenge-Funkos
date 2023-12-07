const express = require('express');
const adminControllers = require('../controller/adminController');
const router = express.Router();

router.get("/", adminControllers.admin);
router.get("/create", adminControllers.createGet);
router.post("/create", adminControllers.createPost);
router.get("/edit/:id", adminControllers.editGet);
router.put("/edit/:id", adminControllers.editPut);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;