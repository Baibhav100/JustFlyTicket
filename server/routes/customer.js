const express=require("express");
const customer=new express.Router();
const nodemailer=require('nodemailer');

customer.post("/customer",async(req,res)=>{
 
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

     const mailOptions1 = {
        from: email,
        to: process.env.EMAIL,
        subject: "Booking Details",
        html: `
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
             </div>`,
    };

    // Second mailOptions
    const mailOptions2 = {
        from: process.env.EMAIL,
        to: email,
        subject: "Justflyticket Travel Enquiry",
        html: `
       <div style='width:100%;display:flex;justify-content:center;'>
        <div style='width:80%;margin:auto;'>
        <div style='display:flex;width:100%;justify-content:center;'>
        <img style='width:90px;height:90px;margin:auto;' src='https://www.rentyourwheel.com/static/justfly_logo.png'/>
        </div>
        <h1 style='color:#1f2937; font-weight:bolder; font-size:40px;margin-top:-25%; text-align:center;'>Justflyticket</h1>
        <p style='font-size:14px;'>We appreciate you choosing us as your travel partner. Thank you for submitting your flight request. Our travel agent will reach out to you shortly with more details.</p>
        <div  style='display:flex;width:100%;justify-content:center;'>
        <img style='width:100%;height:150px;margin:auto;' src='https://www.rentyourwheel.com/static/flight_booking.png'/>
        </div>
        <p style='font-size:16px;font-weight:bold;'>Ask for a price quote now!</p>
        <div style='display:flex;width:100%'>
        <button style='background:#124076;padding:10px;'><a style='color:white;text-decoration:none;' href='tel:+18883506579'>Call Now !</a></button>
        </div>
        <div>
        <p>Choose one of the options given below</p>
        <div style='display:flex;width:100%;justify-content:center;'>
        <button style='background:#474F7A;padding:10px;width:600px;'><a style='color:white;text-decoration:none;' href='tel:+18883506579'>Call us at +1 (888) 350-6579</a></button>
        <button style='background:#474F7A;padding:10px; width:600px; margin-left:12px;'><a style='color:white;text-decoration:none;' href='mailto:ticketing@justflyticket.com'>Mail us at ticketing@justflyticket.com</a></button>
        </div>
        </div>
        <div style='display:flex;width:100%;justify-content:center; margin-top:20px;'>
        <img style='width:100%;height:250px;margin:auto;' src='https://www.rentyourwheel.com/static/Flight_Deals.png'/>
        </div>
        <p style='font-weight:bold;>Get the best deal on top-rated airlines!</p>
        <p style='font-weight:bold;>Call us to get discounted deals on top-rated airlines.</p>
        <p>Flight deals at discounted rates cannot be quoted or sold online since they are lower than airline prices online.</p>
        <p>With Justflytickets, you can book discounted airline tickets anytime, get personalized customer service and flight booking deals 24/7. Our team is ready to respond to any inquiries you might have before, during, or after your trip. Please call us soon so we can discuss your needs.</p>
        <p>Best regards.</p>
        <p style='font-weight:bolder;'>Justflyticket Reservation Team</p>


        </div>
       </div>
        `
    };

    // Send the first email
    const info1 = await transporter.sendMail(mailOptions1);

    // Send the second email
    const info2 = await transporter.sendMail(mailOptions2);

    console.log("Email 1 sent:", info1.response);
    console.log("Email 2 sent:", info2.response);

    res.status(201).json({ status: 201, info1, info2 });
} catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error });
}
});

module.exports=customer       