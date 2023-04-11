/* // Cria teste para cobrir 90% do componente RecipeCard.js!

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Recipes from '../components/Recipes';

describe('RecipeCard component', () => {
  const recipeMock = {
    strMeal: 'Spaghetti Carbonara',
    strDrink: 'Margarita',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    idMeal: '52771',
    idDrink: '11007',
  };

  test('Testa se renderiza o nome e a imagem correta na rota /meals.', async () => {
    render(
      <BrowserRouter>
        <Recipes index={ 1 } recipe={ recipeMock } pathname="/meals" />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const recipeName = screen.getAllByTestId('1-card-name');
      expect(recipeName[0]).toBeInTheDocument();
      expect(recipeName[0]).toHaveTextContent('Spaghetti Carbonara');
      const recipeImage = screen.getAllByTestId('1-card-img');
      expect(recipeImage[0]).toBeInTheDocument();
      expect(recipeImage[0]).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg');
    });
  });
  test('Testa se renderiza o nome e a imagem correta na rota /drinks.', async () => {
    render(
      <BrowserRouter>
        <Recipes index={ 1 } recipe={ recipeMock } pathname="/drinks" />
      </BrowserRouter>,
    );
    await waitFor(() => {
      const recipeName = screen.getAllByTestId('1-card-name');
      expect(recipeName[0]).toBeInTheDocument();
      expect(recipeName[0]).toHaveTextContent('Margarita');
      const recipeImage = screen.getAllByTestId('1-card-img');
      expect(recipeImage[0]).toBeInTheDocument();
      expect(recipeImage[0]).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg');
    });
  });
  test('Testa se ao clicar no recipe card o usuario é redirecionado para a rota /meals/id com o id correto.', async () => {
    const historyMock = { push: jest.fn() };
    render(
      <BrowserRouter>
        <Recipes index={ 1 } recipe={ recipeMock } pathname="/meals" history={ historyMock } />
      </BrowserRouter>,
    );
    waitFor(() => {
      const Recipe = screen.getByTestId('1-recipe-card');
      userEvent.click(Recipe);
      expect(historyMock.push).toHaveBeenCalledTimes(1);
      expect(historyMock.push).toHaveBeenCalledWith('/meals/52771');
    });
  });
  test('Testa se ao clicar no recipe card o usuario é redirecionado para a rota /drinks/id com o id correto.', async () => {
    const historyMock = { push: jest.fn() };
    render(
      <BrowserRouter>
        <Recipes index={ 1 } recipe={ recipeMock } pathname="/drinks" history={ historyMock } />
      </BrowserRouter>,
    );
    waitFor(() => {
      const Recipe = screen.getByTestId('1-recipe-card');
      userEvent.click(Recipe);
      expect(historyMock.push).toHaveBeenCalledTimes(1);
      expect(historyMock.push).toHaveBeenCalledWith('/drinks/11007');
    });
  });
});
 */
