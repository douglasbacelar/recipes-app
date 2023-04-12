// Cria teste para cobrir 90% do componente RecipeDetails.js!

import React from 'react';
import { render, screen } from '@testing-library/react';
import RecipeDetails from '../components/RecipeDetails';

describe('Testa o componente RecipeDetails', () => {
  const recipeMock = {
    name: 'recipe 1',
    img: 'image 1',
    ingredients: ['ingredient 1', 'ingredient 2'],
    category: 'category 1',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    instructions: 'instructions 1',
  };
  const recipeMock2 = {
    name: 'recipe 2',
    img: 'image 2',
    ingredients: ['ingredient 1', 'ingredient 2'],
    category: 'category 2',
    video: '',
    instructions: 'instructions 2',
  };

  test('Testa se renderiza a foto e o video da receita selecionada!', () => {
    // Arrange
    render(
      <RecipeDetails
        { ...recipeMock }
      />,
    );
    // Act
    const recipePhoto = screen.getByTestId('recipe-photo');
    const recipeVideo = screen.getByTestId('video');
    // Assert
    expect(recipeVideo).toBeInTheDocument();
    expect(recipeVideo).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
    expect(recipeVideo).toHaveAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    expect(recipePhoto).toBeInTheDocument();
    expect(recipePhoto).toHaveAttribute('src', 'image 1');
    expect(recipePhoto).toHaveAttribute('alt', 'recipe 1');
  });

  it('Testa se não é renderizado um video caso a receita não tenha um video!', () => {
    // Arrange
    render(
      <RecipeDetails
        { ...recipeMock2 }
      />,
    );
    // Act
    const recipeVideo = document.querySelector('iframe');
    // Assert
    expect(recipeVideo).not.toBeInTheDocument();
  });
});
