import React, { useState } from 'react'
import Footer from './Footer'
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Contents from './Contents';
import Loading from './Loading';
// import Main from './Main';

const SearchBooking = ({trip1,handletrip1}) => {
  // const [trip1,settrip1]=useState('');
  // const handletrip1=(e)=>{
  //   settrip1(e.target.value);
  // }
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      setLoading(true);
  
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      setLoading(false);
  
      // Use navigate instead of push for navigation
      navigate('/details'); // Replace '/new-page' with the actual path you want to redirect to
    };
  return (
 <div className='w-[100%] h-screen relative'>
     <div className={loading ?'blur-md':'w-[100%] h-screen' }>
    <img className='bg-cover w-[100%] h-screen brightness-50'src="https://wallpapercave.com/wp/wp5240523.jpg" alt="plane" />
      <div className='w-[100%] h-screen absolute top-[30%]'>

        <div className='w-[100%] h-screen flex justify-center items-center'>
         <div className='w-[100%] flex h-screen justify-center item-center'>
         <div className='h-screen'>
         <div className='flex justify-center items-center gap-3 w-[200px] h-[50px] text-white bg-[#1f2937]'>
            <p>Flights</p>
            <GiCommercialAirplane/>
          </div>
          <div className='w-[100%] bg-white h-[250px]'>
          <Contents handleSubmit={handleSubmit} trip1={trip1} handletrip1={handletrip1}/>
          </div>
      

         </div>
          <div>

          </div>
         </div>
        </div>


      </div>
 
      {/* <Footer/> */}
      </div>
      <div className='absolute top-0 left-[50%] z-10'>
        {loading && <Loading />}
        </div>
 </div>
      
  )
}

export default SearchBooking
