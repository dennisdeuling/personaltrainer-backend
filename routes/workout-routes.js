const express = require('express');
const mongoose = require('mongoose');
const workoutRoute = express.Router();

const Exercise = require('../models/exercise-model');
const Workout = require('../models/workout-model');

workoutRoute.get('/', (req, res, next) => {
	Workout.find()
		// TODO: integrate maybe the .populate()
		.populate('exercises')
		.then(workoutList => {
			res.json(workoutList);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

workoutRoute.post('/create', (req, res, next) => {
	const {title, description, goal, sets, weight, owner} = req.body;

	Workout.create({
		title,
		description
	})
		.then(newWorkout => {
			res.json(newWorkout);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

workoutRoute.get('/:workoutId', (req, res, next) => {
	// TODO: make a middleware function from the code below
	if (!mongoose.Types.ObjectId.isValid(req.params.workoutId)) {
		res.status(400).json({
			message: 'The ID for this workout does not exist'
		});
		return;
	}

	Workout.findById(req.params.workoutId)
		// TODO: integrate maybe the .populate()
		.then((workout) => {
			res.json(workout);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

workoutRoute.put('/:workoutId', (req, res, next) => {
	// TODO: make a middleware function from the code below
	if (!mongoose.Types.ObjectId.isValid(req.params.workoutId)) {
		res.status(400).json({
			message: 'The ID for this workout does not exist'
		});
		return;
	}

	Workout.findByIdAndUpdate(req.params.workoutId, req.body)
		.then(() => {
			res.json({
				message: `Workout with the ID ${req.params.workoutId} is successfully updated`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

workoutRoute.delete('/:workoutId', (req, res, next) => {
	// TODO: make a middleware function from the code below
	if (!mongoose.Types.ObjectId.isValid(req.params.workoutId)) {
		res.status(400).json({
			message: 'The ID for this workout does not exist'
		});
		return;
	}

	Workout.findByIdAndRemove(req.params.workoutId)
		.then(() => {
			res.json({
				message: `Workout with the ID ${req.params.workoutId} is successfully removed`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = workoutRoute;