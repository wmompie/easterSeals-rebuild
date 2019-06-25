const mongoose = require('mongoose');

const RunnerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
	},
	address2: {
		type: String,
	},
	city: {
		type: String,
		required: true,
		default: 'Miami',
	},
	state: {
		type: String,
		required: true,
		default: 'FL',
	},
	postal: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	distance: {
		type: String,
		required: true,
		default: '5K',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('runner', RunnerSchema);
