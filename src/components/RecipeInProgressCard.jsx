import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CheckboxIngredients from './Checkbox';
import FavBtn from './FavBtn';
import ShareBtn from './ShareBtn';
import BtnDoneRecipe from './BtnDoneRecipe';
import ApiContext from '../context/ApiContext';

function RecipeInProgressCard({ name, image, category,
  tags,
  instructions, ingredients, id, type, nationality, alcoholicOrNot }) {
  const { isCopy, selectedIngredients } = useContext(ApiContext);
  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };
  const isDisable = ingredients?.length === selectedIngredients?.length;
  return (
    <div>
      { isCopy && <h1 style={ pStyle }>Link copied!</h1> }
      <button
        type="button"
        className="btn btn-dark"
        onClick={ () => console.log(ingredients, selectedIngredients) }
      >
        Dark
      </button>
      <div>
        <img data-testid="recipe-photo" src={ image } alt={ name } />
        <h1 data-testid="recipe-title">{name}</h1>
        <small data-testid="recipe-category">{category}</small>
        <div>
          <CheckboxIngredients
            ingredients={ ingredients }
          />
        </div>
        <p data-testid="instructions">{instructions}</p>
      </div>
      <FavBtn
        id={ id }
        type={ type }
        nationality={ nationality }
        alcoholicOrNot={ alcoholicOrNot }
        category={ category }
        name={ name }
        image={ image }
      />
      <ShareBtn />
      <BtnDoneRecipe
        id={ id }
        type={ type }
        nationality={ nationality }
        alcoholicOrNot={ alcoholicOrNot }
        category={ category }
        name={ name }
        image={ image }
        isDisable={ !isDisable }
        tags={ tags }
      />
    </div>
  );
}

RecipeInProgressCard
  .propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default RecipeInProgressCard;
