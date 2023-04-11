// Cria teste para cobrir 90% do componente Header.js!
import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Meals from '../pages/Meals';
import HeaderProvider from '../provider/HeaderProvider';
// import Header from '../components/Header';
import ApiProvider from '../provider/ApiProvider';

describe('Testa o componentes do Header.js.', () => {
  test('Testa se o componente é renderizado corretamente!', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <Meals />
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchTopBtn = screen.getByTestId('search-top-btn');
    const profileTopBtn = screen.getByTestId('profile-top-btn');
    const pageTitle = screen.getByTestId('page-title');
    // Assert
    expect(searchTopBtn).toBeInTheDocument();
    expect(profileTopBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  test('Testa se clicar no botão de Search aparece o componente SearchBar', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <Meals />
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchTopBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchTopBtn);
    const searchInput = screen.getByTestId('search-input');
    // Assert
    expect(searchInput).toBeInTheDocument();
  });
  test('Testa se ao clicar no botão de profile, o usuario é redirecionado para a pagina do Profile', () => {
    // Arrange
    const history = createMemoryHistory();
    render(
      <ApiProvider>
        <HeaderProvider>
          <Router history={ history }>
            <Meals />
          </Router>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const profileTopBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileTopBtn);
    // Assert
    expect(history.location.pathname).toBe('/profile');
  });
});
