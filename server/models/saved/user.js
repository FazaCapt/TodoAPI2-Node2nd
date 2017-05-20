// Setting Up The User Model 17:58
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not valid email',
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6 // 'minlength' => L-nya kecil aja
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function() { //kurang 's' pada methods
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, '123abc').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;
    });
};

var User = mongoose.model('User', UserSchema);


module.exports = { User };

// Dganti seperti diatas:
// var User = mongoose.model('User', {
//     email: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true,
//         unique: true,
//         validate: {
//             validator: validator.isEmail,
//             message: '{VALUE} is not valid email',
//         }
//     },
//     password: {
//         type: String,
//         require: true,
//         minlength: 6 // 'minlength' => L-nya kecil aja
//     },
//     tokens: [{
//         access: {
//             type: String,
//             required: true
//         },
//         token: {
//             type: String,
//             required: true
//         }
//     }]
// });


// {
//     email: 'fazafahamsyah@gmail.com',
//     password: '123Abc',
//     tokens:[{
//         access: 'auth',
//         token: 'ini ngasal aja'
//     }]
// }


// Catatan:
// unique: {Boolean} - Memberitahu Mongoose untuk memastikan indeks unik dibuat untuk jalur ini. Berikut ini adalah ekuivalen:

// Catatan: jika indeks sudah ada di db, maka tidak akan diganti

//     validator: (value) => {
//         return validator.isEmail(value);
//     },


// .then((token)=>{

// })