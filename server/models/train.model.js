const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newTrain = new Schema({
    trainname:String,
    origin:String,
    destination:String,
    trainno:String,
    servicetype:String,
    arrivaltime:String,
    arrivalday:String,
    departuretime:String,
    departureday:String

})

module.exports = mongoose.model('Train',newTrain)
