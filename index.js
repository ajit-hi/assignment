const http = require('http');
const express = require('express');
const app = express();
http.createServer(app);
const bodyParser = require('body-parser');
const validate = require('./mymodules/validate');
const email = require('./mymodules/mail');

app.use(bodyParser.json());

app.use(express.static(__dirname+ '/dist/algofocus'));

app.post('/uploadform',(req,res)=>{
    res.setHeader('Content-type','text/html');
    console.log(req.body);
    let isValid = validate(req.body.phone);
    if(isValid){
        res.end("Information is saved. Please check your email! If not found dont forget to check spam folder");
        email(req.body.email);
    }else{
        res.end("Please give valid phone number");
    }
})

app.listen(process.env.PORT || 8080);


