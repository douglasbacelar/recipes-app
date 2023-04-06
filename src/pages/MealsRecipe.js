import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchDetailsFoodAPI, fetchRecommendationMeals } from '../services/FoodsAPI';
import RecipeContext from '../context/RecipeContext';
import './Recipe.css';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function MealsRecipe() {
  const [isInProgress, setIsInProgress] = useState(false);
  const {
    isCopyMeals,
    setIsCopyMeals,
    recipeDetailsMeals,
    setRecipeDetailsMeals,
    recommendMeals,
    setRecommendMeals,
    quantityMeals,
    setQuantityMeals,
    ingredientsMeals,
    setIngredientsMeals,
  } = useContext(RecipeContext);

  const history = useHistory();
  const id = history.location.pathname.replace('/meals/', '');

  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };

  const handleClick = () => {
    const { pathname } = history.location;
    const recipeType = pathname.includes('meals') ? 'meals' : 'drinks';
    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes')) || { meals: {}, drinks: {} };
    inProgressRecipes[recipeType][id] = ingredientsMeals;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    history.push(`/meals/${id}/in-progress`);
  };

  useEffect(() => {
    const checkIdLocalStorage = () => {
      const { pathname } = history.location;
      const recipeType = pathname.includes('meals') ? 'meals' : 'drinks';
      const inProgressRecipes = JSON.parse(localStorage
        .getItem('inProgressRecipes')) || { meals: {}, drinks: {} };
      if (id in inProgressRecipes[recipeType]) {
        setIsInProgress(true);
      }
    };
    checkIdLocalStorage();
    const fetchRecommend = async () => {
      const recommendation = await fetchRecommendationMeals();
      setRecommendMeals(await recommendation);
    };
    fetchRecommend();
    const fetchAndFilterRecipe = async () => {
      const returnApi = await fetchDetailsFoodAPI(id);
      const filterIngredients = Object.entries(returnApi.meals[0])
        .filter(([key, value]) => key.includes('strIngredient') && value)
        .map(([key, value]) => ({ name: value, key }));
      const filterQnt = Object.entries(returnApi.meals[0])
        .filter(([key, value]) => key.includes('strMeasure') && value)
        .map(([key, value]) => ({ name: value, key }));
      setQuantityMeals(filterQnt);
      setIngredientsMeals(filterIngredients);
      setRecipeDetailsMeals(returnApi.meals[0]);
    };
    fetchAndFilterRecipe();
  }, [id, setIngredientsMeals, setQuantityMeals, history.location,
    setRecipeDetailsMeals, setRecommendMeals]);

  const { strMealThumb,
    strMeal, strCategory, strInstructions, strYoutube } = recipeDetailsMeals;
  return (
    <>
      <h1>MealsRecipe</h1>
      <div>
        <img
          height={ 100 }
          width={ 100 }
          src={ strMealThumb }
          alt={ strMeal }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          {' '}
          {strMeal}
          {' '}
        </h1>
        {ingredientsMeals.map((ingredient, index) => (
          <div key={ index }>
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient.name}  ${quantityMeals[index].name}`}
              {' '}
            </p>
          </div>
        ))}
        <h1 data-testid="recipe-category">{strCategory}</h1>
        <p data-testid="instructions">{strInstructions}</p>
        { strYoutube ? (
          <iframe
            data-testid="video"
            width="300"
            height="250"
            src={ `https://www.youtube.com/embed/${strYoutube.replace('https://www.youtube.com/watch?v=', '')}` }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
            allowFullScreen
            title={ strMeal }
          />
        ) : ''}
      </div>
      <p>Recommend:</p>
      <div className="carouselFather">
        {recommendMeals.map((elem, index) => (
          <div
            className="carouselChildren"
            key={ index }
            data-testid={ `${index}-recommendation-card` }
          >
            <p data-testid={ `${index}-recommendation-title` }>{elem.strDrink}</p>
            <img
              width="180"
              height="150"
              src={ elem.strDrinkThumb }
              alt={ elem.strDrink }
            />
          </div>
        ))}
      </div>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        onClick={ () => handleClick() }
        data-testid="start-recipe-btn"
      >
        {
          isInProgress ? 'Continue Recipe' : 'Start Recipe'
        }
      </button>

      {isCopyMeals
        ? (
          <h1
            style={ pStyle }
          >
            Link copied!

          </h1>) : ''}
      <button
        style={ { position: 'fixed', bottom: '0px', left: '300px' } }
        data-testid="share-btn"
        onClick={ () => {
          copy(`http://localhost:3000${history.location.pathname}`);
          setIsCopyMeals(true);
        } }
      >
        <img src={ shareIcon } alt="botão de compartilhar" />
      </button>

      <button
        style={ { position: 'fixed', bottom: '0px', left: '200px' } }
        data-testid="favorite-btn"
      >
        Favorite
      </button>
    </>
  );
}

export default MealsRecipe;
