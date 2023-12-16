const express = require('express');
const router = express.Router();
const { loginView, registerUser, logoutUser, loginUser, registerView } = require('../controllers/authController')

router.get("/login", loginView);
router.post("/login", loginUser);
router.get("/register", registerView);
router.post("/register", registerUser);
router.get("/logout", logoutUser);

module.exports = router;