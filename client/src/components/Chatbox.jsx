import React, { useState } from 'react'
// import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";


const Chatbox = () => {
    const[chat,setchat]=useState(false);
    const handlechat=()=>{
        setchat(!chat);
    }
  return (
   <>
   <div onClick={handlechat} className=' text-white flex justify-center items-center bg-gray-900 w-[50px] h-[50px]  rounded-[50%] border-4 fixed z-10 right-[2%] top-[65%] ml-4 '>
    < IoChatbubbleOutline size={20}/>
   </div>
   <div className={chat?'text-2xl font-bold mt-3 bg-gray-600 text-center text-white w-[400px] h-[390px] rounded-lg left-0 lg:left-[66%] fixed z-10 transition-all top-[30%]':'hidden'}>justflyticket</div>
   </>
  )
}

export default Chatbox;