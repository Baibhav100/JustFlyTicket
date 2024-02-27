import React from 'react'
import Footer from './Footer'
import { AiOutlinePhone } from 'react-icons/ai'
import Popup from './Popup'

const TermsCondition = () => {
  return (
<>
  <div>
    <Popup/>
  </div>
    <div className='w-[100%]  bg-slate-500 h-screen'>
    {/* <div className='w-[100%] h-screen flex justify-center items-center bg-[url(https://wallpapercave.com/wp/wp12411255.jpg)] bg-cover bg-no-repeat'> */}
    <div className='w-[100%] h-screen flex justify-center items-center text-black bg-cover bg-no-repeat'>
<div className='w-[90%] h-screen  lg:w-[80%] lg:flex justify-center'>
<div className="bg-white overflow-hidden w-full h-screen overflow-y-scroll no-scrollbar ">
<div className="container mx-auto p-10 ">
  <h1 className='text-center text-3xl font-semibold'>Terms and Conditions</h1>
  <p className='py-3 mt-[9%]'>Welcome to <b>JustFlyTicket</b>, your trusted online platform for flight ticket booking and reservations. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions, which govern the relationship between JustFlyTicket and its users.</p>
  <p className='py-3 font-bold'>Booking and Reservations:</p>
  <p>1. JustFlyTicket is an intermediary between customers and airlines to facilitate flight bookings and reservations.</p>
  <p>2. All bookings made through our platform are subject to availability, airline terms and conditions, and applicable fees.</p>
  <p>3. JustFlyTicket reserves the right to refuse or cancel bookings that violate airline policies or regulatory requirements.</p>
  <p className='font-bold py-3'>Booking Confirmation:</p>
  <p>1. Upon successful completion of a booking, customers will receive a confirmation email containing their itinerary and e-ticket information.
</p>
<p>2. Customers must review their booking confirmation for accuracy and notify JustFlyTicket of any discrepancies or errors within 24 hours of receipt.
</p>
<p className='font-bold py-3'> Payment:</p>
<p>1 Payment for air tickets  booking must be made in full at the time of reservation.</p>
<p>2 Prices listed on our website are inclusive of taxes and fees unless otherwise stated.</p>
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

export default TermsCondition
