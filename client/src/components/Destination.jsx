import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';


const Destination = ({dsearchTerm,dhandleSelectSuggestion,dsetSearchTerm,dsuggestions,dsetSuggestions}) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [suggestions, setSuggestions] = useState([]);
  const[dallTerms,dsetAllTerms]=useState('')
  
  
  useEffect(() => {
    // Fetch and parse data from the text file
    fetch('Airports.txt')
      .then(response => response.text())
      .then(data => {
        const parsedData = data.split('\n').filter(term => term.trim() !== '');
        dsetAllTerms(parsedData);
      });
  }, []);

  const dhandleInputChange = (event) => {
    const value = event.target.value;
    dsetSearchTerm(value);

    // Filter suggestions based on the input
    const filteredSuggestions = dallTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    dsetSuggestions(filteredSuggestions);
  };

  // const handleSelectSuggestion = (selectedTerm) => {
  //   setSearchTerm(selectedTerm);
  //   setSuggestions([]);
  // };
  
  return (
    <div className='fixed w-[100%] h-screen top-0 left-0 bg-gray-800 z-999'>
        <div className='flex w-[100%] justify-center items-center'>
       <div className='flex gap-2 p-8'>
<div className='text-center'>
<input
  type="text"
  value={dsearchTerm}
  className='text-center w-[400px] outline-none bg-transparent p-2 border-b text-white'
  onChange={dhandleInputChange}
  placeholder="Type the Destination"
/>
<ul className='overflow-y text-white p-27 ml-6 mr-6'>
  {dsuggestions.map((term, index) => ( 
    <section className={dhandleInputChange?'flex cursor-pointer':'hidden'} key={index} onClick={() => dhandleSelectSuggestion(term)}>
      {term}
    </section>
  ))}
</ul>
</div>
       </div>
        </div>
   </div>
  )
}

export default Destination
// // import React, { useState, useEffect } from 'react';

// const Autocomplete = () => {
 


//   return (
    
//   );
// };

// export default Autocomplete;

