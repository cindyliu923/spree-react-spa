import React from 'react';
import logo from '../assets/images/icon.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCart } from '../cart/api';

const Navbar = () => {
  const dispatch = useDispatch();

  return(
    <nav className="nav-wrapper red darken-1">
      <div className="nav-wrapper container">
        <Link to="/"><img src={logo} className="brand" alt="logo" /></Link>
        
        <ul className="right">
          <li data-target="slide-out" className="sidenav-trigger show-on-large"><Link to="#" onClick={() => dispatch(getCart())}><i className="large material-icons">shopping_cart</i></Link></li>
        </ul>
      </div>
    </nav>  
  )
}

export default Navbar;
