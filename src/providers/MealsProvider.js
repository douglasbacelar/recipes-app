import React from 'react';
import PropTypes from 'prop-types';
import MealsContext from '../context/MealsContext';

export default function MealsProvider({ children }) {
  return (
    <MealsContext.Provider value={ values }>
      {children}
    </MealsContext.Provider>
  );
}

MealsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
