const express = require('express');
const Train = require('../models/train.model')
const router = express.Router();



router.get('/',(req,res) => {
     Train.find({},(err,data)=>{
            if(err) throw err;
            res.json(data)
    })
})
router.delete('/delete/:id',(req,res) => {
    Train.findByIdAndDelete(req.params.id,(err)=>{
           if(err) throw err;
           res.json({"message":"deleted"})
   })
})
router.post('/',(req,res) => {
    train = new Train({
        trainname:req.body.trainname,
        origin:req.body.origin,
        destination:req.body.destination,
        trainno:req.body.trainno,
        servicetype:req.body.servicetype,
        arrivaltime:req.body.arrivaltime,
        arrivalday:req.body.arrivalday,
        departuretime:req.body.departuretime,
        departureday:req.body.departureday

    })
    train.save(() => {
        res.json({message: 'Train added successfully'})
    })
})
router.put('/:id',(req,res) => {
    Train.findByIdAndUpdate(req.params.id,
    {
        trainname:req.body.trainname,
        origin:req.body.origin,
        destination:req.body.destination,
        trainno:req.body.trainno,
        servicetype:req.body.servicetype,
        arrivaltime:req.body.arrivaltime,
        arrivalday:req.body.arrivalday,
        departuretime:req.body.departuretime,
        departureday:req.body.departureday

    },(err)=>{
        res.json({message: 'Train updated successfully'})
    })

})
module.exports = router
