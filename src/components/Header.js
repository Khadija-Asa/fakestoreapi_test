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

        <NavLink to="/">
          <img className='navbar_logo' src={logo} alt="Logo Circle Products" />
        </NavLink>

        <ul className='navbar_links'>
          <li className='navbar_item'>
            <NavLink className='navbar_link' to="/">
            dashboard
            </NavLink>
          </li>
          <li className='navbar_item'>
            <NavLink className='navbar_link' to="/productsmanagement">
            products management
            </NavLink>
          </li>
          <li className='navbar_item'>
            <NavLink className='navbar_link' to="/employeesmanagement">
            employees management
            </NavLink>
          </li>
          <li className='navbar_item'>
            <NavLink className='navbar_link' to="/loginlogout">
            logout
            </NavLink>
          </li>
        </ul>

      </nav>
  );
};

export default Header;