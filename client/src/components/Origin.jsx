import React, { useEffect, useState } from 'react'
// import { FaSearch } from "react-icons/fa";
// import axios from 'axios';


const Origin = ({searchTerm,handleSelectSuggestion,setSearchTerm,suggestions,setSuggestions}) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [suggestions, setSuggestions] = useState([]);
  const [close,setclose]=useState(false);
  const [allTerms, setAllTerms] = useState([]);
  
  useEffect(() => {
    // Fetch and parse data from the text file
    fetch('Airports.txt')
      .then(response => response.text())
      .then(data => {
        const parsedData = data.split('\n').filter(term => term.trim() !== '');
        setAllTerms(parsedData);
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
  };

  // const handleSelectSuggestion = (selectedTerm) => {
  //   setSearchTerm(selectedTerm);
  //   setSuggestions([]);
  // };
  
  return (
 <div>
     <div className='fixed w-[100%] h-screen top-0 left-0 bg-gray-800 z-999'>
       {/* <button className='text-white float-right bg-red-600 p-3 m-4' onClick={(e)=>{setclose(!close)}}>save</button> */}
        <div className='flex w-[100%] justify-center items-center'>
       <div className='flex gap-2 p-8'>
<div className='text-center'>
<input
  type="text"
  value={searchTerm}
  className='text-center w-[400px] outline-none bg-transparent p-2 border-b text-white'
  onChange={handleInputChange}
  placeholder="Type the origin"
/>
<ul className='overflow-y text-white p-27 ml-6 mr-6'>
  {suggestions.map((term, index) => ( 
    <section className={handleInputChange?'flex cursor-pointer text-center':'hidden'} key={index} onClick={() => handleSelectSuggestion(term)}>
      {term}
    </section>
  ))}
</ul>
</div>
       </div>
        </div>
   </div>
 </div>
  )
}

export default Origin
// // import React, { useState, useEffect } from 'react';

// const Autocomplete = () => {
 


//   return (
    
//   );
// };

// export default Autocomplete;

