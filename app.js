const express = require('express');
const app = express();

const tasks = require('./routes/tasks.routes');

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});