import express from 'express';
import middleware from './middleware/toDoColorChecker.js';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorHander.js';
import db  from './lib/database.js';

const { json } = bodyParser;

import todosRouter from './routes/todos.routes.js';

const app = express();
const port = 8080;
app.use(json());

app.post('/api/v1/todos', middleware());
app.put('/api/v1/todos/:id', middleware());
app.patch('/api/v1/todos/:id', middleware());

app.use('/api/v1/todos', todosRouter);

app.use('/api/v1/todos', errorMiddleware()); // error handling middleware has to be used last in express.

const config = {
	url: 'mongodb://127.0.0.1:27017',
	database: 'arca',
};


db.init(config);

app.listen(port, () => {
	console.log(`Starting todo application on port ${port}  @ ${new Date().toISOString()}`);
});

