const { Router } = require('express');
const router = Router();
const {
	getAllTasks,
	getSingleTask,
	createTask,
	deleteTask,
	updateTask,
} = require('../controllers/task.controller');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
