const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
	exercises: [{
		type: Schema.Types.ObjectId,
		ref: 'Exercise'
	}]
}, {
	timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;