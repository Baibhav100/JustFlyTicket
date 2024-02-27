import React, { useState } from 'react'
// import Image from 'next/image'
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import{ FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { AiOutlinePhone } from "react-icons/ai";
import {MdOutlineAirplanemodeActive } from 'react-icons/md';
const Navbar = () => {

  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='w-full h-20 z-20 shadow-xl top-0 left-0 bg-[#1f2937] 'id='1'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <div className='flex'>
      <h2 className='sm:text-2xl md:text-3xl text-xl text-white font-bold'><Link to="/">JustFlyTicket</Link></h2>
       <div className='text-white transform rotate-90'><MdOutlineAirplanemodeActive /></div>
      </div>
        <div>
          <ul className='hidden md:flex text-sm'>
              <div className='flex w-[100%] justify-center items-center gap-2'>
                <p className='text-white text-[9px] text-center'>contact us at</p>
                 
                 <p className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>+1 (888) 350-6579</p>
                
                </div>        
              <li className='ml-10 text-small hover:border-b text-white cursor-pointer'><Link to='/'>Home</Link></li>
     
              <li className='ml-10 text-small  hover:border-b text-white cursor-pointer'><Link to='/about'>About</Link></li>
        
              <li className='ml-10 text-small  hover:border-b text-white cursor-pointer'><Link to='/contact'>ContactUs</Link></li>
          
            
             
              {/* <li className='ml-9 text-small uppercase animate-pulse bg-red-600 rounded-[50%] p-2  text-white hover:border-b'><a href="tel:+919365163250">< AiOutlinePhone size={30}/></a></li> */}
        
            
            {/* <Link href='/'>
              <li className='ml-10 text-small uppercase hover:border-b'>Project</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-small uppercase hover:border-b'>Contacts</li>
            </Link> */}

             {/* <a className='text-white'href="tel:+919365163250">< AiOutlinePhone size={30}/></a> */}
          </ul>
          <div onClick={handleNav}className='md:hidden'>
            <AiOutlineMenu className='text-white' size={25} />
          </div>
        </div>
      </div>

      <div className={nav?'md:hidden fixed z-20 left-0 top-0 w-full h-screen bg-black/70 text-white':''}>
        <div className={nav?'fixed z-30 left-0 top-0 w-[75%] sm:w-[45%] h-screen text-white bg-[#1f2937] p-3 ease-in duration-500':
      'fixed left-[-100%] top-0 p-3 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <p className='text-2xl'>JustFlyTicket</p>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-400 my-3'>
              <p className='w-[85%] md:w-[90%] p-4'>Book Your Ticket </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
         
              <li className='text-small uppercase hover:border-b p-4'><Link to='/'>Home</Link></li>
          
          
              <li className='text-small uppercase hover:border-b p-4'><Link to='/about'>About</Link></li>
        
         
              <li className=' text-small uppercase hover:border-b p-4'><Link to='/contact'>ContactUs</Link></li>
         
           {/* <a href="#">< AiOutlinePhone size={30}/> Call</a> */}
            {/* <Link href='/'>
              <li className='text-small uppercase hover:border-b p-4'>Project</li>
            </Link>
            <Link href='/'>
              <li className='text-small uppercase hover:border-b p-4'>Contacts</li>
            </Link> */}
            </ul>
            {/* <div className='pl-4 pt-20 '>
              <p className='uppercase tracking-wide text-[#4d4dcd]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                <a href='https://www.linkedin.com/in/baibhav-rajkumar-3893a5240/'><FaLinkedinIn/></a> 
              </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
              <a href='https://github.com/'><FaGithub /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                <AiOutlineMail/>
                </div>
               
              </div>
            </div> */}
          </div>

        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Navbar