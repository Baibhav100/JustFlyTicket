import React from 'react'
import Main from './Main'
import About from './About'
import Footer from './Footer'
import ReviewSection from './ReviewSection'
import Review from './Review'

const Home = ({trip1,handletrip1}) => {
  return (
    <div>
    <Main trip1={trip1} handletrip1={handletrip1}/>
    {/* <About/> */}
    <Review/>
    <Footer/>
    {/* <div className=''>

    </div> */}
    </div>
  )
}

export default Home
