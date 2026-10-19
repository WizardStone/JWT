const crypto = require('node:crypto');

function generatePayload(payload, secretKey){
    if (payload == undefined){
        console.error('ERROR:_No_Payload');
        return 'ERROR:_No_Payload';
    }
    /*if (secretKey == undefined){
        crypto.randomBytes(8);
    }*/
    const signature = crypto.createHmac('sha256', secretKey).update(message).digest('base64');
    return signature;
}

function NotTampered(payload, signature, secretKey){
    return () => signature == generatePayload(payload, secretKey);
}

function verify(Body, secretKey){
    const payload = Body[0];
    const signature = Body[1];
    return NotTampered(payload, signature, secretKey);
}
module.exports = {generatePayload, verify}