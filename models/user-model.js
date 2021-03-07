const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		trim: true
		// required: true
	},
	email: {
		type: String,
		trim: true,
		unique: true
		// required: true
	},
	passwordHashed: {
		type: String
		// required: true
	},
	userGroup: {
		type: String,
		enum: ['trainer', 'client']
		// required: true
	},
	trainer: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
}, {
	timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;