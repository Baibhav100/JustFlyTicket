import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='w-[100%] h-screen'>
        <div class="relative container bg-[url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)] w-[100%] bg-no-repeat  bg-cover ">
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
  </div>
<Footer/>
    </div>
  )
}

export default Contact
