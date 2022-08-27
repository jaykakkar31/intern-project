const { check } = require('express-validator');

exports.validSign = [
    check('name', 'Name is required').notEmpty()
    .isLength({
        min: 3,
        max: 32
    }).withMessage('name must be between 3 to 32 characters'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters'),
    check('mobile').isString().matches(/^\d{10}$/).withMessage('Mobile Number should contain ten digits')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters')
]