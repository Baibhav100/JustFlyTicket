import React, { useEffect, useState } from 'react'
import { AiOutlinePhone } from 'react-icons/ai';
import Pop from './Pop';
import Pop2 from './Pop2';
import SearchBooking from './SearchBooking';
import Aeroplane from './Aeroplane';
import Popup from './Popup';
import Places from './Places';
import { Outlet } from 'react-router';
import { FaShieldAlt } from "react-icons/fa";
// import Ripple from './Ripple';

const Main = ({trip1,handletrip1, searchTerm ,suggestions ,
  startDate, setstartdate, endDate, setenddate,
  showSuggestions ,dshowSuggestions ,dsearchTerm, dsuggestions,
   dhandleSelectSuggestion ,handleSelectSuggestion,
  allTerms, setAllTerms ,dallTerms, dsetAllTerms,dhandleInputChange, handleInputChange}) => {
  // console.log('trip1 in main:', trip1);
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
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
//   //sending email
// const [startDate,setstartdate]=useState('');
// const [endDate,setenddate]=useState('');
// const [passenger,setpassenger]=useState('');
// const [email,setemail]=useState('');
// const [user,setuser]=useState('');
// const [num,setnum]=useState('')
//   const [allTerms, setAllTerms] = useState([]);
//   const [dallTerms, dsetAllTerms] = useState([]);
//   //
//   useEffect(() => {
//     // Fetch and parse data from the text file
//     fetch('Airports.txt')
//       .then(response => response.text())
//       .then(data => {
//         const parsedData = data.split('\n').filter(term => term.trim() !== '');
//         setAllTerms(parsedData);
//         dsetAllTerms(parsedData);

//       }); 
//   }, []);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     // Filter suggestions based on the input
//     const filteredSuggestions = allTerms.filter(term =>
//       term.toLowerCase().includes(value.toLowerCase())
//     );

//     setSuggestions(filteredSuggestions);
//     // Show suggestions div
//     setShowSuggestions(true);
//   };
//   //
//   const [dsuggestions, dsetSuggestions] = useState([]);
//   const [dsearchTerm, dsetSearchTerm] = useState('');
//   const dhandleInputChange = (event) => {
//     const value = event.target.value;
//     dsetSearchTerm(value);  

//     // Filter suggestions based on the input
//     const filteredSuggestions = dallTerms.filter(term =>
//       term.toLowerCase().includes(value.toLowerCase())
//     );

//     dsetSuggestions(filteredSuggestions);
//     dsetShowSuggestions(true);
//   };
//   //
//   //searching 
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const [dshowSuggestions, dsetShowSuggestions] = useState(true);
//  const [searchTerm, setSearchTerm] = useState('');
//  const [suggestions, setSuggestions] = useState([]);

// const handleSelectSuggestion = (selectedTerm) => {
//   setSearchTerm(selectedTerm);

//   setSuggestions([]);
//   setShowSuggestions(false);

// };
// const dhandleSelectSuggestion = (dselectedTerm) => {
//   dsetSearchTerm(dselectedTerm);
//   dsetSuggestions([]);
//   dsetShowSuggestions(false);
// };
//   const [slide,setSlide]=useState(false);
//   const handleslide=()=>{
//     setSlide(!slide);
//   }

  // conditions

  return (

<div>
  <div>
    <Popup/>
  </div>
  <div className='hidden lg:block'>
  {/* <Aeroplane/> */}
  </div>
<div className='flex w-[100%] justify-center items-center '>
<div className='w-[100%] flex justify-center items-center'>
<img className='w-[70%] text-center bg-contain sm:h-200px md:h-[400px] lg:h-[700px]'src={require('../images/banner.jpeg')} alt=""/>
</div>
</div>
<div className='bg-[#1f2937] p-2 text-white flex justify-initial items-center w-[100%]' id='book'>
     <div className="text-2xl font-semibold mb-4 ml-[2%] mt-4">Book Your Flights Tickets</div>
     
 </div>
<div>
<div className="bg-white rounded-md shadow-md w-[100%]">
<div className='flex w-[100%] justify-center items-center'>
  
<div className=' lg:flex lg:w-[100%] justify-center'>
  <SearchBooking trip1={trip1} handletrip1={handletrip1}
  startDate={startDate} setstartdate={setstartdate} endDate={endDate} setenddate={setenddate}
   searchTerm={searchTerm} suggestions={suggestions} 
   showSuggestions={showSuggestions} dshowSuggestions={dshowSuggestions} dsearchTerm={dsearchTerm} dsuggestions={dsuggestions
   } dhandleSelectSuggestion={dhandleSelectSuggestion} handleSelectSuggestion={handleSelectSuggestion}
   allTerms={allTerms} setAllTerms={setAllTerms} dallTerms={dallTerms} dsetAllTerms={dsetAllTerms}
   dhandleInputChange={dhandleInputChange} handleInputChange={handleInputChange}/>
    </div>

</div>
    
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] p-[40px]  bg-[#1f2937]'>
   <div className='flex justify-center item-center w-[100%] h-[100%]'>
   <div className='bg-gray-700/90 w-[100%] flex justify-center items-center h-[120px] shadow-2xl'>
      <div className='flex justify-between items-center text-white gap-2 '>
        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-slate-950'>
        <div className='text-white text-3xl'>
        <FaShieldAlt/>
          </div>
        </div>
          <div className='flex justify-center items-center w-[100%] h-full'>
           <div> 
            <p className='text-md font-bold'>Lowest Fares Guaranteed</p>
            <p className='text-sm'> Be sure not to overspend on airfares to any of the countless destinations worldwide. </p></div>
          </div>
      </div>
    </div>
   </div>
   <div className='flex justify-center item-center w-[100%] h-[100%]'>
   <div className='bg-gray-700/90 w-[100%] flex justify-center items-center h-[120px] shadow-2xl'>
      <div className='flex justify-between items-center text-white gap-2 '>
        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-slate-950'>
        <div className='text-white text-3xl'>
        <FaShieldAlt/>
          </div>
        </div>
          <div className='flex justify-center items-center w-[100%] h-full'>
           <div> 
            <p className='text-md font-bold'>Live Support</p>
            <p className='text-sm'> Available 24/7 for any kind of queries before, during or after the trip.</p></div>
          </div>
      </div>
    </div>
   </div>
   <div className='flex justify-center item-center w-[100%] h-[100%]'>
   <div className='bg-gray-700/90 w-[100%] flex justify-center items-center h-[120px] shadow-2xl'>
      <div className='flex justify-between items-center text-white gap-2 '>
        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-slate-950'>
        <div className='text-white text-3xl'>
        <FaShieldAlt/>
          </div>
        </div>
          <div className='flex justify-center items-center w-[100%] h-full'>
           <div> 
            <p className='text-md font-bold'>Lowest Fares Guaranteed</p>
            <p className='text-sm'> Be sure not to overspend on airfares to any of the countless destinations worldwide. </p></div>
          </div>
      </div>
    </div>
   </div>
 
</div>

    {/* popular flight destinations */}
    {/* <div className="mt-2 p-[40px]">
       <h2 className="text-2xl font-semibold mb-4 text-gray-600 text-center">Popular Flight Destinations</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to New York</h3>
         
          <div><img className='rounded-md transform transition duration-500 
                                hover:scale-110'src={require('../images/newyork.jpg')} alt="" /></div>
          <div className="flex items-center justify-between">
           
            <button onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 mt-2 px-3 rounded-md hover:bg-blue-600 transition">
              Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Miami</h3>
        
          <div>
            <img className='rounded-md transform transition duration-500 
                                hover:scale-110' src={require('../images/miami.jpg')}alt="" />
          </div>
          <div className="flex items-center justify-between">
           
            <button onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Amsterdam</h3>
          
          <div>
            <img className='rounded-md transform transition duration-500 
                                hover:scale-110' src={require('../images/amsterdam.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between">
           <button   onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Australia</h3>
          <div>
            <img className='rounded-md transform transition duration-500 hover:scale-110'src={require('../images/australia.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <button  onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition mt-2">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Italy</h3>
          <div>
            <img className='rounded-md transform transition duration-500 hover:scale-110' src={require('../images/italy.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between">
          <button  onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to New York</h3>
          <div><img className='rounded-md transform transition duration-500 
                                hover:scale-110'src={require('../images/newyork.jpg')} alt="" /></div>
          <div className="flex items-center justify-between">
            <button onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 mt-2 px-3 rounded-md hover:bg-blue-600 transition">
              Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Miami</h3>
          <div>
            <img className='rounded-md transform transition duration-500 hover:scale-110' src={require('../images/miami.jpg')}alt="" />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Amsterdam</h3>
          <div>
            <img className='rounded-md transform transition duration-500 
                                hover:scale-110' src={require('../images/amsterdam.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <button   onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Australia</h3>
          <div>
            <img className='rounded-md transform transition duration-500 
                                hover:scale-110'src={require('../images/australia.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between"> 
            <button  onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition mt-2">Book Now</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Flight to Italy</h3>
          <div>
            <img className='rounded-md transform transition duration-500 hover:scale-110' src={require('../images/italy.jpg')} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <button  onClick={()=>scrollToSection('book')} className="bg-blue-500 text-white py-1 px-3 mt-2 rounded-md hover:bg-blue-600 transition">Book Now</button>
          </div>
        </div>
      </div>
      
    </div> */}
    <h2 className="text-2xl font-semibold p-4 text-gray-600 text-center">Most Popular Flight Destinations</h2>
    <Places/>
  
{/* /end */}
  </div>
  <div> 
    <button className='fixed z-10 right-[2%] top-[80%] ml-9 text-small uppercase animate-bounce bg-[#C70039] rounded-[50%] p-4  text-white hover:border-b'><a href="tel:+919365163250">< AiOutlinePhone size={30}/></a></button>
  </div>
</div>
  
  
  )
}

export default Main
  