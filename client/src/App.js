
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

  return (
    <div className="App">
    <Blackscreen/>
   <BrowserRouter>
   <Navbar/>
   {/* <Main/>
    <About/> */}
    {/* <Airlines/> */}
   
   <Routes>
   <Route path='/' element={<Home trip={trip} trip1={trip1} handletrip={handletrip} handletrip1={handletrip1}/>}/>
    <Route path='/about' element={<About1/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/search-booking' element={<SearchBooking trip1={trip1} handletrip1={handletrip1}/>}/>
    <Route path='/details' element={<Details trip1={trip1} />}/>
    <Route path='/loading' element={<Loading/>}/>


   </Routes>
  
   </BrowserRouter>
    </div>
  );
}

export default App;
