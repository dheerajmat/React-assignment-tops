import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <div className='container'>

    
      <div className='gap-5 flex flex-wrap justify-end pt-2 pb-5 pr-10 text-xl'>
      <div className='m-auto justify-start ml-5 text-2xl '>Dheeraj</div>
        <a href=''>Product</a>
        <a href=''>Price</a>
        <a href=''>Support</a>
        <a href=''>Product</a>
      </div>
        
    </div>
    
    </div>
  );
}

export default Navbar;
