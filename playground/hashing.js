// JWTs and Hashing 19: 32
// Hashing Passwords 16:43

const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$rT4/dvqkzcJiJY7gtfY3jOi9iVjop58N95fiEsT.7MZTr2oBwMwvC';

bcrypt.compare('123abc', hashedPassword, (err, res) => {
    console.log(res);
})

// 'password1adadehiningasalbanget' -> mmnn








// var data = {
//     id: 10
// };


// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decode = jwt.verify(token, '123abc');
// console.log('decode', decode);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// password + 123adakdksajdkam

// var resultsHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultsHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was change. Do not trust!');
// }