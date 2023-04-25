import React from 'react';
import PropTypes from 'prop-types';

function Display({ value }) {
  return (
    <div className="Display div">{value}</div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
