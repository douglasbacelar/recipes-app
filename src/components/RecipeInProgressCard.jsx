import React from 'react';
import PropTypes from 'prop-types';
import BtnDoneRecipe from './BtnDoneRecipe';
import FavBtn from './FavBtn';
import ShareBtn from './ShareBtn';

function RecipeInProgressCard({ name, id, alcoholic, ingredients, category,
  instructions, nationality, tags, image, type }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={ () => console.log(ingredients) }
      >
        Dark
      </button>
      <div>
        <img data-testid="recipe-photo" src={ image } alt={ name } />
        <h1 data-testid="recipe-title">{name}</h1>
        <small data-testid="recipe-category">{category}</small>
        <p data-testid="instructions">{instructions}</p>
      </div>
      <BtnDoneRecipe
        id={ id }
        type={ type }
        nationality={ nationality }
        category={ category }
        alcoholic={ alcoholic }
        name={ name }
        image={ image }
        tags={ tags }
      />
      <FavBtn
        id={ id }
        type={ type }
        nationality={ nationality }
        category={ category }
        alcoholic={ alcoholic }
        name={ name }
        image={ image }
      />
      <ShareBtn />
    </div>
  );
}

RecipeInProgressCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  alcoholic: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeInProgressCard;
