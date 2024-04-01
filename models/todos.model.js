let toDos = [
	{
		name: 'Study JavaScript',
		id: '1',
		color: 'Green'
	},
	{
		name: 'Go to the gym',
		id: '2',
		color: 'Blue'
	},
	{
		name: 'Pick up groceries',
		id: '3',
		color: 'Chartreuse'
	}
];
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
			console.log(`Replaced toDo at ${id}`, 'with:', replacedToDo);
			toDos.splice(toDoIndex, 1, replacedToDo);
			return replacedToDo;
		}

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
			console.log(`Updated ToDo at ${id}`, toDos[toDoIndex]);
			return toDos[toDoIndex];
		}


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


