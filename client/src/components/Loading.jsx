import React, { useEffect, useState } from 'react'
// import './Loading.css'
import { IoIosAirplane } from "react-icons/io";
import { useNavigate } from 'react-router';
import Footer from './Footer';

const Loading = ({trip1,startDate,endDate,searchTerm,dsearchTerm}) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Display the current page for 5 seconds (5000 milliseconds)
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
useEffect(()=>{
  if (redirect)
  {
    navigate('/details');
  }
},[redirect,navigate]);
  return (
  <>
  {/* <div className=' flex h-[300px] w-[100%] justify-center items-center'>
    <h2 className='text-sm md:text-3xl lg:text-4xl'>Searching best flight deals...</h2>
    <img  className="w-[100px] lg:w-[400px]" src={require("../images/flight.png")} alt="" />
   
  </div>
  <div>
    <img className='w-[100%] h-[200px] lg:h-[500px]' src={require("../images/travel.png")} alt="" />
  </div> */}
<div className=' flex justify-center items-center h-[620px] w-[100%] bg-slate-300'>
<div className='w-[90%] relative shadow-lg'>
<img  className='rounded-lg' src={require("../images/flight_search_banner.png")} alt="" />
<div className='absolute text-white sm:text-4xl md:text-6xl lg:text-8xl top-[38%] left-[30%]'>
< IoIosAirplane />
</div>
<p className='text-white absolute top-[67%] left-[28%]  md:text-2xl lg:text-4xl font-bold'>{trip1}</p>
<h2 className='absolute text-white md:text-2xl lg:text-4xl font-bold top-[14%] left-[8%]'>Searching best flight deals ...</h2>
<p className=' absolute top-[40%] left-[8%] text-white sm:text-3xl md:text-5xl lg:text-7xl font-bold'>{searchTerm.slice(0,3)}</p>
<p className=' absolute top-[40%] right-[44%] text-white sm:text-3xl md:text-5xl lg:text-7xl font-bold'>{dsearchTerm.slice(0,3)}</p>
<div className='absolute top-[69%] w-[100%]  text-white flex'>
  <div className='absolute left-[8%] text-[11px] md:text-[16px] lg:text-[18px]'>
    <p className='font-bold'>Departure Date</p>
    <p>{startDate}</p>
  </div>
  <div className={trip1=='Oneway'?'hidden':'absolute left-[50%] text-[11px] md:text-[16px] lg:text-[18px]'}>
    <p className='font-bold'>Return Date</p>
    <p>{endDate}</p>
  </div>

</div>

</div>
</div>
  {/* <Footer/> */}
  </>

  )
}

export default Loading

