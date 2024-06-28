const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(400).send('Error registering user.');
    }
});

// Login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

// Logout
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;
