const crypto = require('crypto');

const algorithm = 'aes-256-gcm';


const encrypt = (text, key, IV) => {
    
    cipher = crypto.createCipheriv(algorithm, key, IV);
    let EncryptedText = cipher.update(text, 'utf8', 'hex');
    EncryptedText += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    return {
        content: EncryptedText,
        tag: authTag
    }; 
}

const decrept = (payload, key) => {
    // Split Encrypted Payload
    const [ivHex, authTagHex, ciphertextHex] = encryptedPayload.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAuthTag(authTag);
    
    // Decrypt the data
    let decrypted = decipher.update(ciphertextHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
}

module.exports = {decrept, encrypt};