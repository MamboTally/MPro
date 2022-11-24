import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Landing from './components/pages/Landing';


function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <>
     <Router>
      <Navbar/>
       <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Login' element= {<Login userLogin={userLogin} />} />
        <Route path='/Landing' element= {<Landing />} />
        <Route path='/Registration' element= {<Registration />} />
        </Routes>
      
      </Router>
    </>
      
    
  );
}

export default App;
