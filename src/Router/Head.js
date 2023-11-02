import * as React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
//import './Header.css';
import About from './About';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Login from './Login';

function Head() {
  return (
    <>
        
        <li>
              <Link to="/" className="links home-link">Home</Link>
              <Link to="/about us">About us</Link>
              <Link to="/page2">Axios</Link>
              <Link to="/page3">Fetch</Link>
              <Link to="/login">Login</Link>
        </li>

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/about us" element={<About />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    
    
    </>
  )
}

export default Head