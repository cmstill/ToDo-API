/* eslint-disable max-len */
import { MongoClient } from 'mongodb';
import Constants from './constants.js';

class Database {
  _instance = null;

  init = async (config) => {
    const client = new MongoClient(config.url, { minPoolSize: config.minPoolSize, maxPoolSize: config.maxPoolSize });
    await client.connect();
    this._instance = client.db(config.database);
  };

  getDb = () => this._instance;

  dbToDos = () => this._instance.collection(Constants.TODOS_COLLECTION);
}

const db = new Database();
export default db;
