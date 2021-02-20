const express = require('express');
const mongoose = require('mongoose');
const exerciseRoute = express.Router();

const Exercise = require('../models/exercise-model');
const Workout = require('../models/workout-model');

exerciseRoute.get('/', (req, res, next) => {
	Workout.find()
		// TODO: integrate maybe the .populate()
		.then(exerciseList => {
			res.json(exerciseList);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});


exerciseRoute.get('/:exerciseId', (req, res, next) => {
	Exercise.findById(req.params.exerciseId)
		.then(exercise => {
			res.json(exercise);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

exerciseRoute.post('/create', (req, res, next) => {
	const {title, description, thumbImage} = req.body;

	Exercise.create({
		title,
		description,
		thumbImage
	})
		.then(newExercise => {
			res.json(newExercise);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

exerciseRoute.put('/:exerciseId', (req, res, next) => {
	// TODO: make a middleware from the code
	if (!mongoose.Types.ObjectId.isValid(req.params.exerciseId)) {
		res.status(400).json({
			message: 'Exercise ID is not valid'
		});
		return;
	}

	Exercise.findByIdAndUpdate(req.params.exerciseId, req.body)
		.then(() => {
			res.json({
				message: `Exercise with the ID of ${req.params.exerciseId} is updated successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

exerciseRoute.delete('/:exerciseId', (req, res, next) => {
	// TODO: make a middleware from the code
	if (!mongoose.Types.ObjectId.isValid(req.params.exerciseId)) {
		res.status(400).json({
			message: 'Exercise ID is not valid'
		});
		return;
	}

	Exercise.findByIdAndRemove(req.params.exerciseId)
		.then(() => {
			res.json({
				message: `The exercise with the ID of ${req.params.exerciseId} is removed successfully`
			});
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = exerciseRoute;