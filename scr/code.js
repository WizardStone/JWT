// Base64 Encoding / Decoding

/**
 * encodes a string into base64 for data transfer
 * @param {string} string value to be converted to base64
 * @returns {string} base64 value of input string
 */
const encode = (stringVal) =>  Buffer.from(stringVal, 'utf8').toString('base64');

/**
 * decodes a base64 string back to its original form
 * @param {string} base64Val base64 value to be decoded
 * @returns {string} original string value
 */
const decode = (base64Val) =>  Buffer.from(base64Val, 'base64').toString('utf8');



const JsonToText = (json) => JSON.stringify(json);

const TextToJson = (text) => JSON.parse(text);



module.exports = {encode, decode, JsonToText, TextToJson};