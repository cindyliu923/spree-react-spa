import React from 'react';
import logo from '../assets/images/icon.jpg';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav-wrapper red darken-1">
      <div className="nav-wrapper container">
        <Link to="/"><img src={logo} className="brand" alt="logo" /></Link>
        
        <ul className="right">
          <li><a href="#"><i className="large material-icons">shopping_cart</i></a></li>
        </ul>
      </div>
    </nav>  
  )
}

export default Navbar;
