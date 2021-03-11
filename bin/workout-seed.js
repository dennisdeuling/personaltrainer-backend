const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Workout = require('../models/workout-model');


const workouts = [{
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093301'),
	title: 'Workout 1',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98193'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093302'),
	title: 'Workout 2',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093303'),
	title: 'Workout 3',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093304'),
	title: 'Workout 4',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093305'),
	title: 'Workout 5',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093306'),
	title: 'Workout 6',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98196'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093307'),
	title: 'Workout 7',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98200'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093308'),
	title: 'Workout 8',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98196')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093309'),
	title: 'Workout 9',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	_id: new mongoose.mongo.ObjectId('604225f92d27c91f65093310'),
	title: 'Workout 10',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98200'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98196'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}];

Workout.create(workouts)
	.then(workoutsDB => {
		console.log(`Created ${workoutsDB.length} workouts in the database`);
	})
	.catch(error => {
		console.log(error);
	});