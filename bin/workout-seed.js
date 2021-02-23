const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Workout = require('../models/workout-model');


const workouts = [{
	title: 'Workout 1',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98193'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195')
	]
}, {
	title: 'Workout 2',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 3',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 4',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 5',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 6',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98196'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 7',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98200'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
	title: 'Workout 8',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98195'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98196')
	]
}, {
	title: 'Workout 9',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	exercises: [
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98197'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98198'),
		new mongoose.mongo.ObjectId('60324298cbb65c1211e98201')
	]
}, {
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