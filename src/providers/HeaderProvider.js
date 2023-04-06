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
  const [IsAlert, setIsAlertAPI] = useState('alert');
  const [nameT, setName] = useState('');
  const values = useMemo(() => ({
    endPointAPI,
    setEndPointAPI,
    testAPI,
    setTestAPI,
    IsAlert,
    setIsAlertAPI,
    nameT,
    setName,
  }), [IsAlert, testAPI, endPointAPI, nameT]);

  return (
    <HeaderContext.Provider value={ values }>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
