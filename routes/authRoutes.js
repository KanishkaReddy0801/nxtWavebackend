const express = require('express');
const { register, login, verifyOtp, deleteAccount, getUserDetails } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOtp);
router.post('/delete-account', deleteAccount);
router.get('/user/:email', getUserDetails); // Correctly define the route to include email as a parameter

module.exports = router;
