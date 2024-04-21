require('dotenv').config();

const express = require("express");

const cors=require("cors");
const bodyParser=require("body-parser")

const handle = require("./handlers")

const app = express();
//const port =process.env.PORT ;



app.use(cors());
app.use(bodyParser.json());
app.get('/',(req,res)=>
res.json({hello :'world'}));

//error handler

app.use(handle.notFound);


//final endpoint that will express hit when it is going to crash
app.use(handle.errors);














app.listen(4000,()=>{
  console.log(`SERVER STARTED ON port 4000 `)
});

