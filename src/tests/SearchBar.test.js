import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderProvider from '../providers/HeaderProvider';
import LoginProvider from '../providers/LoginProvider';
import ApiProvider from '../providers/ApiProvider';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';

describe('Testa o componente SearchBar.js', () => {
  beforeAll(() => {
    global.alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Meals />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'y');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId('0-card-img');
      const fristCardName = screen.findByTestId('0-card-name');
      expect(fristImg).toBe('https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg');
      expect(fristCardName).toBe('Yaki Udon');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Meals />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('name-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'corba');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId('recipe-title');
      const recipeImg = screen.findByTestId('recipe-photo');
      expect(recipeImg).toBe('https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
      expect(recipeTlt.innerHTML).toBe('Corba');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Meals />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('ingredient-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'Orange Zest');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId('recipe-title');
      const recipeImg = screen.findByTestId('recipe-photo');
      expect(recipeImg).toBe('https://www.themealdb.com/images/media/meals/wwuqvt1487345467.jpg');
      expect(recipeTlt.innerHTML).toBe('Osso Buco alla Milanese');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Drinks />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('name-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'a1');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId('recipe-title');
      const recipeImg = screen.findByTestId('recipe-photo');
      expect(recipeImg).toBe('https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg');
      expect(recipeTlt.innerHTML).toBe('A1');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Drinks />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, '4');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId('0-card-img');
      const fristCardName = screen.findByTestId('0-card-name');
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg');
      expect(fristCardName).toBe('410 Gone');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Drinks />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('name-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, '6');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId('0-card-img');
      const fristCardName = screen.findByTestId('0-card-name');
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg');
      expect(fristCardName).toBe('69 Special');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Drinks />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('ingredient-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'Limeade');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId('0-card-img');
      const fristCardName = screen.findByTestId('0-card-name');
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg');
      expect(fristCardName).toBe('Vodka Fizz');
    });
  });
  test('testa se ao pesquisar com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Meals />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId('search-input');
    const searchButton2 = screen.getByTestId('exec-search-btn');
    const firstLetter = screen.getByTestId('first-letter-search-radio');
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'Limeade');
    userEvent.click(searchButton2);
    // Assert
    expect(global.alert).toHaveBeenCalledTimes(1);
    waitFor(() => {
      const fristImg = screen.findByTestId('0-card-img');
      const fristCardName = screen.findByTestId('0-card-name');
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg');
      expect(fristCardName).toBe('Vodka Fizz');
    });
  });
});
// expect(global.alert).toHaveBeenCalledTimes(1);
