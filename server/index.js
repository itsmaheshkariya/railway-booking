const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const SwaggerJsdoc = require('swagger-jsdoc')
const SwaggerUi = require('swagger-ui-express')
const session = require('express-session');
const Insta = require('instamojo-nodejs');
const user = require('./models/user.model');
Insta.setKeys('ef89f5f9d67b445c9af644675b31bbc9', 'e3fec81aa2fd3e9fad63db94c84ba81b');
mongoose.connect('mongodb://localhost:27017/railway-booking',{ useUnifiedTopology: true, useNewUrlParser: true });
// mongoose.connect('mongodb+srv://mayour:619619key@cluster0-3rz2i.mongodb.net/railway-booking?retryWrites+true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true });

const port = 5000 || process.env.PORT;
const app = express();


// app.get('/insta/getall/links',(req,res)=>{
//     Insta.seeAllLinks(function(error, response) {
//         if (error) {
//          res.json(err)
//         } else {
//           res.json(response);
//         }
//       });
// })

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'Railway-Booking',
            discription:'This project provides the digital system for the ticket booking and checking purpose. It will also reduce the burden of work load on the ticket cheker.',
            contact:{
                name:'Munna Shahare',
            },
            servers:["http://localhost:5000"]
        }
    },
    // ['.routes/*.js'],
    apis:["index.js","./routes/*.js"]
};

const swaggerDocs = SwaggerJsdoc(swaggerOptions);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs))

app.use(session({secret: "619619key",
                resave: true,
                saveUninitialized: true
                }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/Users',require('./routes/user.route'));
app.use('/Trains',require('./routes/train.route'))
app.get('/getall',(req,res)=>{
    user.find({},(err,users)=>{
        res.json(users);
    })
})
app.use('/booking',require('./routes/booking.route'));
// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: '49af79cf',
//   apiSecret: 'Z902qu1zJ5JW5RvG',
// });

// const from = 'Nexmo';
// const to = '917741863585';
// const text = 'Hello from Nexmo';

// nexmo.message.sendSms(from, to, text);





// // include nodemailer
// const nodemailer = require('nodemailer');
// // declare vars
// let fromMail = 'maheshkareeya@@gmail.com';
// let toMail = 'munnashahare828@gmail.com';

// // let toMail = 'gnbaviskar2@gmail.com,gnbaviskar3@gmail.com';

// let subject  = 'An email using nodejs app';
// let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

// // auth
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'maheshkareeya@gmail.com',
//         pass: '619619@Keyyy'
//     }
// });

// // email options
// let mailOptions = {
//     from: fromMail,
//     to: toMail,
//     subject: subject,
//     text: text
// };

// // send email
// transporter.sendMail(mailOptions, (error, response) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(response)
// });





// var TeleSignSDK = require('telesignsdk');

// const customerId = "6D8DA906-1981-4D1F-8F73-C63930FC86CC";
// const apiKey = "kFVwEEU8StXhDCHSMyfmprp16B2pJEUXnk7UgehZefEh+ZhbxCDwD/cYOrErxTw63hFdu2Dr3vVlklpqx0KyJA==";
// const rest_endpoint = "https://rest-api.telesign.com";
// const timeout = 10*1000; // 10 secs

// const client = new TeleSignSDK( customerId,
//     apiKey,
//     rest_endpoint,
//     timeout // optional
//     // userAgent
// );


// const phoneNumber = "+917066650006";
// const message = "You're scheduled for a dentist appointment at 2:30PM.";
// const messageType = "ARN";

// console.log("## MessagingClient.message ##");

// function messageCallback(error, responseBody) {
//     if (error === null) {
//         console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
//             ` => code: ${responseBody['status']['code']}` +
//             `, description: ${responseBody['status']['description']}`);
//     } else {
//         console.error("Unable to send message. " + error);
//     }
// }
// client.sms.message(messageCallback, phoneNumber, message, messageType);


app.listen(port,()=>console.log(`port running on ${port}`))
