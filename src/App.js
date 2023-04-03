import React from 'react';
import './App.css';
import Routes from './Routes';
import LoginProvider from './providers/LoginProvider';
import HeaderProvider from './providers/HeaderProvider';

function App() {
  return (
    <HeaderProvider>
      <LoginProvider>
        <Routes />
      </LoginProvider>
    </HeaderProvider>
  );
}

export default App;
