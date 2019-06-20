const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('address', 'Please include your address')
      .not()
      .isEmpty(),
    check('city', 'Please include your city')
      .not()
      .isEmpty(),
    check('state', 'Please choose your state')
      .not()
      .isEmpty(),
    check('postal', 'Please include your postal code')
      .not()
      .isEmpty(),
    check('phone', 'Please include your phone number')
      .not()
      .isEmpty(),
    check('distance', 'Please choose a distance')
      .not()
      .isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

module.exports = router;
