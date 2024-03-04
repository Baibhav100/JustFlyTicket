import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
// import Flipping from './Flipping';
// import Sliders from './Sliders';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* another section */}
  <div className="bg-gray-100 w-[100%]">
  {/* <h2 className="text-xl md:text-2xl font-semibold mb-8 text-gray-600">Famous Routes</h2>
  <div className='w-[100%] h-[400px] flex justify-center'>
<div className='lg:flex w-[80%] gap-5'>
<Flipping className='w-[300px] h-[300px]'frontImage={require('../images/Paris1.jpg')} backText="Paris"/>
<Flipping frontImage={require('../images/NewYork1.jpg')} backText="Paris"/>
  <Flipping frontImage={require('../images/Miami1.jpg')}  backText="Paris"/>
  <Flipping frontImage={require('../images/Miami1.jpg')} backText="Paris"/>
</div>
</div> */}
<div className="container mx-auto p-8 flex justify-center items-center">
 <div>
 <h2 className="text-xl md:text-2xl font-semibold mb-8 text-gray-600 text-center">Famous Routes</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">


     {/* <Flipping frontImage={require('../images/Paris1.jpg')} backText="Paris"/>
     <Flipping frontImage={require('../images/NewYork1.jpg')} backText="New York"/>
     <Flipping frontImage={require('../images/Miami1.jpg')}  backText="Miami"/>
      <Flipping frontImage={require('../images/tokyo.jpg')} backText="Tokyo"/>
   */}
</div>

 </div>
</div>
 
<div className='mt-5 w-[100%] h-screen flex justify-center items-center bg-slate-900'>
  <Slider {...settings} className='w-[90%]'>
      <div className="w-full  h-62 lg:h-[600px] bg-gray-300 flex items-center justify-center">
      <img className='w-[100%] bg-cover' src="https://e1.pxfuel.com/desktop-wallpaper/842/841/desktop-wallpaper-world-beautiful-places-tourist-places.jpg" alt="" />
      </div>
      <div className="w-full  h-62 lg:h-[600px] bg-gray-400 flex items-center justify-center">
      <img className='w-[100%] bg-cover' src="https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg" alt="" />
      </div>
      <div className="w-full  h-62 lg:h-[600px] bg-gray-500 flex items-center justify-center">
     <img className='w-[100%] bg-cover' src="https://c4.wallpaperflare.com/wallpaper/401/184/1020/beautiful-places-world-wallpaper-preview.jpg" alt="" />
      </div>
    </Slider>
  </div>
{/* <Sliders/> */}
</div>


</div>
    
  )
}

export default About
