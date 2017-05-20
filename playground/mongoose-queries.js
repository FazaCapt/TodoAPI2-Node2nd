// Mongoose Queries and ID Validation 16: 26

const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '591dbee2e550f747f4c68b6311';
var id = '591d4ae0ffe19c33f94d4709';

User.findById(id).then((user) => {
        if (!user) {
            return console('ID not found');
        }
        console.log('User by id', JSON.stringify(user, undefined, 2));
    }).catch((e) => console.log(e))
    // if (!ObjectID.isValid(id)) {
    //     console.log('ID not valid');
    // }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todo by ID', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found'); //return mempengaruhi, kalo tidak ada return maka code terus dijalankan
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


//user/ findByID