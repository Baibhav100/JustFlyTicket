const express=require("express");
const router=new express.Router();
const nodemailer=require('nodemailer');

router.post("/register",(req,res)=>{
   
    const {email,user,num,day,month,searchTerm,dsearchTerm,selectedYear,selectedTrip,startDate,endDate,alphanumericCode} = req.body;
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
            subject: "Details for booking",
            html:`<h1 style="text-align:center">Personal Information of ${user}</h1>
            <b>Reference Number:${alphanumericCode}</b>
            <div>
            <h3><b>Origin:</b> ${searchTerm}</h3>
            <h3><b>Destination:</b> ${dsearchTerm}</h3>
            </div>
            <hr>
            <h3>Trip:${selectedTrip}</h3>
            <h3>Departure Date : ${startDate}</h3>
            <h3>Return Date : ${endDate}</h3>
            <hr>
            <div>
            <p>Customer Name:${user}</p>
            <p>Customer Email:${email}</p>
            <p>Customer MobileNo.:${num}</p>
            <p>Customer DOB(MM/DD/YYYY): ${month}/${day}/${selectedYear}</p>
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

module.exports= router