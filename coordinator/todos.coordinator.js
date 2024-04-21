/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ToDosModel from '../models/todos.model.js';
import todoSchema from '../schemas/todo.json' assert { type: 'json' };

const ajv = new Ajv();
addFormats(ajv); // this is using the ajvformats module to pass ajv into it to extend it so we can use ajv formats
const validate = ajv.compile(todoSchema); // this is calling a method on ajv class that we imported above called compile that we then pass our todoSchema we defined in schema folder...I guess compile method probably is a parser function on ajv class

export default class ToDosCoordinator {
	static getToDos = () => {
		return ToDosModel.getToDos();
	};

	static createToDo = (newToDo) => {
		const toDo = {
			...newToDo,
			id: uuidv4(),
			Date: Date(), // added date property for each todo
		};

		const valid = validate(toDo);

		if (!valid) {
			throw validate.errors;
		}
		// validation for ID property has to be done AFTER you add the ID property above otherwise there's no ID to validate

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
