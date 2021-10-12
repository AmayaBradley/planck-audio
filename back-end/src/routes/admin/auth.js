const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();
// const User = require('../models/user');

router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);


module.exports = router; 