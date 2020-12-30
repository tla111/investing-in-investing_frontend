import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './nav.css';

const Navigation = () => {
  return (
    <Nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/realestate' className='nav-link'>
            Real Estate
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/stocks' className='nav-link' href='#'>
            Stocks
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/cars' className='nav-link'>
            Cars
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
