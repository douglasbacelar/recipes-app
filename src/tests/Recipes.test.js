// Cria teste para cobrir 90% do componente Recipes.js!

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import Recipes from '../components/Recipes';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Testa o componente Recipes', () => {
  const mockRecipes = [
    { id: 0, title: 'Teste 0' },
    { id: 1, title: 'Teste 1' },
    { id: 2, title: 'Teste 2' },
  ];
  const mockCategory = 'all';
  const mockSetPathname = jest.fn();

  test('Testa se exibe os cartões de receita quando a categoria é All', async () => {
    // Arrange
    render(
      <ApiContext.Provider
        value={ {
          initialRecipes: mockRecipes,
          recipesByCategory: [],
          category: mockCategory,
          setPathname: mockSetPathname,
        } }
      >
        <MemoryRouter>
          <Recipes />
        </MemoryRouter>
      </ApiContext.Provider>,
    );
    // Act
    waitFor(() => {
      // Assert
      const recipeCards = screen.findAllById('recipe-card');
      expect(recipeCards).toHaveLength(3);
    });
  });

  test('Testa se exibe os cartões de receita quando a categoria é All', async () => {
    const mockRecipesByCategory = [
      { id: 0, title: 'Teste 0', category: 'category1' },
      { id: 1, title: 'Teste 1', category: 'category1' },
      { id: 2, title: 'Teste 2', category: 'category2' },
    ];
    const mockCategory1 = 'category1';
    // Arrange
    render(
      <ApiContext.Provider
        value={ {
          initialRecipes: [],
          recipesByCategory: mockRecipesByCategory,
          category: mockCategory1,
          setPathname: mockSetPathname,
        } }
      >
        <MemoryRouter>
          <Recipes />
        </MemoryRouter>
      </ApiContext.Provider>,
    );
    // Act
    waitFor(() => {
      // Assert
      const recipeCards = screen.findAllById('recipe-card');
      expect(recipeCards).toHaveLength(2);
    });
  });
});
