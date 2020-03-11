const express = require('express');
const Booking = require('../models/booking.model')
const router = express.Router();

router.post('/',(req,res)=>{
    booking = new Booking({
        source:req.body.source,
        destination:req.body.destination,
        fare:req.body.fare,
        noofpassengers:req.body.noofpassengers,
        bookingdate:req.body.bookingdate,
        bookingtime:req.body.bookingtime,
        userid:req.body.userid,
        trainno:req.body.trainno,
        trainname:req.body.trainname,
        seatno:req.body.seatno
    })
    booking.save(()=>{
        res.json({message:'Booking Done Successfully'})
    })
})
router.get('/history/:id',(req,res)=>{
    Booking.find({userid:req.params.id},(err,bookings)=>{
        res.json(bookings);
    })
})

module.exports = router;
