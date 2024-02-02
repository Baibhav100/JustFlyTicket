import React, { useEffect, useState } from 'react';
import Main from './Main';
// import './YourComponent.css'; // Import your Tailwind CSS styles

const Contents= ({handleSubmit,handletrip1,trip1}) => {
  const [startDate,setstartdate]=useState('');
  const [passenger,setpassenger]=useState('');
  const [endDate,setenddate]=useState('');
  const [allTerms, setAllTerms] = useState([]);
  const [dallTerms, dsetAllTerms] = useState([]);
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
  //
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input
    const filteredSuggestions = allTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
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

  return (
  <div>
 <form onSubmit={handleSubmit}>
      <div className='flex w-[200px] p-3 justify-between item-center'>
            <select id="selectOptions" name="selectOptions" value={trip1} onChange={handletrip1} className="mt-1 p-2 w-[200px] border rounded-md">
      <option value="">Select Trip</option>
        <option value="oneway">One Way</option>
        <option value="roundtrip">Round Trip</option>
      </select>
        </div>
        <div className='lg:flex justify-between p-3'>
        <div>
            <label htmlFor="departure" className="block text-sm font-medium text-gray-600">Departure</label>
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
            <label htmlFor="destination" className="block text-sm font-medium text-gray-600">Arrival</label>
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
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Departure Date</label>
            <input type="date" id="date" name="date" value={startDate} onChange={(e)=>setstartdate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className={trip1=='oneway'?'hidden':'block'}>
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Return Date</label>
            <input type="date" id="date" name="date"  value={endDate} onChange={(e)=>setenddate(e.target.value)} className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-600">Passengers</label>
            {/* <input type="number" id="passengers" name="passengers" className="mt-1 p-2 w-full border rounded-md"/> */}
            <select className='mt-1 p-2 w-full border rounded-md'id="dropdown" value={passenger} onChange={(e)=>setpassenger(e.target.value)} >
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
      </select>
          </div>
        </div>
        <div className=' flex w-[100%] justify-end p-9'>
          <button type='submit' className='w-[150px] h-[35px] bg-[#1f2937] text-white cursor-pointer'>Search</button>
        </div>
   </form>

  </div>


  );
};

export default Contents;