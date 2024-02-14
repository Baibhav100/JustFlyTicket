import React from 'react'
import africa from '../contents/Africa'
import { CiLocationOn } from 'react-icons/ci'

const Africa = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%]'>
    {
      africa.map((item)=>(
        <div className='w-[100%]' key={item.id}>
         <div className='bg-white shadow-2xl'>
      <div>
        <img className='w-[100%] h-[190px]' src={item.image} alt="" />
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
}

export default Africa