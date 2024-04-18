import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url, {});

await client.connect();
const db = client.db('arca');

const query = {
	id: '8',
};

// const projection = {
// 	name: 1,
// 	id:1,
// 	_id: 0
// };

// const sort = {
// 	id: -1
// }

const update = {
	$set: {
		name: "do the electric slide",
	}
};

const result = await db.collection('todos').findOneAndUpdate(query, update, {returnDocument: 'after'});

console.log(result);