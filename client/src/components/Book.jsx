import React, { useState } from 'react'
import { BsDashLg } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import Origin from './Origin';
import Destination from './Destination';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Detail from './Detail';


const Book = ({startDate,endDate,handleStartChange,selectedTrip,handleTrip,Passenger,handlePassenger,sendemail,
  searchTerm,handleSelectSuggestion,setSearchTerm, suggestions, setSuggestions ,
  dsearchTerm,dhandleSelectSuggestion,dsetSearchTerm,dsuggestions,dsetSuggestions,
  day,setDay,month,setMonth,setSelectedYear,selectedYear,currentYear,handleYearChange
}) => {
 
    const[form,setForm]=useState(false);
    const handleform=()=>{
      setForm(!form);
    }
    //email
    
  return (

    <div className='bg-[#11172b] w-[100%] h-screen justify-center '>
     
   <div className=' flex w-[100%] flex-col mt-3 '>
        <div className='flex w-[100%] justify-between text-white items-center mt-[40px]'>
          <Link to='/origin'>  <h1 className='text-center text-3xl text-red-600'>{searchTerm? searchTerm.slice(0,3):'From'}</h1>
          </Link>
            {/* < FaArrowsAltH size={40}/> */}
           <div className='mr-6'>
           {selectedTrip==='roundtrip'?<HiOutlineArrowsRightLeft size={30}/>:<HiOutlineArrowLongRight size={30} />}
           </div>
            <Link to='/destination'><h1 className='text-center text-3xl text-red-600'>{dsearchTerm? dsearchTerm.slice(0,3):'To'}</h1></Link>
          </div>
          <div className='flex w-[100%] justify-between mt-[40px]'>
            <div className='text-white flex-wrap w-[120px]'>
              {searchTerm.slice(4,65)}
            </div>
            <div className='text-white text-right flex-wrap w-[120px]'>
              {dsearchTerm.slice(4,65)}
            </div>

          </div>
      <div className='mt-8 w-[100%]'>
      <select className='w-[100%] outline-0 bg-[#11172b] text-white'id="dropdown" value={selectedTrip} onChange={handleTrip}>
        <option value="oneway">One Way</option>
        <option value="roundtrip">Round Trip</option> 
        {/* <option value="oneway">One-Way</option> */}
        
      </select>
      </div>
      <Link to='/calendar'>
      <div className='flex  mt-9 justify-between text-white'>
      <div>
        {/* {startDate ?<p>{startDate.toDateString()}</p>:<p>Depart</p>} */}
        <p>{startDate?startDate.toDateString():'Departure Date'}</p>
      </div>
       <div className='mt-2 mr-5'>
       <BsDashLg/>
       </div>
       <div className={selectedTrip==='roundtrip'?'block':'text-gray-600'}>
       {/* {endDate ?<p>{endDate.toDateString()}</p>:<p>Return</p>} */}
       <p>{endDate?endDate.toDateString():'Return Date'}</p>
       </div>
      </div>
      </Link>

     <div className='mt-8'>
     <select className='w-[100%] outline-none bg-[#11172b] text-white'id="dropdown" value={Passenger} onChange={handlePassenger}>
        <option value="">Select Passenger</option>
        <option value="1">1</option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>

      </select>

     </div>
     <button className='text-white font-bold mt-10 bg-[#e51937] py-[10px] px-[20px]' onClick={handleform}>Book Now</button>
    <div className={!form?'w-[100%]  my-5':'hidden'}>
      <div className='flex justify-center items-center w-[100%] h-full'>
        <img className='rounded-xl'src={require('../images/Deals.png')} alt="" />
      </div>
   </div>
    <div className={!form?'hidden':'flex'}>
    <Detail startDate={startDate} endDate={endDate} handleYearChange={handleYearChange}searchTerm={searchTerm} dsearchTerm={dsearchTerm} day={day} setDay={setDay} month={month} setMonth={setMonth} setSelectedYear={setSelectedYear} selectedYear={selectedYear} currentYear={currentYear} selectedTrip={selectedTrip}/>
    </div>
   </div>
    </div>
   

  )
}

export default Book
