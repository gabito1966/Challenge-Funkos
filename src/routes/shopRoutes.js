const express = require('express');
const shopControllers = require('../controller/shopController');
const router = express.Router();

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemGet);
router.post('/item/:id/add', shopControllers.itemPost);
router.get('/cart', shopControllers.cartGet);
router.post('/cart', shopControllers.cartPost);



module.exports = router;