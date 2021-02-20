const mongoose = require('mongoose');
const database = require('../configs/database.config');
const Exercise = require('../models/exercise-model');


const exercises = [{
	title: 'Exercise 1',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 2',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 3',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 4',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 5',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 6',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 7',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 8',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 9',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}, {
	title: 'Exercise 10',
	description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
	thumbImage: 'https://www.highlighttours.de/wp-content/uploads/2017/07/fotoreise-hamburg-1-1.jpg'
}];

Exercise.create(exercises)
	.then(exercisesDB => {
		console.log(`Created ${exercisesDB.length} exercises in the database`);
	})
	.catch(error => {
		console.log(error);
	});