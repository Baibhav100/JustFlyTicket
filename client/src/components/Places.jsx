import React, { useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
// import Head1 from './Head1'
import Europe from './Europe'
import SouthAmerica from './SouthAmerica';
import SouthAsia from './SouthAsia';
import MiddleEast from './MiddleEast';
import Africa from './Africa';
import AsiaOceans from './AsiaOceans';
// import Cities from './Cities'

const Places = () => {
  const [activeComponent, setActiveComponent] = useState(<Europe/>);

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  return (
<div className='flex w-[100%] justify-center'>
<div className='w-[80%] justify-center'>
<div className='flex justify-center'>
  <div className='flex flex-wrap justify-center gap-6 text-white'>
  <button className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<Europe/>)}>Europe</button>
  <button className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<SouthAmerica/>)}>South America</button>
  <button className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<SouthAsia/>)}>South Asia</button>
  <button  className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<MiddleEast/>)}>Middle East</button>
  <button  className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<Africa/>)}>Africa</button>
  <button className='bg-[#1f2937] p-2' onClick={()=>handleLinkClick(<AsiaOceans/>)}>Asia & Oceans</button>
  </div>


</div>
<div className='mt-[20px]'>
{activeComponent}</div>
</div>

</div>

  
  )
}

export default Places
