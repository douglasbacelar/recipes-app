// Cria teste para cobrir 90% do componente LoginComp.js!

import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import HeaderProvider from '../provider/HeaderProvider';
// import LoginProvider from '../providers/LoginProvider';
// import ApiProvider from '../providers/ApiProvider';

// import LoginComp from '../components/LoginComp';

describe('Testa o componente LoginComp.js.', () => {
  const email = 'email-input';
  const password = 'password-input';
  const login = 'login-submit-btn';
  test('Testa se existe um input para digitar o email', () => {
    // Arrange
    render(

      <HeaderProvider>
        <App />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const emailInput = screen.getByTestId(email);
    // Assert
    expect(emailInput).toBeInTheDocument();
  });
  test('Testa se existe um input para digitar a senha', () => {
    // Arrange
    render(

      <HeaderProvider>
        <App />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const passwordInput = screen.getByTestId(password);
    // Assert
    expect(passwordInput).toBeInTheDocument();
  });
  test('Testa se o botão de entrar começa desabilitado', () => {
    // Arrange
    render(

      <HeaderProvider>
        <App />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const loginButton = screen.getByTestId(login);
    // Assert
    expect(loginButton).toBeDisabled();
  });
  test('Testa se o botão só é habilitado apos inserir um email e senha validos', () => {
    // Arrange
    render(

      <HeaderProvider>
        <App />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(login);
    userEvent.type(emailInput, 'khallyl@gmail.com', {
    });
    userEvent.type(passwordInput, '1234567', {
    });
    expect(loginButton).toBeEnabled();
  });
  test('Testa se ao clicar no botão de Login, o usuario é redirecionado para a rota /meals.', () => {
    // Arrange
    render(

      <HeaderProvider>
        <App />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(login);
    userEvent.type(emailInput, 'khallyl@gmail.com', {
    });
    userEvent.type(passwordInput, '1234567', {
    });
    expect(loginButton).toBeEnabled();
    userEvent.click(loginButton);
    const text = screen.getByText('Meals');
    // Assert
    expect(text).toBeInTheDocument();
  });
});
