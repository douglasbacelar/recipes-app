// Cria teste para cobrir 90% do componente Header.js!

import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Meals from '../pages/Meals';
import Drinks from '../pages/Drinks';
import FavRecipes from '../pages/FavRecipes';
import DoneRecipes from '../pages/DoneRecipes';
import HeaderProvider from '../providers/HeaderProvider';
import LoginProvider from '../providers/LoginProvider';
import ApiProvider from '../providers/ApiProvider';

describe('Testa o componentes do Header.js.', () => {
  const page = 'page-title';
  const profileIconBtn = 'profile-top-btn';
  test('Testa se ao clicar no icone de Pesquisar, é redirecionado para a pagina Profile', () => {
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
    const profileIcon = screen.getByTestId(profileIconBtn);
    userEvent.click(profileIcon);
    const profileText = screen.getByTestId(page);
    // Assert
    expect(profileText).toBeInTheDocument();
  });
  test('Teste se ao clicar no botão de Search é mostrado o input para pesquisar e ao clicar mais uma vez o input desaparece', () => {
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
  test('Teste se a pagina Drinks contem os elementos corretos', () => {
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
    const drinksText = screen.getByTestId(page);
    // Assert
    expect(drinksText).toBeInTheDocument();
  });
  test('Teste se a pagina Done Recipes contem os elementos corretos', () => {
    // Arrange
    render(
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <DoneRecipes />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
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
      <ApiProvider>
        <HeaderProvider>
          <LoginProvider>
            <FavRecipes />
          </LoginProvider>
        </HeaderProvider>
      </ApiProvider>,
      { wrapper: BrowserRouter },
    );
    // Act
    const FavRecepiesText = screen.getByTestId(page);
    // Assert
    expect(FavRecepiesText).toBeInTheDocument();
  });
  test('Testa se ao clicar no icone de Search aparece a SearchBar para fazer pesquisa', () => {
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
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('exec-search-btn');
    const searchRadioIng = screen.getByTestId('ingredient-search-radio');
    const searchRadioName = screen.getByTestId('name-search-radio');
    const searchRadioLetter = screen.getByTestId('first-letter-search-radio');
    // Assert
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchRadioIng).toBeInTheDocument();
    expect(searchRadioName).toBeInTheDocument();
    expect(searchRadioLetter).toBeInTheDocument();
  });
  test('Testa se ao clicar no icone do Profile, é redirecionado para a rota /profile', () => {
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
    const profileIcon = screen.getByTestId(profileIconBtn);
    userEvent.click(profileIcon);
    const pageTitle = screen.getByTestId('page-title');
    // Assert
    expect(pageTitle).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
  });
});
