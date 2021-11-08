module.exports.getAllTasks = (req, res) => {
	res.json({ message: 'Received' });
};

module.exports.createTask = (req, res) => {
	res.json({ message: req.body });
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
