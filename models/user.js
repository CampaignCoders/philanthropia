const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    firstname: String, 
    lastname: String, 
    username: String, 
    password: String, 
    email: String, 
    phone: String,
    title: String

});

module.exports = mongoose.model ('User', User);