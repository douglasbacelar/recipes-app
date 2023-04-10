// Cria teste para cobrir 90% do componente SearchBar.js!

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderProvider from '../provider/HeaderProvider';
// import LoginProvider from '../providers/LoginProvider';
// import ApiProvider from '../providers/ApiProvider';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import HeaderContext from '../context/HeaderContext';
import SearchBar from '../components/SearchBar';
import { fetchFoodsAPI, fetchDrinksAPI } from '../services/FoodsAPI';

jest.mock('../services/FoodsAPI');

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
  const ingRadio = 'ingredient-search-radio';
  const setEndPointAPI = jest.fn();
  const setTestAPI = jest.fn();
  const setName = jest.fn();
  beforeAll(() => {
    global.alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('testa se ao pesquisar pelo componente Meals com apenas uma letra pela opção first letter, o retorno da API é o correto!', async () => {
    // Arrange
    render(
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const ingRa = screen.getByTestId(ingRadio);
    userEvent.click(ingRa);
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
      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchButton = screen.getByTestId(search);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputLint);
    const searchButton2 = screen.getByTestId(execSearch);
    const ingRa = screen.getByTestId(ingRadio);
    userEvent.click(ingRa);
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
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
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
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
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
  test('Testa se ao chamar fetchDrinksAPI com os parâmetros corretos a rota é /meals', async () => {
    const mockApiResponse = {
      meals: [{ idMeal: 123 }],
    };

    fetchFoodsAPI.mockResolvedValueOnce(mockApiResponse);

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'spaghetti',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/meals'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const execSearchButton = screen.getByTestId(execSearch);
    userEvent.click(execSearchButton);
    // Assert
    expect(fetchFoodsAPI).toHaveBeenCalledWith('name', 'spaghetti');
  });
  test('Testa se ao chamar fetchDrinksAPI com os parâmetros corretos a rota é /drinks', async () => {
    const mockApiResponse = {
      drinks: [{ idDrink: 456 }],
    };

    fetchDrinksAPI.mockResolvedValueOnce(mockApiResponse);

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'mojito',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/drinks'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const execSearchButton = screen.getByTestId(execSearch);
    userEvent.click(execSearchButton);
    // Assert
    expect(fetchDrinksAPI).toHaveBeenCalledWith('name', 'mojito');
  });
  test('Testa se ao chamar fetchDrinksAPI com os parâmetros corretos a rota é redirecionada para /meals/52997', async () => {
    const mockApiResponse = {
      meals: [],
    };
    fetchFoodsAPI.mockResolvedValueOnce(mockApiResponse);
    const mockHistoryPush = jest.fn();

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'corba',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/meals'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const searchInput = screen.getByTestId(searchInputLint);
    const nameRadio1 = screen.getByTestId(nameRadio);
    const searchButton = screen.getByTestId(execSearch);
    userEvent.type(searchInput, { target: { value: 'corba' } });
    userEvent.click(nameRadio1);
    userEvent.click(searchButton);
    // Assert
    waitFor(() => {
      userEvent.click(execSearchButton);
      expect(fetchFoodsAPI).toHaveBeenCalledWith('name', 'corba');
      expect(mockHistoryPush).toHaveBeenCalledWith('/meals/52997');
    });
  });
  test('Testa se ao chamar fetchDrinksAPI com os parâmetros corretos a rota é /drinks.', async () => {
    const mockApiResponse = {
      drinks: [{ idDrink: 456 }],
    };

    fetchDrinksAPI.mockResolvedValueOnce(mockApiResponse);

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'mojito',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/drinks'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const execSearchButton = screen.getByTestId(execSearch);
    userEvent.click(execSearchButton);
    // Assert
    expect(fetchDrinksAPI).toHaveBeenCalledWith('name', 'mojito');
  });
  test('Testa se ao chamar fetchFoodsAPI com os parâmetros corretos a rota é redirecionada para /meals/52997', async () => {
    const mockApiResponse = {
      meals: [],
    };

    fetchFoodsAPI.mockResolvedValueOnce(mockApiResponse);
    const mockHistoryPush = jest.fn();

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'corba',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/meals'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const searchInput = screen.getByTestId(searchInputLint);
    const nameRadio1 = screen.getByTestId(nameRadio);
    const searchButton = screen.getByTestId(execSearch);
    userEvent.type(searchInput, { target: { value: 'corba' } });
    userEvent.click(nameRadio1);
    userEvent.click(searchButton);
    // Assert
    waitFor(() => {
      userEvent.click(execSearchButton);
      expect(fetchFoodsAPI).toHaveBeenCalledWith('name', 'corba');
      expect(mockHistoryPush).toHaveBeenCalledWith('/meals/52997');
    });
  });
  test('Testa se ao chamar fetchDrinksAPI com os parâmetros corretos a rota é redirecionada para /drinks/17222', async () => {
    const mockApiResponse = {
      drinks: [],
    };

    fetchDrinksAPI.mockResolvedValueOnce(mockApiResponse);
    const mockHistoryPush = jest.fn();

    // Arrange
    render(
      <HeaderContext.Provider
        value={ {
          endPointAPI: 'name',
          setEndPointAPI,
          setTestAPI,
          nameT: 'a1',
          setName,
        } }
      >
        <MemoryRouter initialEntries={ ['/drinks'] }>
          <SearchBar />
        </MemoryRouter>
      </HeaderContext.Provider>,
    );
    // Act
    const searchInput = screen.getByTestId(searchInputLint);
    const nameRadio1 = screen.getByTestId(nameRadio);
    const searchButton = screen.getByTestId(execSearch);
    userEvent.type(searchInput, { target: { value: 'a1' } });
    userEvent.click(nameRadio1);
    userEvent.click(searchButton);
    // Assert
    waitFor(() => {
      userEvent.click(execSearchButton);
      expect(fetchFoodsAPI).toHaveBeenCalledWith('name', 'a1');
      expect(mockHistoryPush).toHaveBeenCalledWith('/drinks/17222');
    });
  });
});
