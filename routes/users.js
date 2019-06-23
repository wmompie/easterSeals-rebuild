const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, address, address2, city, state, postal, phone, distance } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'A user with that email has already registered' });
      }

      user = new User({
        name,
        email,
        address,
        address2,
        city,
        state,
        postal,
        phone,
        distance,
      });

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
