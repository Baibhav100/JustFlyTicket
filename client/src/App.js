
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Airlines from './components/Airlines';
import Blackscreen from './components/Blackscreen';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About1 from './components/About1';
import Home from './components/Home';
import Contact from './components/Contact';
import SearchBooking from './components/SearchBooking';
import { useState } from 'react';
import Details from './components/Details';
import Loading from './components/Loading';
import Europe from './components/Europe';
import Places from './components/Places';
import TermsCondition from './components/TermsCondition';
import Privacy from './components/Privacy';
import FlightDeals from './components/FlightDeals';
// import Download_pdf from './components/Download_pdf';
// import Head1 from './components/Head1';
// import Newsletter from './components/Newsletter';
// import Services from './components/Services';
// import Login from './components/Login';


function App() {
  const [trip1,settrip1]=useState('');
  const handletrip1=(e)=>{
    settrip1(e.target.value);
  }
  const [trip,settrip]=useState('');
  const handletrip=(e)=>{
    settrip(e.target.value);
  }
  //details
  const [allTerms, setAllTerms] = useState([]);
  const [dallTerms, dsetAllTerms] = useState([]);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter suggestions based on the input
    const filteredSuggestions = allTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    // Show suggestions div
    setShowSuggestions(true);
  };
  //
  const [dsuggestions, dsetSuggestions] = useState([]);
  const [dsearchTerm, dsetSearchTerm] = useState('');
  const dhandleInputChange = (event) => {
    const value = event.target.value;
    dsetSearchTerm(value);  

    // Filter suggestions based on the input
    const filteredSuggestions = dallTerms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    dsetSuggestions(filteredSuggestions);
    dsetShowSuggestions(true);
  };
  //
  //searching 
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [dshowSuggestions, dsetShowSuggestions] = useState(true);
 const [searchTerm, setSearchTerm] = useState('');
 const [suggestions, setSuggestions] = useState([]);

const handleSelectSuggestion = (selectedTerm) => {
  setSearchTerm(selectedTerm);

  setSuggestions([]);
  setShowSuggestions(false);

};
const dhandleSelectSuggestion = (dselectedTerm) => {
  dsetSearchTerm(dselectedTerm);
  dsetSuggestions([]);
  dsetShowSuggestions(false);
};
  const [slide,setSlide]=useState(false);
  const handleslide=()=>{
    setSlide(!slide);
  }
  //loading
  //dates
  const [startDate,setstartdate]=useState('');
  const [endDate,setenddate]=useState('');

 
  return (
    <div className="App">
    <Blackscreen/>
   <BrowserRouter>
   <Navbar/>

   <Routes>
   <Route path='/' element={<Home startDate={startDate} setstartdate={setstartdate} endDate={endDate} setenddate={setenddate} trip={trip} trip1={trip1} handletrip={handletrip} handletrip1={handletrip1}
   searchTerm={searchTerm} suggestions={suggestions} showSuggestions={showSuggestions} dshowSuggestions={dshowSuggestions} dsearchTerm={dsearchTerm} dsuggestions={dsuggestions
   } dhandleSelectSuggestion={dhandleSelectSuggestion} handleSelectSuggestion={handleSelectSuggestion}
   allTerms={allTerms} setAllTerms={setAllTerms} dallTerms={dallTerms} dsetAllTerms={dsetAllTerms}
   dhandleInputChange={dhandleInputChange} handleInputChange={handleInputChange}
   />}/>
    <Route path='/about' element={<About1/>}/>
    <Route path='/contact' element={<Contact/>}/>
    {/* <Route path='/search-booking' element={<SearchBooking />}/> */}

{/* details component */}
    <Route path='/details' element={<Details trip1={trip1} startDate={startDate} setstartdate={setstartdate} endDate={endDate} setenddate={setenddate} handletrip1={handletrip1} searchTerm={searchTerm} suggestions={suggestions} 
    showSuggestions={showSuggestions} dshowSuggestions={dshowSuggestions} dsearchTerm={dsearchTerm} dsuggestions={dsuggestions
    } dhandleSelectSuggestion={dhandleSelectSuggestion} handleSelectSuggestion={handleSelectSuggestion}
    allTerms={allTerms} setAllTerms={setAllTerms} dallTerms={dallTerms} dsetAllTerms={dsetAllTerms}
    dhandleInputChange={dhandleInputChange} handleInputChange={handleInputChange}
    />}/>
    
    <Route path='/loading' element={<Loading trip1={trip1} startDate={startDate} endDate={endDate} searchTerm={searchTerm} dsearchTerm={dsearchTerm}/>}/>
    <Route path='/termsconditions' element={<TermsCondition/>}/>
    <Route path='/flightdeals' element={<FlightDeals/>}/>
    <Route path='/privacy' element={<Privacy/>}/>
    

   </Routes>
  
   </BrowserRouter>
 
    </div>
  );
}

export default App;
