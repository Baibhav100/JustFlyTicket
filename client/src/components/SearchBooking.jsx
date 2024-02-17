import React, { forwardRef, useEffect, useState } from 'react'
import Footer from './Footer'
import { GiCommercialAirplane } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

// import Main from './Main';

const SearchBooking = forwardRef((
  
  {trip1,handletrip1, searchTerm ,suggestions ,
  startDate, setstartdate, endDate, setenddate,
  showSuggestions ,dshowSuggestions ,dsearchTerm, dsuggestions,
   dhandleSelectSuggestion ,handleSelectSuggestion,
  allTerms, setAllTerms ,dallTerms, dsetAllTerms,dhandleInputChange, handleInputChange},ref
  ) => {
    // const [startDate,setstartdate]=useState('');
    const [passenger,setpassenger]=useState('');  
    // const [endDate,setenddate]=useState('');
    // const [allTerms, setAllTerms] = useState([]);
    // const [dallTerms, dsetAllTerms] = useState([]);  
    const navigate=useNavigate();
   const handleSubmit = () => {
     navigate('/loading'); 
 }

   
    useEffect(() => {
      // Fetch and parse data from the text file
      fetch('Airports.txt')
        .then(response => response.text())
        .then(data => {
          const parsedData = data.split('\n').filter(term => term.trim() !== '');
          setAllTerms(parsedData);
          dsetAllTerms(parsedData);
  
        }); 
    });
  return (
 <>
 <div className='w-[100%] h-[500px] relative'>
    <div ref={ref}>
    <img className='bg-cover object-fill w-[100%] h-[500px] brightness-95'src="https://wallpapercave.com/wp/wp5240523.jpg" alt="plane"/>
      <div className='w-[100%] h-screen absolute top-0'>
        <div className='w-[100%] h-screen flex justify-center items-center'>
         <div className='w-[100%] flex h-screen justify-center item-center'>
         <div className='h-screen'>
         <div className='flex justify-center items-center gap-3 w-[200px] h-[50px] text-white bg-[#1f2937]'>
            <p>Flights</p>
            <GiCommercialAirplane/>
          </div>
          <div className='w-[100%] sm:h-[500px] md:h-[250px]'>
          {/* <Contents trip1={trip1} handletrip1={handletrip1} searchTerm={searchTerm} suggestions={suggestions} 
    showSuggestions={showSuggestions} dshowSuggestions={dshowSuggestions} dsearchTerm={dsearchTerm} dsuggestions={dsuggestions
    } dhandleSelectSuggestion={dhandleSelectSuggestion} handleSelectSuggestion={handleSelectSuggestion}
    allTerms={allTerms} setAllTerms={setAllTerms} dallTerms={dallTerms} dsetAllTerms={dsetAllTerms}
    dhandleInputChange={dhandleInputChange} handleInputChange={handleInputChange}
          /> */}
          <div>
      <form>
      <div className='flex w-[200px] p-3 justify-between item-center '>
            <select id="selectOptions" name="selectOptions" value={trip1} onChange={handletrip1} className="mt-1 p-2 w-[200px] border rounded-md">
      <option value="">Select Trip</option>
        <option value="oneway">One Way</option>
        <option value="roundtrip">Round Trip</option>
      </select>
        </div>
        <div className='lg:flex justify-between gap-6 p-3'>
        <div>
            <label htmlFor="departure" className="block text-sm font-medium text-white">Departure</label>
            <input type="text" id="departure" name="departure" value={searchTerm} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
        <div className='bg-[#1f2937] w-[200px] z-10 mt-3 absolute'>
        <ul className={showSuggestions && searchTerm?"h-20 text-white overflow-y-auto border p-4":'hidden'}>
        { searchTerm && suggestions.map((term, index) => ( 
      <section className={handleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => handleSelectSuggestion(term)}>
       {term}
      </section>
     ))}
      </ul>
        </div>
          </div>
          
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-white">Arrival</label>
            <input type="text" id="destination" name="destination" value={dsearchTerm} onChange={dhandleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
         <div className='bg-[#1f2937] w-[200px] z-10 absolute'>
         <ul className={dshowSuggestions && dsearchTerm?"h-20 text-white overflow-y-auto border p-4":"hidden"}>
        { dsearchTerm && dsuggestions.map((term, index) => ( 
      <section className={dhandleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => dhandleSelectSuggestion(term)}>
       {term}
      </section>
     ))}
      </ul>
         </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-white">Departure Date</label>
            <input type="date" id="date" name="date" value={startDate} onChange={(e)=>setstartdate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className={trip1=='oneway'?'hidden':'block'}>
            <label htmlFor="date" className="block text-sm font-medium text-white">Return Date</label>
            <input type="date" id="date" name="date"  value={endDate} onChange={(e)=>setenddate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          {/* <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-600">Passengers</label>
            {/* <input type="number" id="passengers" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
            {/* <select className='mt-1 p-2 w-full border rounded-md'id="dropdown" value={passenger} onChange={(e)=>setpassenger(e.target.value)} >
        <option value="">Passenger</option>
        <option value="1">1</option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select> */}
          {/* </div> */} 
          <div className=' flex justify-end p-9'>
          <button  onClick={handleSubmit} className='w-[50px] flex justify-center items-center h-[50px] rounded-[50%] border-white bg-[#1f2937] text-white cursor-pointer'>< FaArrowRight/></button>
        </div>
        
        </div>
       
   </form>
          </div>
     

         </div>
         </div>
        </div>

     
      </div>
    
      </div>
      </div>
      
 </div>
 </>
      
  )
});

export default SearchBooking
