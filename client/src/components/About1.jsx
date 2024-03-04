import React from 'react'
import Footer from './Footer'
import Slider from 'react-slick'
import Sliders from './Sliders'
import { MdOutlinePhone } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Popup from './Popup';
import { AiOutlinePhone } from 'react-icons/ai';
const About1 = () => {
  return (
  <>
  <div>
    <Popup/>
  </div>
    <div className='w-[100%]  bg-slate-500 h-screen'>
    {/* <div className='w-[100%] h-screen flex justify-center items-center bg-[url(https://wallpapercave.com/wp/wp12411255.jpg)] bg-cover bg-no-repeat'> */}
    <div className='w-[100%] h-screen flex justify-center items-center text-black bg-cover bg-no-repeat'>
<div className='w-[90%] h-screen  lg:w-[80%] lg:flex justify-center'>
<div className="bg-gray-100 overflow-hidden w-full h-screen overflow-y-scroll no-scrollbar mb-9">
<div className="container mx-auto p-10 ">
  <h1 className='text-3xl font-semibold text-center'>About Us</h1>
  <p className='text-justify py-3'>We at Justflyticket are dedicated to making your travel experience as convenient,
affordable, and efficient as possible. The excitement of exploring new places is something we
appreciate no matter where you travel for work or pleasure. Our goal is to provide a hassle-
free flight booking process with competitive pricing and outstanding customer service.
</p>
<h1 className='text-3xl font-semibold text-center '>Who Are We?</h1>
<p className='text-justify py-3'>We recognize the need for an easy-to-use flight booking and reservations platform that offers
comprehensive options. We wanted to create an online platform that provided various travel
services for today’s travellers, based on our experience in the travel industry.
</p>
<h1 className='text-3xl font-semibold text-center'>Our Mission</h1>
<p className='py-3 text-justify'>Our goal is to make the flight ticket booking process as simple and easy as possible by
providing a fast, reliable, and user-friendly service. We want our customers to be able to book
their flight tickets with just a few clicks. We strive to ensure that the booking process is secure and
that our customers receive the best service possible. Through a variety of flight options,
personalized recommendations based on customer preferences, and secure payment systems,
we provide customers with a wide range of flight options. As well as offering 24/7 customer
service, we make sure our customers have access to information whenever they need it.
</p>
<h1 className='text-3xl font-semibold text-center'>Why Choose Us?</h1>
<p className='text-center py-3'>Our goal is to provide low-cost airline tickets around the world. Join us and travel around the
world for an affordable price.</p>
<p className='font-bold py-3'>Lowest prices</p>
<p>We compare thousands of travel websites and airline deals to provide you with the most
affordable and competitive prices possible.</p>
<p className='font-bold py-3'>An easy-to-use website</p>
<p>An awesome user experience begins with simplicity. We have designed our platform to cater
to the needs of travelers so that they can enjoy smooth, easy, and enjoyable travel.
</p>
<p className='font-bold py-3'>Quick and easy</p>
<p>Our goal is to provide you with an unparalleled flight booking experience that combines
dependability and consistency.
</p>
<p className='font-bold py-3'>24x7 Service</p>
<p>In order to ensure you have a hassle-free and enjoyable experience, our customer service
representatives are available 24/7 to assist you at every stage of your journey.
</p>

</div>


</div>
 
</div>

</div>

<div> 
    <button className='fixed z-10 right-[2%] top-[80%] ml-9 text-small uppercase animate-bounce bg-[#C70039] rounded-[50%] p-4  text-white hover:border-b'><a href="tel:+18883506579">< AiOutlinePhone size={30}/></a></button>
  </div>
<Footer/>
    </div>
 
  </>
  )
}

export default About1
