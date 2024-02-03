import React, { useEffect, useState } from 'react'
import Pop2 from './Pop2';
import { HiOutlineArrowLongRight, HiOutlineArrowsRightLeft } from 'react-icons/hi2';
import Footer from './Footer';

const Details = ({trip1}) => {
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
    const [startDate,setstartdate]=useState('');
    const [endDate,setenddate]=useState('');
    const sendemail=async(e)=>{
      e.preventDefault();
      const res= await fetch('/customer',{
         method :"POST",
         headers:{
          "Content-Type":"application/json"
         },body:JSON.stringify({
          email,
          user,
          num,
          trip,
          startDate,endDate,
          searchTerm,
          dsearchTerm
         })
      });
      console.log(res);
      //
  setIsEmailSent(true);
      
  };
  const closeModal = () => {
    setIsEmailSent(false);
  };
  //
  
  const [passenger,setpassenger]=useState('');
  const [email,setemail]=useState('');
  const [user,setuser]=useState('');
  const [num,setnum]=useState('')
    const [allTerms, setAllTerms] = useState([]);
    const [dallTerms, dsetAllTerms] = useState([]);
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
    
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input
    const filteredSuggestions = allTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
    // Show suggestions div
    setShowSuggestions(true);
  };
  //
  const [dsuggestions, dsetSuggestions] = useState([]);
  const [dsearchTerm, dsetSearchTerm] = useState('');
  const dhandleInputChange = (event) => {
    const value = event.target.value;
    dsetSearchTerm(value);  

    // Filter suggestions based on the input
    const filteredSuggestions = dallTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    dsetSuggestions(filteredSuggestions);
    dsetShowSuggestions(true);
  };
  //
  //searching 
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [dshowSuggestions, dsetShowSuggestions] = useState(true);
 const [searchTerm, setSearchTerm] = useState('');
 const [suggestions, setSuggestions] = useState([]);

