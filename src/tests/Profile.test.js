import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import HeaderProvider from '../provider/HeaderProvider';
import ApiProvider from '../provider/ApiProvider';
import Routes from '../Routes';
import Profile from '../pages/Profile';

afterEach(() => {
  cleanup(render);
});
describe('Testa a page Profile.js', () => {
  const profile = 'profile-top-btn';
  test('Testa se ao clicar no botão de Done Recipes é redirecionado para a rota /done-recipes', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>

          <Routes />

        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButton = screen.getByTestId('login-submit-btn');
    userEvent.type(emailInput, 'khallyl@gmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(enterButton);
    const profileBtn = screen.getByTestId(profile);
    userEvent.click(profileBtn);
    const doneBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(doneBtn);
    // Assert
    const profileTitle = screen.getByTestId('page-title');
    expect(profileTitle.innerHTML).toBe('Done Recipes');
  });
  test('Testa se ao clicar no botão de Favorite Recipes é redirecionado para a rota /favorite-recipes', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>

          <Routes />

        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const profileBtn = screen.getByTestId(profile);
    userEvent.click(profileBtn);
    const doneBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(doneBtn);
    // Assert
    const profileTitle = screen.getByTestId('page-title');
    expect(profileTitle.innerHTML).toBe('Favorite Recipes');
  });
  test('Testa se ao clicar no botão de Logout é redirecionado para a rota /', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>

          <Routes />

        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const profileBtn = screen.getByTestId(profile);
    userEvent.click(profileBtn);
    const logoutBtn = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutBtn);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButton = screen.getByTestId('login-submit-btn');
    // Assert
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
  });
});
describe('Profile', () => {
  test('renderiza corretamente', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Profile />
      </Router>,
    );
    const emailElement = screen.getByTestId('profile-email');
    const doneButton = screen.getByTestId('profile-done-btn');
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    const logoutButton = screen.getByTestId('profile-logout-btn');
    expect(emailElement).toBeInTheDocument();
    expect(doneButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(doneButton);
    expect(history.location.pathname).toBe('/done-recipes');
    fireEvent.click(favoriteButton);
    expect(history.location.pathname).toBe('/favorite-recipes');
    fireEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/');
  });
});
