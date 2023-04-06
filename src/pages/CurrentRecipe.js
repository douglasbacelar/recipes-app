import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function CurrentRecipe({ isCopy, setIsCopy, strType,
  strImage, strCategory, strInstructions, history, ingredients, quantity }) {
  return (
    <div>
      <div>
        {isCopy
          ? (
            <h1>
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
          style={ { position: 'fixed', bottom: '0px', left: '200px' } }
          data-testid="favorite-btn"
        >
          Favorite
        </button>
        <h1 data-testid="recipe-title">
          {' '}
          {strType}
          {' '}
        </h1>
        <img
          height={ 100 }
          width={ 100 }
          src={ strImage }
          alt={ strType }
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-category">{strCategory}</h1>
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
        <p data-testid="instructions">{strInstructions}</p>
        <button
          data-testid="finish-recipe-btn"
        >
          Finish Recipe
        </button>
      </div>
    </div>
  );
}

CurrentRecipe.propTypes = {
  isCopy: PropTypes.bool,
  setIsCopy: PropTypes.bool,
  strType: PropTypes.string,
  strCategory: PropTypes.string,
  strImage: PropTypes.string,
  strInstructions: PropTypes.string,
  history: PropTypes.string,
  ingredients: PropTypes.string,
  quantity: PropTypes.string,
}.isRequired;

export default CurrentRecipe;
