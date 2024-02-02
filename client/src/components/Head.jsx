import { Link } from 'react-router-dom'
import React from 'react'

const Head = () => {
  return (
    <div className='flex justify-between w-[100%] text-white '>
        <Link to='/' className='hover:text-red-600'>Book</Link>
        <Link to='/trip' className='hover:text-red-600'>Manage Trip</Link>
      
    </div>
  )
}

export default Head
