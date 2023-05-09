import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import './../styles/main.css';
import './../styles/header.css';
import logo from './../shared/logo.svg';


const Header = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
      <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"} `}>

        <button className='navbar_burger' onClick={handleShowLinks}>
          <span className='burger_bar'></span>
        </button>

        <ul className='navbar_links'>
          <li onClick={handleShowLinks}>
            <NavLink to="/">
            <img className='navbar_logo' src={logo} alt="Logo Circle Products" />
            </NavLink>
          </li>
          <li onClick={handleShowLinks}>
            <NavLink className='navbar_link' to="/">
            Dashboard
            </NavLink>
          </li>
          <li onClick={handleShowLinks}>
            <NavLink className='navbar_link' to="/productsmanagement">
            Products management
            </NavLink>
          </li>
          <li onClick={handleShowLinks}>
            <NavLink className='navbar_link' to="/employeesmanagement">
            Employees management
            </NavLink>
          </li>
          <hr />
          <li onClick={handleShowLinks}>
            <NavLink className='navbar_link' to="/loginlogout">
            Logout
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Header;