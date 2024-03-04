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
                user:process.env.EMAIL,
                pass:process.env.PASS,
            }
        });

        const mailOptions={
            from:email,
            to:process.env.EMAIL ,
            subject: "Booking Details",
            html:`
            <h3 style="font-size:30px;margin-top:12%;color:#1f2937"> Justflyticket</h3>
            <h3 style="text-align:center">Personal Information of ${user}</h3>
            <div style="width:100%;height:100vh;">
            <div style='width:100%;display:flex;background:#1f2937;justify-content:space-between;color:white;padding:23px;'>
            <h3><b>Origin:</b> ${searchTerm}</h3>
            <h3 style='margin-left:40%;'><b>Destination:</b> ${dsearchTerm}</h3>
            </div>
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