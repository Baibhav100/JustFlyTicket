import React from 'react'
import Footer from './Footer'
import Slider from 'react-slick'
import Sliders from './Sliders'

const About1 = () => {
  return (
  <>
    <div className='w-[100%]'>
    <div className='w-[100%] h-screen flex justify-center items-center bg-[url(https://wallpapercave.com/wp/wp12411255.jpg)] bg-cover bg-no-repeat'>

<div className='w-[70%] h-screen  lg:w-[80%] lg:flex justify-center'>
<div className="bg-white/50 w-full h-screen overflow-y-scroll overflow-none lg:overflow-hidden">
<div className="container mx-auto py-12 px-4">
<div className="flex flex-col md:flex-row lg:flex-row items-center">
<div className="md:w-1/2 flex">
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-[50%]' src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/01/USE_Pagoda-overlooking-Mount-Fuji-Japan_Credit_GettyImages-520571022.jpg?w=2200&h=880&crop=1" alt="" />
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-[80px] ml-[-60px] rounded-[50%] z-10' src="https://i.insider.com/5d37715d36e03c3ec304ccd6?width=1000&format=jpeg&auto=webp" alt="" />
<img className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-[50%] ml-[-60px]' src="https://hblimg.mmtcdn.com/content/hubble/img/maldives/mmt/destination/t_trp/m_Maldives_l_400_640.jpg?im=Resize=(540,214.5)" alt="" />
</div>
<div className="md:w-1/2 md:ml-8">
<p className="mb-4 text-justify">
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

<h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose JustflyTicket?</h2>

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
<Sliders/>
<Footer/>
    </div>
 
  </>
  )
}

export default About1