const handleSelectSuggestion = (selectedTerm) => {
  setSearchTerm(selectedTerm);

  setSuggestions([]);
  setShowSuggestions(false);

};
const dhandleSelectSuggestion = (dselectedTerm) => {
  dsetSearchTerm(dselectedTerm);
  dsetSuggestions([]);
  dsetShowSuggestions(false);
};
  const [slide,setSlide]=useState(false);
  const handleslide=()=>{
    setSlide(!slide);
  }

  // conditions
  const [trip,settrip]=useState('');
  const handletrip=(e)=>{
    settrip(e.target.value);
  }
  return (
//     <>
//     <div className="bg-white p-6 rounded-md shadow-md">
// <div className='flex w-[100%] justify-center items-center'>
  
// <div className=' lg:flex lg:w-[70%] justify-center lg:justify-between gap-10'>
//    <div className='w-[100%]'>
//    <div className='flex w-[300px] justify-between items-center'>
//         <p className='text-3xl'>JFK</p>
//         {trip1=="roundtrip"? <HiOutlineArrowsRightLeft/>:<HiOutlineArrowLongRight/>}   
//         <p className='text-3xl'>CUN</p>
//        </div>
//    <div id='#1'>
//       <div>
//         <div className="container mx-auto py-3">

//     {/* <label for="selectOptions" className="block text-sm font-medium text-gray-600">Select Trip</label> */}
//     <div className="inline-block w-full text-gray-700">
//       <select id="selectOptions" name="selectOptions" value={trip} onChange={handletrip} className="mt-1 p-2 w-[200px] border rounded-md">
//       {/* <option value="">Select Trip</option> */}
//       {trip1 == 'oneway' && <option value="oneway">One Way</option>}
//       {trip1 == 'roundtrip' && <option value="roundtrip">Round Trip</option>}
//       </select>
      
//     </div>
//   </div>
//       </div>
//      </div>

//       <form>
      
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label htmlFor="departure" className="block text-sm font-medium text-gray-600">Departure</label>
//             <input type="text" id="departure" name="departure" value={searchTerm} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
//         <div className='bg-[#1f2937] w-[300px] mt-2 absolute z-10'>
//         <ul className={showSuggestions &&searchTerm?"h-20 text-white overflow-y-auto border p-4":'hidden'}>
//         { searchTerm && suggestions.map((term, index) => ( 
//       <section className={handleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => handleSelectSuggestion(term)}>
//        {term}
//       </section>
//      ))}
//       </ul>
//         </div>
//           </div>
//           <div>
//             <label htmlFor="destination" className="block text-sm font-medium text-gray-600">Arrival</label>
//             <input type="text" id="destination" name="destination" value={dsearchTerm} onChange={dhandleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
//          <div className='bg-gray-500/60 w-[300px] absolute z-10'>
//          <ul className={dshowSuggestions && dsearchTerm?"h-20 text-white overflow-y-auto border p-4":"hidden"}>
//         { dsearchTerm && dsuggestions.map((term, index) => ( 
//       <section className={dhandleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => dhandleSelectSuggestion(term)}>
//        {term}
//       </section>
//      ))}
//       </ul>
//          </div>
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label htmlFor="date" className="block text-sm font-medium text-gray-600">Departure Date</label>
//             <input type="date" id="date" name="date" value={startDate} onChange={(e)=>setstartdate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
//           </div>
//           <div className={trip=='oneway'?'hidden':'block'}>
//             <label htmlFor="date" className="block text-sm font-medium text-gray-600">Return Date</label>
//             <input type="date" id="date" name="date"  value={endDate} onChange={(e)=>setenddate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
//           </div>
//           <div>
//             <label htmlFor="passengers" className="block text-sm font-medium text-gray-600">Number of Passengers</label>
//             {/* <input type="number" id="passengers" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
//             <select className='mt-1 p-2 w-full border rounded-md'id="dropdown" value={passenger} onChange={(e)=>setpassenger(e.target.value)} >
//         <option value="">Select Passenger</option>
//         <option value="1">1</option>
//         <option value="2">2 </option>
//         <option value="3">3 </option>
//         <option value="4">4 </option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>

//       </select>
//           </div>
//           <div>
//             <label htmlFor="user" className="block text-sm font-medium text-gray-600">Name</label>
//             <input type="text" id="user" name="user" value={user} onChange={(e)=>setuser(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
//           </div>
//           <div>
//             <label htmlFor="number" className="block text-sm font-medium text-gray-600">Phone Number</label>
//             {/* <input type="number" id="number" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
//             <input type="num" id="num" name="num" value={num} onChange={(e)=>setnum(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//             {/* <input type="number" id="number" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
//             <input type="email" id="num" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
//           </div>

//         </div>

     
//         <button type="submit" onClick={sendemail} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Book</button>
//         <Pop2 alphanumericCode={alphanumericCode} isOpen={isEmailSent} onClose={closeModal}/>
//       </form>
//    </div>
//       <div className=' text-center  items-center mt-4'>
//         <img className='W-[420px] h-[430px] transform transition duration-500 hover:scale-110'src={require('../images/traveling.png')} alt="" />
//       </div>

//     </div>
  
// </div>
//     </div>
//     <Footer/>
//     </>
<>
<div className="bg-white p-6 rounded-md shadow-md ">
<div className='flex w-[100%] justify-center items-center'>
  
<div className=' lg:flex lg:w-[70%] justify-center lg:justify-between gap-20'>
<div className=' text-center  items-center mt-4'>
        {/* <img className='W-[420px] h-[430px] transform transition duration-500 hover:scale-110'src={require('../images/traveling.png')} alt="" /> */}
        <div className='flex w-[300px] justify-between items-center'>
        <p className='text-3xl'>JFK</p>
        {trip1=="roundtrip"? <HiOutlineArrowsRightLeft/>:<HiOutlineArrowLongRight/>}   
        <p className='text-3xl'>CUN</p>
    </div>
        <div className='w-[300px] h-[400px] bg-gray-100 mb-[10px]'>

        </div>
      </div>
   <div className='w-[100%] bg-gray-100 p-10'>
  
   {/* <div id='#1'>
      <div>
        <div className="container mx-auto py-3"> */}

    {/* <label for="selectOptions" className="block text-sm font-medium text-gray-600">Select Trip</label> */}
    {/* <div className="inline-block w-full text-gray-700"> */}
      {/* <select id="selectOptions" name="selectOptions" value={trip} onChange={handletrip} className="mt-1 p-2 w-[200px] border rounded-md">
      {/* <option value="">Select Trip</option> */}
      {/* {trip1 == 'oneway' && <option value="oneway">One Way</option>}
      {trip1 == 'roundtrip' && <option value="roundtrip">Round Trip</option>}
      </select> */}
    {/* </div> */}
  {/* </div>
      </div>
     </div> */}

      <form>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="departure" className="block text-sm font-medium text-gray-600">Departure</label>
            <input type="text" id="departure" name="departure" value={searchTerm} onChange={handleInputChange} className="mt-1 p-2 w-full border rounded-md"/>
        <div className='bg-[#1f2937] w-[300px] mt-2 absolute z-10'>
        <ul className={showSuggestions &&searchTerm?"h-20 text-white overflow-y-auto border p-4":'hidden'}>
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
         <div className='bg-[#1f2937] w-[300px] absolute z-10'>
         <ul className={dshowSuggestions && dsearchTerm?"h-20 text-white overflow-y-auto border p-4":"hidden"}>
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
          <div className={trip=='oneway'?'hidden':'block'}>
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
          
          </div>

        </div> 

     
        <button type="submit" onClick={sendemail} className="bg-[#255eaa] w-[100%] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Book</button>
        <Pop2 alphanumericCode={alphanumericCode} isOpen={isEmailSent} onClose={closeModal}/>
      </form>
   </div>
    </div>
  
</div>
    </div>
</>
  )
}

export default Details