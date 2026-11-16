const crypto = require('node:crypto');

// JS doc key deifinitions for base64 etc.
/**
 * @typedef {string} Base64
 */


/**
 * Generates a signature for the given payload using the provided secret key.
 * @param {*} payload The data to be signed using the secret key.
 * @param {*} secretKey The secret key used for signing data using HMAC SHA356 Encryption.
 * @returns The hashed payload using the secret key.
 */

function generateSecret(payload, secretKey){
    if (payload == undefined){
        console.error('ERROR:_No_Payload');
        return 'ERROR:_No_Payload';
    }
    /*if (secretKey == undefined){
        crypto.randomBytes(8);
    }*/
    const signature = crypto.createHmac('sha256', secretKey).update(payload).digest('base64');
    return signature;
}

/**
 * Checks if the payload has been tampered with.
 * @param {String} payload 
 * @param {Base64} signature 
 * @param {String} secretKey 
 * @returns 
 */

function NotTampered(payload, signature, secretKey){
    return () => signature == generateSecret(payload, secretKey);
}


/**
 * Verifies whether the payload has been tampered with.
 * Done by comparing the provided signature with a newly generated signature using the same secret key.
 * @param {Array} Body An array containing the payload and its corresponding signature for verification.
 * @param {String} secretKey The secret key used for signing data using HMAC SHA356 Encryption.
 * @returns {Boolean} Returns true if the payload is safe and has not been tampered with, if it has been modified returns false.
 */

function verify(Body, secretKey){
    const payload = Body[0];
    const signature = Body[1];
    return NotTampered(payload, signature, secretKey);
}
module.exports = {generateSecret, verify}