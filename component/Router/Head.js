import * as React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import A from './A';

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/about us" element={<About />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    
    
    </>
  )
}

export default Head