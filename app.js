require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// Database configuration
require('./configs/database.config');

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const exercise = require('./routes/exercise-routes');
app.use('/api/exercise', exercise);


module.exports = app;
