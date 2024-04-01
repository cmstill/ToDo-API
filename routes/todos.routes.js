import express from 'express';
import { 
	getToDos, 
	createToDo, 
	getToDo, 
	replaceToDo, 
	updateToDo, 
	deleteToDo 
} from '../controllers/todos.controllers.js';

const todosRouter = express.Router();

// GET todos route
todosRouter.get('/', getToDos);

// GET /api/v1/todos<id>
todosRouter.get('/:id', getToDo);

// POST todo route
todosRouter.post('/', createToDo);

// PUT todo route
todosRouter.put('/:id', replaceToDo);

// PATCH todo route
todosRouter.patch('/:id', updateToDo);

// DELETE todo route
todosRouter.delete('/:id', deleteToDo);


export default todosRouter; 




