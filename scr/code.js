// Base64 Encoding / Decoding

/**
 * @typedef {string} Base64
 */

/**
 * encodes a string into base64 for data transfer
 * @param {string} string value to be converted to base64
 * @returns {Base64} base64 value of input string
 */
const encode = (stringVal) =>  Buffer.from(stringVal, 'utf8').toString('base64url');

/**
 * decodes a base64 string back to its original form
 * @param {Base64} Base64 base64 value to be decoded
 * @returns {string} original string value
 */
const decode = (base64Val) =>  Buffer.from(base64Val, 'base64url').toString('utf8');


/**
 * Converts a json object to a plain string
 * @param {JSON} json object to be formatted as text 
 * @returns {string}
 */
const JsonToText = (json) => JSON.stringify(json);

/**
 * Converts a string (originally json) back to JSON
 * @param {string} string to be coverted as JSON 
 * @returns {JSON}
 */
const TextToJson = (text) => JSON.parse(text);



module.exports = {encode, decode, JsonToText, TextToJson};