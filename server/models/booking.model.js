const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newBooking = new Schema({
    source:String,
    destination:String,
    fare:String,
    noofpassengers:String,
    bookingdate:String,
    bookingtime:String,
    userid:String,
    amount:String,
    trainno:String,
    trainname:String,
    seatno:String
})
module.exports = mongoose.model('Booking',newBooking)
