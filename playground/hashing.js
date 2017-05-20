// JWTs and Hashing 19: 32
const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};


var token = jwt.sign(data, '123abc');
console.log(token);

var decode = jwt.verify(token, '123abc');
console.log('decode', decode);









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