import React from 'react';
import PropTypes from 'prop-types';
import './TripSelector.css';
import { BiChevronDown, BiSearch } from 'react-icons/bi';


export const TripSelector = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <div className="trip-selector-wrapper">
      <div className="group-btn first">
        <div>
          <label>Where to go</label>
          <BiChevronDown />
        </div>
      </div>
      <div className="group-btn">
        <div>
          <label>When to go</label>
          <BiChevronDown />
        </div>
      </div>
      <div className="group-btn last">
        <div>
          <></>
          <label>Search</label>
          <BiSearch style={{paddingLeft: '1em'}} />
        </div>
      </div>
    </div>
  );
};

TripSelector.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TripSelector.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
