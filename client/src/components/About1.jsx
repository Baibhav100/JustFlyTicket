import React from 'react'
import Footer from './Footer'
import Slider from 'react-slick'
import Sliders from './Sliders'
import { MdOutlinePhone } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Popup from './Popup';
import { AiOutlinePhone } from 'react-icons/ai';
const About1 = () => {
  return (
  <>
  <div>
    <Popup/>
  </div>
    <div className='w-[100%] h-screen'>
    <div className='w-[100%] h-screen flex justify-center items-center bg-[url(https://wallpapercave.com/wp/wp12411255.jpg)] bg-cover bg-no-repeat'>

<div className='w-[70%] h-screen  lg:w-[80%] lg:flex justify-center'>
<div className="bg-white/50 w-full h-screen overflow-y-scroll no-scrollbar lg:overflow-hidden">
<div className="container mx-auto py-12 px-4">
<div className="flex flex-col md:flex-row lg:flex-row items-center">
<div className="md:w-1/2 flex">
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-[50%]' src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/01/USE_Pagoda-overlooking-Mount-Fuji-Japan_Credit_GettyImages-520571022.jpg?w=2200&h=880&crop=1" alt="" />
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-[80px] ml-[-60px] rounded-[50%] z-10' src="https://i.insider.com/5d37715d36e03c3ec304ccd6?width=1000&format=jpeg&auto=webp" alt="" />
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-[50%] ml-[-60px]' src="https://hblimg.mmtcdn.com/content/hubble/img/maldives/mmt/destination/t_trp/m_Maldives_l_400_640.jpg?im=Resize=(540,214.5)" alt="" />
</div>
<div className="md:w-1/2 md:ml-8">
<p className="mb-4 text-justify first-letter:text-[50px] first-letter:text-[#1f2937] first-letter:font-bold">
   It consist of a passionate team of travel enthusiasts dedicated to crafting exceptional journeys 
  and making travel dreams come true. With years of experience in the industry, we take pride in our commitment 
  to quality, personalized service, and creating unforgettable memories for our clients.
</p>
<p className="text-gray-700 mb-4 text-justify">
  Our mission is to inspire and empower travelers to explore the world, discover new cultures, and connect with 
  people from all walks of life. Whether you're seeking a relaxing beach getaway, a thrilling adventure, or a 
  cultural immersion, we have the expertise to tailor the perfect itinerary for you.
</p>
</div>
</div>

<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-2">Why Choose JustflyTicket?</h2>

<ul className="list-disc text-gray-700 mb-8 pl-6">
<li>Personalized Travel Experiences</li>
<li>Expert Destination Knowledge</li>
<li>24/7 Customer Support</li>
<li>Exclusive Travel Deals</li>
<li>Community and Sustainability Initiatives</li>
</ul>

<p className="text-gray-700">
JustFlyTicket is more than just a travel company; we are your dedicated travel partners, 
committed to ensuring every journey is seamless, enjoyable, and filled with remarkable moments. 
Let us turn your travel dreams into reality.
</p>
{/* <div className='flex'>
<img className='rounded-[50%] w-[300px] h-[300px]  transform transition-transform duration-300 group-hover:scale-110 'src="https://getwalls.io/wallpapers/310525/2020--04--goa-4k-mobile-2020-1080p-pc.jpg" alt="" />
</div> */}


</div>


</div>
 
</div>

</div>
<div className='flex justify-center items-center w-[100%] bg-slate-400 p-10'>
  <div className='w-[80%]'>
    <div className='flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-8'>
       <div className='w-full h-[200px] hover:scale-105 duration-200 shadow-2xl bg-slate-900 flex justify-center items-center '>
        <div className='w-[80%] h-[80%] '>
          <div className='flex justify-center items-center w-[100%] h-[60%]'><div className='w-[50px] h-[50px] bg-slate-200 rounded-[50%] flex justify-center items-center'>< MdOutlinePhone/></div></div>
          <div className='text-white flex w-[100%] justify-center text-xl font-semibold'>24/7 Assistance</div>
          <div>
      
      </div> 

        </div>
       </div>
       <div className='w-full h-[200px]  hover:scale-105 duration-200 shadow-2xl bg-slate-900 flex justify-center items-center '>
        <div className='w-[80%] h-[80%] '>
          <div className='flex justify-center items-center w-[100%] h-[60%]'><div className='w-[50px] h-[50px] bg-slate-200 rounded-[50%] flex justify-center items-center'><  MdCardTravel/></div></div>
          <div className='text-white flex w-[100%] justify-center text-xl font-semibold'>Affordable Travelling</div>
          <div>
      
      </div> 

        </div>
       </div>
      
       <div className='w-full h-[200px]  hover:scale-105 duration-200 shadow-2xl bg-slate-900 flex justify-center items-center '>
        <div className='w-[80%] h-[80%] '>
          <div className='flex justify-center items-center w-[100%] h-[60%]'><div className='w-[50px] h-[50px] bg-slate-200 rounded-[50%] flex justify-center items-center'>< FaUser/></div></div>
          <div className='text-white flex w-[100%] justify-center text-xl font-semibold'>Travel Experiences</div>
          <div>
      
      </div> 

        </div>
       </div>
      </div>

    </div>

  </div>
</div>
<div> 
    <button className='fixed z-10 right-[2%] top-[80%] ml-9 text-small uppercase animate-bounce bg-[#C70039] rounded-[50%] p-4  text-white hover:border-b'><a href="tel:+18883506579">< AiOutlinePhone size={30}/></a></button>
  </div>
<Footer/>
    </div>
 
  </>
  )
}

export default About1
