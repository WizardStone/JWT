const coder = require('./scr/code.js');
const signature = require('./scr/signature.js');

let data = {
    "username": "user001"
}
let TextData, base64Data, NewTextData, jsonObject;


TextData = coder.JsonToText(data);
base64Data = coder.encode(TextData);

console.log("Base64 Encoded Data: " + base64Data);


NewTextData = coder.decode(base64Data);
jsonObject = coder.TextToJson(NewTextData);

console.log(jsonObject);