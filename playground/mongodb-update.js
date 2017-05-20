// Updating Data 11:47

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB Server', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("591d1e9d17cba8279708db77")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('591d307f17cba8279708db80')
        }, {
            $set: {
                name: 'Panji'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(results);
        })
        // db.close();
})