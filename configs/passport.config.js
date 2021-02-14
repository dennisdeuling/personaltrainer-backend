const User = require('../models/user-model');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, callback) => {
	callback(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, callback) => {
	User.findById(userIdFromSession, (error, userDocument) => {
		if (error) {
			callback(error);
			return;
		}
		callback(null, userDocument);
	});
});

passport.use(new LocalStrategy((username, password, next) => {
	User.findOne({username}, (error, foundUser) => {
		if (error) {
			next(error);
			return;
		}

		if (!foundUser) {
			next(null, false, {message: 'Wrong password'});
			return;
		}

		if (!bcrypt.compareSync(password, foundUser.password)) {
			next(null, false, {message: 'Wrong password'});
			return;
		}

		next(null, foundUser);
	});
}));