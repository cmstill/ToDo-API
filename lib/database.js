/* eslint-disable max-len */
import { MongoClient } from 'mongodb';
import Constants from './constants.js';

class Database {
  _instance = null; // variables with underscores mean that the variable is only for the developer's purpose

  init = async (config) => {
    const client = new MongoClient(config.url, { minPoolSize: config.minPoolSize, maxPoolSize: config.maxPoolSize });
    await client.connect();
    this._instance = client.db(config.database);
  };

  getDb = () => this._instance;

  dbToDos = () => this._instance.collection(Constants.TODOS_COLLECTION); // this function returns the db you're connected to and the collection passed into .collection.  In this case that is whatever is contained in Constant.TODOS_COLLECTION...and that is todos
}
// I need to ask Cameron to go over what's going on here
// creating a global singleton so when my connection starts up, I make my connection to Mongo and then ask the class Database for it
// this Class Database is a singleton that is handling the connection/intilaization of our database

const db = new Database();
export default db;

/*

Database class is used to create a new instance of our Database and then we save that instance to variable "db"

And then we create a getDb function that returns the instance of that Database
*/
