const express = require('express');
const mongoose = require('mongoose');
const userRoute = express.Router();

const User = require('../models/user-model');

userRoute.get('/trainer', (req, res, next) => {
	User.find()
		.then(trainerList => {
			let trainer = trainerList.filter(trainer => trainer.userGroup === 'trainer');
			trainer = trainer.map(trainer => {
				return trainer = {
					_id: trainer._id,
					username: trainer.username
				};
			});
			res.json(trainer);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.put('/:userId', (req, res, next) => {
	// TODO: make a middleware from the code
	if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
		res.status(400).json({
			message: 'User ID is not valid'
		});
		return;
	}

	const {model, dataId} = req.body;

	User.findByIdAndUpdate(req.params.userId, {
		$push: {
			[model]: dataId
		}
	})
		.then(() => {
			res.json({
				message: `User with the ID of ${req.params.userId} is updated successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.delete('/:userId', (req, res, next) => {
	// TODO: make a middleware from the code
	if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
		res.status(400).json({
			message: 'User ID is not valid'
		});
		return;
	}

	const {model, dataId} = req.body;

	User.findByIdAndUpdate(req.params.userId, {
		$pull: {
			[model]: dataId
		}
	})
		.then(() => {
			res.json({
				message: `User with the ID of ${req.params.userId} is updated successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

userRoute.get('/:userId', (req, res, next) => {
	// TODO: make a middleware function from the code below
	if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
		res.status(400).json({
			message: 'The ID for this workout does not exist'
		});
		return;
	}

	User.findById(req.params.userId)
		// TODO: integrate maybe the .populate()
		.populate(['workouts', 'exercises'])
		.then(user => {
			if (user.userGroup === 'client') {
				const newTrainer = user.trainer.filter((item, index) => user.trainer.indexOf(item) === index);

				const newUser = {
					_id: user._id,
					trainer: newTrainer,
					workouts: user.workouts,
					exercises: user.exercises,
					userGroup: user.userGroup
				};
				console.log(newUser);
				res.json(newUser);
			}
			if (user.userGroup === 'trainer') {
				const data = {
					workouts: user.workouts,
					exercises: user.exercises
				};
				res.json(data);
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = userRoute;