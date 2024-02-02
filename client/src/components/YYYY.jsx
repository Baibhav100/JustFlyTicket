import React, { useState } from 'react';

const YearSelector = ({selectedYear,currentYear,setSelectedYear,handleYearChange}) => {
  // const currentYear = new Date().getFullYear();
  // const [selectedYear, setSelectedYear] = useState(currentYear);

  // const handleYearChange = (e) => {
  //   const selected = parseInt(e.target.value, 10);
  //   setSelectedYear(selected);

    // Simulate an action when the year changes
    // console.log(`Data for year ${selected} will be fetched and displayed.`);
  // };

  return (
    <div>
      {/* <label>Select Year:</label> */}
      <select className='w-[100%] outline-none bg-[#11172b] text-white'value={selectedYear} name='selectedYear' onChange={handleYearChange}>
        {Array.from({ length: currentYear - 1899 }, (_, index) => (
          <option key={index} value={1900 + index}>
            {1900 + index}
          </option>
        ))}
      </select>

      {/* <p>Selected Year: {selectedYear}</p> */}
    </div>
  );
};

export default YearSelector;
