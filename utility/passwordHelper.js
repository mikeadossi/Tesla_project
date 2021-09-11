const { scrypt, randomBytes } = require('crypto');
const { promisify } = require('util');
const scryptAsync = promisify(scrypt);


var passwordHelper = {

    hash : async(givenString) => {
        let salt = randomBytes(8).toString('hex');
        let hash = await scryptAsync(givenString, salt, 32);

        return `${hash.toString('hex')}.${salt}`;      
    },

    compare : async(given, hashed) => {
        const [ hashPassword, salt ] = hashed.split('.');
        let givenHash = await scryptAsync(given, salt, 32);
        
        return givenHash.toString('hex') === hashPassword;
    }

}

module.exports = passwordHelper;