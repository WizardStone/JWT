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

/**
 * Signs the provided JSON data with the given key.
 * @param {JSON} JsonData 
 * @param {string} key 
 * @returns the data to send to the client for use in authentication.
 */

const sign = (JsonData, key) => {
    let signedData = signature.generateSecret(coder.JsonToText(JsonData), key);
    return coder.ArrayDot([coder.encode(coder.JsonToText(JsonData)), coder.encode(signedData)])
}


const verify = (Payload, key) =>{
    let array = coder.DotToArray(Payload);
    
    array = coder.DecodeInArrayForm(array);
    return signature.verify(array, key);
}

// Test script
let testData = {
    UID: "0001",
    username: "testUesr001",
    email: "testUesr001@example.com"
}

let jwt = sign(testData, "123")
console.log(verify(jwt, "123"))