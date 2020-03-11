const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newAddress = new Schema({
    district:String,
    city:String,
    state:String,
    country:String,
    pincode:String,

})
const newUser =  new Schema({
    firstname:String,
    lastname:String,
    aadhar:String,
    mobileno:String,
    email:String,
    password:String,
    address:newAddress,
    type:String
})
module.exports = mongoose.model('User',newUser)
