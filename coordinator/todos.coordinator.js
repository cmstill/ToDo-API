import { nanoid } from 'nanoid';
import ToDosModel from "../models/todos.model.js";

export default class ToDosCoordinator {
	static getToDos = () => {
		return ToDosModel.getToDos();
	};

	static createToDo = (newToDo) => { 

		const toDo = {
			...newToDo,
			id: nanoid(5),
		};

		return ToDosModel.createToDo(toDo);
	};

	static getToDo = (id) => {
		return ToDosModel.getToDo(id);
	};

	static replaceToDo = (id, toDo) => {
		const replacedToDo = {
			...toDo,
			id: nanoid(5)
		};
		return ToDosModel.replaceToDo(id, replacedToDo);
	};

	static deleteToDo = (id) => {
		return ToDosModel.deleteToDo(id);
	};

	static updateToDo = (id, toDo) => {
		return ToDosModel.updateToDo(id, toDo);
	};
}