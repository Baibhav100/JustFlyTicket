import React, { useState } from 'react';
import YYYY from './YYYY';

const DateOfBirthPicker = ({day,setDay,month,setMonth,setYear,Year,selectedYear, setSelectedYear, 
  currentYear,handleYearChange}) => {
  // const [day, setDay] = useState('');
  // const [month, setMonth] = useState('');
  // const [year, setYear] = useState('');
//   const[YY,setYY]=useState(false);
//   const handleyear=()=>{
//     setYY(!YY);
//   }

  const handleInputChange = (e) => {
    const dateValue = e.target.value;
    
    // Split the date value (assuming it's in 'YYYY-MM-DD' format)
    const [selectedYear, selectedMonth, selectedDay] = dateValue.split('-');

    // Update state
    setYear(selectedYear);
    setMonth(selectedMonth);
    setDay(selectedDay);
  };
  //dates
  // const currentYear = new Date().getFullYear();
  // const [selectedYear, setSelectedYear] = useState(currentYear);

  // const handleYearChange = (e) => {
  //   const selected = parseInt(e.target.value, 10);
  //   setSelectedYear(selected);
  // }
//
  return (
    <div className='flex gap-3'>
      <div>
          <select className='w-[100%] outline-none bg-[#11172b] text-white'id="dropdown" value={month} name='month' onChange={(e) => setMonth(e.target.value)}>
        <option value="Jan">Jan</option>
        <option className='hidden' value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>

      </select>
      </div>

      <div>
{/*        
        <input
          type="text"
          className='w-[50px]'
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        /> */}
        <select className='w-[100%] outline-none bg-[#11172b] text-white'id="dropdown" value={day} name='day' onChange={(e) => setDay(e.target.value)}>
        <option value="01">01</option>
        <option className='hidden' value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>


      </select>
      </div>

     <div>
        {/* <div className='text-white cursor-pointer'onClick={handleyear}>Years</div> */}
        {/* <div className={YY?'flex':'hidden'}> */}
        <div>
        {/* <input
          type="text"
          className='w-[50px]'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        /> */}
        <YYYY selectedYear={selectedYear} currentYear={currentYear} setSelectedYear={setSelectedYear}  handleYearChange={handleYearChange}/>
      </div>
     </div>
    </div>
  );
};

export default DateOfBirthPicker;
