import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Recipes({ food, type }) {
  const { str, thumb, path, id } = type;
  const sliceCards = 12;
  const history = useHistory();
  return (
    <div className="mt-8 flex flex-wrap justify-evenly mb-20">
      {
        food?.slice(0, sliceCards).map((recipe, index) => (
          <div
            className="relative z-0"
            key={ index }
          >
            <div className="my-6 z-0">
              <button
                className="my-6 z-0"
                data-testid={ `${index}-recipe-card` }
                onClick={ () => history.push(`/${path}/${recipe[id]}`) }
              >
                <img
                  className="rounded-md  w-36"
                  data-testid={ `${index}-card-img` }
                  src={ recipe[thumb] }
                  alt={ recipe[str] }
                />
                <div
                  className="absolute bottom-2 bg-white/75 w-36 pb-4
                  flex flex-column"
                >
                  <span
                    data-testid={ `${index}-card-name` }
                    className="font-bold text-stone-800 pl-2"
                  >
                    {recipe[str]}
                  </span>

                  <span
                    data-testid={ `${index}-card-name` }
                    className="font-bold text-stone-800 pl-2"
                  >
                    {recipe.strArea}
                  </span>
                </div>
              </button>
            </div>
          </div>
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
