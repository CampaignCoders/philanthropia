const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    firstname: { type:String, required:true}, 
    lastname: { type:String, required:true},
    username: { type:String, required:true, unique:true},
    password: String, 
    email: { type:String, required:true},
    mobile: { type:String, required:true},
    title: String

});

module.exports = mongoose.model ('User', User);