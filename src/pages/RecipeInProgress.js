import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';

import CurrentRecipe from './CurrentRecipe';

function RecipeInProgress() {
  const {
    isCopyMeals,
    setIsCopyMeals,
    recipeDetailsMeals,
    ingredientsMeals,
    quantityMeals,
    isCopyDrinks,
    setIsCopyDrinks,
    recipeDetailsDrinks,
    instructionsDrinks,
    ingredientsDrinks,
    quantityDrinks,
  } = useContext(RecipeContext);
  const history = useHistory();
  const location = history.location.pathname;
  const typeLocation = location.split('/')[1];

  const { strMealThumb,
    strMeal, strCategory, strInstructions } = recipeDetailsMeals;

  const { strDrinkThumb, strAlcoholic, strDrink } = recipeDetailsDrinks;
  return (
    <div>
      { typeLocation === 'meals' ? (
        <CurrentRecipe
          isCopy={ isCopyMeals }
          setIsCopy={ setIsCopyMeals }
          strType={ strMeal }
          strImage={ strMealThumb }
          strCategory={ strCategory }
          strInstructions={ strInstructions }
          history={ history }
          ingredients={ ingredientsMeals }
          quantity={ quantityMeals }
        />
      ) : (
        <CurrentRecipe
          isCopy={ isCopyDrinks }
          setIsCopy={ setIsCopyDrinks }
          strType={ strDrink }
          strImage={ strDrinkThumb }
          strCategory={ strAlcoholic }
          strInstructions={ instructionsDrinks }
          history={ history }
          ingredients={ ingredientsDrinks }
          quantity={ quantityDrinks }
        />
      )}
    </div>
  );
}

export default RecipeInProgress;
