const express= require('express');
const router= express.Router();
const{body}= require("express-validator");
const userController =require('../controllers/user.controller');
/**
 * express validator to validate info
 * https://express-validator.github.io/docs/
 */
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('First name should be at least three characters long'),
    body('password').isLength({ min: 6}).withMessage('Password should be at least 6 characters long')
],
userController.registerUser
)



module.exports = router;