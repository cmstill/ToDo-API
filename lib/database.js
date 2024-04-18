import { MongoClient } from 'mongodb';

class Database {
	_instance = null; //variables with underscores mean that the variable is only for the developer's purpose

	init = async (config) => {
		const client = new MongoClient(config.url);
		await client.connect();
		this._instance = client.db(config.database);
	};

	getDb = () => {
		return this._instance;
	};
}
// I need to ask Cameron to go over what's going on here
// creating a global singleton so when my connection starts up, I make my connection to Mongo and then ask the class Database for it

const db = new Database();
export default db;
