const coder = require('./scr/code.js');
const signature = require('./scr/signature.js');

let data = {
    "username": "user001"
}
let EncryptionKey = "MyUser123";


let encoded_string = coder.encode(data);
encoded_string = signature.encrypt(encoded_string, EncryptionKey,);
encoded_string = signature.decrept(encoded_string);
let decoded_string = coder.decode(encoded_string);

console.log(decoded_string.username);