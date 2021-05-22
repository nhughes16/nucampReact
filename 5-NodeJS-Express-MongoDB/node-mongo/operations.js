exports.insertDocument = (db, document, collection) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	return coll.insertOne(document)
}

exports.findDocuments = (db, collection) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	return coll.find().toArray()
}

exports.removeDocument = (db, document, collection) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	return coll.deleteOne(document)
}

exports.updateDocument = (db, document, update, collection) => {
	const coll = db.collection(collection) //pass in collection name should be a string
	return coll.updateOne(document, { $set: update }, null)
}
