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

module.exports.getSingleTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOne({ _id: taskId });
		if (!task)
			return res
				.status(404)
				.json({ message: `No task with id: ${taskId} founded` });
		else return res.status(200).json({ task: task });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Id not found check it please' });
	}
};

module.exports.updateTask = async (req, res) => {
	res.json({ id: req.params.id, body: req.body });
};

module.exports.deleteTask = async (req, res) => {
	try {
		const { id: taskId } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskId });

		if (!task)
			return res
				.status(404)
				.json({ message: `No task with id: ${taskId} founded` });
		else return res.status(200).json({task: null, status: 'success'});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Id not found check it please' });
	}
};
