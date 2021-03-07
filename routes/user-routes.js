const express = require('express');
const mongoose = require('mongoose');
const userRoute = express.Router();

const User = require('../models/user-model');

userRoute.get('/', (req, res, next) => {
	User.find()
		.then(trainerList => {
			let trainer = trainerList.filter(trainer => trainer.userGroup === 'trainer');
			trainer = trainer.map(trainer => {
				return trainer = {
					_id: trainer._id,
					username: trainer.username
				};
			});
			console.log(trainer);
			res.json(trainer);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.put('/', (req, res, next) => {
	// TODO: make a middleware from the code
	if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
		res.status(400).json({
			message: 'User ID is not valid'
		});
		return;
	}

	User.findByIdAndUpdate(req.params.userId, req.body)
		.then(() => {
			res.json({
				message: `User with the ID of ${req.params.userId} is updated successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = userRoute;