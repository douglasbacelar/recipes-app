import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import HeaderProvider from '../providers/HeaderProvider';
import LoginProvider from '../providers/LoginProvider';
import ApiProvider from '../providers/ApiProvider';
import RecipeCard from '../components/RecipeCard';

afterEach(() => {
  cleanup(render);
});

describe('Testa o componente Recipes.js', () => {
  test('Testa se ao clicar em alguma receita na página Meals, o usuário é redirecionado para rota com o id correto', async () => {
    // Arrange
    const history = createMemoryHistory();
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <Router history={ history }>
              <RecipeCard />
            </Router>
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    await waitFor(() => {
      const recipeCard = screen.findByTestId('undefined-recipe-card');
      const recipeCardImg = screen.findByTestId('undefined-card-img');
      const recipeCardName = screen.findByTestId('undefined-card-name');
      // Assert
      expect(recipeCard).toBeInTheDocument();
      expect(recipeCardImg).toBeInTheDocument();
      expect(recipeCardName).toBeInTheDocument();
      userEvent.click(recipeCard);
      expect(history.location.pathname).toBe('/meals/52771');
    });
  });
});
