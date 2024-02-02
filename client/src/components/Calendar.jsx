// import React, { useState } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({startDate,endDate,handleEndChange,handleStartChange,selectedTrip,handleTrip}) => {
  // // const [selectedDate, setSelectedDate] = useState(new Date());
  // const[startDate,setStartDate]=useState(new Date());
  // const[endDate,setEndDate]=useState(new Date());


  // const handleStartChange = (date) => {
  //  setStartDate(date);
  
  // };
  // const handleEndChange = (date) => {
  //   setEndDate(date);
   
  //  };

  return (
    <div className='bg-gray-700 w-[100%] h-screen fixed top-0 left-0 '>
   <div className='flex justify-center flex-col h-screen items-center'>
    <div>
    <h2 className='text-white'>Departure Date</h2>
      <Calendar
        onChange={handleStartChange}
        value={startDate} //nothing
   
       />
     
    </div>
    <div className={selectedTrip==='roundtrip'?'block':'hidden'}>
    <h2 className='text-white'>Return</h2>
      <Calendar
        onChange={handleEndChange}
        value={endDate}
      />
   
    </div>
    
    <button className='bg-red-800 text-white p-4'>Save</button>
   </div>
   
    </div>
  );
};

export default MyCalendar;
