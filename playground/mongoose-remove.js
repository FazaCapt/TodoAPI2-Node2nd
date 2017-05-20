// elete a Resource - DELETE /todos/:id 14:54

const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Menghapus semua data
// Todo.remove({}).then((results) => {
//     console.log(results);
// })

//
Todo.findByIdAndRemove('591e614d17cba8279708db83').then((todo) => {
    console.log(todo);
})

Todo.findOneAndRemove({ _id: '591e614d17cba8279708db83' }).then((todo) => {
    console.log(todo);
});

// Todo.findById().then((results) => {

// })