// Connecting to Mongo and Writing Data
// The ObjectId 


// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


//Contoh buat ObjectID
var obj = new ObjectID();
console.log(obj);


// Contoh:
// var user = { name: 'Faza', age: '27' };
// var { name } = user;
// console.log(name);




//Jangan lupa slashnya kalo mau connect
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB Server', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({

    //     // _id: '123', //ditambahkan object _id
    //     text: 'Something text',
    //     completed: false
    // }, (err, results) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     // console.log(JSON.stringify(results.ops, undefined, 2));
    //     console.log(results.ops[0]._id.getTimestamp());
    // });

    // insert new doc into Users(Name, Age, Location)
    //     db.collection('Users').insertOne({
    //         name: 'Faza',
    //         age: 27,
    //         location: 'Tangerang Selatan'
    //     }, (err, results) => {
    //         if (err) {
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(JSON.stringify(results.ops, undefined, 2));
    //     })
    db.close();
})

//Catatan:
// Perintah insert akan mengembalikan objek hasil yang berisi beberapa bidang yang mungkin berguna.
// return Berisi hasil dokumen dari MongoDB
// Ops Berisi dokumen yang disisipkan dengan kolom _id tambahan
// connection Berisi koneksi yang digunakan untuk melakukan insert


//Penjelasan Error 
//Bila gak pake slashnya diconnect
/*Unable to connect to mongoDB Server { MongoError: failed to connect to server [calhost:27017] on first connect [MongoError: getaddrinfo ENOTFOUND calhost calhost:27017]
    at Pool.<anonymous> (/Users/fazafahamsyah/Desktop/node-todo-api/node_modules/mongodb-core/lib/topologies/server.js:328:35)
    at emitOne (events.js:96:13)
    at Pool.emit (events.js:188:7)
    at Connection.<anonymous> (/Users/fazafahamsyah/Desktop/node-todo-api/node_modules/mongodb-core/lib/connection/pool.js:274:12)
    at Connection.g (events.js:291:16)
    at emitTwo (events.js:106:13)
    at Connection.emit (events.js:191:7)
    at Socket.<anonymous> (/Users/fazafahamsyah/Desktop/node-todo-api/node_modules/mongodb-core/lib/connection/connection.js:177:49)
    at Socket.g (events.js:291:16)
    at emitOne (events.js:96:13)
  name: 'MongoError',
  message: 'failed to connect to server [calhost:27017] on first connect [MongoError: getaddrinfo ENOTFOUND calhost calhost:27017]' }*/