import React, { useState } from 'react'
import DOB from './DOB'
import Pop from './Pop';

const   Detail = ({startDate,endDate,searchTerm,selectedTrip,dsearchTerm,day,setDay,month,setMonth,setSelectedYear,selectedYear,currentYear,handleYearChange}) => {
 
  const [email,setemail]=useState('');
  const [user,setuser]=useState('');
  // const [date,setdate]=useState('');
  const [num,setnum]=useState('')

  //isemailsent
  const [isEmailSent,setIsEmailSent]=useState(false);
  //
  const generateCode = () => {
    const length = 6;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  };
  const alphanumericCode = generateCode();
  //
  const sendemail=async(e)=>{
      e.preventDefault();
      const res= await fetch('/register',{
         method :"POST" ,
         headers:{
          "Content-Type":"application/json"
         },body:JSON.stringify({
          email,
          user,
          day,
          month,
          searchTerm,
          dsearchTerm,
          selectedYear,
          num,
          selectedTrip,
          startDate,endDate,
          alphanumericCode
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
    <div className='py-5 h-[70vh] w-[100%] flex '>
     <div className='w-[50%]'>
     <form>
      <div className='text-white py-3'>
       Passenger Name
      </div>
      <div>
        <input type="text " placeholder='enter your name' name='user' onChange={(e)=>setuser(e.target.value)} />
      </div>
      <div className='text-white py-3'>
        DOB
      </div>
      <div>
       <DOB handleYearChange={handleYearChange}day={day} setDay={setDay} month={month} setMonth={setMonth} selectedYear={selectedYear} setSelectedYear={ setSelectedYear} 
       currentYear={currentYear}
       />
      </div>
      <div className='text-white py-3'>
        Email
      </div>
      <div>
        <input type="email" placeholder=' enter your email'  name='email' onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className='text-white py-3'>
        Phone Number
      </div>
      <div>
        <input type="number" placeholder=' enter your number'  name='num' onChange={(e)=>setnum(e.target.value)} />
      </div>
      <div>
        {/* <button className='text-white mt-4 p-3 bg-[#e51937]'>Submit</button> */}
        <button className='text-white mt-4 p-3 bg-[#e51937]' type="submit" onClick={sendemail}>Submit</button>
        <Pop alphanumericCode={alphanumericCode} isOpen={isEmailSent} onClose={closeModal}/>
      </div>
      </form>
     </div>
    </div>
  )
}

export default Detail
