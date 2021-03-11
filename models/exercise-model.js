const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	title: {
		type: String,
		trim: true
		// required: true
	},
	description: {
		type: String,
		trim: true
		// required: true
	},
	image: {
		type: String
		// required: true
	},
	workouts: [{
		type: Schema.Types.ObjectId,
		ref: 'Workout'
	}]
}, {
	timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;