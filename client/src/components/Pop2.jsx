import React from 'react'
import Modal from 'react-modal';
// import {agent} from '../images/agent'
Modal.setAppElement('#root');//set the root element to be accessible
const Pop2 = ({isOpen,onClose,alphanumericCode}) => {
    // const generateCode = () => {
    //     const length = 6;  
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let code = '';
    
    //     for (let i = 0; i < length; i++) {
    //       const randomIndex = Math.floor(Math.random() * characters.length);
    //       code += characters.charAt(randomIndex);
    //     }
    
    //     return code;
    //   };
    //   const alphanumericCode = generateCode();

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className='flex justify-between items-center md:w-[100%] h-screen bg-[#1f2937] text-white'>
            <div className='flex justify-center items-center md:w-[100%] '>
               <div className='w-[50%] md:w-[90%] gap-3 justify-between items-center md:flex '>
              <div>
              <div className='flex justify-center w-full items-center'>
              <img className='text-center w-[120px] h-[120px]' src={require('../images/agent.png')} alt="" />
              </div>
              <p className='p-2 w-full text-sm md:w-[400px] text-justify'>
      Your booking query with <b> reference number</b> {alphanumericCode} has been received. Please make a note of this number for future reference. One of our customer service representatives will contact you to get you the cheapest flight deals on your upcoming trip. For any futher queries, kindly call us at <a href="tel:+18883506579"><b>+1 (888) 350-6579</b></a>
      </p>
      <div className='w-[100%] flex justify-center items-center mt-6'>
      <button className='bg-red-700 p-2 text-white text-center' onClick={onClose}>Thank You!</button>
      </div>
              </div>
               <div className=' w-full md:w-[60%] h-[100px] md:h-[300px] bg-slate-200 flex justify-center items-center my-3'>
                <p className=' text-md md:text-3xl text-gray-500'>ADVERTISEMENT</p>
               </div>
               </div>
            
        
    
      </div>
        </div>
    
    </Modal>
  )
}

export default Pop2
