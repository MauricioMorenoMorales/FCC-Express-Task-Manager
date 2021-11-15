const Task = require('../models/task.model.js');

module.exports.getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks: tasks });
	} catch (error) {
		res.status(500).json({ message: error.errors.name.message });
	}
};

module.exports.createTask = async (req, res) => {
	try {
		const { name, completed } = req.body;
		const task = await Task.create({ name, completed });
		res.status(201).json({ task: task });
	} catch (error) {
		res.status(500).json({ message: error.errors.name.message });
	}
};

module.exports.getSingleTask = (req, res) => {
	res.json({ id: req.params.id });
};

module.exports.updateTask = (req, res) => {
	res.json({ id: req.params.id, body: req.body });
};

module.exports.deleteTask = (req, res) => {
	res.json({ id: req.params.id });
};
