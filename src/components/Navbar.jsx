import React from 'react';
import '../styles/css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container'>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>Posts</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;