const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: [true, 'must provide name'],
		trim: true,
		maxlength: [20, 'Name can not be more than 20 characters'],
	},
	completed: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = mongoose.model('Task', TaskSchema);
