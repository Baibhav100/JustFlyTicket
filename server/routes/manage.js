const express=require("express");
const manage=new express.Router();
const nodemailer=require('nodemailer');

manage.post("/manage",(req,res)=>{
   
    const {fname,lname,email,confirm,phone} = req.body;
    try{
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{          
                user:process.env.EMAIL,
                pass:process.env.PASS,
            }
        });

        const mailOptions={
            from:email,
            to:process.env.EMAIL ,
            subject: "Query",
            html:`<h1 style="text-align:center">Personal Information of ${fname} ${lname}</h1>
            <div>
            <p>Airline Confirmation Number:${confirm}</p>
            <p>Customer First Name:${fname}</p>
            <p>Customer Last Name:${lname}</p>
            <p>Customer Email:${email}</p>
            <p>Customer Phone number:${phone}</p>
         
            </div>`
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error)
            }
            else{
                console.log("Email sent"+info.response);
                res.status(201).json({status:201,info})
            }
        })
    }catch(error){
     res.status(201).json({status:401,error})
    }
});

module.exports=manage