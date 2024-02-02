import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Head from './Head'
import Book from './Book'
import Trip from './Trip'
import Calendar from './Calendar'
import Origin from './Origin'
import Destination from './Destination'
import About1 from './About1'

const Cards = () => {
const currentYear = new Date().getFullYear();
const [day, setDay] = useState('');
const [month, setMonth] = useState('');
const [year, setYear] = useState('');
const [selectedYear, setSelectedYear] = useState(currentYear);
const handleYearChange = (e) => {
  const selected = parseInt(e.target.value, 10);
  setSelectedYear(selected);
}
  const[startDate,setStartDate]=useState('');
  const[endDate,setEndDate]=useState('');

  const [selectedTrip, setSelectedTrip] = useState('');
    const handleTrip = (event) => {
        setSelectedTrip(event.target.value);
      };
      const [Passenger, setPassenger] = useState('');
      const handlePassenger = (event) => {
        setPassenger(event.target.value);
        };

  const handleStartChange = (date) => {
   setStartDate(date);
  
  };
  const handleEndChange = (date) => {
    setEndDate(date);
   
   };
//trips
const [trip,setTrip]=useState('');
const handleTrips=(data)=>{
  setTrip(data.target.value);
};
const [searchTerm, setSearchTerm] = useState('');
const [suggestions, setSuggestions] = useState([]);

const handleSelectSuggestion = (selectedTerm) => {
  setSearchTerm(selectedTerm);
  setSuggestions([]);
};
const [dsearchTerm, dsetSearchTerm] = useState('');
const [dsuggestions, dsetSuggestions] = useState([]);

const dhandleSelectSuggestion = (dselectedTerm) => {
  dsetSearchTerm(dselectedTerm);
  dsetSuggestions([]);
};
//details of customers
const [email,setemail]=useState('');
const [user,setuser]=useState('');
// const [date,setdate]=useState('');
const [num,setnum]=useState('')

  return (
    <BrowserRouter>
<div className=' w-[100%] h-screen  bg-[#11172b]'>
        <Head/>
        <Routes>
            <Route path='/' element={<Book handleYearChange={handleYearChange} currentYear={currentYear} day={day} setDay={setDay} month={month} setMonth={setMonth} selectedYear={selectedYear} setSelectedYear={setSelectedYear}  startDate={startDate}  endDate={endDate}  handleStartChange={handleStartChange} handleEndChange={handleEndChange} selectedTrip={selectedTrip} handleTrip={handleTrip}
            searchTerm={searchTerm} handleSelectSuggestion={handleSelectSuggestion}  setSearchTerm={ setSearchTerm} suggestions={suggestions} setSuggestions={setSuggestions} 
            dsearchTerm={dsearchTerm} dhandleSelectSuggestion={dhandleSelectSuggestion}  dsetSearchTerm={ dsetSearchTerm} dsuggestions={dsuggestions} dsetSuggestions={dsetSuggestions}/>}/>
            <Route path='/trip' element={<Trip trip={trip}  handleTrips={ handleTrips}/>}/>
            <Route path='/calendar' element={<Calendar startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} selectedTrip={selectedTrip} handleTrip={handleTrip} />}/>
            <Route path='/origin' element={<Origin searchTerm={searchTerm} handleSelectSuggestion={handleSelectSuggestion}  setSearchTerm={ setSearchTerm} suggestions={suggestions} setSuggestions={setSuggestions} />}/>
            <Route path='/destination' element={<Destination dsearchTerm={dsearchTerm} dhandleSelectSuggestion={dhandleSelectSuggestion}  dsetSearchTerm={ dsetSearchTerm} dsuggestions={dsuggestions} dsetSuggestions={dsetSuggestions} />}/>
            
        </Routes>
      
 </div>
    </BrowserRouter>
  )
}

export default Cards
