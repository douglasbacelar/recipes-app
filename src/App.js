import React from 'react';
import './App.css';
import Routes from './Routes';
import LoginProvider from './providers/LoginProvider';
import HeaderProvider from './providers/HeaderProvider';
import ApiProvider from './providers/ApiProvider';

function App() {
  return (
    <ApiProvider>
      <HeaderProvider>
        <LoginProvider>
          <Routes />
        </LoginProvider>
      </HeaderProvider>
    </ApiProvider>
  );
}

export default App;
