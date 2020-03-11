const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;


app.get('/api',(req,res)=>{
    res.json({
        message:"Connected"
    })
})

app.post('/api/posts',verifytoken,(req,res)=>{
    jwt.verify(req.token,'619619key',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: 'Post created',
                authData: authData
            })
        }
    })

})


app.post('/api/login',(req,res)=>{
    //Mock user
    const user = {
        id:1,
        name:"mahesh",
        email:"maheshkareey@gmail.com",
        password:"demo123",
    }
    jwt.sign({user},'619619key', {expiresIn:'1h'},(err,token)=>{
        res.json({token})
    });
})
//Format token

//verify token
function verifytoken(req,res,next){
//Get auth header value
const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403);
    }

}
app.listen(port,()=>console.log(`Running on port ${port}`))
