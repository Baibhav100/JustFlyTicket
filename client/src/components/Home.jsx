import React from 'react'
import Main from './Main'
import About from './About'
import Footer from './Footer'
import ReviewSection from './ReviewSection'
import Review from './Review'

const Home = ({trip1,handletrip1,handleSubmit ,searchTerm ,suggestions ,
  startDate, setstartdate, endDate, setenddate,
  showSuggestions ,dshowSuggestions ,dsearchTerm, dsuggestions,
   dhandleSelectSuggestion ,handleSelectSuggestion,
 dhandleInputChange, handleInputChange, allTerms={allTerms}, setAllTerms={setAllTerms}, dallTerms={dallTerms}, dsetAllTerms={dsetAllTerms}}) => {
  return (
    <div>
    <Main trip1={trip1} 
  startDate={startDate} setstartdate={setstartdate} endDate={endDate} setenddate={setenddate} handletrip1={handletrip1} handleSubmit={handleSubmit } searchTerm={searchTerm} suggestions={suggestions} 
    showSuggestions={showSuggestions} dshowSuggestions={dshowSuggestions} dsearchTerm={dsearchTerm} dsuggestions={dsuggestions
    } dhandleSelectSuggestion={dhandleSelectSuggestion} handleSelectSuggestion={handleSelectSuggestion}
    allTerms={allTerms} setAllTerms={setAllTerms} dallTerms={dallTerms} dsetAllTerms={dsetAllTerms}
    dhandleInputChange={dhandleInputChange} handleInputChange={handleInputChange}
    
    />
    {/* <About/> */}
    <Review/>
    <Footer/>
    {/* <div className=''>

    </div> */}
    </div>
  )
}

export default Home
