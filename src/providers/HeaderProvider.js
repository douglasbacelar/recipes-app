import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import HeaderContext from '../context/HeaderContext';

export default function HeaderProvider({ children }) {
  const [pageName, setPageName] = useState('');

  const values = useMemo(() => ({
    pageName,
    setPageName,
  }), [pageName]);

  return (
    <HeaderContext.Provider value={ values }>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
