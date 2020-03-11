const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const validator = require('aadhaar-validator')
router.post('/login',async (req,res)=>{

    console.log(req.params.typeofuser)
    if(req.session.user != undefined){
        store = {message:"Already Loggedin"}
    }else{
        if(req.body.UserId.length == 12){
            store = await User.findOne({type:req.body.type,aadhar:req.body.UserId,password:req.body.password});
        }else if(req.body.UserId.length == 10){
            store = await User.findOne({type:req.body.type,mobileno:req.body.UserId,password:req.body.password});
        }else{
            store = await User.findOne({type:req.body.type,email:req.body.UserId,password:req.body.password});
        }
    }
        req.session.user = req.body.UserId
        res.json(store);
        console.log(store)

})



router.post('/',async(req,res)=>{

    user = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        aadhar:req.body.aadhar,
        mobileno:req.body.mobileno,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        type:req.body.type
    })
    await user.save()
    .then(()=>{
        console.log(user)
        res.json(user)
    })

})
router.delete('/delete/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,()=>{
        res.json({"message":"deleted"})
    })

})
// Routes
/**
 * @swagger
 * /checkaadhar/{aadhar}/:
 *  get:
 *   description: for validating email
 *   responses:
 *    '200':
 *     description: A successful validation
 */
router.get('/checkaadhar/:aadhar', async (req,res)=>{
    test = validator.isValidNumber(req.params.aadhar)
    if(test == true){
        store = await User.findOne({aadhar:req.params.aadhar})
        res.json(store);
    }else{
        res.json({
            message:"Aadhar is not valid"
        });
    }

})

// Routes
/**
 * @swagger
 * /checkemail/:
 *  get:
 *   description: for validating email
 *   responses:
 *    '200':
 *     description: A successful validation
 */

router.get('/checkemail/:email',async (req,res)=>{
    store = await User.findOne({email:req.params.email})
    res.json(store);
})
// Routes
/**
 * @swagger
 * /checkmobileno/{mobileno}/:
 *  get:
 *   description: for validating email
 *   responses:
 *    '200':
 *     description: A successful validation
 */

router.get('/checkmobileno/:mobileno',async (req,res)=>{
        store = await User.findOne({mobileno:req.params.mobileno})
        res.json(store);
})
// Routes
/**
 * @swagger
 * /logout/:
 *  get:
 *   description: for validating email
 *   responses:
 *    '200':
 *     description: A successful validation
 */
router.get('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if(err){
            res.json({err})
        }else{
            console.log({message:"loggedout"})
            res.json({message:"loggedout"})
        }

    })
})
router.get('/getAll/:id',(req,res)=>{
    User.findById(req.params.id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json(data)
        }
    })
})
module.exports = router
