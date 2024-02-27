import React, { forwardRef, useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
// import Head1 from './Head1'
import Europe from './Europe'
import SouthAmerica from './SouthAmerica';
import SouthAsia from './SouthAsia';
import MiddleEast from './MiddleEast';
import Africa from './Africa';
import AsiaOceans from './AsiaOceans';
import Usa from './Usa';
// import Cities from './Cities'

const Places =({scrolltocomponent})=> {
  const [activeComponent, setActiveComponent] = useState(<Europe scrolltocomponent={scrolltocomponent}/>);

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  return (
<>
<div className='flex w-[100%] justify-center'>
<div className='w-[80%] justify-center'>
<div className='flex justify-center'>
  <div className='flex flex-wrap justify-center gap-6 text-white'>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<Europe scrolltocomponent={scrolltocomponent}/>)}>Europe</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<SouthAmerica scrolltocomponent={scrolltocomponent}/>)}>South America</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<SouthAsia scrolltocomponent={scrolltocomponent}/>)}>South Asia</button>
  <button  className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<MiddleEast scrolltocomponent={scrolltocomponent}/>)}>Middle East</button>
  <button  className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<Africa scrolltocomponent={scrolltocomponent}/>)}>Africa</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<AsiaOceans scrolltocomponent={scrolltocomponent}/>)}>Asia & Oceans</button>
  </div>


</div>
<div className='mt-[20px]'>
{activeComponent}</div>
</div>

</div>
{/* domestic flight destinations */}


<div className='flex w-[100%] justify-center mt-[60px]'>

<div className='w-[80%] justify-center'>
{/* <div className='flex justify-center'>
  <div className='flex flex-wrap justify-center gap-6 text-white'>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<Europe scrolltocomponent={scrolltocomponent}/>)}>Europe</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<SouthAmerica scrolltocomponent={scrolltocomponent}/>)}>South America</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<SouthAsia scrolltocomponent={scrolltocomponent}/>)}>South Asia</button>
  <button  className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<MiddleEast scrolltocomponent={scrolltocomponent}/>)}>Middle East</button>
  <button  className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<Africa scrolltocomponent={scrolltocomponent}/>)}>Africa</button>
  <button className='bg-[#1f2937] p-2 rounded-md' onClick={()=>handleLinkClick(<AsiaOceans scrolltocomponent={scrolltocomponent}/>)}>Asia & Oceans</button>
  </div>


</div> */}
<h1 className='text-2xl font-semibold p-4 text-gray-600 text-center'>Most Popular Domestic Flight Destinations</h1>
<div className='mt-[20px]'>
<Usa scrolltocomponent={scrolltocomponent}/>
</div>
</div>

</div>
</>

  )
};

export default Places
