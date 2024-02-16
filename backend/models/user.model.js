const { model, Schema } = require('mongoose');

// Schema for Users
const userSchema = new Schema({
    fullname: String,
    email: String,
    hash: String,
    salt: String,
    status: Boolean
});

module.exports = model('User', userSchema, 'users');
