import React from 'react'
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
       <div className="flex flex-col h-[200px]">




<footer className="bg-gray-800 text-white">
  <div className="container mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

   
      <div className="mb-4">
        <h2 className="  mb-4 text-2xl font-bold">JustFlyTicket</h2>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>


      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">Services</h2>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-white">Ticket Booking</a></li>
         
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">Payments Available</h2>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-white">Paypal</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Visa</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Mastercard</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Discover</a></li> 
        </ul>
      </div>
      <div className="mb-4">
        <ul className='flex gap-9'>
        <li><a href="#" className="text-gray-300 hover:text-white"><FaCcPaypal size={40}/></a></li>
          <li><a href="#" className="text-gray-300 hover:text-white"><FaCcVisa size={40}/></a></li>
          <li><a href="#" className="text-gray-300 hover:text-white"><FaCcMastercard size={40}/></a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">< FaCcDiscover size={40}/></a></li> 
        </ul>
      </div>


    </div>
    <hr className="my-6 border-gray-700"/>

    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-300">© 2023 JustFlyTicket All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
        <a href="#" className="text-gray-300 hover:text-white">Sitemap</a>
      </div>
    </div>
  </div>
</footer>

</div>
    </div>
  ) 
}

export default Footer
