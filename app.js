require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

// Passport and express-session
const session = require('express-session');
const passport = require('passport');

require('./configs/passport.config');

// Database configuration
require('./configs/database.config');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// TODO: make a config file from it
app.use(
	cors({
		credentials: true,
		origin: [process.env.CORS_ALLOWED]
	})
);

// TODO: make a config file from it
// Session configuration
app.use(session({
	secret: 'Im so secret that it cant be more secret',
	resave: true,
	saveUninitialized: true,
	ttl: 60 * 60 * 24,
	cookie: {
		secure: process.env.NODE_ENV,
		sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
		httpOnly: true,
		maxAge: 60 * 60 * 24
	}
}));

app.set('trust proxy', 1);

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

const upload = require('./routes/file-upload-routes');
app.use('/api/upload', upload);


module.exports = app;
