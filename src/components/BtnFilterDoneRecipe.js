import React, { useContext } from 'react';
import { getDoneRecipes } from '../services/localStorageFunctions';
import ApiContext from '../context/ApiContext';

function BtnFilterDoneRecipe() {
  const { setFilterDone } = useContext(ApiContext);
  const localRecipes = getDoneRecipes();
  const handleClick = (type) => {
    if (type === 'all') {
      setFilterDone(localRecipes);
    } else {
      setFilterDone(localRecipes.filter((objeto) => objeto.type === type));
    }
  };
  return (
    <>
      <button
        onClick={ () => handleClick('all') }
        data-testid="filter-by-all-btn"
      >
        All

      </button>
      <button
        data-testid="filter-by-meal-btn"
        onClick={ () => handleClick('meal') }
      >
        Meals
      </button>
      <button
        onClick={ () => handleClick('drink') }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </>
  );
}

export default BtnFilterDoneRecipe;
