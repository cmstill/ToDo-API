let toDos = [
	{
		id: '1',
		name: 'Study JavaScript',
		color: 'Green'
	},
	{
		id: '2',
		name: 'Go to the gym',
		color: 'Blue'
	},
	{
		id: '3',
		name: 'Pick up groceries',
		color: 'Chartreuse'
	}
];

// 7. In your model, print the todo object to the console when it is provided by user input (PUT, POST, PATCH). Hard code a small array of three items in your model to simulate a database. Return this array for the "get all todos" logic and search it to return a single item for "get one todo by ID". Return a 404 if the requested ID does not exist.


export default class ToDosModel {
	static getToDos = () => {
		console.log('Got full list of ToDos:')
		console.log(toDos); 
		return toDos;
	};

	static createToDo = (newToDo) => {
		toDos.push(newToDo);
		console.log('Created new ToDo:')
		console.log(newToDo); 
		return newToDo;
	};

	static getToDo = (id) => {
		const todo = toDos.find((item) => {
			return item.id === id;
		});

		console.log(`Got toDo by ID provided:`);
		console.log(todo);

		return todo;
	};

	static replaceToDo = (id, replacedToDo) => {
		const toDoIndex = toDos.findIndex((item) => (item.id === id));

		if (toDoIndex > -1) {
			toDos.splice(toDoIndex, 1, replacedToDo);
			return replacedToDo;
		}

		console.log(replacedToDo); // this not working.  troubleshoot

		return false;
	};

	static updateToDo = (id, toDo) => {
		const toDoIndex = toDos.findIndex((item) => (item.id === id));

		if (toDoIndex > -1) {
			Object.keys(toDo).forEach((key) => {
				if (key === 'id') {
					return;
				}
				toDos[toDoIndex][key] = toDo[key];
			});

			return toDos[toDoIndex];

		}

		console.log(toDo);

		return false;
	};

	static deleteToDo = (id) => {
		const countBeforeDelete = toDos.length;

		toDos = toDos.filter((item) => (item.id !== id));

		if (countBeforeDelete === toDos.length) {
			return false;
		}

		return true;
	};
}


