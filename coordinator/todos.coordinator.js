/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ToDosModel from '../models/todos.model.js';
import todoSchema from '../schemas/todo.json' assert { type: 'json' };

const ajv = new Ajv();
addFormats(ajv); 
const validate = ajv.compile(todoSchema); 

export default class ToDosCoordinator {
	static getToDos = () => {
		return ToDosModel.getToDos();
	};

	static createToDo = (newToDo) => {
		const toDo = {
			...newToDo,
			id: uuidv4(),
			Date: new Date().toISOString, 
		};

		const valid = validate(toDo);

		if (!valid) {
			throw validate.errors;
		}
	

		return ToDosModel.createToDo(toDo);
	};

	static getToDo = (id) => {
		return ToDosModel.getToDo(id);
	};

	static replaceToDo = (id, toDo) => {
		const replacedToDo = {
			...toDo,
			id: uuidv4(),
		};

		const valid = validate(toDo);

		if (!valid) {
			throw validate.errors;
		}

		return ToDosModel.replaceToDo(id, replacedToDo);
	};

	static deleteToDo = (id) => {

		return ToDosModel.deleteToDo(id);
	};

	static updateToDo = (id, toDo) => {

		const valid = validate(toDo);

		if (!valid) {
			throw validate.errors;
		}

		return ToDosModel.updateToDo(id, toDo);
	};
}
