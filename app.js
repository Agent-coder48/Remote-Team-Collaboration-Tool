const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');
require('dotenv').config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

// Passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Body parser
app.use(express.urlencoded({ extended: false }));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
