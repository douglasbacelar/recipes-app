import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecipeInProgressCard from '../components/RecipeInProgressCard';
import ApiContext from '../context/ApiContext';

function RecipeProgress() {
  const { fetchRecipeDetails,
    recipeInprogress } = useContext(ApiContext);
  const { id } = useParams();
  const { pathname } = useLocation();
  const localStorageRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  let path = 'thecocktaildb';
  let type = 'drinks';
  if (pathname.includes('meals')) {
    path = 'themealdb';
    type = 'meals';
  }

  const ingredients = localStorageRecipes[type][id];

  useEffect(() => {
    fetchRecipeDetails(path, id, type);
  }, []);

  const recipeValid = recipeInprogress !== undefined;

  const renderRecipes = () => {
    if (recipeValid && type === 'meals') {
      const { strCategory, strInstructions, strAlcoholic, strArea, strTags,
        strMealThumb, strMeal, idMeal } = recipeInprogress;
      return (<RecipeInProgressCard
        name={ strMeal }
        id={ idMeal }
        alcoholic={ strAlcoholic }
        ingredients={ ingredients }
        category={ strCategory }
        instructions={ strInstructions }
        nationality={ strArea }
        tags={ strTags }
        image={ strMealThumb }
        type={ type }
      />);
    } if (recipeValid && type === 'drinks') {
      const { strCategory, strInstructions, strAlcoholic, strArea, strTags,
        strDrinkThumb, strDrink, idDrink } = recipeInprogress;
      return (<RecipeInProgressCard
        name={ strDrink }
        id={ idDrink }
        alcoholic={ strAlcoholic }
        ingredients={ ingredients }
        category={ strCategory }
        instructions={ strInstructions }
        nationality={ strArea }
        tags={ strTags }
        image={ strDrinkThumb }
        type={ type }
      />);
    }
  };

  return (
    <div>
      {
        recipeValid && renderRecipes()
      }
    </div>
  );
}

export default RecipeProgress;
