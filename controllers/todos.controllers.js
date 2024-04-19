import ToDosCoordinator from "../coordinator/todos.coordinator.js";

/**
 * getToDos - Return a list of toDos
 * @async
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Function} next - Express 'next' middleware function
 */

export const getToDos = async (req, res, next) => {

	try {
		const result = await ToDosCoordinator.getToDos(); // why is this awaited?

		res.status(200).json(result);
	} catch (ex) {
		next(ex);
	};
};

export const getToDo = async (req, res, next) => {
	try {
		const result = await ToDosCoordinator.getToDo(req.params.id); // this needs to be awaited now because our getToDo function in model is now returning a promise

		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404).json('The ToDo you requested does not exist');
		};
	} catch (ex) {
		next(ex);
	};
};

export const createToDo = async (req, res, next) => {

	try { // this is all to catch the errors that will be picked up by our error handler middleware
		const result = ToDosCoordinator.createToDo(req.body);
		res.status(201).json(result);
	} catch (ex) { // ex here is a variable that holds the error that gets generated when an error occurs
		next(ex); // this this is where you pass that error in variable ex so it can be accessed
	};
};

export const replaceToDo = async (req, res, next) => {
	try {
		const result = await ToDosCoordinator.replaceToDo(req.params.id, req.body);

		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404).json('The ToDo you requested does not exist')
		};
	} catch (ex) {
		next(ex);
	};
};

export const updateToDo = async (req, res, next) => {

	try {
		const result = ToDosCoordinator.updateToDo(req.params.id, req.body) //await this if oyu end up having problems

		if (result) {
			res.status(200).json(result);
		} else {
			res.status(404).json('The ToDo you requested does not exist')
		};
	} catch (ex) {
		next(ex);
	}
};

export const deleteToDo = async (req, res, next) => {

	try {
		await ToDosCoordinator.deleteToDo(req.params.id);
		res.status(204).json();
	} catch (ex) {
		next(ex);
	}
};
