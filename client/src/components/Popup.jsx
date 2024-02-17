import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const Popup = () => {
    const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    // Set a timeout to show the pop-up after 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(() => {
      setShowPopUp(true);
    }, 6000);

    // Clear the timeout to prevent the pop-up from showing if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const closePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div className='w-[100%] justify-center z-30 items-center'>
        {/* Your main content goes here */}
        
      {/* Pop-up */}
      {showPopUp && (
      <div className='fixed w-[100%] z-20 top-0 h-screen bg-black/60 flex justify-center items-center '>
          <div className="z-20 top-[25%] w-[347px] lg:w-[600px] h-[400px] fixed flex justify-center items-center rounded-md bg-white">
          <div className="flex justify-between items-center">
          <img className='text-center relative mt-[20px]' src={require('../images/popup1.png')} alt="" />
            {/* <p className='text-red-800 text-3xl'>Call Us !</p> */}
          </div>
           <div className='absolute top-[12%] left-[53%]'>
            <p>Get Full Assistance</p>
           <p className='text-red-800 font-bold text-xl lg:text-5xl'>Call Us !</p>
            <div className='bg-blue-900 rounded-md p-2 lg:p-4 mt-4 text-white'>
            <p className='text-sm lg:text-xl'>+1 (888) 350-6579</p>
            </div>
           </div>
           <div className='text-3xl absolute top-[50%] left-[49%] font-semibold animate-pulse'>Hurry Up!</div>
           <div>
            <p className='text-xl font-semibold absolute top-[63%] left-[50%]'>FLAT 50% OFF</p>
           </div>
           <div className='absolute flex w-[150px] lg:w-[200px] h-[100px] items-center justify-between left-[54%] top-[69%]'>
            <p className='line-through text-red-600'>$400</p>
            <p className=' text-3xl lg:text-5xl font-bold text-blue-950 animate-bounce'>$200</p>
           </div>
        </div>
        <div></div>
        <div onClick={closePopUp} className='fixed z-20 left-[73%] top-[26%] rounded-full shadow-lg bg-slate-50 shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
      </div>
      )}
    </div>
  )
}

export default Popup
