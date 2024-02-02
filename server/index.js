require("dotenv").config()
const express=require('express');
const app=express();
const router= require('./routes/router');
const manage= require('./routes/manage');
const customer=require('./routes/customer');
const cors=require('cors');

const port=8006; 
//get
app.use(express.json());
app.use(cors());
app.use(router);
app.use(manage);
app.use(customer);
//listening to the port 
app.listen(port,()=>{
    console.log(`server  start at port no :${port}`);
})