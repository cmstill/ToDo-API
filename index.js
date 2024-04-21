/* eslint-disable max-len */
import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import middleware from './middleware/toDoColorChecker.js';
import errorMiddleware from './middleware/errorHander.js';
import db from './lib/database.js';

import todosRouter from './routes/todos.routes.js';

const { json } = bodyParser;

const app = express();
const port = 8080;
app.use(json());

app.post('/api/v1/todos', middleware());
app.put('/api/v1/todos/:id', middleware());
app.patch('/api/v1/todos/:id', middleware());

app.use('/api/v1/todos', todosRouter);

app.use('/api/v1/todos', errorMiddleware()); // error handling middleware has to be used last in express.

const mongoConfig = config.get('mongo');
// {
// 	url: 'mongodb://127.0.0.1:27017',
// 	database: 'arca',
// 	minPoolSize: 3,
// 	maxPoolSize: 10,
// };

db.init(mongoConfig); // mongoConfig is the variable above that is the configuration settings in the localhost.json in config folder

app.listen(port, () => {
  console.log(`Starting todo application on port ${port}  @ ${new Date().toISOString()}`);
});
