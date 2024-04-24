/* eslint-disable max-len */
import db from '../lib/database.js';
import Constants from '../lib/constants.js';

export default class ToDosModel {
  /**
   * getToDos - return a list of toDos from the simulated DB array
   * @returns - {Array} - An array of ToDo objects
   */
  static getToDos = async () => {
    console.log('Got full list of ToDos:');

    return db.getDb().collection(Constants.TODOS_COLLECTION).find(
      {},
      { projection: Constants.DEFAULT_PROJECTION },
    ).toArray();
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
    delete returnToDo._id;
    return returnToDo;
  };

  static getToDo = (id) => {
    console.log('Got toDo by ID provided');

    // return todo;
    return db.getDb().collection(Constants.TODOS_COLLECTION).findOne({ id }, { projection: Constants.DEFAULT_PROJECTION });
  };

  static replaceToDo = async (id, replacedToDo) => {
    const result = await db.getDb().collection(Constants.TODOS_COLLECTION).replaceOne({ id }, replacedToDo);

    if (result.matchedCount === 1) {
      return replacedToDo;
    }

    return false;
  };

  static updateToDo = async (id, toDo) => {
    const update = {
      $set: {
      },
    };

    Object.keys(toDo).forEach((key) => {
      if (key === 'id') {
        return;
      }

      update.$set[key] = toDo[key];
    });

    const result = db.getDb().collection(Constants.TODOS_COLLECTION).findOneAndUpdate({ id }, update, { returnDocument: 'after' });

    if (result) {
      delete result._id;
      return result;
    }

    return false;
  };

  static deleteToDo = (id) => {
    console.log(`Deleted todo with ID of: ${id}`);

    return db.getDb().collection(Constants.TODOS_COLLECTION).deleteOne({ id });
  };
}
