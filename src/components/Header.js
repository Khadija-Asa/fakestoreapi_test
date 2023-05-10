import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import './../styles/main.css';
import './../styles/header.css';
import logo from './../shared/logo.svg';


const Header = () => {

  // burger show/hide
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
      <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"} `}>

        {/* burger */}
        <button className='navbar_burger' onClick={handleShowLinks}>
          <span className='burger_bar'></span>
        </button>

        {/* menu */}
        <ul className='navbar_links'>
          <li className='navbar_logo' onClick={handleShowLinks}>
            <NavLink to="/">
            <img src={logo} alt="Logo Circle Products" />
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