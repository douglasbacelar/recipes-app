import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Recipes({ food, type }) {
  const { str, thumb, path, id } = type;
  const sliceCards = 12;
  const history = useHistory();
  return (
    <div>
      {
        food?.slice(0, sliceCards).map((recipe, index) => (
          <button
            style={ { width: '200px', height: '200px' } }
            data-testid={ `${index}-recipe-card` }
            key={ index }
            onClick={ () => history.push(`/${path}/${recipe[id]}`) }
          >
            <h1 data-testid={ `${index}-card-name` }>
              {recipe[str]}
            </h1>
            <img
              width={ 75 }
              height={ 75 }
              data-testid={ `${index}-card-img` }
              src={ recipe[thumb] }
              alt={ recipe[str] }
            />
          </button>
        ))
      }
    </div>
  );
}

Recipes.propTypes = {
  food: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  type: PropTypes.shape({
    str: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Recipes;
