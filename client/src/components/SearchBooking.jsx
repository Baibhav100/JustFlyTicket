import React, { useState } from 'react'
import Footer from './Footer'
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';
import Loading from './Loading';
// import Main from './Main';

const SearchBooking = ({trip1,handletrip1}) => {
  return (
 <div className='w-[100%] h-screen relative'>
    <div>
    <img className='bg-cover w-[100%] h-screen brightness-50'src="https://wallpapercave.com/wp/wp5240523.jpg" alt="plane"/>
      <div className='w-[100%] h-screen absolute top-0 lg:top-[30%]'>
        <div className='w-[100%] h-screen flex justify-center items-center'>
         <div className='w-[100%] flex h-screen justify-center item-center'>
         <div className='h-screen'>
         <div className='flex justify-center items-center gap-3 w-[200px] h-[50px] text-white bg-[#1f2937]'>
            <p>Flights</p>
            <GiCommercialAirplane/>
          </div>
          <div className='w-[100%] bg-white  sm:h-[500px] md:h-[250px]'>
          <Contents trip1={trip1} handletrip1={handletrip1}/>
          </div>
      

         </div>
          <div>

          </div>
         </div>
        </div>


      </div>
 
      {/* <Footer/> */}
      </div>
      {/* <div className='absolute top-0 left-[50%] z-10'>
        {loading && <Loading />}
        </div> */}
 </div>
      
  )
}

export default SearchBooking
