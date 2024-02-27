import React, { useState } from 'react'
import Footer from './Footer'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {NewYork,chicago,lasvegas, orlando,denver,miami, fortlauderdale, washington,sanfrancisco,
    boston,atlanta, seattle, pheonix, hawaii, dallas,honolulu, tampa,sandiego,losangeles, huston, unitedstates, london, paris, europe}
 from '../contents/domesticflights';
const FlightDeals = () => {
    const generatePrices = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:NewYork.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices1 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:chicago.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices2 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:lasvegas.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices3 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:orlando.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices4 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:denver.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices5 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:miami.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices6 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:fortlauderdale.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices7 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:washington.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices8 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:sanfrancisco.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices9 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:boston.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices10 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:atlanta.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices11 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:seattle.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices12 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:pheonix.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices13 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:hawaii.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices14 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:dallas.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices15 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:honolulu.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices16 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:tampa.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices17 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:sandiego.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices18 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:losangeles.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices19 = () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:huston.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices20= () => {
        const min = 60;
        const max = 300;
        return Array.from({ length:unitedstates.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices21= () => {
        const min = 200;
        const max = 500;
        return Array.from({ length:london.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices22= () => {
        const min = 200;
        const max = 500;
        return Array.from({ length:paris.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    const generatePrices23= () => {
        const min = 200;
        const max = 500;
        return Array.from({ length:europe.length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };
    //random price
    const [prices, setPrices] = useState(generatePrices());
    const [prices1, setPrices1] = useState(generatePrices1());
    const [prices2, setPrices2] = useState(generatePrices2());
    const [prices3, setPrices3] = useState(generatePrices3());
    const [prices4, setPrices4] = useState(generatePrices4());
    const [prices5, setPrices5] = useState(generatePrices5());
    const [prices6, setPrices6] = useState(generatePrices6());
    const [prices7, setPrices7] = useState(generatePrices7());
    const [prices8, setPrices8] = useState(generatePrices8());
    const [prices9, setPrices9] = useState(generatePrices9());
    const [prices10, setPrices10] = useState(generatePrices10());
    const [prices11, setPrices11] = useState(generatePrices11());
    const [prices12, setPrices12] = useState(generatePrices12());
    const [prices13, setPrices13] = useState(generatePrices13());
    const [prices14, setPrices14] = useState(generatePrices14());
    const [prices15, setPrices15] = useState(generatePrices15());
    const [prices16, setPrices16] = useState(generatePrices16());
    const [prices17, setPrices17] = useState(generatePrices17());
    const [prices18, setPrices18] = useState(generatePrices18());
    const [prices19, setPrices19] = useState(generatePrices19());
    const [prices20, setPrices20] = useState(generatePrices20());
    const [prices21, setPrices21] = useState(generatePrices21());
    const [prices22, setPrices22] = useState(generatePrices22());
    const [prices23, setPrices23] = useState(generatePrices23());
    const toggleArrow = () => {
        // Generate new prices when summary is toggled
        setPrices(generatePrices());        
    };
    const toggleArrow1 = () => {
        // Generate new prices when summary is toggled
        setPrices1(generatePrices1());
    };
    const toggleArrow2 = () => {
        // Generate new prices when summary is toggled
        setPrices2(generatePrices2());
    };
    const toggleArrow3 = () => {
        // Generate new prices when summary is toggled
        setPrices3(generatePrices3());
    };
    const toggleArrow4 = () => {
        // Generate new prices when summary is toggled
        setPrices4(generatePrices4());
    };
    const toggleArrow5= () => {
        // Generate new prices when summary is toggled
        setPrices5(generatePrices5());
    };
    const toggleArrow6= () => {
        // Generate new prices when summary is toggled
        setPrices6(generatePrices6());
    };
    const toggleArrow7= () => {
        // Generate new prices when summary is toggled
        setPrices7(generatePrices7());
    };
    const toggleArrow8= () => {
        // Generate new prices when summary is toggled
        setPrices8(generatePrices8());
    };
    const toggleArrow9= () => {
        // Generate new prices when summary is toggled
        setPrices9(generatePrices9());
    };
    const toggleArrow10= () => {
        // Generate new prices when summary is toggled
        setPrices10(generatePrices10());
    };
    const toggleArrow11= () => {
        // Generate new prices when summary is toggled
        setPrices11(generatePrices11());
    };
    const toggleArrow12= () => {
        // Generate new prices when summary is toggled
        setPrices12(generatePrices12());
    };
    const toggleArrow13= () => {
        // Generate new prices when summary is toggled
        setPrices13(generatePrices13());
    };
    const toggleArrow14= () => {
        // Generate new prices when summary is toggled
        setPrices14(generatePrices14());
    };
    const toggleArrow15= () => {
        // Generate new prices when summary is toggled
        setPrices15(generatePrices15());
    };
    const toggleArrow16= () => {
        // Generate new prices when summary is toggled
        setPrices16(generatePrices16());
    };
    const toggleArrow17= () => {
        // Generate new prices when summary is toggled
        setPrices17(generatePrices17());
    };
    const toggleArrow18= () => {
        // Generate new prices when summary is toggled
        setPrices18(generatePrices18());
    };
    const toggleArrow19= () => {
        // Generate new prices when summary is toggled
        setPrices19(generatePrices19());
    };
    const toggleArrow20= () => {
        // Generate new prices when summary is toggled
        setPrices20(generatePrices20());
    };
    const toggleArrow21= () => {
        // Generate new prices when summary is toggled
        setPrices21(generatePrices21());
    };
    const toggleArrow22= () => {
        // Generate new prices when summary is toggled
        setPrices22(generatePrices22());
    };
    const toggleArrow23= () => {
        // Generate new prices when summary is toggled
        setPrices23(generatePrices23());
    };
    // const[arrow,setarrow]=useState(false);
  return (
  <>
    <div className='w-[100%] bg-[#0b3d66]'>
        <h1 className='text-3xl text-center font-semibold text-white p-5'>Domestic Flight Destinations</h1>
    <div className='flex justify-center w-[100%] h-screen'>
        <div className='w-[80%] bg-white mt-3  mb-[6%] shadow-xl overflow-y-scroll no-scrollbar p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] text-black'>

            <details className='text-[14px] '>
            
            <summary  onClick={toggleArrow} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to New York <FaChevronDown /></span>
            </summary>
            
                  {NewYork.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices[index]}</p>
                  </div>
                ))}
        
           
        </details>

        
        <details className='text-[14px]'>
            
            <summary onClick={toggleArrow1} className='cursor-pointer font-bold text-black hover:text-white hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Chicago  <FaChevronDown /></span>
            </summary>
            {chicago.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices1[index]}</p>
                  </div>
                ))}
            </details>

            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow2} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Las Vegas  <FaChevronDown /></span>
            </summary>
            {lasvegas.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices2[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow3} className='cursor-pointer font-bold  text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Orlando  <FaChevronDown /></span>
            </summary>
            {orlando.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices3[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow4} className='cursor-pointer font-bold  text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Denver <FaChevronDown /></span>
            </summary>
            {denver.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices4[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow5} className='cursor-pointer font-bold  text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Miami {<FaChevronDown />}</span>
            </summary>
            {miami.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices5[index]}</p>
                  </div>
                ))}

            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow6} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Fort Lauderdale {<FaChevronDown />}</span>
            </summary>
            {fortlauderdale.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices6[index]}</p>
                  </div>
                ))}
          
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow7} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Washington,D.C{<FaChevronDown />}</span>
            </summary>
            {washington.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices7[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow8} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to San Francisco{<FaChevronDown />}</span>
            </summary>
            {sanfrancisco.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices8[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow9} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Boston{<FaChevronDown />}</span>
            </summary>
            {boston.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices9[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
        <summary onClick={toggleArrow10} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Atlanta{<FaChevronDown />}</span>
            </summary>
            {atlanta.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices10[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
        <summary onClick={toggleArrow11} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Seattle{<FaChevronDown />}</span>
            </summary>
            {seattle.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices11[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
        <summary onClick={toggleArrow12} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Pheonix{<FaChevronDown />}</span>
            </summary>
            {pheonix.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices12[index]}</p>
                  </div>
                ))}
            </details>
            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow13} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Hawaii{<FaChevronDown />}</span>
                </summary>
                {hawaii.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices13[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow14} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Dallas{<FaChevronDown />}</span>
                </summary>
                {dallas.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices14[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow15} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Honolulu{<FaChevronDown />}</span>
                </summary>
                {honolulu.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices15[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow16} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Tampa{<FaChevronDown />}</span>
                </summary>
                {tampa.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices16[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow17} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to San Diego{<FaChevronDown />}</span>
                </summary>
                {sandiego.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices17[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow18} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Los Angeles{<FaChevronDown />}</span>
                </summary>
                {losangeles.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices18[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow19} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to Huston{<FaChevronDown />}</span>
                </summary>
                {huston.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                        <p>${prices19[index]}</p>
                      </div>
                    ))}
                </details>
                <details className='text-[14px]'>
            
            <summary onClick={toggleArrow20} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
                <span className='flex justify-between'>Flight to United States{<FaChevronDown />}</span>
                </summary>
                {unitedstates.map((place,index) => (
                      <div className='flex justify-between w-[100%]'>
                          <p key={index}>{place}</p>
                          <p>${prices20[index]}</p>
                      </div>
                    ))}
                </details>
            </div>
    

        </div>
    </div>
    <h1></h1>
    <h1 className='text-3xl text-center font-semibold text-white p-5'>International Flight Destinations</h1>
    <div className='flex justify-center w-[100%] h-full'>
        <div className='w-[80%] bg-white mt-3  mb-[6%] shadow-xl overflow-y-scroll no-scrollbar p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] text-black'>

            <details className='text-[14px] '>
            
            <summary  onClick={toggleArrow21} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to London <FaChevronDown /></span>
            </summary>
            
                  {london.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices21[index]}</p>
                  </div>
                ))}
        
           
        </details>

        
        <details className='text-[14px]'>
            
            <summary onClick={toggleArrow22} className='cursor-pointer font-bold text-black hover:text-white hover:bg-slate-600 p-2 list-none'>
            <span className='flex justify-between'>Flight to Paris  <FaChevronDown /></span>
            </summary>
            {paris.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices22[index]}</p>
                  </div>
                ))}
            </details>

            <details className='text-[14px]'>
            
            <summary onClick={toggleArrow23} className='cursor-pointer font-bold text-black hover:text-white  hover:bg-slate-600  p-2 list-none'>
            <span className='flex justify-between'>Flight to Europe<FaChevronDown /></span>
            </summary>
            {europe.map((place,index) => (
                  <div className='flex justify-between w-[100%]'>
                      <p key={index}>{place}</p>
                    <p>${prices23[index]}</p>
                  </div>
                ))}
            </details>
            </div>
            </div>
            </div>
    </div>
   <div >
   <Footer/>
   </div>
  </>
  )
}

export default FlightDeals