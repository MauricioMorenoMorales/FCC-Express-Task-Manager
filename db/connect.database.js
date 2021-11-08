const mongoose = require('mongoose');

const connectionString = (userName, password) =>
	`mongodb+srv://${userName}:${password}@nodejsplatzi.cg57m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = url =>
	mongoose.connect(
		connectionString(
			process.env.MONGODB_USERNAME,
			process.env.MONGODB_PASSWORD,
		),
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		},
	);

module.exports = connectDB;
