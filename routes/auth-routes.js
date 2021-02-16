const express = require('express');
const authRoute = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/user-model');

authRoute.post('/signup', (req, res, next) => {
	const {username, password, email} = req.body;

	if (!(username || password)) {
		res.status(400).json({
			message: 'Please provide username and password!'
		});
	}

	// TODO: Validation of the password

	User.findOne({email}, (error, foundUser) => {
		if (error) {
			res.status(500).json({
				message: 'An issue with your email'
			});
			return;
		}

		if (foundUser) {
			res.status(400).json({
				message: 'This email already is registered. Please choose another one or login'
			});
			return;
		}

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		const newUser = new User({
			username: username,
			email: email,
			passwordHashed: hashedPassword
		});

		newUser.save(error => {
			if (error) {
				res.status(500).json({
					message: 'Saving user went wrong'
				});
				return;
			}

			res.status(200).json(newUser);
		});
	});
});

authRoute.post('/login', (req, res, next) => {
	passport.authenticate('local', (error, user, failDetails) => {
		if (error) {
			res.send(500).json({
				message: 'To authenticate the user went wrong'
			});
			return;
		}
		if (!user) {
			res.send(401).json(failDetails);
			return;
		}

		// Save user in session
		req.login(user, (error) => {
			if (error) {
				res.send(500).json({
					message: 'To save the user in the session went wrong'
				});
				return;
			}

			// Log in
			res.status(200).json(user);
		});
	})(req, res, next);
});

authRoute.post('/logout', (req, res, next) => {
	req.logout();
	res.status(200).json({
		message: 'The logout was successfully'
	});
});

authRoute.get('/loggedin', (req, res, next) => {
	if (req.isAuthenticated()) {
		res.send(200).json(req.user);
		return;
	}
	res.status(403).json({
		message: 'Unauthorized'
	});
});

module.exports = authRoute;