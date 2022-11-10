import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div class='container-fluid'>
        <a class='navbar-brand'>Blog</a>
        <button class='navbar-toggler' type='button'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav'>
            <Link class='nav-link ' to='/'>
              Home
            </Link>
            <Link class='nav-link' to='/about'>
              About
            </Link>
            <Link class='nav-link' to='/contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
