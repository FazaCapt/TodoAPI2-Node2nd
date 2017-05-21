const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId, // _id: new ObjectID(),
    email: 'fazacakepsatu@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString() // Jangan lupa IDnya tanpa ada kutipnya
    }]
}, {
    _id: userTwoId,
    email: 'fazacakepdua@gmail.com',
    password: 'userTwoPass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString()
    }]
}]

const todos = [{
    _id: new ObjectID(), //Jangan lupa tutup kurungnya
    text: 'First test todo',
    _creator: userOneId
}, {
    _id: new ObjectID(), //Jangan lupa tutup kuungnya
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const populateTodos = (done) => { //Berjalan sebelum setiap tes di blok ini
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
}

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };