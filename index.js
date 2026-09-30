const coder = require('./scr/code.js');

let encoded_string = coder.encode('hello world');
let decoded_string = coder.decode(encoded_string);

console.log(decoded_string);