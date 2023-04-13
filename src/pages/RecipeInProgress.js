import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipeInProgressCard from '../components/RecipeInProgressCard';
import ApiContext from '../context/ApiContext';

function RecipeInProgress() {
  const {
    recipeProgress,
    fetchRecipeProgress,
  } = useContext(ApiContext);
  const { id } = useParams();
  const { pathname } = useLocation();

  let path = 'thecocktaildb';
  let type = 'drinks';
  if (pathname.includes('meals')) {
    path = 'themealdb';
    type = 'meals';
  }

  useEffect(() => {
    fetchRecipeProgress(path, id, type);
  }, []);

  const getIngredients = (food) => {
    const ingredients = [];
    const max = 20;
    for (let i = 1; i <= max; i += 1) {
      if (food[`strIngredient${i}`]) {
        ingredients.push(`${food[`strMeasure${i}`]} - ${food[`strIngredient${i}`]}`);
      }
    }
    return ingredients;
  };

  const renderRecipe = () => {
    if (type === 'meals') {
      const { strCategory, strInstructions, strAlcoholic, strArea, strTags,
        strMealThumb, strMeal, idMeal } = recipeProgress;
      return (<RecipeInProgressCard
        image={ strMealThumb }
        name={ strMeal }
        id={ idMeal }
        type={ type }
        tags={ strTags }
        alcoholicOrNot={ strAlcoholic }
        nationality={ strArea }
        category={ strCategory }
        instructions={ strInstructions }
        ingredients={ getIngredients(recipeProgress) }
      />);
    } if (type === 'drinks') {
      const { strCategory, strInstructions, strAlcoholic, strArea, strTags,
        strDrinkThumb, strDrink, idDrink } = recipeProgress;
      return (<RecipeInProgressCard
        image={ strDrinkThumb }
        name={ strDrink }
        id={ idDrink }
        type={ type }
        tags={ strTags }
        alcoholicOrNot={ strAlcoholic }
        nationality={ strArea }
        category={ strCategory }
        instructions={ strInstructions }
        ingredients={ getIngredients(recipeProgress) }
      />);
    }
  };

  return (
    <div>
      {
        recipeProgress && renderRecipe()
      }
    </div>
  );
}

export default RecipeInProgress;
