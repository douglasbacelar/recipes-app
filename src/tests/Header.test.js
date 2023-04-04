// Cria teste para cobrir 90% do componente Header.js!

import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import FavRecepies from '../pages/FavRecepies';
import DoneRecipes from '../pages/DoneRecipes';
import Profile from '../pages/Profile';
import HeaderProvider from '../providers/HeaderProvider';

describe('Testa o componentes do Header.js.', () => {
  const page = 'page-title';
  test('Testa se ao clicar no icone de Pesquisar, é redirecionado para a pagina Profile', () => {
    // Arrange
    render(
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const profileIcon = screen.getByTestId('profile-top-btn');
    userEvent.click(profileIcon);
    const profileText = screen.getByTestId(page);
    // Assert
    expect(profileText).toBeInTheDocument();
  });
  test('Teste se ao clicar no botão de Search é mostrado o input para pesquisar e ao clicar mais uma vez o input desaparece', () => {
    // Arrange
    render(
      <HeaderProvider>
        <Meals />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const searchIcon = screen.getByTestId('search-top-btn');
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    // Assert
    expect(searchInput).toBeInTheDocument();
    // Act
    userEvent.click(searchIcon);
    // Assert
    expect(searchInput).not.toBeInTheDocument();
  });
  test('Teste se a pagina Profile contem os elementos corretos', () => {
    // Arrange
    render(
      <HeaderProvider>
        <Profile />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const profileText = screen.getByTestId(page);
    // Assert
    expect(profileText).toBeInTheDocument();
  });
  test('Teste se a pagina Drinks contem os elementos corretos', () => {
    // Arrange
    render(
      <HeaderProvider>
        <Drinks />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const drinksText = screen.getByTestId(page);
    // Assert
    expect(drinksText).toBeInTheDocument();
  });
  test('Teste se a pagina Done Recipes contem os elementos corretos', () => {
    // Arrange
    render(
      <HeaderProvider>
        <DoneRecipes />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const DoneRecipesText = screen.getByTestId(page);
    // Assert
    expect(DoneRecipesText).toBeInTheDocument();
  });
  test('Teste se a pagina Favorite Recipes contem os elementos corretos', () => {
    // Arrange
    render(
      <HeaderProvider>
        <FavRecepies />
      </HeaderProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const FavRecepiesText = screen.getByTestId(page);
    // Assert
    expect(FavRecepiesText).toBeInTheDocument();
  });
});
