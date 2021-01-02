import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import { Navbar, TripSelector } from '../index';


const headerData = {
  'bg-picture': 'https://source.unsplash.com/hNFK37DvcUI/1920x1080',
  'pre-title': 'Start your adventure',
  'title': 'in Namibia'
}


export const Header = ({ }) => (
  <div className="header-wrapper" style={{
    backgroundImage: `url(${headerData['bg-picture']})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    }}>
    <div className="header-darken" style={{ zIndex: 1}} />
    <div style={{position:'relative', display:'flex', flexDirection:'column', height: '100%', zIndex: 10}} >
      <Navbar />
      <div className="header-title-wrapper">
        <h2>{headerData['pre-title']}</h2>
        <h1>{headerData.title}</h1>
      </div>
      <TripSelector />
      {/* <div style={{position:'absolute', height: '6em', alignSelf: 'center', width: '60%', bottom:'-3em', backgroundColor: 'plum', borderRadius: '5px'}}></div> */}
    </div>
  </div>
);

Header.propTypes = {
};

Header.defaultProps = {
};
