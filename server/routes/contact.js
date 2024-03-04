const express=require("express");
const contact=new express.Router();
const nodemailer=require('nodemailer');

contact.post("/contact",(req,res)=>{
   
    const { email,
        name,
        mess,
    } = req.body;
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
            subject: "Contact Details",
            html:`<h1 style="text-align:center">Personal Information of ${name}</h1>
            <div>
            <p>Customer Name:${name}</p>
            <p>Customer Email:${email}</p>
            <p>Customer message:${mess}</p>
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

module.exports=contact       