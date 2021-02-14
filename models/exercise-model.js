const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	name: {
		type: String,
		trim: true
		// required: true
	},
	description: {
		type: String,
		trim: true
		// required: true
	},
	thumbImage: {
		type: String
		// required: true
	},
	workouts: [{
		type: Schema.Types.ObjectId,
		ref: 'Workout'
	}],
	owner: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;