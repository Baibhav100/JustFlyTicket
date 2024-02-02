import React, { useState } from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Pop1 from './Pop1';

const Trip = ({trip,handleTrips}) => {
  //pop1 usestate
  const [fname,setfname]=useState('');
  const [lname,setlname]=useState('');
  const [confirm,setConfirm]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [isEmailSent,setIsEmailSent]=useState(false);

  const sendemail=async(e)=>{
    e.preventDefault();
    const res= await fetch('/manage',{
       method :"POST" ,
       headers:{
        "Content-Type":"application/json"
       },body:JSON.stringify({
        fname,
        lname,
        email,
        phone,
        confirm
       })
    });
    console.log(res);
    //
setIsEmailSent(true);
    
};

const closeModal = () => {
  setIsEmailSent(false);
};
  return (
    <div className='bg-[#11172b] w-[100%] h-[580px] p-2 text-white'>
      <form action="">
      <p className='text-red-600 my-3'>Find Your Trip</p>
      <div className='mt-10'>
      <select className='px-30 outline-0 bg-[#11172b] text-white text-md'id="dropdown" onChange={handleTrips} value={trip}>
        <option value="Confirmation Number">Airline Confirmation Number</option>
        <option value="Ticket Number">E-Ticket Number</option>
        {/* <option value="oneway">One-Way</option> */}
        
      </select>
      </div>
  
    <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none ' type="text" name='confirm' placeholder="ex. GWZVBF" onChange={(e)=>{setConfirm(e.target.value)}}
          />
      </div>
    <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none ' type="text" name='fname' onChange={(e)=>{setfname(e.target.value)}} placeholder='First Name' />
      </div>
      <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none'type="text" name='lname' onChange={(e)=>{setlname(e.target.value)}} placeholder='Last Name' />
      </div>
      <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none'type="email" name='email' onChange={(e)=>{setemail(e.target.value)}} placeholder='email' />
      </div>
      <div className='mt-6 py-4 border-b'>
        <input className='w-[100%] bg-transparent  outline-none'type="text" name='phone' onChange={(e)=>{setphone(e.target.value)}} placeholder='phone' />
      </div>
    {/* <div className='w-[60px] h-[60px] bg-red-600 flex justify-center items-center rounded-[50%] float-right mt-9' onClick={send}>< IoMdArrowRoundForward/></div> */}
    <button className='w-[60px] h-[60px] bg-red-600 flex justify-center items-center rounded-[50%] float-right mt-9' type="submit" onClick={sendemail}>< IoMdArrowRoundForward/></button>
    <Pop1  isOpen={isEmailSent} onClose={closeModal}/>
      </form>
    </div>
  )
}

export default Trip