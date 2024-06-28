const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('index');
});

// Login Page
router.get('/login', (req, res) => {
    res.render('login');
});

// Register Page
router.get('/register', (req, res) => {
    res.render('register');
});

// Dashboard Page
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
