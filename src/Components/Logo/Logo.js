import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css'

import { GiElephant } from 'react-icons/gi';
import { GiElephantHead } from 'react-icons/gi';


export const Logo = ({ title }) =>  {
  return (
    <div className="logo">
      <GiElephantHead className="logo-img" />
      <h1>{title}</h1>
    </div>
  )
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  title: 'NAF'
};
