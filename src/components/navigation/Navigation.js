import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <div>
      <button className='btn btn-lg link_buttons'>
        <Link to='/'>Home</Link>
      </button>
      <button className='btn btn-lg link_buttons'>
        <Link to='/realestate'>Real Estate</Link>
      </button>
      <button className='btn btn-lg link_buttons'>
        <Link to='/stocks'>Stocks</Link>
      </button>
    </div>
  );
};

export default Navigation;
