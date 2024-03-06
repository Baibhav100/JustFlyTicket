import React, { useEffect, useState } from 'react'
import Pop2 from './Pop2';
import { HiOutlineArrowLongRight, HiOutlineArrowsRightLeft } from 'react-icons/hi2';
import Footer from './Footer';
import Popup from './Popup';
import { Navigate, useNavigate } from 'react-router';
import { AiOutlinePhone } from 'react-icons/ai';

const Details = ({trip1, searchTerm ,suggestions ,startDate, setstartdate, endDate, setenddate,
  showSuggestions ,dshowSuggestions ,dsearchTerm, dsuggestions,
   dhandleSelectSuggestion ,handleSelectSuggestion,
  allTerms, setAllTerms ,dallTerms, dsetAllTerms,dhandleInputChange, handleInputChange}) => {

    const navigate = useNavigate();

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
    //sending email
    // const [startDate,setstartdate]=useState('');
    // const [endDate,setenddate]=useState('');
    const sendemail1=async(e)=>{
      e.preventDefault();
      const res= await fetch('/customer',{
         method :"POST",
         headers:{
          "Content-Type":"application/json"
         },body:JSON.stringify({
          email,
          user,
          num,
          trip1,
          startDate,endDate,
          searchTerm,
          dsearchTerm,
          passenger,
         })
      });
      console.log(res);
      //
  setIsEmailSent(true);
      
  };
  const closeModal = () => {
    setIsEmailSent(false);
    // Navigate('./Main.jsx')
    navigate('/');
  };
  //
  
  const [passenger,setpassenger]=useState('');
  const [email,setemail]=useState('');
  const [user,setuser]=useState('');
  const [num,setnum]=useState('');
    //
    useEffect(() => {
      // Fetch and parse data from the text file
      fetch('Airports.txt')
        .then(response => response.text())
        .then(data => {
          const parsedData = data.split('\n').filter(term => term.trim() !== '');
          setAllTerms(parsedData);
          dsetAllTerms(parsedData);
  
        }); 
    }, []);
    
  // conditions
  const [trip,settrip]=useState('');
  const handletrip=(e)=>{
    settrip(e.target.value);
  }
  return (

<>
<Popup/>
<div className="bg-white p-6 rounded-md shadow-md flex justify-center items-center w-[100%] ">
<div className='flex w-[100%] justify-center items-center mt-[34px]'>
  
<div className=' lg:flex lg:w-[80%] justify-center lg:justify-between gap-20'>
<div className=' text-center items-center mt-4'>
        <div className='rounded-xl mt-[-40px]  bg-[#00478a] text-white p-[10px]'>
          Call for 24/7 Assistance - +1 (888) 350-6579
        </div>
        {/* <img className='W-[420px] h-[430px] transform transition duration-500 hover:scale-110'src={require('../images/traveling.png')} alt="" /> */}
        <div className='flex w-[300px] lg:w-[400px] justify-between items-center p-6'>
        <div>
        <p className='text-3xl font-bold'>{searchTerm? searchTerm.slice(0,3):'From'}</p>
        <p className='text-gray-800 text-[10px]'>{searchTerm? searchTerm.slice(4,60):''}</p>
        </div>
        {trip1=="roundtrip"? <HiOutlineArrowsRightLeft/>:<HiOutlineArrowLongRight/>}   
      <div>
      <p className='text-3xl font-bold'>{dsearchTerm? dsearchTerm.slice(0,3):'To'}</p>
      <p className='text-gray-800 text-[10px]'>{dsearchTerm? dsearchTerm.slice(4,60):''}</p>
      </div>
    </div>
        <div className=' w-[300px] lg:w-[400px] h-[400px] bg-[#00478a] mb-[10px] flex justify-center shadow-lg'>
          <div className='mt-9 w-[100%]'>
          <h2 className='text-md font-semibold text-white'>Fares at discounted prices!</h2>
         <div className='w-[100%] flex justify-center'>
         <div className='rounded-md p-2 mt-2 bg-white text-gray-900 w-[60%]'> Call For Bookings</div>
         </div>
          <div className='flex w-[100%] h-[100px] mt-[40%] justify-between items-center bg-white'>
            <p className='text-md text-red-500 line-through'>$499</p>
            <p className='text-5xl text-yellow font-bold'>$200 <sup>*</sup></p>          
            </div>
          </div>  
        </div>
      </div>
   <div className='w-[100%] bg-gray-100 p-7 shadow-lg'>
    <div className='justify-between flex text-white w-[100%] bg-[#1f2937] rounded-md p-4'>
      <p className='md:text-xl lg:text-2xl'>Call Now</p>
      <p>+1 (888) 350-6579</p>
    </div>
      <form className='mt-7'>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="departure" className="block text-sm font-medium text-gray-600">Departure</label>
            <input type="text" id="departure" name="departure" placeholder={searchTerm} value={searchTerm} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
        <div className='bg-[#1f2937] w-[300px] mt-2 absolute z-10'>
        <ul className={showSuggestions && searchTerm?"h-20 text-white overflow-y-scroll no-scrollbar border-none p-4":'hidden'}>
        { searchTerm && suggestions.map((term, index) => ( 
      <section className={handleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => handleSelectSuggestion(term)}>
       {term}
      </section>
     ))}
      </ul>
        </div>
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-600">Arrival</label>
            <input type="text" id="destination" name="destination" value={dsearchTerm} onChange={dhandleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
         <div className='bg-[#1f2937] w-[300px] mt-2 absolute z-10'>
         <ul className={dshowSuggestions && dsearchTerm?"h-20 text-white overflow-y-scroll no-scrollbar border-none p-4":"hidden"}>
        { dsearchTerm && dsuggestions.map((term, index) => ( 
      <section className={dhandleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => dhandleSelectSuggestion(term)}>
       {term}
      </section>
     ))}
      </ul>
         </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Departure Date</label>
            <input type="date" id="date" name="date" value={startDate} onChange={(e)=>setstartdate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className={trip1=='oneway'?'hidden':'block'}>
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Return Date</label>
            <input type="date" id="date" name="date"  value={endDate} onChange={(e)=>setenddate(e.target.value)} className="mt-1 p-2 w-full bordz`er rounded-md"/>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-600">Number of Passengers</label>
            <select className='mt-1 p-2 w-full border rounded-md'id="dropdown" value={passenger} onChange={(e)=>setpassenger(e.target.value)} >
        <option value="">Select Passenger</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>

      </select>
          </div>
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-600">Name</label>
            <input type="text" id="user" name="user" value={user} onChange={(e)=>setuser(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-600">Phone Number</label>
            {/* <input type="number" id="number" name="passengers" className="mt-1 p-2 w-full border rounded-md"/>  */}
             <input type="num" id="num" name="num" value={num} onChange={(e)=>setnum(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            {/* <input type="number" id="number" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
            <input type="email" id="num" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          
          </div>

        </div> 

     
        <button type="submit" onClick={sendemail1} className="bg-[#1f2937] w-[100%] text-white py-2 px-4 rounded-md hover:bg-[#1f2937]/90 transition">Book</button>
        <Pop2 
          email={email}
          user={user}
          num={num}
          trip1={trip1}
          startDate={startDate}
          endDate={endDate}
          searchTerm={searchTerm}
          dsearchTerm={dsearchTerm}
        alphanumericCode={alphanumericCode} isOpen={isEmailSent} onClose={closeModal}/>
      </form>
   </div>
    </div>
  
</div>
<div> 
    <button className='fixed z-10 right-[2%] top-[80%] ml-9 text-small uppercase animate-bounce bg-[#C70039] rounded-[50%] p-4  text-white hover:border-b'><a href="tel:+18883506579">< AiOutlinePhone size={30}/></a></button>
  </div>
    </div>
    <Footer/>
</>
  )
}

export default Details