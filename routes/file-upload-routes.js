const express = require('express');
const fileUpload = express.Router();

const uploader = require('../configs/cloudinaryImageSetup.config');

fileUpload.post('/', uploader.single('thumbImageUrl'), (req, res, next) => {
	if (!req.file) {
		next(new Error('No file uploaded'));
		return;
	}
	res.json({
		thumbImage: req.file.path
	});
});

module.exports = fileUpload;