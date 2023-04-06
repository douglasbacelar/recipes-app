import React from 'react';
import './App.css';
import Routes from './Routes';
import LoginProvider from './providers/LoginProvider';
import HeaderProvider from './providers/HeaderProvider';
import ApiProvider from './providers/ApiProvider';
import RecipeProvider from './providers/RecipeProvider';

function App() {
  return (
    <RecipeProvider>
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Routes />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>
    </RecipeProvider>
  );
}

export default App;
