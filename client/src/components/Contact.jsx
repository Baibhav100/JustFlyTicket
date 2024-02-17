import React, { useState } from 'react'
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
 
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[100%] gap-3 p-11'>
        {/* <div class="relative container bg-[url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)] w-[100%] bg-no-repeat  bg-cover ">
          <div className='bg-black/20 z-10 absolute'></div>
    <form class="max-w-md mx-auto p-4 bg-white/30 shadow-md rounded-md blur-0 ">
      <div class="mb-4">
        <label for="name" class="block  text-sm font-bold mb-2 text-white">Name</label>
        <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-bold mb-2 text-white">Email</label>
        <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
      </div>

      <div class="mb-4">
        <label for="message" class="block text-sm font-bold mb-2 text-white">Message</label>
        <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
    </form>
  </div> */}
 <div >
 <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#1f2937] text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
 </div>
 <div className='bg-[#1f2937] w-[100%] flex justify-between items-center rounded-xl relative'>
  <div className='flex'>
    <div>
      <img src={require('../images/popup1.png')} alt="" />
    </div>
    <div className='text-white'>
      <p className='absolute top-[12%] left-[54%] '>For more queries</p>
      <p className='absolute top-[27%] left-[55%] text-2xl lg:text-4xl font-semibold'>Call Us!</p>
      <div className='absolute  text-center w-[400px] h-[40px] top-[50%] left-0 md:left-[20%] lg:left-[35%] p-2'>
        <h1 className=' sm:text-xl lg:text-3xl font-bold '>+1 (888) 350-6579</h1>
      </div>
    </div>
  </div>

 </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact
