const express = require('express');
const app = express();

require('dotenv').config();
const mongoose = require ('mongoose');
//connect with database.
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useCreateIndex :true
})
.then(()=>console.log('DB Connected'))
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("Hi form Node js..")
})

const port =process.env.port || 8000;

app.listen(port,()=>{
    console.log('App is Running on port ${port}');
})