import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import HeaderProvider from './provider/HeaderProvider';
import ApiProvider from './provider/ApiProvider';

function App() {
  return (
    <ApiProvider>
      <HeaderProvider>
        <Routes />
      </HeaderProvider>
    </ApiProvider>

  );
}

export default App;
