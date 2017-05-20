// Fetching Data 16:33

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB Server', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('591c2ac735ee0692392aa12d')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos');
    })


    db.collection('Users').find({ name: 'Faza' }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users');
    })


    // db.close();
})

// Catatan:
// find() => menampilkan semua
// find({completed: false}) => Menampilkan object completed yang false
// find({_id: new ObjectID('591c2ac735ee0692392aa12d')}) => Menampilkan document dengan pencarian ID