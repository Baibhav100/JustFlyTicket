import React from 'react'


const Airlines = () => {
  return (  
<div>
  {/* another section */}
  <div className="bg-gray-100">

<div className="container mx-auto p-8 bg-slate-400">

 
  <section className="text-center">
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Famous Airlines</h2>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
      <div className="bg-white rounded-[50%] shadow-md flex justify-center items-center w-full">
        <div className="flex-shrink-0 flex justify-center items-center w-[100px] md:w-[260px] lg:w-[300px] h-[300px]">
          <img  className='rounded-[50%]' src={require('../images/alaska_airlines.jpg')} alt="Team Member 1"/>
        </div>
       
      </div>

     
      <div className="bg-white rounded-[50%] shadow-md flex justify-center items-center w-full">
        <div className="flex-shrink-0 flex justify-center items-center w-[100px] md:w-[260px] lg:w-[300px] h-[300px]">
          <img src={require('../images/american_airlines.jpg')} alt="Team Member 2" className="rounded-full mx-auto"/>
        </div>
        {/* <h3 className="text-xl font-semibold mb-2">New York</h3> */}
      </div>

     
      <div className="bg-white  rounded-[50%] shadow-md flex justify-center items-center w-full">
        <div className="flex-shrink-0 flex justify-center items-center w-[100px] md:w-[260px] lg:w-[300px] h-[300px]">
          <img src={require('../images/hawa_airlines.jpg')} alt="Team Member 3" className="rounded-full mx-auto"/>
        </div>
        {/* <h3 className="text-xl font-semibold mb-2">Miami</h3> */}
      </div>

      <div className="bg-white  rounded-[50%] shadow-md flex justify-center items-center w-full">
        <div className="flex-shrink-0 flex justify-center items-center  w-[100px] md:w-[260px] lg:w-[300px] h-[300px]">
          <img src={require('../images/united_airlines.jpg')} alt="Team Member 3" className="rounded-full mx-auto"/>
        </div>
        {/* <h3 className="text-xl font-semibold mb-2">Miami</h3> */}
      </div>
    </div>
  </section>

</div>

</div>

</div>

  )
}

export default Airlines
