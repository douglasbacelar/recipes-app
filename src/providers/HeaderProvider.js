import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import HeaderContext from '../context/HeaderContext';

export default function HeaderProvider({ children }) {
  const [endPointAPI, setEndPointAPI] = useState({
    name: '',
    ingredient: '',
    firstLetter: '',
  });
  const [testAPI, setTestAPI] = useState([]);
  const [IsSearch, setIsSearchAPI] = useState(false);
  const values = useMemo(() => ({
    endPointAPI,
    setEndPointAPI,
    testAPI,
    setTestAPI,
    IsSearch,
    setIsSearchAPI,
  }), [IsSearch, testAPI, endPointAPI]);

  return (
    <HeaderContext.Provider value={ values }>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
