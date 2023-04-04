// Cria teste para cobrir 90% do componente SearchBar.js!
import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderProvider from '../providers/HeaderProvider';
import Drinks from '../pages/Drinks';

describe('Testa o componentes do SearchBar.js.', () => {
  test('Testa se acontece um alert ao pesquisar por um ingrediente sem inserir nenhum valor no input', async () => {
    // Arrange
    newAlert.jest.fn();
    render(

      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,

      { wrapper: BrowserRouter },
    );
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const input = screen.getByTestId('search-input');
    userEvent.type(input, 'aaa');
    const fristLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(fristLetter);
    const searchButton = screen.getByTestId('exec-search-btn');
    // Act
    userEvent.click(searchButton);
    // Assert
    expect(newAlert).toHaveBeenCalledTimes(1);
  });
  /* test('Testa se acontece um alert ao pesquisar por um ingrediente sem inserir nenhum valor no input', async () => {
    // Arrange
    const alert = jest.spyOn(window, 'alert');
    alert.mockImplementation(() => {});
    alert();
    render(
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingredientRadio);
    const searchButton = screen.getByTestId('exec-search-btn');
    // Act
    userEvent.click(searchButton);
    // Assert
    expect(alert).toBeCalled();
    // expect(alert).toBeCalledWith('Search term not entered');
    alert.mockRestore();
  }); */
});
