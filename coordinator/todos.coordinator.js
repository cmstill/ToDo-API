import { nanoid } from 'nanoid';
import ToDosModel from "../models/todos.model.js";

export default class ToDosCoordinator {
	static getToDos = () => {
		console.log('\t Coordinator : getToDos');

		return ToDosModel.getToDos(); 
	};

	static createToDo = (newToDo) => { 
		console.log('\t Coordinator : createToDo()');

		const toDo = {
			...newToDo,
			id: nanoid(5),
		};

		return ToDosModel.createToDo(toDo); 
	};

	static getToDo = (id) => {
		console.log('\t Coordinator : getToDo()');

		return ToDosModel.getToDo(id); 
	};

	static replaceToDo = (id, toDo) => {
		console.log('\t Coordinator : replaceToDo()');
		const replacedToDo = {
			...toDo,
			id: nanoid(5)
		} ; //TODO: not working? // need to look this over before I submit... // THIS PART IS NOT WORKING.  FIGURE OUT HOW TO NOT HAVE USER PROVIDED ID WHEN USING PUT.  THIS SYNTAX FROM THE VIDEO AND NOT WORKING.
		return ToDosModel.replaceToDo(id, toDo);
	};

	static deleteToDo = (id) => {
		console.log('\t Coordinator : deleteToDo()');

		return ToDosModel.deleteToDo(id);
	};

	static updateToDo = (id, toDo) => {
		console.log('\t Coordinator : updateWidget');

		return ToDosModel.updateToDo(id, toDo);
	}
}