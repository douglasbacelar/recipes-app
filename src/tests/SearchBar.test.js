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
  const search = 'search-top-btn';
  const searchInputLint = 'search-input';
  const letter = 'first-letter-search-radio';
  const execSearch = 'exec-search-btn';
  const cardZero = '0-card-img';
  const recipeZero = '0-recipe-card';
  const recipeT = 'recipe-title';
  const recipeP = 'recipe-photo';
  const nameRadio = 'name-search-radio';
  beforeAll(() => {
    global.alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('testa se ao pesquisar pelo componente Meals com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const firstLetter = screen.getByTestId(letter);
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'y');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId(cardZero);
      const fristCardName = screen.findByTestId(recipeZero);
      expect(fristImg).toBe('https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg');
      expect(fristCardName).toBe('Yaki Udon');
    });
  });
  test('testa se ao pesquisar pelo componente Meals por um nome, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const NameRadio = screen.getByTestId(nameRadio);
    userEvent.click(NameRadio);
    userEvent.type(searchInput, 'corba');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId(recipeT);
      const recipeImg = screen.findByTestId(recipeP);
      expect(recipeImg).toBe('https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
      expect(recipeTlt.innerHTML).toBe('Corba');
    });
  });
  test('testa se ao pesquisar pelo componente Meals por um ingrediente, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const ingRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingRadio);
    userEvent.type(searchInput, 'Orange Zest');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId(recipeT);
      const recipeImg = screen.findByTestId(recipeP);
      expect(recipeImg).toBe('https://www.themealdb.com/images/media/meals/wwuqvt1487345467.jpg');
      expect(recipeTlt.innerHTML).toBe('Osso Buco alla Milanese');
    });
  });
  test('testa se ao pesquisar pelo componente Drinks por um nome, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const NameRadio = screen.getByTestId(nameRadio);
    userEvent.click(NameRadio);
    userEvent.type(searchInput, 'a1');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const recipeTlt = screen.findByTestId(recipeT);
      const recipeImg = screen.findByTestId(recipeP);
      expect(recipeImg).toBe('https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg');
      expect(recipeTlt.innerHTML).toBe('A1');
    });
  });
  test('testa se ao pesquisar pelo componente Drinks por uma letra, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const firstLetter = screen.getByTestId(letter);
    userEvent.click(firstLetter);
    userEvent.type(searchInput, '4');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId(cardZero);
      const fristCardName = screen.findByTestId(recipeZero);
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg');
      expect(fristCardName).toBe('410 Gone');
    });
  });
  test('testa se ao pesquisar pelo componente Drinks por um nome, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const NameRadio = screen.getByTestId(nameRadio);
    userEvent.click(NameRadio);
    userEvent.type(searchInput, '6');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId(cardZero);
      const fristCardName = screen.findByTestId(recipeZero);
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg');
      expect(fristCardName).toBe('69 Special');
    });
  });
  test('testa se ao pesquisar pelo componente Drinks por um ingrediente, o retorno da API é o correto!', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const ingRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingRadio);
    userEvent.type(searchInput, 'Limeade');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      const fristImg = screen.findByTestId(cardZero);
      const fristCardName = screen.findByTestId(recipeZero);
      expect(fristImg).toBe('https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg');
      expect(fristCardName).toBe('Vodka Fizz');
    });
  });
  test('testa se ao pesquisar por duas letras exibe um alert', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const firstLetter = screen.getByTestId(letter);
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'Limeade');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      expect(global.alert).toBeCalledWith('Your search must have only 1 (one) character');
    });
  });
  test('testa se ao pesquisar sem inserir nada no input search exibe um alert', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchButton2 = screen.getByTestId(execSearch);
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      expect(global.alert).toBeCalledWith('Search term not entered');
    });
  });
  test('testa se ao pesquisar por algum termo que não existe receitas é exibido um alert', async () => {
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
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const NameRadio = screen.getByTestId(nameRadio);
    userEvent.click(NameRadio);
    userEvent.type(searchInput, 'aaaaaa');
    userEvent.click(searchButton2);
    // Assert
    waitFor(() => {
      expect(global.alert).toBeCalledWith('Sorry, we haven\'t found any recipes for these filters.');
    });
  });
});
