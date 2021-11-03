module.exports.getAllTasks = (req, res) => {
	res.send('get all tasks');
};

module.exports.createTask = (req, res) => {
	res.send('Task created')
}

module.exports.getSingleTask = (req, res) => {
	res.send('Get single task')
}

module.exports.updateTask = (req, res) => {
	res.send('Task Updated')
}

module.exports.deleteTask = (req, res) => {
	res.send('task deleted')
}