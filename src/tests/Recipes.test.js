// Cria teste para cobrir 90% do componente Recipes.js!

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Recipes from '../components/Recipes';

describe('Testa o componente Recipes.jsx', () => {
  const foodMock = [
    {
      name: 'corba',
      ingredients: ['iii 1', 'iii 2'],
      preparation: 'ppp 1',
      image: 'image 0',
      type: 'ttt 0',
    },
    {
      name: 'banana',
      ingredients: ['iii 3', 'iii 4'],
      preparation: 'ppp 2',
      image: 'image 1',
      type: 'ttt 1',
    },
  ];

  const typeMock = {
    str: 'name',
    thumb: 'image',
    path: 'recipes',
    id: 0,
  };

  const historyMock = {
    push: jest.fn(),
  };

  test('Testa se o componente é renderizado corretamente!', () => {
    // Arrange
    render(
      <Recipes
        food={ foodMock }
        type={ typeMock }
        history={ historyMock }
      />,
    );
    // Act
    const recipeCard = screen.getByTestId('0-recipe-card');
    // Assert
    expect(recipeCard).toBeInTheDocument();
  });
  test('Testa se o clicar em alguma receita o usuario é redirecionado para a pagina de detalhes da receita!', async () => {
    const history = createMemoryHistory();
    // Arrange
    render(
      <Router history={ history }>
        <Recipes
          food={ foodMock }
          type={ typeMock }
        />
      </Router>,
    );
    // Act
    await waitFor(() => {
      const recipeCard = screen.getByTestId('0-recipe-card');
      userEvent.click(recipeCard);
      // Assert
      expect(history.location.pathname).toBe('/recipes/undefined');
    });
  });
});
