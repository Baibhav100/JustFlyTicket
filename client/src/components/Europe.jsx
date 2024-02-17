import React, { forwardRef } from 'react'
import europe from '../contents/Europe'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import SearchBooking from './SearchBooking';

const Europe = ({scrolltocomponent}) => {
  // const handleClick=()=>{
  //   scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  // }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%]'>
      {
        europe.map((item)=>(
          <div className='w-[100%]' key={item.id}>
           <div className='bg-white shadow-2xl cursor-pointer hover:scale-105 duration-200' onClick={scrolltocomponent}>
        <div>
         <div>
           <img className='w-[100%] h-[190px]' src={item.image} alt="" />
         </div>
          <div className=' flex w-[100%] justify-between mt-4'>
            <div className='text-gray-800 p-2'>
            <div className='flex justify-start items-center'>
            <div className='text-green-900'><CiLocationOn/></div>
            <p>{item.country}</p>
            </div>
            <p className='text-2xl font-semibold'>{item.place}</p>
            </div>
            <div className='bg-[#ffe03c] w-[70px] h-[30px] flex justify-center items-center'>
              <p className='text-xl'>{item.price}</p>
            </div>
          </div>
        </div>
           
           </div>
          </div>
        )) 
    }
    </div>
  )
};

export default Europe
