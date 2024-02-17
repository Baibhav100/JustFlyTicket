import React from 'react'
import Modal from 'react-modal';

const Pop1 = ({isOpen,onClose}) => {
  return (
    <div>
    <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className='flex justify-center items-center w-[100%] h-screen bg-[#1f2937]'>
            <div className='w-[100%]'>
                <img className='text-center' src={require('../images/agent.png')} alt="" />
            
        <p className='p-2 w-[100%] text-justify'>
      We have received your flight management request. One of our customer support representatives will contact you regarding your request. Please wait for us to reply. For quick assistance, please call us at <a href="tel:+18883506579"><b>+1 (888) 350-6579</b></a>.
      </p>
      <div className='w-[100%] flex justify-center items-center mt-6'>
      <button className='bg-red-700 p-2 text-white text-center' onClick={onClose}>Thank You!</button>
      </div>
      </div>
        </div>
    
    </Modal>
  
    </div>
  )
}

export default Pop1
