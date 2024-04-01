import ToDosCoordinator from "../coordinator/todos.coordinator.js";

export const getToDos = async (req, res, next) => {
	const result = ToDosCoordinator.getToDos(); 
};

export const getToDo = async (req, res, next) => {
	const result = ToDosCoordinator.getToDo(req.params.id);

	if (result) { 
		res.status(200).json(result);
	} else {
		res.status(404).json('The ToDo you requested does not exist');
	}
};

export const createToDo = async (req, res, next) => {
	const result = ToDosCoordinator.createToDo(req.body); 

	res.status(201).json(result);
};

export const replaceToDo = async (req, res, next) => {
	const result = ToDosCoordinator.replaceToDo(req.params.id, req.body); 

	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).json('The ToDo you requested does not exist')
	};
};
 
export const updateToDo = async (req, res, next) => {
	const result = ToDosCoordinator.updateToDo(req.params.id, req.body)

	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).json('The ToDo you requested does not exist')
	};
};

export const deleteToDo = async (req, res, next) => { 
	const result = ToDosCoordinator.deleteToDo(req.params.id);

	if (result) {
		res.status(204).json(result);
	} else {
		res.status(404).json('The ToDo you requested does not exist')
	};
	
}
	