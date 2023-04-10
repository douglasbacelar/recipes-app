import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipeContext';
import { fetchDetailsDrinksAPI, fetchRecommendationDrinks } from '../services/FoodsAPI';
import './Recipe.css';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DrinksRecipe() {
  const [isInProgress, setIsInProgress] = useState(false);
  const {
    isCopyDrinks,
    setIsCopyDrinks,
    recipeDetailsDrinks,
    setRecipeDetailsDrinks,
    recommendDrinks,
    setRecommendDrinks,
    quantityDrinks,
    setQuantityDrinks,
    ingredientsDrinks,
    setIngredientsDrinks,
    setinstructionsDrinks,
  } = useContext(RecipeContext);
  const history = useHistory();
  const id = history.location.pathname.replace('/drinks/', '');

  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };

  const handleClick = () => {
    const { pathname } = history.location;
    const recipeType = pathname.includes('meals') ? 'meals' : 'drinks';
    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes')) || { meals: {}, drinks: {} };
    inProgressRecipes[recipeType][id] = ingredientsDrinks;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    history.push(`/drinks/${id}/in-progress`);
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
      const recommendation = await fetchRecommendationDrinks();
      setRecommendDrinks(await recommendation);
    };
    fetchRecommend();
    const fetchAndFilterRecipe = async () => {
      const returnApi = await fetchDetailsDrinksAPI(id);
      const filterIngredients = Object.entries(returnApi.drinks[0])
        .filter(([key, value]) => key.includes('strIngredient') && value)
        .map(([key, value]) => ({ name: value, key }));
      const filterQnt = Object.entries(returnApi.drinks[0])
        .filter(([key, value]) => key.includes('strMeasure') && value)
        .map(([key, value]) => ({ name: value, key }));
      setQuantityDrinks(filterQnt);
      setIngredientsDrinks(filterIngredients);
      setRecipeDetailsDrinks(returnApi.drinks[0]);
    };
    fetchAndFilterRecipe();
  }, [id, setIngredientsDrinks, setQuantityDrinks, history.location,
    setRecommendDrinks, setRecipeDetailsDrinks]);

  const { strDrinkThumb,
    strDrink, strInstructions, strYoutube, strAlcoholic } = recipeDetailsDrinks;
  setinstructionsDrinks(strInstructions);
  return (
    <>
      <h1>DrinksRecipe</h1>
      <div>
        <img
          height={ 100 }
          width={ 100 }
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          {' '}
          {strDrink}
          {' '}
        </h1>
        <div>
          {ingredientsDrinks.map((ingredient, index) => (
            <div key={ index }>
              <p data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${ingredient.name}`}
                {' '}
              </p>
            </div>
          ))}
          {quantityDrinks.map((qtd, index) => (
            <div key={ index }>
              <p data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${qtd.name}`}
                {' '}
              </p>
            </div>
          ))}
        </div>
        <h1 data-testid="recipe-category">{strAlcoholic}</h1>
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
            title={ strDrink }
          />
        ) : ''}
        <p>Recommend:</p>
        <div className="carouselFather">
          {recommendDrinks.map((elem, index) => (
            <div
              className="carouselChildren"
              key={ index }
              data-testid={ `${index}-recommendation-card` }
            >
              <p data-testid={ `${index}-recommendation-title` }>{elem.strMeal}</p>
              <img
                width="180"
                height="150"
                src={ elem.strMealThumb }
                alt={ elem.strMeal }
              />
            </div>
          ))}
        </div>
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
      {isCopyDrinks
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
          setIsCopyDrinks(true);
        } }
      >
        <img src={ shareIcon } alt="botão de compartilhar" />
      </button>

      <button
        data-testid="favorite-btn"
        style={ { position: 'fixed', bottom: '0px', left: '200px' } }
      >
        Favorite
      </button>
    </>
  );
}

export default DrinksRecipe;
