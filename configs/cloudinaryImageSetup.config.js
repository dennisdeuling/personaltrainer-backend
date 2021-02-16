const cloudinary = require('cloudinary').v02;
const {CloudinaryStore} = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStore({
	cloudinary: cloudinary,
	folder: ''
	allowedFormats: ['jpeg', 'png'],
	filename: (req, res, callback) => {
		callback(null, res.originalname)
	}
});

module.exports = multer({storage});