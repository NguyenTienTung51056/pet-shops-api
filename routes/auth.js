const express = require('express');
const router = express.Router();
const {signin, register,logout} = require('../controllers/auth.js');

// @route   POST api/auth
// @desc    Auth user & get token
router.post('/login',signin)

// @route   POST api/auth/register
// @desc    Register user
router.post('/register', register)

// @route   POST api/auth/logout
// @desc    Logout user
router.post('/logout', logout)


module.exports = router;