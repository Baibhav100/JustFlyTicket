
import React from 'react'
import { useState,useEffect } from 'react'

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePhone } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

import Card from './Cards';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';

const Blackscreen = () => {
    const [showBlackScreen, setShowBlackScreen]=useState(false);
    const[closeScreen,setCloseScreen]=useState(false)

    const handle=()=>{
        setCloseScreen(true);
       
        
    }
    useEffect(()=>{
       const timeoutId=setTimeout(()=>{
        setShowBlackScreen(true);
       },0);

       return()=>clearTimeout(timeoutId);
      
    },[]);  
  return (
    
   <div className={closeScreen?'hidden':'block'}>
     <div className={showBlackScreen?`md:hidden bg-[#11172b] h-[100vh] w-[100vw] fixed top-0 left-0 z-40`:'hidden'}>
         
     <div className='w-[100%] h-[40px] bg-[#44587b] flex items-center justify-center'>
      <div className='w-[95%] h-[40px] flex justify-between items-center'>
          <div className='flex gap-2 justify-center items-center'>
       
            <div className='bg-[#44587b] w-[100px] flex justify-center items-center gap-1 animate-pulse '>
            <a className='text-white animate-ping'href="tel:+18883506579">< AiOutlinePhone size={20}/></a>
              <p className='text-white'>Call Now</p>
            </div>
          </div>
          <div>
          <div onClick={handle} className='font-bold w-[30px] h-[30px] rounded-[50%] flex justify-center items-center text-white cursor-pointer'>< IoExitOutline size={20}/></div>
          {/* <div className='font-bold w-[30px] h-[30px] rounded-[50%] flex justify-center items-center text-white cursor-pointer'><a href="https://www.globaltravel.live/">< IoExitOutline size={20}/></a></div> */}
          </div>
      </div>
     </div>
     
      <div className='w-[100%] h-[100%] overflow-scroll bg-[#11172b] flex justify-center items-center pt-5'>
        <div className='flex w-[100%] justify-between items-center p-[30px]'>
          <div className=' w-[100%] h-screen flex justify-center items-center'>
            <Card/>
          </div>
        </div>
      </div>
   

    </div>
   </div>

  )
}

export default Blackscreen
