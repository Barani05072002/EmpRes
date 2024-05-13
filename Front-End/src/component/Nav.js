import React, { useContext, useRef, useState } from 'react';
import {Link,Outlet} from 'react-router-dom';
import '../styles/Nav.css';
import './empContext';
import empContext from './empContext';

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const home = `/${props.id}/home`
  const employeeList = `/${props.id}/employee-list`
  const profile = `/${props.id}/profile` 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
          Logo
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <Link to={home} className='menu-item'>Home</Link>
        <Link to={employeeList} className='menu-item'>Employee List</Link>
        <Link to={profile} className='menu-item'>Profile</Link>
        <Link to="/" className='menu-item'>Logout</Link>
        <Outlet/>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Nav;
