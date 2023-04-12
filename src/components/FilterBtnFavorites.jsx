import React from 'react';
import PropTypes from 'prop-types';

export default function FilterBtnFavorites({ setFilterFavorite }) {
  const getAllRecipes = () => {
    const result = localStorage.getItem('favoriteRecipes');
    if (result) {
      const newArr = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFilterFavorite(newArr);
    }
  };

  const typeFilter = (typeRecipe) => {
    const result = localStorage.getItem('favoriteRecipes');
    if (result) {
      const newArr = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const resultFilter = newArr.filter((recipe) => recipe.type === typeRecipe);
      // setTypeRecipes(resultFilter);
      setFilterFavorite(resultFilter);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ getAllRecipes }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
        onClick={ () => typeFilter('meal') }
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => typeFilter('drink') }
      >
        Drinks
      </button>
    </div>
  );
}

FilterBtnFavorites.propTypes = {
  setFilterFavorite: PropTypes.string.isRequired,
};
