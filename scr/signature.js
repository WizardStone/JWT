const crypto = require('node:crypto');

function generatePayload(payload, secretKey){
    if (payload == undefined){
        console.error('ERROR:_No_Payload');
        return 'ERROR:_No_Payload';
    }
    if (secretKey == undefined){
        crypto.randomBytes(8)
    }
    const signature = crypto.createHmac('sha256', secretKey).update(message).digest('base64');
    return signature
}
    
