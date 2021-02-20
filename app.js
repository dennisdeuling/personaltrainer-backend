require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Passport and express-session
const session = require('express-session');
const passport = require('passport');

// Database configuration
require('./configs/database.config');

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// TODO: make a config file from it
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000']
	})
);

// TODO: make a config file from it
// Session configuration
app.use(session({
	secret: 'Your secret goes here',
	resave: true,
	saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const authentication = require('./routes/auth-routes');
app.use('/api', authentication);

const exercise = require('./routes/exercise-routes');
app.use('/api/exercise', exercise);

const workout = require('./routes/workout-routes');
app.use('/api/workout', workout);


module.exports = app;
