const Task = require('../models/task.model.js');

module.exports.getAllTasks = (req, res) => {
	res.json({ message: 'Received' });
};

module.exports.createTask = async (req, res) => {
	const { name, completed } = req.body;
	const task = await Task.create({ name, completed });
	res.status(201).json(task);
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
