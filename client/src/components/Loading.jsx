import React, { useEffect, useState } from 'react'
// import './Loading.css'
import { useNavigate } from 'react-router';
import Footer from './Footer';

const Loading = () => {
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
  <div className=' flex h-[300px] w-[100%] justify-center items-center'>
    <h2 className='text-2xl md:text-3xl lg:text-4xl'>Fetching all the data....</h2>
    <img  className=" " src={require("../images/flight.png")} alt="" />
   
  </div>
  <div>
    <img className='w-[100%] h-[500px]' src={require("../images/travel.png")} alt="" />
  </div>
  <Footer/>
  </>

  )
}

export default Loading

