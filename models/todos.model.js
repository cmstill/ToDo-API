/* eslint-disable max-len */
import db from '../lib/database.js';
import Constants from '../lib/constants.js';

const toDos = [
  {
    name: 'Study JavaScript',
    id: '1',
    color: 'Green',
  },
  {
    name: 'Go to the gym',
    id: '2',
    color: 'Blue',
  },
  {
    name: 'Pick up groceries',
    id: '3',
    color: 'Chartreuse',
  },
];

export default class ToDosModel {
  /**
	 * getToDos - return a list of toDos from the simulated DB array
	 * @returns - {Array} - An array of ToDo objects
	 */
  static getToDos = async () => {
    console.log('Got full list of ToDos:');
    // return toDos;

    return db.getDb().collection(Constants.TODOS_COLLECTION).find(
      {},
      { projection: Constants.DEFAULT_PROJECTION },
    ).toArray();// this is returning a promise and that goes all the way up to the controller that is awaiting that promise
    // and db.getDb() is calling the getDb() function on the Database class (saved to db)
  };

  /**
	 * createToDo - accepts newToDo, an object that starts out as req.body, adds that ToDo to DB, returns newToDo
	 * @param {Object} newToDo - new ToDo to create in DB
	 * @returns {Object} - An object that holds properties of new ToDo
	 */
  static createToDo = async (newToDo) => {
    console.log('Created new ToDo:');
    console.log(newToDo);
    await db.getDb().collection(Constants.TODOS_COLLECTION).insertOne(newToDo);
    const returnToDo = { ...newToDo };
    delete returnToDo._id;// this line and one above creates a copy of newToDo, saves that to returnToDo, then deletes the _id property off that so the user doesn't see it. This is because we don't want to mutate paramaters that are passed to our functions in those functions.
    return returnToDo;
  };

  static getToDo = (id) => {
    // const todo = toDos.find((item) => {
    // 	return item.id === id;
    // });

    console.log('Got toDo by ID provided');

    // return todo;
    return db.getDb().collection(Constants.TODOS_COLLECTION).findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static replaceToDo = async (id, replacedToDo) => { // this isn't implimented oftentimes.  You usually only want to update certain properties
    const result = await db.getDb().collection(Constants.TODOS_COLLECTION).replaceOne({ id }, replacedToDo);

    if (result.matchedCount === 1) {
      return replacedToDo;
    }

    return false; // this is so in the controller, I know I got something flasey (null) and so I faild and can throw an error
  };

  static updateToDo = async (id, toDo) => {
    const update = {
      $set: {
        // all this allows us to dynamically accept a property from req.body on the patch route that populates here in the model
      },
    };

    Object.keys(toDo).forEach((key) => {
      if (key === 'id') {
        return;
      }

      update.$set[key] = toDo[key]; // what is going on here?
    });

    const result = db.getDb().collection(Constants.TODOS_COLLECTION).findOneAndUpdate({ id }, update, { returnDocument: 'after' });

    if (result) {
      delete result._id;
      return result; // for some reason this isn't returning the entire result document from the findOneAndUpdate
    }

		 return false;
  };

  static deleteToDo = (id) => { // on postman, this hangs up but on the backend prints what I deleted to the console.  Also the deletion does happen.
    console.log(`Deleted todo with ID of: ${id}`);

    return db.getDb().collection(Constants.TODOS_COLLECTION).deleteOne({ id });
  };
}
