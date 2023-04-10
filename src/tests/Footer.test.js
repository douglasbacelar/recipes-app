import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderProvider from '../provider/HeaderProvider';
// import ApiProvider from '../providers/ApiProvider';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';

describe('Testa o componente Footer.js', () => {
  test('Testa se renderiza um Footer ao entrar na pagina Meal', async () => {
    // Arrange
    render(

      <HeaderProvider>

        <Meals />

      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const MealsBtn = screen.getByTestId('meals-bottom-btn');
    const DrinksBtn = screen.getByTestId('drinks-bottom-btn');
    // Assert
    expect(MealsBtn).toBeInTheDocument();
    expect(DrinksBtn).toBeInTheDocument();
    // Act
    userEvent.click(DrinksBtn);
    // Assert
    waitFor(() => {
      const DrinksTitle = screen.findByTestId('page-title');
      expect(DrinksTitle.innerHTML).toBe('Drinks');
    });
  });
  test('Testa se renderiza um Footer ao entrar na pagina Meal', async () => {
    // Arrange
    render(

      <HeaderProvider>

        <Drinks />

      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const MealsBtn = screen.getByTestId('meals-bottom-btn');
    const DrinksBtn = screen.getByTestId('drinks-bottom-btn');
    // Assert
    expect(MealsBtn).toBeInTheDocument();
    expect(DrinksBtn).toBeInTheDocument();
    // Act
    userEvent.click(MealsBtn);
    // Assert
    waitFor(() => {
      const MealssTitle = screen.findByTestId('page-title');
      expect(MealssTitle.innerHTML).toBe('Meals');
    });
  });
});
