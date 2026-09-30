const encode = (stringVal) =>  Buffer.from(stringVal, 'utf8').toString('base64');
const decode = (base64Val) =>  Buffer.from(base64Val, 'base64').toString('utf8');

module.exports = {encode, decode};