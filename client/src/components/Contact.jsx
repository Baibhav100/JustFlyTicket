import React, { useState } from 'react'
import Footer from './Footer'

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  const [isEmailSent,setIsEmailSent]=useState(false);
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[mess,setmess]=useState('');
//send email
const sendemail2 = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        mess
      })
    });

    if (res.ok) {
      alert("Email has been sent! We will contact you shortly.");
      setIsEmailSent(true);
    } else {
      alert("Failed to send email. Please try again.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email. Please try again.");
  }
};

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[100%] gap-3 p-11'>
        
 <div >
 <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
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
            value={email}
            onChange={(e)=>setemail(e.target.value)}
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
            value={mess}
            onChange={(e)=>setmess(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
          />
        </div>
        <button
          type="submit"
          onClick={sendemail2}
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
      <div className='absolute  text-center w-[400px] h-[40px] top-[50%] left-[15%] md:left-[20%] lg:left-[35%] p-2'>
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
