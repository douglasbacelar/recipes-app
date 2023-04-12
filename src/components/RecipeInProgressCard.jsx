import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import CheckboxIngredients from './Checkbox';
import FavBtn from './FavBtn';
import FinishBtn from './FinishBtn';
import ShareBtn from './ShareBtn';

function RecipeInProgressCard({ image, name, id, type, tags, alcoholicOrNot,
  nationality, category, instructions, ingredients }) {
  const { isCopy } = useContext(ApiContext);
  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };
  return (
    <div>
      { isCopy && <h1 style={ pStyle }>Link copied!</h1> }
      <section>
        <img src={ image } alt={ name } data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{name}</h1>
        <small data-testid="recipe-category">{category}</small>
        <p data-testid="instructions">{instructions}</p>
        <CheckboxIngredients
          ingredients={ ingredients }
        />
      </section>
      <FavBtn
        id={ id }
        type={ type }
        nationality={ nationality }
        category={ category }
        alcoholicOrNot={ alcoholicOrNot }
        name={ name }
        image={ image }
      />
      <ShareBtn />
      <FinishBtn
        tags={ tags }
      />
    </div>
  );
}

RecipeInProgressCard.propTypes = {
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
