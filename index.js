const coder = require('./scr/code.js');
const signature = require('./scr/signature.js');
/*
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


let secretKey = "test1234";
let payload = [JSON.stringify(data), signature.generateSecret(JSON.stringify(data), secretKey)];

let working = signature.verify(payload, secretKey);

console.log("Payload is safe: " + working());
*/


// Module Export/Import Fuunctions

const sign = (JsonData, key) => {
    let signedData = signature.generateSecret(coder.JsonToText(JsonData), key);
    return coder.ArrayDot([coder.encode(coder.JsonToText(JsonData)), coder.encode(signedData)])
}
const verify = (Payload, key) =>{
    let array = coder.DotToArray(Payload);
    
}