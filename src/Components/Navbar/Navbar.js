import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../index';
import './Navbar.css';

import { Logo } from '../index';


export const Navbar = () => (
  <header>
    <div className="navbar-wrapper">
      <Logo title={'NAF'} />
      <div className="link-wrapper">
        <a href="#">About Us</a>
        <a href="#">Popular Trips</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </header>
);

Navbar.propTypes = {
};

Navbar.defaultProps = {
};
