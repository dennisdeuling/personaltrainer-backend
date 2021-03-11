const mongoose = require('mongoose');
const database = require('../configs/database.config');
const User = require('../models/user-model');


const users = [{
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac000'),
	username: 'Client One',
	email: 'clientone@example.com',
	passwordHashed: '1234',
	userGroup: 'client'
}, {
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac001'),
	username: 'Client Two',
	email: 'clienttwo@example.com',
	passwordHashed: '1234',
	userGroup: 'client'
}, {
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac002'),
	username: 'Client Three',
	email: 'clientthree@example.com',
	passwordHashed: '1234',
	userGroup: 'client'
}, {
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac003'),
	username: 'Trainer One',
	email: 'trainerone@example.com',
	passwordHashed: '1234',
	userGroup: 'trainer',
	workouts: [
		new mongoose.mongo.ObjectId('604225f92d27c91f65093301'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093302'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093303'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093304'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093305')
	],
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98193'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195')
	]
}, {
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac004'),
	username: 'Trainer Two',
	email: 'trainertwo@example.com',
	passwordHashed: '1234',
	userGroup: 'trainer',
	workouts: [
		new mongoose.mongo.ObjectId('604225f92d27c91f65093306'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093307')
	],
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98193'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195')
	]
}, {
	_id: new mongoose.mongo.ObjectId('6041339fb89d4e122abac005'),
	username: 'Trainer Three',
	email: 'trainerthree@example.com',
	passwordHashed: '1234',
	userGroup: 'trainer',
	workouts: [
		new mongoose.mongo.ObjectId('604225f92d27c91f65093308'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093309'),
		new mongoose.mongo.ObjectId('604225f92d27c91f65093310')
	],
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98193'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195')
	]
}];

User.create(users)
	.then(usersDB => {
		console.log(`Created ${usersDB.length} users in the database`);
	})
	.catch(error => {
		console.log(error);
	});