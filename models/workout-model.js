const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
	goal: {
		type: String,
		trim: true
		// required: true
	},
	sets: {
		type: String,
		trim: true
		// required: true
	},
	weight: {
		type: String,
		trim: true
		// required: true
	},
	owner: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;