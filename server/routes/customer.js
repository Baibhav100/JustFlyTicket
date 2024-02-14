const express=require("express");
const customer=new express.Router();
const nodemailer=require('nodemailer');

customer.post("/customer",(req,res)=>{
   
    const { email,
        user,
        num,
        trip1,
        startDate,endDate,
        searchTerm,dsearchTerm} = req.body;
    try{
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{          
                user:"bhaibhav60@gmail.com",
                pass:"yyna gxcq glio bqle",
            }
        });

        const mailOptions={
            from:email,
            to:process.env.EMAIL ,
            subject: "Booking Details",
            html:`<h1 style="text-align:center">Personal Information of ${user}</h1>
            <div>
            <h3><b>Origin:</b> ${searchTerm}</h3>
            <h3><b>Destination:</b> ${dsearchTerm}</h3>
            <p>Customer Name:${user}</p>
            <p>Customer Email:${email}</p>
            <p>Customer number:${num}</p>
            <p>Trip:${trip1}</p>
            <p>startdate:${startDate}</p>
            <p>enddate:${endDate}</p>
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

module.exports=customer       