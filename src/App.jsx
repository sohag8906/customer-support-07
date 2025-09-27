// App.jsx
import React, { useState } from 'react';
import Bannar from './components/Bannar';
import Card from './components/ticketsCard/Card';
import './App.css';
import Fottar from './Fottar';

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <div>
      {/* Navbar */}
      <div className=' bg-white shadow-sm'>
      <div className=" max-w-[1200px] mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
               <li><a>FAQ</a></li>
               <li><a>Changelog</a></li>
               <li><a>Blog</a></li>
               <li><a>Downlod</a></li>
               <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>  
        </div>
        <div className="navbar-end gap-4">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className='btn text-white  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'> <img src="/images/v+ (1).png" alt="" /> New Ticket</a>
      </div>
      </div>

      
      <Bannar inProgressCount={inProgressCount} resolvedCount={resolvedCount}></Bannar> 

      <Card 
        setInProgressCount={setInProgressCount} 
        setResolvedCount={setResolvedCount}></Card> 
        
      <Fottar></Fottar>
    </div>
  );
}

export default App;
