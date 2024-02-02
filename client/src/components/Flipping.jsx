import React, { useState } from 'react';
import './Flipping.css';

const Flipping = ({frontImage,backText}) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
    <div className="front">
      <img src={frontImage} alt="Front" className="w-full h-full object-cover" />
    </div>
    <div className="back">
    <div className='h-full w-[100%] flex justify-center items-center'>
 <div>
 <p className='text-xl'>{backText}</p>
    <button className='bg-white w-[50px] h-[30px] rounded-md text-black'>Book</button>
 </div>
    </div>
      
    </div>
  </div>
  )
}

export default Flipping