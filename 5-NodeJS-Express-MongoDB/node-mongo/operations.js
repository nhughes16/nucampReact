const assert = require('assert').strict

exports.insertDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection) //pass in collection name should be a string

	coll.insertOne(document, (err, result) => {
		assert.strictEqual(err, null)
		callback(result)
	})
}

exports.findDocuments = (db, collection, callback) => {
	const coll = db.collection(collection) //pass in collection name should be a string

	coll.find().toArray((err, docs) => {
		assert.strictEqual(err, null)
		callback(docs)
	})
}

exports.removeDocument = (db, document, collection, callback) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	coll.deleteOne(document, (err, result) => {
		assert.strictEqual(err, null)
		callback(result)
	})
}

exports.updateDocument = (db, document, update, collection, callback) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	coll.updateOne(document, { $set: update }, null, (err, result) => {
		assert.strictEqual(err, null)
		callback(result)
	})
}
