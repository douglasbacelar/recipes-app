import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { fetchDetailsDrinksAPI, fetchRecommendationDrinks } from '../services/FoodsAPI';
import './Recipe.css';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DrinksRecipe() {
  const [isCopy, setIsCopy] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const routeTest = useRouteMatch();
  const id = history.location.pathname.replace('/drinks/', '');

  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };
  useEffect(() => {
    const fetchRecommend = async () => {
      const recommendation = await fetchRecommendationDrinks();
      setRecommend(await recommendation);
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
      setQuantity(filterQnt);
      setIngredients(filterIngredients);
      setRecipeDetails(returnApi.drinks[0]);
    };
    fetchAndFilterRecipe();
  }, [id]);

  console.log(routeTest);
  const { strDrinkThumb,
    strDrink, strInstructions, strYoutube, strAlcoholic } = recipeDetails;
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
          {ingredients.map((ingredient, index) => (
            <div key={ index }>
              <p data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${ingredient.name}`}
                {' '}
              </p>
            </div>
          ))}
          {quantity.map((qtd, index) => (
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
          {recommend.map((elem, index) => (
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
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/drinks/${id}/in-progress`) }
      >
        Start Recipe

      </button>
      {isCopy
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
          setIsCopy(true);
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
