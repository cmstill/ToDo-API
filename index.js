import express from 'express';
import middleware from './middleware/toDoColorChecker.js';
import bodyParser from 'body-parser';
const { json } = bodyParser;

import todosRouter from './routes.js/todos.routes.js';

const app = express();
const port = 3000;
app.use(json());

app.post('/api/v1/todos', middleware());


app.use('/api/v1/todos', todosRouter)

app.listen(port, () => {
	console.log('Starting todo application on port 3000')
});

